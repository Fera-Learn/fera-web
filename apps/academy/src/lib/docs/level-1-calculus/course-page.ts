import type { DocHeading } from "@repo/docs";

import { getPaperCount, getQuestionCount } from "@/lib/question-bank";

const questionCount = getQuestionCount({ courseId: "level-1-calculus" }) ?? 0;
const paperCount = getPaperCount({ courseId: "level-1-calculus" }) ?? 0;

export const level1CalculusCourseIntroHeadings: DocHeading[] = [
  { id: "course-purpose", level: 2, title: "Course Purpose" },
  { id: "what-you-will-study", level: 2, title: "What You Will Study" },
  { id: "how-the-course-works", level: 2, title: "How The Course Works" },
  {
    id: "assessment-and-exam-practice",
    level: 2,
    title: "Assessment And Exam Practice",
  },
  {
    id: "recommended-starting-points",
    level: 2,
    title: "Recommended Starting Points",
  },
];

export const level1CalculusCourseIntroBody = String.raw`<div className="not-prose grid gap-3 sm:grid-cols-2">
  <div className="rounded-lg border border-border/80 bg-muted/25 p-4">
    <p className="text-sm font-medium text-muted-foreground">Questions available</p>
    <div className="mt-3 text-5xl font-semibold leading-none text-foreground">${questionCount.toLocaleString("en-GB")}</div>
  </div>
  <div className="rounded-lg border border-border/80 bg-muted/25 p-4">
    <p className="text-sm font-medium text-muted-foreground">Exam papers available</p>
    <div className="mt-3 text-5xl font-semibold leading-none text-foreground">${paperCount.toLocaleString("en-GB")}</div>
  </div>
</div>

<h2 id="course-purpose">Course Purpose</h2>

Level 1 - Calculus is a maths course for students who need a coherent first course in calculus before moving into modelling-heavy physics, engineering, and applied mathematics. It assumes comfort with algebra, functions, graphs, trigonometry, exponentials, and logarithms.

The main outcome is fluency with limits, derivatives, integrals, series, multivariable calculus, and introductory differential equations as connected tools rather than isolated techniques.

<h2 id="what-you-will-study">What You Will Study</h2>

- **Foundations and limits:** functions, graphs, limit laws, continuity, infinite limits, and asymptotic behaviour.
- **Differential calculus:** first-principles derivatives, standard rules, implicit differentiation, higher derivatives, approximations, optimisation, and curve sketching.
- **Integral calculus:** antiderivatives, definite integrals, the fundamental theorem of calculus, integration techniques, improper integrals, and geometric applications.
- **Series and approximations:** sequences, numerical series, power series, Taylor series, and Fourier series as approximation tools.
- **Several variables and equations:** partial derivatives, gradients, multiple integrals, coordinate changes, ordinary differential equations, and separation of variables.

<h2 id="how-the-course-works">How The Course Works</h2>

The course outline and topic routes are in place. Topic pages are blank placeholders for now, so lesson content, worked examples, practice questions, and worked answers will be added later.

<h2 id="assessment-and-exam-practice">Assessment And Exam Practice</h2>

Exam papers will be added to the [exam papers page](/level-1-calculus/exam-papers) once the topic content and question bank are in place.

<h2 id="recommended-starting-points">Recommended Starting Points</h2>

- [Functions And Graphs](/level-1-calculus/foundations-and-limits/functions-and-graphs)
- [Limit Laws](/level-1-calculus/foundations-and-limits/limit-laws)
- [Derivative From First Principles](/level-1-calculus/differential-calculus/derivative-from-first-principles)
- [Definite Integrals](/level-1-calculus/integral-calculus/definite-integrals)
- [Sequences](/level-1-calculus/series-and-approximations/sequences)
- [Partial Derivatives](/level-1-calculus/several-variable-calculus/partial-derivatives)`;
