export const content = String.raw`## Principle

A vector space is a collection of objects with two operations: vector addition and scalar multiplication. The collection is closed under those operations, meaning the result stays inside the same collection whenever the operation is allowed.

The objects do not have to be drawn as arrows. They become vectors because their addition and scalar multiplication obey the standard algebraic rules.

For this course, the main examples are the real coordinate spaces \(\mathbb R^2\) and \(\mathbb R^3\), which model plane vectors and three-dimensional physical vectors.

## Notation

<Notation
  items={[
    { symbol: "V", meaning: "a vector space, meaning a collection of vectors with vector addition and scalar multiplication" },
    { symbol: "\\mathbb R", meaning: "the scalar field of real numbers used in this course" },
    { symbol: "\\mathbf u", meaning: "a vector in V" },
    { symbol: "\\mathbf v", meaning: "another vector in V" },
    { symbol: "\\mathbf w", meaning: "a third vector in V" },
    { symbol: "\\mathbf 0", meaning: "the zero vector in V, used as the additive identity" },
    { symbol: "-\\mathbf v", meaning: "the additive inverse of \\mathbf v, satisfying \\mathbf v+(-\\mathbf v)=\\mathbf 0" },
    { symbol: "\\lambda", meaning: "a scalar from \\mathbb R" },
    { symbol: "\\mu", meaning: "another scalar from \\mathbb R" },
    { symbol: "c_i", meaning: "a scalar coefficient multiplying the vector \\mathbf v_i" },
    { symbol: "\\lambda\\mathbf v", meaning: "the scalar multiple of \\mathbf v by \\lambda" },
    { symbol: "\\dim V", meaning: "the dimension of V, the number of vectors in a basis for V" },
    { symbol: "\\{\\mathbf v_1,\\ldots,\\mathbf v_k\\}", meaning: "a list of vectors used when checking whether any vector in the list is redundant" },
  ]}
/>

Closure means that if \(\mathbf u\in V\), \(\mathbf v\in V\), and \(\lambda\in\mathbb R\), then both \(\mathbf u+\mathbf v\) and \(\lambda\mathbf v\) are also in \(V\).

Linear independence means that a list of vectors has no redundant vector. Algebraically, \(\{\mathbf v_1,\ldots,\mathbf v_k\}\) is linearly independent when the only solution of \(c_1\mathbf v_1+\cdots+c_k\mathbf v_k=\mathbf 0\) is \(c_1=\cdots=c_k=0\).

## Method

### Step 1: State the collection and the scalars

Name the candidate collection \(V\) and state that its scalars come from \(\mathbb R\). A candidate is not a vector space until the operations and scalar field are specified.

### Step 2: Test closure

Check that adding two objects in \(V\) always gives another object in \(V\), and check that multiplying an object in \(V\) by any real scalar always gives another object in \(V\).

### Step 3: Test the addition structure

Check for an additive identity \(\mathbf 0\), an additive inverse for every vector, associativity of addition, and commutativity of addition.

### Step 4: Test scalar laws

Check that the scalar \(1\) leaves every vector unchanged, that scalar multiplication distributes over vector sums, that scalar sums distribute over one vector, and that scalar multiplication is associative.

## Rules

For every \(\mathbf u,\mathbf v,\mathbf w\in V\) and every \(\lambda,\mu\in\mathbb R\), a real vector space obeys these rules.

<Equation label="Addition commutativity" tex="\mathbf u+\mathbf v=\mathbf v+\mathbf u" />

<Equation label="Addition associativity" tex="(\mathbf u+\mathbf v)+\mathbf w=\mathbf u+(\mathbf v+\mathbf w)" />

<Equation label="Additive identity" tex="\mathbf v+\mathbf 0=\mathbf v=\mathbf 0+\mathbf v" />

<Equation label="Additive inverse" tex="\mathbf v+(-\mathbf v)=\mathbf 0" />

<Equation label="Unit scalar" tex="1\mathbf v=\mathbf v" />

<Equation label="Scalar distribution over vector sums" tex="\lambda(\mathbf u+\mathbf v)=\lambda\mathbf u+\lambda\mathbf v" />

<Equation label="Scalar-sum distribution over a vector" tex="(\lambda+\mu)\mathbf v=\lambda\mathbf v+\mu\mathbf v" />

<Equation label="Scalar associativity" tex="(\lambda\mu)\mathbf v=\lambda(\mu\mathbf v)" />

Closure is also required: \(\mathbf u+\mathbf v\in V\) and \(\lambda\mathbf v\in V\). Without closure, the algebraic rules do not make the collection into a vector space.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Do displacements in a plane form a vector space over \\(\\mathbb R\\)?",
      answer: "Yes. Plane displacements can be added, scaled by real numbers, and represented by elements of \\(\\mathbb R^2\\). The zero displacement is \\(\\mathbf 0\\), and every displacement has an opposite displacement as its additive inverse.",
    },
    {
      title: "Example 2",
      question: "Why is three-dimensional physical space modelled by \\(\\mathbb R^3\\)?",
      answer: "A position or displacement vector in three-dimensional space has three real components. Adding two such vectors or multiplying one by a real scalar gives another vector with three real components, so the model is closed under the operations.",
    },
    {
      title: "Example 3",
      question: "Let \\(C\\) be the collection of all arrows in the plane with length exactly 1. Is \\(C\\) a vector space?",
      answer: "No. Adding two length-1 arrows can give an arrow with length 2, length 0, or another length depending on their directions. Since the sum can leave \\(C\\), closure under addition fails.",
    },
  ]}
/>

## Checks

- Vector spaces are defined by their operations and rules, not by whether the objects are drawn as arrows.
- Scalars must come from the stated field. In this course, the field is usually \(\mathbb R\).
- A closure failure disqualifies a candidate vector space, even if some of the algebraic rules happen to work for some examples.`;
