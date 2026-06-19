import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { siteConfig } from "@/content/site-config";
import { htmlLang, isLocale, locales, type Locale } from "@/lib/i18n";
import { localBusinessSchema } from "@/lib/schema";

/**
 * Locale-scoped root layout. Because the whole site lives under /[lang], this
 * layout owns the <html> element so the `lang` attribute is correct per locale
 * (the official Next.js i18n pattern). Fonts load via a stylesheet <link>
 * (works without next/font's build-time fetch); an inline script removes the
 * `no-js` class so reveal-on-scroll animates while keeping a no-JS fallback.
 */

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Saira:wght@500;600;700;800;900&family=Saira+Condensed:wght@600;700&family=Barlow:wght@400;500;600;700&family=Barlow+Semi+Condensed:wght@500;600&display=swap";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#0E141F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: siteConfig.name,
};

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale: Locale = lang;

  const jsonLd = JSON.stringify(localBusinessSchema(locale));

  return (
    <html lang={htmlLang[locale]} className="no-js" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_HREF} />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.remove('no-js')",
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
