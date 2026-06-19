import type { ReactNode } from "react";

type KickerProps = {
  children: ReactNode;
};

/** Orange uppercase eyebrow label with a leading rule (`.kicker`). */
export function Kicker({ children }: KickerProps) {
  return <span className="kicker">{children}</span>;
}
