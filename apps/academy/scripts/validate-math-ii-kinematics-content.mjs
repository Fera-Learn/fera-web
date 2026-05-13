import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(scriptDir, "..");
const courseRoot = path.join(appRoot, "src/lib/docs/level-1-math-ii-physics");
const contentIndex = path.join(courseRoot, "content.ts");
const docsPages = path.join(appRoot, "src/lib/docs/pages.ts");

const topics = [
  {
    importName: "positionContent",
    path: "kinematics/position/content.ts",
    title: "Position",
    requiresDerivation: false,
  },
  {
    importName: "velocityContent",
    path: "kinematics/velocity/content.ts",
    title: "Velocity",
    requiresDerivation: true,
  },
  {
    importName: "accelerationContent",
    path: "kinematics/acceleration/content.ts",
    title: "Acceleration",
    requiresDerivation: true,
  },
  {
    importName: "forcesContent",
    path: "kinematics/forces/content.ts",
    title: "Forces",
    requiresDerivation: true,
  },
  {
    importName: "energyContent",
    path: "kinematics/energy/content.ts",
    title: "Energy",
    requiresDerivation: false,
  },
  {
    importName: "workDoneContent",
    path: "kinematics/work-done/content.ts",
    title: "Work Done",
    requiresDerivation: true,
  },
  {
    importName: "angularMomentumContent",
    path: "kinematics/angular-momentum/content.ts",
    title: "Angular Momentum",
    requiresDerivation: true,
  },
  {
    importName: "polarCoordinatesContent",
    path: "kinematics/polar-coordinates/content.ts",
    title: "Polar Coordinates",
    requiresDerivation: true,
  },
  {
    importName: "cylindricalPolarsContent",
    path: "kinematics/cylindrical-polars/content.ts",
    title: "Cylindrical Polars",
    requiresDerivation: true,
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

const mathIISections = extractSourceBetween(
  pages,
  "const level1MathIIPhysicsSections: CourseSection[] = [",
  "const level1PhysicsSections: Level1PhysicsSection[] = [",
  "Math II sections",
);

const mathIITopicPages = extractSourceBetween(
  pages,
  "const level1MathIIPhysicsTopicPages = level1MathIIPhysicsSections.flatMap(",
  "const level1PhysicsTopicPages = level1PhysicsSections.flatMap(",
  "Math II topic pages",
);

if (!/id:\s*"kinematics"/u.test(mathIISections)) {
  fail("Kinematics section missing from Math II sections");
}

for (const title of expectedTitles) {
  const topicPattern = new RegExp(`\\{\\s*title:\\s*"${escapeRegExp(title)}"`, "u");

  if (!topicPattern.test(mathIISections)) {
    fail(`Math II Kinematics section missing ${title} topic`);
  }
}

if (/section\.id\s*===\s*"probability"\s*\|\|\s*section\.id\s*===\s*"vectors"/u.test(mathIITopicPages)) {
  fail("Math II topic pages only attach bodies for Probability and Vectors");
}

if (!/body:\s*level1MathIIPhysicsTopicBodies\.get\(topic\.title\)/u.test(mathIITopicPages)) {
  fail("Math II topic pages do not attach registered topic bodies");
}

assertSameList(
  listContentFiles(path.join(courseRoot, "kinematics")),
  expectedRelativePaths,
  "Kinematics content files",
);

const kinematicsImports = [
  ...registry.matchAll(/^import \{ content as (\w+) \} from "\.\/(kinematics\/[^"]+\/content)";$/gmu),
].map(([, importName, importPath]) => ({
  importName,
  relativePath: `${importPath}.ts`,
}));

assertSameList(
  kinematicsImports.map(({ relativePath }) => relativePath).sort(),
  expectedRelativePaths,
  "Kinematics content imports",
);

const kinematicsMapEntries = [
  ...registry.matchAll(/^\s*\["([^"]+)",\s*(\w+)\],?$/gmu),
]
  .map(([, title, importName]) => ({ title, importName }))
  .filter(({ importName }) => expectedImportNames.has(importName));

assertSameList(
  kinematicsMapEntries.map(({ title }) => title).sort(),
  [...expectedTitles].sort(),
  "Kinematics content map entries",
);

for (const { importName, path: relativePath, title, requiresDerivation } of topics) {
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

  for (const component of ["<Notation", "<Equation", "<PhysicsExamples"]) {
    if (!source.includes(component)) {
      fail(`${relativePath} is missing ${component}`);
    }
  }

  if (requiresDerivation && !source.includes("<PhysicsDerivation")) {
    fail(`${relativePath} needs a PhysicsDerivation component`);
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

console.log("Level 1 Math II Kinematics content is valid.");
