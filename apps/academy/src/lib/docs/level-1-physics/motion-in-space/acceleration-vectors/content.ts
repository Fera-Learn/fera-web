export const content = String.raw`## Principle

Acceleration is the time derivative of velocity, so it measures how the velocity vector changes.

The velocity vector can change in magnitude, direction, or both. Acceleration points with the velocity-change vector, not necessarily with the velocity itself.

## Notation

<Notation
  items={[
    { symbol: "\\vec a", meaning: "acceleration vector", unit: "m s^{-2}" },
    { symbol: "a_x,a_y,a_z", meaning: "acceleration components", unit: "m s^{-2}" },
    { symbol: "\\vec v", meaning: "velocity vector", unit: "m s^{-1}" },
    { symbol: "\\Delta\\vec v", meaning: "change in velocity", unit: "m s^{-1}" },
    { symbol: "\\vec r", meaning: "position vector", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Start from velocity change

Acceleration is built from the change in velocity over a time interval. The instantaneous value is the limit of that ratio.

<PhysicsDerivation
  items={[
    {
      label: "Velocity change",
      tex: "\\Delta\\vec v=\\vec v_f-\\vec v_i",
    },
    {
      label: "Average acceleration",
      tex: "\\vec a_{\\mathrm{avg}}=\\frac{\\Delta\\vec v}{\\Delta t}",
    },
    {
      label: "Instantaneous acceleration",
      tex: "\\vec a=\\lim_{\\Delta t\\to0}\\frac{\\Delta\\vec v}{\\Delta t}=\\frac{d\\vec v}{dt}",
    },
  ]}
/>

### Derivation 2: Work component by component

For Cartesian axes, the basis vectors are fixed, so differentiating a velocity vector means differentiating each component.

<PhysicsDerivation
  items={[
    {
      label: "Write velocity components",
      tex: "\\vec v(t)=v_x(t)\\hat{\\imath}+v_y(t)\\hat{\\jmath}+v_z(t)\\hat{k}",
    },
    {
      label: "Differentiate velocity",
      tex: "\\vec a(t)=\\frac{dv_x}{dt}\\hat{\\imath}+\\frac{dv_y}{dt}\\hat{\\jmath}+\\frac{dv_z}{dt}\\hat{k}",
    },
    {
      label: "Name acceleration components",
      tex: "\\vec a=a_x\\hat{\\imath}+a_y\\hat{\\jmath}+a_z\\hat{k}",
    },
  ]}
/>

### Derivation 3: Connect to position

Because velocity is already the derivative of position, acceleration is the second derivative of position.

<PhysicsDerivation
  items={[
    {
      label: "Velocity from position",
      tex: "\\vec v=\\frac{d\\vec r}{dt}",
    },
    {
      label: "Acceleration from velocity",
      tex: "\\vec a=\\frac{d\\vec v}{dt}",
    },
    {
      label: "Second derivative",
      tex: "\\vec a=\\frac{d^2\\vec r}{dt^2}",
    },
  ]}
/>

The diagram below compares two velocity vectors placed tail-to-tail. The acceleration direction follows the vector change from initial velocity to final velocity.

<CartesianDiagram
  title="Velocity change"
  caption="Acceleration points in the direction of the velocity-change vector."
  width={460}
  height={280}
  xRange={{ min: 0, max: 6, step: 1, label: "x" }}
  yRange={{ min: 0, max: 5, step: 1, label: "y" }}
  vectors={[
    { label: "\\vec v_i", from: { x: 1, y: 1 }, to: { x: 4, y: 2 } },
    {
      label: "\\vec v_f",
      from: { x: 1, y: 1 },
      to: { x: 3, y: 4 },
      color: "var(--chart-2)",
    },
    {
      label: "\\Delta\\vec v",
      from: { x: 4, y: 2 },
      to: { x: 3, y: 4 },
      color: "var(--chart-3)",
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Acceleration vector" tex="\vec a=\frac{d\vec v}{dt}" />

<Equation label="From position" tex="\vec a=\frac{d^2\vec r}{dt^2}" />

<Equation label="Component form" tex="\vec a=a_x\hat{\imath}+a_y\hat{\jmath}+a_z\hat{k}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "For \\(\\vec v(t)=3t\\hat{\\imath}+(4-t^2)\\hat{\\jmath}\\), find \\(\\vec a\\).",
      answer: "Differentiate each component: \\[\\vec a=3\\hat{\\imath}-2t\\hat{\\jmath}\\,\\mathrm{m\\,s^{-2}}\\]",
    },
    {
      title: "Example 2",
      question: "For \\(\\vec r(t)=t^2\\hat{\\imath}+t^3\\hat{\\jmath}\\), find \\(\\vec a\\) at \\(t=2\\,\\mathrm{s}\\).",
      answer: "Differentiate twice: \\[\\vec v=2t\\hat{\\imath}+3t^2\\hat{\\jmath}\\] \\[\\vec a=2\\hat{\\imath}+6t\\hat{\\jmath}\\] At \\(t=2\\), \\[\\vec a=2\\hat{\\imath}+12\\hat{\\jmath}\\,\\mathrm{m\\,s^{-2}}\\]",
    },
  ]}
/>

## Checks

- Acceleration is not always parallel to velocity.
- Direction change requires acceleration.
- Constant speed can still have nonzero acceleration.
- Work component by component.`;
