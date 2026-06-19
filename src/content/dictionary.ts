import type { Locale, LocaleString } from "@/lib/i18n";

/**
 * Bilingual UI copy for page chrome and section headers.
 * List-style content (services, industries, projects, etc.) lives in its own
 * co-located content module. Highlighted headings are modelled as structured
 * parts (pre / hl / post) rather than embedded HTML.
 */

export type HighlightHeading = Record<Locale, { pre: string; hl: string; post: string }>;

export const meta = {
  title: {
    fr: "Soudage mobile industriel et commercial | Soudage Mobile SM Inc.",
    en: "Industrial & Commercial Mobile Welding Services | Soudage Mobile SM Inc.",
  } satisfies LocaleString,
  description: {
    fr: "Soudage Mobile SM Inc. — soudage mobile, réparation d'acier structural, fabrication sur mesure et interventions d'urgence pour clients industriels et commerciaux dans le Grand Montréal et au Québec.",
    en: "Soudage Mobile SM Inc. provides mobile welding, structural steel repair, custom fabrication and emergency welding services for industrial and commercial clients in Greater Montreal and Quebec.",
  } satisfies LocaleString,
  ogTitle: {
    fr: "Soudage Mobile SM Inc. — Soudage mobile industriel et commercial",
    en: "Soudage Mobile SM Inc. — Industrial & commercial mobile welding",
  } satisfies LocaleString,
} as const;

export const util = {
  emergency: {
    fr: "Intervention d'urgence 24/7",
    en: "24/7 emergency response",
  } satisfies LocaleString,
  language: { fr: "Langue", en: "Language" } satisfies LocaleString,
} as const;

export const nav = {
  links: [
    { href: "#services", label: { fr: "Services", en: "Services" } },
    { href: "#industries", label: { fr: "Industries", en: "Industries" } },
    { href: "#projets", label: { fr: "Projets", en: "Projects" } },
    { href: "#apropos", label: { fr: "À propos", en: "About" } },
    { href: "#contact", label: { fr: "Contact", en: "Contact" } },
  ],
  emergency: { href: "#urgence", label: { fr: "Urgence", en: "Emergency" } },
  requestQuote: { fr: "Demander une soumission", en: "Request a Quote" },
  menu: { fr: "Menu", en: "Menu" },
} as const;

export const hero = {
  kicker: {
    fr: "Entrepreneur en soudage industriel & commercial",
    en: "Industrial & Commercial Welding Contractor",
  } satisfies LocaleString,
  heading: {
    fr: { pre: "Soudage mobile ", hl: "industriel", post: " et commercial" },
    en: { pre: "Industrial & commercial ", hl: "mobile welding", post: " services" },
  } satisfies HighlightHeading,
  subtitle: {
    fr: "Soudage sur site, réparation d'acier structural, fabrication sur mesure et interventions d'urgence pour les clients industriels et commerciaux dans le Grand Montréal et au Québec.",
    en: "Certified on-site welding, structural steel repair, custom fabrication and emergency industrial welding solutions across Greater Montreal and Quebec.",
  } satisfies LocaleString,
  ctaQuote: { fr: "Demander une soumission", en: "Request a Quote" } satisfies LocaleString,
  ctaEmergency: { fr: "Service d'urgence", en: "Emergency Service" } satisfies LocaleString,
  chips: [
    { fr: "Soudeurs certifiés", en: "Certified welders" },
    { fr: "Unités mobiles sur site", en: "Mobile on-site units" },
    { fr: "Réponse d'urgence 24/7", en: "24/7 emergency response" },
    { fr: "Normes de l'industrie", en: "Industry standards" },
  ],
  spec: {
    title: { fr: "Capacités sur site", en: "On-site capability" } satisfies LocaleString,
    rows: [
      { label: { fr: "Procédés", en: "Processes" }, value: { fr: "SMAW · GMAW · FCAW · GTAW", en: "SMAW · GMAW · FCAW · GTAW" } },
      { label: { fr: "Matériaux", en: "Materials" }, value: { fr: "Acier · Inox · Aluminium", en: "Steel · Stainless · Aluminum" } },
      { label: { fr: "Secteur", en: "Focus" }, value: { fr: "Industriel & commercial", en: "Industrial & commercial" } },
      { label: { fr: "Zone", en: "Coverage" }, value: { fr: "Grand Montréal & Québec", en: "Greater Montreal & Quebec" } },
      { label: { fr: "Urgence", en: "Emergency" }, value: { fr: "Sur appel · 24/7", en: "On-call · 24/7" } },
      { label: { fr: "Conformité", en: "Compliance" }, value: { fr: "Sur demande", en: "On request" } },
    ],
  },
} as const;

export const servicesSection = {
  index: "§ 01 / Services",
  kicker: { fr: "Ce que nous exécutons", en: "What we execute" } satisfies LocaleString,
  title: { fr: "Services de soudage industriel", en: "Industrial welding services" } satisfies LocaleString,
  lede: {
    fr: "Une gamme complète de services de soudage et de travaux métalliques exécutés sur site, conçue pour la continuité opérationnelle et l'intégrité structurale.",
    en: "A complete range of on-site welding and metal-work services, built for operational continuity and structural integrity.",
  } satisfies LocaleString,
} as const;

export const arcBand = {
  kicker: { fr: "Sur le terrain", en: "In the field" } satisfies LocaleString,
  heading: {
    fr: { pre: "Là où l'acier doit ", hl: "tenir", post: ", nous soudons." },
    en: { pre: "Where steel has to ", hl: "hold", post: ", we weld." },
  } satisfies HighlightHeading,
  body: {
    fr: "Arc maîtrisé, préparation rigoureuse et contrôle de chaque passe — pour des assemblages qui répondent aux exigences structurales et de sécurité.",
    en: "Controlled arc, rigorous preparation and pass-by-pass control — for joints that meet structural and safety requirements.",
  } satisfies LocaleString,
} as const;

export const whySection = {
  index: "§ 02 / Avantages",
  kicker: { fr: "Pourquoi nous choisir", en: "Why choose us" } satisfies LocaleString,
  title: {
    fr: "Exécution fiable, du devis à la livraison",
    en: "Reliable execution, from quote to completion",
  } satisfies LocaleString,
  lede: {
    fr: "Nous travaillons comme un entrepreneur industriel : portée définie, sécurité d'abord, communication claire et imputabilité sur chaque projet.",
    en: "We operate as an industrial contractor: defined scope, safety first, clear communication and accountability on every project.",
  } satisfies LocaleString,
  cta: { fr: "Discuter de votre projet", en: "Discuss your project" } satisfies LocaleString,
  items: [
    { fr: "Expertise certifiée en soudage", en: "Certified welding expertise" },
    { fr: "Service mobile sur site", en: "Mobile on-site service" },
    { fr: "Orientation industrielle & commerciale", en: "Industrial & commercial focus" },
    { fr: "Capacité d'intervention d'urgence", en: "Emergency response capability" },
    { fr: "Exécution axée sur la sécurité", en: "Safety-first execution" },
    { fr: "Livraison fiable des projets", en: "Reliable project delivery" },
    { fr: "Travaux métalliques complexes", en: "Complex metal work experience" },
    { fr: "Communication claire & imputabilité", en: "Clear communication & accountability" },
  ],
} as const;

export const industriesSection = {
  index: "§ 03 / Industries",
  kicker: { fr: "Secteurs desservis", en: "Industries served" } satisfies LocaleString,
  title: { fr: "Conçu pour les environnements exigeants", en: "Built for demanding environments" } satisfies LocaleString,
  lede: {
    fr: "Nous intervenons auprès des organisations dont les opérations dépendent de l'intégrité de leurs structures et équipements métalliques.",
    en: "We serve organizations whose operations depend on the integrity of their metal structures and equipment.",
  } satisfies LocaleString,
} as const;

export const projectsSection = {
  index: "§ 04 / Projets",
  kicker: { fr: "Exemples de mandats", en: "Sample mandates" } satisfies LocaleString,
  title: { fr: "Études de cas par projet", en: "Project-based case studies" } satisfies LocaleString,
  lede: {
    fr: "Modèles d'études de cas illustrant notre approche. Les détails de chaque mandat sont documentés et disponibles sur demande.",
    en: "Case-study templates illustrating our approach. Full mandate details are documented and available on request.",
  } satisfies LocaleString,
  labels: {
    client: { fr: "Client", en: "Client" },
    challenge: { fr: "Défi", en: "Challenge" },
    scope: { fr: "Portée", en: "Scope" },
    process: { fr: "Procédé", en: "Process" },
    result: { fr: "Résultat", en: "Result" },
  },
} as const;

export const trustSection = {
  index: "§ 05 / Conformité & sécurité",
  kicker: { fr: "Certification & conformité", en: "Certification & compliance" } satisfies LocaleString,
  title: { fr: "La sécurité et la conformité d'abord", en: "Safety and compliance, first" } satisfies LocaleString,
  lede: {
    fr: "Soudage Mobile SM Inc. exécute ses mandats selon les normes applicables de l'industrie, avec une approche structurée de la sécurité sur chaque site.",
    en: "Soudage Mobile SM Inc. performs work according to applicable industry standards, with a structured approach to safety on every site.",
  } satisfies LocaleString,
  cards: [
    {
      title: { fr: "Soudeurs & normes", en: "Welders & standards" },
      body: {
        fr: "Travaux exécutés par des soudeurs qualifiés, selon les normes applicables de l'industrie. Certification CWB disponible selon les exigences du projet.",
        en: "Work performed by qualified welders, according to applicable industry standards. CWB certification available upon project requirement.",
      },
    },
    {
      title: { fr: "Sécurité & CNESST", en: "Safety & CNESST" },
      body: {
        fr: "Sensibilisation aux exigences de la CNESST, procédures de sécurité documentées et préparation rigoureuse de chaque site avant intervention.",
        en: "Awareness of CNESST requirements, documented safety procedures and rigorous site readiness before every intervention.",
      },
    },
    {
      title: { fr: "Assurance & documentation", en: "Insurance & documentation" },
      body: {
        fr: "Assurance responsabilité commerciale et documentation de conformité disponibles sur demande pour vos processus d'approvisionnement et de qualification.",
        en: "Commercial liability insurance and compliance documentation available upon request for your procurement and qualification processes.",
      },
    },
  ],
  note: {
    fr: "Documentation de conformité, attestations d'assurance et qualifications de soudeurs fournies sur demande pour répondre aux exigences contractuelles.",
    en: "Compliance documentation, insurance certificates and welder qualifications provided on request to meet contractual requirements.",
  } satisfies LocaleString,
} as const;

export const areaSection = {
  index: "§ 06 / Zone de service",
  kicker: { fr: "Où nous intervenons", en: "Where we operate" } satisfies LocaleString,
  title: { fr: "Grand Montréal & tout le Québec", en: "Greater Montreal & across Quebec" } satisfies LocaleString,
  lede: {
    fr: "Service mobile dans la grande région métropolitaine et les zones industrielles du Québec. Autres régions sur demande selon la portée du mandat.",
    en: "Mobile service across the greater metropolitan area and Quebec industrial zones. Other regions on request depending on mandate scope.",
  } satisfies LocaleString,
  tags: [
    { fr: "Grand Montréal", en: "Greater Montreal" },
    { fr: "Laval", en: "Laval" },
    { fr: "Longueuil", en: "Longueuil" },
    { fr: "Brossard", en: "Brossard" },
    { fr: "Rive-Sud", en: "South Shore" },
    { fr: "Rive-Nord", en: "North Shore" },
    { fr: "Zones industrielles du Québec", en: "Quebec industrial zones" },
    { fr: "Autres régions sur demande", en: "Other regions on request" },
  ],
} as const;

export const quoteSection = {
  index: "§ 07 / Contact",
  kicker: { fr: "Demande de soumission", en: "Quote request" } satisfies LocaleString,
  title: { fr: "Demander une soumission professionnelle", en: "Request a professional quote" } satisfies LocaleString,
  points: [
    { fr: "Réponse rapide aux demandes industrielles et commerciales", en: "Fast response to industrial and commercial requests" },
    { fr: "Joindre photos, plans ou PDF directement à votre demande", en: "Attach photos, drawings or PDFs directly to your request" },
    { fr: "Portée définie et communication claire avant le début des travaux", en: "Defined scope and clear communication before work begins" },
  ],
  urgentLabel: { fr: "Besoin d'une intervention urgente ?", en: "Need urgent support?" } satisfies LocaleString,
  form: {
    name: { fr: "Nom", en: "Name" } satisfies LocaleString,
    company: { fr: "Entreprise", en: "Company" } satisfies LocaleString,
    phone: { fr: "Téléphone", en: "Phone" } satisfies LocaleString,
    email: { fr: "Courriel", en: "Email" } satisfies LocaleString,
    location: { fr: "Lieu du projet", en: "Project location" } satisfies LocaleString,
    service: { fr: "Service requis", en: "Service required" } satisfies LocaleString,
    urgency: { fr: "Niveau d'urgence", en: "Urgency" } satisfies LocaleString,
    files: { fr: "Photos / plans", en: "Photos / drawings" } satisfies LocaleString,
    uploadCta: { fr: "Téléverser des fichiers", en: "Upload files" } satisfies LocaleString,
    fileCount: { fr: "fichier(s)", en: "file(s)" } satisfies LocaleString,
    message: { fr: "Description du projet", en: "Project description" } satisfies LocaleString,
    messagePlaceholder: {
      fr: "Décrivez la portée, les matériaux et l'échéancier…",
      en: "Describe scope, materials and timeline…",
    } satisfies LocaleString,
    submit: { fr: "Demander une soumission professionnelle", en: "Request a professional quote" } satisfies LocaleString,
    submitting: { fr: "Envoi en cours…", en: "Sending…" } satisfies LocaleString,
    success: {
      fr: "Merci. Votre demande a été envoyée — un membre de notre équipe vous répondra rapidement.",
      en: "Thank you. Your request has been sent — a member of our team will respond shortly.",
    } satisfies LocaleString,
    error: {
      fr: "Une erreur s'est produite. Veuillez réessayer ou nous appeler directement.",
      en: "Something went wrong. Please try again or call us directly.",
    } satisfies LocaleString,
    serviceOptions: [
      { fr: "Sélectionner…", en: "Select…" },
      { fr: "Soudage mobile", en: "Mobile welding" },
      { fr: "Réparation d'acier structural", en: "Structural steel repair" },
      { fr: "Maintenance industrielle", en: "Industrial maintenance" },
      { fr: "Soudage d'urgence", en: "Emergency welding" },
      { fr: "Fabrication sur mesure", en: "Custom fabrication" },
      { fr: "Soudage inox / aluminium", en: "Stainless / aluminum welding" },
      { fr: "Équipement lourd", en: "Heavy equipment" },
    ],
    urgencyOptions: [
      { fr: "Standard", en: "Standard" },
      { fr: "Prioritaire", en: "Priority" },
      { fr: "Urgence — 24/7", en: "Emergency — 24/7" },
    ],
  },
} as const;

export const emergencyBand = {
  heading: { fr: "Besoin d'une intervention urgente en soudage ?", en: "Need urgent welding support?" } satisfies LocaleString,
  body: {
    fr: "Service d'urgence sur appel — réduisez vos temps d'arrêt.",
    en: "On-call emergency service — reduce your downtime.",
  } satisfies LocaleString,
  cta: { fr: "Appeler maintenant", en: "Call now" } satisfies LocaleString,
} as const;

export const footer = {
  columns: [
    {
      heading: { fr: "Services", en: "Services" },
      links: [
        { href: "#services", label: { fr: "Soudage mobile", en: "Mobile welding" } },
        { href: "#services", label: { fr: "Acier structural", en: "Structural steel" } },
        { href: "#services", label: { fr: "Maintenance industrielle", en: "Industrial maintenance" } },
        { href: "#services", label: { fr: "Fabrication sur mesure", en: "Custom fabrication" } },
        { href: "#urgence", label: { fr: "Réparations d'urgence", en: "Emergency repairs" } },
      ],
    },
    {
      heading: { fr: "Société", en: "Company" },
      links: [
        { href: "#apropos", label: { fr: "À propos", en: "About" } },
        { href: "#industries", label: { fr: "Industries", en: "Industries" } },
        { href: "#projets", label: { fr: "Projets", en: "Projects" } },
        { href: "#apropos", label: { fr: "Conformité & sécurité", en: "Compliance & safety" } },
        { href: "#contact", label: { fr: "Contact", en: "Contact" } },
      ],
    },
  ],
  contactHeading: { fr: "Coordonnées", en: "Contact" } satisfies LocaleString,
  rights: { fr: "Tous droits réservés.", en: "All rights reserved." } satisfies LocaleString,
  placeholderNotice: {
    fr: "⚠ Téléphone, courriel et adresse à confirmer avant publication.",
    en: "⚠ Phone, email and address to be confirmed before launch.",
  } satisfies LocaleString,
} as const;

export const stickyQuote = { fr: "Soumission", en: "Get a Quote" } satisfies LocaleString;
