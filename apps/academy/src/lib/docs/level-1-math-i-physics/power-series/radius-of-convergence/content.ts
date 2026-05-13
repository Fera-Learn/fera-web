export const content = String.raw`## Principle

The radius of convergence tells how far from the centre a power series can be trusted before it stops converging. For a series centred at \(c\), the main convergence region has the form \(|x-c|\lt R\).

<Equation label="Radius condition" tex="|x-c|\lt R" />

The radius is a distance in the input variable. It does not decide the endpoints \(x=c-R\) and \(x=c+R\); those must be tested separately.

## Notation

<Notation
  items={[
    { symbol: "R", meaning: "radius of convergence" },
    { symbol: "c", meaning: "centre of the power series" },
    { symbol: "x", meaning: "input variable" },
    { symbol: "u=x-c", meaning: "shifted variable" },
    { symbol: "t_n", meaning: "nth term of the power series" },
  ]}
/>

The value \(R\) may be finite, zero, or infinite. In Level 1 examples it is usually found using the ratio test.

## Method

### Step 1: Write the nth term

For

<Equation label="General term" tex="\sum_{n=0}^{\infty}a_n(x-c)^n" />

the nth term is \(t_n=a_n(x-c)^n\).

### Step 2: Apply the ratio test

Use the absolute ratio of consecutive terms:

<PhysicsDerivation
  items={[
    { label: "nth term", tex: "t_n=a_n(x-c)^n" },
    { label: "Next term", tex: "t_{n+1}=a_{n+1}(x-c)^{n+1}" },
    { label: "Absolute ratio", tex: "\\left|\\frac{t_{n+1}}{t_n}\\right|=\\left|\\frac{a_{n+1}}{a_n}\\right||x-c|" },
    { label: "Convergence requirement", tex: "\\lim_{n\\to\\infty}\\left|\\frac{t_{n+1}}{t_n}\\right|\\lt1" },
  ]}
/>

### Step 3: Solve for the distance from the centre

The inequality from the ratio test usually becomes \(|x-c|\lt R\). The number on the right is the radius of convergence.

## Rules

<Equation label="Ratio-test condition" tex="\lim_{n\to\infty}\left|\frac{t_{n+1}}{t_n}\right|\lt1" />

<Equation label="Finite radius form" tex="c-R\lt x\lt c+R" />

<Equation label="Infinite radius" tex="R=\infty" />

If the ratio limit is \(L|x-c|\), then convergence requires \(L|x-c|\lt1\), so \(R=1/L\) when \(L>0\).

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the radius of convergence of \\(\\sum_{n=0}^{\\infty}x^n\\).",
      answer: "The ratio is \\(|x^{n+1}/x^n|=|x|\\). Convergence requires \\(|x|\\lt1\\), so the radius is \\(R=1\\).",
    },
    {
      title: "Example 2",
      question: "Find the radius of convergence of \\(\\sum_{n=0}^{\\infty}(x-3)^n/2^n\\).",
      answer: "The ratio is \\(|x-3|/2\\). Require \\(|x-3|/2\\lt1\\), so \\(|x-3|\\lt2\\). The radius is \\(R=2\\).",
    },
    {
      title: "Example 3",
      question: "Why does a finite radius matter in a small-parameter approximation?",
      answer: "The approximation is based on a convergent infinite series. If the parameter lies outside the radius, adding more terms does not approach a stable value, so the series cannot represent the model there.",
    },
  ]}
/>

## Checks

- The radius is a non-negative distance, not an interval.
- A ratio test result of \(|x-c|\lt R\) says nothing final about endpoints.
- If \(R=\infty\), the series converges for every real \(x\).
- If \(R=0\), the series converges only possibly at its centre.`;
