import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(scriptDir, "..");
const checkMode = process.argv.includes("--check");

const registryConfigs = [
  {
    courseId: "level-1-physics",
    exportName: "level1PhysicsQuestionTopics",
    sourceRoot: path.join(appRoot, "src", "lib", "docs", "level-1-physics"),
  },
  {
    courseId: "level-1-math-i-physics",
    exportName: "level1MathIPhysicsQuestionTopics",
    sourceRoot: path.join(
      appRoot,
      "src",
      "lib",
      "docs",
      "level-1-math-i-physics",
    ),
  },
  {
    courseId: "level-1-math-ii-physics",
    exportName: "level1MathIIPhysicsQuestionTopics",
    sourceRoot: path.join(
      appRoot,
      "src",
      "lib",
      "docs",
      "level-1-math-ii-physics",
    ),
  },
  {
    courseId: "level-1-calculus",
    exportName: "level1CalculusQuestionTopics",
    sourceRoot: path.join(
      appRoot,
      "src",
      "lib",
      "docs",
      "level-1-calculus",
    ),
  },
  {
    courseId: "level-1-linear-algebra",
    exportName: "level1LinearAlgebraQuestionTopics",
    sourceRoot: path.join(
      appRoot,
      "src",
      "lib",
      "docs",
      "level-1-linear-algebra",
    ),
  },
];

async function walkJsonFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return walkJsonFiles(entryPath);
      }

      if (entry.isFile() && entry.name.endsWith(".json")) {
        return [entryPath];
      }

      return [];
    }),
  );

  return files.flat();
}

function hasStringArray(value) {
  return (
    Array.isArray(value) && value.every((entry) => typeof entry === "string")
  );
}

function assertStringField(value, field, filePath, errors) {
  if (typeof value[field] !== "string" || value[field].trim() === "") {
    errors.push(`${filePath}: missing string field "${field}"`);
  }
}

function validateTopic(
  topic,
  filePath,
  relativePath,
  seenQuestionIds,
  courseId,
) {
  const errors = [];
  const pathParts = relativePath.split(path.sep);

  if (pathParts.length !== 2) {
    errors.push(
      `${filePath}: expected path shape questions/[section]/[topic].json`,
    );
  }

  const sectionFromPath = pathParts[0];
  const topicFromPath = path.basename(pathParts[1] ?? "", ".json");

  for (const field of ["courseId", "sectionId", "topicId", "topicTitle"]) {
    assertStringField(topic, field, filePath, errors);
  }

  if (topic.schemaVersion !== 1) {
    errors.push(`${filePath}: expected schemaVersion 1`);
  }

  if (topic.courseId !== courseId) {
    errors.push(
      `${filePath}: courseId "${topic.courseId}" does not match "${courseId}"`,
    );
  }

  if (!hasStringArray(topic.paperTags)) {
    errors.push(`${filePath}: missing string array field "paperTags"`);
  }

  if (!Array.isArray(topic.questions)) {
    errors.push(`${filePath}: missing array field "questions"`);
  }

  if (topic.sectionId !== sectionFromPath) {
    errors.push(
      `${filePath}: sectionId "${topic.sectionId}" does not match path "${sectionFromPath}"`,
    );
  }

  if (topic.topicId !== topicFromPath) {
    errors.push(
      `${filePath}: topicId "${topic.topicId}" does not match path "${topicFromPath}"`,
    );
  }

  for (const [index, question] of (topic.questions ?? []).entries()) {
    for (const field of ["id", "prompt", "answer", "rating"]) {
      assertStringField(
        question,
        field,
        `${filePath} question ${index + 1}`,
        errors,
      );
    }

    if (!hasStringArray(question.paperTags)) {
      errors.push(
        `${filePath} question ${question.id ?? index + 1}: missing string array field "paperTags"`,
      );
    }

    if (typeof question.id === "string") {
      if (seenQuestionIds.has(question.id)) {
        errors.push(`${filePath}: duplicate question id "${question.id}"`);
      }

      seenQuestionIds.add(question.id);
    }
  }

  return errors;
}

function toIdentifier(sectionId, topicId) {
  const words = `${sectionId}-${topicId}`
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean);
  const identifier = words
    .map((word, index) => {
      const normalized = word.toLowerCase();

      if (index === 0) {
        return normalized;
      }

      return `${normalized.charAt(0).toUpperCase()}${normalized.slice(1)}`;
    })
    .join("");

  return `${identifier || "topic"}QuestionData`.replaceAll(
    "FreeBodyDiagram",
    "ForceDiagram",
  );
}

function toImportPath(filePath, outputPath) {
  const relativePath = path.relative(path.dirname(outputPath), filePath);
  const normalizedPath = relativePath.split(path.sep).join("/");

  return normalizedPath.startsWith(".")
    ? normalizedPath
    : `./${normalizedPath}`;
}

async function buildRegistry(config) {
  const questionRoot = path.join(config.sourceRoot, "questions");
  const outputPath = path.join(config.sourceRoot, "questions.generated.ts");
  const files = (await walkJsonFiles(questionRoot))
    .filter((filePath) => path.basename(filePath) !== "index.json")
    .sort((left, right) => left.localeCompare(right));

  const seenQuestionIds = new Set();
  const topics = [];
  const validationErrors = [];

  for (const filePath of files) {
    const source = await fs.readFile(filePath, "utf8");
    const relativePath = path.relative(questionRoot, filePath);
    let topic;

    try {
      topic = JSON.parse(source);
    } catch (error) {
      validationErrors.push(`${filePath}: invalid JSON (${error.message})`);
      continue;
    }

    validationErrors.push(
      ...validateTopic(
        topic,
        filePath,
        relativePath,
        seenQuestionIds,
        config.courseId,
      ),
    );

    topics.push({
      filePath,
      importPath: toImportPath(filePath, outputPath),
      sectionId: topic.sectionId,
      topicId: topic.topicId,
      variableName: toIdentifier(topic.sectionId, topic.topicId),
    });
  }

  if (validationErrors.length > 0) {
    throw new Error(validationErrors.join("\n"));
  }

  const imports = topics
    .map((topic) => `import ${topic.variableName} from "${topic.importPath}";`)
    .join("\n");
  const entries = topics.map((topic) => `  ${topic.variableName},`).join("\n");

  return {
    outputPath,
    registry: `/* This file is generated by apps/academy/scripts/generate-question-registry.mjs. */\n/* Do not edit manually. */\n\n${imports}\n\nexport const ${config.exportName} = [\n${entries}\n] as const;\n`,
  };
}

let staleRegistry = false;

for (const config of registryConfigs) {
  const { outputPath, registry } = await buildRegistry(config);

  if (checkMode) {
    const current = await fs.readFile(outputPath, "utf8").catch(() => null);

    if (current !== registry) {
      staleRegistry = true;
      console.error(
        `${outputPath}: question registry is stale. Run \`pnpm --filter academy generate:questions\`.`,
      );
    }

    continue;
  }

  await fs.writeFile(outputPath, registry);
}

if (staleRegistry) {
  process.exit(1);
}
