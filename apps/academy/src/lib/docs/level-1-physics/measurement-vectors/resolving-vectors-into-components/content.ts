export const content = String.raw`## Principle

Components replace one vector with perpendicular signed projections.

## Notation

<Notation
  items={[
    { symbol: "\\vec{a}", meaning: "vector", unit: "varies" },
    { symbol: "a", meaning: "magnitude of vector", unit: "same as vector" },
    { symbol: "a_x", meaning: "x-component", unit: "same as vector" },
    { symbol: "a_y", meaning: "y-component", unit: "same as vector" },
    { symbol: "\\theta", meaning: "angle from positive x-axis", unit: "rad or deg" },
  ]}
/>

## Method

The diagram shows components as projections onto fixed perpendicular axes.

<CartesianDiagram
  title="Components as projections"
  caption="The horizontal and vertical components reconstruct the original vector."
  xRange={{ min: 0, max: 5, step: 1, label: "x" }}
  yRange={{ min: 0, max: 4, step: 1, label: "y" }}
  vectors={[
    { label: "a_x", from: { x: 0, y: 0 }, to: { x: 4, y: 0 } },
    { label: "a_y", from: { x: 4, y: 0 }, to: { x: 4, y: 3 } },
    {
      label: "\\vec{a}",
      from: { x: 0, y: 0 },
      to: { x: 4, y: 3 },
      color: "var(--chart-3)",
    },
  ]}
/>

Projection gives signed component lengths; reconstruction adds those perpendicular pieces back to the original vector.

<PhysicsDerivation
  items={[
    {
      label: "Horizontal projection",
      tex: "a_x=a\\cos\\theta",
    },
    {
      label: "Vertical projection",
      tex: "a_y=a\\sin\\theta",
    },
    {
      label: "Reconstruct",
      tex: "\\vec{a}=a_x\\hat{\\imath}+a_y\\hat{\\jmath}",
    },
    {
      label: "Magnitude",
      tex: "a=\\sqrt{a_x^2+a_y^2}",
    },
  ]}
/>

## Rules

<Equation label="Project components" tex="a_x=a\cos\theta,\quad a_y=a\sin\theta" />

<Equation label="Rebuild vector" tex="\vec{a}=a_x\hat{\imath}+a_y\hat{\jmath}" />

<Equation label="Magnitude check" tex="a=\sqrt{a_x^2+a_y^2}" />

<Equation label="Direction check" tex="\tan\theta=\frac{a_y}{a_x}" />

## Checks

- Components carry signs.
- Components share the vector unit.
- Quadrant fixes the final angle.
- Perpendicular components add by Pythagoras.`;
