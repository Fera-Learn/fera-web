export const content = String.raw`## Principle

Order Switching is about rewriting the same double integral with the opposite integration order. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Order Switching:

<Equation label="Order switching" tex="\int_a^b\int_{g_1(x)}^{g_2(x)} f\,dy\,dx=\int_c^d\int_{h_1(y)}^{h_2(y)} f\,dx\,dy" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Order Switching" },
    { label: "Use the central relation", tex: "\\int_a^b\\int_{g_1(x)}^{g_2(x)} f\\,dy\\,dx=\\int_c^d\\int_{h_1(y)}^{h_2(y)} f\\,dx\\,dy" },
    { label: "Interpret the result", tex: "Order switching" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Order switching" tex="\int_a^b\int_{g_1(x)}^{g_2(x)} f\,dy\,dx=\int_c^d\int_{h_1(y)}^{h_2(y)} f\,dx\,dy" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Order Switching.",
      answer: "The central relation is Order switching: \\int_a^b\\int_{g_1(x)}^{g_2(x)} f\\,dy\\,dx=\\int_c^d\\int_{h_1(y)}^{h_2(y)} f\\,dx\\,dy. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Order Switching appear in a physics calculation?",
      answer: "Order Switching is used when rewriting the same double integral with the opposite integration order. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- The region must remain the same after switching.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
