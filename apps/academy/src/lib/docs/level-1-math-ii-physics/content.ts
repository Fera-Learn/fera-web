import { content as probabilityContent } from "./probability/probability/content";
import { content as eventsContent } from "./probability/events/content";
import { content as probabilityAxiomsContent } from "./probability/probability-axioms/content";
import { content as countingPrinciplesContent } from "./probability/counting-principles/content";
import { content as conditionalProbabilityContent } from "./probability/conditional-probability/content";
import { content as bayesTheoremContent } from "./probability/bayes-theorem/content";
import { content as independenceContent } from "./probability/independence/content";
import { content as partitionsContent } from "./probability/partitions/content";
import { content as discreteRandomVariablesContent } from "./probability/discrete-random-variables/content";
import { content as continuousRandomVariablesContent } from "./probability/continuous-random-variables/content";
import { content as expectationContent } from "./probability/expectation/content";
import { content as varianceContent } from "./probability/variance/content";
import { content as binomialDistributionContent } from "./probability/binomial-distribution/content";
import { content as poissonDistributionContent } from "./probability/poisson-distribution/content";
import { content as poissonApproximationContent } from "./probability/poisson-approximation/content";
import { content as normalDistributionContent } from "./probability/normal-distribution/content";
import { content as standardNormalContent } from "./probability/standard-normal/content";
import { content as generalNormalContent } from "./probability/general-normal/content";
import { content as normalApproximationContent } from "./probability/normal-approximation/content";
import { content as centralLimitTheoremContent } from "./probability/central-limit-theorem/content";
import { content as experimentalErrorsContent } from "./probability/experimental-errors/content";
import { content as sampleMeanContent } from "./probability/sample-mean/content";
import { content as vectorsContent } from "./vectors/vectors/content";
import { content as scalarsContent } from "./vectors/scalars/content";
import { content as vectorAdditionContent } from "./vectors/vector-addition/content";
import { content as zeroVectorContent } from "./vectors/zero-vector/content";
import { content as scalarMultiplicationContent } from "./vectors/scalar-multiplication/content";
import { content as vectorSpacesContent } from "./vectors/vector-spaces/content";
import { content as coordinateBasesContent } from "./vectors/coordinate-bases/content";
import { content as dotProductContent } from "./vectors/dot-product/content";
import { content as crossProductContent } from "./vectors/cross-product/content";
import { content as scalarTripleProductContent } from "./vectors/scalar-triple-product/content";
import { content as linesContent } from "./vectors/lines/content";
import { content as planesContent } from "./vectors/planes/content";

export const level1MathIIPhysicsTopicBodies = new Map<string, string>([
  ["Probability", probabilityContent],
  ["Events", eventsContent],
  ["Probability Axioms", probabilityAxiomsContent],
  ["Counting Principles", countingPrinciplesContent],
  ["Conditional Probability", conditionalProbabilityContent],
  ["Bayes Theorem", bayesTheoremContent],
  ["Independence", independenceContent],
  ["Partitions", partitionsContent],
  ["Discrete Random Variables", discreteRandomVariablesContent],
  ["Continuous Random Variables", continuousRandomVariablesContent],
  ["Expectation", expectationContent],
  ["Variance", varianceContent],
  ["Binomial Distribution", binomialDistributionContent],
  ["Poisson Distribution", poissonDistributionContent],
  ["Poisson Approximation", poissonApproximationContent],
  ["Normal Distribution", normalDistributionContent],
  ["Standard Normal", standardNormalContent],
  ["General Normal", generalNormalContent],
  ["Normal Approximation", normalApproximationContent],
  ["Central Limit Theorem", centralLimitTheoremContent],
  ["Experimental Errors", experimentalErrorsContent],
  ["Sample Mean", sampleMeanContent],
  ["Vectors", vectorsContent],
  ["Scalars", scalarsContent],
  ["Vector Addition", vectorAdditionContent],
  ["Zero Vector", zeroVectorContent],
  ["Scalar Multiplication", scalarMultiplicationContent],
  ["Vector Spaces", vectorSpacesContent],
  ["Coordinate Bases", coordinateBasesContent],
  ["Dot Product", dotProductContent],
  ["Cross Product", crossProductContent],
  ["Scalar Triple Product", scalarTripleProductContent],
  ["Lines", linesContent],
  ["Planes", planesContent],
]);
