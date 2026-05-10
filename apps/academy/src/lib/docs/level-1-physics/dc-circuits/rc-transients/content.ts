export const content = String.raw`## Principle

An RC circuit changes exponentially because the capacitor voltage changes the resistor current, and the resistor current changes the capacitor charge.

## Notation

<Notation
  items={[
    { symbol: "R", meaning: "resistance in the charging or discharging path", unit: "\\Omega" },
    { symbol: "C", meaning: "capacitance", unit: "F" },
    { symbol: "\\tau", meaning: "time constant", unit: "s" },
    { symbol: "q(t)", meaning: "capacitor charge", unit: "C" },
    { symbol: "V_C(t)", meaning: "capacitor voltage", unit: "V" },
    { symbol: "I(t)", meaning: "circuit current", unit: "A" },
  ]}
/>

## Method

### Derivation 1: Charging from an ideal source

For a series resistor and capacitor connected to a DC source, the loop equation relates the source, the resistor drop, and the capacitor voltage.

<PhysicsDerivation
  items={[
    {
      label: "Loop equation",
      tex: "\\mathcal E-IR-\\frac{q}{C}=0",
    },
    {
      label: "Current is charge rate",
      tex: "I=\\frac{dq}{dt}",
    },
    {
      label: "Differential equation",
      tex: "R\\frac{dq}{dt}+\\frac{q}{C}=\\mathcal E",
    },
    {
      label: "Charging solution",
      tex: "q(t)=C\\mathcal E\\left(1-e^{-t/RC}\\right)",
    },
  ]}
/>

### Derivation 2: Discharging

With the source removed, the capacitor drives current through the resistor. The stored charge decays exponentially.

<PhysicsDerivation
  items={[
    {
      label: "Discharge loop",
      tex: "IR+\\frac{q}{C}=0",
    },
    {
      label: "Discharge charge",
      tex: "q(t)=q_0e^{-t/RC}",
    },
    {
      label: "Discharge voltage",
      tex: "V_C(t)=V_0e^{-t/RC}",
    },
  ]}
/>

### Derivation 3: Time constant

The time constant is the product of the resistance seen by the capacitor and the capacitance.

<PhysicsDerivation
  items={[
    {
      label: "Time constant",
      tex: "\\tau=RC",
    },
    {
      label: "One time constant while charging",
      tex: "V_C(\\tau)=\\mathcal E(1-e^{-1})\\approx0.632\\mathcal E",
    },
    {
      label: "One time constant while discharging",
      tex: "V_C(\\tau)=V_0e^{-1}\\approx0.368V_0",
    },
  ]}
/>

## Rules

<Equation label="Time constant" tex="\tau=RC" />

<Equation label="Charging voltage" tex="V_C(t)=\mathcal E(1-e^{-t/\tau})" />

<Equation label="Charging current" tex="I(t)=\frac{\mathcal E}{R}e^{-t/\tau}" />

<Equation label="Discharging voltage" tex="V_C(t)=V_0e^{-t/\tau}" />

<Equation label="Capacitor current relation" tex="I=C\frac{dV_C}{dt}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(20\\,\\mathrm{k}\\Omega\\) resistor charges a \\(50\\,\\mu\\mathrm{F}\\) capacitor. Find \\(\\tau\\).",
      answer: "\\[\\tau=RC=(2.0\\times10^4)(50\\times10^{-6})=1.0\\,\\mathrm{s}\\]",
    },
    {
      title: "Example 2",
      question: "A capacitor discharges from \\(12\\,\\mathrm{V}\\) for two time constants. Find its voltage.",
      answer: "\\[V_C=12e^{-2}=1.6\\,\\mathrm{V}\\]",
    },
  ]}
/>

## Checks

- Capacitor voltage cannot jump discontinuously in a circuit with finite current.
- At the instant an uncharged capacitor is connected, it acts like a zero-voltage element.
- After a long time in a DC circuit, an ideal capacitor branch is open.
- The exponential approaches its final value asymptotically.
- When the capacitor is connected to a larger circuit, use the Thevenin resistance seen by the capacitor for \\(R\\).`;
