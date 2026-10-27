export const content = String.raw`## Principle

Even in its lowest state, a confined oscillator cannot sit perfectly still at one exact position.

The harmonic oscillator cannot occupy the classical state of zero displacement and zero momentum. Confining both quantities that sharply would violate the position-momentum uncertainty relation, so the lowest possible oscillator energy is the nonzero zero-point energy.

## Notation

<Notation
  items={[
    { symbol: "x,\\hat p", meaning: "position and momentum operator", unit: "m, kg m s^{-1}" },
    { symbol: "m,\\omega", meaning: "particle mass and oscillator angular frequency", unit: "kg, rad s^{-1}" },
    { symbol: "\\hat H,E_0", meaning: "oscillator Hamiltonian and ground-state energy", unit: "J, J" },
    { symbol: "\\Delta x,\\Delta p", meaning: "standard deviations of position and momentum", unit: "m, kg m s^{-1}" },
    { symbol: "\\langle x\\rangle,\\langle p\\rangle", meaning: "expected position and momentum", unit: "m, kg m s^{-1}" },
    { symbol: "\\langle T\\rangle,\\langle V\\rangle", meaning: "expected kinetic and potential energies", unit: "J, J" },
    { symbol: "\\psi_0(x)", meaning: "normalised ground-state wavefunction", unit: "m^{-1/2}" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
  ]}
/>

## The Core Method

The oscillator Hamiltonian is

\\[
\hat H=\frac{\hat p^2}{2m}+\frac{1}{2}m\omega^2x^2.
\tag*{[1]}
\\]

For any normalised state, separate each second moment into variance and squared mean.

\\[
\langle\hat H\rangle
=\frac{(\Delta p)^2+\langle p\rangle^2}{2m}
+\frac{m\omega^2}{2}
\left[(\Delta x)^2+\langle x\rangle^2\right].
\tag*{[2]}
\\]

The squared means are non-negative, so the lowest possible energy occurs with \\(\langle x\rangle=\langle p\rangle=0\\). The uncertainty relation supplies a lower bound on \\(\Delta p\\).

\\[
\Delta x\,\Delta p\ge\frac{\hbar}{2}
\quad\Longrightarrow\quad
\Delta p\ge\frac{\hbar}{2\Delta x}.
\tag*{[3]}
\\]

Insert the smallest allowed \\(\Delta p\\) into [2]. This gives an energy bound as a function of the positive width \\(\Delta x\\).

\\[
\langle\hat H\rangle
\ge
\frac{\hbar^2}{8m(\Delta x)^2}
+\frac{1}{2}m\omega^2(\Delta x)^2.
\tag*{[4]}
\\]

Minimise the right-hand side. Differentiate with respect to \\(\Delta x\\) and set the derivative to zero.

\\[
-\frac{\hbar^2}{4m(\Delta x)^3}
+m\omega^2\Delta x=0.
\tag*{[5]}
\\]

Multiply by \\(4m(\Delta x)^3\\) and solve for the positive variance.

\\[
4m^2\omega^2(\Delta x)^4=\hbar^2
\quad\Longrightarrow\quad
(\Delta x)^2=\frac{\hbar}{2m\omega}.
\tag*{[6]}
\\]

Equation [3] is saturated at the minimum, so

\\[
(\Delta p)^2=\frac{\hbar m\omega}{2}.
\tag*{[7]}
\\]

Substitute [6] and [7] into [2].

\\[
E_0=\frac{1}{2m}\frac{\hbar m\omega}{2}
+\frac{m\omega^2}{2}\frac{\hbar}{2m\omega}
=\frac{\hbar\omega}{4}+\frac{\hbar\omega}{4}
=\frac{1}{2}\hbar\omega.
\tag*{[8]}
\\]

Thus the ground state shares its energy equally between kinetic and potential terms.

\\[
\langle T\rangle_0=\langle V\rangle_0
=\frac{1}{4}\hbar\omega,
\qquad
E_0=\frac{1}{2}\hbar\omega.
\tag*{[9]}
\\]

The state that reaches the bound is the Gaussian

\\[
\psi_0(x)=\left(\frac{m\omega}{\pi\hbar}\right)^{1/4}
\exp\!\left(-\frac{m\omega x^2}{2\hbar}\right).
\tag*{[10]}
\\]

Zero-point energy does not mean that a particle follows a hidden classical orbit. It means repeated position and momentum measurements have irreducible spreads [6] and [7], while the stationary ground state has fixed energy [8].

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Ground-state energy and width",
      question: "An electron is trapped in a one-dimensional harmonic potential with \\(\\omega=1.00\\times10^{15}\\,\\mathrm{rad\\,s^{-1}}\\). Find its zero-point energy and position uncertainty. Use \\(m_{\\mathrm e}=9.11\\times10^{-31}\\,\\mathrm{kg}\\), \\(\\hbar=1.055\\times10^{-34}\\,\\mathrm{J\\,s}\\), and \\(1\\,\\mathrm{eV}=1.602\\times10^{-19}\\,\\mathrm J\\).",
      answer: "Equation [8] gives \\[E_0=\\frac12(1.055\\times10^{-34})(1.00\\times10^{15})=5.28\\times10^{-20}\\,\\mathrm J.\\] Converting units, \\[E_0=\\frac{5.28\\times10^{-20}\\,\\mathrm J}{1.602\\times10^{-19}\\,\\mathrm{J\\,eV^{-1}}}=0.329\\,\\mathrm{eV}.\\] Equation [6] gives \\[\\Delta x=\\sqrt{\\frac{1.055\\times10^{-34}}{2(9.11\\times10^{-31})(1.00\\times10^{15})}}=2.41\\times10^{-10}\\,\\mathrm m.\\] **Final result:** \\(E_0=5.28\\times10^{-20}\\,\\mathrm J=0.329\\,\\mathrm{eV}\\) and \\(\\Delta x=2.41\\times10^{-10}\\,\\mathrm m\\).",
    },
    {
      title: "Why the classical minimum is forbidden",
      question: "Explain why assigning \\(x=0\\) and \\(p=0\\) exactly cannot describe an oscillator ground state.",
      answer: "Exact values would require \\(\\Delta x=0\\) and \\(\\Delta p=0\\), so their product would be zero. Equation [3] requires \\(\\Delta x\\Delta p\\ge\\hbar/2\\), which is strictly positive. Localising the particle more tightly also drives the first term in equation [4] upward. Minimisation instead gives the finite spreads in equations [6] and [7]. **Final result:** the classical state \\(x=p=0\\) is not an allowed quantum state; the least possible energy is \\(E_0=\\hbar\\omega/2\\).",
    },
  ]}
/>
`;
