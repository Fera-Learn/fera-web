export const content = String.raw`## Principle

The nullity of a matrix is the dimension of its null space. The null space contains all input vectors that the matrix sends to the zero vector.

In a linear physics model, nullity counts independent input directions that produce no output. These may represent unconstrained modes, hidden degrees of freedom, or changes that do not affect measured quantities.

## Notation

<Notation
  items={[
    { symbol: "A", meaning: "a matrix" },
    { symbol: "\\operatorname{Null}(A)", meaning: "the null space of A" },
    { symbol: "\\operatorname{nullity}A", meaning: "the dimension of the null space of A" },
    { symbol: "A\\mathbf x=\\mathbf 0", meaning: "the homogeneous system defining the null space" },
    { symbol: "free variable", meaning: "a variable not fixed by a pivot column" },
    { symbol: "pivot variable", meaning: "a variable corresponding to a pivot column" },
    { symbol: "n", meaning: "the number of columns of A" },
  ]}
/>

The number \(n\) in rank-nullity is the number of input coordinates, so it is the number of columns of \(A\), not the number of rows.

## Method

1. Write the homogeneous system \(A\mathbf x=\mathbf 0\).
2. Row-reduce the augmented system, or row-reduce \(A\) because the right-hand side is zero.
3. Identify pivot variables and free variables.
4. Express the solution in terms of the free variables.
5. Build a basis for the null space from those solution directions.
6. Count the basis vectors; that count is the nullity.

## Rules

<Equation label="Null space" tex="\operatorname{Null}(A)=\{\mathbf x:A\mathbf x=\mathbf 0\}" />

<Equation label="Nullity" tex="\operatorname{nullity}A=\dim\operatorname{Null}(A)" />

<Equation label="Rank-nullity theorem" tex="\operatorname{rank}A+\operatorname{nullity}A=n" />

- Nullity equals the number of free variables in the homogeneous system.
- If a matrix has full column rank, its nullity is \(0\).
- If \(A\) has \(n\) columns and rank \(r\), then \(\operatorname{nullity}A=n-r\).
- The zero vector is always in the null space, but that does not mean the nullity is always non-zero.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A matrix has 3 columns and rank 2. What is its nullity?",
      answer: "Use rank-nullity with \\(n=3\\): \\(\\operatorname{rank}A+\\operatorname{nullity}A=3\\). Since \\(\\operatorname{rank}A=2\\), we get \\(2+\\operatorname{nullity}A=3\\), so \\(\\operatorname{nullity}A=1\\).",
    },
    {
      title: "Example 2",
      question: "What does a one-dimensional null space look like?",
      answer: "A homogeneous solution may have the form \\(\\mathbf x=t(-1,-1,1)\\), where \\(t\\in\\mathbb R\\). The single direction \\((-1,-1,1)\\) forms a basis for the null space, so the nullity is 1. Each vector in this line satisfies \\(A\\mathbf x=\\mathbf 0\\).",
    },
  ]}
/>

## Checks

- Solve the homogeneous system \(A\mathbf x=\mathbf 0\), not a system with a non-zero right-hand side.
- In rank-nullity, count columns of \(A\), not rows.
- Distinguish the zero vector from the zero-dimensional null space.
- Check each proposed null-space basis vector by substituting it into \(A\mathbf x=\mathbf 0\).`;
