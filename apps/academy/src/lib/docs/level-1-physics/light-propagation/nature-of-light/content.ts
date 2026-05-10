export const content = String.raw`## Principle

Light is an electromagnetic wave. In vacuum it travels at speed \\(c\\), and its frequency, wavelength, and speed are related by the wave equation.

## Notation

<Notation
  items={[
    { symbol: "c", meaning: "speed of light in vacuum", unit: "m s^{-1}" },
    { symbol: "v", meaning: "speed of light in a material", unit: "m s^{-1}" },
    { symbol: "f", meaning: "frequency", unit: "Hz" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "n", meaning: "refractive index", unit: "" },
    { symbol: "\\vec E", meaning: "electric field in the light wave", unit: "V m^{-1}" },
    { symbol: "\\vec B", meaning: "magnetic field in the light wave", unit: "T" },
  ]}
/>

## Method

### Derivation 1: Connect speed, frequency, and wavelength

Any periodic wave moves one wavelength in one period.

<PhysicsDerivation
  items={[
    {
      label: "Wave speed",
      tex: "v=f\\lambda",
    },
    {
      label: "Vacuum light",
      tex: "c=f\\lambda_0",
    },
  ]}
/>

### Derivation 2: Use refractive index

The refractive index compares light speed in vacuum with light speed in a material.

<PhysicsDerivation
  items={[
    {
      label: "Refractive index",
      tex: "n=\\frac{c}{v}",
    },
    {
      label: "Speed in a material",
      tex: "v=\\frac{c}{n}",
    },
  ]}
/>

### Derivation 3: Keep frequency fixed at a boundary

When light crosses from one medium into another, its frequency is set by the source and stays the same. Speed and wavelength change together.

<PhysicsDerivation
  items={[
    {
      label: "Same frequency",
      tex: "f_1=f_2",
    },
    {
      label: "Wavelength in material",
      tex: "\\lambda=\\frac{v}{f}=\\frac{\\lambda_0}{n}",
    },
  ]}
/>

## Rules

<Equation label="Wave equation" tex="v=f\lambda" />

<Equation label="Vacuum speed" tex="c=3.00\times10^8\,\mathrm{m\,s^{-1}}" />

<Equation label="Refractive index" tex="n=\frac{c}{v}" />

<Equation label="Material wavelength" tex="\lambda=\frac{\lambda_0}{n}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Light has wavelength \\(600\\,\\mathrm{nm}\\) in vacuum. Find its frequency.",
      answer: "\\[f=\\frac{c}{\\lambda}=\\frac{3.00\\times10^8}{600\\times10^{-9}}=5.00\\times10^{14}\\,\\mathrm{Hz}\\]",
    },
    {
      title: "Example 2",
      question: "Light enters glass with \\(n=1.50\\). Find its speed in the glass.",
      answer: "\\[v=\\frac{c}{n}=\\frac{3.00\\times10^8}{1.50}=2.00\\times10^8\\,\\mathrm{m\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- Frequency does not change when light crosses a boundary.
- Wavelength is shorter in a material with \\(n>1\\).
- The electromagnetic wave model explains reflection, refraction, interference, diffraction, and polarization.
- Ray and photon models are useful in other contexts, but this section mainly uses the wave model.`;
