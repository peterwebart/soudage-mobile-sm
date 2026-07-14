"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";
import { nav } from "@/content/dictionary";
import { siteConfig } from "@/content/site-config";
import { t, type Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
};

/** Sticky header. Nav links are home-absolute (`/{locale}#anchor`) so they work
 *  from landing pages as well as the home page. Gains `.scrolled` past 20px and
 *  toggles the mobile menu; selecting any link closes it. */
export function SiteHeader({ locale }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);
  const home = `/${locale}`;

  return (
    <header className={scrolled ? "scrolled" : undefined}>
      <Container>
        <div className="nav">
          <Link className="brand" href={home} onClick={closeMenu}>
            <div className="mono">{siteConfig.monogram}</div>
            <div className="brand-txt">
              <b>{siteConfig.shortName}</b>
              <small>{t(siteConfig.tagline, locale)}</small>
            </div>
          </Link>

          <nav className={open ? "open" : undefined}>
            <ul>
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link href={`${home}${link.href}`} onClick={closeMenu}>
                    {t(link.label, locale)}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="emerg" href={`${home}${nav.emergency.href}`} onClick={closeMenu}>
                  {t(nav.emergency.label, locale)}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="nav-cta">
            <Link className="btn btn-primary" href={`${home}#contact`} onClick={closeMenu}>
              {t(nav.requestQuote, locale)}
            </Link>
            <button
              type="button"
              className="burger"
              aria-label={t(nav.menu, locale)}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
