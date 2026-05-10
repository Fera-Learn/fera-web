export const content = String.raw`## Principle

Maxwell's equations connect electric and magnetic fields to charge, current, and changing flux.

## Notation

<Notation
  items={[
    { symbol: "\\vec E", meaning: "electric field", unit: "V m^{-1}" },
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "q_{\\mathrm{enc}}", meaning: "enclosed charge", unit: "C" },
    { symbol: "I_{\\mathrm{enc}}", meaning: "enclosed conduction current", unit: "A" },
    { symbol: "\\Phi_E", meaning: "electric flux", unit: "V m" },
    { symbol: "\\Phi_B", meaning: "magnetic flux", unit: "Wb" },
  ]}
/>

## Method

### Derivation 1: Sources of electric field

Gauss's law says electric flux through a closed surface measures enclosed charge.

<PhysicsDerivation
  items={[
    {
      label: "Electric Gauss law",
      tex: "\\oint\\vec E\\cdot d\\vec A=\\frac{q_{\\mathrm{enc}}}{\\epsilon_0}",
    },
  ]}
/>

### Derivation 2: No magnetic monopoles

Magnetic field lines have no starts or ends, so net magnetic flux through a closed surface is zero.

<PhysicsDerivation
  items={[
    {
      label: "Magnetic Gauss law",
      tex: "\\oint\\vec B\\cdot d\\vec A=0",
    },
  ]}
/>

### Derivation 3: Fields induce fields

Changing magnetic flux creates circulating electric field; current and changing electric flux create circulating magnetic field.

<PhysicsDerivation
  items={[
    {
      label: "Faraday law",
      tex: "\\oint\\vec E\\cdot d\\vec\\ell=-\\frac{d\\Phi_B}{dt}",
    },
    {
      label: "Ampere-Maxwell law",
      tex: "\\oint\\vec B\\cdot d\\vec\\ell=\\mu_0I_{\\mathrm{enc}}+\\mu_0\\epsilon_0\\frac{d\\Phi_E}{dt}",
    },
  ]}
/>

## Rules

These are Maxwell's equations in integral form.

<Equation label="Gauss electric" tex="\oint\vec E\cdot d\vec A=\frac{q_{\mathrm{enc}}}{\epsilon_0}" />

<Equation label="Gauss magnetic" tex="\oint\vec B\cdot d\vec A=0" />

<Equation label="Faraday law" tex="\oint\vec E\cdot d\vec\ell=-\frac{d\Phi_B}{dt}" />

<Equation label="Ampere-Maxwell" tex="\oint\vec B\cdot d\vec\ell=\mu_0I_{\mathrm{enc}}+\mu_0\epsilon_0\frac{d\Phi_E}{dt}" />

<Equation label="Wave speed" tex="c=\frac{1}{\sqrt{\mu_0\epsilon_0}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Which Maxwell equation says there are no isolated magnetic charges?",
      answer: "Gauss's law for magnetism: \\(\\oint\\vec B\\cdot d\\vec A=0\\).",
    },
    {
      title: "Example 2",
      question: "Which two equations show that changing fields can create other fields?",
      answer: "Faraday's law shows changing magnetic flux creates circulating electric field. Ampere-Maxwell law shows changing electric flux creates circulating magnetic field.",
    },
  ]}
/>

## Checks

- Closed surface integrals use \\(d\\vec A\\); closed path integrals use \\(d\\vec\\ell\\).
- The minus sign belongs to Faraday's law.
- Displacement current is the changing electric flux term in Ampere-Maxwell law.
- In vacuum, the constants imply electromagnetic waves travel at \\(c\\).`;
