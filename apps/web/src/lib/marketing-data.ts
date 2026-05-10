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
  marks: number;
  prompt: string;
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
    body: "Start from a course sequence so each topic has context before you practise it.",
    label: "Learn the topic",
  },
  {
    body: "Move into course-linked questions to test whether the method is usable without notes.",
    label: "Practise deliberately",
  },
  {
    body: "Use full papers once the underlying topics are familiar enough to test timing and judgement.",
    label: "Prepare for exams",
  },
];

export const platformProofPoints: string[] = [
  "Live course, question, and paper counts pulled from the learning app",
  "Courses, questions, and exam papers are connected by subject context",
  "Built for university-level physics and maths rather than generic revision",
];

export const sampleQuestionPreview: SampleQuestionPreview = {
  answer:
    "Use F = ma to find the acceleration, then apply constant-acceleration equations for speed and displacement.",
  course: "Level 1 - Physics",
  marks: 6,
  prompt:
    "A 2.0 kg object accelerates from rest under a constant resultant force of 5.0 N for 3.0 s. Calculate its final speed and displacement.",
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
    body: "Use the course order to identify what to study before attempting mixed questions.",
    title: "When a module feels fragmented",
  },
  {
    body: "Use topic-linked questions to check whether a method is understood or only recognised.",
    title: "When lecture notes are not enough",
  },
  {
    body: "Use full papers after topic practice to test exam timing and coverage.",
    title: "When exams are approaching",
  },
];
