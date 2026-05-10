export const content = String.raw`## Principle

Elastic deformation reverses; plastic deformation leaves permanent strain.

## Notation

<Notation
  items={[
    { symbol: "\\sigma_y", meaning: "yield stress", unit: "Pa" },
    { symbol: "\\sigma,\\sigma_{\\max},\\sigma_{\\mathrm{unload}}", meaning: "applied, maximum, and unloading stress", unit: "Pa" },
    { symbol: "\\epsilon,\\epsilon_{\\mathrm{total}},\\epsilon_{\\mathrm{elastic}},\\epsilon_{\\mathrm{plastic}}", meaning: "strain variables for loading and unloading", unit: "none" },
    { symbol: "F,A", meaning: "load and cross-sectional area", unit: "N, m^{2}" },
    { symbol: "Y", meaning: "elastic slope", unit: "Pa" },
    { symbol: "u,S", meaning: "elastic energy density and factor of safety", unit: "J m^{-3}, none" },
  ]}
/>

## Method

### Derivation 1: Identify the elastic region

<StressStrainDiagram
  title="Elastic and plastic regions"
  caption="Unloading after plastic deformation leaves a nonzero strain intercept."
  elasticEnd={{ strain: 0.0015, stress: 250 }}
  plasticPoint={{ strain: 0.008, stress: 300 }}
  ultimatePoint={{ strain: 0.018, stress: 360 }}
  fracturePoint={{ strain: 0.024, stress: 300 }}
/>

<PhysicsDerivation
  items={[
    {
      label: "Elastic law",
      tex: "\\sigma=Y\\epsilon\\quad(\\sigma<\\sigma_y)",
      note: "In this region unloading returns the material to zero strain.",
    },
    {
      label: "Yield point",
      tex: "\\sigma=\\sigma_y",
    },
  ]}
/>

### Derivation 2: Separate elastic recovery from permanent strain

Beyond yield, unloading still follows slope \\(Y\\), but it no longer returns to the origin.

<PhysicsDerivation
  items={[
    {
      label: "Split the total strain",
      tex: "\\epsilon_{\\mathrm{total}}=\\epsilon_{\\mathrm{elastic}}+\\epsilon_{\\mathrm{plastic}}",
    },
    {
      label: "Recovered elastic part",
      tex: "\\epsilon_{\\mathrm{elastic}}=\\frac{\\sigma_{\\mathrm{unload}}}{Y}",
    },
    {
      label: "Permanent strain",
      tex: "\\epsilon_{\\mathrm{plastic}}=\\epsilon_{\\mathrm{total}}-\\frac{\\sigma_{\\mathrm{unload}}}{Y}",
    },
  ]}
/>

### Derivation 3: Build the design limit

Design checks compare working stress with a reduced yield stress, not with the breaking stress.

<PhysicsDerivation
  items={[
    {
      label: "Working stress",
      tex: "\\sigma=\\frac{F}{A}",
    },
    {
      label: "Yield check",
      tex: "\\sigma_{\\max}<\\frac{\\sigma_y}{S}",
    },
  ]}
/>

### Derivation 4: Read elastic energy from the graph

In the elastic region, the energy stored per unit volume is the area under the straight-line stress-strain graph.

<PhysicsDerivation
  items={[
    {
      label: "Energy density",
      tex: "u=\\frac{1}{2}\\sigma\\epsilon",
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Elastic law" tex="\sigma=Y\epsilon\quad(\sigma<\sigma_y)" />

<Equation label="Yield check" tex="\sigma_{\max}<\frac{\sigma_y}{S}" />

<Equation label="Energy density" tex="u=\frac{1}{2}\sigma\epsilon" />

<Equation label="Permanent strain" tex="\epsilon_{\mathrm{plastic}}=\epsilon_{\mathrm{total}}-\frac{\sigma_{\mathrm{unload}}}{Y}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A material has \\(Y=200\\,\\mathrm{GPa}\\) and \\(\\sigma_y=250\\,\\mathrm{MPa}\\). Find yield strain.",
      answer: "\\[\\epsilon_y=\\frac{\\sigma_y}{Y}=\\frac{250\\times10^6}{200\\times10^9}=1.25\\times10^{-3}\\]",
    },
    {
      title: "Example 2",
      question: "A part must carry \\(12\\,\\mathrm{kN}\\) with safety factor \\(3\\) using yield stress \\(240\\,\\mathrm{MPa}\\). Find minimum area.",
      answer: "\\[A\\ge\\frac{FS}{\\sigma_y}=\\frac{12000(3)}{240\\times10^6}=1.5\\times10^{-4}\\,\\mathrm{m^2}\\]",
    },
  ]}
/>

## Checks

- Elastic means reversible, not weak.
- Yield is a stress limit.
- Ultimate stress is not first yield.
- Safety factor lowers working stress.`;
