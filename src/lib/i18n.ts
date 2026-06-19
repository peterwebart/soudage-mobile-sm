/**
 * Internationalisation core.
 *
 * The site ships in two locales served on their own indexable routes:
 *   /fr  → French  (primary, Québec)
 *   /en  → English
 *
 * Content is authored as { fr, en } pairs (see /src/content) so the marketing
 * site renders statically without a database. The same typed content seeds the
 * CMS when Payload is activated (see /src/payload).
 */

export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

/** A single string available in every supported locale. */
export type LocaleString = Record<Locale, string>;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Resolve a localized value, falling back to the default locale. */
export function t(value: LocaleString, locale: Locale): string {
  return value[locale] ?? value[defaultLocale];
}

/** The opposite locale — used by the language switch. */
export function alternateLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}

/** BCP-47 tag for <html lang> and hreflang. */
export const htmlLang: Record<Locale, string> = {
  fr: "fr-CA",
  en: "en-CA",
};
