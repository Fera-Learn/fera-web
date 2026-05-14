export const content = String.raw`## Principle

Free fall is one-dimensional motion driven only by gravity. Near Earth, the model uses constant downward acceleration and ignores air resistance.

## Notation

<Notation
  items={[
    { symbol: "y", meaning: "vertical position", unit: "m" },
    { symbol: "y_0", meaning: "initial vertical position", unit: "m" },
    { symbol: "v_y", meaning: "vertical velocity", unit: "m s^{-1}" },
    { symbol: "v_{0y}", meaning: "initial vertical velocity", unit: "m s^{-1}" },
    { symbol: "a_y", meaning: "vertical acceleration", unit: "m s^{-2}" },
    { symbol: "g", meaning: "gravitational field strength near Earth", unit: "m s^{-2}" },
    { symbol: "t", meaning: "elapsed time", unit: "s" },
  ]}
/>

## Method

Free fall is the constant-acceleration model with gravity supplying the same downward acceleration throughout the motion.

<PhysicsDerivation
  items={[
    {
      label: "Choose upward positive",
      tex: "a_y=-g",
      note: "Gravity points downward, opposite the positive direction.",
    },
    {
      label: "Integrate acceleration",
      tex: "v_y=v_{0y}-gt",
    },
    {
      label: "Integrate velocity",
      tex: "y=y_0+v_{0y}t-\\frac{1}{2}gt^2",
    },
    {
      label: "Eliminate time",
      tex: "v_y^2=v_{0y}^2-2g(y-y_0)",
      note: "Use this when the problem gives positions but not the time interval.",
    },
    {
      label: "At the peak",
      tex: "v_y=0",
      note: "This is a velocity condition, not an acceleration condition.",
    },
  ]}
/>

The plotted trajectory uses upward as positive. The curve bends downward throughout because the acceleration is negative at every point, including the peak.

<CartesianDiagram
  title="Free-fall position"
  caption="With upward positive, the position history is a downward-opening parabola."
  xRange={{ min: 0, max: 4, step: 1, label: "t" }}
  yRange={{ min: 0, max: 9, step: 1, label: "y" }}
  curves={[
    {
      label: "y(t)",
      smooth: true,
      points: [
        { x: 0, y: 1.0 },
        { x: 0.5, y: 3.9 },
        { x: 1.0, y: 6.1 },
        { x: 1.5, y: 7.5 },
        { x: 2.0, y: 8.0 },
        { x: 2.5, y: 7.5 },
        { x: 3.0, y: 6.1 },
        { x: 3.5, y: 3.9 },
        { x: 4.0, y: 1.0 },
      ],
    },
  ]}
  points={[
    { label: "peak", x: 2, y: 8 },
  ]}
/>

At the peak, only the velocity is zero. The acceleration remains downward.

## Rules

These are the compact results from the method above.

<Equation label="Acceleration" tex="a_y=-g" />

<Equation label="Velocity" tex="v_y=v_{0y}-gt" />

<Equation label="Position" tex="y=y_0+v_{0y}t-\frac{1}{2}gt^2" />

<Equation label="No-time form" tex="v_y^2=v_{0y}^2-2g(y-y_0)" />

<Equation label="Near Earth" tex="g\approx9.81\,\text{m s}^{-2}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An object is dropped from height \\(h\\). How long does it take to reach the ground?",
      answer: "Take upward as positive with ground at \\(y=0\\). Then \\(y_0=h\\), \\(v_{0y}=0\\), and \\(a_y=-g\\). \\[0=h-\\frac{1}{2}gt^2\\] \\[t=\\sqrt{\\frac{2h}{g}}\\]",
    },
    {
      title: "Example 2",
      question: "An object is launched upward with speed \\(v_0\\). What is its maximum height above launch point?",
      answer: "At the highest point \\(v_y=0\\). Use the no-time form. \\[0=v_0^2-2g\\Delta y\\] \\[\\Delta y=\\frac{v_0^2}{2g}\\]",
    },
  ]}
/>

## Checks

- Gravity points downward.
- Mass does not appear in the ideal free-fall equations.
- Air resistance is not included.
- At peak height, velocity is zero but acceleration is still downward.`;
