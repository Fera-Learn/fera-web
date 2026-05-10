export const content = String.raw`## Principle

Induction occurs when changing magnetic flux drives charge around a closed conducting path.

## Notation

<Notation
  items={[
    { symbol: "\\Phi_B", meaning: "magnetic flux through a surface", unit: "Wb" },
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "A", meaning: "surface area", unit: "m^{2}" },
    { symbol: "\\theta", meaning: "angle between \\(\\vec B\\) and area normal", unit: "rad" },
    { symbol: "\\mathcal E", meaning: "induced emf around a loop", unit: "V" },
    { symbol: "I", meaning: "induced current", unit: "A" },
  ]}
/>

## Method

### Derivation 1: Define what changes

The useful scalar is magnetic flux: field component through a chosen surface, multiplied by area.

<PhysicsDerivation
  items={[
    {
      label: "Flux definition",
      tex: "\\Phi_B=\\int\\vec B\\cdot d\\vec A",
    },
    {
      label: "Uniform field",
      tex: "\\Phi_B=BA\\cos\\theta",
    },
  ]}
/>

### Derivation 2: Identify induction

An induced emf is observed when the flux through a conducting loop changes. The change may come from changing field, area, orientation, or the circuit crossing field lines.

<PhysicsDerivation
  items={[
    {
      label: "Flux change",
      tex: "\\Delta\\Phi_B\\ne0",
    },
    {
      label: "Induced emf",
      tex: "\\mathcal E\\ne0\\quad\\text{while flux changes}",
    },
    {
      label: "Closed circuit",
      tex: "I=\\frac{\\mathcal E}{R}",
    },
  ]}
/>

### Derivation 3: No change, no induction

A steady flux through a fixed loop gives no induced emf, even if the loop already sits in a magnetic field.

<PhysicsDerivation
  items={[
    {
      label: "Steady flux",
      tex: "\\frac{d\\Phi_B}{dt}=0",
    },
    {
      label: "No induced emf",
      tex: "\\mathcal E=0",
    },
  ]}
/>

## Rules

These observations prepare Faraday's law.

<Equation label="Magnetic flux" tex="\Phi_B=\int\vec B\cdot d\vec A" />

<Equation label="Uniform flux" tex="\Phi_B=BA\cos\theta" />

<Equation label="Closed circuit" tex="I=\frac{\mathcal E}{R}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A fixed loop sits in a steady uniform magnetic field. Is an emf induced?",
      answer: "No. The flux is nonzero, but it is not changing, so no induction is observed.",
    },
    {
      title: "Example 2",
      question: "A magnet is pushed toward a conducting loop. What changes?",
      answer: "The magnetic field through the loop changes, so \\(\\Phi_B\\) changes and an emf is induced while the magnet moves.",
    },
  ]}
/>

## Checks

- Flux through a loop can change even if the loop area stays fixed.
- A magnetic field alone is not enough; the flux must change.
- The induced current exists only if the conducting path is closed.
- The sign and direction come from Lenz's law, not from flux magnitude alone.`;
