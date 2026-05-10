"use client";

import {
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import {
  ArrowLeftIcon,
  CheckIcon,
  DownloadIcon,
  FileTextIcon,
  PanelRightIcon,
} from "lucide-react";

import { Button } from "@repo/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@repo/ui/resizable";
import { cn } from "@repo/ui/lib/utils";

import type { Level1PhysicsExamPaper } from "@/lib/docs/level-1-physics/exams";

type ExamLayout = "split" | "paper" | "answers";

type ExamPapersWorkspaceProps = {
  backHref?: string;
  courseLabel: string;
  exportHrefs?: {
    answers: string;
    questions: string;
  };
  papers?: Level1PhysicsExamPaper[];
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

const LAYOUT_STORAGE_KEY = "fera-academy-exam-layout";
const COMPACT_MEDIA_QUERY = "(max-width: 1180px)";

const layoutOptions: Array<{
  icon: typeof PanelRightIcon;
  label: string;
  value: ExamLayout;
}> = [
  { icon: PanelRightIcon, label: "Split view", value: "split" },
  { icon: FileTextIcon, label: "Paper only", value: "paper" },
  { icon: CheckIcon, label: "Answers only", value: "answers" },
];

function getStoredLayout(): ExamLayout | null {
  try {
    const stored = localStorage.getItem(LAYOUT_STORAGE_KEY);

    if (stored === "split" || stored === "paper" || stored === "answers") {
      return stored;
    }
  } catch {
    return null;
  }

  return null;
}

function persistLayout(layout: ExamLayout) {
  try {
    localStorage.setItem(LAYOUT_STORAGE_KEY, layout);
  } catch {
    // Keep the current in-memory layout if storage is unavailable.
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

function EmptyPanel({
  description,
  icon,
  title,
}: {
  description: string;
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="flex h-full min-h-64 flex-col items-center justify-center gap-3 px-6 py-10 text-center">
      <div className="flex size-10 items-center justify-center rounded-lg bg-muted/60 text-muted-foreground">
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <p className="max-w-sm text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

function WorkspacePanel({ children }: { children: ReactNode }) {
  return (
    <section className="h-full min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain px-5 pb-8 pt-16 lg:px-8">
      <div className="min-h-full">{children}</div>
    </section>
  );
}

function ExamText({ children }: { children: string }) {
  return (
    <div className="whitespace-pre-line text-[15px] leading-7 text-foreground/82">
      {children}
    </div>
  );
}

function PartHeading({ label, marks }: { label: string; marks: number }) {
  return (
    <div className="mb-2 flex items-center justify-between gap-3">
      <div className="text-xs font-medium tracking-[0.16em] text-muted-foreground">
        {label}
      </div>
      <div className="font-mono text-xs font-medium tracking-normal text-muted-foreground">
        {marks} {marks === 1 ? "mark" : "marks"}
      </div>
    </div>
  );
}

function PaperIntro({ paper }: { paper: Level1PhysicsExamPaper }) {
  return (
    <header className="border-b border-border/70 pb-6">
      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        <span>{paper.timeAllowed}</span>
        <span aria-hidden="true">/</span>
        <span>{paper.totalMarks} marks</span>
      </div>
      <h1 className="text-2xl font-semibold tracking-normal text-foreground">
        {paper.title}
      </h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
        {paper.description}
      </p>
    </header>
  );
}

function ConstantsList({ paper }: { paper: Level1PhysicsExamPaper }) {
  if (paper.constants.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-border/70 py-5">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        Constants
      </h2>
      <div className="grid gap-x-6 gap-y-2 text-sm text-foreground/82 sm:grid-cols-2">
        {paper.constants.map((constant) => (
          <div
            className="flex min-w-0 items-baseline justify-between gap-3"
            key={constant.label}
          >
            <span className="truncate text-muted-foreground">
              {constant.label}
            </span>
            <span className="font-mono text-xs tracking-normal">
              \( {constant.value} \)
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PaperPanel({
  courseLabel,
  paper,
}: {
  courseLabel: string;
  paper?: Level1PhysicsExamPaper;
}) {
  const ref = useMathJaxTypeset(paper);

  if (!paper) {
    return (
      <EmptyPanel
        description={`${courseLabel} exam papers have not been written yet.`}
        icon={<FileTextIcon className="size-4" />}
        title="No exam papers"
      />
    );
  }

  if (paper.questions.length === 0) {
    return (
      <EmptyPanel
        description={
          paper.placeholder ??
          `${paper.title} has been planned but not written yet.`
        }
        icon={<FileTextIcon className="size-4" />}
        title="Paper planned"
      />
    );
  }

  return (
    <div className="mx-auto max-w-4xl" ref={ref}>
      <PaperIntro paper={paper} />
      <section className="border-b border-border/70 py-5">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Instructions
        </h2>
        <ul className="space-y-2 text-sm leading-6 text-foreground/82">
          {paper.instructions.map((instruction) => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ul>
      </section>
      <ConstantsList paper={paper} />
      <div>
        {paper.questions.map((question, index) => (
          <Fragment key={question.id}>
            {index === 0 ||
            paper.questions[index - 1]?.section !== question.section ? (
              <h2 className="border-b border-border/70 pt-7 pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {question.section}
              </h2>
            ) : null}
            <article className="border-b border-border/60 py-5 last:border-b-0">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {question.number}. {question.title}
                  </h3>
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  {question.marks} marks
                </div>
              </div>
              {question.stem ? (
                <div className="mb-5">
                  <ExamText>{question.stem}</ExamText>
                </div>
              ) : null}
              <div className="space-y-5">
                {question.parts.map((part) => (
                  <section key={part.id}>
                    <PartHeading label={part.label} marks={part.marks} />
                    <ExamText>{part.prompt}</ExamText>
                  </section>
                ))}
              </div>
            </article>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function AnswersPanel({
  courseLabel,
  paper,
}: {
  courseLabel: string;
  paper?: Level1PhysicsExamPaper;
}) {
  const ref = useMathJaxTypeset(paper);

  if (!paper) {
    return (
      <EmptyPanel
        description={`Answers will appear here when ${courseLabel} exam papers are available.`}
        icon={<CheckIcon className="size-4" />}
        title="No answers"
      />
    );
  }

  if (paper.questions.length === 0) {
    return (
      <EmptyPanel
        description={
          paper.placeholder ??
          `${paper.title} answers will appear once the paper is written.`
        }
        icon={<CheckIcon className="size-4" />}
        title="Answers planned"
      />
    );
  }

  return (
    <div className="mx-auto max-w-4xl" ref={ref}>
      <header className="border-b border-border/70 pb-6">
        <div className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Worked answers
        </div>
        <h1 className="text-2xl font-semibold tracking-normal text-foreground">
          {paper.title}
        </h1>
      </header>
      <div>
        {paper.questions.map((question, index) => (
          <Fragment key={question.id}>
            {index === 0 ||
            paper.questions[index - 1]?.section !== question.section ? (
              <h2 className="border-b border-border/70 pt-7 pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {question.section}
              </h2>
            ) : null}
            <article className="border-b border-border/60 py-5 last:border-b-0">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-foreground">
                  Answer {question.number}. {question.title}
                </h3>
                <div className="font-mono text-xs text-muted-foreground">
                  {question.marks} marks
                </div>
              </div>
              <div className="space-y-6">
                {question.parts.map((part) => (
                  <section key={part.id}>
                    <PartHeading label={part.label} marks={part.marks} />
                    <div className="mb-3 text-sm leading-6 text-muted-foreground">
                      {part.prompt}
                    </div>
                    <ExamText>{part.answer}</ExamText>
                  </section>
                ))}
              </div>
            </article>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function ExamPapersWorkspace({
  backHref,
  courseLabel,
  exportHrefs,
  papers = [],
}: ExamPapersWorkspaceProps) {
  const [layout, setLayout] = useState<ExamLayout>("paper");
  const [selectedPaperId, setSelectedPaperId] = useState(papers[0]?.id ?? "");

  useEffect(() => {
    const mediaQuery = window.matchMedia(COMPACT_MEDIA_QUERY);
    const syncLayout = () => {
      setLayout(mediaQuery.matches ? "paper" : (getStoredLayout() ?? "split"));
    };

    syncLayout();
    mediaQuery.addEventListener("change", syncLayout);

    return () => mediaQuery.removeEventListener("change", syncLayout);
  }, []);

  const setAndPersistLayout = (nextLayout: ExamLayout) => {
    setLayout(nextLayout);
    persistLayout(nextLayout);
  };

  const selectedPaper = useMemo(() => {
    return papers.find((paper) => paper.id === selectedPaperId) ?? papers[0];
  }, [papers, selectedPaperId]);

  const paperPanel = (
    <WorkspacePanel>
      <PaperPanel courseLabel={courseLabel} paper={selectedPaper} />
    </WorkspacePanel>
  );
  const answersPanel = (
    <WorkspacePanel>
      <AnswersPanel courseLabel={courseLabel} paper={selectedPaper} />
    </WorkspacePanel>
  );

  return (
    <div className="relative h-full min-h-0">
      <div className="pointer-events-none absolute inset-x-3 top-3 z-10 flex items-center justify-between gap-3">
        <div className="pointer-events-auto flex min-w-0 items-center gap-2">
          {backHref ? (
            <Button
              asChild
              className="border-border/70 bg-background/85 shadow-sm backdrop-blur hover:bg-background"
              size="sm"
              variant="outline"
            >
              <Link href={backHref}>
                <ArrowLeftIcon className="size-4" />
                Back
              </Link>
            </Button>
          ) : papers.length > 1 ? (
            <div className="flex min-w-0 items-center gap-1 rounded-lg border border-border/70 bg-background/85 p-1 shadow-sm backdrop-blur">
              {papers.map((paper) => (
                <Button
                  className={cn(
                    "h-8 rounded-md px-3 text-xs",
                    selectedPaper?.id === paper.id &&
                      "bg-muted text-foreground",
                  )}
                  key={paper.id}
                  onClick={() => setSelectedPaperId(paper.id)}
                  size="sm"
                  type="button"
                  variant="ghost"
                >
                  {paper.label}
                </Button>
              ))}
            </div>
          ) : (
            <div className="flex h-10 min-w-0 items-center gap-2 rounded-lg border border-border/70 bg-background/85 px-3 text-sm font-medium text-foreground shadow-sm backdrop-blur">
              <FileTextIcon className="size-4 shrink-0 text-muted-foreground" />
              <span className="truncate">
                {selectedPaper?.label ?? "Exam Papers"}
              </span>
            </div>
          )}
        </div>
        <div className="pointer-events-auto flex flex-wrap items-center justify-end gap-2">
          {exportHrefs ? (
            <div className="flex items-center gap-1 rounded-lg border border-border/70 bg-background/85 p-1 shadow-sm backdrop-blur">
              <Button
                asChild
                className="h-8 rounded-md px-2 text-xs"
                size="sm"
                variant="ghost"
              >
                <Link
                  href={exportHrefs.questions}
                  rel="noreferrer"
                  target="_blank"
                >
                  <DownloadIcon className="size-4" />
                  Question PDF
                </Link>
              </Button>
              <Button
                asChild
                className="h-8 rounded-md px-2 text-xs"
                size="sm"
                variant="ghost"
              >
                <Link
                  href={exportHrefs.answers}
                  rel="noreferrer"
                  target="_blank"
                >
                  <DownloadIcon className="size-4" />
                  Answer PDF
                </Link>
              </Button>
            </div>
          ) : null}
          <div className="flex items-center gap-1 rounded-lg border border-border/70 bg-background/85 p-1 shadow-sm backdrop-blur">
            {layoutOptions.map((option) => {
              const Icon = option.icon;

              return (
                <Button
                  aria-label={option.label}
                  className={cn(
                    "size-8 rounded-md px-0",
                    layout === option.value && "bg-muted text-foreground",
                  )}
                  key={option.value}
                  onClick={() => setAndPersistLayout(option.value)}
                  size="icon-sm"
                  title={option.label}
                  type="button"
                  variant="ghost"
                >
                  <Icon className="size-4" />
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {layout === "paper" ? (
        <div className="h-full min-h-0 overflow-hidden">{paperPanel}</div>
      ) : layout === "answers" ? (
        <div className="h-full min-h-0 overflow-hidden">{answersPanel}</div>
      ) : (
        <ResizablePanelGroup
          className="h-full min-h-0 overflow-visible"
          orientation="horizontal"
        >
          <ResizablePanel
            className="min-h-0 overflow-hidden"
            defaultSize={54}
            minSize={30}
          >
            {paperPanel}
          </ResizablePanel>
          <ResizableHandle className="-my-3 bg-border/70 transition-colors hover:bg-border" />
          <ResizablePanel
            className="min-h-0 overflow-hidden"
            defaultSize={46}
            minSize={30}
          >
            {answersPanel}
          </ResizablePanel>
        </ResizablePanelGroup>
      )}
    </div>
  );
}
