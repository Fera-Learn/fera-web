export const content = String.raw`## Principle

Near the bottom of a smooth bowl, the restoring force is approximately proportional to displacement.

Near a stable equilibrium where the potential has positive, nonzero curvature, a smooth potential is approximately quadratic. The quantum harmonic oscillator therefore models vibrations across physics, and its dimensionless Schrodinger equation shows why only an evenly spaced discrete set of energies produces normalisable states.

## Notation

<Notation
  items={[
    { symbol: "x,x_{\\mathrm e},x_0", meaning: "position, equilibrium position, and oscillator length", unit: "m, m, m" },
    { symbol: "V(x),E", meaning: "potential energy and energy eigenvalue", unit: "J, J" },
    { symbol: "\\kappa,m,\\omega", meaning: "spring constant, particle mass, and angular frequency", unit: "N m^{-1}, kg, rad s^{-1}" },
    { symbol: "\\psi(x)", meaning: "normalised stationary-state wavefunction", unit: "m^{-1/2}" },
    { symbol: "\\xi,\\epsilon", meaning: "dimensionless position and energy" },
    { symbol: "h(\\xi),c_r", meaning: "polynomial factor and its power-series coefficients" },
    { symbol: "r,n", meaning: "non-negative integer series index and energy quantum number" },
    { symbol: "\\Delta E", meaning: "spacing between adjacent energy levels", unit: "J" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
  ]}
/>

## The Core Method

Expand a smooth potential about a stable equilibrium \\(x_{\mathrm e}\\), assuming \\(d^2V/dx^2|_{x_{\mathrm e}}\gt0\\). The first derivative vanishes there, and the positive, nonzero quadratic term is the leading position-dependent term.

\\[
V(x)=V(x_{\mathrm e})
+\left.\frac{dV}{dx}\right|_{x_{\mathrm e}}(x-x_{\mathrm e})
+\frac{1}{2}\left.\frac{d^2V}{dx^2}\right|_{x_{\mathrm e}}(x-x_{\mathrm e})^2+\cdots.
\tag*{[1]}
\\]

Choose the energy zero so that \\(V(x_{\mathrm e})=0\\), set the origin at \\(x_{\mathrm e}\\), and define \\(\kappa=m\omega^2\\). Then

\\[
V(x)=\frac{1}{2}\kappa x^2
=\frac{1}{2}m\omega^2x^2,
\qquad
\omega=\sqrt{\frac{\kappa}{m}}.
\tag*{[2]}
\\]

The time-independent Schrodinger equation is

\\[
-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2}
+\frac{1}{2}m\omega^2x^2\psi=E\psi.
\tag*{[3]}
\\]

Introduce the natural oscillator length and dimensionless variables.

\\[
x_0=\sqrt{\frac{\hbar}{m\omega}},
\qquad
\xi=\frac{x}{x_0}=\sqrt{\frac{m\omega}{\hbar}}x,
\qquad
\epsilon=\frac{E}{\hbar\omega}.
\tag*{[4]}
\\]

Because \\(d/dx=(1/x_0)d/d\xi\\), substitution into [3] gives a parameter-free equation.

\\[
-\frac{1}{2}\frac{d^2\psi}{d\xi^2}
+\frac{1}{2}\xi^2\psi=\epsilon\psi,
\qquad
\frac{d^2\psi}{d\xi^2}=(\xi^2-2\epsilon)\psi.
\tag*{[5]}
\\]

At large \\(|\xi|\\), the acceptable solution must decay. Factor out its Gaussian behaviour.

\\[
\psi(\xi)=h(\xi)e^{-\xi^2/2}.
\tag*{[6]}
\\]

Differentiate [6] twice and substitute into [5].

\\[
\frac{d\psi}{d\xi}=(h'-\xi h)e^{-\xi^2/2},
\qquad
\frac{d^2\psi}{d\xi^2}=
[h''-2\xi h'+(\xi^2-1)h]e^{-\xi^2/2}.
\tag*{[7]}
\\]

After cancelling the nonzero Gaussian factor, the polynomial factor obeys

\\[
h''-2\xi h'+(2\epsilon-1)h=0.
\tag*{[8]}
\\]

Insert the power series \\(h(\xi)=\sum_{r=0}^{\infty}c_r\xi^r\\), align equal powers, and solve for the next coefficient.

\\[
\sum_{r=0}^{\infty}
\left[(r+2)(r+1)c_{r+2}+(2\epsilon-1-2r)c_r\right]\xi^r=0,
\tag*{[9]}
\\]

\\[
c_{r+2}=\frac{2r+1-2\epsilon}{(r+2)(r+1)}c_r.
\tag*{[10]}
\\]

An infinite series eventually grows too strongly for the Gaussian to keep the state normalisable. The series must terminate at some non-negative integer \\(r=n\\), so its numerator must vanish there.

\\[
2n+1-2\epsilon=0
\quad\Longrightarrow\quad
\epsilon_n=n+\frac{1}{2},
\qquad n=0,1,2,\ldots
\tag*{[11]}
\\]

Restoring dimensions gives the oscillator spectrum.

\\[
E_n=\left(n+\frac{1}{2}\right)\hbar\omega,
\qquad
E_{n+1}-E_n=\hbar\omega.
\tag*{[12]}
\\]

Equation [10] links coefficients two indices apart, so each solution contains only even or only odd powers. The eigenfunctions therefore alternate in parity, with parity \\((-1)^n\\). A common scaling error is to omit the square root in \\(x_0=\sqrt{\hbar/(m\omega)}\\).

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Energy scale of a mechanical oscillator",
      question: "A particle of mass \\(2.0\\times10^{-26}\\,\\mathrm{kg}\\) experiences a harmonic potential with \\(\\kappa=8.0\\,\\mathrm{N\\,m^{-1}}\\). Find \\(\\omega\\), \\(x_0\\), and the first two energies. Use \\(\\hbar=1.055\\times10^{-34}\\,\\mathrm{J\\,s}\\).",
      answer: "Equation [2] gives \\[\\omega=\\sqrt{\\frac{8.0}{2.0\\times10^{-26}}}=2.0\\times10^{13}\\,\\mathrm{rad\\,s^{-1}}.\\] Equation [4] then gives \\[x_0=\\sqrt{\\frac{1.055\\times10^{-34}}{(2.0\\times10^{-26})(2.0\\times10^{13})}}=1.62\\times10^{-11}\\,\\mathrm m.\\] From equation [12], \\[E_0=\\frac{1}{2}\\hbar\\omega=1.06\\times10^{-21}\\,\\mathrm J,\\qquad E_1=\\frac{3}{2}\\hbar\\omega=3.17\\times10^{-21}\\,\\mathrm J.\\] **Final result:** \\(\\omega=2.0\\times10^{13}\\,\\mathrm{rad\\,s^{-1}}\\), \\(x_0=1.62\\times10^{-11}\\,\\mathrm m\\), \\(E_0=1.06\\times10^{-21}\\,\\mathrm J\\), and \\(E_1=3.17\\times10^{-21}\\,\\mathrm J\\).",
    },
    {
      title: "Why a molecular vibration is approximately harmonic",
      question: "A smooth molecular potential has a minimum at \\(x=x_{\\mathrm e}\\) with curvature \\(d^2V/dx^2=\\kappa\\). Explain the low-energy approximation and identify the level spacing.",
      answer: "At the minimum, \\(dV/dx=0\\), so the linear term in equation [1] vanishes. For sufficiently small displacement, cubic and higher terms are smaller than the quadratic term. After shifting the coordinate to \\(x-x_{\\mathrm e}\\) and subtracting the constant \\(V(x_{\\mathrm e})\\), \\[V(x)\\approx\\frac{1}{2}\\kappa(x-x_{\\mathrm e})^2.\\] Equation [2] identifies \\(\\omega=\\sqrt{\\kappa/m}\\), and equation [12] gives adjacent spacing \\[\\Delta E=\\hbar\\sqrt{\\frac{\\kappa}{m}}.\\] **Final result:** low-energy vibrations are approximately harmonic and have uniformly spaced levels separated by \\(\\hbar\\sqrt{\\kappa/m}\\).",
    },
  ]}
/>
`;
