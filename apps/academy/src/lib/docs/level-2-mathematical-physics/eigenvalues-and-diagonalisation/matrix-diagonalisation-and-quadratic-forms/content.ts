export const content = String.raw`## Principle

A matrix can mix coordinate directions, so changing one input component may affect several outputs. Eigenvector coordinates remove that coupling: along each eigenvector, the matrix only scales one coordinate. Writing the transformation in those directions is **diagonalisation**.

A matrix is diagonalizable exactly when it has enough linearly independent eigenvectors. Orthogonal or unitary diagonalisation is a stronger statement with additional spectral requirements.

Objective: construct a diagonalisation and use it to simplify and classify a quadratic form.

Prerequisite: familiarity with eigenvectors, basis changes, and inner products.

## Notation

<Notation
  items={[
    { symbol: "\\mathbb R,\\mathbb C", meaning: "real and complex scalar fields" },
    { symbol: "A", meaning: "an \\(n\\)-by-\\(n\\) matrix" },
    { symbol: "n", meaning: "positive integer matrix dimension" },
    { symbol: "\\lambda_j", meaning: "eigenvalue paired with the \\(j\\)th eigenvector" },
    { symbol: "\\mathbf v_j", meaning: "the \\(j\\)th eigenvector" },
    { symbol: "S", meaning: "invertible matrix whose columns are eigenvectors" },
    { symbol: "D", meaning: "diagonal matrix of eigenvalues in matching column order" },
    { symbol: "S^{-1},S^{\\dagger},A^{\\dagger}", meaning: "inverse of \\(S\\) and Hermitian conjugates of \\(S\\) and \\(A\\)" },
    { symbol: "I_n", meaning: "the \\(n\\)-dimensional identity matrix" },
    { symbol: "\\mathbf x,\\mathbf y", meaning: "coordinate columns related by \\(\\mathbf x=S\\mathbf y\\)" },
    { symbol: "q_A(\\mathbf x)", meaning: "quadratic form \\(\\mathbf x^{\\dagger}A\\mathbf x\\)" },
    { symbol: "\\operatorname{tr}A,\\det A", meaning: "trace and determinant of \\(A\\)" },
    { symbol: "x_1,x_2,x_3,y_1,y_2,y_3", meaning: "components of the example coordinate vectors" },
    { symbol: "x,y,j", meaning: "scalar components in a two-dimensional eigenvector and an eigenpair index" },
  ]}
/>

## The Core Method

Begin with one scaling equation for each eigenvector. Place the eigenvectors in columns and match their order with the eigenvalues on the diagonal; the separate equations then combine into one matrix equation:

\\[
S=(\mathbf v_1\ \mathbf v_2\ \cdots\ \mathbf v_n),
\qquad
D=\operatorname{diag}(\lambda_1,\lambda_2,\ldots,\lambda_n),
\qquad
AS=SD.
\tag*{[1]}
\\]

The columns form a basis exactly when \\(S\\) is invertible. Multiplying equation \\([1]\\) on the left by \\(S^{-1}\\) gives

\\[
D=S^{-1}AS,
\qquad
A=SDS^{-1}.
\tag*{[2]}
\\]

Distinct eigenvalues guarantee independent eigenvectors, but distinctness is sufficient rather than necessary. For repeated eigenvalues, compare each eigenspace dimension with the root's algebraic multiplicity.

Over \\(\mathbb C\\), the spectral theorem states that unitary diagonalisation is equivalent to normality:

\\[
A^{\dagger}A=AA^{\dagger}
\quad\Longleftrightarrow\quad
D=S^{\dagger}AS,
\qquad
S^{\dagger}S=I_n.
\tag*{[3]}
\\]

Hermitian, anti-Hermitian, and unitary matrices are normal. A real symmetric matrix can be diagonalised by a real orthogonal matrix. A real normal matrix need not be diagonalisable over \\(\mathbb R\\); for example, a genuine plane rotation requires complex eigenvectors. For a merely diagonalizable non-normal matrix, equation \\([2]\\) applies but replacing \\(S^{-1}\\) by \\(S^{\dagger}\\) is generally wrong.

Similarity to \\(D\\) makes trace and determinant transparent:

\\[
\operatorname{tr}A=\operatorname{tr}D=\sum_{j=1}^{n}\lambda_j,
\qquad
\det A=\det D=\prod_{j=1}^{n}\lambda_j.
\tag*{[4]}
\\]

If \\(A\\) is Hermitian, choose \\(S\\) unitary and write \\(\mathbf x=S\mathbf y\\). Then every step in the quadratic-form transformation is

\\[
\begin{aligned}
q_A(\mathbf x)
&=\mathbf x^{\dagger}A\mathbf x\\
&=(S\mathbf y)^{\dagger}A(S\mathbf y)\\
&=\mathbf y^{\dagger}S^{\dagger}AS\mathbf y\\
&=\mathbf y^{\dagger}D\mathbf y\\
&=\sum_{j=1}^{n}\lambda_j|y_j|^2.
\end{aligned}
\tag*{[5]}
\\]

Because a unitary change of coordinates maps nonzero vectors to nonzero vectors, equation \\([5]\\) gives the positive-definiteness test:

\\[
A\text{ Hermitian positive definite}
\quad\Longleftrightarrow\quad
\lambda_j>0\text{ for every }j.
\tag*{[6]}
\\]

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Diagonalising the source quadratic form",
      question: "Orthogonally diagonalise \\(A=\\begin{pmatrix}1&0&3\\\\0&-2&0\\\\3&0&1\\end{pmatrix}\\) and simplify \\(q_A(\\mathbf x)=\\mathbf x^{\\mathsf T}A\\mathbf x\\).",
      answer: "The characteristic determinant separates into the middle coordinate and the first-third block: \\[\\det(A-\\lambda I_3)=(-2-\\lambda)[(1-\\lambda)^2-9]=(4-\\lambda)(-2-\\lambda)^2.\\] For \\(\\lambda=4\\), the equations give \\(x_2=0\\) and \\(x_1=x_3\\), so choose \\(\\mathbf v_1=(1,0,1)^{\\mathsf T}/\\sqrt2\\). For \\(\\lambda=-2\\), the equations give \\(x_1=-x_3\\) with \\(x_2\\) free, so choose \\(\\mathbf v_2=(0,1,0)^{\\mathsf T}\\) and \\(\\mathbf v_3=(1,0,-1)^{\\mathsf T}/\\sqrt2\\). These vectors are orthonormal. Therefore \\[S=\\begin{pmatrix}1/\\sqrt2&0&1/\\sqrt2\\\\0&1&0\\\\1/\\sqrt2&0&-1/\\sqrt2\\end{pmatrix},\\qquad S^{\\mathsf T}AS=\\operatorname{diag}(4,-2,-2).\\] With \\(\\mathbf x=S\\mathbf y\\), multiply by the diagonal matrix: \\[q_A(\\mathbf x)=\\mathbf y^{\\mathsf T}\\operatorname{diag}(4,-2,-2)\\mathbf y=4y_1^2-2y_2^2-2y_3^2.\\] Final result: \\(D=\\operatorname{diag}(4,-2,-2)\\) and \\(q_A=4y_1^2-2y_2^2-2y_3^2\\), so the form is indefinite.",
    },
    {
      title: "Diagonalizable but not unitarily diagonalizable",
      question: "Diagonalise \\(A=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}\\) and explain why the eigenvector matrix is not unitary.",
      answer: "The characteristic equation is \\(\\det(A-\\lambda I_2)=(1-\\lambda)(2-\\lambda)=0\\). For \\(\\lambda=1\\), \\((A-I_2)\\mathbf v=0\\) gives \\(y=0\\), so choose \\(\\mathbf v_1=(1,0)^{\\mathsf T}\\). For \\(\\lambda=2\\), \\((A-2I_2)\\mathbf v=0\\) gives \\(-x+y=0\\), so choose \\(\\mathbf v_2=(1,1)^{\\mathsf T}\\). Hence \\[S=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix},\\qquad S^{-1}=\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}.\\] Direct multiplication gives \\[S^{-1}AS=\\begin{pmatrix}1&0\\\\0&2\\end{pmatrix}.\\] However, the columns are not orthogonal because \\(\\mathbf v_1^{\\dagger}\\mathbf v_2=1\\), and \\(S^{\\dagger}S=\\begin{pmatrix}1&1\\\\1&2\\end{pmatrix}\\ne I_2\\). Final result: \\(A=S\\operatorname{diag}(1,2)S^{-1}\\), but no unitary diagonalisation exists because \\(A\\) is not normal.",
    },
  ]}
/>
`;
