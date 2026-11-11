import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";

import { prepareMdxBody } from "../../../packages/docs/src/next/prepare-mdx-body.ts";
import { level2MathematicalPhysicsModules } from "../src/lib/docs/level-2-mathematical-physics/structure.ts";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const academyRoot = path.resolve(scriptDirectory, "..");
const courseRoot = path.join(
  academyRoot,
  "src/lib/docs/level-2-mathematical-physics",
);
const registryPath = path.join(courseRoot, "content.ts");
const pagesPath = path.join(academyRoot, "src/lib/docs/pages.ts");
const allowedHeadingSequences = [
  ["Principle", "Notation", "The Core Method"],
  ["Principle", "Notation", "The Core Test"],
];
const forbiddenHeadings = new Set([
  "Checks",
  "Examples",
  "Fast Summary",
  "Learning Objectives",
  "Mistake Filter",
  "Pitfalls",
  "Summary",
  "Worked Cases",
]);

function listTopicContentFiles(directory) {
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return listTopicContentFiles(entryPath);
      if (entry.name !== "content.ts" || entryPath === registryPath) return [];
      return [entryPath];
    })
    .sort();
}

function countMatches(value, pattern) {
  return [...value.matchAll(pattern)].length;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/^-+|-+$/gu, "");
}

function findDuplicates(values) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return [...counts].filter(([, count]) => count > 1).map(([value]) => value);
}

function hasDoubledTexCommand(value) {
  for (let index = 0; index < value.length; index += 1) {
    if (value[index] !== "\\") continue;

    let slashCount = 1;
    while (value[index + slashCount] === "\\") slashCount += 1;

    const commandMatch = value.slice(index + slashCount).match(/^[A-Za-z]+/u);
    if (slashCount === 2 && commandMatch && commandMatch[0].length > 1) {
      return true;
    }

    index += slashCount - 1;
  }
  return false;
}

function validateJavaScriptStringProps(source, relativePath, errors) {
  const propPattern =
    /\b(symbol|meaning|unit|question|answer):\s*("(?:\\.|[^"\\])*")/gu;
  let match;

  while ((match = propPattern.exec(source))) {
    const [, propName, literal] = match;
    let decoded;

    try {
      decoded = JSON.parse(literal);
    } catch (error) {
      errors.push(
        `${relativePath}: cannot decode ${propName} string (${error.message})`,
      );
      continue;
    }

    if (hasDoubledTexCommand(decoded)) {
      errors.push(
        `${relativePath}: ${propName} sends a doubled TeX command to the renderer`,
      );
    }
    if (/[<>]/u.test(decoded)) {
      errors.push(`${relativePath}: ${propName} contains a raw angle bracket`);
    }
  }
}

function validatePreparedMath(prepared, relativePath, errors) {
  const expressionPattern = /\{("(?:\\.|[^"\\])*")\}/gu;
  let match;

  while ((match = expressionPattern.exec(prepared))) {
    let decoded;
    try {
      decoded = JSON.parse(match[1]);
    } catch {
      continue;
    }
    if (
      (decoded.startsWith("\\(") || decoded.startsWith("\\[")) &&
      hasDoubledTexCommand(decoded)
    ) {
      errors.push(
        `${relativePath}: prepared raw math contains a doubled TeX command`,
      );
    }
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
    throw new Error(
      `Unknown Level 2 Mathematical Physics section: ${sectionId}`,
    );
  }
}

const targetSectionIds =
  selectedSectionIds.length > 0 ? selectedSectionIds : sectionIds;
const expectedRecords = sections.flatMap((section) =>
  section.topics.map((topic) => ({
    contentPath: `${section.id}/${slugify(topic.title)}/content.ts`,
    sectionId: section.id,
    title: topic.title,
  })),
);
const targetRecords = expectedRecords.filter((record) =>
  targetSectionIds.includes(record.sectionId),
);
const targetPaths = new Set(targetRecords.map((record) => record.contentPath));
const topicContentFiles = listTopicContentFiles(courseRoot);
const relativeContentPaths = topicContentFiles.map((filePath) =>
  path.relative(courseRoot, filePath).replaceAll(path.sep, "/"),
);
const targetContentFiles = topicContentFiles.filter((filePath) =>
  targetPaths.has(
    path.relative(courseRoot, filePath).replaceAll(path.sep, "/"),
  ),
);

if (expectedRecords.length !== 30) {
  errors.push(
    `expected 30 Mathematical Physics topics, found ${expectedRecords.length}`,
  );
}

const missingContentPaths = targetRecords
  .map((record) => record.contentPath)
  .filter((contentPath) => !relativeContentPaths.includes(contentPath));
if (missingContentPaths.length > 0) {
  errors.push(`missing topic content: ${missingContentPaths.join(", ")}`);
}

if (selectedSectionIds.length === 0) {
  const expectedPathSet = new Set(
    expectedRecords.map((record) => record.contentPath),
  );
  const unknownContentPaths = relativeContentPaths.filter(
    (contentPath) => !expectedPathSet.has(contentPath),
  );
  if (topicContentFiles.length !== 30) {
    errors.push(
      `expected exactly 30 topic content files, found ${topicContentFiles.length}`,
    );
  }
  if (unknownContentPaths.length > 0) {
    errors.push(`unknown topic content: ${unknownContentPaths.join(", ")}`);
  }
}

if (!fs.existsSync(registryPath)) {
  errors.push("missing Mathematical Physics content registry");
} else {
  const registrySource = fs.readFileSync(registryPath, "utf8");
  const importRecords = [
    ...registrySource.matchAll(
      /import \{ content as ([A-Za-z][A-Za-z0-9]*) \} from "\.\/([^"\n]+\/content)";/gu,
    ),
  ].map(([, identifier, importPath]) => ({
    identifier,
    path: `${importPath}.ts`,
  }));
  const mapRecords = [
    ...registrySource.matchAll(
      /\[\s*"([^"]+)",\s*([A-Za-z][A-Za-z0-9]*),?\s*\]/gu,
    ),
  ].map(([, title, identifier]) => ({ identifier, title }));
  const importPaths = importRecords.map((record) => record.path);
  const importIdentifiers = importRecords.map((record) => record.identifier);
  const mapTitles = mapRecords.map((record) => record.title);
  const mapIdentifiers = mapRecords.map((record) => record.identifier);
  const importIdentifierByPath = new Map(
    importRecords.map((record) => [record.path, record.identifier]),
  );
  const mapIdentifierByTitle = new Map(
    mapRecords.map((record) => [record.title, record.identifier]),
  );

  if (!registrySource.includes("new Map<string, string>([")) {
    errors.push("content registry must export a typed Map");
  }

  for (const record of targetRecords) {
    const importIdentifier = importIdentifierByPath.get(record.contentPath);
    const mapIdentifier = mapIdentifierByTitle.get(record.title);
    if (!importIdentifier) {
      errors.push(`registry import missing: ${record.contentPath}`);
    }
    if (!mapIdentifier) {
      errors.push(`registry map entry missing: ${record.title}`);
    }
    if (
      importIdentifier &&
      mapIdentifier &&
      importIdentifier !== mapIdentifier
    ) {
      errors.push(
        `registry map entry for ${record.title} must use ${importIdentifier} (found ${mapIdentifier})`,
      );
    }
  }

  for (const [label, values] of [
    ["registry imports", importPaths],
    ["registry import identifiers", importIdentifiers],
    ["registry titles", mapTitles],
    ["registry body mappings", mapIdentifiers],
  ]) {
    const duplicates = findDuplicates(values);
    if (duplicates.length > 0) {
      errors.push(`duplicate ${label}: ${duplicates.join(", ")}`);
    }
  }

  if (selectedSectionIds.length === 0) {
    const expectedPaths = new Set(
      expectedRecords.map((record) => record.contentPath),
    );
    const expectedTitles = new Set(
      expectedRecords.map((record) => record.title),
    );
    const unknownImports = importPaths.filter(
      (importPath) => !expectedPaths.has(importPath),
    );
    const unknownTitles = mapTitles.filter(
      (title) => !expectedTitles.has(title),
    );
    if (importPaths.length !== 30) {
      errors.push(`expected 30 registry imports, found ${importPaths.length}`);
    }
    if (mapTitles.length !== 30) {
      errors.push(
        `expected 30 registry map entries, found ${mapTitles.length}`,
      );
    }
    if (unknownImports.length > 0) {
      errors.push(`unknown registry imports: ${unknownImports.join(", ")}`);
    }
    if (unknownTitles.length > 0) {
      errors.push(`unknown registry titles: ${unknownTitles.join(", ")}`);
    }
  }
}

const pagesSource = fs.readFileSync(pagesPath, "utf8");
if (
  !pagesSource.includes(
    "body: level2MathematicalPhysicsTopicBodies.get(topic.title)",
  )
) {
  errors.push("pages.ts must use the Mathematical Physics body map");
}

for (const filePath of targetContentFiles) {
  const relativePath = path
    .relative(courseRoot, filePath)
    .replaceAll(path.sep, "/");
  const source = fs.readFileSync(filePath, "utf8");
  let body;

  try {
    ({ content: body } = await import(
      `${pathToFileURL(filePath).href}?validate=${Date.now()}`
    ));
  } catch (error) {
    errors.push(`${relativePath}: cannot import content (${error.message})`);
    continue;
  }

  if (!source.startsWith("export const content = String.raw`")) {
    errors.push(`${relativePath}: must export String.raw content`);
  }
  if (!body.trim()) errors.push(`${relativePath}: content body is empty`);

  const headings = [...body.matchAll(/^##\s+(.+)$/gmu)].map(([, heading]) =>
    heading.trim(),
  );
  const validHeadingSequence = allowedHeadingSequences.some(
    (sequence) => headings.join("|") === sequence.join("|"),
  );
  if (!validHeadingSequence) {
    errors.push(
      `${relativePath}: headings must be Principle → Notation → The Core Method/Test (found ${headings.join(" → ") || "none"})`,
    );
  }
  for (const heading of headings) {
    if (forbiddenHeadings.has(heading)) {
      errors.push(`${relativePath}: contains forbidden heading ## ${heading}`);
    }
  }

  if (countMatches(body, /<Notation\b/gu) !== 1) {
    errors.push(`${relativePath}: must contain exactly one <Notation>`);
  }
  if (countMatches(body, /<PhysicsExamples\b/gu) !== 1) {
    errors.push(`${relativePath}: must contain exactly one <PhysicsExamples>`);
  }
  if (!/<PhysicsExamples\s+collapsible\b/u.test(body)) {
    errors.push(`${relativePath}: <PhysicsExamples> must be collapsible`);
  }

  const examplesStart = body.indexOf("<PhysicsExamples");
  const examplesEnd =
    examplesStart >= 0 ? body.indexOf("/>", examplesStart) : -1;
  if (examplesStart >= 0 && examplesEnd >= 0) {
    const examplesSource = body.slice(examplesStart, examplesEnd + 2);
    const itemCount = countMatches(examplesSource, /\{\s*title:\s*"/gu);
    if (itemCount !== 2) {
      errors.push(
        `${relativePath}: examples component must contain exactly two items (found ${itemCount})`,
      );
    }
  }

  if (body.includes("$")) {
    errors.push(`${relativePath}: contains dollar math delimiters`);
  }
  validateJavaScriptStringProps(source, relativePath, errors);

  const prepared = prepareMdxBody(body);
  validatePreparedMath(prepared, relativePath, errors);
  try {
    await compile(prepared, { remarkPlugins: [remarkGfm] });
  } catch (error) {
    errors.push(
      `${relativePath}: prepared MDX does not compile (${error.message})`,
    );
  }
}

if (errors.length > 0) {
  console.error(
    `Level 2 Mathematical Physics content validation failed with ${errors.length} issue${errors.length === 1 ? "" : "s"}:`,
  );
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(
    `Level 2 Mathematical Physics content valid: ${targetContentFiles.length}/${targetRecords.length} pages across ${targetSectionIds.length} section${targetSectionIds.length === 1 ? "" : "s"}.`,
  );
}
