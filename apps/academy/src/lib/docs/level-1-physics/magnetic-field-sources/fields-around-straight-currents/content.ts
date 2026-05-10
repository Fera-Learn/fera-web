export const content = String.raw`## Principle

A long straight current produces circular magnetic field lines around the wire. The field strength decreases in inverse proportion to distance from the wire.

## Notation

<Notation
  items={[
    { symbol: "I", meaning: "current in the straight wire", unit: "A" },
    { symbol: "r", meaning: "perpendicular distance from the wire", unit: "m" },
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "\\mu_0", meaning: "permeability of free space", unit: "N A^{-2}" },
    { symbol: "\\hat\\phi", meaning: "azimuthal direction around the wire", unit: "" },
  ]}
/>

## Method

### Derivation 1: Use circular symmetry

For a very long straight wire, every point the same distance from the wire has the same field magnitude. The direction is tangent to a circle centered on the wire.

<PhysicsDerivation
  items={[
    {
      label: "Circular field direction",
      tex: "\\vec B=B\\hat\\phi",
    },
    {
      label: "Straight-wire magnitude",
      tex: "B=\\frac{\\mu_0 I}{2\\pi r}",
    },
  ]}
/>

### Derivation 2: Apply the right-hand grip rule

Point your right thumb along conventional current. Your fingers curl in the direction of the magnetic field around the wire.

### Derivation 3: Add fields from several wires

Each wire produces its own circular field. At a chosen point, use the right-hand rule for each wire, then add the fields as vectors.

## Rules

<Equation label="Long straight wire" tex="B=\frac{\mu_0 I}{2\pi r}" />

<Equation label="Vector direction" tex="\vec B=\frac{\mu_0 I}{2\pi r}\hat\phi" />

<Equation label="Superposition" tex="\vec B_{\mathrm{net}}=\sum_i \vec B_i" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A vertical wire carries current upward. What is the magnetic field direction at a point to the right of the wire?",
      answer: "Point the right thumb upward. At the right side of the wire, the curled fingers point into the page.",
    },
    {
      title: "Example 2",
      question: "Find the field \\(0.050\\,\\mathrm m\\) from a long straight wire carrying \\(8.0\\,\\mathrm A\\).",
      answer: "\\[B=\\frac{\\mu_0 I}{2\\pi r}=\\frac{(4\\pi\\times10^{-7})(8.0)}{2\\pi(0.050)}=3.2\\times10^{-5}\\,\\mathrm T\\]",
    },
  ]}
/>

## Checks

- The formula assumes the wire is long compared with the distance from it.
- The magnetic field is tangent to circles centered on the wire.
- Doubling current doubles \\(B\\).
- Doubling distance halves \\(B\\).`;
