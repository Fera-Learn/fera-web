import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function fail(message) {
  throw new Error(message);
}

function readRequired(relativePath) {
  const filePath = path.join(root, relativePath);

  if (!fs.existsSync(filePath)) {
    fail(`Missing ${relativePath}`);
  }

  return fs.readFileSync(filePath, "utf8");
}

function assertIncludes(source, text, label) {
  if (!source.includes(text)) {
    fail(`${label} must include ${text}`);
  }
}

const packageJson = JSON.parse(readRequired("package.json"));
const tsconfig = JSON.parse(readRequired("tsconfig.json"));
const page = readRequired("src/app/chart-demos/page.tsx");

if (packageJson.dependencies?.["@repo/diagrams"] !== "workspace:*") {
  fail("academy package.json must depend on @repo/diagrams workspace package");
}

const paths = tsconfig.compilerOptions?.paths ?? {};

if (paths["@repo/diagrams"]?.[0] !== "../../packages/diagrams/src") {
  fail("academy tsconfig must map @repo/diagrams to ../../packages/diagrams/src");
}

if (paths["@repo/diagrams/*"]?.[0] !== "../../packages/diagrams/src/*") {
  fail("academy tsconfig must map @repo/diagrams/* to ../../packages/diagrams/src/*");
}

assertIncludes(page, "@repo/diagrams/physics", "chart demos page");
assertIncludes(page, "physicsDiagrams", "chart demos page");
assertIncludes(page, "@repo/ui/tabs", "chart demos page");
assertIncludes(page, "TabsTrigger value=\"physics\"", "chart demos page");
assertIncludes(page, "TabsTrigger value=\"maths\"", "chart demos page");
assertIncludes(page, "TabsContent value=\"physics\"", "chart demos page");
assertIncludes(page, "TabsContent value=\"maths\"", "chart demos page");
assertIncludes(page, "physicsDiagrams.map", "chart demos page");
assertIncludes(page, "No maths diagrams yet", "chart demos page");

console.log("Chart demos diagrams integration is valid.");
