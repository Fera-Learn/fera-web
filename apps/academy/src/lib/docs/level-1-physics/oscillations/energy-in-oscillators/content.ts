export const content = String.raw`## Principle

Energy in SHM trades between kinetic and potential forms.

The SHM force model fixes the motion; energy gives a second way to find speeds and turning points.

## Notation

<Notation
  items={[
    { symbol: "K", meaning: "kinetic energy", unit: "J" },
    { symbol: "U_s", meaning: "spring potential energy", unit: "J" },
    { symbol: "E", meaning: "total mechanical energy", unit: "J" },
    { symbol: "A", meaning: "amplitude", unit: "m" },
    { symbol: "k", meaning: "spring constant", unit: "N m^{-1}" },
    { symbol: "m", meaning: "oscillating mass", unit: "kg" },
  ]}
/>

## Method

### Derivation 1: Build the energy terms

Kinetic energy depends on speed. Spring potential energy comes from the work needed to stretch or compress the spring from equilibrium.

<PhysicsDerivation
  items={[
    {
      label: "Kinetic energy",
      tex: "K=\\frac{1}{2}mv^2",
    },
    {
      label: "Spring force",
      tex: "F_s=-kx",
    },
    {
      label: "Stored spring energy",
      tex: "U_s=\\int_0^x ks\\,ds=\\frac{1}{2}kx^2",
    },
  ]}
/>

### Derivation 2: Use the turning point

At maximum displacement, the oscillator is momentarily at rest. That fixes the total energy in terms of amplitude.

<PhysicsDerivation
  items={[
    {
      label: "Conserved total",
      tex: "E=K+U_s",
    },
    {
      label: "Turning point",
      tex: "x=\\pm A,\\qquad v=0",
    },
    {
      label: "Total energy",
      tex: "E=\\frac{1}{2}kA^2",
    },
  ]}
/>

### Derivation 3: Solve for speed at a position

Away from the turning points, the energy gap between total and potential energy is kinetic energy.

<PhysicsDerivation
  items={[
    {
      label: "Energy balance",
      tex: "\\frac{1}{2}mv^2+\\frac{1}{2}kx^2=\\frac{1}{2}kA^2",
    },
    {
      label: "Isolate speed",
      tex: "v^2=\\frac{k}{m}(A^2-x^2)",
    },
    {
      label: "Use frequency",
      tex: "v=\\pm\\omega\\sqrt{A^2-x^2}",
      note: "The sign depends on which way the oscillator is moving.",
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Kinetic energy" tex="K=\frac{1}{2}mv^2" />

<Equation label="Spring potential" tex="U_s=\frac{1}{2}kx^2" />

<Equation label="Total energy" tex="E=\frac{1}{2}mv^2+\frac{1}{2}kx^2=\frac{1}{2}kA^2" />

<Equation label="Speed from position" tex="v=\pm\omega\sqrt{A^2-x^2}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A spring oscillator has \\(k=80\\,\\mathrm{N\\,m^{-1}}\\) and \\(A=0.20\\,\\mathrm{m}\\). Find total energy.",
      answer: "\\[E=\\frac{1}{2}kA^2=\\frac{1}{2}(80)(0.20^2)=1.6\\,\\mathrm{J}\\]",
    },
  ]}
/>

## Checks

- Total energy scales as amplitude squared.
- Speed is maximum at equilibrium.
- Potential energy is maximum at turning points.
- Energy conservation assumes no damping or driving.`;
