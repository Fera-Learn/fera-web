export const content = String.raw`## Principle

Total momentum changes only by the external impulse on the chosen system.

## Notation

<Notation
  items={[
    { symbol: "\\vec{P}", meaning: "total system momentum", unit: "kg m s^{-1}" },
    { symbol: "\\vec{p}_i", meaning: "momentum of object i", unit: "kg m s^{-1}" },
    { symbol: "\\vec{J}_{\\mathrm{ext}}", meaning: "external impulse", unit: "N s" },
    { symbol: "m_i", meaning: "mass of object i", unit: "kg" },
    { symbol: "\\vec{v}_i", meaning: "velocity of object i", unit: "m s^{-1}" },
  ]}
/>

## Method

The system boundary decides which impulses are internal and which can change total momentum.

<PhysicsDerivation
  items={[
    {
      label: "Add momenta",
      tex: "\\vec{P}=\\sum_i\\vec{p}_i=\\sum_i m_i\\vec{v}_i",
    },
    {
      label: "Sum impulses",
      tex: "\\Delta\\vec{P}=\\vec{J}_{\\mathrm{internal}}+\\vec{J}_{\\mathrm{ext}}",
    },
    {
      label: "Cancel internal pairs",
      tex: "\\vec{J}_{\\mathrm{internal}}=\\vec{0}",
      note: "Internal third-law impulses cancel in the total system sum.",
    },
    {
      label: "Test isolation",
      tex: "\\vec{J}_{\\mathrm{ext}}=\\vec{0}\\Rightarrow\\vec{P}_f=\\vec{P}_i",
    },
  ]}
/>

The vector diagram below shows individual momenta adding to one total momentum vector.

<CartesianDiagram
  title="Momentum vector balance"
  caption="For an isolated system the individual momenta can change, but the total momentum vector is unchanged."
  xRange={{ min: -5, max: 5, step: 1, label: "p_x" }}
  yRange={{ min: -3, max: 3, step: 1, label: "p_y" }}
  vectors={[
    { to: { x: 4, y: 1 }, label: "p_1" },
    { to: { x: -1, y: -2 }, label: "p_2" },
    { to: { x: 3, y: -1 }, label: "P_{tot}" },
  ]}
/>

Conservation means this total vector is unchanged, even when the individual vectors redistribute.

## Rules

These are the compact system-momentum statements.

<Equation label="Total momentum" tex="\vec{P}=\sum_i \vec{p}_i=\sum_i m_i\vec{v}_i" />

<Equation label="System impulse" tex="\Delta\vec{P}=\vec{J}_{\mathrm{ext}}" />

<Equation label="Conservation" tex="\vec{P}_f=\vec{P}_i\quad(\vec{J}_{\mathrm{ext}}=\vec{0})" />

<Equation label="Component form" tex="\sum p_{ix}=\sum p_{fx},\qquad \sum p_{iy}=\sum p_{fy}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(1.5\\,\\mathrm{kg}\\) cart moving right at \\(4.0\\,\\mathrm{m\\,s^{-1}}\\) sticks to a \\(2.5\\,\\mathrm{kg}\\) cart moving left at \\(0.80\\,\\mathrm{m\\,s^{-1}}\\). Find their common velocity.",
      answer: "Take right as positive. \\[1.5(4.0)+2.5(-0.80)=(4.0)v_f\\] \\[v_f=1.0\\,\\mathrm{m\\,s^{-1}}\\] right.",
    },
    {
      title: "Example 2",
      question: "An isolated object at rest splits into two pieces. One piece has momentum \\(6\\hat{\\jmath}\\). Find the other piece's momentum.",
      answer: "The total momentum remains zero, so \\[\\vec{p}_2=-6\\hat{\\jmath}\\] in the same momentum units.",
    },
  ]}
/>

## Checks

- Conservation applies to the chosen system, not automatically to each object.
- Internal forces change individual momenta but not total system momentum.
- Momentum can be conserved while kinetic energy changes.
- Use components when directions are not collinear.`;
