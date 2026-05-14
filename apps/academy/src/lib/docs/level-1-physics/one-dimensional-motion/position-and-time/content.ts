export const content = String.raw`## Principle

Position locates an object on a chosen axis at a stated time. The number only has meaning after an origin, a positive direction, and a clock reading have been chosen.

## Notation

<Notation
  items={[
    { symbol: "x", meaning: "position on the axis", unit: "m" },
    { symbol: "t", meaning: "time", unit: "s" },
    { symbol: "x_0", meaning: "initial position", unit: "m" },
    { symbol: "\\Delta x", meaning: "displacement", unit: "m" },
    { symbol: "\\Delta t", meaning: "elapsed time", unit: "s" },
  ]}
/>

## Method

<PhysicsDerivation
  items={[
    {
      label: "Displacement",
      tex: "\\Delta x = x_f - x_i",
      note: "Subtract positions measured from the same origin.",
    },
    {
      label: "Elapsed time",
      tex: "\\Delta t = t_f - t_i",
      note: "Use the same clock for both times.",
    },
    {
      label: "Axis sign",
      tex: "x < 0 \\quad \\text{means opposite the chosen positive direction}",
    },
  ]}
/>

The graph below represents a motion as a sequence of time-position states. Read position from a single point, and read displacement from the change between two points.

<CartesianDiagram
  title="Position on an axis"
  caption="A point on the graph gives the object's position at one instant."
  xRange={{ min: 0, max: 5, step: 1, label: "t" }}
  yRange={{ min: -2, max: 6, step: 2, label: "x" }}
  curves={[
    {
      label: "x(t)",
      points: [
        { x: 0, y: -1 },
        { x: 1, y: 0 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 5 },
      ],
    },
  ]}
  points={[
    { label: "state", x: 3, y: 3 },
  ]} 
/>

The graph gives net changes in position. It does not determine total distance unless the path between recorded states is known.

## Rules

These are the compact results from the method above.

<Equation label="Displacement" tex="\Delta x = x_f - x_i" />

<Equation label="Elapsed time" tex="\Delta t = t_f - t_i" />

<Equation label="Position function" tex="x = x(t)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A particle moves from \\(x_i=-2\\,\\text{m}\\) to \\(x_f=5\\,\\text{m}\\). What is its displacement?",
      answer: "\\[\\Delta x=x_f-x_i=5-(-2)=7\\,\\text{m}\\] The positive sign means the displacement is in the positive axis direction.",
    },
    {
      title: "Example 2",
      question: "The same motion is described with a new origin shifted by \\(+3\\,\\text{m}\\). Does the displacement change?",
      answer: "The positions both shift, but their difference does not. \\[\\Delta x'=(x_f-3)-(x_i-3)=x_f-x_i\\] Displacement is origin-independent.",
    },
  ]}
/>

## Checks

- Position depends on origin.
- Displacement does not equal distance.
- Signs must match the axis.
- Time intervals are usually positive.`;
