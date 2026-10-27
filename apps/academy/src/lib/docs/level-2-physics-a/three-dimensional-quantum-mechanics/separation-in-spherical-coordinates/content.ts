export const content = String.raw`## Principle

When the surroundings look the same in every direction from one centre, radial motion can be separated from angular shape.

For a central potential, radial motion and angular shape can be separated. The radial equation contains the energy and potential, while the same angular equation applies to every spherically symmetric system and produces the spherical harmonics.

## Notation

<Notation
  items={[
    { symbol: "r", meaning: "radial distance from the origin", unit: "m" },
    { symbol: "\\theta,\\phi", meaning: "polar and azimuthal angles", unit: "rad, rad" },
    { symbol: "\\psi(r,\\theta,\\phi)", meaning: "stationary spatial wavefunction", unit: "m^{-3/2}" },
    { symbol: "R(r)", meaning: "radial wavefunction factor", unit: "m^{-3/2}" },
    { symbol: "Y(\\theta,\\phi)", meaning: "dimensionless angular wavefunction factor" },
    { symbol: "\\Theta(\\theta),\\Phi(\\phi)", meaning: "polar and azimuthal factors of Y" },
    { symbol: "V(r)", meaning: "central potential energy", unit: "J" },
    { symbol: "E", meaning: "stationary-state energy", unit: "J" },
    { symbol: "m", meaning: "particle mass", unit: "kg" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "\\nabla^2", meaning: "full three-dimensional Laplacian", unit: "m^{-2}" },
    { symbol: "\\nabla_\\Omega^2", meaning: "angular part of the spherical Laplacian" },
    { symbol: "\\lambda", meaning: "radial-angular separation constant", unit: "1" },
    { symbol: "\\ell,m_\\ell", meaning: "orbital and azimuthal angular quantum numbers", unit: "1, 1" },
    { symbol: "Y_\\ell^{m_\\ell}", meaning: "normalised spherical harmonic in the stated angular convention" },
    { symbol: "d\\Omega", meaning: "solid-angle element \\sin\\theta\\,d\\theta\\,d\\phi", unit: "sr" },
    { symbol: "i", meaning: "imaginary unit, with i^2=-1" },
    { symbol: "A,a", meaning: "radial amplitude and positive radial length scale", unit: "m^{-3/2}, m" },
  ]}
/>

## The Core Method

For a potential that depends only on \\(r\\), define the angular Laplacian

\\[
\nabla_\Omega^2
=\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial}{\partial\theta}\right)
+\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2},
\qquad
\nabla^2=\frac{1}{r^2}\frac{\partial}{\partial r}
\left(r^2\frac{\partial}{\partial r}\right)+\frac{1}{r^2}\nabla_\Omega^2.
\tag*{[1]}
\\]

Insert the product \\(\psi(r,\theta,\phi)=R(r)Y(\theta,\phi)\\) into the time-independent Schrodinger equation. Because radial derivatives do not act on \\(Y\\), and angular derivatives do not act on \\(R\\), the result is

\\[
-\frac{\hbar^2}{2m}
\left[\frac{Y}{r^2}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)
+\frac{R}{r^2}\nabla_\Omega^2Y\right]
+VRY=ERY.
\tag*{[2]}
\\]

Divide [2] by \\(RY\\), multiply by \\(-2mr^2/\hbar^2\\), and move the angular term to the right:

\\[
\frac{1}{R}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)
+\frac{2mr^2}{\hbar^2}(E-V)
=-\frac{1}{Y}\nabla_\Omega^2Y.
\tag*{[3]}
\\]

The left side depends only on \\(r\\), while the right side depends only on \\(\theta\\) and \\(\phi\\). They can remain equal for all coordinates only if both equal one constant:

\\[
\frac{1}{R}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)
+\frac{2mr^2}{\hbar^2}(E-V)
=\lambda
=-\frac{1}{Y}\nabla_\Omega^2Y.
\tag*{[4]}
\\]

Equation [4] produces separate radial and angular equations without an algebraic jump:

\\[
\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)
+\left[\frac{2mr^2}{\hbar^2}(E-V)-\lambda\right]R=0,
\qquad
\nabla_\Omega^2Y+\lambda Y=0.
\tag*{[5]}
\\]

Dividing the radial equation by \\(r^2\\) and rearranging displays the geometric energy term explicitly:

\\[
-\frac{\hbar^2}{2mr^2}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)
+\left[V(r)+\frac{\hbar^2\lambda}{2mr^2}\right]R=ER.
\tag*{[6]}
\\]

The angular equation separates once more with \\(Y(\theta,\phi)=\Theta(\theta)\Phi(\phi)\\). Substitution and division by \\(\Theta\Phi\\), followed by multiplication by \\(\sin^2\theta\\), gives

\\[
\frac{\sin\theta}{\Theta}\frac{d}{d\theta}
\left(\sin\theta\frac{d\Theta}{d\theta}\right)
+\lambda\sin^2\theta
=-\frac{1}{\Phi}\frac{d^2\Phi}{d\phi^2}.
\tag*{[7]}
\\]

The two sides depend on different angles, so set both equal to \\(m_\ell^2\\). The separated equations are

\\[
\frac{d^2\Phi}{d\phi^2}+m_\ell^2\Phi=0,
\qquad
\frac{1}{\sin\theta}\frac{d}{d\theta}
\left(\sin\theta\frac{d\Theta}{d\theta}\right)
+\left(\lambda-\frac{m_\ell^2}{\sin^2\theta}\right)\Theta=0.
\tag*{[8]}
\\]

Single-valuedness requires \\(\Phi(\phi+2\pi)=\Phi(\phi)\\). Normalising over \\(0\le\phi\lt2\pi\\) gives

\\[
\Phi_{m_\ell}(\phi)=\frac{1}{\sqrt{2\pi}}e^{im_\ell\phi},
\qquad m_\ell=0,\pm1,\pm2,\ldots
\tag*{[9]}
\\]

Requiring the polar solution to remain finite at both \\(\theta=0\\) and \\(\theta=\pi\\) restricts the remaining separation constant:

\\[
\lambda=\ell(\ell+1),
\qquad \ell=0,1,2,\ldots,
\qquad m_\ell=-\ell,-\ell+1,\ldots,\ell.
\tag*{[10]}
\\]

With the convention \\(\int|Y_\ell^{m_\ell}|^2d\Omega=1\\), full normalisation separates into radial and angular factors:

\\[
\int_0^\infty|R(r)|^2r^2dr=1,
\qquad
\int_0^\pi\!\int_0^{2\pi}|Y_\ell^{m_\ell}|^2\sin\theta\,d\phi\,d\theta=1.
\tag*{[11]}
\\]

Using \\(dr\\) instead of \\(r^2dr\\) to normalise \\(R\\) is a common error. The factor \\(r^2\\) remains because \\(R\\) is the radial factor of the full three-dimensional wavefunction.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Normalising a separated s-state",
      question: "Let \\(Y_0^0=1/\\sqrt{4\\pi}\\) and \\(R(r)=Ae^{-r/a}\\), where \\(a\\gt0\\) and \\(A\\) is real and positive. Normalise the full wavefunction.",
      answer: "The angular factor is already normalised because \\(\\int d\\Omega=4\\pi\\), so \\(\\int|Y_0^0|^2d\\Omega=(1/4\\pi)(4\\pi)=1\\). Equation [11] leaves the radial condition \\[1=A^2\\int_0^\\infty r^2e^{-2r/a}\\,dr.\\] Direct evaluation of the exponential integral gives \\[\\int_0^\\infty r^2e^{-2r/a}\\,dr=\\frac{2}{(2/a)^3}=\\frac{a^3}{4}.\\] Therefore \\[1=A^2\\frac{a^3}{4},\\qquad A=\\frac{2}{a^{3/2}}.\\] Multiplying the radial and angular factors gives \\[\\psi(r,\\theta,\\phi)=\\frac{e^{-r/a}}{\\sqrt{\\pi a^3}}.\\] **Final result:** \\(A=2/a^{3/2}\\), and the normalised full wavefunction is \\(e^{-r/a}/\\sqrt{\\pi a^3}\\).",
    },
    {
      title: "Energy of a rigid spherical rotor",
      question: "A particle of mass \\(m\\) is constrained to a fixed radius \\(r=a\\), has \\(V=0\\), and has no radial motion. What energies follow from the angular separation constant?",
      answer: "With fixed radius, the radial derivative term in [2] vanishes. The stationary equation becomes \\[-\\frac{\\hbar^2}{2ma^2}\\nabla_\\Omega^2Y=EY.\\] From [5] and [10], \\(\\nabla_\\Omega^2Y=-\\ell(\\ell+1)Y\\). Substitution gives \\[\\frac{\\hbar^2\\ell(\\ell+1)}{2ma^2}Y=EY.\\] Cancelling the nonzero angular function yields \\[E_\\ell=\\frac{\\hbar^2\\ell(\\ell+1)}{2ma^2}.\\] **Final result:** the rigid-rotor energies are \\(E_\\ell=\\hbar^2\\ell(\\ell+1)/(2ma^2)\\), independent of \\(m_\\ell\\); the allowed values \\(m_\\ell=-\\ell,\\ldots,\\ell\\) therefore share the same energy.",
    },
  ]}
/>
`;
