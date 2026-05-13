export const content = String.raw`## Principle

Laplace Equation is about showing that analytic real and imaginary parts satisfy Laplace equation. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

Complex analysis supports potential theory, two-dimensional flow, wave methods, and compact descriptions of oscillation.

## Notation

<Notation
  items={[
    { symbol: "z", meaning: "independent variable or variables for this topic" },
    { symbol: "f(z)", meaning: "main dependent quantity, field, or function being studied" },
    { symbol: "parameter", meaning: "constant that sets a scale, rate, coefficient, or boundary value" },
    { symbol: "domain", meaning: "set of input values where the formula or model is used" },
  ]}
/>

## Method

### Step 1: State the object being studied

Name the function, field, signal, or region. State its domain and the units of the physical quantities before doing any algebra or calculus.

### Step 2: Apply the central relation

Use the defining relation for Laplace Equation:

<Equation label="Laplace equation" tex="u_{xx}+u_{yy}=0" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Laplace Equation" },
    { label: "Use the central relation", tex: "u_{xx}+u_{yy}=0" },
    { label: "Interpret the result", tex: "Laplace equation" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Laplace equation" tex="u_{xx}+u_{yy}=0" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Laplace Equation.",
      answer: "The central relation is Laplace equation: u_{xx}+u_{yy}=0. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Laplace Equation appear in a physics calculation?",
      answer: "Laplace Equation is used when showing that analytic real and imaginary parts satisfy Laplace equation. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- Laplace equation appears in steady potential problems.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
