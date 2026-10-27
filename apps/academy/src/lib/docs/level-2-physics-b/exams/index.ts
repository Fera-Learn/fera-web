import type { Level1PhysicsExamSet } from "../../level-1-physics/exams/types";

export const level2PhysicsBExamSets: Level1PhysicsExamSet[] = [];

export function getLevel2PhysicsBExamPaper(setId: string, paperId: string) {
  const set = level2PhysicsBExamSets.find((entry) => entry.id === setId);

  return set?.papers.find((paper) => paper.id === paperId);
}
