export const content = String.raw`## Principle

An equipotential surface is a set of points with the same electric potential, so moving along it requires no electric work.

## Notation

<Notation
  items={[
    { symbol: "V", meaning: "electric potential", unit: "V" },
    { symbol: "\\Delta V", meaning: "potential difference between two points", unit: "V" },
    { symbol: "q", meaning: "charge moved between points", unit: "C" },
    { symbol: "W_{\\mathrm{elec}}", meaning: "work done by the electric force", unit: "J" },
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "d\\vec \\ell", meaning: "small displacement along a path", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Work along an equipotential

If two points have the same potential, a charge moving between them has no potential-energy change.

<PhysicsDerivation
  items={[
    {
      label: "Equipotential condition",
      tex: "\\Delta V=0",
    },
    {
      label: "Energy change",
      tex: "\\Delta U=q\\Delta V=0",
    },
    {
      label: "Electric work",
      tex: "W_{\\mathrm{elec}}=-q\\Delta V=0",
    },
  ]}
/>

### Derivation 2: Why field lines meet equipotentials at right angles

For a tiny displacement along an equipotential, the electric work must be zero. Since \\(W=q\vec E\cdot d\vec\ell\\), the field has no component tangent to the surface.

<PhysicsDerivation
  items={[
    {
      label: "Small electric work",
      tex: "dW=q\\vec E\\cdot d\\vec\\ell",
    },
    {
      label: "Along equipotential",
      tex: "dW=0",
    },
    {
      label: "No tangent component",
      tex: "\\vec E\\cdot d\\vec\\ell=0",
    },
    {
      label: "Perpendicular crossing",
      tex: "\\vec E\\perp\\text{equipotential surface}",
    },
  ]}
/>

### Derivation 3: Conductors in electrostatic equilibrium

Inside conducting material in electrostatic equilibrium, \\(\vec E=0\\). If there is no field along the conductor, there is no potential change through it.

<PhysicsDerivation
  items={[
    {
      label: "Conductor equilibrium",
      tex: "\\vec E=0\\quad\\text{inside conducting material}",
    },
    {
      label: "No potential change",
      tex: "\\Delta V=0",
    },
    {
      label: "Conductor surface",
      tex: "V=\\mathrm{constant}",
    },
  ]}
/>

## Rules

These are the compact equipotential rules.

<Equation label="Equipotential" tex="\Delta V=0" />

<Equation label="No electric work" tex="W_{\mathrm{elec}}=-q\Delta V=0" />

<Equation label="Perpendicular field" tex="\vec E\perp\text{equipotential surface}" />

<Equation label="Conductor surface" tex="V=\mathrm{constant}\quad\text{on a conductor in electrostatic equilibrium}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(+2.0\\,\\mathrm{nC}\\) charge moves along a path where \\(V=40\\,\\mathrm{V}\\) everywhere. Find the electric work.",
      answer: "The path is equipotential, so \\(\\Delta V=0\\). \\[W_{\\mathrm{elec}}=-q\\Delta V=0\\]",
    },
    {
      title: "Example 2",
      question: "In a uniform electric field pointing right, what is the orientation of equipotential surfaces?",
      answer: "The field is perpendicular to equipotentials. If \\(\\vec E\\) points right, equipotentials are vertical planes, or vertical lines in a two-dimensional sketch.",
    },
  ]}
/>

## Checks

- Equipotential does not mean zero potential; it means constant potential.
- Moving along an equipotential gives zero electric work for any charge.
- Electric field lines cross equipotentials at right angles.
- Closely spaced equipotentials usually indicate a stronger field.`;
