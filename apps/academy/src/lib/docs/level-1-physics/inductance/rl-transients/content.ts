export const content = String.raw`## Principle

An RL circuit changes current exponentially because an inductor resists current changes.

## Notation

<Notation
  items={[
    { symbol: "R", meaning: "series resistance", unit: "\\Omega" },
    { symbol: "L", meaning: "inductance", unit: "H" },
    { symbol: "\\tau", meaning: "RL time constant", unit: "s" },
    { symbol: "I(t)", meaning: "current as a function of time", unit: "A" },
    { symbol: "\\mathcal E", meaning: "source emf", unit: "V" },
    { symbol: "V_L", meaning: "voltage across the inductor", unit: "V" },
  ]}
/>

## Method

### Derivation 1: Current growth

After a battery is connected to a series \\(RL\\) circuit, Kirchhoff's loop law balances source, resistor drop, and inductor voltage.

<PhysicsDerivation
  items={[
    {
      label: "Loop equation",
      tex: "\\mathcal E-IR-L\\frac{dI}{dt}=0",
    },
    {
      label: "Time constant",
      tex: "\\tau=\\frac{L}{R}",
    },
    {
      label: "Final current",
      tex: "I_f=\\frac{\\mathcal E}{R}",
    },
    {
      label: "Growth solution",
      tex: "I(t)=I_f\\left(1-e^{-t/\\tau}\\right)",
    },
  ]}
/>

### Derivation 2: Current decay

When the source is removed and the inductor discharges through the resistor, the stored magnetic energy is dissipated in \\(R\\).

<PhysicsDerivation
  items={[
    {
      label: "Decay equation",
      tex: "L\\frac{dI}{dt}+IR=0",
    },
    {
      label: "Decay solution",
      tex: "I(t)=I_0e^{-t/\\tau}",
    },
    {
      label: "Resistor power",
      tex: "P_R=I^2R",
    },
  ]}
/>

## Rules

<Equation label="RL time constant" tex="\displaystyle \tau=\frac{L}{R}" />

<Equation label="Current growth" tex="\displaystyle I(t)=\frac{\mathcal E}{R}\left(1-e^{-tR/L}\right)" />

<Equation label="Current decay" tex="I(t)=I_0e^{-tR/L}" />

<Equation label="Initial slope" tex="\displaystyle \left.\frac{dI}{dt}\right|_{0}=\frac{\mathcal E}{L}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(0.50\\,\\mathrm{H}\\) inductor is in series with \\(10\\,\\Omega\\). Find \\(\\tau\\).",
      answer: "\\[\\tau=\\frac{L}{R}=\\frac{0.50}{10}=5.0\\times10^{-2}\\,\\mathrm{s}\\]",
    },
    {
      title: "Example 2",
      question: "A \\(12\\,\\mathrm{V}\\) source drives \\(6.0\\,\\Omega\\) and \\(0.30\\,\\mathrm{H}\\) in series. Find final current.",
      answer: "\\[I_f=\\frac{\\mathcal E}{R}=\\frac{12}{6.0}=2.0\\,\\mathrm{A}\\]",
    },
  ]}
/>

## Checks

- Inductor current cannot jump discontinuously in a finite-voltage circuit.
- At the first instant of switch-on, an ideal inductor behaves like an open branch.
- After a long time in DC, an ideal inductor behaves like a wire.`;
