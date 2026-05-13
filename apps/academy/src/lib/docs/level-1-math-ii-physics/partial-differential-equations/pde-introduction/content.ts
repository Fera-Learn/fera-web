export const content = String.raw`## Principle

PDE Introduction is about identifying equations involving partial derivatives of a field. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for PDE Introduction:

<Equation label="PDE form" tex="F(x,t,u,u_x,u_t,\ldots)=0" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "PDE Introduction" },
    { label: "Use the central relation", tex: "F(x,t,u,u_x,u_t,\\ldots)=0" },
    { label: "Interpret the result", tex: "PDE form" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="PDE form" tex="F(x,t,u,u_x,u_t,\ldots)=0" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for PDE Introduction.",
      answer: "The central relation is PDE form: F(x,t,u,u_x,u_t,\\ldots)=0. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does PDE Introduction appear in a physics calculation?",
      answer: "PDE Introduction is used when identifying equations involving partial derivatives of a field. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- A PDE has at least two independent variables.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
