export const content = String.raw`## Principle

The span of a list of vectors is the set of all linear combinations of those vectors. If a list spans a vector space, every vector in the space can be built from that list.

In physics, a spanning set describes all states, motions, or component combinations a linear model can produce. If the available directions do not span the target space, some physical configurations cannot be represented.

## Notation

<Notation
  items={[
    { symbol: "\\operatorname{span}", meaning: "the set of all linear combinations of a list of vectors" },
    { symbol: "\\mathbf v_1,\\ldots,\\mathbf v_k", meaning: "the vectors being used to form combinations" },
    { symbol: "c_i", meaning: "a scalar coefficient multiplying \\mathbf v_i" },
    { symbol: "\\mathbf x", meaning: "a target vector to test against the span" },
    { symbol: "c_1\\mathbf v_1+\\cdots+c_k\\mathbf v_k", meaning: "a general linear combination" },
  ]}
/>

A span always contains the zero vector because every coefficient can be chosen as zero.

## Method

1. Write the target vector as \(\mathbf x=c_1\mathbf v_1+\cdots+c_k\mathbf v_k\).
2. Convert the vector equation into simultaneous equations for the coefficients.
3. Solve the system.
4. If a solution exists, \(\mathbf x\) lies in the span.
5. To prove the list spans a whole space, show that every possible target vector in that space can be written this way.

## Rules

<Equation label="Span definition" tex="\operatorname{span}\{\mathbf v_1,\ldots,\mathbf v_k\}=\{c_1\mathbf v_1+\cdots+c_k\mathbf v_k:c_i\in\mathbb R\}" />

<Equation label="Standard span" tex="(x,y)=x(1,0)+y(0,1)" />

<Equation label="One-vector span" tex="\operatorname{span}\{(1,2)\}=\{t(1,2):t\in\mathbb R\}" />

- A span is always a subspace.
- Adding a vector that is already in the span does not change the span.
- The standard coordinate vectors span \(\mathbb R^n\).
- One non-zero vector spans a line through the origin, not the whole plane or three-dimensional space.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Why do \\((1,0)\\) and \\((0,1)\\) span \\(\\mathbb R^2\\)?",
      answer: "Take any vector \\((x,y)\\in\\mathbb R^2\\). It can be written as \\(x(1,0)+y(0,1)=(x,0)+(0,y)=(x,y)\\). Since every vector \\((x,y)\\) has this form, the two standard vectors span \\(\\mathbb R^2\\).",
    },
    {
      title: "Example 2",
      question: "What is \\(\\operatorname{span}\\{(1,2)\\}\\)?",
      answer: "Every vector in the span has the form \\(t(1,2)=(t,2t)\\). These are exactly the points on the line through the origin with direction \\((1,2)\\). The span is a line, not all of \\(\\mathbb R^2\\).",
    },
  ]}
/>

## Checks

- To prove a list spans a whole space, test a general target vector, not one convenient vector.
- Keep coefficient variables separate from vector components.
- Remember that spans pass through the origin.
- A spanning set may contain redundant vectors; spanning alone does not imply independence.`;
