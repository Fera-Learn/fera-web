export type Level2PhysicsATopic = {
  navLabel?: string;
  title: string;
};

export type Level2PhysicsASection = {
  id: string;
  navLabel?: string;
  title: string;
  topics: Level2PhysicsATopic[];
};

export type Level2PhysicsAModule = {
  id: string;
  sections: Level2PhysicsASection[];
  title: string;
};

export const level2PhysicsAModules: Level2PhysicsAModule[] = [
  {
    id: "electromagnetism",
    title: "Electromagnetism",
    sections: [
      {
        id: "maxwell-equations-and-static-fields",
        title: "Maxwell's Equations and Static Fields",
        navLabel: "Maxwell and Static Fields",
        topics: [
          { title: "Maxwell's Equations" },
          { title: "Coulomb's Law and Electric Fields" },
          { title: "Electric Flux and Gauss's Law" },
          { title: "Ampere's Law and Magnetic Fields" },
          { title: "The Biot-Savart Law" },
          { title: "Monopoles, Dipoles, and Superposition" },
        ],
      },
      {
        id: "electromagnetic-induction",
        title: "Electromagnetic Induction",
        navLabel: "Induction",
        topics: [
          { title: "Inductive and Motional EMF" },
          { title: "Faraday's Law and Lenz's Law" },
          { title: "Maxwell's Curl Equation for Electric Fields" },
          { title: "Displacement Current" },
          { title: "The Ampere-Maxwell Law" },
          { title: "Divergence, Curl, and Vector Conventions" },
        ],
      },
      {
        id: "electromagnetic-waves",
        title: "Electromagnetic Waves",
        navLabel: "EM Waves",
        topics: [
          { title: "Electromagnetic Waves in Vacuum" },
          { title: "Polarisation and the Vector Structure of Waves" },
          { title: "Phase Velocity and Group Velocity" },
          { title: "Dispersion and Wave Packets" },
          { title: "Transmitting and Detecting Electromagnetic Waves" },
          { title: "Waveguides and Cutoff Frequencies" },
        ],
      },
      {
        id: "relativity-and-charge-conservation",
        title: "Relativity and Charge Conservation",
        navLabel: "Relativity and Charge",
        topics: [
          { title: "Maxwell's Equations and Galilean Physics" },
          { title: "Special Relativity Postulates" },
          { title: "Length Contraction and Time Dilation" },
          { title: "Electric and Magnetic Fields in Different Frames" },
          { title: "The Continuity Equation" },
          { title: "Field Symmetry and Spatial Dependence" },
        ],
      },
      {
        id: "conductors-and-superconductors",
        title: "Conductors and Superconductors",
        navLabel: "Conductors",
        topics: [
          { title: "Current Density, Conductivity, and Charge Relaxation" },
          { title: "The Drude Model" },
          { title: "Electromagnetic Waves in Conductors" },
          { title: "Plasma Frequency and the High-Frequency Limit" },
          { title: "Skin Depth and the Low-Frequency Limit" },
          { title: "London Equations and the Meissner Effect" },
        ],
      },
      {
        id: "dielectric-and-magnetic-materials",
        title: "Dielectric and Magnetic Materials",
        navLabel: "Materials",
        topics: [
          { title: "Polar and Non-Polar Dielectrics" },
          { title: "Polarisation and Bound Charge" },
          { title: "Polarisation Current Density" },
          { title: "Magnetisation and Magnetic Dipoles" },
          { title: "Bound Currents in Magnetic Materials" },
          { title: "Wave Propagation in Materials" },
          { title: "Dielectric Resonance and Complex Permittivity" },
        ],
      },
      {
        id: "interfaces-and-fresnel-optics",
        title: "Interfaces and Fresnel Optics",
        navLabel: "Fresnel Optics",
        topics: [
          { title: "The Auxiliary Fields D and H" },
          { title: "Electric Boundary Conditions" },
          { title: "Magnetic Boundary Conditions" },
          { title: "Reflection, Refraction, and Snell's Law" },
          { title: "Fresnel Equations for Parallel Polarisation" },
          { title: "Fresnel Equations for Normal Polarisation" },
          { title: "Brewster's Angle and the Critical Angle" },
        ],
      },
      {
        id: "electromagnetic-energy-and-power",
        title: "Electromagnetic Energy and Power",
        navLabel: "Energy and Power",
        topics: [
          { title: "The Poynting Vector" },
          { title: "The Poynting Theorem" },
          { title: "Reflection and Transmission Coefficients" },
          { title: "Power Flow into Conductors" },
        ],
      },
      {
        id: "radiation-from-oscillating-dipoles",
        title: "Radiation from Oscillating Dipoles",
        navLabel: "Dipole Radiation",
        topics: [
          { title: "Scalar and Vector Potentials" },
          { title: "The Lorenz Gauge and Potential Wave Equations" },
          { title: "The Hertzian Dipole" },
          { title: "Near and Far Fields" },
          { title: "Dipole Radiation Patterns" },
          { title: "Power Radiated by a Hertzian Dipole" },
        ],
      },
    ],
  },
  {
    id: "quantum-mechanics",
    title: "Quantum Mechanics",
    sections: [
      {
        id: "foundations-of-quantum-mechanics",
        title: "Foundations of Quantum Mechanics",
        navLabel: "Quantum Foundations",
        topics: [
          { title: "Wave-Particle Duality and Wavefunctions" },
          { title: "The Time-Dependent Schrodinger Equation" },
          { title: "Probability and the Born Interpretation" },
          { title: "Normalisation of Wavefunctions" },
          { title: "Operators and Expectation Values" },
          { title: "Hermitian Operators and Observables" },
          { title: "Commutators and the Uncertainty Principle" },
          { title: "Ehrenfest's Theorem" },
        ],
      },
      {
        id: "stationary-states-and-superposition",
        title: "Stationary States and Superposition",
        navLabel: "States and Superposition",
        topics: [
          { title: "The Time-Independent Schrodinger Equation" },
          { title: "Energy Eigenfunctions and Eigenvalues" },
          { title: "Orthogonality and Completeness" },
          { title: "Dirac Bra-Ket Notation" },
          { title: "Quantisation and the Infinite Square Well" },
          { title: "Superpositions and Measurement Probabilities" },
          { title: "Time Evolution of Superposed States" },
          { title: "Quantum Transitions" },
          { title: "Eigenstate Expansions" },
        ],
      },
      {
        id: "one-dimensional-quantum-systems",
        title: "One-Dimensional Quantum Systems",
        navLabel: "1D Quantum Systems",
        topics: [
          { title: "Symmetry in the Infinite Square Well" },
          { title: "The Finite Square Well" },
          { title: "The Quantum Harmonic Oscillator" },
          { title: "Harmonic-Oscillator Ladder Operators" },
          { title: "Harmonic-Oscillator Wavefunctions and Energies" },
          { title: "Zero-Point Energy" },
          { title: "Commutator Algebra" },
          { title: "Compatible Observables" },
        ],
      },
      {
        id: "three-dimensional-quantum-mechanics",
        title: "Three-Dimensional Quantum Mechanics",
        navLabel: "3D Quantum Mechanics",
        topics: [
          { title: "The Three-Dimensional Schrodinger Equation" },
          { title: "Separation in Cartesian Coordinates" },
          { title: "The Three-Dimensional Infinite Square Well" },
          { title: "Degeneracy from Spatial Symmetry" },
          { title: "Spherical Polar Coordinates and the Laplacian" },
          { title: "Separation in Spherical Coordinates" },
        ],
      },
      {
        id: "orbital-angular-momentum",
        title: "Orbital Angular Momentum",
        navLabel: "Angular Momentum",
        topics: [
          { title: "Angular Momentum Operators" },
          { title: "Angular Momentum Commutation Relations" },
          { title: "Total Angular Momentum and One Measurable Component" },
          { title: "Spatial Symmetry and Angular Momentum" },
          { title: "Angular Momentum in Spherical Coordinates" },
          { title: "Eigenfunctions of Lz and L Squared" },
          { title: "Spherical Harmonics" },
          { title: "Orbital Angular Momentum Quantum Numbers" },
        ],
      },
      {
        id: "the-hydrogen-atom",
        title: "The Hydrogen Atom",
        navLabel: "Hydrogen Atom",
        topics: [
          { title: "The Radial Schrodinger Equation" },
          { title: "Effective Central Potentials" },
          { title: "Hydrogen Wavefunctions" },
          { title: "Hydrogen Energy Levels and Degeneracy" },
          { title: "Radial Probability Distributions" },
          { title: "The Hydrogen Ground State" },
          { title: "Atomic Transitions and Spectral Series" },
          { title: "Hydrogenic Ions and Positronium" },
        ],
      },
      {
        id: "spin-and-angular-momentum-addition",
        title: "Spin and Angular Momentum Addition",
        navLabel: "Spin and Addition",
        topics: [
          { title: "General Angular Momentum" },
          { title: "Angular Momentum Ladder Operators" },
          { title: "Intrinsic Spin" },
          { title: "Spin Magnetic Moments" },
          { title: "The Stern-Gerlach Experiment" },
          { title: "Spinors and Matrix Operators" },
          { title: "Adding Angular Momenta" },
          { title: "Total Electronic Angular Momentum" },
        ],
      },
      {
        id: "perturbation-theory-and-fine-structure",
        title: "Perturbation Theory and Fine Structure",
        navLabel: "Perturbation Theory",
        topics: [
          { title: "Time-Independent Perturbation Theory" },
          { title: "First-Order Energy Corrections" },
          { title: "Delta-Function Perturbations" },
          { title: "Twofold Degenerate Perturbation Theory" },
          { title: "Higher-Order Degeneracy and Good Bases" },
          { title: "Spin-Orbit Coupling" },
          { title: "Relativistic and Darwin Corrections" },
          { title: "Hydrogen Fine Structure" },
          { title: "Selection Rules and Fine-Structure Transitions" },
          { title: "Hyperfine Structure and Multi-Electron Atoms" },
        ],
      },
      {
        id: "quantum-theorems-and-postulates",
        title: "Quantum Theorems and Postulates",
        navLabel: "Theorems and Postulates",
        topics: [
          { title: "Marginal Probability Distributions" },
          { title: "The Time-Energy Uncertainty Relation" },
          { title: "Time Evolution of Expectation Values" },
          { title: "The Virial Theorem" },
          { title: "The Correspondence Principle" },
          { title: "The Postulates of Quantum Mechanics" },
          { title: "Measurement and Wavefunction Collapse" },
          { title: "Interpretations and Decoherence" },
        ],
      },
    ],
  },
];

export const level2PhysicsASections = level2PhysicsAModules.flatMap(
  (module) => module.sections,
);
