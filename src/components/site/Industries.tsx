import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { industriesSection } from "@/content/dictionary";
import { industries } from "@/content/industries";
import { t, type Locale } from "@/lib/i18n";

type IndustriesProps = {
  locale: Locale;
};

/** §03 — sectors served. */
export function Industries({ locale }: IndustriesProps) {
  return (
    <section className="blk" id="industries">
      <Container>
        <SectionHeader
          index={industriesSection.index}
          kicker={t(industriesSection.kicker, locale)}
          title={t(industriesSection.title, locale)}
          lede={t(industriesSection.lede, locale)}
        />
        <div className="ind-grid">
          {industries.map((industry, index) => (
            <Reveal className="ind" key={index}>
              <Icon name={industry.icon} />
              <span>{t(industry.label, locale)}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
