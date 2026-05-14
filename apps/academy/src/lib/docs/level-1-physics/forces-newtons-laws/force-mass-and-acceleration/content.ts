export const content = String.raw`## Principle

Newton's second law converts the resultant external force into the system's acceleration.

## Notation

<Notation
  items={[
    { symbol: "m", meaning: "mass of the system", unit: "kg" },
    { symbol: "\\vec{a}", meaning: "acceleration", unit: "m s^{-2}" },
    { symbol: "\\sum\\vec{F}", meaning: "resultant external force", unit: "N" },
    { symbol: "\\sum F_x,\\sum F_y", meaning: "resultant force components", unit: "N" },
    { symbol: "a_x,a_y", meaning: "acceleration components", unit: "m s^{-2}" },
    { symbol: "\\Delta x,v_{0x},t", meaning: "motion quantities after acceleration is known", unit: "m, m s^{-1}, s" },
  ]}
/>

## Method

The force sum is built first; motion equations are used only after acceleration is known.

<PhysicsDerivation
  items={[
    {
      label: "Choose system",
      tex: "\\sum\\vec{F}_{\\mathrm{external}}=m\\vec{a}",
      note: "Internal forces cancel only inside the chosen system.",
    },
    {
      label: "Resolve components",
      tex: "\\sum F_x=ma_x,\\qquad \\sum F_y=ma_y",
    },
    {
      label: "Solve acceleration",
      tex: "a_x=\\frac{\\sum F_x}{m},\\qquad a_y=\\frac{\\sum F_y}{m}",
    },
    {
      label: "Then use motion",
      tex: "\\Delta x=v_{0x}t+\\frac{1}{2}a_xt^2",
      note: "This step assumes the acceleration component is constant.",
    },
  ]}
/>

The free-body diagram shows vertical forces canceling while horizontal forces leave a nonzero resultant.

<ForceDiagram
  title="Unbalanced horizontal forces"
  caption="The resultant force, and therefore acceleration, points toward the larger horizontal force."
  bodyLabel="m"
  surface="horizontal"
  forces={[
    { label: "30 N", angle: 0, color: "var(--chart-3)", length: 72 },
    { label: "10 N", angle: 180, color: "var(--chart-5)", length: 42 },
    { label: "N", angle: 90, length: 48 },
    { label: "W", angle: 270, length: 48 },
  ]}
/>

Reading the diagram by components gives a rightward resultant, so the acceleration is rightward.

## Rules

These are the compact results after the external force sum has been built.

<Equation label="Second law" tex="\sum\vec{F}=m\vec{a}" />

<Equation label="Component law" tex="\sum F_x=ma_x,\qquad \sum F_y=ma_y" />

<Equation label="Acceleration" tex="\vec{a}=\frac{\sum\vec{F}}{m}" />

<Equation label="Constant acceleration" tex="\Delta x=v_{0x}t+\frac{1}{2}a_xt^2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(4.0\\,\\mathrm{kg}\\) cart has horizontal forces \\(30\\,\\mathrm{N}\\) right and \\(10\\,\\mathrm{N}\\) left. Find acceleration.",
      answer: "Take right as positive. \\[\\sum F_x=30-10=20\\,\\mathrm{N}\\] \\[a_x=\\frac{20}{4.0}=5.0\\,\\mathrm{m\\,s^{-2}}\\] right.",
    },
    {
      title: "Example 2",
      question: "A \\(6.0\\,\\mathrm{kg}\\) cart starts from rest with constant \\(a_x=2.5\\,\\mathrm{m\\,s^{-2}}\\). Find displacement after \\(3.0\\,\\mathrm{s}\\).",
      answer: "Use kinematics only after acceleration is known. \\[\\Delta x=\\frac{1}{2}a_xt^2=\\frac{1}{2}(2.5)(3.0)^2=11.25\\,\\mathrm{m}\\]",
    },
  ]}
/>

## Checks

- Acceleration has the same direction as the resultant force.
- More mass gives less acceleration for the same resultant force.
- A single applied force is not the resultant unless all other forces cancel.
- Force and acceleration components must use the same sign convention.`;
