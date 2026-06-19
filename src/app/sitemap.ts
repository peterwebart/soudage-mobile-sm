import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/site-config";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const lastModified = new Date();

  return locales.map((lang) => ({
    url: `${base}/${lang}`,
    lastModified,
    changeFrequency: "monthly",
    priority: lang === "fr" ? 1 : 0.9,
    alternates: {
      languages: {
        "fr-CA": `${base}/fr`,
        "en-CA": `${base}/en`,
      },
    },
  }));
}
