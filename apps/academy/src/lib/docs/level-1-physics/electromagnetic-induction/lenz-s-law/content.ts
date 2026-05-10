export const content = String.raw`## Principle

Lenz's law gives the induced current direction: its magnetic effect opposes the flux change.

## Notation

<Notation
  items={[
    { symbol: "\\Delta\\Phi_B", meaning: "change in magnetic flux", unit: "Wb" },
    { symbol: "\\vec B_{\\mathrm{ext}}", meaning: "external magnetic field through the loop", unit: "T" },
    { symbol: "\\vec B_{\\mathrm{ind}}", meaning: "field produced by the induced current", unit: "T" },
    { symbol: "I", meaning: "induced current", unit: "A" },
    { symbol: "\\mathcal E", meaning: "induced emf", unit: "V" },
  ]}
/>

## Method

### Derivation 1: State the opposition

The loop responds to the change in flux, not to the existing flux by itself.

<PhysicsDerivation
  items={[
    {
      label: "Increasing flux",
      tex: "\\frac{d\\Phi_B}{dt}>0\\quad\\Rightarrow\\quad \\vec B_{\\mathrm{ind}}\\text{ opposes the positive flux direction}",
    },
    {
      label: "Decreasing flux",
      tex: "\\frac{d\\Phi_B}{dt}<0\\quad\\Rightarrow\\quad \\vec B_{\\mathrm{ind}}\\text{ supports the original flux direction}",
    },
  ]}
/>

### Derivation 2: Connect field direction to current direction

Once the induced field direction is known, use the right-hand rule for a current loop.

<PhysicsDerivation
  items={[
    {
      label: "Loop field",
      tex: "\\text{fingers curl with }I,\\quad \\text{thumb gives }\\vec B_{\\mathrm{ind}}",
    },
    {
      label: "Direction choice",
      tex: "\\vec B_{\\mathrm{ind}}\\text{ sets clockwise or counterclockwise current}",
    },
  ]}
/>

### Derivation 3: Energy check

If the induced current helped the flux change, the change would reinforce itself without external work.

<PhysicsDerivation
  items={[
    {
      label: "Opposition",
      tex: "\\mathcal E=-\\frac{d\\Phi_B}{dt}",
    },
    {
      label: "Energy consistency",
      tex: "P=I^2R\\ge0",
    },
  ]}
/>

## Rules

Use these direction rules after finding the flux change.

<Equation label="Faraday sign" tex="\mathcal E=-\frac{d\Phi_B}{dt}" />

<Equation label="Resistive power" tex="P=I^2R" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A magnetic field into the page through a loop is increasing. What direction is the induced current?",
      answer: "The induced field must point out of the page to oppose the increase into the page. By the right-hand rule, the induced current is counterclockwise.",
    },
    {
      title: "Example 2",
      question: "A magnetic field out of the page through a loop is decreasing. What direction is the induced current?",
      answer: "The loop tries to maintain out-of-page flux, so its induced field points out of the page. The current is counterclockwise.",
    },
  ]}
/>

## Checks

- Oppose the flux change, not always the external field.
- First decide whether flux into or out of the page is increasing or decreasing.
- Then use the right-hand rule for the current direction.
- The induced current direction must be consistent with energy conservation.`;
