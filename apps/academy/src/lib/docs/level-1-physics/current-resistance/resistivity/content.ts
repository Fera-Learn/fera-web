export const content = String.raw`## Principle

Resistivity describes how strongly a material opposes current density for a given electric field.

## Notation

<Notation
  items={[
    { symbol: "\\rho", meaning: "resistivity", unit: "\\Omega\\,m" },
    { symbol: "\\sigma", meaning: "conductivity", unit: "S m^{-1}" },
    { symbol: "\\vec E", meaning: "electric field inside the material", unit: "V m^{-1}" },
    { symbol: "\\vec J", meaning: "current density", unit: "A m^{-2}" },
    { symbol: "\\rho_0", meaning: "resistivity at reference temperature", unit: "\\Omega\\,m" },
    { symbol: "\\alpha", meaning: "temperature coefficient of resistivity", unit: "K^{-1}" },
    { symbol: "T", meaning: "temperature", unit: "K or ^\\circ C" },
  ]}
/>

## Method

### Derivation 1: Relate field to current density

In an ohmic material, a larger internal electric field drives a proportionally larger current density.

<PhysicsDerivation
  items={[
    {
      label: "Conductivity form",
      tex: "\\vec J=\\sigma\\vec E",
    },
    {
      label: "Resistivity definition",
      tex: "\\rho=\\frac{1}{\\sigma}",
    },
    {
      label: "Resistivity form",
      tex: "\\vec E=\\rho\\vec J",
    },
  ]}
/>

### Derivation 2: Connect material behavior to a wire

For a uniform wire, the field is potential drop per length and current density is current per area.

<PhysicsDerivation
  items={[
    {
      label: "Uniform field",
      tex: "E=\\frac{V}{L}",
    },
    {
      label: "Uniform current density",
      tex: "J=\\frac{I}{A}",
    },
    {
      label: "Substitute into \\(E=\\rho J\\)",
      tex: "\\frac{V}{L}=\\rho\\frac{I}{A}",
    },
    {
      label: "Wire relation",
      tex: "\\frac{V}{I}=\\rho\\frac{L}{A}",
    },
  ]}
/>

### Derivation 3: Temperature dependence

For many metals over modest temperature ranges, resistivity is modeled as changing approximately linearly with temperature.

<PhysicsDerivation
  items={[
    {
      label: "Linear model",
      tex: "\\rho(T)=\\rho_0\\left[1+\\alpha(T-T_0)\\right]",
    },
    {
      label: "Positive coefficient",
      tex: "\\alpha>0\\Rightarrow\\rho\\ \\text{increases with }T",
    },
  ]}
/>

## Rules

These are the compact resistivity relations.

<Equation label="Ohmic material" tex="\vec E=\rho\vec J" />

<Equation label="Conductivity" tex="\sigma=\frac{1}{\rho},\qquad \vec J=\sigma\vec E" />

<Equation label="Uniform wire" tex="\frac{V}{I}=\rho\frac{L}{A}" />

<Equation label="Temperature model" tex="\rho(T)=\rho_0[1+\alpha(T-T_0)]" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A material has \\(\\rho=2.0\\times10^{-8}\\,\\Omega\\,\\mathrm{m}\\) and current density \\(3.0\\times10^6\\,\\mathrm{A\\,m^{-2}}\\). Find the required electric field.",
      answer: "\\[E=\\rho J=(2.0\\times10^{-8})(3.0\\times10^6)=6.0\\times10^{-2}\\,\\mathrm{V\\,m^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A wire is made longer with the same material and cross-section. What happens to \\(V/I\\)?",
      answer: "For a uniform wire, \\(V/I=\\rho L/A\\). Increasing \\(L\\) increases \\(V/I\\) in direct proportion.",
    },
  ]}
/>

## Checks

- Resistivity is a material property; resistance also depends on geometry.
- Conductivity is the reciprocal of resistivity.
- Use cross-sectional area, not surface area, in \\(J=I/A\\).
- The linear temperature model is approximate and material-dependent.`;
