export const content = String.raw`## Principle

Rotational kinetic energy depends on angular speed and mass distribution about the axis.

## Notation

<Notation
  items={[
    { symbol: "K_{\\mathrm{rot}}", meaning: "rotational kinetic energy", unit: "J" },
    { symbol: "I", meaning: "moment of inertia about the axis", unit: "kg m^{2}" },
    { symbol: "\\omega", meaning: "angular velocity", unit: "rad s^{-1}" },
    { symbol: "M", meaning: "total mass", unit: "kg" },
    { symbol: "v_{\\mathrm{cm}}", meaning: "center-of-mass speed", unit: "m s^{-1}" },
    { symbol: "R", meaning: "rolling radius", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Add the kinetic energy of many mass elements

A rigid body rotates with one angular speed, but each mass element has speed \\(v_i=r_i\omega\\).

<PhysicsDerivation
  items={[
    {
      label: "Point-mass energy",
      tex: "K_i=\\frac12m_iv_i^2",
    },
    {
      label: "Use rotational speed",
      tex: "v_i=r_i\\omega",
    },
    {
      label: "Sum all elements",
      tex: "K_{\\mathrm{rot}}=\\frac12\\left(\\sum_i m_ir_i^2\\right)\\omega^2",
    },
    {
      label: "Define moment of inertia",
      tex: "I=\\sum_i m_ir_i^2\\Rightarrow K_{\\mathrm{rot}}=\\frac12I\\omega^2",
    },
  ]}
/>

### Derivation 2: Include translation for rolling bodies

A rolling rigid body has center-of-mass translation and rotation about the center of mass.

<PhysicsDerivation
  items={[
    {
      label: "Split kinetic energy",
      tex: "K=\\frac12Mv_{\\mathrm{cm}}^2+\\frac12I_{\\mathrm{cm}}\\omega^2",
    },
    {
      label: "No-slip link",
      tex: "\\omega=\\frac{v_{\\mathrm{cm}}}{R}",
    },
    {
      label: "Write in terms of speed",
      tex: "K=\\frac12\\left(M+\\frac{I_{\\mathrm{cm}}}{R^2}\\right)v_{\\mathrm{cm}}^2",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Rotational energy" tex="K_{\mathrm{rot}}=\frac12I\omega^2" />

<Equation label="Point masses" tex="I=\sum_i m_ir_i^2" />

<Equation label="Rolling total" tex="K=\frac12Mv_{\mathrm{cm}}^2+\frac12I_{\mathrm{cm}}\omega^2" />

<Equation label="No-slip energy" tex="K=\frac12\left(M+\frac{I_{\mathrm{cm}}}{R^2}\right)v_{\mathrm{cm}}^2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A flywheel has \\(I=0.80\\,\\mathrm{kg\\,m^2}\\) and \\(\\omega=12\\,\\mathrm{rad\\,s^{-1}}\\). Find \\(K_{\\mathrm{rot}}\\).",
      answer: "\\[K_{\\mathrm{rot}}=\\frac12(0.80)(12^2)=57.6\\,\\mathrm{J}\\]",
    },
    {
      title: "Example 2",
      question: "A solid disk rolls without slipping with \\(M=3.0\\,\\mathrm{kg}\\), \\(R=0.20\\,\\mathrm{m}\\), and \\(v_{\\mathrm{cm}}=2.0\\,\\mathrm{m\\,s^{-1}}\\). Find total kinetic energy.",
      answer: "For a solid disk, \\(I_{\\mathrm{cm}}=\\frac12MR^2\\), so \\[K=\\frac12Mv^2+\\frac12\\left(\\frac12MR^2\\right)\\left(\\frac{v}{R}\\right)^2=\\frac34Mv^2=9.0\\,\\mathrm{J}\\]",
    },
  ]}
/>

## Checks

- Moment of inertia depends on the chosen axis.
- Rotational kinetic energy is nonnegative.
- A rolling object's energy is not only translational.
- For the same \\(M\\), \\(R\\), and \\(\omega\\), mass farther out means larger energy.`;
