export const content = String.raw`## Principle

Atomic states combine a radial pattern of shells with an angular pattern of lobes and nodes.

Hydrogenic stationary states separate into a radial function and a spherical harmonic. Regularity at the origin, decay at infinity, and termination of a power series restrict the solutions to associated Laguerre polynomials and produce the three orbital quantum numbers.

## Notation

<Notation
  items={[
    { symbol: "r,\\theta,\\phi", meaning: "spherical polar coordinates", unit: "m, rad, rad" },
    { symbol: "\\psi_{n\\ell m},R_{n\\ell},Y_{\\ell m}", meaning: "stationary wavefunction, radial function, and normalized spherical harmonic", unit: "m^{-3/2}, m^{-3/2}, 1" },
    { symbol: "U_{n\\ell}", meaning: "reduced radial function rR_{n\\ell}", unit: "m^{-1/2}" },
    { symbol: "n,\\ell,m", meaning: "principal, orbital, and magnetic quantum numbers", unit: "1" },
    { symbol: "L_q^p,v,q", meaning: "associated Laguerre polynomial, residual radial factor, and polynomial degree", unit: "1" },
    { symbol: "x,k,K", meaning: "dimensionless radius x=2kr, decay constant, and Coulomb strength Ze^2/(4\\pi\\epsilon_0)", unit: "1, m^{-1}, J m" },
    { symbol: "a", meaning: "hydrogenic length 4\\pi\\epsilon_0\\hbar^2/(\\mu Ze^2)", unit: "m" },
    { symbol: "Z,e,\\epsilon_0,\\mu", meaning: "nuclear charge number, elementary charge, vacuum permittivity, and reduced mass", unit: "1, C, C^{2} N^{-1} m^{-2}, kg" },
    { symbol: "E,\\hbar", meaning: "energy eigenvalue and reduced Planck constant", unit: "J, J s" },
  ]}
/>

## The Core Method

For the Coulomb potential, let \\(K=Ze^2/(4\pi\epsilon_0)\\). A bound state has \\(E<0\\), so define \\(k=\sqrt{-2\mu E}/\hbar\\) and \\(x=2kr\\). The reduced radial equation becomes

\\[
\frac{d^2U_{n\ell}}{dx^2}
+\left[-\frac14+\frac{1}{akx}-\frac{\ell(\ell+1)}{x^2}\right]U_{n\ell}=0,
\qquad
a=\frac{\hbar^2}{\mu K}.
\tag*{[1]}
\\]

Regularity near \\(x=0\\) requires \\(U_{n\ell}\\) to begin as \\(x^{\ell+1}\\), while normalizability at large \\(x\\) requires exponential decay. Factor out both behaviours:

\\[
U_{n\ell}(x)=x^{\ell+1}e^{-x/2}v(x).
\tag*{[2]}
\\]

Substitution of equation [2] into [1], followed by collecting the coefficients of \\(v''\\), \\(v'\\), and \\(v\\), gives

\\[
x\frac{d^2v}{dx^2}+(2\ell+2-x)\frac{dv}{dx}
+\left(\frac{1}{ak}-\ell-1\right)v=0.
\tag*{[3]}
\\]

Equation [3] is the associated Laguerre equation. Its normalizable series terminates only when the final coefficient is a nonnegative integer \\(q\\):

\\[
q=\frac{1}{ak}-\ell-1=0,1,2,\ldots.
\tag*{[4]}
\\]

Define the principal quantum number by \\(n=q+\ell+1\\). Equation [4] then fixes

\\[
k=\frac{1}{an},
\qquad
x=\frac{2r}{an},
\qquad
n=1,2,3,\ldots.
\tag*{[5]}
\\]

The normalized radial function and complete spatial wavefunction are

\\[
R_{n\ell}(r)=
\left(\frac{2}{na}\right)^{3/2}
\sqrt{\frac{(n-\ell-1)!}{2n(n+\ell)!}}
x^\ell e^{-x/2}L_{n-\ell-1}^{2\ell+1}(x),
\qquad
\psi_{n\ell m}=R_{n\ell}Y_{\ell m}.
\tag*{[6]}
\\]

The polynomial degree must be nonnegative, and the spherical harmonic requires integer magnetic values. Therefore the complete ranges are

\\[
n=1,2,3,\ldots,
\qquad
\ell=0,1,\ldots,n-1,
\qquad
m=-\ell,-\ell+1,\ldots,\ell.
\tag*{[7]}
\\]

With spherical harmonics normalized over solid angle, \\(\int|Y_{\ell m}|^2d\Omega=1\\), equation [6] uses \\(\int_0^\infty|R_{n\ell}|^2r^2dr=1\\). The first radial functions are

\\[
R_{10}=2a^{-3/2}e^{-r/a},
\quad
R_{20}=\frac{a^{-3/2}}{\sqrt2}\left(1-\frac{r}{2a}\right)e^{-r/(2a)},
\quad
R_{21}=\frac{a^{-3/2}}{\sqrt{24}}\frac{r}{a}e^{-r/(2a)}.
\tag*{[8]}
\\]

<PhysicsDiagram slug="hydrogen-radial-functions" />

Each row fixes the principal quantum number, while the columns move from \\(s\\) through \\(p\\) to \\(d\\), meaning \\(\ell=0,1,2\\). These curves are signed radial amplitudes \\(R_{n\ell}\\), not probabilities. Their radial-node count is \\(n-\ell-1\\): the \\(3s\\) curve has two nodes, \\(3p\\) has one, and \\(3d\\) has none.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Construct the 2p state with m=0",
      question: "Use \\(R_{21}\\) from equation [8] and \\(Y_{10}=\\sqrt{3/(4\\pi)}\\cos\\theta\\) to construct \\(\\psi_{210}\\).",
      answer: "The separated state is the product of its radial and angular factors: \\[\\psi_{210}=\\frac{a^{-3/2}}{\\sqrt{24}}\\frac{r}{a}e^{-r/(2a)}\\sqrt{\\frac{3}{4\\pi}}\\cos\\theta.\\] Simplify the constant using \\(3/(24\\cdot4\\pi)=1/(32\\pi)\\): \\[\\psi_{210}(r,\\theta,\\phi)=\\frac{1}{4\\sqrt{2\\pi}\\,a^{3/2}}\\frac{r}{a}e^{-r/(2a)}\\cos\\theta.\\] The radial and angular factors are separately normalized, so their product is normalized over volume. **Final result:** \\(\\psi_{210}=(4\\sqrt{2\\pi}a^{3/2})^{-1}(r/a)e^{-r/(2a)}\\cos\\theta\\).",
    },
    {
      title: "Count radial nodes in the n=3 shell",
      question: "How many radial nodes do the 3s, 3p, and 3d radial wavefunctions have?",
      answer: "The associated Laguerre polynomial in equation [6] has degree \\(q=n-\\ell-1\\), and each of its positive roots gives a radial node. For 3s, \\(q=3-0-1=2\\). For 3p, \\(q=3-1-1=1\\). For 3d, \\(q=3-2-1=0\\). **Final result:** 3s has two radial nodes, 3p has one, and 3d has none. Angular nodes are separate and are controlled by \\(Y_{\\ell m}\\).",
    },
  ]}
/>
`;
