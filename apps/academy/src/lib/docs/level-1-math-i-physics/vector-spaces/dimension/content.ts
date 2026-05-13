export const content = String.raw`## Principle

The dimension of a vector space is the number of vectors in any basis for that space. It measures how many independent directions are needed to describe every vector in the space.

In physics, dimension often counts independent degrees of freedom. A particle constrained to a line has one positional degree of freedom, while a free particle in three-dimensional space has three.

## Notation

<Notation
  items={[
    { symbol: "\\dim V", meaning: "the dimension of the vector space V" },
    { symbol: "B", meaning: "a basis for a vector space" },
    { symbol: "|B|", meaning: "the number of vectors in the basis B" },
    { symbol: "\\mathbb R^n", meaning: "real coordinate space with n components" },
    { symbol: "W", meaning: "a subspace of a larger vector space" },
    { symbol: "degree of freedom", meaning: "an independent scalar needed to describe a state or vector" },
  ]}
/>

Dimension counts basis vectors, not all vectors in the space. Infinite sets can have finite dimension.

## Method

1. Identify the vector space or subspace whose dimension is required.
2. Find a basis for that space.
3. Count the number of vectors in the basis.
4. If a different basis is chosen, check that the count is the same.
5. For a subspace, count independent directions inside the subspace, not the dimension of the larger ambient space.

## Rules

<Equation label="Dimension from a basis" tex="\dim V=|B|\quad\text{when }B\text{ is a basis for }V" />

<Equation label="Coordinate-space dimension" tex="\dim\mathbb R^n=n" />

<Equation label="Plane dimension" tex="\dim\{(x,y,0):x,y\in\mathbb R\}=2" />

- A line through the origin has dimension \(1\).
- A plane through the origin in \(\mathbb R^3\) has dimension \(2\).
- The zero subspace \(\{\mathbf 0\}\) has dimension \(0\).
- A subspace can have smaller dimension than the coordinate space containing it.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "What is the dimension of the line \\(L=\\{t(1,2,0):t\\in\\mathbb R\\}\\)?",
      answer: "The single non-zero vector \\((1,2,0)\\) spans the line, and a one-vector list containing a non-zero vector is independent. So \\(\\{(1,2,0)\\}\\) is a basis for \\(L\\), and \\(\\dim L=1\\).",
    },
    {
      title: "Example 2",
      question: "What is the dimension of \\(W=\\{(x,y,0):x,y\\in\\mathbb R\\}\\)?",
      answer: "Every vector in \\(W\\) can be written as \\(x(1,0,0)+y(0,1,0)\\). The two vectors \\((1,0,0)\\) and \\((0,1,0)\\) are independent, so they form a basis. Therefore \\(\\dim W=2\\), even though \\(W\\) sits inside \\(\\mathbb R^3\\).",
    },
    {
      title: "Example 3",
      question: "What is \\(\\dim\\mathbb R^3\\)?",
      answer: "The standard basis \\(\\{(1,0,0),(0,1,0),(0,0,1)\\}\\) has three vectors and spans \\(\\mathbb R^3\\). Hence \\(\\dim\\mathbb R^3=3\\).",
    },
  ]}
/>

## Checks

- Count basis vectors, not all vectors in the space.
- Do not count dependent vectors as separate dimensions.
- Check that the set you count is actually a basis.
- Distinguish subspace dimension from the dimension of the containing coordinate space.`;
