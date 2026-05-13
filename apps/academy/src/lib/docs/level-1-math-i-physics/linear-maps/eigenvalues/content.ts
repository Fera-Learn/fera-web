export const content = String.raw`## Principle

An eigenvalue is a scale factor for a direction that a linear map does not turn. If \\(A\\mathbf v\\) points along the same line as \\(\\mathbf v\\), then the scale factor is an eigenvalue.

<Equation label="Eigenvalue equation" tex="A\mathbf v=\lambda\mathbf v" />

Eigenvalues identify natural rates, growth factors, decay factors, and squared frequencies in many linear physics models.

## Notation

<Notation
  items={[
    { symbol: "A", meaning: "square matrix representing a linear map" },
    { symbol: "\\lambda", meaning: "eigenvalue" },
    { symbol: "\\mathbf v", meaning: "non-zero eigenvector" },
    { symbol: "I", meaning: "identity matrix of the same size as A" },
    { symbol: "\\det(A-\\lambda I)", meaning: "characteristic polynomial" },
  ]}
/>

Eigenvalues are defined only for square matrices, because input and output vectors must live in the same space.

## Method

### Step 1: Rearrange the eigenvalue equation

Move all terms to one side.

<Equation label="Homogeneous form" tex="(A-\lambda I)\mathbf v=\mathbf 0" />

### Step 2: Require a non-zero solution

There is a non-zero solution only when \\(A-\\lambda I\\) is singular.

<Equation label="Characteristic equation" tex="\det(A-\lambda I)=0" />

### Step 3: Solve for eigenvalues

Expand the determinant and solve the resulting polynomial equation.

## Rules

<Equation label="Characteristic polynomial" tex="p(\lambda)=\det(A-\lambda I)" />

<Equation label="Eigenvalue condition" tex="p(\lambda)=0" />

<Equation label="Two by two case" tex="(a-\lambda)(d-\lambda)-bc=0" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the eigenvalues of \\(A=\\begin{pmatrix}2&0\\\\0&5\\end{pmatrix}\\).",
      answer: "The characteristic equation is \\((2-\\lambda)(5-\\lambda)=0\\). Therefore the eigenvalues are \\(\\lambda=2\\) and \\(\\lambda=5\\).",
    },
    {
      title: "Example 2",
      question: "Find the characteristic equation of \\(A=\\begin{pmatrix}1&3\\\\0&4\\end{pmatrix}\\).",
      answer: "Compute \\(\\det(A-\\lambda I)=(1-\\lambda)(4-\\lambda)\\). The eigenvalues are \\(1\\) and \\(4\\).",
    },
    {
      title: "Example 3",
      question: "Why do eigenvalues matter for repeated linear updates?",
      answer: "Along an eigenvector direction, each update multiplies by \\(\\lambda\\). After \\(n\\) updates, the factor is \\(\\lambda^n\\), so eigenvalues control growth and decay.",
    },
  ]}
/>

## Checks

- Eigenvalues require a square matrix.
- The eigenvector must be non-zero.
- Solve \\(\\det(A-\\lambda I)=0\\), not \\(\\det A=0\\) unless \\(\\lambda=0\\).
- Repeated eigenvalues need extra care when finding eigenvectors.`;
