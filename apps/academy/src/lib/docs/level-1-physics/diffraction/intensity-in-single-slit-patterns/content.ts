export const content = String.raw`## Principle

Single-slit intensity comes from adding phasors from all parts of the slit. The result is a sinc-squared pattern with a strong central maximum and much weaker side maxima.

## Notation

<Notation
  items={[
    { symbol: "I", meaning: "intensity at angle theta", unit: "W m^{-2}" },
    { symbol: "I_0", meaning: "central maximum intensity", unit: "W m^{-2}" },
    { symbol: "\\beta", meaning: "single-slit phase parameter", unit: "rad" },
    { symbol: "a", meaning: "slit width", unit: "m" },
    { symbol: "\\theta", meaning: "observation angle", unit: "rad" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Phase spread across the slit

Rays from the top and bottom of the slit have a path difference \\(a\sin\theta\\), so the phase changes continuously across the aperture.

<PhysicsDerivation
  items={[
    {
      label: "Full phase spread",
      tex: "\\Delta\\phi=\\frac{2\\pi a\\sin\\theta}{\\lambda}",
    },
    {
      label: "Half phase parameter",
      tex: "\\beta=\\frac{\\pi a\\sin\\theta}{\\lambda}",
    },
  ]}
/>

### Derivation 2: Add the aperture phasors

The continuous sum of equal wavelets gives an amplitude proportional to \\(\\sin\beta/\beta\\).

<PhysicsDerivation
  items={[
    {
      label: "Relative amplitude",
      tex: "\\frac{E}{E_0}=\\frac{\\sin\\beta}{\\beta}",
    },
    {
      label: "Relative intensity",
      tex: "\\frac{I}{I_0}=\\left(\\frac{\\sin\\beta}{\\beta}\\right)^2",
    },
  ]}
/>

### Derivation 3: Locate zeros

Intensity is zero when \\(\sin\beta=0\\) while \\(\beta\\ne0\\).

<PhysicsDerivation
  items={[
    {
      label: "Zero condition",
      tex: "\\beta=m\\pi",
    },
    {
      label: "Minima",
      tex: "a\\sin\\theta=m\\lambda",
    },
  ]}
/>

## Rules

<Equation label="Single-slit intensity" tex="I=I_0\left(\frac{\sin\beta}{\beta}\right)^2" />

<Equation label="Single-slit parameter" tex="\beta=\frac{\pi a\sin\theta}{\lambda}" />

<Equation label="Intensity minima" tex="a\sin\theta=m\lambda" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find \\(I/I_0\\) when \\(\\beta=\\pi/2\\).",
      answer: "\\[\\frac{I}{I_0}=\\left(\\frac{\\sin(\\pi/2)}{\\pi/2}\\right)^2=\\left(\\frac{2}{\\pi}\\right)^2=0.405\\]",
    },
    {
      title: "Example 2",
      question: "Find \\(I/I_0\\) when \\(\\beta=\\pi\\).",
      answer: "\\[\\frac{I}{I_0}=\\left(\\frac{\\sin\\pi}{\\pi}\\right)^2=0\\] This is the first minimum.",
    },
  ]}
/>

## Checks

- The formula is interpreted by its limit at \\(\beta=0\\), giving \\(I=I_0\\).
- Minima occur at integer nonzero values of \\(\beta/\pi\\).
- The side maxima are not equally bright.
- The intensity pattern is symmetric about \\(\theta=0\\).`;
