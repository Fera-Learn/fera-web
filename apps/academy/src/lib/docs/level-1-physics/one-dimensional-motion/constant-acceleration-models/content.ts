export const content = String.raw`## Principle

Constant acceleration makes velocity linear in time and position quadratic in time. The model applies only across intervals where acceleration can reasonably be treated as constant.

## Notation

<Notation
  items={[
    { symbol: "x", meaning: "position", unit: "m" },
    { symbol: "x_0", meaning: "initial position", unit: "m" },
    { symbol: "v_x", meaning: "velocity", unit: "m s^{-1}" },
    { symbol: "v_{0x}", meaning: "initial velocity", unit: "m s^{-1}" },
    { symbol: "a_x", meaning: "constant acceleration", unit: "m s^{-2}" },
    { symbol: "t", meaning: "elapsed time", unit: "s" },
  ]}
/>

## Method

<PhysicsDerivation
  items={[
    {
      label: "Start with constant rate",
      tex: "a_x=\\frac{dv_x}{dt}",
      note: "The acceleration has the same value throughout the modeled interval.",
    },
    {
      label: "Integrate velocity change",
      tex: "v_x=v_{0x}+a_xt",
    },
    {
      label: "Use velocity definition",
      tex: "v_x=\\frac{dx}{dt}",
    },
    {
      label: "Integrate position change",
      tex: "x=x_0+v_{0x}t+\\frac{1}{2}a_xt^2",
    },
    {
      label: "Eliminate time",
      tex: "v_x^2=v_{0x}^2+2a_x(x-x_0)",
      note: "Combine the velocity-time and position-time results when time is not part of the problem.",
    },
  ]}
/>

The graph below shows the two signatures of the model: a straight velocity-time graph and a curved position-time graph.

<CartesianDiagram
  title="Constant acceleration signatures"
  caption="Velocity is linear in time while position curves quadratically."
  xRange={{ min: 0, max: 5, step: 1, label: "t" }}
  yRange={{ min: 0, max: 14, step: 2, label: "x, v_x" }}
  curves={[
    {
      label: "v_x",
      color: "var(--chart-2)",
      points: [
        { x: 0, y: 2 },
        { x: 1, y: 4 },
        { x: 2, y: 6 },
        { x: 3, y: 8 },
        { x: 4, y: 10 },
      ],
    },
    {
      label: "x",
      color: "var(--chart-3)",
      points: [
        { x: 0, y: 1 },
        { x: 1, y: 4 },
        { x: 2, y: 9 },
        { x: 3, y: 14 },
      ],
    },
  ]}
/>

Choose an equation by matching the unknown and the quantities actually given; the no-time equation is useful when the interval time is absent.

## Rules

These are the compact results from the method above.

<Equation label="Velocity time" tex="v_x = v_{0x} + a_xt" />

<Equation label="Position time" tex="x = x_0 + v_{0x}t + \frac{1}{2}a_xt^2" />

<Equation label="Velocity position" tex="v_x^2 = v_{0x}^2 + 2a_x(x - x_0)" />

## Examples

<PhysicsExamples
  items={[
{
      title: "Example 1",
      question: "A particle has initial speed \(v_{0x}\) and constant acceleration \(-a_x\). How far does it travel before stopping?",
      answer: "Use the no-time equation because the target is distance and the final velocity is known. \[0=v_{0x}^2+2(-a_x)\Delta x\] \[\Delta x=\frac{v_{0x}^2}{2a_x}\]",
    },
    {
      title: "Example 2",
      question: "A particle starts at \(x_0\) with velocity \(v_{0x}\) and acceleration \(a_x\). What position does it reach after time \(t\)?",
      answer: "Use the position-time equation directly. \[x=x_0+v_{0x}t+\frac{1}{2}a_xt^2\] The middle term is initial motion; the quadratic term is the acceleration correction.",
    },
    {
      title: "Example 2",
      question: "A particle starts at \\(x_0\\) with velocity \\(v_0\\) and acceleration \\(a\\). What position does it reach after time \\(t\\)?",
      answer: "Use the position-time equation directly. \\[x=x_0+v_0t+\\frac{1}{2}at^2\\] The middle term is initial motion; the quadratic term is the acceleration correction.",
    },
  ]}
/>

## Checks

- Use only for constant acceleration.
- Time is measured from the initial state.
- Signs follow the chosen axis.
- The no-time equation removes t.`;
