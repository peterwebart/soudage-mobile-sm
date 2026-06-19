"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import { util } from "@/content/dictionary";
import { siteConfig } from "@/content/site-config";
import { t, type Locale } from "@/lib/i18n";

type UtilityBarProps = {
  locale: Locale;
};

/** Top utility bar: service area, 24/7 note, phone and the FR/EN switch.
 *  The language toggle links to the same page under the other locale and
 *  preserves the in-page anchor the visitor is currently viewing. */
export function UtilityBar({ locale }: UtilityBarProps) {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  return (
    <div className="util">
      <Container>
        <div className="util-left">
          <span className="hide-sm">{t(siteConfig.area, locale)}</span>
          <span>
            <Icon name="bolt" />
            {t(util.emergency, locale)}
          </span>
        </div>
        <div className="util-right">
          <a className="util-phone" href={siteConfig.phone.href}>
            {siteConfig.phone.display}
          </a>
          <div className="lang" role="group" aria-label={t(util.language, locale)}>
            <Link
              href={`/fr${hash}`}
              className={locale === "fr" ? "on" : undefined}
              aria-current={locale === "fr" ? "true" : undefined}
            >
              FR
            </Link>
            <Link
              href={`/en${hash}`}
              className={locale === "en" ? "on" : undefined}
              aria-current={locale === "en" ? "true" : undefined}
            >
              EN
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
