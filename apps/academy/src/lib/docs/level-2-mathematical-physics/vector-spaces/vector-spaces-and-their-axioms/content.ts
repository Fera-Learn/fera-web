export const content = String.raw`## Principle

Coordinate arrows are not the only objects that can be added and scaled. Matrices can be added entry by entry, and functions can be added value by value. When these operations obey the same reliable rules, the collection behaves as a **vector space**.

The operations matter as much as the objects. The same set can pass with its usual operations and fail when one operation is changed.

Objective: test a candidate structure against the vector-space rules and justify the decision with a proof or one decisive counterexample.

Prerequisite: familiarity with scalar arithmetic, coordinate vectors, matrices, and homogeneous linear equations.

## Notation

<Notation
  items={[
    { symbol: "\\mathbb F", meaning: "the scalar field, either the real numbers \\(\\mathbb R\\) or complex numbers \\(\\mathbb C\\)" },
    { symbol: "V", meaning: "a candidate vector space over \\(\\mathbb F\\)" },
    { symbol: "\\mathbf u,\\mathbf v,\\mathbf w", meaning: "arbitrary vectors in \\(V\\)" },
    { symbol: "\\alpha,\\beta", meaning: "arbitrary scalars in \\(\\mathbb F\\)" },
    { symbol: "\\mathbf 0", meaning: "the additive identity in \\(V\\)" },
    { symbol: "-\\mathbf v", meaning: "the additive inverse of \\(\\mathbf v\\)" },
    { symbol: "1", meaning: "the multiplicative identity of \\(\\mathbb F\\)" },
    { symbol: "n", meaning: "a positive integer \\(n\\) fixing a coordinate-space dimension" },
    { symbol: "T", meaning: "a linear map \\(T\\) between fixed vector spaces" },
    { symbol: "M", meaning: "the real coefficient matrix \\(M\\) in the homogeneous worked system" },
    { symbol: "\\mathbf q,\\mathbf q_1,\\mathbf q_2", meaning: "real coordinate columns \\(\\mathbf q\\), \\(\\mathbf q_1\\), and \\(\\mathbf q_2\\)" },
    { symbol: "x,y,z,t", meaning: "real coordinate components \\(x\\), \\(y\\), \\(z\\), and \\(t\\) in the worked system" },
    { symbol: "c", meaning: "an arbitrary real scalar \\(c\\) in the worked case" },
  ]}
/>

## The Core Test

Usual addition and scaling keep coordinate vectors inside the same collection. This illustrates the first question to ask: do both operations stay inside the set? To prove the rules, state the scalar field, the set, and both operations, then use arbitrary vectors and scalars rather than selected examples.

Closure requires both operations to return elements of the same set:

\\[
\mathbf u+\mathbf v\in V,
\qquad
\alpha\mathbf v\in V.
\tag*{[1]}
\\]

Vector addition must obey associativity and commutativity, possess an identity, and possess an inverse for every vector:

\\[
\begin{aligned}
(\mathbf u+\mathbf v)+\mathbf w&=\mathbf u+(\mathbf v+\mathbf w),\\
\mathbf u+\mathbf v&=\mathbf v+\mathbf u,\\
\mathbf v+\mathbf 0&=\mathbf v,\\
\mathbf v+(-\mathbf v)&=\mathbf 0.
\end{aligned}
\tag*{[2]}
\\]

Scalar multiplication must be associative, distributive over vector and scalar addition, and compatible with the scalar identity:

\\[
\begin{aligned}
(\alpha\beta)\mathbf v&=\alpha(\beta\mathbf v),\\
\alpha(\mathbf u+\mathbf v)&=\alpha\mathbf u+\alpha\mathbf v,\\
(\alpha+\beta)\mathbf v&=\alpha\mathbf v+\beta\mathbf v,\\
1\mathbf v&=\mathbf v.
\end{aligned}
\tag*{[3]}
\\]

With the usual operations, \\(\mathbb F^n\\), fixed-size matrices, and all \\(\mathbb F\\)-valued functions on one fixed domain satisfy these rules. If a linear operator maps between fixed vector spaces, its homogeneous solution set is also a vector space because

\\[
T\mathbf u=\mathbf 0,
\quad
T\mathbf v=\mathbf 0
\quad\Longrightarrow\quad
T(\alpha\mathbf u+\beta\mathbf v)
=\alpha T\mathbf u+\beta T\mathbf v
=\mathbf 0.
\tag*{[4]}
\\]

An inhomogeneous condition generally fails the zero-vector or closure test. One failed axiom is enough to reject a candidate; there is no need to check the remaining axioms after a counterexample is found.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "A homogeneous solution space",
      question: "Over \\(\\mathbb R\\), do the solutions \\((x,y,z,t)\\in\\mathbb R^4\\) of \\(4x-2y-3z-t=0\\) and \\(5x-4y+3z+2t=0\\) form a vector space under the usual operations?",
      answer: "Write the system as \\(M\\mathbf q=\\mathbf 0\\), where \\(\\mathbf q=(x,y,z,t)^T\\). The zero vector is a solution because \\(M\\mathbf 0=\\mathbf 0\\). If \\(M\\mathbf q_1=\\mathbf 0\\) and \\(M\\mathbf q_2=\\mathbf 0\\), linearity gives \\[M(\\mathbf q_1+\\mathbf q_2)=M\\mathbf q_1+M\\mathbf q_2=\\mathbf 0+\\mathbf 0=\\mathbf 0.\\tag*{[5]}\\] For any \\(c\\in\\mathbb R\\), \\[M(c\\mathbf q_1)=cM\\mathbf q_1=c\\mathbf 0=\\mathbf 0.\\tag*{[6]}\\] Thus the set is closed under addition and real scalar multiplication. The remaining axioms are inherited from \\(\\mathbb R^4\\) because the operations are unchanged. Final result: the solution set is a real vector space, specifically the kernel of the homogeneous system.",
    },
    {
      title: "An altered scalar multiplication",
      question: "On the set \\(\\mathbb R^2\\), keep usual addition but define \\(\\alpha(x,y)=(\\alpha x,0)\\). Does this define a real vector space?",
      answer: "Test the scalar-identity axiom with \\(\\mathbf v=(0,1)\\). The altered operation gives \\[1\\mathbf v=1(0,1)=(0,0).\\tag*{[7]}\\] However, \\((0,0)\\ne(0,1)=\\mathbf v\\). Therefore \\(1\\mathbf v=\\mathbf v\\) fails. It is unnecessary to test every other axiom after this counterexample. Final result: the altered operations do not make \\(\\mathbb R^2\\) a vector space over \\(\\mathbb R\\).",
    },
  ]}
/>
`;
