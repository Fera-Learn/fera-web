export const content = String.raw`## Principle

The centre of a narrow quantum wave packet often moves much like the corresponding classical particle.

Ehrenfest's theorem shows how classical mechanics emerges at the level of quantum expectation values. The mean position and mean momentum obey equations with the form of Newton's laws, even though individual measurements remain probabilistic.

## Notation

<Notation
  items={[
    { symbol: "t", meaning: "time", unit: "s" },
    { symbol: "|\\psi\\rangle", meaning: "normalised quantum state" },
    { symbol: "\\hat Q", meaning: "possibly time-dependent operator", unit: "varies" },
    { symbol: "\\langle Q\\rangle", meaning: "expectation value of Q", unit: "same as Q" },
    { symbol: "\\hat H", meaning: "Hamiltonian operator", unit: "J" },
    { symbol: "x,\\hat p", meaning: "position operator and momentum operator", unit: "m, kg m s^{-1}" },
    { symbol: "m,V(x)", meaning: "particle mass and time-independent potential energy", unit: "kg, J" },
    { symbol: "F(x)", meaning: "force, equal to -dV/dx", unit: "N" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "\\omega", meaning: "harmonic-oscillator angular frequency", unit: "rad s^{-1}" },
    { symbol: "x_0,p_0", meaning: "initial mean position and mean momentum", unit: "m, kg m s^{-1}" },
    { symbol: "C,D", meaning: "constants in the harmonic-oscillator centroid solution", unit: "m, m" },
    { symbol: "i", meaning: "imaginary unit, satisfying i^2=-1" },
  ]}
/>

## The Core Method

For a normalised state, write the expectation value in abstract notation:

\\[
\langle Q\rangle=\langle\psi|\hat Q|\psi\rangle.
\tag*{[1]}
\\]

For a Hermitian Hamiltonian, the Schrodinger equation and its adjoint determine the time derivatives of the ket and bra. The sign changes under complex conjugation:

\\[
\frac{\partial|\psi\rangle}{\partial t}
=-\frac{i}{\hbar}\hat H|\psi\rangle,
\qquad
\frac{\partial\langle\psi|}{\partial t}
=\frac{i}{\hbar}\langle\psi|\hat H.
\tag*{[2]}
\\]

Differentiate [1] with the product rule and substitute [2]:

\\[
\begin{aligned}
\frac{d\langle Q\rangle}{dt}
&=\frac{\partial\langle\psi|}{\partial t}\hat Q|\psi\rangle
+\left\langle\frac{\partial\hat Q}{\partial t}\right\rangle
+\langle\psi|\hat Q\frac{\partial|\psi\rangle}{\partial t} \\
&=\frac{i}{\hbar}\langle\hat H\hat Q\rangle
+\left\langle\frac{\partial\hat Q}{\partial t}\right\rangle
-\frac{i}{\hbar}\langle\hat Q\hat H\rangle \\
&=\frac{i}{\hbar}\langle[\hat H,\hat Q]\rangle
+\left\langle\frac{\partial\hat Q}{\partial t}\right\rangle.
\end{aligned}
\tag*{[3]}
\\]

For \\(\hat H=\hat p^2/(2m)+V(x)\\), the position operator has no explicit time dependence. Use \\([\hat p,x]=-i\hbar\\) and expand the product commutator:

\\[
[\hat H,x]
=\frac{1}{2m}[\hat p^2,x]
=\frac{1}{2m}\left(\hat p[\hat p,x]+[\hat p,x]\hat p\right)
=-\frac{i\hbar}{m}\hat p.
\tag*{[4]}
\\]

Substitution into [3] gives the first Ehrenfest relation with a positive sign:

\\[
\frac{d\langle x\rangle}{dt}
=\frac{i}{\hbar}\left\langle-\frac{i\hbar}{m}\hat p\right\rangle
=\frac{\langle p\rangle}{m}.
\tag*{[5]}
\\]

For momentum, the kinetic term commutes with \\(\hat p\\). Check the remaining sign by acting on a differentiable wavefunction:

\\[
\begin{aligned}
[V,\hat p]\psi
&=V\left(-i\hbar\frac{d\psi}{dx}\right)
-\left[-i\hbar\frac{d}{dx}(V\psi)\right] \\
&=-i\hbar V\frac{d\psi}{dx}
+i\hbar\left(\frac{dV}{dx}\psi+V\frac{d\psi}{dx}\right)
=i\hbar\frac{dV}{dx}\psi.
\end{aligned}
\tag*{[6]}
\\]

Therefore \\([\hat H,\hat p]=i\hbar\,dV/dx\\), and [3] gives

\\[
\frac{d\langle p\rangle}{dt}
=\frac{i}{\hbar}\left\langle i\hbar\frac{dV}{dx}\right\rangle
=-\left\langle\frac{dV}{dx}\right\rangle
=\langle F\rangle.
\tag*{[7]}
\\]

Combining [5] and [7] yields the expectation-value form of Newton's second law:

\\[
m\frac{d^2\langle x\rangle}{dt^2}
=-\left\langle\frac{dV}{dx}\right\rangle
=\langle F\rangle.
\tag*{[8]}
\\]

In general, \\(\langle F(x)\rangle\\) is not equal to \\(F(\langle x\rangle)\\). Exact closed classical motion of the centroid occurs for free, linear, and quadratic potentials; for more nonlinear potentials, the packet's shape affects the mean force.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Harmonic-oscillator centroid",
      question: "For \\(V(x)=m\\omega^2x^2/2\\), solve for \\(\\langle x\\rangle(t)\\) given \\(\\langle x\\rangle(0)=x_0\\) and \\(\\langle p\\rangle(0)=p_0\\).",
      answer: "Differentiate the potential: \\(dV/dx=m\\omega^2x\\). Equation [8] then gives \\[m\\frac{d^2\\langle x\\rangle}{dt^2}=-m\\omega^2\\langle x\\rangle.\\] Divide by \\(m\\): \\[\\frac{d^2\\langle x\\rangle}{dt^2}+\\omega^2\\langle x\\rangle=0.\\] The general solution is \\(\\langle x\\rangle=C\\cos(\\omega t)+D\\sin(\\omega t)\\). The first condition gives \\(C=x_0\\). Differentiate and use equation [5]: \\[\\left.\\frac{d\\langle x\\rangle}{dt}\\right|_{t=0}=\\omega D=\\frac{p_0}{m},\\] so \\(D=p_0/(m\\omega)\\). **Final result:** \\(\\boxed{\\langle x\\rangle(t)=x_0\\cos(\\omega t)+[p_0/(m\\omega)]\\sin(\\omega t)}\\), exactly the classical oscillator trajectory for the stated initial means.",
    },
    {
      title: "Free-particle mean motion",
      question: "Use Ehrenfest's theorem to describe the mean motion when \\(V(x)=0\\).",
      answer: "With zero potential, \\(dV/dx=0\\). Equation [7] gives \\(d\\langle p\\rangle/dt=0\\), so \\(\\langle p\\rangle=p_0\\) is constant. Equation [5] then gives \\[\\frac{d\\langle x\\rangle}{dt}=\\frac{p_0}{m}.\\] Integrating and using \\(\\langle x\\rangle(0)=x_0\\) gives \\[\\langle x\\rangle(t)=x_0+\\frac{p_0}{m}t.\\] **Final result:** the wave packet may spread, but its mean position moves uniformly with velocity \\(p_0/m\\), exactly as a free classical particle does.",
    },
  ]}
/>
`;
