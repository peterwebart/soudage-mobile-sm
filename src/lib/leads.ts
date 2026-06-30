import { z } from "zod";

import { locales } from "@/lib/i18n";

/**
 * Lead capture.
 *
 * The quote form works on day one with ZERO additional dependencies:
 *   1. Every validated lead is ALWAYS logged to the server console
 *      (visible in Coolify logs) — so a request is never lost.
 *   2. If RESEND_API_KEY is set, the lead is emailed via the Resend REST
 *      API (plain fetch, no SDK).
 *   3. If LEADS_WEBHOOK_URL is set, the full payload is POSTed as JSON to
 *      an automation endpoint (Make / Zapier / n8n / Slack).
 *
 * Phase 2 (Payload + Postgres, see /src/payload) adds durable DB storage
 * and binary attachment handling without changing this contract.
 */

export const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  company: z.string().trim().max(200).optional().default(""),
  phone: z.string().trim().min(3, "Phone is required").max(50),
  email: z.string().trim().email("A valid email is required").max(200),
  location: z.string().trim().max(200).optional().default(""),
  service: z.string().trim().max(200).optional().default(""),
  urgency: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().max(5000).optional().default(""),
  locale: z.enum(locales).default("fr"),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadAttachment = {
  name: string;
  size: number;
  type: string;
};

export type Lead = LeadInput & {
  attachments: LeadAttachment[];
  receivedAt: string;
};

function formatLeadText(lead: Lead): string {
  const lines = [
    `New quote request — Soudage Mobile SM`,
    `Received: ${lead.receivedAt}`,
    `Locale: ${lead.locale}`,
    ``,
    `Name:     ${lead.name}`,
    `Company:  ${lead.company || "—"}`,
    `Phone:    ${lead.phone}`,
    `Email:    ${lead.email}`,
    `Location: ${lead.location || "—"}`,
    `Service:  ${lead.service || "—"}`,
    `Urgency:  ${lead.urgency || "—"}`,
    ``,
    `Message:`,
    lead.message || "—",
  ];

  if (lead.attachments.length > 0) {
    lines.push(``, `Attachments (${lead.attachments.length}):`);
    for (const file of lead.attachments) {
      lines.push(`  • ${file.name} (${file.type || "unknown"}, ${file.size} bytes)`);
    }
  }

  return lines.join("\n");
}

async function sendViaResend(lead: Lead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return;

  // Recipient: the business inbox. Override per environment with LEADS_EMAIL_TO.
  const to = process.env.LEADS_EMAIL_TO?.trim() || "office@soudagemobile.ca";
  // Sender must be on a Resend-verified domain (soudagemobile.ca).
  const from =
    process.env.LEADS_EMAIL_FROM?.trim() || "Soudage Mobile SM <no-reply@soudagemobile.ca>";

  const subjectName = lead.company || lead.name;
  const urgencyTag = lead.urgency ? ` [${lead.urgency}]` : "";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      // Replies from the business inbox go straight to the customer.
      reply_to: lead.email,
      subject: `Quote request — ${subjectName}${urgencyTag}`,
      text: formatLeadText(lead),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend responded ${response.status}: ${detail}`);
  }
}

async function sendViaWebhook(lead: Lead): Promise<void> {
  const url = process.env.LEADS_WEBHOOK_URL?.trim();
  if (!url) return;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Webhook responded ${response.status}: ${detail}`);
  }
}

/**
 * Persist / forward a lead. Always resolves once the lead has been logged;
 * delivery-channel failures are logged but never thrown, so a transient
 * email/webhook outage cannot drop a captured lead or break the form.
 */
export async function saveLead(lead: Lead): Promise<void> {
  // 1. Durable record in server logs — the source of truth in v1.
  console.info("[lead] quote request received\n" + formatLeadText(lead));

  // 2. Best-effort delivery channels (run in parallel, isolated failures).
  const deliveries = await Promise.allSettled([sendViaResend(lead), sendViaWebhook(lead)]);

  for (const result of deliveries) {
    if (result.status === "rejected") {
      console.error("[lead] delivery channel failed:", result.reason);
    }
  }
}
