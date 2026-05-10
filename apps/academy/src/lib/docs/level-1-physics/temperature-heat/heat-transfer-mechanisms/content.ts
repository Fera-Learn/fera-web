export const content = String.raw`## Principle

Heat transfer can occur by conduction, convection, or radiation.

The mechanism matters because each one depends on different physical quantities: temperature gradient, fluid motion, or electromagnetic emission.

## Notation

<Notation
  items={[
    { symbol: "H", meaning: "heat current, the rate of heat transfer", unit: "W" },
    { symbol: "k", meaning: "thermal conductivity", unit: "W m^{-1} K^{-1}" },
    { symbol: "A", meaning: "area through which heat is transferred", unit: "m^{2}" },
    { symbol: "L", meaning: "thickness or conduction length", unit: "m" },
    { symbol: "T_H,T_C", meaning: "hot-side and cold-side temperatures", unit: "K" },
    { symbol: "h_c", meaning: "empirical convection coefficient", unit: "W m^{-2} K^{-1}" },
    { symbol: "e", meaning: "emissivity", unit: "1" },
    { symbol: "\\sigma", meaning: "Stefan-Boltzmann constant", unit: "W m^{-2} K^{-4}" },
  ]}
/>

## Method

Conduction is energy transfer through matter without bulk motion. In a uniform slab at steady state, the temperature gradient is approximately \\((T_H-T_C)/L\\), so Fourier's law gives a heat current proportional to area and conductivity.

<PhysicsDerivation
  items={[
    {
      label: "Temperature gradient",
      tex: "\\left|\\frac{dT}{dx}\\right|\\approx\\frac{T_H-T_C}{L}",
    },
    {
      label: "Conduction current",
      tex: "H=kA\\frac{T_H-T_C}{L}",
    },
    {
      label: "Thermal resistance",
      tex: "R=\\frac{L}{kA}",
    },
    {
      label: "Resistance form",
      tex: "H=\\frac{T_H-T_C}{R}",
    },
  ]}
/>

Convection transfers energy by bulk motion of a fluid. The detailed flow can be complicated, so simple convection laws use an empirical coefficient.

<PhysicsDerivation
  items={[
    {
      label: "Convection model",
      tex: "H=h_cA(T_s-T_f)",
      note: "\\(h_c\\) depends on the fluid, surface shape, flow speed, and whether convection is natural or forced.",
    },
  ]}
/>

Radiation transfers energy by electromagnetic waves and does not require matter between the emitter and absorber. Absolute temperature is essential because the power scales with the fourth power of temperature.

<PhysicsDerivation
  items={[
    {
      label: "Emitted power",
      tex: "H_{\\mathrm{emit}}=e\\sigma AT^4",
    },
    {
      label: "Absorbed surroundings",
      tex: "H_{\\mathrm{abs}}=e\\sigma AT_s^4",
    },
    {
      label: "Net radiative loss",
      tex: "H_{\\mathrm{net}}=e\\sigma A(T^4-T_s^4)",
    },
  ]}
/>

## Rules

These are the compact heat-transfer relations.

<Equation label="Conduction" tex="H=kA\frac{T_H-T_C}{L}" />

<Equation label="Thermal resistance" tex="R=\frac{L}{kA}" />

<Equation label="Convection model" tex="H=h_cA(T_s-T_f)" />

<Equation label="Radiation emitted" tex="H=e\sigma AT^4" />

<Equation label="Net radiation" tex="H_{\mathrm{net}}=e\sigma A(T^4-T_s^4)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A wall panel has area \\(2.0\\,\\mathrm{m^2}\\), thickness \\(0.040\\,\\mathrm{m}\\), and thermal conductivity \\(0.080\\,\\mathrm{W\\,m^{-1}\\,K^{-1}}\\). The two sides differ by \\(18\\,\\mathrm{K}\\). Find the conduction heat current.",
      answer: "\\[H=kA\\frac{\\Delta T}{L}=0.080(2.0)\\frac{18}{0.040}=72\\,\\mathrm{W}\\]",
    },
    {
      title: "Example 2",
      question: "A blackened plate has area \\(0.050\\,\\mathrm{m^2}\\), emissivity \\(0.90\\), temperature \\(420\\,\\mathrm{K}\\), and surroundings at \\(300\\,\\mathrm{K}\\). Estimate its net radiative heat loss using \\(\\sigma=5.67\\times10^{-8}\\,\\mathrm{W\\,m^{-2}\\,K^{-4}}\\).",
      answer: "\\[H_{\\mathrm{net}}=e\\sigma A(T^4-T_s^4)\\] \\[H_{\\mathrm{net}}=(0.90)(5.67\\times10^{-8})(0.050)(420^4-300^4)=58\\,\\mathrm{W}\\]",
    },
  ]}
/>

## Checks

- Conduction heat current increases with area and decreases with thickness.
- Convection requires fluid motion; conduction does not.
- Radiation calculations must use kelvins because of the \\(T^4\\) dependence.
- A shiny low-emissivity surface is both a poor emitter and a poor absorber.`;
