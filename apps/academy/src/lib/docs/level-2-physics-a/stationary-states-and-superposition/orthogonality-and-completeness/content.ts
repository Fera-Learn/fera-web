export const content = String.raw`## Principle

Distinct standing-wave patterns can overlap in space yet have zero net overlap when positive and negative parts are combined.

Distinct eigenvalues of a Hermitian operator have orthogonal eigenfunctions. When those eigenfunctions are also complete, they form a basis in which every allowed state can be reconstructed from projections.

## Notation

<Notation
  items={[
    { symbol: "x", meaning: "position on the spatial domain", unit: "m" },
    { symbol: "\\mathcal D", meaning: "spatial domain with the stated boundary conditions" },
    { symbol: "\\hat H", meaning: "Hermitian Hamiltonian operator", unit: "J" },
    { symbol: "\\psi_n,\\psi_m", meaning: "normalized energy eigenfunctions", unit: "m^{-1/2}" },
    { symbol: "E_n,E_m", meaning: "real energy eigenvalues", unit: "J" },
    { symbol: "\\langle\\psi_m|\\psi_n\\rangle", meaning: "inner product over \\mathcal D", unit: "1" },
    { symbol: "\\delta_{mn}", meaning: "Kronecker delta; one for m=n and zero otherwise", unit: "1" },
    { symbol: "\\delta(x-x')", meaning: "Dirac delta distribution", unit: "m^{-1}" },
    { symbol: "f(x)", meaning: "square-integrable function satisfying the domain conditions", unit: "m^{-1/2}" },
    { symbol: "c_n", meaning: "projection coefficient of f onto \\psi_n", unit: "1" },
    { symbol: "L", meaning: "width of the example domain", unit: "m" },
  ]}
/>

## The Core Method

Let two normalized eigenfunctions satisfy

\\[
\hat H\psi_n=E_n\psi_n,
\qquad
\hat H\psi_m=E_m\psi_m.\tag*{[1]}
\\]

Multiply the first equation by \\(\psi_m^*\\) and integrate over the full domain.

\\[
\int_{\mathcal D}\psi_m^*\hat H\psi_n\,dx
=E_n\int_{\mathcal D}\psi_m^*\psi_n\,dx.\tag*{[2]}
\\]

Hermiticity, including boundary conditions that remove the surface terms, allows the Hamiltonian to move to the first function in the inner product.

\\[
\int_{\mathcal D}\psi_m^*\hat H\psi_n\,dx
=\int_{\mathcal D}(\hat H\psi_m)^*\psi_n\,dx.\tag*{[3]}
\\]

Use the second eigenvalue equation and the reality of a Hermitian operator's eigenvalues.

\\[
\int_{\mathcal D}(\hat H\psi_m)^*\psi_n\,dx
=E_m\int_{\mathcal D}\psi_m^*\psi_n\,dx.\tag*{[4]}
\\]

Equating equations [2] and [4] gives

\\[
(E_n-E_m)\int_{\mathcal D}\psi_m^*(x)\psi_n(x)\,dx=0.\tag*{[5]}
\\]

For \\(E_n\ne E_m\\), the energy factor is nonzero, so the overlap must vanish. Together with normalization, this gives orthonormality.

\\[
\langle\psi_m|\psi_n\rangle
=\int_{\mathcal D}\psi_m^*(x)\psi_n(x)\,dx
=\delta_{mn}.\tag*{[6]}
\\]

Equation [5] does not prove that two states with the same energy are orthogonal. Within a degenerate eigenspace, orthogonal linear combinations can be chosen without changing the common eigenvalue.

Completeness is a separate basis property: every allowed function can be expanded in the full orthonormal set.

\\[
f(x)=\sum_n c_n\psi_n(x).\tag*{[7]}
\\]

Multiply equation [7] by \\(\psi_m^*\\), integrate over \\(\mathcal D\\), and use equation [6].

\\[
\begin{aligned}
\int_{\mathcal D}\psi_m^*f\,dx
&=\sum_n c_n\int_{\mathcal D}\psi_m^*\psi_n\,dx\\
&=\sum_n c_n\delta_{mn}\\
&=c_m.
\end{aligned}\tag*{[8]}
\\]

Thus each coefficient is a projection, and completeness can be represented by the closure relation

\\[
\sum_n\psi_n(x)\psi_n^*(x')=\delta(x-x').\tag*{[9]}
\\]

Here the right side is the Dirac delta, not the Kronecker delta in equation [6]. If the Hamiltonian also has continuum eigenstates, completeness requires the corresponding integrals as well as the discrete sum.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Orthogonality of two well eigenfunctions",
      question: "On \\(0\\lt x\\lt L\\), show directly that \\(\\psi_1=\\sqrt{2/L}\\sin(\\pi x/L)\\) and \\(\\psi_2=\\sqrt{2/L}\\sin(2\\pi x/L)\\) are orthogonal.",
      answer: "Form the overlap on the complete domain and use \\(2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)\\): \\[\\langle\\psi_1|\\psi_2\\rangle=\\frac{2}{L}\\int_0^L\\sin\\left(\\frac{\\pi x}{L}\\right)\\sin\\left(\\frac{2\\pi x}{L}\\right)dx\\] \\[=\\frac{1}{L}\\int_0^L\\left[\\cos\\left(\\frac{\\pi x}{L}\\right)-\\cos\\left(\\frac{3\\pi x}{L}\\right)\\right]dx.\\] Integrate each cosine: \\[\\langle\\psi_1|\\psi_2\\rangle=\\frac{1}{L}\\left[\\frac{L}{\\pi}\\sin\\left(\\frac{\\pi x}{L}\\right)-\\frac{L}{3\\pi}\\sin\\left(\\frac{3\\pi x}{L}\\right)\\right]_0^L=0.\\] **Final result:** \\(\\langle\\psi_1|\\psi_2\\rangle=0\\), so the functions are orthogonal. Integrating over only part of the well would not establish orthogonality on the physical domain.",
    },
    {
      title: "Projection onto a complete basis",
      question: "A normalized state has expansion \\(f=c_1\\psi_1+c_2\\psi_2\\) in two orthonormal basis states. What does projection onto \\(\\psi_2\\) return?",
      answer: "Use linearity and orthonormality: \\[\\langle\\psi_2|f\\rangle=c_1\\langle\\psi_2|\\psi_1\\rangle+c_2\\langle\\psi_2|\\psi_2\\rangle=c_1(0)+c_2(1)=c_2.\\] **Final result:** projection returns exactly \\(c_2\\). Complex conjugation belongs on the projecting function; omitting it gives the wrong inner product for complex eigenfunctions.",
    },
  ]}
/>
`;
