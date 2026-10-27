import type { Level1PhysicsExamSet } from "../../level-1-physics/exams/types";

export const level2PhysicsAExamSets: Level1PhysicsExamSet[] = [];

export function getLevel2PhysicsAExamPaper(setId: string, paperId: string) {
  const set = level2PhysicsAExamSets.find((entry) => entry.id === setId);

  return set?.papers.find((paper) => paper.id === paperId);
}
