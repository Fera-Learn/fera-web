export const content = String.raw`## Principle

Conductors and insulators differ by how freely charge can move through the material.

## Notation

<Notation
  items={[
    { symbol: "q_{\\mathrm{free}}", meaning: "mobile charge in a material", unit: "C" },
    { symbol: "q_{\\mathrm{bound}}", meaning: "charge bound to atoms or molecules", unit: "C" },
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "\\vec F", meaning: "electric force on a charge", unit: "N" },
    { symbol: "\\sigma", meaning: "surface charge density", unit: "C m^{-2}" },
  ]}
/>

## Method

### Derivation 1: Use charge mobility

The same electric force law acts in both material types, but the response differs because the charges have different freedom to move.

<PhysicsDerivation
  items={[
    {
      label: "Force on a charge",
      tex: "\\vec F=q\\vec E",
    },
    {
      label: "Conductor response",
      tex: "q_{\\mathrm{free}}\\ \\text{moves through the material}",
    },
    {
      label: "Insulator response",
      tex: "q_{\\mathrm{bound}}\\ \\text{shifts only locally}",
    },
  ]}
/>

### Derivation 2: Electrostatic equilibrium in a conductor

If a conductor is at rest electrostatically, its free charges have stopped drifting. That is only possible when the net electric force on free charges inside the conducting material is zero.

<PhysicsDerivation
  items={[
    {
      label: "No drift in equilibrium",
      tex: "\\vec F_{\\mathrm{free}}=0",
    },
    {
      label: "Use electric force",
      tex: "q\\vec E=0",
    },
    {
      label: "Interior field",
      tex: "\\vec E=0\\quad\\text{inside conducting material}",
    },
    {
      label: "Excess charge",
      tex: "Q_{\\mathrm{excess}}\\ \\text{resides on the surface}",
    },
  ]}
/>

## Rules

These are the material rules used in electrostatic problems.

<Equation label="Charge force" tex="\vec F=q\vec E" />

<Equation label="Conductor equilibrium" tex="\vec E=0\quad\text{inside conducting material}" />

<Equation label="Surface charge" tex="\sigma=\frac{\Delta Q}{\Delta A}" />

<Equation label="Insulator response" tex="\text{bound charges polarize locally rather than flowing through the body}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A neutral metal sphere is placed in an external electric field and left to settle. What is the field inside the metal?",
      answer: "Free charges move until the interior electric force vanishes. In electrostatic equilibrium, \\(\\vec E=0\\) inside the conducting material.",
    },
    {
      title: "Example 2",
      question: "Why does rubbing an insulating rod leave charge near the rubbed region?",
      answer: "In an insulator, charge is not free to move through the whole material, so transferred charge can remain localized instead of spreading over the entire object.",
    },
  ]}
/>

## Checks

- Conductors have mobile charge; insulators can still contain charged particles.
- \\(\\vec E=0\\) applies inside conducting material in electrostatic equilibrium, not inside every cavity or nearby space automatically.
- Excess charge on an isolated conductor moves to surfaces.
- Polarization can occur without changing the net charge of the object.`;
