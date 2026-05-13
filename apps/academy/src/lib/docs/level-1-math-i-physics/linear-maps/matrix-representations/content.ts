export const content = String.raw`## Principle

A matrix representation is a coordinate version of a linear map. Once bases are chosen, applying the map becomes multiplying by a matrix.

<Equation label="Matrix action" tex="[T(\mathbf v)]_{\beta}=A[\mathbf v]_{\alpha}" />

The columns of a standard matrix are the images of the standard basis vectors. This makes the whole map recoverable from what it does to a basis.

## Notation

<Notation
  items={[
    { symbol: "A", meaning: "matrix representing the linear map" },
    { symbol: "\\mathbf e_i", meaning: "ith standard basis vector" },
    { symbol: "[\\mathbf v]_{\\alpha}", meaning: "coordinates of v in input basis alpha" },
    { symbol: "[T(\\mathbf v)]_{\\beta}", meaning: "coordinates of the output in basis beta" },
    { symbol: "A_{ij}", meaning: "entry in row i and column j" },
  ]}
/>

The same physical map can have different matrices in different coordinate systems. The matrix depends on the chosen bases.

## Method

### Step 1: Choose input and output bases

In standard coordinates, use \\(\\mathbf e_1,\\ldots,\\mathbf e_n\\) for the input basis.

### Step 2: Apply the map to each input basis vector

Compute \\(T(\\mathbf e_1),T(\\mathbf e_2),\\ldots,T(\\mathbf e_n)\\).

### Step 3: Put those images into columns

The coordinate column of \\(T(\\mathbf e_j)\\) becomes column \\(j\\) of \\(A\\).

## Rules

<Equation label="Column rule" tex="A=\bigl[T(\mathbf e_1)\;T(\mathbf e_2)\;\cdots\;T(\mathbf e_n)\bigr]" />

<Equation label="Linear combination" tex="T(x_1\mathbf e_1+\cdots+x_n\mathbf e_n)=x_1T(\mathbf e_1)+\cdots+x_nT(\mathbf e_n)" />

The number of columns equals the input dimension. The number of rows equals the output dimension.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the standard matrix for \\(T(x,y)=(3x+y,2y)\\).",
      answer: "Compute \\(T(1,0)=(3,0)\\) and \\(T(0,1)=(1,2)\\). These are the columns, so \\(A=\\begin{pmatrix}3&1\\\\0&2\\end{pmatrix}\\).",
    },
    {
      title: "Example 2",
      question: "What size is the matrix for \\(T:\\mathbb R^3\\to\\mathbb R^2\\)?",
      answer: "It has three columns for the input coordinates and two rows for the output coordinates, so it is a \\(2\\times3\\) matrix.",
    },
    {
      title: "Example 3",
      question: "Why do basis choices matter?",
      answer: "A rotation or vibration mode may look simple in one basis and complicated in another. The map is unchanged, but its matrix representation changes.",
    },
  ]}
/>

## Checks

- Columns come from images of input basis vectors.
- Matrix size is output dimension by input dimension.
- Changing basis changes the representing matrix.
- Do not put basis-vector images into rows unless a convention explicitly says so.`;
