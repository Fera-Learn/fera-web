export const content = String.raw`## Principle

The Biot-Savart law adds the magnetic fields made by many small current elements. It is the current version of the moving-charge field law.

## Notation

<Notation
  items={[
    { symbol: "I", meaning: "current in the wire", unit: "A" },
    { symbol: "d\\vec l", meaning: "small length vector in the current direction", unit: "m" },
    { symbol: "\\vec r", meaning: "vector from current element to field point", unit: "m" },
    { symbol: "\\hat r", meaning: "unit vector from element to field point", unit: "" },
    { symbol: "d\\vec B", meaning: "small magnetic field contribution", unit: "T" },
    { symbol: "\\mu_0", meaning: "permeability of free space", unit: "N A^{-2}" },
  ]}
/>

## Method

### Derivation 1: Replace moving charges with current elements

A steady current represents many moving charges. For a short element of wire, the source strength is \\(I\,d\vec l\\), directed along conventional current.

<PhysicsDerivation
  items={[
    {
      label: "Current element",
      tex: "I\\,d\\vec l",
    },
    {
      label: "Biot-Savart law",
      tex: "d\\vec B=\\frac{\\mu_0}{4\\pi}\\frac{I\\,d\\vec l\\times\\hat r}{r^2}",
    },
    {
      label: "Magnitude",
      tex: "dB=\\frac{\\mu_0}{4\\pi}\\frac{I\\,dl\\sin\\theta}{r^2}",
    },
  ]}
/>

### Derivation 2: Integrate over the source

The total magnetic field is the vector sum of all contributions. Symmetry can make this easier by causing components to cancel.

<PhysicsDerivation
  items={[
    {
      label: "Vector sum",
      tex: "\\vec B=\\int d\\vec B",
    },
    {
      label: "Full law",
      tex: "\\vec B=\\frac{\\mu_0 I}{4\\pi}\\int\\frac{d\\vec l\\times\\hat r}{r^2}",
    },
  ]}
/>

### Derivation 3: Track direction before magnitude

The cross product direction changes from element to element. Decide which components survive before doing the integral.

## Rules

<Equation label="Biot-Savart law" tex="d\vec B=\frac{\mu_0}{4\pi}\frac{I\,d\vec l\times\hat r}{r^2}" />

<Equation label="Integrated field" tex="\vec B=\frac{\mu_0 I}{4\pi}\int\frac{d\vec l\times\hat r}{r^2}" />

<Equation label="Contribution magnitude" tex="dB=\frac{\mu_0}{4\pi}\frac{I\,dl\sin\theta}{r^2}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A current element points to the right. The field point is directly above it. What is the direction of \\(d\\vec B\\)?",
      answer: "Use \\(d\\vec l\\times\\hat r\\). Right crossed with up points out of the page, so \\(d\\vec B\\) is out of the page.",
    },
    {
      title: "Example 2",
      question: "For \\(I=5.0\\,\\mathrm A\\), \\(dl=2.0\\,\\mathrm{mm}\\), \\(r=0.10\\,\\mathrm m\\), and \\(\\theta=90^\\circ\\), estimate \\(dB\\).",
      answer: "\\[dB=10^{-7}\\frac{(5.0)(2.0\\times10^{-3})}{0.10^2}=1.0\\times10^{-7}\\,\\mathrm T\\]",
    },
  ]}
/>

## Checks

- \\(d\vec l\\) points along conventional current.
- Each contribution is perpendicular to both \\(d\vec l\\) and \\(\hat r\\).
- Integrate vectors, not just magnitudes.
- Biot-Savart is usually best when Ampere's law has insufficient symmetry.`;
