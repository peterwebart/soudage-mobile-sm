import { QuoteForm } from "@/components/site/QuoteForm";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { quoteSection } from "@/content/dictionary";
import { siteConfig } from "@/content/site-config";
import { t, type Locale } from "@/lib/i18n";

type QuoteSectionProps = {
  locale: Locale;
};

/** §07 — contact / quote request. */
export function QuoteSection({ locale }: QuoteSectionProps) {
  return (
    <section className="blk quote" id="contact">
      <Container>
        <div className="quote-grid">
          <Reveal className="quote-aside">
            <span className="idx">{quoteSection.index}</span>
            <br />
            <br />
            <Kicker>{t(quoteSection.kicker, locale)}</Kicker>
            <h2 className="section-title">{t(quoteSection.title, locale)}</h2>
            <ul className="qpoints">
              {quoteSection.points.map((point, index) => (
                <li key={index}>
                  <Icon name="check" />
                  <span>{t(point, locale)}</span>
                </li>
              ))}
            </ul>
            <div className="qphone">
              <small>{t(quoteSection.urgentLabel, locale)}</small>
              <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
            </div>
          </Reveal>

          <QuoteForm locale={locale} />
        </div>
      </Container>
    </section>
  );
}
