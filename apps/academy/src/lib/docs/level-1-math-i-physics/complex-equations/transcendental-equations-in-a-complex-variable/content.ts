export const content = String.raw`## Principle

A transcendental equation is an equation involving functions that are not finite polynomials or rational functions of the unknown. Complex exponentials and trigonometric functions produce many such equations.

<Equation label="Transcendental equation" tex="f(z)=0\quad\text{with }f\text{ not a polynomial or rational function}" />

The fundamental theorem of algebra does not control transcendental equations. They may have no solutions, finitely many solutions, or infinitely many solutions.

## Notation

- \(z=x+iy\) is the unknown complex number.
- \(x=\operatorname{Re}(z)\) and \(y=\operatorname{Im}(z)\).
- \(k\) is an integer used to record periodic solutions.
- \(e^z=e^x e^{iy}\) is the complex exponential.

## Method

When an equation contains \(e^z\), write \(z=x+iy\):

<Equation label="Exponential split" tex="e^z=e^xe^{iy}=e^x(\cos y+i\sin y)" />

Then match modulus and argument. For example, solving \(e^z=1\) gives:

<Equation label="Basic equation" tex="e^xe^{iy}=1=e^{2\pi i k}" />

Matching moduli gives \(e^x=1\), so \(x=0\). Matching arguments gives \(y=2\pi k\). Therefore:

<Equation label="Basic solution" tex="z=2\pi i k,\quad k\in\mathbb Z" />

## Rules

- Always include the periodic term \(2\pi k\) when equating complex arguments.
- The equation \(e^z=0\) has no solution because \(|e^z|=e^x\gt0\).
- Trigonometric and hyperbolic equations can often be rewritten as exponential equations.
- Solution sets can be infinite because complex exponentials are periodic in the imaginary direction.

## Examples

Solve \(\sinh z=0\):

<Equation label="Sinh equation" tex="\sinh z=\frac{e^z-e^{-z}}{2}=0" />

Multiply by \(2e^z\):

<Equation label="Sinh exponential equation" tex="e^{2z}=1" />

Use the solution of \(e^w=1\):

<Equation label="Sinh solution" tex="2z=2\pi i k\quad\Longrightarrow\quad z=\pi i k,\quad k\in\mathbb Z" />

Solve \(\cos z=0\):

<Equation label="Cos equation" tex="\cos z=\frac{e^{iz}+e^{-iz}}{2}=0" />

Multiply by \(2e^{iz}\):

<Equation label="Cos exponential equation" tex="e^{2iz}=-1=e^{i(\pi+2\pi k)}" />

Therefore:

<Equation label="Cos solution" tex="2iz=i(\pi+2\pi k)\quad\Longrightarrow\quad z=\pi\left(k+\frac12\right),\quad k\in\mathbb Z" />

Solve \(e^z=1+i\):

<Equation label="Target polar form" tex="1+i=\sqrt2e^{i(\pi/4+2\pi k)}" />

Matching modulus and argument gives:

<Equation label="Exponential target solution" tex="z=\frac12\ln2+i\left(\frac\pi4+2\pi k\right),\quad k\in\mathbb Z" />

Finally, \(e^z=0\) has no solution because matching moduli would require \(e^x=0\), which never happens for real \(x\).

## Checks

- Do not apply the fundamental theorem of algebra to transcendental equations.
- Include all integer values of \(k\) when periodicity creates infinitely many solutions.
- Check whether the equation has no solution by taking moduli.
- When rewriting trigonometric functions as exponentials, multiply by a non-zero exponential factor such as \(e^z\) or \(e^{iz}\).`;
