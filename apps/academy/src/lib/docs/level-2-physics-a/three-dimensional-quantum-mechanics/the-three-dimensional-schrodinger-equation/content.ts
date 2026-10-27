export const content = String.raw`## Principle

A detector searching a room must assign probability to small volumes rather than to intervals on a line.

Three-dimensional quantum mechanics replaces a particle's single position coordinate with a point in space. The wavefunction assigns a complex probability amplitude to every position, while the Hamiltonian combines motion in all three directions with the potential energy.

## Notation

<Notation
  items={[
    { symbol: "x,y,z", meaning: "Cartesian position coordinates", unit: "m, m, m" },
    { symbol: "\\vec r", meaning: "position vector x\\hat x+y\\hat y+z\\hat z", unit: "m" },
    { symbol: "t", meaning: "time", unit: "s" },
    { symbol: "\\Psi(\\vec r,t)", meaning: "time-dependent position-space wavefunction", unit: "m^{-3/2}" },
    { symbol: "\\psi,\\psi_n(\\vec r)", meaning: "spatial wavefunction and normalised energy eigenfunction labelled by n", unit: "m^{-3/2}, m^{-3/2}" },
    { symbol: "V(\\vec r,t)", meaning: "potential energy", unit: "J" },
    { symbol: "m", meaning: "particle mass", unit: "kg" },
    { symbol: "p_x,p_y,p_z", meaning: "Cartesian momentum components", unit: "kg m s^{-1}" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "i", meaning: "imaginary unit, with i^2=-1" },
    { symbol: "\\nabla^2", meaning: "three-dimensional Laplacian operator", unit: "m^{-2}" },
    { symbol: "H,\\hat H", meaning: "classical Hamiltonian and Hamiltonian operator", unit: "J, J" },
    { symbol: "E_n", meaning: "energy eigenvalue of state n", unit: "J" },
    { symbol: "d^3r,dP", meaning: "Cartesian volume element and probability in that element", unit: "m^{3}, 1" },
    { symbol: "A,a", meaning: "Gaussian amplitude and positive length scale", unit: "m^{-3/2}, m" },
  ]}
/>

## The Core Method

For a non-relativistic particle, the classical kinetic energy is the sum of three independent Cartesian contributions. The total energy is therefore

\\[
H=\frac{p_x^2+p_y^2+p_z^2}{2m}+V(\vec r,t).
\tag*{[1]}
\\]

In position space, each momentum component becomes a differential operator.

\\[
p_x\longrightarrow-i\hbar\frac{\partial}{\partial x},\qquad
p_y\longrightarrow-i\hbar\frac{\partial}{\partial y},\qquad
p_z\longrightarrow-i\hbar\frac{\partial}{\partial z}.
\tag*{[2]}
\\]

Squaring each operator uses \\((-i)^2=-1\\). Substitution into [1] gives the Hamiltonian operator

\\[
\hat H
=-\frac{\hbar^2}{2m}
\left(\frac{\partial^2}{\partial x^2}
+\frac{\partial^2}{\partial y^2}
+\frac{\partial^2}{\partial z^2}\right)
+V(\vec r,t).
\tag*{[3]}
\\]

The time-dependent Schrodinger equation, \\(\hat H\Psi=i\hbar\,\partial\Psi/\partial t\\), is consequently

\\[
-\frac{\hbar^2}{2m}\nabla^2\Psi(\vec r,t)
+V(\vec r,t)\Psi(\vec r,t)
=i\hbar\frac{\partial\Psi(\vec r,t)}{\partial t},
\qquad
\nabla^2=\frac{\partial^2}{\partial x^2}
+\frac{\partial^2}{\partial y^2}
+\frac{\partial^2}{\partial z^2}.
\tag*{[4]}
\\]

The Born probability in a small Cartesian volume is \\(|\Psi|^2d^3r\\). A physical state covering all space must satisfy

\\[
\int_{-\infty}^{\infty}\!\int_{-\infty}^{\infty}\!\int_{-\infty}^{\infty}
|\Psi(x,y,z,t)|^2\,dx\,dy\,dz
=\int_{\mathbb R^3}|\Psi(\vec r,t)|^2\,d^3r=1.
\tag*{[5]}
\\]

The volume element is essential: \\(|\Psi|^2\\) is a probability density per unit volume, so its SI unit is \\(\mathrm{m}^{-3}\\), not \\(\mathrm{m}^{-1}\\).

If the potential has no time dependence, try a separated energy state

\\[
\Psi_n(\vec r,t)=\psi_n(\vec r)\exp\!\left(-\frac{iE_nt}{\hbar}\right).
\tag*{[6]}
\\]

The time derivative of [6] is \\(\partial\Psi_n/\partial t=(-iE_n/\hbar)\Psi_n\\), so the right-hand side of [4] becomes \\(E_n\Psi_n\\). Cancelling the common time factor produces

\\[
\left[-\frac{\hbar^2}{2m}\nabla^2+V(\vec r)\right]\psi_n(\vec r)
=E_n\psi_n(\vec r).
\tag*{[7]}
\\]

Equation [7] is the three-dimensional time-independent Schrodinger equation. The phase in [6] changes with time, but \\(|\Psi_n|^2=|\psi_n|^2\\), so the position probability density of one energy eigenstate is stationary.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Normalising a three-dimensional Gaussian",
      question: "A spatial wavefunction is \\(\\psi(\\vec r)=A\\exp[-(x^2+y^2+z^2)/(2a^2)]\\), where \\(a\\gt0\\) and \\(A\\) is chosen real and positive. Find \\(A\\).",
      answer: "Use the three-dimensional condition [5], not a one-dimensional integral. Squaring the wavefunction gives \\( |\\psi|^2=A^2e^{-x^2/a^2}e^{-y^2/a^2}e^{-z^2/a^2}\\). The integral factorises: \\[1=A^2\\left(\\int_{-\\infty}^{\\infty}e^{-x^2/a^2}\\,dx\\right)\\left(\\int_{-\\infty}^{\\infty}e^{-y^2/a^2}\\,dy\\right)\\left(\\int_{-\\infty}^{\\infty}e^{-z^2/a^2}\\,dz\\right).\\] Each Gaussian integral is \\(a\\sqrt{\\pi}\\), so \\[1=A^2(a\\sqrt{\\pi})^3=A^2\\pi^{3/2}a^3.\\] Solving and taking the stated positive phase convention gives \\[A=\\frac{1}{\\pi^{3/4}a^{3/2}}.\\] **Final result:** the normalised wavefunction has \\(A=\\pi^{-3/4}a^{-3/2}\\), whose unit \\(\\mathrm{m}^{-3/2}\\) makes \\(|\\psi|^2d^3r\\) dimensionless.",
    },
    {
      title: "Interpreting a local probability density",
      question: "At one position, a normalised wavefunction has \\(|\\Psi|^2=2.0\\times10^{24}\\,\\mathrm{m}^{-3}\\). What does this number mean, and is it itself a probability?",
      answer: "The value is a probability density per unit volume, not a probability. For a sufficiently small volume \\(d^3r\\) over which the density is nearly constant, \\[dP=|\\Psi|^2d^3r.\\] For example, if \\(d^3r=1.0\\times10^{-27}\\,\\mathrm{m^3}\\), then \\(dP=(2.0\\times10^{24})(1.0\\times10^{-27})=2.0\\times10^{-3}\\). **Final result:** \\(|\\Psi|^2\\) can exceed one because it carries units; only its integral over a volume is a dimensionless probability between zero and one.",
    },
  ]}
/>
`;
