import { stickyQuote } from "@/content/dictionary";
import { t, type Locale } from "@/lib/i18n";

type StickyQuoteProps = {
  locale: Locale;
};

/** Persistent floating CTA linking to the quote form. */
export function StickyQuote({ locale }: StickyQuoteProps) {
  return (
    <a className="btn btn-primary sticky-quote" href="#contact">
      {t(stickyQuote, locale)}
    </a>
  );
}
