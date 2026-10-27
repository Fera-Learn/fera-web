export type Level2PhysicsBTopic = {
  navLabel?: string;
  title: string;
};

export type Level2PhysicsBSection = {
  id: string;
  navLabel?: string;
  title: string;
  topics: Level2PhysicsBTopic[];
};

export type Level2PhysicsBModule = {
  id: string;
  sections: Level2PhysicsBSection[];
  title: string;
};

export const level2PhysicsBModules: Level2PhysicsBModule[] = [
  {
    id: "condensed-matter-physics",
    title: "Condensed Matter Physics",
    sections: [
      {
        id: "condensed-matter-overview",
        title: "Condensed Matter Overview",
        navLabel: "Overview",
        topics: [
          { title: "States of Matter and the Water Phase Diagram" },
          { title: "Scope and Methods of Condensed Matter Physics" },
          { title: "Ordered States and Quantum Fluids" },
          { title: "Soft Matter" },
          { title: "History, Semiconductors, and Moore's Law" },
        ],
      },
      {
        id: "crystal-lattices-and-symmetry",
        title: "Crystal Lattices and Symmetry",
        navLabel: "Lattices and Symmetry",
        topics: [
          { title: "Crystals, Periodicity, and Translational Symmetry" },
          { title: "Rotational Symmetry of Crystals" },
          { title: "Cubic Lattices" },
          { title: "The 14 Three-Dimensional Bravais Lattices" },
        ],
      },
      {
        id: "crystal-structures-and-planes",
        title: "Crystal Structures and Planes",
        navLabel: "Structures and Planes",
        topics: [
          { title: "Lattice, Basis, and Crystal Structure" },
          { title: "Examples of Cubic Crystal Structures" },
          { title: "Hexagonal Close-Packed Structure" },
          { title: "Miller Indices and Interplanar Spacing" },
        ],
      },
    ],
  },
  {
    id: "optics",
    title: "Optics",
    sections: [
      {
        id: "one-wave",
        title: "One Wave: Foundations of Wave Optics",
        navLabel: "Wave Foundations",
        topics: [
          {
            title: "Maxwell's Equations and the Electromagnetic Wave Equation",
          },
          { title: "The Principle of Superposition" },
          { title: "Harmonic Wave Solutions" },
          { title: "Wave Phase" },
          {
            title: "Temporal Frequency, Spatial Frequency, and Wavenumber",
          },
          { title: "Complex Notation for Harmonic Waves" },
          { title: "Phasor Representation" },
          { title: "Electromagnetic Energy Flux and Intensity" },
          { title: "The Scalar Approximation" },
          { title: "Wavefronts and Wavevector Geometry" },
          { title: "Scalar Plane Waves" },
          { title: "Scalar Spherical and Cylindrical Waves" },
          { title: "The Paraxial Regime and Small-Angle Approximations" },
          {
            title: "Paraxial Spherical Waves and the Fresnel Approximation",
          },
          { title: "Thin Lenses as Quadratic Phase Elements" },
          { title: "Lens Imaging and the Thin-Lens Equation" },
        ],
      },
      {
        id: "interference",
        title: "Interference: From Two Waves to Multiple Waves",
        navLabel: "Interference",
        topics: [
          { title: "Interference Intensity and Cross Terms" },
          { title: "Interference of Two Plane Waves" },
          { title: "Interference of Two Spherical Waves" },
          {
            title:
              "Interferometry: Wavefront Splitting and Amplitude Splitting",
          },
          { title: "The Michelson-Morley Interferometer" },
          { title: "Young's Two-Slit Experiment" },
          { title: "Path Difference, Relative Phase, and Fringe Spacing" },
          { title: "Phasor Sums for Multiple Apertures" },
          { title: "Three-Slit Interference" },
          { title: "N-Slit Interference and Diffraction Gratings" },
        ],
      },
      {
        id: "diffraction",
        title: "Diffraction: From Finite to Infinite Waves",
        navLabel: "Diffraction",
        topics: [
          { title: "Diffraction and the Huygens-Fresnel Principle" },
          {
            title: "The Fresnel Diffraction Integral and Aperture Functions",
          },
          { title: "Circular Apertures and Fresnel Zones" },
          { title: "Cartesian Separability in Fresnel Diffraction" },
          { title: "Fraunhofer Diffraction in the Focal Plane of a Lens" },
          {
            title: "Far-Field Fraunhofer Diffraction and Rayleigh Distance",
          },
          {
            title: "The Fraunhofer Diffraction Formula and Separable Apertures",
          },
          { title: "Finite-Width Single-Slit Diffraction" },
          {
            title: "Displaced Slits and Far-Field Translational Invariance",
          },
          { title: "Finite-Width Double-Slit Diffraction" },
          { title: "Fraunhofer Diffraction as a Fourier Transform" },
          { title: "Fourier-Transform Properties in Diffraction" },
          {
            title:
              "The Convolution Theorem, Aperture Arrays, and the Array Theorem",
          },
          { title: "Rectangular-Aperture Diffraction" },
          { title: "Gaussian Beams, Angular Spread, and Rayleigh Range" },
          { title: "Circular-Aperture Diffraction and the Airy Pattern" },
          { title: "Diffraction-Limited Microscope Resolution" },
        ],
      },
      {
        id: "polarisation",
        title: "Polarisation",
        topics: [
          { title: "Polarisation and the Vector Nature of Light" },
          { title: "The Linear Polarisation Basis" },
          { title: "Linear Polarisation in a Linear Basis" },
          { title: "Circular Polarisation in a Linear Basis" },
          { title: "Elliptical Polarisation in a Linear Basis" },
          { title: "The Circular Polarisation Basis" },
          { title: "Linear Polarisation in a Circular Basis" },
          { title: "Circular Polarisation in a Circular Basis" },
          { title: "Elliptical Polarisation in a Circular Basis" },
          { title: "Polarisers and Polariser Axes" },
          { title: "Absorptive Polarisers and Dichroism" },
          { title: "Beam-Splitting Polarisers" },
          { title: "Reflection Polarisers and Brewster's Angle" },
          { title: "Wire-Grid Polarisers" },
          { title: "Birefringent Polarisers" },
          { title: "Malus' Law and Multiple Polarisers" },
          {
            title: "Birefringence and Polarisation-Dependent Refractive Index",
          },
          { title: "Linear Birefringence" },
          { title: "Half-Wave Plates" },
          { title: "Quarter-Wave Plates" },
          { title: "Circular Birefringence" },
          { title: "Natural Optical Activity and Reciprocity" },
          { title: "The Faraday Effect and Non-Reciprocal Rotation" },
          { title: "Optical Isolation" },
          { title: "Polarisation-Dependent Interference" },
          { title: "Polarisation Patterns in Counter-Propagating Waves" },
        ],
      },
    ],
  },
  {
    id: "thermodynamics",
    title: "Thermodynamics",
    sections: [
      {
        id: "thermodynamic-foundations",
        title: "Thermodynamic Foundations",
        navLabel: "Foundations",
        topics: [
          { title: "The Thermodynamic Limit and Macroscopic Descriptions" },
          { title: "Intensive and Extensive Variables" },
          { title: "Systems, Surroundings, Boundaries, and Reservoirs" },
          { title: "The Ideal Gas Equation of State" },
          {
            title: "Equilibrium, State Functions, and Thermodynamic Paths",
          },
          { title: "Heat, Heat Capacity, and Specific Heat Capacity" },
          {
            title: "Constant-Volume and Constant-Pressure Heat Capacities",
          },
          { title: "The Zeroth Law, Thermal Equilibrium, and Thermometry" },
        ],
      },
      {
        id: "thermodynamic-mathematics",
        title: "Mathematical Methods for Thermodynamics",
        navLabel: "Maths Methods",
        topics: [
          { title: "Partial Derivatives with Constrained Variables" },
          { title: "Total Differentials" },
          { title: "Reciprocal and Cyclic Derivative Relations" },
          { title: "Exact and Inexact Differentials" },
          { title: "Path Integrals, State Functions, and Path Functions" },
        ],
      },
      {
        id: "first-law-and-gas-processes",
        title: "First Law and Gas Processes",
        navLabel: "First Law",
        topics: [
          { title: "Internal Energy, Heat, and Work" },
          { title: "Pressure-Volume Work and Sign Conventions" },
          { title: "The First Law of Thermodynamics" },
          { title: "Ideal-Gas Heat Capacities and the Mayer Relation" },
          { title: "Joule Free Expansion" },
          {
            title: "Quasi-Static, Reversible, and Irreversible Processes",
          },
          { title: "Reversible Isothermal Expansion" },
          { title: "Adiabatic Expansion" },
          { title: "Adiabatic Equations of State" },
        ],
      },
      {
        id: "heat-engines-and-the-carnot-cycle",
        title: "Heat Engines and the Carnot Cycle",
        navLabel: "Engines and Carnot",
        topics: [
          { title: "Cyclic Heat Engines and Energy Flows" },
          { title: "Refrigerators and Heat Pumps" },
          { title: "Efficiency and Coefficient of Performance" },
          { title: "The Four Stages of the Carnot Cycle" },
          { title: "Carnot Efficiency and Thermodynamic Temperature" },
        ],
      },
      {
        id: "second-law-and-entropy",
        title: "Second Law and Entropy",
        navLabel: "Second Law",
        topics: [
          { title: "Clausius and Kelvin Statements of the Second Law" },
          {
            title: "Equivalence of the Clausius and Kelvin Statements",
          },
          { title: "Carnot's Theorem" },
          { title: "The Clausius Inequality" },
          { title: "Entropy as a State Function" },
          {
            title: "Entropy Changes During Heating and Thermal Equilibration",
          },
          {
            title: "Entropy Production, Irreversibility, and the Arrow of Time",
          },
          {
            title:
              "The Fundamental Thermodynamic Relation and the Natural Variables of Internal Energy",
          },
          { title: "Temperature-Entropy Diagrams" },
          { title: "Entropy of Reversible and Free Expansion" },
          { title: "Maxwell's Demon, Information, and the Second Law" },
        ],
      },
      {
        id: "real-engine-cycles",
        title: "Real Engine Cycles",
        navLabel: "Real Engines",
        topics: [
          { title: "Why Real Engines Depart from Ideal Cycles" },
          { title: "Air-Standard Assumptions" },
          { title: "Reciprocating Pistons and Four-Stroke Engines" },
          { title: "The Ideal Otto Cycle and Compression Ratio" },
        ],
      },
      {
        id: "thermodynamic-potentials-and-available-work",
        title: "Thermodynamic Potentials and Available Work",
        navLabel: "Potentials",
        topics: [
          { title: "Thermodynamic Potentials and Natural Variables" },
          { title: "Enthalpy and Constant-Pressure Processes" },
          { title: "Helmholtz Free Energy and Isothermal Work" },
          {
            title:
              "Gibbs Free Energy and Constant-Temperature, Constant-Pressure Processes",
          },
          { title: "Free-Energy Criteria for Spontaneous Change" },
          { title: "Availability and the Dead State" },
          { title: "Equilibrium Criteria Under Different Constraints" },
          { title: "Useful Work and Irreversibility" },
        ],
      },
      {
        id: "maxwell-relations-and-response-functions",
        title: "Maxwell Relations and Response Functions",
        navLabel: "Maxwell Relations",
        topics: [
          {
            title:
              "Thermal Expansivity, Compressibility, and Generalised Susceptibilities",
          },
          { title: "Deriving the Maxwell Relations" },
          { title: "TdS Equations" },
          { title: "Thermodynamic Energy Equations" },
          { title: "Strategy for Thermodynamic Derivative Problems" },
          { title: "The General Relation Between Heat Capacities" },
          { title: "Internal Pressure of Ideal and Van der Waals Gases" },
        ],
      },
      {
        id: "phase-equilibria-and-transitions",
        title: "Phase Equilibria and Transitions",
        navLabel: "Phase Transitions",
        topics: [
          { title: "Single-Component Phase Diagrams" },
          { title: "Phase Boundaries, Triple Points, and Critical Points" },
          { title: "Chemical Potential and Phase Coexistence" },
          { title: "Latent Heat and the Clausius-Clapeyron Equation" },
          { title: "First-Order and Continuous Phase Transitions" },
          { title: "Phase Diagrams of Carbon Dioxide, Water, and Helium" },
          { title: "Metastable Phases and Quenching" },
        ],
      },
      {
        id: "generalised-thermodynamic-systems",
        title: "Generalised Thermodynamic Systems",
        navLabel: "Generalised Systems",
        topics: [
          { title: "Generalised Work Coordinates" },
          { title: "Thermodynamics of Elastic Rods" },
          { title: "Thermodynamics of Paramagnets" },
          { title: "The Magnetocaloric Effect and Adiabatic Demagnetisation" },
        ],
      },
      {
        id: "real-gases-and-low-temperature-cooling",
        title: "Real Gases and Low-Temperature Cooling",
        navLabel: "Real Gases and Cooling",
        topics: [
          { title: "Real-Gas Behaviour and the Van der Waals Equation" },
          { title: "The Joule Effect and Free-Expansion Cooling" },
          {
            title:
              "The Joule-Thomson Effect, Throttling, and Inversion Temperature",
          },
          { title: "Gas Liquefaction and Evaporative Cooling" },
          { title: "Dilution Refrigeration Below 4.2 K" },
        ],
      },
      {
        id: "third-law-and-absolute-zero",
        title: "Third Law and Absolute Zero",
        navLabel: "Third Law",
        topics: [
          { title: "Nernst and Planck Statements of the Third Law" },
          { title: "Residual Entropy and Degenerate Ground States" },
          { title: "Vanishing Heat Capacity and Thermal Expansion" },
          { title: "Low-Temperature Magnetic Response" },
          { title: "The Unattainability of Absolute Zero" },
        ],
      },
      {
        id: "statistical-foundations",
        title: "Statistical Foundations",
        topics: [
          { title: "Macrostates, Microstates, and Multiplicity" },
          { title: "Most Probable Macrostates and the Ergodic Hypothesis" },
          { title: "Statistical Temperature and Thermal Equilibrium" },
          { title: "Boltzmann and Gibbs Definitions of Entropy" },
          { title: "Equivalence of Statistical and Thermodynamic Entropy" },
        ],
      },
      {
        id: "classical-and-quantum-statistics",
        title: "Classical and Quantum Statistics",
        navLabel: "Distributions",
        topics: [
          { title: "The Boltzmann Distribution and Energy-Level Populations" },
          { title: "The Partition Function and Normalisation" },
          {
            title:
              "Thermodynamic Functions and Heat Capacity from the Partition Function",
          },
          { title: "Two-Level Systems and the Schottky Anomaly" },
          { title: "Finite Equally Spaced N-Level Systems" },
          { title: "Indistinguishable Particles and Exchange Symmetry" },
          { title: "The Bose-Einstein Distribution and Condensation" },
          { title: "The Fermi-Dirac Distribution and Fermi Energy" },
          { title: "The Classical Limit of Quantum Statistics" },
        ],
      },
    ],
  },
];

export const level2PhysicsBSections = level2PhysicsBModules.flatMap(
  (module) => module.sections,
);
