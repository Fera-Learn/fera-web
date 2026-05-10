export const content = String.raw`## Principle

Plane mirrors form virtual upright images by preserving the angle a ray makes with the normal.

## Notation

<Notation
  items={[
    { symbol: "\\theta_i", meaning: "angle of incidence measured from the normal", unit: "rad" },
    { symbol: "\\theta_r", meaning: "angle of reflection measured from the normal", unit: "rad" },
    { symbol: "s", meaning: "object distance from mirror", unit: "m" },
    { symbol: "s'", meaning: "image distance from mirror", unit: "m" },
    { symbol: "m", meaning: "lateral magnification", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Reflection law

The incident ray, reflected ray, and surface normal lie in one plane. A plane mirror reverses the normal component of the ray direction and preserves the tangential component.

<PhysicsDerivation
  items={[
    {
      label: "Angle equality",
      tex: "\\theta_r=\\theta_i",
    },
    {
      label: "Plane-mirror image",
      tex: "s'=-s",
    },
    {
      label: "Magnification",
      tex: "m=-\\frac{s'}{s}=+1",
    },
  ]}
/>

The negative image distance means the image is virtual and appears behind the mirror.

## Rules

<Equation label="Reflection law" tex="\theta_r=\theta_i" />

<Equation label="Plane image" tex="s'=-s" />

<Equation label="Plane magnification" tex="m=+1" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A ray strikes a plane mirror at \\(35^\\circ\\) to the normal. Find the reflection angle.",
      answer: "\\[\\theta_r=\\theta_i=35^\\circ\\]",
    },
    {
      title: "Example 2",
      question: "An object is \\(2.0\\,\\mathrm{m}\\) in front of a plane mirror. Locate the image.",
      answer: "\\[s'=-s=-2.0\\,\\mathrm{m}\\] The image appears \\(2.0\\,\\mathrm{m}\\) behind the mirror.",
    },
  ]}
/>

## Checks

- Measure angles from the normal, not from the mirror surface.
- A plane-mirror image is virtual, upright, and same size.
- Ray paths are reversible.`;
