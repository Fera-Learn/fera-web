import type { DocHeading } from "@repo/docs";

import { getPaperCount, getQuestionCount } from "@/lib/question-bank";

const questionCount =
  getQuestionCount({ courseId: "level-1-math-i-physics" }) ?? 0;
const paperCount = getPaperCount({ courseId: "level-1-math-i-physics" }) ?? 0;

export const level1MathIPhysicsCourseIntroHeadings: DocHeading[] = [
  { id: "course-purpose", level: 2, title: "Course Purpose" },
  { id: "what-you-will-study", level: 2, title: "What You Will Study" },
  { id: "how-the-course-works", level: 2, title: "How The Course Works" },
  {
    id: "recommended-starting-points",
    level: 2,
    title: "Recommended Starting Points",
  },
];

export const level1MathIPhysicsCourseIntroBody = String.raw`<div className="not-prose grid gap-3 sm:grid-cols-2">
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

Level 1 - Math I (Physics) builds the mathematical language needed for calculus-based physics. It focuses on the skills that turn physical statements into usable equations: manipulating real and complex numbers, reasoning with functions, taking limits and derivatives, integrating, working with series, and using matrices and vector spaces.

The course is written as a physics support course rather than as a pure mathematics survey. Definitions, theorems, and proof methods are included where they improve modelling, estimation, approximation, and problem solving in physics.

<h2 id="what-you-will-study">What You Will Study</h2>

- **Real numbers and functions:** algebraic manipulation, summation notation, induction, the binomial theorem, inverse functions, trigonometry, exponentials, logarithms, and hyperbolic functions.
- **Limits and differentiation:** formal limit language, practical limit methods, continuity, derivatives, inverse-function derivatives, and L'Hopital's Rule.
- **Integration:** definite and indefinite integrals, the fundamental theorem of calculus, integration by parts, substitution, partial fractions, and trigonometric integrals.
- **Complex numbers:** arithmetic, modulus, conjugates, polar form, arguments, De Moivre's theorem, complex equations, complex functions, and transcendental equations.
- **Groups and symmetry:** group axioms, symmetry groups, cyclic groups, group tables, subgroups, and maps between groups.
- **Series and linear algebra:** numerical series, power series, Taylor series, matrices, Gaussian elimination, determinants, inverse matrices, vector spaces, linear maps, eigenvalues, diagonalisation, and matrix groups.

<h2 id="how-the-course-works">How The Course Works</h2>

Each topic page will follow the same learning pattern as Level 1 - Physics: a compact model, the notation needed to use it, the main methods, worked examples, and checks that prevent common mistakes.

Topic pages have been created from the source course notes, but the detailed lesson content, questions, worked answers, and exam papers have not been added yet.

<h2 id="recommended-starting-points">Recommended Starting Points</h2>

- [Real numbers](/level-1-math-i-physics/real-numbers/real-numbers)
- [Functions](/level-1-math-i-physics/functions/functions)
- [Formal limits](/level-1-math-i-physics/limits/formal-limits)
- [Definite integrals](/level-1-math-i-physics/integration/definite-integrals)
- [Complex numbers](/level-1-math-i-physics/complex-arithmetic/complex-numbers)
- [Series](/level-1-math-i-physics/series/series-basics)`;
