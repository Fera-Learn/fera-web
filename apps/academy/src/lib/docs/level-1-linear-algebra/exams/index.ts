import set1Paper1 from "./set-1/paper-1.json";
import set2Paper1 from "./set-2/paper-1.json";
import type {
  Level1PhysicsExamPaper,
  Level1PhysicsExamSet,
} from "@/lib/docs/level-1-physics/exams/types";

const paper = (value: unknown) => value as Level1PhysicsExamPaper;

export const level1LinearAlgebraExamSets: Level1PhysicsExamSet[] = [
  {
    description:
      "A full Level 1 - Linear Algebra exam set covering vectors, matrices, systems, determinants, subspaces, linear maps, and eigenvalues.",
    id: "set-1",
    label: "Set 1",
    papers: [paper(set1Paper1)],
  },
  {
    description:
      "A second Level 1 - Linear Algebra exam set with original questions on geometry, matrix structure, parameter systems, vector spaces, change of basis, and diagonalisation.",
    id: "set-2",
    label: "Set 2",
    papers: [paper(set2Paper1)],
  },
];

export const level1LinearAlgebraExamPapers =
  level1LinearAlgebraExamSets.flatMap((set) => set.papers);

export function getLevel1LinearAlgebraExamPaper(
  setId: string,
  paperId: string,
) {
  const set = level1LinearAlgebraExamSets.find((entry) => entry.id === setId);

  return set?.papers.find((paper) => paper.id === paperId);
}
