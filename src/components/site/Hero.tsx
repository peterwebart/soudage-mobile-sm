import { HeroMedia } from "@/components/site/HeroMedia";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import { hero } from "@/content/dictionary";
import { t, type Locale } from "@/lib/i18n";

type HeroProps = {
  locale: Locale;
};

/** Above-the-fold hero. The left column and spec card carry `rv show`
 *  (revealed immediately, no observer) so the LCP paints without delay. */
export function Hero({ locale }: HeroProps) {
  const heading = hero.heading[locale];
  const spec = hero.spec;

  return (
    <section className="hero">
      <HeroMedia />
      <Container>
        <div className="hero-grid">
          <div className="rv show">
            <span className="kicker">{t(hero.kicker, locale)}</span>
            <h1>
              {heading.pre}
              <span className="hl">{heading.hl}</span>
              {heading.post}
            </h1>
            <p className="hero-sub">{t(hero.subtitle, locale)}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                {t(hero.ctaQuote, locale)}
                <Icon name="arrow" />
              </a>
              <a className="btn btn-emerg" href="#urgence">
                {t(hero.ctaEmergency, locale)}
              </a>
            </div>
            <div className="hero-chips">
              {hero.chips.map((chip, index) => (
                <span className="chip" key={index}>
                  <i />
                  <span>{t(chip, locale)}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="spec rv show">
            <h3>
              <span>{t(spec.title, locale)}</span>
              <span className="dot" />
            </h3>
            {spec.rows.map((row, index) => (
              <div className="spec-row" key={index}>
                <span>{t(row.label, locale)}</span>
                <span>{t(row.value, locale)}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
