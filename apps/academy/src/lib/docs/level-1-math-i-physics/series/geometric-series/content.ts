export const content = String.raw`## Principle

A geometric series has terms made by multiplying by the same fixed ratio each time. This pattern is useful whenever a model has repeated fractional contributions, such as successive reflections, damping factors, or repeated percentage losses.

The main advantage of a geometric series is that its partial sums can be found by a short algebraic cancellation.

## Notation

- \\(a\\) is the first coefficient in the geometric series.
- \\(x\\) is the common ratio between consecutive terms.
- \\(n\\) is the summation index.
- \\(N\\) is the number of terms in the finite partial sum when the index starts at \\(0\\).
- \\(S_N\\) is the finite geometric partial sum.
- \\(|x|\\) is the absolute value of the ratio \\(x\\).

## Method

To derive the finite geometric sum, write the sum, multiply it by the ratio, then subtract.

<Equation label="Finite geometric sum" tex="S_N=\sum_{n=0}^{N-1}ax^n=a+ax+\cdots+ax^{N-1}" />

Multiplying by \\(x\\) shifts every term one place:

<Equation label="Shifted sum" tex="xS_N=ax+ax^2+\cdots+ax^N" />

Subtract the shifted line from the original line before dividing:

<Equation label="Geometric subtraction" tex="S_N-xS_N=a-ax^N" />

<Equation label="Finite geometric formula" tex="S_N=\frac{a(1-x^N)}{1-x},\quad x\ne1" />

If \\(|x|\lt1\\), then \\(x^N\to0\\), so the infinite sum has a finite value.

<Equation label="Infinite geometric formula" tex="\sum_{n=0}^{\infty}ax^n=\frac{a}{1-x},\quad |x|\lt1" />

## Rules

- For \\(x\ne1\\), the finite sum is \\(S_N=a(1-x^N)/(1-x)\\).
- If \\(x=1\\), the finite sum is simply \\(N\\) copies of \\(a\\), so \\(S_N=Na\\).
- The infinite formula \\(\sum_{n=0}^{\infty}ax^n=a/(1-x)\\) is valid only when \\(|x|\lt1\\).
- If the terms do not approach \\(0\\), the infinite series diverges.

## Examples

Compute \\(\sum_{n=0}^{\infty}3(1/2)^n\\). Here \\(a=3\\) and \\(x=1/2\\). Since \\(|x|=1/2\lt1\\), use the infinite geometric formula:

<Equation label="Geometric example" tex="\sum_{n=0}^{\infty}3\left(\frac12\right)^n=\frac{3}{1-\frac12}=6" />

The finite derivation explains why this works. First write \\(S_N=3+3/2+3/4+\cdots+3(1/2)^{N-1}\\). Then \\((1/2)S_N=3/2+3/4+\cdots+3(1/2)^N\\). Subtracting leaves only the first and last shifted terms:

<Equation label="Example finite cancellation" tex="S_N-\frac12S_N=3-3\left(\frac12\right)^N" />

So \\(S_N=6(1-(1/2)^N)\\), and the term \\((1/2)^N\\) tends to \\(0\\).

## Checks

- Check the first index: starting at \\(0\\) and starting at \\(1\\) give different first terms.
- Check \\(|x|\lt1\\) before using the infinite formula.
- Treat \\(x=1\\) separately, because the denominator \\(1-x\\) is zero.
- Do not use the infinite formula when \\(|x|\ge1\\).`;
