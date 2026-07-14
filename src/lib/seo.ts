import type { Metadata } from "next";

import { meta } from "@/content/dictionary";
import type { ServicePage } from "@/content/service-pages";
import { servicePageHref } from "@/content/service-pages";
import { siteConfig, siteUrl } from "@/content/site-config";
import { htmlLang, type Locale } from "@/lib/i18n";

/**
 * Per-page metadata: unique title/description, canonical, hreflang alternates
 * (fr-CA / en-CA / x-default), Open Graph + Twitter cards. Icons and the web
 * manifest are provided by file conventions (app/icon.svg, app/apple-icon.png,
 * app/manifest.ts) and injected by Next automatically.
 */

const DEFAULT_OG = { url: "/media/hero-poster.jpg", width: 1672, height: 941 };

function ogLocale(locale: Locale): string {
  return htmlLang[locale].replace("-", "_"); // fr-CA -> fr_CA
}

function pageMetadata(opts: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  image?: { url: string; width: number; height: number; alt: string };
  languages: Record<string, string>;
  keywords?: string[];
}): Metadata {
  const base = siteUrl();
  const canonical = `${base}${opts.path}`;
  const other: Locale = opts.locale === "fr" ? "en" : "fr";
  const img = opts.image ?? { ...DEFAULT_OG, alt: siteConfig.name };
  const imageUrl = img.url.startsWith("http") ? img.url : `${base}${img.url}`;

  return {
    metadataBase: new URL(base),
    title: opts.title,
    description: opts.description,
    applicationName: siteConfig.name,
    keywords: opts.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical,
      languages: opts.languages,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: opts.ogTitle ?? opts.title,
      description: opts.description,
      url: canonical,
      locale: ogLocale(opts.locale),
      alternateLocale: ogLocale(other),
      images: [{ url: imageUrl, width: img.width, height: img.height, alt: img.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.ogTitle ?? opts.title,
      description: opts.description,
      images: [imageUrl],
    },
    appleWebApp: {
      capable: true,
      title: siteConfig.shortName,
      statusBarStyle: "black-translucent",
    },
    robots: { index: true, follow: true },
    other: { "og:see_also": siteConfig.social.facebook },
  };
}

/** Home page metadata for a locale. */
export function buildMetadata(locale: Locale): Metadata {
  const base = siteUrl();
  return pageMetadata({
    locale,
    path: `/${locale}`,
    title: meta.title[locale],
    description: meta.description[locale],
    ogTitle: meta.ogTitle[locale],
    languages: {
      "fr-CA": `${base}/fr`,
      "en-CA": `${base}/en`,
      "x-default": `${base}/fr`,
    },
  });
}

/** Service landing page metadata for a locale. */
export function buildServiceMetadata(page: ServicePage, locale: Locale): Metadata {
  const base = siteUrl();
  return pageMetadata({
    locale,
    path: servicePageHref(page, locale),
    title: page.metaTitle[locale],
    description: page.metaDescription[locale],
    ogTitle: page.h1[locale],
    keywords: page.keywords,
    image: {
      url: page.image.src,
      width: page.image.width,
      height: page.image.height,
      alt: page.image.alt[locale],
    },
    languages: {
      "fr-CA": `${base}${servicePageHref(page, "fr")}`,
      "en-CA": `${base}${servicePageHref(page, "en")}`,
      "x-default": `${base}${servicePageHref(page, "fr")}`,
    },
  });
}
