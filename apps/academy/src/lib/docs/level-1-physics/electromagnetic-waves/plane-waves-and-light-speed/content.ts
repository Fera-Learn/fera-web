export const content = String.raw`## Principle

A plane electromagnetic wave has uniform wavefronts, travels at \\(c\\) in vacuum, and carries electric and magnetic fields transverse to the direction of travel.

## Notation

<Notation
  items={[
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "f", meaning: "frequency", unit: "Hz" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
    { symbol: "k", meaning: "wave number", unit: "rad m^{-1}" },
    { symbol: "n", meaning: "refractive index", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Plane-wave geometry

A plane wave moving in the \\(+x\\) direction has fields that depend on \\(x\\) and \\(t\\), not on \\(y\\) or \\(z\\).

<PhysicsDerivation
  items={[
    {
      label: "Wave phase",
      tex: "\\phi=kx-\\omega t",
    },
    {
      label: "Wave speed",
      tex: "v=\\frac{\\omega}{k}",
    },
  ]}
/>

### Derivation 2: Vacuum light speed

For electromagnetic waves in vacuum, Maxwell's equations set the wave speed.

<PhysicsDerivation
  items={[
    {
      label: "Frequency-wavelength form",
      tex: "c=f\\lambda",
    },
    {
      label: "Angular form",
      tex: "c=\\frac{\\omega}{k}",
    },
    {
      label: "Medium speed",
      tex: "v=\\frac{c}{n}",
    },
  ]}
/>

### Derivation 3: Direction

The propagation direction is the direction of \\(\\vec E\\times\\vec B\\).

<PhysicsDerivation
  items={[
    {
      label: "Transverse fields",
      tex: "\\vec E\\perp\\vec B\\perp\\vec v",
    },
    {
      label: "Field magnitudes",
      tex: "E=cB",
    },
  ]}
/>

## Rules

<Equation label="Vacuum speed" tex="c=f\lambda=\frac{\omega}{k}" />

<Equation label="Refractive index" tex="n=\frac{c}{v}" />

<Equation label="Wave number" tex="k=\frac{2\pi}{\lambda}" />

<Equation label="Angular frequency" tex="\omega=2\pi f" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A radio wave has frequency \\(100\\,\\mathrm{MHz}\\). Find its wavelength in vacuum.",
      answer: "\\[\\lambda=\\frac{c}{f}=\\frac{3.0\\times10^8}{1.00\\times10^8}=3.0\\,\\mathrm{m}\\]",
    },
    {
      title: "Example 2",
      question: "Light travels in glass with \\(n=1.50\\). Find its speed.",
      answer: "\\[v=\\frac{c}{n}=\\frac{3.0\\times10^8}{1.50}=2.0\\times10^8\\,\\mathrm{m\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- Frequency is set by the source and usually does not change when light enters a new medium.
- Speed and wavelength change in a medium according to \\(v=f\\lambda\\).
- For a wave moving in \\(+x\\), a possible orientation is \\(\\vec E\\) along \\(+y\\) and \\(\\vec B\\) along \\(+z\\).
- The field ratio \\(E/B=c\\) is for vacuum plane waves.`;
