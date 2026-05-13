export const content = String.raw`## Principle

Special matrices represent common linear maps with recognisable structure. Their patterns reveal geometry before any long calculation is needed.

<Equation label="Identity action" tex="I\mathbf v=\mathbf v" />

In physics, special matrices describe symmetries, projections, coordinate changes, rotations, reflections, and independent scaling along axes.

## Notation

<Notation
  items={[
    { symbol: "I", meaning: "identity matrix" },
    { symbol: "0", meaning: "zero matrix or zero vector, depending on context" },
    { symbol: "D", meaning: "diagonal matrix" },
    { symbol: "A^T", meaning: "transpose of A" },
    { symbol: "Q", meaning: "often used for an orthogonal matrix" },
    { symbol: "\\det A", meaning: "determinant of a square matrix" },
  ]}
/>

The pattern should match the type of map. Identity, diagonal, symmetric, and orthogonal matrices are square; zero matrices can be rectangular.

## Method

### Step 1: Identify the pattern

Look for zeros, diagonal entries, symmetry across the main diagonal, or columns with simple geometric meaning.

### Step 2: Translate the pattern into action

A diagonal matrix scales coordinate axes separately. A projection removes a component. An orthogonal matrix preserves length and angle.

### Step 3: Use shortcuts only when their conditions hold

Do not use determinant or eigenvalue facts for non-square matrices. Do not assume every sparse matrix has a special geometric meaning.

## Rules

<Equation label="Diagonal matrix" tex="D=\operatorname{diag}(d_1,d_2,d_3)" />

<Equation label="Symmetric matrix" tex="A^T=A" />

<Equation label="Orthogonal matrix" tex="Q^TQ=I" />

<Equation label="Projection pattern" tex="P^2=P" />

Identity matrices leave vectors unchanged. Zero matrices send every input to zero. Diagonal matrices scale coordinate directions independently.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "What does \\(D=\\begin{pmatrix}2&0\\\\0&5\\end{pmatrix}\\) do to \\((x,y)\\)?",
      answer: "It sends \\((x,y)\\) to \\((2x,5y)\\). The coordinate axes are scaled independently.",
    },
    {
      title: "Example 2",
      question: "Show that \\(P=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}\\) is a projection.",
      answer: "It sends \\((x,y)\\) to \\((x,0)\\). Applying it again still gives \\((x,0)\\), so \\(P^2=P\\).",
    },
    {
      title: "Example 3",
      question: "Why are orthogonal matrices useful for rotations?",
      answer: "For an orthogonal matrix \\(Q\\), dot products are preserved. Therefore lengths and angles are preserved, as in a rigid rotation or reflection.",
    },
  ]}
/>

## Checks

- Check whether the matrix is square before using determinant facts.
- A diagonal matrix acts independently on chosen coordinate directions.
- A projection satisfies applying it twice gives the same result.
- Orthogonal matrices preserve dot products, not just visual shape.`;
