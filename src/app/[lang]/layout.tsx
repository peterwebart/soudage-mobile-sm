import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { siteConfig } from "@/content/site-config";
import { htmlLang, isLocale, locales, type Locale } from "@/lib/i18n";
import { siteWideGraph } from "@/lib/schema";

/**
 * Locale-scoped root layout. Owns <html> so `lang` is correct per locale
 * (official Next.js i18n pattern). Includes Google Tag Manager (head + body
 * noscript), the site-wide JSON-LD @graph, fonts via <link>, and a no-JS class
 * toggle that keeps reveal-on-scroll animating while remaining accessible.
 */

const GTM_ID = "GTM-MK5X9M7T";

const GTM_HEAD = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

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

  const jsonLd = JSON.stringify(siteWideGraph(locale));

  return (
    <html lang={htmlLang[locale]} className="no-js" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager — as high in <head> as possible */}
        <script dangerouslySetInnerHTML={{ __html: GTM_HEAD }} />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.remove('no-js')",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_HREF} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      </head>
      <body>
        {/* Google Tag Manager (noscript) — immediately after opening <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
