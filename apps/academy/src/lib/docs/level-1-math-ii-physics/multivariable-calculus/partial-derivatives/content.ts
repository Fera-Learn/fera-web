export const content = String.raw`## Principle

Partial Derivatives is about differentiating with respect to one variable while holding the others fixed. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Partial Derivatives:

<Equation label="Partial derivative" tex="f_x=\frac{\partial f}{\partial x}" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Partial Derivatives" },
    { label: "Use the central relation", tex: "f_x=\\frac{\\partial f}{\\partial x}" },
    { label: "Interpret the result", tex: "Partial derivative" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Partial derivative" tex="f_x=\frac{\partial f}{\partial x}" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Partial Derivatives.",
      answer: "The central relation is Partial derivative: f_x=\\frac{\\partial f}{\\partial x}. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Partial Derivatives appear in a physics calculation?",
      answer: "Partial Derivatives is used when differentiating with respect to one variable while holding the others fixed. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- State which variables are held fixed.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
