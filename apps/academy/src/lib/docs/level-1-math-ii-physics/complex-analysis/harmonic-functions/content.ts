export const content = String.raw`## Principle

Harmonic Functions is about studying functions whose Laplacian is zero and their harmonic conjugates. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Harmonic Functions:

<Equation label="Harmonic condition" tex="\nabla^2u=0" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Harmonic Functions" },
    { label: "Use the central relation", tex: "\\nabla^2u=0" },
    { label: "Interpret the result", tex: "Harmonic condition" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Harmonic condition" tex="\nabla^2u=0" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Harmonic Functions.",
      answer: "The central relation is Harmonic condition: \\nabla^2u=0. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Harmonic Functions appear in a physics calculation?",
      answer: "Harmonic Functions is used when studying functions whose Laplacian is zero and their harmonic conjugates. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- A harmonic conjugate may depend on the domain as well as the derivatives.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
