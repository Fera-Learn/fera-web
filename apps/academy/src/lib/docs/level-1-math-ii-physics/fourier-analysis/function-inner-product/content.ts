export const content = String.raw`## Principle

Function Inner Product is about measuring overlap between two functions by integrating their product. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

Fourier analysis is used in physics to decompose waves, signals, oscillations, and boundary-value solutions into simple modes.

## Notation

<Notation
  items={[
    { symbol: "x", meaning: "independent variable or variables for this topic" },
    { symbol: "f(x)", meaning: "main dependent quantity, field, or function being studied" },
    { symbol: "parameter", meaning: "constant that sets a scale, rate, coefficient, or boundary value" },
    { symbol: "domain", meaning: "set of input values where the formula or model is used" },
  ]}
/>

## Method

### Step 1: State the object being studied

Name the function, field, signal, or region. State its domain and the units of the physical quantities before doing any algebra or calculus.

### Step 2: Apply the central relation

Use the defining relation for Function Inner Product:

<Equation label="Function inner product" tex="\langle f,g\rangle=\int_a^b f(x)g(x)\,dx" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Function Inner Product" },
    { label: "Use the central relation", tex: "\\langle f,g\\rangle=\\int_a^b f(x)g(x)\\,dx" },
    { label: "Interpret the result", tex: "Function inner product" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Function inner product" tex="\langle f,g\rangle=\int_a^b f(x)g(x)\,dx" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Function Inner Product.",
      answer: "The central relation is Function inner product: \\langle f,g\\rangle=\\int_a^b f(x)g(x)\\,dx. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Function Inner Product appear in a physics calculation?",
      answer: "Function Inner Product is used when measuring overlap between two functions by integrating their product. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- The interval is part of the definition of the inner product.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
