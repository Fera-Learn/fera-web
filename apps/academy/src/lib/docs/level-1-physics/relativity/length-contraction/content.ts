export const content = String.raw`## Principle

An object moving relative to an observer is measured shorter along the direction of motion.

## Notation

<Notation
  items={[
    { symbol: "L_0", meaning: "proper length measured in the object's rest frame", unit: "m" },
    { symbol: "L", meaning: "length measured in a frame where the object moves", unit: "m" },
    { symbol: "v", meaning: "relative speed", unit: "m s^{-1}" },
    { symbol: "\\gamma", meaning: "Lorentz factor", unit: "" },
    { symbol: "\\Delta x", meaning: "endpoint separation in the measuring frame", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Measure both ends at once

A moving length is the distance between the two ends measured at the same time in the observer's frame.

<PhysicsDerivation
  items={[
    {
      label: "Simultaneous endpoint condition",
      tex: "\\Delta t=0",
    },
    {
      label: "Measured moving length",
      tex: "L=|\\Delta x|",
    },
  ]}
/>

### Derivation 2: Relate to proper length

The rest frame of the object measures the proper length. Transforming the simultaneous endpoint events gives the contracted length.

<PhysicsDerivation
  items={[
    {
      label: "Length contraction",
      tex: "L=\\frac{L_0}{\\gamma}",
    },
    {
      label: "Proper length",
      tex: "L_0=\\gamma L",
    },
  ]}
/>

### Derivation 3: Keep direction clear

Only the component parallel to relative motion contracts. Transverse dimensions are unchanged.

## Rules

<Equation label="Contracted length" tex="L=\frac{L_0}{\gamma}" />

<Equation label="Lorentz factor" tex="\gamma=\frac{1}{\sqrt{1-v^2/c^2}}" />

<Equation label="Proper length" tex="L_0=\gamma L" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A rod has proper length \\(5.00\\,\\mathrm m\\) and moves at \\(0.600c\\) along its length. Find its measured length.",
      answer: "\\[\\gamma=1.25\\]\\[L=\\frac{L_0}{\\gamma}=\\frac{5.00}{1.25}=4.00\\,\\mathrm m\\]",
    },
    {
      title: "Example 2",
      question: "A spacecraft is measured as \\(60.0\\,\\mathrm m\\) long while moving at \\(0.800c\\). Find its proper length.",
      answer: "\\[\\gamma=1.67\\]\\[L_0=\\gamma L=(1.67)(60.0)=100\\,\\mathrm m\\]",
    },
  ]}
/>

## Checks

- Proper length is measured in the object's rest frame.
- Moving length is measured using simultaneous endpoint positions in the observer's frame.
- Only lengths parallel to the relative velocity contract.
- A contracted length is never greater than the proper length.`;
