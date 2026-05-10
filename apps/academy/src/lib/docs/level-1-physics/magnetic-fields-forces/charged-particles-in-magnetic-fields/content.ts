export const content = String.raw`## Principle

A uniform magnetic field bends perpendicular charged-particle motion into circular motion.

## Notation

<Notation
  items={[
    { symbol: "m", meaning: "particle mass", unit: "kg" },
    { symbol: "q", meaning: "particle charge", unit: "C" },
    { symbol: "v_{\\perp}", meaning: "speed perpendicular to the field", unit: "m s^{-1}" },
    { symbol: "B", meaning: "magnetic field magnitude", unit: "T" },
    { symbol: "r", meaning: "circular-path radius", unit: "m" },
    { symbol: "T", meaning: "period of circular motion", unit: "s" },
  ]}
/>

## Method

For velocity perpendicular to a uniform field, the magnetic force is always perpendicular to velocity. It supplies the radial force.

<PhysicsDerivation
  items={[
    {
      label: "Magnetic force",
      tex: "F_B=|q|v_{\\perp}B",
    },
    {
      label: "Radial force",
      tex: "F_r=m\\frac{v_{\\perp}^2}{r}",
    },
    {
      label: "Set forces equal",
      tex: "|q|v_{\\perp}B=m\\frac{v_{\\perp}^2}{r}",
    },
    {
      label: "Radius",
      tex: "r=\\frac{mv_{\\perp}}{|q|B}",
    },
  ]}
/>

The angular speed and period do not depend on speed for nonrelativistic circular motion in a uniform magnetic field.

<PhysicsDerivation
  items={[
    {
      label: "Angular speed",
      tex: "\\omega=\\frac{v_{\\perp}}{r}=\\frac{|q|B}{m}",
    },
    {
      label: "Period",
      tex: "T=\\frac{2\\pi}{\\omega}=\\frac{2\\pi m}{|q|B}",
    },
  ]}
/>

## Rules

<Equation label="Orbit radius" tex="r=\frac{mv_{\perp}}{|q|B}" />

<Equation label="Angular speed" tex="\omega=\frac{|q|B}{m}" />

<Equation label="Cyclotron period" tex="T=\frac{2\pi m}{|q|B}" />

<Equation label="Magnetic work" tex="W_B=0" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An electron with speed \\(2.0\\times10^6\\,\\mathrm{m\\,s^{-1}}\\) moves perpendicular to \\(0.010\\,\\mathrm{T}\\). Find \\(r\\).",
      answer: "\\[r=\\frac{mv}{eB}=\\frac{(9.11\\times10^{-31})(2.0\\times10^6)}{(1.60\\times10^{-19})(0.010)}=1.14\\times10^{-3}\\,\\mathrm{m}\\]",
    },
    {
      title: "Example 2",
      question: "What changes if the charge sign is reversed?",
      answer: "The radius magnitude is unchanged for the same \\(|q|\\), but the direction of curvature reverses.",
    },
  ]}
/>

## Checks

- Use only the speed component perpendicular to \\(\vec B\\).
- The magnetic field changes direction of velocity, not speed.
- Larger momentum gives a larger radius; larger charge or field gives a smaller radius.`;
