export const content = String.raw`## Principle

Mass measures inertia, while weight is the gravitational force produced by a local field.

## Notation

<Notation
  items={[
    { symbol: "m", meaning: "mass", unit: "kg" },
    { symbol: "\\vec W", meaning: "weight force", unit: "N" },
    { symbol: "W", meaning: "weight magnitude", unit: "N" },
    { symbol: "\\vec g", meaning: "gravitational field strength", unit: "m s^{-2}" },
    { symbol: "g", meaning: "gravitational field magnitude", unit: "m s^{-2}" },
    { symbol: "N", meaning: "normal reaction magnitude", unit: "N" },
    { symbol: "a_y", meaning: "vertical acceleration with upward positive", unit: "m s^{-2}" },
  ]}
/>

## Method

Weight is a force model. Apparent weight is a contact-force reading found from the vertical force equation, so a scale does not always read the same value as \\(mg\\).

<PhysicsDerivation
  items={[
    {
      label: "Local gravity model",
      tex: "\\vec W=m\\vec g",
    },
    {
      label: "Weight magnitude",
      tex: "W=mg",
      note: "Mass stays the same even when the local value of \\(g\\) changes.",
    },
    {
      label: "Near Earth",
      tex: "g\\approx9.8\\,\\mathrm{m\\,s^{-2}}",
    },
    {
      label: "Vertical force model",
      tex: "N-mg=ma_y",
      note: "A scale reads the contact force \\(N\\), not the gravitational force directly.",
    },
    {
      label: "Apparent weight",
      tex: "N=m(g+a_y)",
      note: "This form uses upward as positive.",
    },
  ]}
/>

The free-body diagram shows why a scale reading can differ from weight during vertical acceleration.

<FreeBodyDiagram
  title="Apparent weight"
  caption="A scale reads the normal reaction, which changes when vertical acceleration changes."
  bodyLabel="m"
  surface="horizontal"
  forces={[
    { label: "N", angle: 90, color: "var(--chart-3)", length: 70 },
    { label: "W", angle: 270, color: "var(--chart-5)", length: 58 },
  ]}
/>

The upward component equation compares the contact force with the gravitational force magnitude.

## Rules

These are the compact results from the method above.

<Equation label="Weight vector" tex="\vec{W}=m\vec{g}" />

<Equation label="Weight magnitude" tex="W=mg" />

<Equation label="Near Earth" tex="g\approx9.8\,\mathrm{m\,s^{-2}}" />

<Equation label="Scale equation" tex="N-mg=ma_y" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the weight of a \\(72\\,\\mathrm{kg}\\) person near Earth's surface.",
      answer: "\\[W=mg=72(9.8)=706\\,\\mathrm{N}\\] downward.",
    },
    {
      title: "Example 2",
      question: "A lift accelerates upward at \\(1.5\\,\\mathrm{m\\,s^{-2}}\\). What normal force acts on a \\(60\\,\\mathrm{kg}\\) passenger?",
      answer: "\\[N-mg=ma_y\\] \\[N=m(g+a_y)=60(9.8+1.5)=678\\,\\mathrm{N}\\]",
    },
  ]}
/>

## Checks

- Kilograms measure mass; newtons measure weight.
- Mass does not change when the local value of \\(g\\) changes.
- Near Earth, weight points downward toward Earth's centre.
- Downward acceleration can make the scale reading less than \\(mg\\).`;
