export const content = String.raw`## Principle

A subspace is a subset of a vector space that is itself a vector space using the same addition and scalar multiplication. It is not enough to be a subset; the subset must stay closed under the linear operations.

Subspaces appear in physics when motion, states, or solutions are constrained to a linear set. A particle constrained to move along a line through the origin has a one-dimensional subspace of possible displacement vectors.

## Notation

<Notation
  items={[
    { symbol: "V", meaning: "the parent vector space" },
    { symbol: "W", meaning: "a candidate subspace of V" },
    { symbol: "W\\subseteq V", meaning: "every vector in W is also in V" },
    { symbol: "\\mathbf 0", meaning: "the zero vector of V" },
    { symbol: "\\mathbf u", meaning: "a vector in W" },
    { symbol: "\\mathbf v", meaning: "another vector in W" },
    { symbol: "\\lambda", meaning: "a real scalar" },
    { symbol: "\\mu", meaning: "another real scalar" },
    { symbol: "\\lambda\\mathbf u+\\mu\\mathbf v", meaning: "a linear combination of two vectors in W" },
  ]}
/>

The operations on \(W\) are inherited from \(V\). A subspace does not invent new addition or scalar multiplication.

## Method

1. Confirm that \(W\subseteq V\), so every object in \(W\) is an object from the parent vector space.
2. Check that \(W\) is non-empty. Usually this is done by checking \(\mathbf 0\in W\).
3. Take arbitrary \(\mathbf u,\mathbf v\in W\) and show \(\mathbf u+\mathbf v\in W\).
4. Take arbitrary \(\lambda\in\mathbb R\) and \(\mathbf u\in W\), then show \(\lambda\mathbf u\in W\).
5. Equivalently, combine the last two tests by showing every linear combination \(\lambda\mathbf u+\mu\mathbf v\) lies in \(W\).

## Rules

<Equation label="Linear-combination test" tex="\mathbf u,\mathbf v\in W,\ \lambda,\mu\in\mathbb R\quad\Rightarrow\quad \lambda\mathbf u+\mu\mathbf v\in W" />

<Equation label="Plane through the origin" tex="W=\{(x,y,z)\in\mathbb R^3:z=0\}" />

<Equation label="Translated line failure" tex="\mathbf 0=(0,0)\notin\{(x,y)\in\mathbb R^2:y=1\}" />

- Every subspace contains the zero vector.
- Lines and planes through the origin are subspaces of coordinate spaces.
- A translated line or plane that does not pass through the origin is not a subspace.
- The intersection of subspaces is a subspace because a vector satisfying all the subspace conditions remains inside every intersected set.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Show that \\(W=\\{(x,y,z)\\in\\mathbb R^3:z=0\\}\\) is a subspace of \\(\\mathbb R^3\\).",
      answer: "The zero vector \\((0,0,0)\\) has third component 0, so it lies in \\(W\\). Let \\(\\mathbf u=(u_1,u_2,0)\\) and \\(\\mathbf v=(v_1,v_2,0)\\). Then \\(\\lambda\\mathbf u+\\mu\\mathbf v=(\\lambda u_1+\\mu v_1,\\lambda u_2+\\mu v_2,0)\\). The third component is still 0, so the linear combination is in \\(W\\).",
    },
    {
      title: "Example 2",
      question: "Why is \\(A=\\{(x,y)\\in\\mathbb R^2:y=1\\}\\) not a subspace?",
      answer: "The zero vector in \\(\\mathbb R^2\\) is \\((0,0)\\), but it does not satisfy \\(y=1\\). Since \\(\\mathbf 0\\notin A\\), the set cannot be a subspace. It is a translated line, not a line through the origin.",
    },
  ]}
/>

## Checks

- Use the same operations as the parent vector space.
- Check that the zero vector is present before doing longer calculations.
- Avoid treating translated affine sets as subspaces.
- Test arbitrary elements; one successful numerical example does not prove closure.`;
