export const content = String.raw`## Principle

In a stable bound system, kinetic and potential energies trade back and forth while their long-time averages obey a fixed balance.

The quantum virial theorem relates average kinetic energy to the way a binding potential changes with position. It follows from expectation-value dynamics only when the virial expectation is stationary, or when an appropriate long-time average makes its total derivative vanish.

## Notation

<Notation
  items={[
    { symbol: "\\hat H,\\hat T", meaning: "Hamiltonian and kinetic-energy operators", unit: "J, J" },
    { symbol: "\\hat x,\\hat p,m", meaning: "position operator, momentum operator, and particle mass", unit: "m, kg m s^{-1}, kg" },
    { symbol: "V(x)", meaning: "differentiable, time-independent potential energy", unit: "J" },
    { symbol: "\\hat G", meaning: "Hermitian virial operator (xp+px)/2", unit: "J s" },
    { symbol: "f(x)", meaning: "differentiable test wavefunction in the common operator domain", unit: "m^{-1/2}" },
    { symbol: "n", meaning: "degree of a homogeneous potential satisfying x dV/dx=nV", unit: "1" },
    { symbol: "E", meaning: "total energy eigenvalue in the worked cases", unit: "J" },
    { symbol: "\\omega,\\hbar,i", meaning: "angular frequency, reduced Planck constant, and imaginary unit", unit: "rad s^{-1}, J s, 1" },
  ]}
/>

## The Core Method

Take \\(\hat H=\hat p^2/(2m)+V(\hat x)\\) and \\(\hat p=-i\hbar\,d/dx\\). The kinetic term commutes with momentum. Acting on \\(f\\), the product rule gives

\\[
\begin{aligned}
[\hat H,\hat p]f
&=[V,\hat p]f
=-i\hbar V\frac{df}{dx}+i\hbar\frac{d(Vf)}{dx}\\
&=-i\hbar V\frac{df}{dx}
+i\hbar V\frac{df}{dx}+i\hbar f\frac{dV}{dx}
=i\hbar\frac{dV}{dx}f.
\end{aligned}
\tag*{[1]}
\\]

Thus \\([\hat H,\hat p]=i\hbar\,dV/dx\\). Also, \\([\hat H,\hat x]=-i\hbar\hat p/m\\). Using \\([\hat H,\hat A\hat B]=[\hat H,\hat A]\hat B+\hat A[\hat H,\hat B]\\) for the Hermitian operator \\(\hat G=(\hat x\hat p+\hat p\hat x)/2\\),

\\[
[\hat H,\hat G]
=-\frac{i\hbar}{m}\hat p^2
+\frac{i\hbar}{2}\left(\hat x\frac{dV}{dx}+\frac{dV}{dx}\hat x\right).
\tag*{[2]}
\\]

Because \\(x\\) and \\(dV/dx\\) are both functions of position, they commute. The expectation-value equation of motion then gives

\\[
\frac{d\langle G\rangle}{dt}
=\frac{i}{\hbar}\langle[\hat H,\hat G]\rangle
=\frac{\langle p^2\rangle}{m}
-\left\langle x\frac{dV}{dx}\right\rangle.
\tag*{[3]}
\\]

For a stationary bound state, \\(d\langle G\rangle/dt=0\\). The same conclusion holds for a bounded motion after a long-time average if the endpoint contribution \\([\langle G\rangle(t_2)-\langle G\rangle(t_1)]/(t_2-t_1)\\) tends to zero. Since \\(\hat T=\hat p^2/(2m)\\),

\\[
2\langle T\rangle
=\left\langle x\frac{dV}{dx}\right\rangle.
\tag*{[4]}
\\]

The derivation assumes normalizable states in the domains of all products, a differentiable potential where the expectation is taken, finite expectation values, and boundary terms that vanish. It cannot be applied blindly to an unbound state or a singular potential without checking those conditions.

If \\(V\\) is homogeneous with \\(x\,dV/dx=nV\\), equation [4] becomes

\\[
2\langle T\rangle=n\langle V\rangle.
\tag*{[5]}
\\]

For a harmonic potential \\(n=2\\), so \\(\langle T\rangle=\langle V\rangle\\). For an inverse-distance potential \\(n=-1\\), the corresponding three-dimensional result is \\(2\langle T\rangle+\langle V\rangle=0\\), subject to the same bound-state and domain assumptions.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Energy sharing in a stationary oscillator state",
      question: "A harmonic-oscillator energy eigenstate has total energy \\(E\\). Use the virial theorem to find \\(\\langle T\\rangle\\) and \\(\\langle V\\rangle\\), then specialize to the ground state \\(E=\\hbar\\omega/2\\).",
      answer: "For \\(V=m\\omega^2x^2/2\\), \\(x\\,dV/dx=m\\omega^2x^2=2V\\). Equation [4] therefore gives \\(2\\langle T\\rangle=2\\langle V\\rangle\\), so \\(\\langle T\\rangle=\\langle V\\rangle\\). The total energy is \\[E=\\langle T\\rangle+\\langle V\\rangle=2\\langle T\\rangle,\\] hence \\[\\langle T\\rangle=\\langle V\\rangle=\\frac{E}{2}.\\] For \\(E=\\hbar\\omega/2\\), each contribution is \\(\\hbar\\omega/4\\). Their sum returns the stated total energy. **Final result:** in the ground state, \\(\\langle T\\rangle=\\langle V\\rangle=\\hbar\\omega/4\\).",
    },
    {
      title: "Bound inverse-distance potential",
      question: "For a stationary bound state in \\(V\\propto-1/r\\), express the total energy \\(E\\) in terms of \\(\\langle T\\rangle\\) and \\(\\langle V\\rangle\\).",
      answer: "An inverse-distance potential has degree \\(n=-1\\), so equation [5] gives \\(2\\langle T\\rangle=-\\langle V\\rangle\\). Therefore \\[E=\\langle T\\rangle+\\langle V\\rangle=\\langle T\\rangle-2\\langle T\\rangle=-\\langle T\\rangle.\\] Equivalently, substituting \\(\\langle T\\rangle=-\\langle V\\rangle/2\\) gives \\(E=\\langle V\\rangle/2\\). **Final result:** \\(E=-\\langle T\\rangle=\\langle V\\rangle/2\\), which is negative for a bound attractive state.",
    },
  ]}
/>
`;
