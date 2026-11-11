import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDirectory, "../../..");
const diagramsRoot = path.join(
  workspaceRoot,
  "packages/diagrams/src/physics/diagrams",
);
const diagramFileName = "environmental-geophysics-workflow.tsx";
const diagramPath = path.join(diagramsRoot, diagramFileName);
const registryPath = path.join(
  workspaceRoot,
  "packages/diagrams/src/physics/registry.ts",
);
const contentPath = path.join(
  workspaceRoot,
  "apps/academy/src/lib/docs/level-2-geophysics/soil-systems-and-origins/environmental-geophysics-and-soil-interfaces/content.ts",
);
const slug = "environmental-geophysics-workflow";
const reference = "resources/geophysics/lecture1.pptx#slide=3";
const labels = [
  "Environmental challenges",
  "Define, measure, predict and find solutions",
  "Geophysical tools",
];

function countMatches(value, pattern) {
  return [...value.matchAll(pattern)].length;
}

const errors = [];

if (!fs.existsSync(diagramPath)) {
  errors.push(`${diagramFileName}: diagram file is missing`);
} else {
  const diagram = fs.readFileSync(diagramPath, "utf8");

  if (!new RegExp(`slug:\\s*"${slug}"`, "u").test(diagram)) {
    errors.push(`${diagramFileName}: metadata slug does not match ${slug}`);
  }
  if (!diagram.includes(reference)) {
    errors.push(`${diagramFileName}: exact source reference is missing`);
  }
  if (!diagram.includes("PhysicsDiagramFrame") || !diagram.includes("<svg")) {
    errors.push(`${diagramFileName}: must use the shared physics diagram frame`);
  }
  if (!diagram.includes("SvgArrowhead")) {
    errors.push(`${diagramFileName}: must use the shared arrowhead helper`);
  }
  if (countMatches(diagram, /<SvgArrowhead\b/gu) !== 2) {
    errors.push(`${diagramFileName}: must contain exactly two arrowheads`);
  }
  if (countMatches(diagram, /<line\b/gu) !== 2) {
    errors.push(`${diagramFileName}: must contain exactly two connector lines`);
  }
  if (countMatches(diagram, /<SvgLabel\b/gu) !== 3) {
    errors.push(`${diagramFileName}: must contain exactly three diagram labels`);
  }
  if (diagram.includes("<circle") || diagram.includes("<path")) {
    errors.push(`${diagramFileName}: contains unapproved decorative geometry`);
  }
  for (const label of labels) {
    if (!diagram.includes(label)) {
      errors.push(
        `${diagramFileName}: source-visible label ${JSON.stringify(label)} is missing`,
      );
    }
  }
}

const registry = fs.readFileSync(registryPath, "utf8");
const expectedImportPath =
  './diagrams/environmental-geophysics-workflow"';
if (countMatches(registry, new RegExp(expectedImportPath, "gu")) !== 1) {
  errors.push(`${diagramFileName}: registry import must occur exactly once`);
}
if (
  countMatches(registry, /environmentalGeophysicsWorkflowDiagram/gu) !== 2
) {
  errors.push(
    `${diagramFileName}: registry must import and include the diagram exactly once`,
  );
}

const content = fs.readFileSync(contentPath, "utf8");
if (
  countMatches(
    content,
    /<PhysicsDiagram slug="environmental-geophysics-workflow" \/>/gu,
  ) !== 1
) {
  errors.push(`first topic must use ${slug} exactly once`);
}

const allDiagramFiles = fs
  .readdirSync(diagramsRoot)
  .filter((name) => name.endsWith(".tsx"));
const slugOwners = new Map();

for (const fileName of allDiagramFiles) {
  const source = fs.readFileSync(path.join(diagramsRoot, fileName), "utf8");
  for (const [, diagramSlug] of source.matchAll(/slug:\s*"([^"]+)"/gu)) {
    const owners = slugOwners.get(diagramSlug) ?? [];
    owners.push(fileName);
    slugOwners.set(diagramSlug, owners);
  }
}

for (const [diagramSlug, owners] of slugOwners) {
  if (owners.length > 1) {
    errors.push(`duplicate diagram slug ${diagramSlug}: ${owners.join(", ")}`);
  }
}

if (errors.length > 0) {
  console.error(
    `Level 2 Geophysics diagram validation failed with ${errors.length} issue${errors.length === 1 ? "" : "s"}:`,
  );
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(
    "Level 2 Geophysics diagram valid: exact source, labels, arrows, registry, and lesson usage checked.",
  );
}
