export const content = String.raw`## Principle

Instantaneous velocity is the limiting slope of position at one time. It keeps the sign of motion along the chosen axis.

## Notation

<Notation
  items={[
    { symbol: "v_x", meaning: "instantaneous velocity", unit: "m s^{-1}" },
    { symbol: "x(t)", meaning: "position function", unit: "m" },
    { symbol: "\\Delta x", meaning: "small displacement", unit: "m" },
    { symbol: "\\Delta t", meaning: "small time interval", unit: "s" },
  ]}
/>

## Method

<PhysicsDerivation
  items={[
    {
      label: "Shrink the interval",
      tex: "v_x = \\lim_{\\Delta t\\to 0}\\frac{x(t+\\Delta t)-x(t)}{\\Delta t}",
    },
    {
      label: "Differentiate",
      tex: "v_x = \\frac{dx}{dt}",
    },
    {
      label: "Speed",
      tex: "v = |v_x|",
      note: "Speed removes direction; velocity keeps it.",
    },
  ]}
/>

The tangent line below is the local linear model of the position graph near one instant. Its slope is the instantaneous velocity at that instant.

<CartesianPhysicsGraph
  title="Instantaneous velocity as tangent slope"
  caption="Shrinking the time interval turns a secant into a tangent at one instant."
  xRange={{ min: 0, max: 5, step: 1, label: "t" }}
  yRange={{ min: -1, max: 12, step: 3, label: "x" }}
  curves={[
    {
      label: "x(t)",
      points: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
      ],
    },
    {
      label: "tangent",
      dashed: true,
      color: "var(--chart-3)",
      points: [
        { x: 1.2, y: 0.8 },
        { x: 3.2, y: 8.8 },
      ],
    },
  ]}
  points={[
    { label: "t", x: 2, y: 4 },
  ]}
/>

If the tangent is horizontal, the velocity is zero at that instant; the particle may still reverse direction afterward.

## Rules

These are the compact results from the method above.

<Equation label="Limit definition" tex="v_x = \lim_{\Delta t\to 0}\frac{\Delta x}{\Delta t}" />

<Equation label="Derivative form" tex="v_x = \frac{dx}{dt}" />

<Equation label="Speed" tex="v = |v_x|" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "For \\(x(t)=3t^2-2t\\), find the velocity at \\(t=2\\,\\text{s}\\).",
      answer: "\\[v_x=\\frac{dx}{dt}=6t-2\\] \\[v_x(2)=10\\,\\text{m s}^{-1}\\]",
    },
    {
      title: "Example 2",
      question: "For \\(x(t)=t^2-4t\\), when does the particle momentarily stop?",
      answer: "\\[v_x=2t-4\\] \\[0=2t-4\\] \\[t=2\\,\\text{s}\\] The particle can have zero velocity at a turning point.",
    },
  ]}
/>

## Checks

- Positive velocity follows the positive axis.
- Zero velocity can occur while moving turns around.
- Steeper position graphs mean larger speed.`;
