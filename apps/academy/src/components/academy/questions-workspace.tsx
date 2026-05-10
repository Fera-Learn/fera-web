"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { BookOpenIcon, CheckIcon, ListChecksIcon } from "lucide-react";

import { Button } from "@repo/ui/button";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@repo/ui/native-select";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@repo/ui/resizable";

type QuestionLayout = "right" | "left" | "questions" | "answers";
type WorkspaceSide = "content" | "answers";
type LayoutPresetId =
  | "content-left-questions-right"
  | "questions-left-content-right"
  | "answers-left-questions-right"
  | "questions-left-answers-right"
  | "questions-only"
  | "answers-only";

type PhysicsQuestion = {
  answer: string;
  id: string;
  prompt: string;
  rating: string;
};

type QuestionsWorkspaceProps = {
  answers?: ReactNode;
  content: ReactNode;
  contentHref: string;
  questions?: PhysicsQuestion[];
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

const LAYOUT_STORAGE_KEY = "fera-academy-question-layout";
const SIDE_STORAGE_KEY = "fera-academy-question-side";
const COMPACT_MEDIA_QUERY = "(max-width: 1180px)";

function normalizeQuestionText(value: string) {
  return value
    .replace(/\\n(?=\\|[A-Z0-9+\-=([{|])/g, "\n")
    .replace(/(\\\])\\n/g, "$1\n")
    .replace(/([.!?:;])\\n/g, "$1\n");
}

const layoutPresets: Array<{
  label: string;
  shortLabel: string;
  side?: WorkspaceSide;
  split: boolean;
  value: QuestionLayout;
  id: LayoutPresetId;
}> = [
  {
    id: "content-left-questions-right",
    label: "Content left / Questions right",
    shortLabel: "Content / Questions",
    side: "content",
    split: true,
    value: "right",
  },
  {
    id: "questions-left-content-right",
    label: "Questions left / Content right",
    shortLabel: "Questions / Content",
    side: "content",
    split: true,
    value: "left",
  },
  {
    id: "answers-left-questions-right",
    label: "Answers left / Questions right",
    shortLabel: "Answers / Questions",
    side: "answers",
    split: true,
    value: "right",
  },
  {
    id: "questions-left-answers-right",
    label: "Questions left / Answers right",
    shortLabel: "Questions / Answers",
    side: "answers",
    split: true,
    value: "left",
  },
  {
    id: "questions-only",
    label: "Questions only",
    shortLabel: "Questions only",
    split: false,
    value: "questions",
  },
  {
    id: "answers-only",
    label: "Answers only",
    shortLabel: "Answers only",
    side: "answers",
    split: false,
    value: "answers",
  },
];

function getPresetId(
  layout: QuestionLayout,
  side: WorkspaceSide,
): LayoutPresetId {
  if (layout === "questions") {
    return "questions-only";
  }

  if (layout === "answers") {
    return "answers-only";
  }

  if (side === "answers") {
    return layout === "left"
      ? "questions-left-answers-right"
      : "answers-left-questions-right";
  }

  return layout === "left"
    ? "questions-left-content-right"
    : "content-left-questions-right";
}

function getStoredLayout(): QuestionLayout | null {
  try {
    const stored = localStorage.getItem(LAYOUT_STORAGE_KEY);

    if (
      stored === "right" ||
      stored === "left" ||
      stored === "questions" ||
      stored === "answers"
    ) {
      return stored;
    }
  } catch {
    return null;
  }

  return null;
}

function getStoredSide(): WorkspaceSide {
  try {
    const stored = localStorage.getItem(SIDE_STORAGE_KEY);

    if (stored === "answers") {
      return stored;
    }
  } catch {
    return "content";
  }

  return "content";
}

function persistLayout(layout: QuestionLayout) {
  try {
    localStorage.setItem(LAYOUT_STORAGE_KEY, layout);
  } catch {
    // Keep the current in-memory layout if storage is unavailable.
  }
}

function persistSide(side: WorkspaceSide) {
  try {
    localStorage.setItem(SIDE_STORAGE_KEY, side);
  } catch {
    // Keep the current in-memory side if storage is unavailable.
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

function QuestionText({ children }: { children: string }) {
  const text = normalizeQuestionText(children);

  return (
    <div className="whitespace-pre-line text-[15px] leading-7 text-foreground/82">
      {text}
    </div>
  );
}

function QuestionHeading({ label, rating }: { label: string; rating: string }) {
  return (
    <div className="mb-2 flex items-center justify-between gap-3">
      <div className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </div>
      <div
        aria-label={`Difficulty ${rating}`}
        className="font-mono text-xs font-medium tracking-normal text-muted-foreground"
        title={`Difficulty ${rating}`}
      >
        {rating}
      </div>
    </div>
  );
}

function QuestionList({ items }: { items: PhysicsQuestion[] }) {
  const ref = useMathJaxTypeset(items);

  return (
    <div className="mx-auto max-w-3xl" ref={ref}>
      {items.map((item, index) => (
        <article
          className="border-b border-border/60 py-5 last:border-b-0"
          key={item.id}
        >
          <QuestionHeading
            label={`Question ${index + 1}`}
            rating={item.rating}
          />
          <QuestionText>{item.prompt}</QuestionText>
        </article>
      ))}
    </div>
  );
}

function AnswerList({ items }: { items: PhysicsQuestion[] }) {
  const ref = useMathJaxTypeset(items);

  return (
    <div className="mx-auto max-w-3xl" ref={ref}>
      {items.map((item, index) => (
        <article
          className="border-b border-border/60 py-5 last:border-b-0"
          key={item.id}
        >
          <QuestionHeading label={`Answer ${index + 1}`} rating={item.rating} />
          <div className="mb-4 text-sm leading-6 text-muted-foreground">
            {item.prompt}
          </div>
          <QuestionText>{item.answer}</QuestionText>
        </article>
      ))}
    </div>
  );
}

function WorkspacePanel({
  children,
  icon,
  title,
}: {
  children: ReactNode;
  icon: ReactNode;
  title: string;
}) {
  return (
    <section className="h-full min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain px-5 pb-8 pt-16 lg:px-8">
      <div className="min-h-full">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {icon}
          <span>{title}</span>
        </div>
        {children}
      </div>
    </section>
  );
}

export function QuestionsWorkspace({
  answers,
  content,
  contentHref,
  questions = [],
}: QuestionsWorkspaceProps) {
  const [layout, setLayout] = useState<QuestionLayout>("questions");
  const [isCompact, setIsCompact] = useState(false);
  const [side, setSide] = useState<WorkspaceSide>(() => {
    if (typeof window === "undefined") {
      return "content";
    }

    return getStoredSide();
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(COMPACT_MEDIA_QUERY);
    const syncLayout = () => {
      const compact = mediaQuery.matches;

      setIsCompact(compact);
      setLayout(compact ? "questions" : (getStoredLayout() ?? "right"));
    };

    syncLayout();
    mediaQuery.addEventListener("change", syncLayout);

    return () => mediaQuery.removeEventListener("change", syncLayout);
  }, []);

  const setAndPersistLayout = (nextLayout: QuestionLayout) => {
    if (nextLayout === "answers") {
      setSide("answers");
      persistSide("answers");
    }

    setLayout(nextLayout);
    persistLayout(nextLayout);
  };

  const applyLayoutPreset = (preset: (typeof layoutPresets)[number]) => {
    if (preset.side) {
      setSide(preset.side);
      persistSide(preset.side);
    }

    setAndPersistLayout(preset.value);
  };

  const applyLayoutPresetId = (presetId: LayoutPresetId) => {
    const preset = layoutPresets.find((entry) => entry.id === presetId);

    if (!preset || (isCompact && preset.split)) {
      return;
    }

    applyLayoutPreset(preset);
  };

  const hasContent = useMemo(() => Boolean(content), [content]);
  const hasAnswers = useMemo(() => Boolean(answers), [answers]);
  const hasQuestions = questions.length > 0;

  const contentPanel = (
    <WorkspacePanel icon={<BookOpenIcon className="size-4" />} title="Content">
      {hasContent ? (
        content
      ) : (
        <EmptyPanel
          description="Content has not been added for this topic yet."
          icon={<BookOpenIcon className="size-4" />}
          title="No content"
        />
      )}
    </WorkspacePanel>
  );

  const answersPanel = (
    <WorkspacePanel icon={<CheckIcon className="size-4" />} title="Answers">
      {hasAnswers ? (
        answers
      ) : hasQuestions ? (
        <AnswerList items={questions} />
      ) : (
        <EmptyPanel
          description="Answers have not been added for this topic yet."
          icon={<CheckIcon className="size-4" />}
          title="No answers"
        />
      )}
    </WorkspacePanel>
  );

  const questionsPanel = (
    <WorkspacePanel
      icon={<ListChecksIcon className="size-4" />}
      title="Questions"
    >
      {hasQuestions ? (
        <QuestionList items={questions} />
      ) : (
        <EmptyPanel
          description="Questions have not been added for this topic yet."
          icon={<ListChecksIcon className="size-4" />}
          title="No questions"
        />
      )}
    </WorkspacePanel>
  );

  const questionsFirst = layout === "left";
  const secondaryPanel = side === "answers" ? answersPanel : contentPanel;
  const activePresetId = getPresetId(layout, side);

  return (
    <div className="relative h-full min-h-0">
      <div className="pointer-events-none absolute inset-x-3 top-3 z-10 flex items-center justify-between gap-3">
        <div className="pointer-events-auto flex items-center gap-2">
          <Button
            asChild
            className="border-border/70 bg-background/85 shadow-sm backdrop-blur hover:bg-background"
            size="sm"
            variant="outline"
          >
            <Link href={contentHref}>
              <BookOpenIcon className="size-4" />
              Content
            </Link>
          </Button>
        </div>
        <div className="pointer-events-auto flex flex-wrap items-center justify-end gap-2">
          <div className="flex items-center gap-2 rounded-lg border border-border/70 bg-background/85 px-2 py-1 shadow-sm backdrop-blur">
            <span className="hidden pl-1 text-xs font-medium text-muted-foreground sm:inline">
              Layout
            </span>
            <NativeSelect
              aria-label="Layout"
              className="w-44 max-w-[calc(100vw-7rem)] sm:w-72"
              onChange={(event) =>
                applyLayoutPresetId(event.target.value as LayoutPresetId)
              }
              size="sm"
              value={activePresetId}
            >
              <NativeSelectOptGroup label="Split view">
                {layoutPresets
                  .filter((preset) => preset.split)
                  .map((preset) => (
                    <NativeSelectOption
                      disabled={isCompact}
                      key={preset.id}
                      value={preset.id}
                    >
                      {preset.label}
                    </NativeSelectOption>
                  ))}
              </NativeSelectOptGroup>
              <NativeSelectOptGroup label="Single view">
                {layoutPresets
                  .filter((preset) => !preset.split)
                  .map((preset) => (
                    <NativeSelectOption key={preset.id} value={preset.id}>
                      {preset.label}
                    </NativeSelectOption>
                  ))}
              </NativeSelectOptGroup>
            </NativeSelect>
          </div>
        </div>
      </div>

      {layout === "questions" ? (
        <div className="h-full min-h-0 overflow-hidden">{questionsPanel}</div>
      ) : layout === "answers" ? (
        <div className="h-full min-h-0 overflow-hidden">{answersPanel}</div>
      ) : (
        <ResizablePanelGroup
          className="h-full min-h-0 overflow-visible"
          orientation="horizontal"
        >
          {questionsFirst ? (
            <>
              <ResizablePanel
                className="min-h-0 overflow-hidden"
                defaultSize={42}
                minSize={25}
              >
                {questionsPanel}
              </ResizablePanel>
              <ResizableHandle className="-my-3 bg-border/70 transition-colors hover:bg-border" />
              <ResizablePanel
                className="min-h-0 overflow-hidden"
                defaultSize={58}
                minSize={25}
              >
                {secondaryPanel}
              </ResizablePanel>
            </>
          ) : (
            <>
              <ResizablePanel
                className="min-h-0 overflow-hidden"
                defaultSize={58}
                minSize={25}
              >
                {secondaryPanel}
              </ResizablePanel>
              <ResizableHandle className="-my-3 bg-border/70 transition-colors hover:bg-border" />
              <ResizablePanel
                className="min-h-0 overflow-hidden"
                defaultSize={42}
                minSize={25}
              >
                {questionsPanel}
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      )}
    </div>
  );
}
