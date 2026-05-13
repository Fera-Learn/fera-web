export const content = String.raw`## Principle

Linear First-Order Equations is about using integrating factors for equations linear in y and y prime. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

ODEs are central in physics because they express how a measurable quantity changes with one input, usually time or one spatial coordinate.

## Notation

<Notation
  items={[
    { symbol: "x", meaning: "independent variable or variables for this topic" },
    { symbol: "y(x)", meaning: "main dependent quantity, field, or function being studied" },
    { symbol: "parameter", meaning: "constant that sets a scale, rate, coefficient, or boundary value" },
    { symbol: "domain", meaning: "set of input values where the formula or model is used" },
  ]}
/>

## Method

### Step 1: State the object being studied

Name the function, field, signal, or region. State its domain and the units of the physical quantities before doing any algebra or calculus.

### Step 2: Apply the central relation

Use the defining relation for Linear First-Order Equations:

<Equation label="Linear first-order form" tex="y'+p(x)y=q(x)" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Linear First-Order Equations" },
    { label: "Use the central relation", tex: "y'+p(x)y=q(x)" },
    { label: "Interpret the result", tex: "Linear first-order form" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Linear first-order form" tex="y'+p(x)y=q(x)" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Linear First-Order Equations.",
      answer: "The central relation is Linear first-order form: y'+p(x)y=q(x). Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Linear First-Order Equations appear in a physics calculation?",
      answer: "Linear First-Order Equations is used when using integrating factors for equations linear in y and y prime. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- Put the equation in standard form before identifying p(x).
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
