export const content = String.raw`## Principle

Multivariable Functions is about describing quantities that depend on more than one input variable. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Multivariable Functions:

<Equation label="Scalar field" tex="f=f(x,y,z)" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Multivariable Functions" },
    { label: "Use the central relation", tex: "f=f(x,y,z)" },
    { label: "Interpret the result", tex: "Scalar field" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Scalar field" tex="f=f(x,y,z)" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Multivariable Functions.",
      answer: "The central relation is Scalar field: f=f(x,y,z). Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Multivariable Functions appear in a physics calculation?",
      answer: "Multivariable Functions is used when describing quantities that depend on more than one input variable. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- Specify which variables are inputs and which symbols are parameters.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
