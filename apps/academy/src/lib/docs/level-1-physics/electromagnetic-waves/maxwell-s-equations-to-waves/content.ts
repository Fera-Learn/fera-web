export const content = String.raw`## Principle

Maxwell's equations predict self-sustaining electromagnetic waves: a changing electric field produces a magnetic field, and a changing magnetic field produces an electric field.

## Notation

<Notation
  items={[
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "\\epsilon_0", meaning: "permittivity of free space", unit: "F m^{-1}" },
    { symbol: "\\mu_0", meaning: "permeability of free space", unit: "N A^{-2}" },
    { symbol: "c", meaning: "speed of electromagnetic waves in vacuum", unit: "m s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Source-free fields

In empty space there is no charge density and no conduction current.

<PhysicsDerivation
  items={[
    {
      label: "No electric sources",
      tex: "\\nabla\\cdot\\vec E=0",
    },
    {
      label: "No magnetic sources",
      tex: "\\nabla\\cdot\\vec B=0",
    },
  ]}
/>

### Derivation 2: Coupled changing fields

The curl equations are the wave-producing pair.

<PhysicsDerivation
  items={[
    {
      label: "Changing magnetic field creates electric circulation",
      tex: "\\nabla\\times\\vec E=-\\frac{\\partial\\vec B}{\\partial t}",
    },
    {
      label: "Changing electric field creates magnetic circulation",
      tex: "\\nabla\\times\\vec B=\\mu_0\\epsilon_0\\frac{\\partial\\vec E}{\\partial t}",
    },
  ]}
/>

### Derivation 3: Wave speed

Combining the two curl equations gives a wave equation for each field.

<PhysicsDerivation
  items={[
    {
      label: "Electric-field wave equation",
      tex: "\\nabla^2\\vec E=\\mu_0\\epsilon_0\\frac{\\partial^2\\vec E}{\\partial t^2}",
    },
    {
      label: "Magnetic-field wave equation",
      tex: "\\nabla^2\\vec B=\\mu_0\\epsilon_0\\frac{\\partial^2\\vec B}{\\partial t^2}",
    },
    {
      label: "Vacuum wave speed",
      tex: "c=\\frac{1}{\\sqrt{\\mu_0\\epsilon_0}}",
    },
  ]}
/>

## Rules

These relationships connect Maxwell's equations to light.

<Equation label="Vacuum wave speed" tex="c=\frac{1}{\sqrt{\mu_0\epsilon_0}}" />

<Equation label="Field ratio in vacuum" tex="\frac{E}{B}=c" />

<Equation label="Propagation direction" tex="\vec S\ \text{points along}\ \vec E\times\vec B" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Use \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{N\\,A^{-2}}\\) and \\(\\epsilon_0=8.85\\times10^{-12}\\,\\mathrm{F\\,m^{-1}}\\) to estimate \\(c\\).",
      answer: "\\[c=\\frac{1}{\\sqrt{\\mu_0\\epsilon_0}}\\approx3.0\\times10^8\\,\\mathrm{m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "If an electromagnetic wave has \\(E=90\\,\\mathrm{V\\,m^{-1}}\\), find \\(B\\).",
      answer: "\\[B=\\frac{E}{c}=\\frac{90}{3.0\\times10^8}=3.0\\times10^{-7}\\,\\mathrm{T}\\]",
    },
  ]}
/>

## Checks

- Electromagnetic waves do not need a material medium.
- In vacuum, \\(\\vec E\\), \\(\\vec B\\), and the propagation direction are mutually perpendicular.
- The fields are in phase for a traveling plane wave in vacuum.
- The speed from Maxwell's equations matches the measured speed of light.`;
