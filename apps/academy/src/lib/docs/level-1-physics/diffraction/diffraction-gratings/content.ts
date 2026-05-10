export const content = String.raw`## Principle

A diffraction grating has many equally spaced lines or slits. It produces sharp angular maxima that separate wavelengths, making gratings useful for spectroscopy.

## Notation

<Notation
  items={[
    { symbol: "d", meaning: "grating spacing", unit: "m" },
    { symbol: "n_L", meaning: "line density", unit: "m^{-1}" },
    { symbol: "m", meaning: "diffraction order", unit: "1" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "\\theta_m", meaning: "angle of order m", unit: "rad" },
    { symbol: "N", meaning: "number of illuminated slits", unit: "1" },
    { symbol: "R", meaning: "resolving power", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Convert line density to spacing

Line density is the reciprocal of grating spacing.

<PhysicsDerivation
  items={[
    {
      label: "Spacing",
      tex: "d=\\frac{1}{n_L}",
    },
    {
      label: "Lines per millimetre",
      tex: "n_L=(\\mathrm{lines\\,mm^{-1}})\\times10^3",
    },
  ]}
/>

### Derivation 2: Find bright orders

Constructive interference from adjacent grating lines requires a whole-wavelength path difference.

<PhysicsDerivation
  items={[
    {
      label: "Grating equation",
      tex: "d\\sin\\theta_m=m\\lambda",
    },
    {
      label: "Allowed orders",
      tex: "|m|\\lambda\\le d",
    },
  ]}
/>

### Derivation 3: Resolve close wavelengths

A grating resolves two nearby wavelengths when their maxima are separated enough compared with peak width.

<PhysicsDerivation
  items={[
    {
      label: "Resolving power",
      tex: "R=\\frac{\\lambda}{\\Delta\\lambda}=mN",
    },
    {
      label: "Smallest resolvable difference",
      tex: "\\Delta\\lambda=\\frac{\\lambda}{mN}",
    },
  ]}
/>

## Rules

<Equation label="Grating equation" tex="d\sin\theta_m=m\lambda" />

<Equation label="Spacing from line density" tex="d=\frac{1}{n_L}" />

<Equation label="Maximum possible order" tex="m_{\max}=\left\lfloor\frac{d}{\lambda}\right\rfloor" />

<Equation label="Resolving power" tex="R=mN" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A grating has \\(600\\,\\mathrm{lines\\,mm^{-1}}\\). Find the spacing.",
      answer: "\\[d=\\frac{1}{600\\times10^3}=1.67\\times10^{-6}\\,\\mathrm{m}\\]",
    },
    {
      title: "Example 2",
      question: "Using \\(632.8\\,\\mathrm{nm}\\) light with this grating, find the first-order angle.",
      answer: "\\[\\sin\\theta_1=\\frac{632.8\\times10^{-9}}{1.67\\times10^{-6}}=0.380\\] so \\(\\theta_1=22.3^\\circ\\).",
    },
  ]}
/>

## Checks

- Higher line density means smaller \\(d\\), so orders spread farther apart.
- The zero order is undeviated for normal incidence.
- A proposed order is impossible if \\(|m|\lambda>d\\).
- Resolving power improves with order and with the number of illuminated lines.`;
