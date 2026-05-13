import { buildSearchIndex, createDocsTree, getDocBySlug } from "@repo/docs";
import type { DocHeading, DocPage, DocSectionMeta } from "@repo/docs";

import { level1PhysicsTopicBodies } from "./level-1-physics-content";
import {
  level1PhysicsCourseIntroBody,
  level1PhysicsCourseIntroHeadings,
} from "./level-1-physics/course-page";
import { level1PhysicsExamSets } from "./level-1-physics/exams";
import { getLevel1MathIPhysicsTopicBody } from "./level-1-math-i-physics/content";
import { level1MathIPhysicsExamSets } from "./level-1-math-i-physics/exams";
import { level1MathIIPhysicsTopicBodies } from "./level-1-math-ii-physics/content";
import {
  level1MathIPhysicsCourseIntroBody,
  level1MathIPhysicsCourseIntroHeadings,
} from "./level-1-math-i-physics/course-page";
import {
  level1MathIIPhysicsCourseIntroBody,
  level1MathIIPhysicsCourseIntroHeadings,
} from "./level-1-math-ii-physics/course-page";

export type CourseScope =
  | "level-1-math-i-physics"
  | "level-1-math-ii-physics"
  | "level-1-physics";

export type CourseMeta = {
  description: string;
  href: string;
  label: string;
  scope: CourseScope;
  slug: string[];
};

type CourseTopic = {
  navLabel?: string;
  title: string;
};

type CourseSection = {
  id: string;
  navLabel?: string;
  title: string;
  topics: CourseTopic[];
};

type Level1PhysicsTopic = CourseTopic;
type Level1PhysicsSection = CourseSection;

export const academyCourses: CourseMeta[] = [
  {
    label: "Level 1 - Math I (Physics)",
    scope: "level-1-math-i-physics",
    href: "/level-1-math-i-physics",
    slug: ["level-1-math-i-physics"],
    description:
      "The core maths toolkit for physics: algebra, functions, graphs, trigonometry, vectors, units, and introductory calculus.",
  },
  {
    label: "Level 1 - Math II (Physics)",
    scope: "level-1-math-ii-physics",
    href: "/level-1-math-ii-physics",
    slug: ["level-1-math-ii-physics"],
    description:
      "Extended mathematical methods for physics modelling, including integration, differential equations, complex numbers, matrices, and vector calculus.",
  },
  {
    label: "Level 1 - Physics",
    scope: "level-1-physics",
    href: "/level-1-physics",
    slug: ["level-1-physics"],
    description:
      "A calculus-based physics course built around derivations, physical modelling, worked questions, and full exam practice.",
  },
];

const level1MathIPhysicsSections: CourseSection[] = [
  {
    id: "real-numbers",
    title: "Real Numbers",
    navLabel: "Real Numbers",
    topics: [
      { title: "Real Numbers" },
      { title: "Algebraic Manipulation" },
      { title: "Summation Notation" },
      { title: "Proof by Induction" },
      { title: "Binomial Coefficients" },
      { title: "Binomial Theorem" },
    ],
  },
  {
    id: "functions",
    title: "Functions",
    topics: [{ title: "Functions" }, { title: "Inverse Functions" }],
  },
  {
    id: "trigonometry",
    title: "Trigonometry",
    navLabel: "Trig",
    topics: [
      { title: "Pythagoras Theorem" },
      { title: "Trig Functions" },
      { title: "Angle Addition Formulae" },
      { title: "Inverse Trig Functions" },
    ],
  },
  {
    id: "limits",
    title: "Limits",
    navLabel: "Limits",
    topics: [
      { title: "Formal Limits" },
      { title: "Limit Variations" },
      { title: "Algebraic Limits" },
      { title: "Squeeze Theorem" },
      { title: "Sine Limit" },
      { title: "Limit Laws" },
      { title: "Change of Variables" },
      { title: "Continuity" },
    ],
  },
  {
    id: "differentiation",
    title: "Differentiation",
    navLabel: "Derivatives",
    topics: [
      { title: "Derivatives" },
      { title: "First Principles" },
      { title: "Standard Derivatives" },
      { title: "Product Rule" },
      { title: "Quotient Rule" },
      { title: "Chain Rule" },
      { title: "Higher Order Derivatives" },
      { title: "Implicit Differentiation" },
      { title: "Inverse Derivatives" },
      { title: "L'Hopital Rule" },
    ],
  },
  {
    id: "integration",
    title: "Integration",
    topics: [
      { title: "Definite Integrals" },
      { title: "Antiderivatives" },
      { title: "Fundamental Theorem" },
      { title: "Reverse Differentiation" },
      { title: "Standard Integrals" },
      { title: "Integration by Parts" },
      { title: "Substitution" },
      { title: "Polynomial Division" },
      { title: "Partial Fractions" },
      { title: "Cover-Up Rule" },
      { title: "Rational Integrals" },
      { title: "Trig Power Integrals" },
    ],
  },
  {
    id: "complex-arithmetic",
    title: "Complex Arithmetic",
    navLabel: "Complex Arithmetic",
    topics: [
      { title: "Complex Numbers" },
      { title: "Complex Addition" },
      { title: "Complex Multiplication" },
      { title: "Complex Division" },
      { title: "Real Part" },
      { title: "Imaginary Part" },
      { title: "Modulus" },
      { title: "Conjugate" },
    ],
  },
  {
    id: "complex-form",
    title: "Complex Form",
    navLabel: "Complex Form",
    topics: [
      { title: "Argument" },
      { title: "Polar Form" },
      { title: "Complex Addition Geometry" },
      { title: "Complex Multiplication Geometry" },
      { title: "De Moivre Theorem" },
      { title: "Complex Exponential" },
      { title: "Euler Formula" },
      { title: "Complex Trig Formulae" },
    ],
  },
  {
    id: "complex-equations",
    title: "Complex Equations",
    navLabel: "Complex Equations",
    topics: [
      { title: "Linear Complex Equations" },
      { title: "Quadratic Complex Equations" },
      { title: "Roots of Unity" },
      { title: "General Complex Roots" },
      { title: "Fundamental Theorem" },
      { title: "Complex Functions" },
      { title: "Transcendental Equations in a Complex Variable" },
    ],
  },
  {
    id: "groups",
    title: "Groups",
    navLabel: "Groups",
    topics: [
      { title: "Symmetries" },
      { title: "Group Definition" },
      { title: "Group Axioms" },
      { title: "Group Tables" },
      { title: "Cyclic Groups" },
      { title: "Polygon Symmetries" },
      { title: "Subgroups" },
      { title: "Group Maps" },
      { title: "Matrix Groups" },
    ],
  },
  {
    id: "series",
    title: "Series",
    topics: [
      { title: "Series Basics" },
      { title: "Partial Sums" },
      { title: "Geometric Series" },
      { title: "Series Sums" },
      { title: "Positive Series" },
      { title: "Convergence Tests" },
      { title: "Negative Terms" },
      { title: "Absolute Convergence" },
      { title: "Conditional Convergence" },
    ],
  },
  {
    id: "power-series",
    title: "Power Series",
    navLabel: "Power Series",
    topics: [
      { title: "Power Series" },
      { title: "Coefficients" },
      { title: "Radius of Convergence" },
      { title: "Interval of Convergence" },
      { title: "Taylor Polynomials" },
      { title: "Taylor Series" },
      { title: "Taylor Theorem" },
      { title: "Remainders" },
      { title: "Taylor Limits" },
    ],
  },
  {
    id: "matrices",
    title: "Matrices",
    topics: [
      { title: "Linear Systems" },
      { title: "Matrix Notation" },
      { title: "Matrix Operations" },
      { title: "Row Operations" },
      { title: "Gaussian Elimination" },
      { title: "RREF" },
      { title: "Solution Sets" },
      { title: "Determinants" },
      { title: "Determinant Properties" },
      { title: "Inverse Matrices" },
      { title: "Inverse Computation" },
      { title: "LU Decomposition" },
    ],
  },
  {
    id: "vector-spaces",
    title: "Vector Spaces",
    navLabel: "Vector Spaces",
    topics: [
      { title: "Vector Spaces" },
      { title: "Subspaces" },
      { title: "Linear Independence" },
      { title: "Spanning Sets" },
      { title: "Bases" },
      { title: "Dimension" },
      { title: "Coordinates" },
      { title: "Rank" },
      { title: "Nullity" },
    ],
  },
  {
    id: "linear-maps",
    title: "Linear Maps",
    navLabel: "Linear Maps",
    topics: [
      { title: "Linear Maps" },
      { title: "Matrix Representations" },
      { title: "Special Matrices" },
      { title: "Eigenvalues" },
      { title: "Eigenvectors" },
      { title: "Eigenspaces" },
      { title: "Diagonalisation" },
      { title: "Diagonalisation Applications" },
    ],
  },
];

const level1MathIIPhysicsSections: CourseSection[] = [
  {
    id: "probability",
    title: "Probability",
    topics: [
      { title: "Probability" },
      { title: "Events" },
      { title: "Probability Axioms" },
      { title: "Counting Principles" },
      { title: "Conditional Probability" },
      { title: "Bayes Theorem" },
      { title: "Independence" },
      { title: "Partitions" },
      { title: "Discrete Random Variables" },
      { title: "Continuous Random Variables" },
      { title: "Expectation" },
      { title: "Variance" },
      { title: "Binomial Distribution" },
      { title: "Poisson Distribution" },
      { title: "Poisson Approximation" },
      { title: "Normal Distribution" },
      { title: "Standard Normal" },
      { title: "General Normal" },
      { title: "Normal Approximation" },
      { title: "Central Limit Theorem" },
      { title: "Experimental Errors" },
      { title: "Sample Mean" },
    ],
  },
  {
    id: "vectors",
    title: "Vectors",
    topics: [
      { title: "Vectors" },
      { title: "Scalars" },
      { title: "Vector Addition" },
      { title: "Zero Vector" },
      { title: "Scalar Multiplication" },
      { title: "Vector Spaces" },
      { title: "Coordinate Bases" },
      { title: "Dot Product" },
      { title: "Cross Product" },
      { title: "Scalar Triple Product" },
      { title: "Lines" },
      { title: "Planes" },
    ],
  },
  {
    id: "kinematics",
    title: "Kinematics",
    topics: [
      { title: "Position" },
      { title: "Velocity" },
      { title: "Acceleration" },
      { title: "Forces" },
      { title: "Energy" },
      { title: "Work Done" },
      { title: "Angular Momentum" },
      { title: "Polar Coordinates" },
      { title: "Cylindrical Polars" },
    ],
  },
  {
    id: "ordinary-differential-equations",
    title: "Ordinary Differential Equations",
    navLabel: "ODEs",
    topics: [
      { title: "ODE Introduction" },
      { title: "Dependent Variables" },
      { title: "Independent Variables" },
      { title: "Equation Order" },
      { title: "Initial Conditions" },
      { title: "Boundary Conditions" },
      { title: "Separable Equations" },
      { title: "Homogeneous Equations" },
      { title: "Linear First-Order Equations" },
      { title: "Bernoulli Equations" },
      { title: "Second-Order Equations" },
      { title: "Linear Second-Order Equations" },
      { title: "Homogeneous Constant-Coefficient Equations" },
      { title: "Inhomogeneous Constant-Coefficient Equations" },
      { title: "Operator Methods" },
      { title: "Simultaneous First-Order Equations" },
      { title: "Car Suspension" },
      { title: "Resonance" },
    ],
  },
  {
    id: "fourier-analysis",
    title: "Fourier Analysis",
    navLabel: "Fourier",
    topics: [
      { title: "Periodic Functions" },
      { title: "Fourier Series" },
      { title: "Fourier Coefficients" },
      { title: "Vector Analogy" },
      { title: "Function Inner Product" },
      { title: "Function Norm" },
      { title: "Orthogonal Functions" },
      { title: "Euler Formulae" },
      { title: "Even Functions" },
      { title: "Odd Functions" },
      { title: "Fourier Symmetry" },
      { title: "Parseval Theorem" },
      { title: "General Periods" },
      { title: "Complex Fourier Form" },
    ],
  },
  {
    id: "multivariable-calculus",
    title: "Multivariable Calculus",
    navLabel: "Multivariable",
    topics: [
      { title: "Multivariable Functions" },
      { title: "Graphs" },
      { title: "Partial Derivatives" },
      { title: "Higher Partial Derivatives" },
      { title: "Clairaut Theorem" },
      { title: "Differentials" },
      { title: "Exact Differentials" },
      { title: "Inexact Differentials" },
      { title: "Directional Derivatives" },
      { title: "Gradient" },
      { title: "Multivariable Chain Rule" },
      { title: "Single-Parameter Chain Rule" },
      { title: "Multi-Parameter Chain Rule" },
      { title: "Taylor Expansions" },
      { title: "Critical Points" },
      { title: "Two-Dimensional Critical Points" },
      { title: "n-Dimensional Critical Points" },
    ],
  },
  {
    id: "partial-differential-equations",
    title: "Partial Differential Equations",
    navLabel: "PDEs",
    topics: [
      { title: "PDE Introduction" },
      { title: "Important PDEs" },
      { title: "Special Cases" },
      { title: "Separation of Variables" },
      { title: "Linear PDEs" },
    ],
  },
  {
    id: "vector-calculus",
    title: "Vector Calculus",
    navLabel: "Vector Calculus",
    topics: [
      { title: "Vector Fields" },
      { title: "Divergence" },
      { title: "Curl" },
      { title: "Gradient Operator" },
      { title: "Div Grad Curl Identities" },
      { title: "Maxwell Equations" },
    ],
  },
  {
    id: "multiple-integrals",
    title: "Multiple Integrals",
    navLabel: "Integrals",
    topics: [
      { title: "Volume Interpretation" },
      { title: "Rectangular Regions" },
      { title: "Double Integrals" },
      { title: "Integration Limits" },
      { title: "Order Switching" },
      { title: "Polar Integration" },
      { title: "Triple Integrals" },
      { title: "Cylindrical Coordinates" },
      { title: "Spherical Coordinates" },
      { title: "Jacobian" },
    ],
  },
  {
    id: "complex-analysis",
    title: "Complex Analysis",
    navLabel: "Complex Analysis",
    topics: [
      { title: "Complex Differentiability" },
      { title: "Cauchy Riemann Equations" },
      { title: "Complex Derivative Examples" },
      { title: "Laplace Equation" },
      { title: "Harmonic Functions" },
    ],
  },
];

const level1PhysicsSections: Level1PhysicsSection[] = [
  {
    id: "measurement-vectors",
    title: "Measurement and Vectors",
    navLabel: "Foundations",
    topics: [
      { title: "How Physics Builds Models" },
      { title: "A Reliable Problem-Solving Process" },
      { title: "Units and Measurement Standards" },
      { title: "Unit Conversion Without Guesswork" },
      { title: "Measurement Uncertainty" },
      { title: "Significant Figures" },
      { title: "Estimation and Scale Sense" },
      { title: "Adding Vectors Geometrically" },
      { title: "Resolving Vectors into Components" },
      { title: "Unit Vector Notation" },
      { title: "Dot and Cross Products" },
    ],
  },
  {
    id: "one-dimensional-motion",
    title: "One-Dimensional Motion",
    navLabel: "1D Motion",
    topics: [
      { title: "Position and Time" },
      { title: "Average Velocity" },
      { title: "Instantaneous Velocity" },
      { title: "Acceleration as a Rate of Change" },
      { title: "Constant-Acceleration Models" },
      { title: "Free-Fall Motion" },
      { title: "Position and Velocity from Calculus" },
    ],
  },
  {
    id: "motion-in-space",
    title: "Motion in Space",
    navLabel: "2D and 3D Motion",
    topics: [
      { title: "Position and Velocity Vectors" },
      { title: "Acceleration Vectors" },
      { title: "Projectile Models" },
      { title: "Circular Motion Kinematics" },
      { title: "Relative Motion" },
    ],
  },
  {
    id: "forces-newtons-laws",
    title: "Forces and Newton's Laws",
    navLabel: "Newton's Laws",
    topics: [
      { title: "Forces as Interactions" },
      { title: "Equilibrium and Inertia" },
      { title: "Force, Mass, and Acceleration" },
      { title: "Weight Versus Mass" },
      { title: "Action-Reaction Pairs" },
      { title: "Drawing Free-Body Diagrams" },
    ],
  },
  {
    id: "applying-force-models",
    title: "Applying Force Models",
    navLabel: "Force Models",
    topics: [
      { title: "Equilibrium with Newton's First Law" },
      { title: "Particle Dynamics with Newton's Second Law" },
      { title: "Static and Kinetic Friction" },
      { title: "Dynamics of Circular Motion" },
      { title: "Four Fundamental Interactions" },
    ],
  },
  {
    id: "work-energy-power",
    title: "Work, Energy, and Power",
    navLabel: "Work and Energy",
    topics: [
      { title: "Work by a Force" },
      { title: "Kinetic Energy and the Work-Energy Principle" },
      { title: "Energy Transfer with Variable Forces" },
      { title: "Power and Rate of Work" },
    ],
  },
  {
    id: "potential-energy",
    title: "Potential Energy and Conservation",
    navLabel: "Energy Conservation",
    topics: [
      { title: "Gravitational Potential Energy" },
      { title: "Elastic Potential Energy" },
      { title: "Conservative Forces" },
      { title: "Nonconservative Forces" },
      { title: "Force from Potential Energy" },
      { title: "Reading Energy Diagrams" },
    ],
  },
  {
    id: "momentum-systems",
    title: "Momentum Systems",
    navLabel: "Momentum",
    topics: [
      { title: "Momentum and Impulse" },
      { title: "Momentum Conservation" },
      { title: "Collisions as Momentum Problems" },
      { title: "Elastic Collision Models" },
      { title: "Center of Mass" },
      { title: "Rocket Motion" },
    ],
  },
  {
    id: "rigid-body-rotation",
    title: "Rigid-Body Rotation",
    navLabel: "Rotation",
    topics: [
      { title: "Angular Velocity" },
      { title: "Angular Acceleration" },
      { title: "Constant Angular Acceleration" },
      { title: "Connecting Linear and Angular Motion" },
      { title: "Rotational Kinetic Energy" },
      { title: "Parallel-Axis Theorem" },
      { title: "Calculating Moments of Inertia" },
    ],
  },
  {
    id: "rotational-dynamics",
    title: "Rotational Dynamics",
    navLabel: "Rotational Forces",
    topics: [
      { title: "Torque" },
      { title: "Torque and Angular Acceleration" },
      { title: "Rotation About Moving Axes" },
      { title: "Work and Power in Rotation" },
      { title: "Angular Momentum" },
      { title: "Conserving Angular Momentum" },
      { title: "Gyroscopes and Precession" },
    ],
  },
  {
    id: "equilibrium-materials",
    title: "Equilibrium and Materials",
    navLabel: "Equilibrium",
    topics: [
      { title: "Conditions for Static Equilibrium" },
      { title: "Center of Gravity" },
      { title: "Solving Rigid-Body Equilibrium" },
      { title: "Stress and Strain" },
      { title: "Elastic Moduli" },
      { title: "Elastic Versus Plastic Behavior" },
    ],
  },
  {
    id: "fluids",
    title: "Fluids",
    topics: [
      { title: "Density in Gases and Liquids" },
      { title: "Pressure in Fluids" },
      { title: "Buoyancy" },
      { title: "Fluid Flow" },
      { title: "Bernoulli Models" },
      { title: "Viscosity and Turbulence" },
    ],
  },
  {
    id: "gravitation",
    title: "Gravitation",
    navLabel: "Gravity",
    topics: [
      { title: "Universal Gravitation" },
      { title: "Weight in Gravitational Fields" },
      { title: "Gravitational Potential Energy" },
      { title: "Satellite Motion" },
      { title: "Kepler Models of Orbits" },
      { title: "Fields from Spherical Masses" },
      { title: "Apparent Weight on Earth" },
      { title: "Black Holes" },
    ],
  },
  {
    id: "oscillations",
    title: "Oscillations",
    topics: [
      { title: "Describing Oscillation" },
      { title: "Simple Harmonic Motion" },
      { title: "Energy in Oscillators" },
      { title: "Applications of Harmonic Motion" },
      { title: "Simple Pendulums" },
      { title: "Physical Pendulums" },
      { title: "Damping" },
      { title: "Driven Oscillations and Resonance" },
    ],
  },
  {
    id: "mechanical-waves",
    title: "Mechanical Waves",
    navLabel: "Waves",
    topics: [
      { title: "Types of Mechanical Waves" },
      { title: "Periodic Wave Patterns" },
      { title: "Mathematical Wave Descriptions" },
      { title: "Speed of Transverse Waves" },
      { title: "Energy Transport in Waves" },
      { title: "Superposition" },
      { title: "Boundary Conditions" },
      { title: "Standing Waves on Strings" },
      { title: "String Normal Modes" },
    ],
  },
  {
    id: "sound",
    title: "Sound",
    topics: [
      { title: "Sound as a Wave" },
      { title: "Speed of Sound" },
      { title: "Sound Intensity" },
      { title: "Standing Sound Waves" },
      { title: "Acoustic Resonance" },
      { title: "Interference in Sound" },
      { title: "Beats" },
      { title: "Doppler Shifts" },
      { title: "Shock Waves" },
    ],
  },
  {
    id: "temperature-heat",
    title: "Temperature and Heat",
    navLabel: "Heat",
    topics: [
      { title: "Temperature and Thermal Equilibrium" },
      { title: "Temperature Measurement Scales" },
      { title: "Gas Thermometers and Absolute Temperature" },
      { title: "Thermal Expansion" },
      { title: "Heat as Energy Transfer" },
      { title: "Calorimetry and Phase Change" },
      { title: "Heat Transfer Mechanisms" },
    ],
  },
  {
    id: "matter-thermal-scale",
    title: "Matter at Thermal Scale",
    navLabel: "Thermal Matter",
    topics: [
      { title: "Equations of State" },
      { title: "Molecular Properties of Matter" },
      { title: "Ideal Gas Model" },
      { title: "Heat Capacity" },
      { title: "Molecular Speeds" },
      { title: "Phases of Matter" },
    ],
  },
  {
    id: "first-law-thermodynamics",
    title: "First-Law Thermodynamics",
    navLabel: "First Law",
    topics: [
      { title: "Thermodynamic Systems" },
      { title: "Work During Volume Changes" },
      { title: "Paths Between States" },
      { title: "Internal Energy and the First Law" },
      { title: "Common Thermodynamic Processes" },
      { title: "Internal Energy of Ideal Gases" },
      { title: "Heat Capacity of Ideal Gases" },
      { title: "Adiabatic Ideal-Gas Processes" },
    ],
  },
  {
    id: "entropy-heat-engines",
    title: "Entropy and Heat Engines",
    navLabel: "Entropy",
    topics: [
      { title: "Direction of Thermodynamic Processes" },
      { title: "Heat Engines" },
      { title: "Internal-Combustion Engines" },
      { title: "Refrigerators and Heat Pumps" },
      { title: "Second Law Statements" },
      { title: "Carnot Cycle" },
      { title: "Entropy" },
      { title: "Microscopic View of Entropy" },
    ],
  },
  {
    id: "electric-charge-fields",
    title: "Electric Charge and Fields",
    navLabel: "Electric Fields",
    topics: [
      { title: "Electric Charge" },
      { title: "Conductors and Insulators" },
      { title: "Charge Induction" },
      { title: "Coulomb Forces" },
      { title: "Electric Fields and Forces" },
      { title: "Calculating Electric Fields" },
      { title: "Field Line Representations" },
      { title: "Electric Dipoles" },
    ],
  },
  {
    id: "gausss-law",
    title: "Gauss's Law",
    navLabel: "Gauss's Law",
    topics: [
      { title: "Charge and Electric Flux" },
      { title: "Computing Electric Flux" },
      { title: "Gauss's Law" },
      { title: "Symmetry Applications of Gauss's Law" },
      { title: "Charge on Conductors" },
    ],
  },
  {
    id: "electric-potential",
    title: "Electric Potential",
    topics: [
      { title: "Electric Potential Energy" },
      { title: "Electric Potential" },
      { title: "Calculating Potential" },
      { title: "Equipotential Surfaces" },
      { title: "Potential Gradients" },
    ],
  },
  {
    id: "capacitors-dielectrics",
    title: "Capacitors and Dielectrics",
    navLabel: "Capacitors",
    topics: [
      { title: "Capacitance" },
      { title: "Series and Parallel Capacitors" },
      { title: "Stored Energy and Field Energy" },
      { title: "Dielectrics" },
      { title: "Molecular View of Induced Charge" },
      { title: "Gauss's Law in Materials" },
    ],
  },
  {
    id: "current-resistance",
    title: "Current and Resistance",
    navLabel: "Current",
    topics: [
      { title: "Electric Current" },
      { title: "Resistivity" },
      { title: "Resistance" },
      { title: "emf and Circuit Models" },
      { title: "Electric Power" },
      { title: "Microscopic Model of Conduction" },
    ],
  },
  {
    id: "dc-circuits",
    title: "DC Circuits",
    topics: [
      { title: "Series and Parallel Resistor Networks" },
      { title: "Kirchhoff Analysis" },
      { title: "Electrical Meters" },
      { title: "RC Transients" },
      { title: "Power Distribution" },
    ],
  },
  {
    id: "magnetic-fields-forces",
    title: "Magnetic Fields and Forces",
    navLabel: "Magnetic Forces",
    topics: [
      { title: "Magnetism Basics" },
      { title: "Magnetic Fields" },
      { title: "Magnetic Flux" },
      { title: "Magnetic Field Lines" },
      { title: "Charged Particles in Magnetic Fields" },
      { title: "Particle Motion Applications" },
      { title: "Forces on Current-Carrying Conductors" },
      { title: "Torque on Current Loops" },
      { title: "DC Motors" },
      { title: "Hall Effect" },
    ],
  },
  {
    id: "magnetic-field-sources",
    title: "Sources of Magnetic Fields",
    navLabel: "Field Sources",
    topics: [
      { title: "Fields from Moving Charges" },
      { title: "Biot-Savart for Current Elements" },
      { title: "Fields Around Straight Currents" },
      { title: "Forces Between Parallel Currents" },
      { title: "Fields from Current Loops" },
      { title: "Ampere's Law" },
      { title: "Symmetry Applications of Ampere's Law" },
      { title: "Magnetic Materials" },
    ],
  },
  {
    id: "electromagnetic-induction",
    title: "Electromagnetic Induction",
    navLabel: "Induction",
    topics: [
      { title: "Induction Observations" },
      { title: "Faraday's Law" },
      { title: "Lenz's Law" },
      { title: "Motional emf" },
      { title: "Induced Electric Fields" },
      { title: "Eddy Currents" },
      { title: "Displacement Current" },
      { title: "Maxwell's Equations" },
      { title: "Superconductivity" },
    ],
  },
  {
    id: "inductance",
    title: "Inductance",
    topics: [
      { title: "Mutual Inductance" },
      { title: "Self-Inductance and Inductors" },
      { title: "Magnetic Field Energy" },
      { title: "RL Transients" },
      { title: "LC Oscillations" },
      { title: "LRC Series Circuits" },
    ],
  },
  {
    id: "alternating-current",
    title: "Alternating Current",
    navLabel: "AC Circuits",
    topics: [
      { title: "Phasors and AC Signals" },
      { title: "Resistance and Reactance" },
      { title: "LRC Series Circuits in AC" },
      { title: "Power in AC Circuits" },
      { title: "Resonance in AC Circuits" },
      { title: "Transformers" },
    ],
  },
  {
    id: "electromagnetic-waves",
    title: "Electromagnetic Waves",
    navLabel: "EM Waves",
    topics: [
      { title: "Maxwell's Equations to Waves" },
      { title: "Plane Waves and Light Speed" },
      { title: "Sinusoidal Electromagnetic Waves" },
      { title: "Energy and Momentum in Electromagnetic Waves" },
      { title: "Standing Electromagnetic Waves" },
    ],
  },
  {
    id: "light-propagation",
    title: "Light Propagation",
    navLabel: "Light",
    topics: [
      { title: "Nature of Light" },
      { title: "Reflection and Refraction" },
      { title: "Total Internal Reflection" },
      { title: "Dispersion" },
      { title: "Polarization" },
      { title: "Scattering" },
      { title: "Huygens Principle" },
    ],
  },
  {
    id: "geometric-optics",
    title: "Geometric Optics",
    navLabel: "Optics",
    topics: [
      { title: "Plane-Surface Reflection" },
      { title: "Plane-Surface Refraction" },
      { title: "Spherical Mirrors" },
      { title: "Spherical Refraction" },
      { title: "Thin Lenses" },
      { title: "Cameras" },
      { title: "The Eye" },
      { title: "Magnifiers" },
      { title: "Microscopes" },
      { title: "Telescopes" },
    ],
  },
  {
    id: "interference",
    title: "Interference",
    topics: [
      { title: "Coherence and Interference" },
      { title: "Two-Source Light Interference" },
      { title: "Intensity in Interference Patterns" },
      { title: "Thin-Film Interference" },
      { title: "Michelson Interferometer" },
    ],
  },
  {
    id: "diffraction",
    title: "Diffraction",
    navLabel: "Diffraction",
    topics: [
      { title: "Fresnel and Fraunhofer Regimes" },
      { title: "Single-Slit Diffraction" },
      { title: "Intensity in Single-Slit Patterns" },
      { title: "Multiple-Slit Patterns" },
      { title: "Diffraction Gratings" },
      { title: "X-Ray Diffraction" },
      { title: "Circular Apertures and Resolution" },
      { title: "Holography" },
    ],
  },
  {
    id: "relativity",
    title: "Relativity",
    topics: [
      { title: "Invariance of Physical Laws" },
      { title: "Simultaneity" },
      { title: "Time Dilation" },
      { title: "Length Contraction" },
      { title: "Lorentz Transformations" },
      { title: "Relativistic Doppler Effect" },
      { title: "Relativistic Momentum" },
      { title: "Relativistic Work and Energy" },
      { title: "Newtonian Limits" },
    ],
  },
  {
    id: "photons",
    title: "Photons",
    topics: [
      { title: "Photoelectric Effect" },
      { title: "X-Ray Production" },
      { title: "Compton Scattering" },
      { title: "Pair Production" },
      { title: "Wave-Particle Duality" },
      { title: "Uncertainty Principle" },
    ],
  },
  {
    id: "matter-waves",
    title: "Matter Waves",
    topics: [
      { title: "Electron Waves" },
      { title: "Nuclear Atom" },
      { title: "Atomic Spectra" },
      { title: "Bohr Energy Levels" },
      { title: "Lasers" },
      { title: "Continuous Spectra" },
      { title: "Uncertainty Revisited" },
    ],
  },
  {
    id: "quantum-wave-functions",
    title: "Quantum Wave Functions",
    navLabel: "Wave Functions",
    topics: [
      { title: "Wave Functions" },
      { title: "One-Dimensional Schrodinger Equation" },
      { title: "Particle in a Box" },
      { title: "Potential Wells" },
      { title: "Potential Barriers and Tunneling" },
      { title: "Harmonic Oscillator" },
      { title: "Measurement in Quantum Mechanics" },
    ],
  },
  {
    id: "atomic-quantum-structure",
    title: "Atomic Quantum Structure",
    navLabel: "Atomic Structure",
    topics: [
      { title: "Three-Dimensional Schrodinger Equation" },
      { title: "Particle in a Three-Dimensional Box" },
      { title: "Hydrogen Atom" },
      { title: "Zeeman Effect" },
      { title: "Electron Spin" },
      { title: "Many-Electron Atoms" },
      { title: "Exclusion Principle" },
      { title: "X-Ray Spectra" },
      { title: "Quantum Entanglement" },
    ],
  },
  {
    id: "molecules-condensed-matter",
    title: "Molecules and Condensed Matter",
    navLabel: "Matter",
    topics: [
      { title: "Molecular Bond Types" },
      { title: "Molecular Spectra" },
      { title: "Crystal Structures" },
      { title: "Energy Bands" },
      { title: "Free-Electron Model of Metals" },
      { title: "Semiconductors" },
      { title: "Semiconductor Devices" },
      { title: "Superconductivity in Materials" },
    ],
  },
  {
    id: "nuclear-physics",
    title: "Nuclear Physics",
    navLabel: "Nuclear",
    topics: [
      { title: "Nuclear Properties" },
      { title: "Binding Energy" },
      { title: "Nuclear Structure" },
      { title: "Nuclear Stability" },
      { title: "Radioactivity" },
      { title: "Activity and Half-Life" },
      { title: "Biological Effects of Radiation" },
      { title: "Nuclear Reactions" },
      { title: "Fission" },
      { title: "Fusion" },
    ],
  },
  {
    id: "particles-cosmology",
    title: "Particles and Cosmology",
    navLabel: "Particles",
    topics: [
      { title: "History of Fundamental Particles" },
      { title: "Accelerators and Detectors" },
      { title: "Particle Families" },
      { title: "Fundamental Interactions" },
      { title: "Quarks and Gluons" },
      { title: "Standard Model" },
      { title: "Open Questions" },
      { title: "Expanding Universe" },
      { title: "Early Universe" },
    ],
  },
];

const level1PhysicsTopicLabels = new Map<string, string>([
  ["How Physics Builds Models", "Physics Models"],
  ["A Reliable Problem-Solving Process", "Problem Solving"],
  ["Units and Measurement Standards", "Units"],
  ["Unit Conversion Without Guesswork", "Unit Conversion"],
  ["Estimation and Scale Sense", "Estimation"],
  ["Adding Vectors Geometrically", "Vector Addition"],
  ["Resolving Vectors into Components", "Components"],
  ["Position and Velocity Vectors", "Position Vectors"],
  ["Acceleration as a Rate of Change", "Acceleration"],
  ["Constant-Acceleration Models", "Constant Accel."],
  ["Position and Velocity from Calculus", "Calculus Motion"],
  ["Force, Mass, and Acceleration", "F = ma"],
  ["Action-Reaction Pairs", "Action-Reaction"],
  ["Drawing Free-Body Diagrams", "Free-Body Diagrams"],
  ["Equilibrium with Newton's First Law", "Equilibrium"],
  ["Particle Dynamics with Newton's Second Law", "Particle Dynamics"],
  ["Dynamics of Circular Motion", "Circular Dynamics"],
  ["Four Fundamental Interactions", "Fundamental Forces"],
  ["Kinetic Energy and the Work-Energy Principle", "Work-Energy"],
  ["Energy Transfer with Variable Forces", "Variable Forces"],
  ["Gravitational Potential Energy", "Grav. Potential"],
  ["Elastic Potential Energy", "Elastic Potential"],
  ["Force from Potential Energy", "Force from Potential"],
  ["Collisions as Momentum Problems", "Collisions"],
  ["Angular Acceleration", "Angular Accel."],
  ["Constant Angular Acceleration", "Constant Angular Accel."],
  ["Connecting Linear and Angular Motion", "Linear-Angular"],
  ["Calculating Moments of Inertia", "Moment of Inertia"],
  ["Torque and Angular Acceleration", "Torque Dynamics"],
  ["Rotation About Moving Axes", "Moving Axes"],
  ["Conserving Angular Momentum", "Angular Momentum"],
  ["Conditions for Static Equilibrium", "Static Conditions"],
  ["Solving Rigid-Body Equilibrium", "Rigid Equilibrium"],
  ["Elastic Versus Plastic Behavior", "Elastic vs Plastic"],
  ["Density in Gases and Liquids", "Density"],
  ["Weight in Gravitational Fields", "Weight"],
  ["Kepler Models of Orbits", "Kepler Models"],
  ["Fields from Spherical Masses", "Spherical Masses"],
  ["Apparent Weight on Earth", "Apparent Weight"],
  ["Applications of Harmonic Motion", "SHM Applications"],
  ["Driven Oscillations and Resonance", "Driven Resonance"],
  ["Types of Mechanical Waves", "Wave Types"],
  ["Mathematical Wave Descriptions", "Wave Equations"],
  ["Speed of Transverse Waves", "Wave Speed"],
  ["Energy Transport in Waves", "Wave Energy"],
  ["Standing Waves on Strings", "Standing Waves"],
  ["Standing Sound Waves", "Standing Waves"],
  ["Temperature and Thermal Equilibrium", "Thermal Equilibrium"],
  ["Gas Thermometers and Absolute Temperature", "Absolute Temp."],
  ["Heat as Energy Transfer", "Heat Transfer"],
  ["Calorimetry and Phase Change", "Calorimetry"],
  ["Molecular Properties of Matter", "Molecular Matter"],
  ["Internal Energy and the First Law", "Internal Energy"],
  ["Common Thermodynamic Processes", "Thermo Processes"],
  ["Internal Energy of Ideal Gases", "Ideal Gas Energy"],
  ["Heat Capacity of Ideal Gases", "Gas Heat Capacity"],
  ["Adiabatic Ideal-Gas Processes", "Adiabatic Processes"],
  ["Direction of Thermodynamic Processes", "Process Direction"],
  ["Internal-Combustion Engines", "Combustion Engines"],
  ["Refrigerators and Heat Pumps", "Refrigerators"],
  ["Microscopic View of Entropy", "Entropy Microstates"],
  ["Conductors and Insulators", "Materials"],
  ["Electric Fields and Forces", "Field Forces"],
  ["Calculating Electric Fields", "Field Calculations"],
  ["Field Line Representations", "Field Lines"],
  ["Charge and Electric Flux", "Electric Flux"],
  ["Symmetry Applications of Gauss's Law", "Gauss Applications"],
  ["Electric Potential Energy", "Potential Energy"],
  ["Equipotential Surfaces", "Equipotentials"],
  ["Series and Parallel Capacitors", "Capacitor Networks"],
  ["Stored Energy and Field Energy", "Stored Energy"],
  ["Molecular View of Induced Charge", "Induced Charge"],
  ["emf and Circuit Models", "emf"],
  ["Microscopic Model of Conduction", "Conduction Model"],
  ["Series and Parallel Resistor Networks", "Resistor Networks"],
  ["Charged Particles in Magnetic Fields", "Charged Particles"],
  ["Particle Motion Applications", "Motion Applications"],
  ["Forces on Current-Carrying Conductors", "Current Forces"],
  ["Fields from Moving Charges", "Moving Charges"],
  ["Biot-Savart for Current Elements", "Biot-Savart"],
  ["Fields Around Straight Currents", "Straight Currents"],
  ["Forces Between Parallel Currents", "Parallel Currents"],
  ["Symmetry Applications of Ampere's Law", "Ampere Applications"],
  ["Induction Observations", "Induction"],
  ["Magnetic Field Energy", "Magnetic Energy"],
  ["LRC Series Circuits", "LRC Circuits"],
  ["Phasors and AC Signals", "Phasors"],
  ["LRC Series Circuits in AC", "AC LRC Circuits"],
  ["Power in AC Circuits", "AC Power"],
  ["Resonance in AC Circuits", "AC Resonance"],
  ["Maxwell's Equations to Waves", "Maxwell to Waves"],
  ["Plane Waves and Light Speed", "Plane Waves"],
  ["Sinusoidal Electromagnetic Waves", "Sinusoidal Waves"],
  ["Energy and Momentum in Electromagnetic Waves", "EM Energy"],
  ["Standing Electromagnetic Waves", "Standing EM Waves"],
  ["Total Internal Reflection", "Internal Reflection"],
  ["Huygens Principle", "Huygens"],
  ["Plane-Surface Reflection", "Plane Reflection"],
  ["Plane-Surface Refraction", "Plane Refraction"],
  ["Fresnel and Fraunhofer Regimes", "Diffraction Regimes"],
  ["Intensity in Single-Slit Patterns", "Single-Slit Intensity"],
  ["Circular Apertures and Resolution", "Resolution"],
  ["Invariance of Physical Laws", "Invariance"],
  ["Relativity of Time Intervals", "Time Dilation"],
  ["Relativity of Length", "Length Contraction"],
  ["Relativistic Work and Energy", "Relativistic Energy"],
  ["X-Ray Production", "X-Rays"],
  ["One-Dimensional Schrodinger Equation", "Schrodinger 1D"],
  ["Three-Dimensional Schrodinger Equation", "Schrodinger 3D"],
  ["Particle in a Three-Dimensional Box", "3D Box"],
  ["Superconductivity in Materials", "Superconductivity"],
  ["Biological Effects of Radiation", "Radiation Effects"],
  ["History of Fundamental Particles", "Particle History"],
  ["Accelerators and Detectors", "Detectors"],
]);

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createEditorialPage({
  slug,
  title,
  description,
  navLabel,
  category,
  order,
  headings = [],
  body = "",
  badges = [],
}: {
  slug: string[];
  title: string;
  description: string;
  navLabel?: string;
  category: string;
  order: number;
  headings?: DocHeading[];
  body?: string;
  badges?: string[];
}): DocPage {
  const href = slug.length ? `/${slug.join("/")}` : "/";

  return {
    slug,
    href,
    title,
    description,
    navLabel: navLabel ?? title,
    section: "Academy",
    category,
    headings,
    kind: "editorial",
    order,
    badges,
    body,
    demos: [],
  };
}

function getLevel1PhysicsTopicSlug(
  section: Level1PhysicsSection,
  topic: Level1PhysicsTopic,
) {
  return ["level-1-physics", section.id, slugify(topic.title)];
}

function getCourseExamPapersSlug(course: CourseMeta) {
  return [...course.slug, "exam-papers"];
}

function getCourseFlashcardsSlug(course: CourseMeta) {
  return [...course.slug, "flashcards"];
}

function getLevel1MathIPhysicsTopicSlug(
  section: CourseSection,
  topic: CourseTopic,
) {
  return ["level-1-math-i-physics", section.id, slugify(topic.title)];
}

function getLevel1MathIPhysicsQuestionsSlug() {
  return ["level-1-math-i-physics", "questions"];
}

function getLevel1MathIPhysicsEquationSheetSlug() {
  return ["level-1-math-i-physics", "equation-sheet"];
}

function getLevel1MathIIPhysicsTopicSlug(
  section: CourseSection,
  topic: CourseTopic,
) {
  return ["level-1-math-ii-physics", section.id, slugify(topic.title)];
}

function getLevel1MathIIPhysicsQuestionsSlug() {
  return ["level-1-math-ii-physics", "questions"];
}

function getLevel1MathIIPhysicsEquationSheetSlug() {
  return ["level-1-math-ii-physics", "equation-sheet"];
}

function getLevel1PhysicsQuestionsSlug() {
  return ["level-1-physics", "questions"];
}

function getLevel1PhysicsEquationSheetSlug() {
  return ["level-1-physics", "equation-sheet"];
}

function getLevel1PhysicsExamPaperSlug(setId: string, paperId: string) {
  return ["level-1-physics", "exam-papers", setId, paperId];
}

function getLevel1MathIPhysicsExamPaperSlug(setId: string, paperId: string) {
  return ["level-1-math-i-physics", "exam-papers", setId, paperId];
}

export function getCourseExamPapersHref(course: CourseMeta) {
  return `/${getCourseExamPapersSlug(course).join("/")}`;
}

export function getLevel1PhysicsQuestionsHref() {
  return `/${getLevel1PhysicsQuestionsSlug().join("/")}`;
}

export function getLevel1PhysicsEquationSheetHref() {
  return `/${getLevel1PhysicsEquationSheetSlug().join("/")}`;
}

export type Level1PhysicsQuestionTopicOption = {
  kind: "section" | "topic";
  label: string;
  sectionId: string;
  sectionLabel: string;
  value: string;
};

const sectionsByCourseScope = new Map<CourseScope, CourseSection[]>([
  ["level-1-math-i-physics", level1MathIPhysicsSections],
  ["level-1-math-ii-physics", level1MathIIPhysicsSections],
  ["level-1-physics", level1PhysicsSections],
]);

export function getCourseQuestionTopicOptions(
  scope: CourseScope,
): Level1PhysicsQuestionTopicOption[] {
  const sections = sectionsByCourseScope.get(scope) ?? [];

  return sections.flatMap((section) => {
    const sectionLabel = section.navLabel ?? section.title;

    return [
      {
        kind: "section" as const,
        label: sectionLabel,
        sectionId: section.id,
        sectionLabel,
        value: `section:${section.id}`,
      },
      ...section.topics.map((topic) => ({
        kind: "topic" as const,
        label: topic.navLabel ?? topic.title,
        sectionId: section.id,
        sectionLabel,
        value: `topic:${slugify(topic.title)}`,
      })),
    ];
  });
}

export function getLevel1PhysicsQuestionTopicOptions(): Level1PhysicsQuestionTopicOption[] {
  return getCourseQuestionTopicOptions("level-1-physics");
}

const courseIntroContent = new Map<
  CourseScope,
  { body: string; headings: DocHeading[] }
>([
  [
    "level-1-math-i-physics",
    {
      body: level1MathIPhysicsCourseIntroBody,
      headings: level1MathIPhysicsCourseIntroHeadings,
    },
  ],
  [
    "level-1-math-ii-physics",
    {
      body: level1MathIIPhysicsCourseIntroBody,
      headings: level1MathIIPhysicsCourseIntroHeadings,
    },
  ],
  [
    "level-1-physics",
    {
      body: level1PhysicsCourseIntroBody,
      headings: level1PhysicsCourseIntroHeadings,
    },
  ],
]);

const courseIntroPages = academyCourses.map((course, index) =>
  createEditorialPage({
    slug: course.slug,
    title: course.label,
    description: course.description,
    category: course.label,
    order: 10 + index * 10,
    headings: courseIntroContent.get(course.scope)?.headings,
    body: courseIntroContent.get(course.scope)?.body,
    badges: ["Course"],
  }),
);

const courseExamPaperPages = academyCourses.map((course, index) =>
  createEditorialPage({
    slug: getCourseExamPapersSlug(course),
    title: `${course.label} Exam Papers`,
    navLabel: "Exam Papers",
    description: `Exam papers for ${course.label}.`,
    category: course.label,
    order: 50 + index * 10,
    badges: ["Exam Papers"],
  }),
);

const courseFlashcardsPages = academyCourses.map((course, index) =>
  createEditorialPage({
    slug: getCourseFlashcardsSlug(course),
    title: "Flashcards",
    navLabel: "Flashcards",
    description: `Flashcards for ${course.label}.`,
    category: course.label,
    order: 47 + index * 10,
    badges: ["Flashcards"],
  }),
);

const level1MathIPhysicsQuestionsPage = createEditorialPage({
  slug: getLevel1MathIPhysicsQuestionsSlug(),
  title: "Questions",
  description: "Random Level 1 - Math I (Physics) questions with filters.",
  category: "Level 1 - Math I (Physics)",
  order: 45,
  badges: ["Questions"],
});

const level1MathIPhysicsEquationSheetPage = createEditorialPage({
  slug: getLevel1MathIPhysicsEquationSheetSlug(),
  title: "Equation Sheet",
  description:
    "A curated Level 1 - Math I (Physics) formula reference with a print-ready PDF view.",
  category: "Level 1 - Math I (Physics)",
  order: 46,
  badges: ["Equation Sheet"],
});

const level1MathIIPhysicsQuestionsPage = createEditorialPage({
  slug: getLevel1MathIIPhysicsQuestionsSlug(),
  title: "Questions",
  description: "Random Level 1 - Math II (Physics) questions with filters.",
  category: "Level 1 - Math II (Physics)",
  order: 55,
  badges: ["Questions"],
});

const level1MathIIPhysicsEquationSheetPage = createEditorialPage({
  slug: getLevel1MathIIPhysicsEquationSheetSlug(),
  title: "Equation Sheet",
  description:
    "A Level 1 - Math II (Physics) formula reference will appear here once the sheet is written.",
  category: "Level 1 - Math II (Physics)",
  order: 56,
  badges: ["Equation Sheet"],
});

const level1PhysicsQuestionsPage = createEditorialPage({
  slug: getLevel1PhysicsQuestionsSlug(),
  title: "Questions",
  description: "Random Level 1 - Physics questions with filters.",
  category: "Level 1 - Physics",
  order: 95,
  badges: ["Questions"],
});

const level1PhysicsEquationSheetPage = createEditorialPage({
  slug: getLevel1PhysicsEquationSheetSlug(),
  title: "Equation Sheet",
  description:
    "A curated Level 1 - Physics formula reference with a print-ready PDF view.",
  category: "Level 1 - Physics",
  order: 96,
  badges: ["Equation Sheet"],
});

const level1PhysicsExamPaperPages = level1PhysicsExamSets.flatMap(
  (set, setIndex) =>
    set.papers.map((paper, paperIndex) =>
      createEditorialPage({
        slug: getLevel1PhysicsExamPaperSlug(set.id, paper.id),
        title: `${set.label}: ${paper.label}`,
        navLabel: paper.label,
        description: paper.description,
        category: "Level 1 - Physics",
        order: 5000 + setIndex * 20 + paperIndex,
        badges: ["Exam Paper", set.label],
      }),
    ),
);

const level1MathIPhysicsExamPaperPages = level1MathIPhysicsExamSets.flatMap(
  (set, setIndex) =>
    set.papers.map((paper, paperIndex) =>
      createEditorialPage({
        slug: getLevel1MathIPhysicsExamPaperSlug(set.id, paper.id),
        title: `${set.label}: ${paper.label}`,
        navLabel: paper.label,
        description: paper.description,
        category: "Level 1 - Math I (Physics)",
        order: 4000 + setIndex * 20 + paperIndex,
        badges: ["Exam Paper", set.label],
      }),
    ),
);

const level1MathIPhysicsTopicPages = level1MathIPhysicsSections.flatMap(
  (section, sectionIndex) =>
    section.topics.map((topic, topicIndex) =>
      createEditorialPage({
        slug: getLevel1MathIPhysicsTopicSlug(section, topic),
        title: topic.title,
        navLabel: topic.navLabel ?? topic.title,
        description: `Level 1 - Math I (Physics) topic page in ${section.title}.`,
        category: "Level 1 - Math I (Physics)",
        order: 1000 + sectionIndex * 100 + topicIndex,
        badges: [section.title],
        body: getLevel1MathIPhysicsTopicBody(section.id, topic.title),
      }),
    ),
);

const level1MathIIPhysicsTopicPages = level1MathIIPhysicsSections.flatMap(
  (section, sectionIndex) =>
    section.topics.map((topic, topicIndex) =>
      createEditorialPage({
        slug: getLevel1MathIIPhysicsTopicSlug(section, topic),
        title: topic.title,
        navLabel: topic.navLabel ?? topic.title,
        description: `Level 1 - Math II (Physics) topic page in ${section.title}.`,
        category: "Level 1 - Math II (Physics)",
        order: 2000 + sectionIndex * 100 + topicIndex,
        badges: [section.title],
        body: level1MathIIPhysicsTopicBodies.get(topic.title),
      }),
    ),
);

const level1PhysicsTopicPages = level1PhysicsSections.flatMap(
  (section, sectionIndex) =>
    section.topics.map((topic, topicIndex) =>
      createEditorialPage({
        slug: getLevel1PhysicsTopicSlug(section, topic),
        title: topic.title,
        navLabel:
          topic.navLabel ??
          level1PhysicsTopicLabels.get(topic.title) ??
          topic.title,
        description: `Level 1 - Physics topic page in ${section.title}.`,
        category: "Level 1 - Physics",
        order: 1000 + sectionIndex * 100 + topicIndex,
        badges: [section.title],
        body: level1PhysicsTopicBodies.get(topic.title),
      }),
    ),
);

export const docsPages: DocPage[] = [
  createEditorialPage({
    slug: [],
    title: "Fera Academy",
    navLabel: "Overview",
    description: "Choose a course and open its topic outline.",
    category: "Overview",
    order: 0,
    badges: ["Courses"],
  }),
  ...courseIntroPages,
  level1MathIPhysicsQuestionsPage,
  level1MathIIPhysicsQuestionsPage,
  level1PhysicsQuestionsPage,
  ...courseFlashcardsPages,
  level1MathIPhysicsEquationSheetPage,
  level1MathIIPhysicsEquationSheetPage,
  level1PhysicsEquationSheetPage,
  ...courseExamPaperPages,
  ...level1MathIPhysicsExamPaperPages,
  ...level1PhysicsExamPaperPages,
  ...level1MathIPhysicsTopicPages,
  ...level1MathIIPhysicsTopicPages,
  ...level1PhysicsTopicPages,
];

const academyOverviewSections: DocSectionMeta[] = [
  {
    id: "courses",
    title: "Courses",
    defaultOpen: true,
    slugs: academyCourses.map((course) => course.slug),
  },
];

export function getCourseByScope(scope: CourseScope) {
  const course = academyCourses.find((entry) => entry.scope === scope);

  if (!course) {
    throw new Error(`Missing course metadata for ${scope}`);
  }

  return course;
}

const level1MathIPhysicsSidebarSections: DocSectionMeta[] = [
  {
    id: "level-1-math-i-physics-content",
    title: "Content",
    defaultOpen: true,
    slugs: [
      ["level-1-math-i-physics"],
      getCourseExamPapersSlug(getCourseByScope("level-1-math-i-physics")),
      getLevel1MathIPhysicsQuestionsSlug(),
      getCourseFlashcardsSlug(getCourseByScope("level-1-math-i-physics")),
      getLevel1MathIPhysicsEquationSheetSlug(),
    ],
  },
  {
    id: "level-1-math-i-physics-sections",
    title: "Course Sections",
    defaultOpen: true,
    children: level1MathIPhysicsSections.map((section) => ({
      id: `level-1-math-i-physics-${section.id}`,
      title: section.navLabel ?? section.title,
      slugs: section.topics.map((topic) =>
        getLevel1MathIPhysicsTopicSlug(section, topic),
      ),
    })),
  },
];

const level1MathIIPhysicsSidebarSections: DocSectionMeta[] = [
  {
    id: "level-1-math-ii-physics-content",
    title: "Content",
    defaultOpen: true,
    slugs: [
      ["level-1-math-ii-physics"],
      getCourseExamPapersSlug(getCourseByScope("level-1-math-ii-physics")),
      getLevel1MathIIPhysicsQuestionsSlug(),
      getCourseFlashcardsSlug(getCourseByScope("level-1-math-ii-physics")),
      getLevel1MathIIPhysicsEquationSheetSlug(),
    ],
  },
  {
    id: "level-1-math-ii-physics-sections",
    title: "Course Sections",
    defaultOpen: true,
    children: level1MathIIPhysicsSections.map((section) => ({
      id: `level-1-math-ii-physics-${section.id}`,
      title: section.navLabel ?? section.title,
      slugs: section.topics.map((topic) =>
        getLevel1MathIIPhysicsTopicSlug(section, topic),
      ),
    })),
  },
];

function createCourseSidebarPages(scope: CourseScope) {
  return docsPages.map((page) => {
    if (page.slug.length === 1 && page.slug[0] === scope) {
      return { ...page, navLabel: "Course" };
    }

    if (
      page.slug.length === 2 &&
      page.slug[0] === scope &&
      page.slug[1] === "exam-papers"
    ) {
      return { ...page, navLabel: "Exams" };
    }

    return page;
  });
}

const level1PhysicsSidebarSections: DocSectionMeta[] = [
  {
    id: "level-1-physics-content",
    title: "Content",
    defaultOpen: true,
    slugs: [
      ["level-1-physics"],
      getCourseExamPapersSlug(getCourseByScope("level-1-physics")),
      getLevel1PhysicsQuestionsSlug(),
      getCourseFlashcardsSlug(getCourseByScope("level-1-physics")),
      getLevel1PhysicsEquationSheetSlug(),
    ],
  },
  {
    id: "level-1-physics-sections",
    title: "Course Sections",
    defaultOpen: true,
    children: level1PhysicsSections.map((section) => ({
      id: `level-1-physics-${section.id}`,
      title: section.navLabel ?? section.title,
      slugs: section.topics.map((topic) =>
        getLevel1PhysicsTopicSlug(section, topic),
      ),
    })),
  },
];

const level1MathIPhysicsSidebarPages = createCourseSidebarPages(
  "level-1-math-i-physics",
);
const level1MathIIPhysicsSidebarPages = createCourseSidebarPages(
  "level-1-math-ii-physics",
);
const level1PhysicsSidebarPages = createCourseSidebarPages("level-1-physics");

const docsTreesByScope: Record<
  "academy" | CourseScope,
  ReturnType<typeof createDocsTree>
> = {
  academy: createDocsTree(academyOverviewSections, docsPages),
  "level-1-math-i-physics": createDocsTree(
    level1MathIPhysicsSidebarSections,
    level1MathIPhysicsSidebarPages,
  ),
  "level-1-math-ii-physics": createDocsTree(
    level1MathIIPhysicsSidebarSections,
    level1MathIIPhysicsSidebarPages,
  ),
  "level-1-physics": createDocsTree(
    level1PhysicsSidebarSections,
    level1PhysicsSidebarPages,
  ),
};

export type AcademySidebarScope = keyof typeof docsTreesByScope;

export const docsTree = docsTreesByScope.academy;
export const searchIndex = buildSearchIndex(docsPages);

export function resolveDocPage(slug: string[]) {
  return getDocBySlug(docsPages, slug);
}

export function resolveSidebarScopeFromSlug(
  slug: string[],
): AcademySidebarScope {
  const [root] = slug;

  if (root && root in docsTreesByScope) {
    return root as AcademySidebarScope;
  }

  return "academy";
}

export function resolveSidebarScopeFromPath(
  pathname: string,
): AcademySidebarScope {
  const [root] = pathname.split("/").filter(Boolean);

  if (root && root in docsTreesByScope) {
    return root as AcademySidebarScope;
  }

  return "academy";
}

export function getDocsTreeForScope(scope: AcademySidebarScope) {
  return docsTreesByScope[scope];
}

export function isCourseExamPapersPage(page: DocPage) {
  return (
    page.slug.length === 2 &&
    page.slug[1] === "exam-papers" &&
    academyCourses.some((course) => course.scope === page.slug[0])
  );
}

export function isCourseExamPaperPage(page: DocPage) {
  return (
    page.slug.length === 4 &&
    page.slug[1] === "exam-papers" &&
    academyCourses.some((course) => course.scope === page.slug[0])
  );
}

export function isLevel1PhysicsQuestionsPage(page: DocPage) {
  return isCourseQuestionsPage(page) && page.slug[0] === "level-1-physics";
}

export function isCourseQuestionsPage(page: DocPage) {
  return (
    page.slug.length === 2 &&
    page.slug[1] === "questions" &&
    academyCourses.some((course) => course.scope === page.slug[0])
  );
}

export function isCourseFlashcardsPage(page: DocPage) {
  return (
    page.slug.length === 2 &&
    page.slug[1] === "flashcards" &&
    academyCourses.some((course) => course.scope === page.slug[0])
  );
}

export function isLevel1PhysicsEquationSheetPage(page: DocPage) {
  return (
    page.slug.length === 2 &&
    page.slug[0] === "level-1-physics" &&
    page.slug[1] === "equation-sheet"
  );
}

export function isCourseEquationSheetPage(page: DocPage) {
  return (
    page.slug.length === 2 &&
    page.slug[1] === "equation-sheet" &&
    academyCourses.some((course) => course.scope === page.slug[0])
  );
}

export function getCourseBySlug(slug: string[]) {
  const [root] = slug;

  return academyCourses.find((course) => course.scope === root);
}

export function isLevel1PhysicsTopicPage(page: DocPage) {
  return isCourseTopicPage(page) && page.slug[0] === "level-1-physics";
}

export function isCourseTopicPage(page: DocPage) {
  return (
    page.slug.length === 3 &&
    academyCourses.some((course) => course.scope === page.slug[0]) &&
    !page.slug.includes("exam-papers") &&
    !page.slug.includes("questions") &&
    !page.slug.includes("equation-sheet")
  );
}

export function getCourseQuestionHref(page: DocPage) {
  return `${page.href}?questions=1`;
}

export function getLevel1PhysicsQuestionHref(page: DocPage) {
  return getCourseQuestionHref(page);
}
