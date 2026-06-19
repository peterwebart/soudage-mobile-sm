import { NextResponse } from "next/server";

import { leadSchema, saveLead, type LeadAttachment } from "@/lib/leads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILES = 10;
const MAX_FILE_BYTES = 15 * 1024 * 1024; // 15 MB per file

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse({
    name: formData.get("name"),
    company: formData.get("company") ?? undefined,
    phone: formData.get("phone"),
    email: formData.get("email"),
    location: formData.get("location") ?? undefined,
    service: formData.get("service") ?? undefined,
    urgency: formData.get("urgency") ?? undefined,
    message: formData.get("message") ?? undefined,
    locale: formData.get("locale") ?? undefined,
  });

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  // Capture attachment metadata. Binary storage activates with Payload in
  // phase 2; for now the notification lists what the client attached.
  const attachments: LeadAttachment[] = [];
  for (const entry of formData.getAll("files")) {
    if (entry instanceof File && entry.size > 0) {
      if (entry.size > MAX_FILE_BYTES) {
        return NextResponse.json({ ok: false, error: "file_too_large" }, { status: 413 });
      }
      attachments.push({ name: entry.name, size: entry.size, type: entry.type });
      if (attachments.length >= MAX_FILES) break;
    }
  }

  try {
    await saveLead({
      ...parsed.data,
      attachments,
      receivedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[api/quote] failed to process lead:", error);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
