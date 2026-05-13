export const content = String.raw`## Principle

Div Grad Curl Identities is about using identities that follow from equality of mixed partial derivatives. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Div Grad Curl Identities:

<Equation label="Curl of a gradient" tex="\nabla\times(\nabla f)=\mathbf 0" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Div Grad Curl Identities" },
    { label: "Use the central relation", tex: "\\nabla\\times(\\nabla f)=\\mathbf 0" },
    { label: "Interpret the result", tex: "Curl of a gradient" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Curl of a gradient" tex="\nabla\times(\nabla f)=\mathbf 0" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Div Grad Curl Identities.",
      answer: "The central relation is Curl of a gradient: \\nabla\\times(\\nabla f)=\\mathbf 0. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Div Grad Curl Identities appear in a physics calculation?",
      answer: "Div Grad Curl Identities is used when using identities that follow from equality of mixed partial derivatives. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- The standard identities require sufficient smoothness.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
