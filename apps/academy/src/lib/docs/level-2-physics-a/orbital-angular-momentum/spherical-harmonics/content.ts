export const content = String.raw`## Principle

The angular patterns on a sphere form families of lobes and nodal lines, much like standing waves on a circular drum.

Spherical harmonics are the normalized angular wavefunctions shared by total squared orbital angular momentum and its z-component. A fixed phase convention is essential because it determines the signs of explicit harmonics and their conjugation relation.

## Notation

<Notation
  items={[
    { symbol: "Y_{lm}", meaning: "normalized spherical harmonic", unit: "1" },
    { symbol: "P_l,P_l^m", meaning: "Legendre polynomial and associated Legendre function", unit: "1" },
    { symbol: "u", meaning: "dimensionless argument of a Legendre function, later set to cosine of the polar angle", unit: "1" },
    { symbol: "l,m", meaning: "orbital and magnetic quantum numbers", unit: "1" },
    { symbol: "\\theta,\\phi", meaning: "polar and azimuthal angles", unit: "rad, rad" },
    { symbol: "d\\Omega", meaning: "element of solid angle", unit: "sr" },
    { symbol: "\\hat L_z,\\hat L^2", meaning: "z-component and total squared orbital angular-momentum operators", unit: "J s, J^{2} s^{2}" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "\\delta", meaning: "Kronecker delta in orthonormality relations", unit: "1" },
    { symbol: "i", meaning: "imaginary unit", unit: "1" },
  ]}
/>

## The Core Method

Fix the Condon-Shortley phase by including \\((-1)^m\\) once, in the definition of the associated Legendre function for nonnegative \\(m\\).

\\[
P_l^m(u)=(-1)^m(1-u^2)^{m/2}\frac{d^mP_l(u)}{du^m},
\qquad
m\geq0.
\tag*{[1]}
\\]

With that definition, do not insert another \\((-1)^m\\) in the spherical harmonic. For \\(m\geq0\\), use

\\[
Y_{lm}(\theta,\phi)
=\sqrt{\frac{2l+1}{4\pi}\frac{(l-m)!}{(l+m)!}}
\,P_l^m(\cos\theta)e^{im\phi}.
\tag*{[2]}
\\]

An alternative convention places an additional \\((-1)^m\\) in \\(Y_{lm}\\) while also including \\((-1)^m\\) in \\(P_l^m\\), so the two displayed factors cancel. Here the standard Condon-Shortley convention includes the phase exactly once, in \\(P_l^m\\), and that choice is used throughout. The alternative changes convention-dependent signs for odd \\(m\\), but physical states and observables are unchanged when expansion coefficients are transformed consistently; in particular, eigenvalues, orthonormality, and \\(|Y_{lm}|^2\\) are unchanged.

Negative orders are fixed by complex conjugation rather than by an independent phase choice.

\\[
Y_{l,-m}(\theta,\phi)=(-1)^mY_{lm}^*(\theta,\phi),
\qquad
Y_{lm}^*=(-1)^mY_{l,-m}.
\tag*{[3]}
\\]

The associated Legendre normalization identity is

\\[
\int_{-1}^{1}[P_l^m(u)]^2du
=\frac{2(l+m)!}{(2l+1)(l-m)!}.
\tag*{[4]}
\\]

Using \\(u=\cos\theta\\), \\(du=-\sin\theta\,d\theta\\), and \\(|e^{im\phi}|^2=1\\), equations [2] and [4] give

\\[
\int_0^{2\pi}\int_0^\pi
|Y_{lm}|^2\sin\theta\,d\theta\,d\phi
=\frac{2l+1}{4\pi}\frac{(l-m)!}{(l+m)!}
(2\pi)\frac{2(l+m)!}{(2l+1)(l-m)!}=1.
\tag*{[5]}
\\]

More generally the harmonics are orthonormal on the unit sphere, where \\(d\Omega=\sin\theta\,d\theta\,d\phi\\).

\\[
\int_{4\pi}Y_{lm}^*(\theta,\phi)Y_{l'm'}(\theta,\phi)d\Omega
=\delta_{ll'}\delta_{mm'}.
\tag*{[6]}
\\]

They obey the simultaneous eigenvalue equations

\\[
\hat L^2Y_{lm}=l(l+1)\hbar^2Y_{lm},
\qquad
\hat L_zY_{lm}=m\hbar Y_{lm}.
\tag*{[7]}
\\]

The first few members make the phase convention explicit.

\\[
Y_{00}=\frac{1}{\sqrt{4\pi}},
\qquad
Y_{10}=\sqrt{\frac{3}{4\pi}}\cos\theta,
\qquad
Y_{11}=-\sqrt{\frac{3}{8\pi}}\sin\theta\,e^{i\phi},
\qquad
Y_{1,-1}=\sqrt{\frac{3}{8\pi}}\sin\theta\,e^{-i\phi}.
\tag*{[8]}
\\]

<PhysicsDiagram slug="spherical-harmonic-amplitude-and-probability" />

The signed lobes of \\(Y_{10}\\) are amplitudes: the equatorial node separates positive and negative regions. For \\(Y_{11}\\), the phase winds around the axis through \\(e^{i\phi}\\), but taking the squared modulus removes that phase. The six lower cross-sections are therefore nonnegative probability shapes; zeros mark angular nodes, not negative probability.

The angular probability is \\(|Y_{lm}|^2d\Omega\\). Its azimuthal phase cancels, so a single complex \\(Y_{lm}\\) has an azimuth-independent probability density even when \\(m\neq0\\).

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Normalize Y one one",
      question: "Verify directly that the stated \\(Y_{11}\\) is normalized and has the expected \\(L_z\\) eigenvalue.",
      answer: "From equation [8], \\(|Y_{11}|^2=(3/8\\pi)\\sin^2\\theta\\). Thus \\[\\int_0^{2\\pi}\\int_0^\\pi|Y_{11}|^2\\sin\\theta\\,d\\theta\\,d\\phi=\\frac{3}{8\\pi}(2\\pi)\\int_0^\\pi\\sin^3\\theta\\,d\\theta=\\frac34\\left(\\frac43\\right)=1.\\] Also, \\(-i\\hbar\\partial_\\phi e^{i\\phi}=\\hbar e^{i\\phi}\\), so \\(\\hat L_zY_{11}=\\hbar Y_{11}\\). **Final result:** \\(Y_{11}\\) is normalized and has \\(L_z=+\\hbar\\).",
    },
    {
      title: "Find an angular probability",
      question: "For the state \\(Y_{10}\\), what is the probability of finding the direction in the northern hemisphere \\(0\\leq\\theta\\leq\\pi/2\\)?",
      answer: "Use equation [8] and integrate over the stated solid angle: \\[P=\\int_0^{2\\pi}\\int_0^{\\pi/2}\\frac{3}{4\\pi}\\cos^2\\theta\\sin\\theta\\,d\\theta\\,d\\phi=\\frac32\\left[-\\frac{\\cos^3\\theta}{3}\\right]_0^{\\pi/2}=\\frac12.\\] The result also follows from the north-south symmetry of \\(|Y_{10}|^2\\). **Final result:** the probability is \\(1/2\\).",
    },
  ]}
/>
`;
