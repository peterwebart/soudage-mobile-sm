import type { MetadataRoute } from "next";

import { servicePageHref, servicePages } from "@/content/service-pages";
import { siteUrl } from "@/content/site-config";
import { locales } from "@/lib/i18n";

/**
 * Sitemap for both locales: home + every service landing page, each with
 * hreflang alternates (fr-CA / en-CA) and its primary image. Adding a service
 * page in service-pages.ts adds it here automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of locales) {
    entries.push({
      url: `${base}/${lang}`,
      lastModified,
      changeFrequency: "monthly",
      priority: lang === "fr" ? 1 : 0.9,
      alternates: { languages: { "fr-CA": `${base}/fr`, "en-CA": `${base}/en` } },
      images: [`${base}/media/hero-poster.jpg`],
    });
  }

  for (const lang of locales) {
    for (const page of servicePages) {
      entries.push({
        url: `${base}${servicePageHref(page, lang)}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: {
            "fr-CA": `${base}${servicePageHref(page, "fr")}`,
            "en-CA": `${base}${servicePageHref(page, "en")}`,
          },
        },
        images: [`${base}${page.image.src}`],
      });
    }
  }

  return entries;
}
