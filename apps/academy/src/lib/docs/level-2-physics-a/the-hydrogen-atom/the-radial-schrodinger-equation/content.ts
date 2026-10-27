export const content = String.raw`## Principle

In a hydrogen-like atom, the attraction depends only on the electron–nucleus distance, not on direction.

A central potential depends only on distance from the origin, so the stationary wavefunction separates into radial and angular factors. Replacing the radial factor by a reduced radial function turns the radial problem into a one-dimensional Schrodinger equation on the half-line, provided the boundary condition and normalization measure are transformed with it.

## Notation

<Notation
  items={[
    { symbol: "r", meaning: "radial coordinate, with domain r\\geq0", unit: "m" },
    { symbol: "\\theta,\\phi", meaning: "polar and azimuthal angles", unit: "rad" },
    { symbol: "\\psi,R_{n\\ell},U_{n\\ell}", meaning: "stationary wavefunction, radial function, and reduced radial function U_{n\\ell}=rR_{n\\ell}", unit: "m^{-3/2}, m^{-3/2}, m^{-1/2}" },
    { symbol: "Y_{\\ell m}", meaning: "normalized spherical harmonic", unit: "1" },
    { symbol: "\\hat L^2", meaning: "squared orbital angular momentum operator", unit: "J^{2} s^{2}" },
    { symbol: "n,\\ell,m", meaning: "radial-state label, orbital quantum number, and magnetic quantum number", unit: "1" },
    { symbol: "\\mu", meaning: "mass entering the relative-coordinate Hamiltonian", unit: "kg" },
    { symbol: "V,E", meaning: "central potential energy and energy eigenvalue", unit: "J" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "A,b", meaning: "example normalization constant and decay length", unit: "m^{-3/2}, m" },
  ]}
/>

## The Core Method

For a central potential, write the spatial wavefunction as \\(\psi(r,\theta,\phi)=R_{n\ell}(r)Y_{\ell m}(\theta,\phi)\\). The spherical harmonic obeys \\(\hat L^2Y_{\ell m}=\ell(\ell+1)\hbar^2Y_{\ell m}\\), so separation of the three-dimensional stationary equation gives

\\[
-\frac{\hbar^2}{2\mu r^2}\frac{d}{dr}
\left(r^2\frac{dR_{n\ell}}{dr}\right)
+\left[V(r)+\frac{\hbar^2\ell(\ell+1)}{2\mu r^2}\right]R_{n\ell}
=ER_{n\ell}.
\tag*{[1]}
\\]

The first radial derivative can be removed by defining the reduced function

\\[
U_{n\ell}(r)=rR_{n\ell}(r),
\qquad
R_{n\ell}(r)=\frac{U_{n\ell}(r)}{r}.
\tag*{[2]}
\\]

Differentiate without skipping the product-rule steps:

\\[
\frac{dR_{n\ell}}{dr}
=\frac{1}{r}\frac{dU_{n\ell}}{dr}-\frac{U_{n\ell}}{r^2},
\qquad
r^2\frac{dR_{n\ell}}{dr}=r\frac{dU_{n\ell}}{dr}-U_{n\ell}.
\tag*{[3]}
\\]

A second derivative then gives

\\[
\frac{d}{dr}\left(r^2\frac{dR_{n\ell}}{dr}\right)
=\frac{d}{dr}\left(r\frac{dU_{n\ell}}{dr}-U_{n\ell}\right)
=r\frac{d^2U_{n\ell}}{dr^2}.
\tag*{[4]}
\\]

Substitute equations [2] and [4] into [1], then multiply by \\(r\\). The reduced radial equation is

\\[
-\frac{\hbar^2}{2\mu}\frac{d^2U_{n\ell}}{dr^2}
+\left[V(r)+\frac{\hbar^2\ell(\ell+1)}{2\mu r^2}\right]U_{n\ell}
=EU_{n\ell},
\qquad 0\leq r<\infty.
\tag*{[5]}
\\]

This resembles a one-dimensional equation, but its domain is a half-line. A physical bound state has finite \\(R_{n\ell}\\) at the origin and decays at infinity, so its reduced function satisfies

\\[
U_{n\ell}(0)=0,
\qquad
\lim_{r\to\infty}U_{n\ell}(r)=0.
\tag*{[6]}
\\]

Normalize the spherical harmonic by \\(\int |Y_{\ell m}|^2\sin\theta\,d\theta\,d\phi=1\\). The three-dimensional volume element then converts the full normalization into either of two equivalent radial measures:

\\[
1=\int_0^\infty |R_{n\ell}(r)|^2r^2\,dr
=\int_0^\infty |U_{n\ell}(r)|^2\,dr.
\tag*{[7]}
\\]

The factor \\(r^2\\) belongs with \\(R_{n\ell}\\), not with \\(U_{n\ell}\\). Mixing these two measures is a common source of incorrect normalization and radial probabilities.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Normalize an exponential radial function",
      question: "A normalized angular factor is multiplied by \\(R(r)=A e^{-r/b}\\), where \\(b\\gt0\\) is a length and \\(A\\) is real and positive. Determine \\(A\\).",
      answer: "Use the radial measure for \\(R\\), not the one-dimensional measure. The condition is \\[1=A^2\\int_0^\\infty r^2e^{-2r/b}\\,dr.\\] Using \\(\\int_0^\\infty r^2e^{-\\alpha r}\\,dr=2/\\alpha^3\\) with \\(\\alpha=2/b\\), \\[1=A^2\\frac{2}{(2/b)^3}=A^2\\frac{b^3}{4}.\\] Therefore \\(A^2=4/b^3\\), and the chosen positive phase gives \\(A=2b^{-3/2}\\). **Final result:** \\(R(r)=2b^{-3/2}e^{-r/b}\\), which has the required unit \\(\\mathrm{m^{-3/2}}\\).",
    },
    {
      title: "Reject an unphysical reduced solution",
      question: "A candidate reduced solution approaches a nonzero constant \\(C\\) as \\(r\\to0\\). Can it represent a regular bound state?",
      answer: "Equation [2] gives \\(R(r)=U(r)/r\\). If \\(U(r)\\to C\\neq0\\), then \\(R(r)\\sim C/r\\), so the wavefunction diverges at the origin instead of remaining regular. The half-line equation must retain the three-dimensional boundary condition \\(U(0)=0\\). **Final result:** reject the candidate; solving the one-dimensional-looking equation without its origin boundary condition introduces an unphysical state.",
    },
  ]}
/>
`;
