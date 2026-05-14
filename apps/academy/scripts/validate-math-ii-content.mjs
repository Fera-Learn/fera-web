import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(scriptDir, "..");
const courseRoot = path.join(appRoot, "src/lib/docs/level-1-math-ii-physics");
const registryPath = path.join(courseRoot, "content.ts");

const sectionArgs = process.argv.slice(2);
const requiredHeadings = [
  "## Principle",
  "## Notation",
  "## Worked Cases",
  "## Examples",
  "## Mistake Filter",
  "## Fast Summary",
];

const forbiddenHeadingPatterns = [/^## Method$/mu, /^## Rules$/mu, /^## Checks$/mu];
const forbiddenReferencePattern = /\b(?:As we saw earlier|the previous page|previous page|Recall that|Earlier topics covered)\b/iu;

function fail(message) {
  throw new Error(message);
}

function listSectionIds() {
  return fs
    .readdirSync(courseRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function listContentFiles(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...listContentFiles(entryPath));
      continue;
    }

    if (entry.name === "content.ts") {
      files.push(path.relative(courseRoot, entryPath).replaceAll(path.sep, "/"));
    }
  }

  return files.sort();
}

function countOccurrences(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

function validateJavaScriptStringProps(source, relativePath) {
  const propPattern = /\b(symbol|meaning|unit|question|answer):\s*"([^"]*)"/gu;
  let match;

  while ((match = propPattern.exec(source))) {
    const [, propName, propValue] = match;

    if (/(^|[^\\])\\(?!\\)/u.test(propValue)) {
      fail(`${relativePath} has a single-escaped backslash in ${propName}`);
    }

    if (/[<>]/u.test(propValue)) {
      fail(`${relativePath} has a raw angle bracket in ${propName}`);
    }
  }
}

function validateRawMarkdownMathDelimiters(source, relativePath) {
  const lines = source.split("\n");
  let inComponentBlock = false;

  for (const [index, line] of lines.entries()) {
    const trimmedLine = line.trimStart();
    const startsComponentBlock = /^(?:<Notation|<PhysicsExamples|<PhysicsDerivation)\b/u.test(trimmedLine);
    const isEquationLine = /^<Equation\b/u.test(trimmedLine) && trimmedLine.includes("/>");

    if (inComponentBlock || startsComponentBlock) {
      inComponentBlock = !line.includes("/>");
      continue;
    }

    if (isEquationLine) {
      continue;
    }

    if (/(^|[^\\])\\[()[\]]/u.test(line)) {
      fail(`${relativePath} has single raw Markdown math delimiters on line ${index + 1}`);
    }
  }
}

function validateContentFile(relativePath, registryImportsByPath, mappedImportNames) {
  const absolutePath = path.join(courseRoot, relativePath);
  const source = fs.readFileSync(absolutePath, "utf8");

  if (!source.startsWith("export const content = String.raw`")) {
    fail(`${relativePath} must export String.raw content`);
  }

  for (const heading of requiredHeadings) {
    if (!source.includes(heading)) {
      fail(`${relativePath} missing ${heading}`);
    }
  }

  if (!/^## The Core [^\n]+$/mu.test(source)) {
    fail(`${relativePath} missing a core heading such as ## The Core Test or ## The Core Method`);
  }

  for (const pattern of forbiddenHeadingPatterns) {
    if (pattern.test(source)) {
      fail(`${relativePath} contains an old top-level heading`);
    }
  }

  if (!source.includes("<Notation")) {
    fail(`${relativePath} missing <Notation>`);
  }

  if (!source.includes("<Equation")) {
    fail(`${relativePath} missing <Equation>`);
  }

  if (countOccurrences(source, /<PhysicsExamples\b/gu) < 2) {
    fail(`${relativePath} needs <PhysicsExamples> in both worked cases and examples`);
  }

  if (source.includes("$")) {
    fail(`${relativePath} contains dollar math delimiters`);
  }

  if (/<Equation[\s\S]*?tex="[^"]*\\\\/u.test(source)) {
    fail(`${relativePath} double-escapes an Equation tex attribute`);
  }

  if (forbiddenReferencePattern.test(source)) {
    fail(`${relativePath} is not self-contained`);
  }

  validateJavaScriptStringProps(source, relativePath);
  validateRawMarkdownMathDelimiters(source, relativePath);

  const importPath = relativePath.replace(/\/content\.ts$/u, "/content");
  const importName = registryImportsByPath.get(importPath);

  if (!importName) {
    fail(`content registry missing import for ${relativePath}`);
  }

  if (!mappedImportNames.has(importName)) {
    fail(`content registry missing map entry for ${relativePath}`);
  }
}

if (!fs.existsSync(courseRoot)) {
  fail(`Missing course root ${courseRoot}`);
}

if (!fs.existsSync(registryPath)) {
  fail(`Missing registry ${registryPath}`);
}

const allSectionIds = listSectionIds();
const selectedSectionIds = sectionArgs.length === 0 ? allSectionIds : sectionArgs;

for (const sectionId of selectedSectionIds) {
  if (!allSectionIds.includes(sectionId)) {
    fail(`Unknown Math II section: ${sectionId}`);
  }
}

const registry = fs.readFileSync(registryPath, "utf8");
const registryImportsByPath = new Map(
  [...registry.matchAll(/^import \{ content as (\w+) \} from "\.\/([^"]+\/content)";$/gmu)].map(
    ([, importName, importPath]) => [importPath, importName],
  ),
);
const mappedImportNames = new Set(
  [...registry.matchAll(/^\s*\["[^"]+",\s*(\w+)\],$/gmu)].map(([, importName]) => importName),
);

const selectedFiles = selectedSectionIds.flatMap((sectionId) =>
  listContentFiles(path.join(courseRoot, sectionId)),
);

if (selectedFiles.length === 0) {
  fail(`No Math II content files found for ${selectedSectionIds.join(", ")}`);
}

for (const relativePath of selectedFiles) {
  validateContentFile(relativePath, registryImportsByPath, mappedImportNames);
}

console.log(`Level 1 Math II content valid for ${selectedSectionIds.join(", ")}.`);
