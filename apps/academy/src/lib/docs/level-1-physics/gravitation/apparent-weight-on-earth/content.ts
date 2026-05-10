export const content = String.raw`## Principle

Apparent weight on Earth is the scale reading, so it is the contact force needed after Earth's rotation has supplied the required centripetal acceleration.

## Notation

<Notation
  items={[
    { symbol: "m", meaning: "person or object's mass", unit: "kg" },
    { symbol: "N", meaning: "normal reaction or scale reading", unit: "N" },
    { symbol: "g", meaning: "gravitational field magnitude near Earth's surface", unit: "N kg^{-1}" },
    { symbol: "\\omega", meaning: "Earth's angular speed", unit: "rad s^{-1}" },
    { symbol: "R", meaning: "Earth's radius", unit: "m" },
    { symbol: "\\lambda", meaning: "latitude", unit: "rad or deg" },
    { symbol: "r_\\perp", meaning: "distance from the rotation axis", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Find the rotation radius

A point on Earth's surface moves in a circle about the rotation axis, not about the local vertical. At latitude \\(\\lambda\\), the circular-motion radius is the perpendicular distance to the axis.

<PhysicsDerivation
  items={[
    {
      label: "Axis distance",
      tex: "r_\\perp=R\\cos\\lambda",
    },
    {
      label: "Centripetal acceleration magnitude",
      tex: "a_c=\\omega^2r_\\perp=\\omega^2R\\cos\\lambda",
    },
  ]}
/>

### Derivation 2: Extract the local vertical effect

Only the component opposite the local upward direction changes the scale reading. For a spherical-Earth model, that upward component is reduced by another factor of \\(\\cos\\lambda\\).

<PhysicsDerivation
  items={[
    {
      label: "Upward component of the rotation effect",
      tex: "a_{c,\\mathrm{up}}=\\omega^2R\\cos^2\\lambda",
    },
    {
      label: "Balance along the local vertical",
      tex: "N= m\\left(g-a_{c,\\mathrm{up}}\\right)",
    },
    {
      label: "Latitude model",
      tex: "N=m\\left(g-\\omega^2R\\cos^2\\lambda\\right)",
      note: "This ignores Earth's small equatorial bulge and the fine detail of local gravity variation.",
    },
  ]}
/>

### Derivation 3: Check the extreme cases

The formula is easiest to interpret at the equator and the poles.

<PhysicsDerivation
  items={[
    {
      label: "Equator",
      tex: "N_{\\mathrm{eq}}=m\\left(g-\\omega^2R\\right)",
    },
    {
      label: "Poles",
      tex: "N_{\\mathrm{pole}}=mg",
    },
    {
      label: "Difference",
      tex: "N_{\\mathrm{pole}}-N_{\\mathrm{eq}}=m\\omega^2R",
    },
  ]}
/>

Earth's rotation therefore makes the scale reading slightly smaller at low latitude, with the largest reduction at the equator.

## Rules

These are the compact results from the method above.

<Equation label="Latitude radius" tex="r_\perp=R\cos\lambda" />

<Equation label="Latitude model" tex="N=m\left(g-\omega^2R\cos^2\lambda\right)" />

<Equation label="Equator" tex="N_{\mathrm{eq}}=m\left(g-\omega^2R\right)" />

<Equation label="Poles" tex="N_{\mathrm{pole}}=mg" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Estimate the equatorial scale reading for a \\(70\\,\\mathrm{kg}\\) person using \\(g=9.81\\,\\mathrm{N\\,kg^{-1}}\\), \\(\\omega=7.29\\times10^{-5}\\,\\mathrm{rad\\,s^{-1}}\\), and \\(R=6.37\\times10^6\\,\\mathrm{m}\\).",
      answer: "\\[N_{\\mathrm{eq}}=m\\left(g-\\omega^2R\\right)\\] \\[\\omega^2R=(7.29\\times10^{-5})^2(6.37\\times10^6)=3.39\\times10^{-2}\\,\\mathrm{m\\,s^{-2}}\\] \\[N_{\\mathrm{eq}}=70(9.81-0.0339)=6.84\\times10^2\\,\\mathrm{N}\\] The reduction is about \\(2.4\\,\\mathrm{N}\\) compared with \\(mg\\).",
    },
    {
      title: "Example 2",
      question: "At latitude \\(\\lambda=60^\\circ\\), what fraction of the equatorial rotation correction remains?",
      answer: "The correction is proportional to \\(\\cos^2\\lambda\\). \\[\\cos^2 60^\\circ=\\left(\\frac12\\right)^2=\\frac14\\] Only one quarter of the equatorial reduction remains at \\(60^\\circ\\).",
    },
  ]}
/>

## Checks

- Apparent weight is the normal reaction \\(N\\), not the gravitational force \\(mg\\).
- The rotational reduction is largest at the equator and vanishes at the poles.
- The correction is small compared with \\(g\\), so apparent weight on Earth is close to but not exactly \\(mg\\).
- A scale reading can change even when the object's mass does not.`;
