export const content = String.raw`## Principle

Relativistic equations reduce to Newtonian equations when all speeds are much smaller than \\(c\\).

## Notation

<Notation
  items={[
    { symbol: "\\beta", meaning: "speed fraction \\(v/c\\)", unit: "" },
    { symbol: "\\gamma", meaning: "Lorentz factor", unit: "" },
    { symbol: "p", meaning: "momentum", unit: "kg m s^{-1}" },
    { symbol: "K", meaning: "kinetic energy", unit: "J" },
    { symbol: "x,t", meaning: "space and time coordinates", unit: "m, s" },
  ]}
/>

## Method

### Derivation 1: Expand the Lorentz factor

For \\(\\beta\\ll1\\), the binomial approximation keeps only the leading correction.

<PhysicsDerivation
  items={[
    {
      label: "Lorentz factor",
      tex: "\\gamma=(1-\\beta^2)^{-1/2}",
    },
    {
      label: "Low-speed expansion",
      tex: "\\gamma\\approx1+\\frac12\\beta^2",
    },
  ]}
/>

### Derivation 2: Recover Newtonian momentum

At low speed, \\(\gamma\\) is very close to one.

<PhysicsDerivation
  items={[
    {
      label: "Relativistic momentum",
      tex: "p=\\gamma mv",
    },
    {
      label: "Newtonian limit",
      tex: "p\\approx mv",
    },
  ]}
/>

### Derivation 3: Recover Newtonian kinetic energy

Use the low-speed expansion of \\(\gamma\\) in \\(K=(\gamma-1)mc^2\\).

<PhysicsDerivation
  items={[
    {
      label: "Relativistic kinetic energy",
      tex: "K=(\\gamma-1)mc^2",
    },
    {
      label: "Low-speed kinetic energy",
      tex: "K\\approx\\frac12\\frac{v^2}{c^2}mc^2=\\frac12mv^2",
    },
  ]}
/>

## Rules

<Equation label="Gamma approximation" tex="\gamma\approx1+\frac12\beta^2" />

<Equation label="Momentum limit" tex="p\approx mv" />

<Equation label="Kinetic-energy limit" tex="K\approx\frac12mv^2" />

<Equation label="Galilean position" tex="x'\approx x-vt,\qquad t'\approx t" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Estimate \\(\\gamma-1\\) for a car moving at \\(30\\,\\mathrm{m\\,s^{-1}}\\).",
      answer: "\\[\\beta=\\frac{30}{3.00\\times10^8}=1.0\\times10^{-7}\\]\\[\\gamma-1\\approx\\frac12\\beta^2=5.0\\times10^{-15}\\]",
    },
    {
      title: "Example 2",
      question: "Show that \\(K=(\\gamma-1)mc^2\\) gives \\(\\frac12mv^2\\) when \\(v\\ll c\\).",
      answer: "Use \\(\\gamma\\approx1+\\frac12v^2/c^2\\): \\[K\\approx\\left(\\frac12\\frac{v^2}{c^2}\\right)mc^2=\\frac12mv^2\\]",
    },
  ]}
/>

## Checks

- Use Newtonian formulas only when \\(v/c\\) is small enough for the required precision.
- The first relativistic correction usually scales as \\(v^2/c^2\\).
- Low-speed agreement is a limit, not a separate assumption.
- Rest energy has no Newtonian counterpart in ordinary mechanics.`;
