export const content = String.raw`## Principle

Jacobian is about using a determinant to scale area or volume under a coordinate change. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Jacobian:

<Equation label="Jacobian area scaling" tex="dA=\left|\frac{\partial(x,y)}{\partial(u,v)}\right|\,du\,dv" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Jacobian" },
    { label: "Use the central relation", tex: "dA=\\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|\\,du\\,dv" },
    { label: "Interpret the result", tex: "Jacobian area scaling" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Jacobian area scaling" tex="dA=\left|\frac{\partial(x,y)}{\partial(u,v)}\right|\,du\,dv" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Jacobian.",
      answer: "The central relation is Jacobian area scaling: dA=\\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|\\,du\\,dv. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Jacobian appear in a physics calculation?",
      answer: "Jacobian is used when using a determinant to scale area or volume under a coordinate change. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- Use the absolute value for area or volume scaling.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
