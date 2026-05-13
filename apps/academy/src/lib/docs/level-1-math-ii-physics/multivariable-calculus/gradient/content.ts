export const content = String.raw`## Principle

Gradient is about collecting partial derivatives into the vector of steepest increase. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Gradient:

<Equation label="Gradient" tex="\nabla f=\left(f_x,f_y,f_z\right)" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Gradient" },
    { label: "Use the central relation", tex: "\\nabla f=\\left(f_x,f_y,f_z\\right)" },
    { label: "Interpret the result", tex: "Gradient" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Gradient" tex="\nabla f=\left(f_x,f_y,f_z\right)" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Gradient.",
      answer: "The central relation is Gradient: \\nabla f=\\left(f_x,f_y,f_z\\right). Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Gradient appear in a physics calculation?",
      answer: "Gradient is used when collecting partial derivatives into the vector of steepest increase. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- The gradient is perpendicular to level surfaces.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
