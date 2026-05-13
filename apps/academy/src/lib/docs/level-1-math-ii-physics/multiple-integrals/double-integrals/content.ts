export const content = String.raw`## Principle

Double Integrals is about accumulating a scalar field over a plane region. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

Multiple integrals accumulate density, charge, probability, mass, or volume over regions in two or three dimensions.

## Notation

<Notation
  items={[
    { symbol: "x,y,z", meaning: "independent variable or variables for this topic" },
    { symbol: "f(x,y,z)", meaning: "main dependent quantity, field, or function being studied" },
    { symbol: "parameter", meaning: "constant that sets a scale, rate, coefficient, or boundary value" },
    { symbol: "domain", meaning: "set of input values where the formula or model is used" },
  ]}
/>

## Method

### Step 1: State the object being studied

Name the function, field, signal, or region. State its domain and the units of the physical quantities before doing any algebra or calculus.

### Step 2: Apply the central relation

Use the defining relation for Double Integrals:

<Equation label="Double integral" tex="\iint_R f(x,y)\,dA" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Double Integrals" },
    { label: "Use the central relation", tex: "\\iint_R f(x,y)\\,dA" },
    { label: "Interpret the result", tex: "Double integral" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Double integral" tex="\iint_R f(x,y)\,dA" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Double Integrals.",
      answer: "The central relation is Double integral: \\iint_R f(x,y)\\,dA. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Double Integrals appear in a physics calculation?",
      answer: "Double Integrals is used when accumulating a scalar field over a plane region. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- The area element must match the coordinate system.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
