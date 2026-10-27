export const content = String.raw`## Principle

Knowing a classical particle position and velocity predicts its later motion; in quantum mechanics the object that evolves is a wave-like state.

The time-dependent Schrodinger equation is the law of motion for a non-relativistic quantum state. It turns the classical total-energy relation into a linear equation that determines the wavefunction at later times from its value at one initial time.

## Notation

<Notation
  items={[
    { symbol: "x,t", meaning: "position and time", unit: "m, s" },
    { symbol: "\\psi(x,t)", meaning: "one-dimensional wavefunction", unit: "m^{-1/2}" },
    { symbol: "m", meaning: "particle mass", unit: "kg" },
    { symbol: "V(x,t)", meaning: "potential energy", unit: "J" },
    { symbol: "\\hat p,\\hat H", meaning: "momentum and Hamiltonian operators", unit: "kg m s^{-1}, J" },
    { symbol: "p,E", meaning: "momentum and total energy of a plane-wave component", unit: "kg m s^{-1}, J" },
    { symbol: "k,\\omega", meaning: "angular wave number and angular frequency", unit: "m^{-1}, rad s^{-1}" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "A,c_1,c_2", meaning: "plane-wave amplitude and dimensionless superposition coefficients", unit: "m^{-1/2}, 1, 1" },
    { symbol: "i", meaning: "imaginary unit, satisfying i^2=-1" },
  ]}
/>

## The Core Method

Start with a free-particle plane wave and the quantum relations \\(p=\hbar k\\) and \\(E=\hbar\omega\\):

\\[
\psi(x,t)=A e^{i(kx-\omega t)},
\qquad
p=\hbar k,
\qquad
E=\hbar\omega.
\tag*{[1]}
\\]

Differentiate the wavefunction once with respect to time. Multiplication by \\(i\hbar\\) then returns the energy factor:

\\[
\frac{\partial\psi}{\partial t}=-i\omega\psi
\quad\Longrightarrow\quad
i\hbar\frac{\partial\psi}{\partial t}
=\hbar\omega\psi
=E\psi.
\tag*{[2]}
\\]

Differentiate twice with respect to position. Multiplication by \\(-\hbar^2/(2m)\\) returns the non-relativistic kinetic energy:

\\[
\frac{\partial^2\psi}{\partial x^2}=-k^2\psi
\quad\Longrightarrow\quad
-\frac{\hbar^2}{2m}\frac{\partial^2\psi}{\partial x^2}
=\frac{\hbar^2k^2}{2m}\psi
=\frac{p^2}{2m}\psi.
\tag*{[3]}
\\]

For a particle in a potential, total energy is kinetic plus potential energy. Combining [2] and [3] gives

\\[
i\hbar\frac{\partial\psi(x,t)}{\partial t}
=\left[-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+V(x,t)\right]\psi(x,t).
\tag*{[4]}
\\]

The expression in square brackets is the Hamiltonian operator:

\\[
\hat p=-i\hbar\frac{\partial}{\partial x},
\qquad
\hat H=\frac{\hat p^2}{2m}+V(x,t),
\qquad
i\hbar\frac{\partial\psi}{\partial t}=\hat H\psi.
\tag*{[5]}
\\]

The equation is first order in time, so a valid initial wavefunction \\(\psi(x,t_0)\\) fixes its later evolution. It is also linear and homogeneous. If \\(\psi_1\\) and \\(\psi_2\\) solve the same equation, then

\\[
\hat H(c_1\psi_1+c_2\psi_2)
=c_1\hat H\psi_1+c_2\hat H\psi_2
=i\hbar\frac{\partial}{\partial t}(c_1\psi_1+c_2\psi_2),
\tag*{[6]}
\\]

so every constant linear combination is also a solution. This superposition property is essential for interference.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Verify a free-particle solution",
      question: "Show that \\(\\psi=Ae^{i(kx-\\omega t)}\\) solves the free-particle equation and find the required relation between \\(\\omega\\) and \\(k\\).",
      answer: "Set \\(V=0\\). Direct differentiation gives \\(\\partial\\psi/\\partial t=-i\\omega\\psi\\) and \\(\\partial^2\\psi/\\partial x^2=-k^2\\psi\\). Substitute both results into equation [4]: \\[i\\hbar(-i\\omega)\\psi=-\\frac{\\hbar^2}{2m}(-k^2)\\psi.\\] Since \\(i(-i)=1\\), this becomes \\[\\hbar\\omega\\psi=\\frac{\\hbar^2k^2}{2m}\\psi.\\] For a nonzero state, divide by \\(\\hbar\\psi\\): \\[\\omega=\\frac{\\hbar k^2}{2m}.\\] **Final result:** the plane wave solves the equation precisely when \\(\\boxed{E=\\hbar\\omega=\\hbar^2k^2/(2m)}\\), the free-particle kinetic energy.",
    },
    {
      title: "Why one initial function is enough",
      question: "Why does quantum time evolution require \\(\\psi(x,t_0)\\), but not an independently specified value of \\(\\partial\\psi/\\partial t\\) at the same time?",
      answer: "Equation [5] can be rearranged to \\(\\partial\\psi/\\partial t=\\hat H\\psi/(i\\hbar)\\). Once the state and Hamiltonian are known at \\(t_0\\), the equation itself supplies the time derivative there and continues to do so at later times. **Final result:** because the Schrodinger equation is first order in time, one initial wavefunction determines the subsequent state; an independent initial time derivative would over-specify the problem.",
    },
  ]}
/>
`;
