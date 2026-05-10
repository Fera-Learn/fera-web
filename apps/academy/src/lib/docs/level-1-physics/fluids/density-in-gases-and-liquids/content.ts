export const content = String.raw`## Principle

Density measures how much mass occupies a given volume.

## Notation

<Notation
  items={[
    { symbol: "\\rho", meaning: "mass density", unit: "kg m^{-3}" },
    { symbol: "m", meaning: "mass", unit: "kg" },
    { symbol: "V", meaning: "volume", unit: "m^{3}" },
    { symbol: "dm", meaning: "small mass element", unit: "kg" },
    { symbol: "dV", meaning: "small volume element", unit: "m^{3}" },
  ]}
/>

## Method

For a uniform sample, density is one ratio; for a nonuniform fluid, it must be defined locally.

<PhysicsDerivation
  items={[
    {
      label: "Average density",
      tex: "\\rho=\\frac{m}{V}",
    },
    {
      label: "Rearrange sample",
      tex: "m=\\rho V",
      note: "Use this when the density is effectively uniform across the sample.",
    },
    {
      label: "Local density",
      tex: "\\rho=\\frac{dm}{dV}",
      note: "This is the definition when density changes with position.",
    },
    {
      label: "Recover total mass",
      tex: "m=\\int_V \\rho\\,dV",
    },
  ]}
/>

Liquids are often modeled with nearly constant density, while gases change density more readily when pressure or temperature changes.

## Rules

These are the compact density relations.

<Equation label="Average density" tex="\rho=\frac{m}{V}" />

<Equation label="Mass from volume" tex="m=\rho V" />

<Equation label="Volume from mass" tex="V=\frac{m}{\rho}" />

<Equation label="Local density" tex="\rho=\frac{dm}{dV}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A liquid has density \\(840\\,\\mathrm{kg\\,m^{-3}}\\). Find the mass in \\(2.5\\times10^{-3}\\,\\mathrm{m^3}\\).",
      answer: "\\[m=\\rho V=840(2.5\\times10^{-3})=2.10\\,\\mathrm{kg}\\]",
    },
    {
      title: "Example 2",
      question: "A gas sample has mass \\(0.72\\,\\mathrm{kg}\\) in volume \\(0.60\\,\\mathrm{m^3}\\). Find its density.",
      answer: "\\[\\rho=\\frac{m}{V}=\\frac{0.72}{0.60}=1.2\\,\\mathrm{kg\\,m^{-3}}\\]",
    },
  ]}
/>

## Checks

- Density units are mass per volume, not mass per area.
- A larger density means more mass in the same volume.
- Use the local definition when density varies through the fluid.
- Liquids are usually modeled as less compressible than gases.`;
