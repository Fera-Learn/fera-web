import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { level2PhysicsAModules } from "../src/lib/docs/level-2-physics-a/structure.ts";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(scriptDir, "..");
const courseRoot = path.join(
  appRoot,
  "src",
  "lib",
  "docs",
  "level-2-physics-a",
);
const questionRoot = path.join(courseRoot, "questions");
const registryPath = path.join(courseRoot, "questions.generated.ts");
const expectedRatings = [
  "*", "*", "*+", "*+", "**", "**", "**+", "**+", "***", "***",
  "***+", "***+", "****", "****", "****+", "****+", "****+",
  "*****", "*****", "*****",
];
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
  try {
    await fs.access(directory);
  } catch {
    return [];
  }
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

const expectedTopics = new Map(
  level2PhysicsAModules.flatMap((module) => module.sections).flatMap((section) =>
    section.topics.map((topic) => [
      `${section.id}/${slugify(topic.title)}.json`,
      topic.title,
    ]),
  ),
);

const files = (await walk(questionRoot)).sort();
const errors = [];
const ids = new Set();
const prompts = new Set();
const answers = new Set();
let questionCount = 0;

if (files.length !== 127) {
  errors.push(`Expected 127 topic files; found ${files.length}.`);
}
if (expectedTopics.size !== 127) {
  errors.push(
    `Expected the course structure to contain 127 Physics A topics; found ${expectedTopics.size}.`,
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
  if (data.courseId !== "level-2-physics-a") {
    errors.push(`${relative}: wrong courseId.`);
  }
  if (data.sectionId !== sectionId) errors.push(`${relative}: wrong sectionId.`);
  if (data.topicId !== topicId) errors.push(`${relative}: wrong topicId.`);
  if (!expectedTopics.has(relative)) {
    errors.push(`${relative}: not present in the Physics A course structure.`);
  } else if (data.topicTitle !== expectedTopics.get(relative)) {
    errors.push(`${relative}: topicTitle does not match the course structure.`);
  }
  if (!Array.isArray(data.paperTags) || !data.paperTags.includes("physics-a")) {
    errors.push(`${relative}: missing Physics A paper tag.`);
  }
  if (!data.paperTags?.includes(sectionId)) {
    errors.push(`${relative}: missing section paper tag.`);
  }
  if (!Array.isArray(data.questions) || data.questions.length !== 20) {
    errors.push(`${relative}: expected exactly 20 questions.`);
    continue;
  }

  const topicRatings = new Set();
  questionCount += data.questions.length;

  for (const [index, question] of data.questions.entries()) {
    const label = `${relative} question ${index + 1}`;
    const expectedId = `physics-a-${sectionId}-${topicId}-${String(index + 1).padStart(2, "0")}`;
    if (question.id !== expectedId) errors.push(`${label}: unstable or malformed id.`);
    if (ids.has(question.id)) errors.push(`${label}: duplicate id ${question.id}.`);
    ids.add(question.id);
    if (typeof question.prompt !== "string" || question.prompt.trim() === "") {
      errors.push(`${label}: missing prompt.`);
    }
    if (question.prompt?.includes("Notation:")) {
      errors.push(`${label}: prompt contains a bulk Notation section.`);
    }
    if (typeof question.answer !== "string" || question.answer.trim() === "") {
      errors.push(`${label}: missing answer.`);
      continue;
    }
    const normalizedPrompt = question.prompt.replace(/\s+/gu, " ").trim().toLowerCase();
    const normalizedAnswer = question.answer.replace(/\s+/gu, " ").trim().toLowerCase();
    if (prompts.has(normalizedPrompt)) errors.push(`${label}: duplicate prompt.`);
    if (answers.has(normalizedAnswer)) errors.push(`${label}: duplicate answer.`);
    prompts.add(normalizedPrompt);
    answers.add(normalizedAnswer);
    if (!allowedRatings.has(question.rating)) errors.push(`${label}: invalid rating.`);
    if (question.rating !== expectedRatings[index]) {
      errors.push(`${label}: expected rating ${expectedRatings[index]}.`);
    }
    topicRatings.add(question.rating);
    if (!Array.isArray(question.paperTags) || question.paperTags.length < 2) {
      errors.push(`${label}: missing relevant paperTags.`);
    } else if (
      !question.paperTags.includes("physics-a") ||
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
      !/\b(?:calculate|check|compare|derive|determine|estimate|evaluate|explain|find|interpret|justify|predict|prove|reconstruct|rework|show|solve|test|verify|write)\b/i.test(
        question.prompt,
      )
    ) {
      errors.push(`${label}: prompt lacks an approved physics task verb.`);
    }
    if (/\\n(?![A-Za-z])/u.test(question.answer)) {
      errors.push(`${label}: answer contains a literal backslash-n.`);
    }
    const combined = `${question.prompt}\n${question.answer}`.replace(
      /\\\\\[\d+pt\]/gu,
      "",
    );
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

if (questionCount !== 2540) {
  errors.push(`Expected exactly 2540 questions; found ${questionCount}.`);
}
try {
  const registry = await fs.readFile(registryPath, "utf8");
  const imports = [...registry.matchAll(/from "\.\/questions\/([^"\n]+\.json)";/gu)].map(
    ([, value]) => value,
  );
  if (imports.length !== 127) errors.push(`Expected 127 registry imports; found ${imports.length}.`);
  const expected = [...expectedTopics.keys()].sort().join("|");
  if ([...imports].sort().join("|") !== expected) {
    errors.push("Generated registry imports do not match the Physics A structure.");
  }
} catch (error) {
  errors.push(`Cannot read generated registry (${error.message}).`);
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `Validated ${questionCount} questions across ${files.length} Physics A topic files.`,
);
