import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

export type FaqEntry = { question: string; answer: string };

/** FAQ section rendered with native <details>/<summary> so the answers are
 *  visible, crawlable and usable without JavaScript. Paired with FAQPage
 *  JSON-LD by the calling page. */
export function Faq({
  id,
  kicker,
  title,
  items,
}: {
  id?: string;
  kicker: string;
  title: string;
  items: FaqEntry[];
}) {
  return (
    <section className="blk" id={id}>
      <Container>
        <Reveal className="faq-head">
          <Kicker>{kicker}</Kicker>
          <h2 className="section-title" style={{ marginTop: 14 }}>
            {title}
          </h2>
        </Reveal>
        <div className="faq">
          {items.map((item, index) => (
            <details className="faq-item" key={index}>
              <summary>{item.question}</summary>
              <div className="faq-a">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
