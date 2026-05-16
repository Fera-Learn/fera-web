import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const root = process.cwd();
const packageRoot = path.join(root, "packages/diagrams");
const physicsRoot = path.join(packageRoot, "src/physics");
const diagramsRoot = path.join(physicsRoot, "diagrams");

const expectedPhysicsDiagramFiles = [
  "absolute-temperature-kelvin-celsius-scale.tsx",
  "ac-generator-flux-emf-sine-wave-graphs.tsx",
  "ac-generator-rotating-coil-flux-linkage.tsx",
  "alpha-particle-closest-approach-nuclear-radius.tsx",
  "atomic-energy-levels-photon-emission-excitation-absorption.tsx",
  "banked-track-circular-motion-friction-force-diagram.tsx",
  "bar-magnet-field-lines-attraction-repulsion-neutral-point.tsx",
  "boyles-law-pressure-volume-isotherms.tsx",
  "capacitor-charging-discharging-exponential-graphs-equations.tsx",
  "capacitor-charging-investigation-circuit-data-logger.tsx",
  "capacitor-discharge-log-linear-graph-time-constant-half-life.tsx",
  "capacitor-energy-stored-qv-graph.tsx",
  "cathode-ray-discharge-tube-electron-beam.tsx",
  "cathode-ray-oscilloscope-ac-waveform-measurements.tsx",
  "charged-particle-magnetic-field-circular-motion-equations.tsx",
  "charles-law-volume-temperature-graph.tsx",
  "circular-motion-angular-velocity-centripetal-force.tsx",
  "conducting-rod-motional-emf-flux-density.tsx",
  "coulombs-law-attractive-repulsive-point-charges.tsx",
  "cyclotron-semicircular-electrodes-particle-spiral-path.tsx",
  "dielectric-permittivity-random-molecular-dipoles.tsx",
  "dielectric-polarization-applied-electric-field.tsx",
  "diffraction-grating-nth-order-path-difference.tsx",
  "double-slit-interference-wavefronts-fringe-spacing.tsx",
  "electric-potential-distance-repulsive-attractive-charges.tsx",
  "electron-diffraction-intensity-first-minimum-nuclear-radius.tsx",
  "electron-diffraction-tube-graphite-ring-pattern.tsx",
  "electromagnetic-wave-electric-magnetic-fields-wavelength.tsx",
  "emf-internal-resistance-terminal-pd-current-graph.tsx",
  "exponential-radioactive-decay-half-life-graph.tsx",
  "faradays-law-flux-linkage-emf-time-graphs.tsx",
  "feynman-diagrams-strong-interaction-gluon-exchange.tsx",
  "fibre-optics-total-internal-reflection-core-cladding.tsx",
  "fine-beam-tube-electron-specific-charge.tsx",
  "fizeau-speed-of-light-rotating-cog-mirror.tsx",
  "fluorescent-tube-mercury-uv-visible-emission.tsx",
  "gravitational-field-lines-neutral-point.tsx",
  "gravitational-field-strength-area-change-in-potential.tsx",
  "gravitational-field-strength-distance-inside-outside-planet.tsx",
  "gravitational-potential-distance-graph.tsx",
  "heating-curve-temperature-internal-energy-phase-changes.tsx",
  "hertz-radio-waves-spark-gap-transmitter-receiver.tsx",
  "huygens-principle-secondary-wavelets-reflection-refraction.tsx",
  "ideal-gas-pressure-derivation-molecule-container.tsx",
  "inverse-square-law-intensity-distance.tsx",
  "lenzs-law-opposing-motion-conductor-field.tsx",
  "magnetic-field-current-carrying-wire-coil-solenoid.tsx",
  "magnetic-flux-through-coil-area-angle-diagram.tsx",
  "maxwell-boltzmann-speed-distribution-temperature.tsx",
  "michelson-morley-interferometer-light-paths.tsx",
  "millikan-oil-drop-experiment-stokes-law.tsx",
  "motor-effect-catapult-field-current-carrying-conductor-force.tsx",
  "moving-conductor-loop-induced-emf-derivation.tsx",
  "moving-magnet-induces-emf-in-coil.tsx",
  "muon-decay-time-dilation-detectors.tsx",
  "newtons-corpuscular-theory-reflection-refraction.tsx",
  "nuclear-decay-energy-levels-beta-gamma-alpha.tsx",
  "nuclear-radius-nucleon-number-cube-root-relationship.tsx",
  "nuclear-stability-line-alpha-beta-emitters.tsx",
  "pair-production-gamma-ray-nucleus-electron-positron.tsx",
  "parallel-plate-capacitor-dielectric-electric-field.tsx",
  "phase-diagram-triple-point-pressure-temperature.tsx",
  "photoelectric-effect-kinetic-energy-frequency-threshold.tsx",
  "photoelectric-effect-stopping-potential-frequency-graph.tsx",
  "potential-divider-variable-resistor-ldr-circuits.tsx",
  "pressure-law-pressure-temperature-graph.tsx",
  "progressive-wave-amplitude-wavelength-electromagnetic-wave.tsx",
  "radial-electric-field-inverse-square-graph.tsx",
  "radioactive-decay-equations-half-life-derivation.tsx",
  "rc-time-constant-capacitor-charging-discharging-63-37-percent.tsx",
  "relativistic-mass-kinetic-energy-speed-graphs.tsx",
  "rutherford-scattering-alpha-deflection-nucleus.tsx",
  "rutherford-scattering-gold-foil-alpha-detector.tsx",
  "single-slit-diffraction-central-maximum-width.tsx",
  "stable-unstable-nuclei-force-distance-decay-equations.tsx",
  "standing-waves-string-harmonics-frequency-sonometer.tsx",
  "thermionic-emission-electron-gun.tsx",
  "thermistor-potentiometer-kirchhoff-laws-circuits.tsx",
  "time-dilation-light-clock-moving-train.tsx",
  "transformer-efficiency-eddy-currents-laminated-core.tsx",
  "transformer-primary-secondary-coils-iron-core.tsx",
  "uniform-electric-field-charged-particle-paths.tsx",
  "vertical-circle-forces-top-bottom-side.tsx",
  "wave-phase-difference-in-phase-antiphase-formulae.tsx",
  "weak-interaction-w-z-bosons-beta-decay-electron-capture.tsx",
];
const expectedExports = {
  ".": "./src/index.ts",
  "./maths": "./src/maths/index.ts",
  "./physics": "./src/physics/index.ts",
};
const baseAnchoredArrowheadDiagramFiles = new Set([
  "ac-generator-rotating-coil-flux-linkage.tsx",
  "alpha-particle-closest-approach-nuclear-radius.tsx",
  "atomic-energy-levels-photon-emission-excitation-absorption.tsx",
  "banked-track-circular-motion-friction-force-diagram.tsx",
  "bar-magnet-field-lines-attraction-repulsion-neutral-point.tsx",
  "boyles-law-pressure-volume-isotherms.tsx",
  "capacitor-charging-discharging-exponential-graphs-equations.tsx",
  "cathode-ray-oscilloscope-ac-waveform-measurements.tsx",
  "rutherford-scattering-gold-foil-alpha-detector.tsx",
]);
const legacyTipAnchoredArrowheadPatterns = {
  "ac-generator-rotating-coil-flux-linkage.tsx": ["points=\"404,116 390,133 383,118\""],
  "alpha-particle-closest-approach-nuclear-radius.tsx": ["points=\"170,112 188,104 188,120\"", "points=\"164,218 146,210 146,226\"", "points=\"330,118 344,110 344,126\"", "points=\"402,118 388,110 388,126\""],
  "atomic-energy-levels-photon-emission-excitation-absorption.tsx": ["points=\"0,0 -15,-8 -15,8\"", "ARROWHEAD_POINTS"],
  "banked-track-circular-motion-friction-force-diagram.tsx": ["points=\"0,0 -14,-7 -14,7\""],
  "bar-magnet-field-lines-attraction-repulsion-neutral-point.tsx": ["310,54 296,47 296,61", "334,532 348,525 348,539"],
  "boyles-law-pressure-volume-isotherms.tsx": ["points=\"64,42 57,56 71,56\"", "points=\"462,286 448,279 448,293\""],
  "capacitor-charging-discharging-exponential-graphs-equations.tsx": ["points=\"370,42 363,56 377,56\"", "points=\"664,210 650,203 650,217\"", "points=\"370,314 363,328 377,328\"", "points=\"664,482 650,475 650,489\""],
  "cathode-ray-oscilloscope-ac-waveform-measurements.tsx": ["points=\"418,138 406,132 406,144\""],
  "rutherford-scattering-gold-foil-alpha-detector.tsx": ["points=\"276,158 264,152 264,164\"", "points=\"420,78 407,79 414,90\"", "points=\"420,232 407,229 413,219\"", "points=\"226,94 226,108 237,101\""],
};
const implementedPhysicsDiagramRequirements = {
  "absolute-temperature-kelvin-celsius-scale.tsx": {
    forbidden: ["lowest possible temperature", "kinetic energy is proportional", "All equations in thermal physics", "Array.from({ length", "stroke-muted-foreground/20"],
    labels: ["K = C + 273.15", "Equivalent", "373K", "100°C", "273K", "0°C", "0K", "-273.15°C", "stroke=\"var(--foreground)\"", "fill=\"var(--foreground)\"", "x1=\"210\" x2=\"350\" y1=\"232\" y2=\"232\"", "x1=\"210\" x2=\"350\" y1=\"286\" y2=\"286\"", "x1=\"210\" x2=\"350\" y1=\"364\" y2=\"364\""],
    referenceImage: "IMG_4430.HEIC",
  },
  "ac-generator-flux-emf-sine-wave-graphs.tsx": {
    forbidden: ["Emf = rate of change of flux", "Since", "θ = 2πft", "Nφ =", "N dφ", "ignore negative", "sin wt", "cosωt", "stroke-foreground", "fill-foreground"],
    labels: ["Flux φ", "+BAN", "-BAN", "π", "2π", "3π", "induced emf", "+Vmax", "-Vmax", "Time", "stroke=\"var(--foreground)\"", "fill=\"var(--foreground)\"", "Math.cos", "Math.sin", "FLUX_WAVE_PATH", "INDUCED_EMF_WAVE_PATH"],
    referenceImage: "IMG_4456.HEIC",
  },
  "ac-generator-rotating-coil-flux-linkage.tsx": {
    forbidden: ["AC Generators", "A rotating coil changes", "maximum flux linkage", "N phi", "NBA cos", "theta", "stroke-foreground", "fill-foreground", "stroke-muted-foreground", "fill-muted-foreground", "x1=\"210\" x2=\"368\" y1=\"272\" y2=\"92\"", "x1=\"278\" x2=\"392\" y1=\"184\" y2=\"184\""],
    labels: [">N</SvgLabel>", ">S</SvgLabel>", ">coil</SvgLabel>", ">normal to coil</SvgLabel>", ">θ</SvgLabel>", "stroke=\"var(--foreground)\"", "fill=\"var(--foreground)\"", "strokeDasharray=\"18 18\"", "points=\"230,118 255,105 330,246 305,259\"", "x1=\"200\" x2=\"386.5\" y1=\"224\" y2=\"125.5\"", "d=\"M 329 182 A 50 50 0 0 0 324 160\"", "x1=\"230\" x2=\"239\" y1=\"70\" y2=\"100\"", "x1=\"404\" x2=\"388\" y1=\"70\" y2=\"112\""],
    referenceImage: "IMG_4455.HEIC",
  },
  "alpha-particle-closest-approach-nuclear-radius.tsx": {
    forbidden: ["closest approach", "Estimate", "At closest", "kinetic energy", "Ek", "Ep", "Q q", "alpha</text>", "stroke-foreground", "fill-foreground", "stroke-muted-foreground", "fill-muted-foreground"],
    labels: ["deflected through 180°", ">r</SvgLabel>", ">nucleus</SvgLabel>", "stroke=\"var(--foreground)\"", "fill=\"var(--foreground)\"", "strokeDasharray=\"8 8\"", "d=\"M 100 112 C 190 110 272 112 312 160 C 272 208 190 220 100 220\"", "x1=\"344\" x2=\"388\" y1=\"118\" y2=\"118\"", "cx=\"312\" cy=\"160\" r=\"13\"", "cx=\"430\" cy=\"160\" r=\"30\""],
    referenceImage: "IMG_4472.HEIC",
  },
  "atomic-energy-levels-photon-emission-excitation-absorption.tsx": {
    forbidden: ["A collision", "A photon must", ">Excitation</text>", ">Absorption</text>", "stroke-foreground", "fill-foreground", "stroke-muted-foreground", "fill-muted-foreground"],
    labels: ["n=1", "n=2", "n=3", "Increasing energy levels", "A photon is emitted", "with energy E=hf", "stroke=\"var(--foreground)\"", "fill=\"var(--foreground)\"", "ENERGY_LEVEL_CIRCLES", "EMITTED_PHOTON_WAVE", "ENERGY_LEVEL_ARROW", "ATOMIC_ARROWHEADS", "{ angle: 50, x: 452, y: 286 }", "M ${EMITTED_ELECTRON.x} ${EMITTED_ELECTRON.y}", "cx={EMITTED_ELECTRON.x}", "cy={EMITTED_ELECTRON.y}", "viewBox=\"0 0 760 360\"", "x={470} y={268}", "x={470} y={292}"],
    referenceImage: "IMG_4406.HEIC",
  },
  "banked-track-circular-motion-friction-force-diagram.tsx": {
    forbidden: ["At vmax", "v &lt; vmax", "R cos theta", "Banked Tracks", ">friction</text>", ">f_s</text>", "theta", "WHEEL_CONTACTS", "<circle", "M 92 248 V 112 C 158 76 302 58 430 78", "points=\"232,139 318,177 288,223 202,185\"", "points=\"288,174 382,220 354,274 260,228\"", "stroke-foreground", "fill-foreground", "stroke-muted-foreground", "fill-muted-foreground"],
    labels: ["SvgLabel", ">R</SvgLabel>", ">W</SvgLabel>", ">F</SvgLabel>", "baselineShift=\"sub\"", ">a</SvgLabel>", ">centre</SvgLabel>", ">θ</SvgLabel>", "stroke=\"var(--foreground)\"", "fill=\"var(--foreground)\"", "strokeDasharray=\"7 8\"", "TRACK_BOUNDARY", "BANKED_CAR_TRANSFORM", "BANKED_CAR_RECTANGLE", "BANKED_FORCE_ARROWS", "BANKED_ANGLE_ARCS", "CENTER_LINE", "normalTheta", "bankTheta", "M 362 336 A 68 68 0 0 1 372 302", "viewBox=\"0 0 720 420\"", "x1=\"96\" x2=\"430\" y1=\"144\" y2=\"336\""],
    referenceImage: "IMG_4419.HEIC",
  },
  "bar-magnet-field-lines-attraction-repulsion-neutral-point.tsx": {
    forbidden: ["Magnetic fields", "Field lines run", "single bar magnet", ">attraction</text>", "M 196 430 C 226 400 250 394 270 398", "M 344 430 C 314 400 290 394 270 398", "stroke-foreground", "fill-foreground", "stroke-muted-foreground", "fill-muted-foreground"],
    labels: [">N</SvgLabel>", ">S</SvgLabel>", ">neutral point</SvgLabel>", "stroke=\"var(--foreground)\"", "fill=\"var(--foreground)\"", "FIELD_ARROWHEADS", "viewBox=\"0 0 620 640\"", "M 210 518 C 242 486 268 476 292 490", "M 410 518 C 378 486 352 476 328 490"],
    referenceImage: "IMG_4444.HEIC",
  },
  "boyles-law-pressure-volume-isotherms.tsx": {
    forbidden: ["At a", "constant temperature", "createPhysicsDiagramComponent", "stroke-foreground", "fill-foreground", "stroke-muted-foreground", "fill-muted-foreground"],
    labels: [">pressure</SvgLabel>", ">volume</SvgLabel>", ">T₁</SvgLabel>", ">T₂</SvgLabel>", ">T₃</SvgLabel>", "p ∝ 1/V", "p = k/V", "stroke=\"var(--foreground)\"", "fill=\"var(--foreground)\"", "BOYLE_ISOTHERM_PATHS", "BOYLE_GRAPH_EQUATIONS", "viewBox=\"0 0 700 420\""],
    referenceImage: "IMG_4431.HEIC",
  },
  "capacitor-charging-discharging-exponential-graphs-equations.tsx": {
    forbidden: ["When a capacitor", "charging current", "createPhysicsDiagramComponent", "stroke-foreground", "fill-foreground", "stroke-muted-foreground", "fill-muted-foreground"],
    labels: [">V</SvgLabel>", ">t</SvgLabel>", ">O</SvgLabel>", "Q = Q₀(1 - e", "V = V₀(1 - e", "I = I₀e", "Q = Q₀e", "V = V₀e", "stroke=\"var(--foreground)\"", "fill=\"var(--foreground)\"", "CAPACITOR_CHARGING_PATH", "CAPACITOR_DISCHARGING_PATH", "CAPACITOR_EQUATION_LABELS", "strokeDasharray=\"10 10\"", "viewBox=\"0 0 720 560\""],
    referenceImage: "IMG_4440.HEIC",
  },
  "cathode-ray-oscilloscope-ac-waveform-measurements.tsx": {
    labels: ["Cathode Ray Oscilloscope", "X-plates", "Y-plates", "Vpp"],
    referenceImage: "IMG_4457.HEIC",
  },
  "double-slit-interference-wavefronts-fringe-spacing.tsx": {
    labels: ["Double slit interference", "w = lambda D / s", "constructive", "destructive"],
    referenceImage: "IMG_4411.HEIC",
  },
  "rutherford-scattering-gold-foil-alpha-detector.tsx": {
    labels: ["Rutherford scattering", "alpha source", "gold foil", "circular detector"],
    referenceImage: "IMG_4470.HEIC",
  },
};

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

function assertGeneratorPreservesExistingModules() {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "diagrams-generator-"));
  const tempSourceRoot = path.join(tempRoot, "resources/diagrams/physics");
  const tempDiagramsRoot = path.join(tempRoot, "packages/diagrams/src/physics/diagrams");
  const existingModulePath = path.join(tempDiagramsRoot, "sample-diagram.tsx");
  const existingModuleSource = "bespoke diagram module\n";

  try {
    fs.mkdirSync(tempSourceRoot, { recursive: true });
    fs.mkdirSync(tempDiagramsRoot, { recursive: true });
    fs.writeFileSync(path.join(tempSourceRoot, "sample-diagram.HEIC"), "");
    fs.writeFileSync(existingModulePath, existingModuleSource);

    execFileSync(process.execPath, [path.join(root, "scripts/generate-diagrams-package.mjs")], {
      cwd: tempRoot,
      stdio: "pipe",
    });

    if (fs.readFileSync(existingModulePath, "utf8") !== existingModuleSource) {
      fail("diagram generator must not overwrite existing physics diagram modules");
    }

    if (!fs.existsSync(path.join(tempRoot, "packages/diagrams/src/physics/registry.ts"))) {
      fail("diagram generator must still generate the physics registry");
    }
  } finally {
    fs.rmSync(tempRoot, { force: true, recursive: true });
  }
}

const expectedRootCheckDiagramsScript = "node scripts/validate-diagrams-package.mjs && node apps/academy/scripts/validate-chart-demos-diagrams.mjs";
const rootPackageJson = JSON.parse(readRequired("package.json"));
const packageJson = JSON.parse(readRequired("packages/diagrams/package.json"));
const diagramGuide = readRequired("../.agents/courses/diagrams/how-to-create-a-diagram.md");
const diagramRubric = readRequired("../.agents/rubrics/diagram-redraw.md");

assertGeneratorPreservesExistingModules();

if (rootPackageJson.scripts?.["check:diagrams"] !== expectedRootCheckDiagramsScript) {
  fail(`root package.json must define check:diagrams as ${expectedRootCheckDiagramsScript}`);
}

if (rootPackageJson.scripts?.["check-types"] !== "turbo run check-types && pnpm check:diagrams") {
  fail("root package.json check-types must run the diagrams validators after type checking");
}

assertIncludes(diagramGuide, "Only include labels that are part of the diagram itself.", "diagram guide");
assertIncludes(diagramGuide, "Ignore surrounding page text, notes, derivations, and equations that are not labels on the diagram.", "diagram guide");
assertIncludes(diagramGuide, "Clean up rough sketch geometry into a valid diagram while preserving the diagram's labels and relationships.", "diagram guide");
assertIncludes(diagramRubric, "Include only labels, numbers, units, and symbols that are attached to the reference diagram itself.", "diagram redraw rubric");
assertIncludes(diagramRubric, "Surrounding page notes, derivations, explanatory text, and equations are copied into the SVG.", "diagram redraw rubric");
assertIncludes(diagramRubric, "Use clean mathematical curves for graph shapes when the reference represents a standard function such as sine or cosine.", "diagram redraw rubric");

if (packageJson.name !== "@repo/diagrams") {
  fail("packages/diagrams/package.json must name package @repo/diagrams");
}

for (const [exportPath, expectedTarget] of Object.entries(expectedExports)) {
  if (packageJson.exports?.[exportPath] !== expectedTarget) {
    fail(`@repo/diagrams export ${exportPath} must point to ${expectedTarget}`);
  }
}

readRequired("packages/diagrams/tsconfig.json");
readRequired("packages/diagrams/src/index.ts");
readRequired("packages/diagrams/src/maths/index.ts");
const physicsDiagramFrame = readRequired("packages/diagrams/src/shared/physics-diagram.tsx");
const svgArrowhead = readRequired("packages/diagrams/src/shared/svg-arrowhead.tsx");
assertIncludes(svgArrowhead, "points={`${length},0 0,-${halfWidth} 0,${halfWidth}`}", "svg arrowhead helper");
const svgLabel = readRequired("packages/diagrams/src/shared/svg-label.tsx");
assertIncludes(svgLabel, "fill={backgroundFill}", "svg label helper");
assertIncludes(svgLabel, "var(--background)", "svg label helper");
assertIncludes(svgLabel, "<rect", "svg label helper");
assertIncludes(svgLabel, "<text", "svg label helper");
assertIncludes(svgLabel, "\"use client\";", "svg label helper");
assertIncludes(svgLabel, "useLayoutEffect", "svg label helper");
assertIncludes(svgLabel, "useRef", "svg label helper");
assertIncludes(svgLabel, "useState", "svg label helper");
assertIncludes(svgLabel, "getBBox()", "svg label helper");
assertIncludes(svgLabel, "setBounds", "svg label helper");
assertIncludes(svgLabel, "document.fonts?.ready", "svg label helper");
assertIncludes(svgLabel, "backgroundRx = 4", "svg label helper");
assertIncludes(svgLabel, "paddingX = 4", "svg label helper");
assertIncludes(svgLabel, "paddingY = 2", "svg label helper");
assertIncludes(physicsDiagramFrame, "./svg-label", "physics diagram shared renderer");
assertIncludes(physicsDiagramFrame, "SvgLabel", "physics diagram shared renderer");
if (physicsDiagramFrame.includes("<text")) {
  fail("physics diagram shared renderer must use SvgLabel for SVG labels");
}

const physicsIndex = readRequired("packages/diagrams/src/physics/index.ts");
const physicsRegistry = readRequired("packages/diagrams/src/physics/registry.ts");

assertIncludes(physicsIndex, "physicsDiagrams", "physics index");
assertIncludes(physicsIndex, "PhysicsDiagramSlug", "physics index");
assertIncludes(physicsRegistry, "satisfies readonly PhysicsDiagramDefinition[]", "physics registry");

const actualFiles = fs
  .readdirSync(diagramsRoot)
  .filter((fileName) => fileName.endsWith(".tsx"))
  .sort();
const expectedFiles = [...expectedPhysicsDiagramFiles].sort();

if (actualFiles.join("\n") !== expectedFiles.join("\n")) {
  fail(
    `Physics diagram files mismatch.\nExpected:\n${expectedFiles.join("\n")}\nActual:\n${actualFiles.join("\n")}`,
  );
}

for (const fileName of actualFiles) {
  const relativePath = `packages/diagrams/src/physics/diagrams/${fileName}`;
  const source = readRequired(relativePath);
  const lineCount = source.split("\n").length;
  const implementedRequirements = implementedPhysicsDiagramRequirements[fileName];
  const maxLineCount = implementedRequirements ? 220 : 120;

  if (source.includes("<text")) {
    fail(`${relativePath} must use SvgLabel for SVG labels so labels have background backing`);
  }

  if (source.includes("<tspan x") || source.includes("<tspan y")) {
    fail(`${relativePath} must not absolutely position tspan labels because that bypasses SvgLabel centering`);
  }

  if (source.includes("backgroundWidth") || source.includes("backgroundHeight")) {
    fail(`${relativePath} must let SvgLabel measure label backgrounds with getBBox()`);
  }

  if (lineCount > maxLineCount) {
    fail(`${relativePath} is too large (${lineCount} lines); keep each diagram in a focused file`);
  }

  assertIncludes(source, "metadata", relativePath);
  assertIncludes(source, "as const satisfies Omit<PhysicsDiagramDefinition", relativePath);
  assertIncludes(source, "component", relativePath);

  if (baseAnchoredArrowheadDiagramFiles.has(fileName)) {
    assertIncludes(source, "SvgArrowhead", relativePath);
    assertIncludes(source, "../../shared/svg-arrowhead", relativePath);
  }

  for (const legacyPattern of legacyTipAnchoredArrowheadPatterns[fileName] ?? []) {
    if (source.includes(legacyPattern)) {
      fail(`${relativePath} must not include legacy tip-anchored arrowhead pattern ${legacyPattern}`);
    }
  }

  if (implementedRequirements) {
    if (source.includes("createPhysicsDiagramComponent")) {
      fail(`${relativePath} must implement a bespoke faithful diagram, not use createPhysicsDiagramComponent`);
    }

    assertIncludes(source, `referenceImage: "${implementedRequirements.referenceImage}"`, relativePath);

    for (const expectedText of implementedRequirements.labels) {
      assertIncludes(source, expectedText, relativePath);
    }

    for (const forbiddenText of implementedRequirements.forbidden ?? []) {
      if (source.includes(forbiddenText)) {
        fail(`${relativePath} must not include ${forbiddenText}`);
      }
    }
  }
}

console.log("Diagrams package structure is valid.");
