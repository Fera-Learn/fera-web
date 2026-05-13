export const content = String.raw`## Principle

The standard normal random variable has mean \(0\) and variance \(1\). It provides a common scale for normal probabilities, so tables and calculators usually report its cumulative probability.

## Notation

<Notation
  items={[
    { symbol: "Z\\sim N(0,1)", meaning: "standard normal random variable with mean 0 and variance 1" },
    { symbol: "z", meaning: "a possible value on the standard normal scale" },
    { symbol: "f_Z(z)", meaning: "standard normal density" },
    { symbol: "\\Phi(z)", meaning: "standard normal cumulative distribution function" },
    { symbol: "a,b", meaning: "standard normal interval endpoints with a\\le b" },
  ]}
/>

## Method

### Step 1: Use the density for area

The standard normal density is symmetric about \(0\). The cumulative distribution function \(\Phi\) stores accumulated area from the far left up to \(z\).

<PhysicsDerivation
  items={[
    { label: "Standard normal density", tex: "f_Z(z)=\\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}" },
    { label: "CDF definition", tex: "\\Phi(z)=P(Z\\le z)" },
    { label: "CDF as area", tex: "\\Phi(z)=\\int_{-\\infty}^{z}\\frac{1}{\\sqrt{2\\pi}}e^{-t^2/2}\\,dt" },
  ]}
/>

### Step 2: Convert intervals to differences of cumulative areas

The area up to \(b\) includes the area up to \(a\). Subtract to isolate the interval.

<PhysicsDerivation
  items={[
    { label: "Area up to b", tex: "\\Phi(b)=P(Z\\le b)" },
    { label: "Area up to a", tex: "\\Phi(a)=P(Z\\le a)" },
    { label: "Subtract included area", tex: "P(a\\le Z\\le b)=\\Phi(b)-\\Phi(a)" },
  ]}
/>

## Rules

<Equation label="Standard normal" tex="Z\sim N(0,1)" />

<Equation label="Density" tex="f_Z(z)=\frac{1}{\sqrt{2\pi}}e^{-z^2/2}" />

<Equation label="CDF" tex="\Phi(z)=P(Z\le z)" />

<Equation label="Symmetry" tex="\Phi(z)=1-\Phi(-z)" />

<Equation label="Centre" tex="\Phi(0)=\frac{1}{2}" />

<Equation label="Interval" tex="P(a\le Z\le b)=\Phi(b)-\Phi(a)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A table gives \\(\\Phi(1.20)=0.8849\\). What is \\(P(Z\\le1.20)\\)?",
      answer: "By definition, \\(\\Phi(1.20)=P(Z\\le1.20)\\), so the probability is \\(0.8849\\).",
    },
    {
      title: "Example 2",
      question: "Use symmetry to find \\(\\Phi(-1.20)\\) when \\(\\Phi(1.20)=0.8849\\).",
      answer: "Use \\(\\Phi(-1.20)=1-\\Phi(1.20)\\). Thus \\(\\Phi(-1.20)=1-0.8849=0.1151\\).",
    },
    {
      title: "Example 3",
      question: "Find \\(P(-0.50\\le Z\\le1.00)\\) from \\(\\Phi(1.00)=0.8413\\) and \\(\\Phi(-0.50)=0.3085\\).",
      answer: "Subtract cumulative areas: \\[P(-0.50\\le Z\\le1.00)=\\Phi(1.00)-\\Phi(-0.50)=0.8413-0.3085=0.5328.\\]",
    },
  ]}
/>

## Checks

- \(\Phi(z)\) is cumulative probability, not density.
- The density is \(f_Z(z)\); the CDF is \(\Phi(z)\).
- \(\Phi(0)=1/2\) because the density is symmetric about \(0\).
- An interval probability uses a difference of CDF values.
- Negative inputs can be handled with symmetry when a table lists only positive values.`;
