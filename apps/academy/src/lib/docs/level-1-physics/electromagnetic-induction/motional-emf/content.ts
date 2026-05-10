export const content = String.raw`## Principle

Motional emf appears when magnetic force separates charge in a conductor moving through a magnetic field.

## Notation

<Notation
  items={[
    { symbol: "\\mathcal E", meaning: "motional emf", unit: "V" },
    { symbol: "B", meaning: "magnetic field magnitude", unit: "T" },
    { symbol: "\\ell", meaning: "length of conductor crossing field lines", unit: "m" },
    { symbol: "v", meaning: "speed perpendicular to the conductor and field", unit: "m s^{-1}" },
    { symbol: "R", meaning: "circuit resistance", unit: "\\Omega" },
    { symbol: "I", meaning: "induced current", unit: "A" },
  ]}
/>

## Method

### Derivation 1: Magnetic force separates charge

Charges in the moving rod feel magnetic force \\(q\\vec v\\times\\vec B\\). Charge separation creates an electric field until forces balance.

<PhysicsDerivation
  items={[
    {
      label: "Force balance",
      tex: "qE=qvB",
    },
    {
      label: "Internal field",
      tex: "E=vB",
    },
    {
      label: "emf across rod",
      tex: "\\mathcal E=E\\ell=B\\ell v",
    },
  ]}
/>

### Derivation 2: Flux-change view

A rod sliding on rails changes the loop area at rate \\(dA/dt=\\ell v\\).

<PhysicsDerivation
  items={[
    {
      label: "Area rate",
      tex: "\\frac{dA}{dt}=\\ell v",
    },
    {
      label: "Flux rate",
      tex: "\\left|\\frac{d\\Phi_B}{dt}\\right|=B\\ell v",
    },
    {
      label: "Same emf",
      tex: "|\\mathcal E|=B\\ell v",
    },
  ]}
/>

### Derivation 3: Mechanical power

With a closed circuit, magnetic drag requires external work to maintain constant speed.

<PhysicsDerivation
  items={[
    {
      label: "Current",
      tex: "I=\\frac{B\\ell v}{R}",
    },
    {
      label: "Magnetic force",
      tex: "F=I\\ell B",
    },
    {
      label: "Power balance",
      tex: "Fv=I^2R",
    },
  ]}
/>

## Rules

These forms assume \\(\\vec v\\), \\(\\vec B\\), and the rod length are mutually perpendicular.

<Equation label="Motional emf" tex="|\mathcal E|=B\ell v" />

<Equation label="Induced current" tex="I=\frac{B\ell v}{R}" />

<Equation label="Magnetic drag" tex="F=I\ell B" />

<Equation label="Power balance" tex="Fv=I^2R" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(0.40\\,\\mathrm{m}\\) rod moves at \\(3.0\\,\\mathrm{m\\,s^{-1}}\\) perpendicular to a \\(0.50\\,\\mathrm{T}\\) field. Find \\(|\\mathcal E|\\).",
      answer: "\\[|\\mathcal E|=B\\ell v=(0.50)(0.40)(3.0)=0.60\\,\\mathrm{V}\\]",
    },
    {
      title: "Example 2",
      question: "If the circuit resistance is \\(2.0\\,\\Omega\\), find the induced current.",
      answer: "\\[I=\\frac{\\mathcal E}{R}=\\frac{0.60}{2.0}=0.30\\,\\mathrm{A}\\]",
    },
  ]}
/>

## Checks

- Only the velocity component perpendicular to the rod and field contributes.
- The rod polarity comes from \\(q\\vec v\\times\\vec B\\) for positive charge.
- A closed circuit is needed for current, but not for charge separation/emf.
- Maintaining constant speed requires external power when current flows.`;
