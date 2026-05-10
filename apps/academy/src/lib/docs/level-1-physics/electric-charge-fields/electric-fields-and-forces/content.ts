export const content = String.raw`## Principle

An electric field is the force per unit positive test charge at a point in space.

## Notation

<Notation
  items={[
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "q_0", meaning: "small positive test charge", unit: "C" },
    { symbol: "q", meaning: "charge placed in the field", unit: "C" },
    { symbol: "\\vec F", meaning: "electric force", unit: "N" },
    { symbol: "\\vec a", meaning: "acceleration of a charged particle", unit: "m s^{-2}" },
  ]}
/>

## Method

### Derivation 1: Define the field at a point

To describe the source charges without building a new force problem for every possible test charge, divide the force on a small positive test charge by that test charge.

<PhysicsDerivation
  items={[
    {
      label: "Force on test charge",
      tex: "\\vec F_0=q_0\\vec E",
    },
    {
      label: "Field definition",
      tex: "\\vec E=\\frac{\\vec F_0}{q_0}",
      note: "\\(q_0\\) is taken small enough that it does not rearrange the source charges.",
    },
    {
      label: "Field direction",
      tex: "\\vec E\\ \\text{points in the force direction on a positive test charge}",
    },
  ]}
/>

### Derivation 2: Put any charge in the field

Once the field is known, the force on a charge is proportional to its charge. Negative charges accelerate opposite the field direction.

<PhysicsDerivation
  items={[
    {
      label: "Force law",
      tex: "\\vec F=q\\vec E",
    },
    {
      label: "Newton's second law",
      tex: "m\\vec a=q\\vec E",
    },
    {
      label: "Charged-particle acceleration",
      tex: "\\vec a=\\frac{q}{m}\\vec E",
    },
  ]}
/>

## Rules

These are the compact field-force relations.

<Equation label="Field definition" tex="\vec E=\frac{\vec F_0}{q_0}" />

<Equation label="Force from field" tex="\vec F=q\vec E" />

<Equation label="Field units" tex="1\,\mathrm{N\,C^{-1}}=1\,\mathrm{N}/\mathrm{C}" />

<Equation label="Particle acceleration" tex="\vec a=\frac{q}{m}\vec E" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(+4.0\\,\\mathrm{nC}\\) charge experiences a \\(2.0\\times10^{-5}\\,\\mathrm{N}\\) force to the right. Find the electric field.",
      answer: "\\[E=\\frac{F}{q}=\\frac{2.0\\times10^{-5}}{4.0\\times10^{-9}}=5.0\\times10^3\\,\\mathrm{N\\,C^{-1}}\\] The field points right because the charge is positive.",
    },
    {
      title: "Example 2",
      question: "A negative charge is placed in a uniform field directed upward. What is the force direction?",
      answer: "Because \\(\\vec F=q\\vec E\\) and \\(q<0\\), the force is opposite the field direction: downward.",
    },
  ]}
/>

## Checks

- Field direction is defined by the force on a positive test charge.
- A negative charge feels force opposite \\(\\vec E\\).
- The field exists at a point even before a test charge is placed there.
- Electric field is a vector, so components and signs matter.`;
