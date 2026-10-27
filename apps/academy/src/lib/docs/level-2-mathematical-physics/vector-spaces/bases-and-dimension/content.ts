export const content = String.raw`## Principle

A useful coordinate system needs enough directions to reach every vector, but no redundant direction. A **basis** is exactly such a minimal working set. Once its order is fixed, every vector receives one unambiguous coordinate list.

For a finite-dimensional space, the number of basis vectors is its **dimension**.

Objective: verify candidate bases, construct bases for constrained spaces, and determine finite dimensions.

Prerequisite: familiarity with span, linear independence, homogeneous equations, and polynomial coefficient comparison.

## Notation

<Notation
  items={[
    { symbol: "\\mathbb F", meaning: "the scalar field, either \\(\\mathbb R\\) or \\(\\mathbb C\\)" },
    { symbol: "V", meaning: "a finite-dimensional vector space \\(V\\) over \\(\\mathbb F\\)" },
    { symbol: "B=(\\mathbf b_1,\\ldots,\\mathbf b_n)", meaning: "an ordered candidate basis \\(B\\) of \\(V\\)" },
    { symbol: "\\mathbf v", meaning: "an arbitrary vector \\(\\mathbf v\\) in \\(V\\)" },
    { symbol: "c_1,\\ldots,c_n", meaning: "coordinates \\(c_1,\\ldots,c_n\\) of \\(\\mathbf v\\) relative to \\(B\\)" },
    { symbol: "\\mathbf 0", meaning: "the zero vector \\(\\mathbf 0\\) in \\(V\\)" },
    { symbol: "\\dim V", meaning: "the number \\(\\dim V\\) of vectors in a basis of finite-dimensional \\(V\\)" },
    { symbol: "\\mathcal P_m(\\mathbb F)", meaning: "polynomials over \\(\\mathbb F\\) of degree at most \\(m\\) on the fixed domain \\(\\mathbb F\\)" },
    { symbol: "x,y,z,s,t", meaning: "real Cartesian components \\(x,y,z\\) and parameters \\(s,t\\) in the plane example" },
    { symbol: "\\xi", meaning: "polynomial variable \\(\\xi\\), distinct from the Cartesian component \\(x\\)" },
    { symbol: "p,q", meaning: "polynomials \\(p\\) and \\(q\\) in the variable \\(\\xi\\)" },
    { symbol: "d_i,e_i", meaning: "alternative scalar coordinates \\(d_i\\) and \\(e_i\\) used to test independence and uniqueness" },
    { symbol: "i,n", meaning: "basis-vector index \\(i\\) and finite basis length \\(n\\)" },
    { symbol: "m", meaning: "the finite degree bound \\(m\\) in \\(\\mathcal P_m(\\mathbb F)\\)" },
    { symbol: "a,b,c", meaning: "real coefficients \\(a\\), \\(b\\), and \\(c\\) used in the independence checks" },
  ]}
/>

## The Core Test

The standard horizontal and vertical directions can build every vector in a plane, and neither can be built from the other. An ordered list \\(B\\) is a basis of \\(V\\) if and only if it passes both tests:

\\[
\operatorname{span}\{\mathbf b_1,\ldots,\mathbf b_n\}=V,
\qquad
d_1\mathbf b_1+\cdots+d_n\mathbf b_n=\mathbf 0
\Longrightarrow
d_1=\cdots=d_n=0.
\tag*{[1]}
\\]

The first condition guarantees existence of coordinates. For every \\(\mathbf v\in V\\), some scalars satisfy

\\[
\mathbf v=c_1\mathbf b_1+\cdots+c_n\mathbf b_n.
\tag*{[2]}
\\]

The second condition guarantees uniqueness. If the same vector had two coordinate lists, then

\\[
c_1\mathbf b_1+\cdots+c_n\mathbf b_n
=e_1\mathbf b_1+\cdots+e_n\mathbf b_n.
\tag*{[3]}
\\]

Move every term to one side and apply independence:

\\[
(c_1-e_1)\mathbf b_1+\cdots+(c_n-e_n)\mathbf b_n=\mathbf 0
\Longrightarrow
c_i-e_i=0
\Longrightarrow
c_i=e_i
\quad\text{for every }i.
\tag*{[4]}
\\]

All bases of the finite-dimensional space \\(V\\) have the same finite length, so

\\[
B=(\mathbf b_1,\ldots,\mathbf b_n)
\quad\Longrightarrow\quad
\dim V=n.
\tag*{[5]}
\\]

A list of the right length is not automatically a basis: spanning or independence must still be established. Basis vectors also need not be orthogonal or normalized.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Basis of a homogeneous plane",
      question: "Find a basis and the dimension of \\(V=\\{(x,y,z)\\in\\mathbb R^3:2x+4y-3z=0\\}\\).",
      answer: "The equation is homogeneous, so the set contains the origin and is closed under real linear combinations. Solve for \\(x\\): \\(2x=-4y+3z\\), hence \\(x=-2y+3z/2\\). Choose parameters \\(y=s\\) and \\(z=2t\\). Then \\[x=-2s+3t\\tag*{[6]}\\] and every vector in \\(V\\) has the form \\[(x,y,z)=(-2s+3t,s,2t)=s(-2,1,0)+t(3,0,2).\\tag*{[7]}\\] Thus the two displayed vectors span \\(V\\). For independence, set \\(a(-2,1,0)+b(3,0,2)=(0,0,0)\\). The second component gives \\(a=0\\), and the third gives \\(2b=0\\), so \\(b=0\\). Final result: \\(\\{(-2,1,0),(3,0,2)\\}\\) is a basis of \\(V\\), and \\(\\dim V=2\\).",
    },
    {
      title: "Polynomials with a fixed root",
      question: "Find a basis and dimension for the real polynomials \\(p\\in\\mathcal P_3(\\mathbb R)\\) satisfying \\(p(-1)=0\\).",
      answer: "By the factor theorem, \\(p(-1)=0\\) exactly when \\(p(\\xi)=(\\xi+1)q(\\xi)\\) for some \\(q\\in\\mathcal P_2(\\mathbb R)\\). Write \\(q(\\xi)=a+b\\xi+c\\xi^2\\). Multiplication gives \\[p(\\xi)=a(\\xi+1)+b(\\xi^2+\\xi)+c(\\xi^3+\\xi^2).\\tag*{[8]}\\] Hence \\(\\xi+1\\), \\(\\xi^2+\\xi\\), and \\(\\xi^3+\\xi^2\\) span the required space. If \\[a(\\xi+1)+b(\\xi^2+\\xi)+c(\\xi^3+\\xi^2)=0,\\tag*{[9]}\\] the \\(\\xi^3\\) coefficient gives \\(c=0\\), the \\(\\xi^2\\) coefficient then gives \\(b=0\\), and the constant coefficient gives \\(a=0\\). The list is independent. Final result: a basis is \\(\\{\\xi+1,\\xi^2+\\xi,\\xi^3+\\xi^2\\}\\), and the dimension is \\(3\\).",
    },
  ]}
/>
`;
