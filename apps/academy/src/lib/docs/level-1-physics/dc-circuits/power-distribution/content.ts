export const content = String.raw`## Principle

Power distribution is the accounting of energy transfer in a circuit. The same delivered power can require very different currents, and current determines resistive loss.

## Notation

<Notation
  items={[
    { symbol: "P", meaning: "electrical power", unit: "W" },
    { symbol: "I", meaning: "current", unit: "A" },
    { symbol: "V", meaning: "potential difference", unit: "V" },
    { symbol: "R_{\\mathrm{line}}", meaning: "total resistance of supply and return conductors", unit: "\\Omega" },
    { symbol: "R_L", meaning: "load resistance", unit: "\\Omega" },
    { symbol: "\\eta", meaning: "efficiency", unit: "unitless" },
  ]}
/>

## Method

### Derivation 1: Power in a circuit element

Power is energy transferred per unit time. A current moves charge through a potential difference, so the power associated with an element is current times voltage.

<PhysicsDerivation
  items={[
    {
      label: "Energy per charge",
      tex: "\\Delta U=qV",
    },
    {
      label: "Power",
      tex: "P=\\frac{dU}{dt}=V\\frac{dq}{dt}",
    },
    {
      label: "Circuit form",
      tex: "P=IV",
    },
    {
      label: "Resistor forms",
      tex: "P=I^2R=\\frac{V^2}{R}",
    },
  ]}
/>

### Derivation 2: Line losses

Transmission wires have resistance. If the same current passes through the line resistance, the line converts electrical energy into thermal energy.

<PhysicsDerivation
  items={[
    {
      label: "Line voltage drop",
      tex: "\\Delta V_{\\mathrm{line}}=IR_{\\mathrm{line}}",
    },
    {
      label: "Line loss",
      tex: "P_{\\mathrm{loss}}=I^2R_{\\mathrm{line}}",
    },
    {
      label: "Current for delivered power",
      tex: "I\\approx\\frac{P_{\\mathrm{delivered}}}{V_{\\mathrm{delivery}}}",
    },
    {
      label: "Loss scaling",
      tex: "P_{\\mathrm{loss}}\\approx\\frac{P_{\\mathrm{delivered}}^2R_{\\mathrm{line}}}{V_{\\mathrm{delivery}}^2}",
    },
  ]}
/>

### Derivation 3: Source resistance and load power

A real source can be modeled as an ideal emf in series with internal resistance. The load power is not the same as the source power because some power is lost inside the source.

<PhysicsDerivation
  items={[
    {
      label: "Series current",
      tex: "I=\\frac{\\mathcal E}{r+R_L}",
    },
    {
      label: "Load power",
      tex: "P_L=I^2R_L=\\frac{\\mathcal E^2R_L}{(r+R_L)^2}",
    },
    {
      label: "Efficiency",
      tex: "\\eta=\\frac{P_L}{P_L+I^2r}=\\frac{R_L}{R_L+r}",
    },
  ]}
/>

## Rules

<Equation label="Electrical power" tex="P=IV" />

<Equation label="Power in a resistor" tex="P=I^2R=\frac{V^2}{R}" />

<Equation label="Line loss" tex="P_{\mathrm{loss}}=I^2R_{\mathrm{line}}" />

<Equation label="Efficiency" tex="\eta=\frac{P_{\mathrm{out}}}{P_{\mathrm{in}}}" />

<Equation label="Maximum load power condition" tex="R_L=r" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(2.0\\,\\mathrm{kW}\\) load is supplied at \\(100\\,\\mathrm{V}\\). Find the current.",
      answer: "\\[I=\\frac{P}{V}=\\frac{2000}{100}=20\\,\\mathrm{A}\\]",
    },
    {
      title: "Example 2",
      question: "The total line resistance is \\(2.0\\,\\Omega\\). Compare the line loss for delivering \\(2.0\\,\\mathrm{kW}\\) at \\(100\\,\\mathrm{V}\\) and at \\(1000\\,\\mathrm{V}\\).",
      answer: "\\[P_{\\mathrm{loss,100V}}=(20)^2(2.0)=800\\,\\mathrm{W}\\]\\[P_{\\mathrm{loss,1000V}}=(2.0)^2(2.0)=8.0\\,\\mathrm{W}\\]",
    },
  ]}
/>

## Checks

- Line loss depends on current squared, so reducing current is more valuable than it first appears.
- Higher delivery voltage lowers current for the same delivered power.
- Maximum power transfer is not maximum efficiency; when \\(R_L=r\\), half the source power is lost internally.
- Terminal voltage falls below emf when current is drawn from a source with internal resistance.
- Use total line resistance for the complete current path, including the supply and return conductors.`;
