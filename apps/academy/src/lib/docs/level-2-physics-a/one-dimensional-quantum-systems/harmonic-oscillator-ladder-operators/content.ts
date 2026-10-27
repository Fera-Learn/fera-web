export const content = String.raw`## Principle

The allowed oscillator energies form an evenly spaced staircase that can be climbed one step at a time.

Harmonic-oscillator ladder operators factor the Hamiltonian into operators that move between adjacent energy eigenstates. Their norms fix the exact raising and lowering coefficients, so the method determines both the spectrum and the normalised state-to-state action.

## Notation

<Notation
  items={[
    { symbol: "x,\\hat p", meaning: "position and momentum operator", unit: "m, kg m s^{-1}" },
    { symbol: "m,\\omega,\\hbar", meaning: "particle mass, oscillator angular frequency, and reduced Planck constant", unit: "kg, rad s^{-1}, J s" },
    { symbol: "\\xi", meaning: "dimensionless position \\(\\sqrt{m\\omega/\\hbar}\\,x\\)" },
    { symbol: "\\hat a,\\hat a^\\dagger", meaning: "annihilation and creation operators" },
    { symbol: "\\hat N,\\hat H", meaning: "number operator and oscillator Hamiltonian" },
    { symbol: "|n\\rangle,E_n", meaning: "normalised number state and its energy", unit: "1, J" },
    { symbol: "|\\phi\\rangle,C", meaning: "arbitrary normalised state and ground-state integration constant", unit: "1, m^{-1/2}" },
    { symbol: "n", meaning: "non-negative integer occupation number" },
    { symbol: "\\psi_0(x)", meaning: "normalised ground-state wavefunction", unit: "m^{-1/2}" },
  ]}
/>

## The Core Method

For \\(\hat p=-i\hbar\,d/dx\\), define the mutually adjoint ladder operators

\\[
\hat a=\sqrt{\frac{m\omega}{2\hbar}}\,x
+\frac{i}{\sqrt{2m\hbar\omega}}\hat p,
\qquad
\hat a^\dagger=\sqrt{\frac{m\omega}{2\hbar}}\,x
-\frac{i}{\sqrt{2m\hbar\omega}}\hat p.
\tag*{[1]}
\\]

In the dimensionless coordinate \\(\xi=\sqrt{m\omega/\hbar}\,x\\), these become

\\[
\hat a=\frac{1}{\sqrt2}\left(\xi+\frac{d}{d\xi}\right),
\qquad
\hat a^\dagger=\frac{1}{\sqrt2}\left(\xi-\frac{d}{d\xi}\right).
\tag*{[2]}
\\]

Use \\([x,\hat p]=i\hbar\\) in the product \\(\hat a^\dagger\hat a\\).

\\[
\hat a^\dagger\hat a
=\frac{1}{2m\hbar\omega}
(m\omega x-i\hat p)(m\omega x+i\hat p)
=\frac{\hat p^2+m^2\omega^2x^2-m\hbar\omega}{2m\hbar\omega}.
\tag*{[3]}
\\]

Therefore the Hamiltonian and number operator are

\\[
\hat N=\hat a^\dagger\hat a,
\qquad
\hat H=\frac{\hat p^2}{2m}+\frac{1}{2}m\omega^2x^2
=\hbar\omega\left(\hat N+\frac{1}{2}\right).
\tag*{[4]}
\\]

Reversing the factors changes the cross term, giving

\\[
\hat a\hat a^\dagger=\hat N+1,
\qquad
[\hat a,\hat a^\dagger]=1.
\tag*{[5]}
\\]

The commutator with the Hamiltonian follows from [4] and [5].

\\[
[\hat H,\hat a^\dagger]
=\hbar\omega[\hat a^\dagger\hat a,\hat a^\dagger]
=\hbar\omega\hat a^\dagger,
\qquad
[\hat H,\hat a]=-\hbar\omega\hat a.
\tag*{[6]}
\\]

If \\(\hat H|n\rangle=E_n|n\rangle\\), then [6] determines the energies after raising or lowering.

\\[
\hat H(\hat a^\dagger|n\rangle)
=(E_n+\hbar\omega)(\hat a^\dagger|n\rangle),
\qquad
\hat H(\hat a|n\rangle)
=(E_n-\hbar\omega)(\hat a|n\rangle).
\tag*{[7]}
\\]

The proportionality constants come from norms, not from energy spacing alone. Since \\(|n\rangle\\) is normalised and \\(\hat N|n\rangle=n|n\rangle\\),

\\[
\|\hat a|n\rangle\|^2
=\langle n|\hat a^\dagger\hat a|n\rangle=n,
\qquad
\|\hat a^\dagger|n\rangle\|^2
=\langle n|\hat a\hat a^\dagger|n\rangle=n+1.
\tag*{[8]}
\\]

Choose phases so the coefficients are positive.

\\[
\hat a|n\rangle=\sqrt n\,|n-1\rangle,
\qquad
\hat a^\dagger|n\rangle=\sqrt{n+1}\,|n+1\rangle.
\tag*{[9]}
\\]

The energy cannot descend indefinitely because \\(\langle\phi|\hat N|\phi\rangle=\|\hat a|\phi\rangle\|^2\ge0\\). The bottom state therefore satisfies \\(\hat a|0\rangle=0\\). In position space,

\\[
\left(\frac{d}{d\xi}+\xi\right)\psi_0=0
\quad\Longrightarrow\quad
\frac{d\psi_0}{\psi_0}=-\xi\,d\xi
\quad\Longrightarrow\quad
\psi_0=C e^{-\xi^2/2}.
\tag*{[10]}
\\]

Normalisation over \\(-\infty\lt x\lt\infty\\) fixes \\(C\\), while [4] gives the bottom energy.

\\[
\psi_0(x)=\left(\frac{m\omega}{\pi\hbar}\right)^{1/4}
e^{-m\omega x^2/(2\hbar)},
\qquad
E_0=\frac{1}{2}\hbar\omega.
\tag*{[11]}
\\]

Repeated creation generates every normalised number state and its energy.

\\[
|n\rangle=\frac{(\hat a^\dagger)^n}{\sqrt{n!}}|0\rangle,
\qquad
E_n=\left(n+\frac{1}{2}\right)\hbar\omega.
\tag*{[12]}
\\]

The frequent mistake is to write only \\(|n+1\rangle\propto\hat a^\dagger|n\rangle\\). Equation [8] is required to obtain the normalisation factor \\(\sqrt{n+1}\\).

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Lowering and restoring a number state",
      question: "Apply \\(\\hat a\\) to \\(|3\\rangle\\), then apply \\(\\hat a^\\dagger\\) to the result. State the final vector and verify it using the number operator.",
      answer: "Equation [9] first gives \\[\\hat a|3\\rangle=\\sqrt3\\,|2\\rangle.\\] Apply the creation operator to the whole result: \\[\\hat a^\\dagger\\hat a|3\\rangle=\\sqrt3\\,\\hat a^\\dagger|2\\rangle=\\sqrt3\\sqrt3\\,|3\\rangle=3|3\\rangle.\\] Equation [4] defines \\(\\hat N=\\hat a^\\dagger\\hat a\\), and \\(\\hat N|3\\rangle=3|3\\rangle\\), so the two routes agree. **Final result:** \\(\\hat a|3\\rangle=\\sqrt3|2\\rangle\\) and \\(\\hat a^\\dagger\\hat a|3\\rangle=3|3\\rangle\\).",
    },
    {
      title: "Constructing the first excited wavefunction",
      question: "Use \\(\\hat a^\\dagger\\) and the ground state to find the shape and parity of \\(\\psi_1(\\xi)\\).",
      answer: "Equation [2] gives \\[\\psi_1=\\hat a^\\dagger\\psi_0=\\frac{1}{\\sqrt2}\\left(\\xi-\\frac{d}{d\\xi}\\right)\\psi_0.\\] From equation [10], \\(d\\psi_0/d\\xi=-\\xi\\psi_0\\), so \\[\\psi_1=\\frac{1}{\\sqrt2}(\\xi+\\xi)\\psi_0=\\sqrt2\\,\\xi\\psi_0.\\] The factor \\(\\xi\\) is odd and \\(\\psi_0\\) is even. **Final result:** \\(\\psi_1(\\xi)=\\sqrt2\\,\\xi\\psi_0(\\xi)\\), an odd normalised state with energy \\(3\\hbar\\omega/2\\).",
    },
  ]}
/>
`;
