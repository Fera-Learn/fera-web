export const content = String.raw`## Principle

Thin lenses form images by refracting rays twice with negligible separation between surfaces.

## Notation

<Notation
  items={[
    { symbol: "f", meaning: "lens focal length", unit: "m" },
    { symbol: "s", meaning: "object distance", unit: "m" },
    { symbol: "s'", meaning: "image distance", unit: "m" },
    { symbol: "m", meaning: "lateral magnification", unit: "1" },
    { symbol: "P", meaning: "lens power", unit: "D" },
    { symbol: "R_1,R_2", meaning: "surface radii", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Thin-lens equation

For paraxial rays, a thin lens maps object distance to image distance through its focal length.

<PhysicsDerivation
  items={[
    {
      label: "Thin-lens equation",
      tex: "\\frac{1}{s}+\\frac{1}{s'}=\\frac{1}{f}",
    },
    {
      label: "Magnification",
      tex: "m=-\\frac{s'}{s}",
    },
    {
      label: "Power",
      tex: "P=\\frac{1}{f}",
    },
  ]}
/>

### Derivation 2: Lensmaker form

The focal length depends on index and surface curvature.

<PhysicsDerivation
  items={[
    {
      label: "Lensmaker equation",
      tex: "\\frac{1}{f}=(n-1)\\left(\\frac{1}{R_1}-\\frac{1}{R_2}\\right)",
    },
  ]}
/>

## Rules

<Equation label="Thin-lens equation" tex="\frac{1}{s}+\frac{1}{s'}=\frac{1}{f}" />

<Equation label="Magnification" tex="m=-\frac{s'}{s}" />

<Equation label="Lens power" tex="P=1/f" />

<Equation label="Lensmaker equation" tex="\frac{1}{f}=(n-1)\left(\frac{1}{R_1}-\frac{1}{R_2}\right)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An object is \\(30\\,\\mathrm{cm}\\) from a converging lens with \\(f=10\\,\\mathrm{cm}\\). Find \\(s'\\).",
      answer: "\\[\\frac{1}{s'}=\\frac{1}{10}-\\frac{1}{30}=\\frac{1}{15}\\]\\[s'=15\\,\\mathrm{cm}\\]",
    },
    {
      title: "Example 2",
      question: "Find the power of a \\(0.25\\,\\mathrm{m}\\) focal-length lens.",
      answer: "\\[P=\\frac{1}{f}=\\frac{1}{0.25}=4.0\\,\\mathrm{D}\\]",
    },
  ]}
/>

## Checks

- Converging lenses have positive focal length.
- Diverging lenses have negative focal length.
- Negative image distance means a virtual image on the object side.`;
