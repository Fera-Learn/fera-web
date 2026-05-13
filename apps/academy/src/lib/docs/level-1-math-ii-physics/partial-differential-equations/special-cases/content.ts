export const content = String.raw`## Principle

Special Cases is about reducing PDEs under symmetry, steady-state, or one-dimensional assumptions. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Special Cases:

<Equation label="Steady-state reduction" tex="u_t=0\Rightarrow u_{xx}=0" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Special Cases" },
    { label: "Use the central relation", tex: "u_t=0\\Rightarrow u_{xx}=0" },
    { label: "Interpret the result", tex: "Steady-state reduction" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Steady-state reduction" tex="u_t=0\Rightarrow u_{xx}=0" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Special Cases.",
      answer: "The central relation is Steady-state reduction: u_t=0\\Rightarrow u_{xx}=0. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Special Cases appear in a physics calculation?",
      answer: "Special Cases is used when reducing PDEs under symmetry, steady-state, or one-dimensional assumptions. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- State the assumption before dropping derivative terms.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
