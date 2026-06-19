import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import { emergencyBand } from "@/content/dictionary";
import { siteConfig } from "@/content/site-config";
import { t, type Locale } from "@/lib/i18n";

type EmergencyBandProps = {
  locale: Locale;
};

/** High-contrast emergency call-to-action band. */
export function EmergencyBand({ locale }: EmergencyBandProps) {
  return (
    <section className="emerg-band" id="urgence">
      <Container>
        <div className="emerg-inner">
          <div>
            <h2>{t(emergencyBand.heading, locale)}</h2>
            <p>{t(emergencyBand.body, locale)}</p>
          </div>
          <a className="btn btn-dark" href={siteConfig.phone.href}>
            <Icon name="phone" />
            <span>{t(emergencyBand.cta, locale)}</span>
            {` · ${siteConfig.phone.display}`}
          </a>
        </div>
      </Container>
    </section>
  );
}
