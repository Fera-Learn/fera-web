export const content = String.raw`## Principle

If two particle coordinates are recorded together, we can ignore one coordinate by adding over all of its possible values.

A joint probability density describes several coordinates at once. A marginal density for one coordinate is obtained by integrating the joint density, including the coordinate-system volume element, over every other allowed coordinate.

## Notation

<Notation
  items={[
    { symbol: "\\psi(r,\\theta,\\phi)", meaning: "normalized position-space wavefunction in spherical polar coordinates", unit: "m^{-3/2}" },
    { symbol: "r,\\theta,\\phi", meaning: "radial, polar, and azimuthal coordinates with ranges r from 0 to infinity, theta from 0 to pi, and phi from 0 to 2 pi", unit: "m, rad, rad" },
    { symbol: "dV", meaning: "spherical volume element r^2 sin(theta) dr dtheta dphi", unit: "m^{3}" },
    { symbol: "P_r(r),P_\\theta(\\theta)", meaning: "marginal probability densities in r and theta", unit: "m^{-1}, rad^{-1}" },
    { symbol: "R(r),Y(\\theta,\\phi)", meaning: "normalized radial and angular factors of a separable wavefunction", unit: "m^{-3/2}, 1" },
    { symbol: "a_0", meaning: "positive length scale in the worked case", unit: "m" },
  ]}
/>

## The Core Method

The Born density is \\(|\psi|^2\\), but a density becomes a probability only after multiplication by the correct volume element. Normalization over all three spherical coordinates requires

\\[
1=\int_0^\infty\!\int_0^\pi\!\int_0^{2\pi}
|\psi(r,\theta,\phi)|^2r^2\sin\theta\,d\phi\,d\theta\,dr.
\tag*{[1]}
\\]

To retain only radius, integrate over the complete angular domain. The probability in the shell from \\(r\\) to \\(r+dr\\) is

\\[
\begin{aligned}
P_r(r)\,dr
&=\int_0^\pi\!\int_0^{2\pi}|\psi|^2r^2\sin\theta\,d\phi\,d\theta\,dr,\\
P_r(r)
&=r^2\int_0^\pi\!\int_0^{2\pi}|\psi(r,\theta,\phi)|^2
\sin\theta\,d\phi\,d\theta.
\end{aligned}
\tag*{[2]}
\\]

If \\(\psi=RY\\) and the angular factor is normalized, then

\\[
\int_0^\pi\!\int_0^{2\pi}|Y|^2\sin\theta\,d\phi\,d\theta=1
\quad\Longrightarrow\quad
P_r(r)=r^2|R(r)|^2.
\tag*{[3]}
\\]

There is no extra factor of \\(4\pi\\) in [3]: any angular factor is already contained in the normalized \\(Y\\). The radial density must satisfy \\(\int_0^\infty P_r(r)\,dr=1\\).

To retain the polar angle instead, integrate over radius and azimuth:

\\[
P_\theta(\theta)=\sin\theta
\int_0^\infty\!\int_0^{2\pi}|\psi(r,\theta,\phi)|^2r^2\,d\phi\,dr.
\tag*{[4]}
\\]

For separately normalized \\(R\\) and \\(Y\\), equation [4] becomes

\\[
P_\theta(\theta)=\sin\theta\int_0^{2\pi}|Y(\theta,\phi)|^2\,d\phi.
\tag*{[5]}
\\]

The factors \\(r^2\\) and \\(\sin\theta\\) are geometric Jacobian factors. Omitting them gives the probability per coordinate interval incorrectly even when \\(\psi\\) itself is normalized.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Probability inside one radial length",
      question: "A spherically symmetric state has \\(R(r)=2a_0^{-3/2}e^{-r/a_0}\\) and normalized angular factor \\(Y=1/\\sqrt{4\\pi}\\). Find the probability that \\(0\\le r\\le a_0\\).",
      answer: "The strategy is to form the radial marginal before integrating. Equation [3] gives \\[P_r(r)=r^2|R(r)|^2=\\frac{4r^2}{a_0^3}e^{-2r/a_0}.\\] Set \\(u=2r/a_0\\), so \\(dr=(a_0/2)du\\) and \\(4r^2dr/a_0^3=u^2du/2\\). Therefore \\[\\Pr(0\\le r\\le a_0)=\\frac12\\int_0^2u^2e^{-u}\\,du.\\] Integration by parts gives \\[\\int u^2e^{-u}\\,du=-e^{-u}(u^2+2u+2),\\] so \\[\\Pr(0\\le r\\le a_0)=\\frac12\\left[2-10e^{-2}\\right]=1-5e^{-2}\\approx0.323.\\] The result lies between zero and one, as a probability must. **Final result:** the probability inside \\(a_0\\) is \\(1-5e^{-2}\\), approximately \\(0.323\\).",
    },
    {
      title: "Why a constant angular wavefunction is not a constant polar density",
      question: "For \\(Y=1/\\sqrt{4\\pi}\\), determine \\(P_\\theta(\\theta)\\) and explain why the poles are less probable per unit polar angle than the equator.",
      answer: "Use equation [5] and integrate over the full azimuthal range: \\[P_\\theta(\\theta)=\\sin\\theta\\int_0^{2\\pi}\\frac{1}{4\\pi}\\,d\\phi=\\frac12\\sin\\theta.\\] Its normalization is \\[\\int_0^\\pi\\frac12\\sin\\theta\\,d\\theta=1.\\] A fixed interval \\(d\\theta\\) spans less area near a pole because the spherical Jacobian contains \\(\\sin\\theta\\). **Final result:** \\(P_\\theta(\\theta)=\\tfrac12\\sin\\theta\\); isotropy means equal probability per solid angle, not equal probability per unit \\(\\theta\\).",
    },
  ]}
/>
`;
