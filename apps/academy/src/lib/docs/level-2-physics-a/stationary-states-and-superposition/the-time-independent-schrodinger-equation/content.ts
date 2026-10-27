export const content = String.raw`## Principle

A fixed landscape can support standing patterns whose shapes stay unchanged while their complex phase advances.

For a time-independent potential, separation of variables turns the time-dependent Schrodinger equation into a spatial energy-eigenvalue equation and a universal phase factor. The resulting spatial solutions are stationary states.

## Notation

<Notation
  items={[
    { symbol: "x,t", meaning: "position and time", unit: "m, s" },
    { symbol: "m", meaning: "particle mass", unit: "kg" },
    { symbol: "V(x)", meaning: "time-independent potential energy", unit: "J" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
    { symbol: "\\Psi(x,t)", meaning: "time-dependent wavefunction", unit: "m^{-1/2}" },
    { symbol: "\\psi(x),T(t)", meaning: "spatial and temporal factors of a separated state", unit: "m^{-1/2}, 1" },
    { symbol: "\\hat H", meaning: "Hamiltonian operator", unit: "J" },
    { symbol: "E", meaning: "separation constant and energy eigenvalue", unit: "J" },
    { symbol: "A,k", meaning: "constant wave amplitude and wave number", unit: "m^{-1/2}, m^{-1}" },
    { symbol: "C", meaning: "arbitrary nonzero constant multiplying the temporal factor", unit: "1" },
  ]}
/>

## The Core Method

For one nonrelativistic particle in one dimension, assume that the potential has no explicit time dependence. The time-dependent Schrodinger equation is

\\[
i\hbar\frac{\partial\Psi}{\partial t}
=\left[-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+V(x)\right]\Psi
=\hat H\Psi.\tag*{[1]}
\\]

Seek a nonzero separated solution in the form

\\[
\Psi(x,t)=\psi(x)T(t).\tag*{[2]}
\\]

Substitute equation [2] into equation [1]. Spatial derivatives act only on \\(\psi\\), while the time derivative acts only on \\(T\\).

\\[
i\hbar\psi(x)\frac{dT}{dt}
=T(t)\left[-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2}+V(x)\psi(x)\right].\tag*{[3]}
\\]

Divide by \\(\psi(x)T(t)\\) wherever the product is nonzero.

\\[
i\hbar\frac{1}{T}\frac{dT}{dt}
=-\frac{\hbar^2}{2m}\frac{1}{\psi}\frac{d^2\psi}{dx^2}+V(x).\tag*{[4]}
\\]

The left side depends only on \\(t\\), and the right side depends only on \\(x\\). Equality for every \\(x\\) and \\(t\\) requires both sides to equal one constant, denoted by \\(E\\).

\\[
i\hbar\frac{1}{T}\frac{dT}{dt}=E,
\qquad
-\frac{\hbar^2}{2m}\frac{1}{\psi}\frac{d^2\psi}{dx^2}+V(x)=E.\tag*{[5]}
\\]

The time equation separates and integrates directly. Retaining the arbitrary nonzero integration constant gives

\\[
\frac{dT}{T}=-\frac{iE}{\hbar}\,dt
\quad\Longrightarrow\quad
\ln T=-\frac{iEt}{\hbar}+\ln C
\quad\Longrightarrow\quad
T(t)=Ce^{-iEt/\hbar},
\qquad C\ne0.\tag*{[6]}
\\]

The separated factors are not individually unique: the constant \\(C\\) multiplying \\(T\\) may instead be absorbed into the spatial factor \\(\psi(x)\\), leaving the product \\(\psi(x)T(t)\\) unchanged. After this redistribution, the convention \\(T(0)=1\\) fixes the remaining phase convention, so \\(T(t)=e^{-iEt/\hbar}\\).

Multiplying the spatial part of equation [5] by \\(\psi\\) gives the time-independent Schrodinger equation.

\\[
\hat H\psi(x)
=\left[-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+V(x)\right]\psi(x)
=E\psi(x).\tag*{[7]}
\\]

Combining equations [2] and [6], each allowed spatial solution has the full time dependence

\\[
\Psi_E(x,t)=\psi_E(x)e^{-iEt/\hbar}.\tag*{[8]}
\\]

The phase has unit modulus, so a single energy eigenstate has time-independent position probability density. "Stationary" refers to measurable distributions, not to a wavefunction with no time dependence.

\\[
|\Psi_E(x,t)|^2
=\psi_E^*(x)e^{iEt/\hbar}\psi_E(x)e^{-iEt/\hbar}
=|\psi_E(x)|^2.\tag*{[9]}
\\]

If \\(V\\) depends explicitly on time, the separation in equation [2] is not generally valid and equation [7] alone does not determine the evolution.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Free-particle stationary state",
      question: "In a region where \\(V(x)=0\\), let \\(\\psi(x)=Ae^{ikx}\\), where \\(A\\) is a constant and \\(k\\) is a real wave number. Find the energy and the full time-dependent state.",
      answer: "Apply the spatial Hamiltonian in equation [7]. First differentiate twice: \\[\\frac{d\\psi}{dx}=ikAe^{ikx},\\qquad \\frac{d^2\\psi}{dx^2}=-k^2Ae^{ikx}=-k^2\\psi.\\] Therefore \\[\\hat H\\psi=-\\frac{\\hbar^2}{2m}\\frac{d^2\\psi}{dx^2}=\\frac{\\hbar^2k^2}{2m}\\psi.\\] Comparing with \\(\\hat H\\psi=E\\psi\\) gives \\(E=\\hbar^2k^2/(2m)\\). Insert this value into equation [8]: \\[\\Psi(x,t)=Ae^{ikx}e^{-i\\hbar k^2t/(2m)}.\\] **Final result:** \\(E=\\hbar^2k^2/(2m)\\) and \\(\\Psi(x,t)=A\\exp[i kx-i\\hbar k^2t/(2m)]\\). Direct differentiation reproduces equation [1], which checks the sign of the time phase.",
    },
    {
      title: "Why a stationary state can still evolve",
      question: "A normalized energy eigenstate acquires the factor \\(e^{-iEt/\\hbar}\\). Does the state have a time-dependent position probability density?",
      answer: "Complex conjugation changes the phase sign, so the phase cancels in the modulus: \\[|\\Psi_E|^2=|\\psi_E|^2e^{iEt/\\hbar}e^{-iEt/\\hbar}=|\\psi_E|^2.\\] **Final result:** the wavefunction phase evolves, but the position probability density is constant in time. Omitting the minus sign in the ket phase would fail the time-dependent Schrodinger equation even though the modulus would still be one.",
    },
  ]}
/>
`;
