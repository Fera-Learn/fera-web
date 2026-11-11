import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { level2MathematicalPhysicsModules } from "../src/lib/docs/level-2-mathematical-physics/structure.ts";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const academyRoot = path.resolve(scriptDirectory, "..");
const courseRoot = path.join(
  academyRoot,
  "src/lib/docs/level-2-mathematical-physics",
);
const questionRoot = path.join(courseRoot, "questions");
const registryPath = path.join(courseRoot, "questions.generated.ts");
const courseId = "level-2-mathematical-physics";
const courseTag = "mathematical-physics";
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
const allowedActionPattern =
  /\b(calculate|classify|compute|construct|contract|derive|determine|diagonalise|evaluate|expand|find|prove|show|simplify|solve|test|verify)\b/iu;
const forbiddenPromptPattern =
  /\b(comment|correct|define|describe|design|discuss|explain|identify|interpret|outline|recall|state)\b|\bhow does\b|\bwhat is\b|\bwhy\b/iu;
const unicodeMathPattern = /[∫∑√≈≠≤≥∞αβγδεζηθικλμνξοπρστυφχψωΓΔΘΛΞΠΣΦΨΩ]/u;
const disallowedControlCharacterPattern = /[\u0000-\u0009\u000b-\u001f]/u;
const corruptedLatexNewlineCommandPattern =
  /[A-Za-z0-9})]\n(?:abla|atural|e|eq|exists|orm|ot|rightarrow|u)(?![A-Za-z])/u;
const overescapedLatexNCommandPattern =
  /\\\\n(?:abla|atural|e|eq|exists|orm|ot|rightarrow|u)(?![A-Za-z])/u;
const protectedLatexNCommandPattern =
  /\\n(?:abla|atural|e|eq|exists|orm|ot|rightarrow|u)(?![A-Za-z])/gu;

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/^-+|-+$/gu, "");
}

function listJsonFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return listJsonFiles(entryPath);
      return entry.isFile() && entry.name.endsWith(".json")
        ? [entryPath]
        : [];
    })
    .sort();
}

function hasStringArray(value) {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every((entry) => typeof entry === "string" && entry.trim() !== "")
  );
}

function hasRequiredTags(tags, sectionId) {
  return (
    hasStringArray(tags) &&
    tags.includes(courseTag) &&
    tags.includes(sectionId)
  );
}

function countOccurrences(value, needle) {
  return value.split(needle).length - 1;
}

function hasBalancedMathDelimiters(value) {
  return (
    countOccurrences(value, "\\(") === countOccurrences(value, "\\)") &&
    countOccurrences(value, "\\[") === countOccurrences(value, "\\]")
  );
}

function hasBalancedBraces(value) {
  let depth = 0;
  for (const character of value) {
    if (character === "{") depth += 1;
    if (character === "}") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
}

function hasLiteralNewlineArtifact(value) {
  return value.replace(protectedLatexNCommandPattern, "").includes("\\n");
}

function validateMathString(value, label, errors) {
  if (value.includes("$")) errors.push(`${label}: contains dollar math delimiters`);
  if (unicodeMathPattern.test(value)) {
    errors.push(`${label}: contains a raw Unicode mathematical symbol`);
  }
  if (disallowedControlCharacterPattern.test(value)) {
    errors.push(`${label}: contains a disallowed control character`);
  }
  if (corruptedLatexNewlineCommandPattern.test(value)) {
    errors.push(`${label}: contains a likely corrupted LaTeX \\n command`);
  }
  if (overescapedLatexNCommandPattern.test(value)) {
    errors.push(`${label}: contains an overescaped LaTeX \\n command`);
  }
  if (hasLiteralNewlineArtifact(value)) {
    errors.push(`${label}: contains literal \\n text instead of a JSON newline`);
  }
  if (!hasBalancedMathDelimiters(value)) {
    errors.push(`${label}: has unbalanced math delimiters`);
  }
  if (!hasBalancedBraces(value)) {
    errors.push(`${label}: has unbalanced braces`);
  }
}

const errors = [];
const selectedSectionIds = process.argv
  .slice(2)
  .filter((value) => value !== "--");
const sections = level2MathematicalPhysicsModules.flatMap(
  (module) => module.sections,
);
const sectionIds = sections.map((section) => section.id);

for (const sectionId of selectedSectionIds) {
  if (!sectionIds.includes(sectionId)) {
    throw new Error(`Unknown Level 2 Mathematical Physics section: ${sectionId}`);
  }
}

const targetSectionIds =
  selectedSectionIds.length > 0 ? selectedSectionIds : sectionIds;
const expectedRecords = sections.flatMap((section) =>
  section.topics.map((topic) => {
    const topicId = slugify(topic.title);
    return {
      filePath: path.join(questionRoot, section.id, `${topicId}.json`),
      relativePath: `${section.id}/${topicId}.json`,
      sectionId: section.id,
      title: topic.title,
      topicId,
    };
  }),
);
const targetRecords = expectedRecords.filter((record) =>
  targetSectionIds.includes(record.sectionId),
);
const expectedPathSet = new Set(
  expectedRecords.map((record) => path.resolve(record.filePath)),
);
const actualFiles = listJsonFiles(questionRoot);
const seenQuestionIds = new Map();
const seenPrompts = new Map();
const seenAnswers = new Map();
let auditedQuestions = 0;

if (expectedRecords.length !== 30) {
  errors.push(`expected 30 topics from structure.ts, found ${expectedRecords.length}`);
}

if (selectedSectionIds.length === 0) {
  if (actualFiles.length !== 30) {
    errors.push(`expected exactly 30 question JSON files, found ${actualFiles.length}`);
  }
  const unknownFiles = actualFiles.filter(
    (filePath) => !expectedPathSet.has(path.resolve(filePath)),
  );
  if (unknownFiles.length > 0) {
    errors.push(
      `unknown question JSON files: ${unknownFiles
        .map((filePath) => path.relative(questionRoot, filePath))
        .join(", ")}`,
    );
  }
}

for (const record of targetRecords) {
  if (!fs.existsSync(record.filePath)) {
    errors.push(`missing question file: ${record.relativePath}`);
    continue;
  }

  let data;
  try {
    data = JSON.parse(fs.readFileSync(record.filePath, "utf8"));
  } catch (error) {
    errors.push(`${record.relativePath}: invalid JSON (${error.message})`);
    continue;
  }

  if (data.courseId !== courseId) {
    errors.push(`${record.relativePath}: courseId must be ${courseId}`);
  }
  if (data.schemaVersion !== 1) {
    errors.push(`${record.relativePath}: schemaVersion must be 1`);
  }
  if (data.sectionId !== record.sectionId) {
    errors.push(`${record.relativePath}: sectionId must be ${record.sectionId}`);
  }
  if (data.topicId !== record.topicId) {
    errors.push(`${record.relativePath}: topicId must be ${record.topicId}`);
  }
  if (data.topicTitle !== record.title) {
    errors.push(`${record.relativePath}: topicTitle must be ${record.title}`);
  }
  if (!hasRequiredTags(data.paperTags, record.sectionId)) {
    errors.push(
      `${record.relativePath}: top-level paperTags must include ${courseTag} and ${record.sectionId}`,
    );
  }

  const questions = Array.isArray(data.questions) ? data.questions : [];
  auditedQuestions += questions.length;
  if (questions.length !== 20) {
    errors.push(
      `${record.relativePath}: expected 20 questions, found ${questions.length}`,
    );
  }

  for (const [index, question] of questions.entries()) {
    const number = String(index + 1).padStart(2, "0");
    const expectedId = `math-physics-${record.sectionId}-${record.topicId}-${number}`;
    const label = `${record.relativePath} question ${number}`;

    if (question.id !== expectedId) {
      errors.push(`${label}: id must be ${expectedId}`);
    }
    if (seenQuestionIds.has(question.id)) {
      errors.push(`${label}: duplicate id also used by ${seenQuestionIds.get(question.id)}`);
    } else if (typeof question.id === "string") {
      seenQuestionIds.set(question.id, label);
    }

    if (question.rating !== expectedRatings[index]) {
      errors.push(
        `${label}: rating must be ${expectedRatings[index] ?? "undefined"}, found ${question.rating}`,
      );
    }
    if (!hasRequiredTags(question.paperTags, record.sectionId)) {
      errors.push(
        `${label}: paperTags must include ${courseTag} and ${record.sectionId}`,
      );
    }

    for (const field of ["prompt", "answer"]) {
      if (typeof question[field] !== "string" || question[field].trim() === "") {
        errors.push(`${label}: missing non-empty ${field}`);
      }
    }

    const prompt = typeof question.prompt === "string" ? question.prompt : "";
    const answer = typeof question.answer === "string" ? question.answer : "";
    if (prompt.includes("Notation:")) {
      errors.push(`${label}: prompt contains a bulk Notation section`);
    }
    if (!allowedActionPattern.test(prompt)) {
      errors.push(`${label}: prompt lacks an approved mathematical action verb`);
    }
    if (forbiddenPromptPattern.test(prompt)) {
      errors.push(`${label}: prompt contains forbidden prose-response wording`);
    }
    if (/\bmarks?\b/iu.test(prompt) || /\bmarks?\b/iu.test(answer)) {
      errors.push(`${label}: topic practice must not contain marks`);
    }
    if (!answer.includes("Final answer:")) {
      errors.push(`${label}: answer must contain "Final answer:"`);
    }

    const normalizedPrompt = prompt.replace(/\s+/gu, " ").trim().toLowerCase();
    const normalizedAnswer = answer.replace(/\s+/gu, " ").trim().toLowerCase();
    if (seenPrompts.has(normalizedPrompt)) {
      errors.push(`${label}: duplicate prompt also used by ${seenPrompts.get(normalizedPrompt)}`);
    } else if (normalizedPrompt) {
      seenPrompts.set(normalizedPrompt, label);
    }
    if (seenAnswers.has(normalizedAnswer)) {
      errors.push(`${label}: duplicate answer also used by ${seenAnswers.get(normalizedAnswer)}`);
    } else if (normalizedAnswer) {
      seenAnswers.set(normalizedAnswer, label);
    }

    validateMathString(prompt, `${label} prompt`, errors);
    validateMathString(answer, `${label} answer`, errors);
  }
}

if (selectedSectionIds.length === 0) {
  if (auditedQuestions !== 600) {
    errors.push(`expected exactly 600 questions, audited ${auditedQuestions}`);
  }

  if (!fs.existsSync(registryPath)) {
    errors.push("missing generated Mathematical Physics question registry");
  } else {
    const registry = fs.readFileSync(registryPath, "utf8");
    const importPaths = [...registry.matchAll(/from "\.\/questions\/([^"\n]+\.json)";/gu)].map(
      ([, importPath]) => importPath,
    );
    const expectedImports = expectedRecords
      .map((record) => record.relativePath)
      .sort((left, right) => left.localeCompare(right));
    const sortedImports = [...importPaths].sort((left, right) =>
      left.localeCompare(right),
    );
    if (importPaths.length !== 30) {
      errors.push(`generated registry must contain 30 imports, found ${importPaths.length}`);
    }
    if (sortedImports.join("|") !== expectedImports.join("|")) {
      errors.push("generated registry imports do not match the 30 structure topics");
    }
  }
}

if (errors.length > 0) {
  console.error(
    `Level 2 Mathematical Physics question validation failed with ${errors.length} issue${errors.length === 1 ? "" : "s"}:`,
  );
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(
    `Level 2 Mathematical Physics questions valid: ${targetRecords.length} topic files and ${auditedQuestions} questions across ${targetSectionIds.length} section${targetSectionIds.length === 1 ? "" : "s"}.`,
  );
}
