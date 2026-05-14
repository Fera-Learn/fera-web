import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(scriptDir, "..");
const questionRoot = path.join(
  appRoot,
  "src",
  "lib",
  "docs",
  "level-1-math-ii-physics",
  "questions",
);

const expectedCourseId = "level-1-math-ii-physics";
const expectedSchemaVersion = 1;
const expectedQuestionCount = 20;
const sectionFilter = process.argv
  .find((arg) => arg.startsWith("--section="))
  ?.slice("--section=".length);

const expectedRatings = [
  "*",
  "*",
  "*+",
  "*+",
  "**",
  "**",
  "**+",
  "**+",
  "***",
  "***",
  "***+",
  "***+",
  "****",
  "****",
  "****+",
  "****+",
  "****+",
  "*****",
  "*****",
  "*****",
];
const allowedRatings = new Set(expectedRatings);

const termTagsBySection = {
  probability: "term-1",
  vectors: "term-1",
  kinematics: "term-1",
  "ordinary-differential-equations": "term-1",
  "fourier-analysis": "term-2",
  "multivariable-calculus": "term-2",
  "partial-differential-equations": "term-2",
  "vector-calculus": "term-2",
  "multiple-integrals": "term-2",
  "complex-analysis": "term-2",
};

const requiredTopicsBySection = {
  probability: [
    ["probability", "Probability"],
    ["events", "Events"],
    ["probability-axioms", "Probability Axioms"],
    ["counting-principles", "Counting Principles"],
    ["conditional-probability", "Conditional Probability"],
    ["bayes-theorem", "Bayes Theorem"],
    ["independence", "Independence"],
    ["partitions", "Partitions"],
    ["discrete-random-variables", "Discrete Random Variables"],
    ["continuous-random-variables", "Continuous Random Variables"],
    ["expectation", "Expectation"],
    ["variance", "Variance"],
    ["binomial-distribution", "Binomial Distribution"],
    ["poisson-distribution", "Poisson Distribution"],
    ["poisson-approximation", "Poisson Approximation"],
    ["normal-distribution", "Normal Distribution"],
    ["standard-normal", "Standard Normal"],
    ["general-normal", "General Normal"],
    ["normal-approximation", "Normal Approximation"],
    ["central-limit-theorem", "Central Limit Theorem"],
    ["experimental-errors", "Experimental Errors"],
    ["sample-mean", "Sample Mean"],
  ],
  vectors: [
    ["vectors", "Vectors"],
    ["scalars", "Scalars"],
    ["vector-addition", "Vector Addition"],
    ["zero-vector", "Zero Vector"],
    ["scalar-multiplication", "Scalar Multiplication"],
    ["vector-spaces", "Vector Spaces"],
    ["coordinate-bases", "Coordinate Bases"],
    ["dot-product", "Dot Product"],
    ["cross-product", "Cross Product"],
    ["scalar-triple-product", "Scalar Triple Product"],
    ["lines", "Lines"],
    ["planes", "Planes"],
  ],
  kinematics: [
    ["position", "Position"],
    ["velocity", "Velocity"],
    ["acceleration", "Acceleration"],
    ["forces", "Forces"],
    ["energy", "Energy"],
    ["work-done", "Work Done"],
    ["angular-momentum", "Angular Momentum"],
    ["polar-coordinates", "Polar Coordinates"],
    ["cylindrical-polars", "Cylindrical Polars"],
  ],
  "ordinary-differential-equations": [
    ["ode-introduction", "ODE Introduction"],
    ["dependent-variables", "Dependent Variables"],
    ["independent-variables", "Independent Variables"],
    ["equation-order", "Equation Order"],
    ["initial-conditions", "Initial Conditions"],
    ["boundary-conditions", "Boundary Conditions"],
    ["separable-equations", "Separable Equations"],
    ["homogeneous-equations", "Homogeneous Equations"],
    ["linear-first-order-equations", "Linear First-Order Equations"],
    ["bernoulli-equations", "Bernoulli Equations"],
    ["second-order-equations", "Second-Order Equations"],
    ["linear-second-order-equations", "Linear Second-Order Equations"],
    [
      "homogeneous-constant-coefficient-equations",
      "Homogeneous Constant-Coefficient Equations",
    ],
    [
      "inhomogeneous-constant-coefficient-equations",
      "Inhomogeneous Constant-Coefficient Equations",
    ],
    ["operator-methods", "Operator Methods"],
    ["simultaneous-first-order-equations", "Simultaneous First-Order Equations"],
    ["car-suspension", "Car Suspension"],
    ["resonance", "Resonance"],
  ],
  "fourier-analysis": [
    ["periodic-functions", "Periodic Functions"],
    ["fourier-series", "Fourier Series"],
    ["fourier-coefficients", "Fourier Coefficients"],
    ["vector-analogy", "Vector Analogy"],
    ["function-inner-product", "Function Inner Product"],
    ["function-norm", "Function Norm"],
    ["orthogonal-functions", "Orthogonal Functions"],
    ["euler-formulae", "Euler Formulae"],
    ["even-functions", "Even Functions"],
    ["odd-functions", "Odd Functions"],
    ["fourier-symmetry", "Fourier Symmetry"],
    ["parseval-theorem", "Parseval Theorem"],
    ["general-periods", "General Periods"],
    ["complex-fourier-form", "Complex Fourier Form"],
  ],
  "multivariable-calculus": [
    ["multivariable-functions", "Multivariable Functions"],
    ["graphs", "Graphs"],
    ["partial-derivatives", "Partial Derivatives"],
    ["higher-partial-derivatives", "Higher Partial Derivatives"],
    ["clairaut-theorem", "Clairaut Theorem"],
    ["differentials", "Differentials"],
    ["exact-differentials", "Exact Differentials"],
    ["inexact-differentials", "Inexact Differentials"],
    ["directional-derivatives", "Directional Derivatives"],
    ["gradient", "Gradient"],
    ["multivariable-chain-rule", "Multivariable Chain Rule"],
    ["single-parameter-chain-rule", "Single-Parameter Chain Rule"],
    ["multi-parameter-chain-rule", "Multi-Parameter Chain Rule"],
    ["taylor-expansions", "Taylor Expansions"],
    ["critical-points", "Critical Points"],
    ["two-dimensional-critical-points", "Two-Dimensional Critical Points"],
    ["n-dimensional-critical-points", "n-Dimensional Critical Points"],
  ],
  "partial-differential-equations": [
    ["pde-introduction", "PDE Introduction"],
    ["important-pdes", "Important PDEs"],
    ["special-cases", "Special Cases"],
    ["separation-of-variables", "Separation of Variables"],
    ["linear-pdes", "Linear PDEs"],
  ],
  "vector-calculus": [
    ["vector-fields", "Vector Fields"],
    ["divergence", "Divergence"],
    ["curl", "Curl"],
    ["gradient-operator", "Gradient Operator"],
    ["div-grad-curl-identities", "Div Grad Curl Identities"],
    ["maxwell-equations", "Maxwell Equations"],
  ],
  "multiple-integrals": [
    ["volume-interpretation", "Volume Interpretation"],
    ["rectangular-regions", "Rectangular Regions"],
    ["double-integrals", "Double Integrals"],
    ["integration-limits", "Integration Limits"],
    ["order-switching", "Order Switching"],
    ["polar-integration", "Polar Integration"],
    ["triple-integrals", "Triple Integrals"],
    ["cylindrical-coordinates", "Cylindrical Coordinates"],
    ["spherical-coordinates", "Spherical Coordinates"],
    ["jacobian", "Jacobian"],
  ],
  "complex-analysis": [
    ["complex-differentiability", "Complex Differentiability"],
    ["cauchy-riemann-equations", "Cauchy Riemann Equations"],
    ["complex-derivative-examples", "Complex Derivative Examples"],
    ["laplace-equation", "Laplace Equation"],
    ["harmonic-functions", "Harmonic Functions"],
  ],
};

const disallowedControlCharacterPattern = /[\u0000-\u0009\u000b-\u001f]/;
const corruptedLatexNewlineCommandPattern =
  /[A-Za-z0-9})]\n(?:abla|atural|e|eq|exists|orm|ot|rapprox|rightarrow|u)(?![A-Za-z])/;
const overescapedLatexNCommandPattern =
  /\\\\n(?:abla|atural|e|eq|exists|orm|ot|rapprox|rightarrow|u)(?![A-Za-z])/;
const displayDelimiterNewlineArtifactPattern =
  /\\[\[\]]\\n(?:abla|atural|e|eq|exists|orm|ot|rapprox|rightarrow|u)(?![A-Za-z])/;
const protectedLatexNCommandPattern =
  /\\n(?:abla|atural|e|eq|exists|orm|ot|rightarrow|u)(?![A-Za-z])/g;
const genericPromptPattern =
  /^(?:What is the main purpose of|What does .* mean in |Identify another important piece of notation used in|Before doing .* calculation, what setup information should be written down|State a central formula or test for|How is the formula or method in .* interpreted rather than just memorised|What method choice is usually needed in a standard|Use the notation of .* to explain what is being calculated or tested|What physical or modelling interpretation can|Why is it important to check assumptions when using|What units, dimensions, or variable-dependence check is useful in|Design an exam solution plan for|How could an incorrect setup affect|Give an exam-ready summary rule for)/i;
const genericAnswerPattern =
  /(?:Use it only after the symbols in the formula have been identified|Choose the method from the structure of the problem, not from the symbols alone|First define the variables and notation\. Next choose the core formula or method|An incorrect setup can make the calculation answer the wrong question even if the algebra is correct)/i;

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function hasLiteralNewlineArtifact(value) {
  return value.replace(protectedLatexNCommandPattern, "").includes("\\n");
}

async function collectJsonFiles(directory) {
  let entries;

  try {
    entries = await fs.readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }

  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectJsonFiles(entryPath)));
    } else if (entry.name.endsWith(".json")) {
      files.push(entryPath);
    }
  }

  return files;
}

const selectedSections = Object.entries(requiredTopicsBySection).filter(
  ([sectionId]) => !sectionFilter || sectionId === sectionFilter,
);

if (sectionFilter && selectedSections.length === 0) {
  console.error(`Unknown section filter: ${sectionFilter}`);
  process.exit(1);
}

const errors = [];
const seenQuestionIds = new Map();
const expectedQuestionFiles = new Set();
let auditedTopics = 0;
let auditedQuestions = 0;

for (const [sectionId, topics] of selectedSections) {
  for (const [topicId, topicTitle] of topics) {
    auditedTopics += 1;
    const filePath = path.join(questionRoot, sectionId, `${topicId}.json`);
    expectedQuestionFiles.add(filePath);
    let topic;

    try {
      topic = JSON.parse(await fs.readFile(filePath, "utf8"));
    } catch (error) {
      errors.push(`${filePath}: missing or invalid JSON (${error.message})`);
      continue;
    }

    if (topic.courseId !== expectedCourseId) {
      errors.push(
        `${filePath}: courseId "${topic.courseId}" does not match "${expectedCourseId}"`,
      );
    }

    if (topic.schemaVersion !== expectedSchemaVersion) {
      errors.push(`${filePath}: expected schemaVersion ${expectedSchemaVersion}`);
    }

    if (topic.sectionId !== sectionId) {
      errors.push(
        `${filePath}: sectionId "${topic.sectionId}" does not match "${sectionId}"`,
      );
    }

    if (topic.topicId !== topicId) {
      errors.push(
        `${filePath}: topicId "${topic.topicId}" does not match "${topicId}"`,
      );
    }

    if (topic.topicTitle !== topicTitle) {
      errors.push(
        `${filePath}: topicTitle "${topic.topicTitle}" must be "${topicTitle}"`,
      );
    }

    const expectedPaperTag = termTagsBySection[sectionId];

    if (
      !isStringArray(topic.paperTags) ||
      !topic.paperTags.includes(expectedPaperTag)
    ) {
      errors.push(`${filePath}: top-level paperTags must include ${expectedPaperTag}`);
    }

    const questions = Array.isArray(topic.questions) ? topic.questions : [];
    auditedQuestions += questions.length;

    if (questions.length !== expectedQuestionCount) {
      errors.push(
        `${filePath}: has ${questions.length} questions, needs exactly ${expectedQuestionCount}`,
      );
    }

    for (const [index, question] of questions.entries()) {
      const questionNumber = String(index + 1).padStart(2, "0");
      const expectedId = `math-ii-${sectionId}-${topicId}-${questionNumber}`;
      const expectedRating = expectedRatings[index];

      if (typeof question.id !== "string" || question.id.trim() === "") {
        errors.push(`${filePath}: question ${index + 1} is missing a non-empty id`);
        continue;
      }

      if (question.id !== expectedId) {
        errors.push(
          `${filePath}: question ${index + 1} id "${question.id}" must be "${expectedId}"`,
        );
      }

      if (seenQuestionIds.has(question.id)) {
        errors.push(
          `${filePath}: duplicate question id "${question.id}" also appears in ${seenQuestionIds.get(
            question.id,
          )}`,
        );
      }

      seenQuestionIds.set(question.id, filePath);

      for (const field of ["prompt", "answer", "rating"]) {
        if (typeof question[field] !== "string" || question[field].trim() === "") {
          errors.push(`${filePath}: question ${question.id} is missing ${field}`);
        }
      }

      for (const field of ["prompt", "answer"]) {
        const value = typeof question[field] === "string" ? question[field] : "";

        if (disallowedControlCharacterPattern.test(value)) {
          errors.push(
            `${filePath}: question ${question.id} ${field} contains a control character; check JSON escaping`,
          );
        }

        if (corruptedLatexNewlineCommandPattern.test(value)) {
          errors.push(
            `${filePath}: question ${question.id} ${field} contains a likely corrupted LaTeX \\n command`,
          );
        }

        if (overescapedLatexNCommandPattern.test(value)) {
          errors.push(
            `${filePath}: question ${question.id} ${field} contains an overescaped LaTeX \\n command`,
          );
        }

        if (displayDelimiterNewlineArtifactPattern.test(value)) {
          errors.push(
            `${filePath}: question ${question.id} ${field} contains a display newline artifact after a LaTeX delimiter`,
          );
        }

        if (hasLiteralNewlineArtifact(value)) {
          errors.push(
            `${filePath}: question ${question.id} ${field} contains literal \\n text; use real JSON newline escapes`,
          );
        }
      }

      if (genericPromptPattern.test(question.prompt)) {
        errors.push(
          `${filePath}: question ${question.id} prompt uses a rejected generated template instead of a concrete maths problem`,
        );
      }

      if (genericAnswerPattern.test(question.answer)) {
        errors.push(
          `${filePath}: question ${question.id} answer uses a rejected generated template instead of worked reasoning`,
        );
      }

      if (!allowedRatings.has(question.rating)) {
        errors.push(
          `${filePath}: question ${question.id} has invalid rating "${question.rating}"`,
        );
      }

      if (question.rating !== expectedRating) {
        errors.push(
          `${filePath}: question ${question.id} rating "${question.rating}" must be "${expectedRating}"`,
        );
      }

      if (!isStringArray(question.paperTags)) {
        errors.push(`${filePath}: question ${question.id} is missing paperTags`);
      } else if (!question.paperTags.includes(expectedPaperTag)) {
        errors.push(
          `${filePath}: question ${question.id} paperTags must include ${expectedPaperTag}`,
        );
      }
    }
  }
}

for (const filePath of await collectJsonFiles(questionRoot)) {
  if (
    sectionFilter &&
    path.relative(questionRoot, filePath).split(path.sep)[0] !== sectionFilter
  ) {
    continue;
  }

  if (!expectedQuestionFiles.has(filePath)) {
    errors.push(`${filePath}: unexpected Math II question file`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

const suffix = sectionFilter ? ` in ${sectionFilter}` : "";
console.log(
  `Math II question coverage OK${suffix}: ${auditedTopics} topics, ${auditedQuestions} questions`,
);
