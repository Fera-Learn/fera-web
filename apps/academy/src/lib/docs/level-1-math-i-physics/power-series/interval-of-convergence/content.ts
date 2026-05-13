export const content = String.raw`## Principle

The interval of convergence is the full set of real \(x\)-values where a power series converges. The radius gives the open interval around the centre, but the endpoints need separate tests.

<Equation label="Open interval from radius" tex="c-R\lt x\lt c+R" />

Endpoint behaviour matters because many useful series converge at one endpoint but not the other. The geometric series and logarithm series show this clearly.

## Notation

<Notation
  items={[
    { symbol: "c", meaning: "centre of the series" },
    { symbol: "R", meaning: "radius of convergence" },
    { symbol: "c-R", meaning: "left endpoint" },
    { symbol: "c+R", meaning: "right endpoint" },
    { symbol: "I", meaning: "interval of convergence" },
  ]}
/>

The interval may be open, closed, or half-open depending on endpoint tests.

## Method

### Step 1: Find the radius

Use a convergence test, usually the ratio test, to get \(|x-c|\lt R\). This gives the open interval.

### Step 2: Test the left endpoint

Substitute \(x=c-R\) into the original series. Do not test the inequality again; it will give equality and no decision.

<PhysicsDerivation
  items={[
    { label: "Left endpoint", tex: "x=c-R" },
    { label: "Shifted value", tex: "x-c=-R" },
    { label: "Endpoint series", tex: "\\sum_{n=0}^{\\infty}a_n(-R)^n" },
    { label: "Decision", tex: "\\text{apply an ordinary series test}" },
  ]}
/>

### Step 3: Test the right endpoint

Substitute \(x=c+R\):

<PhysicsDerivation
  items={[
    { label: "Right endpoint", tex: "x=c+R" },
    { label: "Shifted value", tex: "x-c=R" },
    { label: "Endpoint series", tex: "\\sum_{n=0}^{\\infty}a_nR^n" },
    { label: "Decision", tex: "\\text{apply an ordinary series test}" },
  ]}
/>

## Rules

<Equation label="Possible open interval" tex="(c-R,c+R)" />

<Equation label="Possible closed interval" tex="[c-R,c+R]" />

<Equation label="Possible half-open intervals" tex="[c-R,c+R)\quad\text{or}\quad(c-R,c+R]" />

If \(R=\infty\), the interval of convergence is all real numbers. If \(R=0\), only the centre may converge.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the interval of convergence of \\(\\sum_{n=0}^{\\infty}x^n\\).",
      answer: "The radius condition is \\(|x|\\lt1\\), so the open interval is \\((-1,1)\\). At \\(x=1\\), the series is \\(1+1+1+\\cdots\\), which diverges. At \\(x=-1\\), the terms alternate \\(1,-1,1,-1,\\ldots\\) and do not approach zero in partial sums. The interval is \\((-1,1)\\).",
    },
    {
      title: "Example 2",
      question: "If a power series has centre \\(2\\), radius \\(3\\), and both endpoints converge, what is the interval?",
      answer: "The open interval is \\(-1\\lt x\\lt 5\\). Since both endpoints converge, include them: \\([-1,5]\\).",
    },
    {
      title: "Example 3",
      question: "Why are endpoints important in a model?",
      answer: "An endpoint can represent a boundary value of a physical parameter. If the series fails there, the formula cannot be used exactly at that boundary even though it works arbitrarily close inside the interval.",
    },
  ]}
/>

## Checks

- Always test endpoints by substitution into the original series.
- The ratio test usually gives no answer at endpoints.
- The interval of convergence includes exactly the convergent endpoints.
- Radius and interval are related, but they are not the same object.`;
