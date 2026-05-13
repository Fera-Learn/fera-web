export const content = String.raw`## Principle

A basis is a list of vectors that spans the space and is linearly independent. Spanning means the list can build every vector in the space. Independence means none of the listed vectors is redundant.

For physics, a basis acts like a coordinate system. It lets a vector be described by scalar components without using extra directions that repeat information already present.

## Notation

<Notation
  items={[
    { symbol: "B", meaning: "a basis or candidate basis" },
    { symbol: "\\mathbf b_1,\\ldots,\\mathbf b_n", meaning: "vectors in the basis" },
    { symbol: "\\mathbf v", meaning: "a vector being represented" },
    { symbol: "c_1,\\ldots,c_n", meaning: "scalar coefficients in a basis expansion" },
    { symbol: "\\mathbf v=c_1\\mathbf b_1+\\cdots+c_n\\mathbf b_n", meaning: "a coordinate representation of \\mathbf v using basis vectors" },
  ]}
/>

The order of basis vectors matters when coordinates are written as an ordered list.

## Method

1. Check that the candidate list spans the target space.
2. Check that the candidate list is linearly independent.
3. If both tests pass, the list is a basis.
4. To represent a vector, solve \(\mathbf v=c_1\mathbf b_1+\cdots+c_n\mathbf b_n\) for the coefficients.
5. Use independence to know that the coefficient list is unique.

## Rules

<Equation label="Basis representation" tex="\mathbf v=c_1\mathbf b_1+\cdots+c_n\mathbf b_n" />

<Equation label="Standard coordinates" tex="(x,y)=x(1,0)+y(0,1)" />

<Equation label="Dependent pair" tex="(2,0)=2(1,0)" />

- A basis must both span the space and be linearly independent.
- A basis has no redundant vectors.
- Every vector in the space has a unique coefficient list in a chosen basis.
- Every basis of a finite-dimensional space has the same number of vectors.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Why is \\(B=\\{(1,0),(0,1)\\}\\) a basis for \\(\\mathbb R^2\\)?",
      answer: "The list spans \\(\\mathbb R^2\\) because \\((x,y)=x(1,0)+y(0,1)\\) for every \\((x,y)\\). It is independent because \\(c_1(1,0)+c_2(0,1)=(0,0)\\) gives \\(c_1=0\\) and \\(c_2=0\\). Therefore it is a basis.",
    },
    {
      title: "Example 2",
      question: "Why is \\(\\{(1,0),(2,0)\\}\\) not a basis for \\(\\mathbb R^2\\)?",
      answer: "The vectors are dependent because \\((2,0)=2(1,0)\\). Their linear combinations have the form \\(a(1,0)+b(2,0)=(a+2b,0)\\), so they only produce vectors on the x-axis. The list is dependent and does not span all of \\(\\mathbb R^2\\).",
    },
  ]}
/>

## Checks

- Verify both spanning and linear independence.
- Do not call every spanning set a basis; redundant spanning sets are not bases.
- Basis vectors need not be perpendicular or unit length.
- Keep the basis order fixed when writing coordinates.`;
