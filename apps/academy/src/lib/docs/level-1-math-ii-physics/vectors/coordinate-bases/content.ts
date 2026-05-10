export const content = String.raw`## Principle

Cartesian coordinates describe a point or position vector by measuring signed distances along perpendicular axes. In three-dimensional space, the Cartesian basis vectors \(\mathbf i\), \(\mathbf j\), and \(\mathbf k\) point one unit along the \(x\)-axis, \(y\)-axis, and \(z\)-axis.

A basis is an ordered list of vectors that lets every vector in the space be written in exactly one way as a linear combination of those basis vectors. The same vector can have different components when a different basis is used.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf i", meaning: "the unit vector in the positive x-direction of a Cartesian coordinate system" },
    { symbol: "\\mathbf j", meaning: "the unit vector in the positive y-direction of a Cartesian coordinate system" },
    { symbol: "\\mathbf k", meaning: "the unit vector in the positive z-direction of a Cartesian coordinate system" },
    { symbol: "x", meaning: "the signed component of a vector along \\mathbf i" },
    { symbol: "y", meaning: "the signed component of a vector along \\mathbf j" },
    { symbol: "z", meaning: "the signed component of a vector along \\mathbf k" },
    { symbol: "\\mathbf p", meaning: "a position vector or vector written with Cartesian components" },
    { symbol: "D", meaning: "the dimension of the vector space, meaning the number of vectors in a basis" },
    { symbol: "\\{\\mathbf e_1,\\ldots,\\mathbf e_D\\}", meaning: "an ordered basis with D basis vectors" },
    { symbol: "u_i", meaning: "the coordinate scalar multiplying the basis vector \\mathbf e_i" },
    { symbol: "\\mathbf u", meaning: "a vector expressed in the ordered basis \\{\\mathbf e_1,\\ldots,\\mathbf e_D\\}" },
  ]}
/>

The ordered basis \(\{\mathbf e_1,\ldots,\mathbf e_D\}\) has an order: \(\mathbf e_1\) is first, \(\mathbf e_2\) is second, and so on. Changing that order changes the meaning of a coordinate list.

## Method

### Step 1: Choose the coordinate system

Choose an origin \(O\), choose perpendicular axes, and choose one unit length on each axis. In a standard Cartesian system, \(\mathbf i\), \(\mathbf j\), and \(\mathbf k\) are unit vectors along those axes.

### Step 2: Write the vector from its components

If \(\mathbf p\) has signed Cartesian components \(x\), \(y\), and \(z\), write

<Equation label="Cartesian decomposition" tex="\mathbf p=x\mathbf i+y\mathbf j+z\mathbf k" />

The coordinate triple is written as

<Equation label="Coordinate triple" tex="\mathbf p=(x,y,z)" />

### Step 3: Compute magnitude from components

First apply Pythagoras in the \(xy\) plane. The projection of \(\mathbf p\) into the \(xy\) plane has legs \(x\) and \(y\), so its length \(r\) satisfies

<PhysicsDerivation
  items={[
    { label: "Length in the xy plane", tex: "r^2=x^2+y^2" },
    { label: "Plane length", tex: "r=\\sqrt{x^2+y^2}" },
  ]}
/>

Then apply Pythagoras again, using the \(xy\)-plane length \(r\) and the vertical component \(z\):

<PhysicsDerivation
  items={[
    { label: "Three-dimensional length", tex: "|\\mathbf p|^2=r^2+z^2" },
    { label: "Substitute the plane result", tex: "|\\mathbf p|^2=(x^2+y^2)+z^2" },
    { label: "Collect terms", tex: "|\\mathbf p|^2=x^2+y^2+z^2" },
    { label: "Take the non-negative square root", tex: "|\\mathbf p|=\\sqrt{x^2+y^2+z^2}" },
  ]}
/>

### Step 4: Test whether proposed basis coefficients are unique

For a proposed ordered basis \(\{\mathbf e_1,\ldots,\mathbf e_D\}\), ask whether every vector \(\mathbf u\) can be written in one and only one way as

<Equation label="General basis expansion" tex="\mathbf u=\sum_{i=1}^D u_i\mathbf e_i" />

In \(\mathbb R^2\), the ordered Cartesian basis \(\{(1,0),(0,1)\}\) gives unique coefficients. Suppose

<Equation label="Two expressions in the Cartesian basis" tex="u_1(1,0)+u_2(0,1)=v_1(1,0)+v_2(0,1)" />

Compute each side component by component:

<PhysicsDerivation
  items={[
    { label: "Left side", tex: "u_1(1,0)+u_2(0,1)=(u_1,0)+(0,u_2)=(u_1,u_2)" },
    { label: "Right side", tex: "v_1(1,0)+v_2(0,1)=(v_1,0)+(0,v_2)=(v_1,v_2)" },
    { label: "Equate components", tex: "(u_1,u_2)=(v_1,v_2)" },
    { label: "First component", tex: "u_1=v_1" },
    { label: "Second component", tex: "u_2=v_2" },
  ]}
/>

Since matching vector expressions force matching coefficients, the coefficients are unique.

For the ordered basis \(\{(1,0),(1,1)\}\), convert \((x,y)\) by solving

<Equation label="Non-standard basis equation" tex="(x,y)=u_1(1,0)+u_2(1,1)" />

Work component by component:

<PhysicsDerivation
  items={[
    { label: "Expand the right side", tex: "u_1(1,0)+u_2(1,1)=(u_1,0)+(u_2,u_2)" },
    { label: "Add components", tex: "u_1(1,0)+u_2(1,1)=(u_1+u_2,u_2)" },
    { label: "Equate to (x,y)", tex: "(x,y)=(u_1+u_2,u_2)" },
    { label: "Second component", tex: "y=u_2" },
    { label: "First component", tex: "x=u_1+u_2" },
    { label: "Substitute u_2=y", tex: "x=u_1+y" },
    { label: "Solve for u_1", tex: "u_1=x-y" },
  ]}
/>

Thus the coordinate scalars in this ordered basis are \(u_2=y\) and \(u_1=x-y\).

## Rules

<Equation label="Coordinate triple" tex="\mathbf p=(x,y,z)" />

<Equation label="Magnitude from Cartesian components" tex="|\mathbf p|=\sqrt{x^2+y^2+z^2}" />

<Equation label="Cartesian basis expansion" tex="\mathbf p=x\mathbf i+y\mathbf j+z\mathbf k" />

<Equation label="Basis expansion in dimension D" tex="\mathbf u=\sum_{i=1}^D u_i\mathbf e_i" />

The coordinate scalars \(u_i\) are tied to the chosen ordered basis. If the basis changes, the numbers \(u_i\) can change even when the vector \(\mathbf u\) does not change.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the magnitude of the vector \\((0,3,-4)\\).",
      answer: "Use \\(|\\mathbf p|=\\sqrt{x^2+y^2+z^2}\\). Here \\(x=0\\), \\(y=3\\), and \\(z=-4\\), so \\(|\\mathbf p|=\\sqrt{0^2+3^2+(-4)^2}=\\sqrt{0+9+16}=\\sqrt{25}=5\\).",
    },
    {
      title: "Example 2",
      question: "Decompose the vector \\((x,y,z)\\) in the Cartesian basis.",
      answer: "The Cartesian basis is \\(\\{\\mathbf i,\\mathbf j,\\mathbf k\\}\\), so the decomposition is \\((x,y,z)=x\\mathbf i+y\\mathbf j+z\\mathbf k\\).",
    },
    {
      title: "Example 3",
      question: "What are the Cartesian coordinates of the zero vector in \\(\\mathbb R^3\\)?",
      answer: "The zero vector has no displacement along any Cartesian axis, so its coordinates are \\(0,0,0\\). Equivalently, \\(\\mathbf 0=0\\mathbf i+0\\mathbf j+0\\mathbf k\\).",
    },
  ]}
/>

## Checks

- Basis order matters: \((a,b)\) in \(\{\mathbf e_1,\mathbf e_2\}\) means \(a\mathbf e_1+b\mathbf e_2\), not \(a\mathbf e_2+b\mathbf e_1\).
- Components depend on the basis, so the same vector can have different coordinate scalars in different bases.
- A basis for \(\mathbb R^3\) needs three linearly independent vectors; fewer vectors cannot express every vector in \(\mathbb R^3\), and dependent vectors do not give unique coefficients.`;
