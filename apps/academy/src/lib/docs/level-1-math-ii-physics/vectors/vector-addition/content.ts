export const content = String.raw`## Principle

Vector addition combines two vectors to make a new vector. Geometrically, the sum is the single arrow that has the same net effect as following the first arrow and then the second arrow.

Componentwise, vectors can be added by adding matching components, but only after both vectors have been expressed in the same coordinate basis.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf a", meaning: "the first vector being added" },
    { symbol: "\\mathbf b", meaning: "the second vector being added" },
    { symbol: "\\mathbf c", meaning: "the resultant vector, often written as \\mathbf c=\\mathbf a+\\mathbf b" },
    { symbol: "\\mathbf d", meaning: "a third vector used when grouping sums" },
    { symbol: "\\mathbf a+\\mathbf b", meaning: "the vector sum of \\mathbf a and \\mathbf b" },
    { symbol: "a_i", meaning: "component i of \\mathbf a in a chosen basis" },
    { symbol: "b_i", meaning: "component i of \\mathbf b in the same basis" },
    { symbol: "\\mathbf i,\\mathbf j,\\mathbf k", meaning: "Cartesian basis vectors in the x, y, and z directions" },
  ]}
/>

If \(\mathbf c=\mathbf a+\mathbf b\), then \(\mathbf c\) is the vector obtained by adding \(\mathbf a\) and \(\mathbf b\).

## Method

### Step 1: Use the head-to-tail construction

Draw \(\mathbf a\). Move \(\mathbf b\) without rotating or stretching it so that the tail of \(\mathbf b\) starts at the head of \(\mathbf a\). The sum \(\mathbf a+\mathbf b\) is the arrow from the tail of \(\mathbf a\) to the head of the translated \(\mathbf b\).

### Step 2: Use the parallelogram construction

Draw \(\mathbf a\) and \(\mathbf b\) with the same tail. Complete the parallelogram whose adjacent sides are \(\mathbf a\) and \(\mathbf b\). The diagonal from the common tail to the opposite corner is \(\mathbf a+\mathbf b\).

### Step 3: Add components in one basis

When coordinates are given, first check that both vectors use the same basis. In the Cartesian basis \(\mathbf i,\mathbf j,\mathbf k\), write

<PhysicsDerivation
  items={[
    { label: "First vector", tex: "\\mathbf a=a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k" },
    { label: "Second vector", tex: "\\mathbf b=b_1\\mathbf i+b_2\\mathbf j+b_3\\mathbf k" },
    { label: "Collect matching basis vectors", tex: "\\mathbf a+\\mathbf b=(a_1+b_1)\\mathbf i+(a_2+b_2)\\mathbf j+(a_3+b_3)\\mathbf k" },
  ]}
/>

Collecting the coefficients of the same basis vectors gives the component rule.

## Rules

<Equation label="Commutativity" tex="\mathbf a+\mathbf b=\mathbf b+\mathbf a" />

<Equation label="Associativity" tex="(\mathbf a+\mathbf b)+\mathbf d=\mathbf a+(\mathbf b+\mathbf d)" />

<Equation label="Component addition" tex="(a_1,a_2,a_3)+(b_1,b_2,b_3)=(a_1+b_1,a_2+b_2,a_3+b_3)" />

The component rule follows from writing both vectors in the same basis and collecting coefficients of \(\mathbf i\), \(\mathbf j\), and \(\mathbf k\). This works because each component measures how much of the vector lies along one basis direction.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A student walks 4 m east and then 3 m north. What does the displacement sum represent?",
      answer: "The two displacement vectors are added head-to-tail. The resultant displacement is the single vector from the starting point to the final point, not the total path length of 7 m.",
    },
    {
      title: "Example 2",
      question: "Two forces \\(\\mathbf F_1\\) and \\(\\mathbf F_2\\) act on the same particle. How is the resultant force found geometrically?",
      answer: "Draw the force arrows to scale from the same point and use the parallelogram construction. The diagonal gives the resultant force \\(\\mathbf F_1+\\mathbf F_2\\), with unit \\(N\\).",
    },
    {
      title: "Example 3",
      question: "Add \\((0,3,-4)\\) to \\((1,-1,2)\\).",
      answer: "Add matching components in the same Cartesian basis: \\((0,3,-4)+(1,-1,2)=(0+1,3-1,-4+2)=(1,2,-2)\\).",
    },
  ]}
/>

## Checks

- Vectors must be expressed in the same coordinate basis before adding components.
- The result has the same physical unit as the input vectors, such as metres for displacements or newtons for forces.
- Vector addition is not ordinary number addition, even though the symbol \(+\) is used. The plus sign combines magnitudes and directions according to vector rules.`;
