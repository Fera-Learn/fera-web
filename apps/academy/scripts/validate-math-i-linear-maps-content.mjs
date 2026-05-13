import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const courseRoot = path.join(root, "src/lib/docs/level-1-math-i-physics");
const mathIIRoot = path.join(root, "src/lib/docs/level-1-math-ii-physics");
const contentIndex = path.join(courseRoot, "content.ts");
const docsPages = path.join(root, "src/lib/docs/pages.ts");

const topics = [
  {
    importName: "linearMapsContent",
    path: "linear-maps/linear-maps/content.ts",
    title: "Linear Maps",
  },
  {
    importName: "matrixRepresentationsContent",
    path: "linear-maps/matrix-representations/content.ts",
    title: "Matrix Representations",
  },
  {
    importName: "specialMatricesContent",
    path: "linear-maps/special-matrices/content.ts",
    title: "Special Matrices",
  },
  {
    importName: "eigenvaluesContent",
    path: "linear-maps/eigenvalues/content.ts",
    title: "Eigenvalues",
  },
  {
    importName: "eigenvectorsContent",
    path: "linear-maps/eigenvectors/content.ts",
    title: "Eigenvectors",
  },
  {
    importName: "eigenspacesContent",
    path: "linear-maps/eigenspaces/content.ts",
    title: "Eigenspaces",
  },
  {
    importName: "diagonalisationContent",
    path: "linear-maps/diagonalisation/content.ts",
    title: "Diagonalisation",
  },
  {
    importName: "diagonalisationApplicationsContent",
    path: "linear-maps/diagonalisation-applications/content.ts",
    title: "Diagonalisation Applications",
  },
];

const expectedRelativePaths = topics.map((topic) => topic.path).sort();
const expectedImportNames = new Set(topics.map((topic) => topic.importName));
const expectedTitles = new Set(topics.map((topic) => topic.title));

function fail(message) {
  throw new Error(message);
}

function validateJavaScriptStringProps(source, relativePath) {
  const propPattern = /\b(symbol|meaning|question|answer|tex):\s*"([^"]*)"/gu;
  let match;

  while ((match = propPattern.exec(source))) {
    const [, propName, propValue] = match;

    if (/(^|[^\\])\\(?!\\)/u.test(propValue)) {
      fail(`${relativePath} has a single-escaped backslash in ${propName}`);
    }

    if (/[<>]/u.test(propValue)) {
      fail(`${relativePath} has a raw angle bracket in ${propName}`);
    }

    if (/\\\\lt[A-Za-z]/u.test(propValue)) {
      fail(`${relativePath} has \\lt joined to a letter in ${propName}`);
    }
  }
}

function listContentFiles(directory, relativeRoot = courseRoot) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...listContentFiles(entryPath, relativeRoot));
      continue;
    }

    if (entry.name === "content.ts") {
      files.push(path.relative(relativeRoot, entryPath).replaceAll(path.sep, "/"));
    }
  }

  return files.sort();
}

function assertSameList(actual, expected, label) {
  const actualText = actual.join("\n");
  const expectedText = expected.join("\n");

  if (actualText !== expectedText) {
    fail(`${label} mismatch.\nExpected:\n${expectedText}\nActual:\n${actualText}`);
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}

function extractSourceBetween(source, startMarker, endMarker, label) {
  const start = source.indexOf(startMarker);

  if (start === -1) {
    fail(`${label} missing start marker`);
  }

  const end = source.indexOf(endMarker, start + startMarker.length);

  if (end === -1) {
    fail(`${label} missing end marker`);
  }

  return source.slice(start, end);
}

if (!fs.existsSync(contentIndex)) {
  fail(`Missing ${contentIndex}`);
}

if (!fs.existsSync(docsPages)) {
  fail(`Missing ${docsPages}`);
}

const registry = fs.readFileSync(contentIndex, "utf8");
const pages = fs.readFileSync(docsPages, "utf8");

const mathISections = extractSourceBetween(
  pages,
  "const level1MathIPhysicsSections: CourseSection[] = [",
  "const level1MathIIPhysicsSections: CourseSection[] = [",
  "Math I sections",
);
const mathIISections = extractSourceBetween(
  pages,
  "const level1MathIIPhysicsSections: CourseSection[] = [",
  "const level1PhysicsSections: Level1PhysicsSection[] = [",
  "Math II sections",
);

if (!/id:\s*"linear-maps"/u.test(mathISections)) {
  fail("Linear Maps section missing from Math I sections");
}

if (/id:\s*"linear-maps"/u.test(mathIISections)) {
  fail("Linear Maps section is registered under Math II instead of Math I");
}

for (const title of expectedTitles) {
  const topicPattern = new RegExp(`\\{\\s*title:\\s*"${escapeRegExp(title)}"`, "u");

  if (!topicPattern.test(mathISections)) {
    fail(`Math I Linear Maps section missing ${title} topic`);
  }
}

if (!/body:\s*getLevel1MathIPhysicsTopicBody\(section\.id, topic\.title\),/u.test(pages)) {
  fail("Math I topic pages must render registered topic bodies");
}

if (listContentFiles(path.join(mathIIRoot, "linear-maps"), mathIIRoot).length > 0) {
  fail("Linear Maps content files are under Math II instead of Math I");
}

assertSameList(
  listContentFiles(path.join(courseRoot, "linear-maps")),
  expectedRelativePaths,
  "Linear Maps content files",
);

const linearMapsImports = [...registry.matchAll(/^import \{ content as (\w+) \} from "\.\/(linear-maps\/[^"]+\/content)";$/gmu)].map(
  ([, importName, importPath]) => ({ importName, relativePath: `${importPath}.ts` }),
);

assertSameList(
  linearMapsImports.map(({ relativePath }) => relativePath).sort(),
  expectedRelativePaths,
  "Linear Maps content imports",
);

const linearMapsMapEntries = [
  ...registry.matchAll(/^\s*\["([^"]+)",\s*(\w+)\],?$/gmu),
]
  .map(([, title, importName]) => ({ title, importName }))
  .filter(({ importName }) => expectedImportNames.has(importName));

assertSameList(
  linearMapsMapEntries.map(({ title }) => title).sort(),
  [...expectedTitles].sort(),
  "Linear Maps content map entries",
);

for (const { importName, path: relativePath, title } of topics) {
  const filePath = path.join(courseRoot, relativePath);

  if (!fs.existsSync(filePath)) {
    fail(`Missing ${relativePath}`);
  }

  const source = fs.readFileSync(filePath, "utf8");

  for (const heading of [
    "## Principle",
    "## Notation",
    "## Method",
    "## Rules",
    "## Examples",
    "## Checks",
  ]) {
    if (!source.includes(heading)) {
      fail(`${relativePath} missing ${heading}`);
    }
  }

  if (!source.includes("export const content = String.raw`")) {
    fail(`${relativePath} must export String.raw content`);
  }

  if (source.includes("$")) {
    fail(`${relativePath} contains dollar math delimiters`);
  }

  if (/<Equation[\s\S]*?tex="[^"]*\\\\/u.test(source)) {
    fail(`${relativePath} double-escapes an Equation tex attribute`);
  }

  if (
    !source.includes("<Notation") ||
    !source.includes("<Equation") ||
    !source.includes("<PhysicsExamples")
  ) {
    fail(`${relativePath} needs notation, equation, and example components`);
  }

  if (/(?:As we saw earlier|previous page|Recall that|Earlier topics covered)/u.test(source)) {
    fail(`${relativePath} is not self-contained`);
  }

  validateJavaScriptStringProps(source, relativePath);

  const importPath = `./${relativePath.replace(/\/content\.ts$/u, "/content")}`;
  const importLine = `import { content as ${importName} } from "${importPath}";`;

  if (!registry.includes(importLine)) {
    fail(`content registry missing import for ${title}`);
  }

  const mapEntry = `["${title}", ${importName}]`;

  if (!registry.includes(mapEntry)) {
    fail(`content registry missing ${title} map entry`);
  }
}

console.log("Level 1 Math I Linear Maps content is valid.");
