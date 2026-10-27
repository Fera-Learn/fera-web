export const content = String.raw`## Principle

When two different states begin with the same energy, a small change can select new mixtures rather than shift the old states independently.

When two orthonormal states share one unperturbed energy, their individual diagonal expectation values are generally not the physical first-order shifts. The perturbation must first be diagonalised in the two-dimensional degenerate subspace; its eigenvalues are the shifts and its eigenvectors are the combinations that evolve into perturbed stationary states.

## Notation

<Notation
  items={[
    { symbol: "|a\\rangle,|b\\rangle", meaning: "orthonormal basis states spanning a twofold degenerate subspace" },
    { symbol: "E^{(0)},E^{(1)}", meaning: "common unperturbed energy and first-order energy shift", unit: "J" },
    { symbol: "\\hat H_0,\\hat H'", meaning: "unperturbed Hamiltonian and perturbing operator", unit: "J" },
    { symbol: "\\alpha,\\beta", meaning: "complex probability amplitudes in the degenerate basis" },
    { symbol: "W_{ij}", meaning: "matrix element \\langle i|\\hat H'|j\\rangle", unit: "J" },
    { symbol: "W,I", meaning: "restricted perturbation matrix and two-dimensional identity matrix" },
    { symbol: "\\kappa,w", meaning: "real off-diagonal coupling and common diagonal shift", unit: "J" },
  ]}
/>

## The Core Method

Let \\(\hat H_0|a\rangle=E^{(0)}|a\rangle\\) and \\(\hat H_0|b\rangle=E^{(0)}|b\rangle\\), with \\(\langle a|b\rangle=0\\). The zeroth-order state selected by the perturbation is an unknown normalised combination

\\[
|\psi^{(0)}\rangle=\alpha|a\rangle+\beta|b\rangle,
\qquad
|\alpha|^2+|\beta|^2=1.
\tag*{[1]}
\\]

Project the first-order equation onto each basis bra. Defining \\(W_{ij}=\langle i|\hat H'|j\rangle\\) gives

\\[
\begin{aligned}
W_{aa}\alpha+W_{ab}\beta&=E^{(1)}\alpha,\\
W_{ba}\alpha+W_{bb}\beta&=E^{(1)}\beta.
\end{aligned}
\tag*{[2]}
\\]

Thus the required shifts and combinations solve the matrix eigenvalue problem

\\[
\begin{pmatrix}
W_{aa}&W_{ab}\\
W_{ba}&W_{bb}
\end{pmatrix}
\begin{pmatrix}\alpha\\\beta\end{pmatrix}
=E^{(1)}
\begin{pmatrix}\alpha\\\beta\end{pmatrix}.
\tag*{[3]}
\\]

Hermiticity gives \\(W_{ba}=W_{ab}^{*}\\). Nonzero solutions require the determinant of \\(W-E^{(1)}I\\) to vanish:

\\[
\left(W_{aa}-E^{(1)}\right)\left(W_{bb}-E^{(1)}\right)-|W_{ab}|^2=0.
\tag*{[4]}
\\]

Solving this quadratic yields two real shifts,

\\[
E_{\pm}^{(1)}=\frac{W_{aa}+W_{bb}}{2}
\pm\frac{1}{2}\sqrt{(W_{aa}-W_{bb})^2+4|W_{ab}|^2}.
\tag*{[5]}
\\]

For the common symmetric case \\(W_{aa}=W_{bb}=w\\) and \\(W_{ab}=W_{ba}=\kappa\\), where \\(\kappa\\) is real,

\\[
E_{\pm}^{(1)}=w\pm\kappa,
\qquad
|\psi_{\pm}^{(0)}\rangle=\frac{|a\rangle\pm|b\rangle}{\sqrt2}.
\tag*{[6]}
\\]

The perturbed energies are \\(E_{\pm}\approx E^{(0)}+E_{\pm}^{(1)}\\). Using only \\(W_{aa}\\) and \\(W_{bb}\\) would miss the splitting caused by the off-diagonal coupling.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Diagonalising a coupled doublet",
      question: "Within a degenerate subspace the perturbation matrix is \\(W=\\begin{pmatrix}0.20&0.05\\\\0.05&0.20\\end{pmatrix}\\,\\mathrm{eV}\\). Find the shifts and normalised good states.",
      answer: "The matrix has the form in equation [6], with \\(w=0.20\\,\\mathrm{eV}\\) and \\(\\kappa=0.05\\,\\mathrm{eV}\\). Therefore \\[E_+^{(1)}=0.25\\,\\mathrm{eV},\\qquad E_-^{(1)}=0.15\\,\\mathrm{eV}.\\] Substituting either eigenvalue into [3] gives \\(\\alpha=\\beta\\) for the upper shift and \\(\\alpha=-\\beta\\) for the lower shift. Normalisation gives the factor \\(1/\\sqrt2\\). **Final result:** the level splits by \\(0.10\\,\\mathrm{eV}\\), with states \\((|a\\rangle+|b\\rangle)/\\sqrt2\\) and \\((|a\\rangle-|b\\rangle)/\\sqrt2\\).",
    },
    {
      title: "A perturbation that does not lift degeneracy",
      question: "What happens if the perturbation matrix in the degenerate subspace is \\(W=wI\\)?",
      answer: "Both eigenvalues equal \\(w\\), while every normalised linear combination is an eigenvector. The perturbation shifts the whole subspace equally and does not select a unique basis. **Final result:** the common energy becomes \\(E^{(0)}+w\\), but the twofold degeneracy remains at first order.",
    },
  ]}
/>
`;
