export const content = String.raw`## Principle

A spherical refracting surface forms images because refraction changes ray convergence.

## Notation

<Notation
  items={[
    { symbol: "n_1", meaning: "index on incident side", unit: "1" },
    { symbol: "n_2", meaning: "index on refracted side", unit: "1" },
    { symbol: "s", meaning: "object distance from surface", unit: "m" },
    { symbol: "s'", meaning: "image distance from surface", unit: "m" },
    { symbol: "R", meaning: "surface radius of curvature", unit: "m" },
    { symbol: "m", meaning: "lateral magnification", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Paraxial refraction formula

Small-angle refraction at a spherical boundary gives a linear relation among object distance, image distance, and curvature.

<PhysicsDerivation
  items={[
    {
      label: "Surface equation",
      tex: "\\frac{n_1}{s}+\\frac{n_2}{s'}=\\frac{n_2-n_1}{R}",
    },
    {
      label: "Plane limit",
      tex: "R\\rightarrow\\infty\\Rightarrow\\frac{n_1}{s}+\\frac{n_2}{s'}=0",
    },
    {
      label: "Magnification",
      tex: "m=-\\frac{n_1s'}{n_2s}",
    },
  ]}
/>

The sign of \\(R\\) depends on whether the center of curvature lies on the outgoing side of the surface.

## Rules

<Equation label="Spherical refraction" tex="\frac{n_1}{s}+\frac{n_2}{s'}=\frac{n_2-n_1}{R}" />

<Equation label="Refraction magnification" tex="m=-\frac{n_1s'}{n_2s}" />

<Equation label="Plane refraction" tex="s'=-\frac{n_2}{n_1}s" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Light goes from air to glass \\((n=1.50)\\) at a spherical surface with \\(R=0.30\\,\\mathrm{m}\\). An object is \\(0.60\\,\\mathrm{m}\\) away. Find \\(s'\\).",
      answer: "\\[\\frac{1.00}{0.60}+\\frac{1.50}{s'}=\\frac{0.50}{0.30}\\]\\[\\frac{1.50}{s'}=0\\] The image is at infinity.",
    },
    {
      title: "Example 2",
      question: "For a plane air-water surface, what is the apparent image distance of an object depth \\(d\\) viewed from air?",
      answer: "Use \\(s'=-(n_2/n_1)s\\) with object-side medium water for the apparent-image convention. The apparent depth is \\(d/n_{\\mathrm{water}}\\).",
    },
  ]}
/>

## Checks

- Use one sign convention consistently.
- Plane refraction changes apparent depth without focusing to a real point.
- The formula is paraxial; large angles require Snell's law ray tracing.`;
