export const content = String.raw`## Principle

Spherical mirrors focus paraxial rays by reflecting them from a curved surface.

## Notation

<Notation
  items={[
    { symbol: "R", meaning: "mirror radius of curvature", unit: "m" },
    { symbol: "f", meaning: "focal length", unit: "m" },
    { symbol: "s", meaning: "object distance", unit: "m" },
    { symbol: "s'", meaning: "image distance", unit: "m" },
    { symbol: "m", meaning: "lateral magnification", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Focal length

For paraxial rays, a spherical mirror has focal length half its radius of curvature.

<PhysicsDerivation
  items={[
    {
      label: "Focal length",
      tex: "f=\\frac{R}{2}",
    },
    {
      label: "Mirror equation",
      tex: "\\frac{1}{s}+\\frac{1}{s'}=\\frac{1}{f}",
    },
    {
      label: "Magnification",
      tex: "m=-\\frac{s'}{s}",
    },
  ]}
/>

Concave mirrors have positive focal length in the usual real-is-positive convention. Convex mirrors have negative focal length.

## Rules

<Equation label="Focal length" tex="f=R/2" />

<Equation label="Mirror equation" tex="\frac{1}{s}+\frac{1}{s'}=\frac{1}{f}" />

<Equation label="Magnification" tex="m=-\frac{s'}{s}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A concave mirror has \\(R=0.80\\,\\mathrm{m}\\). Find \\(f\\).",
      answer: "\\[f=\\frac{R}{2}=0.40\\,\\mathrm{m}\\]",
    },
    {
      title: "Example 2",
      question: "An object is \\(0.60\\,\\mathrm{m}\\) from a concave mirror with \\(f=0.20\\,\\mathrm{m}\\). Find \\(s'\\).",
      answer: "\\[\\frac{1}{s'}=\\frac{1}{0.20}-\\frac{1}{0.60}=3.33\\,\\mathrm{m^{-1}}\\]\\[s'=0.30\\,\\mathrm{m}\\]",
    },
  ]}
/>

## Checks

- Positive image distance for a mirror means a real image in front of the mirror.
- Negative magnification means inverted image.
- Spherical formulas assume paraxial rays.`;
