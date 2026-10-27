export const content = String.raw`## Principle

Some pairs of quantities can both have definite values in one prepared state, while other pairs cannot.

Compatible observables possess a complete basis of simultaneous eigenstates. Preparing one of those states gives deterministic values for both observables, whereas non-commuting observables generally require different eigenbases and cannot simultaneously have sharp values.

## Notation

<Notation
  items={[
    { symbol: "\\hat A,\\hat B", meaning: "Hermitian operators representing observables" },
    { symbol: "a,b", meaning: "eigenvalues and possible measurement outcomes of \\(\\hat A\\) and \\(\\hat B\\)" },
    { symbol: "|a\\rangle,|a,b\\rangle", meaning: "eigenstate of \\(\\hat A\\), and simultaneous eigenstate of both operators" },
    { symbol: "|g_j\\rangle,b_j,c_j", meaning: "jth eigenstate and eigenvalue of \\(\\hat B\\), and its expansion amplitude" },
    { symbol: "j,P", meaning: "discrete state index and measurement probability" },
    { symbol: "[\\hat A,\\hat B]", meaning: "commutator \\(\\hat A\\hat B-\\hat B\\hat A\\)" },
    { symbol: "\\sigma_A,\\sigma_B", meaning: "standard deviations of measurements of A and B", unit: "unit of A, unit of B" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "x,\\hat p", meaning: "position and momentum operator", unit: "m, kg m s^{-1}" },
    { symbol: "T", meaning: "matrix transpose superscript" },
  ]}
/>

## The Core Method

Suppose the two Hermitian operators commute and \\(|a\rangle\\) is an eigenstate of \\(\hat A\\).

\\[
[\hat A,\hat B]=0,
\qquad
\hat A|a\rangle=a|a\rangle.
\tag*{[1]}
\\]

Act with the commutator on \\(|a\rangle\\).

\\[
0=[\hat A,\hat B]|a\rangle
=\hat A\hat B|a\rangle-\hat B\hat A|a\rangle
=\hat A(\hat B|a\rangle)-a(\hat B|a\rangle).
\tag*{[2]}
\\]

Therefore

\\[
\hat A(\hat B|a\rangle)=a(\hat B|a\rangle).
\tag*{[3]}
\\]

Equation [3] says that \\(\hat B|a\rangle\\) remains inside the eigenspace of \\(\hat A\\) with eigenvalue \\(a\\). If that eigenspace is one-dimensional, \\(\hat B|a\rangle\\) must be proportional to \\(|a\rangle\\).

\\[
\hat B|a\rangle=b|a\rangle
\qquad\text{for a non-degenerate eigenvalue }a.
\tag*{[4]}
\\]

If \\(a\\) is degenerate, equation [3] does not imply that every initially chosen basis vector is already an eigenstate of \\(\hat B\\). Instead, restrict \\(\hat B\\) to the degenerate eigenspace and diagonalise it there. The resulting basis vectors satisfy

\\[
\hat A|a,b\rangle=a|a,b\rangle,
\qquad
\hat B|a,b\rangle=b|a,b\rangle.
\tag*{[5]}
\\]

Thus commuting Hermitian operators have a complete simultaneous eigenbasis, including after resolving degeneracies. A state \\(|a,b\rangle\\) gives sharp outcomes for both measurements.

\\[
P(A=a)=1,
\qquad
P(B=b)=1,
\qquad
\sigma_A=\sigma_B=0.
\tag*{[6]}
\\]

Conversely, if a complete basis \\(\{|a,b\rangle\}\\) consists of simultaneous eigenstates, then the commutator annihilates every basis vector.

\\[
[\hat A,\hat B]|a,b\rangle
=(ab-ba)|a,b\rangle=0.
\tag*{[7]}
\\]

Linearity and completeness then imply \\([\hat A,\hat B]=0\\) on the relevant domain.

When the operators do not commute, an eigenstate \\(|a\rangle\\) of \\(\hat A\\) generally expands over multiple orthonormal eigenstates of \\(\hat B\\).

\\[
|a\rangle=\sum_j c_j|g_j\rangle,
\qquad
\hat B|g_j\rangle=b_j|g_j\rangle,
\qquad
c_j=\langle g_j|a\rangle.
\tag*{[8]}
\\]

A measurement of \\(B\\) then returns \\(b_j\\) with probability \\(|c_j|^2\\), rather than one predetermined value.

\\[
P(B=b_j)=|c_j|^2,
\qquad
\sum_j|c_j|^2=1.
\tag*{[9]}
\\]

The Robertson uncertainty relation makes the connection quantitative.

\\[
\sigma_A\sigma_B
\ge\frac{1}{2}\left|\langle[\hat A,\hat B]\rangle\right|.
\tag*{[10]}
\\]

For position and momentum, \\([x,\hat p]=i\hbar\\), so

\\[
\sigma_x\sigma_p\ge\frac{\hbar}{2}.
\tag*{[11]}
\\]

A zero expectation value of a commutator in one special state does not by itself prove compatibility. The operator commutator must vanish on its domain, or a complete common eigenbasis must be established.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Resolving a degenerate common eigenspace",
      question: "Consider the dimensionless Hermitian matrices \\(\\hat A=\\operatorname{diag}(1,1,2)\\) and \\(\\hat B=\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&3\\end{pmatrix}\\). Show that they commute and find simultaneous eigenvectors in the degenerate \\(a=1\\) subspace.",
      answer: "Multiplication gives \\[\\hat A\\hat B=\\hat B\\hat A=\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&6\\end{pmatrix},\\] so \\([\\hat A,\\hat B]=0\\). The \\(a=1\\) eigenspace is spanned by \\((1,0,0)^T\\) and \\((0,1,0)^T\\), but neither vector is an eigenvector of \\(\\hat B\\). Diagonalising the upper \\(2\\times2\\) block gives \\[|1,+1\\rangle=\\frac{1}{\\sqrt2}\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix},\\qquad |1,-1\\rangle=\\frac{1}{\\sqrt2}\\begin{pmatrix}1\\\\-1\\\\0\\end{pmatrix}.\\] Direct multiplication gives \\(\\hat A|1,\\pm1\\rangle=|1,\\pm1\\rangle\\) and \\(\\hat B|1,\\pm1\\rangle=\\pm|1,\\pm1\\rangle\\). **Final result:** the compatible labels in the degenerate subspace are \\((a,b)=(1,+1)\\) and \\((1,-1)\\).",
    },
    {
      title: "Position and momentum are incompatible",
      question: "Can a normalisable state have both an exact position and an exact momentum? Justify the answer using operators and uncertainties.",
      answer: "Their operator commutator is \\([x,\\hat p]=i\\hbar\\ne0\\), so position and momentum do not possess a complete common eigenbasis. Equation [11] requires \\[\\sigma_x\\sigma_p\\ge\\frac{\\hbar}{2}.\\] Exact position would mean \\(\\sigma_x=0\\), which cannot coexist with finite \\(\\sigma_p\\); exact momentum similarly prevents finite position uncertainty. **Final result:** no normalisable state can assign simultaneous deterministic values to position and momentum.",
    },
  ]}
/>
`;
