export const content = String.raw`## Principle

Calculus links motion quantities by differentiation and integration. Derivatives describe local rates, while integrals accumulate signed changes over an interval.

## Notation

<Notation
  items={[
    { symbol: "x(t)", meaning: "position function", unit: "m" },
    { symbol: "v_x(t)", meaning: "velocity function", unit: "m s^{-1}" },
    { symbol: "a_x(t)", meaning: "acceleration function", unit: "m s^{-2}" },
    { symbol: "t", meaning: "time", unit: "s" },
  ]}
/>

## Method

<PhysicsDerivation
  items={[
    {
      label: "Velocity is slope",
      tex: "v_x(t)=\\frac{dx}{dt}",
      note: "Differentiate position to get the local rate of position change.",
    },
    {
      label: "Acceleration is slope",
      tex: "a_x(t)=\\frac{dv_x}{dt}",
      note: "Differentiate velocity to get the local rate of velocity change.",
    },
    {
      label: "Accumulate velocity",
      tex: "\\Delta x=\\int_{t_i}^{t_f}v_x(t)\\,dt",
      note: "Signed area under velocity gives displacement.",
    },
    {
      label: "Accumulate acceleration",
      tex: "\\Delta v_x=\\int_{t_i}^{t_f}a_x(t)\\,dt",
      note: "Signed area under acceleration gives velocity change.",
    },
  ]}
/>

The graph below combines the two views: slope turns a position history into velocity, and area under a velocity history gives displacement.

<CartesianDiagram
  title="Area and slope"
  caption="Slope connects position to velocity; area under velocity gives displacement."
  xRange={{ min: 0, max: 5, step: 1, label: "t" }}
  yRange={{ min: 0, max: 10, step: 2, label: "x or v_x" }}
  curves={[
    {
      label: "x(t)",
      points: [
        { x: 0, y: 1 },
        { x: 1, y: 2 },
        { x: 2, y: 4 },
        { x: 3, y: 7 },
        { x: 4, y: 9 },
      ],
    },
    {
      label: "v_x(t)",
      color: "var(--chart-3)",
      points: [
        { x: 0, y: 1 },
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 4 },
        { x: 4, y: 5 },
      ],
    },
  ]}
/>

When velocity changes sign, split an integral before calculating distance; a single signed integral gives displacement.

## Rules

These are the compact results from the method above.

<Equation label="Velocity from position" tex="v_x(t) = \frac{dx}{dt}" />

<Equation label="Acceleration from velocity" tex="a_x(t) = \frac{dv_x}{dt}" />

<Equation label="Displacement from velocity" tex="\Delta x = \int_{t_i}^{t_f} v_x(t)\,dt" />

<Equation label="Velocity change" tex="\Delta v_x = \int_{t_i}^{t_f} a_x(t)\,dt" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "For \\(x(t)=t^3-2t\\), find \\(v_x(t)\\), \\(a_x(t)\\), and both values at \\(t=2\\).",
      answer: "\\[v_x=3t^2-2\\] \\[a_x=6t\\] At \\(t=2\\), \\[v_x=10\\,\\text{m s}^{-1}\\] \\[a_x=12\\,\\text{m s}^{-2}\\]",
    },
    {
      title: "Example 2",
      question: "If \\(a_x(t)=kt\\), \\(v_x(0)=v_0\\), and \\(x(0)=0\\), find \\(v_x(t)\\) and \\(x(t)\\).",
      answer: "Integrate once. \\[v_x(t)=v_0+\\frac{1}{2}kt^2\\] Integrate again. \\[x(t)=v_0t+\\frac{1}{6}kt^3\\]",
    },
  ]}
/>

## Checks

- Derivatives give instantaneous rates.
- Integrals give accumulated change.
- Initial conditions fix constants.
- Graph area has physical units.`;
