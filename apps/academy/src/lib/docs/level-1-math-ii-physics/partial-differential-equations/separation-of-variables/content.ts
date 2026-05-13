export const content = String.raw`## Principle

Separation of Variables is about using product trial functions to split a PDE into ODEs. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

PDEs model fields depending on several inputs, such as waves on a string, heat in a material, and electric potential in space.

## Notation

<Notation
  items={[
    { symbol: "x,t", meaning: "independent variable or variables for this topic" },
    { symbol: "u(x,t)", meaning: "main dependent quantity, field, or function being studied" },
    { symbol: "parameter", meaning: "constant that sets a scale, rate, coefficient, or boundary value" },
    { symbol: "domain", meaning: "set of input values where the formula or model is used" },
  ]}
/>

## Method

### Step 1: State the object being studied

Name the function, field, signal, or region. State its domain and the units of the physical quantities before doing any algebra or calculus.

### Step 2: Apply the central relation

Use the defining relation for Separation of Variables:

<Equation label="Product ansatz" tex="u(x,t)=X(x)T(t)" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Separation of Variables" },
    { label: "Use the central relation", tex: "u(x,t)=X(x)T(t)" },
    { label: "Interpret the result", tex: "Product ansatz" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Product ansatz" tex="u(x,t)=X(x)T(t)" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Separation of Variables.",
      answer: "The central relation is Product ansatz: u(x,t)=X(x)T(t). Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Separation of Variables appear in a physics calculation?",
      answer: "Separation of Variables is used when using product trial functions to split a PDE into ODEs. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- Boundary conditions determine the allowed separated modes.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
