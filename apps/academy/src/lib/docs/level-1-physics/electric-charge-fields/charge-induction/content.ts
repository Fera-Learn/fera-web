export const content = String.raw`## Principle

Charge induction uses an external electric field to separate charge, and grounding can turn that separation into a net charge.

## Notation

<Notation
  items={[
    { symbol: "Q_{\\mathrm{obj}}", meaning: "net charge of the object", unit: "C" },
    { symbol: "Q_{\\mathrm{near}}", meaning: "charge shifted toward an external charged body", unit: "C" },
    { symbol: "Q_{\\mathrm{far}}", meaning: "charge shifted away from an external charged body", unit: "C" },
    { symbol: "\\vec E_{\\mathrm{ext}}", meaning: "external electric field", unit: "N C^{-1}" },
    { symbol: "\\Delta Q_{\\mathrm{ground}}", meaning: "charge transferred through a ground connection", unit: "C" },
  ]}
/>

## Method

### Derivation 1: Separate charge without changing net charge

Bring a charged body near a neutral conductor. Free charges in the conductor move in response, but if the conductor is isolated, its total charge remains zero.

<PhysicsDerivation
  items={[
    {
      label: "Neutral start",
      tex: "Q_{\\mathrm{obj}}=0",
    },
    {
      label: "Separation",
      tex: "Q_{\\mathrm{near}}+Q_{\\mathrm{far}}=0",
    },
    {
      label: "No contact",
      tex: "\\Delta Q_{\\mathrm{obj}}=0",
      note: "The charge has redistributed, not entered or left the object.",
    },
  ]}
/>

### Derivation 2: Use grounding to change net charge

A ground connection allows charge to cross the object boundary. The sign left behind is determined by which sign is repelled or attracted by the external charged body.

<PhysicsDerivation
  items={[
    {
      label: "Ground transfer",
      tex: "Q_{\\mathrm{obj,final}}=-\\Delta Q_{\\mathrm{ground}}",
    },
    {
      label: "Positive external body",
      tex: "e^-\\ \\text{is attracted from ground to object}",
    },
    {
      label: "Final sign",
      tex: "Q_{\\mathrm{obj}}<0\\quad\\text{after ground is removed}",
    },
  ]}
/>

## Rules

These rules separate redistribution from charging.

<Equation label="Isolated induction" tex="\Delta Q_{\mathrm{obj}}=0" />

<Equation label="Separated neutral charges" tex="Q_{\mathrm{near}}=-Q_{\mathrm{far}}" />

<Equation label="Grounding changes charge" tex="\Delta Q_{\mathrm{obj}}\ne0\quad\text{only while a conducting path is present}" />

<Equation label="Opposite final sign" tex="\text{charging by induction leaves sign opposite the nearby external charge}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A negative rod is brought near an isolated neutral metal sphere. Which side of the sphere becomes positive?",
      answer: "Electrons in the sphere are repelled by the negative rod, so the side nearer the rod is electron-deficient and becomes positive.",
    },
    {
      title: "Example 2",
      question: "A positive rod is held near a neutral conductor while the conductor is grounded, then the ground is removed before the rod. What sign remains on the conductor?",
      answer: "Electrons are attracted from ground onto the conductor. After the ground is removed, those extra electrons remain, so the conductor is negatively charged.",
    },
  ]}
/>

## Checks

- Induced separation in an isolated neutral conductor does not change its net charge.
- Grounding matters only while the connection exists.
- Remove the ground before removing the external charged body when charging by induction.
- The final induced net charge has the sign opposite the external body used during grounding.`;
