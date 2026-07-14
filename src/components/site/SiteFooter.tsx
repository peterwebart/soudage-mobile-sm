import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import { footer } from "@/content/dictionary";
import { servicePageHref, servicePages } from "@/content/service-pages";
import { siteConfig } from "@/content/site-config";
import { t, type Locale } from "@/lib/i18n";

type SiteFooterProps = {
  locale: Locale;
};

/** Footer. The Services column links to the service landing pages; brand and
 *  Company links are home-absolute (`/{locale}#anchor`) so they work from the
 *  landing pages too. */
export function SiteFooter({ locale }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const servicesHeading = footer.columns[0].heading;
  const companyColumn = footer.columns[1];

  return (
    <footer>
      <Container>
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" href={`/${locale}`}>
              <div className="mono">{siteConfig.monogram}</div>
              <div className="brand-txt">
                <b>{siteConfig.shortName}</b>
                <small>{t(siteConfig.tagline, locale)}</small>
              </div>
            </Link>
            <p>{t(siteConfig.description, locale)}</p>
          </div>

          <div className="foot">
            <h4>{t(servicesHeading, locale)}</h4>
            <ul>
              {servicePages.map((page) => (
                <li key={page.key}>
                  <Link href={servicePageHref(page, locale)}>{t(page.kicker, locale)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot">
            <h4>{t(companyColumn.heading, locale)}</h4>
            <ul>
              {companyColumn.links.map((link, index) => (
                <li key={index}>
                  <Link href={`/${locale}${link.href}`}>{t(link.label, locale)}</Link>
                </li>
              ))}
            </ul>
          </div>

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
