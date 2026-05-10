"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  AlertCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  EyeIcon,
  EyeOffIcon,
  ListChecksIcon,
  RefreshCwIcon,
} from "lucide-react";

import { Button } from "@repo/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@repo/ui/command";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@repo/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@repo/ui/popover";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@repo/ui/resizable";
import { Separator } from "@repo/ui/separator";

type FilterOption = {
  label: string;
  value: string;
};

type TopicFilterOption = FilterOption & {
  kind: "section" | "topic";
  sectionId: string;
  sectionLabel: string;
};

type RandomQuestion = {
  answer: string;
  id: string;
  marks?: number;
  paperTags: string[];
  prompt: string;
  rating?: string;
  source: "exam" | "topic";
  title?: string;
  topicTitle?: string;
};

type QuestionsResponse = {
  courseId: string;
  error?: string;
  questions: RandomQuestion[];
  total: number;
};

type RandomQuestionsWorkspaceProps = {
  courseId: string;
  difficultyOptions: FilterOption[];
  paperOptions: FilterOption[];
  topicOptions: TopicFilterOption[];
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

const ALL_VALUE = "all";

function normalizeQuestionText(value: string) {
  return value
    .replace(/\\n(?=\\|[A-Z0-9+\-=([{|])/g, "\n")
    .replace(/(\\\])\\n/g, "$1\n")
    .replace(/([.!?:;])\\n/g, "$1\n");
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

function QuestionText({ children }: { children: string }) {
  const text = normalizeQuestionText(children);
  const ref = useMathJaxTypeset(text);

  return (
    <div
      className="whitespace-pre-line text-[15px] leading-7 text-foreground/82"
      ref={ref}
    >
      {text}
    </div>
  );
}

function WorkspacePanel({
  children,
  icon,
  title,
}: {
  children: ReactNode;
  icon?: ReactNode;
  title?: string;
}) {
  return (
    <section className="h-full min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain px-5 py-6 lg:px-8">
      <div className="min-h-full">
        {title ? (
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {icon}
            <span>{title}</span>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

function EmptyState({
  description,
  icon,
  title,
}: {
  description: string;
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center gap-3 px-6 py-10 text-center">
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

function questionMeta(question: RandomQuestion) {
  const sourceLabel = question.source === "exam" ? "Exam" : "Topic";
  const context = question.topicTitle ?? question.title ?? sourceLabel;
  const paperLabel = question.paperTags
    .map((tag) => tag.replace(/-/g, " "))
    .join(", ");

  return [sourceLabel, context, paperLabel].filter(Boolean).join(" / ");
}

function QuestionCard({
  loading,
  onToggleAnswer,
  question,
  showAnswer,
}: {
  loading: boolean;
  onToggleAnswer: () => void;
  question: RandomQuestion | null;
  showAnswer: boolean;
}) {
  if (!question) {
    return (
      <EmptyState
        description={
          loading
            ? "Loading a random question."
            : "No matching question was found for these filters."
        }
        icon={<ListChecksIcon className="size-4" />}
        title={loading ? "Loading" : "No question"}
      />
    );
  }

  return (
    <article className="mx-auto max-w-3xl py-2">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Question
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            {questionMeta(question)}
          </div>
        </div>
        {question.rating ? (
          <div
            aria-label={`Difficulty ${question.rating}`}
            className="rounded-md bg-muted px-2 py-1 font-mono text-xs font-medium text-muted-foreground"
            title={`Difficulty ${question.rating}`}
          >
            {question.rating}
          </div>
        ) : null}
      </div>
      <QuestionText>{question.prompt}</QuestionText>
      <div className="mt-10 flex justify-end">
        <Button
          onClick={onToggleAnswer}
          size="sm"
          variant={showAnswer ? "outline" : "default"}
        >
          {showAnswer ? (
            <EyeOffIcon className="size-4" />
          ) : (
            <EyeIcon className="size-4" />
          )}
          {showAnswer ? "Hide answer" : "Show answer"}
        </Button>
      </div>
    </article>
  );
}

function AnswerCard({ question }: { question: RandomQuestion | null }) {
  if (!question) {
    return (
      <EmptyState
        description="Choose a matching question before showing an answer."
        icon={<CheckIcon className="size-4" />}
        title="No answer"
      />
    );
  }

  return (
    <article className="mx-auto max-w-3xl py-2">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Answer
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            {questionMeta(question)}
          </div>
        </div>
        {question.marks ? (
          <div className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
            {question.marks} marks
          </div>
        ) : null}
      </div>
      <QuestionText>{question.answer}</QuestionText>
    </article>
  );
}

function buildQuestionUrl({
  courseId,
  paper,
  ratings,
  sections,
  topics,
}: {
  courseId: string;
  paper: string;
  ratings: string[];
  sections: string[];
  topics: string[];
}) {
  const params = new URLSearchParams({
    limit: "1",
    random: "1",
  });

  if (paper !== ALL_VALUE) {
    params.set("paper", paper);
  }

  for (const section of sections) {
    params.append("section", section);
  }

  for (const topic of topics) {
    params.append("topic", topic);
  }

  for (const rating of ratings) {
    params.append("rating", rating);
  }

  return `/api/courses/${courseId}/questions?${params.toString()}`;
}

async function fetchQuestion(requestUrl: string, signal: AbortSignal) {
  const response = await fetch(requestUrl, { signal });
  const data = (await response.json()) as QuestionsResponse;

  if (!response.ok) {
    throw new Error(data.error ?? "Question request failed.");
  }

  return data.questions[0] ?? null;
}

function getDifficultyLabel(selectedRatings: string[]) {
  if (selectedRatings.length === 0) {
    return "All difficulties";
  }

  if (selectedRatings.length === 1) {
    return selectedRatings[0] ?? "All difficulties";
  }

  return `${selectedRatings.length} difficulties`;
}

function getPaperLabel(paperOptions: FilterOption[], paper: string) {
  if (paper === ALL_VALUE) {
    return "All papers";
  }

  return paperOptions.find((option) => option.value === paper)?.label ?? paper;
}

function getTopicOptionId(option: TopicFilterOption) {
  return option.value.slice(`${option.kind}:`.length);
}

function getTopicLabel({
  selectedSections,
  selectedTopics,
  topicOptions,
}: {
  selectedSections: string[];
  selectedTopics: string[];
  topicOptions: TopicFilterOption[];
}) {
  const selectedCount = selectedSections.length + selectedTopics.length;

  if (selectedCount === 0) {
    return "All topics";
  }

  if (selectedCount > 1) {
    return `${selectedCount} topics`;
  }

  const selectedOption = topicOptions.find((option) => {
    const optionId = getTopicOptionId(option);

    return option.kind === "section"
      ? selectedSections.includes(optionId)
      : selectedTopics.includes(optionId);
  });

  return selectedOption?.label ?? "1 topic";
}

export function RandomQuestionsWorkspace({
  courseId,
  difficultyOptions,
  paperOptions,
  topicOptions,
}: RandomQuestionsWorkspaceProps) {
  const [answerVisible, setAnswerVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [paper, setPaper] = useState(ALL_VALUE);
  const [question, setQuestion] = useState<RandomQuestion | null>(null);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [topicSelectorOpen, setTopicSelectorOpen] = useState(false);
  const requestControllerRef = useRef<AbortController | null>(null);

  const loadQuestion = useCallback(
    (filters: {
      paper: string;
      ratings: string[];
      sections: string[];
      topics: string[];
    }) => {
      requestControllerRef.current?.abort();

      const controller = new AbortController();
      requestControllerRef.current = controller;
      const requestUrl = buildQuestionUrl({ courseId, ...filters });

      setAnswerVisible(false);
      setError(null);
      setLoading(true);

      void fetchQuestion(requestUrl, controller.signal)
        .then((nextQuestion) => {
          setQuestion(nextQuestion);
        })
        .catch((fetchError: unknown) => {
          if (controller.signal.aborted) {
            return;
          }

          setQuestion(null);
          setError(
            fetchError instanceof Error
              ? fetchError.message
              : "Question request failed.",
          );
        })
        .finally(() => {
          if (!controller.signal.aborted) {
            setLoading(false);
          }
        });
    },
    [courseId],
  );

  useEffect(() => {
    const controller = new AbortController();
    requestControllerRef.current = controller;
    const requestUrl = buildQuestionUrl({
      courseId,
      paper: ALL_VALUE,
      ratings: [],
      sections: [],
      topics: [],
    });

    void fetchQuestion(requestUrl, controller.signal)
      .then((nextQuestion) => {
        setQuestion(nextQuestion);
      })
      .catch((fetchError: unknown) => {
        if (controller.signal.aborted) {
          return;
        }

        setQuestion(null);
        setError(
          fetchError instanceof Error
            ? fetchError.message
            : "Question request failed.",
        );
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => {
      requestControllerRef.current?.abort();
      requestControllerRef.current = null;
    };
  }, [courseId]);

  const toggleRating = (rating: string) => {
    const nextRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((entry) => entry !== rating)
      : [...selectedRatings, rating];

    setSelectedRatings(nextRatings);
    loadQuestion({
      paper,
      ratings: nextRatings,
      sections: selectedSections,
      topics: selectedTopics,
    });
  };

  const clearFilters = () => {
    setPaper(ALL_VALUE);
    setSelectedRatings([]);
    setSelectedSections([]);
    setSelectedTopics([]);
    loadQuestion({
      paper: ALL_VALUE,
      ratings: [],
      sections: [],
      topics: [],
    });
  };

  const selectPaper = (nextPaper: string) => {
    setPaper(nextPaper);
    loadQuestion({
      paper: nextPaper,
      ratings: selectedRatings,
      sections: selectedSections,
      topics: selectedTopics,
    });
  };

  const toggleTopicOption = (option: TopicFilterOption) => {
    if (option.kind !== "section") {
      return;
    }

    const optionId = getTopicOptionId(option);
    const nextSections = selectedSections.includes(optionId)
      ? selectedSections.filter((section) => section !== optionId)
      : [...selectedSections, optionId];

    setSelectedSections(nextSections);
    setSelectedTopics([]);
    loadQuestion({
      paper,
      ratings: selectedRatings,
      sections: nextSections,
      topics: [],
    });
  };

  const clearTopicFilters = () => {
    setSelectedSections([]);
    setSelectedTopics([]);
    loadQuestion({
      paper,
      ratings: selectedRatings,
      sections: [],
      topics: [],
    });
  };

  const sectionTopicOptions = topicOptions.filter(
    (option) => option.kind === "section",
  );
  const difficultyLabel = getDifficultyLabel(selectedRatings);
  const paperLabel = getPaperLabel(paperOptions, paper);
  const topicLabel = getTopicLabel({
    selectedSections,
    selectedTopics,
    topicOptions: sectionTopicOptions,
  });

  const questionPanel = (
    <WorkspacePanel>
      {error ? (
        <EmptyState
          description={error}
          icon={<AlertCircleIcon className="size-4" />}
          title="Request failed"
        />
      ) : (
        <QuestionCard
          loading={loading}
          onToggleAnswer={() => setAnswerVisible((visible) => !visible)}
          question={question}
          showAnswer={answerVisible}
        />
      )}
    </WorkspacePanel>
  );

  const answerPanel = (
    <WorkspacePanel icon={<CheckIcon className="size-4" />} title="Answer">
      <AnswerCard question={question} />
    </WorkspacePanel>
  );

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="border-b border-border/70 bg-background px-4 py-3 lg:px-6">
        <div className="overflow-x-auto">
          <div className="flex min-w-max items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  aria-label="Paper filter"
                  className="w-44 justify-between"
                  size="sm"
                  variant="outline"
                >
                  <span className="truncate">{paperLabel}</span>
                  <ChevronDownIcon className="size-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-44">
                <DropdownMenuRadioGroup
                  onValueChange={selectPaper}
                  value={paper}
                >
                  <DropdownMenuRadioItem value={ALL_VALUE}>
                    All papers
                  </DropdownMenuRadioItem>
                  {paperOptions.map((option) => (
                    <DropdownMenuRadioItem
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Popover
              open={topicSelectorOpen}
              onOpenChange={setTopicSelectorOpen}
            >
              <PopoverTrigger asChild>
                <Button
                  aria-label="Topic filter"
                  aria-expanded={topicSelectorOpen}
                  className="w-72 justify-between"
                  role="combobox"
                  size="sm"
                  variant="outline"
                >
                  <span className="truncate">{topicLabel}</span>
                  <ChevronDownIcon className="size-4 text-muted-foreground" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="h-80 w-72 p-0">
                <Command className="h-full rounded-2xl">
                  <CommandInput placeholder="Search topics..." />
                  <CommandList className="h-64 max-h-none">
                    <CommandEmpty>No topics found.</CommandEmpty>
                    <CommandGroup>
                      <CommandItem
                        data-checked={
                          selectedSections.length === 0 &&
                          selectedTopics.length === 0
                            ? "true"
                            : undefined
                        }
                        onSelect={clearTopicFilters}
                        value="all topics"
                      >
                        All topics
                      </CommandItem>
                      {sectionTopicOptions.map((option) => {
                        const optionId = getTopicOptionId(option);

                        return (
                          <CommandItem
                            data-checked={
                              selectedSections.includes(optionId)
                                ? "true"
                                : undefined
                            }
                            key={option.value}
                            onSelect={() => toggleTopicOption(option)}
                            value={`${option.label} ${option.sectionLabel}`}
                          >
                            {option.label}
                          </CommandItem>
                        );
                      })}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  aria-label="Difficulty filter"
                  className="w-44 justify-between"
                  size="sm"
                  variant="outline"
                >
                  <span className="truncate">{difficultyLabel}</span>
                  <ChevronDownIcon className="size-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-44">
                <DropdownMenuLabel>Difficulty</DropdownMenuLabel>
                {difficultyOptions.map((option) => (
                  <DropdownMenuCheckboxItem
                    checked={selectedRatings.includes(option.value)}
                    key={option.value}
                    onCheckedChange={() => toggleRating(option.value)}
                    onSelect={(event) => event.preventDefault()}
                  >
                    <span className="font-mono text-xs">{option.label}</span>
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="ml-2 flex shrink-0 items-center gap-2">
              <Button onClick={clearFilters} size="sm" variant="ghost">
                Clear
              </Button>
              <Button
                disabled={loading}
                onClick={() =>
                  loadQuestion({
                    paper,
                    ratings: selectedRatings,
                    sections: selectedSections,
                    topics: selectedTopics,
                  })
                }
                size="sm"
              >
                <RefreshCwIcon className="size-4" />
                {loading ? "Loading" : "Random question"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="min-h-0 flex-1 overflow-hidden">
        {answerVisible && question && !error ? (
          <>
            <ResizablePanelGroup
              className="hidden h-full min-h-0 overflow-visible lg:flex"
              orientation="horizontal"
            >
              <ResizablePanel
                className="min-h-0 overflow-hidden"
                defaultSize={52}
                minSize={30}
              >
                {questionPanel}
              </ResizablePanel>
              <ResizableHandle className="-my-3 bg-border/70 transition-colors hover:bg-border" />
              <ResizablePanel
                className="min-h-0 overflow-hidden"
                defaultSize={48}
                minSize={30}
              >
                {answerPanel}
              </ResizablePanel>
            </ResizablePanelGroup>
            <div className="h-full min-h-0 overflow-y-auto lg:hidden">
              <div className="min-h-0">{questionPanel}</div>
              <Separator />
              <div className="min-h-0">{answerPanel}</div>
            </div>
          </>
        ) : (
          <div className="h-full min-h-0 overflow-hidden">{questionPanel}</div>
        )}
      </main>
    </div>
  );
}
