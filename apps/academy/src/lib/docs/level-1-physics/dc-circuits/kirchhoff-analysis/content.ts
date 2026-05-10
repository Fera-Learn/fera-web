export const content = String.raw`## Principle

Kirchhoff analysis turns a circuit into equations by applying conservation laws. Junction equations conserve charge. Loop equations conserve energy per unit charge.

## Notation

<Notation
  items={[
    { symbol: "I_j", meaning: "current in branch j", unit: "A" },
    { symbol: "\\mathcal E", meaning: "ideal source emf", unit: "V" },
    { symbol: "R", meaning: "resistance", unit: "\\Omega" },
    { symbol: "\\Delta V", meaning: "potential change during a traversal", unit: "V" },
    { symbol: "V_a", meaning: "electric potential at node a", unit: "V" },
    { symbol: "P", meaning: "power delivered or dissipated", unit: "W" },
  ]}
/>

## Method

### Derivation 1: Junction law

At an ideal node, charge cannot accumulate in steady state. The rate of charge entering equals the rate of charge leaving.

<PhysicsDerivation
  items={[
    {
      label: "Charge conservation",
      tex: "\\frac{dQ_{\\mathrm{node}}}{dt}=0",
    },
    {
      label: "Current balance",
      tex: "\\sum I_{\\mathrm{in}}=\\sum I_{\\mathrm{out}}",
    },
    {
      label: "Algebraic form",
      tex: "\\sum_j I_j=0",
    },
  ]}
/>

### Derivation 2: Loop law

Electric potential is single valued in a lumped DC circuit. If you return to the starting point, the algebraic sum of all potential changes is zero.

<PhysicsDerivation
  items={[
    {
      label: "Return to same potential",
      tex: "V_{\\mathrm{final}}-V_{\\mathrm{initial}}=0",
    },
    {
      label: "Sum changes around loop",
      tex: "\\sum_{\\mathrm{loop}}\\Delta V=0",
    },
    {
      label: "Resistor traversal with current",
      tex: "\\Delta V=-IR",
    },
    {
      label: "Ideal source from minus to plus",
      tex: "\\Delta V=+\\mathcal E",
    },
  ]}
/>

### Derivation 3: Solving with assumed directions

Current arrows are bookkeeping choices. If a solved current is negative, the physical current flows opposite the assumed arrow.

## Rules

<Equation label="Kirchhoff junction law" tex="\sum I_{\mathrm{in}}=\sum I_{\mathrm{out}}" />

<Equation label="Kirchhoff loop law" tex="\sum_{\mathrm{loop}}\Delta V=0" />

<Equation label="Resistor drop with current" tex="\Delta V=-IR" />

<Equation label="Resistor rise against current" tex="\Delta V=+IR" />

<Equation label="Source rise" tex="\Delta V=+\mathcal E\quad\text{from negative to positive terminal}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(12\\,\\mathrm{V}\\) source drives \\(2.0\\,\\Omega\\) and \\(4.0\\,\\Omega\\) in series. Write the loop equation and find \\(I\\).",
      answer: "\\[12-2I-4I=0\\quad\\Rightarrow\\quad I=2.0\\,\\mathrm{A}\\]",
    },
    {
      title: "Example 2",
      question: "A node is connected to \\(12\\,\\mathrm{V}\\) through \\(3.0\\,\\Omega\\) and to ground through \\(6.0\\,\\Omega\\). Find the node voltage.",
      answer: "\\[\\frac{12-V}{3.0}=\\frac{V}{6.0}\\quad\\Rightarrow\\quad V=8.0\\,\\mathrm{V}\\]",
    },
  ]}
/>

## Checks

- Define current arrows before writing equations.
- Use one sign convention consistently around each loop.
- Every independent junction equation expresses charge conservation; every independent loop equation expresses energy conservation.
- A negative solved current is information, not an error.
- Check units: every term in a loop equation is a voltage, and every term in a junction equation is a current.`;
