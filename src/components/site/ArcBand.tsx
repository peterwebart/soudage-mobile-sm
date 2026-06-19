import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { arcBand } from "@/content/dictionary";
import { t, type Locale } from "@/lib/i18n";

type ArcBandProps = {
  locale: Locale;
};

/** Full-bleed atmospheric band between Services and Why-us. */
export function ArcBand({ locale }: ArcBandProps) {
  const heading = arcBand.heading[locale];

  return (
    <section className="arcband">
      <Image src="/media/arc-band.jpg" alt="" fill sizes="100vw" />
      <Container>
        <span className="kicker">{t(arcBand.kicker, locale)}</span>
        <h2>
          {heading.pre}
          <span className="hl">{heading.hl}</span>
          {heading.post}
        </h2>
        <p>{t(arcBand.body, locale)}</p>
        <div className="hazard" />
      </Container>
    </section>
  );
}
