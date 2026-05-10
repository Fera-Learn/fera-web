export const content = String.raw`## Principle

Unit-vector notation writes signed components along chosen basis directions.

## Notation

<Notation
  items={[
    { symbol: "\\hat{\\imath}", meaning: "positive x direction", unit: "none" },
    { symbol: "\\hat{\\jmath}", meaning: "positive y direction", unit: "none" },
    { symbol: "\\hat{k}", meaning: "positive z direction", unit: "none" },
    { symbol: "a_x", meaning: "x-component", unit: "same as vector" },
    { symbol: "a_y", meaning: "y-component", unit: "same as vector" },
    { symbol: "a_z", meaning: "z-component", unit: "same as vector" },
  ]}
/>

## Method

The basis vectors show direction only; the component coefficients carry the physical units.

<CartesianPhysicsGraph
  title="Unit-vector basis"
  caption="Basis directions are unit length; components scale those directions."
  xRange={{ min: -1, max: 4, step: 1, label: "x" }}
  yRange={{ min: -1, max: 3, step: 1, label: "y" }}
  vectors={[
    { label: "\\hat{\\imath}", from: { x: 0, y: 0 }, to: { x: 1, y: 0 } },
    { label: "\\hat{\\jmath}", from: { x: 0, y: 0 }, to: { x: 0, y: 1 } },
    {
      label: "\\vec{a}",
      from: { x: 0, y: 0 },
      to: { x: 3, y: 2 },
      color: "var(--chart-3)",
    },
  ]}
/>

Like basis directions combine; unlike basis directions stay separate.

<PhysicsDerivation
  items={[
    {
      label: "Vector form",
      tex: "\\vec{a}=a_x\\hat{\\imath}+a_y\\hat{\\jmath}+a_z\\hat{k}",
    },
    {
      label: "Magnitude",
      tex: "|\\vec{a}|=\\sqrt{a_x^2+a_y^2+a_z^2}",
    },
    {
      label: "Like terms",
      tex: "a_x\\hat{\\imath}+b_x\\hat{\\imath}=(a_x+b_x)\\hat{\\imath}",
    },
  ]}
/>

## Rules

<Equation label="Vector form" tex="\vec{a}=a_x\hat{\imath}+a_y\hat{\jmath}+a_z\hat{k}" />

<Equation label="Vector magnitude" tex="|\vec{a}|=\sqrt{a_x^2+a_y^2+a_z^2}" />

<Equation label="Add vectors" tex="\vec{a}+\vec{b}=(a_x+b_x)\hat{\imath}+(a_y+b_y)\hat{\jmath}+(a_z+b_z)\hat{k}" />

## Checks

- Unit vectors have no physical units.
- Components carry physical units.
- Combine only matching basis directions.
- A negative component points opposite its basis vector.`;
