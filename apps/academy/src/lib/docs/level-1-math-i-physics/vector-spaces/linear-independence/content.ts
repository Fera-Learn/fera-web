export const content = String.raw`## Principle

A list of vectors is linearly independent when no vector in the list is redundant. Algebraically, the only way to combine the listed vectors to get the zero vector is to use zero for every coefficient.

In physics, independent vectors represent separate degrees of freedom. If one direction can be made from the others, it does not add a new independent way for the system to vary.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf v_1,\\ldots,\\mathbf v_k", meaning: "a list of vectors" },
    { symbol: "c_1,\\ldots,c_k", meaning: "scalar coefficients" },
    { symbol: "\\mathbf 0", meaning: "the zero vector" },
    { symbol: "c_1\\mathbf v_1+\\cdots+c_k\\mathbf v_k", meaning: "a linear combination of the listed vectors" },
    { symbol: "linearly independent", meaning: "only the all-zero coefficient choice gives the zero vector" },
    { symbol: "linearly dependent", meaning: "some non-zero coefficient choice gives the zero vector" },
  ]}
/>

The coefficient choice \(c_1=\cdots=c_k=0\) is called the trivial solution. A non-trivial relation has at least one non-zero coefficient.

## Method

1. Write the homogeneous vector equation \(c_1\mathbf v_1+\cdots+c_k\mathbf v_k=\mathbf 0\).
2. Convert the vector equation into component equations.
3. Solve the homogeneous system for the coefficients.
4. If the only solution is \(c_1=\cdots=c_k=0\), the list is linearly independent.
5. If a non-trivial solution exists, the list is linearly dependent.

## Rules

<Equation label="Independence condition" tex="c_1\mathbf v_1+\cdots+c_k\mathbf v_k=\mathbf 0\quad\Rightarrow\quad c_1=\cdots=c_k=0" />

<Equation label="Standard basis test" tex="c_1(1,0)+c_2(0,1)=(0,0)\quad\Rightarrow\quad c_1=0,\ c_2=0" />

<Equation label="Dependence relation" tex="2(1,2)-(2,4)=(0,0)" />

- Any list containing \(\mathbf 0\) is linearly dependent.
- More than \(n\) vectors in \(\mathbb R^n\) are linearly dependent.
- Two non-zero scalar multiples of each other are linearly dependent.
- Two non-parallel non-zero vectors in \(\mathbb R^2\) are linearly independent.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Test whether \\((1,0)\\) and \\((0,1)\\) are linearly independent in \\(\\mathbb R^2\\).",
      answer: "Write \\(c_1(1,0)+c_2(0,1)=(0,0)\\). This gives \\((c_1,c_2)=(0,0)\\), so \\(c_1=0\\) and \\(c_2=0\\). The only solution is trivial, so the two vectors are linearly independent.",
    },
    {
      title: "Example 2",
      question: "Test whether \\((1,2)\\) and \\((2,4)\\) are linearly independent.",
      answer: "The second vector is twice the first: \\((2,4)=2(1,2)\\). Therefore \\(2(1,2)-(2,4)=(0,0)\\). The coefficients \\(2\\) and \\(-1\\) are not both zero, so this is a non-trivial relation. The vectors are linearly dependent.",
    },
  ]}
/>

## Checks

- Solve the homogeneous equation, not a non-homogeneous one.
- Distinguish the trivial solution from a non-trivial relation.
- For three or more vectors, pairwise checks are not enough.
- Orthogonal non-zero vectors are independent, but independence does not require orthogonality.`;
