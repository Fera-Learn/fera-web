export const content = String.raw`## Principle

Diagonalisation rewrites a matrix using a basis of eigenvectors. In that basis, the linear map acts by independent scaling along coordinate directions.

<Equation label="Diagonalisation" tex="A=PDP^{-1}" />

This is powerful in physics because it separates coupled linear behaviour into independent modes.

## Notation

<Notation
  items={[
    { symbol: "A", meaning: "matrix to diagonalise" },
    { symbol: "P", meaning: "matrix whose columns are eigenvectors" },
    { symbol: "D", meaning: "diagonal matrix of eigenvalues" },
    { symbol: "P^{-1}", meaning: "change from standard coordinates to eigenvector coordinates" },
    { symbol: "A=PDP^{-1}", meaning: "A is diagonalised by P" },
  ]}
/>

Diagonalisation is possible when there are enough linearly independent eigenvectors to form a basis.

## Method

### Step 1: Find eigenvalues

Solve \\(\\det(A-\\lambda I)=0\\).

### Step 2: Find independent eigenvectors

For each eigenvalue, solve \\((A-\\lambda I)\\mathbf v=\\mathbf0\\). Collect enough independent eigenvectors to form a basis.

### Step 3: Build \\(P\\) and \\(D\\)

Put eigenvectors as columns of \\(P\\). Put the matching eigenvalues in the same order down the diagonal of \\(D\\).

## Rules

<Equation label="Column matching" tex="A\mathbf v_i=\lambda_i\mathbf v_i" />

<Equation label="Matrix form" tex="AP=PD" />

<Equation label="Diagonal form" tex="D=P^{-1}AP" />

If \\(A\\) has \\(n\\) distinct eigenvalues, then an \\(n\\times n\\) matrix is diagonalizable. Repeated eigenvalues require checking whether enough independent eigenvectors exist.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Diagonalise \\(A=\\begin{pmatrix}2&0\\\\0&5\\end{pmatrix}\\).",
      answer: "The standard basis vectors are eigenvectors and the matrix is already diagonal. We can take \\(P=I\\) and \\(D=A\\).",
    },
    {
      title: "Example 2",
      question: "If \\(P\\) has columns \\(\\mathbf v_1,\\mathbf v_2\\), what order should eigenvalues appear in \\(D\\)?",
      answer: "The eigenvalue for \\(\\mathbf v_1\\) goes first and the eigenvalue for \\(\\mathbf v_2\\) goes second. The order must match the columns of \\(P\\).",
    },
    {
      title: "Example 3",
      question: "Why does diagonalisation decouple a linear system?",
      answer: "In eigenvector coordinates, applying the map multiplies each coordinate separately by one diagonal entry. The coordinates no longer mix during the linear step.",
    },
  ]}
/>

## Checks

- The columns of \\(P\\) must be independent eigenvectors.
- The order of columns in \\(P\\) must match the order of eigenvalues in \\(D\\).
- A matrix with repeated eigenvalues may fail to diagonalise.
- Verify either \\(AP=PD\\) or \\(A=PDP^{-1}\\).`;
