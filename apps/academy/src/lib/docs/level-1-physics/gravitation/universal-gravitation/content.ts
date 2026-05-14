export const content = String.raw`## Principle

Universal gravitation models the attraction between masses as a central inverse-square interaction.

## Notation

<Notation
  items={[
    { symbol: "G", meaning: "gravitational constant", unit: "N m^{2} kg^{-2}" },
    { symbol: "m_1,m_2", meaning: "interacting masses", unit: "kg" },
    { symbol: "M", meaning: "source mass", unit: "kg" },
    { symbol: "r", meaning: "separation from the source center", unit: "m" },
    { symbol: "\\hat e_r", meaning: "outward radial unit vector from source to test mass", unit: "1" },
    { symbol: "\\vec F_g", meaning: "gravitational force on a test mass", unit: "N" },
    { symbol: "\\vec g", meaning: "gravitational field strength", unit: "N kg^{-1}" },
    { symbol: "g", meaning: "gravitational field magnitude", unit: "N kg^{-1}" },
  ]}
/>

## Method

### Derivation 1: Build the pairwise force law

Gravity depends on both masses and weakens with separation because the same central influence is spread over a larger spherical area as \\(r\\) increases.

<PhysicsDerivation
  items={[
    {
      label: "Inverse-square scale",
      tex: "F_g\\propto\\frac{m_1m_2}{r^2}",
    },
    {
      label: "Insert the constant",
      tex: "F_g=G\\frac{m_1m_2}{r^2}",
    },
    {
      label: "Give the force a direction",
      tex: "\\vec F_g=-G\\frac{m_1m_2}{r^2}\\hat e_r",
      note: "The minus sign makes the force attractive, back toward the source.",
    },
  ]}
/>

### Derivation 2: Convert the source law into a field law

Once the source mass is fixed, the test mass only scales the force. Dividing by test mass defines the local gravitational field.

<PhysicsDerivation
  items={[
    {
      label: "Start from the vector force law",
      tex: "\\vec F_g=-G\\frac{Mm}{r^2}\\hat e_r",
    },
    {
      label: "Define field strength",
      tex: "\\vec g=\\frac{\\vec F_g}{m}",
    },
    {
      label: "Radial field",
      tex: "\\vec g=-G\\frac{M}{r^2}\\hat e_r",
    },
    {
      label: "Field magnitude",
      tex: "g=G\\frac{M}{r^2}",
    },
  ]}
/>

The graph shows the distance scaling only. A point twice as far from the same source feels one quarter of the field magnitude.

<CartesianDiagram
  title="Inverse-square gravitational field"
  caption="Relative field strength falls rapidly near the source and flattens further out."
  width={440}
  height={260}
  xRange={{ min: 1, max: 5, step: 1, label: "r/R" }}
  yRange={{ min: 0, max: 1, step: 0.25, label: "relative g" }}
  curves={[
    {
      label: "1/r^2",
      smooth: true,
      points: [
        { x: 1, y: 1 },
        { x: 1.5, y: 0.44 },
        { x: 2, y: 0.25 },
        { x: 3, y: 0.11 },
        { x: 4, y: 0.06 },
        { x: 5, y: 0.04 },
      ],
    },
  ]}
/>

Because the curve is inverse-square, moving a little closer to the source matters much more than the same distance change far away.

## Rules

These are the compact results from the method above.

<Equation label="Force magnitude" tex="F_g=G\frac{m_1m_2}{r^2}" />

<Equation label="Force vector" tex="\vec F_g=-G\frac{m_1m_2}{r^2}\hat e_r" />

<Equation label="Field vector" tex="\vec g=-G\frac{M}{r^2}\hat e_r" />

<Equation label="Field magnitude" tex="g=G\frac{M}{r^2}" />

<Equation label="Force from field" tex="\vec F_g=m\vec g" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two objects interact gravitationally. One mass is doubled while the separation is tripled. By what factor does the force magnitude change?",
      answer: "\\[F_g\\propto\\frac{m_1m_2}{r^2}\\] \\[\\frac{F'_g}{F_g}=\\frac{2}{3^2}=\\frac{2}{9}\\] The new force is two ninths of the original force.",
    },
    {
      title: "Example 2",
      question: "A \\(500\\,\\mathrm{kg}\\) probe is \\(1.2\\times10^7\\,\\mathrm{m}\\) from the center of a spherical body of mass \\(7.2\\times10^{24}\\,\\mathrm{kg}\\). Find the local field strength and the probe's gravitational force magnitude.",
      answer: "\\[g=G\\frac{M}{r^2}=\\frac{(6.67\\times10^{-11})(7.2\\times10^{24})}{(1.2\\times10^7)^2}=3.34\\,\\mathrm{N\\,kg^{-1}}\\] \\[F_g=mg=500(3.34)=1.67\\times10^3\\,\\mathrm{N}\\] directed toward the source.",
    },
  ]}
/>

## Checks

- Gravity between ordinary masses is always attractive.
- The inverse-square law applies to point masses and to points outside spherically symmetric masses.
- \\(\\hat e_r\\) is defined outward, so the gravitational force vector carries a minus sign.
- Doubling distance reduces field and force magnitude by a factor of four, not two.`;
