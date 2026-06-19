import { siteConfig, siteUrl } from "@/content/site-config";
import { t, type Locale } from "@/lib/i18n";

/**
 * LocalBusiness JSON-LD for rich results. Phone, email and address are
 * placeholders until `siteConfig.contactConfirmed` is true — the telephone
 * is only emitted once confirmed to avoid publishing an invalid number to
 * search engines.
 */
export function localBusinessSchema(locale: Locale): Record<string, unknown> {
  const base = siteUrl();

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: t(siteConfig.description, locale),
    url: `${base}/${locale}`,
    image: `${base}/media/hero-poster.jpg`,
    email: siteConfig.email,
    areaServed: t(siteConfig.area, locale),
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    knowsLanguage: ["fr-CA", "en-CA"],
    sameAs: [],
  };

  // Only publish a telephone once the real number is confirmed.
  if (siteConfig.contactConfirmed) {
    schema.telephone = siteConfig.phone.display;
  }

  return schema;
}
