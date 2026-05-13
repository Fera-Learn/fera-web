import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const courseId = "level-1-math-i-physics";
const courseRoot = path.join(
  root,
  "src/lib/docs/level-1-math-i-physics/exams",
);

const expectedPapers = [
  { setId: "set-1", file: "set-1/paper-1.json", importName: "set1Paper1" },
  { setId: "set-2", file: "set-2/paper-1.json", importName: "set2Paper1" },
  { setId: "set-3", file: "set-3/paper-1.json", importName: "set3Paper1" },
  { setId: "set-4", file: "set-4/paper-1.json", importName: "set4Paper1" },
];

function fail(message) {
  throw new Error(message);
}

function assertStringDoesNotContainBadLatex(value, context) {
  if (/\\n(?!e(?:q)?(?![A-Za-z])|abla(?![A-Za-z])|u(?![A-Za-z])|ot(?:in)?(?![A-Za-z]))/u.test(value)) {
    fail(`${context} contains literal \\n text; use JSON newline escapes`);
  }

  if (value.includes("$")) {
    fail(`${context} contains unsupported dollar math delimiters`);
  }

  if (/\\frac(?!\{)/u.test(value)) {
    fail(`${context} contains ungrouped \\frac shorthand`);
  }

  if (/\\(?:hat|overrightarrow|mathbf|mathrm|mathbb|text)\\\{/u.test(value)) {
    fail(`${context} contains an escaped command argument brace`);
  }

  if (/[_^]\\\{/u.test(value)) {
    fail(`${context} contains an escaped script grouping brace`);
  }

  if (/[A-Za-z0-9)}\]]\s*(?:\\circ|∘)\s*[A-Za-z0-9({\\]/u.test(value)) {
    fail(`${context} contains composition-operator notation`);
  }

  if (/(?:\(|\\\()[A-Za-z][A-Za-z0-9_{}\\]*\s+o\s+[A-Za-z][A-Za-z0-9_{}\\]*(?:\)|\\\))\s*(?:\(|\\\()/u.test(value)) {
    fail(`${context} contains text-o composition notation`);
  }
}

function walkStrings(value, context) {
  if (typeof value === "string") {
    assertStringDoesNotContainBadLatex(value, context);
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => walkStrings(item, `${context}[${index}]`));
    return;
  }

  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, item]) => {
      walkStrings(item, `${context}.${key}`);
    });
  }
}

function listJsonFiles(directory, base = directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return listJsonFiles(entryPath, base);
    }

    if (!entry.isFile() || !entry.name.endsWith(".json")) {
      return [];
    }

    return path.relative(base, entryPath).split(path.sep).join("/");
  });
}

function validatePaper(paper, expected) {
  if (Object.hasOwn(paper, "constants")) {
    fail(`${expected.file} must not contain a constants field`);
  }

  const requiredFields = {
    courseId,
    label: "Paper 1",
    paperId: "paper-1",
    schemaVersion: 1,
    setId: expected.setId,
    timeAllowed: "2 hours",
    totalMarks: 60,
  };

  Object.entries(requiredFields).forEach(([key, value]) => {
    if (paper[key] !== value) {
      fail(`${expected.file} expected ${key}=${value}, got ${paper[key]}`);
    }
  });

  if (!Array.isArray(paper.paperTags) || paper.paperTags.join(",") !== "paper-1") {
    fail(`${expected.file} must have paperTags ["paper-1"]`);
  }

  if (!Array.isArray(paper.instructions) || paper.instructions.length < 4) {
    fail(`${expected.file} must have physics-style instructions`);
  }

  if (!Array.isArray(paper.questions) || paper.questions.length !== 4) {
    fail(`${expected.file} must contain exactly four main questions`);
  }

  const ids = new Set();
  let totalMarks = 0;

  paper.questions.forEach((question, questionIndex) => {
    if (question.number !== questionIndex + 1) {
      fail(`${expected.file} question ${question.id} has the wrong number`);
    }

    if (question.marks !== 15) {
      fail(`${expected.file} question ${question.id} must be worth 15 marks`);
    }

    if (!question.section || !question.title) {
      fail(`${expected.file} question ${question.id} needs a section and title`);
    }

    if (
      !Array.isArray(question.parts) ||
      question.parts.length < 3 ||
      question.parts.length > 5
    ) {
      fail(`${expected.file} question ${question.id} needs three to five parts`);
    }

    const partMarks = question.parts.reduce((sum, part) => sum + part.marks, 0);

    if (partMarks !== 15) {
      fail(`${expected.file} question ${question.id} parts sum to ${partMarks}`);
    }

    totalMarks += question.marks;

    if (ids.has(question.id)) {
      fail(`${expected.file} has duplicate id ${question.id}`);
    }

    ids.add(question.id);

    question.parts.forEach((part) => {
      if (ids.has(part.id)) {
        fail(`${expected.file} has duplicate id ${part.id}`);
      }

      ids.add(part.id);

      if (!part.label || !part.prompt || !part.answer) {
        fail(`${expected.file} part ${part.id} needs label, prompt, and answer`);
      }
    });
  });

  if (totalMarks !== 60) {
    fail(`${expected.file} question marks sum to ${totalMarks}`);
  }

  walkStrings(paper, expected.file);
}

const expectedFiles = expectedPapers.map((paper) => paper.file).sort();
const actualFiles = listJsonFiles(courseRoot).sort();

if (actualFiles.join("\n") !== expectedFiles.join("\n")) {
  fail(
    `Expected Math I exam JSON files ${expectedFiles.join(", ")}, got ${actualFiles.join(", ")}`,
  );
}

for (const expected of expectedPapers) {
  const filePath = path.join(courseRoot, expected.file);

  if (!fs.existsSync(filePath)) {
    fail(`Missing ${filePath}`);
  }

  validatePaper(JSON.parse(fs.readFileSync(filePath, "utf8")), expected);
}

const integrationFiles = [
  {
    filePath: path.join(courseRoot, "index.ts"),
    requiredText: "level1MathIPhysicsExamSets",
  },
  {
    filePath: path.join(root, "src/lib/render-doc-page.tsx"),
    requiredText: courseId,
  },
  {
    filePath: path.join(root, "src/lib/render-exam-print-page.tsx"),
    requiredText: courseId,
  },
];

for (const { filePath, requiredText } of integrationFiles) {
  if (!fs.existsSync(filePath)) {
    fail(`Missing integration file ${filePath}`);
  }

  const source = fs.readFileSync(filePath, "utf8");

  if (!source.includes(requiredText)) {
    fail(`${filePath} does not reference ${requiredText}`);
  }
}

const examIndexSource = fs.readFileSync(path.join(courseRoot, "index.ts"), "utf8");

for (const expected of expectedPapers) {
  const expectedImport = `import ${expected.importName} from "./${expected.file}";`;

  if (!examIndexSource.includes(expectedImport)) {
    fail(`exam index does not import ${expected.file}`);
  }

  const setRegistrationPattern = new RegExp(
    `id:\\s*"${expected.setId}"[\\s\\S]*?papers:\\s*\\[paper\\(${expected.importName}\\)\\]`,
    "u",
  );

  if (!setRegistrationPattern.test(examIndexSource)) {
    fail(`exam index does not register ${expected.file} under ${expected.setId}`);
  }
}

console.log("Level 1 Math I exam papers are valid and integrated.");
