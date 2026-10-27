export const content = String.raw`## Principle

A position or energy measurement must return a real number, never an imaginary reading on an instrument.

Observable quantities must have real possible values and real expectation values. Hermitian operators provide those properties, but Hermiticity is a statement about both an operator formula and the boundary conditions defining its domain.

## Notation

<Notation
  items={[
    { symbol: "\\hat A,\\hat A^\\dagger", meaning: "operator and its adjoint" },
    { symbol: "f(x),g(x)", meaning: "complex functions in the operator domain" },
    { symbol: "\\langle f|g\\rangle", meaning: "inner product, equal to the integral of f^*g over the domain" },
    { symbol: "a,b", meaning: "lower and upper spatial boundaries", unit: "m, m" },
    { symbol: "\\phi(x)", meaning: "normalised eigenfunction" },
    { symbol: "\\lambda", meaning: "eigenvalue of an operator", unit: "same as A" },
    { symbol: "\\hat p,\\hat H", meaning: "momentum and Hamiltonian operators", unit: "kg m s^{-1}, J" },
    { symbol: "m,V(x)", meaning: "particle mass and real potential energy", unit: "kg, J" },
    { symbol: "L", meaning: "length of a finite interval", unit: "m" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "i", meaning: "imaginary unit, satisfying i^2=-1" },
  ]}
/>

## The Core Method

On the interval from \\(a\\) to \\(b\\), define the inner product by

\\[
\langle f|g\rangle=\int_a^b f^*(x)g(x)\,dx.
\tag*{[1]}
\\]

An operator is Hermitian on a stated domain when every pair of functions in that domain satisfies

\\[
\langle f|\hat A g\rangle
=\langle\hat A f|g\rangle
=\langle g|\hat A f\rangle^*.
\tag*{[2]}
\\]

This property forces every eigenvalue to be real. Let \\(\hat A\phi=\lambda\phi\\) with \\(\langle\phi|\phi\rangle=1\\). Use equation [2] once on each side:

\\[
\begin{aligned}
\lambda
&=\lambda\langle\phi|\phi\rangle
=\langle\phi|\hat A\phi\rangle \\
&=\langle\hat A\phi|\phi\rangle
=\langle\lambda\phi|\phi\rangle
=\lambda^*\langle\phi|\phi\rangle
=\lambda^*.
\end{aligned}
\tag*{[3]}
\\]

Therefore \\(\lambda=\lambda^*\\), so measurement outcomes associated with a Hermitian operator are real.

For a differential operator, integration by parts exposes the required boundary condition. With \\(\hat p=-i\hbar\,d/dx\\),

\\[
\begin{aligned}
\langle f|\hat p g\rangle
&=-i\hbar\int_a^b f^*\frac{dg}{dx}\,dx \\
&=-i\hbar[f^*g]_a^b
+i\hbar\int_a^b\frac{df^*}{dx}g\,dx \\
&=-i\hbar[f^*g]_a^b+\langle\hat p f|g\rangle.
\end{aligned}
\tag*{[4]}
\\]

The momentum expression is Hermitian only on a domain for which \\([f^*g]_a^b=0\\) for all allowed \\(f\\) and \\(g\\), such as suitable periodic boundary conditions. The differential formula alone is not enough.

For the Hamiltonian \\(\hat H=-\hbar^2d^2/(2m\,dx^2)+V(x)\\), two integrations by parts give

\\[
\langle f|\hat H g\rangle-\langle\hat H f|g\rangle
=-\frac{\hbar^2}{2m}
\left[f^*\frac{dg}{dx}-\frac{df^*}{dx}g\right]_a^b.
\tag*{[5]}
\\]

The real multiplication operator \\(V(x)\\) cancels between the two inner products. Bound states that vanish sufficiently rapidly at infinity, infinite-well states with zero endpoint values, and suitable periodic states make the remaining boundary form vanish. On such a domain, \\(\hat H\\) is Hermitian and its energy eigenvalues are real.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Hamiltonian boundary terms in a box",
      question: "Show that the one-dimensional Hamiltonian is Hermitian on \\(0\\leq x\\leq L\\) for functions satisfying \\(f(0)=f(L)=g(0)=g(L)=0\\), assuming \\(V(x)\\) is real.",
      answer: "Equation [5] contains the complete difference between the two inner products. Evaluate its upper endpoint: \\[f^*(L)g'(L)-f'^*(L)g(L)=0\\cdot g'(L)-f'^*(L)\\cdot0=0.\\] Evaluate its lower endpoint in the same way: \\[f^*(0)g'(0)-f'^*(0)g(0)=0\\cdot g'(0)-f'^*(0)\\cdot0=0.\\] Their difference is zero, so \\[\\langle f|\\hat H g\\rangle-\\langle\\hat H f|g\\rangle=0.\\] **Final result:** \\(\\boxed{\\langle f|\\hat H g\\rangle=\\langle\\hat H f|g\\rangle}\\); the Hamiltonian is Hermitian on this zero-endpoint domain.",
    },
    {
      title: "A failed momentum domain",
      question: "On \\(0\\leq x\\leq L\\), test the momentum boundary term using \\(f(x)=1\\) and \\(g(x)=x\\). What does the result show?",
      answer: "Equation [4] gives the difference directly: \\[\\langle f|\\hat p g\\rangle-\\langle\\hat p f|g\\rangle=-i\\hbar[f^*g]_0^L.\\] Here \\(f^*g=x\\), so \\[[f^*g]_0^L=L-0=L.\\] Therefore \\[\\langle f|\\hat p g\\rangle-\\langle\\hat p f|g\\rangle=-i\\hbar L\\ne0.\\] **Final result:** the differential expression \\(-i\\hbar d/dx\\) is not Hermitian on the unrestricted set containing these functions. Appropriate boundary conditions must be part of the operator domain.",
    },
  ]}
/>
`;
