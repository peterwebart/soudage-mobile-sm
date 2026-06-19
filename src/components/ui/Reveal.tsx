"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";

/**
 * Reveal-on-scroll. Adds `.show` to the element once it enters the viewport.
 *
 * Resilience: if IntersectionObserver is unavailable the element is revealed
 * immediately, and globals.css reveals `.rv` outright under `prefers-reduced-
 * motion` and on the `.no-js` fallback — so content can never get stuck hidden.
 */
export function useReveal<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("show");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

type RevealProps = {
  className?: string;
  children: ReactNode;
};

/** Wrapper that reveals a `<div>` on scroll. Renders as the element itself
 *  (with `.rv` merged in) so grid/flex layouts are unaffected. */
export function Reveal({ className, children }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  const merged = className ? `${className} rv` : "rv";
  return (
    <div ref={ref} className={merged}>
      {children}
    </div>
  );
}
