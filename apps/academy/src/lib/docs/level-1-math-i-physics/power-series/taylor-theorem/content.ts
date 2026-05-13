export const content = String.raw`## Principle

Taylor's theorem explains why Taylor polynomials approximate a function. It says that a sufficiently differentiable function equals its Taylor polynomial plus a remainder term.

<Equation label="Taylor theorem form" tex="f(x)=P_N(x)+R_N(x)" />

The theorem is the bridge between formal derivative matching and controlled approximation. In physics, this is what justifies keeping only the leading terms in a small-parameter model.

## Notation

<Notation
  items={[
    { symbol: "P_N(x)", meaning: "Taylor polynomial of degree N about c" },
    { symbol: "R_N(x)", meaning: "remainder after degree N" },
    { symbol: "f^{(N+1)}", meaning: "derivative one order higher than the polynomial" },
    { symbol: "c", meaning: "centre of the Taylor approximation" },
    { symbol: "\\xi", meaning: "some point between c and x in the Lagrange remainder form" },
  ]}
/>

The exact value of \(\xi\) is usually not known. The useful part is that it lies between the centre and the input, which lets us bound the derivative there.

## Method

### Step 1: Build the Taylor polynomial

Compute derivatives at \(c\) up to order \(N\), then form \(P_N(x)\).

### Step 2: Write the remainder form

One common Level 1 form is the Lagrange remainder:

<Equation label="Lagrange remainder" tex="R_N(x)=\frac{f^{(N+1)}(\xi)}{(N+1)!}(x-c)^{N+1}" />

where \(\xi\) lies between \(c\) and \(x\).

### Step 3: Use a bound if accuracy is needed

If \(|f^{(N+1)}(t)|\le M\) between \(c\) and \(x\), then

<PhysicsDerivation
  items={[
    { label: "Start from Lagrange remainder", tex: "R_N(x)=\\frac{f^{(N+1)}(\\xi)}{(N+1)!}(x-c)^{N+1}" },
    { label: "Take absolute values", tex: "|R_N(x)|=\\frac{|f^{(N+1)}(\\xi)|}{(N+1)!}|x-c|^{N+1}" },
    { label: "Use derivative bound", tex: "|f^{(N+1)}(\\xi)|\\le M" },
    { label: "Error bound", tex: "|R_N(x)|\\le\\frac{M}{(N+1)!}|x-c|^{N+1}" },
  ]}
/>

## Rules

<Equation label="Taylor polynomial" tex="P_N(x)=\sum_{n=0}^{N}\frac{f^{(n)}(c)}{n!}(x-c)^n" />

<Equation label="Function plus error" tex="f(x)=P_N(x)+R_N(x)" />

<Equation label="Remainder bound" tex="|R_N(x)|\le\frac{M}{(N+1)!}|x-c|^{N+1}" />

The bound gets smaller when \(|x-c|\) is small or when the factorial in the denominator dominates the derivative growth.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Use Taylor's theorem to describe \\(e^x\\) after the linear term about \\(0\\).",
      answer: "The linear Taylor polynomial is \\(P_1(x)=1+x\\). Taylor's theorem gives \\(e^x=1+x+R_1(x)\\), where \\(R_1(x)=e^{\\xi}x^2/2!\\) for some \\(\\xi\\) between \\(0\\) and \\(x\\).",
    },
    {
      title: "Example 2",
      question: "If \\(|f'''(t)|\\le 6\\) near \\(0\\), bound the quadratic remainder at \\(x=0.1\\).",
      answer: "For a quadratic polynomial, \\(N=2\\). Use \\(|R_2(x)|\\le M|x|^3/3!\\) with \\(M=6\\). Thus \\(|R_2(0.1)|\\le 6(0.1)^3/6=0.001\\).",
    },
    {
      title: "Example 3",
      question: "Why does Taylor's theorem support linear response models?",
      answer: "Near a centre \\(c\\), the function equals \\(f(c)+f'(c)(x-c)\\) plus terms of order \\((x-c)^2\\). If the displacement is small, the remainder is smaller than the linear term under suitable derivative bounds.",
    },
  ]}
/>

## Checks

- Taylor's theorem includes an error term; it is not just a polynomial formula.
- The Lagrange remainder uses a derivative one order higher than the polynomial.
- Error bounds depend on an interval between \(c\) and \(x\).
- A small input displacement is what makes local approximation powerful.`;
