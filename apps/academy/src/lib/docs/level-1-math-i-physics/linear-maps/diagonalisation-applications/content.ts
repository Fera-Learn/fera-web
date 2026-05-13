export const content = String.raw`## Principle

Diagonalisation makes repeated linear operations simple. Instead of applying a coupled matrix many times, change to eigenvector coordinates, scale independently, and change back.

<Equation label="Power through diagonalisation" tex="A^n=PD^nP^{-1}" />

This appears in discrete time evolution, coupled oscillations, normal modes, and linear stability calculations.

## Notation

<Notation
  items={[
    { symbol: "A^n", meaning: "matrix A applied n times" },
    { symbol: "D^n", meaning: "diagonal matrix with diagonal entries raised to nth powers" },
    { symbol: "\\mathbf x_0", meaning: "initial state" },
    { symbol: "\\mathbf x_n", meaning: "state after n updates" },
    { symbol: "P^{-1}\\mathbf x", meaning: "coordinates of x in the eigenvector basis" },
  ]}
/>

Eigenvalues control the long-term size of components. Eigenvectors tell which independent directions those components occupy.

## Method

### Step 1: Diagonalise the matrix

Find \\(A=PDP^{-1}\\).

### Step 2: Move the initial vector into eigenvector coordinates

Compute \\(P^{-1}\\mathbf x_0\\). These coordinates are mode amplitudes.

### Step 3: Evolve each mode independently

Use \\(D^n\\), which is easy because \\(D\\) is diagonal.

## Rules

<Equation label="Diagonal powers" tex="D=\operatorname{diag}(\lambda_1,\lambda_2,\cdots,\lambda_n)\quad\Rightarrow\quad D^k=\operatorname{diag}(\lambda_1^k,\lambda_2^k,\cdots,\lambda_n^k)" />

<Equation label="Repeated update" tex="\mathbf x_n=A^n\mathbf x_0=PD^nP^{-1}\mathbf x_0" />

Modes with \\(\\lvert\\lambda\\rvert\\lt1\\) decay under repeated updates. Modes with \\(\\lvert\\lambda\\rvert\\gt1\\) grow. Modes with negative eigenvalues alternate sign.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "If \\(D=\\operatorname{diag}(2,5)\\), what is \\(D^3\\)?",
      answer: "Raise each diagonal entry to the third power: \\(D^3=\\operatorname{diag}(8,125)\\).",
    },
    {
      title: "Example 2",
      question: "Why does a component with eigenvalue \\(1/2\\) decay?",
      answer: "After \\(n\\) updates its multiplier is \\((1/2)^n\\), which tends to zero as \\(n\\) increases.",
    },
    {
      title: "Example 3",
      question: "How does diagonalisation help with coupled oscillations?",
      answer: "The original coordinates may mix, but eigenvector coordinates describe normal modes. Each normal mode evolves with its own factor.",
    },
  ]}
/>

## Checks

- Use diagonalisation only after checking that enough independent eigenvectors exist.
- Powers of \\(D\\) are easy because only diagonal entries are powered.
- Long-term behaviour is controlled by eigenvalue magnitudes.
- Convert back to original coordinates when the final answer needs original variables.`;
