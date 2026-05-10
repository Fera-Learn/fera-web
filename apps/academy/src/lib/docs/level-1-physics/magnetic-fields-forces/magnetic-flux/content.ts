export const content = String.raw`## Principle

Magnetic flux measures how much magnetic field passes normally through a surface.

## Notation

<Notation
  items={[
    { symbol: "\\Phi_B", meaning: "magnetic flux", unit: "Wb" },
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "\\vec A", meaning: "area vector normal to a flat surface", unit: "m^{2}" },
    { symbol: "A", meaning: "surface area", unit: "m^{2}" },
    { symbol: "\\theta", meaning: "angle between field and area vector", unit: "rad" },
  ]}
/>

## Method

The area vector points perpendicular to the surface. Flux is the dot product of field with area.

<PhysicsDerivation
  items={[
    {
      label: "Uniform flat surface",
      tex: "\\Phi_B=\\vec B\\cdot\\vec A",
    },
    {
      label: "Magnitude form",
      tex: "\\Phi_B=BA\\cos\\theta",
    },
    {
      label: "Curved surface",
      tex: "\\Phi_B=\\int\\vec B\\cdot d\\vec A",
    },
    {
      label: "Closed surface",
      tex: "\\oint\\vec B\\cdot d\\vec A=0",
    },
  ]}
/>

Gauss's law for magnetism says closed-surface magnetic flux is zero. Field lines do not begin or end on isolated magnetic charge.

## Rules

<Equation label="Magnetic flux" tex="\Phi_B=BA\cos\theta" />

<Equation label="Flux integral" tex="\Phi_B=\int\vec B\cdot d\vec A" />

<Equation label="Weber" tex="1\,\mathrm{Wb}=1\,\mathrm{T\,m^2}" />

<Equation label="No monopoles" tex="\oint\vec B\cdot d\vec A=0" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(0.30\\,\\mathrm{m^2}\\) loop is perpendicular to a \\(0.40\\,\\mathrm{T}\\) field. Find the flux.",
      answer: "\\[\\Phi_B=BA=(0.40)(0.30)=0.12\\,\\mathrm{Wb}\\]",
    },
    {
      title: "Example 2",
      question: "The loop is turned so its area vector is \\(60^\\circ\\) from the field. Find the flux.",
      answer: "\\[\\Phi_B=BA\\cos60^\\circ=(0.40)(0.30)(0.5)=0.060\\,\\mathrm{Wb}\\]",
    },
  ]}
/>

## Checks

- Use the angle to the area vector, not the plane of the surface.
- Flux can be positive, negative, or zero depending on chosen normal.
- Net flux through a closed surface is zero for magnetic fields.`;
