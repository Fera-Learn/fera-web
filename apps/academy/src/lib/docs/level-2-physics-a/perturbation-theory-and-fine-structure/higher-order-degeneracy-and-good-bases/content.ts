export const content = String.raw`## Principle

Within a group of equal-energy states, the most useful coordinates are the mixtures left unmixed by the new interaction.

A multiply degenerate level is treated by diagonalising the perturbation restricted to its degenerate subspace. A good basis is one that already diagonalises this restricted perturbation, often because its states are distinguished by a symmetry operator that commutes with both the unperturbed Hamiltonian and the perturbation.

## Notation

<Notation
  items={[
    { symbol: "N", meaning: "dimension of the degenerate subspace" },
    { symbol: "|i\\rangle,c_i", meaning: "orthonormal degenerate basis state and its complex amplitude" },
    { symbol: "W_{ij}", meaning: "restricted perturbation matrix element \\langle i|\\hat H'|j\\rangle", unit: "J" },
    { symbol: "\\mathbf c,E^{(1)}", meaning: "coefficient vector and first-order energy shift", unit: "1, J" },
    { symbol: "\\hat A,\\hat H_0,\\hat H'", meaning: "Hermitian symmetry operator, unperturbed Hamiltonian, and perturbation" },
    { symbol: "a_i", meaning: "real symmetry eigenvalue on state i" },
    { symbol: "i,j,I_N", meaning: "basis-state indices and the N-dimensional identity matrix" },
    { symbol: "w,\\kappa", meaning: "real diagonal and coupling energies in the example", unit: "J" },
  ]}
/>

## The Core Method

Write a general state in an \\(N\\)-fold degenerate eigenspace as

\\[
|\psi^{(0)}\rangle=\sum_{j=1}^{N}c_j|j\rangle,
\qquad
\sum_{j=1}^{N}|c_j|^2=1.
\tag*{[1]}
\\]

Projection of the first-order equation onto every basis state produces

\\[
\sum_{j=1}^{N}W_{ij}c_j=E^{(1)}c_i,
\qquad
W_{ij}=\langle i|\hat H'|j\rangle.
\tag*{[2]}
\\]

In matrix form, solve

\\[
W\mathbf c=E^{(1)}\mathbf c,
\qquad
\det\left(W-E^{(1)}I_N\right)=0.
\tag*{[3]}
\\]

Because \\(\hat H'\\) is Hermitian, \\(W\\) is Hermitian: all shifts are real and its eigenvectors can be chosen orthonormal. Some eigenvalues may remain equal, so a perturbation need not remove all degeneracy.

A symmetry can identify a good basis before any large determinant is evaluated. Let \\(\hat A\\) be a Hermitian symmetry operator. Its eigenvalues \\(a_i\\) are real, so the ket eigenvalue equation also gives the corresponding bra equation:

\\[
[\hat A,\hat H_0]=0,
\qquad
[\hat A,\hat H']=0,
\qquad
\hat A|i\rangle=a_i|i\rangle,
\quad
\langle i|\hat A=a_i\langle i|.
\tag*{[4]}
\\]

For two states with distinct symmetry eigenvalues, take the matrix element of the second commutator:

\\[
\begin{aligned}
0&=\langle i|[\hat A,\hat H']|j\rangle\\
&=a_i\langle i|\hat H'|j\rangle-a_j\langle i|\hat H'|j\rangle\\
&=(a_i-a_j)W_{ij}.
\end{aligned}
\tag*{[5]}
\\]

If \\(a_i\ne a_j\\), equation [5] forces \\(W_{ij}=0\\). The symmetry-labelled states therefore do not mix. If several states share the same \\(a_i\\), symmetry alone is insufficient and the remaining block must still be diagonalised.

As a compact threefold example, consider

\\[
W=
\begin{pmatrix}
w&\kappa&0\\
\kappa&w&0\\
0&0&w
\end{pmatrix}.
\tag*{[6]}
\\]

The third basis state is already decoupled. Diagonalising the first block gives

\\[
E^{(1)}=w+\kappa,\ w-\kappa,\ w,
\qquad
\mathbf c=\frac{1}{\sqrt2}(1,1,0),\ \frac{1}{\sqrt2}(1,-1,0),\ (0,0,1).
\tag*{[7]}
\\]

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Splitting a threefold level",
      question: "For equation [6], let \\(w=0.30\\,\\mathrm{eV}\\) and \\(\\kappa=0.08\\,\\mathrm{eV}\\). Find all first-order shifts and good states.",
      answer: "The third row gives the eigenvalue \\(w=0.30\\,\\mathrm{eV}\\) with state \\((0,0,1)\\). The remaining \\(2\\times2\\) block has symmetric and antisymmetric eigenvectors. Equation [7] gives \\[E^{(1)}=0.38\\,\\mathrm{eV},\\quad0.22\\,\\mathrm{eV},\\quad0.30\\,\\mathrm{eV}.\\] **Final result:** the corresponding states are \\((|1\\rangle+|2\\rangle)/\\sqrt2\\), \\((|1\\rangle-|2\\rangle)/\\sqrt2\\), and \\(|3\\rangle\\); all three first-order energies are distinct.",
    },
    {
      title: "Choosing basis functions by symmetry",
      question: "Two degenerate Cartesian-like states are mixed by a rotationally symmetric perturbation. What property should define a better basis?",
      answer: "Choose states with definite eigenvalues of a rotation generator that commutes with both Hamiltonians. Equation [5] then makes matrix elements between distinct symmetry eigenvalues vanish. **Final result:** symmetry-adapted combinations, rather than arbitrary Cartesian states, form the good basis; any block left degenerate must still be diagonalised.",
    },
  ]}
/>
`;
