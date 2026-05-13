export const content = String.raw`## Principle

An eigenspace is the set of all eigenvectors for one eigenvalue, together with the zero vector. It is the solution space of a homogeneous linear system.

<Equation label="Eigenspace" tex="E_{\lambda}=\ker(A-\lambda I)" />

Eigenspaces organise eigenvectors into vector spaces. A whole line, plane, or higher-dimensional subspace can share the same scaling factor.

## Notation

<Notation
  items={[
    { symbol: "E_{\\lambda}", meaning: "eigenspace belonging to eigenvalue lambda" },
    { symbol: "\\ker(A-\\lambda I)", meaning: "null space of A minus lambda I" },
    { symbol: "\\dim E_{\\lambda}", meaning: "dimension of the eigenspace" },
    { symbol: "\\operatorname{span}\\{\\mathbf v_1,\\mathbf v_2\\}", meaning: "all linear combinations of the listed vectors" },
  ]}
/>

The zero vector is included so that the eigenspace is a subspace, even though the zero vector is not an eigenvector.

## Method

### Step 1: Choose one eigenvalue

Work with one \\(\\lambda\\) at a time.

### Step 2: Solve the null-space equation

<Equation label="Null-space equation" tex="(A-\lambda I)\mathbf v=\mathbf 0" />

### Step 3: Write the solution as a span

Use free variables to express every solution as a linear combination of basis vectors for the eigenspace.

## Rules

<Equation label="Eigenspace definition" tex="E_{\lambda}=\{\mathbf v:(A-\lambda I)\mathbf v=\mathbf0\}" />

<Equation label="Dimension" tex="\dim E_{\lambda}=\text{number of independent eigenvector directions}" />

For distinct eigenvalues, their eigenspaces meet only at the zero vector in common finite-dimensional cases.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the eigenspace for \\(A=\\begin{pmatrix}2&0\\\\0&5\\end{pmatrix}\\) with \\(\\lambda=5\\).",
      answer: "Solve \\((A-5I)\\mathbf v=\\mathbf0\\). This gives \\(x=0\\) and \\(y\\) free, so \\(E_5=\\operatorname{span}\\{(0,1)\\}\\).",
    },
    {
      title: "Example 2",
      question: "Why does an eigenspace include \\(\\mathbf0\\)?",
      answer: "The zero vector is not an eigenvector, but including it makes the set closed under addition and scalar multiplication. That makes the eigenspace a vector subspace.",
    },
    {
      title: "Example 3",
      question: "What does a two-dimensional eigenspace mean physically?",
      answer: "Every vector in a plane is scaled by the same factor. A disturbance in that plane responds without rotating out of the plane.",
    },
  ]}
/>

## Checks

- Work with one eigenvalue at a time.
- Include the zero vector in the eigenspace, but do not call it an eigenvector.
- Write eigenspaces as spans when possible.
- The dimension of an eigenspace counts independent eigenvector directions.`;
