import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SitePage } from "@/components/site/SitePage";
import { meta } from "@/content/dictionary";
import { generalFaqs } from "@/content/service-pages";
import { siteUrl } from "@/content/site-config";
import { isLocale, locales, t } from "@/lib/i18n";
import { faqPageNode, pageGraph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) {
    return {};
  }
  return buildMetadata(lang);
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }

  const base = siteUrl();
  const url = `${base}/${lang}`;
  const faqEntries = generalFaqs.map((f) => ({ question: t(f.q, lang), answer: t(f.a, lang) }));

  const graph = pageGraph([
    webPageNode({
      locale: lang,
      url,
      name: meta.title[lang],
      description: meta.description[lang],
      primaryImage: `${base}/media/hero-poster.jpg`,
      speakableSelectors: [".hero h1", ".hero-sub"],
    }),
    faqPageNode(faqEntries, `${url}#faq`),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <SitePage locale={lang} />
    </>
  );
}
