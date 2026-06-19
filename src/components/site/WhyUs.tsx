import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { whySection } from "@/content/dictionary";
import { t, type Locale } from "@/lib/i18n";

type WhyUsProps = {
  locale: Locale;
};

/** §02 — positioning statement plus a grid of eight differentiators. */
export function WhyUs({ locale }: WhyUsProps) {
  return (
    <section className="blk why has-steel" id="why">
      <Image className="steel" src="/media/steel-texture.jpg" alt="" fill sizes="100vw" />
      <Container>
        <div className="why-grid">
          <Reveal>
            <span className="idx">{whySection.index}</span>
            <br />
            <br />
            <Kicker>{t(whySection.kicker, locale)}</Kicker>
            <h2 className="section-title" style={{ margin: "14px 0 20px" }}>
              {t(whySection.title, locale)}
            </h2>
            <p className="lede">{t(whySection.lede, locale)}</p>
            <a className="btn btn-ghost" href="#contact" style={{ marginTop: 26 }}>
              {t(whySection.cta, locale)}
            </a>
          </Reveal>

          <Reveal className="why-list">
            {whySection.items.map((item, index) => (
              <div className="why-item" key={index}>
                <Icon name="check" />
                <b>{t(item, locale)}</b>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
