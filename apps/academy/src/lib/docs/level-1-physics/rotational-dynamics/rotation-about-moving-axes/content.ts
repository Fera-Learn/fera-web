export const content = String.raw`## Principle

Moving-axis rotation couples center-of-mass translation with rotation about the center.

## Notation

<Notation
  items={[
    { symbol: "M", meaning: "total mass", unit: "kg" },
    { symbol: "I_{\\mathrm{cm}}", meaning: "moment of inertia about the center of mass", unit: "kg m^{2}" },
    { symbol: "a_{\\mathrm{cm}}", meaning: "center-of-mass acceleration", unit: "m s^{-2}" },
    { symbol: "\\alpha", meaning: "angular acceleration", unit: "rad s^{-2}" },
    { symbol: "R", meaning: "rolling radius", unit: "m" },
    { symbol: "f_s", meaning: "static friction force", unit: "N" },
  ]}
/>

## Method

### Derivation 1: Split translation and rotation

For a rolling body, the center of mass translates while the body rotates about that center.

<PhysicsDerivation
  items={[
    {
      label: "Translate the center",
      tex: "\\sum F_x=Ma_{\\mathrm{cm}}",
    },
    {
      label: "Rotate about the center",
      tex: "\\sum\\tau_{\\mathrm{cm}}=I_{\\mathrm{cm}}\\alpha",
    },
    {
      label: "Use the same force model",
      tex: "f_s\\ \\text{can appear in both equations}",
      note: "A force can accelerate the center and produce a torque.",
    },
  ]}
/>

The free-body diagram shows the forces for a wheel on a horizontal surface. Translation uses the net force; rotation uses torques about the center.

<FreeBodyDiagram
  title="Rolling body forces"
  bodyLabel="wheel"
  bodyShape="circle"
  surface="horizontal"
  caption="Static friction can provide the torque needed for rolling."
  forces={[
    { label: "N", angle: 90, length: 58 },
    { label: "W", angle: 270, length: 58 },
    { label: "f_s", angle: 0, length: 64, color: "var(--chart-3)" },
  ]}
/>

### Derivation 2: Add the rolling constraint

Rolling without slipping is a kinematic constraint. It is not guaranteed just because the body is round.

<PhysicsDerivation
  items={[
    {
      label: "Rolling speed",
      tex: "v_{\\mathrm{cm}}=R\\omega",
    },
    {
      label: "Rolling acceleration",
      tex: "a_{\\mathrm{cm}}=R\\alpha",
    },
    {
      label: "Static-friction test",
      tex: "|f_s|\\le\\mu_sN",
    },
  ]}
/>

### Derivation 3: Account for energy

A rolling body's kinetic energy has translational and rotational parts.

<PhysicsDerivation
  items={[
    {
      label: "Translational part",
      tex: "K_{\\mathrm{trans}}=\\frac12Mv_{\\mathrm{cm}}^2",
    },
    {
      label: "Rotational part",
      tex: "K_{\\mathrm{rot}}=\\frac12I_{\\mathrm{cm}}\\omega^2",
    },
    {
      label: "Total kinetic energy",
      tex: "K=\\frac12Mv_{\\mathrm{cm}}^2+\\frac12I_{\\mathrm{cm}}\\omega^2",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Translation" tex="\sum F_x=Ma_{\mathrm{cm}}" />

<Equation label="Rotation" tex="\sum\tau_{\mathrm{cm}}=I_{\mathrm{cm}}\alpha" />

<Equation label="Rolling speed" tex="v_{\mathrm{cm}}=R\omega" />

<Equation label="Rolling acceleration" tex="a_{\mathrm{cm}}=R\alpha" />

<Equation label="Total kinetic energy" tex="K=\frac12Mv_{\mathrm{cm}}^2+\frac12I_{\mathrm{cm}}\omega^2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A solid cylinder rolls without slipping at \\(v_{\\mathrm{cm}}=4.0\\,\\mathrm{m\\,s^{-1}}\\) with \\(R=0.20\\,\\mathrm{m}\\). Find \\(\\omega\\).",
      answer: "Use \\[\\omega=\\frac{v_{\\mathrm{cm}}}{R}=\\frac{4.0}{0.20}=20\\,\\mathrm{rad\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A rolling body has \\(M=2.0\\,\\mathrm{kg}\\), \\(I_{\\mathrm{cm}}=0.10\\,\\mathrm{kg\\,m^2}\\), \\(R=0.20\\,\\mathrm{m}\\), and \\(v_{\\mathrm{cm}}=3.0\\,\\mathrm{m\\,s^{-1}}\\). Find \\(K\\).",
      answer: "First \\(\\omega=v/R=15\\,\\mathrm{rad\\,s^{-1}}\\). Then \\[K=\\frac12Mv^2+\\frac12I\\omega^2=9.0+11.25=20.25\\,\\mathrm{J}\\]",
    },
  ]}
/>

## Checks

- Rolling without slipping is a constraint.
- Static friction can point either way.
- Torques about the center avoid torque from weight and normal on level ground.
- Translational and rotational kinetic energies both matter.`;
