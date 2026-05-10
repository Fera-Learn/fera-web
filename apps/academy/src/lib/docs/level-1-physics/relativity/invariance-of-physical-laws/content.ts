export const content = String.raw`## Principle

The laws of physics and the vacuum speed of light are the same in every inertial frame.

## Notation

<Notation
  items={[
    { symbol: "S, S'", meaning: "inertial reference frames", unit: "" },
    { symbol: "c", meaning: "speed of light in vacuum", unit: "m s^{-1}" },
    { symbol: "v", meaning: "relative speed of two inertial frames", unit: "m s^{-1}" },
    { symbol: "\\beta", meaning: "speed as a fraction of light speed, \\(v/c\\)", unit: "" },
    { symbol: "\\gamma", meaning: "Lorentz factor", unit: "" },
    { symbol: "(x,t)", meaning: "position and time coordinates of an event", unit: "m, s" },
  ]}
/>

## Method

### Derivation 1: Identify an inertial frame

An inertial frame is one in which a free particle moves with constant velocity. Special relativity compares such frames.

<PhysicsDerivation
  items={[
    {
      label: "Relative speed",
      tex: "\\beta=\\frac{v}{c}",
    },
    {
      label: "Lorentz factor",
      tex: "\\gamma=\\frac{1}{\\sqrt{1-\\beta^2}}",
    },
  ]}
/>

### Derivation 2: Keep light speed invariant

A light pulse emitted from the shared origin must satisfy the same light-cone equation in every inertial frame.

<PhysicsDerivation
  items={[
    {
      label: "Light in S",
      tex: "x^2+y^2+z^2=c^2t^2",
    },
    {
      label: "Light in S'",
      tex: "x'^2+y'^2+z'^2=c^2t'^2",
    },
  ]}
/>

### Derivation 3: Replace Galilean time

If \\(t'=t\\), a moving observer would not measure the same light speed. Space and time coordinates must mix when changing inertial frames.

## Rules

<Equation label="Light speed" tex="c=3.00\times10^8\,\mathrm{m\,s^{-1}}" />

<Equation label="Speed fraction" tex="\beta=\frac{v}{c}" />

<Equation label="Lorentz factor" tex="\gamma=\frac{1}{\sqrt{1-\beta^2}}" />

<Equation label="Light cone" tex="x^2+y^2+z^2=c^2t^2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A spacecraft moves at \\(0.600c\\). Find \\(\\beta\\) and \\(\\gamma\\).",
      answer: "\\[\\beta=0.600\\]\\[\\gamma=\\frac{1}{\\sqrt{1-0.600^2}}=1.25\\]",
    },
    {
      title: "Example 2",
      question: "A pulse of light moves \\(6.00\\,\\mathrm m\\) in vacuum. Find the elapsed time in any inertial frame where the path length is \\(6.00\\,\\mathrm m\\).",
      answer: "\\[\\Delta t=\\frac{d}{c}=\\frac{6.00}{3.00\\times10^8}=2.00\\times10^{-8}\\,\\mathrm s\\]",
    },
  ]}
/>

## Checks

- Special relativity applies to inertial frames unless a problem states otherwise.
- No massive object has \\(v\\ge c\\).
- \\(\\gamma\\) is always at least \\(1\\).
- At low speed, \\(\beta\\ll1\\) and relativity approaches Newtonian mechanics.`;
