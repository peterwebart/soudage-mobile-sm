import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { areaSection } from "@/content/dictionary";
import { t, type Locale } from "@/lib/i18n";

type ServiceAreaProps = {
  locale: Locale;
};

/** §06 — geographic coverage. */
export function ServiceArea({ locale }: ServiceAreaProps) {
  return (
    <section className="blk" id="zone">
      <Container>
        <div className="area">
          <Reveal>
            <span className="idx">{areaSection.index}</span>
            <br />
            <br />
            <Kicker>{t(areaSection.kicker, locale)}</Kicker>
            <h2 className="section-title" style={{ margin: "14px 0 18px" }}>
              {t(areaSection.title, locale)}
            </h2>
            <p className="lede">{t(areaSection.lede, locale)}</p>
          </Reveal>

          <Reveal className="area-tags">
            {areaSection.tags.map((tag, index) => (
              <span key={index}>{t(tag, locale)}</span>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
