"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { DownloadIcon, FileTextIcon } from "lucide-react";

import { Button } from "@repo/ui/button";

import { PrintDocumentShell } from "@/components/academy/print-document-shell";
import type {
  Level1PhysicsEquationSheet,
  Level1PhysicsEquationSheetEquation,
  Level1PhysicsEquationSheetSection,
} from "@/lib/docs/level-1-physics/equation-sheet";

type EquationSheetPageProps = {
  printHref: string;
  sheet: Level1PhysicsEquationSheet;
};

type EquationSheetPrintDocumentProps = {
  backHref: string;
  filename: string;
  sheet: Level1PhysicsEquationSheet;
};

type SectionSlice = {
  equations: Level1PhysicsEquationSheetEquation[];
  sectionId: string;
  sectionTitle: string;
};

type PrintPage = {
  id: string;
  sections: SectionSlice[];
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

const MAX_PAGE_UNITS = 35;

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

function countEquations(sheet: Level1PhysicsEquationSheet) {
  return sheet.sections.reduce(
    (total, section) => total + section.equations.length,
    0,
  );
}

function estimateEquationUnits(equation: Level1PhysicsEquationSheetEquation) {
  const lengthUnits = Math.ceil(equation.tex.length / 110);
  const separatorUnits = (equation.tex.match(/\\\\|\\qquad|\\quad/g) ?? [])
    .length;

  return Math.max(1, lengthUnits) + Math.min(2, separatorUnits);
}

function estimateSectionUnits(section: SectionSlice) {
  return (
    2 +
    section.equations.reduce(
      (total, equation) => total + estimateEquationUnits(equation),
      0,
    )
  );
}

function splitSection(section: Level1PhysicsEquationSheetSection) {
  const slices: SectionSlice[] = [];
  let current: Level1PhysicsEquationSheetEquation[] = [];
  let currentUnits = 2;

  for (const equation of section.equations) {
    const equationUnits = estimateEquationUnits(equation);

    if (current.length > 0 && currentUnits + equationUnits > MAX_PAGE_UNITS) {
      slices.push({
        equations: current,
        sectionId: section.sectionId,
        sectionTitle: section.sectionTitle,
      });
      current = [];
      currentUnits = 2;
    }

    current.push(equation);
    currentUnits += equationUnits;
  }

  if (current.length > 0) {
    slices.push({
      equations: current,
      sectionId: section.sectionId,
      sectionTitle: section.sectionTitle,
    });
  }

  return slices;
}

function paginateSections(
  sections: Level1PhysicsEquationSheetSection[],
): PrintPage[] {
  const pages: PrintPage[] = [];
  let currentSections: SectionSlice[] = [];
  let currentUnits = 0;

  for (const section of sections) {
    for (const slice of splitSection(section)) {
      const sliceUnits = estimateSectionUnits(slice);

      if (
        currentSections.length > 0 &&
        currentUnits + sliceUnits > MAX_PAGE_UNITS
      ) {
        pages.push({
          id: `page-${pages.length + 1}`,
          sections: currentSections,
        });
        currentSections = [];
        currentUnits = 0;
      }

      currentSections.push(slice);
      currentUnits += sliceUnits;
    }
  }

  if (currentSections.length > 0) {
    pages.push({
      id: `page-${pages.length + 1}`,
      sections: currentSections,
    });
  }

  return pages;
}

function EquationRow({
  equation,
}: {
  equation: Level1PhysicsEquationSheetEquation;
}) {
  return (
    <article className="grid gap-3 border-b border-border/70 py-4 md:grid-cols-[220px_minmax(0,1fr)]">
      <div className="min-w-0">
        <h3 className="text-sm font-semibold leading-6 text-foreground">
          {equation.label}
        </h3>
        <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
          {equation.topicTitle}
        </p>
      </div>
      <div className="min-w-0 overflow-x-auto rounded-md bg-muted/30 px-3 py-2 text-sm text-foreground">
        {`\\[${equation.tex}\\]`}
      </div>
    </article>
  );
}

function EquationSection({
  section,
}: {
  section: Level1PhysicsEquationSheetSection;
}) {
  return (
    <section className="scroll-mt-24 border-t border-border pt-6">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          {section.sectionTitle}
        </h2>
        <span className="font-mono text-xs text-muted-foreground">
          {section.equations.length} equations
        </span>
      </div>
      <div>
        {section.equations.map((equation) => (
          <EquationRow
            equation={equation}
            key={`${section.sectionId}-${equation.topicId}-${equation.label}`}
          />
        ))}
      </div>
    </section>
  );
}

export function EquationSheetPage({
  printHref,
  sheet,
}: EquationSheetPageProps) {
  const ref = useMathJaxTypeset(sheet);
  const equationCount = countEquations(sheet);

  return (
    <div className="space-y-8" ref={ref}>
      <section className="flex flex-col gap-4 border-b border-border/70 pb-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted/70 text-muted-foreground">
              <FileTextIcon className="size-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-foreground">
                Course Formula Reference
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Curated equations grouped by section and linked to their source
                topics.
              </p>
            </div>
          </div>
          {sheet.selectionNote ? (
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {sheet.selectionNote}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg border border-border/70 px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {sheet.sections.length} sections
          </span>
          <span className="rounded-lg border border-border/70 px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {equationCount} equations
          </span>
          <Button asChild size="sm">
            <Link href={printHref} rel="noreferrer" target="_blank">
              <DownloadIcon className="size-4" />
              Download PDF
            </Link>
          </Button>
        </div>
      </section>

      <div className="space-y-10">
        {sheet.sections.map((section) => (
          <EquationSection key={section.sectionId} section={section} />
        ))}
      </div>
    </div>
  );
}

function PrintEquation({
  equation,
}: {
  equation: Level1PhysicsEquationSheetEquation;
}) {
  return (
    <article className="equation-sheet-print-equation">
      <div className="equation-sheet-print-equation-header">
        <h3>{equation.label}</h3>
        <span>{equation.topicTitle}</span>
      </div>
      <div className="equation-sheet-print-math">{`\\[${equation.tex}\\]`}</div>
    </article>
  );
}

function PrintSection({ section }: { section: SectionSlice }) {
  return (
    <section className="equation-sheet-print-section">
      <h2>{section.sectionTitle}</h2>
      {section.equations.map((equation) => (
        <PrintEquation
          equation={equation}
          key={`${section.sectionId}-${equation.topicId}-${equation.label}`}
        />
      ))}
    </section>
  );
}

function PrintPageView({
  page,
  pageNumber,
  sheet,
  totalPages,
}: {
  page: PrintPage;
  pageNumber: number;
  sheet: Level1PhysicsEquationSheet;
  totalPages: number;
}) {
  const courseTitle = sheet.title.replace(/\s+Equation Sheet$/u, "");

  return (
    <section className="equation-sheet-print-page">
      <header className="equation-sheet-print-header">
        <div>
          <p>{courseTitle}</p>
          <h1>Equation Sheet</h1>
        </div>
        <div>
          <span>Formula reference</span>
          <span>
            Page {pageNumber} of {totalPages}
          </span>
        </div>
      </header>
      <div className="equation-sheet-print-body">
        {page.sections.map((section, index) => (
          <PrintSection
            key={`${page.id}-${section.sectionId}-${index}`}
            section={section}
          />
        ))}
      </div>
      <footer className="equation-sheet-print-footer">
        <span>{sheet.title}</span>
        <span>{sheet.courseId}</span>
      </footer>
    </section>
  );
}

const equationSheetPrintStyles = `
  .exam-print-shell {
    background: #e5e7eb !important;
  }

  .exam-print-toolbar {
    background: rgba(255, 255, 255, 0.96) !important;
    border-color: #d4d4d8 !important;
    color: #111827 !important;
  }

  .exam-print-toolbar,
  .exam-print-toolbar * {
    color: #111827 !important;
  }

  .exam-print-toolbar a,
  .exam-print-toolbar button,
  .exam-print-toolbar select {
    background: #ffffff !important;
    border-color: #d4d4d8 !important;
  }

  .equation-sheet-print-document {
    box-sizing: border-box;
    display: grid;
    gap: 18px;
    margin: 32px auto !important;
    max-width: 210mm !important;
    width: min(210mm, calc(100vw - 32px)) !important;
  }

  @media screen {
    .equation-sheet-print-document {
      max-width: none !important;
      width: 210mm !important;
      zoom: var(--print-preview-zoom, 1);
    }
  }

  .equation-sheet-print-document,
  .equation-sheet-print-document * {
    color: #111827 !important;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  .equation-sheet-print-page {
    background: #ffffff;
    border: 1px solid #d4d4d8;
    box-sizing: border-box;
    min-height: 297mm;
    overflow: hidden;
    padding: 10mm;
    position: relative;
    width: 100%;
  }

  .equation-sheet-print-header {
    align-items: start;
    border-bottom: 2px solid #111827;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5mm;
    padding-bottom: 2.8mm;
  }

  .equation-sheet-print-header p {
    color: #525252 !important;
    font-size: 6.2pt !important;
    font-weight: 700;
    letter-spacing: 0.18em;
    line-height: 1.2 !important;
    margin: 0;
    text-transform: uppercase;
  }

  .equation-sheet-print-header h1 {
    font-size: 13pt !important;
    font-weight: 700;
    line-height: 1 !important;
    margin: 1mm 0 0;
  }

  .equation-sheet-print-header div:last-child {
    display: grid;
    gap: 0.8mm;
    text-align: right;
  }

  .equation-sheet-print-header span {
    color: #525252 !important;
    font-size: 6.2pt !important;
    font-weight: 600;
    line-height: 1.2 !important;
  }

  .equation-sheet-print-body {
    column-gap: 7mm;
    column-rule: 1px solid #d4d4d4;
    columns: 2;
  }

  .equation-sheet-print-section {
    break-inside: avoid;
    margin-bottom: 4mm;
  }

  .equation-sheet-print-section h2 {
    border-bottom: 1px solid #111827;
    font-size: 7pt !important;
    font-weight: 700;
    letter-spacing: 0.08em;
    line-height: 1.15 !important;
    margin: 0 0 1.6mm;
    padding-bottom: 1mm;
    text-transform: uppercase;
  }

  .equation-sheet-print-equation {
    border-top: 1px solid #d4d4d8;
    break-inside: avoid;
    padding: 2.5mm 0;
  }

  .equation-sheet-print-equation:first-of-type {
    border-top: 0;
    padding-top: 0;
  }

  .equation-sheet-print-equation-header {
    align-items: baseline;
    display: flex;
    gap: 2mm;
    justify-content: space-between;
  }

  .equation-sheet-print-equation-header h3 {
    font-size: 7pt !important;
    font-weight: 700;
    line-height: 1.2 !important;
    margin: 0;
    min-width: 0;
  }

  .equation-sheet-print-equation-header span {
    color: #525252 !important;
    flex: 0 1 auto;
    font-size: 5.8pt !important;
    line-height: 1.2 !important;
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .equation-sheet-print-math {
    font-size: 7.3pt !important;
    line-height: 1.1 !important;
    margin-top: 1.2mm;
    overflow: hidden;
  }

  .equation-sheet-print-math mjx-container[jax="CHTML"][display="true"] {
    margin: 0 !important;
    overflow: hidden;
    text-align: left !important;
  }

  .equation-sheet-print-footer {
    border-top: 1px solid #d4d4d8;
    bottom: 6mm;
    display: flex;
    font-size: 5.8pt !important;
    font-weight: 600;
    justify-content: space-between;
    left: 10mm;
    line-height: 1.2 !important;
    padding-top: 1.4mm;
    position: absolute;
    right: 10mm;
  }

  @media screen {
    .equation-sheet-print-page {
      box-shadow:
        0 16px 35px rgba(15, 23, 42, 0.14),
        0 1px 4px rgba(15, 23, 42, 0.1);
    }
  }

  @media print {
    @page {
      margin: 0;
      size: A4 portrait;
    }

    html,
    body {
      background: #ffffff !important;
      height: auto !important;
      overflow: visible !important;
    }

    .exam-print-shell {
      background: #ffffff !important;
      height: auto !important;
      min-height: 0 !important;
      overflow: visible !important;
    }

    .exam-print-toolbar {
      display: none !important;
    }

    .equation-sheet-print-document {
      display: block;
      margin: 0 !important;
      max-width: none !important;
      zoom: 1 !important;
      width: auto !important;
    }

    .equation-sheet-print-page {
      border: 0 !important;
      break-after: page;
      box-shadow: none !important;
      min-height: 297mm;
      page-break-after: always;
      width: 210mm;
    }

    .equation-sheet-print-page:last-child {
      break-after: auto;
      page-break-after: auto;
    }
  }
`;

export function EquationSheetPrintDocument({
  backHref,
  filename,
  sheet,
}: EquationSheetPrintDocumentProps) {
  const pages = useMemo(() => paginateSections(sheet.sections), [sheet]);

  return (
    <PrintDocumentShell
      backHref={backHref}
      dependency={sheet}
      documentClassName="equation-sheet-print-document"
      filename={filename}
      styles={equationSheetPrintStyles}
    >
      {pages.map((page, index) => (
        <PrintPageView
          key={page.id}
          page={page}
          pageNumber={index + 1}
          sheet={sheet}
          totalPages={pages.length}
        />
      ))}
    </PrintDocumentShell>
  );
}
