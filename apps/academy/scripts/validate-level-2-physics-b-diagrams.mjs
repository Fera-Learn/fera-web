import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDirectory, "../../..");
const diagramsRoot = path.join(workspaceRoot, "packages/diagrams/src/physics/diagrams");
const registryPath = path.join(workspaceRoot, "packages/diagrams/src/physics/registry.ts");
const courseRoot = path.join(workspaceRoot, "apps/academy/src/lib/docs/level-2-physics-b");

const requirements = [
  {
    contentPath: "condensed-matter-overview/states-of-matter-and-the-water-phase-diagram/content.ts",
    fileName: "water-phase-diagram.tsx",
    labels: ["Ice", "Water", "Steam", "Triple point", "Critical point", "Temperature (°C)", "Pressure (bar)"],
    reference: "slides1(1) - Tagged.pdf#page=5",
    slug: "water-phase-diagram",
  },
  {
    contentPath: "condensed-matter-overview/scope-and-methods-of-condensed-matter-physics/content.ts",
    fileName: "condensed-matter-experimental-probes.tsx",
    labels: ["Scattering", "Transport", ">A<", ">V<"],
    reference: "slides1(1) - Tagged.pdf#page=7",
    slug: "condensed-matter-experimental-probes",
  },
  {
    contentPath: "crystal-lattices-and-symmetry/crystals-periodicity-and-translational-symmetry/content.ts",
    fileName: "crystal-periodicity-translations.tsx",
    labels: [],
    reference: "slides1(1) - Tagged.pdf#page=23-26",
    slug: "crystal-periodicity-translations",
  },
  {
    contentPath: "crystal-lattices-and-symmetry/cubic-lattices/content.ts",
    fileName: "cubic-bravais-lattices.tsx",
    labels: ["Simple cubic", "Body-centred cubic", "Face-centred cubic"],
    reference: "slides1(1) - Tagged.pdf#page=27; slides2 - Tagged.pdf#page=4,8",
    slug: "cubic-bravais-lattices",
  },
  {
    contentPath: "crystal-structures-and-planes/lattice-basis-and-crystal-structure/content.ts",
    fileName: "lattice-plus-basis.tsx",
    labels: ["Lattice", "Repeating object", "Periodic structure"],
    reference: "slides2 - Tagged.pdf#page=7-8",
    slug: "lattice-plus-basis",
  },
  {
    contentPath: "crystal-structures-and-planes/hexagonal-close-packed-structure/content.ts",
    fileName: "hexagonal-close-packing.tsx",
    labels: [],
    reference: "slides2 - Tagged.pdf#page=12",
    slug: "hexagonal-close-packing",
  },
  {
    contentPath: "crystal-structures-and-planes/miller-indices-and-interplanar-spacing/content.ts",
    fileName: "miller-index-plane-construction.tsx",
    labels: ["(100)", "(110)", "(111)"],
    reference: "slides2 - Tagged.pdf#page=13-14",
    slug: "miller-index-plane-construction",
  },
  {
    contentPath: "one-wave/wave-phase/content.ts",
    fileName: "harmonic-wave-phase-offsets.tsx",
    labels: ["φ₀ = 0", "φ₀ ≠ 0", "position x"],
    reference: "overall.pdf#page=6",
    slug: "harmonic-wave-phase-offsets",
  },
  {
    contentPath: "one-wave/wavefronts-and-wavevector-geometry/content.ts",
    additionalContentPaths: ["one-wave/the-paraxial-regime-and-small-angle-approximations/content.ts"],
    fileName: "wavefronts-and-paraxial-geometry.tsx",
    labels: [">k<", ">θ<", ">z<"],
    reference: "overall.pdf#page=11-15",
    slug: "wavefronts-and-paraxial-geometry",
  },
  {
    contentPath: "one-wave/thin-lenses-as-quadratic-phase-elements/content.ts",
    fileName: "thin-lens-wavefront-transformation.tsx",
    labels: [">t₀<", ">Rₗ<", ">f<"],
    reference: "overall.pdf#page=17-20",
    slug: "thin-lens-wavefront-transformation",
  },
  {
    contentPath: "interference/interference-intensity-and-cross-terms/content.ts",
    fileName: "two-wave-interference.tsx",
    labels: ["Constructive", "Destructive", "E₁ + E₂ = 0"],
    reference: "overall.pdf#page=21",
    slug: "two-wave-interference",
  },
  {
    contentPath: "interference/interference-of-two-plane-waves/content.ts",
    fileName: "wavevector-fringe-geometry.tsx",
    labels: ["k₁", "k₂", "Δk"],
    reference: "overall.pdf#page=22-23",
    slug: "wavevector-fringe-geometry",
  },
  {
    contentPath: "interference/interference-of-two-spherical-waves/content.ts",
    fileName: "two-spherical-wave-interference.tsx",
    labels: ["r₁", "r₂", ">d<", ">P<"],
    reference: "overall.pdf#page=23-24",
    slug: "two-spherical-wave-interference",
  },
  {
    contentPath: "interference/the-michelson-morley-interferometer/content.ts",
    fileName: "michelson-interferometer.tsx",
    labels: ["Input", "M₁", "M₂", "Output", "beamsplitter"],
    reference: "overall.pdf#page=25-26",
    slug: "michelson-interferometer",
  },
  {
    contentPath: "interference/young-s-two-slit-experiment/content.ts",
    fileName: "young-two-slit-geometry.tsx",
    labels: ["r₁", "r₂", ">d<", ">P<"],
    reference: "overall.pdf#page=28-31",
    slug: "young-two-slit-geometry",
  },
  {
    contentPath: "interference/three-slit-interference/content.ts",
    additionalContentPaths: ["interference/n-slit-interference-and-diffraction-gratings/content.ts"],
    fileName: "multi-aperture-phasor-sums.tsx",
    labels: ["Three phasors", "N-phasor polygon", "resultant"],
    reference: "overall.pdf#page=31-36",
    slug: "multi-aperture-phasor-sums",
  },
  {
    contentPath: "diffraction/the-fresnel-diffraction-integral-and-aperture-functions/content.ts",
    fileName: "fresnel-aperture-propagation.tsx",
    labels: ["(x′, y′)", "(x, y)", ">r<", ">z<"],
    reference: "overall.pdf#page=38-40",
    slug: "fresnel-aperture-propagation",
  },
  {
    contentPath: "diffraction/circular-apertures-and-fresnel-zones/content.ts",
    fileName: "fresnel-zone-rings.tsx",
    labels: [">ρₘ<"],
    reference: "overall.pdf#page=41-42",
    slug: "fresnel-zone-rings",
  },
  {
    contentPath: "diffraction/finite-width-single-slit-diffraction/content.ts",
    fileName: "single-slit-fraunhofer-pattern.tsx",
    labels: [">a<", "I/I₀", "−λz/a", "λz/a"],
    reference: "overall.pdf#page=45-46",
    slug: "single-slit-fraunhofer-pattern",
  },
  {
    contentPath: "diffraction/finite-width-double-slit-diffraction/content.ts",
    fileName: "double-slit-diffraction-envelope.tsx",
    labels: [">d<", ">a<", "single-slit envelope"],
    reference: "overall.pdf#page=48-49",
    slug: "double-slit-diffraction-envelope",
  },
  {
    contentPath: "diffraction/rectangular-aperture-diffraction/content.ts",
    fileName: "rectangular-aperture-transform.tsx",
    labels: [">a<", ">b<", ">x<", ">y<"],
    reference: "overall.pdf#page=54",
    slug: "rectangular-aperture-transform",
  },
  {
    contentPath: "diffraction/gaussian-beams-angular-spread-and-rayleigh-range/content.ts",
    fileName: "gaussian-far-field-spread.tsx",
    labels: ["w₀", "Δθ", "zᵣ"],
    reference: "overall.pdf#page=55-56",
    slug: "gaussian-far-field-spread",
  },
  {
    contentPath: "diffraction/circular-aperture-diffraction-and-the-airy-pattern/content.ts",
    fileName: "airy-pattern-resolution.tsx",
    labels: ["I/I₀", ">ρ<"],
    reference: "overall.pdf#page=57-58",
    slug: "airy-pattern-resolution",
  },
  {
    contentPath: "polarisation/polarisation-and-the-vector-nature-of-light/content.ts",
    fileName: "polarisation-basis-geometry.tsx",
    labels: [">ê₁<", ">ê₂<", ">E<", ">k<", ">α<"],
    reference: "overall.pdf#page=59-60",
    slug: "polarisation-basis-geometry",
  },
  {
    contentPath: "polarisation/elliptical-polarisation-in-a-linear-basis/content.ts",
    fileName: "polarisation-state-evolution.tsx",
    labels: ["linear", "circular", "elliptical", "(i)", "(iv)"],
    reference: "overall.pdf#page=61-63",
    slug: "polarisation-state-evolution",
  },
  {
    contentPath: "polarisation/malus-law-and-multiple-polarisers/content.ts",
    fileName: "malus-multiple-polarisers.tsx",
    labels: ["E₀", "P{i+1}", ">α<", ">β<"],
    reference: "overall.pdf#page=64-67",
    slug: "malus-multiple-polarisers",
  },
  {
    contentPath: "polarisation/birefringence-and-polarisation-dependent-refractive-index/content.ts",
    fileName: "birefringent-retarder.tsx",
    labels: ["fast", "slow"],
    reference: "overall.pdf#page=66,68-71",
    slug: "birefringent-retarder",
  },
  {
    contentPath: "polarisation/natural-optical-activity-and-reciprocity/content.ts",
    fileName: "natural-optical-activity.tsx",
    labels: [],
    reference: "overall.pdf#page=72-73",
    slug: "natural-optical-activity",
  },
  {
    contentPath: "polarisation/optical-isolation/content.ts",
    fileName: "faraday-optical-isolator.tsx",
    labels: ["P₁", "Faraday rotator", "P₂", ">B<"],
    reference: "overall.pdf#page=73-74",
    slug: "faraday-optical-isolator",
  },
  {
    contentPath: "polarisation/polarisation-patterns-in-counter-propagating-waves/content.ts",
    fileName: "counter-propagating-polarisation-patterns.tsx",
    labels: ["amplitude", "ellipticity", "linear axis", ">z<"],
    reference: "overall.pdf#page=75-78",
    slug: "counter-propagating-polarisation-patterns",
  },
];

const thermodynamicsRequirements = [
  ["thermodynamic-foundations/systems-surroundings-boundaries-and-reservoirs/content.ts", "thermodynamic-system-boundaries", "Lecture1.pdf#page=2-3&figure=1", ["open", "closed", "isolated", "energy", "matter"]],
  ["thermodynamic-foundations/equilibrium-state-functions-and-thermodynamic-paths/content.ts", "thermodynamic-state-surface-paths", "Lecture1.pdf#page=3&figure=2", ["p(V,T)=0", ">A<", ">B<"]],
  ["thermodynamic-foundations/heat-heat-capacity-and-specific-heat-capacity/content.ts", "microscopic-heat-transfer", "Lecture1.pdf#page=4&figure=3", ["hot", "cold", "label=\"Q\""]],
  ["thermodynamic-foundations/the-zeroth-law-thermal-equilibrium-and-thermometry/content.ts", "zeroth-law-thermometry", "Lecture1.pdf#page=5&figure=4", ["thermal contact", ">A<", ">B<", ">C<"]],
  ["thermodynamic-mathematics/exact-and-inexact-differentials/content.ts", "path-dependent-heat-work", "Lecture2.pdf#page=5&figure=6", ["path 1", "path 2"]],
  ["first-law-and-gas-processes/pressure-volume-work-and-sign-conventions/content.ts", "pressure-volume-work-piston", "Lecture3.pdf#page=1&figure=7", ["dV > 0", "pₑₓₜ", "gas, p"]],
  ["first-law-and-gas-processes/joule-free-expansion/content.ts", "joule-free-expansion-apparatus", "Lecture3.pdf#page=3-4&figure=8", ["gas", "vacuum", "adiabatic rigid walls"]],
  ["first-law-and-gas-processes/reversible-isothermal-expansion/content.ts", "reversible-gas-process-paths", "Lecture3.pdf#page=5-6&figure=9; Lecture4.pdf#page=1&figure=10", ["isotherm", "adiabat"]],
  ["heat-engines-and-the-carnot-cycle/cyclic-heat-engines-and-energy-flows/content.ts", "heat-engine-energy-flow", "Lecture4.pdf#page=2&figure=11", ["engine", "Qₕ", "Q𝚌", "label=\"W\""]],
  ["heat-engines-and-the-carnot-cycle/refrigerators-and-heat-pumps/content.ts", "refrigerator-heat-pump-flow", "Lecture4.pdf#page=3&figure=12", ["refrigerator", "Qₕ", "Q𝚌", "label=\"W\""]],
  ["heat-engines-and-the-carnot-cycle/the-four-stages-of-the-carnot-cycle/content.ts", "carnot-pv-ts-cycle", "Lecture4.pdf#page=4-5&figure=13", [">V<", ">p<", ">S<", ">T<"]],
  ["second-law-and-entropy/clausius-and-kelvin-statements-of-the-second-law/content.ts", "second-law-machine-comparison", "Lecture5.pdf#page=1-3&figure=14-16", ["Kelvin?", "Clausius?", "impossible"]],
  ["second-law-and-entropy/entropy-changes-during-heating-and-thermal-equilibration/content.ts", "entropy-thermal-equilibration", "Lecture5.pdf#page=5", ["system", "surroundings", "total ≥ 0"]],
  ["second-law-and-entropy/temperature-entropy-diagrams/content.ts", "temperature-entropy-processes", "Lecture6.pdf#page=2&figure=17", ["isotherm", "adiabat", "isochore/isobar"]],
  ["real-engine-cycles/reciprocating-pistons-and-four-stroke-engines/content.ts", "otto-engine-cycle", "Lecture6.pdf#page=4-6&figure=18-20", ["four strokes", "Otto cycle"]],
  ["thermodynamic-potentials-and-available-work/free-energy-criteria-for-spontaneous-change/content.ts", "gibbs-free-energy-slopes", "Lecture7.pdf#page=3&figure=21", ["slope −S", "slope V"]],
  ["phase-equilibria-and-transitions/phase-boundaries-triple-points-and-critical-points/content.ts", "single-component-phase-views", "Lecture9.pdf#page=1-2&figure=22-23", ["p-T", "p-V"]],
  ["phase-equilibria-and-transitions/first-order-and-continuous-phase-transitions/content.ts", "phase-transition-derivatives", "Lecture9.pdf#page=3-4&figure=24-25", ["continuous G", "derivative jump"]],
  ["generalised-thermodynamic-systems/thermodynamics-of-elastic-rods/content.ts", "elastic-rod-generalised-work", "Lecture10.pdf#page=1&figure=26", ["−F", "label=\"F\"", "L, dL", "area A"]],
  ["generalised-thermodynamic-systems/the-magnetocaloric-effect-and-adiabatic-demagnetisation/content.ts", "adiabatic-demagnetisation-path", "Lecture10.pdf#page=3-4&figure=27", ["isothermal magnetisation", "adiabatic demagnetisation"]],
  ["real-gases-and-low-temperature-cooling/real-gas-behaviour-and-the-van-der-waals-equation/content.ts", "van-der-waals-isotherms", "Lecture10.pdf#page=4-5&figure=28", ["T &gt; T𝚌", "T = T𝚌", "T &lt; T𝚌"]],
  ["real-gases-and-low-temperature-cooling/the-joule-thomson-effect-throttling-and-inversion-temperature/content.ts", "joule-kelvin-inversion", "Lecture10.pdf#page=6-7&figure=29", ["porous plug", "inversion curve", "cooling", "heating"]],
  ["third-law-and-absolute-zero/residual-entropy-and-degenerate-ground-states/content.ts", "ice-residual-entropy", "Lecture11.pdf#page=1-2&figure=30", ["proton arrangements"]],
  ["classical-and-quantum-statistics/the-boltzmann-distribution-and-energy-level-populations/content.ts", "boltzmann-level-populations", "Lectures12-13.pdf#page=1-3&figure=31-32", ["low T", "higher T", ">E<"]],
  ["classical-and-quantum-statistics/two-level-systems-and-the-schottky-anomaly/content.ts", "two-level-thermodynamic-curves", "Lectures12-13.pdf#page=5-7", [">U<", ">S<", ">Cᵥ<", ">T<"]],
  ["classical-and-quantum-statistics/the-bose-einstein-distribution-and-condensation/content.ts", "bose-condensation-curves", "Lectures12-13.pdf#page=9&figure=33", [">U<", ">Cᵥ<", "T𝚌"]],
  ["classical-and-quantum-statistics/the-fermi-dirac-distribution-and-fermi-energy/content.ts", "quantum-statistical-distributions", "Lectures12-13.pdf#page=9-10&figure=34-35", ["Fermi-Dirac, T=0", "Bose-Einstein", "classical limit"]],
].map(([contentPath, slug, reference, labels]) => ({
  contentPath,
  fileName: `${slug}.tsx`,
  labels,
  reference,
  slug,
}));

requirements.push(...thermodynamicsRequirements);

const errors = [];
const registry = fs.readFileSync(registryPath, "utf8");
const registrySlugs = [...registry.matchAll(/slug:\s*"([^"]+)"/gu)].map(([, slug]) => slug);

if (new Set(registrySlugs).size !== registrySlugs.length) {
  errors.push("physics registry contains duplicate inline slugs");
}

for (const requirement of requirements) {
  const diagramPath = path.join(diagramsRoot, requirement.fileName);
  const contentPaths = [requirement.contentPath, ...(requirement.additionalContentPaths ?? [])];
  if (!fs.existsSync(diagramPath)) {
    errors.push(`${requirement.fileName}: diagram file is missing`);
    continue;
  }
  if (contentPaths.some((relativePath) => !fs.existsSync(path.join(courseRoot, relativePath)))) {
    errors.push(`${requirement.fileName}: one or more target pages are missing`);
    continue;
  }

  const diagram = fs.readFileSync(diagramPath, "utf8");
  const importPath = `./diagrams/${requirement.fileName.replace(/\.tsx$/u, "")}`;

  if (!new RegExp(`slug\\s*:\\s*"${requirement.slug}"`, "u").test(diagram)) {
    errors.push(`${requirement.fileName}: metadata slug does not match ${requirement.slug}`);
  }
  if (!diagram.includes(requirement.reference)) {
    errors.push(`${requirement.fileName}: exact source reference is missing`);
  }
  const usesDirectFrame = diagram.includes("PhysicsDiagramFrame") && diagram.includes("<svg");
  const usesThermodynamicsShell = diagram.includes("ThermodynamicsDiagramShell");
  if (!usesDirectFrame && !usesThermodynamicsShell) {
    errors.push(`${requirement.fileName}: must use the shared physics diagram frame`);
  }
  if (!registry.includes(importPath)) {
    errors.push(`${requirement.fileName}: registry import is missing`);
  }
  for (const relativePath of contentPaths) {
    const content = fs.readFileSync(path.join(courseRoot, relativePath), "utf8");
    if (!content.includes(`<PhysicsDiagram slug="${requirement.slug}" />`)) {
      errors.push(`${relativePath}: required diagram usage is missing`);
    }
  }
  for (const label of requirement.labels) {
    if (!diagram.includes(label)) {
      errors.push(`${requirement.fileName}: source-visible label ${JSON.stringify(label)} is missing`);
    }
  }
}

const nearlyEqual = (actual, expected, tolerance = 1e-10) => Math.abs(actual - expected) <= tolerance;
const sinc = (value) => value === 0 ? 1 : Math.sin(Math.PI * value) / (Math.PI * value);

for (const zero of [1, 2, 3, 4]) {
  if (!nearlyEqual(sinc(zero), 0)) errors.push(`single-slit sinc check failed at u=${zero}`);
}
if (!nearlyEqual(sinc(0), 1)) errors.push("single-slit central maximum is not normalised to one");

const doubleSlitIntensity = (value) => sinc(value) ** 2 * Math.cos(5 * Math.PI * value) ** 2;
if (!nearlyEqual(doubleSlitIntensity(0), 1)) errors.push("double-slit central maximum is not normalised to one");
if (!nearlyEqual(doubleSlitIntensity(1), 0)) errors.push("double-slit envelope does not vanish at the first single-slit zero");

function besselJ1(value) {
  let term = value / 2;
  let sum = term;
  for (let index = 1; index < 30; index += 1) {
    term *= -(value * value) / (4 * index * (index + 1));
    sum += term;
  }
  return sum;
}
const airyIntensity = (value) => value === 0 ? 1 : (2 * besselJ1(value) / value) ** 2;
if (!nearlyEqual(airyIntensity(0), 1)) errors.push("Airy central maximum is not normalised to one");
if (airyIntensity(3.831_705_97) > 1e-12) errors.push("Airy profile does not vanish at the first Bessel zero");

function graphPoints(relativePath) {
  const source = fs.readFileSync(path.join(courseRoot, relativePath), "utf8");
  return [...source.matchAll(/points=\{\[(.*?)\]\}/gsu)].flatMap(([, block]) =>
    [...block.matchAll(/\{\s*x:\s*(-?\d+(?:\.\d+)?),\s*y:\s*(-?\d+(?:\.\d+)?)\s*\}/gu)]
      .map(([, x, y]) => ({ x: Number(x), y: Number(y) })),
  );
}

const thermodynamicGraphChecks = [
  {
    path: "thermodynamic-foundations/the-thermodynamic-limit-and-macroscopic-descriptions/content.ts",
    valid: ({ x, y }) => Math.abs(y - 1 / Math.sqrt(x)) < 6e-4,
  },
  {
    path: "thermodynamic-foundations/intensive-and-extensive-variables/content.ts",
    valid: ({ x, y }) => nearlyEqual(y, x) || nearlyEqual(y, 1),
  },
  {
    path: "thermodynamic-foundations/systems-surroundings-boundaries-and-reservoirs/content.ts",
    valid: ({ x, y }) => Math.abs(y - 1 / x) < 6e-4,
  },
  {
    path: "thermodynamic-foundations/heat-heat-capacity-and-specific-heat-capacity/content.ts",
    valid: ({ x, y }) => Math.abs(y - 0.2 * 4.184 * x) < 0.05,
  },
  {
    path: "thermodynamic-foundations/the-ideal-gas-equation-of-state/content.ts",
    valid: ({ x, y }) => [200, 300, 400].some((temperature) => Math.abs(y - 8.314 * temperature / x) < 0.08),
  },
  {
    path: "thermodynamic-foundations/constant-volume-and-constant-pressure-heat-capacities/content.ts",
    valid: ({ x, y }) => x === 0 && y === 0 || [1.5 * 8.314, 2.5 * 8.314].some((slope) => Math.abs(y - slope * x) < 0.16),
  },
  {
    path: "thermodynamic-foundations/the-zeroth-law-thermal-equilibrium-and-thermometry/content.ts",
    valid: ({ x, y }) => Math.abs(y - (273.15 + (100 / 38.5) * (x - 100))) < 0.02,
  },
];

for (const check of thermodynamicGraphChecks) {
  const points = graphPoints(check.path);
  if (points.length === 0) {
    errors.push(`${check.path}: no analytic graph points found`);
  } else if (points.some((point) => !check.valid(point))) {
    errors.push(`${check.path}: one or more graph points fail the defining formula`);
  }
}

const allDiagramFiles = fs.readdirSync(diagramsRoot).filter((name) => name.endsWith(".tsx"));
const allSlugs = allDiagramFiles.flatMap((fileName) => {
  const source = fs.readFileSync(path.join(diagramsRoot, fileName), "utf8");
  return [...source.matchAll(/slug:\s*"([^"]+)"/gu)].map(([, slug]) => ({ fileName, slug }));
});
const slugCounts = new Map();
for (const { fileName, slug } of allSlugs) {
  const owners = slugCounts.get(slug) ?? [];
  owners.push(fileName);
  slugCounts.set(slug, owners);
}
for (const [slug, owners] of slugCounts) {
  if (owners.length > 1) errors.push(`duplicate diagram slug ${slug}: ${owners.join(", ")}`);
}

if (errors.length > 0) {
  console.error(`Level 2 Physics B diagram validation failed with ${errors.length} issue${errors.length === 1 ? "" : "s"}:`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  const relationshipCount = requirements.reduce(
    (total, requirement) => total + 1 + (requirement.additionalContentPaths?.length ?? 0),
    0,
  );
  console.log(`Level 2 Physics B diagrams valid: ${requirements.length} registered source visuals covering ${relationshipCount} required relationships checked.`);
}
