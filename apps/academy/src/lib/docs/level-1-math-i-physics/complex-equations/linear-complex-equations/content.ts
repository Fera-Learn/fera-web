export const content = String.raw`## Principle

A linear complex equation is a first-degree equation for an unknown complex number. It has the same algebraic shape as a real linear equation, but the coefficients and the solution may be complex numbers.

<Equation label="Linear complex equation" tex="az + b = 0,\quad a,b,z\in\mathbb C,\quad a\ne 0" />

Because every non-zero complex number has a reciprocal, a linear complex equation with \(a\ne0\) has exactly one complex solution.

## Notation

- \(z\) is the unknown complex number.
- \(a\) is the coefficient of \(z\).
- \(b\) is the constant term.
- \(\overline{a}\) is the complex conjugate of \(a\).
- \(|a|\) is the modulus of \(a\).

## Method

Start with the equation:

<Equation label="Start" tex="az + b = 0" />

Subtract \(b\) from both sides:

<Equation label="Isolate the z term" tex="az = -b" />

Divide by \(a\), which is allowed because \(a\ne0\):

<Equation label="Linear solution" tex="z = -\frac{b}{a}" />

If the denominator is complex, write the quotient in standard form by multiplying top and bottom by the conjugate of the denominator:

<Equation label="Conjugate division" tex="\frac{w}{a}=\frac{w\overline{a}}{a\overline{a}}=\frac{w\overline{a}}{|a|^2}" />

The denominator \(|a|^2\) is real and positive, so the final expression can be separated into real and imaginary parts.

## Rules

- A degree-one complex equation has one solution when the coefficient of \(z\) is not zero.
- If \(a=0\) and \(b\ne0\), the equation has no solution.
- If \(a=0\) and \(b=0\), every complex number is a solution.
- Complex numbers are not ordered, so solving does not involve choosing a larger or smaller solution.

## Examples

Solve:

<Equation label="Example equation" tex="(2-i)z+(1+3i)=0" />

First isolate \(z\):

<Equation label="Example isolate" tex="(2-i)z=-(1+3i)=-1-3i" />

Divide by \(2-i\):

<Equation label="Example quotient" tex="z=\frac{-1-3i}{2-i}" />

Multiply top and bottom by \(2+i\):

<Equation label="Example rationalise" tex="z=\frac{(-1-3i)(2+i)}{(2-i)(2+i)}" />

Compute the numerator and denominator:

<Equation label="Example expansion" tex="(-1-3i)(2+i)=-2-i-6i-3i^2=1-7i" />

<Equation label="Example denominator" tex="(2-i)(2+i)=4-i^2=5" />

Therefore:

<Equation label="Example answer" tex="z=\frac{1-7i}{5}=\frac15-\frac75 i" />

## Checks

- Check that the coefficient of \(z\) is not zero before dividing.
- Use the conjugate of the denominator, not the numerator, when simplifying a complex quotient.
- Substitute the result back into the original equation to catch sign errors.
- Keep the final answer in standard form \(x+iy\) unless polar form is requested.`;
