export const content = String.raw`## Principle

A gyroscope precesses because torque changes angular momentum's direction.

## Notation

<Notation
  items={[
    { symbol: "\\vec L", meaning: "spin angular momentum", unit: "kg m^{2} s^{-1}" },
    { symbol: "\\vec\\tau", meaning: "external torque about the pivot", unit: "N m" },
    { symbol: "\\Omega", meaning: "precession angular velocity", unit: "rad s^{-1}" },
    { symbol: "\\omega_s", meaning: "spin angular velocity", unit: "rad s^{-1}" },
    { symbol: "I_s", meaning: "spin-axis moment of inertia", unit: "kg m^{2}" },
    { symbol: "d", meaning: "pivot-to-center distance", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Find the torque about the pivot

The weight acts at the center of mass. If the center is displaced from the pivot, gravity produces a torque about the pivot.

<PhysicsDerivation
  items={[
    {
      label: "Lever arm",
      tex: "d",
    },
    {
      label: "Gravity torque",
      tex: "\\tau=Mgd",
    },
    {
      label: "Torque law",
      tex: "\\vec\\tau=\\frac{d\\vec L}{dt}",
    },
  ]}
/>

<RigidBodyDiagram
  title="Gyroscope torque"
  caption="Weight acting away from the pivot gives the torque that turns angular momentum."
  beamLength={1}
  supports={[{ x: 0, type: "fixed", label: "pivot" }]}
  loads={[{ x: 0.85, angle: -90, label: "Mg" }]}
  torques={[{ x: 0, direction: "clockwise", label: "\\tau" }]}
/>

### Derivation 2: Relate torque to slow precession

For fast spin and slow steady precession, torque mainly changes the direction of \\(\vec L\\), not its magnitude.

<PhysicsDerivation
  items={[
    {
      label: "Spin angular momentum",
      tex: "L=I_s\\omega_s",
    },
    {
      label: "Direction-change rate",
      tex: "\\tau=\\Omega L",
    },
    {
      label: "Slow precession",
      tex: "\\Omega=\\frac{\\tau}{L}=\\frac{Mgd}{I_s\\omega_s}",
    },
  ]}
/>

### Derivation 3: Check the approximation

The simple expression is a steady, slow-precession model. It should not be used when precession is comparable to spin.

<PhysicsDerivation
  items={[
    {
      label: "Slow condition",
      tex: "\\Omega\\ll\\omega_s",
    },
    {
      label: "Faster spin effect",
      tex: "\\Omega\\propto\\frac1{\\omega_s}",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Torque law" tex="\vec\tau=\frac{d\vec L}{dt}" />

<Equation label="Spin angular momentum" tex="L=I_s\omega_s" />

<Equation label="Gravity torque" tex="\tau=Mgd" />

<Equation label="Slow precession" tex="\Omega=\frac{\tau}{L}=\frac{Mgd}{I_s\omega_s}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A rotor has \\(I_s=0.020\\,\\mathrm{kg\\,m^2}\\), \\(\\omega_s=300\\,\\mathrm{rad\\,s^{-1}}\\), \\(M=1.5\\,\\mathrm{kg}\\), and \\(d=0.10\\,\\mathrm{m}\\). Find \\(\\Omega\\).",
      answer: "Use \\[\\Omega=\\frac{Mgd}{I_s\\omega_s}=\\frac{1.5(9.8)(0.10)}{0.020(300)}=0.245\\,\\mathrm{rad\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "If the same rotor spins twice as fast, what happens to the slow precession rate?",
      answer: "Since \\(\\Omega=Mgd/(I_s\\omega_s)\\), doubling \\(\\omega_s\\) halves \\(\\Omega\\).",
    },
  ]}
/>

## Checks

- Precession direction comes from \\(\vec\\tau=d\\vec L/dt\\).
- Faster spin usually means slower precession.
- The simple formula assumes steady, slow precession.
- Torque changes the direction of \\(\vec L\\), not mainly its magnitude.`;
