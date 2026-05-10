export const content = String.raw`## Principle

The center of mass moves as if all external force acted on total mass there.

## Notation

<Notation
  items={[
    { symbol: "M", meaning: "total mass", unit: "kg" },
    { symbol: "\\vec{r}_{\\mathrm{cm}}", meaning: "center-of-mass position", unit: "m" },
    { symbol: "\\vec{v}_{\\mathrm{cm}}", meaning: "center-of-mass velocity", unit: "m s^{-1}" },
    { symbol: "\\vec{a}_{\\mathrm{cm}}", meaning: "center-of-mass acceleration", unit: "m s^{-2}" },
    { symbol: "\\vec{P}", meaning: "total momentum", unit: "kg m s^{-1}" },
    { symbol: "\\vec{F}_{\\mathrm{ext}}", meaning: "net external force", unit: "N" },
  ]}
/>

## Method

Center of mass is a mass-weighted position, so differentiating it connects geometry to momentum.

<PhysicsDerivation
  items={[
    {
      label: "Total mass",
      tex: "M=\\sum_i m_i",
    },
    {
      label: "Weighted position",
      tex: "\\vec{r}_{\\mathrm{cm}}=\\frac{1}{M}\\sum_i m_i\\vec{r}_i",
    },
    {
      label: "Differentiate once",
      tex: "\\vec{v}_{\\mathrm{cm}}=\\frac{1}{M}\\sum_i m_i\\vec{v}_i=\\frac{\\vec{P}}{M}",
    },
    {
      label: "Differentiate momentum",
      tex: "\\sum\\vec{F}_{\\mathrm{ext}}=\\frac{d\\vec{P}}{dt}=M\\vec{a}_{\\mathrm{cm}}",
    },
  ]}
/>

The diagram places the center of mass closer to the heavier object on the line.

<CartesianPhysicsGraph
  title="Center of mass on a line"
  caption="The center of mass lies closer to the larger mass because each position is weighted by mass."
  width={560}
  height={150}
  xRange={{ min: 0, max: 4, step: 1, label: "x / m" }}
  yRange={{ min: -0.5, max: 0.5, step: 0.5 }}
  points={[
    { x: 0, y: 0, label: "2 kg" },
    { x: 3, y: 0, label: "x_{cm}" },
    { x: 4, y: 0, label: "6 kg" },
  ]}
/>

That placement is a weighted average, not the geometric midpoint.

## Rules

These are the compact center-of-mass definitions and dynamics.

<Equation label="Total mass" tex="M=\sum_i m_i" />

<Equation label="CM position" tex="\vec{r}_{\mathrm{cm}}=\frac{1}{M}\sum_i m_i\vec{r}_i" />

<Equation label="CM momentum" tex="\vec{P}=M\vec{v}_{\mathrm{cm}}" />

<Equation label="CM dynamics" tex="\sum\vec{F}_{\mathrm{ext}}=M\vec{a}_{\mathrm{cm}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Masses \\(1.0\\,\\mathrm{kg}\\) at \\(x=0\\) and \\(3.0\\,\\mathrm{kg}\\) at \\(x=2.0\\,\\mathrm{m}\\) lie on a line. Find \\(x_{\\mathrm{cm}}\\).",
      answer: "\\[x_{\\mathrm{cm}}=\\frac{1.0(0)+3.0(2.0)}{4.0}=1.5\\,\\mathrm{m}\\]",
    },
    {
      title: "Example 2",
      question: "A system has \\(M=12\\,\\mathrm{kg}\\) and \\(\\vec{P}=18\\hat{\\imath}-6\\hat{\\jmath}\\,\\mathrm{kg\\,m\\,s^{-1}}\\). Find \\(\\vec{v}_{\\mathrm{cm}}\\).",
      answer: "\\[\\vec{v}_{\\mathrm{cm}}=\\frac{\\vec{P}}{M}=1.5\\hat{\\imath}-0.50\\hat{\\jmath}\\,\\mathrm{m\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- The center of mass can lie outside the material.
- Internal motion cannot accelerate the center of mass.
- With no external force, center-of-mass velocity is constant.
- Heavier masses pull the center closer.`;
