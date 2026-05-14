import { level1MathIPhysicsEquationSheet } from "../level-1-math-i-physics/equation-sheet";
import type { Level1PhysicsEquationSheet } from "../level-1-physics/equation-sheet";
import mathIIEquationSheetAdditions from "./equation-sheet-additions.json";

export const level1MathPhysicsEquationSheet = {
  schemaVersion: 1,
  courseId: "level-1-math-physics",
  title: "Level 1 - Math I and Math II (Physics) Equation Sheet",
  selectionNote:
    "Curated from the Level 1 - Math I (Physics) and Level 1 - Math II (Physics) topic content. Reusable definitions, identities, theorems, and computational formulas are included; derivation-only steps, narrow examples, duplicate formulae, and repeated rearrangements are intentionally omitted.",
  sections: [
    ...level1MathIPhysicsEquationSheet.sections,
    ...mathIIEquationSheetAdditions.sections,
  ],
} satisfies Level1PhysicsEquationSheet;

export const level1MathPhysicsEquationSheetHref =
  "/level-1-math-physics/equation-sheet";

export const level1MathPhysicsEquationSheetPrintHref =
  "/level-1-math-physics/equation-sheet/print";

export const level1MathPhysicsEquationSheetFilename =
  "level-1-math-physics-equation-sheet.pdf";
