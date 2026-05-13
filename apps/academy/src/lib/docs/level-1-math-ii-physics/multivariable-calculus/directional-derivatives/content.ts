export const content = String.raw`## Principle

Directional Derivatives is about measuring the rate of change of a scalar field in a chosen direction. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

Multivariable calculus describes scalar and vector fields such as temperature, potential energy, pressure, and density.

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

Use the defining relation for Directional Derivatives:

<Equation label="Directional derivative" tex="D_{\mathbf u}f=\nabla f\cdot\mathbf u" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Directional Derivatives" },
    { label: "Use the central relation", tex: "D_{\\mathbf u}f=\\nabla f\\cdot\\mathbf u" },
    { label: "Interpret the result", tex: "Directional derivative" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Directional derivative" tex="D_{\mathbf u}f=\nabla f\cdot\mathbf u" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Directional Derivatives.",
      answer: "The central relation is Directional derivative: D_{\\mathbf u}f=\\nabla f\\cdot\\mathbf u. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Directional Derivatives appear in a physics calculation?",
      answer: "Directional Derivatives is used when measuring the rate of change of a scalar field in a chosen direction. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- The direction vector must be a unit vector.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
