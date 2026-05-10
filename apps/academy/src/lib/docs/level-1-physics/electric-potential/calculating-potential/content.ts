export const content = String.raw`## Principle

Electric potential from multiple sources is found by scalar superposition, adding signed contributions rather than vector components.

## Notation

<Notation
  items={[
    { symbol: "V", meaning: "electric potential at a field point", unit: "V" },
    { symbol: "Q_i", meaning: "source point charge", unit: "C" },
    { symbol: "R_i", meaning: "distance from source \\(i\\) to the field point", unit: "m" },
    { symbol: "dq", meaning: "small source charge element", unit: "C" },
    { symbol: "\\lambda", meaning: "linear charge density", unit: "C m^{-1}" },
    { symbol: "dl", meaning: "small length element", unit: "m" },
    { symbol: "k", meaning: "Coulomb constant", unit: "N m^{2} C^{-2}" },
  ]}
/>

## Method

### Derivation 1: Add point-charge potentials

Potential is scalar, so each point charge contributes a signed number at the field point. There are no \\(x\\)- and \\(y\\)-components to resolve.

<PhysicsDerivation
  items={[
    {
      label: "One source",
      tex: "V_i=k\\frac{Q_i}{R_i}",
    },
    {
      label: "Scalar superposition",
      tex: "V=\\sum_i V_i",
    },
    {
      label: "Point-charge sum",
      tex: "V=k\\sum_i\\frac{Q_i}{R_i}",
    },
  ]}
/>

### Derivation 2: Continuous charge

For a continuous distribution, split the charge into elements. Each element contributes a small scalar potential.

<PhysicsDerivation
  items={[
    {
      label: "Small contribution",
      tex: "dV=k\\frac{dq}{R}",
    },
    {
      label: "Line element",
      tex: "dq=\\lambda\\,dl",
    },
    {
      label: "Integrate",
      tex: "V=\\int k\\frac{dq}{R}",
    },
  ]}
/>

### Derivation 3: Use symmetry without directions

When distances are equal, potential contributions combine by charge sign alone.

<PhysicsDerivation
  items={[
    {
      label: "Equal distances",
      tex: "R_1=R_2=R",
    },
    {
      label: "Two-charge potential",
      tex: "V=k\\frac{Q_1+Q_2}{R}",
    },
    {
      label: "Equal opposite charges",
      tex: "Q_1=-Q_2\\Rightarrow V=0",
      note: "The electric field at the same point may still be nonzero.",
    },
  ]}
/>

## Rules

These are the compact potential-calculation tools.

<Equation label="Point source" tex="V_i=k\frac{Q_i}{R_i}" />

<Equation label="Scalar superposition" tex="V=\sum_i V_i=k\sum_i\frac{Q_i}{R_i}" />

<Equation label="Continuous source" tex="dV=k\frac{dq}{R},\qquad V=\int k\frac{dq}{R}" />

<Equation label="Line charge" tex="dq=\lambda\,dl" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Charges \\(+4.0\\,\\mathrm{nC}\\) and \\(-1.0\\,\\mathrm{nC}\\) are each \\(0.50\\,\\mathrm{m}\\) from point P. Find \\(V_P\\).",
      answer: "\\[V_P=k\\frac{Q_1+Q_2}{R}=\\frac{(8.99\\times10^9)(3.0\\times10^{-9})}{0.50}=54\\,\\mathrm{V}\\]",
    },
    {
      title: "Example 2",
      question: "A ring has total charge \\(Q\\) and radius \\(a\\). What is the potential at its center?",
      answer: "Every charge element is the same distance \\(a\\) from the center, so \\[V=\\int k\\frac{dq}{a}=\\frac{k}{a}\\int dq=\\frac{kQ}{a}\\]",
    },
  ]}
/>

## Checks

- Add potential contributions with signs, not directions.
- A zero potential point can still have nonzero electric field.
- Distances \\(R_i\\) are always from source charge to the field point.
- Continuous-source integrals need the correct charge element \\(dq\\).`;
