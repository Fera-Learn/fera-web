export const content = String.raw`## Principle

Power is the rate of work or energy transfer.

## Notation

<Notation
  items={[
    { symbol: "P", meaning: "power", unit: "W" },
    { symbol: "W", meaning: "work or transferred energy", unit: "J" },
    { symbol: "t", meaning: "time", unit: "s" },
    { symbol: "\\vec{F}", meaning: "force", unit: "N" },
    { symbol: "\\vec{v}", meaning: "velocity", unit: "m s^{-1}" },
  ]}
/>

## Method

A work-time graph turns power into slope: steeper parts transfer energy faster.

<CartesianPhysicsGraph
  title="Power as slope"
  caption="The slope of a work-time graph is power."
  xRange={{ min: 0, max: 5, step: 1, label: "t / s" }}
  yRange={{ min: 0, max: 100, step: 20, label: "W / J" }}
  curves={[
    {
      label: "work",
      points: [
        { x: 0, y: 0 },
        { x: 1, y: 10 },
        { x: 2, y: 30 },
        { x: 3, y: 55 },
        { x: 4, y: 75 },
        { x: 5, y: 90 },
      ],
    },
  ]}
/>

Instantaneous power follows from dividing the small work done by the small time taken.

<PhysicsDerivation
  items={[
    {
      label: "Average rate",
      tex: "P_{\\mathrm{avg}}=\\frac{W}{\\Delta t}",
    },
    {
      label: "Instantaneous rate",
      tex: "P=\\frac{dW}{dt}",
    },
    {
      label: "Small work",
      tex: "dW=\\vec{F}\\cdot d\\vec{r}",
    },
    {
      label: "Force power",
      tex: "P=\\vec{F}\\cdot\\frac{d\\vec{r}}{dt}=\\vec{F}\\cdot\\vec{v}",
    },
    {
      label: "Angle form",
      tex: "P=Fv\\cos\\theta",
    },
  ]}
/>

## Rules

<Equation label="Average power" tex="P_{\mathrm{avg}}=\frac{W}{\Delta t}" />

<Equation label="Instantaneous power" tex="P=\frac{dW}{dt}" />

<Equation label="Force power" tex="P=\vec{F}\cdot\vec{v}" />

<Equation label="Energy rate" tex="P=\frac{dE}{dt}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A motor does \\(600\\,\\mathrm{J}\\) of work in \\(4\\,\\mathrm{s}\\). Find its average power.",
      answer: "\\[P_{\\mathrm{avg}}=\\frac{W}{\\Delta t}=\\frac{600}{4}=150\\,\\mathrm{W}\\]",
    },
    {
      title: "Example 2",
      question: "A \\(40\\,\\mathrm{N}\\) force acts along an object moving at \\(3\\,\\mathrm{m\\,s^{-1}}\\). Find the instantaneous power.",
      answer: "\\[P=Fv=40(3)=120\\,\\mathrm{W}\\]",
    },
  ]}
/>

## Checks

- Watts are joules per second.
- Perpendicular force gives zero power.
- Positive power adds mechanical energy.
- Negative power removes mechanical energy.`;
