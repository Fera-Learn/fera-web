export const content = String.raw`## Principle

A Taylor series is the infinite power series built from all derivatives of a function at a centre. When it converges to the function, it gives a local polynomial representation with infinitely many terms.

<Equation label="Taylor series" tex="\sum_{n=0}^{\infty}\frac{f^{(n)}(c)}{n!}(x-c)^n" />

The special case \(c=0\) is called a Maclaurin series. Many common functions in physics are used through their Maclaurin series near zero.

## Notation

<Notation
  items={[
    { symbol: "f^{(n)}(c)", meaning: "nth derivative of f at the centre c" },
    { symbol: "n!", meaning: "factorial of n" },
    { symbol: "c", meaning: "centre of the Taylor series" },
    { symbol: "x-c", meaning: "small displacement from the centre" },
    { symbol: "\\approx", meaning: "approximately equal, often after truncating the series" },
  ]}
/>

A Taylor series may converge without equalling the original function everywhere. In standard Level 1 examples such as \(e^x\), \(\sin x\), \(\cos x\), and \((1-x)^{-1}\), it does represent the function on its convergence interval.

## Method

### Step 1: Compute derivative values

Make a table of \(f(c), f'(c), f''(c)\), and so on. Look for a repeating pattern.

### Step 2: Substitute into the Taylor formula

Use the coefficient formula term by term:

<PhysicsDerivation
  items={[
    { label: "General coefficient", tex: "a_n=\\frac{f^{(n)}(c)}{n!}" },
    { label: "Power of displacement", tex: "(x-c)^n" },
    { label: "Series term", tex: "\\frac{f^{(n)}(c)}{n!}(x-c)^n" },
    { label: "Sum all terms", tex: "\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(c)}{n!}(x-c)^n" },
  ]}
/>

### Step 3: State where it is valid

Find or quote the convergence interval. A Taylor formula without its validity range can be misleading.

## Rules

<Equation label="Maclaurin series for exponential" tex="e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!}" />

<Equation label="Maclaurin series for sine" tex="\sin x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{(2n+1)!}" />

<Equation label="Maclaurin series for cosine" tex="\cos x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n}}{(2n)!}" />

<Equation label="Geometric series" tex="\frac{1}{1-x}=\sum_{n=0}^{\infty}x^n\quad(|x|\lt1)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Write the first four non-zero terms of the Maclaurin series for \\(e^x\\).",
      answer: "Use \\(e^x=\\sum x^n/n!\\). The first four non-zero terms are \\(1+x+x^2/2!+x^3/3!\\).",
    },
    {
      title: "Example 2",
      question: "Write the first three non-zero terms of \\(\\cos x\\).",
      answer: "Use the cosine series: \\(\\cos x=1-x^2/2!+x^4/4!-\\cdots\\). The first three non-zero terms are \\(1-x^2/2!+x^4/4!\\).",
    },
    {
      title: "Example 3",
      question: "Why is \\(\\sin x\\approx x\\) for small \\(x\\)?",
      answer: "The sine series begins \\(\\sin x=x-x^3/3!+\\cdots\\). When \\(|x|\\) is small, the cubic and higher powers are much smaller than \\(x\\), so the leading approximation is \\(\\sin x\\approx x\\).",
    },
  ]}
/>

## Checks

- Taylor series are infinite; Taylor polynomials are finite truncations.
- Always state the centre.
- Radians are required for the standard sine and cosine series.
- Convergence to the function is an additional statement, not just notation.`;
