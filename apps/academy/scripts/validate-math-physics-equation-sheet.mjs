import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const additionsJsonPath = path.join(
  root,
  "src/lib/docs/level-1-math-physics/equation-sheet-additions.json",
);
const sharedSheetTsPath = path.join(
  root,
  "src/lib/docs/level-1-math-physics/equation-sheet.ts",
);
const pagesPath = path.join(root, "src/lib/docs/pages.ts");
const renderDocPagePath = path.join(root, "src/lib/render-doc-page.tsx");
const renderPrintPagePath = path.join(
  root,
  "src/lib/render-equation-sheet-print-page.tsx",
);
const appPagePath = path.join(root, "src/app/[...slug]/page.tsx");
const flashcardsPath = path.join(root, "src/lib/flashcards/index.ts");

const expectedMathIISectionIds = [
  "probability",
  "vectors",
  "kinematics",
  "ordinary-differential-equations",
  "fourier-analysis",
  "multivariable-calculus",
  "partial-differential-equations",
  "vector-calculus",
  "multiple-integrals",
  "complex-analysis",
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

function parseMathIISectionTopics(pages) {
  const source = extractSourceBetween(
    pages,
    "const level1MathIIPhysicsSections: CourseSection[] = [",
    "const level1PhysicsSections: Level1PhysicsSection[] = [",
    "Math II sections",
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
const appPage = readFile(appPagePath);
const flashcards = readFile(flashcardsPath);
const sharedSheetTs = readFile(sharedSheetTsPath);
const additionsSource = readFile(additionsJsonPath);

let additions;

try {
  additions = JSON.parse(additionsSource);
} catch (error) {
  fail(`Invalid equation-sheet-additions.json: ${error.message}`);
}

if (!Array.isArray(additions.sections)) {
  fail("Math Physics equation-sheet additions must expose a sections array");
}

const sectionIds = additions.sections.map((section) => section.sectionId);

if (sectionIds.join("\n") !== expectedMathIISectionIds.join("\n")) {
  fail(
    `Math Physics Math II sections mismatch.\nExpected:\n${expectedMathIISectionIds.join("\n")}\nActual:\n${sectionIds.join("\n")}`,
  );
}

const mathIISections = parseMathIISectionTopics(pages);
let equationCount = 0;
const globalLabels = new Set();

for (const section of additions.sections) {
  const knownSection = mathIISections.get(section.sectionId);

  if (!knownSection) {
    fail(`Unknown Math II section ${section.sectionId}`);
  }

  if (section.sectionTitle !== knownSection.sectionTitle) {
    fail(
      `${section.sectionId} title mismatch: expected ${knownSection.sectionTitle}, got ${section.sectionTitle}`,
    );
  }

  if (!Array.isArray(section.equations) || section.equations.length < 4) {
    fail(`${section.sectionId} must contain at least four equations`);
  }

  const topicKeys = new Set(
    knownSection.topics.map((topic) => `${topic.topicId}:${topic.topicTitle}`),
  );
  const sectionLabels = new Set();

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

    if (sectionLabels.has(equation.label)) {
      fail(`${section.sectionId} has duplicate label ${equation.label}`);
    }

    sectionLabels.add(equation.label);

    const globalLabelKey = equation.label;

    if (globalLabels.has(globalLabelKey)) {
      fail(`Duplicate global equation label ${globalLabelKey}`);
    }

    globalLabels.add(globalLabelKey);

    if (equation.tex.includes("$")) {
      fail(`${section.sectionId} ${equation.label} contains dollar math delimiters`);
    }

    if (/\\[()[\]]/u.test(equation.tex)) {
      fail(`${section.sectionId} ${equation.label} contains embedded math delimiters`);
    }

    if (/[<>]/u.test(equation.tex)) {
      fail(`${section.sectionId} ${equation.label} contains raw angle brackets`);
    }
  }
}

if (equationCount < 55) {
  fail(`Math II additions are too sparse (${equationCount} equations)`);
}

for (const expected of [
  "level1MathPhysicsEquationSheet",
  "level1MathPhysicsEquationSheetHref",
  "level1MathPhysicsEquationSheetPrintHref",
  "level1MathPhysicsEquationSheetFilename",
  'courseId: "level-1-math-physics"',
  'title: "Level 1 - Math I and Math II (Physics) Equation Sheet"',
  "...level1MathIPhysicsEquationSheet.sections",
  "...mathIIEquationSheetAdditions.sections",
]) {
  if (!sharedSheetTs.includes(expected)) {
    fail(`Shared equation-sheet module missing ${expected}`);
  }
}

for (const [source, expected] of [
  [pages, "function getLevel1MathPhysicsEquationSheetSlug()"],
  [pages, 'return ["level-1-math-physics", "equation-sheet"]'],
  [pages, "const level1MathPhysicsEquationSheetPage = createEditorialPage"],
  [pages, "level1MathPhysicsEquationSheetPage"],
  [pages, "getLevel1MathPhysicsEquationSheetSlug()"],
  [pages, 'root === "level-1-math-physics"'],
  [pages, 'return "level-1-math-i-physics"'],
  [pages, 'page.slug[0] === "level-1-math-physics"'],
  [renderDocPage, "level1MathPhysicsEquationSheet"],
  [renderDocPage, "level1MathPhysicsEquationSheetPrintHref"],
  [renderDocPage, '"level-1-math-i-physics"'],
  [renderDocPage, '"level-1-math-ii-physics"'],
  [renderDocPage, '"level-1-math-physics"'],
  [renderDocPage, "getEquationSheetCourseConfig(page.slug[0])"],
  [renderPrintPage, "level1MathPhysicsEquationSheet"],
  [renderPrintPage, "level1MathPhysicsEquationSheetFilename"],
  [renderPrintPage, "level1MathPhysicsEquationSheetHref"],
  [renderPrintPage, '"level-1-math-physics"'],
]) {
  if (!source.includes(expected)) {
    fail(`Shared equation-sheet routing missing ${expected}`);
  }
}

for (const [source, expected] of [
  [appPage, "function getMathPhysicsEquationSheetRedirect(slug: string[])"],
  [appPage, 'return "/level-1-math-physics/equation-sheet"'],
  [appPage, 'return "/level-1-math-physics/equation-sheet/print"'],
  [appPage, "redirect(mathPhysicsEquationSheetRedirect)"],
  [flashcards, "level1MathPhysicsEquationSheet"],
  [flashcards, '["level-1-math-i-physics", level1MathPhysicsEquationSheet]'],
  [flashcards, '["level-1-math-ii-physics", level1MathPhysicsEquationSheet]'],
  [flashcards, "sheet.sections.flatMap"],
  [flashcards, "courseId,"],
]) {
  if (!source.includes(expected)) {
    fail(`Shared equation-sheet redirects or flashcards missing ${expected}`);
  }
}

console.log("Level 1 Math Physics equation-sheet data is valid.");
