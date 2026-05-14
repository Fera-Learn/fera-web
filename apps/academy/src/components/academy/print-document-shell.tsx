"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import Link from "next/link";
import { ArrowLeftIcon, PrinterIcon } from "lucide-react";

import { Button } from "@repo/ui/button";

import {
  PrintZoomControls,
  usePrintZoom,
} from "@/components/academy/print-zoom-controls";

type PrintDocumentShellProps = {
  backHref: string;
  children: ReactNode;
  dependency: unknown;
  documentClassName: string;
  filename: string;
  styles: string;
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

function useDocumentTitle(filename: string) {
  useEffect(() => {
    const originalTitle = document.title;

    document.title = filename.replace(/\.pdf$/u, "");

    return () => {
      document.title = originalTitle;
    };
  }, [filename]);
}

function usePrintMathJax(dependency: unknown) {
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

async function typesetBeforePrint(element: HTMLElement) {
  const startedAt = Date.now();
  const timeoutMs = 4000;

  while (
    !window.MathJax?.typesetPromise &&
    Date.now() - startedAt < timeoutMs
  ) {
    await new Promise((resolve) => window.setTimeout(resolve, 100));
  }

  const mathJax = window.MathJax;

  if (!mathJax?.typesetPromise) {
    return;
  }

  try {
    await mathJax.startup?.promise;
    await mathJax.typesetPromise([element]);
  } catch {
    // Printing should remain available if MathJax fails to load.
  }
}

export function PrintDocumentShell({
  backHref,
  children,
  dependency,
  documentClassName,
  filename,
  styles,
}: PrintDocumentShellProps) {
  const ref = usePrintMathJax(dependency);
  const [isPreparingPrint, setIsPreparingPrint] = useState(false);
  const printZoom = usePrintZoom();

  useDocumentTitle(filename);

  const handlePrint = async () => {
    const element = ref.current;

    setIsPreparingPrint(true);

    if (element) {
      await typesetBeforePrint(element);
    }

    setIsPreparingPrint(false);
    window.print();
  };

  return (
    <div className="exam-print-shell h-svh overflow-auto bg-neutral-200 text-neutral-950 print:h-auto print:overflow-visible print:bg-white">
      <style>{styles}</style>
      <div className="exam-print-toolbar sticky top-0 z-30 border-b border-neutral-300 bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
          <Button asChild size="sm" variant="outline">
            <Link href={backHref}>
              <ArrowLeftIcon className="size-4" />
              Back
            </Link>
          </Button>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="font-mono text-xs">{filename}</span>
            <PrintZoomControls
              canZoomIn={printZoom.canZoomIn}
              canZoomOut={printZoom.canZoomOut}
              onReset={printZoom.resetZoom}
              onZoomChange={printZoom.setZoom}
              onZoomIn={printZoom.zoomIn}
              onZoomOut={printZoom.zoomOut}
              zoom={printZoom.zoom}
              zoomLevels={printZoom.zoomLevels}
            />
            <Button
              disabled={isPreparingPrint}
              onClick={() => {
                void handlePrint();
              }}
              size="sm"
              type="button"
            >
              <PrinterIcon className="size-4" />
              {isPreparingPrint ? "Preparing" : "Print / Save PDF"}
            </Button>
          </div>
        </div>
      </div>
      <div
        className={documentClassName}
        ref={ref}
        style={
          {
            "--print-preview-zoom": printZoom.zoomScale,
          } as CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
}
