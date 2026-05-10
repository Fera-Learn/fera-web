export const content = String.raw`## Principle

In a series LRC circuit, the same current passes through every component, but the component voltages are not generally in phase. Impedance combines resistance and net reactance.

## Notation

<Notation
  items={[
    { symbol: "R", meaning: "series resistance", unit: "\\Omega" },
    { symbol: "L", meaning: "series inductance", unit: "H" },
    { symbol: "C", meaning: "series capacitance", unit: "F" },
    { symbol: "X_L", meaning: "inductive reactance", unit: "\\Omega" },
    { symbol: "X_C", meaning: "capacitive reactance", unit: "\\Omega" },
    { symbol: "Z", meaning: "series impedance magnitude", unit: "\\Omega" },
    { symbol: "\\phi", meaning: "phase angle of source voltage relative to current", unit: "rad" },
  ]}
/>

## Method

### Derivation 1: Find the reactances

Convert frequency to angular frequency, then compute the capacitor and inductor reactances.

<PhysicsDerivation
  items={[
    {
      label: "Angular frequency",
      tex: "\\omega=2\\pi f",
    },
    {
      label: "Reactances",
      tex: "X_L=\\omega L,\\qquad X_C=\\frac{1}{\\omega C}",
    },
  ]}
/>

### Derivation 2: Build the impedance triangle

In a series circuit, the resistive voltage is in phase with current, the inductor voltage leads by \\(90^\\circ\\), and the capacitor voltage lags by \\(90^\\circ\\). The net reactive part is \\(X_L-X_C\\).

<PhysicsDerivation
  items={[
    {
      label: "Impedance magnitude",
      tex: "Z=\\sqrt{R^2+(X_L-X_C)^2}",
    },
    {
      label: "Current",
      tex: "I_{\\mathrm{rms}}=\\frac{V_{\\mathrm{rms}}}{Z}",
    },
    {
      label: "Phase angle",
      tex: "\\tan\\phi=\\frac{X_L-X_C}{R}",
    },
  ]}
/>

### Derivation 3: Interpret the sign

If \\(X_L>X_C\\), the circuit is inductive and source voltage leads current. If \\(X_C>X_L\\), the circuit is capacitive and source voltage lags current.

## Rules

<Equation label="Series LRC impedance" tex="Z=\sqrt{R^2+(X_L-X_C)^2}" />

<Equation label="Series current" tex="I_{\mathrm{rms}}=\frac{V_{\mathrm{rms}}}{Z}" />

<Equation label="Phase" tex="\tan\phi=\frac{X_L-X_C}{R}" />

<Equation label="Component voltages" tex="V_R=IR,\qquad V_L=IX_L,\qquad V_C=IX_C" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A series circuit has \\(R=30\\,\\Omega\\), \\(X_L=80\\,\\Omega\\), and \\(X_C=40\\,\\Omega\\). Find \\(Z\\).",
      answer: "\\[Z=\\sqrt{30^2+(80-40)^2}=50\\,\\Omega\\]",
    },
    {
      title: "Example 2",
      question: "If the source rms voltage is \\(120\\,\\mathrm V\\) for the circuit above, find \\(I_{\\mathrm{rms}}\\).",
      answer: "\\[I_{\\mathrm{rms}}=\\frac{V_{\\mathrm{rms}}}{Z}=\\frac{120}{50}=2.4\\,\\mathrm A\\]",
    },
  ]}
/>

## Checks

- Series elements share the same current.
- Reactances subtract because inductor and capacitor voltages are opposite in phase.
- The source voltage is the phasor sum of component voltages.
- \\(Z\\) is never less than \\(R\\) in a series LRC circuit.`;
