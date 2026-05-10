export const content = String.raw`## Principle

Sound speed is set by the medium's stiffness divided by its inertia.

## Notation

<Notation
  items={[
    { symbol: "v", meaning: "sound speed", unit: "m s^{-1}" },
    { symbol: "B", meaning: "bulk modulus", unit: "Pa" },
    { symbol: "\\rho", meaning: "medium density", unit: "kg m^{-3}" },
    { symbol: "\\gamma", meaning: "adiabatic index for a gas", unit: "1" },
    { symbol: "p", meaning: "gas pressure", unit: "Pa" },
    { symbol: "T", meaning: "absolute temperature", unit: "K" },
  ]}
/>

## Method

A sound wave compresses and expands the medium. The restoring effect is the bulk modulus, while density measures the inertia being accelerated.

<PhysicsDerivation
  items={[
    {
      label: "Elastic medium",
      tex: "v=\\sqrt{\\frac{B}{\\rho}}",
    },
    {
      label: "Adiabatic gas stiffness",
      tex: "B=\\gamma p",
      note: "Rapid sound compressions exchange little heat with surroundings.",
    },
    {
      label: "Gas speed",
      tex: "v=\\sqrt{\\frac{\\gamma p}{\\rho}}",
    },
    {
      label: "Ideal-gas form",
      tex: "v=\\sqrt{\\frac{\\gamma RT}{M}}",
      note: "For an ideal gas, pressure and density combine into temperature and molar mass.",
    },
  ]}
/>

In a given gas, warmer temperature usually means a larger sound speed.

## Rules

These are the compact sound-speed models.

<Equation label="Elastic speed" tex="v=\sqrt{\frac{B}{\rho}}" />

<Equation label="Gas speed" tex="v=\sqrt{\frac{\gamma p}{\rho}}" />

<Equation label="Ideal gas speed" tex="v=\sqrt{\frac{\gamma RT}{M}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Air has \\(\\gamma=1.40\\), pressure \\(1.01\\times10^5\\,\\mathrm{Pa}\\), and density \\(1.20\\,\\mathrm{kg\\,m^{-3}}\\). Estimate the sound speed.",
      answer: "\\[v=\\sqrt{\\frac{\\gamma p}{\\rho}}=\\sqrt{\\frac{(1.40)(1.01\\times10^5)}{1.20}}=343\\,\\mathrm{m\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- A stiffer medium raises sound speed if density is unchanged.
- A larger density lowers sound speed if stiffness is unchanged.
- Use kelvin, not degrees Celsius, in the ideal-gas form.
- Sound speed is a property of the medium, not the loudness of the sound.`;
