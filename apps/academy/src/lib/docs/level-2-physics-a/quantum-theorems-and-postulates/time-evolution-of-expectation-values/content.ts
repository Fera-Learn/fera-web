export const content = String.raw`## Principle

The average result of repeated measurements can change because the state evolves or because the measuring rule itself changes with time.

The rate of change of an expectation value has two sources: evolution of the quantum state under the Hamiltonian and any explicit time dependence of the operator. Their combination is the expectation-value equation of motion, from which the Ehrenfest relations follow.

## Notation

<Notation
  items={[
    { symbol: "|\\psi(t)\\rangle", meaning: "normalized quantum state at time t" },
    { symbol: "\\hat Q,\\langle Q\\rangle", meaning: "Hermitian operator and its expectation value" },
    { symbol: "\\hat H", meaning: "Hermitian Hamiltonian operator", unit: "J" },
    { symbol: "[\\hat A,\\hat B]", meaning: "commutator AB-BA of two operators" },
    { symbol: "\\hat x,\\hat p,m", meaning: "position operator, momentum operator, and particle mass", unit: "m, kg m s^{-1}, kg" },
    { symbol: "V(x),F(x)", meaning: "time-independent potential energy and force -dV/dx", unit: "J, N" },
    { symbol: "f(x)", meaning: "differentiable test wavefunction in the common operator domain", unit: "m^{-1/2}" },
    { symbol: "\\omega,x_0,p_0", meaning: "oscillator angular frequency and initial position and momentum means in the worked case", unit: "rad s^{-1}, m, kg m s^{-1}" },
    { symbol: "\\hbar,t,i", meaning: "reduced Planck constant, time, and imaginary unit", unit: "J s, s, 1" },
  ]}
/>

## The Core Method

Begin with \\(\langle Q\rangle=\langle\psi|\hat Q|\psi\rangle\\). Applying the product rule to all three time-dependent factors gives

\\[
\frac{d\langle Q\rangle}{dt}
=\frac{\partial\langle\psi|}{\partial t}\hat Q|\psi\rangle
+\langle\psi|\frac{\partial\hat Q}{\partial t}|\psi\rangle
+\langle\psi|\hat Q\frac{\partial|\psi\rangle}{\partial t}.
\tag*{[1]}
\\]

The Schrodinger equation and its Hermitian conjugate imply

\\[
\frac{\partial|\psi\rangle}{\partial t}=-\frac{i}{\hbar}\hat H|\psi\rangle,
\qquad
\frac{\partial\langle\psi|}{\partial t}=\frac{i}{\hbar}\langle\psi|\hat H.
\tag*{[2]}
\\]

Substitute [2] into [1] and collect the two Hamiltonian terms:

\\[
\begin{aligned}
\frac{d\langle Q\rangle}{dt}
&=\frac{i}{\hbar}\langle\psi|\hat H\hat Q|\psi\rangle
-\frac{i}{\hbar}\langle\psi|\hat Q\hat H|\psi\rangle
+\left\langle\frac{\partial\hat Q}{\partial t}\right\rangle\\
&=\frac{i}{\hbar}\langle[\hat H,\hat Q]\rangle
+\left\langle\frac{\partial\hat Q}{\partial t}\right\rangle.
\end{aligned}
\tag*{[3]}
\\]

For \\(\hat H=\hat p^2/(2m)+V(\hat x)\\), neither \\(\hat x\\) nor \\(\hat p\\) has explicit time dependence. Using \\([\hat p,\hat x]=-i\hbar\\),

\\[
\begin{aligned}
[\hat p^2,\hat x]
&=\hat p[\hat p,\hat x]+[\hat p,\hat x]\hat p\\
&=-2i\hbar\hat p,
\qquad
[\hat H,\hat x]=-\frac{i\hbar}{m}\hat p.
\end{aligned}
\tag*{[4]}
\\]

Equations [3] and [4] give the first Ehrenfest relation:

\\[
\frac{d\langle x\rangle}{dt}=\frac{\langle p\rangle}{m}.
\tag*{[5]}
\\]

In position space, apply the remaining commutator to a differentiable test wavefunction \\(f(x)\\). The product rule shows every term:

\\[
\begin{aligned}
[V,\hat p]f
&=-i\hbar V\frac{df}{dx}+i\hbar\frac{d(Vf)}{dx}\\
&=-i\hbar V\frac{df}{dx}+i\hbar V\frac{df}{dx}
+i\hbar f\frac{dV}{dx}
=i\hbar\frac{dV}{dx}f.
\end{aligned}
\tag*{[6]}
\\]

The kinetic term commutes with momentum, so \\([\hat H,\hat p]=i\hbar\,dV/dx\\). Equation [3] therefore gives

\\[
\frac{d\langle p\rangle}{dt}
=\frac{i}{\hbar}\left\langle i\hbar\frac{dV}{dx}\right\rangle
=-\left\langle\frac{dV}{dx}\right\rangle
=\langle F\rangle.
\tag*{[7]}
\\]

Combining [5] and [7] yields

\\[
m\frac{d^2\langle x\rangle}{dt^2}=\langle F\rangle.
\tag*{[8]}
\\]

This resembles Newton's law, but generally \\(\langle F(x)\rangle\ne F(\langle x\rangle)\\). Equality is exact for forces at most linear in position and can be a useful approximation for a narrow packet. The state and operators must also lie in compatible domains so integrations by parts have vanishing boundary terms.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Expectation values in a harmonic potential",
      question: "For \\(V(x)=m\\omega^2x^2/2\\), let \\(\\langle x\\rangle(0)=x_0\\) and \\(\\langle p\\rangle(0)=p_0\\). Find both expectation values at time t.",
      answer: "The force is \\(F=-dV/dx=-m\\omega^2x\\), so equation [8] becomes \\[\\frac{d^2\\langle x\\rangle}{dt^2}+\\omega^2\\langle x\\rangle=0.\\] Its general solution is \\(\\langle x\\rangle=A\\cos(\\omega t)+B\\sin(\\omega t)\\). The first initial condition gives \\(A=x_0\\). Differentiating and using equation [5], \\[\\langle p\\rangle(0)=m\\frac{d\\langle x\\rangle}{dt}(0)=m\\omega B=p_0,\\] so \\(B=p_0/(m\\omega)\\). Then \\[\\langle x\\rangle=x_0\\cos(\\omega t)+\\frac{p_0}{m\\omega}\\sin(\\omega t),\\] \\[\\langle p\\rangle=p_0\\cos(\\omega t)-m\\omega x_0\\sin(\\omega t).\\] Substitution at \\(t=0\\) recovers both initial values. **Final result:** the two means follow the displayed sinusoidal motion exactly.",
    },
    {
      title: "Identifying a conserved expectation value",
      question: "A time-independent operator \\(\\hat Q\\) commutes with the Hamiltonian. What does equation [3] imply?",
      answer: "Time independence gives \\(\\partial\\hat Q/\\partial t=0\\), and commutation gives \\([\\hat H,\\hat Q]=0\\). Both terms on the right of equation [3] vanish, so \\[\\frac{d\\langle Q\\rangle}{dt}=0.\\] This conclusion applies to every state evolving under that Hamiltonian, provided the operator domains are valid. **Final result:** \\(\\langle Q\\rangle\\) is conserved; explicit time dependence would invalidate this inference even if the commutator vanished.",
    },
  ]}
/>
`;
