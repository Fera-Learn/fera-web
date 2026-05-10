export const content = String.raw`## Principle

In electrostatic equilibrium, conductor charge arranges itself so the electric field inside conducting material is zero.

## Notation

<Notation
  items={[
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "\\sigma", meaning: "surface charge density", unit: "C m^{-2}" },
    { symbol: "q_{\\mathrm{enc}}", meaning: "charge enclosed by a Gaussian surface", unit: "C" },
    { symbol: "q,Q", meaning: "cavity charge and conductor net charge", unit: "C" },
    { symbol: "\\hat n", meaning: "outward normal from the conductor", unit: "1" },
    { symbol: "\\epsilon_0", meaning: "permittivity of free space", unit: "C^{2} N^{-1} m^{-2}" },
  ]}
/>

## Method

### Derivation 1: Interior field of conducting material

Free charge in a conductor moves until there is no net electric force on charges inside the material.

<PhysicsDerivation
  items={[
    {
      label: "Electric force",
      tex: "\\vec F=q\\vec E",
    },
    {
      label: "Equilibrium condition",
      tex: "\\vec F=0\\quad\\text{for free charge at rest}",
    },
    {
      label: "Interior field",
      tex: "\\vec E=0\\quad\\text{inside conducting material}",
    },
  ]}
/>

### Derivation 2: Excess charge lies on surfaces

Place a Gaussian surface entirely inside the conducting material. Since \\(\vec E=0\\) there, its flux is zero.

<PhysicsDerivation
  items={[
    {
      label: "Interior flux",
      tex: "\\oint\\vec E\\cdot d\\vec A=0",
    },
    {
      label: "Gauss's law",
      tex: "q_{\\mathrm{enc}}=\\epsilon_0\\oint\\vec E\\cdot d\\vec A",
    },
    {
      label: "No bulk excess",
      tex: "q_{\\mathrm{enc}}=0\\quad\\text{within conducting material}",
    },
  ]}
/>

### Derivation 3: Field just outside a conductor

Use a thin pillbox that crosses the surface. The inner cap is inside the conductor, where the field is zero.

<PhysicsDerivation
  items={[
    {
      label: "Pillbox flux",
      tex: "\\Phi_E=E_\\perp A",
    },
    {
      label: "Enclosed surface charge",
      tex: "q_{\\mathrm{enc}}=\\sigma A",
    },
    {
      label: "Surface field",
      tex: "E_\\perp=\\frac{\\sigma}{\\epsilon_0}",
    },
  ]}
/>

## Rules

These are conductor rules in electrostatic equilibrium.

<Equation label="Conductor interior" tex="\vec E=0\quad\text{inside conducting material}" />

<Equation label="No bulk excess" tex="q_{\mathrm{enc}}=0\quad\text{for a Gaussian surface in the material}" />

<Equation label="Surface field" tex="\vec E_{\mathrm{outside}}=\frac{\sigma}{\epsilon_0}\hat n" />

<Equation label="Cavity charge" tex="q_{\mathrm{inner}}=-q_{\mathrm{cavity}}" />

<Equation label="Outer surface" tex="q_{\mathrm{outer}}=Q_{\mathrm{conductor}}+q_{\mathrm{cavity}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An isolated conducting sphere carries charge \\(+Q\\). Where is the excess charge?",
      answer: "In electrostatic equilibrium, the excess charge lies on the outer surface. The field inside the conducting material is zero.",
    },
    {
      title: "Example 2",
      question: "A charge \\(+q\\) is placed inside a cavity in a neutral conductor. What charges appear on the conductor surfaces?",
      answer: "The inner cavity surface has total charge \\(-q\\), so a Gaussian surface in the conductor encloses zero net charge. Since the conductor is neutral overall, the outer surface has total charge \\(+q\\).",
    },
  ]}
/>

## Checks

- \\(\vec E=0\\) applies inside conducting material, not automatically inside an empty cavity.
- Surface charge density can vary over a nonspherical conductor.
- The field just outside a conductor is normal to the surface.
- Cavity problems use net charge on each surface, not necessarily uniform charge density.`;
