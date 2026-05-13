import set1Paper1 from "./set-1/paper-1.json";
import set2Paper1 from "./set-2/paper-1.json";
import set3Paper1 from "./set-3/paper-1.json";
import set4Paper1 from "./set-4/paper-1.json";
import type {
  Level1PhysicsExamPaper,
  Level1PhysicsExamSet,
} from "@/lib/docs/level-1-physics/exams/types";

const paper = (value: unknown) => value as Level1PhysicsExamPaper;

export const level1MathIPhysicsExamSets: Level1PhysicsExamSet[] = [
  {
    description:
      "A full Level 1 - Math I (Physics) exam set covering algebra, functions, trigonometry, limits, calculus, integration, and complex numbers.",
    id: "set-1",
    label: "Set 1",
    papers: [paper(set1Paper1)],
  },
  {
    description:
      "A second Level 1 - Math I (Physics) exam set following the same one-paper format with original questions.",
    id: "set-2",
    label: "Set 2",
    papers: [paper(set2Paper1)],
  },
  {
    description:
      "A third Level 1 - Math I (Physics) exam set with original questions on algebra, trigonometry, calculus, integration, and complex numbers.",
    id: "set-3",
    label: "Set 3",
    papers: [paper(set3Paper1)],
  },
  {
    description:
      "A fourth Level 1 - Math I (Physics) exam set covering functions, limits, integration, and complex-number identities.",
    id: "set-4",
    label: "Set 4",
    papers: [paper(set4Paper1)],
  },
];

export const level1MathIPhysicsExamPapers = level1MathIPhysicsExamSets.flatMap(
  (set) => set.papers,
);

export function getLevel1MathIPhysicsExamPaper(
  setId: string,
  paperId: string,
) {
  const set = level1MathIPhysicsExamSets.find((entry) => entry.id === setId);

  return set?.papers.find((paper) => paper.id === paperId);
}
