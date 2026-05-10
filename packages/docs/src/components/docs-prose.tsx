"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { cn } from "@repo/ui/lib/utils";

type DocsProseProps = {
  children: ReactNode;
  className?: string;
};

export function DocsProse({ children, className }: DocsProseProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    let cancelled = false;
    let retryTimeout: number | undefined;
    let frame: number | undefined;

    const typeset = () => {
      if (cancelled) {
        return;
      }

      const mathJax = window.MathJax;

      if (!mathJax?.typesetPromise) {
        retryTimeout = window.setTimeout(typeset, 60);
        return;
      }

      const runTypeset = () => {
        if (cancelled) {
          return;
        }

        frame = requestAnimationFrame(() => {
          void mathJax.typesetPromise?.([element]);
        });
      };

      const startup = mathJax.startup?.promise;

      if (startup) {
        void startup.then(runTypeset);
        return;
      }

      runTypeset();
    };

    window.addEventListener("mathjax-ready", typeset);
    typeset();

    return () => {
      cancelled = true;
      window.removeEventListener("mathjax-ready", typeset);

      if (retryTimeout) {
        window.clearTimeout(retryTimeout);
      }

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [children]);

  return (
    <div className={cn("docs-prose", className)} ref={ref}>
      {children}
    </div>
  );
}
