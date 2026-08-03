import type { DocHeading } from "@repo/docs";

import { getPaperCount, getQuestionCount } from "@/lib/question-bank";

const questionCount =
  getQuestionCount({ courseId: "level-1-linear-algebra" }) ?? 0;
const paperCount = getPaperCount({ courseId: "level-1-linear-algebra" }) ?? 0;

export const level1LinearAlgebraCourseIntroHeadings: DocHeading[] = [
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

export const level1LinearAlgebraCourseIntroBody = String.raw`<div className="not-prose grid gap-3 sm:grid-cols-2">
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

Level 1 - Linear Algebra is a first course in vectors, matrices, linear systems, determinants, vector spaces, and linear maps. It is for students who need the algebraic language used throughout calculus, geometry, physics, data science, and higher mathematics.

The main outcome is fluency with the objects and methods that describe linear structure: vectors, matrices, subspaces, bases, dimension, rank, kernels, images, coordinates, and change of basis.

<h2 id="what-you-will-study">What You Will Study</h2>

- **Vectors and geometry:** vectors in real coordinate space, scalar products, norms, angles, vector products, planes, lines, and triple products.
- **Matrices and systems:** matrix notation, matrix operations, matrix multiplication, inverses, augmented systems, row operations, echelon form, and Gauss-Jordan elimination.
- **Determinants:** low-dimensional determinants, the general definition, determinant properties, determinant calculation, invertibility tests, Cramer's rule, and geometric interpretation.
- **Subspaces and dimension:** subspaces, spanning sets, linear independence, bases, coordinates, dimension, sums, and intersections.
- **Linear maps:** examples, properties, matrix representations, image, kernel, rank, nullity, isomorphisms, and change of basis.

<h2 id="how-the-course-works">How The Course Works</h2>

The course outline and topic routes are in place. Topic pages are blank placeholders for now, so lesson content, worked examples, practice questions, and worked answers will be added later.

<h2 id="assessment-and-exam-practice">Assessment And Exam Practice</h2>

Exam papers will be added to the [exam papers page](/level-1-linear-algebra/exam-papers) once the topic content and question bank are in place.

<h2 id="recommended-starting-points">Recommended Starting Points</h2>

- [Vectors In Rn](/level-1-linear-algebra/vectors-in-rn/vectors-in-rn)
- [Scalar Product](/level-1-linear-algebra/vectors-in-rn/scalar-product)
- [Matrix Notation](/level-1-linear-algebra/matrix-algebra/matrix-notation)
- [Gauss-Jordan Elimination](/level-1-linear-algebra/linear-systems/gauss-jordan-elimination)
- [Determinant Properties](/level-1-linear-algebra/determinants/determinant-properties)
- [Linear Maps](/level-1-linear-algebra/linear-maps/linear-maps)`;
