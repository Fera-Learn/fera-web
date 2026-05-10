export const content = String.raw`## Principle

Newton's second law turns the external force model for a system into its acceleration.

## Notation

<Notation
  items={[
    { symbol: "m", meaning: "mass of the chosen system", unit: "kg" },
    { symbol: "\\vec a", meaning: "acceleration of the chosen system", unit: "m s^{-2}" },
    { symbol: "\\sum\\vec F", meaning: "resultant external force", unit: "N" },
    { symbol: "\\vec W", meaning: "weight force", unit: "N" },
    { symbol: "g", meaning: "gravitational field strength", unit: "m s^{-2}" },
    { symbol: "\\theta", meaning: "slope angle", unit: "rad or deg" },
  ]}
/>

## Method

### Derivation 1: Choose the system

Newton's second law applies to one chosen system. Only external forces on that system belong in the force sum.

<PhysicsDerivation
  items={[
    {
      label: "Vector law",
      tex: "\\sum\\vec F_{\\mathrm{external}}=m\\vec a",
      note: "Internal forces cancel only inside the chosen system.",
    },
    {
      label: "Resolve by axes",
      tex: "\\sum F_x=ma_x,\\qquad \\sum F_y=ma_y",
    },
    {
      label: "Use kinematics after",
      tex: "v=v_0+at",
      note: "This step is valid only after the force model gives a constant acceleration.",
    },
  ]}
/>

### Derivation 2: Derive the frictionless-slope acceleration

For a block on a frictionless slope, choose one axis parallel to the slope and one perpendicular to it. Gravity is the only force with a component down the slope.

<PhysicsDerivation
  items={[
    {
      label: "Parallel force balance",
      tex: "\\sum F_{\\parallel}=mg\\sin\\theta=ma_{\\parallel}",
    },
    {
      label: "Slope acceleration",
      tex: "a_{\\parallel}=g\\sin\\theta",
    },
    {
      label: "Perpendicular balance",
      tex: "\\sum F_{\\perp}=N-mg\\cos\\theta=0",
      note: "There is no acceleration through the surface.",
    },
  ]}
/>

The free-body diagram shows the actual forces only: weight downward and the normal force perpendicular to the surface. The component equations above are built from these forces.

<FreeBodyDiagram
  title="Slope force model"
  caption="Actual forces on a frictionless slope: weight and the normal reaction."
  bodyLabel="m"
  surface="incline"
  inclineAngle={25}
  forces={[
    { label: "N", angle: 115 },
    { label: "W", angle: 270, color: "var(--chart-5)" },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Second law" tex="\sum \vec F=m\vec a" />

<Equation label="Component law" tex="\sum F_x=ma_x,\qquad \sum F_y=ma_y" />

<Equation label="Weight vector" tex="\vec W=m\vec g" />

<Equation label="Frictionless slope" tex="a=g\sin\theta" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(4.0\\,\\mathrm{kg}\\) cart is pulled forward by \\(18\\,\\mathrm{N}\\) while a \\(6\\,\\mathrm{N}\\) resistance acts backward. Find \\(a\\).",
      answer: "Choose forward as positive. The net force is \\[\\sum F=18-6=12\\,\\mathrm{N}\\] so \\[a=\\frac{12}{4.0}=3.0\\,\\mathrm{m\\,s^{-2}}\\]",
    },
    {
      title: "Example 2",
      question: "Forces \\(20\\,\\mathrm{N}\\) east and \\(12\\,\\mathrm{N}\\) north act on a \\(5.0\\,\\mathrm{kg}\\) particle. Find \\(\\vec a\\).",
      answer: "Use vector components directly: \\[\\vec a=\\frac{20\\hat\\imath+12\\hat\\jmath}{5.0}=4.0\\hat\\imath+2.4\\hat\\jmath\\,\\mathrm{m\\,s^{-2}}\\]",
    },
  ]}
/>

## Checks

- Only external forces belong in the net-force sum for the chosen system.
- Acceleration points in the direction of the resultant force.
- Zero acceleration means zero net force, not zero individual forces.
- The normal force is found from the perpendicular force equation.`;
