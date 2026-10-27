import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";

import { prepareMdxBody } from "../../../packages/docs/src/next/prepare-mdx-body.ts";
import { level2PhysicsBModules } from "../src/lib/docs/level-2-physics-b/structure.ts";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const academyRoot = path.resolve(scriptDirectory, "..");
const courseRoot = path.join(
  academyRoot,
  "src/lib/docs/level-2-physics-b",
);
const registryPath = path.join(courseRoot, "content.ts");
const selectedSectionIds = process.argv.slice(2);

const expectedHeadings = [
  "Principle",
  "Notation",
  "The Core Method",
];
const forbiddenHeadings = new Set([
  "Checks",
  "Examples",
  "Fast Summary",
  "Mistake Filter",
  "Worked Cases",
]);

function listContentFiles(directory) {
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return listContentFiles(entryPath);
      return entry.name === "content.ts" ? [entryPath] : [];
    })
    .sort();
}

function countMatches(value, pattern) {
  return [...value.matchAll(pattern)].length;
}

function hasDoubledTexCommand(value) {
  for (let index = 0; index < value.length; index += 1) {
    if (value[index] !== "\\") continue;

    let slashCount = 1;
    while (value[index + slashCount] === "\\") slashCount += 1;

    const commandMatch = value.slice(index + slashCount).match(/^[A-Za-z]+/u);
    if (slashCount === 2 && commandMatch && commandMatch[0].length > 1) {
      return true;
    }

    index += slashCount - 1;
  }
  return false;
}

function validateJavaScriptStringProps(source, relativePath, errors) {
  const propPattern = /\b(symbol|meaning|unit|question|answer):\s*("(?:\\.|[^"\\])*")/gu;
  let match;

  while ((match = propPattern.exec(source))) {
    const [, propName, literal] = match;
    let decoded;

    try {
      decoded = JSON.parse(literal);
    } catch (error) {
      errors.push(`${relativePath}: cannot decode ${propName} string (${error.message})`);
      continue;
    }

    if (hasDoubledTexCommand(decoded)) {
      errors.push(`${relativePath}: ${propName} sends a doubled TeX command to the renderer`);
    }

    if (/[<>]/u.test(decoded)) {
      errors.push(`${relativePath}: ${propName} contains a raw angle bracket`);
    }
  }
}

function validatePreparedMath(prepared, relativePath, errors) {
  const expressionPattern = /\{("(?:\\.|[^"\\])*")\}/gu;
  let match;

  while ((match = expressionPattern.exec(prepared))) {
    let decoded;

    try {
      decoded = JSON.parse(match[1]);
    } catch {
      continue;
    }

    if (
      (decoded.startsWith("\\(") || decoded.startsWith("\\[")) &&
      hasDoubledTexCommand(decoded)
    ) {
      errors.push(`${relativePath}: prepared raw math contains a doubled TeX command`);
    }
  }
}

function validateEquationReferences(body, relativePath, errors) {
  const tags = [...body.matchAll(/\\tag\*?\{\[(\d+)\]\}/gu)].map(
    ([, value]) => Number(value),
  );

  if (tags.length > 0) {
    const expectedTags = Array.from(
      { length: Math.max(...tags) },
      (_, index) => index + 1,
    );
    if (tags.join(",") !== expectedTags.join(",")) {
      errors.push(
        `${relativePath}: equation tags are not sequential (${tags.join(", ")})`,
      );
    }
  }

  const tagSet = new Set(tags);
  const references = [
    ...body.matchAll(/\b(?:equation|equations)\s+\[(\d+)\]/giu),
  ].map(([, value]) => Number(value));
  const missingReferences = [...new Set(references.filter((value) => !tagSet.has(value)))];

  if (missingReferences.length > 0) {
    errors.push(
      `${relativePath}: missing equation tags for references ${missingReferences.join(", ")}`,
    );
  }
}

async function validateContentFile(filePath, errors) {
  const relativePath = path.relative(courseRoot, filePath).replaceAll(path.sep, "/");
  const source = fs.readFileSync(filePath, "utf8");
  let body;

  try {
    ({ content: body } = await import(`${pathToFileURL(filePath).href}?validate=${Date.now()}`));
  } catch (error) {
    errors.push(`${relativePath}: cannot import content (${error.message})`);
    return;
  }

  if (!source.startsWith("export const content = String.raw`")) {
    errors.push(`${relativePath}: must export String.raw content`);
  }

  const headings = [...body.matchAll(/^##\s+(.+)$/gmu)].map(([, heading]) => heading.trim());
  if (headings.join("|") !== expectedHeadings.join("|")) {
    errors.push(
      `${relativePath}: headings must be ${expectedHeadings.join(" → ")} (found ${headings.join(" → ") || "none"})`,
    );
  }

  for (const heading of headings) {
    if (forbiddenHeadings.has(heading)) {
      errors.push(`${relativePath}: contains forbidden heading ## ${heading}`);
    }
  }

  if (countMatches(body, /<Notation\b/gu) !== 1) {
    errors.push(`${relativePath}: must contain exactly one <Notation>`);
  }

  const exampleComponentCount = countMatches(body, /<PhysicsExamples\b/gu);
  if (exampleComponentCount !== 1) {
    errors.push(
      `${relativePath}: must contain exactly one <PhysicsExamples> (found ${exampleComponentCount})`,
    );
  }

  if (!/<PhysicsExamples\s+collapsible\b/u.test(body)) {
    errors.push(`${relativePath}: <PhysicsExamples> must be collapsible`);
  }

  const examplesStart = body.indexOf("<PhysicsExamples");
  const examplesEnd = examplesStart >= 0 ? body.indexOf("/>", examplesStart) : -1;
  if (examplesStart >= 0 && examplesEnd >= 0) {
    const examplesSource = body.slice(examplesStart, examplesEnd + 2);
    const itemCount = countMatches(examplesSource, /\{\s*title:\s*"/gu);
    if (itemCount !== 2) {
      errors.push(
        `${relativePath}: examples component must contain exactly two items (found ${itemCount})`,
      );
    }
  }

  if (body.includes("$")) {
    errors.push(`${relativePath}: contains dollar math delimiters`);
  }

  if (/<Equation[\s\S]*?tex="[^"]*\\\\/u.test(body)) {
    errors.push(`${relativePath}: double-escapes an Equation tex attribute`);
  }

  validateJavaScriptStringProps(source, relativePath, errors);
  validateEquationReferences(body, relativePath, errors);

  const prepared = prepareMdxBody(body);
  validatePreparedMath(prepared, relativePath, errors);

  try {
    await compile(prepared, { remarkPlugins: [remarkGfm] });
  } catch (error) {
    errors.push(`${relativePath}: prepared MDX does not compile (${error.message})`);
  }
}

const sectionIds = level2PhysicsBModules.flatMap((module) =>
  module.sections.map((section) => section.id),
);

for (const sectionId of selectedSectionIds) {
  if (!sectionIds.includes(sectionId)) {
    throw new Error(`Unknown Level 2 Physics B section: ${sectionId}`);
  }
}

const targetSectionIds =
  selectedSectionIds.length > 0 ? selectedSectionIds : sectionIds;
const targetFiles = targetSectionIds.flatMap((sectionId) =>
  listContentFiles(path.join(courseRoot, sectionId)),
);
const expectedTopicCount = level2PhysicsBModules
  .flatMap((module) => module.sections)
  .filter((section) => targetSectionIds.includes(section.id))
  .reduce((total, section) => total + section.topics.length, 0);

if (targetFiles.length !== expectedTopicCount) {
  throw new Error(
    `Expected ${expectedTopicCount} content files for ${targetSectionIds.join(", ")}, found ${targetFiles.length}`,
  );
}

if (!fs.existsSync(registryPath)) {
  throw new Error(`Missing Physics B registry: ${registryPath}`);
}

const registry = fs.readFileSync(registryPath, "utf8");
const registryImports = new Set(
  [...registry.matchAll(/from "\.\/([^"\n]+\/content)";/gu)].map(
    ([, importPath]) => `${importPath}.ts`,
  ),
);
const missingRegistryImports = targetFiles
  .map((filePath) => path.relative(courseRoot, filePath).replaceAll(path.sep, "/"))
  .filter((relativePath) => !registryImports.has(relativePath));

if (missingRegistryImports.length > 0) {
  throw new Error(
    `Physics B registry is missing: ${missingRegistryImports.join(", ")}`,
  );
}

const errors = [];
for (const filePath of targetFiles) {
  await validateContentFile(filePath, errors);
}

if (errors.length > 0) {
  console.error(
    `Level 2 Physics B validation failed with ${errors.length} issue${errors.length === 1 ? "" : "s"}:`,
  );
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(
    `Level 2 Physics B content valid: ${targetFiles.length}/${expectedTopicCount} pages across ${targetSectionIds.length} section${targetSectionIds.length === 1 ? "" : "s"}.`,
  );
}
