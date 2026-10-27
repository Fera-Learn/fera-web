export const content = String.raw`## Principle

A single particle or independent unit with finitely many equally spaced levels has a geometric partition sum. Unlike an oscillator with infinitely many levels, its mean energy and entropy saturate at high temperature, forcing its one-unit heat capacity back to zero after a finite-temperature maximum.

## Notation

<Notation
  items={[
    { symbol: "M,j", meaning: "number of levels and level index, from 0 to M-1", unit: "1, 1" },
    { symbol: "\\epsilon_j", meaning: "energy of level j", unit: "J" },
    { symbol: "\\hbar,\\omega", meaning: "reduced Planck constant and angular frequency setting the level spacing", unit: "J s, rad s^{-1}" },
    { symbol: "T,k_{\\mathrm B},\\beta,x", meaning: "temperature, Boltzmann constant, inverse thermal energy, and beta hbar omega", unit: "K, J K^{-1}, J^{-1}, 1" },
    { symbol: "q,z_1", meaning: "Boltzmann ratio exp(-x) and one-particle partition function", unit: "1, 1" },
    { symbol: "u,s,C_{V,1}", meaning: "one-particle mean energy, entropy, and constant-volume heat capacity", unit: "J, J K^{-1}, J K^{-1}" },
  ]}
/>

## The Core Method

Use \\(M\\) for the number of nondegenerate levels to avoid confusing it with particle number. For \\(j=0,1,\ldots,M-1\\), let

\\[
\epsilon_j=j\hbar\omega,
\qquad
x=\beta\hbar\omega,
\qquad
q=e^{-x}.
\tag*{[1]}
\\]

The finite geometric sum is

\\[
z_1=\sum_{j=0}^{M-1}q^j
=\frac{1-q^M}{1-q}
=\frac{1-e^{-Mx}}{1-e^{-x}}.
\tag*{[2]}
\\]

Using \\(u=-\partial\ln z_1/\partial\beta\\) and \\(\partial x/\partial\beta=\hbar\omega\\), differentiate both logarithms:

\\[
u=\hbar\omega\left[
\frac{1}{e^x-1}-\frac{M}{e^{Mx}-1}
\right].
\tag*{[3]}
\\]

Differentiating equation [3] with \\(dx/dT=-x/T\\) gives

\\[
C_{V,1}=k_{\mathrm B}x^2\left[
\frac{e^x}{(e^x-1)^2}
-\frac{M^2e^{Mx}}{(e^{Mx}-1)^2}
\right].
\tag*{[4]}
\\]

At high temperature every level has probability \\(1/M\\), so direct averaging and Gibbs entropy give

\\[
u\longrightarrow\frac{1}{M}\sum_{j=0}^{M-1}j\hbar\omega
=\frac{M-1}{2}\hbar\omega,
\qquad
s\longrightarrow k_{\mathrm B}\ln M,
\qquad
C_{V,1}\longrightarrow0.
\tag*{[5]}
\\]

At low temperature only \\(j=0\\) is occupied, giving \\(u,s,C_{V,1}\to0\\) for a unique ground state. The finite upper energy is essential to the high-temperature saturation.

<PhysicsExamples collapsible
  items={[
    {
      title: "Evaluate a three-level system",
      question: "For \\(M=3\\) and \\(x=\\ln2\\), calculate \\(z_1\\) and the mean energy in units of \\(\\hbar\\omega\\).",
      answer: "Equation \\([1]\\) gives \\(q=e^{-x}=1/2\\). Equation \\([2]\\) gives \\[z_1=1+q+q^2=1+\\frac12+\\frac14=\\frac74.\\] Direct weighted averaging, equivalent to equation \\([3]\\), gives \\[\\frac{u}{\\hbar\\omega}=\\frac{0(1)+1(1/2)+2(1/4)}{7/4}=\\frac{1}{7/4}=\\frac47.\\] This lies between the ground value 0 and the high-temperature limit 1. **Final result:** \\(z_1=7/4\\) and \\(u=(4/7)\\hbar\\omega\\).",
    },
    {
      title: "Distinguish finite and infinite ladders",
      question: "Why does the high-temperature one-particle heat capacity vanish for finite \\(M\\), whereas an infinite harmonic ladder does not saturate in the same way?",
      answer: "For finite \\(M\\), equation \\([5]\\) shows that all probabilities approach \\(1/M\\) and the one-particle mean energy reaches a fixed upper value. Its temperature derivative must then vanish. An infinite ladder has no highest level, so increasing temperature continually makes additional energies accessible and the finite-sum saturation argument does not apply. **Final result:** the return to \\(C_{V,1}=0\\) is caused by the finite number and bounded range of levels.",
    },
  ]}
/>
`;
