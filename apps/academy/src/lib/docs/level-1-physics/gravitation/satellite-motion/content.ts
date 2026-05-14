export const content = String.raw`## Principle

An orbit is sustained motion in which gravity continually turns the velocity toward the central body.

## Notation

<Notation
  items={[
    { symbol: "M", meaning: "central mass", unit: "kg" },
    { symbol: "m", meaning: "satellite mass", unit: "kg" },
    { symbol: "r", meaning: "orbital radius from the source center", unit: "m" },
    { symbol: "v", meaning: "orbital speed", unit: "m s^{-1}" },
    { symbol: "T", meaning: "orbital period", unit: "s" },
    { symbol: "G", meaning: "gravitational constant", unit: "N m^{2} kg^{-2}" },
    { symbol: "g(r)", meaning: "gravitational field magnitude at radius \\(r\\)", unit: "N kg^{-1}" },
  ]}
/>

## Method

### Derivation 1: Match gravity to the centripetal requirement

For a circular orbit, the satellite is always falling toward the center, so gravity must provide exactly the inward force needed for circular motion.

<PhysicsDerivation
  items={[
    {
      label: "Gravity magnitude",
      tex: "F_g=G\\frac{Mm}{r^2}",
    },
    {
      label: "Circular-motion requirement",
      tex: "F_c=m\\frac{v^2}{r}",
    },
    {
      label: "Set the inward forces equal",
      tex: "G\\frac{Mm}{r^2}=m\\frac{v^2}{r}",
    },
    {
      label: "Circular orbit speed",
      tex: "v=\\sqrt{\\frac{GM}{r}}",
    },
  ]}
/>

### Derivation 2: Build the period

One orbit covers the circumference \\(2\\pi r\\). Dividing that distance by the orbital speed gives the time for one revolution.

<PhysicsDerivation
  items={[
    {
      label: "One-orbit distance",
      tex: "2\\pi r",
    },
    {
      label: "Period definition",
      tex: "T=\\frac{2\\pi r}{v}",
    },
    {
      label: "Substitute the orbit speed",
      tex: "T=2\\pi\\sqrt{\\frac{r^3}{GM}}",
    },
    {
      label: "Field form",
      tex: "g(r)=\\frac{v^2}{r}=\\frac{4\\pi^2r}{T^2}",
      note: "The same orbit can be described either by gravity or by its circular-motion kinematics.",
    },
  ]}
/>

The sketch is an instantaneous orbit picture. Velocity is tangent to the orbit while gravity points inward toward the central mass.

<PolarDiagram
  title="Circular satellite orbit"
  caption="The orbit persists because gravity keeps turning the velocity inward."
  maxRadius={4.5}
  rings={[3.1]}
  spokes={[0, 45, 90, 135, 180, 225, 270, 315]}
  curves={[
    {
      points: [
        { radius: 3.1, angle: 0 },
        { radius: 3.1, angle: 90 },
        { radius: 3.1, angle: 180 },
        { radius: 3.1, angle: 270 },
        { radius: 3.1, angle: 360 },
      ],
    },
  ]}
  vectors={[
    {
      label: "\\vec v",
      fromRadius: 3.1,
      fromAngle: 35,
      radius: 3.45,
      angle: 62,
      color: "var(--chart-3)",
    },
    {
      label: "\\vec F_g",
      fromRadius: 3.1,
      fromAngle: 35,
      radius: 0,
      angle: 35,
      color: "var(--chart-5)",
    },
  ]}
/>

Because the inward force is perpendicular to the velocity in a circular orbit, gravity can keep changing direction without needing to reduce the speed.

## Rules

These are the compact results from the method above.

<Equation label="Circular orbit balance" tex="G\frac{Mm}{r^2}=m\frac{v^2}{r}" />

<Equation label="Orbital speed" tex="v=\sqrt{\frac{GM}{r}}" />

<Equation label="Orbital period" tex="T=2\pi\sqrt{\frac{r^3}{GM}}" />

<Equation label="Orbit field relation" tex="g(r)=\frac{v^2}{r}=\frac{4\pi^2r}{T^2}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the circular-orbit speed for a satellite at radius \\(8.4\\times10^6\\,\\mathrm{m}\\) around a planet of mass \\(6.0\\times10^{24}\\,\\mathrm{kg}\\).",
      answer: "\\[v=\\sqrt{\\frac{GM}{r}}=\\sqrt{\\frac{(6.67\\times10^{-11})(6.0\\times10^{24})}{8.4\\times10^6}}=6.90\\times10^3\\,\\mathrm{m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A circular-orbit radius is tripled around the same planet. By what factor does the orbital period change?",
      answer: "\\[T\\propto r^{3/2}\\] \\[\\frac{T'}{T}=3^{3/2}=\\sqrt{27}\\approx5.20\\] The period becomes about 5.2 times larger.",
    },
  ]}
/>

## Checks

- Orbiting does not mean gravity is absent; it means gravity is providing the inward acceleration.
- Higher circular orbits have lower speed but longer period.
- The satellite mass cancels in the circular-orbit speed formula.
- If gravity were stronger than the required centripetal force at that speed, the orbit would curve inward.`;
