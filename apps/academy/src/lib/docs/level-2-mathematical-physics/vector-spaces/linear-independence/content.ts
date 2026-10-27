export const content = String.raw`## Principle

If one vector can be assembled from the others, the list contains redundant information. For example, adding the sum of two known directions as a third direction creates no new freedom. A list with no such redundancy is **linearly independent**.

Independent vectors represent genuinely distinct degrees of freedom in a mathematical or physical model.

Objective: solve a homogeneous coefficient system and classify a finite vector list as independent or dependent.

Prerequisite: familiarity with linear combinations, the zero vector, component equations, and elementary row reduction.

## Notation

<Notation
  items={[
    { symbol: "\\mathbb F", meaning: "the scalar field, either \\(\\mathbb R\\) or \\(\\mathbb C\\)" },
    { symbol: "V", meaning: "a vector space over \\(\\mathbb F\\)" },
    { symbol: "\\mathbf v_1,\\ldots,\\mathbf v_k", meaning: "a finite list of vectors \\(\\mathbf v_1,\\ldots,\\mathbf v_k\\) in \\(V\\)" },
    { symbol: "c_1,\\ldots,c_k", meaning: "scalar coefficients \\(c_1,\\ldots,c_k\\) in \\(\\mathbb F\\)" },
    { symbol: "\\mathbf 0", meaning: "the zero vector \\(\\mathbf 0\\) in \\(V\\)" },
    { symbol: "M", meaning: "a matrix \\(M\\) whose columns are coordinate vectors \\(\\mathbf v_i\\) in a fixed finite-dimensional basis" },
    { symbol: "\\mathbf c", meaning: "the coefficient column vector \\(\\mathbf c=(c_1,\\ldots,c_k)^T\\)" },
    { symbol: "\\det M", meaning: "the determinant \\(\\det M\\) of a square matrix \\(M\\)" },
    { symbol: "p_1,p_2,p_3", meaning: "polynomials \\(p_1\\), \\(p_2\\), and \\(p_3\\) on the fixed domain \\(\\mathbb R\\)" },
    { symbol: "x", meaning: "the real polynomial variable \\(x\\) on the fixed domain \\(\\mathbb R\\)" },
  ]}
/>

## The Core Test

A dependence relation is a recipe for combining the listed vectors to make zero without setting every amount to zero. To test whether such a recipe exists, start with the homogeneous equation

\\[
c_1\mathbf v_1+c_2\mathbf v_2+\cdots+c_k\mathbf v_k=\mathbf 0.
\tag*{[1]}
\\]

The list is linearly independent precisely when equation \\([1]\\) forces every coefficient to vanish:

\\[
c_1\mathbf v_1+\cdots+c_k\mathbf v_k=\mathbf 0
\quad\Longrightarrow\quad
c_1=\cdots=c_k=0.
\tag*{[2]}
\\]

If equation \\([1]\\) has any solution with at least one nonzero coefficient, the list is linearly dependent. In coordinates, place the vectors as columns of \\(M\\). The same test becomes

\\[
M\mathbf c=\mathbf 0.
\tag*{[3]}
\\]

Row reduction works for any finite coordinate matrix. If \\(M\\) is square, the determinant gives the equivalent shortcut

\\[
\det M\ne0
\quad\Longleftrightarrow\quad
M\mathbf c=\mathbf 0\text{ has only }\mathbf c=\mathbf 0.
\tag*{[4]}
\\]

The determinant shortcut is not defined for a nonsquare matrix. Also, pairwise nonparallel vectors need not make a larger list independent; the single homogeneous equation must test the entire list.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Three independent vectors",
      question: "Test \\(\\mathbf v_1=(0,1,1)^T\\), \\(\\mathbf v_2=(0,1,2)^T\\), and \\(\\mathbf v_3=(1,1,-1)^T\\) for linear independence over \\(\\mathbb R\\).",
      answer: "Set \\(c_1\\mathbf v_1+c_2\\mathbf v_2+c_3\\mathbf v_3=\\mathbf 0\\). Comparing the first, second, and third components gives \\[c_3=0,\\qquad c_1+c_2+c_3=0,\\qquad c_1+2c_2-c_3=0.\\tag*{[5]}\\] The first equation gives \\(c_3=0\\). The remaining equations become \\(c_1+c_2=0\\) and \\(c_1+2c_2=0\\). Subtracting the first from the second gives \\(c_2=0\\), and then \\(c_1=0\\). Only the trivial coefficient vector remains. Final result: the three vectors are linearly independent in \\(\\mathbb R^3\\).",
    },
    {
      title: "A dependent polynomial list",
      question: "On the fixed domain \\(\\mathbb R\\), test \\(p_1=1+x+x^2\\), \\(p_2=1-x+3x^2\\), and \\(p_3=1+3x-x^2\\) for linear independence.",
      answer: "Seek coefficients satisfying \\(c_1p_1+c_2p_2+c_3p_3=0\\) for every real \\(x\\). Matching the constant, \\(x\\), and \\(x^2\\) coefficients gives \\[c_1+c_2+c_3=0,\\qquad c_1-c_2+3c_3=0,\\qquad c_1+3c_2-c_3=0.\\tag*{[6]}\\] Choose \\(c_2=1\\). The first equation gives \\(c_1=-1-c_3\\). Substitution into the second gives \\(-1-c_3-1+3c_3=0\\), so \\(2c_3=2\\) and \\(c_3=1\\). Hence \\(c_1=-2\\). Direct substitution verifies \\[-2p_1+p_2+p_3=0.\\tag*{[7]}\\] The coefficients are not all zero. Final result: the polynomial list is linearly dependent.",
    },
  ]}
/>
`;
