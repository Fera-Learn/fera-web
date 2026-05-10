export const content = String.raw`## Principle

Acceleration measures how velocity changes with time. In one dimension, its sign tells how velocity changes, not by itself whether speed is increasing.

## Notation

<Notation
  items={[
    { symbol: "a_x", meaning: "acceleration on the axis", unit: "m s^{-2}" },
    { symbol: "v_x", meaning: "instantaneous velocity", unit: "m s^{-1}" },
    { symbol: "\\Delta v_x", meaning: "velocity change", unit: "m s^{-1}" },
    { symbol: "\\Delta t", meaning: "elapsed time", unit: "s" },
  ]}
/>

## Method

<PhysicsDerivation
  items={[
    {
      label: "Velocity change",
      tex: "\\Delta v_x = v_{xf} - v_{xi}",
    },
    {
      label: "Average rate",
      tex: "\\bar{a}_x = \\frac{\\Delta v_x}{\\Delta t}",
      note: "Average acceleration spreads the velocity change over the whole interval.",
    },
    {
      label: "Instant rate",
      tex: "a_x = \\frac{dv_x}{dt}",
      note: "At one instant, replace the finite interval with a derivative.",
    },
    {
      label: "Use velocity definition",
      tex: "v_x=\\frac{dx}{dt}",
    },
    {
      label: "Second derivative",
      tex: "a_x=\\frac{d^2x}{dt^2}",
      note: "Acceleration is the derivative of the derivative of position.",
    },
  ]}
/>

The graph below is a velocity-time representation. Its slope is acceleration, and the signed area under it would be displacement.

<CartesianPhysicsGraph
  title="Acceleration as velocity slope"
  caption="A straight velocity-time graph has constant acceleration equal to its slope."
  xRange={{ min: 0, max: 5, step: 1, label: "t" }}
  yRange={{ min: -2, max: 10, step: 2, label: "v_x" }}
  curves={[
    {
      label: "v_x(t)",
      points: [
        { x: 0, y: 1 },
        { x: 1, y: 3 },
        { x: 2, y: 5 },
        { x: 3, y: 7 },
        { x: 4, y: 9 },
      ],
    },
  ]}
/>

Compare the signs of velocity and acceleration before deciding whether the object is speeding up or slowing down.

## Rules

These are the compact results from the method above.

<Equation label="Average acceleration" tex="\bar{a}_x = \frac{\Delta v_x}{\Delta t}" />

<Equation label="Instant acceleration" tex="a_x = \frac{dv_x}{dt}" />

<Equation label="Second derivative" tex="a_x = \frac{d^2x}{dt^2}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Velocity changes from \\(6\\,\\text{m s}^{-1}\\) to \\(-2\\,\\text{m s}^{-1}\\) in \\(4\\,\\text{s}\\). Find average acceleration.",
      answer: "\\[\\Delta v_x=-2-6=-8\\,\\text{m s}^{-1}\\] \\[\\bar{a}_x=\\frac{-8}{4}=-2\\,\\text{m s}^{-2}\\]",
    },
    {
      title: "Example 2",
      question: "For \\(v_x(t)=4+3t\\), find \\(a_x\\).",
      answer: "\\[a_x=\\frac{dv_x}{dt}=3\\,\\text{m s}^{-2}\\] The acceleration is constant because velocity is linear in time.",
    },
  ]}
/>

## Checks

- Acceleration sign follows velocity change.
- Negative acceleration is not always slowing down.
- Speed changes when velocity and acceleration oppose.`;
