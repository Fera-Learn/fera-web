import type { Level1PhysicsExamSet } from "../../level-1-physics/exams/types";

export const level2MathematicalPhysicsExamSets: Level1PhysicsExamSet[] = [];

export function getLevel2MathematicalPhysicsExamPaper(
  setId: string,
  paperId: string,
) {
  const set = level2MathematicalPhysicsExamSets.find(
    (entry) => entry.id === setId,
  );

  return set?.papers.find((paper) => paper.id === paperId);
}
