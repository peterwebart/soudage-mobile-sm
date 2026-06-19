import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import { footer } from "@/content/dictionary";
import { siteConfig } from "@/content/site-config";
import { t, type Locale } from "@/lib/i18n";

type SiteFooterProps = {
  locale: Locale;
};

/** Footer with brand, navigation columns, contact block and a launch-time
 *  placeholder notice (shown while `siteConfig.contactConfirmed` is false). */
export function SiteFooter({ locale }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="brand" href="#top">
              <div className="mono">{siteConfig.monogram}</div>
              <div className="brand-txt">
                <b>{siteConfig.shortName}</b>
                <small>{t(siteConfig.tagline, locale)}</small>
              </div>
            </a>
            <p>{t(siteConfig.description, locale)}</p>
          </div>

          {footer.columns.map((column, index) => (
            <div className="foot" key={index}>
              <h4>{t(column.heading, locale)}</h4>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{t(link.label, locale)}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="foot foot-contact">
            <h4>{t(footer.contactHeading, locale)}</h4>
            <div>
              <Icon name="phone" />
              <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
            </div>
            <div>
              <Icon name="mail" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
            <div>
              <Icon name="mapPin" />
              <span>{t(siteConfig.area, locale)}</span>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>
            © {year} {siteConfig.name} {t(footer.rights, locale)}
          </span>
          {!siteConfig.contactConfirmed && (
            <span className="placeholder-flag">{t(footer.placeholderNotice, locale)}</span>
          )}
        </div>
      </Container>
    </footer>
  );
}
