export const content = String.raw`## Principle

A weak extra interaction shifts an energy most when the unperturbed state is concentrated where that interaction is strong.

For a normalised, non-degenerate stationary state, the first-order energy correction is the expectation value of the perturbing Hamiltonian in the unperturbed state. It is therefore a probability-weighted average of the added potential or interaction, not the perturbation's value at an arbitrary point.

## Notation

<Notation
  items={[
    { symbol: "\\hat H_0,\\hat H'", meaning: "unperturbed Hamiltonian and weak static perturbation", unit: "J" },
    { symbol: "|n^{(0)}\\rangle,|n^{(1)}\\rangle", meaning: "normalised unperturbed state and its first-order state correction" },
    { symbol: "E_n,E_n^{(0)},E_n^{(1)}", meaning: "perturbed energy, unperturbed energy, and first-order correction", unit: "J, J, J" },
    { symbol: "\\psi_n^{(0)}(x)", meaning: "position-space unperturbed wavefunction", unit: "m^{-1/2}" },
    { symbol: "V'(x)", meaning: "multiplicative perturbing potential in one dimension", unit: "J" },
    { symbol: "D,n,m", meaning: "spatial domain, chosen state index, and comparison-state index" },
    { symbol: "L,x", meaning: "well width and position coordinate", unit: "m" },
    { symbol: "F", meaning: "constant force-scale magnitude in a linear perturbation", unit: "N" },
  ]}
/>

## The Core Method

Assume the level \\(E_n^{(0)}\\) is not degenerate and the unperturbed state is normalised. Equating first-order terms in the perturbed eigenvalue equation gives

\\[
\hat H_0|n^{(1)}\rangle+\hat H'|n^{(0)}\rangle
=E_n^{(0)}|n^{(1)}\rangle+E_n^{(1)}|n^{(0)}\rangle.
\tag*{[1]}
\\]

Project onto \\(\langle n^{(0)}|\\). Hermiticity of \\(\hat H_0\\) gives \\(\langle n^{(0)}|\hat H_0=E_n^{(0)}\langle n^{(0)}|\\), so the two terms containing \\(\langle n^{(0)}|n^{(1)}\rangle\\) cancel explicitly:

\\[
\begin{aligned}
E_n^{(0)}\langle n^{(0)}|n^{(1)}\rangle
+\langle n^{(0)}|\hat H'|n^{(0)}\rangle
&=E_n^{(0)}\langle n^{(0)}|n^{(1)}\rangle
+E_n^{(1)}\langle n^{(0)}|n^{(0)}\rangle,\\
E_n^{(1)}&=\langle n^{(0)}|\hat H'|n^{(0)}\rangle.
\end{aligned}
\tag*{[2]}
\\]

If the perturbation is a one-dimensional potential \\(V'(x)\\), the abstract inner product becomes an integral over the full normalisation domain \\(D\\):

\\[
E_n^{(1)}=\int_D \psi_n^{(0)*}(x)V'(x)\psi_n^{(0)}(x)\,dx
=\int_D V'(x)|\psi_n^{(0)}(x)|^2\,dx.
\tag*{[3]}
\\]

The units check directly: \\(|\psi|^2\\) has units \\(\mathrm{m^{-1}}\\), \\(V'\\) has units \\(\mathrm J\\), and \\(dx\\) has units \\(\mathrm m\\), so [3] has units of energy. The physical first-order estimate is

\\[
E_n\approx E_n^{(0)}+E_n^{(1)},
\qquad
|\langle m^{(0)}|\hat H'|n^{(0)}\rangle|
\ll|E_n^{(0)}-E_m^{(0)}|\quad(m\ne n).
\tag*{[4]}
\\]

For an infinite well on \\(0<x<L\\), the normalised eigenstates are

\\[
\psi_n^{(0)}(x)=\sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right),
\qquad n=1,2,3,\ldots.
\tag*{[5]}
\\]

Consider the linear perturbation \\(V'(x)=Fx\\). The probability density in [5] is symmetric about \\(x=L/2\\), so \\(\langle x\rangle=L/2\\). The same result follows explicitly:

\\[
\begin{aligned}
E_n^{(1)}
&=\frac{2F}{L}\int_0^L x\sin^2\left(\frac{n\pi x}{L}\right)dx\\
&=\frac{F}{L}\int_0^L x\left[1-\cos\left(\frac{2n\pi x}{L}\right)\right]dx\\
&=\frac{F}{L}\left(\frac{L^2}{2}-0\right)=\frac{FL}{2}.
\end{aligned}
\tag*{[6]}
\\]

The sign follows the perturbation: a positive added potential everywhere gives a positive first-order shift. A common error is to use [2] for one arbitrarily chosen member of a degenerate level; diagonal matrix elements in such a basis need not be the physical shifts.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Linear perturbation in a nanowell",
      question: "An electron is in a non-degenerate level of a one-dimensional infinite well of width \\(L=2.0\\,\\mathrm{nm}\\). A weak perturbation \\(V'(x)=Fx\\) is applied with \\(F=3.0\\times10^{-13}\\,\\mathrm N\\). Find the first-order shift in electronvolts.",
      answer: "Equation [6] is independent of \\(n\\) because every well eigenstate has \\(\\langle x\\rangle=L/2\\). Therefore \\[E_n^{(1)}=\\frac{FL}{2}=\\frac{(3.0\\times10^{-13})(2.0\\times10^{-9})}{2}=3.0\\times10^{-22}\\,\\mathrm J.\\] Using \\(1\\,\\mathrm{eV}=1.602\\times10^{-19}\\,\\mathrm J\\), \\[E_n^{(1)}=\\frac{3.0\\times10^{-22}}{1.602\\times10^{-19}}=1.9\\times10^{-3}\\,\\mathrm{eV}.\\] **Final result:** the level shifts upward by \\(1.9\\,\\mathrm{meV}\\), provided this is small compared with neighbouring level gaps.",
    },
    {
      title: "Using localisation to compare shifts",
      question: "A positive perturbing potential is appreciable only in a narrow region. Which of two non-degenerate states receives the larger first-order shift?",
      answer: "Equation [3] weights the perturbation by probability density. The state with the larger integrated probability in that region has the larger positive shift. A node inside the region can make the shift very small even if the perturbation itself is large there. **Final result:** compare \\(\\int_{\\mathrm{region}}V'(x)|\\psi_n^{(0)}(x)|^2dx\\), not the peak values of the wavefunctions.",
    },
  ]}
/>
`;
