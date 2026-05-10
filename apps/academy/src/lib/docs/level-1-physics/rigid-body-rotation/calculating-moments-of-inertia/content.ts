export const content = String.raw`## Principle

Moment of inertia is mass weighted by squared distance from the rotation axis.

## Notation

<Notation
  items={[
    { symbol: "I", meaning: "moment of inertia", unit: "kg m^{2}" },
    { symbol: "r_\\perp", meaning: "perpendicular distance to axis", unit: "m" },
    { symbol: "dm", meaning: "small mass element", unit: "kg" },
    { symbol: "\\lambda", meaning: "linear mass density", unit: "kg m^{-1}" },
    { symbol: "\\rho", meaning: "volume mass density", unit: "kg m^{-3}" },
  ]}
/>

## Method

### Derivation 1: Build the definition from point masses

Each mass element contributes according to how far it is from the axis. The square means distant mass matters strongly.

<PhysicsDerivation
  items={[
    {
      label: "Discrete body",
      tex: "I=\\sum_i m_ir_{\\perp i}^2",
    },
    {
      label: "Continuous limit",
      tex: "I=\\int r_\\perp^2\\,dm",
    },
    {
      label: "Scale check",
      tex: "I\\sim MR^2",
    },
  ]}
/>

### Derivation 2: Choose a mass element before integrating

The integral is only useful after the axis, coordinate, and density model are chosen.

<PhysicsDerivation
  items={[
    {
      label: "Linear object",
      tex: "dm=\\lambda\\,dx",
    },
    {
      label: "Volume object",
      tex: "dm=\\rho\\,dV",
    },
    {
      label: "Uniform rod about center",
      tex: "I=\\int_{-L/2}^{L/2}x^2\\frac{M}{L}\\,dx=\\frac1{12}ML^2",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Discrete masses" tex="I=\sum_i m_ir_{\perp i}^2" />

<Equation label="Continuous body" tex="I=\int r_\perp^2\,dm" />

<Equation label="Uniform rod center" tex="I_{\mathrm{rod,cm}}=\frac1{12}ML^2" />

<Equation label="Thin hoop center" tex="I_{\mathrm{hoop}}=MR^2" />

<Equation label="Solid disk center" tex="I_{\mathrm{disk}}=\frac12MR^2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Three point masses \\(2.0\\,\\mathrm{kg}\\), \\(1.0\\,\\mathrm{kg}\\), and \\(3.0\\,\\mathrm{kg}\\) lie \\(0.20\\,\\mathrm{m}\\), \\(0.50\\,\\mathrm{m}\\), and \\(0.40\\,\\mathrm{m}\\) from an axis. Find \\(I\\).",
      answer: "\\[I=2.0(0.20^2)+1.0(0.50^2)+3.0(0.40^2)=0.81\\,\\mathrm{kg\\,m^2}\\]",
    },
    {
      title: "Example 2",
      question: "Derive \\(I\\) for a uniform rod of length \\(L\\) and mass \\(M\\) about its center.",
      answer: "Use \\(dm=\\frac{M}{L}dx\\): \\[I=\\int_{-L/2}^{L/2}x^2\\frac{M}{L}\\,dx=\\frac1{12}ML^2\\]",
    },
  ]}
/>

## Checks

- Distances are squared, so far-away mass dominates.
- The axis choice changes \\(r_\\perp\\) and therefore \\(I\\).
- Units must be kg m^2.
- A result much larger than \\(MR^2\\) usually signals a distance error.`;
