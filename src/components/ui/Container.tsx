import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Centered max-width wrapper (`.wrap`) used by every section. */
export function Container({ children, className }: ContainerProps) {
  return <div className={className ? `wrap ${className}` : "wrap"}>{children}</div>;
}
