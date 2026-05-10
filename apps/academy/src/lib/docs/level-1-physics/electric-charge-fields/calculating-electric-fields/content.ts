export const content = String.raw`## Principle

Electric fields are calculated by adding the vector field contributions from each source charge.

## Notation

<Notation
  items={[
    { symbol: "Q_i", meaning: "source point charge", unit: "C" },
    { symbol: "\\vec r", meaning: "field point position", unit: "m" },
    { symbol: "\\vec r_i", meaning: "source charge position", unit: "m" },
    { symbol: "\\vec R_i", meaning: "vector from source \\(i\\) to field point", unit: "m" },
    { symbol: "\\hat R_i", meaning: "unit vector from source \\(i\\) to field point", unit: "1" },
    { symbol: "dq", meaning: "small source charge element", unit: "C" },
    { symbol: "\\lambda", meaning: "linear charge density", unit: "C m^{-1}" },
  ]}
/>

## Method

### Derivation 1: Field from one point charge

Start from Coulomb's force on a positive test charge and divide by the test charge.

<PhysicsDerivation
  items={[
    {
      label: "Source-to-field vector",
      tex: "\\vec R=\\vec r-\\vec r_Q",
    },
    {
      label: "Force on test charge",
      tex: "\\vec F=k\\frac{Qq_0}{R^2}\\hat R",
    },
    {
      label: "Divide by test charge",
      tex: "\\vec E=\\frac{\\vec F}{q_0}=k\\frac{Q}{R^2}\\hat R",
    },
  ]}
/>

### Derivation 2: Add point-charge fields

The electric field is a vector. Each source creates a field at the same point, and the net field is the vector sum.

<PhysicsDerivation
  items={[
    {
      label: "Single source contribution",
      tex: "\\vec E_i=k\\frac{Q_i}{R_i^2}\\hat R_i",
    },
    {
      label: "Superposition",
      tex: "\\vec E_{\\mathrm{net}}=\\sum_i\\vec E_i",
    },
    {
      label: "Components",
      tex: "\\vec E_{\\mathrm{net}}=(\\sum E_x)\\hat\\imath+(\\sum E_y)\\hat\\jmath",
    },
  ]}
/>

### Derivation 3: Replace a sum by an integral

For a continuous charge distribution, split the source into small charge elements and sum their fields by integration.

<PhysicsDerivation
  items={[
    {
      label: "Small contribution",
      tex: "d\\vec E=k\\frac{dq}{R^2}\\hat R",
    },
    {
      label: "Line element",
      tex: "dq=\\lambda\\,dl",
    },
    {
      label: "Continuous field",
      tex: "\\vec E=\\int k\\frac{dq}{R^2}\\hat R",
    },
  ]}
/>

## Rules

These are the compact field-calculation tools.

<Equation label="Point-charge field" tex="\vec E=k\frac{Q}{R^2}\hat R" />

<Equation label="Field superposition" tex="\vec E_{\mathrm{net}}=\sum_i \vec E_i" />

<Equation label="Continuous source" tex="d\vec E=k\frac{dq}{R^2}\hat R" />

<Equation label="Line charge" tex="dq=\lambda\,dl" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the field magnitude \\(0.30\\,\\mathrm{m}\\) from a \\(+6.0\\,\\mathrm{nC}\\) point charge.",
      answer: "\\[E=k\\frac{|Q|}{r^2}=\\frac{(8.99\\times10^9)(6.0\\times10^{-9})}{0.30^2}=6.0\\times10^2\\,\\mathrm{N\\,C^{-1}}\\] The field points away from the positive charge.",
    },
    {
      title: "Example 2",
      question: "At the midpoint between equal positive charges, what is the net electric field?",
      answer: "The two field magnitudes are equal, but the directions are opposite at the midpoint. The vector sum is \\(\\vec E=0\\).",
    },
  ]}
/>

## Checks

- The unit vector points from each source charge to the field point.
- A negative source charge reverses the direction of its field contribution.
- Add fields as vectors, not as unsigned magnitudes.
- Symmetry can cancel components before doing algebra.`;
