export const content = String.raw`## Principle

Separable Equations is about solving first-order equations by moving all y-dependence to one side and x-dependence to the other. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Separable Equations:

<Equation label="Separable equation" tex="\frac{dy}{dx}=f(x)g(y)" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Separable Equations" },
    { label: "Use the central relation", tex: "\\frac{dy}{dx}=f(x)g(y)" },
    { label: "Interpret the result", tex: "Separable equation" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Separable equation" tex="\frac{dy}{dx}=f(x)g(y)" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Separable Equations.",
      answer: "The central relation is Separable equation: \\frac{dy}{dx}=f(x)g(y). Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Separable Equations appear in a physics calculation?",
      answer: "Separable Equations is used when solving first-order equations by moving all y-dependence to one side and x-dependence to the other. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- Record equilibrium solutions before dividing by a factor containing the dependent variable.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
