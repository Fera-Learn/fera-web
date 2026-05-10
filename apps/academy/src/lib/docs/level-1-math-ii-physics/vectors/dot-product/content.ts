export const content = String.raw`## Principle

The dot product, also called the scalar product, combines two vectors and outputs a scalar. Geometrically, it measures how much two vectors point in the same direction.

For non-zero vectors \(\mathbf a\) and \(\mathbf b\), if the angle between them is \(\theta\), then

<Equation label="Geometric dot product" tex="\mathbf a\cdot\mathbf b=|\mathbf a||\mathbf b|\cos\theta" />

Componentwise, when \(\mathbf a\) and \(\mathbf b\) are written in the same Cartesian coordinate system, multiply matching components and add the products.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf a\\cdot\\mathbf b", meaning: "the dot product of vectors \\mathbf a and \\mathbf b" },
    { symbol: "\\mathbf c", meaning: "an additional vector in the same vector space as \\mathbf a and \\mathbf b" },
    { symbol: "\\lambda,\\mu", meaning: "scalars" },
    { symbol: "|\\mathbf a|", meaning: "the magnitude of \\mathbf a" },
    { symbol: "|\\mathbf b|", meaning: "the magnitude of \\mathbf b" },
    { symbol: "\\theta", meaning: "the angle from \\mathbf a to \\mathbf b, measured between their directions when both vectors are non-zero" },
    { symbol: "\\mathbf a\\perp\\mathbf b", meaning: "\\mathbf a and \\mathbf b are orthogonal, meaning perpendicular" },
    { symbol: "a_i", meaning: "component i of \\mathbf a in a chosen Cartesian basis" },
    { symbol: "b_i", meaning: "component i of \\mathbf b in the same Cartesian basis" },
    { symbol: "\\mathbf i,\\mathbf j,\\mathbf k", meaning: "Cartesian unit basis vectors in the x, y, and z directions" },
    { symbol: "\\operatorname{proj}_{\\mathbf b}\\mathbf a", meaning: "the vector projection of \\mathbf a onto the direction of non-zero vector \\mathbf b" },
  ]}
/>

A projection is the part of one vector in the direction of another. The scalar projection of \(\mathbf a\) onto non-zero \(\mathbf b\) is \( |\mathbf a|\cos\theta \), and the dot product equals this scalar projection multiplied by \( |\mathbf b| \).

Orthogonal vectors meet at a right angle. For non-zero vectors, this means \(\theta=\frac\{\pi\}\{2\}\).

## Method

### Step 1: Choose the available form

If magnitudes and the angle are known, use the geometric formula:

<Equation label="Magnitude-angle formula" tex="\mathbf a\cdot\mathbf b=|\mathbf a||\mathbf b|\cos\theta" />

If Cartesian components are known in the same basis, use the component formula:

<Equation label="Three-dimensional component formula" tex="\mathbf a\cdot\mathbf b=a_1b_1+a_2b_2+a_3b_3" />

### Step 2: Compute from magnitudes and angle

Let \( |\mathbf a|=A \), \( |\mathbf b|=B \), and \(\theta=\phi\), then evaluate \(\cos\phi\):

<PhysicsDerivation
  items={[
    { label: "Start with the geometric formula", tex: "\\mathbf a\\cdot\\mathbf b=|\\mathbf a||\\mathbf b|\\cos\\theta" },
    { label: "Use placeholders for the known values", tex: "|\\mathbf a|=A,\quad |\\mathbf b|=B,\quad \\theta=\\phi" },
    { label: "Substitute the placeholders", tex: "\\mathbf a\\cdot\\mathbf b=AB\\cos\\phi" },
    { label: "Evaluate the cosine value", tex: "\\mathbf a\\cdot\\mathbf b=AB(\\cos\\phi)" },
  ]}
/>

### Step 3: Compute from Cartesian components

Write both vectors in the same Cartesian basis:

<PhysicsDerivation
  items={[
    { label: "First vector", tex: "\\mathbf a=a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k" },
    { label: "Second vector", tex: "\\mathbf b=b_1\\mathbf i+b_2\\mathbf j+b_3\\mathbf k" },
    { label: "Multiply matching components and add", tex: "\\mathbf a\\cdot\\mathbf b=a_1b_1+a_2b_2+a_3b_3" },
  ]}
/>

The result is one scalar, not a vector.

## Rules

<Equation label="Commutativity" tex="\mathbf a\cdot\mathbf b=\mathbf b\cdot\mathbf a" />

<Equation label="Self dot product" tex="\mathbf a\cdot\mathbf a=|\mathbf a|^2" />

<Equation label="Linearity in the first input" tex="(\lambda\mathbf a+\mu\mathbf c)\cdot\mathbf b=\lambda(\mathbf a\cdot\mathbf b)+\mu(\mathbf c\cdot\mathbf b)" />

<Equation label="Linearity in the second input" tex="\mathbf a\cdot(\lambda\mathbf b+\mu\mathbf c)=\lambda(\mathbf a\cdot\mathbf b)+\mu(\mathbf a\cdot\mathbf c)" />

<Equation label="Orthogonality criterion" tex="\mathbf a,\mathbf b\ne\mathbf 0:\quad \mathbf a\perp\mathbf b\Longleftrightarrow\mathbf a\cdot\mathbf b=0" />

The orthogonality criterion requires both vectors to be non-zero. The zero vector has zero dot product with every vector but has no unique direction.

For non-zero \(\mathbf b\), the vector projection of \(\mathbf a\) onto \(\mathbf b\) is

<Equation label="Vector projection" tex="\operatorname{proj}_{\mathbf b}\mathbf a=\frac{\mathbf a\cdot\mathbf b}{|\mathbf b|^2}\mathbf b" />

### Component formula from basis products

Use bilinearity, which means the dot product distributes over vector addition and scalar multiplication in each input. In the Cartesian basis,

<Equation label="Unit basis dot products" tex="\mathbf i\cdot\mathbf i=\mathbf j\cdot\mathbf j=\mathbf k\cdot\mathbf k=1" />

and the mixed basis dot products are zero:

<Equation label="Mixed basis dot products" tex="\mathbf i\cdot\mathbf j=\mathbf i\cdot\mathbf k=\mathbf j\cdot\mathbf i=\mathbf j\cdot\mathbf k=\mathbf k\cdot\mathbf i=\mathbf k\cdot\mathbf j=0" />

If \(\mathbf a=a_1\mathbf i+a_2\mathbf j+a_3\mathbf k\) and \(\mathbf b=b_1\mathbf i+b_2\mathbf j+b_3\mathbf k\), then

<PhysicsDerivation
  items={[
    { label: "Start from Cartesian expansions", tex: "\\mathbf a\\cdot\\mathbf b=(a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k)\\cdot(b_1\\mathbf i+b_2\\mathbf j+b_3\\mathbf k)" },
    { label: "Distribute over the second input", tex: "\\mathbf a\\cdot\\mathbf b=(a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k)\\cdot b_1\\mathbf i+(a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k)\\cdot b_2\\mathbf j+(a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k)\\cdot b_3\\mathbf k" },
    { label: "Move scalars out", tex: "\\mathbf a\\cdot\\mathbf b=b_1(a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k)\\cdot\\mathbf i+b_2(a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k)\\cdot\\mathbf j+b_3(a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k)\\cdot\\mathbf k" },
    { label: "Distribute over the first input", tex: "\\mathbf a\\cdot\\mathbf b=b_1(a_1\\mathbf i\\cdot\\mathbf i+a_2\\mathbf j\\cdot\\mathbf i+a_3\\mathbf k\\cdot\\mathbf i)+b_2(a_1\\mathbf i\\cdot\\mathbf j+a_2\\mathbf j\\cdot\\mathbf j+a_3\\mathbf k\\cdot\\mathbf j)+b_3(a_1\\mathbf i\\cdot\\mathbf k+a_2\\mathbf j\\cdot\\mathbf k+a_3\\mathbf k\\cdot\\mathbf k)" },
    { label: "Use basis dot products", tex: "\\mathbf a\\cdot\\mathbf b=b_1(a_1\\cdot1+a_2\\cdot0+a_3\\cdot0)+b_2(a_1\\cdot0+a_2\\cdot1+a_3\\cdot0)+b_3(a_1\\cdot0+a_2\\cdot0+a_3\\cdot1)" },
    { label: "Simplify each bracket", tex: "\\mathbf a\\cdot\\mathbf b=b_1a_1+b_2a_2+b_3a_3" },
    { label: "Reorder scalar products", tex: "\\mathbf a\\cdot\\mathbf b=a_1b_1+a_2b_2+a_3b_3" },
  ]}
/>

### Cosine rule from the dot product

Let \(\theta\) be the angle between non-zero \(\mathbf a\) and \(\mathbf b\). Start with the squared magnitude of \(\mathbf a-\mathbf b\), expand it using the dot product, then substitute the geometric definition of \(\mathbf a\cdot\mathbf b\):

<PhysicsDerivation
  items={[
    { label: "Start with squared magnitude", tex: "|\\mathbf a-\\mathbf b|^2=(\\mathbf a-\\mathbf b)\\cdot(\\mathbf a-\\mathbf b)" },
    { label: "Distribute over the second input", tex: "(\\mathbf a-\\mathbf b)\\cdot(\\mathbf a-\\mathbf b)=(\\mathbf a-\\mathbf b)\\cdot\\mathbf a-(\\mathbf a-\\mathbf b)\\cdot\\mathbf b" },
    { label: "Distribute over the first input in both terms", tex: "(\\mathbf a-\\mathbf b)\\cdot\\mathbf a-(\\mathbf a-\\mathbf b)\\cdot\\mathbf b=\\mathbf a\\cdot\\mathbf a-\\mathbf b\\cdot\\mathbf a-\\mathbf a\\cdot\\mathbf b+\\mathbf b\\cdot\\mathbf b" },
    { label: "Use commutativity", tex: "\\mathbf a\\cdot\\mathbf a-\\mathbf b\\cdot\\mathbf a-\\mathbf a\\cdot\\mathbf b+\\mathbf b\\cdot\\mathbf b=\\mathbf a\\cdot\\mathbf a-\\mathbf a\\cdot\\mathbf b-\\mathbf a\\cdot\\mathbf b+\\mathbf b\\cdot\\mathbf b" },
    { label: "Combine like terms", tex: "|\\mathbf a-\\mathbf b|^2=\\mathbf a\\cdot\\mathbf a-2\\mathbf a\\cdot\\mathbf b+\\mathbf b\\cdot\\mathbf b" },
    { label: "Substitute self dot products", tex: "|\\mathbf a-\\mathbf b|^2=|\\mathbf a|^2-2\\mathbf a\\cdot\\mathbf b+|\\mathbf b|^2" },
    { label: "Substitute the geometric dot product", tex: "|\\mathbf a-\\mathbf b|^2=|\\mathbf a|^2-2|\\mathbf a||\\mathbf b|\\cos\\theta+|\\mathbf b|^2" },
    { label: "Reorder scalar terms", tex: "|\\mathbf a-\\mathbf b|^2=|\\mathbf a|^2+|\\mathbf b|^2-2|\\mathbf a||\\mathbf b|\\cos\\theta" },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Compute \\(\\mathbf a\\cdot\\mathbf b\\) when \\(|\\mathbf a|=1\\), \\(|\\mathbf b|=\\sqrt2\\), and \\(\\theta=\\pi/4\\).",
      answer: "Use \\(\\mathbf a\\cdot\\mathbf b=|\\mathbf a||\\mathbf b|\\cos\\theta\\). Substitute the values: \\(\\mathbf a\\cdot\\mathbf b=1\\cdot\\sqrt2\\cdot\\cos(\\pi/4)\\). Since \\(\\cos(\\pi/4)=\\sqrt2/2\\), \\(\\mathbf a\\cdot\\mathbf b=\\sqrt2\\cdot\\sqrt2/2=2/2=1\\).",
    },
    {
      title: "Example 2",
      question: "Compute \\((0,3,-4)\\cdot(1,-1,2)\\).",
      answer: "Use the component formula: \\((0,3,-4)\\cdot(1,-1,2)=0\\cdot1+3\\cdot(-1)+(-4)\\cdot2\\). Simplify each product: \\(0\\cdot1=0\\), \\(3\\cdot(-1)=-3\\), and \\((-4)\\cdot2=-8\\). Add them: \\(0-3-8=-11\\).",
    },
    {
      title: "Example 3",
      question: "Show that the diagonals of a rhombus with equal side lengths are perpendicular.",
      answer: "Let adjacent side vectors be \\(\\mathbf a\\) and \\(\\mathbf b\\), with \\(|\\mathbf a|=|\\mathbf b|\\). The diagonals are \\(\\mathbf a+\\mathbf b\\) and \\(\\mathbf a-\\mathbf b\\). Their dot product is \\((\\mathbf a+\\mathbf b)\\cdot(\\mathbf a-\\mathbf b)=\\mathbf a\\cdot\\mathbf a-\\mathbf a\\cdot\\mathbf b+\\mathbf b\\cdot\\mathbf a-\\mathbf b\\cdot\\mathbf b\\). Since \\(\\mathbf b\\cdot\\mathbf a=\\mathbf a\\cdot\\mathbf b\\), this becomes \\(|\\mathbf a|^2-\\mathbf a\\cdot\\mathbf b+\\mathbf a\\cdot\\mathbf b-|\\mathbf b|^2=|\\mathbf a|^2-|\\mathbf b|^2\\). Equal side lengths give \\(|\\mathbf a|^2-|\\mathbf b|^2=0\\), so the diagonals have dot product zero and are perpendicular.",
    },
  ]}
/>

## Checks

- The dot product outputs a scalar, not a vector.
- When using calculus conventions, the angle \(\theta\) must be measured in radians.
- A zero dot product means perpendicular only when both vectors are non-zero.`;
