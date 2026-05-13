export const content = String.raw`## Principle

The \(n\)-th roots of unity are the complex solutions of \(z^n=1\). They lie on the unit circle and are equally spaced in argument.

<Equation label="Roots of unity equation" tex="z^n=1" />

For a positive integer \(n\), this equation has exactly \(n\) distinct complex solutions.

## Notation

- \(n\) is a positive integer.
- \(z=re^{i\theta}\) is the polar form of the unknown complex number.
- \(r=|z|\) is the modulus of \(z\).
- \(\theta\) is an argument of \(z\).
- \(k\) is an integer that records the possible argument shifts by multiples of \(2\pi\).

## Method

Write the unknown in polar form:

<Equation label="Unknown polar form" tex="z=re^{i\theta}" />

Raise to the \(n\)-th power:

<Equation label="Power in polar form" tex="z^n=r^ne^{in\theta}" />

Write \(1\) with all possible arguments:

<Equation label="Unity arguments" tex="1=e^{2\pi i k},\quad k\in\mathbb Z" />

Match moduli and arguments:

<Equation label="Match modulus" tex="r^n=1" />

<Equation label="Match argument" tex="n\theta=2\pi k" />

Because \(r\ge0\), the modulus equation gives \(r=1\). The argument equation gives:

<Equation label="Root arguments" tex="\theta=\frac{2\pi k}{n}" />

Only \(n\) independent values are needed, because increasing \(k\) by \(n\) adds \(2\pi\) to the argument and gives the same complex number.

## Rules

<Equation label="Roots of unity formula" tex="z_k=e^{2\pi i k/n},\quad k=0,1,2,\ldots,n-1" />

- Each root has modulus \(1\).
- Adjacent roots differ in argument by \(2\pi/n\).
- The points form a regular \(n\)-sided polygon in the complex plane.
- One root is always \(z_0=1\).

## Examples

Solve:

<Equation label="Fifth roots equation" tex="z^5=1" />

Use the roots of unity formula with \(n=5\):

<Equation label="Fifth roots formula" tex="z_k=e^{2\pi i k/5},\quad k=0,1,2,3,4" />

So the five solutions are:

<Equation label="Fifth roots list" tex="1,\ e^{2\pi i/5},\ e^{4\pi i/5},\ e^{6\pi i/5},\ e^{8\pi i/5}" />

The next value, \(k=5\), gives \(e^{2\pi i}=1\), which repeats the first solution.

## Checks

- Do not list every integer \(k\); choose \(k=0,1,\ldots,n-1\) for the independent solutions.
- Remember that arguments are only determined up to multiples of \(2\pi\).
- Check that every root has modulus \(1\).
- Check that substituting a root gives \((e^{2\pi i k/n})^n=e^{2\pi i k}=1\).`;
