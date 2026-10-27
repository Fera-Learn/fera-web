export const content = String.raw`## Principle

A nearly solvable system can often be understood by starting from the known solution and adding a small correction.

Time-independent perturbation theory estimates how a weak, static change to a solvable Hamiltonian changes its stationary energies and states. The method is an ordered approximation: its non-degenerate form applies only when the chosen unperturbed level is isolated from every other unperturbed energy.

## Notation

<Notation
  items={[
    { symbol: "\\hat H_0,\\hat H',\\hat H", meaning: "unperturbed, perturbing, and total Hamiltonian operators", unit: "J" },
    { symbol: "\\eta", meaning: "dimensionless bookkeeping parameter, set to one after ordering terms" },
    { symbol: "|n^{(0)}\\rangle,|n^{(k)}\\rangle", meaning: "normalised unperturbed state n and its correction of order k" },
    { symbol: "E_n^{(0)},E_n^{(k)}", meaning: "unperturbed energy of state n and its correction of order k", unit: "J" },
    { symbol: "m,n,k,\\delta_{mn}", meaning: "state and order indices, and the Kronecker delta" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "c_{mn}^{(1)}", meaning: "first-order amplitude of unperturbed state m in corrected state n" },
  ]}
/>

## The Core Method

Start from a solved eigenvalue problem with orthonormal states. Introduce a dimensionless parameter \\(\eta\\) only to track powers; the physical Hamiltonian is recovered by setting \\(\eta=1\\).

\\[
\hat H_0|n^{(0)}\rangle=E_n^{(0)}|n^{(0)}\rangle,
\qquad
\langle m^{(0)}|n^{(0)}\rangle=\delta_{mn},
\qquad
\hat H=\hat H_0+\eta\hat H'.
\tag*{[1]}
\\]

Expand both the energy and state in the same parameter.

\\[
E_n=E_n^{(0)}+\eta E_n^{(1)}+\eta^2E_n^{(2)}+\cdots,
\qquad
|n\rangle=|n^{(0)}\rangle+\eta|n^{(1)}\rangle+\eta^2|n^{(2)}\rangle+\cdots.
\tag*{[2]}
\\]

Insert [2] into \\(\hat H|n\rangle=E_n|n\rangle\\). Expanding both products gives

\\[
\begin{aligned}
&\hat H_0|n^{(0)}\rangle
+\eta\left(\hat H_0|n^{(1)}\rangle+\hat H'|n^{(0)}\rangle\right)+O(\eta^2)\\
&=E_n^{(0)}|n^{(0)}\rangle
+\eta\left(E_n^{(0)}|n^{(1)}\rangle+E_n^{(1)}|n^{(0)}\rangle\right)+O(\eta^2).
\end{aligned}
\tag*{[3]}
\\]

The zeroth-order terms reproduce [1]. Equating coefficients of \\(\eta\\) leaves the first-order equation

\\[
\left(\hat H_0-E_n^{(0)}\right)|n^{(1)}\rangle
=\left(E_n^{(1)}-\hat H'\right)|n^{(0)}\rangle.
\tag*{[4]}
\\]

Projecting [4] onto \\(\langle n^{(0)}|\\), using Hermiticity of \\(\hat H_0\\), and using normalisation cancels the terms containing \\(|n^{(1)}\rangle\\). Therefore

\\[
E_n^{(1)}=\langle n^{(0)}|\hat H'|n^{(0)}\rangle.
\tag*{[5]}
\\]

For an isolated level, choose the phase and normalisation convention \\(\langle n^{(0)}|n^{(1)}\rangle=0\\). Projecting [4] onto \\(\langle m^{(0)}|\\) for \\(m\ne n\\) then gives the survey-level state correction

\\[
|n^{(1)}\rangle
=\sum_{m\ne n}c_{mn}^{(1)}|m^{(0)}\rangle,
\qquad
c_{mn}^{(1)}=
\frac{\langle m^{(0)}|\hat H'|n^{(0)}\rangle}
{E_n^{(0)}-E_m^{(0)}}.
\tag*{[6]}
\\]

Equation [6] exposes the validity condition: perturbing matrix elements must be small compared with the relevant energy gaps. A zero or very small denominator means the non-degenerate method is invalid and the nearly degenerate subspace must be diagonalised instead. The state-correction formula is useful context but is non-examinable at this course depth.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Two-level expansion",
      question: "An isolated state \\(|1^{(0)}\\rangle\\) has \\(E_1^{(0)}=1.0\\,\\mathrm{eV}\\), a second state has \\(E_2^{(0)}=4.0\\,\\mathrm{eV}\\), and the perturbation matrix elements are \\(H'_{11}=0.060\\,\\mathrm{eV}\\) and \\(H'_{21}=0.030\\,\\mathrm{eV}\\). Find the first-order energy and state corrections.",
      answer: "The strategy is to use the diagonal matrix element for energy and the off-diagonal element divided by the energy gap for state mixing. Equation [5] gives \\[E_1^{(1)}=H'_{11}=0.060\\,\\mathrm{eV}.\\] Equation [6] gives \\[c_{21}^{(1)}=\\frac{0.030}{1.0-4.0}=-0.010.\\] Thus, after setting \\(\\eta=1\\), \\[E_1\\approx1.060\\,\\mathrm{eV},\\qquad |1\\rangle\\approx|1^{(0)}\\rangle-0.010|2^{(0)}\\rangle.\\] The mixing amplitude is only one percent, consistent with the perturbative assumption. **Final result:** \\(E_1\\approx1.060\\,\\mathrm{eV}\\) and the leading admixture is \\(-0.010|2^{(0)}\\rangle\\).",
    },
    {
      title: "Recognising a failed expansion",
      question: "Two unperturbed states have exactly the same energy and a nonzero perturbing matrix element between them. May equation [6] be used?",
      answer: "No. Its denominator would be \\(E_n^{(0)}-E_m^{(0)}=0\\), so the supposed small coefficient is undefined. The problem is not a divergent physical state; it is the wrong basis and method. **Final result:** diagonalise \\(\\hat H'\\) inside the degenerate subspace before applying first-order formulas.",
    },
  ]}
/>
`;
