import { level1PhysicsExamSets } from "@/lib/docs/level-1-physics/exams";
import { level1MathIPhysicsExamSets } from "@/lib/docs/level-1-math-i-physics/exams";
import { level1MathIIPhysicsExamSets } from "@/lib/docs/level-1-math-ii-physics/exams";
import { level1MathIPhysicsQuestionTopics } from "@/lib/docs/level-1-math-i-physics/questions.generated";
import { level1MathIIPhysicsQuestionTopics } from "@/lib/docs/level-1-math-ii-physics/questions.generated";
import { level1PhysicsQuestionTopics } from "@/lib/docs/level-1-physics/questions.generated";
import type { Level1PhysicsExamSet } from "@/lib/docs/level-1-physics/exams/types";

type QuestionSource = "exam" | "topic";

export type QuestionBankFilters = {
  courseId: string;
  limit?: number;
  paper?: string;
  random?: boolean;
  rating?: string;
  ratings?: string[];
  section?: string;
  sections?: string[];
  set?: string;
  source?: QuestionSource;
  topic?: string;
  topics?: string[];
};

export type QuestionBankEntry = {
  answer: string;
  courseId: string;
  id: string;
  marks?: number;
  paperId?: string;
  paperTags: string[];
  parts?: Array<{
    answer: string;
    id: string;
    label: string;
    marks: number;
    prompt: string;
  }>;
  prompt: string;
  rating?: string;
  sectionId?: string;
  sectionIds?: string[];
  setId?: string;
  source: QuestionSource;
  stem?: string;
  title?: string;
  topicId?: string;
  topicTitle?: string;
};

export type QuestionBankPaper = {
  courseId: string;
  description: string;
  href: string;
  label: string;
  paperId: string;
  setId: string;
  timeAllowed: string;
  title: string;
  totalMarks: number;
};

const LEVEL_1_PHYSICS_COURSE_ID = "level-1-physics";
const LEVEL_1_MATH_I_PHYSICS_COURSE_ID = "level-1-math-i-physics";
const LEVEL_1_MATH_II_PHYSICS_COURSE_ID = "level-1-math-ii-physics";

type TopicQuestionData = {
  courseId: string;
  paperTags: string[];
  questions: Array<{
    answer: string;
    id: string;
    paperTags?: string[];
    prompt: string;
    rating: string;
  }>;
  sectionId: string;
  topicId: string;
  topicTitle: string;
};

type CourseQuestionProvider = {
  aliases: string[];
  courseId: string;
  getExamQuestions: () => QuestionBankEntry[];
  getPapers: () => QuestionBankPaper[];
  getTopicQuestions: () => QuestionBankEntry[];
  label: string;
};

const LEVEL_1_PHYSICS_EXAM_SECTION_IDS: Record<string, string[]> = {
  "Section A: Electric Fields": [
    "electric-charge-fields",
    "gausss-law",
    "electric-potential",
    "capacitors-dielectrics",
  ],
  "Section A: Electromagnetism": [
    "electric-charge-fields",
    "gausss-law",
    "electric-potential",
    "capacitors-dielectrics",
    "current-resistance",
    "dc-circuits",
    "magnetic-fields-forces",
    "magnetic-field-sources",
    "electromagnetic-induction",
    "inductance",
    "alternating-current",
    "electromagnetic-waves",
  ],
  "Section A: Mechanics": [
    "measurement-vectors",
    "one-dimensional-motion",
    "motion-in-space",
    "forces-newtons-laws",
    "applying-force-models",
    "work-energy-power",
    "potential-energy",
    "momentum-systems",
    "rigid-body-rotation",
    "rotational-dynamics",
    "equilibrium-materials",
    "fluids",
    "gravitation",
  ],
  "Section B: Electromagnetism": [
    "electric-charge-fields",
    "gausss-law",
    "electric-potential",
    "capacitors-dielectrics",
    "current-resistance",
    "dc-circuits",
    "magnetic-fields-forces",
    "magnetic-field-sources",
    "electromagnetic-induction",
    "inductance",
    "alternating-current",
    "electromagnetic-waves",
  ],
  "Section B: Relativity and Quantum Mechanics": [
    "relativity",
    "photons",
    "matter-waves",
    "quantum-wave-functions",
    "atomic-quantum-structure",
    "molecules-condensed-matter",
    "nuclear-physics",
    "particles-cosmology",
  ],
  "Section B: Waves and Optics": [
    "oscillations",
    "mechanical-waves",
    "sound",
    "light-propagation",
    "geometric-optics",
    "interference",
    "diffraction",
  ],
  "Section C: Oscillations": ["oscillations"],
  "Section C: Oscillations and Collisions, Conservation and Fields": [
    "oscillations",
    "momentum-systems",
    "potential-energy",
    "gravitation",
  ],
  "Section C: Relativity": ["relativity"],
  "Section D: Quantum Physics": [
    "photons",
    "matter-waves",
    "quantum-wave-functions",
    "atomic-quantum-structure",
    "molecules-condensed-matter",
    "nuclear-physics",
    "particles-cosmology",
  ],
};

function getLevel1PhysicsExamQuestionSectionIds(section: string) {
  return [section, ...(LEVEL_1_PHYSICS_EXAM_SECTION_IDS[section] ?? [])];
}

function getTopicQuestionEntries({
  courseId,
  questionTopics,
}: {
  courseId: string;
  questionTopics: unknown;
}): QuestionBankEntry[] {
  const topics = questionTopics as TopicQuestionData[];

  return topics.flatMap((topic) =>
    topic.questions.map((question) => ({
      answer: question.answer,
      courseId,
      id: question.id,
      paperTags: question.paperTags ?? topic.paperTags,
      prompt: question.prompt,
      rating: question.rating,
      sectionId: topic.sectionId,
      sectionIds: [topic.sectionId],
      source: "topic" as const,
      topicId: topic.topicId,
      topicTitle: topic.topicTitle,
    })),
  );
}

function getLevel1PhysicsTopicQuestionEntries(): QuestionBankEntry[] {
  return getTopicQuestionEntries({
    courseId: LEVEL_1_PHYSICS_COURSE_ID,
    questionTopics: level1PhysicsQuestionTopics,
  });
}

function getLevel1MathIPhysicsTopicQuestionEntries(): QuestionBankEntry[] {
  return getTopicQuestionEntries({
    courseId: LEVEL_1_MATH_I_PHYSICS_COURSE_ID,
    questionTopics: level1MathIPhysicsQuestionTopics,
  });
}

function getLevel1MathIIPhysicsTopicQuestionEntries(): QuestionBankEntry[] {
  return getTopicQuestionEntries({
    courseId: LEVEL_1_MATH_II_PHYSICS_COURSE_ID,
    questionTopics: level1MathIIPhysicsQuestionTopics,
  });
}

function getExamQuestionEntries({
  courseId,
  examSets,
  getSectionIds = (section: string) => [section],
}: {
  courseId: string;
  examSets: Level1PhysicsExamSet[];
  getSectionIds?: (section: string) => string[];
}): QuestionBankEntry[] {
  return examSets.flatMap((set) =>
    set.papers.flatMap((paper) =>
      paper.questions.map((question) => {
        const parts = question.parts.map((part) => ({
          answer: part.answer,
          id: part.id,
          label: part.label,
          marks: part.marks,
          prompt: part.prompt,
        }));

        return {
          answer: parts
            .map((part) => `${part.label} ${part.answer}`)
            .join("\n\n"),
          courseId,
          id: `${set.id}-${paper.id}-${question.id}`,
          marks: question.marks,
          paperId: paper.id,
          paperTags: [paper.id],
          parts,
          prompt: [question.stem, ...parts.map((part) => part.prompt)]
            .filter(Boolean)
            .join("\n\n"),
          sectionId: question.section,
          sectionIds: getSectionIds(question.section),
          setId: set.id,
          source: "exam" as const,
          stem: question.stem,
          title: question.title,
        };
      }),
    ),
  );
}

function getLevel1MathIPhysicsExamQuestionEntries(): QuestionBankEntry[] {
  return getExamQuestionEntries({
    courseId: LEVEL_1_MATH_I_PHYSICS_COURSE_ID,
    examSets: level1MathIPhysicsExamSets,
  });
}

function getLevel1MathIIPhysicsExamQuestionEntries(): QuestionBankEntry[] {
  return getExamQuestionEntries({
    courseId: LEVEL_1_MATH_II_PHYSICS_COURSE_ID,
    examSets: level1MathIIPhysicsExamSets,
  });
}

function getLevel1PhysicsExamQuestionEntries(): QuestionBankEntry[] {
  return getExamQuestionEntries({
    courseId: LEVEL_1_PHYSICS_COURSE_ID,
    examSets: level1PhysicsExamSets,
    getSectionIds: getLevel1PhysicsExamQuestionSectionIds,
  });
}

function getExamPapers({
  courseId,
  examSets,
}: {
  courseId: string;
  examSets: Level1PhysicsExamSet[];
}): QuestionBankPaper[] {
  return examSets.flatMap<QuestionBankPaper>((set) =>
    set.papers.map((paper) => ({
      courseId,
      description: paper.description,
      href: `/${courseId}/exam-papers/${set.id}/${paper.id}`,
      label: paper.label,
      paperId: paper.id,
      setId: set.id,
      timeAllowed: paper.timeAllowed,
      title: paper.title,
      totalMarks: paper.totalMarks,
    })),
  );
}

function getLevel1MathIPhysicsPapers(): QuestionBankPaper[] {
  return getExamPapers({
    courseId: LEVEL_1_MATH_I_PHYSICS_COURSE_ID,
    examSets: level1MathIPhysicsExamSets,
  });
}

function getLevel1MathIIPhysicsPapers(): QuestionBankPaper[] {
  return getExamPapers({
    courseId: LEVEL_1_MATH_II_PHYSICS_COURSE_ID,
    examSets: level1MathIIPhysicsExamSets,
  });
}

function getLevel1PhysicsPapers(): QuestionBankPaper[] {
  return getExamPapers({
    courseId: LEVEL_1_PHYSICS_COURSE_ID,
    examSets: level1PhysicsExamSets,
  });
}

const COURSE_PROVIDERS: CourseQuestionProvider[] = [
  {
    aliases: [],
    courseId: LEVEL_1_MATH_I_PHYSICS_COURSE_ID,
    getExamQuestions: getLevel1MathIPhysicsExamQuestionEntries,
    getPapers: getLevel1MathIPhysicsPapers,
    getTopicQuestions: getLevel1MathIPhysicsTopicQuestionEntries,
    label: "Level 1 - Math I (Physics)",
  },
  {
    aliases: [],
    courseId: LEVEL_1_MATH_II_PHYSICS_COURSE_ID,
    getExamQuestions: getLevel1MathIIPhysicsExamQuestionEntries,
    getPapers: getLevel1MathIIPhysicsPapers,
    getTopicQuestions: getLevel1MathIIPhysicsTopicQuestionEntries,
    label: "Level 1 - Math II (Physics)",
  },
  {
    aliases: ["advanced-physics"],
    courseId: LEVEL_1_PHYSICS_COURSE_ID,
    getExamQuestions: getLevel1PhysicsExamQuestionEntries,
    getPapers: getLevel1PhysicsPapers,
    getTopicQuestions: getLevel1PhysicsTopicQuestionEntries,
    label: "Level 1 - Physics",
  },
];

const PROVIDERS_BY_ID = new Map(
  COURSE_PROVIDERS.map((provider) => [provider.courseId, provider]),
);

const COURSE_ALIASES = new Map(
  COURSE_PROVIDERS.flatMap((provider) =>
    provider.aliases.map((alias) => [alias, provider.courseId] as const),
  ),
);

function normalizeCourseId(courseId: string) {
  const normalizedInput = courseId.trim().toLowerCase();

  if (PROVIDERS_BY_ID.has(normalizedInput)) {
    return normalizedInput;
  }

  return COURSE_ALIASES.get(normalizedInput) ?? null;
}

function getProvider(courseId: string) {
  const canonicalCourseId = normalizeCourseId(courseId);

  return canonicalCourseId
    ? (PROVIDERS_BY_ID.get(canonicalCourseId) ?? null)
    : null;
}

function filterQuestions(
  questions: QuestionBankEntry[],
  filters: QuestionBankFilters,
) {
  const ratings =
    filters.ratings && filters.ratings.length > 0
      ? new Set(filters.ratings)
      : null;
  const sections =
    filters.sections && filters.sections.length > 0
      ? new Set(filters.sections)
      : filters.section
        ? new Set([filters.section])
        : null;
  const topics =
    filters.topics && filters.topics.length > 0
      ? new Set(filters.topics)
      : filters.topic
        ? new Set([filters.topic])
        : null;

  return questions.filter((question) => {
    if (filters.source && question.source !== filters.source) {
      return false;
    }

    if (filters.paper && !question.paperTags.includes(filters.paper)) {
      return false;
    }

    if (filters.set && question.setId !== filters.set) {
      return false;
    }

    if (sections || topics) {
      const questionSectionIds =
        question.sectionIds ?? (question.sectionId ? [question.sectionId] : []);
      const matchesSection = questionSectionIds.some((sectionId) =>
        sections?.has(sectionId),
      );
      const matchesTopic = Boolean(
        question.topicId && topics?.has(question.topicId),
      );

      if (!matchesSection && !matchesTopic) {
        return false;
      }
    }

    if (ratings && (!question.rating || !ratings.has(question.rating))) {
      return false;
    }

    if (!ratings && filters.rating && question.rating !== filters.rating) {
      return false;
    }

    return true;
  });
}

function maybeShuffle<T>(items: T[], random?: boolean) {
  if (!random) {
    return items;
  }

  return items
    .map((item) => ({ item, sort: Math.random() }))
    .sort((left, right) => left.sort - right.sort)
    .map(({ item }) => item);
}

export function getCanonicalCourseId(courseId: string) {
  return getProvider(courseId)?.courseId ?? null;
}

export function getCourses() {
  return COURSE_PROVIDERS.map(({ aliases, courseId, label }) => ({
    aliases,
    courseId,
    label,
  }));
}

export function getQuestions(filters: QuestionBankFilters) {
  const provider = getProvider(filters.courseId);

  if (!provider) {
    return null;
  }

  const questions = filterQuestions(
    [...provider.getTopicQuestions(), ...provider.getExamQuestions()],
    { ...filters, courseId: provider.courseId },
  );
  const orderedQuestions = maybeShuffle(questions, filters.random);

  return typeof filters.limit === "number"
    ? orderedQuestions.slice(0, filters.limit)
    : orderedQuestions;
}

export function getQuestionCount(filters: QuestionBankFilters) {
  return getQuestions(filters)?.length ?? null;
}

export function getPapers({ courseId }: { courseId: string }) {
  const provider = getProvider(courseId);

  return provider?.getPapers() ?? null;
}

export function getPaperCount({ courseId }: { courseId: string }) {
  return getPapers({ courseId })?.length ?? null;
}
