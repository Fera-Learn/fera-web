export const content = String.raw`## Principle

An eigenvector is a non-zero vector whose direction is preserved by a linear map. The vector may be stretched, shrunk, reversed, or unchanged, but it stays on the same line.

<Equation label="Eigenvector equation" tex="A\mathbf v=\lambda\mathbf v" />

In physics, eigenvectors often describe independent modes: principal axes, polarisation states, or directions that respond without mixing.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf v", meaning: "non-zero eigenvector" },
    { symbol: "\\lambda", meaning: "eigenvalue belonging to the eigenvector" },
    { symbol: "A-\\lambda I", meaning: "matrix used to solve for eigenvectors" },
    { symbol: "\\mathbf 0", meaning: "zero vector" },
    { symbol: "c\\mathbf v", meaning: "non-zero scalar multiple of an eigenvector" },
  ]}
/>

If \\(\\mathbf v\\) is an eigenvector, every non-zero multiple of \\(\\mathbf v\\) is also an eigenvector with the same eigenvalue.

## Method

### Step 1: Start from a known eigenvalue

Eigenvectors are found after an eigenvalue has been identified.

### Step 2: Solve a homogeneous system

Substitute \\(\\lambda\\) into \\(A-\\lambda I\\) and solve

<Equation label="Eigenvector system" tex="(A-\lambda I)\mathbf v=\mathbf 0" />

### Step 3: Exclude the zero vector

The zero vector always solves the homogeneous system, but it is not an eigenvector.

## Rules

<Equation label="Scalar multiple rule" tex="A(c\mathbf v)=cA\mathbf v=c\lambda\mathbf v=\lambda(c\mathbf v)" />

<Equation label="Non-zero condition" tex="\mathbf v\ne\mathbf 0" />

Eigenvectors for distinct eigenvalues are linearly independent in standard finite-dimensional settings.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find an eigenvector for \\(A=\\begin{pmatrix}2&0\\\\0&5\\end{pmatrix}\\) with \\(\\lambda=2\\).",
      answer: "Solve \\((A-2I)\\mathbf v=\\mathbf0\\). This gives \\(y=0\\), so one eigenvector is \\((1,0)\\).",
    },
    {
      title: "Example 2",
      question: "If \\((1,2)\\) is an eigenvector, is \\((3,6)\\) also one?",
      answer: "Yes. Since \\((3,6)=3(1,2)\\), it lies on the same invariant line and has the same eigenvalue.",
    },
    {
      title: "Example 3",
      question: "What is the physical meaning of an eigenvector of a stretching map?",
      answer: "It is a direction that the stretching does not rotate. A displacement along that direction remains along that direction after the map acts.",
    },
  ]}
/>

## Checks

- Do not list the zero vector as an eigenvector.
- Eigenvectors belong to a particular eigenvalue.
- Any non-zero scalar multiple represents the same eigenvector direction.
- Solve \\((A-\\lambda I)\\mathbf v=\\mathbf0\\), not \\(A\\mathbf v=\\mathbf0\\) unless \\(\\lambda=0\\).`;
