export const content = String.raw`## Principle

Eddy currents are circulating induced currents inside bulk conductors exposed to changing magnetic flux.

## Notation

<Notation
  items={[
    { symbol: "I_{\\mathrm e}", meaning: "eddy current in a conducting path", unit: "A" },
    { symbol: "R", meaning: "effective resistance of the current path", unit: "\\Omega" },
    { symbol: "\\mathcal E", meaning: "induced emf around the path", unit: "V" },
    { symbol: "P", meaning: "thermal power dissipated", unit: "W" },
    { symbol: "\\Phi_B", meaning: "magnetic flux through a current path", unit: "Wb" },
  ]}
/>

## Method

### Derivation 1: Closed paths inside a conductor

A solid conductor contains many possible closed conducting paths. Changing flux induces emf around those paths.

<PhysicsDerivation
  items={[
    {
      label: "Induced emf",
      tex: "\\mathcal E=-\\frac{d\\Phi_B}{dt}",
    },
    {
      label: "Eddy current",
      tex: "I_{\\mathrm e}=\\frac{\\mathcal E}{R}",
    },
  ]}
/>

### Derivation 2: Heating

The induced currents dissipate energy in the conductor's resistance.

<PhysicsDerivation
  items={[
    {
      label: "Joule heating",
      tex: "P=I_{\\mathrm e}^2R",
    },
    {
      label: "emf form",
      tex: "P=\\frac{\\mathcal E^2}{R}",
    },
  ]}
/>

### Derivation 3: Magnetic braking

The eddy current's magnetic force opposes the motion that caused the flux change.

<PhysicsDerivation
  items={[
    {
      label: "Lenz direction",
      tex: "\\vec B_{\\mathrm{eddy}}\\text{ opposes the flux change}",
    },
    {
      label: "Energy path",
      tex: "W_{\\mathrm{mechanical}}\\rightarrow \\text{thermal energy}",
    },
  ]}
/>

## Rules

These relations are model-level estimates for eddy current effects.

<Equation label="Eddy current" tex="I_{\mathrm e}=\frac{\mathcal E}{R}" />

<Equation label="Heating" tex="P=I_{\mathrm e}^2R" />

<Equation label="emf heating" tex="P=\frac{\mathcal E^2}{R}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Why does a falling magnet slow down in a conducting tube?",
      answer: "The moving magnet changes flux through loops in the tube wall. Eddy currents are induced, and their magnetic effects oppose the motion. Mechanical energy becomes thermal energy in the tube.",
    },
    {
      title: "Example 2",
      question: "Why do laminated transformer cores reduce heating?",
      answer: "Laminations interrupt large current loops, increasing effective resistance and reducing eddy current paths. Smaller eddy currents mean less \\(I^2R\\) heating.",
    },
  ]}
/>

## Checks

- Eddy currents need conducting material and changing flux.
- They can be useful for braking or harmful as heating losses.
- Slotted or laminated conductors suppress large current loops.
- The direction always follows Lenz's law.`;
