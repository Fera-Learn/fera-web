import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { level2PhysicsBModules } from "../src/lib/docs/level-2-physics-b/structure.ts";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(scriptDir, "..");
const courseRoot = path.join(
  appRoot,
  "src",
  "lib",
  "docs",
  "level-2-physics-b",
);
const questionRoot = path.join(courseRoot, "questions");
const allowedRatings = new Set([
  "*",
  "*+",
  "**",
  "**+",
  "***",
  "***+",
  "****",
  "****+",
  "*****",
]);
const requiredAnswerSections = [
  "Model:",
  "Working:",
  "Final answer:",
  "Check:",
];

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return walk(entryPath);
      return entry.isFile() && entry.name.endsWith(".json") ? [entryPath] : [];
    }),
  );
  return nested.flat();
}

function count(value, token) {
  return value.split(token).length - 1;
}

function slugify(title) {
  return title
    .toLowerCase()
    .replaceAll("&", " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const thermodynamics = level2PhysicsBModules.find(
  (module) => module.id === "thermodynamics",
);
const expectedTopics = new Map(
  (thermodynamics?.sections ?? []).flatMap((section) =>
    section.topics.map((topic) => [
      `${section.id}/${slugify(topic.title)}.json`,
      topic.title,
    ]),
  ),
);

const files = (await walk(questionRoot)).sort();
const errors = [];
const ids = new Set();
let questionCount = 0;

if (files.length !== 92) {
  errors.push(`Expected 92 topic files; found ${files.length}.`);
}
if (expectedTopics.size !== 92) {
  errors.push(
    `Expected the course structure to contain 92 Thermodynamics topics; found ${expectedTopics.size}.`,
  );
}

for (const filePath of files) {
  const relative = path.relative(questionRoot, filePath);
  const [sectionId, fileName, ...extra] = relative.split(path.sep);
  let data;

  try {
    data = JSON.parse(await fs.readFile(filePath, "utf8"));
  } catch (error) {
    errors.push(`${relative}: invalid JSON (${error.message})`);
    continue;
  }

  const topicId = path.basename(fileName ?? "", ".json");
  if (extra.length > 0 || !sectionId || !fileName) {
    errors.push(`${relative}: expected questions/[section]/[topic].json.`);
  }
  if (data.schemaVersion !== 1) errors.push(`${relative}: schemaVersion must be 1.`);
  if (data.courseId !== "level-2-physics-b") {
    errors.push(`${relative}: wrong courseId.`);
  }
  if (data.sectionId !== sectionId) errors.push(`${relative}: wrong sectionId.`);
  if (data.topicId !== topicId) errors.push(`${relative}: wrong topicId.`);
  if (!expectedTopics.has(relative)) {
    errors.push(`${relative}: not present in the Thermodynamics course structure.`);
  } else if (data.topicTitle !== expectedTopics.get(relative)) {
    errors.push(`${relative}: topicTitle does not match the course structure.`);
  }
  if (!Array.isArray(data.paperTags) || !data.paperTags.includes("thermodynamics")) {
    errors.push(`${relative}: missing Thermodynamics paper tag.`);
  }
  if (!data.paperTags?.includes(sectionId)) {
    errors.push(`${relative}: missing section paper tag.`);
  }
  if (!Array.isArray(data.questions) || data.questions.length < 20) {
    errors.push(`${relative}: expected at least 20 questions.`);
    continue;
  }

  const topicRatings = new Set();
  questionCount += data.questions.length;

  for (const [index, question] of data.questions.entries()) {
    const label = `${relative} question ${index + 1}`;
    const expectedId = `${topicId}-${String(index + 1).padStart(3, "0")}`;
    if (question.id !== expectedId) errors.push(`${label}: unstable or malformed id.`);
    if (ids.has(question.id)) errors.push(`${label}: duplicate id ${question.id}.`);
    ids.add(question.id);
    if (typeof question.prompt !== "string" || question.prompt.trim() === "") {
      errors.push(`${label}: missing prompt.`);
    }
    if (typeof question.answer !== "string" || question.answer.trim() === "") {
      errors.push(`${label}: missing answer.`);
      continue;
    }
    if (!allowedRatings.has(question.rating)) errors.push(`${label}: invalid rating.`);
    topicRatings.add(question.rating);
    if (!Array.isArray(question.paperTags) || question.paperTags.length < 2) {
      errors.push(`${label}: missing relevant paperTags.`);
    } else if (
      !question.paperTags.includes("thermodynamics") ||
      !question.paperTags.includes(sectionId)
    ) {
      errors.push(`${label}: paperTags do not match the topic section.`);
    }
    for (const heading of requiredAnswerSections) {
      if (!question.answer.includes(heading)) {
        errors.push(`${label}: answer is missing ${heading}`);
      }
    }
    if (question.prompt.includes("**") || question.answer.includes("**")) {
      errors.push(`${label}: contains unsupported Markdown emphasis markers.`);
    }
    if (
      !/\b(?:calculate|check|derive|determine|estimate|evaluate|find|reconstruct|rework|show|solve|test|verify|write)\b/i.test(
        question.prompt,
      )
    ) {
      errors.push(`${label}: prompt does not require a mathematical task.`);
    }
    if (/\\n(?![A-Za-z])/u.test(question.answer)) {
      errors.push(`${label}: answer contains a literal backslash-n.`);
    }
    const combined = `${question.prompt}\n${question.answer}`;
    if (count(combined, "\\(") !== count(combined, "\\)")) {
      errors.push(`${label}: unbalanced inline-math delimiters.`);
    }
    if (count(combined, "\\[") !== count(combined, "\\]")) {
      errors.push(`${label}: unbalanced display-math delimiters.`);
    }
    if (/[α-ωΑ-Ω∫∑√∞≈≠≤≥]/u.test(combined)) {
      errors.push(`${label}: contains a Unicode mathematical symbol.`);
    }
  }

  if (topicRatings.size < 6 || !topicRatings.has("*") || !topicRatings.has("*****")) {
    errors.push(`${relative}: insufficient difficulty range.`);
  }
}

for (const relative of expectedTopics.keys()) {
  if (!files.some((filePath) => path.relative(questionRoot, filePath) === relative)) {
    errors.push(`${relative}: missing question file.`);
  }
}

if (questionCount < 1840) {
  errors.push(`Expected at least 1840 questions; found ${questionCount}.`);
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `Validated ${questionCount} questions across ${files.length} Thermodynamics topic files.`,
);
