export const content = String.raw`## Principle

A linear map is a function between vector spaces that preserves vector addition and scalar multiplication. It respects the structure that makes superposition possible.

<Equation label="Linearity" tex="T(a\mathbf u+b\mathbf v)=aT(\mathbf u)+bT(\mathbf v)" />

Linear maps are common in physics because many first models are linear: small displacements, rotations, projections, changes of coordinates, and linear response laws.

## Notation

<Notation
  items={[
    { symbol: "T:V\\to W", meaning: "map from vector space V to vector space W" },
    { symbol: "\\mathbf u,\\mathbf v", meaning: "vectors in the domain" },
    { symbol: "a,b", meaning: "scalars" },
    { symbol: "\\ker T", meaning: "vectors sent to the zero vector" },
    { symbol: "\\operatorname{im}T", meaning: "vectors reached as outputs" },
  ]}
/>

The domain is the input space. The codomain is the output space. A linear map may change dimension, but it must preserve linear combinations.

## Method

### Step 1: Check the zero vector

Every linear map sends the zero vector to the zero vector.

<Equation label="Zero vector test" tex="T(\mathbf 0)=\mathbf 0" />

### Step 2: Test a general linear combination

Use arbitrary scalars and arbitrary vectors. Showing the rule for only one or two sample vectors does not prove linearity.

<Equation label="General test" tex="T(a\mathbf u+b\mathbf v)=aT(\mathbf u)+bT(\mathbf v)" />

### Step 3: Interpret the geometry

After checking the algebra, describe what the map does: stretching, rotating, reflecting, projecting, shearing, or combining coordinates.

## Rules

<Equation label="Additivity" tex="T(\mathbf u+\mathbf v)=T(\mathbf u)+T(\mathbf v)" />

<Equation label="Homogeneity" tex="T(c\mathbf u)=cT(\mathbf u)" />

<Equation label="Kernel" tex="\ker T=\{\mathbf v:T(\mathbf v)=\mathbf 0\}" />

<Equation label="Image" tex="\operatorname{im}T=\{T(\mathbf v):\mathbf v\in V\}" />

Linearity is equivalent to additivity and homogeneity together.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Show that \\(T(x,y)=(2x-y,x+y)\\) is linear.",
      answer: "Each output component is a linear expression in \\(x\\) and \\(y\\) with no constant term. Substituting \\(a\\mathbf u+b\\mathbf v\\) gives \\(aT(\\mathbf u)+bT(\\mathbf v)\\).",
    },
    {
      title: "Example 2",
      question: "Is \\(S(x,y)=(x+1,y)\\) linear?",
      answer: "No. A linear map must send \\((0,0)\\) to \\((0,0)\\), but \\(S(0,0)=(1,0)\\). The constant shift breaks linearity.",
    },
    {
      title: "Example 3",
      question: "Why does linearity matter for small oscillations?",
      answer: "When a model is linear, independent small motions can be added. That is the algebraic form of superposition.",
    },
  ]}
/>

## Checks

- Check the zero vector before doing longer algebra.
- A constant shift usually breaks linearity.
- Linearity must hold for all vectors and scalars.
- Keep the domain and codomain clear when dimensions differ.`;
