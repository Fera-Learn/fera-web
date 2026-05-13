export const content = String.raw`## Principle

A vector space is a set where vectors can be added and multiplied by scalars without leaving the set. The word vector does not only mean an arrow in space: coordinate lists, functions, matrices, and physical states can all be vectors when they obey the same algebraic rules.

For physics, vector spaces let us combine allowed states, displacements, fields, or solutions. If two states are allowed and any real multiple of an allowed state is still allowed, linear methods become available.

## Notation

<Notation
  items={[
    { symbol: "V", meaning: "a candidate vector space" },
    { symbol: "\\mathbb R", meaning: "the real scalar field used in this course" },
    { symbol: "\\mathbf u", meaning: "a vector in V" },
    { symbol: "\\mathbf v", meaning: "another vector in V" },
    { symbol: "\\mathbf w", meaning: "a third vector in V" },
    { symbol: "\\mathbf 0", meaning: "the zero vector, the additive identity in V" },
    { symbol: "-\\mathbf v", meaning: "the additive inverse of \\mathbf v" },
    { symbol: "\\lambda", meaning: "a real scalar" },
    { symbol: "\\mu", meaning: "another real scalar" },
    { symbol: "\\lambda\\mathbf v", meaning: "the scalar multiple of \\mathbf v by \\lambda" },
    { symbol: "closure", meaning: "the property that an operation produces another object inside the same set" },
  ]}
/>

Closure under addition means \(\mathbf u+\mathbf v\) stays in \(V\) whenever \(\mathbf u\) and \(\mathbf v\) are in \(V\). Closure under scalar multiplication means \(\lambda\mathbf v\) stays in \(V\) whenever \(\lambda\in\mathbb R\) and \(\mathbf v\in V\).

## Method

1. State the candidate set \(V\) and the scalar field, usually \(\mathbb R\).
2. Take arbitrary vectors \(\mathbf u,\mathbf v\in V\) and test whether \(\mathbf u+\mathbf v\in V\).
3. Take an arbitrary scalar \(\lambda\in\mathbb R\) and vector \(\mathbf v\in V\), then test whether \(\lambda\mathbf v\in V\).
4. Identify the zero vector \(\mathbf 0\) and check that it belongs to \(V\).
5. Check that every vector has an additive inverse inside \(V\).
6. Check that the usual associative and distributive scalar rules hold for the operations being used.

## Rules

<Equation label="Closure under addition" tex="\mathbf u,\mathbf v\in V\quad\Rightarrow\quad \mathbf u+\mathbf v\in V" />

<Equation label="Closure under scalar multiplication" tex="\lambda\in\mathbb R,\ \mathbf v\in V\quad\Rightarrow\quad \lambda\mathbf v\in V" />

<Equation label="Addition commutativity" tex="\mathbf u+\mathbf v=\mathbf v+\mathbf u" />

<Equation label="Addition associativity" tex="(\mathbf u+\mathbf v)+\mathbf w=\mathbf u+(\mathbf v+\mathbf w)" />

<Equation label="Additive identity" tex="\mathbf v+\mathbf 0=\mathbf v" />

<Equation label="Additive inverse" tex="\mathbf v+(-\mathbf v)=\mathbf 0" />

<Equation label="Scalar identity" tex="1\mathbf v=\mathbf v" />

<Equation label="Scalar associativity" tex="(\lambda\mu)\mathbf v=\lambda(\mu\mathbf v)" />

<Equation label="Distributive law" tex="\lambda(\mathbf u+\mathbf v)=\lambda\mathbf u+\lambda\mathbf v" />

<Equation label="Scalar-sum distributive law" tex="(\lambda+\mu)\mathbf v=\lambda\mathbf v+\mu\mathbf v" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Why is \\(\\mathbb R^2\\) a vector space over \\(\\mathbb R\\)?",
      answer: "Take \\(\\mathbf u=(u_1,u_2)\\), \\(\\mathbf v=(v_1,v_2)\\), and \\(\\lambda\\in\\mathbb R\\). Then \\(\\mathbf u+\\mathbf v=(u_1+v_1,u_2+v_2)\\), which is still in \\(\\mathbb R^2\\). Also \\(\\lambda\\mathbf v=(\\lambda v_1,\\lambda v_2)\\), which is still in \\(\\mathbb R^2\\). The zero vector is \\((0,0)\\), and the inverse of \\((v_1,v_2)\\) is \\((-v_1,-v_2)\\).",
    },
    {
      title: "Example 2",
      question: "Do all unit vectors in \\(\\mathbb R^2\\) form a vector space?",
      answer: "No. Let \\(\\mathbf e_1=(1,0)\\). It has length 1, but \\(2\\mathbf e_1=(2,0)\\) has length 2, so scalar multiplication leaves the set. Also \\(\\mathbf e_1+\\mathbf e_1=(2,0)\\) is not a unit vector, so addition closure fails.",
    },
  ]}
/>

## Checks

- State the scalar field before testing vector-space rules.
- Test closure for arbitrary vectors and arbitrary allowed scalars, not just one example.
- Check that the zero vector belongs to the set.
- Do not rely only on arrow diagrams; the operations define the vector-space structure.`;
