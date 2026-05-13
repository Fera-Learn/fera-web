export const content = String.raw`## Principle

Dependent Variables is about choosing the unknown response function in a differential model. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

ODEs are central in physics because they express how a measurable quantity changes with one input, usually time or one spatial coordinate.

## Notation

<Notation
  items={[
    { symbol: "x", meaning: "independent variable or variables for this topic" },
    { symbol: "y(x)", meaning: "main dependent quantity, field, or function being studied" },
    { symbol: "parameter", meaning: "constant that sets a scale, rate, coefficient, or boundary value" },
    { symbol: "domain", meaning: "set of input values where the formula or model is used" },
  ]}
/>

## Method

### Step 1: State the object being studied

Name the function, field, signal, or region. State its domain and the units of the physical quantities before doing any algebra or calculus.

### Step 2: Apply the central relation

Use the defining relation for Dependent Variables:

<Equation label="Dependent variable" tex="y=y(x)" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Dependent Variables" },
    { label: "Use the central relation", tex: "y=y(x)" },
    { label: "Interpret the result", tex: "Dependent variable" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Dependent variable" tex="y=y(x)" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Dependent Variables.",
      answer: "The central relation is Dependent variable: y=y(x). Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Dependent Variables appear in a physics calculation?",
      answer: "Dependent Variables is used when choosing the unknown response function in a differential model. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- The dependent variable is the function being solved for, not the input.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
