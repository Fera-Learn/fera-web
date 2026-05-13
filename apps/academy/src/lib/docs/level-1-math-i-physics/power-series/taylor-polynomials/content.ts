export const content = String.raw`## Principle

A Taylor polynomial is a finite polynomial chosen so that its value and derivatives match a function at one centre. It is the finite version of a Taylor series and is often the practical object used for approximation.

<Equation label="Taylor polynomial" tex="P_N(x)=\sum_{n=0}^{N}\frac{f^{(n)}(c)}{n!}(x-c)^n" />

In physics, Taylor polynomials describe local behaviour: linear response, quadratic energy near equilibrium, and small-angle approximations are all Taylor-polynomial ideas.

## Notation

<Notation
  items={[
    { symbol: "P_N(x)", meaning: "Taylor polynomial of degree N" },
    { symbol: "c", meaning: "centre of the approximation" },
    { symbol: "f^{(n)}(c)", meaning: "nth derivative of f at c" },
    { symbol: "N", meaning: "highest power kept" },
    { symbol: "R_N(x)", meaning: "remainder or error after degree N" },
  ]}
/>

The degree \(N\) is the highest power retained. Higher degree usually improves the approximation near the centre, but it also needs more derivative information.

## Method

### Step 1: Choose the centre and degree

Pick a centre \(c\) near the input values of interest. Choose \(N\) based on how many derivatives are available and how accurate the approximation needs to be.

### Step 2: Compute derivatives at the centre

Find \(f(c), f'(c), f''(c),\ldots,f^{(N)}(c)\).

### Step 3: Assemble the polynomial

Substitute the derivative values into the Taylor polynomial formula:

<PhysicsDerivation
  items={[
    { label: "Degree 0 term", tex: "\\frac{f(c)}{0!}(x-c)^0=f(c)" },
    { label: "Degree 1 term", tex: "\\frac{f'(c)}{1!}(x-c)=f'(c)(x-c)" },
    { label: "Degree 2 term", tex: "\\frac{f''(c)}{2!}(x-c)^2" },
    { label: "Degree N term", tex: "\\frac{f^{(N)}(c)}{N!}(x-c)^N" },
  ]}
/>

## Rules

<Equation label="Degree N Taylor polynomial" tex="P_N(x)=f(c)+f'(c)(x-c)+\frac{f''(c)}{2!}(x-c)^2+\cdots+\frac{f^{(N)}(c)}{N!}(x-c)^N" />

<Equation label="Maclaurin polynomial" tex="c=0:\quad P_N(x)=\sum_{n=0}^{N}\frac{f^{(n)}(0)}{n!}x^n" />

<Equation label="Function split" tex="f(x)=P_N(x)+R_N(x)" />

The polynomial is exact at \(x=c\) up to the derivative order used: \(P_N^{(k)}(c)=f^{(k)}(c)\) for \(0\le k\le N\).

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the quadratic Taylor polynomial for \\(e^x\\) about \\(0\\).",
      answer: "All derivatives of \\(e^x\\) equal \\(e^x\\), so at \\(0\\) they equal \\(1\\). Therefore \\(P_2(x)=1+x+x^2/2\\).",
    },
    {
      title: "Example 2",
      question: "Find the cubic Maclaurin polynomial for \\(\\sin x\\).",
      answer: "The values are \\(\\sin0=0\\), \\(\\cos0=1\\), \\(-\\sin0=0\\), and \\(-\\cos0=-1\\). Thus \\(P_3(x)=x-x^3/3!\\).",
    },
    {
      title: "Example 3",
      question: "Why is a quadratic term important near a stable equilibrium?",
      answer: "At equilibrium the first derivative is zero. The quadratic term is then the first non-zero correction and often gives the restoring-force or harmonic-oscillator approximation.",
    },
  ]}
/>

## Checks

- Taylor polynomials are finite sums.
- The centre controls where the approximation is most accurate.
- The coefficient of \((x-c)^n\) uses \(n!\) in the denominator.
- A Taylor polynomial is not automatically a global approximation.`;
