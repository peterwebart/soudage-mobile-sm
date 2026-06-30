import type { LocaleString } from "@/lib/i18n";
import type { IconName } from "@/components/ui/icons";

export type ServiceItem = {
  number: string;
  icon: IconName;
  title: LocaleString;
  description: LocaleString;
};

export const services: ServiceItem[] = [
  {
    number: "01",
    icon: "spark",
    title: { fr: "Soudage mobile", en: "Mobile welding" },
    description: {
      fr: "Services de soudage sur site pour environnements industriels, commerciaux et de construction.",
      en: "On-site welding services for industrial, commercial and construction environments.",
    },
  },
  {
    number: "02",
    icon: "beam",
    title: { fr: "Réparation d'acier structural", en: "Structural steel repair" },
    description: {
      fr: "Réparation, renforcement et modification de poutres, colonnes, cadres, plateformes, escaliers et structures métalliques.",
      en: "Repair, reinforcement and modification of beams, columns, frames, platforms, stairs and metal structures.",
    },
  },
  {
    number: "03",
    icon: "gear",
    title: { fr: "Maintenance industrielle", en: "Industrial maintenance" },
    description: {
      fr: "Soudage de maintenance pour équipements de production, machinerie, convoyeurs, plateformes et infrastructures industrielles.",
      en: "Welding support for production equipment, machinery, conveyors, platforms and industrial infrastructure.",
    },
  },
  {
    number: "04",
    icon: "bolt",
    title: { fr: "Soudage d'urgence", en: "Emergency welding" },
    description: {
      fr: "Intervention rapide sur site pour réduire les arrêts d'exploitation et rétablir la continuité opérationnelle.",
      en: "Rapid on-site response to reduce downtime and restore operational continuity.",
    },
  },
  {
    number: "05",
    icon: "blueprint",
    title: { fr: "Fabrication sur mesure", en: "Custom fabrication" },
    description: {
      fr: "Fabrication sur mesure en acier et acier inoxydable selon les plans, spécifications ou exigences du site.",
      en: "Custom steel and stainless steel fabrication based on client drawings, specifications or site requirements.",
    },
  },
  {
    number: "06",
    icon: "shield",
    title: { fr: "Soudage de l'inox", en: "Stainless steel welding" },
    description: {
      fr: "Soudage de précision de l'acier inoxydable pour applications commerciales, industrielles et spécialisées.",
      en: "Precision stainless steel welding for commercial, industrial and specialized applications.",
    },
  },
  {
    number: "07",
    icon: "truck",
    title: { fr: "Réparation d'équipement lourd", en: "Heavy equipment repair" },
    description: {
      fr: "Réparations par soudage pour machinerie, camions, remorques, équipements industriels et composants lourds.",
      en: "Welding repairs for machinery, trucks, trailers, industrial equipment and heavy-duty components.",
    },
  },
];
