export const content = String.raw`## Principle

A remainder measures the error made when an infinite series or a function is replaced by a finite approximation. It answers the practical question: how much could the omitted terms matter?

<Equation label="Approximation error" tex="R_N(x)=f(x)-P_N(x)" />

Remainders are essential in numerical physics. They tell whether a truncated expansion is accurate enough for a calculation or experiment.

## Notation

<Notation
  items={[
    { symbol: "R_N(x)", meaning: "remainder after keeping terms through degree N" },
    { symbol: "P_N(x)", meaning: "degree N Taylor polynomial" },
    { symbol: "M", meaning: "upper bound for a derivative or term size" },
    { symbol: "\\epsilon", meaning: "allowed error tolerance" },
    { symbol: "T_n", meaning: "nth term of a series" },
  ]}
/>

The best remainder estimate depends on the type of series. Taylor's theorem, alternating-series estimates, and geometric tails are common Level 1 tools.

## Method

### Step 1: Identify the approximation

Decide what is being kept and what is being omitted. For a Taylor polynomial, the omitted part starts at degree \(N+1\).

### Step 2: Choose an error estimate

For Taylor polynomials with bounded higher derivative, use a Lagrange-style bound. For a geometric tail, use the exact tail formula. For alternating decreasing terms, the next term bounds the error.

### Step 3: Compare with tolerance

If an error tolerance \(\epsilon\) is required, solve an inequality such as

<PhysicsDerivation
  items={[
    { label: "Start with an error bound", tex: "|R_N(x)|\\le B_N" },
    { label: "Require the error to be acceptable", tex: "B_N\\le\\epsilon" },
    { label: "Solve for the degree", tex: "N\\text{ large enough}" },
  ]}
/>

## Rules

<Equation label="Taylor remainder bound" tex="|R_N(x)|\le\frac{M}{(N+1)!}|x-c|^{N+1}" />

<Equation label="Geometric tail" tex="\sum_{n=N+1}^{\infty}ar^n=\frac{ar^{N+1}}{1-r}\quad(|r|\lt1)" />

<Equation label="Alternating-series estimate" tex="|R_N|\le |T_{N+1}|" />

The alternating estimate requires terms that decrease in size to zero and alternate in sign.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Using \\(e^x\\approx1+x\\), bound the error at \\(x=0.05\\) if \\(e^t\\le2\\) on the interval.",
      answer: "The first omitted Taylor order is quadratic. Use \\(|R_1(x)|\\le M|x|^2/2!\\) with \\(M=2\\). At \\(x=0.05\\), \\(|R_1|\\le2(0.05)^2/2=0.0025\\).",
    },
    {
      title: "Example 2",
      question: "Estimate the tail after keeping terms through \\(r^3\\) in \\(1+r+r^2+\\cdots\\), where \\(|r|\\lt1\\).",
      answer: "The omitted tail is \\(r^4+r^5+\\cdots=r^4/(1-r)\\) for \\(|r|\\lt1\\). If \\(r\\) is positive, this is the exact omitted amount.",
    },
    {
      title: "Example 3",
      question: "Why is a remainder estimate more useful than saying higher-order terms are small?",
      answer: "A remainder estimate gives a numerical or symbolic bound. That lets you compare the error with a measurement uncertainty or a required tolerance.",
    },
  ]}
/>

## Checks

- State what has been kept before estimating what has been omitted.
- A remainder is an error term, not another approximation by itself.
- Geometric and alternating estimates have conditions; check them first.
- In physics calculations, compare the remainder with the scale of the measured quantity.`;
