export const content = String.raw`## Principle

Flipping a real matrix across its main diagonal lets us compare entries that exchange row and column. For complex matrices, the corresponding comparison also conjugates every entry. Matrices that remain unchanged, change sign, or preserve lengths under these operations have useful special structure.

The scalar field matters: real symmetry uses transpose, while complex Hermitian structure uses conjugate transpose.

Objective: classify special matrices, derive the unique Hermitian decomposition, and test a quadratic form for positivity.

Prerequisite: familiarity with complex conjugation, transpose, and matrix multiplication.

## Notation

<Notation
  items={[
    { symbol: "\\mathbb R,\\mathbb C", meaning: "real and complex scalar fields" },
    { symbol: "M,A,H,H',K,K',G,X", meaning: "square matrices, with \\(H\\), \\(H'\\), and \\(G\\) Hermitian and \\(K\\) and \\(K'\\) anti-Hermitian where stated" },
    { symbol: "M^{\\mathsf T}", meaning: "transpose of \\(M\\)" },
    { symbol: "M^{\\dagger}", meaning: "Hermitian conjugate, or conjugate transpose, of \\(M\\)" },
    { symbol: "M^*", meaning: "entrywise complex conjugate of \\(M\\)" },
    { symbol: "\\mathbf x", meaning: "nonzero complex column vector unless stated otherwise" },
    { symbol: "\\mathbf x^{\\dagger}A\\mathbf x", meaning: "quadratic form associated with \\(A\\)" },
    { symbol: "I,I_2", meaning: "identity matrix of the required size and the two-dimensional identity matrix" },
    { symbol: "O,U", meaning: "orthogonal real matrix and unitary complex matrix" },
    { symbol: "\\lVert\\mathbf x\\rVert", meaning: "Euclidean norm of \\(\\mathbf x\\)" },
    { symbol: "i", meaning: "imaginary unit satisfying \\(i^2=-1\\)" },
    { symbol: "\\sigma_1,\\sigma_2,\\sigma_3", meaning: "Pauli matrices" },
    { symbol: "a,b,c,d", meaning: "real coefficients or real vector components, as stated" },
    { symbol: "z_1,z_2,z_3,z_4", meaning: "complex entries of the general two-by-two matrix \\(X\\)" },
    { symbol: "r_0,r_1,r_2,r_3", meaning: "real coefficients in a proposed Pauli-basis relation" },
    { symbol: "n,r,s", meaning: "positive matrix dimension and summation indices" },
    { symbol: "q", meaning: "real-valued quadratic form in the worked example" },
  ]}
/>

## The Core Method

Start by applying the relevant reflection-like operation and comparing the result with the original matrix. The four basic comparisons are

\\[
\begin{array}{c|c}
\text{class}&\text{defining identity}\\ \hline
\text{symmetric}&A^{\mathsf T}=A\\
\text{antisymmetric}&A^{\mathsf T}=-A\\
\text{Hermitian}&A^{\dagger}=A\\
\text{anti-Hermitian}&A^{\dagger}=-A
\end{array}
\tag*{[1]}
\\]

Every complex square matrix has a unique Hermitian plus anti-Hermitian decomposition. Define the two parts and verify their adjoints explicitly:

\\[
\begin{aligned}
H&=\frac12(M+M^{\dagger}),
&H^{\dagger}&=\frac12(M^{\dagger}+M)=H,\\
K&=\frac12(M-M^{\dagger}),
&K^{\dagger}&=\frac12(M^{\dagger}-M)=-K,\\
M&=H+K,\\
M=H'+K',\quad H'^{\dagger}=H',\quad K'^{\dagger}=-K'
&\Longrightarrow M^{\dagger}=H'-K',\\
H'&=\frac12(M+M^{\dagger})=H,\\
K'&=\frac12(M-M^{\dagger})=K.
\end{aligned}
\tag*{[2]}
\\]

Equivalently, write the anti-Hermitian part as \\(i\\) times a Hermitian matrix. This is often the useful physics convention:

\\[
G=\frac{M-M^{\dagger}}{2i},
\qquad G^{\dagger}=G,
\qquad M=H+iG.
\tag*{[3]}
\\]

A Hermitian matrix is positive definite precisely when its quadratic form is strictly positive on every nonzero vector:

\\[
\mathbf x^{\dagger}A\mathbf x
=\sum_{r=1}^{n}\sum_{s=1}^{n}x_r^*A_{rs}x_s>0
\qquad\text{for every }\mathbf x\ne\mathbf 0.
\tag*{[4]}
\\]

Orthogonal and unitary matrices satisfy

\\[
O^{\mathsf T}O=I,
\qquad
U^{\dagger}U=I.
\tag*{[5]}
\\]

Their columns are orthonormal, and they preserve norms because

\\[
\lVert U\mathbf x\rVert^2
=(U\mathbf x)^{\dagger}(U\mathbf x)
=\mathbf x^{\dagger}U^{\dagger}U\mathbf x
=\mathbf x^{\dagger}\mathbf x
=\lVert\mathbf x\rVert^2.
\tag*{[6]}
\\]

The Pauli matrices and identity are

\\[
\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix},
\quad
\sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix},
\quad
\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix},
\quad
I_2=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
\tag*{[7]}
\\]

The space of two-by-two Hermitian matrices is a vector space over \\(\mathbb R\\), not over \\(\mathbb C\\): multiplying a nonzero Hermitian matrix by \\(i\\) makes it anti-Hermitian. Its real Pauli-basis expansion is

\\[
\begin{pmatrix}a&c-id\\c+id&b\end{pmatrix}
=\frac{a+b}{2}I_2+c\sigma_1+d\sigma_2+\frac{a-b}{2}\sigma_3,
\qquad a,b,c,d\in\mathbb R.
\tag*{[8]}
\\]

<PhysicsExamples
  collapsible
  items={[
    {
      title: "A positive quadratic form",
      question: "Show directly that \\(A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}\\) is positive definite on real two-component vectors.",
      answer: "Let \\(\\mathbf x=(a,b)^{\\mathsf T}\\ne\\mathbf0\\) with real \\(a,b\\). Multiply before simplifying: \\[A\\mathbf x=\\begin{pmatrix}2a+b\\\\a+2b\\end{pmatrix}.\\] Therefore \\[q=\\mathbf x^{\\mathsf T}A\\mathbf x=a(2a+b)+b(a+2b)=2a^2+2ab+2b^2.\\] Complete the square without dropping a term: \\[2a^2+2ab+2b^2=(a+b)^2+a^2+b^2.\\] Every term is non-negative. Equality would require \\(a=0\\), \\(b=0\\), and \\(a+b=0\\), which is excluded by \\(\\mathbf x\\ne\\mathbf0\\). Final result: \\(q\\gt0\\) for every nonzero real \\(\\mathbf x\\), so \\(A\\) is positive definite.",
    },
    {
      title: "The real Pauli basis",
      question: "Prove that \\(I_2,\\sigma_1,\\sigma_2,\\sigma_3\\) form a basis for the two-by-two Hermitian matrices.",
      answer: "A general complex matrix has the form \\(X=\\begin{pmatrix}z_1&z_2\\\\z_3&z_4\\end{pmatrix}\\). The condition \\(X^{\\dagger}=X\\) forces \\(z_1=a\\) and \\(z_4=b\\) to be real and forces \\(z_3=z_2^*\\). Write \\(z_2=c-id\\) with real \\(c,d\\), so \\[X=\\begin{pmatrix}a&c-id\\\\c+id&b\\end{pmatrix}.\\] Expanding equation \\([8]\\) gives \\[\\frac{a+b}{2}I_2+c\\sigma_1+d\\sigma_2+\\frac{a-b}{2}\\sigma_3=\\begin{pmatrix}a&c-id\\\\c+id&b\\end{pmatrix}=X,\\] so the four matrices span. If \\(r_0I_2+r_1\\sigma_1+r_2\\sigma_2+r_3\\sigma_3=0\\) with real coefficients, comparison of the two diagonal entries gives \\(r_0+r_3=0\\) and \\(r_0-r_3=0\\), hence \\(r_0=r_3=0\\). Comparison of the upper-right entry gives \\(r_1-ir_2=0\\); its real and imaginary parts give \\(r_1=r_2=0\\). Thus the four matrices are real-linearly independent. Final result: \\(I_2,\\sigma_1,\\sigma_2,\\sigma_3\\) are a basis over \\(\\mathbb R\\) for the two-by-two Hermitian matrices.",
    },
  ]}
/>
`;
