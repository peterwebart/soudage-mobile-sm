import type { LocaleString } from "@/lib/i18n";
import type { IconName } from "@/components/ui/icons";

export type IndustryItem = {
  icon: IconName;
  label: LocaleString;
};

export const industries: IndustryItem[] = [
  { icon: "factory", label: { fr: "Fabrication industrielle", en: "Manufacturing" } },
  { icon: "crane", label: { fr: "Construction", en: "Construction" } },
  { icon: "warehouse", label: { fr: "Entrepôts", en: "Warehousing" } },
  { icon: "truck", label: { fr: "Logistique", en: "Logistics" } },
  { icon: "food", label: { fr: "Transformation alimentaire", en: "Food processing" } },
  { icon: "building", label: { fr: "Bâtiments commerciaux", en: "Commercial buildings" } },
  { icon: "keys", label: { fr: "Gestion immobilière", en: "Property management" } },
  { icon: "transport", label: { fr: "Transport", en: "Transportation" } },
  { icon: "gear", label: { fr: "Équipement lourd", en: "Heavy equipment" } },
  { icon: "bolt", label: { fr: "Énergie", en: "Energy" } },
  { icon: "bridge", label: { fr: "Infrastructures municipales", en: "Municipal infrastructure" } },
  { icon: "plant", label: { fr: "Installations industrielles", en: "Industrial facilities" } },
];
