export const content = String.raw`## Principle

The microscopic model connects macroscopic current to charge-carrier density, carrier charge, cross-sectional area, and drift velocity.

## Notation

<Notation
  items={[
    { symbol: "n", meaning: "mobile charge-carrier number density", unit: "m^{-3}" },
    { symbol: "q", meaning: "charge of one carrier", unit: "C" },
    { symbol: "\\vec v_d", meaning: "drift velocity of carriers", unit: "m s^{-1}" },
    { symbol: "A", meaning: "wire cross-sectional area", unit: "m^{2}" },
    { symbol: "I", meaning: "conventional current", unit: "A" },
    { symbol: "\\vec J", meaning: "current density", unit: "A m^{-2}" },
    { symbol: "\\mu", meaning: "carrier mobility", unit: "m^{2} V^{-1} s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Count carriers crossing a surface

In time \\(\Delta t\\), carriers with drift speed \\(v_d\\) move through length \\(v_d\Delta t\\). The volume swept through area \\(A\\) is \\(Av_d\Delta t\\).

<PhysicsDerivation
  items={[
    {
      label: "Swept volume",
      tex: "\\Delta V_{\\mathrm{vol}}=A v_d\\Delta t",
    },
    {
      label: "Number of carriers",
      tex: "\\Delta N=nA v_d\\Delta t",
    },
    {
      label: "Charge crossing",
      tex: "\\Delta Q=|q|nA v_d\\Delta t",
    },
    {
      label: "Current magnitude",
      tex: "I=n|q|A v_d",
    },
  ]}
/>

### Derivation 2: Vector current density

Current density includes the sign of the carrier charge. Negative carriers drifting one way produce conventional current the other way.

<PhysicsDerivation
  items={[
    {
      label: "Vector current density",
      tex: "\\vec J=nq\\vec v_d",
    },
    {
      label: "Current through area",
      tex: "I=JA\\quad\\text{for uniform flow normal to area}",
    },
    {
      label: "Electron drift",
      tex: "q=-e\\Rightarrow \\vec J\\ \\text{opposite }\\vec v_d",
    },
  ]}
/>

### Derivation 3: Mobility and conductivity

In a simple ohmic model, drift velocity is proportional to electric field. That proportionality leads to conductivity.

<PhysicsDerivation
  items={[
    {
      label: "Drift response",
      tex: "\\vec v_d=\\mu\\vec E\\quad\\text{for positive carriers}",
    },
    {
      label: "Current density",
      tex: "\\vec J=nq\\mu\\vec E",
    },
    {
      label: "Conductivity",
      tex: "\\sigma=nq\\mu\\quad\\text{for positive carriers}",
    },
  ]}
/>

## Rules

These are the compact microscopic conduction relations.

<Equation label="Current magnitude" tex="I=n|q|A v_d" />

<Equation label="Current density" tex="\vec J=nq\vec v_d" />

<Equation label="Uniform flow" tex="I=JA" />

<Equation label="Ohmic mobility" tex="\vec J=\sigma\vec E" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A wire has \\(n=8.0\\times10^{28}\\,\\mathrm{m^{-3}}\\), area \\(1.0\\times10^{-6}\\,\\mathrm{m^2}\\), and current \\(1.6\\,\\mathrm{A}\\). Estimate electron drift speed.",
      answer: "\\[v_d=\\frac{I}{n e A}=\\frac{1.6}{(8.0\\times10^{28})(1.60\\times10^{-19})(1.0\\times10^{-6})}=1.25\\times10^{-4}\\,\\mathrm{m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "If electrons drift left in a metal wire, what is the conventional current direction?",
      answer: "Electrons are negative, so conventional current is opposite their drift: to the right.",
    },
  ]}
/>

## Checks

- Drift speed is usually very small compared with random thermal speeds.
- Conventional current is opposite electron drift in metals.
- \\(n\\) counts mobile carriers per volume, not all particles in the material.
- Use the magnitude form \\(I=n|q|Av_d\\) when solving for speed.`;
