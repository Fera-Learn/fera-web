import type { Level1PhysicsExamSet } from "../../level-1-physics/exams/types";

export const level2GeophysicsExamSets: Level1PhysicsExamSet[] = [];

export function getLevel2GeophysicsExamPaper(setId: string, paperId: string) {
  const set = level2GeophysicsExamSets.find((entry) => entry.id === setId);

  return set?.papers.find((paper) => paper.id === paperId);
}
