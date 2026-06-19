import type { LocaleString } from "@/lib/i18n";

/**
 * Single source of truth for company identity and contact details.
 *
 * ⚠ The phone, email and address below are PLACEHOLDERS carried over from the
 * design and must be confirmed before launch (the footer surfaces a visible
 * notice while `contactConfirmed` is false). Update here once and every
 * reference across the site — header, footer, schema, JSON-LD — updates.
 */

export const siteConfig = {
  /** Legal / display name. */
  name: "Soudage Mobile SM Inc.",
  shortName: "Soudage Mobile SM",
  monogram: "SM",

  tagline: {
    fr: "Soudage industriel · Inc.",
    en: "Industrial Welding · Inc.",
  } satisfies LocaleString,

  description: {
    fr: "Soudage mobile, réparation d'acier structural, fabrication sur mesure et interventions d'urgence pour clients industriels et commerciaux.",
    en: "Mobile welding, structural steel repair, custom fabrication and emergency services for industrial and commercial clients.",
  } satisfies LocaleString,

  /** Set to true once the details below are verified for production. */
  contactConfirmed: false,

  phone: {
    /** Human-readable, formatted for display. */
    display: "+1 (514) 000-0000",
    /** E.164-ish value for tel: links. */
    href: "tel:+15140000000",
  },

  email: "info@soudagemobilesm.ca",

  area: {
    fr: "Grand Montréal & Québec",
    en: "Greater Montreal & Quebec",
  } satisfies LocaleString,

  /** Used for LocalBusiness schema. */
  region: "QC",
  country: "CA",

  emergency: {
    fr: "Intervention d'urgence 24/7",
    en: "24/7 emergency response",
  } satisfies LocaleString,
} as const;

/** Resolve the canonical site origin (no trailing slash). */
export function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const fallback = "https://soudagemobilesm.ca";
  const url = raw && raw.length > 0 ? raw : fallback;
  return url.replace(/\/+$/, "");
}
