export const content = String.raw`## Principle

Capacitance measures how much separated charge a conductor arrangement stores per volt.

## Notation

<Notation
  items={[
    { symbol: "C", meaning: "capacitance", unit: "F" },
    { symbol: "Q", meaning: "magnitude of charge on either conductor", unit: "C" },
    { symbol: "\\Delta V", meaning: "potential difference between conductors", unit: "V" },
    { symbol: "A", meaning: "plate area", unit: "m^{2}" },
    { symbol: "d", meaning: "plate separation", unit: "m" },
    { symbol: "\\epsilon_0", meaning: "permittivity of free space", unit: "F m^{-1}" },
  ]}
/>

## Method

### Derivation 1: Define the storage ratio

A capacitor has two conductors carrying equal and opposite charges. The relevant voltage is the potential difference between them.

<PhysicsDerivation
  items={[
    {
      label: "Charge-voltage ratio",
      tex: "C=\\frac{Q}{\\Delta V}",
    },
    {
      label: "Stored charge",
      tex: "Q=C\\Delta V",
    },
  ]}
/>

### Derivation 2: Parallel-plate capacitance

Between large close plates, the field is approximately uniform away from edges. Use the field from a conducting surface and the uniform-field potential difference.

<PhysicsDerivation
  items={[
    {
      label: "Plate charge density",
      tex: "\\sigma=\\frac{Q}{A}",
    },
    {
      label: "Uniform field",
      tex: "E=\\frac{\\sigma}{\\epsilon_0}=\\frac{Q}{\\epsilon_0A}",
    },
    {
      label: "Potential difference",
      tex: "\\Delta V=Ed=\\frac{Qd}{\\epsilon_0A}",
    },
    {
      label: "Capacitance",
      tex: "C=\\frac{Q}{\\Delta V}=\\epsilon_0\\frac{A}{d}",
    },
  ]}
/>

### Derivation 3: Isolated conducting sphere

Use the sphere's surface potential relative to infinity.

<PhysicsDerivation
  items={[
    {
      label: "Sphere potential",
      tex: "V=\\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{R}",
    },
    {
      label: "Sphere capacitance",
      tex: "C=\\frac{Q}{V}=4\\pi\\epsilon_0R",
    },
  ]}
/>

## Rules

These are the compact capacitance relations.

<Equation label="Capacitance" tex="C=\frac{Q}{\Delta V}" />

<Equation label="Charge relation" tex="Q=C\Delta V" />

<Equation label="Parallel plates" tex="C=\epsilon_0\frac{A}{d}" />

<Equation label="Isolated sphere" tex="C=4\pi\epsilon_0R" />

<Equation label="Farad" tex="1\,\mathrm{F}=1\,\mathrm{C\,V^{-1}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A capacitor stores \\(4.0\\,\\mu\\mathrm{C}\\) at \\(20\\,\\mathrm{V}\\). Find \\(C\\).",
      answer: "\\[C=\\frac{Q}{\\Delta V}=\\frac{4.0\\times10^{-6}}{20}=2.0\\times10^{-7}\\,\\mathrm{F}\\]",
    },
    {
      title: "Example 2",
      question: "A parallel-plate capacitor has \\(A=0.030\\,\\mathrm{m^2}\\) and \\(d=1.5\\,\\mathrm{mm}\\). Estimate \\(C\\).",
      answer: "\\[C=\\epsilon_0\\frac{A}{d}=\\frac{(8.85\\times10^{-12})(0.030)}{1.5\\times10^{-3}}=1.8\\times10^{-10}\\,\\mathrm{F}\\]",
    },
  ]}
/>

## Checks

- Capacitance is positive and depends on geometry and material, not on the chosen charge amount.
- Use potential difference between conductors, not absolute potential.
- Larger plate area increases \\(C\\); larger separation decreases \\(C\\).
- The parallel-plate formula assumes edge effects are negligible.`;
