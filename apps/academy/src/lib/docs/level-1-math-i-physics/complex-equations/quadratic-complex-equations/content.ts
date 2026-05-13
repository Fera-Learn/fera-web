export const content = String.raw`## Principle

A quadratic complex equation has a squared unknown. For real coefficients, complex numbers make every quadratic solvable, even when the discriminant is negative.

<Equation label="Quadratic equation" tex="az^2+bz+c=0,\quad a,b,c\in\mathbb R,\quad a\ne0" />

The complex number system contains square roots of negative real numbers because \(i^2=-1\).

## Notation

- \(z\) is the unknown complex number.
- \(a\), \(b\), and \(c\) are real coefficients.
- \(\Delta=b^2-4ac\) is the discriminant.
- \(i\) is the imaginary unit, with \(i^2=-1\).

## Method

Start with:

<Equation label="Start" tex="az^2+bz+c=0" />

Multiply by \(4a\):

<Equation label="Multiply by 4a" tex="4a^2z^2+4abz+4ac=0" />

Move the constant term:

<Equation label="Move constant" tex="4a^2z^2+4abz=-4ac" />

Add \(b^2\) to both sides:

<Equation label="Complete square" tex="4a^2z^2+4abz+b^2=b^2-4ac" />

Factor the left-hand side:

<Equation label="Squared form" tex="(2az+b)^2=b^2-4ac=\Delta" />

Then solve for \(z\). If \(\Delta\lt0\), write \(\Delta=-|\Delta|\), so \(\sqrt{\Delta}=i\sqrt{|\Delta|}\).

## Rules

<Equation label="Positive discriminant" tex="\Delta\gt0\quad\Longrightarrow\quad z=\frac{-b\pm\sqrt{\Delta}}{2a}" />

<Equation label="Zero discriminant" tex="\Delta=0\quad\Longrightarrow\quad z=-\frac{b}{2a}" />

<Equation label="Negative discriminant" tex="\Delta\lt0\quad\Longrightarrow\quad z=\frac{-b\pm i\sqrt{-\Delta}}{2a}" />

For real coefficients, non-real roots occur in conjugate pairs. If \(u+iv\) is a root, then \(u-iv\) is also a root.

## Examples

Solve:

<Equation label="Example equation" tex="z^2+2z+2=0" />

Here \(a=1\), \(b=2\), and \(c=2\). The discriminant is:

<Equation label="Example discriminant" tex="\Delta=b^2-4ac=2^2-4(1)(2)=4-8=-4" />

Because \(\Delta\lt0\), use the negative-discriminant form:

<Equation label="Example formula" tex="z=\frac{-2\pm i\sqrt{4}}{2}" />

Simplify:

<Equation label="Example answer" tex="z=-1\pm i" />

## Checks

- Confirm that the equation is actually quadratic by checking \(a\ne0\).
- Use \(i\sqrt{-\Delta}\), not \(\sqrt{\Delta}\), when \(\Delta\lt0\).
- For real coefficients, check that non-real roots are conjugates.
- Substitute one root back into the original equation when signs are uncertain.`;
