export const content = String.raw`## Principle

A telescope increases angular size of distant objects by comparing objective and eyepiece focal lengths.

## Notation

<Notation
  items={[
    { symbol: "f_o", meaning: "objective focal length", unit: "m" },
    { symbol: "f_e", meaning: "eyepiece focal length", unit: "m" },
    { symbol: "M", meaning: "angular magnification", unit: "1" },
    { symbol: "L", meaning: "tube length", unit: "m" },
    { symbol: "D_o", meaning: "objective diameter", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Astronomical telescope

For relaxed viewing, the objective forms an image at the eyepiece focal plane.

<PhysicsDerivation
  items={[
    {
      label: "Angular magnification",
      tex: "M=-\\frac{f_o}{f_e}",
    },
    {
      label: "Tube length",
      tex: "L=f_o+f_e",
    },
  ]}
/>

### Derivation 2: Galilean telescope

A diverging eyepiece shortens the tube and produces an upright image.

<PhysicsDerivation
  items={[
    {
      label: "Diverging eyepiece",
      tex: "f_e<0",
    },
    {
      label: "Tube length",
      tex: "L=f_o+f_e",
    },
    {
      label: "Magnification",
      tex: "M=-\\frac{f_o}{f_e}",
    },
  ]}
/>

## Rules

<Equation label="Telescope magnification" tex="M=-f_o/f_e" />

<Equation label="Astronomical length" tex="L=f_o+f_e" />

<Equation label="Light gathering" tex="\text{brightness}\propto D_o^2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An astronomical telescope has \\(f_o=1.20\\,\\mathrm{m}\\) and \\(f_e=2.0\\,\\mathrm{cm}\\). Find \\(M\\).",
      answer: "\\[M=-\\frac{1.20}{0.020}=-60\\] The image is inverted.",
    },
    {
      title: "Example 2",
      question: "Find the tube length for the same telescope.",
      answer: "\\[L=f_o+f_e=1.20+0.020=1.22\\,\\mathrm{m}\\]",
    },
  ]}
/>

## Checks

- Larger objective focal length increases angular magnification.
- Larger objective diameter improves light gathering and resolution.
- A negative magnification indicates inversion.`;
