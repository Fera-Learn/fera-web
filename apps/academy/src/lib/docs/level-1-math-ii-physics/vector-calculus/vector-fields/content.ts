export const content = String.raw`## Principle

Vector Fields is about assigning a vector to every point in a region of space. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Vector Fields:

<Equation label="Vector field" tex="\mathbf F=F_x\mathbf i+F_y\mathbf j+F_z\mathbf k" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Vector Fields" },
    { label: "Use the central relation", tex: "\\mathbf F=F_x\\mathbf i+F_y\\mathbf j+F_z\\mathbf k" },
    { label: "Interpret the result", tex: "Vector field" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Vector field" tex="\mathbf F=F_x\mathbf i+F_y\mathbf j+F_z\mathbf k" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Vector Fields.",
      answer: "The central relation is Vector field: \\mathbf F=F_x\\mathbf i+F_y\\mathbf j+F_z\\mathbf k. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Vector Fields appear in a physics calculation?",
      answer: "Vector Fields is used when assigning a vector to every point in a region of space. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- A vector field has direction and magnitude at each point.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
