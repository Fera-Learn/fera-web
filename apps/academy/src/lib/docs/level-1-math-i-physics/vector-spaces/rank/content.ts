export const content = String.raw`## Principle

The rank of a matrix is the dimension of its column space. It tells how many independent column directions the matrix contains, which is also the number of pivot columns found during row reduction.

In a linear physics model, rank counts the number of independent outputs or independent constraints. Low rank means some outputs or equations are consequences of others.

## Notation

<Notation
  items={[
    { symbol: "A", meaning: "a matrix" },
    { symbol: "\\operatorname{rank}A", meaning: "the rank of A" },
    { symbol: "\\operatorname{Col}(A)", meaning: "the column space of A, the span of the columns of A" },
    { symbol: "pivot column", meaning: "a column containing a leading pivot after row reduction" },
    { symbol: "row-reduced echelon form", meaning: "a simplified row-equivalent matrix used to identify pivots" },
    { symbol: "\\mathbf x\\mapsto A\\mathbf x", meaning: "the linear map represented by A" },
  ]}
/>

The rank is a dimension, so it is a number. It is not the same thing as the matrix itself or as the number of entries in the matrix.

## Method

1. Start with the matrix \(A\).
2. Row-reduce \(A\) to identify pivot positions.
3. Count the pivot columns; this count is \(\operatorname{rank}A\).
4. Interpret the pivot columns as the independent column directions.
5. If a basis for \(\operatorname{Col}(A)\) is needed, use the pivot columns from the original matrix, not the reduced matrix.

## Rules

<Equation label="Rank as column-space dimension" tex="\operatorname{rank}A=\dim\operatorname{Col}(A)" />

<Equation label="Rank bound" tex="\operatorname{rank}A\le \min(m,n)\quad\text{for }A\in\mathbb R^{m\times n}" />

<Equation label="Example row relation" tex="R_3\leftarrow R_3-R_1=(0,1,1)" />

- Rank equals the number of independent columns.
- Rank is at most the number of rows and at most the number of columns.
- Full column rank means all columns are independent.
- Full row rank means the rows give independent constraints.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the rank of \\(A=\\begin{pmatrix}1&2&3\\\\0&1&1\\\\1&3&4\\end{pmatrix}\\).",
      answer: "Use the row operation \\(R_3\\leftarrow R_3-R_1\\). The third row becomes \\((0,1,1)\\), so it matches the second row. Then use \\(R_3\\leftarrow R_3-R_2\\), giving the zero row. The reduced matrix has pivots in columns 1 and 2, so \\(\\operatorname{rank}A=2\\).",
    },
    {
      title: "Example 2",
      question: "Which columns form a basis for the column space in the example?",
      answer: "The pivot positions are in columns 1 and 2. A basis for \\(\\operatorname{Col}(A)\\) uses columns 1 and 2 from the original matrix, not from the row-reduced matrix. Those original columns are \\((1,0,1)\\) and \\((2,1,3)\\).",
    },
  ]}
/>

## Checks

- Count pivot columns, not non-zero entries.
- Do not confuse rank with the matrix size.
- For a column-space basis, use pivot columns from the original matrix.
- Row operations preserve row-equivalence and pivot information, but they do not preserve the literal original column vectors.`;
