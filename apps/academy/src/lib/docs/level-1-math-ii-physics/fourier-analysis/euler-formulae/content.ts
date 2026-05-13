export const content = String.raw`## Principle

Euler Formulae is about rewriting sine and cosine using complex exponentials. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Euler Formulae:

<Equation label="Euler formula" tex="e^{ix}=\cos x+i\sin x" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Euler Formulae" },
    { label: "Use the central relation", tex: "e^{ix}=\\cos x+i\\sin x" },
    { label: "Interpret the result", tex: "Euler formula" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Euler formula" tex="e^{ix}=\cos x+i\sin x" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Euler Formulae.",
      answer: "The central relation is Euler formula: e^{ix}=\\cos x+i\\sin x. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Euler Formulae appear in a physics calculation?",
      answer: "Euler Formulae is used when rewriting sine and cosine using complex exponentials. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- The angle must be measured in radians for calculus.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
