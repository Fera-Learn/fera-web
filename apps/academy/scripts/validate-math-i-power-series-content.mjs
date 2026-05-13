import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const courseRoot = path.join(root, "src/lib/docs/level-1-math-i-physics");
const mathIIRoot = path.join(root, "src/lib/docs/level-1-math-ii-physics");
const contentIndex = path.join(courseRoot, "content.ts");
const docsPages = path.join(root, "src/lib/docs/pages.ts");

const topics = [
  {
    importName: "powerSeriesContent",
    path: "power-series/power-series/content.ts",
    title: "Power Series",
  },
  {
    importName: "coefficientsContent",
    path: "power-series/coefficients/content.ts",
    title: "Coefficients",
  },
  {
    importName: "radiusOfConvergenceContent",
    path: "power-series/radius-of-convergence/content.ts",
    title: "Radius of Convergence",
  },
  {
    importName: "intervalOfConvergenceContent",
    path: "power-series/interval-of-convergence/content.ts",
    title: "Interval of Convergence",
  },
  {
    importName: "taylorPolynomialsContent",
    path: "power-series/taylor-polynomials/content.ts",
    title: "Taylor Polynomials",
  },
  {
    importName: "taylorSeriesContent",
    path: "power-series/taylor-series/content.ts",
    title: "Taylor Series",
  },
  {
    importName: "taylorTheoremContent",
    path: "power-series/taylor-theorem/content.ts",
    title: "Taylor Theorem",
  },
  {
    importName: "remaindersContent",
    path: "power-series/remainders/content.ts",
    title: "Remainders",
  },
  {
    importName: "taylorLimitsContent",
    path: "power-series/taylor-limits/content.ts",
    title: "Taylor Limits",
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

function listContentFiles(directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }

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

if (!/id:\s*"power-series"/u.test(mathISections)) {
  fail("Power series section missing from Math I sections");
}

if (/id:\s*"power-series"/u.test(mathIISections)) {
  fail("Power series section is registered under Math II instead of Math I");
}

for (const title of expectedTitles) {
  const topicPattern = new RegExp(`\\{\\s*title:\\s*"${escapeRegExp(title)}"`, "u");

  if (!topicPattern.test(mathISections)) {
    fail(`Math I power series section missing ${title} topic`);
  }
}

if (!/body:\s*getLevel1MathIPhysicsTopicBody\(section\.id, topic\.title\),/u.test(pages)) {
  fail("Math I topic pages must render registered topic bodies");
}

if (listContentFiles(path.join(mathIIRoot, "power-series")).length > 0) {
  fail("Power series content files are under Math II instead of Math I");
}

assertSameList(
  listContentFiles(path.join(courseRoot, "power-series")),
  expectedRelativePaths,
  "Power series content files",
);

const powerSeriesImports = [...registry.matchAll(/^import \{ content as (\w+) \} from "\.\/(power-series\/[^"]+\/content)";$/gmu)].map(
  ([, importName, importPath]) => ({ importName, relativePath: `${importPath}.ts` }),
);

assertSameList(
  powerSeriesImports.map(({ relativePath }) => relativePath).sort(),
  expectedRelativePaths,
  "Power series content imports",
);

const powerSeriesMapEntries = [
  ...registry.matchAll(/^\s*\["([^"]+)",\s*(\w+)\],?$/gmu),
]
  .map(([, title, importName]) => ({ title, importName }))
  .filter(({ importName }) => expectedImportNames.has(importName));

assertSameList(
  powerSeriesMapEntries.map(({ title }) => title).sort(),
  [...expectedTitles].sort(),
  "Power series content map entries",
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

console.log("Level 1 Math I power series content is valid.");
