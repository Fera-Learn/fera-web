export const content = String.raw`## Principle

The displacement field separates free charge from bound polarization charge in dielectric problems.

## Notation

<Notation
  items={[
    { symbol: "\\vec D", meaning: "electric displacement field", unit: "C m^{-2}" },
    { symbol: "\\vec E", meaning: "electric field", unit: "V m^{-1}" },
    { symbol: "\\vec P", meaning: "polarization", unit: "C m^{-2}" },
    { symbol: "q_{\\mathrm f}", meaning: "free charge enclosed", unit: "C" },
    { symbol: "\\epsilon", meaning: "material permittivity", unit: "F m^{-1}" },
    { symbol: "\\kappa", meaning: "dielectric constant", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Define the displacement field

Polarization accounts for bound charge. The displacement field groups the vacuum field and polarization so Gauss's law can count free charge only.

<PhysicsDerivation
  items={[
    {
      label: "Displacement definition",
      tex: "\\vec D=\\epsilon_0\\vec E+\\vec P",
    },
    {
      label: "Material Gauss law",
      tex: "\\oint \\vec D\\cdot d\\vec A=q_{\\mathrm f}",
    },
  ]}
/>

### Derivation 2: Linear dielectric form

For a simple linear dielectric, polarization is proportional to the electric field, so \\(\vec D\\) is also proportional to \\(\vec E\\).

<PhysicsDerivation
  items={[
    {
      label: "Linear relation",
      tex: "\\vec D=\\epsilon\\vec E",
    },
    {
      label: "Permittivity",
      tex: "\\epsilon=\\kappa\\epsilon_0",
    },
    {
      label: "Electric field",
      tex: "\\vec E=\\frac{\\vec D}{\\epsilon}",
    },
  ]}
/>

### Derivation 3: Filled parallel-plate capacitor

For plates with free surface charge density \\(\sigma_\{\mathrm f\}\\), a pillbox enclosing one plate gives the displacement field between the plates.

<PhysicsDerivation
  items={[
    {
      label: "Free charge",
      tex: "q_{\\mathrm f}=\\sigma_{\\mathrm f}A",
    },
    {
      label: "Displacement flux",
      tex: "DA=q_{\\mathrm f}",
    },
    {
      label: "Displacement field",
      tex: "D=\\sigma_{\\mathrm f}",
    },
    {
      label: "Dielectric field",
      tex: "E=\\frac{\\sigma_{\\mathrm f}}{\\kappa\\epsilon_0}",
    },
  ]}
/>

## Rules

These are the material-field relations.

<Equation label="Displacement field" tex="\vec D=\epsilon_0\vec E+\vec P" />

<Equation label="Material Gauss law" tex="\oint \vec D\cdot d\vec A=q_{\mathrm f}" />

<Equation label="Linear dielectric" tex="\vec D=\epsilon\vec E" />

<Equation label="Permittivity" tex="\epsilon=\kappa\epsilon_0" />

<Equation label="Plate field" tex="E=\frac{\sigma_{\mathrm f}}{\kappa\epsilon_0}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A dielectric-filled parallel-plate capacitor has free surface charge density \\(3.0\\times10^{-6}\\,\\mathrm{C\\,m^{-2}}\\). Find \\(D\\).",
      answer: "Between the plates, \\(D=\\sigma_{\\mathrm f}=3.0\\times10^{-6}\\,\\mathrm{C\\,m^{-2}}\\).",
    },
    {
      title: "Example 2",
      question: "If \\(\\kappa=4.0\\), find the electric field for the same free surface charge density.",
      answer: "\\[E=\\frac{D}{\\kappa\\epsilon_0}=\\frac{3.0\\times10^{-6}}{(4.0)(8.85\\times10^{-12})}=8.5\\times10^4\\,\\mathrm{V\\,m^{-1}}\\]",
    },
  ]}
/>

## Checks

- \\(\vec D\\) flux counts free charge, not total free-plus-bound charge.
- \\(\vec E\\) is the field that acts on charges and appears in potential differences.
- In a linear dielectric, larger \\(\kappa\\) gives smaller \\(E\\) for the same free charge.
- At a material boundary, normal \\(\vec D\\) changes only if free surface charge is present.`;
