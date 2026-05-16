import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceRoot = path.join(root, "resources/diagrams/physics");
const physicsRoot = path.join(root, "packages/diagrams/src/physics");
const diagramsRoot = path.join(physicsRoot, "diagrams");

const titleOverrides = new Map([
  ["ac", "AC"],
  ["emf", "EMF"],
  ["pd", "PD"],
  ["ldr", "LDR"],
  ["rc", "RC"],
  ["uv", "UV"],
  ["qv", "Q-V"],
  ["w", "W"],
  ["z", "Z"],
  ["boyles", "Boyle's"],
  ["charles", "Charles'"],
  ["coulombs", "Coulomb's"],
  ["faradays", "Faraday's"],
  ["lenzs", "Lenz's"],
  ["newtons", "Newton's"],
]);

const stopWords = new Set(["and", "area", "in", "of", "the", "to"]);
const tagFallbacks = ["model", "measurement", "relationship", "prediction", "evidence", "scale"];

function words(slug) {
  return slug.split("-");
}

function titleToken(token) {
  return titleOverrides.get(token) ?? token[0].toUpperCase() + token.slice(1);
}

function titleFor(slug) {
  return words(slug).map(titleToken).join(" ");
}

function pascalFor(slug) {
  return words(slug)
    .map((token) => (titleOverrides.has(token) ? titleOverrides.get(token).replace(/[^A-Za-z0-9]/g, "") : titleToken(token)))
    .join("");
}

function camelFor(slug) {
  const pascal = pascalFor(slug);

  return pascal[0].toLowerCase() + pascal.slice(1);
}

function includesAny(tokens, candidates) {
  return candidates.some((candidate) => tokens.includes(candidate));
}

function topicFor(slug) {
  const tokens = words(slug);

  if (includesAny(tokens, ["relativistic", "relativity", "dilation", "muon"])) {
    return "Relativity";
  }

  if (includesAny(tokens, ["alpha", "beta", "bosons", "decay", "feynman", "nuclear", "nucleon", "nucleus", "pair", "positron", "rutherford", "stability", "unstable"])) {
    return "Nuclear and particle physics";
  }

  if (includesAny(tokens, ["capacitor", "cathode", "coil", "current", "dielectric", "divider", "electric", "emf", "flux", "ldr", "magnet", "magnetic", "pd", "potentiometer", "solenoid", "thermistor", "transformer", "wire"])) {
    return "Electricity and magnetism";
  }

  if (includesAny(tokens, ["diffraction", "electromagnetic", "fibre", "grating", "hertz", "huygens", "interference", "light", "michelson", "photoelectric", "photon", "radio", "slit", "standing", "wave", "wavefronts"])) {
    return "Waves and quantum physics";
  }

  if (includesAny(tokens, ["boltzmann", "celsius", "gas", "heating", "isotherms", "kelvin", "phase", "pressure", "temperature", "thermal", "volume"])) {
    return "Thermal physics";
  }

  if (includesAny(tokens, ["banked", "circle", "circular", "force", "gravitational", "motion", "vertical"])) {
    return "Mechanics and fields";
  }

  return "Physics";
}

function kindFor(slug) {
  const tokens = words(slug);

  if (includesAny(tokens, ["graph", "graphs", "isotherms", "law", "relationship", "scale"])) {
    return "graph";
  }

  if (includesAny(tokens, ["diffraction", "electromagnetic", "grating", "huygens", "interference", "slit", "standing", "wave", "wavefronts"])) {
    return "wave";
  }

  if (includesAny(tokens, ["bosons", "decay", "feynman", "interaction", "pair", "production", "rutherford", "scattering"])) {
    return "interaction";
  }

  if (includesAny(tokens, ["electric", "field", "fields", "flux", "gravitational", "magnetic", "potential"])) {
    return "field";
  }

  return "apparatus";
}

function tagsFor(slug) {
  const tags = [];

  for (const token of words(slug)) {
    if (!stopWords.has(token) && !tags.includes(titleToken(token))) {
      tags.push(titleToken(token));
    }
  }

  for (const fallback of tagFallbacks) {
    if (tags.length >= 6) {
      break;
    }

    tags.push(titleToken(fallback));
  }

  return tags.slice(0, 6);
}

function moduleSource(diagram) {
  return `import { createPhysicsDiagramComponent, type PhysicsDiagramDefinition } from "../../shared/physics-diagram";\n\nexport const metadata = {\n  kind: ${JSON.stringify(diagram.kind)},\n  slug: ${JSON.stringify(diagram.slug)},\n  summary: ${JSON.stringify(diagram.summary)},\n  tags: ${JSON.stringify(diagram.tags)},\n  title: ${JSON.stringify(diagram.title)},\n  topic: ${JSON.stringify(diagram.topic)},\n} as const satisfies Omit<PhysicsDiagramDefinition, "component">;\n\nexport const ${diagram.componentName} = createPhysicsDiagramComponent(metadata);\n\nexport const diagram = {\n  ...metadata,\n  component: ${diagram.componentName},\n} satisfies PhysicsDiagramDefinition;\n`;
}

const diagrams = fs
  .readdirSync(sourceRoot)
  .filter((fileName) => fileName.endsWith(".HEIC"))
  .sort()
  .map((fileName) => {
    const slug = fileName.replace(/\.HEIC$/, "");
    const tags = tagsFor(slug);
    const title = titleFor(slug);

    return {
      componentName: `${pascalFor(slug)}Diagram`,
      fileName: `${slug}.tsx`,
      kind: kindFor(slug),
      slug,
      summary: `Schematic reference diagram for ${title}, highlighting ${tags.slice(0, 3).join(", ")}.`,
      tags,
      title,
      topic: topicFor(slug),
      variableName: `${camelFor(slug)}Diagram`,
    };
  });

fs.mkdirSync(diagramsRoot, { recursive: true });

let createdModuleCount = 0;
let skippedModuleCount = 0;

for (const diagram of diagrams) {
  const modulePath = path.join(diagramsRoot, diagram.fileName);

  if (fs.existsSync(modulePath)) {
    skippedModuleCount += 1;
    continue;
  }

  fs.writeFileSync(modulePath, moduleSource(diagram));
  createdModuleCount += 1;
}

fs.writeFileSync(
  path.join(physicsRoot, "registry.ts"),
  `${diagrams.map((diagram) => `import { diagram as ${diagram.variableName} } from "./diagrams/${diagram.slug}";`).join("\n")}\n\nimport type { PhysicsDiagramDefinition } from "../shared/physics-diagram";\n\nexport const physicsDiagrams = [\n${diagrams.map((diagram) => `  ${diagram.variableName},`).join("\n")}\n] as const satisfies readonly PhysicsDiagramDefinition[];\n\nexport type PhysicsDiagramSlug = (typeof physicsDiagrams)[number]["slug"];\n\nexport const physicsDiagramsBySlug = new Map(\n  physicsDiagrams.map((diagram) => [diagram.slug, diagram]),\n);\n\nexport function getPhysicsDiagram(slug: PhysicsDiagramSlug) {\n  return physicsDiagramsBySlug.get(slug);\n}\n`,
);

fs.writeFileSync(
  path.join(physicsRoot, "index.ts"),
  `export { getPhysicsDiagram, physicsDiagrams, physicsDiagramsBySlug } from "./registry";\n\nexport type { PhysicsDiagramSlug } from "./registry";\nexport type { PhysicsDiagramDefinition, PhysicsDiagramKind, PhysicsDiagramMetadata, PhysicsDiagramProps } from "../shared/physics-diagram";\n`,
);

console.log(`Generated ${createdModuleCount} physics diagram modules; skipped ${skippedModuleCount} existing modules.`);
