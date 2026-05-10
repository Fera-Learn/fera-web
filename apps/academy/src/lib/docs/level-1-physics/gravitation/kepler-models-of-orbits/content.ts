export const content = String.raw`## Principle

Kepler's orbit model describes bound gravitational motion with ellipse geometry, constant areal sweep rate, and a period that scales with orbital size.

## Notation

<Notation
  items={[
    { symbol: "a", meaning: "semi-major axis of an orbit", unit: "m" },
    { symbol: "r_p", meaning: "periapsis distance", unit: "m" },
    { symbol: "r_a", meaning: "apoapsis distance", unit: "m" },
    { symbol: "T", meaning: "orbital period", unit: "s" },
    { symbol: "\\Delta A", meaning: "area swept in a short time", unit: "m^{2}" },
    { symbol: "L", meaning: "orbital angular momentum magnitude", unit: "kg m^{2} s^{-1}" },
    { symbol: "M", meaning: "central mass", unit: "kg" },
  ]}
/>

## Method

### Derivation 1: Use the central-force property

Gravity acts along the line joining the orbiting body to the source, so the torque about the source is zero. Zero torque means angular momentum is conserved.

<PhysicsDerivation
  items={[
    {
      label: "Central force",
      tex: "\\vec F_g\\parallel\\vec r",
    },
    {
      label: "Zero torque",
      tex: "\\vec\\tau=\\vec r\\times\\vec F_g=0",
    },
    {
      label: "Conserved angular momentum",
      tex: "\\frac{d\\vec L}{dt}=0",
    },
  ]}
/>

### Derivation 2: Turn angular momentum into Kepler's second law

In a short time \\(\\Delta t\\), the swept region is approximately a triangle. Its area depends on the perpendicular part of the velocity.

<PhysicsDerivation
  items={[
    {
      label: "Short-time swept area",
      tex: "\\Delta A=\\frac12 r(v_\\perp\\Delta t)",
    },
    {
      label: "Angular momentum magnitude",
      tex: "L=mrv_\\perp",
    },
    {
      label: "Area rate",
      tex: "\\frac{\\Delta A}{\\Delta t}=\\frac{L}{2m}",
    },
    {
      label: "Equal areas in equal times",
      tex: "\\frac{dA}{dt}=\\frac{L}{2m}=\\text{constant}",
    },
  ]}
/>

### Derivation 3: Build the period-size law

For a circular orbit, the inverse-square gravity model gives the full period formula. In the full Kepler problem, the same scaling survives when the orbit is elliptical, with radius replaced by the semi-major axis.

<PhysicsDerivation
  items={[
    {
      label: "Circular orbit result",
      tex: "T^2=\\frac{4\\pi^2}{GM}r^3",
    },
    {
      label: "Kepler third law",
      tex: "T^2=\\frac{4\\pi^2}{GM}a^3",
    },
    {
      label: "Ellipse geometry",
      tex: "r_p+r_a=2a",
      note: "The semi-major axis sets the overall orbital scale.",
    },
  ]}
/>

Solving the full inverse-square equations gives Kepler's first law: bound orbits are ellipses with the central mass at one focus, not at the geometric center.

## Rules

These are the compact results from the method above.

<Equation label="Areal speed" tex="\frac{dA}{dt}=\frac{L}{2m}=\text{constant}" />

<Equation label="Third law" tex="T^2=\frac{4\pi^2}{GM}a^3" />

<Equation label="Semi-major axis" tex="a=\frac{r_p+r_a}{2}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two bodies orbit the same star. One has semi-major axis \\(a\\), the other has semi-major axis \\(2a\\). What is the ratio of their periods?",
      answer: "\\[T\\propto a^{3/2}\\] \\[\\frac{T_{2a}}{T_a}=2^{3/2}=\\sqrt{8}\\approx2.83\\] The larger orbit takes about 2.8 times as long.",
    },
    {
      title: "Example 2",
      question: "A planet moves from apoapsis to periapsis in the same short time interval used for two equal-area sectors. At which point is its speed larger?",
      answer: "Kepler's second law keeps \\(dA/dt\\) constant. Near periapsis the distance \\(r\\) is smaller, so the perpendicular speed must be larger to sweep the same area in the same time. The planet therefore moves faster near periapsis.",
    },
  ]}
/>

## Checks

- The central mass sits at a focus of the ellipse, not at the center of the ellipse.
- Equal areas in equal times mean the orbiting body moves faster when it is closer to the source.
- Kepler's third law compares orbits around the same central mass unless the constant is written explicitly.
- The semi-major axis, not the instantaneous radius, sets the period for an elliptical orbit.`;
