export const content = String.raw`## Principle

Fusion releases energy when light nuclei combine into products with greater total binding energy.

## Notation

<Notation
  items={[
    { symbol: "Q", meaning: "fusion energy release", unit: "J, MeV" },
    { symbol: "Z_1,Z_2", meaning: "charges of reacting nuclei", unit: "1" },
    { symbol: "r", meaning: "nuclear separation", unit: "m" },
    { symbol: "U_C", meaning: "Coulomb barrier energy", unit: "J, MeV" },
    { symbol: "T", meaning: "plasma temperature", unit: "K" },
    { symbol: "n", meaning: "particle number density", unit: "m^{-3}" },
  ]}
/>

## Method

### Derivation 1: Energy release

Fusion is favorable for light nuclei below the binding-energy-per-nucleon peak.

<PhysicsDerivation
  items={[
    {
      label: "Q value",
      tex: "Q=(m_i-m_f)c^2",
    },
    {
      label: "Binding form",
      tex: "Q=B_f-B_i",
    },
  ]}
/>

### Derivation 2: Coulomb barrier

Nuclei must approach closely enough for the strong force to act.

<PhysicsDerivation
  items={[
    {
      label: "Barrier scale",
      tex: "U_C\\approx\\frac{1}{4\\pi\\epsilon_0}\\frac{Z_1Z_2e^2}{r}",
    },
    {
      label: "Thermal scale",
      tex: "K\\sim k_BT",
    },
  ]}
/>

### Derivation 3: Tunneling

Fusion can occur below the classical barrier because nuclear wave functions tunnel.

<PhysicsDerivation
  items={[
    {
      label: "Barrier penetration",
      tex: "P\\sim e^{-2\\int\\kappa(r)dr}",
    },
    {
      label: "Rate sensitivity",
      tex: "\\text{fusion rate depends strongly on temperature}",
    },
  ]}
/>

## Rules

<Equation label="Fusion Q" tex="Q=(m_i-m_f)c^2" />

<Equation label="Coulomb barrier" tex="U_C\approx\frac{1}{4\pi\epsilon_0}\frac{Z_1Z_2e^2}{r}" />

<Equation label="Thermal scale" tex="K\sim k_BT" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Why is deuterium-tritium fusion easier than proton-carbon fusion?",
      answer: "Lower charge product \\(Z_1Z_2\\) gives a smaller Coulomb barrier.",
    },
    {
      title: "Example 2",
      question: "If products have greater total binding energy than reactants, what is the sign of \\(Q\\)?",
      answer: "\\(Q>0\\), because rest mass decreases and energy is released.",
    },
  ]}
/>

## Checks

- Fusion of light nuclei releases energy up to the iron-region binding peak.
- The Coulomb barrier rises with \\(Z_1Z_2\\).
- High temperature increases collision energy and tunneling probability.
- Stellar fusion depends on quantum tunneling, not only classical barrier crossing.`;
