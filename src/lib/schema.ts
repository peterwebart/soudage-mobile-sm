import { servicePageHref, servicePages } from "@/content/service-pages";
import { siteConfig, siteUrl } from "@/content/site-config";
import { t, type Locale } from "@/lib/i18n";

/**
 * JSON-LD as a connected @graph. Site-wide entities (Organization, WebSite,
 * LocalBusiness/ProfessionalService) are emitted once in the root layout; each
 * page emits its own WebPage plus, where relevant, BreadcrumbList, Service and
 * FAQPage nodes that reference the site-wide entities by @id. Cross-referencing
 * by @id lets Google and AI engines resolve one coherent entity model.
 */

type Node = Record<string, unknown>;

const AREAS: { fr: string; en: string }[] = [
  { fr: "Grand Montréal", en: "Greater Montréal" },
  { fr: "Montérégie", en: "Montérégie" },
  { fr: "Laval", en: "Laval" },
  { fr: "Rive-Nord", en: "North Shore" },
  { fr: "Rive-Sud", en: "South Shore" },
  { fr: "Québec", en: "Québec" },
];

const LANGS = ["fr-CA", "en-CA"];

function inLanguage(locale: Locale): string {
  return locale === "fr" ? "fr-CA" : "en-CA";
}

function ids(base: string) {
  return {
    org: `${base}/#organization`,
    website: `${base}/#website`,
    business: `${base}/#localbusiness`,
  };
}

function areaServed(locale: Locale): Node[] {
  return AREAS.map((a) => ({ "@type": "AdministrativeArea", name: t(a, locale) }));
}

export function organizationNode(locale: Locale): Node {
  const base = siteUrl();
  const id = ids(base);
  const node: Node = {
    "@type": "Organization",
    "@id": id.org,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: `${base}/${locale}`,
    logo: { "@type": "ImageObject", url: `${base}/icon.svg` },
    image: `${base}/media/hero-poster.jpg`,
    description: t(siteConfig.description, locale),
    email: siteConfig.email,
    areaServed: areaServed(locale),
    knowsLanguage: LANGS,
    sameAs: [siteConfig.social.facebook],
  };
  if (siteConfig.contactConfirmed) {
    node.telephone = siteConfig.phone.display;
    node.contactPoint = {
      "@type": "ContactPoint",
      telephone: siteConfig.phone.display,
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: "CA",
      availableLanguage: LANGS,
    };
  }
  return node;
}

export function webSiteNode(locale: Locale): Node {
  const base = siteUrl();
  const id = ids(base);
  return {
    "@type": "WebSite",
    "@id": id.website,
    url: base,
    name: siteConfig.name,
    inLanguage: inLanguage(locale),
    publisher: { "@id": id.org },
  };
}

export function localBusinessNode(locale: Locale): Node {
  const base = siteUrl();
  const id = ids(base);
  const node: Node = {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": id.business,
    name: siteConfig.name,
    url: `${base}/${locale}`,
    image: `${base}/media/hero-poster.jpg`,
    logo: `${base}/icon.svg`,
    description: t(siteConfig.description, locale),
    email: siteConfig.email,
    parentOrganization: { "@id": id.org },
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    areaServed: areaServed(locale),
    availableLanguage: LANGS,
    slogan: t(siteConfig.tagline, locale),
    knowsAbout: [
      "Mobile welding",
      "Structural steel repair",
      "Industrial maintenance welding",
      "Emergency welding",
      "Custom metal fabrication",
      "Stainless steel welding",
      "Industrial shutdown",
      "MIG welding (GMAW)",
      "TIG welding (GTAW)",
      "Arc welding",
    ],
    sameAs: [siteConfig.social.facebook],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "fr" ? "Services de soudage" : "Welding services",
      itemListElement: servicePages.map((p) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: t(p.kicker, locale),
          serviceType: p.serviceType,
          url: `${base}${servicePageHref(p, locale)}`,
          description: t(p.intro, locale),
        },
      })),
    },
  };
  if (siteConfig.contactConfirmed) {
    node.telephone = siteConfig.phone.display;
  }
  return node;
}

/** Site-wide graph (Organization + WebSite + LocalBusiness). Emitted in layout. */
export function siteWideGraph(locale: Locale): Node {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(locale), webSiteNode(locale), localBusinessNode(locale)],
  };
}

// ── Page-level nodes ──────────────────────────────────────────────

export function breadcrumbNode(items: { name: string; url: string }[], id: string): Node {
  return {
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqPageNode(faqs: { question: string; answer: string }[], id: string): Node {
  return {
    "@type": "FAQPage",
    "@id": id,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceNode(params: {
  locale: Locale;
  name: string;
  serviceType: string;
  description: string;
  url: string;
  id: string;
}): Node {
  const base = siteUrl();
  return {
    "@type": "Service",
    "@id": params.id,
    name: params.name,
    serviceType: params.serviceType,
    description: params.description,
    url: params.url,
    provider: { "@id": ids(base).business },
    areaServed: areaServed(params.locale),
    availableLanguage: LANGS,
  };
}

export function webPageNode(params: {
  locale: Locale;
  url: string;
  name: string;
  description: string;
  primaryImage?: string;
  breadcrumbId?: string;
  speakableSelectors?: string[];
}): Node {
  const base = siteUrl();
  const id = ids(base);
  const node: Node = {
    "@type": "WebPage",
    "@id": `${params.url}#webpage`,
    url: params.url,
    name: params.name,
    description: params.description,
    inLanguage: inLanguage(params.locale),
    isPartOf: { "@id": id.website },
    about: { "@id": id.business },
  };
  if (params.primaryImage) {
    node.primaryImageOfPage = { "@type": "ImageObject", url: params.primaryImage };
  }
  if (params.breadcrumbId) {
    node.breadcrumb = { "@id": params.breadcrumbId };
  }
  if (params.speakableSelectors && params.speakableSelectors.length > 0) {
    node.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: params.speakableSelectors,
    };
  }
  return node;
}

/** Wrap page-level nodes into a JSON-LD document. */
export function pageGraph(nodes: Node[]): Node {
  return { "@context": "https://schema.org", "@graph": nodes };
}
