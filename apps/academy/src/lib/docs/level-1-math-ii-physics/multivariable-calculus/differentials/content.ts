export const content = String.raw`## Principle

Differentials is about approximating small changes in a function from changes in its inputs. The page treats the idea as a local tool: identify the variables, state the assumptions, then apply the relevant formula or theorem.

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

Use the defining relation for Differentials:

<Equation label="Total differential" tex="df=f_x\,dx+f_y\,dy" />

<PhysicsDerivation
  items={[
    { label: "Name the task", tex: "Differentials" },
    { label: "Use the central relation", tex: "df=f_x\\,dx+f_y\\,dy" },
    { label: "Interpret the result", tex: "Total differential" },
  ]}
/>

### Step 3: Interpret the result

Translate the mathematical output back into the physical setting. Check whether it represents a rate, amplitude, density, source strength, boundary value, or approximation.

## Rules

<Equation label="Total differential" tex="df=f_x\,dx+f_y\,dy" />

<Equation label="Domain reminder" tex="\text{formula applies on the stated domain}" />

<Equation label="Units reminder" tex="\text{units must balance on both sides}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the central relation for Differentials.",
      answer: "The central relation is Total differential: df=f_x\\,dx+f_y\\,dy. Use it after naming the variables and checking the assumptions.",
    },
    {
      title: "Example 2",
      question: "How does Differentials appear in a physics calculation?",
      answer: "Differentials is used when approximating small changes in a function from changes in its inputs. In a physics model, first attach units and a domain, then apply the relation to the field, signal, or motion being studied.",
    },
  ]}
/>

## Checks

- Differentials are local linear approximations.
- Define every variable before substituting numbers or interpreting a graph.
- Check units, domain restrictions, and sign conventions before trusting the result.`;
