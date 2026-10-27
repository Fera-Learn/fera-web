export const content = String.raw`## Principle

Some transformations respect mixtures: transforming a sum gives the same result as transforming each part and then adding. A rule with this behaviour is a **linear operator**.

After bases are chosen, a matrix records how that rule acts on coordinates; the matrix is a representation of the rule, not the abstract rule itself. The diagonal sum of a square matrix is its **trace**.

Objective: test linearity, construct a matrix representation, and prove trace identities.

Prerequisite: familiarity with vector spaces, ordered bases, and matrix multiplication.

## Notation

<Notation
  items={[
    { symbol: "\\mathbb F", meaning: "scalar field, either the real numbers \\(\\mathbb R\\) or complex numbers \\(\\mathbb C\\)" },
    { symbol: "V,W", meaning: "vector spaces over \\(\\mathbb F\\)" },
    { symbol: "\\mathcal L", meaning: "linear map from \\(V\\) to \\(W\\)" },
    { symbol: "\\mathbf u,\\mathbf v", meaning: "vectors in the domain \\(V\\)" },
    { symbol: "\\alpha,\\beta", meaning: "scalars in \\(\\mathbb F\\)" },
    { symbol: "\\mathcal B_V,\\mathcal B_W", meaning: "ordered bases of \\(V\\) and \\(W\\)" },
    { symbol: "[\\mathbf u]_{\\mathcal B_V}", meaning: "coordinate column of \\(\\mathbf u\\) in basis \\(\\mathcal B_V\\)" },
    { symbol: "A=[\\mathcal L]_{\\mathcal B_W\\leftarrow\\mathcal B_V}", meaning: "matrix representing \\(\\mathcal L\\) in the stated domain and codomain bases" },
    { symbol: "B", meaning: "a second matrix of compatible size" },
    { symbol: "m,n", meaning: "positive integer matrix dimensions or a non-negative integer power, as stated" },
    { symbol: "i,j,k", meaning: "matrix-entry and summation indices" },
    { symbol: "A_{ij},B_{ij}", meaning: "matrix entries in row \\(i\\), column \\(j\\)" },
    { symbol: "I_n", meaning: "the \\(n\\)-dimensional identity matrix" },
    { symbol: "\\operatorname{tr}A", meaning: "trace of the square matrix \\(A\\)" },
    { symbol: "\\det A", meaning: "determinant of the square matrix \\(A\\)" },
  ]}
/>

## The Core Method

A transformation is linear only if it preserves every scaled mixture, not just a few test inputs. Combine the addition and scaling requirements in one equation:

\\[
\mathcal L(\alpha\mathbf u+\beta\mathbf v)
=\alpha\mathcal L(\mathbf u)+\beta\mathcal L(\mathbf v).
\tag*{[1]}
\\]

After bases are fixed, coordinates turn the map into matrix multiplication. If the domain has dimension \\(n\\) and the codomain has dimension \\(m\\), then \\(A\\) is an \\(m\times n\\) matrix:

\\[
[\mathcal L(\mathbf u)]_{\mathcal B_W}
=A[\mathbf u]_{\mathcal B_V}.
\tag*{[2]}
\\]

When \\(V=W\\), use the same ordered basis for both domain and codomain coordinates. The resulting matrix represents an endomorphism under a similarity change of basis, and its diagonal sum defines the basis-independent operator trace:

\\[
\operatorname{tr}A=\sum_{k=1}^{n}A_{kk}.
\tag*{[3]}
\\]

Any square matrix has the diagonal sum in equation \\([3]\\). If different ordered bases are used for the domain and codomain of an endomorphism, its matrix is still \\(n\times n\\), but it is not a same-basis representation related by similarity; its diagonal sum is therefore not the invariant operator trace.

For square matrices of the same size, direct use of the sum gives linearity of trace:

\\[
\begin{aligned}
\operatorname{tr}(\alpha A+\beta B)
&=\sum_{k=1}^{n}(\alpha A_{kk}+\beta B_{kk})\\
&=\alpha\sum_{k=1}^{n}A_{kk}+\beta\sum_{k=1}^{n}B_{kk}\\
&=\alpha\operatorname{tr}A+\beta\operatorname{tr}B.
\end{aligned}
\tag*{[4]}
\\]

If \\(A\\) is \\(m\times n\\) and \\(B\\) is \\(n\times m\\), expand the diagonal entries to prove cyclicity rather than assuming that matrix multiplication commutes:

\\[
\begin{aligned}
\operatorname{tr}(AB)
&=\sum_{i=1}^{m}(AB)_{ii}
=\sum_{i=1}^{m}\sum_{j=1}^{n}A_{ij}B_{ji}\\
&=\sum_{j=1}^{n}\sum_{i=1}^{m}B_{ji}A_{ij}
=\sum_{j=1}^{n}(BA)_{jj}
=\operatorname{tr}(BA).
\end{aligned}
\tag*{[5]}
\\]

Repeated use of equation \\([5]\\) permits cyclic rotations, but not arbitrary reorderings:

\\[
\operatorname{tr}(ABC)=\operatorname{tr}(BCA)=\operatorname{tr}(CAB).
\tag*{[6]}
\\]

For an invertible square matrix \\(B\\), cyclicity also proves basis independence:

\\[
\operatorname{tr}(B^{-1}AB)
=\operatorname{tr}(ABB^{-1})
=\operatorname{tr}A.
\tag*{[7]}
\\]

The same argument does not define a trace for a non-square matrix. A common error is to call every matrix an operator on one space; a rectangular matrix instead represents a map between spaces of different dimensions.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Checking cyclicity numerically",
      question: "For \\(A=\\begin{pmatrix}1&2\\\\0&-1\\end{pmatrix}\\) and \\(B=\\begin{pmatrix}3&0\\\\4&5\\end{pmatrix}\\), calculate \\(\\operatorname{tr}(AB)\\) and \\(\\operatorname{tr}(BA)\\).",
      answer: "Multiply in the stated order: \\[AB=\\begin{pmatrix}1&2\\\\0&-1\\end{pmatrix}\\begin{pmatrix}3&0\\\\4&5\\end{pmatrix}=\\begin{pmatrix}11&10\\\\-4&-5\\end{pmatrix},\\qquad \\operatorname{tr}(AB)=11-5=6.\\] Reverse the order without assuming the products are equal: \\[BA=\\begin{pmatrix}3&0\\\\4&5\\end{pmatrix}\\begin{pmatrix}1&2\\\\0&-1\\end{pmatrix}=\\begin{pmatrix}3&6\\\\4&3\\end{pmatrix},\\qquad \\operatorname{tr}(BA)=3+3=6.\\] The products differ even though their traces agree. Final result: \\(\\operatorname{tr}(AB)=\\operatorname{tr}(BA)=6\\), while \\(AB\\ne BA\\).",
    },
    {
      title: "Anticommuting involutions",
      question: "Square matrices satisfy \\(AB=-BA\\) and \\(A^2=B^2=I_n\\). Prove that both traces vanish.",
      answer: "The identity \\(B^2=I_n\\) makes \\(B^{-1}=B\\). Multiply \\(AB=-BA\\) on the left by \\(B\\): \\[BAB=-B^2A=-A.\\] Cyclicity and \\(B^2=I_n\\) also give \\[\\operatorname{tr}(BAB)=\\operatorname{tr}(ABB)=\\operatorname{tr}(AB^2)=\\operatorname{tr}A.\\] Taking the trace of \\(BAB=-A\\) therefore yields \\(\\operatorname{tr}A=-\\operatorname{tr}A\\), so \\(2\\operatorname{tr}A=0\\) and \\(\\operatorname{tr}A=0\\). Similarly, \\(A^{-1}=A\\) and \\[ABA=A(BA)=A(-AB)=-A^2B=-B,\\] while cyclicity gives \\(\\operatorname{tr}(ABA)=\\operatorname{tr}(BA^2)=\\operatorname{tr}B\\). Hence \\(\\operatorname{tr}B=-\\operatorname{tr}B\\), so \\(\\operatorname{tr}B=0\\). Final result: \\(\\operatorname{tr}A=\\operatorname{tr}B=0\\).",
    },
  ]}
/>
`;
