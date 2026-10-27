export const content = String.raw`## Principle

A three-component dot product follows a familiar pattern: multiply matching components, then add the three results. Index notation keeps that pattern but removes the repeated writing. The position and repetition of each index tell us which values to add and which labels must remain in the answer.

The Kronecker delta is a companion to this shorthand. It behaves like a component selector: only the term with the requested index survives.

Objective: expand indexed expressions, identify free and dummy indices, and simplify Kronecker-delta contractions.

Prerequisite: familiarity with vector and matrix components and finite sums.

## Notation

<Notation
  items={[
    { symbol: "i,j,k", meaning: "Cartesian indices, each taking the values \\(1,2,3\\)" },
    { symbol: "\\sum_{j=1}^{3}", meaning: "an explicit sum over the three possible values of \\(j\\)" },
    { symbol: "a_i,b_i,c_i", meaning: "components of the vectors \\(\\mathbf a\\), \\(\\mathbf b\\), and \\(\\mathbf c\\)" },
    { symbol: "A_{ij},B_{jk}", meaning: "components of the arrays \\(A\\) and \\(B\\)" },
    { symbol: "S_i", meaning: "a component expression whose surviving label is \\(i\\)" },
    { symbol: "\\delta_{ij}", meaning: "the Kronecker delta, used to select matching index values" },
    { symbol: "\\mathbf a\\cdot\\mathbf b", meaning: "the Euclidean dot product" },
  ]}
/>

## The Core Method

Start with the ordinary component expansion of a dot product. The Einstein summation convention lets a repeated index stand for the whole sum:

\[
a_i b_i
=\sum_{i=1}^{3}a_i b_i
=a_1b_1+a_2b_2+a_3b_3.
\tag*{[1]}
\]

The repeated index \(i\) is a **dummy index**: it runs through all three values and disappears after the sum is evaluated. Its letter is only a placeholder, so a consistent rename does not change the result:

\[
a_i b_i=a_j b_j.
\tag*{[2]}
\]

A label that appears once does not get summed. It is a **free index**, which labels the components of the result. For example,

\[
S_i=A_{ij}b_j
=A_{i1}b_1+A_{i2}b_2+A_{i3}b_3.
\tag*{[3]}
\]

Here \(j\) is dummy and \(i\) is free. Choosing \(i=1,2,3\) produces the three components of \(S_i\).

The same reading method works when more than one label remains. In the product below, \(j\) is summed while \(i\) and \(k\) remain free:

\[
A_{ij}B_{jk}
=A_{i1}B_{1k}+A_{i2}B_{2k}+A_{i3}B_{3k}.
\tag*{[4]}
\]

Every term in a valid component equation must have the same free indices. Under this convention, a dummy index appears exactly twice in one term; if multiplication would make it appear three times, rename one dummy index before multiplying.

The Kronecker delta is the identity array for Cartesian components. Its entries are

\[
\delta_{ij}=
\begin{cases}
1,&i=j,\\
0,&i\ne j,
\end{cases}
\qquad i,j=1,2,3.
\tag*{[5]}
\]

Because mismatched labels give zero, a contraction with the delta keeps only the matching component. With \(j\) free and \(i\) dummy,

\[
\begin{aligned}
b_i\delta_{ij}
&=b_1\delta_{1j}+b_2\delta_{2j}+b_3\delta_{3j}\\
&=b_j.
\end{aligned}
\tag*{[6]}
\]

For example, if \(j=2\), only \(b_2\delta_{22}=b_2\) survives. This is why the delta acts as a selector rather than creating a new value.

When the same delta index is repeated, all three diagonal entries are added:

\[
\delta_{jj}=\delta_{11}+\delta_{22}+\delta_{33}=1+1+1=3.
\tag*{[7]}
\]

The delta can also pair equal Cartesian components to reproduce the dot product:

\[
\delta_{ij}a_i b_j
=a_1b_1+a_2b_2+a_3b_3
=\mathbf a\cdot\mathbf b.
\tag*{[8]}
\]

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Expanding two dummy indices",
      question: "Expand \\(A_{ij}B_{jk}c_k\\), and identify its free and dummy indices.",
      answer: "The index \\(i\\) appears once, so it is free. The indices \\(j\\) and \\(k\\) each appear twice, so both are dummy indices. First use equation \\([4]\\), then sum over \\(k\\): \\[\\begin{aligned} A_{ij}B_{jk}c_k={}&A_{i1}(B_{11}c_1+B_{12}c_2+B_{13}c_3)\\\\ &+A_{i2}(B_{21}c_1+B_{22}c_2+B_{23}c_3)\\\\ &+A_{i3}(B_{31}c_1+B_{32}c_2+B_{33}c_3). \\end{aligned}\\tag*{[9]}\\] There are three choices for \\(j\\) and three for \\(k\\), so the full result contains nine products. The only label left after both sums is \\(i\\), so the expression represents the three components of a vector-like result. **Final result:** \\(i\\) is free; \\(j\\) and \\(k\\) are dummy; equation \\([9]\\) is the expanded form.",
    },
    {
      title: "Simplifying nested delta contractions",
      question: "Simplify \\(S_i=\\delta_{ij}A_{jk}b_k\\), and state the free and dummy indices.",
      answer: "The index \\(i\\) is free, while \\(j\\) and \\(k\\) are dummy. Apply the delta selection rule to the \\(j\\) contraction: \\[\\delta_{ij}A_{jk}=\\delta_{i1}A_{1k}+\\delta_{i2}A_{2k}+\\delta_{i3}A_{3k}=A_{ik}.\\tag*{[10]}\\] The repeated index \\(k\\) is still summed, so \\[S_i=A_{ik}b_k=A_{i1}b_1+A_{i2}b_2+A_{i3}b_3.\\tag*{[11]}\\] The free index \\(i\\) remains unchanged on both sides, which checks that the result has the correct component label. **Final result:** \\(S_i=A_{ik}b_k\\).",
    },
  ]}
/>
`;
