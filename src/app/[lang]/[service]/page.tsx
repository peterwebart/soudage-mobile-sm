import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceLandingPage } from "@/components/site/ServiceLandingPage";
import { getServicePageBySlug, servicePages } from "@/content/service-pages";
import { isLocale, locales } from "@/lib/i18n";
import { buildServiceMetadata } from "@/lib/seo";

// Only the known localized slugs are valid; anything else is a 404.
export const dynamicParams = false;

type PageProps = { params: Promise<{ lang: string; service: string }> };

export function generateStaticParams() {
  const params: { lang: string; service: string }[] = [];
  for (const lang of locales) {
    for (const page of servicePages) {
      params.push({ lang, service: page.slug[lang] });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, service } = await params;
  if (!isLocale(lang)) return {};
  const page = getServicePageBySlug(lang, service);
  if (!page) return {};
  return buildServiceMetadata(page, lang);
}

export default async function Page({ params }: PageProps) {
  const { lang, service } = await params;
  if (!isLocale(lang)) notFound();
  const page = getServicePageBySlug(lang, service);
  if (!page) notFound();
  return <ServiceLandingPage locale={lang} page={page} />;
}
