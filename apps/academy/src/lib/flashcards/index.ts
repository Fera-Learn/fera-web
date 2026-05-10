import { level1PhysicsEquationSheet } from "@/lib/docs/level-1-physics/equation-sheet";
import { getCanonicalCourseId, getQuestions } from "@/lib/question-bank";

export type FlashcardSource = "equation" | "question";
export type FlashcardSourceFilter = "all" | FlashcardSource;

export type FlashcardFilters = {
  courseId: string;
  paper?: string;
  rating?: string;
  ratings?: string[];
  section?: string;
  sections?: string[];
  source?: FlashcardSourceFilter;
  topic?: string;
  topics?: string[];
};

export type FlashcardEntry = {
  back: string;
  courseId: string;
  front: string;
  id: string;
  paperTags: string[];
  rating?: string;
  sectionId?: string;
  sectionIds?: string[];
  source: FlashcardSource;
  topicId?: string;
  topicTitle?: string;
};

const EQUATION_SHEETS_BY_COURSE = new Map([
  [level1PhysicsEquationSheet.courseId, level1PhysicsEquationSheet],
]);

function slugPart(value: string) {
  const slug = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "entry";
}

function listFilter(values?: string[], fallback?: string) {
  const entries =
    values && values.length > 0 ? values : fallback ? [fallback] : [];
  const normalized = entries.map((entry) => entry.trim()).filter(Boolean);

  return normalized.length > 0 ? new Set(normalized) : null;
}

function getQuestionFlashcards(courseId: string): FlashcardEntry[] {
  const questions = getQuestions({ courseId }) ?? [];

  return questions.map((question) => ({
    back: question.answer,
    courseId: question.courseId,
    front: question.prompt,
    id: `question:${question.id}`,
    paperTags: question.paperTags,
    rating: question.rating,
    sectionId: question.sectionId,
    sectionIds: question.sectionIds,
    source: "question" as const,
    topicId: question.topicId,
    topicTitle: question.topicTitle,
  }));
}

function getEquationFlashcards(courseId: string): FlashcardEntry[] {
  const sheet = EQUATION_SHEETS_BY_COURSE.get(courseId);

  if (!sheet) {
    return [];
  }

  return sheet.sections.flatMap((section) =>
    section.equations.map((equation) => ({
      back: `\\[${equation.tex}\\]`,
      courseId,
      front: `Recall the equation for ${equation.label}.`,
      id: `equation:${section.sectionId}:${equation.topicId}:${slugPart(equation.label)}`,
      paperTags: [],
      sectionId: section.sectionId,
      sectionIds: [section.sectionId],
      source: "equation" as const,
      topicId: equation.topicId,
      topicTitle: equation.topicTitle,
    })),
  );
}

function matchesSectionOrTopic(
  card: FlashcardEntry,
  sections: Set<string> | null,
  topics: Set<string> | null,
) {
  if (!sections && !topics) {
    return true;
  }

  const cardSectionIds =
    card.sectionIds ?? (card.sectionId ? [card.sectionId] : []);
  const matchesSection = cardSectionIds.some((sectionId) =>
    sections?.has(sectionId),
  );
  const matchesTopic = Boolean(card.topicId && topics?.has(card.topicId));

  return matchesSection || matchesTopic;
}

function filterFlashcards(cards: FlashcardEntry[], filters: FlashcardFilters) {
  const sections = listFilter(filters.sections, filters.section);
  const topics = listFilter(filters.topics, filters.topic);
  const ratings = listFilter(filters.ratings, filters.rating);
  const source =
    filters.source && filters.source !== "all" ? filters.source : null;

  return cards.filter((card) => {
    if (source && card.source !== source) {
      return false;
    }

    if (!matchesSectionOrTopic(card, sections, topics)) {
      return false;
    }

    if (
      card.source === "question" &&
      filters.paper &&
      !card.paperTags.includes(filters.paper)
    ) {
      return false;
    }

    if (
      card.source === "question" &&
      ratings &&
      (!card.rating || !ratings.has(card.rating))
    ) {
      return false;
    }

    return true;
  });
}

export function getFlashcards(filters: FlashcardFilters) {
  const courseId = getCanonicalCourseId(filters.courseId);

  if (!courseId) {
    return null;
  }

  return filterFlashcards(
    [...getQuestionFlashcards(courseId), ...getEquationFlashcards(courseId)],
    { ...filters, courseId },
  );
}

export function getFlashcardCount(filters: FlashcardFilters) {
  return getFlashcards(filters)?.length ?? null;
}
