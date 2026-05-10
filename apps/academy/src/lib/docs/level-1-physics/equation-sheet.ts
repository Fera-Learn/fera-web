import equationSheetData from "./equation-sheet.json";

export type Level1PhysicsEquationSheetEquation = {
  label: string;
  tex: string;
  topicId: string;
  topicTitle: string;
};

export type Level1PhysicsEquationSheetSection = {
  equations: Level1PhysicsEquationSheetEquation[];
  sectionId: string;
  sectionTitle: string;
};

export type Level1PhysicsEquationSheet = {
  courseId: string;
  schemaVersion: number;
  sections: Level1PhysicsEquationSheetSection[];
  selectionNote?: string;
  title: string;
};

export const level1PhysicsEquationSheet =
  equationSheetData satisfies Level1PhysicsEquationSheet;

export const level1PhysicsEquationSheetHref = "/level-1-physics/equation-sheet";

export const level1PhysicsEquationSheetPrintHref =
  "/level-1-physics/equation-sheet/print";

export const level1PhysicsEquationSheetFilename =
  "level-1-physics-equation-sheet.pdf";
