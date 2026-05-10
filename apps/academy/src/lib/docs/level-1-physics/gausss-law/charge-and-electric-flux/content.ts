export const content = String.raw`## Principle

Electric flux measures the normal component of electric field passing through an oriented surface.

## Notation

<Notation
  items={[
    { symbol: "\\Phi_E", meaning: "electric flux through a surface", unit: "N m^{2} C^{-1}" },
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "\\vec A", meaning: "area vector for a flat surface", unit: "m^{2}" },
    { symbol: "d\\vec A", meaning: "small outward area vector", unit: "m^{2}" },
    { symbol: "\\hat n", meaning: "unit normal to the surface", unit: "1" },
    { symbol: "\\theta", meaning: "angle between \\(\\vec E\\) and the area vector", unit: "rad" },
  ]}
/>

## Method

### Derivation 1: Attach direction to area

Flux depends on how a surface is oriented. A flat surface therefore uses an area vector normal to the surface.

<PhysicsDerivation
  items={[
    {
      label: "Normal direction",
      tex: "\\vec A=A\\hat n",
    },
    {
      label: "Perpendicular part",
      tex: "E_\\perp=E\\cos\\theta",
    },
    {
      label: "Uniform flux",
      tex: "\\Phi_E=E_\\perp A=EA\\cos\\theta",
    },
  ]}
/>

### Derivation 2: Write flux as a dot product

The dot product selects the field component along the surface normal.

<PhysicsDerivation
  items={[
    {
      label: "Dot product",
      tex: "\\vec E\\cdot\\vec A=EA\\cos\\theta",
    },
    {
      label: "Flux form",
      tex: "\\Phi_E=\\vec E\\cdot\\vec A",
    },
    {
      label: "Sign",
      tex: "\\Phi_E>0\\ \\text{when field points with the chosen normal}",
    },
  ]}
/>

### Derivation 3: Generalize to curved surfaces

For a curved or nonuniform case, divide the surface into small pieces and add their flux contributions.

<PhysicsDerivation
  items={[
    {
      label: "Small area vector",
      tex: "d\\vec A=\\hat n\\,dA",
    },
    {
      label: "Small flux",
      tex: "d\\Phi_E=\\vec E\\cdot d\\vec A",
    },
    {
      label: "Surface integral",
      tex: "\\Phi_E=\\int_S\\vec E\\cdot d\\vec A",
    },
  ]}
/>

## Rules

These are the flux definitions used before Gauss's law.

<Equation label="Area vector" tex="\vec A=A\hat n" />

<Equation label="Uniform flux" tex="\Phi_E=EA\cos\theta" />

<Equation label="Dot-product flux" tex="\Phi_E=\vec E\cdot\vec A" />

<Equation label="General flux" tex="\Phi_E=\int_S\vec E\cdot d\vec A" />

<Equation label="Closed surface" tex="\Phi_E=\oint_S\vec E\cdot d\vec A" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A uniform field of \\(80\\,\\mathrm{N\\,C^{-1}}\\) passes normally through a \\(0.30\\,\\mathrm{m^2}\\) flat surface. Find the flux.",
      answer: "The field is aligned with the area vector, so \\(\\theta=0\\). \\[\\Phi_E=EA=(80)(0.30)=24\\,\\mathrm{N\\,m^2\\,C^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A uniform field is parallel to a flat surface. What is the flux through that surface?",
      answer: "The field has no normal component. The angle between \\(\\vec E\\) and \\(\\vec A\\) is \\(90^\\circ\\), so \\(\\Phi_E=EA\\cos90^\\circ=0\\).",
    },
  ]}
/>

## Checks

- Flux is scalar; it can be positive, negative, or zero.
- The area vector is normal to the surface, not along the surface.
- Tangential field contributes no flux through that surface.
- Closed surfaces use outward normals by convention.`;
