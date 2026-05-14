import { academyUrl } from "./academy-links";

export type MarketingCourse = {
  audience: string;
  description: string;
  examHref?: string;
  fallbackPaperCount: number;
  fallbackQuestionCount: number;
  href: string;
  questionHref: string;
  shortTitle: string;
  slug: string;
  topicCount?: number;
  topics: string[];
  title: string;
};

export type MarketingPathway = {
  description: string;
  href: string;
  label: string;
};

export type ProductLinks = {
  examPapers: string;
  level1Physics: string;
  questionBank: string;
  root: string;
};

export type StudyWorkflowStep = {
  body: string;
  label: string;
};

export type StudentUseCase = {
  body: string;
  title: string;
};

export type SampleQuestionPreview = {
  answer: string;
  course: string;
  prompt: string;
  rating: string;
  topic: string;
};

export type ExamPaperPreview = {
  course: string;
  duration: string;
  marks: number;
  sections: string[];
  title: string;
};

export const marketingCourses: MarketingCourse[] = [
  {
    audience:
      "Physics students building the maths toolkit behind mechanics, waves, fields, and modelling.",
    description:
      "The core maths toolkit for physics: algebra, functions, graphs, trigonometry, vectors, units, and introductory calculus.",
    fallbackPaperCount: 0,
    fallbackQuestionCount: 0,
    href: academyUrl("/level-1-math-i-physics"),
    questionHref: academyUrl("/level-1-math-i-physics/questions"),
    shortTitle: "Math I",
    slug: "level-1-math-i-physics",
    topics: [
      "Algebra",
      "Functions",
      "Trigonometry",
      "Limits",
      "Differentiation",
    ],
    title: "Level 1 - Math I (Physics)",
  },
  {
    audience:
      "Students ready for the extended methods used in more advanced physics modelling.",
    description:
      "Extended mathematical methods for physics modelling, including integration, differential equations, complex numbers, matrices, and vector calculus.",
    fallbackPaperCount: 0,
    fallbackQuestionCount: 0,
    href: academyUrl("/level-1-math-ii-physics"),
    questionHref: academyUrl("/level-1-math-ii-physics/questions"),
    shortTitle: "Math II",
    slug: "level-1-math-ii-physics",
    topics: [
      "Integration",
      "Differential equations",
      "Complex numbers",
      "Matrices",
      "Vector calculus",
    ],
    title: "Level 1 - Math II (Physics)",
  },
  {
    audience:
      "University physics students who need derivations, modelling, worked questions, and exam preparation.",
    description:
      "A calculus-based physics course built around derivations, physical modelling, worked questions, and full exam practice.",
    examHref: academyUrl("/level-1-physics/exam-papers"),
    fallbackPaperCount: 8,
    fallbackQuestionCount: 2646,
    href: academyUrl("/level-1-physics"),
    questionHref: academyUrl("/level-1-physics/questions"),
    shortTitle: "Physics",
    slug: "level-1-physics",
    // Matches the generated Academy topic-page count; `topics` below are broad marketing areas.
    topicCount: 313,
    topics: [
      "Mechanics",
      "Waves",
      "Thermal physics",
      "Electricity and magnetism",
      "Quantum physics",
    ],
    title: "Level 1 - Physics",
  },
];

export const pathways: MarketingPathway[] = [
  {
    description:
      "Follow structured physics and maths courses built around clear explanations and topic progression.",
    href: "/courses",
    label: "Learn by course",
  },
  {
    description:
      "Use targeted question banks to turn course knowledge into reliable problem solving.",
    href: "/question-bank",
    label: "Practise by question",
  },
  {
    description:
      "Build exam readiness with full paper sets, marks, timing, and worked answers.",
    href: "/exam-papers",
    label: "Prepare with papers",
  },
];

export const productLinks: ProductLinks = {
  examPapers: academyUrl("/level-1-physics/exam-papers"),
  level1Physics: academyUrl("/level-1-physics"),
  questionBank: academyUrl("/level-1-physics/questions"),
  root: academyUrl(),
};

export const studyWorkflow: StudyWorkflowStep[] = [
  {
    body: "Start with a course sequence so each idea has prerequisites, notation, and context before problem solving begins.",
    label: "Learn from structure",
  },
  {
    body: "Move into topic-linked questions to test whether the method works without notes and reveal where fluency is still weak.",
    label: "Practise by topic",
  },
  {
    body: "Use full papers once the topic foundations are familiar enough to practise timing, judgement, and mixed-topic recall.",
    label: "Test with papers",
  },
];

export const platformProofPoints: string[] = [
  "313 Level 1 Physics topic pages linked to the course sequence",
  "Live question and paper counts pulled from the learning app",
  "Topic practice and exam papers share the same course context",
];

export const sampleQuestionPreview: SampleQuestionPreview = {
  answer:
    "Compare the hanging weight with the downslope component plus kinetic friction on the incline block. The hanging mass wins by 4.71 N, so it moves downward. The system acceleration is 0.673 m s^-2, and the string tension is 27.4 N.",
  course: "Level 1 - Physics",
  prompt:
    "A 4.0 kg block on a 30 degree incline with kinetic friction is connected over a pulley to a hanging 3.0 kg mass. Decide which way the system moves, then find the acceleration and tension.",
  rating: "****+",
  topic: "Mechanics",
};

export const examPaperPreview: ExamPaperPreview = {
  course: "Level 1 - Physics",
  duration: "2 hours",
  marks: 60,
  sections: [
    "Mechanics and modelling",
    "Waves and optics",
    "Oscillations, collisions, conservation, and fields",
  ],
  title: "Level 1 - Physics Paper 1",
};

export const studentUseCases: StudentUseCase[] = [
  {
    body: "Use the course order to turn scattered lecture material into a sequence of concepts, notation, and prerequisites.",
    title: "When lecture notes feel fragmented",
  },
  {
    body: "Use topic-linked questions to find whether a method is genuinely usable or only familiar from worked examples.",
    title: "When problem-solving fluency is weak",
  },
  {
    body: "Use papers after topic practice to diagnose timing, mixed-topic judgement, and exam readiness without losing the course context.",
    title: "When exam preparation lacks diagnosis",
  },
];
