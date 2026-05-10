export const content = String.raw`## Principle

An electric dipole is a separated pair of equal and opposite charges, summarized at large distances by its dipole moment.

## Notation

<Notation
  items={[
    { symbol: "+q,-q", meaning: "charges forming the dipole", unit: "C" },
    { symbol: "\\vec d", meaning: "separation vector from negative charge to positive charge", unit: "m" },
    { symbol: "\\vec p", meaning: "electric dipole moment", unit: "C m" },
    { symbol: "\\theta", meaning: "angle between \\(\\vec p\\) and \\(\\vec E\\)", unit: "rad or deg" },
    { symbol: "\\vec\\tau", meaning: "torque on the dipole", unit: "N m" },
    { symbol: "U", meaning: "dipole potential energy in a uniform field", unit: "J" },
  ]}
/>

## Method

### Derivation 1: Build the dipole moment

The separation direction is defined from the negative charge to the positive charge. Multiplying by the charge magnitude gives a vector that tracks both size and orientation.

<PhysicsDerivation
  items={[
    {
      label: "Separation direction",
      tex: "\\vec d=\\vec r_{+}-\\vec r_{-}",
    },
    {
      label: "Dipole moment",
      tex: "\\vec p=q\\vec d",
    },
    {
      label: "Moment magnitude",
      tex: "p=qd",
    },
  ]}
/>

### Derivation 2: Torque in a uniform field

The two charges feel equal and opposite forces in a uniform field. The net force is zero, but the forces form a couple that tends to align \\(\\vec p\\) with \\(\\vec E\\).

<PhysicsDerivation
  items={[
    {
      label: "Forces on charges",
      tex: "\\vec F_+=q\\vec E,\\qquad \\vec F_-=-q\\vec E",
    },
    {
      label: "Net force",
      tex: "\\vec F_{\\mathrm{net}}=0\\quad\\text{in uniform }\\vec E",
    },
    {
      label: "Torque vector",
      tex: "\\vec\\tau=\\vec p\\times\\vec E",
    },
    {
      label: "Torque magnitude",
      tex: "\\tau=pE\\sin\\theta",
    },
  ]}
/>

### Derivation 3: Energy and far-field scale

A dipole has lowest energy when it is aligned with the field. Far from the dipole, the positive and negative point-charge fields nearly cancel, leaving a field that falls faster than \\(1/r^2\\).

<PhysicsDerivation
  items={[
    {
      label: "Potential energy",
      tex: "U=-\\vec p\\cdot\\vec E=-pE\\cos\\theta",
    },
    {
      label: "Far axial field",
      tex: "E_{\\mathrm{axis}}\\approx\\frac{2kp}{r^3}",
    },
    {
      label: "Far equatorial field",
      tex: "E_{\\mathrm{eq}}\\approx\\frac{kp}{r^3}",
    },
  ]}
/>

## Rules

These are the compact dipole results.

<Equation label="Dipole moment" tex="\vec p=q\vec d" />

<Equation label="Torque" tex="\vec\tau=\vec p\times\vec E,\qquad \tau=pE\sin\theta" />

<Equation label="Dipole energy" tex="U=-\vec p\cdot\vec E=-pE\cos\theta" />

<Equation label="Far-field scale" tex="E_{\mathrm{dipole}}\propto\frac{p}{r^3}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A dipole has \\(q=4.0\\,\\mathrm{nC}\\) and charge separation \\(3.0\\,\\mathrm{mm}\\). Find \\(p\\).",
      answer: "\\[p=qd=(4.0\\times10^{-9})(3.0\\times10^{-3})=1.2\\times10^{-11}\\,\\mathrm{C\\,m}\\]",
    },
    {
      title: "Example 2",
      question: "A dipole is placed in a uniform field with \\(\\vec p\\) anti-parallel to \\(\\vec E\\). Is the torque magnitude zero?",
      answer: "Yes. Anti-parallel means \\(\\theta=180^\\circ\\), so \\(\\tau=pE\\sin180^\\circ=0\\). The orientation is unstable even though the instantaneous torque is zero.",
    },
  ]}
/>

## Checks

- \\(\\vec p\\) points from negative charge to positive charge.
- A uniform field gives a dipole torque but no net force.
- The aligned state \\((\\theta=0)\\) has minimum energy.
- A dipole field falls as \\(1/r^3\\) far away, faster than a single point-charge field.`;
