import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDirectory, "../../..");
const diagramsRoot = path.join(
  workspaceRoot,
  "packages/diagrams/src/physics/diagrams",
);
const registryPath = path.join(
  workspaceRoot,
  "packages/diagrams/src/physics/registry.ts",
);
const courseRoot = path.join(
  workspaceRoot,
  "apps/academy/src/lib/docs/level-2-physics-a",
);

const requirements = [
  {
    contentPath:
      "perturbation-theory-and-fine-structure/hyperfine-structure-and-multi-electron-atoms/content.ts",
    fileName: "lithium-hydrogen-energy-level-comparison.tsx",
    labels: [
      "Energy (eV)",
      "l = 0",
      "l = 1",
      "l = 2",
      "l = 3",
      "l = 4",
      "2s",
      "2p",
      "3s",
      "3p",
      "3d",
      "4s",
      "4p",
      "4d",
      "4f",
      "5s",
      "5p",
      "5d",
      "5f",
      "5g",
      "n = 2",
      "n = 3",
      "n = 4",
      "n = 5",
      "Lithium energy level diagram",
      "Hydrogen levels",
      "Ground state",
    ],
    referenceImage: "main.pdf#page=78&figure=16",
    requiredCounts: [
      ["lithiumLevels", 3],
      ["hydrogenLevels", 3],
      ["energyY", 5],
      ["<polyline", 1],
    ],
    requiredSource: [
      "SvgLabel",
      "strokeDasharray=\"6 4\"",
      "energy: -5.39",
      "energy: -3.4",
      "energy: -0.544",
    ],
    slug: "lithium-hydrogen-energy-level-comparison",
  },
  {
    contentPath:
      "perturbation-theory-and-fine-structure/hyperfine-structure-and-multi-electron-atoms/content.ts",
    fileName: "hydrogen-hyperfine-spin-flip.tsx",
    labels: ["F = 1", "F = 0", "Spin-Flip", "f₀ = 1420 MHz", "λ₀ = 21 cm"],
    referenceImage: "main.pdf#page=77&figure=15",
    requiredCounts: [
      ["<SpinArrow", 4],
      ["SvgArrowhead", 2],
      ["<ellipse", 2],
      ["<circle", 4],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "function SpinArrow",
      "const photonPath",
      "Math.sin(12 * Math.PI * fraction)",
    ],
    slug: "hydrogen-hyperfine-spin-flip",
  },
  {
    contentPath: "perturbation-theory-and-fine-structure/hydrogen-fine-structure/content.ts",
    fileName: "hydrogen-fine-structure-levels.tsx",
    labels: [
      "3S₁/₂",
      "3P₁/₂",
      "3P₃/₂",
      "3D₃/₂",
      "3D₅/₂",
      "2S₁/₂",
      "2P₁/₂",
      "2P₃/₂",
      "1S₁/₂",
      "unperturbed",
      "+ fine structure",
    ],
    referenceImage: "main.pdf#page=75&figure=14",
    requiredCounts: [
      ["unperturbedLevels", 2],
      ["splitLevels", 2],
      ["strokeDasharray=\"4 4\"", 6],
    ],
    requiredSource: ["SvgLabel", "function LevelLabels", "kind: \"graph\""],
    slug: "hydrogen-fine-structure-levels",
  },
  {
    contentPath: "spin-and-angular-momentum-addition/adding-angular-momenta/content.ts",
    fileName: "angular-momentum-addition-cones.tsx",
    labels: [
      "projection cones",
      "z",
      "J",
      "L",
      "S",
      "J = L + S",
      "|J| = √j(j+1) ℏ",
      "one allowed vector addition",
      "Jz",
      "Jx",
      "Jy",
      "m_j ℏ",
    ],
    referenceImage: "main.pdf#pages=68-69&figures=12-13",
    requiredCounts: [
      ["<VectorArrow", 6],
      ["SvgArrowhead", 5],
      ["<ellipse", 5],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "function VectorArrow",
      "strokeDasharray=\"6 5\"",
      "strokeDasharray=\"5 4\"",
    ],
    slug: "angular-momentum-addition-cones",
  },
  {
    contentPath: "spin-and-angular-momentum-addition/the-stern-gerlach-experiment/content.ts",
    fileName: "stern-gerlach-apparatus.tsx",
    labels: ["1", "2", "3", "4", "5", "N", "S"],
    referenceImage: "main.pdf#page=56&figure=11",
    requiredCounts: [
      ["<BeamArrow", 4],
      ["SvgArrowhead", 2],
      ["<ellipse", 2],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "function BeamArrow",
      "strokeDasharray=\"5 5\"",
      "kind: \"apparatus\"",
    ],
    slug: "stern-gerlach-apparatus",
  },
  {
    contentPath: "the-hydrogen-atom/atomic-transitions-and-spectral-series/content.ts",
    fileName: "hydrogen-transitions-and-balmer-spectrum.tsx",
    labels: [
      "n = 1",
      "n = 2",
      "n = 3",
      "n = 4",
      "n = 5",
      "n = ∞",
      "stationary states of hydrogen",
      "ground state",
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Balmer spectral lines",
      "series limit",
    ],
    referenceImage: "main.pdf#pages=50-51&figures=9-10",
    requiredCounts: [
      ["<TransitionArrow", 11],
      ["balmerWavelengths", 2],
      ["SvgArrowhead", 2],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "function spectrumX",
      "656.3",
      "486.1",
      "434.1",
      "410.2",
      "364.6",
    ],
    slug: "hydrogen-transitions-and-balmer-spectrum",
  },
  {
    contentPath: "the-hydrogen-atom/hydrogen-wavefunctions/content.ts",
    fileName: "hydrogen-radial-functions.tsx",
    labels: [
      "Plot of Radial Wave Function = f(r)",
      "(a)",
      "(b)",
      "(c)",
      "R(r)",
      "r",
      "1s orbital",
      "2s orbital",
      "2p orbital",
      "3s orbital",
      "3p orbital",
      "3d orbital",
    ],
    referenceImage: "main.pdf#page=49&figure=8",
    requiredCounts: [
      ["<RadialPanel", 1],
      ["radialValue", 2],
      ["radialPath", 2],
      ["Math.exp", 6],
    ],
    requiredSource: [
      "SvgLabel",
      "const states",
      "27 - 18 * radius + 2 * radius ** 2",
      "radius * (6 - radius)",
      "radius ** 2 * Math.exp(-radius / 3)",
    ],
    slug: "hydrogen-radial-functions",
  },
  {
    contentPath: "orbital-angular-momentum/spherical-harmonics/content.ts",
    fileName: "spherical-harmonic-amplitude-and-probability.tsx",
    labels: [
      "signed real amplitude Y₁₀",
      "angular node",
      "complex phase of Y₁₁",
      "phase winds as eⁱᵐφ",
      "|Y₀₀|²",
      "|Y₁₀|²",
      "|Y₁₁|²",
      "|Y₂₀|²",
      "|Y₂₁|²",
      "|Y₂₂|²",
      "negative amplitude",
    ],
    referenceImage: "main.pdf#page=46&figure=7",
    requiredCounts: [
      ["probabilityPath", 2],
      ["probabilityPanels", 2],
      ["<path", 5],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "function angularAmplitude",
      "angularAmplitude(l, m, theta) ** 2",
      "strokeDasharray=\"5 4\"",
    ],
    slug: "spherical-harmonic-amplitude-and-probability",
  },
  {
    contentPath:
      "one-dimensional-quantum-systems/harmonic-oscillator-wavefunctions-and-energies/content.ts",
    fileName: "harmonic-oscillator-state-family.tsx",
    labels: [
      "wavefunction ψₙ",
      "energy and potential",
      "probability |ψₙ|²",
      "V(x) = ½mω²x²",
      "classical turning points",
    ],
    referenceImage: "main.pdf#page=33&figure=6",
    requiredCounts: [
      ["sampledPath", 3],
      ["baselines", 2],
      ["strokeDasharray", 3],
    ],
    requiredSource: [
      "SvgLabel",
      "function hermite",
      "function factorial",
      "Math.exp(-(x ** 2) / 2)",
      "Math.sqrt(2 * n + 1)",
    ],
    slug: "harmonic-oscillator-state-family",
  },
  {
    contentPath: "one-dimensional-quantum-systems/the-finite-square-well/content.ts",
    fileName: "infinite-and-finite-well-comparison.tsx",
    labels: ["Infinite well", "Finite well", "L", "V₀", "leakage"],
    referenceImage: "main.pdf#page=30&figure=5",
    requiredCounts: [
      ["infinitePath", 2],
      ["finitePath", 2],
      ["SvgArrowhead", 3],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "Math.sin", "Math.exp", "kind: \"wave\""],
    slug: "infinite-and-finite-well-comparison",
  },
  {
    contentPath: "one-dimensional-quantum-systems/the-finite-square-well/content.ts",
    fileName: "finite-well-bound-state-leakage.tsx",
    labels: ["V₀", "well width L", "E", "exponential tail"],
    referenceImage: "main.pdf#page=29&figure=4-bottom",
    requiredCounts: [
      ["statePath", 2],
      ["states", 3],
      ["Math.exp", 1],
    ],
    requiredSource: ["SvgLabel", "Math.cos", "Math.sin", "strokeDasharray=\"4 4\""],
    slug: "finite-well-bound-state-leakage",
  },
  {
    contentPath:
      "foundations-of-quantum-mechanics/wave-particle-duality-and-wavefunctions/content.ts",
    fileName: "electron-interference-and-wave-packets.tsx",
    labels: [
      "Two-slit electron interference",
      "source",
      "two slits",
      "detection screen",
      "local hits",
      "distance D",
      "One wave number",
      "Two nearby wave numbers",
      "Many wave numbers",
      "localised wave packet",
    ],
    referenceImage: "main.pdf#page=6&figures=1-2",
    requiredCounts: [
      ["sampledWavePath", 4],
      ["detectionBands", 2],
      ["<circle", 2],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "Math.exp(-32 * (fraction - 0.5) ** 2)",
      "Math.cos(2 * Math.PI * (fraction - 0.5))",
      "kind: \"wave\"",
    ],
    slug: "electron-interference-and-wave-packets",
  },
  {
    contentPath:
      "radiation-from-oscillating-dipoles/dipole-radiation-patterns/content.ts",
    fileName: "dipole-polar-radiation-pattern.tsx",
    labels: [
      "0°",
      "30°",
      "60°",
      "90°",
      "120°",
      "150°",
      "180°",
      "P max",
      "½ P max",
      "half-power width",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=85&figure=62-right",
    requiredCounts: [
      ["radialPoint", 8],
      ["SvgArrowhead", 2],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "Math.sin(theta) ** 2",
      "const patternPath",
      "kind: \"graph\"",
    ],
    slug: "dipole-polar-radiation-pattern",
  },
  {
    contentPath:
      "radiation-from-oscillating-dipoles/dipole-radiation-patterns/content.ts",
    fileName: "dipole-far-field-directions.tsx",
    labels: [
      "r",
      "Oscillating dipole",
      "E-field",
      "B-field",
      "E × H outward",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=85&figure=61",
    requiredCounts: [
      ["ellipsePath", 6],
      ["SvgArrowhead", 6],
      ["strokeDasharray", 6],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "function ellipsePath", "kind: \"field\""],
    slug: "dipole-far-field-directions",
  },
  {
    contentPath:
      "radiation-from-oscillating-dipoles/near-and-far-fields/content.ts",
    fileName: "dipole-field-cycle.tsx",
    labels: [
      "Oscillating electric dipole",
      "B out",
      "B in",
      "E",
      "k",
      "k ∥ E × B",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=88&figure=64",
    requiredCounts: [
      ["lobePath", 4],
      ["chevrons", 2],
      ["<OutwardArrow", 4],
      ["strokeDasharray", 2],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "function lobePath",
      "function OutwardArrow",
      "kind: \"field\"",
    ],
    slug: "dipole-field-cycle",
  },
  {
    contentPath:
      "radiation-from-oscillating-dipoles/the-hertzian-dipole/content.ts",
    fileName: "hertzian-dipole-source-equivalence.tsx",
    labels: [
      "+q",
      "-q",
      "Time (t)",
      "Current (I)",
      "Displacement of +ve charge (d)",
      "Iᴹ",
      "-Iᴹ",
      "dᴹ",
      "-dᴹ",
      "A.C. current",
      "source",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=82&figure=59",
    requiredCounts: [
      ["harmonicPath", 3],
      ["chargeSamples", 2],
      ["SvgArrowhead", 4],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "Math.sin",
      "Math.PI / 2",
      "kind: \"wave\"",
    ],
    slug: "hertzian-dipole-source-equivalence",
  },
  {
    contentPath:
      "interfaces-and-fresnel-optics/brewster-s-angle-and-the-critical-angle/content.ts",
    fileName: "microscopic-brewster-angle.tsx",
    labels: [
      "Medium 2",
      "Refractive index: n₂",
      "Medium 1",
      "Refractive index: n₁",
      "Interface",
      "Plane of incidence",
      "E₀ᵢ",
      "E₀ᵣ = 0",
      "Zero radiation",
      "θᵢ = θᴮ",
      "θᵣ = θᴮ",
      "θₜ",
      "θᵢ + θₜ = 90°",
      "positive charge",
      "negative charge",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=77&figure=58",
    requiredCounts: [
      ["<PolarisedAtom", 3],
      ["SvgArrowhead", 5],
      ["rotatedEllipsePath", 3],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "function PolarisedAtom",
      "function rotatedEllipsePath",
      "strokeDasharray=\"7 5\"",
    ],
    slug: "microscopic-brewster-angle",
  },
  {
    contentPath:
      "interfaces-and-fresnel-optics/brewster-s-angle-and-the-critical-angle/content.ts",
    fileName: "total-internal-reflection-geometry.tsx",
    labels: [
      "Air",
      "Water",
      "θᵢ",
      "θₜ",
      "θᴮ",
      "θ꜀",
      "E",
      "Totally internally reflected wave",
      "angle of transmission",
      "angle of incidence",
      "angle of reflection",
      "Brewster angle (36.8°)",
      "critical angle (48.6°)",
      "nₜ/nᵢ = nAir/nWater = 3/4",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=75&figure=57-top",
    requiredCounts: [
      ["<Ray", 8],
      ["SvgArrowhead", 3],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "function Ray", "const source"],
    slug: "total-internal-reflection-geometry",
  },
  {
    contentPath:
      "interfaces-and-fresnel-optics/fresnel-equations-for-normal-polarisation/content.ts",
    fileName: "normal-polarisation-interface.tsx",
    labels: [
      "Medium 2",
      "Refractive index: n₂",
      "Medium 1",
      "Refractive index: n₁",
      "Surface",
      "Plane of incidence",
      "kᵢ",
      "kᵣ",
      "kₜ",
      "S₀ᵢ",
      "S₀ᵣ",
      "S₀ₜ",
      "θᵢ",
      "θᵣ",
      "θₜ",
      "x-axis",
      "y-axis",
      "z-axis",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=72&figure=55-bottom",
    requiredCounts: [
      ["<WaveVector", 3],
      ["<OutOfPlaneField", 3],
      ["SvgArrowhead", 6],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "function WaveVector",
      "function OutOfPlaneField",
      "strokeDasharray=\"3 4\"",
    ],
    slug: "normal-polarisation-interface",
  },
  {
    contentPath:
      "interfaces-and-fresnel-optics/fresnel-equations-for-parallel-polarisation/content.ts",
    fileName: "parallel-polarisation-interface.tsx",
    labels: [
      "Medium 2",
      "Refractive index: n₂",
      "Medium 1",
      "Refractive index: n₁",
      "Surface",
      "Plane of incidence",
      "kᵢ",
      "kᵣ",
      "kₜ",
      "P₀ᵢ",
      "P₀ᵣ",
      "P₀ₜ",
      "P₀ᵢ cos θᵢ",
      "P₀ᵣ cos θᵣ",
      "P₀ₜ cos θₜ",
      "θᵢ",
      "θᵣ",
      "θₜ",
      "x-axis",
      "y-axis",
      "z-axis",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=72&figure=55-top",
    requiredCounts: [
      ["<Vector", 9],
      ["SvgArrowhead", 6],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "function Vector", "strokeDasharray=\"3 4\""],
    slug: "parallel-polarisation-interface",
  },
  {
    contentPath:
      "interfaces-and-fresnel-optics/reflection-refraction-and-snell-s-law/content.ts",
    fileName: "interface-reflection-refraction-geometry.tsx",
    labels: [
      "kᵢ",
      "kᵣ",
      "kₜ",
      "θᵢ",
      "θᵣ",
      "θₜ",
      "R₁",
      "R₂",
      "O",
      "Eᵢ/(R₁,t) + Eᵣ/(R₁,t)",
      "Eₜ/(R₂,t)",
      "Medium 1",
      "Refractive index n₁",
      "Medium 2",
      "Refractive index n₂",
      "Plane of incidence",
      "Interface",
      "x-axis",
      "y-axis",
      "z-axis",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=69&figure=54",
    requiredCounts: [
      ["<Ray", 3],
      ["wavePath", 4],
      ["SvgArrowhead", 6],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "Math.sin", "strokeDasharray=\"7 6\""],
    slug: "interface-reflection-refraction-geometry",
  },
  {
    contentPath: "interfaces-and-fresnel-optics/magnetic-boundary-conditions/content.ts",
    fileName: "magnetic-interface-boundary-geometry.tsx",
    labels: [
      "Medium 2",
      "μ₂ = 2",
      "Medium 1",
      "μ₁ = 1",
      "Interface",
      "B₁",
      "B₂",
      "B-field",
      "S",
      "h",
      "l",
      "B₂⊥ = B₁⊥",
      "H₂∥ = H₁∥",
      "B₂∥ = 2B₁∥",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=68&figure=53",
    requiredCounts: [
      ["SvgArrowhead", 10],
      ["<ellipse", 2],
      ["coilRows", 2],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "SvgNormalMark",
      "SvgParallelMark",
      "strokeDasharray=\"3 4\"",
    ],
    slug: "magnetic-interface-boundary-geometry",
  },
  {
    contentPath: "interfaces-and-fresnel-optics/electric-boundary-conditions/content.ts",
    fileName: "electric-interface-boundary-geometry.tsx",
    labels: [
      "Medium 2",
      "ε₂ = 2",
      "Medium 1",
      "ε₁ = 1",
      "Interface",
      "E₁",
      "E₂",
      "E-field",
      "S",
      "h",
      "l",
      "D₂⊥ = D₁⊥",
      "E₂⊥ = ½E₁⊥",
      "E₂∥ = E₁∥",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=67&figure=52",
    requiredCounts: [
      ["SvgArrowhead", 10],
      ["<rect", 5],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "strokeDasharray=\"3 4\"", "kind: \"field\""],
    slug: "electric-interface-boundary-geometry",
  },
  {
    contentPath:
      "dielectric-and-magnetic-materials/bound-currents-in-magnetic-materials/content.ts",
    fileName: "bound-current-cancellation.tsx",
    labels: [
      "I₁",
      "I₂",
      "Jᵧ(z)",
      "Mₓ(z)",
      "Mₓ(z+Δz)",
      "Area, S",
      "Δx",
      "Δy",
      "Δz",
      "I length",
      "L",
      "M",
      "n hat",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=58&figure=45;page=60&figure=47",
    requiredCounts: [
      ["<LineArrow", 11],
      ["SvgArrowhead", 8],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "function LineArrow", "strokeDasharray=\"8 6\""],
    slug: "bound-current-cancellation",
  },
  {
    contentPath:
      "dielectric-and-magnetic-materials/magnetisation-and-magnetic-dipoles/content.ts",
    fileName: "current-loop-and-magnetisation.tsx",
    labels: ["B-field", "Current", "Source", "I", "Current, I", "Area, S", "m = ISn̂", "n hat"],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=56&figures=43-44",
    requiredCounts: [
      ["<ellipse", 5],
      ["SvgArrowhead", 8],
      ["coilRows", 2],
      ["dipoleRows", 2],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "coilRows", "dipoleRows", "aria-label=\"n hat\""],
    slug: "current-loop-and-magnetisation",
  },
  {
    contentPath:
      "dielectric-and-magnetic-materials/polarisation-and-bound-charge/content.ts",
    fileName: "polarised-material-element.tsx",
    labels: [
      "E applied",
      "E dielectric",
      "E inside dielectric",
      "Slab: -ve charge",
      "Q(-ve) = -P(x)ΔyΔz",
      "Charge",
      "neutral",
      "Slab: +ve charge",
      "Q(+ve) = P(x+Δx)ΔyΔz",
      "Direction of",
      "P and E",
      "Area: S",
      "Δx",
      "Δy",
      "Δz",
      "x-axis",
      "y-axis",
      "z-axis",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=54&figure=41",
    requiredCounts: [
      ["SvgArrowhead", 12],
      ["<polygon", 4],
      ["<HorizontalArrow", 5],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "function HorizontalArrow", "strokeDasharray=\"3 3\""],
    slug: "polarised-material-element",
  },
  {
    contentPath:
      "dielectric-and-magnetic-materials/polar-and-non-polar-dielectrics/content.ts",
    fileName: "polar-and-induced-dipoles.tsx",
    labels: [
      "Hydrogen",
      "nucleus",
      "Electron",
      "cloud",
      "Oxygen",
      "Centre of net",
      "positive charge",
      "negative charge",
      "Nucleus",
      "Displaced",
      "E-field",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=51&figure=38;page=52&figure=39",
    requiredCounts: [
      ["<circle", 10],
      ["<Leader", 8],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "function Leader", "kind: \"interaction\""],
    slug: "polar-and-induced-dipoles",
  },
  {
    contentPath:
      "conductors-and-superconductors/london-equations-and-the-meissner-effect/content.ts",
    fileName: "meissner-field-penetration.tsx",
    labels: [
      "B-field",
      "applied",
      "Superconducting",
      "semi-infinite slab",
      "Distance, x",
      "B ≈ 0",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=50&figure=36",
    requiredCounts: [
      ["SvgArrowhead", 8],
      ["straightFieldLines", 2],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "penetrationCurve",
      "Math.exp(-scaledDepth)",
      "aria-label=\"B ≈ 0\"",
    ],
    slug: "meissner-field-penetration",
  },
  {
    contentPath: "conductors-and-superconductors/the-drude-model/content.ts",
    fileName: "drude-carrier-collisions.tsx",
    labels: ["Free charge carriers", "Scattering sites"],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=42&figure=30",
    requiredCounts: [
      ["SvgArrowhead", 4],
      ["scatteringSites", 2],
      ["freeCarriers", 2],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "kind: \"interaction\"", "<path"],
    slug: "drude-carrier-collisions",
  },
  {
    contentPath:
      "relativity-and-charge-conservation/field-symmetry-and-spatial-dependence/content.ts",
    fileName: "electric-field-source-symmetries.tsx",
    labels: ["E-field ↑", "E-field", "∇ · E = 0, E ≠ 0", "+", "-"],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=40&figure=29",
    requiredCounts: [
      ["SvgArrowhead", 5],
      ["radialAngles", 2],
      ["∇ · E = 0, E ≠ 0", 1],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "radialAngles", "<polygon"],
    slug: "electric-field-source-symmetries",
  },
  {
    contentPath:
      "relativity-and-charge-conservation/electric-and-magnetic-fields-in-different-frames/content.ts",
    fileName: "charged-wire-reference-frames.tsx",
    labels: [
      "Observer N",
      "Observer P",
      "Proper frame",
      "Lorentz contraction",
      "Charge per",
      "unit length",
      "-nₗe:",
      "+nₗe",
      "-γnₗe",
      "-e",
      "+e",
      "γ",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=38&figure=28",
    requiredCounts: [
      ["<circle", 8],
      ["SvgArrowhead", 8],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "kind: \"interaction\""],
    slug: "charged-wire-reference-frames",
  },
  {
    contentPath:
      "electromagnetic-waves/waveguides-and-cutoff-frequencies/content.ts",
    fileName: "rectangular-waveguide-te-mode.tsx",
    labels: ["Eᵧ", "x-axis", "y-axis", "z-axis", "a", "b", "λ_z/2"],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=32&figure=24",
    requiredCounts: [
      ["SvgArrowhead", 6],
      ["nearFieldRows", 2],
      ["farFieldRows", 2],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "strokeDasharray=\"14 10\"", "kind: \"wave\""],
    slug: "rectangular-waveguide-te-mode",
  },
  {
    contentPath:
      "electromagnetic-waves/transmitting-and-detecting-electromagnetic-waves/content.ts",
    fileName: "receiving-antenna-responses.tsx",
    labels: ["Velocity of the wave", "Voltmeter", "B-field", "E-field", "Copper wire"],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=31&figure=22",
    requiredCounts: [
      ["<FieldLines", 2],
      ["Voltmeter", 2],
      ["Copper wire", 2],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "fieldLineXs", "<ellipse"],
    slug: "receiving-antenna-responses",
  },
  {
    contentPath:
      "electromagnetic-waves/polarisation-and-the-vector-structure-of-waves/content.ts",
    fileName: "transverse-electromagnetic-wave-vectors.tsx",
    labels: [
      "E - field",
      "B - field",
      "E₀",
      "B₀",
      "kᵣₑₐₗ :",
      "Direction of propagation",
      "E × B // kᵣₑₐₗ",
      "z-axis",
      "y-axis",
      "x-axis",
      "r",
      "O",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=26&figure=20",
    requiredCounts: [
      ["fill={ELECTRIC}", 5],
      ["fill={MAGNETIC}", 5],
      ["SvgArrowhead", 8],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "kind: \"wave\"", "viewBox=\"0 0 720 470\""],
    slug: "transverse-electromagnetic-wave-vectors",
  },
  {
    contentPath:
      "electromagnetic-induction/divergence-curl-and-vector-conventions/content.ts",
    fileName: "right-hand-vector-conventions.tsx",
    labels: ["c", "a", "b", "θ", "∇ × A", "Curl of A", "A"],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=24&figure=19",
    requiredCounts: [
      ["<Hand", 2],
      ["SvgArrowhead", 5],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "handOutline", "Curl of A"],
    slug: "right-hand-vector-conventions",
  },
  {
    contentPath:
      "electromagnetic-induction/the-ampere-maxwell-law/content.ts",
    fileName: "ampere-maxwell-capacitor-surfaces.tsx",
    labels: [
      "Point (1)",
      "Point (2)",
      "Path A",
      "Path B",
      "Volume D",
      "+q(t)",
      "-q(t)",
      "E-field :",
      "r",
      "I",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=22&figure=18",
    requiredCounts: [
      ["<ellipse", 2],
      ["SvgArrowhead", 5],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "strokeDasharray=\"9 7\"",
      "electricFieldLines",
    ],
    slug: "ampere-maxwell-capacitor-surfaces",
  },
  {
    contentPath:
      "electromagnetic-induction/inductive-and-motional-emf/content.ts",
    fileName: "moving-loop-motional-emf.tsx",
    labels: ["Magnetic pole", "piece", "V", "w", "u", "B-field"],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=19&figure=17",
    requiredCounts: [
      ["SvgArrowhead", 5],
      ["horizontalFieldLines", 2],
    ],
    requiredSource: ["SvgArrowhead", "SvgLabel", "horizontalFieldLines", "stroke={FIELD}"],
    slug: "moving-loop-motional-emf",
  },
  {
    contentPath:
      "maxwell-equations-and-static-fields/monopoles-dipoles-and-superposition/content.ts",
    fileName: "hollow-sphere-superposition.tsx",
    labels: [
      "ρ : +ve",
      "ρ : -ve",
      "rₗₛ",
      "r₁",
      "r₂",
      "rₛₛ",
      "(rₗₛ-rₛₛ) î",
      "O",
      "P",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=15&figure=12",
    requiredCounts: [
      ["<circle", 10],
      ["SvgArrowhead", 5],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "strokeDasharray=\"8 6\"",
      "fill={BACKGROUND}",
    ],
    slug: "hollow-sphere-superposition",
  },
  {
    contentPath:
      "maxwell-equations-and-static-fields/the-biot-savart-law/content.ts",
    fileName: "biot-savart-current-element-geometry.tsx",
    labels: [
      "dB-field",
      "Dipole",
      "moment, qdl",
      "Current-length",
      "element, Idl",
      "+q",
      "-q",
      "θ",
      "P",
      "r",
      "dl",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=11&figure=8",
    requiredCounts: [
      ["<ellipse", 2],
      ["SvgArrowhead", 4],
    ],
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "strokeDasharray=\"3 5\"",
      "fieldDirectionArrows",
    ],
    slug: "biot-savart-current-element-geometry",
  },
  {
    contentPath:
      "maxwell-equations-and-static-fields/electric-flux-and-gauss-s-law/content.ts",
    fileName: "electric-flux-gauss-law-geometry.tsx",
    labels: [
      "Circular",
      "surface, S′",
      "Arbitrary",
      "surface, S",
      "E-field",
      "2D projection",
      "dS′",
      "+q",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=8&figure=4",
    requiredSource: [
      "SvgArrowhead",
      "SvgLabel",
      "strokeDasharray=\"13 9\"",
      "strokeDasharray=\"2 4\"",
      "strokeDasharray=\"8 7\"",
      "strokeWidth=\"10\"",
    ],
    slug: "electric-flux-gauss-law-geometry",
  },
];

const graphRequirements = [
  {
    contentPath: "the-hydrogen-atom/radial-probability-distributions/content.ts",
    minimumCounts: [
      ["<Curve", 2],
      ["<Annotation", 3],
      ["<Point", 1],
      ["<DashedLine", 1],
    ],
    requiredSource: [
      "Ground-state radial function and radial probability",
      "scaled radial factor",
      "scaled radial probability",
      "peak at r = a",
      "2 * Math.exp(-radius)",
      "4 * radius ** 2 * Math.exp(-2 * radius)",
    ],
    referenceImage: "main.pdf#pages=49,91-92&analytic=ground-state-radial-probability",
    title: "ground-state radial-probability graph",
    validate() {
      const radialFactor = (radius) => 2 * Math.exp(-radius);
      const radialProbability = (radius) => 4 * radius ** 2 * Math.exp(-2 * radius);
      const samples = Array.from({ length: 5001 }, (_, index) => {
        const radius = index / 1000;
        return { radius, value: radialProbability(radius) };
      });
      const peak = samples.reduce((largest, sample) =>
        sample.value > largest.value ? sample : largest,
      );

      if (Math.abs(radialFactor(0) - 2) > 1e-12) fail("Ground-state scaled radial factor must begin at two");
      if (Math.abs(radialProbability(0)) > 1e-12) fail("Ground-state radial probability must vanish at the origin");
      if (Math.abs(peak.radius - 1) > 0.001) fail("Ground-state radial probability must peak at r/a = 1");
      if (Math.abs(peak.value - 4 / Math.E ** 2) > 1e-12) fail("Ground-state radial-probability peak is incorrect");
      if (Math.abs((4 * 2) / 2 ** 3 - 1) > 1e-12) fail("Ground-state radial probability is not normalized");
    },
  },
  {
    contentPath:
      "one-dimensional-quantum-systems/the-finite-square-well/content.ts",
    minimumCounts: [
      ["<Curve", 11],
      ["<Point", 10],
      ["<Annotation", 2],
    ],
    requiredSource: [
      "Graphical roots for the finite square well",
      "even: X tan X",
      "odd: -X cot X",
      "x * Math.tan(x)",
      "-x / Math.tan(x)",
      "Math.sqrt(25 - x ** 2)",
      "Math.sqrt(81 - x ** 2)",
      "Math.sqrt(156.25 - x ** 2)",
    ],
    referenceImage: "main.pdf#page=29&figure=4-top",
    title: "finite-well graphical roots",
    validate() {
      const residual = (x, radius, parity) => {
        const branch = parity === "even" ? x * Math.tan(x) : -x / Math.tan(x);
        return branch - Math.sqrt(radius ** 2 - x ** 2);
      };
      const roots = [
        [1.3064, 5, "even"], [2.5957, 5, "odd"], [3.8375, 5, "even"], [4.9063, 5, "odd"],
        [1.4131, 9, "even"], [2.8226, 9, "odd"], [4.2239, 9, "even"], [5.6102, 9, "odd"],
        [6.9684, 9, "even"], [8.2618, 9, "odd"],
      ];

      for (const [x, radius, parity] of roots) {
        if (Math.abs(residual(x, radius, parity)) > 0.002) {
          fail(`Finite-well ${parity} root at X=${x} is inconsistent`);
        }
      }
    },
  },
  {
    contentPath:
      "stationary-states-and-superposition/time-evolution-of-superposed-states/content.ts",
    minimumCounts: [
      ["<Curve", 6],
      ["<Annotation", 3],
    ],
    requiredSource: [
      "Eigenfunction synthesis of a half-well step",
      "target f/A",
      "200-term sum",
      "first nonzero components",
      "const n = 1",
      "const n = 2",
      "const n = 3",
      "const n = 5",
      "Array.from({ length: 200 }",
      "1 - Math.cos((n * Math.PI) / 2)",
    ],
    referenceImage: "main.pdf#page=27&figure=3",
    title: "eigenfunction-synthesis graph",
    validate() {
      const coefficient = (n) => (2 / (n * Math.PI)) * (1 - Math.cos((n * Math.PI) / 2));
      const partialSum = (x, maximumMode) =>
        Array.from({ length: maximumMode }, (_, index) => index + 1).reduce(
          (sum, n) => sum + coefficient(n) * Math.sin(n * Math.PI * x),
          0,
        );

      if (Math.abs(coefficient(1) - 2 / Math.PI) > 1e-12) fail("First step-expansion coefficient is incorrect");
      if (Math.abs(coefficient(2) - 2 / Math.PI) > 1e-12) fail("Second step-expansion coefficient is incorrect");
      if (Math.abs(coefficient(4)) > 1e-12) fail("Fourth step-expansion coefficient must vanish");
      if (Math.abs(partialSum(0.25, 200) - 1) > 0.01) fail("Step expansion must approach one in the left half");
      if (Math.abs(partialSum(0.75, 200)) > 0.01) fail("Step expansion must approach zero in the right half");
      if (Math.abs(partialSum(0.5, 200) - 0.5) > 0.01) fail("Fourier sum must approach the midpoint at the jump");
    },
  },
  {
    contentPath:
      "radiation-from-oscillating-dipoles/dipole-radiation-patterns/content.ts",
    minimumCounts: [
      ["<Curve", 1],
      ["<Annotation", 3],
    ],
    requiredSource: [
      "Normalized dipole power against polar angle",
      "axis: zero",
      "broadside maximum",
      "Math.sin((angleDegrees * Math.PI) / 180) ** 2",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=85&figure=62-left",
    title: "dipole Cartesian radiation graph",
    validate() {
      const power = (angleDegrees) => Math.sin((angleDegrees * Math.PI) / 180) ** 2;

      if (Math.abs(power(0)) > 1e-12 || Math.abs(power(180)) > 1e-12) {
        fail("Dipole power must vanish on both axis directions");
      }
      if (Math.abs(power(90) - 1) > 1e-12) fail("Dipole power must be maximal broadside");
      if (Math.abs(power(45) - 0.5) > 1e-12 || Math.abs(power(135) - 0.5) > 1e-12) {
        fail("Dipole half-power directions must be 45 and 135 degrees");
      }
    },
  },
  {
    contentPath:
      "interfaces-and-fresnel-optics/fresnel-equations-for-normal-polarisation/content.ts",
    minimumCounts: [
      ["<Curve", 2],
      ["<Annotation", 2],
    ],
    requiredSource: [
      "Normal-polarised Fresnel amplitudes for air to water",
      "Transmission E-normal",
      "Reflection E-normal",
      "const indexRatio = 4 / 3",
      "Math.cos(thetaI) - indexRatio * Math.cos(thetaT)",
      "2 * Math.cos(thetaI)",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=74&figure=56-normal",
    title: "normal-polarised Fresnel graph",
    validate() {
      const ratio = 4 / 3;
      const coefficients = (angleDegrees) => {
        const thetaI = (angleDegrees * Math.PI) / 180;
        const thetaT = Math.asin(Math.sin(thetaI) / ratio);
        const denominator = Math.cos(thetaI) + ratio * Math.cos(thetaT);
        return {
          reflection: (Math.cos(thetaI) - ratio * Math.cos(thetaT)) / denominator,
          transmission: (2 * Math.cos(thetaI)) / denominator,
        };
      };
      const normal = coefficients(0);
      const midAngle = coefficients(45);
      const grazing = coefficients(90);

      if (Math.abs(normal.reflection + 1 / 7) > 1e-12) fail("Normal-polarised normal-incidence reflection is incorrect");
      if (Math.abs(normal.transmission - 6 / 7) > 1e-12) fail("Normal-polarised normal-incidence transmission is incorrect");
      if (midAngle.reflection >= normal.reflection) fail("Normal-polarised reflection should become more negative with angle");
      if (Math.abs(grazing.reflection + 1) > 1e-12) fail("Normal-polarised grazing reflection must approach minus one");
      if (Math.abs(grazing.transmission) > 1e-12) fail("Normal-polarised grazing transmission must approach zero");
    },
  },
  {
    contentPath:
      "interfaces-and-fresnel-optics/fresnel-equations-for-parallel-polarisation/content.ts",
    minimumCounts: [
      ["<Curve", 2],
      ["<Annotation", 3],
    ],
    requiredSource: [
      "Parallel-polarised Fresnel amplitudes for air to water",
      "Transmission E-parallel",
      "Reflection E-parallel",
      "Brewster angle 53°",
      "const indexRatio = 4 / 3",
      "Math.cos(thetaT) - indexRatio * Math.cos(thetaI)",
      "2 * Math.cos(thetaI)",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=74&figure=56-parallel",
    title: "parallel-polarised Fresnel graph",
    validate() {
      const ratio = 4 / 3;
      const coefficients = (angleDegrees) => {
        const thetaI = (angleDegrees * Math.PI) / 180;
        const thetaT = Math.asin(Math.sin(thetaI) / ratio);
        const denominator = Math.cos(thetaT) + ratio * Math.cos(thetaI);
        return {
          reflection: (Math.cos(thetaT) - ratio * Math.cos(thetaI)) / denominator,
          transmission: (2 * Math.cos(thetaI)) / denominator,
        };
      };
      const normal = coefficients(0);
      const brewster = coefficients((Math.atan(ratio) * 180) / Math.PI);
      const grazing = coefficients(90);

      if (Math.abs(normal.reflection + 1 / 7) > 1e-12) fail("Parallel normal-incidence reflection is incorrect");
      if (Math.abs(normal.transmission - 6 / 7) > 1e-12) fail("Parallel normal-incidence transmission is incorrect");
      if (Math.abs(brewster.reflection) > 1e-12) fail("Parallel reflection must vanish at Brewster angle");
      if (Math.abs(grazing.reflection - 1) > 1e-12) fail("Parallel grazing reflection must approach one");
      if (Math.abs(grazing.transmission) > 1e-12) fail("Parallel grazing transmission must approach zero");
    },
  },
  {
    contentPath:
      "dielectric-and-magnetic-materials/dielectric-resonance-and-complex-permittivity/content.ts",
    minimumCounts: [
      ["<Curve", 2],
      ["<Annotation", 3],
    ],
    requiredSource: [
      "Complex relative permittivity near resonance",
      "Real permittivity",
      "Imaginary permittivity",
      "ω₀",
      "const strength = 0.08",
      "const damping = 0.12",
      "(1 - x ** 2) ** 2 + (damping * x) ** 2",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=63&figure=48",
    title: "complex-permittivity resonance graph",
    validate() {
      const strength = 0.08;
      const damping = 0.12;
      const response = (x) => {
        const denominator = (1 - x ** 2) ** 2 + (damping * x) ** 2;
        return {
          imaginary: (strength * damping * x) / denominator,
          real: 1 + (strength * (1 - x ** 2)) / denominator,
        };
      };
      const resonance = response(1);
      const lowFrequency = response(0);
      const highFrequency = response(2);
      const samples = Array.from({ length: 2001 }, (_, index) => {
        const x = index / 1000;
        return { x, imaginary: response(x).imaginary };
      });
      const peak = samples.reduce((largest, sample) =>
        sample.imaginary > largest.imaginary ? sample : largest,
      );

      if (Math.abs(resonance.real - 1) > 1e-12) fail("Real permittivity must cross one at resonance");
      if (Math.abs(resonance.imaginary - strength / damping) > 1e-12) fail("Loss peak value is incorrect");
      if (lowFrequency.real <= 1) fail("Low-frequency real permittivity must exceed one");
      if (highFrequency.real >= 1) fail("High-frequency real branch must approach one from below");
      if (peak.x < 0.98 || peak.x > 1.01) fail("Imaginary-permittivity peak must occur near resonance");
      if (samples.some((sample) => sample.imaginary < 0)) fail("Passive loss branch must remain non-negative");
    },
  },
  {
    contentPath:
      "conductors-and-superconductors/plasma-frequency-and-the-high-frequency-limit/content.ts",
    minimumCounts: [
      ["<Curve", 4],
      ["<Annotation", 4],
    ],
    requiredSource: [
      "Phase and group velocities around the plasma frequency",
      "Phase velocity",
      "Group velocity",
      "Speed of light in a vacuum",
      "plasma angular frequency ωₚ",
      "1 / Math.sqrt(1 - 1 / x ** 2)",
      "Math.sqrt(1 - 1 / x ** 2)",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=46&figure=32",
    title: "plasma-frequency velocity graph",
    validate() {
      const ratio = 2;
      const phase = 1 / Math.sqrt(1 - 1 / ratio ** 2);
      const group = Math.sqrt(1 - 1 / ratio ** 2);

      if (Math.abs(phase * group - 1) > 1e-12) fail("Normalized plasma velocities must multiply to one");
      if (phase <= 1) fail("Plasma phase velocity must exceed c above threshold");
      if (group <= 0 || group >= 1) fail("Plasma group velocity must lie between zero and c");
      if (Math.abs(group - Math.sqrt(3) / 2) > 1e-12) fail("Plasma group-velocity sample is incorrect");
    },
  },
  {
    contentPath: "electromagnetic-waves/waveguides-and-cutoff-frequencies/content.ts",
    minimumCounts: [
      ["<Curve", 2],
      ["<DashedLine", 2],
      ["<Annotation", 4],
    ],
    requiredSource: [
      "Waveguide phase and group velocities above cutoff",
      "Phase velocity",
      "Group velocity",
      "Speed of light in vacuum",
      "Cutoff angular frequency ω_c",
      "1 / Math.sqrt(1 - 1 / x ** 2)",
      "Math.sqrt(1 - 1 / x ** 2)",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=34&figure=25",
    title: "waveguide velocity graph",
    validate() {
      const ratio = 1.5;
      const phase = 1 / Math.sqrt(1 - 1 / ratio ** 2);
      const group = Math.sqrt(1 - 1 / ratio ** 2);

      if (Math.abs(phase * group - 1) > 1e-12) fail("Normalized waveguide velocities must multiply to one");
      if (phase <= 1) fail("Phase velocity must exceed c above cutoff");
      if (group <= 0 || group >= 1) fail("Group velocity must lie between zero and c above cutoff");
      if (!Number.isFinite(phase)) fail("Phase-velocity curve must remain finite on its plotted domain");
    },
  },
  {
    contentPath: "electromagnetic-waves/dispersion-and-wave-packets/content.ts",
    minimumCounts: [
      ["<Curve", 4],
      ["<Annotation", 8],
    ],
    requiredSource: [
      "Dispersive motion and broadening of a wave packet",
      "Initial wave envelope",
      "Initial carrier frequency",
      "Wave envelope at later time",
      "Carrier frequency at later time",
      "V_group →",
      "L_FWHM",
      "0.31 * Math.exp",
      "0.18 * Math.exp",
      "5.5 ** 2",
      "11.5 ** 2",
    ],
    referenceImage:
      "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=28&figure=21",
    title: "wave-packet dispersion graph",
    validate() {
      const initialEnvelope = (x) => 0.31 * Math.exp(-((x - 12) ** 2) / (2 * 5.5 ** 2));
      const laterEnvelope = (x) => 0.18 * Math.exp(-((x - 42) ** 2) / (2 * 11.5 ** 2));
      const initialFwhm = 2 * Math.sqrt(2 * Math.log(2)) * 5.5;
      const laterFwhm = 2 * Math.sqrt(2 * Math.log(2)) * 11.5;

      if (Math.abs(initialEnvelope(12) - 0.31) > 1e-12) fail("Initial packet peak is incorrect");
      if (Math.abs(laterEnvelope(42) - 0.18) > 1e-12) fail("Later packet peak is incorrect");
      if (laterFwhm <= initialFwhm) fail("Later packet must be broader than the initial packet");
      if (laterEnvelope(12) >= initialEnvelope(12)) fail("Initial packet must dominate near its own centre");
    },
  },
];

function fail(message) {
  throw new Error(message);
}

function readRequired(filePath) {
  if (!fs.existsSync(filePath)) fail(`Missing ${path.relative(workspaceRoot, filePath)}`);
  return fs.readFileSync(filePath, "utf8");
}

const registry = readRequired(registryPath);
const slugs = new Set();

for (const requirement of requirements) {
  if (slugs.has(requirement.slug)) fail(`Duplicate required slug ${requirement.slug}`);
  slugs.add(requirement.slug);

  const diagramPath = path.join(diagramsRoot, requirement.fileName);
  const source = readRequired(diagramPath);
  const content = readRequired(path.join(courseRoot, requirement.contentPath));
  const importName = `${requirement.fileName.replace(/\.tsx$/u, "").replace(/-([a-z])/gu, (_, letter) => letter.toUpperCase())}Diagram`;

  if (!registry.includes(`./diagrams/${requirement.fileName.replace(/\.tsx$/u, "")}`)) {
    fail(`${requirement.fileName} is not imported by the physics diagram registry`);
  }

  if (!registry.includes(importName)) {
    fail(`${requirement.fileName} is not included in the physics diagram registry array`);
  }

  if (!source.includes(`slug: "${requirement.slug}"`)) {
    fail(`${requirement.fileName} must declare slug ${requirement.slug}`);
  }

  if (!source.includes(`"${requirement.referenceImage}"`)) {
    fail(`${requirement.fileName} must map to ${requirement.referenceImage}`);
  }

  if (!content.includes(`<PhysicsDiagram slug="${requirement.slug}" />`)) {
    fail(`${requirement.contentPath} must render ${requirement.slug}`);
  }

  if (source.includes("<text")) {
    fail(`${requirement.fileName} must use SvgLabel for source labels`);
  }

  for (const label of requirement.labels) {
    if (!source.includes(label)) fail(`${requirement.fileName} is missing label ${label}`);
  }

  for (const expectedSource of requirement.requiredSource) {
    if (!source.includes(expectedSource)) {
      fail(`${requirement.fileName} is missing required feature ${expectedSource}`);
    }
  }

  for (const [needle, minimum] of requirement.requiredCounts ?? []) {
    const count = source.split(needle).length - 1;
    if (count < minimum) {
      fail(`${requirement.fileName} requires at least ${minimum} occurrences of ${needle}; found ${count}`);
    }
  }
}

for (const requirement of graphRequirements) {
  const content = readRequired(path.join(courseRoot, requirement.contentPath));

  if (!content.includes("<CartesianGrid")) {
    fail(`${requirement.contentPath} must render ${requirement.title}`);
  }

  for (const expectedSource of requirement.requiredSource) {
    if (!content.includes(expectedSource)) {
      fail(`${requirement.contentPath} is missing required graph feature ${expectedSource}`);
    }
  }

  for (const [needle, minimum] of requirement.minimumCounts) {
    const count = content.split(needle).length - 1;
    if (count < minimum) {
      fail(`${requirement.contentPath} requires at least ${minimum} occurrences of ${needle}; found ${count}`);
    }
  }

  requirement.validate();
}

const visualCount = requirements.length + graphRequirements.length;
console.log(`Level 2 Physics A visuals valid: ${visualCount} validated implementation${visualCount === 1 ? "" : "s"}.`);
