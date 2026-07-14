import { ArcBand } from "@/components/site/ArcBand";
import { EmergencyBand } from "@/components/site/EmergencyBand";
import { Hero } from "@/components/site/Hero";
import { Industries } from "@/components/site/Industries";
import { Projects } from "@/components/site/Projects";
import { QuoteSection } from "@/components/site/QuoteSection";
import { ServiceArea } from "@/components/site/ServiceArea";
import { Services } from "@/components/site/Services";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StickyQuote } from "@/components/site/StickyQuote";
import { Trust } from "@/components/site/Trust";
import { UtilityBar } from "@/components/site/UtilityBar";
import { WhyUs } from "@/components/site/WhyUs";
import { Faq } from "@/components/site/Faq";
import { generalFaqs } from "@/content/service-pages";
import { t, type Locale } from "@/lib/i18n";

type SitePageProps = {
  locale: Locale;
};

/** The full one-page site for a single locale. */
export function SitePage({ locale }: SitePageProps) {
  return (
    <>
      <UtilityBar locale={locale} />
      <SiteHeader locale={locale} />
      <span id="top" />

      <main>
        <Hero locale={locale} />
        <div className="hazard" />
        <Services locale={locale} />
        <ArcBand locale={locale} />
        <WhyUs locale={locale} />
        <Industries locale={locale} />
        <Projects locale={locale} />
        <Trust locale={locale} />
        <ServiceArea locale={locale} />
        <Faq
          id="faq"
          kicker={t({ fr: "Questions fréquentes", en: "Frequently asked" }, locale)}
          title={t({ fr: "Foire aux questions", en: "Frequently asked questions" }, locale)}
          items={generalFaqs.map((f) => ({ question: t(f.q, locale), answer: t(f.a, locale) }))}
        />
        <QuoteSection locale={locale} />
        <EmergencyBand locale={locale} />
      </main>

      <SiteFooter locale={locale} />
      <StickyQuote locale={locale} />
    </>
  );
}
