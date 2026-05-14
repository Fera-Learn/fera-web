"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { Separator } from "@repo/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs";

type DocsEquationProps = {
  label?: string;
  tex: string;
};

type DocsNotationItem = {
  meaning: string;
  symbol: string;
  unit?: string;
};

type DocsNotationProps = {
  items: DocsNotationItem[];
};

type DocsPhysicsAsideProps = {
  children: ReactNode;
  title?: string;
};

type DocsPhysicsExample = {
  answer: string;
  question: string;
  title: string;
};

type DocsPhysicsExamplesProps = {
  items: DocsPhysicsExample[];
};

type DocsPhysicsDerivationItem = {
  label: string;
  note?: string;
  tex: string;
};

type DocsPhysicsDerivationProps = {
  items: DocsPhysicsDerivationItem[];
};

declare global {
  interface Window {
    MathJax?: {
      startup?: {
        promise?: Promise<void>;
      };
      typesetPromise?: (elements?: HTMLElement[]) => Promise<void>;
    };
  }
}

function useMathJaxTypeset(dependency: unknown) {
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

    const handleMathJaxReady = () => {
      typeset();
    };

    window.addEventListener("mathjax-ready", handleMathJaxReady);
    typeset();

    return () => {
      cancelled = true;
      window.removeEventListener("mathjax-ready", handleMathJaxReady);

      if (retryTimeout) {
        window.clearTimeout(retryTimeout);
      }

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [dependency]);

  return ref;
}

function isPhysicalUnit(value: string) {
  const unit = normalizePhysicalUnit(value);
  const unitToken =
    "(?:kg|m|s|A|K|mol|cd|rad|deg|N|J|W|Pa|Hz|C|V|T|F|H|Wb|dB|eV|\\\\Omega)";
  const unitGroup = `${unitToken}(?:\\^\\{-?\\d+\\})?(?:\\s+${unitToken}(?:\\^\\{-?\\d+\\})?)*`;

  return new RegExp(`^${unitGroup}(?:\\s*,\\s*${unitGroup})*$`).test(unit);
}

function normalizePhysicalUnit(value: string) {
  return value
    .trim()
    .replace(/\^(-?\d+)/g, "^{$1}")
    .replace(/\s*,\s*/g, ", ")
    .replace(/\s+/g, " ");
}

function renderNotationUnit(unit: string) {
  if (!isPhysicalUnit(unit)) {
    return unit;
  }

  const tex = normalizePhysicalUnit(unit)
    .split(/\s*,\s*/)
    .map((part) => part.replace(/\s+/g, "\\,"))
    .join(",\\;");

  return `\\(\\mathrm{${tex}}\\)`;
}

function renderExampleText(value: string) {
  let previousWasDisplayEquation = false;

  return value
    .split(/(\\\(.+?\\\)|\\\[.+?\\\]|\(.+?\)|\[[^\]]+\])/g)
    .filter(Boolean)
    .map((part, index) => {
      const escapedInlineMath = part.match(/^\\\((.+)\\\)$/);
      const escapedDisplayMath = part.match(/^\\\[(.+)\\\]$/);
      const shorthandInlineMath = part.match(/^\((.+)\)$/);
      const shorthandDisplayMath = part.match(/^\[([^\]]+)\]$/);
      const inlineMath = escapedInlineMath ?? shorthandInlineMath;
      const displayMath = escapedDisplayMath ?? shorthandDisplayMath;

      if (inlineMath) {
        const tex = inlineMath[1] ?? "";
        previousWasDisplayEquation = false;

        return (
          <span
            className="docs-physics-example-inline-equation"
            key={`${part}-${index}`}
          >
            {escapedInlineMath ? part : `\\(${tex}\\)`}
          </span>
        );
      }

      if (displayMath) {
        const tex = displayMath[1] ?? "";
        previousWasDisplayEquation = true;

        return (
          <div
            className="docs-physics-example-equation"
            key={`${part}-${index}`}
          >
            {`\\[${tex}\\]`}
          </div>
        );
      }

      const text = previousWasDisplayEquation
        ? part.replace(/^[\s.,;:]+/, "")
        : part;
      previousWasDisplayEquation = false;

      if (!text) {
        return null;
      }

      return (
        <span className="docs-physics-example-text" key={`${part}-${index}`}>
          {text}
        </span>
      );
    })
    .filter(Boolean);
}

export function DocsEquation({ label, tex }: DocsEquationProps) {
  const ref = useMathJaxTypeset(tex);

  return (
    <div className="docs-equation">
      {label ? <div className="docs-equation-label">{label}</div> : null}
      <div className="docs-equation-body" ref={ref}>{`\\[${tex}\\]`}</div>
    </div>
  );
}

export function DocsNotation({ items }: DocsNotationProps) {
  const ref = useMathJaxTypeset(items);

  return (
    <div className="docs-notation" ref={ref}>
      {items.map((item) => (
        <div
          className="docs-notation-row"
          key={`${item.symbol}-${item.meaning}`}
        >
          <div className="docs-notation-symbol">{`\\(${item.symbol}\\)`}</div>
          <div className="docs-notation-meaning">{item.meaning}</div>
          {item.unit ? (
            <div className="docs-notation-unit">
              {renderNotationUnit(item.unit)}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function DocsPhysicsAside({ children, title }: DocsPhysicsAsideProps) {
  return (
    <aside className="docs-physics-aside">
      {title ? <div className="docs-physics-aside-title">{title}</div> : null}
      <div>{children}</div>
    </aside>
  );
}

export function DocsPhysicsDerivation({ items }: DocsPhysicsDerivationProps) {
  const ref = useMathJaxTypeset(items);

  return (
    <div className="docs-physics-derivation" ref={ref}>
      {items.map((item) => (
        <div
          className="docs-physics-derivation-row"
          key={`${item.label}-${item.tex}`}
        >
          <div className="docs-physics-derivation-label">{item.label}</div>
          <div className="docs-physics-derivation-equation">{`\\[${item.tex}\\]`}</div>
          {item.note ? (
            <div className="docs-physics-derivation-note">{item.note}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function DocsPhysicsExamples({ items }: DocsPhysicsExamplesProps) {
  const defaultValue = items[0]?.title;
  const [value, setValue] = useState(defaultValue ?? "");
  const ref = useMathJaxTypeset(value);

  if (!defaultValue) {
    return null;
  }

  return (
    <Tabs
      className="docs-physics-examples"
      onValueChange={setValue}
      value={value}
    >
      <TabsList className="docs-physics-examples-list" variant="line">
        {items.map((item) => (
          <TabsTrigger key={item.title} value={item.title}>
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <div ref={ref}>
        {items.map((item) => (
          <TabsContent
            className="docs-physics-example-panel"
            key={item.title}
            value={item.title}
          >
            <div>
              <div className="docs-physics-example-label">Question</div>
              <div>{renderExampleText(item.question)}</div>
            </div>
            <Separator />
            <div>
              <div className="docs-physics-example-label">Answer</div>
              <div>{renderExampleText(item.answer)}</div>
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
