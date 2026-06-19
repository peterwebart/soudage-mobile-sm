"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";
import { nav } from "@/content/dictionary";
import { siteConfig } from "@/content/site-config";
import { t, type Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
};

/** Sticky header. Gains `.scrolled` past 20px and toggles the mobile menu;
 *  selecting any link closes the menu. Anchor links scroll within the page. */
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

  return (
    <header className={scrolled ? "scrolled" : undefined}>
      <Container>
        <div className="nav">
          <a className="brand" href="#top" onClick={closeMenu}>
            <div className="mono">{siteConfig.monogram}</div>
            <div className="brand-txt">
              <b>{siteConfig.shortName}</b>
              <small>{t(siteConfig.tagline, locale)}</small>
            </div>
          </a>

          <nav className={open ? "open" : undefined}>
            <ul>
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={closeMenu}>
                    {t(link.label, locale)}
                  </a>
                </li>
              ))}
              <li>
                <a className="emerg" href={nav.emergency.href} onClick={closeMenu}>
                  {t(nav.emergency.label, locale)}
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-cta">
            <a className="btn btn-primary" href="#contact" onClick={closeMenu}>
              {t(nav.requestQuote, locale)}
            </a>
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
