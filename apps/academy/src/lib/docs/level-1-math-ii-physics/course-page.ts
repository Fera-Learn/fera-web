import type { DocHeading } from "@repo/docs";

import { getPaperCount, getQuestionCount } from "@/lib/question-bank";

const questionCount =
  getQuestionCount({ courseId: "level-1-math-ii-physics" }) ?? 0;
const paperCount = getPaperCount({ courseId: "level-1-math-ii-physics" }) ?? 0;

export const level1MathIIPhysicsCourseIntroHeadings: DocHeading[] = [
  { id: "course-purpose", level: 2, title: "Course Purpose" },
  { id: "what-you-will-study", level: 2, title: "What You Will Study" },
  { id: "how-the-course-works", level: 2, title: "How The Course Works" },
  {
    id: "recommended-starting-points",
    level: 2,
    title: "Recommended Starting Points",
  },
];

export const level1MathIIPhysicsCourseIntroBody = String.raw`<div className="not-prose grid gap-3 sm:grid-cols-2">
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

Level 1 - Math II (Physics) extends the mathematical toolkit needed for upper Level 1 physics. It moves from single-variable calculus into probability, vectors, kinematics, ordinary differential equations, Fourier analysis, multivariable calculus, partial differential equations, vector calculus, multiple integrals, and complex analysis.

The course is built for physical modelling. The emphasis is on choosing the right mathematical object, interpreting it geometrically or physically, and using it to solve equations that arise in mechanics, waves, electromagnetism, quantum mechanics, and statistical reasoning.

<h2 id="what-you-will-study">What You Will Study</h2>

- **Probability:** events, probability axioms, counting, conditional probability, Bayes' theorem, independence, random variables, expectation, variance, common distributions, and the central limit theorem.
- **Vectors and kinematics:** vector algebra, coordinate bases, dot products, cross products, lines, planes, position, velocity, acceleration, forces, work, energy, angular momentum, and curvilinear coordinates.
- **Ordinary differential equations:** classification, first-order methods, second-order linear equations, simultaneous systems, forced oscillations, car suspension, and resonance.
- **Fourier analysis:** periodic functions, Fourier coefficients, function inner products, orthogonality, symmetry, Parseval's theorem, general periods, and complex Fourier form.
- **Multivariable calculus:** partial derivatives, differentials, directional derivatives, gradients, chain rules, Taylor expansions, critical points, PDEs, vector fields, divergence, curl, Maxwell equations, double integrals, triple integrals, coordinate changes, and Jacobians.
- **Complex analysis:** complex differentiability, Cauchy-Riemann equations, Laplace's equation, and harmonic functions.

<h2 id="how-the-course-works">How The Course Works</h2>

Each topic page will use the same structure as Level 1 - Physics: concise definitions, notation, methods, worked examples, and checks. The topic pages have been created from the source course notes and split into manageable units, but detailed lesson content, questions, answers, and exam papers have not been added yet.

<h2 id="recommended-starting-points">Recommended Starting Points</h2>

- [Probability](/level-1-math-ii-physics/probability/probability)
- [Vectors](/level-1-math-ii-physics/vectors/vectors)
- [Position](/level-1-math-ii-physics/kinematics/position)
- [ODE Introduction](/level-1-math-ii-physics/ordinary-differential-equations/ode-introduction)
- [Periodic Functions](/level-1-math-ii-physics/fourier-analysis/periodic-functions)
- [Partial Derivatives](/level-1-math-ii-physics/multivariable-calculus/partial-derivatives)`;
