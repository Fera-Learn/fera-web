export const content = String.raw`## Principle

A current loop produces a magnetic field like a magnetic dipole. On the loop axis, the field points along the axis and can be found by adding Biot-Savart contributions.

## Notation

<Notation
  items={[
    { symbol: "I", meaning: "current in the loop", unit: "A" },
    { symbol: "R", meaning: "loop radius", unit: "m" },
    { symbol: "x", meaning: "distance along the loop axis from the centre", unit: "m" },
    { symbol: "N", meaning: "number of turns", unit: "" },
    { symbol: "A", meaning: "area of one loop", unit: "m^{2}" },
    { symbol: "\\vec m", meaning: "magnetic dipole moment", unit: "A m^{2}" },
  ]}
/>

## Method

### Derivation 1: Use axial symmetry

For a circular loop, transverse field components from opposite current elements cancel on the axis. Axial components add.

<PhysicsDerivation
  items={[
    {
      label: "Axial field of one loop",
      tex: "B(x)=\\frac{\\mu_0IR^2}{2(R^2+x^2)^{3/2}}",
    },
    {
      label: "Field at the centre",
      tex: "B(0)=\\frac{\\mu_0 I}{2R}",
    },
    {
      label: "N turns",
      tex: "B_N=N B_{\\mathrm{one\\ loop}}",
    },
  ]}
/>

### Derivation 2: Assign the magnetic moment

The direction of the magnetic moment is given by the right-hand rule: curl fingers with the current and the thumb points along \\(\vec m\\).

<PhysicsDerivation
  items={[
    {
      label: "Magnetic dipole moment",
      tex: "\\vec m=NIA\\hat n",
    },
  ]}
/>

### Derivation 3: Interpret the far field

Far from the loop, the field resembles that of a bar magnet: one side behaves like a north pole and the other like a south pole. The loop is not a true isolated pole; field lines remain closed loops.

## Rules

<Equation label="Loop axis field" tex="B(x)=\frac{\mu_0IR^2}{2(R^2+x^2)^{3/2}}" />

<Equation label="Loop centre" tex="B=\frac{\mu_0 I}{2R}" />

<Equation label="Magnetic dipole moment" tex="\vec m=NIA\hat n" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A circular loop carries counterclockwise current as viewed by you. Does the magnetic field at the centre point toward you or away from you?",
      answer: "Curl the fingers of your right hand counterclockwise. Your thumb points toward you, so the field at the centre points toward you.",
    },
    {
      title: "Example 2",
      question: "A single loop has radius \\(0.10\\,\\mathrm m\\) and current \\(4.0\\,\\mathrm A\\). Find the magnetic field at its centre.",
      answer: "\\[B=\\frac{\\mu_0 I}{2R}=\\frac{(4\\pi\\times10^{-7})(4.0)}{2(0.10)}=2.5\\times10^{-5}\\,\\mathrm T\\]",
    },
  ]}
/>

## Checks

- At the loop centre, a smaller radius gives a stronger field for the same current.
- Multiple tightly wound turns multiply the field approximately by \\(N\\).
- The magnetic moment points normal to the loop.
- A current loop is a dipole, not an isolated magnetic pole.`;
