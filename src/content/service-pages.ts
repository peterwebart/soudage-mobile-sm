import type { IconName } from "@/components/ui/icons";
import type { Locale, LocaleString } from "@/lib/i18n";

/**
 * Service landing pages — the canonical, SEO-focused service catalogue.
 *
 * Everything about a service page lives here as typed, bilingual data; a single
 * dynamic route (`/[lang]/[service]`) and one component render all of them. To
 * add or edit a service page, edit ONLY this file — no new files, no new routes.
 */

export type ServiceFaq = { q: LocaleString; a: LocaleString };
export type ServiceProcessStep = { title: LocaleString; description: LocaleString };
export type ServiceImage = { src: string; width: number; height: number; alt: LocaleString };

export type ServicePage = {
  /** Stable id used for cross-linking (related services, home cards). */
  key: string;
  icon: IconName;
  /** Canonical English service type for schema.org `serviceType`. */
  serviceType: string;
  /** Localised URL slug: /fr/{slug.fr} and /en/{slug.en}. */
  slug: LocaleString;
  kicker: LocaleString;
  h1: LocaleString;
  metaTitle: LocaleString;
  metaDescription: LocaleString;
  /** One–two sentence, entity-rich summary (front-loaded for AI/GEO). */
  intro: LocaleString;
  capabilities: LocaleString[];
  process: ServiceProcessStep[];
  proof: LocaleString[];
  faqs: ServiceFaq[];
  /** Keys of related service pages (internal linking / topical cluster). */
  related: string[];
  /** Primary in-page CTA: request a quote, or call (emergency intent). */
  ctaKind: "quote" | "emergency";
  image: ServiceImage;
  keywords: string[];
};

export const servicePages: ServicePage[] = [
  {
    key: "structural-steel-repair",
    icon: "beam",
    serviceType: "Structural steel welding and repair",
    slug: { fr: "reparation-acier-structural", en: "structural-steel-repair" },
    kicker: { fr: "Réparation d'acier structural", en: "Structural steel repair" },
    h1: {
      fr: "Réparation et renforcement d'acier structural à Montréal",
      en: "Structural steel repair & reinforcement in Montréal",
    },
    metaTitle: {
      fr: "Réparation d'acier structural à Montréal | Soudage Mobile SM",
      en: "Structural Steel Repair in Montréal | Soudage Mobile SM",
    },
    metaDescription: {
      fr: "Réparation, renforcement et modification d'acier structural sur site — poutres, colonnes, plateformes et charpentes — dans le Grand Montréal et au Québec. Soudeurs qualifiés, intervention rapide.",
      en: "On-site structural steel repair, reinforcement and modification — beams, columns, platforms and frames — across Greater Montréal and Québec. Qualified welders, fast response.",
    },
    intro: {
      fr: "Soudage Mobile SM Inc. répare et renforce l'acier structural directement sur votre site : poutres, colonnes, cadres, plateformes, escaliers et mezzanines. Nos soudeurs interviennent selon les normes applicables pour rétablir l'intégrité structurale sans démontage inutile.",
      en: "Soudage Mobile SM Inc. repairs and reinforces structural steel directly on your site: beams, columns, frames, platforms, stairs and mezzanines. Our welders work to applicable standards to restore structural integrity without unnecessary dismantling.",
    },
    capabilities: [
      { fr: "Réparation de poutres, colonnes et fermes porteuses", en: "Repair of load-bearing beams, columns and trusses" },
      { fr: "Renforcement et remise à niveau de structures existantes", en: "Reinforcement and upgrading of existing structures" },
      { fr: "Réparation de plateformes, mezzanines et escaliers d'acier", en: "Repair of steel platforms, mezzanines and stairs" },
      { fr: "Modification et ajout d'éléments structuraux sur mesure", en: "Custom modification and addition of structural members" },
    ],
    process: [
      {
        title: { fr: "Évaluation sur site", en: "On-site assessment" },
        description: { fr: "Nous évaluons la charge, l'état de l'acier et la portée exacte des travaux.", en: "We assess load, steel condition and the exact scope of work." },
      },
      {
        title: { fr: "Préparation & sécurité", en: "Preparation & safety" },
        description: { fr: "Préparation des joints, protection des zones et mesures de sécurité conformes.", en: "Joint preparation, area protection and compliant safety measures." },
      },
      {
        title: { fr: "Soudage & vérification", en: "Welding & verification" },
        description: { fr: "Soudage multipasse contrôlé, puis vérification visuelle de chaque assemblage.", en: "Controlled multi-pass welding, then visual verification of every joint." },
      },
    ],
    proof: [
      { fr: "Soudeurs qualifiés — certification CWB disponible selon le projet", en: "Qualified welders — CWB certification available per project" },
      { fr: "Intervention mobile sur site pour éviter le démontage", en: "Mobile on-site intervention to avoid dismantling" },
      { fr: "Documentation de conformité fournie sur demande", en: "Compliance documentation provided on request" },
    ],
    faqs: [
      {
        q: { fr: "Réparez-vous l'acier structural sans arrêter la production ?", en: "Can you repair structural steel without stopping production?" },
        a: { fr: "Dans bien des cas, oui. Nous planifions les travaux pour limiter les temps d'arrêt et pouvons intervenir hors des heures de production ou par zones lorsque la sécurité le permet.", en: "In many cases, yes. We plan the work to limit downtime and can intervene outside production hours or zone-by-zone when safety allows." },
      },
      {
        q: { fr: "Fournissez-vous une certification CWB ?", en: "Do you provide CWB certification?" },
        a: { fr: "La certification CWB est disponible selon les exigences du projet. Précisez vos exigences contractuelles et nous confirmerons la qualification requise.", en: "CWB certification is available depending on project requirements. Share your contractual requirements and we'll confirm the qualification needed." },
      },
      {
        q: { fr: "Pouvez-vous renforcer une structure pour une charge accrue ?", en: "Can you reinforce a structure for a higher load?" },
        a: { fr: "Oui. Nous renforçons poutres, colonnes et plateformes pour accueillir de nouvelles charges ou équipements, selon les plans ou l'évaluation d'un ingénieur.", en: "Yes. We reinforce beams, columns and platforms to accommodate new loads or equipment, based on drawings or an engineer's assessment." },
      },
      {
        q: { fr: "Offrez-vous un service d'urgence pour l'acier structural ?", en: "Do you offer emergency structural steel service?" },
        a: { fr: "Oui, un service d'urgence sur appel 24/7 est disponible pour les défaillances structurales critiques.", en: "Yes, 24/7 on-call emergency service is available for critical structural failures." },
      },
    ],
    related: ["industrial-maintenance", "emergency-welding", "custom-fabrication"],
    ctaKind: "quote",
    image: {
      src: "/media/project-structural.jpg",
      width: 1000,
      height: 750,
      alt: { fr: "Réparation de structure d'acier par Soudage Mobile SM", en: "Structural steel repair by Soudage Mobile SM" },
    },
    keywords: ["réparation acier structural", "structural steel repair Montréal", "renforcement structure acier", "structural welding Québec"],
  },

  {
    key: "emergency-welding",
    icon: "bolt",
    serviceType: "Emergency mobile welding",
    slug: { fr: "soudage-urgence", en: "emergency-welding" },
    kicker: { fr: "Soudage d'urgence", en: "Emergency welding" },
    h1: {
      fr: "Soudage d'urgence 24/7 dans le Grand Montréal",
      en: "24/7 emergency welding across Greater Montréal",
    },
    metaTitle: {
      fr: "Soudage d'urgence 24/7 à Montréal | Soudage Mobile SM",
      en: "24/7 Emergency Welding in Montréal | Soudage Mobile SM",
    },
    metaDescription: {
      fr: "Service de soudage d'urgence mobile sur appel 24/7 dans le Grand Montréal et au Québec. Réduisez vos temps d'arrêt : intervention rapide sur bris structuraux et d'équipement.",
      en: "24/7 on-call mobile emergency welding across Greater Montréal and Québec. Reduce downtime with fast response to structural and equipment failures.",
    },
    intro: {
      fr: "Soudage Mobile SM Inc. offre un service de soudage d'urgence mobile sur appel 24/7. Nous intervenons rapidement sur les bris structuraux, d'équipement et de production afin de réduire vos temps d'arrêt et rétablir la continuité opérationnelle.",
      en: "Soudage Mobile SM Inc. provides 24/7 on-call mobile emergency welding. We respond quickly to structural, equipment and production failures to reduce your downtime and restore operational continuity.",
    },
    capabilities: [
      { fr: "Intervention d'urgence sur appel, 24 heures sur 24", en: "On-call emergency response, around the clock" },
      { fr: "Réparations structurales et d'équipement critiques", en: "Critical structural and equipment repairs" },
      { fr: "Soudage sur site pour éviter les délais de transport", en: "On-site welding to avoid transport delays" },
      { fr: "Priorisation des bris qui arrêtent la production", en: "Prioritisation of failures that halt production" },
    ],
    process: [
      {
        title: { fr: "Appel & triage", en: "Call & triage" },
        description: { fr: "Vous appelez, nous évaluons l'urgence et confirmons le délai d'intervention.", en: "You call, we assess the urgency and confirm the response time." },
      },
      {
        title: { fr: "Mobilisation", en: "Mobilisation" },
        description: { fr: "Une unité mobile équipée se déplace sur votre site sans délai.", en: "An equipped mobile unit is dispatched to your site without delay." },
      },
      {
        title: { fr: "Réparation & remise en service", en: "Repair & return to service" },
        description: { fr: "Nous stabilisons ou réparons pour un retour en service sécuritaire.", en: "We stabilise or repair for a safe return to service." },
      },
    ],
    proof: [
      { fr: "Disponibilité sur appel 24/7 pour les urgences", en: "24/7 on-call availability for emergencies" },
      { fr: "Unités mobiles prêtes à intervenir sur site", en: "Mobile units ready to intervene on site" },
      { fr: "Objectif : réduire au minimum vos temps d'arrêt", en: "Goal: minimise your downtime" },
    ],
    faqs: [
      {
        q: { fr: "Êtes-vous vraiment disponibles 24/7 ?", en: "Are you really available 24/7?" },
        a: { fr: "Oui. Notre service d'urgence fonctionne sur appel, jour et nuit. Appelez le (438) 680-3247 et nous confirmons immédiatement le délai d'intervention.", en: "Yes. Our emergency service operates on call, day and night. Call (438) 680-3247 and we'll confirm the response time right away." },
      },
      {
        q: { fr: "Quel est votre délai d'intervention ?", en: "What is your response time?" },
        a: { fr: "Le délai dépend de la localisation et de la nature du bris. Nous priorisons les urgences qui arrêtent la production et confirmons un délai réaliste dès votre appel.", en: "Response time depends on location and the nature of the failure. We prioritise production-stopping emergencies and confirm a realistic window as soon as you call." },
      },
      {
        q: { fr: "Quels types d'urgences traitez-vous ?", en: "What types of emergencies do you handle?" },
        a: { fr: "Bris d'acier structural, défaillances d'équipement et de machinerie, fissures, ruptures de convoyeurs et réparations critiques empêchant la production.", en: "Structural steel failures, equipment and machinery breakdowns, cracks, conveyor failures and critical repairs preventing production." },
      },
      {
        q: { fr: "Desservez-vous ma région en urgence ?", en: "Do you cover my area for emergencies?" },
        a: { fr: "Nous couvrons le Grand Montréal, Laval, la Rive-Sud, la Rive-Nord et la Montérégie, et le reste du Québec selon la situation.", en: "We cover Greater Montréal, Laval, the South Shore, the North Shore and Montérégie, and the rest of Québec depending on the situation." },
      },
    ],
    related: ["structural-steel-repair", "industrial-shutdown", "industrial-maintenance"],
    ctaKind: "emergency",
    image: {
      src: "/media/project-emergency.jpg",
      width: 1000,
      height: 750,
      alt: { fr: "Intervention de soudage d'urgence sur site", en: "On-site emergency welding intervention" },
    },
    keywords: ["soudage d'urgence Montréal", "emergency welding Montréal", "soudeur urgence 24/7", "emergency welding services Québec"],
  },

  {
    key: "industrial-shutdown",
    icon: "factory",
    serviceType: "Industrial shutdown and turnaround welding",
    slug: { fr: "shutdown-industriel", en: "industrial-shutdown" },
    kicker: { fr: "Shutdown industriel", en: "Industrial shutdown" },
    h1: {
      fr: "Soudage pour shutdown et arrêts industriels planifiés",
      en: "Welding for planned industrial shutdowns & turnarounds",
    },
    metaTitle: {
      fr: "Shutdown industriel & soudage d'arrêt à Montréal | Soudage Mobile SM",
      en: "Industrial Shutdown Welding in Montréal | Soudage Mobile SM",
    },
    metaDescription: {
      fr: "Soudage et travaux métalliques pour shutdowns et arrêts industriels planifiés dans le Grand Montréal et au Québec. Équipe mobile, échéancier serré, exécution sécuritaire.",
      en: "Welding and metal work for planned industrial shutdowns and turnarounds across Greater Montréal and Québec. Mobile crew, tight schedule, safe execution.",
    },
    intro: {
      fr: "Soudage Mobile SM Inc. appuie vos arrêts industriels planifiés (shutdowns) avec une capacité de soudage mobile mobilisable rapidement. Nous exécutons les travaux dans des fenêtres d'arrêt serrées, en respectant l'échéancier et les exigences de sécurité.",
      en: "Soudage Mobile SM Inc. supports your planned industrial shutdowns and turnarounds with mobile welding capacity that mobilises quickly. We execute work within tight outage windows while respecting the schedule and safety requirements.",
    },
    capabilities: [
      { fr: "Soudage et réparations pendant les fenêtres d'arrêt", en: "Welding and repairs during outage windows" },
      { fr: "Renfort de capacité de soudage pour votre échéancier", en: "Supplemental welding capacity for your schedule" },
      { fr: "Travaux sur tuyauterie, structures et équipements", en: "Work on piping, structures and equipment" },
      { fr: "Coordination avec vos équipes de maintenance", en: "Coordination with your maintenance teams" },
    ],
    process: [
      {
        title: { fr: "Planification préalable", en: "Pre-shutdown planning" },
        description: { fr: "Nous définissons la portée, les priorités et les points de contrôle avant l'arrêt.", en: "We define scope, priorities and checkpoints before the outage." },
      },
      {
        title: { fr: "Exécution en fenêtre", en: "In-window execution" },
        description: { fr: "Équipe mobilisée pour exécuter les travaux dans le temps d'arrêt imparti.", en: "Crew mobilised to complete work within the allotted outage." },
      },
      {
        title: { fr: "Vérification & remise en marche", en: "Verification & restart" },
        description: { fr: "Contrôle des assemblages pour un redémarrage en toute confiance.", en: "Joint checks for a confident restart." },
      },
    ],
    proof: [
      { fr: "Mobilisation rapide pour respecter les fenêtres d'arrêt", en: "Fast mobilisation to hit outage windows" },
      { fr: "Exécution axée sur la sécurité et l'échéancier", en: "Safety- and schedule-focused execution" },
      { fr: "Renfort flexible selon l'ampleur du shutdown", en: "Flexible reinforcement based on shutdown scale" },
    ],
    faqs: [
      {
        q: { fr: "Pouvez-vous travailler dans une fenêtre d'arrêt serrée ?", en: "Can you work within a tight outage window?" },
        a: { fr: "Oui. Nous planifions à l'avance et mobilisons l'équipe nécessaire pour exécuter les travaux prioritaires dans le temps d'arrêt disponible.", en: "Yes. We plan ahead and mobilise the crew needed to complete priority work within the available outage." },
      },
      {
        q: { fr: "Fournissez-vous du renfort à nos équipes internes ?", en: "Do you provide reinforcement to our internal teams?" },
        a: { fr: "Oui. Nous pouvons ajouter de la capacité de soudage à vos équipes de maintenance pour la durée du shutdown. Voir aussi notre page Renfort de soudeurs.", en: "Yes. We can add welding capacity to your maintenance teams for the duration of the shutdown. See also our Welder staffing page." },
      },
      {
        q: { fr: "Sur quels types d'installations intervenez-vous ?", en: "What types of facilities do you work on?" },
        a: { fr: "Usines de fabrication, transformation, entrepôts et installations industrielles dans le Grand Montréal et au Québec.", en: "Manufacturing plants, processing facilities, warehouses and industrial sites across Greater Montréal and Québec." },
      },
      {
        q: { fr: "Comment planifier un shutdown avec vous ?", en: "How do we plan a shutdown with you?" },
        a: { fr: "Contactez-nous à l'avance avec vos dates et la portée envisagée. Nous établissons le plan de travail, les priorités et la capacité requise.", en: "Contact us in advance with your dates and intended scope. We build the work plan, priorities and required capacity." },
      },
    ],
    related: ["industrial-maintenance", "welder-staffing", "structural-steel-repair"],
    ctaKind: "quote",
    image: {
      src: "/media/arc-band.jpg",
      width: 1700,
      height: 729,
      alt: { fr: "Travaux de soudage lors d'un arrêt industriel", en: "Welding work during an industrial shutdown" },
    },
    keywords: ["shutdown industriel", "industrial shutdown welding", "arrêt planifié soudage", "turnaround welding Québec"],
  },

  {
    key: "industrial-maintenance",
    icon: "gear",
    serviceType: "Industrial maintenance welding",
    slug: { fr: "maintenance-industrielle", en: "industrial-maintenance" },
    kicker: { fr: "Maintenance industrielle", en: "Industrial maintenance" },
    h1: {
      fr: "Soudage de maintenance industrielle à Montréal et au Québec",
      en: "Industrial maintenance welding in Montréal & Québec",
    },
    metaTitle: {
      fr: "Maintenance industrielle par soudage à Montréal | Soudage Mobile SM",
      en: "Industrial Maintenance Welding in Montréal | Soudage Mobile SM",
    },
    metaDescription: {
      fr: "Soudage de maintenance pour équipements de production, machinerie, convoyeurs et infrastructures industrielles dans le Grand Montréal et au Québec. Service mobile, réponse rapide.",
      en: "Maintenance welding for production equipment, machinery, conveyors and industrial infrastructure across Greater Montréal and Québec. Mobile service, fast response.",
    },
    intro: {
      fr: "Soudage Mobile SM Inc. assure le soudage de maintenance de vos équipements de production, machinerie, convoyeurs, plateformes et infrastructures industrielles. Nos interventions mobiles prolongent la durée de vie de vos actifs et limitent les arrêts non planifiés.",
      en: "Soudage Mobile SM Inc. delivers maintenance welding for your production equipment, machinery, conveyors, platforms and industrial infrastructure. Our mobile interventions extend asset life and limit unplanned downtime.",
    },
    capabilities: [
      { fr: "Réparation de convoyeurs, trémies et équipements de production", en: "Repair of conveyors, hoppers and production equipment" },
      { fr: "Soudage préventif et correctif sur machinerie", en: "Preventive and corrective welding on machinery" },
      { fr: "Réparation de plateformes, garde-corps et infrastructures", en: "Repair of platforms, guardrails and infrastructure" },
      { fr: "Rechargement et réparation de pièces d'usure", en: "Hardfacing and repair of wear parts" },
    ],
    process: [
      {
        title: { fr: "Diagnostic", en: "Diagnosis" },
        description: { fr: "Nous identifions l'usure, la cause et la meilleure méthode de réparation.", en: "We identify wear, root cause and the best repair method." },
      },
      {
        title: { fr: "Intervention mobile", en: "Mobile intervention" },
        description: { fr: "Réparation sur site pour éviter le démontage et le transport.", en: "On-site repair to avoid dismantling and transport." },
      },
      {
        title: { fr: "Contrôle", en: "Quality check" },
        description: { fr: "Vérification de la réparation avant remise en service.", en: "Repair verification before return to service." },
      },
    ],
    proof: [
      { fr: "Service mobile pour réduire les arrêts non planifiés", en: "Mobile service to reduce unplanned downtime" },
      { fr: "Expérience sur équipements et machinerie industriels", en: "Experience on industrial equipment and machinery" },
      { fr: "Réparations planifiées ou d'urgence selon le besoin", en: "Planned or emergency repairs as needed" },
    ],
    faqs: [
      {
        q: { fr: "Intervenez-vous directement dans notre usine ?", en: "Do you work directly in our plant?" },
        a: { fr: "Oui. Notre service est mobile : nous réparons vos équipements sur place afin d'éviter le démontage et le transport.", en: "Yes. Our service is mobile: we repair your equipment on site to avoid dismantling and transport." },
      },
      {
        q: { fr: "Pouvez-vous réparer un convoyeur en panne ?", en: "Can you repair a broken conveyor?" },
        a: { fr: "Oui. Nous réparons convoyeurs, trémies et équipements de manutention, en réparation planifiée ou en urgence.", en: "Yes. We repair conveyors, hoppers and material-handling equipment, on a planned basis or as an emergency." },
      },
      {
        q: { fr: "Offrez-vous de la maintenance préventive ?", en: "Do you offer preventive maintenance?" },
        a: { fr: "Oui. Nous pouvons intervenir de façon préventive sur les points d'usure connus pour éviter des bris coûteux.", en: "Yes. We can intervene preventively on known wear points to avoid costly failures." },
      },
      {
        q: { fr: "Quelles régions desservez-vous ?", en: "Which regions do you serve?" },
        a: { fr: "Le Grand Montréal, Laval, la Rive-Sud, la Rive-Nord, la Montérégie et l'ensemble du Québec selon le mandat.", en: "Greater Montréal, Laval, the South Shore, the North Shore, Montérégie and all of Québec depending on the mandate." },
      },
    ],
    related: ["industrial-shutdown", "emergency-welding", "structural-steel-repair"],
    ctaKind: "quote",
    image: {
      src: "/media/steel-texture.jpg",
      width: 900,
      height: 600,
      alt: { fr: "Soudage de maintenance industrielle sur équipement", en: "Industrial maintenance welding on equipment" },
    },
    keywords: ["maintenance industrielle", "industrial maintenance welding", "réparation convoyeur", "réparation équipement industriel"],
  },

  {
    key: "welder-staffing",
    icon: "helmet",
    serviceType: "Contract welder staffing",
    slug: { fr: "renfort-soudeurs", en: "welder-staffing" },
    kicker: { fr: "Renfort de soudeurs", en: "Welder staffing" },
    h1: {
      fr: "Renfort de soudeurs qualifiés pour vos équipes",
      en: "Supplemental qualified welders for your teams",
    },
    metaTitle: {
      fr: "Renfort de soudeurs à Montréal | Soudage Mobile SM",
      en: "Contract Welder Staffing in Montréal | Soudage Mobile SM",
    },
    metaDescription: {
      fr: "Renfort de soudeurs qualifiés pour vos projets et arrêts dans le Grand Montréal et au Québec. Ajoutez de la capacité de soudage sur site, sans les délais d'embauche.",
      en: "Supplemental qualified welders for your projects and shutdowns across Greater Montréal and Québec. Add on-site welding capacity without hiring delays.",
    },
    intro: {
      fr: "Soudage Mobile SM Inc. fournit du renfort de soudeurs qualifiés pour vos équipes de maintenance et de projet. Ajoutez rapidement de la capacité de soudage sur site pour absorber les pointes de charge, les arrêts et les échéanciers serrés.",
      en: "Soudage Mobile SM Inc. provides supplemental qualified welders for your maintenance and project teams. Quickly add on-site welding capacity to absorb workload peaks, shutdowns and tight schedules.",
    },
    capabilities: [
      { fr: "Soudeurs qualifiés ajoutés à vos équipes sur site", en: "Qualified welders added to your on-site teams" },
      { fr: "Capacité flexible pour pointes de charge et arrêts", en: "Flexible capacity for workload peaks and shutdowns" },
      { fr: "Intégration à vos procédures de sécurité et de qualité", en: "Integration with your safety and quality procedures" },
      { fr: "Court ou moyen terme selon la portée du mandat", en: "Short- or medium-term based on mandate scope" },
    ],
    process: [
      {
        title: { fr: "Définition du besoin", en: "Define the need" },
        description: { fr: "Nombre de soudeurs, procédés requis, durée et exigences du site.", en: "Number of welders, required processes, duration and site requirements." },
      },
      {
        title: { fr: "Mobilisation", en: "Mobilisation" },
        description: { fr: "Nous affectons des soudeurs qualifiés selon vos exigences.", en: "We assign qualified welders to your requirements." },
      },
      {
        title: { fr: "Exécution intégrée", en: "Integrated execution" },
        description: { fr: "Nos soudeurs travaillent selon vos procédures et votre encadrement.", en: "Our welders work to your procedures and supervision." },
      },
    ],
    proof: [
      { fr: "Capacité de soudage sans les délais d'embauche", en: "Welding capacity without hiring delays" },
      { fr: "Soudeurs qualifiés — certification disponible selon le projet", en: "Qualified welders — certification available per project" },
      { fr: "Renfort mobilisable dans le Grand Montréal et au Québec", en: "Reinforcement deployable across Greater Montréal and Québec" },
    ],
    faqs: [
      {
        q: { fr: "Comment fonctionne le renfort de soudeurs ?", en: "How does welder staffing work?" },
        a: { fr: "Vous nous indiquez le nombre de soudeurs, les procédés et la durée; nous affectons des soudeurs qualifiés qui travaillent selon vos procédures sur votre site.", en: "You tell us the number of welders, processes and duration; we assign qualified welders who work to your procedures on your site." },
      },
      {
        q: { fr: "Pour quelle durée puis-je obtenir du renfort ?", en: "For how long can I get reinforcement?" },
        a: { fr: "Court ou moyen terme, selon vos besoins — d'un arrêt de quelques jours à un projet de plusieurs semaines.", en: "Short- or medium-term, based on your needs — from a few-day shutdown to a multi-week project." },
      },
      {
        q: { fr: "Vos soudeurs sont-ils certifiés ?", en: "Are your welders certified?" },
        a: { fr: "Nos soudeurs sont qualifiés et la certification CWB peut être fournie selon les exigences du projet.", en: "Our welders are qualified and CWB certification can be provided depending on project requirements." },
      },
      {
        q: { fr: "Desservez-vous les arrêts et shutdowns ?", en: "Do you support outages and shutdowns?" },
        a: { fr: "Oui, le renfort de soudeurs est idéal pour les shutdowns. Voir notre page Shutdown industriel.", en: "Yes, welder staffing is ideal for shutdowns. See our Industrial shutdown page." },
      },
    ],
    related: ["industrial-shutdown", "industrial-maintenance", "structural-steel-repair"],
    ctaKind: "quote",
    image: {
      src: "/media/hero-poster.jpg",
      width: 1672,
      height: 941,
      alt: { fr: "Soudeurs qualifiés en renfort sur un site industriel", en: "Supplemental qualified welders on an industrial site" },
    },
    keywords: ["renfort de soudeurs", "welder staffing Montréal", "contract welders Québec", "soudeurs sur demande"],
  },

  {
    key: "custom-fabrication",
    icon: "blueprint",
    serviceType: "Custom metal fabrication",
    slug: { fr: "fabrication-sur-mesure", en: "custom-fabrication" },
    kicker: { fr: "Fabrication sur mesure", en: "Custom fabrication" },
    h1: {
      fr: "Fabrication métallique sur mesure à Montréal",
      en: "Custom metal fabrication in Montréal",
    },
    metaTitle: {
      fr: "Fabrication métallique sur mesure à Montréal | Soudage Mobile SM",
      en: "Custom Metal Fabrication in Montréal | Soudage Mobile SM",
    },
    metaDescription: {
      fr: "Fabrication sur mesure en acier et acier inoxydable selon vos plans et exigences, dans le Grand Montréal et au Québec. Structures, supports, garde-corps et pièces industrielles.",
      en: "Custom steel and stainless steel fabrication to your drawings and requirements, across Greater Montréal and Québec. Structures, supports, guardrails and industrial parts.",
    },
    intro: {
      fr: "Soudage Mobile SM Inc. réalise de la fabrication métallique sur mesure en acier et acier inoxydable selon vos plans, spécifications ou exigences de site : structures, supports, garde-corps, plateformes et pièces industrielles.",
      en: "Soudage Mobile SM Inc. produces custom steel and stainless steel fabrication to your drawings, specifications or site requirements: structures, supports, guardrails, platforms and industrial parts.",
    },
    capabilities: [
      { fr: "Fabrication selon plans, croquis ou échantillons", en: "Fabrication from drawings, sketches or samples" },
      { fr: "Structures, supports, cadres et plateformes", en: "Structures, supports, frames and platforms" },
      { fr: "Garde-corps, escaliers et éléments de sécurité", en: "Guardrails, stairs and safety elements" },
      { fr: "Acier et acier inoxydable selon l'application", en: "Steel and stainless steel to suit the application" },
    ],
    process: [
      {
        title: { fr: "Plans & exigences", en: "Drawings & requirements" },
        description: { fr: "Nous validons les plans, matériaux et tolérances avec vous.", en: "We validate drawings, materials and tolerances with you." },
      },
      {
        title: { fr: "Fabrication", en: "Fabrication" },
        description: { fr: "Découpe, assemblage et soudage selon les spécifications.", en: "Cutting, assembly and welding to specification." },
      },
      {
        title: { fr: "Finition & installation", en: "Finishing & installation" },
        description: { fr: "Finition et, au besoin, installation sur votre site.", en: "Finishing and, if needed, on-site installation." },
      },
    ],
    proof: [
      { fr: "Fabrication conforme à vos plans et tolérances", en: "Fabrication true to your drawings and tolerances" },
      { fr: "Acier et inox pour applications industrielles et commerciales", en: "Steel and stainless for industrial and commercial uses" },
      { fr: "Installation sur site disponible selon le mandat", en: "On-site installation available depending on mandate" },
    ],
    faqs: [
      {
        q: { fr: "Fabriquez-vous à partir de nos plans ?", en: "Do you fabricate from our drawings?" },
        a: { fr: "Oui. Nous travaillons à partir de vos plans, croquis, spécifications ou même d'un échantillon à reproduire.", en: "Yes. We work from your drawings, sketches, specifications or even a sample to reproduce." },
      },
      {
        q: { fr: "Travaillez-vous l'acier inoxydable ?", en: "Do you work with stainless steel?" },
        a: { fr: "Oui. Nous fabriquons en acier et en acier inoxydable. Voir aussi notre page Soudage de l'inox.", en: "Yes. We fabricate in steel and stainless steel. See also our Stainless steel welding page." },
      },
      {
        q: { fr: "Installez-vous les pièces fabriquées ?", en: "Do you install fabricated parts?" },
        a: { fr: "Oui, l'installation sur site est disponible selon la portée du mandat et la localisation.", en: "Yes, on-site installation is available depending on mandate scope and location." },
      },
      {
        q: { fr: "Faites-vous de petites séries ou des pièces uniques ?", en: "Do you make small batches or one-off parts?" },
        a: { fr: "Oui, des pièces uniques aux petites séries, selon vos besoins industriels ou commerciaux.", en: "Yes, from one-off parts to small batches, based on your industrial or commercial needs." },
      },
    ],
    related: ["stainless-steel-welding", "structural-steel-repair", "industrial-maintenance"],
    ctaKind: "quote",
    image: {
      src: "/media/project-stainless.jpg",
      width: 1000,
      height: 750,
      alt: { fr: "Fabrication métallique sur mesure en atelier", en: "Custom metal fabrication in the shop" },
    },
    keywords: ["fabrication sur mesure", "custom metal fabrication Montréal", "fabrication acier", "fabrication inox"],
  },

  {
    key: "stainless-steel-welding",
    icon: "shield",
    serviceType: "Stainless steel welding",
    slug: { fr: "soudage-inox", en: "stainless-steel-welding" },
    kicker: { fr: "Soudage de l'inox", en: "Stainless steel welding" },
    h1: {
      fr: "Soudage d'acier inoxydable à Montréal et au Québec",
      en: "Stainless steel welding in Montréal & Québec",
    },
    metaTitle: {
      fr: "Soudage d'acier inoxydable à Montréal | Soudage Mobile SM",
      en: "Stainless Steel Welding in Montréal | Soudage Mobile SM",
    },
    metaDescription: {
      fr: "Soudage de précision de l'acier inoxydable (GTAW/TIG) pour applications commerciales, industrielles et spécialisées dans le Grand Montréal et au Québec. Finition soignée, service mobile.",
      en: "Precision stainless steel welding (GTAW/TIG) for commercial, industrial and specialised applications across Greater Montréal and Québec. Clean finish, mobile service.",
    },
    intro: {
      fr: "Soudage Mobile SM Inc. exécute le soudage de précision de l'acier inoxydable, incluant le procédé GTAW (TIG), pour des applications commerciales, industrielles et spécialisées où la finition et la résistance à la corrosion comptent.",
      en: "Soudage Mobile SM Inc. performs precision stainless steel welding, including the GTAW (TIG) process, for commercial, industrial and specialised applications where finish and corrosion resistance matter.",
    },
    capabilities: [
      { fr: "Soudage GTAW (TIG) de précision sur inox", en: "Precision GTAW (TIG) welding on stainless" },
      { fr: "Applications alimentaires, commerciales et industrielles", en: "Food-grade, commercial and industrial applications" },
      { fr: "Réparation et fabrication d'équipements en inox", en: "Repair and fabrication of stainless equipment" },
      { fr: "Finition soignée et résistance à la corrosion", en: "Clean finish and corrosion resistance" },
    ],
    process: [
      {
        title: { fr: "Évaluation du matériau", en: "Material assessment" },
        description: { fr: "Nous confirmons la nuance d'inox et l'exigence de finition.", en: "We confirm the stainless grade and finish requirement." },
      },
      {
        title: { fr: "Préparation propre", en: "Clean preparation" },
        description: { fr: "Préparation rigoureuse pour éviter la contamination de l'inox.", en: "Rigorous preparation to avoid stainless contamination." },
      },
      {
        title: { fr: "Soudage TIG & finition", en: "TIG welding & finishing" },
        description: { fr: "Soudage GTAW contrôlé et finition selon l'application.", en: "Controlled GTAW welding and finishing to suit the application." },
      },
    ],
    proof: [
      { fr: "Procédé GTAW (TIG) pour des joints propres et précis", en: "GTAW (TIG) process for clean, precise joints" },
      { fr: "Expérience en applications alimentaires et commerciales", en: "Experience in food-grade and commercial applications" },
      { fr: "Service mobile ou en atelier selon le besoin", en: "Mobile or in-shop service as needed" },
    ],
    faqs: [
      {
        q: { fr: "Quel procédé utilisez-vous pour l'inox ?", en: "Which process do you use for stainless?" },
        a: { fr: "Principalement le GTAW (TIG), qui offre des joints propres et précis adaptés à l'acier inoxydable et aux applications exigeantes.", en: "Primarily GTAW (TIG), which delivers clean, precise joints suited to stainless steel and demanding applications." },
      },
      {
        q: { fr: "Soudez-vous l'inox de qualité alimentaire ?", en: "Do you weld food-grade stainless?" },
        a: { fr: "Oui. Nous intervenons sur des applications alimentaires et commerciales où l'hygiène et la finition sont importantes.", en: "Yes. We work on food-grade and commercial applications where hygiene and finish matter." },
      },
      {
        q: { fr: "Pouvez-vous réparer un équipement en inox sur place ?", en: "Can you repair stainless equipment on site?" },
        a: { fr: "Oui, notre service est mobile; nous pouvons souder l'inox directement sur votre site selon l'application.", en: "Yes, our service is mobile; we can weld stainless directly on your site depending on the application." },
      },
      {
        q: { fr: "Faites-vous de la fabrication en inox ?", en: "Do you fabricate in stainless?" },
        a: { fr: "Oui. Nous combinons soudage et fabrication en inox. Voir notre page Fabrication sur mesure.", en: "Yes. We combine stainless welding and fabrication. See our Custom fabrication page." },
      },
    ],
    related: ["custom-fabrication", "industrial-maintenance", "structural-steel-repair"],
    ctaKind: "quote",
    image: {
      src: "/media/project-stainless.jpg",
      width: 1000,
      height: 750,
      alt: { fr: "Soudage d'acier inoxydable de précision", en: "Precision stainless steel welding" },
    },
    keywords: ["soudage inox", "stainless steel welding Montréal", "soudage acier inoxydable", "TIG welding stainless Québec"],
  },
];

/** Find a service page by its localised slug (used by the dynamic route). */
export function getServicePageBySlug(locale: Locale, slug: string): ServicePage | undefined {
  return servicePages.find((page) => page.slug[locale] === slug);
}

/** Find a service page by its stable key (used for cross-linking). */
export function getServicePageByKey(key: string): ServicePage | undefined {
  return servicePages.find((page) => page.key === key);
}

/** Absolute in-site path for a service page in a given locale. */
export function servicePageHref(page: ServicePage, locale: Locale): string {
  return `/${locale}/${page.slug[locale]}`;
}

/** General, company-level FAQs shown on the home page (with FAQPage schema). */
export const generalFaqs: ServiceFaq[] = [
  {
    q: { fr: "Quels services de soudage offrez-vous ?", en: "What welding services do you offer?" },
    a: {
      fr: "Soudage mobile sur site, réparation d'acier structural, maintenance industrielle, soudage d'urgence, fabrication sur mesure, soudage de l'acier inoxydable, renfort de soudeurs et soutien aux arrêts industriels (shutdowns).",
      en: "On-site mobile welding, structural steel repair, industrial maintenance, emergency welding, custom fabrication, stainless steel welding, welder staffing and industrial shutdown support.",
    },
  },
  {
    q: { fr: "Dans quelles régions intervenez-vous ?", en: "Which regions do you serve?" },
    a: {
      fr: "Nous desservons le Grand Montréal, Laval, la Rive-Sud, la Rive-Nord, la Montérégie et l'ensemble du Québec, selon la portée du mandat.",
      en: "We serve Greater Montréal, Laval, the South Shore, the North Shore, Montérégie and all of Québec, depending on mandate scope.",
    },
  },
  {
    q: { fr: "Offrez-vous un service de soudage d'urgence ?", en: "Do you offer emergency welding service?" },
    a: {
      fr: "Oui. Un service d'urgence mobile est disponible sur appel 24/7 pour réduire vos temps d'arrêt. Appelez le (438) 680-3247.",
      en: "Yes. A mobile emergency service is available on call 24/7 to reduce your downtime. Call (438) 680-3247.",
    },
  },
  {
    q: { fr: "Vos soudeurs sont-ils certifiés ?", en: "Are your welders certified?" },
    a: {
      fr: "Nos soudeurs sont qualifiés et exécutent les travaux selon les normes applicables de l'industrie. La certification CWB est disponible selon les exigences du projet.",
      en: "Our welders are qualified and perform work to applicable industry standards. CWB certification is available depending on project requirements.",
    },
  },
  {
    q: { fr: "Travaillez-vous en français et en anglais ?", en: "Do you work in French and English?" },
    a: {
      fr: "Oui, nous servons nos clients industriels et commerciaux en français et en anglais partout au Québec.",
      en: "Yes, we serve our industrial and commercial clients in both French and English across Québec.",
    },
  },
];
