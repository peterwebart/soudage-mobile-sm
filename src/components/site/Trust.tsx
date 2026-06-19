import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { trustSection } from "@/content/dictionary";
import { t, type Locale } from "@/lib/i18n";

type TrustProps = {
  locale: Locale;
};

// Icons map to the three cards in order: welders, safety, insurance.
const cardIcons: IconName[] = ["award", "helmet", "document"];

/** §05 — certification, safety and compliance positioning. */
export function Trust({ locale }: TrustProps) {
  return (
    <section className="blk trust" id="apropos">
      <Container>
        <SectionHeader
          index={trustSection.index}
          kicker={t(trustSection.kicker, locale)}
          title={t(trustSection.title, locale)}
          lede={t(trustSection.lede, locale)}
        />
        <div className="trust-grid">
          {trustSection.cards.map((card, index) => (
            <Reveal className="tcard" key={index}>
              <Icon name={cardIcons[index] ?? "shield"} />
              <h3>{t(card.title, locale)}</h3>
              <p>{t(card.body, locale)}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="trust-note">{t(trustSection.note, locale)}</Reveal>
      </Container>
    </section>
  );
}
