import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SitePage } from "@/components/site/SitePage";
import { isLocale, locales } from "@/lib/i18n";
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
  return <SitePage locale={lang} />;
}
