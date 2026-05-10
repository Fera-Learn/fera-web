export const content = String.raw`## Principle

Electrical meters infer current or voltage by becoming part of the circuit. A good meter has a resistance that makes its disturbance small compared with the resistance being measured.

## Notation

<Notation
  items={[
    { symbol: "R_A", meaning: "ammeter resistance", unit: "\\Omega" },
    { symbol: "R_V", meaning: "voltmeter resistance", unit: "\\Omega" },
    { symbol: "R_g", meaning: "galvanometer coil resistance", unit: "\\Omega" },
    { symbol: "I_g", meaning: "full-scale galvanometer current", unit: "A" },
    { symbol: "R_s", meaning: "shunt resistance for an ammeter range", unit: "\\Omega" },
    { symbol: "R_m", meaning: "series multiplier resistance for a voltmeter range", unit: "\\Omega" },
  ]}
/>

## Method

### Derivation 1: Ammeter loading

An ammeter must be placed in series with the element whose current is being measured. Its resistance adds to the circuit resistance, so an ideal ammeter has zero resistance.

<PhysicsDerivation
  items={[
    {
      label: "Measured current with meter inserted",
      tex: "I_{\\mathrm{meas}}=\\frac{V}{R+R_A}",
    },
    {
      label: "Ideal ammeter condition",
      tex: "R_A\\rightarrow 0",
    },
  ]}
/>

### Derivation 2: Voltmeter loading

A voltmeter must be placed in parallel with the element whose potential difference is being measured. Its resistance forms an extra parallel path, so an ideal voltmeter has infinite resistance.

<PhysicsDerivation
  items={[
    {
      label: "Loaded resistance of measured element",
      tex: "R_{\\mathrm{loaded}}=\\left(\\frac{1}{R}+\\frac{1}{R_V}\\right)^{-1}",
    },
    {
      label: "Ideal voltmeter condition",
      tex: "R_V\\rightarrow\\infty",
    },
  ]}
/>

### Derivation 3: Extending a galvanometer

A galvanometer reaches full scale at a small current. A shunt creates an ammeter range by carrying the extra current. A series multiplier creates a voltmeter range by dropping the extra voltage.

<PhysicsDerivation
  items={[
    {
      label: "Ammeter shunt condition",
      tex: "I_gR_g=(I-I_g)R_s",
    },
    {
      label: "Shunt resistance",
      tex: "R_s=\\frac{I_gR_g}{I-I_g}",
    },
    {
      label: "Voltmeter range condition",
      tex: "V=I_g(R_g+R_m)",
    },
    {
      label: "Multiplier resistance",
      tex: "R_m=\\frac{V}{I_g}-R_g",
    },
  ]}
/>

## Rules

<Equation label="Ammeter placement" tex="\text{series connection; ideal }R_A=0" />

<Equation label="Voltmeter placement" tex="\text{parallel connection; ideal }R_V=\infty" />

<Equation label="Parallel loading" tex="R_{\mathrm{loaded}}=R\parallel R_V" />

<Equation label="Ammeter shunt" tex="R_s=\frac{I_gR_g}{I-I_g}" />

<Equation label="Voltmeter multiplier" tex="R_m=\frac{V}{I_g}-R_g" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(1.0\\,\\mathrm{mA}\\), \\(50\\,\\Omega\\) galvanometer is converted to a \\(1.0\\,\\mathrm{A}\\) ammeter. Find the shunt.",
      answer: "\\[R_s=\\frac{(1.0\\times10^{-3})(50)}{1.0-1.0\\times10^{-3}}=5.0\\times10^{-2}\\,\\Omega\\]",
    },
    {
      title: "Example 2",
      question: "A \\(50\\,\\mu\\mathrm{A}\\), \\(100\\,\\Omega\\) galvanometer is converted to a \\(10\\,\\mathrm{V}\\) voltmeter. Find the multiplier.",
      answer: "\\[R_m=\\frac{10}{50\\times10^{-6}}-100=1.999\\times10^5\\,\\Omega\\]",
    },
  ]}
/>

## Checks

- An ammeter in parallel with a low-resistance source is close to a short circuit.
- A voltmeter with resistance comparable to the measured resistance changes the voltage it is trying to measure.
- For low-resistance measurements, ammeter resistance can dominate the error.
- For high-resistance measurements, voltmeter current can dominate the error.
- Always distinguish the meter reading from the undisturbed circuit value.`;
