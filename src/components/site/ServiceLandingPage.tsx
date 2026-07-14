import Image from "next/image";
import Link from "next/link";

import { Faq } from "@/components/site/Faq";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StickyQuote } from "@/components/site/StickyQuote";
import { UtilityBar } from "@/components/site/UtilityBar";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/content/industries";
import { getServicePageByKey, servicePageHref, type ServicePage } from "@/content/service-pages";
import { siteConfig, siteUrl } from "@/content/site-config";
import { t, type Locale, type LocaleString } from "@/lib/i18n";
import { breadcrumbNode, faqPageNode, pageGraph, serviceNode, webPageNode } from "@/lib/schema";

const UI: Record<string, LocaleString> = {
  crumbHome: { fr: "Accueil", en: "Home" },
  crumbServices: { fr: "Services", en: "Services" },
  crumbLabel: { fr: "Fil d'Ariane", en: "Breadcrumb" },
  capsKicker: { fr: "Capacités", en: "Capabilities" },
  caps: { fr: "Ce que comprend le service", en: "What the service includes" },
  procKicker: { fr: "Notre approche", en: "Our approach" },
  proc: { fr: "Comment nous procédons", en: "How we work" },
  indKicker: { fr: "Secteurs", en: "Sectors" },
  ind: { fr: "Industries desservies", en: "Industries served" },
  faqKicker: { fr: "Questions fréquentes", en: "Frequently asked" },
  faq: { fr: "Foire aux questions", en: "Frequently asked questions" },
  relKicker: { fr: "Aussi offert", en: "Also offered" },
  rel: { fr: "Services connexes", en: "Related services" },
  ctaQuote: { fr: "Demander une soumission", en: "Request a quote" },
  ctaCall: { fr: "Appeler maintenant", en: "Call now" },
  ctaTitleQuote: { fr: "Prêt à démarrer votre projet ?", en: "Ready to start your project?" },
  ctaTitleCall: { fr: "Besoin d'une intervention immédiate ?", en: "Need immediate support?" },
  ctaBodyQuote: {
    fr: "Obtenez une soumission claire, avec une portée définie avant le début des travaux.",
    en: "Get a clear quote, with a defined scope before work begins.",
  },
  ctaBodyCall: {
    fr: "Service d'urgence sur appel 24/7 — réduisez vos temps d'arrêt.",
    en: "24/7 on-call emergency service — reduce your downtime.",
  },
};

export function ServiceLandingPage({ locale, page }: { locale: Locale; page: ServicePage }) {
  const base = siteUrl();
  const path = servicePageHref(page, locale);
  const url = `${base}${path}`;
  const emergency = page.ctaKind === "emergency";

  const crumbs: Crumb[] = [
    { name: t(UI.crumbHome, locale), href: `/${locale}` },
    { name: t(UI.crumbServices, locale), href: `/${locale}#services` },
    { name: t(page.kicker, locale), href: path },
  ];

  const faqEntries = page.faqs.map((f) => ({ question: t(f.q, locale), answer: t(f.a, locale) }));

  const graph = pageGraph([
    webPageNode({
      locale,
      url,
      name: page.metaTitle[locale],
      description: page.metaDescription[locale],
      primaryImage: `${base}${page.image.src}`,
      breadcrumbId: `${url}#breadcrumb`,
      speakableSelectors: [".lp-hero h1", ".lp-intro"],
    }),
    breadcrumbNode(
      crumbs.map((c) => ({ name: c.name, url: `${base}${c.href}` })),
      `${url}#breadcrumb`,
    ),
    serviceNode({
      locale,
      name: t(page.kicker, locale),
      serviceType: page.serviceType,
      description: t(page.intro, locale),
      url,
      id: `${url}#service`,
    }),
    faqPageNode(faqEntries, `${url}#faq`),
  ]);

  const related = page.related
    .map((key) => getServicePageByKey(key))
    .filter((p): p is ServicePage => Boolean(p));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <UtilityBar locale={locale} />
      <SiteHeader locale={locale} />

      <main>
        <section className="blk lp-hero" id="top">
          <Container>
            <Breadcrumbs items={crumbs} label={t(UI.crumbLabel, locale)} />
            <div className="lp-hero-grid">
              <div>
                <Kicker>{t(page.kicker, locale)}</Kicker>
                <h1 className="section-title" style={{ margin: "14px 0 16px" }}>
                  {t(page.h1, locale)}
                </h1>
                <p className="lede lp-intro">{t(page.intro, locale)}</p>
                <div className="hero-actions" style={{ marginTop: 24 }}>
                  {emergency ? (
                    <a className="btn btn-emerg" href={siteConfig.phone.href}>
                      <Icon name="phone" /> {t(UI.ctaCall, locale)}
                    </a>
                  ) : (
                    <Link className="btn btn-primary" href={`/${locale}#contact`}>
                      {t(UI.ctaQuote, locale)} <Icon name="arrow" />
                    </Link>
                  )}
                </div>
                <div className="hero-chips" style={{ marginTop: 24 }}>
                  {page.proof.map((p, i) => (
                    <span className="chip" key={i}>
                      <i />
                      <span>{t(p, locale)}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="lp-hero-media">
                <Image
                  src={page.image.src}
                  alt={t(page.image.alt, locale)}
                  title={t(page.image.alt, locale)}
                  width={page.image.width}
                  height={page.image.height}
                  priority
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="blk">
          <Container>
            <Reveal className="lp-sec-head">
              <Kicker>{t(UI.capsKicker, locale)}</Kicker>
              <h2 className="section-title" style={{ marginTop: 14 }}>
                {t(UI.caps, locale)}
              </h2>
            </Reveal>
            <ul className="qpoints lp-caps">
              {page.capabilities.map((c, i) => (
                <li key={i}>
                  <Icon name="check" />
                  <span>{t(c, locale)}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="blk">
          <Container>
            <Reveal className="lp-sec-head">
              <Kicker>{t(UI.procKicker, locale)}</Kicker>
              <h2 className="section-title" style={{ marginTop: 14 }}>
                {t(UI.proc, locale)}
              </h2>
            </Reveal>
            <div className="svc-grid">
              {page.process.map((step, i) => (
                <Reveal className="svc" key={i}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{t(step.title, locale)}</h3>
                  <p>{t(step.description, locale)}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="blk">
          <Container>
            <Reveal className="lp-sec-head">
              <Kicker>{t(UI.indKicker, locale)}</Kicker>
              <h2 className="section-title" style={{ marginTop: 14 }}>
                {t(UI.ind, locale)}
              </h2>
            </Reveal>
            <div className="ind-grid">
              {industries.map((ind, i) => (
                <Reveal className="ind" key={i}>
                  <Icon name={ind.icon} />
                  <span>{t(ind.label, locale)}</span>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <Faq kicker={t(UI.faqKicker, locale)} title={t(UI.faq, locale)} items={faqEntries} id="faq" />

        {related.length > 0 && (
          <section className="blk">
            <Container>
              <Reveal className="lp-sec-head">
                <Kicker>{t(UI.relKicker, locale)}</Kicker>
                <h2 className="section-title" style={{ marginTop: 14 }}>
                  {t(UI.rel, locale)}
                </h2>
              </Reveal>
              <div className="svc-grid">
                {related.map((rp) => (
                  <Link className="svc lp-rel" key={rp.key} href={servicePageHref(rp, locale)}>
                    <Icon name={rp.icon} className="ic" />
                    <h3>{t(rp.kicker, locale)}</h3>
                    <p>{t(rp.intro, locale)}</p>
                    <Icon name="arrowUpRight" className="arw" />
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}

        <section className="emerg-band">
          <Container>
            <div className="emerg-inner">
              <div>
                <h2>{emergency ? t(UI.ctaTitleCall, locale) : t(UI.ctaTitleQuote, locale)}</h2>
                <p>{emergency ? t(UI.ctaBodyCall, locale) : t(UI.ctaBodyQuote, locale)}</p>
              </div>
              {emergency ? (
                <a className="btn btn-dark" href={siteConfig.phone.href}>
                  <Icon name="phone" />
                  <span>{t(UI.ctaCall, locale)}</span>
                  {` · ${siteConfig.phone.display}`}
                </a>
              ) : (
                <Link className="btn btn-dark" href={`/${locale}#contact`}>
                  {t(UI.ctaQuote, locale)}
                </Link>
              )}
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter locale={locale} />
      <StickyQuote locale={locale} />
    </>
  );
}
