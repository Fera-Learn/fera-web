import set1Paper1 from "./set-1/paper-1.json";
import set2Paper1 from "./set-2/paper-1.json";
import type {
  Level1PhysicsExamPaper,
  Level1PhysicsExamSet,
} from "@/lib/docs/level-1-physics/exams/types";

const paper = (value: unknown) => value as Level1PhysicsExamPaper;

export const level1CalculusExamSets: Level1PhysicsExamSet[] = [
  {
    description:
      "A full Level 1 - Calculus exam set covering limits, differentiation, integration, series, multivariable calculus, and differential equations.",
    id: "set-1",
    label: "Set 1",
    papers: [paper(set1Paper1)],
  },
  {
    description:
      "A second Level 1 - Calculus exam set with original questions on derivative applications, integral applications, approximation, Fourier ideas, and differential equations.",
    id: "set-2",
    label: "Set 2",
    papers: [paper(set2Paper1)],
  },
];

export const level1CalculusExamPapers = level1CalculusExamSets.flatMap(
  (set) => set.papers,
);

export function getLevel1CalculusExamPaper(
  setId: string,
  paperId: string,
) {
  const set = level1CalculusExamSets.find((entry) => entry.id === setId);

  return set?.papers.find((paper) => paper.id === paperId);
}
