export const content = String.raw`## Principle

Higher vibration states cross zero more often while remaining confined by a decaying outer envelope.

Harmonic-oscillator eigenfunctions are Gaussian envelopes multiplied by Hermite polynomials. The polynomial degree fixes the number of nodes, parity, and energy, while the Gaussian makes every state normalisable on the full real line.

## Notation

<Notation
  items={[
    { symbol: "x,x_0,\\xi", meaning: "position, oscillator length, and dimensionless position x/x_0", unit: "m, m, 1" },
    { symbol: "m,\\omega,\\hbar", meaning: "particle mass, oscillator angular frequency, and reduced Planck constant", unit: "kg, rad s^{-1}, J s" },
    { symbol: "n,r", meaning: "non-negative energy quantum number and recurrence index" },
    { symbol: "q", meaning: "second non-negative state index in the orthogonality relation" },
    { symbol: "\\psi_n(x),E_n", meaning: "normalised nth eigenfunction and energy", unit: "m^{-1/2}, J" },
    { symbol: "H_n(\\xi)", meaning: "physicists' Hermite polynomial of degree n" },
    { symbol: "N_n", meaning: "wavefunction normalisation constant", unit: "m^{-1/2}" },
    { symbol: "n!", meaning: "factorial of n, with 0! equal to 1" },
    { symbol: "\\delta_{nq}", meaning: "Kronecker delta, equal to 1 for n=q and 0 otherwise" },
  ]}
/>

## The Core Method

Define the oscillator length and dimensionless coordinate.

\\[
x_0=\sqrt{\frac{\hbar}{m\omega}},
\qquad
\xi=\frac{x}{x_0}.
\tag*{[1]}
\\]

Normalisable solutions of the oscillator equation have a Gaussian envelope. Write

\\[
\psi_n(x)=N_n H_n(\xi)e^{-\xi^2/2}.
\tag*{[2]}
\\]

The polynomial equation obtained after removing the Gaussian is

\\[
\frac{d^2H_n}{d\xi^2}
-2\xi\frac{dH_n}{d\xi}
+2nH_n=0.
\tag*{[3]}
\\]

The physicists' Hermite polynomials may be generated directly by Rodrigues' formula.

\\[
H_n(\xi)=(-1)^n e^{\xi^2}
\frac{d^n}{d\xi^n}e^{-\xi^2}.
\tag*{[4]}
\\]

For example, differentiating explicitly gives

\\[
H_0=1,
\qquad
H_1=2\xi,
\qquad
H_2=4\xi^2-2,
\qquad
H_3=8\xi^3-12\xi.
\tag*{[5]}
\\]

The recurrence relation builds higher orders without repeated differentiation.

\\[
H_{r+1}(\xi)=2\xi H_r(\xi)-2rH_{r-1}(\xi),
\qquad r\ge1.
\tag*{[6]}
\\]

To normalise [2], change variables from \\(x\\) to \\(\xi\\), so \\(dx=x_0\,d\xi\\), and use Hermite orthogonality.

\\[
\int_{-\infty}^{\infty}
e^{-\xi^2}H_n(\xi)H_q(\xi)\,d\xi
=\sqrt\pi\,2^n n!\,\delta_{nq}.
\tag*{[7]}
\\]

For \\(q=n\\), the normalisation condition becomes

\\[
1=|N_n|^2x_0
\int_{-\infty}^{\infty}e^{-\xi^2}H_n^2(\xi)\,d\xi
=|N_n|^2x_0\sqrt\pi\,2^n n!.
\tag*{[8]}
\\]

Choose the irrelevant overall phase so that \\(N_n\\) is positive.

\\[
N_n=\frac{1}{\pi^{1/4}\sqrt{2^n n!\,x_0}}.
\tag*{[9]}
\\]

The complete normalised stationary eigenfunctions and energies are therefore

\\[
\psi_n(x)=
\frac{1}{\pi^{1/4}\sqrt{2^n n!\,x_0}}
H_n\!\left(\frac{x}{x_0}\right)
e^{-x^2/(2x_0^2)},
\qquad
E_n=\left(n+\frac{1}{2}\right)\hbar\omega.
\tag*{[10]}
\\]

<PhysicsDiagram slug="harmonic-oscillator-state-family" />

Each row aligns the signed wavefunction, its energy in the parabolic potential, and the corresponding nonnegative probability density. Moving from \\(n\\) to \\(n+1\\) adds one node, reverses parity, and raises the energy by exactly \\(\hbar\omega\\); probability remains appreciable beyond the classical turning points shown by dashed lines.

Rodrigues' formula shows that \\(H_n(-\xi)=(-1)^nH_n(\xi)\\). The Gaussian is even, so

\\[
\psi_n(-x)=(-1)^n\psi_n(x).
\tag*{[11]}
\\]

The polynomial \\(H_n\\) has \\(n\\) distinct real roots. Thus \\(\psi_n\\) has \\(n\\) nodes, and each higher state adds one node while raising the energy by \\(\hbar\omega\\). Do not confuse the oscillator convention \\(n=0,1,2,\ldots\\) with the infinite-well convention whose ground state is commonly labelled \\(n=1\\).

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Second excited oscillator state",
      question: "Write the normalised \\(n=2\\) wavefunction, find its nodes, state its parity, and give its energy.",
      answer: "From equations [5], [9], and [10], \\[\\psi_2(x)=\\frac{4\\xi^2-2}{\\pi^{1/4}\\sqrt{8x_0}}e^{-\\xi^2/2},\\qquad \\xi=\\frac{x}{x_0}.\\] Nodes occur where the polynomial vanishes: \\[4\\xi^2-2=0\\quad\\Longrightarrow\\quad \\xi^2=\\frac12\\quad\\Longrightarrow\\quad x=\\pm\\frac{x_0}{\\sqrt2}.\\] Equation [11] gives even parity, and equation [10] gives \\[E_2=\\left(2+\\frac12\\right)\\hbar\\omega=\\frac52\\hbar\\omega.\\] **Final result:** the state is even, has nodes at \\(x=\\pm x_0/\\sqrt2\\), and has energy \\(5\\hbar\\omega/2\\).",
    },
    {
      title: "Selection by parity in an overlap",
      question: "Determine whether the integral \\(I=\\int_{-\\infty}^{\\infty}\\psi_2^*(x)x\\psi_0(x)\\,dx\\) can be nonzero, without evaluating it.",
      answer: "Equations [10] and [11] show that \\(\\psi_0\\) and \\(\\psi_2\\) are both even. The factor \\(x\\) is odd, so the full integrand has parity \\[(\\text{even})(\\text{odd})(\\text{even})=\\text{odd}.\\] An odd integrand cancels over symmetric limits: \\[I=\\int_{-\\infty}^{\\infty}\\psi_2^*(x)x\\psi_0(x)\\,dx=0.\\] **Final result:** the overlap is exactly zero by parity, not by an accidental cancellation of constants.",
    },
  ]}
/>
`;
