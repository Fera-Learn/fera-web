export const content = String.raw`## Principle

An emf source supplies energy per unit charge, and circuit models track how that energy is transferred around a closed loop.

## Notation

<Notation
  items={[
    { symbol: "\\mathcal E", meaning: "emf of a source", unit: "V" },
    { symbol: "W_{\\mathrm{source}}", meaning: "non-electrostatic work done by the source", unit: "J" },
    { symbol: "q", meaning: "charge moved through the source", unit: "C" },
    { symbol: "r", meaning: "internal resistance of a source", unit: "\\Omega" },
    { symbol: "R", meaning: "external load resistance", unit: "\\Omega" },
    { symbol: "I", meaning: "current in a simple loop", unit: "A" },
    { symbol: "V_{\\mathrm{term}}", meaning: "terminal voltage of the source", unit: "V" },
  ]}
/>

## Method

### Derivation 1: Define emf as energy per charge

Inside a battery or generator, non-electrostatic processes move charge from lower potential to higher potential. The emf is the energy supplied per unit charge.

<PhysicsDerivation
  items={[
    {
      label: "Energy supplied",
      tex: "W_{\\mathrm{source}}=q\\mathcal E",
    },
    {
      label: "emf definition",
      tex: "\\mathcal E=\\frac{W_{\\mathrm{source}}}{q}",
    },
    {
      label: "Open circuit",
      tex: "I=0\\Rightarrow V_{\\mathrm{term}}=\\mathcal E",
    },
  ]}
/>

### Derivation 2: Include internal resistance

A real source can be modeled as an ideal emf in series with an internal resistance. When current leaves the positive terminal, some voltage is lost inside the source.

<PhysicsDerivation
  items={[
    {
      label: "Internal drop",
      tex: "V_r=Ir",
    },
    {
      label: "Terminal voltage",
      tex: "V_{\\mathrm{term}}=\\mathcal E-Ir",
    },
    {
      label: "Load relation",
      tex: "V_{\\mathrm{term}}=IR",
    },
  ]}
/>

### Derivation 3: Simple one-loop model

For a source with internal resistance \\(r\\) connected to a load \\(R\\), the emf is used across both resistances.

<PhysicsDerivation
  items={[
    {
      label: "Loop energy per charge",
      tex: "\\mathcal E-IR-Ir=0",
    },
    {
      label: "Total resistance",
      tex: "\\mathcal E=I(R+r)",
    },
    {
      label: "Loop current",
      tex: "I=\\frac{\\mathcal E}{R+r}",
    },
  ]}
/>

## Rules

These are the compact source and loop relations.

<Equation label="emf definition" tex="\mathcal E=\frac{W_{\mathrm{source}}}{q}" />

<Equation label="Terminal voltage" tex="V_{\mathrm{term}}=\mathcal E-Ir\quad\text{discharging source}" />

<Equation label="Simple loop" tex="I=\frac{\mathcal E}{R+r}" />

<Equation label="Open circuit" tex="I=0\Rightarrow V_{\mathrm{term}}=\mathcal E" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(9.0\\,\\mathrm{V}\\) battery with internal resistance \\(0.50\\,\\Omega\\) drives a \\(17.5\\,\\Omega\\) load. Find the current.",
      answer: "\\[I=\\frac{\\mathcal E}{R+r}=\\frac{9.0}{17.5+0.50}=0.50\\,\\mathrm{A}\\]",
    },
    {
      title: "Example 2",
      question: "For the same battery and current, find the terminal voltage.",
      answer: "\\[V_{\\mathrm{term}}=\\mathcal E-Ir=9.0-(0.50)(0.50)=8.75\\,\\mathrm{V}\\]",
    },
  ]}
/>

## Checks

- emf is not a force; it is energy per charge.
- A real discharging source has terminal voltage below its emf.
- Internal resistance reduces current in a load circuit.
- Open-circuit terminal voltage equals emf only when no current flows.`;
