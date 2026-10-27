export const content = String.raw`## Principle

Before solving a thermodynamics problem, decide exactly what you are studying. That chosen object is the **system**; everything else is the **surroundings**; the real or imaginary line between them is the **boundary**.

## Notation

<Notation
  items={[
    { symbol: "Q", meaning: "heat transferred into the chosen system", unit: "J" },
    { symbol: "W", meaning: "work done by the chosen system on its surroundings", unit: "J" },
    { symbol: "Q_r", meaning: "heat transferred into a reservoir", unit: "J" },
    { symbol: "C_r", meaning: "total heat capacity of the reservoir", unit: "J K^{-1}" },
    { symbol: "\\Delta T_r", meaning: "change in reservoir temperature", unit: "K" },
  ]}
/>

## The Core Method

Follow the arrows across each boundary. Open systems exchange matter and energy, closed systems exchange energy only, and ideal isolated systems exchange neither.

<PhysicsDiagram slug="thermodynamic-system-boundaries" />

For a gas inside a piston, you would usually choose the gas as the system. The cylinder, piston, weights, and room are then part of the surroundings. Energy or matter can cross the boundary between them.

There are three useful system types:

- **Open:** matter and energy can cross the boundary. A boiling kettle with no lid is open because steam escapes.
- **Closed:** energy can cross, but matter cannot. A sealed gas can be heated and can push a piston, even though no gas escapes.
- **Isolated:** neither matter nor energy can cross. A perfect vacuum flask would be isolated; a real flask is only an approximation.

“Closed” does **not** mean “nothing can cross.” It only means that matter cannot cross.

The boundary also tells us how energy may cross. A wall that allows heating is called **diathermal**. A wall that prevents heating is called **adiabatic**, so no heat crosses it:

\\[
Q=0\qquad\text{across an adiabatic wall.}
\tag*{[1]}
\\]

A rigid wall cannot move, but it may still allow heating. “Rigid” and “adiabatic” describe different properties.

A **thermal reservoir** is a large body whose temperature barely changes when it gains or loses heat. For a real reservoir,

\\[
\Delta T_r=\frac{Q_r}{C_r}.
\tag*{[2]}
\\]

The larger its heat capacity, the smaller its temperature change for the same heat transfer.

<CartesianGrid
  className="mx-auto max-w-md"
  height={250}
  title="A larger reservoir changes temperature less"
  caption="Each point shows the temperature rise after the reservoir receives 1 kJ of heat."
  xRange={{ min: 1, max: 10, step: 1, label: "reservoir heat capacity (kJ/K)" }}
  yRange={{ min: 0, max: 1, step: 0.2, label: "temperature rise (K)" }}
>
  <Curve
    color="var(--chart-1)"
    points={[
      { x: 1, y: 1 },
      { x: 2, y: 0.5 },
      { x: 3, y: 0.333 },
      { x: 4, y: 0.25 },
      { x: 5, y: 0.2 },
      { x: 6, y: 0.167 },
      { x: 7, y: 0.143 },
      { x: 8, y: 0.125 },
      { x: 9, y: 0.111 },
      { x: 10, y: 0.1 },
    ]}
    smooth
  />
  <Annotation point={{ x: 6, y: 0.167 }} label="large heat capacity, small rise" offset={{ x: -10, y: -30 }} />
</CartesianGrid>

An ideal reservoir has such a large heat capacity that we treat its temperature as constant. A large water bath is often a good real-world approximation.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Does the bath stay constant?",
      question: "A sample transfers \\(2.00\\,\\mathrm{kJ}\\) of heat to a water bath with total heat capacity \\(40.0\\,\\mathrm{kJ\\,K^{-1}}\\). How much does the bath temperature change?",
      answer: "The bath receives \\(Q_r=2.00\\,\\mathrm{kJ}\\). Using equation \\([2]\\), \\[\\Delta T_r=\\frac{2.00\\,\\mathrm{kJ}}{40.0\\,\\mathrm{kJ\\,K^{-1}}}=0.0500\\,\\mathrm K.\\] That change is very small compared with a room-temperature value of about \\(300\\,\\mathrm K\\). Final result: the bath warms by \\(0.0500\\,\\mathrm K\\), so treating it as constant-temperature is reasonable for percent-level work.",
    },
    {
      title: "Classify a sealed piston",
      question: "A sealed gas is heated through the cylinder wall and pushes a movable piston. Is the gas an open, closed, or isolated system?",
      answer: "No gas crosses the sealed boundary, so matter cannot enter or leave. Heat enters through the wall, and energy leaves as the gas pushes the piston. Final result: the gas is a closed system: energy crosses its boundary, but matter does not.",
    },
  ]}
/>
`;
