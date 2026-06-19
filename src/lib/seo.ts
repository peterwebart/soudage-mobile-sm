import type { Metadata } from "next";

import { meta } from "@/content/dictionary";
import { siteConfig, siteUrl } from "@/content/site-config";
import { htmlLang, type Locale } from "@/lib/i18n";

/**
 * Build per-locale page metadata: title, description, canonical, hreflang
 * alternates and Open Graph / Twitter cards. Driven entirely by the typed
 * content modules so the two locales stay in sync.
 */

const OG_IMAGE = "/media/hero-poster.jpg";

export function buildMetadata(locale: Locale): Metadata {
  const base = siteUrl();
  const canonical = `${base}/${locale}`;
  const ogImageUrl = `${base}${OG_IMAGE}`;

  return {
    metadataBase: new URL(base),
    title: meta.title[locale],
    description: meta.description[locale],
    applicationName: siteConfig.name,
    alternates: {
      canonical,
      languages: {
        "fr-CA": `${base}/fr`,
        "en-CA": `${base}/en`,
        "x-default": `${base}/fr`,
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: meta.ogTitle[locale],
      description: meta.description[locale],
      url: canonical,
      locale: htmlLang[locale].replace("-", "_"),
      images: [
        {
          url: ogImageUrl,
          width: 1672,
          height: 941,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.ogTitle[locale],
      description: meta.description[locale],
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
