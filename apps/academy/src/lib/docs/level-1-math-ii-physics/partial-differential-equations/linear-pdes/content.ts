export const content = String.raw`## Principle

Linear PDEs is about using superposition for PDEs linear in the unknown field. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Linear PDEs:

<Equation label="Linearity" tex="L[u+v]=L[u]+L[v]" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Linear PDEs" },
    { label: "Use the central relation", tex: "L[u+v]=L[u]+L[v]" },
    { label: "Interpret the result", tex: "Linearity" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Linearity" tex="L[u+v]=L[u]+L[v]" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Linear PDEs.",
      answer: "The central relation is Linearity: L[u+v]=L[u]+L[v]. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Linear PDEs appear in a physics calculation?",
      answer: "Linear PDEs is used when using superposition for PDEs linear in the unknown field. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- Superposition applies to homogeneous linear PDEs.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
