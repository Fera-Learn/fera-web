export const content = String.raw`## Principle

Electromagnetic waves carry energy and momentum. Their energy flow is described by the Poynting vector, and their momentum transfer produces radiation pressure.

## Notation

<Notation
  items={[
    { symbol: "u", meaning: "electromagnetic energy density", unit: "J m^{-3}" },
    { symbol: "\\vec S", meaning: "Poynting vector", unit: "W m^{-2}" },
    { symbol: "I", meaning: "average intensity", unit: "W m^{-2}" },
    { symbol: "p_{\\mathrm{rad}}", meaning: "radiation pressure", unit: "Pa" },
    { symbol: "A", meaning: "area receiving the wave", unit: "m^{2}" },
  ]}
/>

## Method

### Derivation 1: Energy density

Electric and magnetic fields both store energy.

<PhysicsDerivation
  items={[
    {
      label: "Electric contribution",
      tex: "u_E=\\frac12\\epsilon_0E^2",
    },
    {
      label: "Magnetic contribution",
      tex: "u_B=\\frac{B^2}{2\\mu_0}",
    },
    {
      label: "Plane wave",
      tex: "u=u_E+u_B=\\epsilon_0E^2=\\frac{B^2}{\\mu_0}",
    },
  ]}
/>

### Derivation 2: Energy flow

The Poynting vector points in the direction of energy transport.

<PhysicsDerivation
  items={[
    {
      label: "Poynting vector",
      tex: "\\vec S=\\frac{1}{\\mu_0}\\vec E\\times\\vec B",
    },
    {
      label: "Instantaneous magnitude",
      tex: "S=\\frac{EB}{\\mu_0}=c\\epsilon_0E^2",
    },
  ]}
/>

### Derivation 3: Average intensity and pressure

For sinusoidal waves, average over a full cycle.

<PhysicsDerivation
  items={[
    {
      label: "Average intensity",
      tex: "I=\\langle S\\rangle=\\frac12c\\epsilon_0E_0^2=\\frac{E_0B_0}{2\\mu_0}",
    },
    {
      label: "Absorbing surface",
      tex: "p_{\\mathrm{rad}}=\\frac{I}{c}",
    },
    {
      label: "Reflecting surface",
      tex: "p_{\\mathrm{rad}}=\\frac{2I}{c}",
    },
  ]}
/>

## Rules

<Equation label="Poynting vector" tex="\vec S=\frac{1}{\mu_0}\vec E\times\vec B" />

<Equation label="Average intensity" tex="I=\frac12c\epsilon_0E_0^2" />

<Equation label="Power on area" tex="P=IA" />

<Equation label="Radiation pressure" tex="p_{\mathrm{rad}}=\frac{I}{c}\ \text{or}\ \frac{2I}{c}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A beam has intensity \\(800\\,\\mathrm{W\\,m^{-2}}\\) and hits \\(0.20\\,\\mathrm{m^2}\\). Find the power delivered.",
      answer: "\\[P=IA=(800)(0.20)=160\\,\\mathrm{W}\\]",
    },
    {
      title: "Example 2",
      question: "Find the radiation pressure on a perfectly absorbing surface for \\(I=900\\,\\mathrm{W\\,m^{-2}}\\).",
      answer: "\\[p_{\\mathrm{rad}}=\\frac{I}{c}=\\frac{900}{3.0\\times10^8}=3.0\\times10^{-6}\\,\\mathrm{Pa}\\]",
    },
  ]}
/>

## Checks

- Intensity is average power per unit area.
- A perfect reflector receives twice the pressure of a perfect absorber at the same intensity.
- In a plane wave, electric and magnetic energy densities are equal at every instant.
- Momentum transport matters even when the pressure is very small.`;
