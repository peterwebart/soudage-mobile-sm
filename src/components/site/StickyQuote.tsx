import Link from "next/link";

import { stickyQuote } from "@/content/dictionary";
import { t, type Locale } from "@/lib/i18n";

type StickyQuoteProps = {
  locale: Locale;
};

/** Persistent floating CTA linking to the quote form (home-absolute so it works
 *  from landing pages too). */
export function StickyQuote({ locale }: StickyQuoteProps) {
  return (
    <Link className="btn btn-primary sticky-quote" href={`/${locale}#contact`}>
      {t(stickyQuote, locale)}
    </Link>
  );
}
