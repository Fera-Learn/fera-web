export const content = String.raw`## Principle

Universal gravitation, electromagnetism, and the nuclear interactions are the fundamental interaction models behind macroscopic force laws.

## Notation

<Notation
  items={[
    { symbol: "G", meaning: "gravitational constant", unit: "N m^{2} kg^{-2}" },
    { symbol: "k", meaning: "Coulomb constant", unit: "N m^{2} C^{-2}" },
    { symbol: "m,m_1,m_2", meaning: "mass or source masses", unit: "kg" },
    { symbol: "q,q_1,q_2", meaning: "charge or source charges", unit: "C" },
    { symbol: "\\vec F_g", meaning: "gravitational force", unit: "N" },
    { symbol: "\\vec F_E", meaning: "electric force", unit: "N" },
    { symbol: "\\vec g", meaning: "gravitational field", unit: "N kg^{-1}" },
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "r", meaning: "source separation", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Identify what property each interaction acts on

A force model starts by identifying the property that couples to the interaction. The same object can participate in several interactions at once.

<PhysicsDerivation
  items={[
    {
      label: "Gravity couples to mass",
      tex: "m\\rightarrow\\vec F_g",
    },
    {
      label: "Electromagnetism couples to charge",
      tex: "q\\rightarrow\\vec F_E",
    },
    {
      label: "Nuclear interactions are short-range",
      tex: "r_{\\mathrm{nuclear}}\\sim10^{-15}\\,\\mathrm{m}",
    },
  ]}
/>

### Derivation 2: Build the inverse-square source law

For point sources or spherically symmetric sources, the effect spreads across spherical area. That geometric spreading is why the source-field strength falls like \\(1/r^2\\).

<PhysicsDerivation
  items={[
    {
      label: "Spherical area",
      tex: "A=4\\pi r^2",
    },
    {
      label: "Universal gravitation",
      tex: "F_g=G\\frac{m_1m_2}{r^2}",
      note: "Ordinary masses attract each other.",
    },
    {
      label: "Electric inverse square",
      tex: "F_E=k\\frac{|q_1q_2|}{r^2}",
    },
  ]}
/>

The graph below shows only the distance scaling. Doubling separation leaves one quarter of the force magnitude for any point-source inverse-square model.

<CartesianPhysicsGraph
  title="Inverse-square scale"
  caption="Relative magnitude falls rapidly as separation increases."
  width={440}
  height={260}
  xRange={{ min: 1, max: 5, step: 1, label: "r" }}
  yRange={{ min: 0, max: 1, step: 0.25, label: "relative F" }}
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

### Derivation 3: Replace the source by a local field

Fields separate the source from the test object. Once the field is known at a position, the force follows from the property of the object placed there.

<PhysicsDerivation
  items={[
    {
      label: "Gravity in field form",
      tex: "\\vec F_g=m\\vec g",
      note: "Near a planet, \\(\\vec g\\) is often the most practical gravity model.",
    },
    {
      label: "Electric field form",
      tex: "\\vec F_E=q\\vec E",
    },
    {
      label: "Charge sign matters",
      tex: "q<0\\Rightarrow\\vec F_E\\text{ is opposite }\\vec E",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Universal gravitation" tex="F_g=G\frac{m_1m_2}{r^2}" />

<Equation label="Electric force" tex="F_E=k\frac{|q_1q_2|}{r^2}" />

<Equation label="Gravity in field" tex="\vec F_g=m\vec g" />

<Equation label="Electric in field" tex="\vec F_E=q\vec E" />

<Equation label="Nuclear range" tex="r_{\mathrm{nuclear}}\sim10^{-15}\,\mathrm{m}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two masses interact only through gravity. One mass is tripled while the separation doubles. By what factor does the gravitational force change?",
      answer: "\\[F_g\\propto\\frac{m_1m_2}{r^2}\\] \\[\\frac{F'_g}{F_g}=\\frac{3}{2^2}=\\frac{3}{4}\\] The force becomes three quarters of its original value.",
    },
    {
      title: "Example 2",
      question: "A \\(3.0\\,\\text{kg}\\) probe is in a local gravitational field of magnitude \\(1.6\\,\\text{N kg}^{-1}\\). Find the gravitational force magnitude and direction.",
      answer: "\\[F_g=mg=3.0(1.6)=4.8\\,\\text{N}\\] The force points in the direction of \\(\\vec g\\), toward the attracting body.",
    },
  ]}
/>

## Checks

- Universal gravitation is attractive for ordinary masses.
- Electric forces attract for opposite charges and repel for like charges.
- Inverse-square laws need point-source or spherically symmetric models.
- Contact forces are electromagnetic in origin but modeled macroscopically as normals, tensions, and friction.`;
