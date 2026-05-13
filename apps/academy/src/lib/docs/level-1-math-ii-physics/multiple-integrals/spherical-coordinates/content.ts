export const content = String.raw`## Principle

Spherical Coordinates is about using radius and two angles for spherical regions. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Spherical Coordinates:

<Equation label="Spherical volume element" tex="dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Spherical Coordinates" },
    { label: "Use the central relation", tex: "dV=\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta" },
    { label: "Interpret the result", tex: "Spherical volume element" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Spherical volume element" tex="dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Spherical Coordinates.",
      answer: "The central relation is Spherical volume element: dV=\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Spherical Coordinates appear in a physics calculation?",
      answer: "Spherical Coordinates is used when using radius and two angles for spherical regions. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- Angle conventions must be stated clearly.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
