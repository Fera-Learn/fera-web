export const content = String.raw`## Principle

Maxwell Equations is about reading Maxwell equations as divergence and curl statements about electric and magnetic fields. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

Vector calculus describes fields in space, including fluid velocity, gravitational fields, and electromagnetic fields.

## Notation

<Notation
  items={[
    { symbol: "x,y,z", meaning: "independent variable or variables for this topic" },
    { symbol: "F(x,y,z)", meaning: "main dependent quantity, field, or function being studied" },
    { symbol: "parameter", meaning: "constant that sets a scale, rate, coefficient, or boundary value" },
    { symbol: "domain", meaning: "set of input values where the formula or model is used" },
  ]}
/>

## Method

### Step 1: State the object being studied

Name the function, field, signal, or region. State its domain and the units of the physical quantities before doing any algebra or calculus.

### Step 2: Apply the central relation

Use the defining relation for Maxwell Equations:

<Equation label="Gauss law differential form" tex="\nabla\cdot\mathbf E=\frac{\rho}{\epsilon_0}" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Maxwell Equations" },
    { label: "Use the central relation", tex: "\\nabla\\cdot\\mathbf E=\\frac{\\rho}{\\epsilon_0}" },
    { label: "Interpret the result", tex: "Gauss law differential form" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Gauss law differential form" tex="\nabla\cdot\mathbf E=\frac{\rho}{\epsilon_0}" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Maxwell Equations.",
      answer: "The central relation is Gauss law differential form: \\nabla\\cdot\\mathbf E=\\frac{\\rho}{\\epsilon_0}. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Maxwell Equations appear in a physics calculation?",
      answer: "Maxwell Equations is used when reading Maxwell equations as divergence and curl statements about electric and magnetic fields. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- Keep track of which equations describe sources and which describe circulation.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
