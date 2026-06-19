import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeaderProps = {
  /** Section index label, e.g. "§ 01 / Services". */
  index: string;
  kicker: string;
  title: string;
  lede: string;
};

/** Standard two-part section header (`.sec-head`): index + kicker + title on
 *  the left, supporting lede on the right. Reveals on scroll. */
export function SectionHeader({ index, kicker, title, lede }: SectionHeaderProps) {
  return (
    <Reveal className="sec-head">
      <div>
        <span className="idx">{index}</span>
        <br />
        <br />
        <Kicker>{kicker}</Kicker>
        <h2 className="section-title" style={{ marginTop: 14 }}>
          {title}
        </h2>
      </div>
      <p className="lede">{lede}</p>
    </Reveal>
  );
}
