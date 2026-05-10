"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  AlertCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  FlipHorizontalIcon,
  LayersIcon,
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

import type { FlashcardEntry, FlashcardSourceFilter } from "@/lib/flashcards";

type FilterOption = {
  label: string;
  value: string;
};

type TopicFilterOption = FilterOption & {
  kind: "section" | "topic";
  sectionId: string;
  sectionLabel: string;
};

type FlashcardsResponse = {
  courseId: string;
  error?: string;
  flashcards: FlashcardEntry[];
  total: number;
};

type FlashcardsWorkspaceProps = {
  courseId: string;
  difficultyOptions: FilterOption[];
  paperOptions: FilterOption[];
  topicOptions: TopicFilterOption[];
};

type StoredFlashcardState = {
  currentCardId?: string;
  flipped?: boolean;
  paper?: string;
  ratings?: string[];
  sections?: string[];
  shuffle?: boolean;
  shuffledIds?: string[];
  source?: FlashcardSourceFilter;
  topics?: string[];
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
const SOURCE_OPTIONS: Array<{ label: string; value: FlashcardSourceFilter }> = [
  { label: "All cards", value: "all" },
  { label: "Questions", value: "question" },
  { label: "Equations", value: "equation" },
];

function normalizeQuestionText(value: string) {
  return value
    .replace(/\\n(?=\\|[A-Z0-9+\-=([{|])/g, "\n")
    .replace(/(\\\])\\n/g, "$1\n")
    .replace(/([.!?:;])\\n/g, "$1\n");
}

function getStorageKey(courseId: string) {
  return `fera-academy-flashcards:v1:${courseId}:state`;
}

function readStoredState(courseId: string): StoredFlashcardState {
  try {
    const raw = localStorage.getItem(getStorageKey(courseId));

    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw) as StoredFlashcardState;

    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeStoredState(courseId: string, state: StoredFlashcardState) {
  try {
    localStorage.setItem(getStorageKey(courseId), JSON.stringify(state));
  } catch {
    // Keep the in-memory state when storage is unavailable.
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

    const handleMathJaxReady = () => typeset();

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

function getTopicOptionId(option: TopicFilterOption) {
  return option.value.slice(`${option.kind}:`.length);
}

function getTopicLabel(
  selectedSections: string[],
  options: TopicFilterOption[],
) {
  if (selectedSections.length === 0) {
    return "All topics";
  }

  if (selectedSections.length > 1) {
    return `${selectedSections.length} topics`;
  }

  const selected = options.find((option) =>
    selectedSections.includes(getTopicOptionId(option)),
  );

  return selected?.label ?? "1 topic";
}

function getDifficultyLabel(selectedRatings: string[]) {
  if (selectedRatings.length === 0) {
    return "All difficulties";
  }

  return selectedRatings.length === 1
    ? (selectedRatings[0] ?? "All difficulties")
    : `${selectedRatings.length} difficulties`;
}

function getPaperLabel(options: FilterOption[], paper: string) {
  if (paper === ALL_VALUE) {
    return "All papers";
  }

  return options.find((option) => option.value === paper)?.label ?? paper;
}

function buildFlashcardsUrl({
  courseId,
  paper,
  ratings,
  sections,
  source,
  topics,
}: {
  courseId: string;
  paper: string;
  ratings: string[];
  sections: string[];
  source: FlashcardSourceFilter;
  topics: string[];
}) {
  const params = new URLSearchParams();

  if (source !== ALL_VALUE) {
    params.set("source", source);
  }

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

  const query = params.toString();

  return `/api/courses/${courseId}/flashcards${query ? `?${query}` : ""}`;
}

async function fetchFlashcards(requestUrl: string, signal: AbortSignal) {
  const response = await fetch(requestUrl, { signal });
  const data = (await response.json()) as FlashcardsResponse;

  if (!response.ok) {
    throw new Error(data.error ?? "Flashcards request failed.");
  }

  return data.flashcards;
}

function shuffleIds(cards: FlashcardEntry[]) {
  return cards
    .map((card) => ({ id: card.id, sort: Math.random() }))
    .sort((left, right) => left.sort - right.sort)
    .map((entry) => entry.id);
}

function getOrderedCards(
  cards: FlashcardEntry[],
  shuffle: boolean,
  shuffledIds: string[],
) {
  if (!shuffle) {
    return cards;
  }

  const cardsById = new Map(cards.map((card) => [card.id, card]));
  const ordered = shuffledIds
    .map((id) => cardsById.get(id))
    .filter((card): card is FlashcardEntry => Boolean(card));

  return ordered.length === cards.length ? ordered : cards;
}

function isFormElement(target: EventTarget | null) {
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
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

function FlashcardBody({
  card,
  flipped,
}: {
  card: FlashcardEntry;
  flipped: boolean;
}) {
  const text = normalizeQuestionText(flipped ? card.back : card.front);

  return (
    <div className="whitespace-pre-line text-center text-xl leading-9 text-foreground/88">
      {text}
    </div>
  );
}

export function FlashcardsWorkspace({
  courseId,
  difficultyOptions,
  paperOptions,
  topicOptions,
}: FlashcardsWorkspaceProps) {
  const storedState =
    typeof window === "undefined" ? {} : readStoredState(courseId);
  const [cards, setCards] = useState<FlashcardEntry[]>([]);
  const [currentCardId, setCurrentCardId] = useState(
    storedState.currentCardId ?? "",
  );
  const [error, setError] = useState<string | null>(null);
  const [flipped, setFlipped] = useState(Boolean(storedState.flipped));
  const [loading, setLoading] = useState(true);
  const [paper, setPaper] = useState(storedState.paper ?? ALL_VALUE);
  const [selectedRatings, setSelectedRatings] = useState(
    storedState.ratings ?? [],
  );
  const [selectedSections, setSelectedSections] = useState(
    storedState.sections ?? [],
  );
  const [selectedTopics, setSelectedTopics] = useState(
    storedState.topics ?? [],
  );
  const [shuffle, setShuffle] = useState(Boolean(storedState.shuffle));
  const [shuffledIds, setShuffledIds] = useState(storedState.shuffledIds ?? []);
  const [source, setSource] = useState<FlashcardSourceFilter>(
    storedState.source ?? "all",
  );
  const [topicSelectorOpen, setTopicSelectorOpen] = useState(false);
  const requestControllerRef = useRef<AbortController | null>(null);
  const ref = useMathJaxTypeset({ cards, currentCardId, flipped });

  const loadCards = useCallback(() => {
    requestControllerRef.current?.abort();
    const controller = new AbortController();
    requestControllerRef.current = controller;
    const requestUrl = buildFlashcardsUrl({
      courseId,
      paper,
      ratings: source === "equation" ? [] : selectedRatings,
      sections: selectedSections,
      source,
      topics: selectedTopics,
    });

    void fetchFlashcards(requestUrl, controller.signal)
      .then((nextCards) => {
        setError(null);
        setCards(nextCards);
        setFlipped(false);
        setCurrentCardId((current) => {
          if (nextCards.some((card) => card.id === current)) {
            return current;
          }

          return nextCards[0]?.id ?? "";
        });
        setShuffledIds((currentIds) => {
          if (!shuffle) {
            return currentIds;
          }

          const nextIdSet = new Set(nextCards.map((card) => card.id));
          const valid =
            currentIds.length === nextCards.length &&
            currentIds.every((id) => nextIdSet.has(id));

          return valid ? currentIds : shuffleIds(nextCards);
        });
      })
      .catch((fetchError: unknown) => {
        if (controller.signal.aborted) {
          return;
        }

        setCards([]);
        setCurrentCardId("");
        setError(
          fetchError instanceof Error
            ? fetchError.message
            : "Flashcards request failed.",
        );
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });
  }, [
    courseId,
    paper,
    selectedRatings,
    selectedSections,
    selectedTopics,
    shuffle,
    source,
  ]);

  useEffect(() => {
    loadCards();

    return () => {
      requestControllerRef.current?.abort();
      requestControllerRef.current = null;
    };
  }, [loadCards]);

  useEffect(() => {
    writeStoredState(courseId, {
      currentCardId,
      flipped,
      paper,
      ratings: selectedRatings,
      sections: selectedSections,
      shuffle,
      shuffledIds,
      source,
      topics: selectedTopics,
    });
  }, [
    courseId,
    currentCardId,
    flipped,
    paper,
    selectedRatings,
    selectedSections,
    selectedTopics,
    shuffle,
    shuffledIds,
    source,
  ]);

  const orderedCards = useMemo(
    () => getOrderedCards(cards, shuffle, shuffledIds),
    [cards, shuffle, shuffledIds],
  );
  const currentIndex = Math.max(
    0,
    orderedCards.findIndex((card) => card.id === currentCardId),
  );
  const currentCard = orderedCards[currentIndex] ?? null;
  const sectionTopicOptions = topicOptions.filter(
    (option) => option.kind === "section",
  );
  const sourceLabel =
    SOURCE_OPTIONS.find((option) => option.value === source)?.label ??
    "All cards";
  const topicLabel = getTopicLabel(selectedSections, sectionTopicOptions);
  const paperLabel = getPaperLabel(paperOptions, paper);
  const difficultyLabel = getDifficultyLabel(selectedRatings);
  const questionFiltersDisabled = source === "equation";

  const goToOffset = useCallback(
    (offset: number) => {
      if (orderedCards.length === 0) {
        return;
      }

      const nextIndex =
        (currentIndex + offset + orderedCards.length) % orderedCards.length;
      setCurrentCardId(orderedCards[nextIndex]?.id ?? "");
      setFlipped(false);
    },
    [currentIndex, orderedCards],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isFormElement(event.target)) {
        return;
      }

      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        setFlipped((visible) => !visible);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToOffset(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goToOffset(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToOffset]);

  const toggleRating = (rating: string) => {
    setSelectedRatings((current) =>
      current.includes(rating)
        ? current.filter((entry) => entry !== rating)
        : [...current, rating],
    );
  };

  const toggleTopicOption = (option: TopicFilterOption) => {
    const optionId = getTopicOptionId(option);
    setSelectedSections((current) =>
      current.includes(optionId)
        ? current.filter((entry) => entry !== optionId)
        : [...current, optionId],
    );
    setSelectedTopics([]);
  };

  const clearFilters = () => {
    setPaper(ALL_VALUE);
    setSelectedRatings([]);
    setSelectedSections([]);
    setSelectedTopics([]);
    setSource("all");
  };

  const toggleShuffle = () => {
    setShuffle((enabled) => {
      const next = !enabled;
      setShuffledIds(next ? shuffleIds(cards) : []);
      return next;
    });
  };

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="border-b border-border/70 bg-background px-4 py-3 lg:px-6">
        <div className="overflow-x-auto">
          <div className="flex min-w-max items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="w-40 justify-between"
                  size="sm"
                  variant="outline"
                >
                  <span className="truncate">{sourceLabel}</span>
                  <ChevronDownIcon className="size-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-40">
                <DropdownMenuRadioGroup
                  onValueChange={(value) =>
                    setSource(value as FlashcardSourceFilter)
                  }
                  value={source}
                >
                  {SOURCE_OPTIONS.map((option) => (
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
                          selectedSections.length === 0 ? "true" : undefined
                        }
                        onSelect={() => setSelectedSections([])}
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
                  className="w-44 justify-between"
                  disabled={questionFiltersDisabled}
                  size="sm"
                  variant="outline"
                >
                  <span className="truncate">{paperLabel}</span>
                  <ChevronDownIcon className="size-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-44">
                <DropdownMenuRadioGroup onValueChange={setPaper} value={paper}>
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="w-44 justify-between"
                  disabled={questionFiltersDisabled}
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
                onClick={toggleShuffle}
                size="sm"
                variant={shuffle ? "default" : "outline"}
              >
                <RefreshCwIcon className="size-4" />
                {shuffle ? "Shuffled" : "Shuffle"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main
        className="min-h-0 flex-1 overflow-y-auto px-5 py-8 lg:px-8"
        ref={ref}
      >
        {error ? (
          <EmptyState
            description={error}
            icon={<AlertCircleIcon className="size-4" />}
            title="Request failed"
          />
        ) : !currentCard ? (
          <EmptyState
            description={
              loading
                ? "Loading flashcards."
                : "No matching flashcards were found for these filters."
            }
            icon={<LayersIcon className="size-4" />}
            title={loading ? "Loading" : "No flashcards"}
          />
        ) : (
          <section className="mx-auto flex min-h-full max-w-4xl flex-col justify-center gap-5">
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.16em]">
                  {currentCard.source === "equation" ? "Equation" : "Question"}
                </div>
                <div className="mt-1">
                  {currentCard.topicTitle ?? "Course flashcard"}
                </div>
              </div>
              <div className="rounded-lg border border-border/70 px-2.5 py-1 font-mono text-xs">
                {currentIndex + 1} / {orderedCards.length}
              </div>
            </div>

            <button
              aria-label={
                flipped
                  ? "Flashcard back. Click to show front."
                  : "Flashcard front. Click to show back."
              }
              className="min-h-[22rem] rounded-3xl border border-border/70 bg-card px-6 py-10 text-card-foreground shadow-sm transition hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:px-12"
              onClick={() => setFlipped((visible) => !visible)}
              type="button"
            >
              <div className="mb-6 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {flipped ? (
                    <CheckIcon className="size-3.5" />
                  ) : (
                    <FlipHorizontalIcon className="size-3.5" />
                  )}
                  {flipped ? "Back" : "Front"}
                </span>
              </div>
              <FlashcardBody card={currentCard} flipped={flipped} />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button
                onClick={() => goToOffset(-1)}
                size="sm"
                variant="outline"
              >
                Previous
              </Button>
              <Button
                onClick={() => setFlipped((visible) => !visible)}
                size="sm"
              >
                <FlipHorizontalIcon className="size-4" />
                Flip
              </Button>
              <Button onClick={() => goToOffset(1)} size="sm" variant="outline">
                Next
              </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground">
              Space or Enter flips. Arrow keys move between cards.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
