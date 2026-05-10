export const content = String.raw`## Principle

Average power in a sinusoidal AC circuit depends on rms voltage, rms current, and the phase angle between them.

## Notation

<Notation
  items={[
    { symbol: "P_{\\mathrm{avg}}", meaning: "average real power", unit: "W" },
    { symbol: "V_{\\mathrm{rms}}", meaning: "rms source voltage", unit: "V" },
    { symbol: "I_{\\mathrm{rms}}", meaning: "rms current", unit: "A" },
    { symbol: "\\phi", meaning: "phase angle between voltage and current", unit: "rad" },
    { symbol: "\\cos\\phi", meaning: "power factor", unit: "" },
    { symbol: "R", meaning: "resistance where energy is dissipated", unit: "\\Omega" },
    { symbol: "Z", meaning: "impedance magnitude", unit: "\\Omega" },
  ]}
/>

## Method

### Derivation 1: Use rms quantities

For sinusoidal steady state, average power is the rms voltage-current product multiplied by the power factor.

<PhysicsDerivation
  items={[
    {
      label: "Average power",
      tex: "P_{\\mathrm{avg}}=V_{\\mathrm{rms}}I_{\\mathrm{rms}}\\cos\\phi",
    },
    {
      label: "Power factor",
      tex: "\\cos\\phi=\\frac{R}{Z}",
    },
  ]}
/>

### Derivation 2: Use the resistor power

Only resistance dissipates net energy over a full cycle in an ideal LRC circuit.

<PhysicsDerivation
  items={[
    {
      label: "Resistive power",
      tex: "P_{\\mathrm{avg}}=I_{\\mathrm{rms}}^2R",
    },
    {
      label: "Equivalent voltage form",
      tex: "P_{\\mathrm{avg}}=\\frac{V_{\\mathrm{rms}}^2R}{Z^2}",
    },
  ]}
/>

### Derivation 3: Interpret reactive components

Ideal capacitors and inductors store energy during part of a cycle and return it during another part. Their average power over a cycle is zero.

## Rules

<Equation label="Average AC power" tex="P_{\mathrm{avg}}=V_{\mathrm{rms}}I_{\mathrm{rms}}\cos\phi" />

<Equation label="Power factor" tex="\cos\phi=\frac{R}{Z}" />

<Equation label="Series LRC power" tex="P_{\mathrm{avg}}=I_{\mathrm{rms}}^2R" />

<Equation label="Apparent power" tex="S=V_{\mathrm{rms}}I_{\mathrm{rms}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An AC circuit has \\(V_{\\mathrm{rms}}=120\\,\\mathrm V\\), \\(I_{\\mathrm{rms}}=2.0\\,\\mathrm A\\), and power factor \\(0.80\\). Find average power.",
      answer: "\\[P_{\\mathrm{avg}}=V_{\\mathrm{rms}}I_{\\mathrm{rms}}\\cos\\phi=(120)(2.0)(0.80)=192\\,\\mathrm W\\]",
    },
    {
      title: "Example 2",
      question: "A series circuit has \\(I_{\\mathrm{rms}}=3.0\\,\\mathrm A\\) and \\(R=20\\,\\Omega\\). Find average power.",
      answer: "\\[P_{\\mathrm{avg}}=I_{\\mathrm{rms}}^2R=(3.0)^2(20)=180\\,\\mathrm W\\]",
    },
  ]}
/>

## Checks

- Use rms values in average power formulas.
- Ideal capacitors and inductors have zero average power over a cycle.
- The power factor is between \\(0\\) and \\(1\\) for passive series circuits.
- Apparent power is measured in volt-amperes; real average power is measured in watts.`;
