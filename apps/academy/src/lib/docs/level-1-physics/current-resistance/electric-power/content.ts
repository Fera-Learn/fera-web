export const content = String.raw`## Principle

Electric power is the rate at which electrical energy is transferred by charges moving through a potential difference.

## Notation

<Notation
  items={[
    { symbol: "P", meaning: "electric power", unit: "W" },
    { symbol: "\\Delta U", meaning: "energy transferred", unit: "J" },
    { symbol: "\\Delta t", meaning: "time interval", unit: "s" },
    { symbol: "I", meaning: "current", unit: "A" },
    { symbol: "V", meaning: "potential difference", unit: "V" },
    { symbol: "R", meaning: "resistance", unit: "\\Omega" },
  ]}
/>

## Method

### Derivation 1: Build power from energy per charge

A potential difference gives energy transfer per charge. Current gives charge per time. Multiplying them gives energy per time.

<PhysicsDerivation
  items={[
    {
      label: "Energy per charge",
      tex: "\\Delta U=qV",
    },
    {
      label: "Charge flow",
      tex: "I=\\frac{\\Delta q}{\\Delta t}",
    },
    {
      label: "Power",
      tex: "P=\\frac{\\Delta U}{\\Delta t}=IV",
    },
  ]}
/>

### Derivation 2: Resistor power forms

For an ohmic resistor, combine \\(P=IV\\) with \\(V=IR\\).

<PhysicsDerivation
  items={[
    {
      label: "Start",
      tex: "P=IV",
    },
    {
      label: "Substitute \\(V=IR\\)",
      tex: "P=I^2R",
    },
    {
      label: "Substitute \\(I=V/R\\)",
      tex: "P=\\frac{V^2}{R}",
    },
  ]}
/>

### Derivation 3: Energy over time

If power is constant, total energy transferred is power multiplied by time.

<PhysicsDerivation
  items={[
    {
      label: "Power definition",
      tex: "P=\\frac{\\Delta U}{\\Delta t}",
    },
    {
      label: "Constant power",
      tex: "\\Delta U=P\\Delta t",
    },
  ]}
/>

## Rules

These are the compact power relations.

<Equation label="Power" tex="P=IV" />

<Equation label="Resistor power" tex="P=I^2R=\frac{V^2}{R}" />

<Equation label="Energy transfer" tex="\Delta U=P\Delta t\quad\text{for constant power}" />

<Equation label="Watt" tex="1\,\mathrm{W}=1\,\mathrm{J\,s^{-1}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A device has \\(12\\,\\mathrm{V}\\) across it and current \\(2.0\\,\\mathrm{A}\\). Find the power.",
      answer: "\\[P=IV=(2.0)(12)=24\\,\\mathrm{W}\\]",
    },
    {
      title: "Example 2",
      question: "A \\(40\\,\\Omega\\) resistor carries \\(0.30\\,\\mathrm{A}\\). Find the rate of thermal energy production.",
      answer: "\\[P=I^2R=(0.30)^2(40)=3.6\\,\\mathrm{W}\\]",
    },
  ]}
/>

## Checks

- \\(P=IV\\) uses the potential difference across the element carrying current \\(I\\).
- \\(I^2R\\) and \\(V^2/R\\) apply directly to ohmic resistors.
- Power is a rate; energy also needs a time interval.
- A passive resistor converts electrical energy into internal energy.`;
