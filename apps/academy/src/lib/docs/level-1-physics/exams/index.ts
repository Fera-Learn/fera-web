import set1Paper1 from "./set-1/paper-1.json";
import set1Paper2 from "./set-1/paper-2.json";
import set2Paper1 from "./set-2/paper-1.json";
import set2Paper2 from "./set-2/paper-2.json";
import set3Paper1 from "./set-3/paper-1.json";
import set3Paper2 from "./set-3/paper-2.json";
import set4Paper1 from "./set-4/paper-1.json";
import set4Paper2 from "./set-4/paper-2.json";
import type { Level1PhysicsExamPaper, Level1PhysicsExamSet } from "./types";

export type {
  Level1PhysicsExamPaper,
  Level1PhysicsExamPart,
  Level1PhysicsExamQuestion,
  Level1PhysicsExamSet,
} from "./types";

const paper = (value: unknown) => value as Level1PhysicsExamPaper;

export const level1PhysicsExamSets: Level1PhysicsExamSet[] = [
  {
    description:
      "A full Level 1 - Physics exam set with mechanics, waves, optics, oscillations, conservation, fields, electromagnetism, relativity, and quantum mechanics split across two papers.",
    id: "set-1",
    label: "Set 1",
    papers: [paper(set1Paper1), paper(set1Paper2)],
  },
  {
    description:
      "A second Level 1 - Physics exam set following the same Paper 1 and Paper 2 topic split.",
    id: "set-2",
    label: "Set 2",
    papers: [paper(set2Paper1), paper(set2Paper2)],
  },
  {
    description:
      "A third Level 1 - Physics exam set following the same Paper 1 and Paper 2 topic split.",
    id: "set-3",
    label: "Set 3",
    papers: [paper(set3Paper1), paper(set3Paper2)],
  },
  {
    description:
      "A fourth Level 1 - Physics exam set following the same Paper 1 and Paper 2 topic split.",
    id: "set-4",
    label: "Set 4",
    papers: [paper(set4Paper1), paper(set4Paper2)],
  },
];

export const level1PhysicsExamPapers = level1PhysicsExamSets.flatMap(
  (set) => set.papers,
);

export function getLevel1PhysicsExamPaper(setId: string, paperId: string) {
  const set = level1PhysicsExamSets.find((entry) => entry.id === setId);

  return set?.papers.find((paper) => paper.id === paperId);
}
