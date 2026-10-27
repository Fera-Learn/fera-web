export const content = String.raw`## Principle

The same physical state can be described by a column of numbers, a wavefunction, or another coordinate representation.

Dirac notation separates an abstract quantum state from any particular coordinate representation. Kets represent states, bras represent their Hermitian conjugates, and inner products produce amplitudes from which probabilities follow.

## Notation

<Notation
  items={[
    { symbol: "|\\psi\\rangle,|\\phi\\rangle", meaning: "state kets" },
    { symbol: "\\langle\\psi|", meaning: "bra obtained by Hermitian conjugating the ket" },
    { symbol: "\\langle\\phi|\\psi\\rangle", meaning: "inner product and probability amplitude", unit: "1" },
    { symbol: "|n\\rangle", meaning: "nth vector in an orthonormal basis" },
    { symbol: "c_n", meaning: "component of |\\psi\\rangle along |n\\rangle", unit: "1" },
    { symbol: "\\delta_{mn}", meaning: "Kronecker delta", unit: "1" },
    { symbol: "\\hat I", meaning: "identity operator", unit: "1" },
    { symbol: "\\hat A", meaning: "Hermitian observable operator" },
    { symbol: "A_{mn}", meaning: "matrix element of \\hat A between basis states m and n" },
    { symbol: "x,\\mathcal D", meaning: "position and full spatial domain", unit: "m, -" },
    { symbol: "\\alpha", meaning: "real global phase angle", unit: "rad" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

In a chosen position representation, the abstract ket \\(|\psi\rangle\\) is represented by its wavefunction.

\\[
\psi(x)=\langle x|\psi\rangle.\tag*{[1]}
\\]

If a ket is represented by a column of complex components, its bra is the complex-conjugate transpose.

\\[
|\psi\rangle=
\begin{pmatrix}c_1\\c_2\\\vdots\end{pmatrix},
\qquad
\langle\psi|=
\begin{pmatrix}c_1^*&c_2^*&\cdots\end{pmatrix}.\tag*{[2]}
\\]

The inner product is conjugate-linear in the bra and linear in the ket. In position space it becomes an integral.

\\[
\langle\phi|\psi\rangle
=\int_{\mathcal D}\phi^*(x)\psi(x)\,dx,
\qquad
\langle\phi|\psi\rangle^*=\langle\psi|\phi\rangle.\tag*{[3]}
\\]

A physical pure state is normalized. An orthonormal basis satisfies

\\[
\langle\psi|\psi\rangle=1,
\qquad
\langle m|n\rangle=\delta_{mn}.\tag*{[4]}
\\]

Completeness means that the basis resolves the identity operator.

\\[
\hat I=\sum_n|n\rangle\langle n|.\tag*{[5]}
\\]

Insert equation [5] into any ket. This both expands the state and identifies each coefficient as a projection.

\\[
\begin{aligned}
|\psi\rangle
&=\hat I|\psi\rangle\\
&=\sum_n|n\rangle\langle n|\psi\rangle\\
&=\sum_n c_n|n\rangle,
\qquad c_n=\langle n|\psi\rangle.
\end{aligned}\tag*{[6]}
\\]

The probability associated with projection onto \\(|n\rangle\\) is the modulus squared of the amplitude.

\\[
P(n)=|\langle n|\psi\rangle|^2=|c_n|^2.\tag*{[7]}
\\]

An operator's matrix element in this basis is

\\[
A_{mn}=\langle m|\hat A|n\rangle.\tag*{[8]}
\\]

Insert two resolutions of the identity to express an expectation value through components and matrix elements.

\\[
\begin{aligned}
\langle A\rangle
&=\langle\psi|\hat A|\psi\rangle\\
&=\sum_{m,n}\langle\psi|m\rangle\langle m|\hat A|n\rangle\langle n|\psi\rangle\\
&=\sum_{m,n}c_m^*A_{mn}c_n.
\end{aligned}\tag*{[9]}
\\]

For a Hermitian observable, \\(A_{mn}=A_{nm}^*\\), which ensures that equation [9] is real.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Components and probabilities in a two-state basis",
      question: "In the orthonormal basis \\(|1\\rangle,|2\\rangle\\), let \\(|\\psi\\rangle=(3|1\\rangle+4i|2\\rangle)/5\\). Find its bra, verify normalization, and find both basis probabilities.",
      answer: "Hermitian conjugation complex-conjugates the coefficients, so \\[\\langle\\psi|=\\frac{1}{5}(3\\langle1|-4i\\langle2|).\\] Use orthonormality to remove cross terms: \\[\\langle\\psi|\\psi\\rangle=\\frac{1}{25}\\left(9\\langle1|1\\rangle+16\\langle2|2\\rangle\\right)=\\frac{9+16}{25}=1.\\] The projections are \\(\\langle1|\\psi\\rangle=3/5\\) and \\(\\langle2|\\psi\\rangle=4i/5\\). Hence \\[P(1)=\\left|\\frac35\\right|^2=\\frac9{25},\\qquad P(2)=\\left|\\frac{4i}{5}\\right|^2=\\frac{16}{25}.\\] **Final result:** the bra is \\((3\\langle1|-4i\\langle2|)/5\\), and the probabilities are \\(9/25\\) and \\(16/25\\), which sum to one.",
    },
    {
      title: "A global phase in ket notation",
      question: "Compare \\(|\\phi\\rangle=e^{i\\alpha}|\\psi\\rangle\\) with \\(|\\psi\\rangle\\), where \\(\\alpha\\) is real. Do they give different projection probabilities?",
      answer: "For any normalized basis ket \\(|n\\rangle\\), \\[|\\langle n|\\phi\\rangle|^2=|e^{i\\alpha}\\langle n|\\psi\\rangle|^2=|e^{i\\alpha}|^2|\\langle n|\\psi\\rangle|^2=|\\langle n|\\psi\\rangle|^2.\\] **Final result:** all projection probabilities are unchanged, so a common global phase does not represent a physically distinct pure state. Relative phases between different components cannot generally be removed this way.",
    },
  ]}
/>
`;
