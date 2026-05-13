export const content = String.raw`## Principle

Divergence is about measuring local source strength or net outflow of a vector field. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Divergence:

<Equation label="Divergence" tex="\nabla\cdot\mathbf F=\frac{\partial F_x}{\partial x}+\frac{\partial F_y}{\partial y}+\frac{\partial F_z}{\partial z}" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Divergence" },
    { label: "Use the central relation", tex: "\\nabla\\cdot\\mathbf F=\\frac{\\partial F_x}{\\partial x}+\\frac{\\partial F_y}{\\partial y}+\\frac{\\partial F_z}{\\partial z}" },
    { label: "Interpret the result", tex: "Divergence" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Divergence" tex="\nabla\cdot\mathbf F=\frac{\partial F_x}{\partial x}+\frac{\partial F_y}{\partial y}+\frac{\partial F_z}{\partial z}" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Divergence.",
      answer: "The central relation is Divergence: \\nabla\\cdot\\mathbf F=\\frac{\\partial F_x}{\\partial x}+\\frac{\\partial F_y}{\\partial y}+\\frac{\\partial F_z}{\\partial z}. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Divergence appear in a physics calculation?",
      answer: "Divergence is used when measuring local source strength or net outflow of a vector field. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- Positive divergence indicates local net outflow.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
