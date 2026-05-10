export const content = String.raw`## Principle

Vector addition preserves direction by joining arrows head-to-tail.

## Notation

<Notation
  items={[
    { symbol: "\\vec{a}", meaning: "first vector", unit: "varies" },
    { symbol: "\\vec{b}", meaning: "second vector", unit: "varies" },
    { symbol: "\\vec{r}", meaning: "resultant vector", unit: "same as inputs" },
    { symbol: "\\theta", meaning: "angle between vectors", unit: "rad or deg" },
  ]}
/>

## Method

The sketch uses the head-to-tail convention: translate the second vector without rotating it, then close the triangle.

<CartesianPhysicsGraph
  title="Head-to-tail addition"
  caption="The resultant runs from the original tail to the final head."
  xRange={{ min: 0, max: 6, step: 1, label: "x" }}
  yRange={{ min: 0, max: 5, step: 1, label: "y" }}
  vectors={[
    { label: "\\vec{a}", from: { x: 0, y: 0 }, to: { x: 3, y: 1 } },
    { label: "\\vec{b}", from: { x: 3, y: 1 }, to: { x: 5, y: 4 } },
    {
      label: "\\vec{r}",
      from: { x: 0, y: 0 },
      to: { x: 5, y: 4 },
      color: "var(--chart-3)",
    },
  ]}
/>

The closing arrow has the same start and finish as the two-step path, so it is the resultant.

<PhysicsDerivation
  items={[
    {
      label: "Resultant",
      tex: "\\vec{r}=\\vec{a}+\\vec{b}",
    },
    {
      label: "Triangle size",
      tex: "r^2=a^2+b^2+2ab\\cos\\theta",
      note: "The cosine rule uses the angle between the two vector directions.",
    },
    {
      label: "Order",
      tex: "\\vec{a}+\\vec{b}=\\vec{b}+\\vec{a}",
      note: "Changing construction order does not change the final start and finish.",
    },
  ]}
/>

## Rules

<Equation label="Vector resultant" tex="\vec{r}=\vec{a}+\vec{b}" />

<Equation label="Triangle magnitude" tex="r^2=a^2+b^2+2ab\cos\theta" />

<Equation label="Commutative sum" tex="\vec{a}+\vec{b}=\vec{b}+\vec{a}" />

## Checks

- Do not add magnitudes unless directions match.
- Translating a vector does not change it.
- Resultant units match vector units.
- Reversing a vector changes its sign.`;
