export const content = String.raw`## Principle

Inhomogeneous Constant-Coefficient Equations is about adding a particular solution to the complementary solution for a forced model. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Inhomogeneous Constant-Coefficient Equations:

<Equation label="Forced solution split" tex="y=y_c+y_p" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Inhomogeneous Constant-Coefficient Equations" },
    { label: "Use the central relation", tex: "y=y_c+y_p" },
    { label: "Interpret the result", tex: "Forced solution split" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Forced solution split" tex="y=y_c+y_p" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Inhomogeneous Constant-Coefficient Equations.",
      answer: "The central relation is Forced solution split: y=y_c+y_p. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Inhomogeneous Constant-Coefficient Equations appear in a physics calculation?",
      answer: "Inhomogeneous Constant-Coefficient Equations is used when adding a particular solution to the complementary solution for a forced model. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- The particular solution should not include arbitrary homogeneous constants.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
