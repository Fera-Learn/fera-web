export const content = String.raw`## Principle

Dot and cross products measure parallel alignment and perpendicular oriented area.

## Notation

<Notation
  items={[
    { symbol: "\\vec{a}\\cdot\\vec{b}", meaning: "scalar product", unit: "a unit times b unit" },
    { symbol: "\\vec{a}\\times\\vec{b}", meaning: "vector product", unit: "a unit times b unit" },
    { symbol: "\\theta", meaning: "angle from a to b", unit: "rad or deg" },
    { symbol: "\\hat{n}", meaning: "right-hand-rule direction", unit: "none" },
    { symbol: "a_{\\parallel}", meaning: "component of a parallel to b", unit: "same as a" },
  ]}
/>

## Method

The angle between the vectors controls both products: cosine keeps the parallel part, sine keeps the perpendicular spread.

<PolarPhysicsGraph
  title="Angle between vectors"
  caption="Dot uses parallel projection; cross uses perpendicular spread."
  maxRadius={4}
  vectors={[
    { label: "\\vec{a}", radius: 3.5, angle: 0 },
    { label: "\\vec{b}", radius: 3, angle: 55, color: "var(--chart-3)" },
  ]}
/>

<PhysicsDerivation
  items={[
    {
      label: "Parallel part",
      tex: "a_{\\parallel}=|\\vec{a}|\\cos\\theta",
    },
    {
      label: "Dot product",
      tex: "\\vec{a}\\cdot\\vec{b}=a_{\\parallel}|\\vec{b}|",
    },
    {
      label: "Perpendicular part",
      tex: "|\\vec{a}_{\\perp}|=|\\vec{a}|\\sin\\theta",
    },
    {
      label: "Cross magnitude",
      tex: "|\\vec{a}\\times\\vec{b}|=|\\vec{a}|\\,|\\vec{b}|\\sin\\theta",
    },
    {
      label: "Orientation",
      tex: "\\vec{a}\\times\\vec{b}=|\\vec{a}|\\,|\\vec{b}|\\sin\\theta\\,\\hat{n}",
    },
  ]}
/>

## Rules

<Equation label="Dot geometry" tex="\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos\theta" />

<Equation label="Dot components" tex="\vec{a}\cdot\vec{b}=a_xb_x+a_yb_y+a_zb_z" />

<Equation label="Cross geometry" tex="\vec{a}\times\vec{b}=|\vec{a}||\vec{b}|\sin\theta\,\hat{n}" />

<Equation label="Cross magnitude" tex="|\vec{a}\times\vec{b}|=\text{area of parallelogram}" />

## Checks

- Dot product is scalar.
- Cross product is vector.
- Parallel vectors have zero cross product.
- Perpendicular vectors have zero dot product.`;
