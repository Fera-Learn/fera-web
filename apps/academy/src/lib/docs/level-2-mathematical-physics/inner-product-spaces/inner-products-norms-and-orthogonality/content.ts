export const content = String.raw`## Principle

The ordinary dot product tells us whether two real vectors point in similar directions, and it gives a vector's length when the vector is paired with itself. An **inner product** extends those geometric ideas to coordinates, functions, and complex states.

For complex vectors, conjugating one input keeps every squared length real and nonnegative. This page uses the physics convention: conjugate the first input and keep the second input linear.

Objective: verify inner-product properties and calculate overlaps, norms, orthogonality, and projections in real or complex spaces.

Prerequisite: familiarity with vectors, complex conjugation, finite sums, and definite integration.

## Notation

<Notation
  items={[
    { symbol: "\\mathbb F", meaning: "the scalar field, either \\(\\mathbb R\\) or \\(\\mathbb C\\)" },
    { symbol: "V", meaning: "an inner-product space \\(V\\) over \\(\\mathbb F\\)" },
    { symbol: "\\mathbf u,\\mathbf v,\\mathbf w", meaning: "vectors \\(\\mathbf u\\), \\(\\mathbf v\\), and \\(\\mathbf w\\) in \\(V\\)" },
    { symbol: "\\lambda,\\mu", meaning: "scalars \\(\\lambda\\) and \\(\\mu\\) in \\(\\mathbb F\\)" },
    { symbol: "\\langle\\mathbf u|\\mathbf v\\rangle", meaning: "inner product using the physics convention, linear in the second argument" },
    { symbol: "z^*", meaning: "complex conjugate \\(z^*\\) of the scalar \\(z\\)" },
    { symbol: "\\mathbf u^\\dagger", meaning: "conjugate transpose of a complex coordinate column" },
    { symbol: "\\|\\mathbf u\\|", meaning: "norm of \\(\\mathbf u\\) induced by the inner product" },
    { symbol: "L^2([a,b])", meaning: "square-integrable complex functions in \\(L^2([a,b])\\) on the fixed finite interval \\([a,b]\\), identified when equal almost everywhere" },
    { symbol: "f,g", meaning: "elements \\(f\\) and \\(g\\) of \\(L^2([a,b])\\)" },
    { symbol: "a,b,x", meaning: "fixed real endpoints \\(a\\) and \\(b\\), with \\(a\\lt b\\), and integration variable \\(x\\)" },
    { symbol: "\\mathbf e", meaning: "a unit vector \\(\\mathbf e\\) used as a projection direction" },
    { symbol: "P_{\\mathbf e}\\mathbf v", meaning: "orthogonal projection of \\(\\mathbf v\\) onto the span of \\(\\mathbf e\\)" },
    { symbol: "\\mathbf r", meaning: "the residual \\(\\mathbf r=\\mathbf v-P_{\\mathbf e}\\mathbf v\\)" },
    { symbol: "\\mathbf 0", meaning: "the zero vector \\(\\mathbf 0\\) in \\(V\\)" },
    { symbol: "m,j", meaning: "finite coordinate-space dimension \\(m\\) and coordinate index \\(j\\)" },
    { symbol: "u_j,v_j", meaning: "coordinate entries \\(u_j\\) and \\(v_j\\) of \\(\\mathbf u\\) and \\(\\mathbf v\\)" },
    { symbol: "i", meaning: "the imaginary unit \\(i\\), satisfying \\(i^2=-1\\)" },
  ]}
/>

## The Core Method

For real coordinate vectors, the inner product begins as the familiar dot product: multiply matching components and add. The complex version must also record which input is conjugated. Under the physics convention, conjugate symmetry is

\\[
\langle\mathbf u|\mathbf v\rangle
=\langle\mathbf v|\mathbf u\rangle^*.
\tag*{[1]}
\\]

Linearity belongs to the second slot:

\\[
\langle\mathbf u|\lambda\mathbf v+\mu\mathbf w\rangle
=\lambda\langle\mathbf u|\mathbf v\rangle
+\mu\langle\mathbf u|\mathbf w\rangle.
\tag*{[2]}
\\]

Equations \\([1]\\) and \\([2]\\) imply conjugate-linearity in the first slot:

\\[
\begin{aligned}
\langle\lambda\mathbf u+\mu\mathbf v|\mathbf w\rangle
&=\langle\mathbf w|\lambda\mathbf u+\mu\mathbf v\rangle^*\\
&=\left(\lambda\langle\mathbf w|\mathbf u\rangle
+\mu\langle\mathbf w|\mathbf v\rangle\right)^*\\
&=\lambda^*\langle\mathbf u|\mathbf w\rangle
+\mu^*\langle\mathbf v|\mathbf w\rangle.
\end{aligned}
\tag*{[3]}
\\]

Positive definiteness supplies length, while a zero overlap defines orthogonality:

\\[
\langle\mathbf u|\mathbf u\rangle\geq0,
\qquad
\langle\mathbf u|\mathbf u\rangle=0\Longleftrightarrow\mathbf u=\mathbf 0,
\qquad
\|\mathbf u\|=\sqrt{\langle\mathbf u|\mathbf u\rangle},
\qquad
\mathbf u\perp\mathbf v\Longleftrightarrow\langle\mathbf u|\mathbf v\rangle=0.
\tag*{[4]}
\\]

The standard coordinate and fixed-domain function inner products are

\\[
\langle\mathbf u|\mathbf v\rangle=\mathbf u^\dagger\mathbf v
=\sum_{j=1}^{m}u_j^*v_j,
\qquad
\langle f|g\rangle=\int_a^b f^*(x)g(x)\,dx.
\tag*{[5]}
\\]

The bounds in the second formula are exactly the interval endpoints \\(a\\) and \\(b\\). For a unit vector \\(\mathbf e\\), projection uses the projecting vector in the first slot:

\\[
P_{\mathbf e}\mathbf v
=\langle\mathbf e|\mathbf v\rangle\mathbf e,
\qquad
\mathbf r=\mathbf v-P_{\mathbf e}\mathbf v,
\qquad
\langle\mathbf e|\mathbf r\rangle=0.
\tag*{[6]}
\\]

Reversing the inner-product order conjugates the coefficient and generally gives the wrong projection in a complex space.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Complex overlap and norms",
      question: "In \\(\\mathbb C^2\\) with the physics convention, calculate the overlap and norms for \\(\\mathbf u=(1,i)^T\\) and \\(\\mathbf v=(2,1-i)^T\\).",
      answer: "Conjugate the first vector before multiplying: \\[\\langle\\mathbf u|\\mathbf v\\rangle=(1,-i)\\begin{pmatrix}2\\\\1-i\\end{pmatrix}=2+(-i)(1-i).\\tag*{[7]}\\] Expand the product without dropping the conjugation: \\[(-i)(1-i)=-i+i^2=-i-1,\\tag*{[8]}\\] so \\(\\langle\\mathbf u|\\mathbf v\\rangle=1-i\\). Reversing the order gives \\(\\langle\\mathbf v|\\mathbf u\\rangle=(1-i)^*=1+i\\), as conjugate symmetry requires. For the norms, \\[\\|\\mathbf u\\|^2=|1|^2+|i|^2=1+1=2,\\qquad \\|\\mathbf v\\|^2=|2|^2+|1-i|^2=4+2=6.\\tag*{[9]}\\] Taking nonnegative square roots completes the calculation. Final result: \\(\\langle\\mathbf u|\\mathbf v\\rangle=1-i\\), \\(\\|\\mathbf u\\|=\\sqrt2\\), and \\(\\|\\mathbf v\\|=\\sqrt6\\).",
    },
    {
      title: "Projection of a complex state",
      question: "Let \\(\\mathbf e=(1,i)^T/\\sqrt2\\) and \\(\\mathbf v=(2,0)^T\\). Find the projection onto \\(\\operatorname{span}\\{\\mathbf e\\}\\) and verify that the residual is orthogonal to \\(\\mathbf e\\).",
      answer: "First check \\(\\|\\mathbf e\\|^2=(|1|^2+|i|^2)/2=1\\), so the unit-vector formula applies. Put the projecting vector in the first slot: \\[\\langle\\mathbf e|\\mathbf v\\rangle=\\frac{1}{\\sqrt2}(1,-i)\\begin{pmatrix}2\\\\0\\end{pmatrix}=\\sqrt2.\\tag*{[10]}\\] Therefore \\[P_{\\mathbf e}\\mathbf v=\\sqrt2\\,\\mathbf e=(1,i)^T.\\tag*{[11]}\\] The residual is \\[\\mathbf r=\\mathbf v-P_{\\mathbf e}\\mathbf v=(2,0)^T-(1,i)^T=(1,-i)^T.\\tag*{[12]}\\] Verify orthogonality directly: \\[\\langle\\mathbf e|\\mathbf r\\rangle=\\frac{1}{\\sqrt2}(1,-i)\\begin{pmatrix}1\\\\-i\\end{pmatrix}=\\frac{1+(-i)(-i)}{\\sqrt2}=\\frac{1-1}{\\sqrt2}=0.\\tag*{[13]}\\] Final result: \\(P_{\\mathbf e}\\mathbf v=(1,i)^T\\) and the residual \\((1,-i)^T\\) is orthogonal to \\(\\mathbf e\\).",
    },
  ]}
/>
`;
