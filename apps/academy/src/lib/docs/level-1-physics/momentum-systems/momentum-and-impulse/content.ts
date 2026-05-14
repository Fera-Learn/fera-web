export const content = String.raw`## Principle

Impulse is the time-integral of force, and it equals the change in momentum.

## Notation

<Notation
  items={[
    { symbol: "\\vec{p}", meaning: "linear momentum", unit: "kg m s^{-1}" },
    { symbol: "m", meaning: "mass", unit: "kg" },
    { symbol: "\\vec{v}", meaning: "velocity", unit: "m s^{-1}" },
    { symbol: "\\vec{J}", meaning: "impulse", unit: "N s" },
    { symbol: "\\vec{F}", meaning: "force", unit: "N" },
    { symbol: "\\Delta t", meaning: "time interval", unit: "s" },
  ]}
/>

## Method

For a fixed-mass particle, Newton's second law can be written as a momentum-rate equation.

<PhysicsDerivation
  items={[
    {
      label: "Define momentum",
      tex: "\\vec{p}=m\\vec{v}",
    },
    {
      label: "Force rate",
      tex: "\\sum\\vec{F}=\\frac{d\\vec{p}}{dt}",
      note: "This is equivalent to \\(\\sum\\vec{F}=m\\vec{a}\\) when mass is fixed.",
    },
    {
      label: "Integrate force",
      tex: "\\int_{t_1}^{t_2}\\sum\\vec{F}\\,dt=\\vec{p}_f-\\vec{p}_i",
    },
    {
      label: "Average force",
      tex: "\\vec{F}_{\\mathrm{avg}}\\Delta t=\\Delta\\vec{p}",
    },
  ]}
/>

The force-time graph shows impulse as area under the curve, not as the peak force alone.

<CartesianDiagram
  title="Impulse as area"
  caption="The area under a force-time graph gives impulse, so spreading the same area over more time lowers the average force."
  xRange={{ min: 0, max: 5, step: 1, label: "t / s" }}
  yRange={{ min: 0, max: 12, step: 3, label: "F / N" }}
  curves={[
    {
      label: "force pulse",
      points: [
        { x: 0, y: 0 },
        { x: 1, y: 9 },
        { x: 2, y: 11 },
        { x: 3, y: 8 },
        { x: 4, y: 0 },
      ],
    },
  ]}
/>

The same impulse can come from a high force over a short time or a lower force over a longer time.

## Rules

These are the compact impulse-momentum results from the integration above.

<Equation label="Momentum" tex="\vec{p}=m\vec{v}" />

<Equation label="Impulse" tex="\vec{J}=\int_{t_1}^{t_2}\vec{F}\,dt" />

<Equation label="Impulse momentum" tex="\vec{J}=\Delta\vec{p}" />

<Equation label="Average force" tex="\vec{J}=\vec{F}_{\mathrm{avg}}\Delta t" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(0.30\\,\\mathrm{kg}\\) puck moving right at \\(9.0\\,\\mathrm{m\\,s^{-1}}\\) leaves left at \\(3.0\\,\\mathrm{m\\,s^{-1}}\\). Find the impulse on the puck.",
      answer: "Take right as positive. \\[J_x=m(v_f-v_i)=0.30(-3.0-9.0)=-3.6\\,\\mathrm{N\\,s}\\] The impulse is \\(3.6\\,\\mathrm{N\\,s}\\) left.",
    },
    {
      title: "Example 2",
      question: "A force pulse has average magnitude \\(28\\,\\mathrm{N}\\) for \\(0.45\\,\\mathrm{s}\\). Find the impulse magnitude.",
      answer: "\\[J=F_{\\mathrm{avg}}\\Delta t=28(0.45)=12.6\\,\\mathrm{N\\,s}\\]",
    },
  ]}
/>

## Checks

- Momentum and impulse are vectors.
- \\(\mathrm\{N\,s\}\\) and \\(\mathrm\{kg\,m\,s^\{-1\}}\\) are equivalent units.
- Longer stopping time means smaller average force for the same momentum change.
- Use signed velocity, not speed alone.`;
