import set1Paper1 from "./set-1/paper-1.json";
import set2Paper1 from "./set-2/paper-1.json";
import set3Paper1 from "./set-3/paper-1.json";
import set4Paper1 from "./set-4/paper-1.json";
import set5Paper1 from "./set-5/paper-1.json";
import set6Paper1 from "./set-6/paper-1.json";
import set7Paper1 from "./set-7/paper-1.json";
import set8Paper1 from "./set-8/paper-1.json";
import type {
  Level1PhysicsExamPaper,
  Level1PhysicsExamSet,
} from "@/lib/docs/level-1-physics/exams/types";

const paper = (value: unknown) => value as Level1PhysicsExamPaper;

export const level1MathIIPhysicsExamSets: Level1PhysicsExamSet[] = [
  {
    description:
      "A full Level 1 - Math II (Physics) exam set covering vectors, ODEs, Fourier analysis, multivariable calculus, vector calculus, multiple integrals, and probability.",
    id: "set-1",
    label: "Set 1",
    papers: [paper(set1Paper1)],
  },
  {
    description:
      "A second Level 1 - Math II (Physics) exam set following the Single Mathematics B-style seven-question format.",
    id: "set-2",
    label: "Set 2",
    papers: [paper(set2Paper1)],
  },
  {
    description:
      "A third Level 1 - Math II (Physics) exam set with original questions on ODEs, Fourier methods, multivariable calculus, and probability.",
    id: "set-3",
    label: "Set 3",
    papers: [paper(set3Paper1)],
  },
  {
    description:
      "A fourth Level 1 - Math II (Physics) exam set emphasizing integrated modelling, vector calculus, multiple integrals, and statistics.",
    id: "set-4",
    label: "Set 4",
    papers: [paper(set4Paper1)],
  },
  {
    description:
      "A fifth Level 1 - Math II (Physics) exam set covering vector geometry, ODE models, Fourier coefficients, multivariable calculus, vector calculus, multiple integrals, and probability.",
    id: "set-5",
    label: "Set 5",
    papers: [paper(set5Paper1)],
  },
  {
    description:
      "A sixth Level 1 - Math II (Physics) exam set emphasizing cylindrical motion, oscillations, Fourier expansions, gradients, exact differentials, spherical integrals, and continuous distributions.",
    id: "set-6",
    label: "Set 6",
    papers: [paper(set6Paper1)],
  },
  {
    description:
      "A seventh Level 1 - Math II (Physics) exam set with original questions on skew-line geometry, Bernoulli equations, general-period Fourier series, transformations, Jacobians, and probability approximations.",
    id: "set-7",
    label: "Set 7",
    papers: [paper(set7Paper1)],
  },
  {
    description:
      "An eighth Level 1 - Math II (Physics) exam set covering force along curves, coupled ODE modes, Parseval methods, harmonic functions, vector fields, ellipsoid scaling, and experimental errors.",
    id: "set-8",
    label: "Set 8",
    papers: [paper(set8Paper1)],
  },
];

export const level1MathIIPhysicsExamPapers =
  level1MathIIPhysicsExamSets.flatMap((set) => set.papers);

export function getLevel1MathIIPhysicsExamPaper(
  setId: string,
  paperId: string,
) {
  const set = level1MathIIPhysicsExamSets.find((entry) => entry.id === setId);

  return set?.papers.find((paper) => paper.id === paperId);
}
