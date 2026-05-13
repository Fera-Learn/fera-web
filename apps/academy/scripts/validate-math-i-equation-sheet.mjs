import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const mathIRoot = path.join(root, "src/lib/docs/level-1-math-i-physics");
const equationSheetJson = path.join(mathIRoot, "equation-sheet.json");
const equationSheetTs = path.join(mathIRoot, "equation-sheet.ts");
const pagesPath = path.join(root, "src/lib/docs/pages.ts");
const renderDocPagePath = path.join(root, "src/lib/render-doc-page.tsx");
const renderPrintPagePath = path.join(
  root,
  "src/lib/render-equation-sheet-print-page.tsx",
);
const componentPath = path.join(root, "src/components/academy/equation-sheet.tsx");

const expectedSectionIds = [
  "real-numbers",
  "functions",
  "trigonometry",
  "limits",
  "differentiation",
  "integration",
  "complex-arithmetic",
  "complex-form",
  "complex-equations",
  "groups",
  "series",
  "power-series",
  "matrices",
  "vector-spaces",
  "linear-maps",
];

function fail(message) {
  throw new Error(message);
}

function readFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`Missing ${filePath}`);
  }

  return fs.readFileSync(filePath, "utf8");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/gu, "and")
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/^-|-$/gu, "");
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

function parseMathISectionTopics(pages) {
  const source = extractSourceBetween(
    pages,
    "const level1MathIPhysicsSections: CourseSection[] = [",
    "const level1MathIIPhysicsSections: CourseSection[] = [",
    "Math I sections",
  );
  const sections = new Map();
  const sectionPattern = /\{\s*id:\s*"([^"]+)",[\s\S]*?title:\s*"([^"]+)"[\s\S]*?topics:\s*\[([\s\S]*?)\]\s*,?\s*\}/gu;
  let sectionMatch;

  while ((sectionMatch = sectionPattern.exec(source))) {
    const [, sectionId, sectionTitle, topicsSource] = sectionMatch;
    const topics = [...topicsSource.matchAll(/title:\s*"([^"]+)"/gu)].map(
      ([, title]) => ({ topicId: slugify(title), topicTitle: title }),
    );

    sections.set(sectionId, { sectionId, sectionTitle, topics });
  }

  return sections;
}

const pages = readFile(pagesPath);
const renderDocPage = readFile(renderDocPagePath);
const renderPrintPage = readFile(renderPrintPagePath);
const component = readFile(componentPath);
const equationSheetSource = readFile(equationSheetJson);
const equationSheetExports = readFile(equationSheetTs);

let sheet;

try {
  sheet = JSON.parse(equationSheetSource);
} catch (error) {
  fail(`Invalid equation-sheet.json: ${error.message}`);
}

if (sheet.schemaVersion !== 1) {
  fail("Math I equation sheet schemaVersion must be 1");
}

if (sheet.courseId !== "level-1-math-i-physics") {
  fail('Math I equation sheet courseId must be "level-1-math-i-physics"');
}

if (sheet.title !== "Level 1 - Math I (Physics) Equation Sheet") {
  fail("Math I equation sheet title is incorrect");
}

if (typeof sheet.selectionNote !== "string" || sheet.selectionNote.length < 40) {
  fail("Math I equation sheet needs a useful selectionNote");
}

if (!Array.isArray(sheet.sections) || sheet.sections.length === 0) {
  fail("Math I equation sheet must contain sections");
}

const sectionIds = sheet.sections.map((section) => section.sectionId);

if (sectionIds.join("\n") !== expectedSectionIds.join("\n")) {
  fail(
    `Math I equation sheet sections mismatch.\nExpected:\n${expectedSectionIds.join("\n")}\nActual:\n${sectionIds.join("\n")}`,
  );
}

const mathISections = parseMathISectionTopics(pages);
let equationCount = 0;

for (const section of sheet.sections) {
  const knownSection = mathISections.get(section.sectionId);

  if (!knownSection) {
    fail(`Unknown Math I section ${section.sectionId}`);
  }

  if (section.sectionTitle !== knownSection.sectionTitle) {
    fail(
      `${section.sectionId} title mismatch: expected ${knownSection.sectionTitle}, got ${section.sectionTitle}`,
    );
  }

  if (!Array.isArray(section.equations) || section.equations.length === 0) {
    fail(`${section.sectionId} must contain at least one equation`);
  }

  const topicKeys = new Set(
    knownSection.topics.map((topic) => `${topic.topicId}:${topic.topicTitle}`),
  );
  const labels = new Set();

  for (const equation of section.equations) {
    equationCount += 1;

    for (const field of ["topicId", "topicTitle", "label", "tex"]) {
      if (typeof equation[field] !== "string" || equation[field].trim() === "") {
        fail(`${section.sectionId} has equation missing ${field}`);
      }
    }

    if (!topicKeys.has(`${equation.topicId}:${equation.topicTitle}`)) {
      fail(
        `${section.sectionId} references unknown topic ${equation.topicId}:${equation.topicTitle}`,
      );
    }

    if (labels.has(equation.label)) {
      fail(`${section.sectionId} has duplicate label ${equation.label}`);
    }

    labels.add(equation.label);

    if (equation.tex.includes("$")) {
      fail(`${section.sectionId} ${equation.label} contains dollar math delimiters`);
    }

    if (/[<>]/u.test(equation.tex)) {
      fail(`${section.sectionId} ${equation.label} contains raw angle brackets`);
    }

    if (/\\\\/u.test(equation.tex)) {
      fail(`${section.sectionId} ${equation.label} contains a LaTeX row break`);
    }
  }
}

if (equationCount < 70) {
  fail(`Math I equation sheet is too sparse (${equationCount} equations)`);
}

for (const exportName of [
  "level1MathIPhysicsEquationSheet",
  "level1MathIPhysicsEquationSheetHref",
  "level1MathIPhysicsEquationSheetPrintHref",
  "level1MathIPhysicsEquationSheetFilename",
]) {
  if (!equationSheetExports.includes(exportName)) {
    fail(`equation-sheet.ts missing ${exportName}`);
  }
}

for (const sourceCheck of [
  [renderDocPage, "level1MathIPhysicsEquationSheet"],
  [renderDocPage, "level1MathIPhysicsEquationSheetPrintHref"],
  [renderPrintPage, "level1MathIPhysicsEquationSheet"],
  [renderPrintPage, "level1MathIPhysicsEquationSheetFilename"],
  [renderPrintPage, "level1MathIPhysicsEquationSheetHref"],
]) {
  const [source, expected] = sourceCheck;

  if (!source.includes(expected)) {
    fail(`Equation sheet rendering missing ${expected}`);
  }
}

if (!pages.includes("A curated Level 1 - Math I (Physics) formula reference")) {
  fail("Math I equation sheet page description still appears to be placeholder text");
}

if (component.includes("<p>Level 1 - Physics</p>")) {
  fail("Equation sheet print header is still hardcoded to Level 1 - Physics");
}

console.log("Level 1 Math I equation sheet is valid.");
