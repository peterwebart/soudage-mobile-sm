import type { LocaleString } from "@/lib/i18n";

export type ProjectItem = {
  image: { src: string; width: number; height: number; alt: LocaleString };
  tag: LocaleString;
  /** Technical HUD overlay label, e.g. "FIG·01 — FCAW/GMAW". */
  figure: string;
  title: LocaleString;
  spec: {
    client: LocaleString;
    challenge: LocaleString;
    scope: LocaleString;
    /** Welding process — not localized (industry notation). */
    process: string;
  };
  result: LocaleString;
};

export const projects: ProjectItem[] = [
  {
    image: {
      src: "/media/project-structural.jpg",
      width: 1000,
      height: 750,
      alt: {
        fr: "Renforcement d'acier structural sur site",
        en: "On-site structural steel reinforcement",
      },
    },
    tag: { fr: "Acier structural", en: "Structural steel" },
    figure: "FIG·01 — FCAW/GMAW",
    title: { fr: "Renforcement de structure d'entrepôt", en: "Warehouse structure reinforcement" },
    spec: {
      client: { fr: "Centre de distribution", en: "Distribution centre" },
      challenge: {
        fr: "Poutres surchargées exigeant un renforcement sans interruption des opérations.",
        en: "Overloaded beams requiring reinforcement without halting operations.",
      },
      scope: {
        fr: "Renforcement de poutres et plaques de gousset sur site.",
        en: "On-site beam reinforcement and gusset plating.",
      },
      process: "FCAW · GMAW",
    },
    result: {
      fr: "Capacité portante rétablie ; aucune interruption majeure des opérations.",
      en: "Load capacity restored; no major operational interruption.",
    },
  },
  {
    image: {
      src: "/media/project-emergency.jpg",
      width: 1000,
      height: 750,
      alt: {
        fr: "Intervention de soudage d'urgence en milieu industriel",
        en: "Emergency welding intervention in an industrial setting",
      },
    },
    tag: { fr: "Réparation d'urgence", en: "Emergency repair" },
    figure: "FIG·02 — SMAW/GMAW",
    title: { fr: "Réparation d'urgence de convoyeur", en: "Emergency conveyor repair" },
    spec: {
      client: { fr: "Usine de production", en: "Production plant" },
      challenge: {
        fr: "Support de convoyeur rompu immobilisant la ligne de production.",
        en: "Fractured conveyor support halting the production line.",
      },
      scope: {
        fr: "Intervention sur appel ; réparation et renforcement du support.",
        en: "On-call response; support repair and reinforcement.",
      },
      process: "SMAW · GMAW",
    },
    result: {
      fr: "Continuité opérationnelle rétablie ; temps d'arrêt minimisé.",
      en: "Operational continuity restored; downtime minimized.",
    },
  },
  {
    image: {
      src: "/media/project-stainless.jpg",
      width: 1000,
      height: 750,
      alt: {
        fr: "Fabrication inox sur mesure pour transformation alimentaire",
        en: "Custom stainless fabrication for food processing",
      },
    },
    tag: { fr: "Inox sur mesure", en: "Custom stainless" },
    figure: "FIG·03 — GTAW",
    title: { fr: "Fabrication inox pour transformation", en: "Stainless fabrication for processing" },
    spec: {
      client: { fr: "Transformation alimentaire", en: "Food processing" },
      challenge: {
        fr: "Plateforme inox sur mesure conforme aux exigences sanitaires.",
        en: "Custom stainless platform meeting sanitation requirements.",
      },
      scope: {
        fr: "Fabrication sur plans et installation sur site.",
        en: "Drawing-based fabrication and on-site installation.",
      },
      process: "GTAW (TIG)",
    },
    result: {
      fr: "Plateforme livrée selon les spécifications et normes applicables.",
      en: "Platform delivered to specification and applicable standards.",
    },
  },
];
