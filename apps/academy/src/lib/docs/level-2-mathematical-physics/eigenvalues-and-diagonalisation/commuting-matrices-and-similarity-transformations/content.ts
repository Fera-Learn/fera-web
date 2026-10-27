export const content = String.raw`## Principle

Apply two transformations in succession. Usually changing their order changes the result; when both orders always agree, the matrices **commute**. This agreement can reveal shared eigenvector directions, but only under the right spectral conditions.

A different idea, **similarity**, describes one transformation written in two coordinate systems. Similarity preserves information that does not depend on the chosen basis.

Objective: decide when simultaneous diagonalisation applies and prove the standard similarity invariants.

Prerequisite: familiarity with eigenvectors, orthonormal bases, and invertible matrices.

## Notation

<Notation
  items={[
    { symbol: "A,B", meaning: "square matrices over the stated scalar field" },
    { symbol: "n", meaning: "positive integer matrix dimension" },
    { symbol: "[A,B]", meaning: "commutator \\(AB-BA\\)" },
    { symbol: "\\lambda,\\mu", meaning: "eigenvalues of \\(A\\) and \\(B\\)" },
    { symbol: "\\mathbf v", meaning: "nonzero vector" },
    { symbol: "E_{\\lambda}(A)", meaning: "eigenspace of \\(A\\) for eigenvalue \\(\\lambda\\)" },
    { symbol: "A^{\\dagger}", meaning: "Hermitian conjugate of \\(A\\)" },
    { symbol: "U", meaning: "unitary change-of-basis matrix" },
    { symbol: "D_A,D_B", meaning: "diagonal matrices containing eigenvalues of \\(A\\) and \\(B\\) in a common basis" },
    { symbol: "A',S", meaning: "matrix similar to \\(A\\) and the invertible similarity matrix" },
    { symbol: "I_n", meaning: "the \\(n\\)-dimensional identity matrix" },
    { symbol: "t", meaning: "indeterminate in a characteristic polynomial" },
    { symbol: "p_A(t)", meaning: "characteristic polynomial \\(\\det(tI_n-A)\\)" },
    { symbol: "\\operatorname{tr},\\det,\\operatorname{rank}", meaning: "trace, determinant, and rank" },
    { symbol: "\\mathbf e_1,\\mathbf e_2,\\mathbf e_3", meaning: "standard coordinate vectors in three dimensions" },
    { symbol: "\\mathbf u_+,\\mathbf u_-", meaning: "symmetric and antisymmetric combinations of the first two coordinate vectors" },
  ]}
/>

## The Core Method

Subtract the two possible orders to measure their disagreement. This difference is the commutator, and the matrices commute exactly when it vanishes:

\\[
[A,B]=AB-BA=0.
\tag*{[1]}
\\]

If \\(A\mathbf v=\lambda\mathbf v\\) and equation \\([1]\\) holds, then

\\[
A(B\mathbf v)=AB\mathbf v=BA\mathbf v
=B(\lambda\mathbf v)=\lambda(B\mathbf v).
\tag*{[2]}
\\]

Thus \\(B\mathbf v\\) is either zero or remains in \\(E_{\lambda}(A)\\). Commutation preserves each eigenspace; inside a degenerate eigenspace, \\(B\\) can still mix vectors. This is why the claim "commuting if and only if the matrices share the same set of eigenvectors" is false without extra assumptions.

For finite-dimensional complex matrices, the correct spectral statement is: if \\(A\\) and \\(B\\) are normal, meaning \\(A^{\dagger}A=AA^{\dagger}\\) and \\(B^{\dagger}B=BB^{\dagger}\\), then they commute if and only if one unitary matrix diagonalises both:

\\[
[A,B]=0
\quad\Longleftrightarrow\quad
U^{\dagger}AU=D_A,
\qquad
U^{\dagger}BU=D_B,
\qquad
D_AD_B=D_BD_A.
\tag*{[3]}
\\]

The analogous real statement applies to commuting real symmetric matrices with an orthogonal matrix. Normality over \\(\mathbb C\\), or real symmetry over \\(\mathbb R\\), is essential to the guarantee.

Similarity is a separate idea. Two matrices represent the same linear operator in different bases when an invertible matrix satisfies

\\[
A'=S^{-1}AS.
\tag*{[4]}
\\]

The characteristic polynomial is unchanged. Use determinant notation explicitly and insert \\(SS^{-1}=I_n\\):

\\[
\begin{aligned}
p_{A'}(t)
&=\det(tI_n-S^{-1}AS)\\
&=\det(S^{-1}(tI_n-A)S)\\
&=\det(S^{-1})\det(tI_n-A)\det(S)\\
&=\det(tI_n-A)=p_A(t).
\end{aligned}
\tag*{[5]}
\\]

Cyclicity gives trace invariance, while multiplicativity gives determinant invariance:

\\[
\operatorname{tr}(A')
=\operatorname{tr}(S^{-1}AS)
=\operatorname{tr}(ASS^{-1})
=\operatorname{tr}A,
\qquad
\det(A')=\det A.
\tag*{[6]}
\\]

Multiplication by invertible matrices does not change the dimension of the image, so

\\[
\operatorname{rank}(A')=\operatorname{rank}(S^{-1}AS)=\operatorname{rank}(A).
\tag*{[7]}
\\]

Consequently similarity preserves eigenvalues with algebraic multiplicities, characteristic polynomial, trace, determinant, and rank. Similar matrices need not have the same entries or the same coordinate eigenvectors.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Resolving a degenerate eigenspace",
      question: "Let \\(A=\\operatorname{diag}(1,1,2)\\) and \\(B=\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&3\\end{pmatrix}\\). Verify commutation and construct a common orthonormal eigenbasis.",
      answer: "The first two diagonal entries of \\(A\\) are equal, so multiplying by \\(A\\) on either side only scales the upper-left two-by-two block of \\(B\\) by one; the third row and column are scaled by two on both sides. Directly, \\[AB=BA=\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&6\\end{pmatrix}.\\] The eigenspace \\(E_1(A)=\\operatorname{span}\\{\\mathbf e_1,\\mathbf e_2\\}\\) is degenerate, and \\(B\\) exchanges \\(\\mathbf e_1\\) and \\(\\mathbf e_2\\), so those two coordinate vectors are not individually eigenvectors of \\(B\\). Diagonalise \\(B\\) inside that plane: \\[\\mathbf u_+=\\frac{\\mathbf e_1+\\mathbf e_2}{\\sqrt2},\\qquad B\\mathbf u_+=\\mathbf u_+,\\qquad \\mathbf u_-=\\frac{\\mathbf e_1-\\mathbf e_2}{\\sqrt2},\\qquad B\\mathbf u_-=-\\mathbf u_-.\\] Both have \\(A\\)-eigenvalue one, while \\(\\mathbf e_3\\) has \\(A\\)-eigenvalue two and \\(B\\)-eigenvalue three. Final result: \\(\\{\\mathbf u_+,\\mathbf u_-,\\mathbf e_3\\}\\) is a common orthonormal eigenbasis, although the original basis was not a common eigenbasis.",
    },
    {
      title: "Similarity invariants",
      question: "For \\(A=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}\\) and \\(S=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}\\), calculate \\(A'=S^{-1}AS\\) and verify the characteristic polynomial, trace, determinant, and rank.",
      answer: "The inverse is \\(S^{-1}=\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}\\). Multiply in two explicit stages: \\[AS=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}=\\begin{pmatrix}1&2\\\\0&2\\end{pmatrix},\\] then \\[A'=S^{-1}(AS)=\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}\\begin{pmatrix}1&2\\\\0&2\\end{pmatrix}=\\begin{pmatrix}1&0\\\\0&2\\end{pmatrix}.\\] For both matrices, \\(p(t)=(t-1)(t-2)=t^2-3t+2\\). Also \\(\\operatorname{tr}A=1+2=3=\\operatorname{tr}A'\\), \\(\\det A=(1)(2)-(0)(1)=2=\\det A'\\), and both have two nonzero pivots, hence rank two. Final result: \\(A'=\\operatorname{diag}(1,2)\\), and all five listed similarity invariants agree.",
    },
  ]}
/>
`;
