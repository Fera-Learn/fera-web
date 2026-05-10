export const content = String.raw`## Principle

Average velocity measures displacement per time interval. It is a rate of net change, so it can hide reversals that occurred inside the interval.

## Notation

<Notation
  items={[
    { symbol: "\\bar{v}_x", meaning: "average velocity", unit: "m s^{-1}" },
    { symbol: "\\Delta x", meaning: "displacement", unit: "m" },
    { symbol: "\\Delta t", meaning: "elapsed time", unit: "s" },
    { symbol: "d", meaning: "total distance traveled", unit: "m" },
  ]}
/>

## Method

<PhysicsDerivation
  items={[
    {
      label: "Start with displacement",
      tex: "\\Delta x = x_f - x_i",
    },
    {
      label: "Divide by time",
      tex: "\\bar{v}_x = \\frac{\\Delta x}{\\Delta t}",
    },
    {
      label: "Speed uses distance",
      tex: "\\text{average speed} = \\frac{d}{\\Delta t}",
      note: "Distance counts path length; displacement counts net change.",
    },
  ]}
/>

The secant line below connects the initial and final states. Its slope is the average velocity for the interval, even if the actual path between the two states bends.

<CartesianPhysicsGraph
  title="Average velocity as secant slope"
  caption="Average velocity uses the slope between two positions, not the whole path length."
  xRange={{ min: 0, max: 5, step: 1, label: "t" }}
  yRange={{ min: 0, max: 10, step: 2, label: "x" }}
  curves={[
    {
      label: "x(t)",
      points: [
        { x: 0, y: 1 },
        { x: 1, y: 2 },
        { x: 2, y: 4 },
        { x: 3, y: 7 },
        { x: 4, y: 8 },
      ],
    },
    {
      label: "\\bar{v}_x",
      dashed: true,
      color: "var(--chart-3)",
      points: [
        { x: 1, y: 2 },
        { x: 4, y: 8 },
      ],
    },
  ]}
  points={[
    { label: "i", x: 1, y: 2 },
    { label: "f", x: 4, y: 8 },
  ]}
/>

Use distance, not displacement, only when the question asks for average speed.

## Rules

These are the compact results from the method above.

<Equation label="Average velocity" tex="\bar{v}_x = \frac{\Delta x}{\Delta t}" />

<Equation label="Average speed" tex="\text{average speed} = \frac{d}{\Delta t}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A particle moves from \\(x_i=4\\,\\text{m}\\) to \\(x_f=-2\\,\\text{m}\\) in \\(3\\,\\text{s}\\). Find \\(\\bar{v}_x\\).",
      answer: "\\[\\Delta x=-2-4=-6\\,\\text{m}\\] \\[\\bar{v}_x=\\frac{-6}{3}=-2\\,\\text{m s}^{-1}\\]",
    },
    {
      title: "Example 2",
      question: "A runner travels \\(100\\,\\text{m}\\) out and \\(100\\,\\text{m}\\) back in \\(40\\,\\text{s}\\). Compare average velocity and average speed.",
      answer: "The displacement is zero. \\[\\bar{v}_x=0\\] The distance is \\(200\\,\\text{m}\\). \\[\\text{average speed}=\\frac{200}{40}=5\\,\\text{m s}^{-1}\\]",
    },
  ]}
/>

## Checks

- Velocity can be negative.
- Speed is not negative.
- Returning to start gives zero average velocity.
- Units must be length over time.`;
