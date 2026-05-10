export const content = String.raw`## Principle

Resistance is the ratio of potential difference across a device to current through it.

## Notation

<Notation
  items={[
    { symbol: "R", meaning: "resistance", unit: "\\Omega" },
    { symbol: "V", meaning: "potential difference across a device", unit: "V" },
    { symbol: "I", meaning: "current through a device", unit: "A" },
    { symbol: "\\rho", meaning: "resistivity", unit: "\\Omega\\,m" },
    { symbol: "L", meaning: "conductor length", unit: "m" },
    { symbol: "A", meaning: "cross-sectional area", unit: "m^{2}" },
  ]}
/>

## Method

### Derivation 1: Define resistance from an operating point

Resistance compares the voltage across a two-terminal device with the current through it.

<PhysicsDerivation
  items={[
    {
      label: "Resistance definition",
      tex: "R=\\frac{V}{I}",
    },
    {
      label: "Ohm",
      tex: "1\\,\\Omega=1\\,\\mathrm{V\\,A^{-1}}",
    },
    {
      label: "Ohmic device",
      tex: "V=IR",
      note: "\\(R\\) is constant only for an ohmic device in its operating range.",
    },
  ]}
/>

### Derivation 2: Derive resistance of a uniform wire

Combine the material relation with the geometry of a straight wire.

<PhysicsDerivation
  items={[
    {
      label: "Material law",
      tex: "E=\\rho J",
    },
    {
      label: "Uniform field and current density",
      tex: "E=\\frac{V}{L},\\qquad J=\\frac{I}{A}",
    },
    {
      label: "Substitute",
      tex: "\\frac{V}{L}=\\rho\\frac{I}{A}",
    },
    {
      label: "Wire resistance",
      tex: "R=\\frac{V}{I}=\\rho\\frac{L}{A}",
    },
  ]}
/>

### Derivation 3: Read an \\(I\\)-\\(V\\) graph

For an ohmic resistor, \\(I\\) is proportional to \\(V\\). The graph slope depends on which quantity is on the vertical axis.

<PhysicsDerivation
  items={[
    {
      label: "\\(V\\) versus \\(I\\)",
      tex: "\\text{slope}=\\frac{\\Delta V}{\\Delta I}=R",
    },
    {
      label: "\\(I\\) versus \\(V\\)",
      tex: "\\text{slope}=\\frac{\\Delta I}{\\Delta V}=\\frac{1}{R}",
    },
  ]}
/>

## Rules

These are the compact resistance relations.

<Equation label="Resistance" tex="R=\frac{V}{I}" />

<Equation label="Ohm's law" tex="V=IR\quad\text{for an ohmic resistor}" />

<Equation label="Uniform wire" tex="R=\rho\frac{L}{A}" />

<Equation label="Ohm" tex="1\,\Omega=1\,\mathrm{V\,A^{-1}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A resistor has \\(12\\,\\mathrm{V}\\) across it and current \\(0.40\\,\\mathrm{A}\\). Find \\(R\\).",
      answer: "\\[R=\\frac{V}{I}=\\frac{12}{0.40}=30\\,\\Omega\\]",
    },
    {
      title: "Example 2",
      question: "A wire's length is doubled and its area is halved, with material unchanged. By what factor does its resistance change?",
      answer: "\\[R\\propto\\frac{L}{A}\\] Doubling \\(L\\) and halving \\(A\\) multiplies resistance by \\(2/(1/2)=4\\).",
    },
  ]}
/>

## Checks

- \\(V=IR\\) is a model for ohmic behavior, not every device.
- Wire resistance increases with length and decreases with cross-sectional area.
- On a \\(V\\)-against-\\(I\\) graph, slope is \\(R\\); on an \\(I\\)-against-\\(V\\) graph, slope is \\(1/R\\).
- Resistance is positive for ordinary passive resistors.`;
