export const content = String.raw`## Principle

The scalar triple product combines three vectors in \(\mathbb R^3\) and outputs one scalar:

<Equation label="Scalar triple product" tex="\mathbf a\cdot(\mathbf b\times\mathbf c)" />

The cross product \(\mathbf b\times\mathbf c\) is perpendicular to the base spanned by \(\mathbf b\) and \(\mathbf c\). Dotting that normal vector with \(\mathbf a\) measures how much \(\mathbf a\) points through the base. Orientation records whether the ordered triple follows the positive right-handed orientation or the opposite orientation. The result is an oriented volume: its magnitude is the physical volume, while its sign records orientation.

A parallelepiped is the three-dimensional solid formed by translating a parallelogram through a third edge direction. If its three edge vectors from one vertex are \(\mathbf a\), \(\mathbf b\), and \(\mathbf c\), then its physical volume is

<Equation label="Parallelepiped volume" tex="V=|\mathbf a\cdot(\mathbf b\times\mathbf c)|" />

## Notation

<Notation
  items={[
    { symbol: "(\\mathbf a,\\mathbf b,\\mathbf c)", meaning: "an ordered triple of vectors; the order is part of the data" },
    { symbol: "[\\mathbf a,\\mathbf b,\\mathbf c]", meaning: "bracket notation for the scalar triple product \\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)" },
    { symbol: "\\mathbf b\\times\\mathbf c", meaning: "the cross product of \\mathbf b and \\mathbf c, perpendicular to their spanned base" },
    { symbol: "\\theta", meaning: "the angle between \\mathbf a and the vector \\mathbf b\\times\\mathbf c" },
    { symbol: "|\\mathbf b\\times\\mathbf c|", meaning: "the base area of the parallelogram spanned by \\mathbf b and \\mathbf c" },
    { symbol: "|\\mathbf a|\\cos\\theta", meaning: "the signed height of \\mathbf a in the direction of \\mathbf b\\times\\mathbf c" },
    { symbol: "V", meaning: "physical volume, which is non-negative" },
    { symbol: "\\det(\\mathbf a,\\mathbf b,\\mathbf c)", meaning: "compact determinant notation for [\\mathbf a,\\mathbf b,\\mathbf c] when the vectors are columns in the same Cartesian basis" },
  ]}
/>

An ordered triple \((\mathbf a,\mathbf b,\mathbf c)\) keeps track of first, second, and third vector positions. Changing the order can change the sign of the scalar triple product.

The base area is the area of the parallelogram spanned by two chosen base vectors. The height is the perpendicular distance from the opposite face to the base plane.

## Method

### Step 1: Compute the base normal

Use the base vectors \(\mathbf b\) and \(\mathbf c\). If \(\mathbf b=(b_1,b_2,b_3)\) and \(\mathbf c=(c_1,c_2,c_3)\), then

<Equation label="Base normal" tex="\mathbf b\times\mathbf c=(b_2c_3-b_3c_2,\;b_3c_1-b_1c_3,\;b_1c_2-b_2c_1)" />

The magnitude \(|\mathbf b\times\mathbf c|\) is the base area, and the direction gives the oriented normal to the base.

### Step 2: Dot with the remaining edge

If \(\mathbf a=(a_1,a_2,a_3)\) and \(\mathbf b\times\mathbf c=(n_1,n_2,n_3)\), then

<PhysicsDerivation
  items={[
    { label: "Name the base normal", tex: "\\mathbf n=\\mathbf b\\times\\mathbf c=(n_1,n_2,n_3)" },
    { label: "Dot with the first edge", tex: "\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)=\\mathbf a\\cdot\\mathbf n" },
    { label: "Use the component dot product", tex: "\\mathbf a\\cdot\\mathbf n=a_1n_1+a_2n_2+a_3n_3" },
  ]}
/>

This scalar is positive, negative, or zero depending on the orientation of \((\mathbf a,\mathbf b,\mathbf c)\).

### Step 3: Take absolute value for physical volume

The oriented volume is \([\mathbf a,\mathbf b,\mathbf c]=\mathbf a\cdot(\mathbf b\times\mathbf c)\). The physical volume ignores orientation:

<Equation label="Physical volume" tex="V=|[\mathbf a,\mathbf b,\mathbf c]|=|\mathbf a\cdot(\mathbf b\times\mathbf c)|" />

## Rules

<Equation label="Bracket notation" tex="[\mathbf a,\mathbf b,\mathbf c]=\mathbf a\cdot(\mathbf b\times\mathbf c)" />

<Equation label="Cyclic equality" tex="[\mathbf a,\mathbf b,\mathbf c]=[\mathbf b,\mathbf c,\mathbf a]=[\mathbf c,\mathbf a,\mathbf b]" />

<Equation label="Swap reverses sign" tex="[\mathbf b,\mathbf a,\mathbf c]=-[\mathbf a,\mathbf b,\mathbf c]" />

<Equation label="Parallelepiped volume" tex="V=|\mathbf a\cdot(\mathbf b\times\mathbf c)|" />

<Equation label="Tetrahedron volume" tex="V=\frac{|\mathbf a\cdot(\mathbf b\times\mathbf c)|}{6}" />

The tetrahedron formula applies when \(\mathbf a\), \(\mathbf b\), and \(\mathbf c\) are the three edge vectors sharing one vertex of the tetrahedron.

When Cartesian components are written as columns in the same basis, determinant notation is a compact optional form:

<Equation label="Determinant form" tex="[\mathbf a,\mathbf b,\mathbf c]=\det\begin{pmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{pmatrix}" />

### Volume from base area and height

Let \(\theta\) be the angle between \(\mathbf a\) and \(\mathbf b\times\mathbf c\). The base area is \(|\mathbf b\times\mathbf c|\). The signed height is the scalar projection of \(\mathbf a\) onto the oriented normal direction, so it is \(|\mathbf a|\cos\theta\).

<PhysicsDerivation
  items={[
    { label: "Start with volume as base area times signed height", tex: "\\text{oriented volume}=|\\mathbf b\\times\\mathbf c|\\,|\\mathbf a|\\cos\\theta" },
    { label: "Reorder scalar factors", tex: "\\text{oriented volume}=|\\mathbf a|\\,|\\mathbf b\\times\\mathbf c|\\cos\\theta" },
    { label: "Use the geometric dot product", tex: "\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)=|\\mathbf a|\\,|\\mathbf b\\times\\mathbf c|\\cos\\theta" },
    { label: "Identify the scalar triple product", tex: "\\text{oriented volume}=\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)" },
    { label: "Remove orientation for physical volume", tex: "V=|\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)|" },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the volume of the parallelepiped with edge vectors \\(-3\\mathbf i+2\\mathbf j+2\\mathbf k\\), \\(\\mathbf i+2\\mathbf j+\\mathbf k\\), and \\(-\\mathbf i+\\mathbf j+3\\mathbf k\\).",
      answer: "Let \\(\\mathbf a=(-3,2,2)\\), \\(\\mathbf b=(1,2,1)\\), and \\(\\mathbf c=(-1,1,3)\\). First compute \\(\\mathbf b\\times\\mathbf c\\). The first component is \\(b_2c_3-b_3c_2=2\\cdot3-1\\cdot1=6-1=5\\). The second component is \\(b_3c_1-b_1c_3=1\\cdot(-1)-1\\cdot3=-1-3=-4\\). The third component is \\(b_1c_2-b_2c_1=1\\cdot1-2\\cdot(-1)=1+2=3\\). Thus \\(\\mathbf b\\times\\mathbf c=(5,-4,3)\\). Now dot with \\(\\mathbf a\\): \\(\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)=(-3)\\cdot5+2\\cdot(-4)+2\\cdot3=-15-8+6=-17\\). The physical volume is \\(V=|-17|=17\\).",
    },
    {
      title: "Example 2",
      question: "Find the volume of the tetrahedron whose three edge vectors from one vertex are the vectors in Example 1.",
      answer: "The parallelepiped from the same three edge vectors has physical volume \\(17\\). A tetrahedron using three edges that share one vertex occupies one sixth of that parallelepiped. Therefore \\(V=|\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)|/6=17/6\\).",
    },
    {
      title: "Example 3",
      question: "Decide whether \\(\\mathbf a=(1,2,3)\\), \\(\\mathbf b=(2,4,6)\\), and \\(\\mathbf c=(0,1,1)\\) are coplanar.",
      answer: "Compute \\(\\mathbf b\\times\\mathbf c\\). The first component is \\(4\\cdot1-6\\cdot1=4-6=-2\\). The second component is \\(6\\cdot0-2\\cdot1=0-2=-2\\). The third component is \\(2\\cdot1-4\\cdot0=2-0=2\\). Thus \\(\\mathbf b\\times\\mathbf c=(-2,-2,2)\\). Dot with \\(\\mathbf a\\): \\(\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)=1\\cdot(-2)+2\\cdot(-2)+3\\cdot2=-2-4+6=0\\). Since the scalar triple product is zero, the parallelepiped volume is zero, so the three vectors are coplanar.",
    },
  ]}
/>

## Checks

- The scalar triple product can be negative because it is an oriented volume.
- Physical volume is non-negative: use \(|\mathbf a\cdot(\mathbf b\times\mathbf c)|\), not the signed value alone.
- The order of vectors matters for orientation: swapping two vectors reverses the sign.`;
