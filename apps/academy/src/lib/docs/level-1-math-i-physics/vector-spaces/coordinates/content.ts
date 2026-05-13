export const content = String.raw`## Principle

Coordinates are the scalar coefficients used to write a vector in a chosen ordered basis. The vector is the same geometric or physical object, but its coordinate list depends on the basis used to describe it.

In physics, changing coordinates can simplify a problem without changing the underlying displacement, velocity, state, or field. The basis changes the description, not the object being described.

## Notation

<Notation
  items={[
    { symbol: "B=(\\mathbf b_1,\\ldots,\\mathbf b_n)", meaning: "an ordered basis" },
    { symbol: "\\mathbf v", meaning: "the vector being represented" },
    { symbol: "[\\mathbf v]_B", meaning: "the coordinate vector of \\mathbf v relative to B" },
    { symbol: "c_i", meaning: "the coefficient multiplying the basis vector \\mathbf b_i" },
    { symbol: "standard basis", meaning: "the usual coordinate-axis basis in \\mathbb R^n" },
  ]}
/>

The ordered basis \(B\) must be named before the coordinate vector \([\mathbf v]_B\) has a definite meaning.

## Method

1. State the ordered basis \(B=(\mathbf b_1,\ldots,\mathbf b_n)\).
2. Write \(\mathbf v=c_1\mathbf b_1+\cdots+c_n\mathbf b_n\).
3. Convert the vector equation into scalar equations.
4. Solve for the coefficients \(c_1,\ldots,c_n\).
5. Write the coordinate vector in the same order as the basis: \([\mathbf v]_B=(c_1,\ldots,c_n)\).
6. Check the answer by reconstructing \(\mathbf v\) from the coefficients and basis vectors.

## Rules

<Equation label="Coordinate definition" tex="\mathbf v=c_1\mathbf b_1+\cdots+c_n\mathbf b_n\quad\Rightarrow\quad [\mathbf v]_B=(c_1,\ldots,c_n)" />

<Equation label="Coordinate example" tex="c_1(1,1)+c_2(1,-1)=(3,1)" />

<Equation label="Coordinate solution" tex="c_1+c_2=3,\quad c_1-c_2=1\quad\Rightarrow\quad c_1=2,\ c_2=1" />

- Coordinates are unique once a basis is fixed.
- Basis order matters: swapping basis vectors swaps coordinate positions.
- Coordinate vectors depend on the chosen basis.
- Standard coordinates are only one special coordinate system.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the coordinates of \\(\\mathbf v=(3,1)\\) in the basis \\(B=((1,1),(1,-1))\\).",
      answer: "Solve \\(c_1(1,1)+c_2(1,-1)=(3,1)\\). Comparing components gives \\(c_1+c_2=3\\) and \\(c_1-c_2=1\\). Adding the equations gives \\(2c_1=4\\), so \\(c_1=2\\). Then \\(2+c_2=3\\), so \\(c_2=1\\). Therefore \\([\\mathbf v]_B=(2,1)\\).",
    },
    {
      title: "Example 2",
      question: "How do we check \\([\\mathbf v]_B=(2,1)\\)?",
      answer: "Reconstruct the vector: \\(2(1,1)+1(1,-1)=(2,2)+(1,-1)=(3,1)\\). This matches \\(\\mathbf v\\), so the coordinates are correct.",
    },
  ]}
/>

## Checks

- Name the basis before writing coordinates.
- Preserve the order of the basis vectors.
- Solve for coefficients; do not just copy standard components into a new basis.
- Reconstruct the vector to check the coordinate list.`;
