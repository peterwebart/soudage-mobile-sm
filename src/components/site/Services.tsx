import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { servicesSection } from "@/content/dictionary";
import { getServicePageByKey, servicePageHref } from "@/content/service-pages";
import { services } from "@/content/services";
import { t, type Locale } from "@/lib/i18n";

type ServicesProps = {
  locale: Locale;
};

/** §01 — core welding services. Each card links to its landing page when one
 *  exists, otherwise to the quote section. */
export function Services({ locale }: ServicesProps) {
  return (
    <section className="blk" id="services">
      <Container>
        <SectionHeader
          index={servicesSection.index}
          kicker={t(servicesSection.kicker, locale)}
          title={t(servicesSection.title, locale)}
          lede={t(servicesSection.lede, locale)}
        />
        <div className="svc-grid">
          {services.map((service) => {
            const page = service.pageKey ? getServicePageByKey(service.pageKey) : undefined;
            const href = page ? servicePageHref(page, locale) : `/${locale}#contact`;
            return (
              <Reveal className="svc" key={service.number}>
                <span className="num">{service.number}</span>
                <Icon name={service.icon} className="ic" />
                <h3>{t(service.title, locale)}</h3>
                <p>{t(service.description, locale)}</p>
                <Icon name="arrowUpRight" className="arw" />
                <Link className="svc-link" href={href} aria-label={t(service.title, locale)} />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
