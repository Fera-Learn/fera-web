export const content = String.raw`## Principle

A successful quantum prediction must connect how a system is prepared to what an instrument can record.

Quantum mechanics is organized by postulates that connect a mathematical state to preparation, observables, measurement probabilities, and time evolution. The postulates predict outcome statistics; they must be applied without confusing a state, an operator, an eigenvalue, and a measured result.

## Notation

<Notation
  items={[
    { symbol: "|\\psi\\rangle,\\psi(x,t)", meaning: "normalized abstract state and its position-space wavefunction", unit: "1, m^{-1/2}" },
    { symbol: "\\hat A,a_n,|a_n\\rangle", meaning: "Hermitian observable, one of its discrete eigenvalues, and a normalized eigenstate" },
    { symbol: "c_n,p_n", meaning: "state-expansion amplitude and probability for outcome a_n", unit: "1, 1" },
    { symbol: "\\hat P_n", meaning: "projector onto the eigenspace associated with a_n" },
    { symbol: "\\hat x,\\hat p", meaning: "position and momentum operators", unit: "m, kg m s^{-1}" },
    { symbol: "\\hat H,E,t", meaning: "Hamiltonian, energy eigenvalue or measurement outcome, and time", unit: "J, J, s" },
    { symbol: "\\nabla,\\hbar,i", meaning: "spatial gradient, reduced Planck constant, and imaginary unit", unit: "m^{-1}, J s, 1" },
  ]}
/>

## The Core Method

**State postulate.** A physical system is represented by a ray in a complex state space. A representative ket is normalized; in one-dimensional position space this means

\\[
\langle\psi|\psi\rangle=1,
\qquad
\int_{-\infty}^{\infty}|\psi(x,t)|^2\,dx=1.
\tag*{[1]}
\\]

Multiplying \\(|\psi\rangle\\) by one overall phase does not change physical predictions.

**Observable postulate.** Each measurable dynamical quantity is represented by a Hermitian operator. Its possible ideal measurement outcomes are its eigenvalues:

\\[
\hat A|a_n\rangle=a_n|a_n\rangle,
\qquad a_n\text{ is real}.
\tag*{[2]}
\\]

**Born and projection postulate.** For a complete discrete non-degenerate basis, expand the state and read probabilities from squared amplitudes:

\\[
|\psi\rangle=\sum_n c_n|a_n\rangle,
\qquad
c_n=\langle a_n|\psi\rangle,
\qquad
p_n=|c_n|^2,
\qquad
\sum_n p_n=1.
\tag*{[3]}
\\]

More generally, including degeneracy, \\(p_n=\langle\psi|\hat P_n|\psi\rangle\\). Immediately after an ideal selective measurement yielding \\(a_n\\), the state-update rule places the system in the corresponding eigenspace.

**Canonical representation postulate.** In position space, position acts by multiplication and momentum by differentiation:

\\[
\hat x\psi=x\psi,
\qquad
\hat p\psi=-i\hbar\nabla\psi,
\qquad
[\hat x,\hat p]=i\hbar
\tag*{[4]}
\\]

in one Cartesian direction. Other operators are constructed from the appropriate classical relations with operator ordering checked whenever the factors do not commute.

**Evolution postulate.** Between measurements, an isolated system evolves according to the time-dependent Schrodinger equation:

\\[
i\hbar\frac{\partial}{\partial t}|\psi(t)\rangle
=\hat H|\psi(t)\rangle.
\tag*{[5]}
\\]

For a time-independent Hamiltonian and an energy eigenstate \\(\hat H|E\rangle=E|E\rangle\\), separation of variables yields

\\[
|E,t\rangle=e^{-iEt/\hbar}|E,0\rangle.
\tag*{[6]}
\\]

These statements are a predictive framework. Interpretive questions about what the wavefunction represents are not additional numerical steps in applying the postulates.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Normalizing and measuring a two-outcome state",
      question: "An observable has orthonormal eigenstates \\(|a_1\\rangle\\) and \\(|a_2\\rangle\\). Normalize \\(2|a_1\\rangle+i|a_2\\rangle\\) and find both outcome probabilities.",
      answer: "Write \\(|\\psi\\rangle=N(2|a_1\\rangle+i|a_2\\rangle)\\). Orthogonality removes cross terms, so equation [1] gives \\[1=\\langle\\psi|\\psi\\rangle=|N|^2(4+1).\\] Choosing the irrelevant overall phase so that \\(N\\) is positive gives \\(N=1/\\sqrt5\\). Equation [3] then gives \\[p_1=\\left|\\frac{2}{\\sqrt5}\\right|^2=\\frac45,\\qquad p_2=\\left|\\frac{i}{\\sqrt5}\\right|^2=\\frac15.\\] The probabilities sum to one. **Final result:** \\(|\\psi\\rangle=(2|a_1\\rangle+i|a_2\\rangle)/\\sqrt5\\), with probabilities \\(4/5\\) and \\(1/5\\).",
    },
    {
      title: "Energy eigenstate under free evolution",
      question: "A system starts in an energy eigenstate \\(|E\\rangle\\). What are the probability and post-measurement state when its energy is measured later?",
      answer: "Equation [6] gives \\(|\\psi(t)\\rangle=e^{-iEt/\\hbar}|E\\rangle\\). Projection onto \\(|E\\rangle\\) has amplitude \\(\\langle E|\\psi(t)\\rangle=e^{-iEt/\\hbar}\\), whose magnitude is one. Therefore \\(p(E)=1\\), and an ideal selective measurement leaves the state in the same energy eigenspace, apart from an irrelevant overall phase. **Final result:** the energy outcome is \\(E\\) with certainty and the post-measurement state is \\(|E\\rangle\\) up to phase.",
    },
  ]}
/>
`;
