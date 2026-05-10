export const content = String.raw`## Principle

Nuclear structure follows from short-range attraction, electrostatic repulsion, quantum shells, and nucleon pairing.

## Notation

<Notation
  items={[
    { symbol: "F_{\\mathrm s}", meaning: "strong nuclear force", unit: "N" },
    { symbol: "F_{\\mathrm C}", meaning: "Coulomb repulsion", unit: "N" },
    { symbol: "r", meaning: "nucleon separation", unit: "m" },
    { symbol: "\\ell", meaning: "orbital angular-momentum quantum number", unit: "1" },
    { symbol: "j", meaning: "total angular-momentum quantum number", unit: "1" },
    { symbol: "I", meaning: "nuclear spin", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Competing interactions

The nucleus is held by attraction that saturates and opposed by proton-proton repulsion.

<PhysicsDerivation
  items={[
    {
      label: "Short-range binding",
      tex: "F_{\\mathrm s}\\approx0\\quad\\text{for}\\quad r\\gtrsim\\text{few fm}",
    },
    {
      label: "Longer-range repulsion",
      tex: "U_C\\sim\\frac{1}{4\\pi\\epsilon_0}\\frac{Z(Z-1)e^2}{R}",
    },
  ]}
/>

### Derivation 2: Saturation

Each nucleon interacts strongly with nearby nucleons, not all nucleons equally.

<PhysicsDerivation
  items={[
    {
      label: "Volume term",
      tex: "B_{\\mathrm{volume}}\\propto A",
    },
    {
      label: "Surface correction",
      tex: "B_{\\mathrm{surface}}\\propto -A^{2/3}",
    },
  ]}
/>

### Derivation 3: Shell and pairing effects

Quantum levels and pairing explain extra stability beyond a liquid-drop picture.

<PhysicsDerivation
  items={[
    {
      label: "Closed shells",
      tex: "N,Z=2,8,20,28,50,82,126",
    },
    {
      label: "Pairing trend",
      tex: "\\text{even-even nuclei are usually most tightly paired}",
    },
  ]}
/>

## Rules

<Equation label="Coulomb scale" tex="U_C\sim\frac{1}{4\pi\epsilon_0}\frac{Z(Z-1)e^2}{R}" />

<Equation label="Radius scale" tex="R=R_0A^{1/3}" />

<Equation label="Shell closures" tex="N,Z=2,8,20,28,50,82,126" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Why does the strong force not make binding energy scale as \\(A^2\\)?",
      answer: "The strong force is short-range and saturates, so each nucleon mainly binds to nearby nucleons.",
    },
    {
      title: "Example 2",
      question: "Why are heavy nuclei sensitive to Coulomb repulsion?",
      answer: "The number of proton pairs grows roughly as \\(Z(Z-1)/2\\), increasing repulsive energy.",
    },
  ]}
/>

## Checks

- Strong nuclear attraction is short-range and approximately charge-independent.
- Coulomb repulsion acts only between protons.
- Shell closures give extra stability at magic numbers.
- Pairing favors even \\(Z\\) and even \\(N\\) nuclei.`;
