export const content = String.raw`## Principle

Reflect a centred box in a mirror and the physical system is unchanged.

Centering an infinite square well on the origin exposes its reflection symmetry. Every non-degenerate energy eigenfunction then has definite parity: it is either unchanged or changes sign under reflection, while its probability density is always symmetric.

## Notation

<Notation
  items={[
    { symbol: "x,L", meaning: "position measured from the centre and well width", unit: "m, m" },
    { symbol: "V(x),E_n", meaning: "potential energy and nth energy eigenvalue", unit: "J, J" },
    { symbol: "\\psi_n(x)", meaning: "normalised nth stationary-state wavefunction", unit: "m^{-1/2}" },
    { symbol: "\\hat P,p_n", meaning: "parity operator and its eigenvalue" },
    { symbol: "u,k_n", meaning: "translated coordinate x+L/2 and nth allowed wave number", unit: "m, m^{-1}" },
    { symbol: "\\langle x\\rangle_n", meaning: "expected position in the nth state", unit: "m" },
    { symbol: "n", meaning: "positive-integer energy quantum number" },
    { symbol: "m,\\hbar", meaning: "particle mass and reduced Planck constant", unit: "kg, J s" },
  ]}
/>

## The Core Method

Take a well of width \\(L\\) centred at \\(x=0\\). The potential and boundary conditions are

\\[
V(x)=
\begin{cases}
0, & |x|\lt L/2,\\
\infty, & |x|\ge L/2,
\end{cases}
\qquad
\psi_n(-L/2)=\psi_n(L/2)=0.
\tag*{[1]}
\\]

The parity operator reflects the coordinate. Applying it twice restores the original function, so its eigenvalues can only be \\(+1\\) or \\(-1\\).

\\[
(\hat P\psi)(x)=\psi(-x),
\qquad
\hat P^2\psi=\psi,
\qquad
p_n^2=1.
\tag*{[2]}
\\]

Start from the normalised solution for a well on \\(0\lt u\lt L\\), and translate by \\(u=x+L/2\\).

\\[
\psi_n(x)=\sqrt{\frac{2}{L}}
\sin\!\left[\frac{n\pi}{L}\left(x+\frac{L}{2}\right)\right],
\qquad n=1,2,3,\ldots
\tag*{[3]}
\\]

Use the angle-addition identity to reveal the parity.

\\[
\psi_n(x)=\sqrt{\frac{2}{L}}
\left[
\sin\!\left(\frac{n\pi x}{L}\right)\cos\!\left(\frac{n\pi}{2}\right)
+\cos\!\left(\frac{n\pi x}{L}\right)\sin\!\left(\frac{n\pi}{2}\right)
\right].
\tag*{[4]}
\\]

For odd \\(n\\), the sine coefficient vanishes and the remaining cosine is even. For even \\(n\\), the cosine coefficient vanishes and the remaining sine is odd. Overall signs do not affect parity or probability.

\\[
\psi_n(-x)=(-1)^{n+1}\psi_n(x),
\qquad
p_n=(-1)^{n+1}.
\tag*{[5]}
\\]

The translation does not change the allowed wave numbers or energies.

\\[
k_n=\frac{n\pi}{L},
\qquad
E_n=\frac{\hbar^2k_n^2}{2m}
=\frac{n^2\pi^2\hbar^2}{2mL^2}.
\tag*{[6]}
\\]

Squaring removes the parity sign, so every stationary-state probability density is even. Consequently, the expectation value of position vanishes because its integrand is odd.

\\[
|\psi_n(-x)|^2=|\psi_n(x)|^2,
\qquad
\langle x\rangle_n
=\int_{-L/2}^{L/2}x|\psi_n(x)|^2\,dx=0.
\tag*{[7]}
\\]

The common error is to call every wavefunction in a symmetric well even. The states alternate: odd \\(n\\) gives even parity, and even \\(n\\) gives odd parity.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Parity and energy of the fourth state",
      question: "A particle of mass \\(m\\) is in the \\(n=4\\) state of a centred infinite well of width \\(L\\). Determine the wavefunction parity, write a convenient real wavefunction, and find its energy.",
      answer: "Equation [5] gives \\(p_4=(-1)^5=-1\\), so the state is odd. From equation [4], \\(\\cos(2\\pi)=1\\) and \\(\\sin(2\\pi)=0\\), giving \\[\\psi_4(x)=\\sqrt{\\frac{2}{L}}\\sin\\!\\left(\\frac{4\\pi x}{L}\\right).\\] Equation [6] then gives \\[E_4=\\frac{16\\pi^2\\hbar^2}{2mL^2}=\\frac{8\\pi^2\\hbar^2}{mL^2}.\\] Reflection verifies the classification: \\(\\psi_4(-x)=-\\psi_4(x)\\). **Final result:** the fourth state has odd parity and energy \\(8\\pi^2\\hbar^2/(mL^2)\\).",
    },
    {
      title: "A symmetry-forbidden position average",
      question: "Without evaluating a trigonometric integral, explain why the mean position is zero for the \\(n=3\\) state.",
      answer: "For \\(n=3\\), equation [5] gives even parity. Therefore \\(|\\psi_3(x)|^2\\) is even, while multiplication by \\(x\\) makes \\(x|\\psi_3(x)|^2\\) odd. Contributions at \\(+x\\) and \\(-x\\) cancel over the symmetric interval: \\[\\int_{-L/2}^{L/2}x|\\psi_3(x)|^2\\,dx=0.\\] **Final result:** \\(\\langle x\\rangle_3=0\\), even though measurements of position need not individually give zero.",
    },
  ]}
/>
`;
