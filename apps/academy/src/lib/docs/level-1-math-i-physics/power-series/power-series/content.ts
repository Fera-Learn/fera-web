export const content = String.raw`## Principle

A power series is a polynomial with infinitely many terms. Instead of stopping at a highest power, it keeps adding powers of the same shifted variable.

<Equation label="Power series about c" tex="\sum_{n=0}^{\infty}a_n(x-c)^n" />

The numbers \(a_n\) are fixed coefficients. The input \(x\) is allowed only where the infinite series converges. This makes a power series both a function and a convergence problem.

Power series are useful in physics because they replace complicated functions by simpler powers of a small quantity. Near an equilibrium point, a small angle, or a small displacement, the first few terms often give the leading behaviour.

## Notation

<Notation
  items={[
    { symbol: "\\sum_{n=0}^{\\infty}a_n(x-c)^n", meaning: "power series centred at c" },
    { symbol: "a_n", meaning: "coefficient multiplying the nth power" },
    { symbol: "c", meaning: "centre of the series" },
    { symbol: "x-c", meaning: "shifted variable measured from the centre" },
    { symbol: "R", meaning: "radius of convergence" },
    { symbol: "S_N(x)", meaning: "partial sum using terms from n=0 to N" },
  ]}
/>

The centre is the value of \(x\) where the powers simplify most strongly. At \(x=c\), all terms with \(n\ge1\) vanish, so the series value starts from \(a_0\) when it converges.

## Method

### Step 1: Identify the centre and coefficient pattern

Write the series in the standard form

<Equation label="Standard form" tex="a_0+a_1(x-c)+a_2(x-c)^2+a_3(x-c)^3+\cdots" />

The centre \(c\) is the number being subtracted from \(x\). The coefficient \(a_n\) is everything multiplying \((x-c)^n\).

### Step 2: Treat each fixed x as an ordinary series

For a chosen value of \(x\), the expression \((x-c)\) is just a number. The power series becomes a numerical series:

<PhysicsDerivation
  items={[
    { label: "Start with the power series", tex: "\\sum_{n=0}^{\\infty}a_n(x-c)^n" },
    { label: "Choose a fixed input", tex: "x=x_0" },
    { label: "Substitute the input", tex: "\\sum_{n=0}^{\\infty}a_n(x_0-c)^n" },
    { label: "Test this as a numerical series", tex: "a_0+a_1(x_0-c)+a_2(x_0-c)^2+\\cdots" },
  ]}
/>

### Step 3: Use the convergent values as the domain

The set of \(x\)-values that make the numerical series converge is the convergence set of the power series. For most Level 1 work this set is an interval around the centre.

## Rules

<Equation label="Partial sum" tex="S_N(x)=\sum_{n=0}^{N}a_n(x-c)^n" />

<Equation label="Value when convergent" tex="S(x)=\lim_{N\to\infty}S_N(x)" />

<Equation label="Convergence interval shape" tex="|x-c|\lt R" />

Inside its convergence interval, a power series behaves like a well-controlled function. Outside that interval it diverges. At the two endpoints, separate tests are needed.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Identify the centre and coefficients of \\(3-2(x-1)+5(x-1)^2\\).",
      answer: "The powers are written in \\((x-1)\\), so the centre is \\(c=1\\). The coefficients are \\(a_0=3\\), \\(a_1=-2\\), \\(a_2=5\\), and \\(a_n=0\\) for \\(n\\ge3\\). This is a finite power series, so it is a polynomial.",
    },
    {
      title: "Example 2",
      question: "For \\(\\sum_{n=0}^{\\infty}x^n\\), what ordinary series is obtained at \\(x=1/2\\)?",
      answer: "Substitute \\(x=1/2\\) to get \\(\\sum_{n=0}^{\\infty}(1/2)^n\\). This is a geometric series with ratio \\(1/2\\), so it converges.",
    },
    {
      title: "Example 3",
      question: "Why are power series useful for small oscillations?",
      answer: "If the variable is a small displacement \\(u\\), powers \\(u^2,u^3,\\ldots\\) become successively smaller. Keeping the first one or two non-zero terms often gives the leading physical behaviour near equilibrium.",
    },
  ]}
/>

## Checks

- A power series is not automatically valid for every \(x\).
- The centre \(c\) is part of the structure, not an optional decoration.
- For a fixed input, a power series becomes an ordinary numerical series.
- Endpoint convergence is not decided by the radius alone.`;
