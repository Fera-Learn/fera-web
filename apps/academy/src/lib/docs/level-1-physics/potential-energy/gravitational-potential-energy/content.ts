export const content = String.raw`## Principle

Gravitational potential energy tracks how height in a gravitational field stores or releases mechanical energy.

## Notation

<Notation
  items={[
    { symbol: "F_{g,y}", meaning: "vertical component of gravitational force", unit: "N" },
    { symbol: "U_g", meaning: "gravitational potential energy", unit: "J" },
    { symbol: "\\Delta U_g", meaning: "change in gravitational potential energy", unit: "J" },
    { symbol: "W_g", meaning: "work done by gravity", unit: "J" },
    { symbol: "K", meaning: "kinetic energy", unit: "J" },
    { symbol: "m", meaning: "mass", unit: "kg" },
    { symbol: "g", meaning: "gravitational field strength", unit: "m s^{-2}" },
    { symbol: "h", meaning: "vertical height change", unit: "m" },
    { symbol: "y", meaning: "vertical position", unit: "m" },
    { symbol: "\\Delta y", meaning: "vertical displacement", unit: "m" },
  ]}
/>

## Method

Near Earth, gravity has nearly constant magnitude and points downward. If upward is chosen as positive, a rise increases position while gravity acts in the opposite direction.

<PhysicsDerivation
  items={[
    {
      label: "Gravity direction",
      tex: "F_{g,y}=-mg",
      note: "The sign is negative because the force points downward.",
    },
    {
      label: "Work for a vertical move",
      tex: "W_g=F_{g,y}\\Delta y=-mg\\Delta y",
      note: "A rise gives negative work by gravity; a fall gives positive work.",
    },
    {
      label: "Define potential change",
      tex: "W_g=-\\Delta U_g",
    },
    {
      label: "Near-Earth change",
      tex: "\\Delta U_g=mg\\Delta y",
    },
    {
      label: "Choose a reference level",
      tex: "U_g=0\\ \\text{at a chosen height}",
      note: "Only differences in potential energy are physical, so the zero level is conventional.",
    },
    {
      label: "Near-Earth form",
      tex: "U_g=mgy",
      note: "This form follows when the chosen reference level is at \\(y=0\\).",
    },
    {
      label: "Gravity-only motion",
      tex: "\\Delta K=-\\Delta U_g",
      note: "This is the mechanical-energy statement when gravity is the only force doing work.",
    },
  ]}
/>

The graph below shows why only changes in \\(U_g\\) matter. Changing the reference level shifts the line up or down, but the slope and the energy difference between two heights stay the same.

<CartesianPhysicsGraph
  title="Gravitational potential near Earth"
  caption="Changing the zero level shifts the graph vertically without changing \\(\\Delta U_g\\) between two heights."
  xRange={{ min: 0, max: 5, step: 1, label: "y" }}
  yRange={{ min: -10, max: 50, step: 10, label: "U_g" }}
  curves={[
    {
      label: "reference 1",
      points: [
        { x: 0, y: 0 },
        { x: 5, y: 50 },
      ],
    },
    {
      label: "reference 2",
      dashed: true,
      color: "var(--chart-3)",
      points: [
        { x: 0, y: -10 },
        { x: 5, y: 40 },
      ],
    },
  ]}
  points={[
    { x: 1, y: 10, label: "A" },
    { x: 4, y: 40, label: "B" },
  ]}
/>

For the two marked heights, the vertical gap from A to B is the same on both lines, so \\(\\Delta U_g\\) is unchanged even though the numerical zero differs.

## Rules

These are the compact results from the method above.

<Equation label="Near Earth" tex="U_g=mgy" />

<Equation label="Energy change" tex="\Delta U_g=mg\Delta y" />

<Equation label="Work by gravity" tex="W_g=-\Delta U_g" />

<Equation label="Gravity only" tex="K_i+U_{g,i}=K_f+U_{g,f}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A mass \\(m\\) falls through height \\(h\\) from rest. Find its speed just before impact, ignoring air resistance.",
      answer: "\\[K_i+U_{g,i}=K_f+U_{g,f}\\] \\[0+mgh=\\frac{1}{2}mv^2\\] \\[v=\\sqrt{2gh}\\]",
    },
    {
      title: "Example 2",
      question: "A \\(2\\,\\text{kg}\\) object is lifted \\(3\\,\\text{m}\\) at constant speed. Find \\(\\Delta U_g\\).",
      answer: "\\[\\Delta U_g=mg\\Delta y=2(9.8)(3)=58.8\\,\\text{J}\\] Constant speed means \\(\\Delta K=0\\), not \\(\\Delta U_g=0\\).",
    },
  ]}
/>

## Checks

- Only changes in gravitational potential energy are physically meaningful.
- Moving upward makes \\(\\Delta U_g\\) positive near Earth.
- Work by gravity has the opposite sign to \\(\\Delta U_g\\).
- The formula \\(U_g=mgy\\) assumes a uniform near-Earth field.`;
