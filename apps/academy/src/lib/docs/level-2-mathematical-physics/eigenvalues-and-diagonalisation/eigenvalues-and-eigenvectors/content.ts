export const content = String.raw`## Principle

Most vectors change both length and direction when a matrix acts on them. Some special nonzero directions are only stretched, compressed, or reversed. These unchanged directions are **eigenvectors**, and their scale factors are **eigenvalues**.

The available directions depend on the scalar field: a real rotation may have no real eigenvectors while still having complex ones.

Objective: calculate eigenvalues and eigenspaces and justify spectral restrictions for special matrices.

Prerequisite: familiarity with determinants and homogeneous linear systems.

## Notation

<Notation
  items={[
    { symbol: "\\mathbb F", meaning: "chosen scalar field \\(\\mathbb R\\) or \\(\\mathbb C\\)" },
    { symbol: "A", meaning: "an \\(n\\)-by-\\(n\\) matrix over \\(\\mathbb F\\)" },
    { symbol: "n", meaning: "positive integer matrix dimension" },
    { symbol: "\\lambda,\\lambda_j", meaning: "eigenvalue or the \\(j\\)th eigenvalue" },
    { symbol: "\\mathbf v,\\mathbf v_j", meaning: "nonzero eigenvector or the \\(j\\)th eigenvector" },
    { symbol: "I_n", meaning: "the \\(n\\)-dimensional identity matrix" },
    { symbol: "p_A", meaning: "characteristic polynomial of \\(A\\)" },
    { symbol: "E_{\\lambda},\\ker", meaning: "eigenspace for \\(\\lambda\\) and null-space operator" },
    { symbol: "\\det(A-\\lambda I_n)", meaning: "determinant used in the characteristic equation; vertical bars are reserved for scalar modulus" },
    { symbol: "A^{\\mathsf T},A^{\\dagger}", meaning: "transpose and Hermitian conjugate of \\(A\\)" },
    { symbol: "\\lVert\\mathbf v\\rVert", meaning: "Euclidean norm of \\(\\mathbf v\\)" },
    { symbol: "i", meaning: "imaginary unit" },
    { symbol: "j", meaning: "eigenpair index" },
    { symbol: "x,y,z,s,t", meaning: "scalar vector components or free parameters in worked eigenspaces" },
  ]}
/>

## The Core Method

Write the statement “the direction stays the same” as a matrix equation. The output may be a scalar multiple of the input, but the input cannot be the zero vector:

\\[
A\mathbf v=\lambda\mathbf v,
\qquad
\mathbf v\ne\mathbf0.
\tag*{[1]}
\\]

Move all terms to one side. A homogeneous square system has a nonzero solution exactly when its coefficient matrix is singular, giving the characteristic equation:

\\[
(A-\lambda I_n)\mathbf v=\mathbf0
\quad\Longleftrightarrow\quad
\det(A-\lambda I_n)=0.
\tag*{[2]}
\\]

After each root is found, substitute it back and solve the complete null-space problem:

\\[
E_{\lambda}=\ker(A-\lambda I_n)
=\{\mathbf v:(A-\lambda I_n)\mathbf v=\mathbf0\}.
\tag*{[3]}
\\]

Over \\(\mathbb C\\), the degree-\\(n\\) characteristic polynomial splits into \\(n\\) roots when algebraic multiplicity is counted. Over \\(\mathbb R\\), only real roots produce real eigenvectors. For example, a real plane rotation through an angle that is not an integer multiple of a half-turn has complex, but no real, eigenvalues.

Hermitian matrices over \\(\mathbb C\\) and real symmetric matrices have real eigenvalues. For a Hermitian matrix, take the scalar adjoint in two ways:

\\[
\begin{aligned}
A\mathbf v&=\lambda\mathbf v
&\Longrightarrow\quad
\mathbf v^{\dagger}A\mathbf v&=\lambda\mathbf v^{\dagger}\mathbf v,\\
(\mathbf v^{\dagger}A\mathbf v)^*
&=\mathbf v^{\dagger}A^{\dagger}\mathbf v
=\mathbf v^{\dagger}A\mathbf v
&\Longrightarrow\quad
\lambda^*\mathbf v^{\dagger}\mathbf v&=\lambda\mathbf v^{\dagger}\mathbf v.
\end{aligned}
\tag*{[4]}
\\]

Because \\(\mathbf v^{\dagger}\mathbf v>0\\), equation \\([4]\\) gives \\(\lambda^*=\lambda\\). Anti-Hermitian matrices similarly have purely imaginary eigenvalues, including zero. If \\(A\\) is unitary, norm preservation gives

\\[
\lVert\mathbf v\rVert
=\lVert A\mathbf v\rVert
=\lVert\lambda\mathbf v\rVert
=|\lambda|\lVert\mathbf v\rVert
\quad\Longrightarrow\quad
|\lambda|=1.
\tag*{[5]}
\\]

Hermitian, anti-Hermitian, and unitary matrices are normal, so over \\(\mathbb C\\) they admit orthonormal eigenvector bases. A general matrix need not. Eigenvectors belonging to distinct eigenvalues are linearly independent, but repeated eigenvalues require the eigenspace dimension to be calculated rather than guessed.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "A symmetric source matrix",
      question: "Find all eigenvalues and an orthonormal eigenbasis of \\(A=\\begin{pmatrix}1&2&1\\\\2&1&1\\\\1&1&2\\end{pmatrix}\\).",
      answer: "Expand the determinant along the first row: \\[\\begin{aligned}\\det(A-\\lambda I_3)&=(1-\\lambda)[(1-\\lambda)(2-\\lambda)-1]\\\\&\\quad-2[2(2-\\lambda)-1]+[2-(1-\\lambda)]\\\\&=-\\lambda^3+4\\lambda^2+\\lambda-4\\\\&=-(\\lambda+1)(\\lambda-1)(\\lambda-4).\\end{aligned}\\] Thus the eigenvalues are \\(-1,1,4\\). For \\(\\lambda=-1\\), the equations reduce to \\(2x+2y+z=0\\) and \\(x+y+3z=0\\), so \\(z=0\\) and \\(x=-y\\); choose \\(\\mathbf v_{-1}=(1,-1,0)^{\\mathsf T}\\). For \\(\\lambda=1\\), the first two equations are \\(2y+z=0\\) and \\(2x+z=0\\), so choose \\(\\mathbf v_1=(1,1,-2)^{\\mathsf T}\\). For \\(\\lambda=4\\), subtracting the first two equations gives \\(x=y\\), and then the first gives \\(z=x\\); choose \\(\\mathbf v_4=(1,1,1)^{\\mathsf T}\\). Their pairwise dot products vanish and their squared norms are \\(2,6,3\\), respectively. Final result: the eigenpairs are \\((-1,(1,-1,0)^{\\mathsf T}/\\sqrt2)\\), \\((1,(1,1,-2)^{\\mathsf T}/\\sqrt6)\\), and \\((4,(1,1,1)^{\\mathsf T}/\\sqrt3)\\).",
    },
    {
      title: "A repeated eigenvalue with two eigenvectors",
      question: "Find the eigenvalues and eigenspaces of \\(A=\\begin{pmatrix}-2&2&-3\\\\2&1&-6\\\\-1&-2&0\\end{pmatrix}\\).",
      answer: "Expand \\(\\det(A-\\lambda I_3)\\) along the first row: \\[\\begin{aligned}\\det(A-\\lambda I_3)&=(-2-\\lambda)[(1-\\lambda)(-\\lambda)-12]\\\\&\\quad-2[-2\\lambda-6]-3[-\\lambda-3]\\\\&=-(\\lambda-5)(\\lambda+3)^2.\\end{aligned}\\] Hence \\(\\lambda=5\\) is simple and \\(\\lambda=-3\\) has algebraic multiplicity two. For \\(\\lambda=5\\), the third row gives \\(x+2y+5z=0\\); substitution into the first row gives \\(y=-2z\\), then \\(x=-z\\). Thus \\(E_5=\\operatorname{span}\\{(-1,-2,1)^{\\mathsf T}\\}\\). For \\(\\lambda=-3\\), every row is a multiple of \\(x+2y-3z=0\\). Set \\(y=s\\) and \\(z=t\\); then \\(x=-2s+3t\\), so \\[E_{-3}=\\operatorname{span}\\{(-2,1,0)^{\\mathsf T},(3,0,1)^{\\mathsf T}\\}.\\] The repeated root supplies two independent eigenvectors, so this matrix still has three independent eigenvectors. Final result: \\(E_5=\\operatorname{span}\\{(-1,-2,1)^{\\mathsf T}\\}\\) and \\(E_{-3}=\\operatorname{span}\\{(-2,1,0)^{\\mathsf T},(3,0,1)^{\\mathsf T}\\}\\).",
    },
  ]}
/>
`;
