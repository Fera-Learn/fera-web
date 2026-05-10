export const content = String.raw`## Principle

Work transfers energy through the force component along displacement.

## Notation

<Notation
  items={[
    { symbol: "\\vec{F}", meaning: "force doing the work", unit: "N" },
    { symbol: "\\Delta\\vec{r}", meaning: "displacement", unit: "m" },
    { symbol: "W", meaning: "work done by the force", unit: "J" },
    { symbol: "\\theta", meaning: "angle between force and displacement", unit: "rad or deg" },
    { symbol: "F_{\\parallel}", meaning: "force component along displacement", unit: "N" },
  ]}
/>

## Method

The diagram isolates the part of the force that points along the displacement; the perpendicular part does not transfer energy along this path.

<CartesianPhysicsGraph
  title="Work uses the parallel component"
  caption="Only the force component along displacement contributes to work."
  xRange={{ min: 0, max: 5, step: 1, label: "x" }}
  yRange={{ min: 0, max: 4, step: 1, label: "y" }}
  vectors={[
    { label: "\\Delta\\vec{r}", from: { x: 0, y: 0 }, to: { x: 4, y: 0 } },
    {
      label: "\\vec{F}",
      from: { x: 0, y: 0 },
      to: { x: 3, y: 2 },
      color: "var(--chart-3)",
    },
    {
      label: "F_{\\parallel}",
      from: { x: 0, y: 0 },
      to: { x: 3, y: 0 },
      color: "var(--chart-5)",
    },
  ]}
/>

Projection turns the vector force into the signed component that acts along the displacement.

<PhysicsDerivation
  items={[
    {
      label: "Displacement",
      tex: "\\Delta\\vec{r}=\\vec{r}_f-\\vec{r}_i",
    },
    {
      label: "Project force",
      tex: "F_{\\parallel}=F\\cos\\theta",
    },
    {
      label: "Define work",
      tex: "W=F_{\\parallel}\\Delta r",
    },
    {
      label: "Dot product",
      tex: "W=\\vec{F}\\cdot\\Delta\\vec{r}",
    },
    {
      label: "Net work",
      tex: "W_{\\mathrm{net}}=\\sum_i W_i",
    },
  ]}
/>

## Rules

<Equation label="Constant-force work" tex="W=\vec{F}\cdot\Delta\vec{r}" />

<Equation label="Angle form" tex="W=F\Delta r\cos\theta" />

<Equation label="Component form" tex="W=F_x\Delta x+F_y\Delta y+F_z\Delta z" />

<Equation label="Net work" tex="W_{\mathrm{net}}=\sum_i W_i" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(30\\,\\mathrm{N}\\) force pulls \\(4\\,\\mathrm{m}\\) at \\(40^\\circ\\) to the displacement. Find the work.",
      answer: "\\[W=F\\Delta r\\cos\\theta=30(4)\\cos40^\\circ=91.9\\,\\mathrm{J}\\]",
    },
    {
      title: "Example 2",
      question: "For \\(\\vec F=6\\hat\\imath-2\\hat\\jmath\\,\\mathrm{N}\\) and \\(\\Delta\\vec r=3\\hat\\imath+4\\hat\\jmath\\,\\mathrm{m}\\), find the work.",
      answer: "\\[W=6(3)+(-2)(4)=10\\,\\mathrm{J}\\]",
    },
  ]}
/>

## Checks

- Joules are newton metres.
- Perpendicular force gives zero work.
- Opposing force gives negative work.
- Work is scalar, not vector.`;
