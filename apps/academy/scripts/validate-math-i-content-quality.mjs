import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(scriptDir, "..");
const workspaceRoot = path.resolve(appRoot, "../../..");
const courseRoot = path.join(appRoot, "src/lib/docs/level-1-math-i-physics");

function fail(message) {
  throw new Error(message);
}

function readFile(relativePath) {
  const absolutePath = path.join(courseRoot, relativePath);

  if (!fs.existsSync(absolutePath)) {
    fail(`Missing ${relativePath}`);
  }

  return fs.readFileSync(absolutePath, "utf8");
}

function readWorkspaceFile(relativePath) {
  const absolutePath = path.join(workspaceRoot, relativePath);

  if (!fs.existsSync(absolutePath)) {
    fail(`Missing ${relativePath}`);
  }

  return fs.readFileSync(absolutePath, "utf8");
}

function assertIncludes(source, needle, context) {
  if (!source.includes(needle)) {
    fail(`${context} must include ${needle}`);
  }
}

function assertNotIncludes(source, needle, context) {
  if (source.includes(needle)) {
    fail(`${context} must not include ${needle}`);
  }
}

const contentChecks = [
  {
    path: "course-page.ts",
    absent: ["have not been added yet"],
    present: ["Topic pages combine compact explanations"],
  },
  {
    path: "real-numbers/binomial-theorem/content.ts",
    absent: ["\"</ />"],
    present: ["Series for (1+x)^{1/2}"],
  },
  {
    path: "functions/inverse-functions/content.ts",
    absent: ["\\(f^{-1} reverses the mapping of a function \\)f"],
    present: ["An **inverse function** \\(f^{-1}\\) reverses"],
  },
  {
    path: "functions/functions/content.ts",
    absent: ["codomain/range"],
    present: ["The **range** is the set of values actually produced"],
  },
  {
    path: "limits/sine-limit/content.ts",
    present: ["For negative \\(x\\), the ratio \\(\\sin x/x\\) is even"],
  },
  {
    path: "limits/limit-laws/content.ts",
    absent: ["L > 0 \\text{ when } n \\text{ is even}"],
    present: ["L \\ge 0 \\text{ when } n \\text{ is even}"],
  },
  {
    path: "differentiation/lhopitals-rule/content.ts",
    absent: ["\\lim_{x \\to 0} \\frac{\\sin(x)}{x}"],
    present: ["\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x}"],
  },
  {
    path: "differentiation/inverse-derivatives/content.ts",
    present: ["principal range"],
  },
  {
    path: "integration/cover-up-rule/content.ts",
    absent: ["Numerators that are constants"],
    present: ["distinct linear factors"],
  },
  {
    path: "integration/rational-integrals/content.ts",
    absent: ["Solving: \\(A = 2\\), \\(B = -4\\)"],
    present: ["Solving: \\(A = 0\\), \\(B = -2\\)"],
  },
  {
    path: "integration/standard-integrals/content.ts",
    absent: ["\\operatorname{arcsec}|x|"],
    present: ["\\operatorname{arcsec} x + C"],
  },
  {
    path: "complex-form/polar-form/content.ts",
    absent: ["\\arctan\\left(\\frac{b}{a}\\right)"],
    present: ["\\operatorname{atan2}(b,a)"],
  },
  {
    path: "trigonometry/angle-addition-formulae/content.ts",
    absent: ["\\pm\\sqrt{\\frac{1 - \\cos A}{1 + \\cos A}} = \\frac{\\sin A}{1 + \\cos A}"],
    present: ["where the square-root sign is chosen from the quadrant of \\(A/2\\)"],
  },
  {
    path: "trigonometry/inverse-trig-functions/content.ts",
    absent: ["\\arctan\\left(\\frac{y}{x}\\right)"],
    present: ["\\operatorname{atan2}(y,x)"],
  },
  {
    path: "complex-arithmetic/complex-addition/content.ts",
    absent: ["tip of combined"],
    present: ["\\overrightarrow{0z_1}+\\overrightarrow{0z_2}=\\overrightarrow{0(z_1+z_2)}"],
  },
  {
    path: "complex-form/de-moivre-theorem/content.ts",
    present: ["where \\(\\text{cis}\\theta\\) means \\(\\cos\\theta+i\\sin\\theta\\)"],
  },
  {
    path: "complex-form/complex-exponential/content.ts",
    absent: ["For any complex base \\(a\\)"],
    present: ["For any non-zero complex base \\(a\\)"],
  },
  {
    path: "complex-form/euler-formula/content.ts",
    present: ["= \\left(1-\\frac{\\theta^2}{2!}+\\frac{\\theta^4}{4!}-\\cdots\\right)+i\\left(\\theta-\\frac{\\theta^3}{3!}+\\frac{\\theta^5}{5!}-\\cdots\\right)"],
  },
  {
    path: "trigonometry/pythagoras-theorem/content.ts",
    absent: [
      "### The Fundamental Identity",
      "### Variations",
      "### Applications",
      "Substituting \\(x=\\cos\\theta\\), \\(y=\\sin\\theta\\)",
      "\\\\sin^2 x+\\\\cos^2 x+\\\\tan^2 x",
    ],
    present: [
      "## Principle",
      "## Notation",
      "## The Core Method",
      "## Worked Cases",
      "## Examples",
      "## Mistake Filter",
      "## Fast Summary",
      "<Notation",
      "<PhysicsExamples",
      "\\\\sec\\\\theta\", meaning: \"1/\\\\cos\\\\theta where",
      "a^2+b^2=c^2",
      "\\\\sin^2\\\\theta+\\\\cos^2\\\\theta+\\\\tan^2\\\\theta",
    ],
  },
  {
    path: "complex-form/complex-trig-formulae/content.ts",
    present: ["<Notation", "hyperbolic cosine"],
  },
  {
    path: "vector-spaces/rank/content.ts",
    absent: ["Example row relation"],
    present: ["Example row reduction"],
  },
  {
    path: "linear-maps/linear-maps/content.ts",
    present: ["Let \\\\(\\\\mathbf u=(u_1,u_2)\\\\)"],
  },
  {
    path: "series/positive-series/content.ts",
    present: ["\\frac{1}{n^2}\\le \\frac{1}{n(n-1)}"],
  },
  {
    path: "series/absolute-convergence/content.ts",
    present: ["p-series rule"],
  },
  {
    path: "power-series/interval-of-convergence/content.ts",
    absent: ["do not approach zero in partial sums"],
    present: ["partial sums oscillate"],
  },
];

for (const check of contentChecks) {
  const source = readFile(check.path);

  for (const needle of check.absent ?? []) {
    assertNotIncludes(source, needle, check.path);
  }

  for (const needle of check.present ?? []) {
    assertIncludes(source, needle, check.path);
  }
}

const mathsContentRules = readWorkspaceFile(".agents/courses/maths/content.md");
const mathIContentRegistry = readFile("content.ts");

assertIncludes(
  mathIContentRegistry,
  '["Pythagoras Theorem", pythagorasTheoremContent]',
  "level-1-math-i-physics/content.ts",
);

for (const rule of [
  "Validate MDX tags before finishing",
  "Use quadrant-aware inverse tangent notation",
  "Do not use \\(\\operatorname{arcsec}|x|\\)",
  "Show the algebraic grouping step in derivations",
]) {
  assertIncludes(mathsContentRules, rule, ".agents/courses/maths/content.md");
}

const coursePageRules = readWorkspaceFile(".agents/courses/shared/course-description-page.md");

assertIncludes(
  coursePageRules,
  "Do not leave placeholder wording",
  ".agents/courses/shared/course-description-page.md",
);

console.log("Level 1 Math I content quality checks passed.");
