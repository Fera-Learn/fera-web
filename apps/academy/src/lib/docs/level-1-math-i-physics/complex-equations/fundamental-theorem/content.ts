export const content = String.raw`## Principle

The fundamental theorem of algebra says that complex numbers are large enough to solve every non-constant polynomial equation at least once.

<Equation label="Polynomial equation" tex="a_nz^n+a_{n-1}z^{n-1}+\cdots+a_1z+a_0=0,\quad a_n\ne0" />

The coefficients may be real or complex. Once one root is found, the polynomial can be divided by the corresponding linear factor, and the process can continue.

## Notation

- \(p(z)\) is a polynomial in the complex variable \(z\).
- \(n\) is the degree of the polynomial when \(a_n\ne0\).
- \(z_0\) is a root if \(p(z_0)=0\).
- A repeated root is counted with multiplicity.

## Method

The theorem gives existence, not a formula. It is used as a counting and checking tool.

If \(z_0\) is a root, then \(z-z_0\) is a factor:

<Equation label="Root factor" tex="p(z_0)=0\quad\Longrightarrow\quad p(z)=(z-z_0)q(z)" />

The new polynomial \(q(z)\) has degree one less than \(p(z)\). Repeating this idea gives a complete factorisation over \(\mathbb C\):

<Equation label="Complete factorisation" tex="p(z)=a_n(z-z_1)(z-z_2)\cdots(z-z_n)" />

Some of the roots \(z_1,z_2,\ldots,z_n\) may be equal.

## Rules

- Every non-constant complex polynomial has at least one complex root.
- A degree \(n\) polynomial has \(n\) complex roots counted with multiplicity.
- Real-coefficient polynomials have non-real roots in conjugate pairs.
- The theorem does not say that roots can always be written by a simple formula.

## Examples

Solve the polynomial equation:

<Equation label="Example equation" tex="z^6-2z^3+2=0" />

Let \(w=z^3\). Then the equation becomes:

<Equation label="Substitution" tex="w^2-2w+2=0" />

Use the quadratic formula:

<Equation label="Quadratic in w" tex="w=\frac{2\pm i\sqrt4}{2}=1\pm i" />

So the original equation splits into two cubic equations:

<Equation label="Split equations" tex="z^3=1+i\quad\text{or}\quad z^3=1-i" />

Each cubic has three complex roots, so together they produce six roots. That matches the degree-six count predicted by the theorem.

For \(z^3=1+i\), the roots are:

<Equation label="First cubic roots" tex="2^{1/6}e^{i\pi/12},\quad 2^{1/6}e^{3\pi i/4},\quad 2^{1/6}e^{17\pi i/12}" />

For \(z^3=1-i\), the roots are:

<Equation label="Second cubic roots" tex="2^{1/6}e^{-i\pi/12},\quad 2^{1/6}e^{7\pi i/12},\quad 2^{1/6}e^{5\pi i/4}" />

## Checks

- Count roots with multiplicity when comparing with the degree.
- For real coefficients, check that non-real roots come with their conjugates.
- Do not use the theorem for transcendental equations such as \(e^z=1\).
- Treat the theorem as an existence and counting result, not as a root-finding algorithm.`;
