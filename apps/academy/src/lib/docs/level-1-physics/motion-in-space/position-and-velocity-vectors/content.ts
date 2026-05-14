export const content = String.raw`## Principle

A position vector locates a particle from an origin; velocity is the time derivative of that vector.

Earlier one-dimensional motion used one coordinate. In space, the same idea is applied component by component along fixed coordinate axes.

## Notation

<Notation
  items={[
    { symbol: "\\vec r", meaning: "position vector from the origin", unit: "m" },
    { symbol: "x,y,z", meaning: "Cartesian position components", unit: "m" },
    { symbol: "\\Delta\\vec r", meaning: "displacement vector", unit: "m" },
    { symbol: "\\vec v", meaning: "velocity vector", unit: "m s^{-1}" },
    { symbol: "v", meaning: "speed, the magnitude of velocity", unit: "m s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Build the position vector

Choose an origin and fixed axes. A point with coordinates \\((x,y,z)\\) is reached by moving \\(x\\) along \\(\hat\imath\\), \\(y\\) along \\(\hat\jmath\\), and \\(z\\) along \\(\hat k\\).

<PhysicsDerivation
  items={[
    {
      label: "Add coordinate displacements",
      tex: "\\vec r=x\\hat{\\imath}+y\\hat{\\jmath}+z\\hat{k}",
    },
    {
      label: "Compare two positions",
      tex: "\\Delta\\vec r=\\vec r_f-\\vec r_i",
      note: "Displacement depends on two positions, not on the path between them.",
    },
    {
      label: "Write displacement in components",
      tex: "\\Delta\\vec r=\\Delta x\\hat{\\imath}+\\Delta y\\hat{\\jmath}+\\Delta z\\hat{k}",
    },
  ]}
/>

### Derivation 2: Differentiate the position vector

The unit vectors are fixed for Cartesian axes. That means the derivative acts on the scalar components.

<PhysicsDerivation
  items={[
    {
      label: "Let each component depend on time",
      tex: "\\vec r(t)=x(t)\\hat{\\imath}+y(t)\\hat{\\jmath}+z(t)\\hat{k}",
    },
    {
      label: "Differentiate component by component",
      tex: "\\vec v(t)=\\frac{dx}{dt}\\hat{\\imath}+\\frac{dy}{dt}\\hat{\\jmath}+\\frac{dz}{dt}\\hat{k}",
    },
    {
      label: "Name the velocity components",
      tex: "\\vec v=v_x\\hat{\\imath}+v_y\\hat{\\jmath}+v_z\\hat{k}",
      note: "Here \\(v_x=dx/dt\\), \\(v_y=dy/dt\\), and \\(v_z=dz/dt\\).",
    },
  ]}
/>

### Derivation 3: Interpret speed and tangent direction

Over a short time interval, displacement points along a small chord of the path. In the limit as the interval shrinks, that chord becomes tangent to the path.

<PhysicsDerivation
  items={[
    {
      label: "Average velocity",
      tex: "\\vec v_{\\mathrm{avg}}=\\frac{\\Delta\\vec r}{\\Delta t}",
    },
    {
      label: "Instantaneous velocity",
      tex: "\\vec v=\\lim_{\\Delta t\\to0}\\frac{\\Delta\\vec r}{\\Delta t}=\\frac{d\\vec r}{dt}",
    },
    {
      label: "Speed is magnitude",
      tex: "v=|\\vec v|=\\sqrt{v_x^2+v_y^2+v_z^2}",
    },
  ]}
/>

The sketch shows the geometric interpretation: position points from the origin, while velocity is tangent to the path at the particle.

<CartesianDiagram
  title="Position and velocity"
  caption="The position vector points from the origin; the velocity vector is tangent to the path."
  width={480}
  height={280}
  xRange={{ min: 0, max: 6, step: 1, label: "x" }}
  yRange={{ min: 0, max: 5, step: 1, label: "y" }}
  curves={[
    {
      label: "path",
      smooth: true,
      points: [
        { x: 0.8, y: 0.7 },
        { x: 1.8, y: 1.65 },
        { x: 3, y: 2.5 },
        { x: 4.2, y: 3.05 },
        { x: 5.3, y: 3.25 },
      ],
    },
  ]}
  vectors={[
    { label: "\\vec r", from: { x: 0, y: 0 }, to: { x: 3, y: 2.5 } },
    {
      label: "\\vec v",
      from: { x: 3, y: 2.5 },
      to: { x: 4.45, y: 3.35 },
      color: "var(--chart-3)",
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Position vector" tex="\vec r=x\hat{\imath}+y\hat{\jmath}+z\hat{k}" />

<Equation label="Displacement vector" tex="\Delta\vec r=\vec r_f-\vec r_i" />

<Equation label="Velocity vector" tex="\vec v=\frac{d\vec r}{dt}" />

<Equation label="Speed" tex="v=|\vec v|=\sqrt{v_x^2+v_y^2+v_z^2}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "For \\(\\vec r(t)=2t\\hat{\\imath}+t^2\\hat{\\jmath}\\), find \\(\\vec v\\) and speed at \\(t=3\\,\\mathrm{s}\\).",
      answer: "Differentiate the position vector: \\[\\vec v=2\\hat{\\imath}+2t\\hat{\\jmath}\\] At \\(t=3\\), \\[\\vec v=2\\hat{\\imath}+6\\hat{\\jmath}\\,\\mathrm{m\\,s^{-1}}\\] The speed is \\[v=\\sqrt{2^2+6^2}=\\sqrt{40}\\,\\mathrm{m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A particle moves from \\((1,2,0)\\,\\mathrm{m}\\) to \\((5,-1,4)\\,\\mathrm{m}\\). Find \\(\\Delta\\vec r\\).",
      answer: "Subtract final minus initial component by component: \\[\\Delta\\vec r=(5-1)\\hat{\\imath}+(-1-2)\\hat{\\jmath}+(4-0)\\hat{k}\\] So \\[\\Delta\\vec r=4\\hat{\\imath}-3\\hat{\\jmath}+4\\hat{k}\\,\\mathrm{m}\\]",
    },
  ]}
/>

## Checks

- Position depends on the chosen origin.
- Displacement compares two position vectors.
- Velocity is tangent to the path.
- Speed is a magnitude, so it is never negative.`;
