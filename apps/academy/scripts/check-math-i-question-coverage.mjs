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
  "level-1-math-i-physics",
  "questions",
);

const expectedCourseId = "level-1-math-i-physics";
const expectedSchemaVersion = 1;
const expectedQuestionCount = 20;
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
  "real-numbers": "term-1",
  functions: "term-1",
  trigonometry: "term-1",
  limits: "term-1",
  differentiation: "term-1",
  integration: "term-1",
  "complex-arithmetic": "term-1",
  "complex-form": "term-1",
  "complex-equations": "term-1",
  groups: "term-1",
  series: "term-2",
  "power-series": "term-2",
  matrices: "term-2",
  "vector-spaces": "term-2",
  "linear-maps": "term-2",
};

const disallowedControlCharacterPattern = /[\u0000-\u0009\u000b-\u001f]/;
const corruptedLatexNewlineCommandPattern =
  /[A-Za-z0-9})]\n(?:abla|atural|e|eq|exists|orm|ot|rightarrow|u)(?![A-Za-z])/;
const overescapedLatexNCommandPattern =
  /\\\\n(?:abla|atural|e|eq|exists|orm|ot|rightarrow|u)(?![A-Za-z])/;
const displayDelimiterNewlineArtifactPattern =
  /\\[\[\]]\\n(?:abla|atural|e|eq|exists|orm|ot|rightarrow|u)(?![A-Za-z])/;
const protectedLatexNCommandPattern =
  /\\n(?:abla|atural|e|eq|exists|orm|ot|rightarrow|u)(?![A-Za-z])/g;

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function hasLiteralNewlineArtifact(value) {
  return value.replace(protectedLatexNCommandPattern, "").includes("\\n");
}

async function collectJsonFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
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

const requiredTopicsBySection = {
  "real-numbers": [
    "real-numbers",
    "algebraic-manipulation",
    "summation-notation",
    "proof-by-induction",
    "binomial-coefficients",
    "binomial-theorem",
  ],
  functions: ["functions", "inverse-functions"],
  trigonometry: [
    "pythagoras-theorem",
    "trig-functions",
    "angle-addition-formulae",
    "inverse-trig-functions",
  ],
  limits: [
    "formal-limits",
    "limit-variations",
    "algebraic-limits",
    "squeeze-theorem",
    "sine-limit",
    "limit-laws",
    "change-of-variables",
    "continuity",
  ],
  differentiation: [
    "derivatives",
    "first-principles",
    "standard-derivatives",
    "product-rule",
    "quotient-rule",
    "chain-rule",
    "higher-order-derivatives",
    "implicit-differentiation",
    "inverse-derivatives",
    "lhopitals-rule",
  ],
  integration: [
    "definite-integrals",
    "antiderivatives",
    "fundamental-theorem",
    "reverse-differentiation",
    "standard-integrals",
    "integration-by-parts",
    "substitution",
    "polynomial-division",
    "partial-fractions",
    "cover-up-rule",
    "rational-integrals",
    "trig-power-integrals",
  ],
  "complex-arithmetic": [
    "complex-numbers",
    "complex-addition",
    "complex-multiplication",
    "complex-division",
    "real-part",
    "imaginary-part",
    "modulus",
    "conjugate",
  ],
  "complex-form": [
    "argument",
    "polar-form",
    "complex-addition-geometry",
    "complex-multiplication-geometry",
    "de-moivre-theorem",
    "complex-exponential",
    "euler-formula",
    "complex-trig-formulae",
  ],
  "complex-equations": [
    "linear-complex-equations",
    "quadratic-complex-equations",
    "roots-of-unity",
    "general-complex-roots",
    "fundamental-theorem",
    "complex-functions",
    "transcendental-equations-in-a-complex-variable",
  ],
  groups: [
    "symmetries",
    "group-definition",
    "group-axioms",
    "group-tables",
    "cyclic-groups",
    "polygon-symmetries",
    "subgroups",
    "group-maps",
    "matrix-groups",
  ],
  series: [
    "series-basics",
    "partial-sums",
    "geometric-series",
    "series-sums",
    "positive-series",
    "convergence-tests",
    "negative-terms",
    "absolute-convergence",
    "conditional-convergence",
  ],
  "power-series": [
    "power-series",
    "coefficients",
    "radius-of-convergence",
    "interval-of-convergence",
    "taylor-polynomials",
    "taylor-series",
    "taylor-theorem",
    "remainders",
    "taylor-limits",
  ],
  matrices: [
    "linear-systems",
    "matrix-notation",
    "matrix-operations",
    "row-operations",
    "gaussian-elimination",
    "rref",
    "solution-sets",
    "determinants",
    "determinant-properties",
    "inverse-matrices",
    "inverse-computation",
    "lu-decomposition",
  ],
  "vector-spaces": [
    "vector-spaces",
    "subspaces",
    "linear-independence",
    "spanning-sets",
    "bases",
    "dimension",
    "coordinates",
    "rank",
    "nullity",
  ],
  "linear-maps": [
    "linear-maps",
    "matrix-representations",
    "special-matrices",
    "eigenvalues",
    "eigenvectors",
    "eigenspaces",
    "diagonalisation",
    "diagonalisation-applications",
  ],
};

const errors = [];
const seenQuestionIds = new Map();
const expectedQuestionFiles = new Set();
let auditedTopics = 0;
let auditedQuestions = 0;

for (const [sectionId, topicIds] of Object.entries(requiredTopicsBySection)) {
  for (const topicId of topicIds) {
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

    if (typeof topic.topicTitle !== "string" || topic.topicTitle.trim() === "") {
      errors.push(`${filePath}: missing non-empty topicTitle`);
    }

    const expectedPaperTag = termTagsBySection[sectionId];

    if (!isStringArray(topic.paperTags) || !topic.paperTags.includes(expectedPaperTag)) {
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
      const expectedId = `math-i-${sectionId}-${topicId}-${questionNumber}`;
      const expectedRating = expectedRatings[index];

      if (typeof question.id !== "string" || question.id.trim() === "") {
        errors.push(`${filePath}: question ${index + 1} is missing a non-empty id`);
        continue;
      }

      if (question.id !== expectedId) {
        errors.push(
          `${filePath}: question ${index + 1} id "${question.id}" should be "${expectedId}"`,
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

      if (!allowedRatings.has(question.rating)) {
        errors.push(
          `${filePath}: question ${question.id} has invalid rating "${question.rating}"`,
        );
      }

      if (question.rating !== expectedRating) {
        errors.push(
          `${filePath}: question ${question.id} rating "${question.rating}" should be "${expectedRating}"`,
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
  if (!expectedQuestionFiles.has(filePath)) {
    errors.push(`${filePath}: unexpected Math I question file`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `Math I question coverage OK: ${auditedTopics} topics, ${auditedQuestions} questions`,
);
