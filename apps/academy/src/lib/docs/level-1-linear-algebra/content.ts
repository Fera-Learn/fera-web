const vectorsInRnContent = String.raw`## Principle

A vector in \(\mathbb R^n\) is an ordered list of \(n\) real numbers. The entries are called components. Linear algebra treats these lists as objects that can be added, scaled, compared, and used to encode geometry, systems of equations, and transformations.

For example, \((2,-1,4)\) is a vector in \(\mathbb R^3\). Its first component is \(2\), its second component is \(-1\), and its third component is \(4\).

## Notation

<Notation
  items={[
    { symbol: "\\mathbb R", meaning: "the set of real numbers" },
    { symbol: "\\mathbb R^n", meaning: "the set of all ordered lists of n real numbers" },
    { symbol: "\\mathbf v", meaning: "a vector" },
    { symbol: "v_i", meaning: "component i of the vector \\mathbf v" },
    { symbol: "(v_1,\\ldots,v_n)", meaning: "component form of a vector in \\mathbb R^n" },
    { symbol: "\\mathbf 0", meaning: "the zero vector, whose components are all zero" },
    { symbol: "\\mathbf e_i", meaning: "the coordinate vector with 1 in position i and 0 elsewhere" },
  ]}
/>

## The Core Method

To decide whether an object is a vector in \(\mathbb R^n\), check two things.

1. It must be an ordered list.
2. It must contain exactly \(n\) real components.

<Equation label="Vector in Rn" tex="\mathbf v=(v_1,v_2,\ldots,v_n)\in\mathbb R^n" />

Order matters. The vectors \((1,2,3)\) and \((3,2,1)\) are different because their first and third components are different.

Equality is component-by-component:

<Equation label="Vector equality" tex="(v_1,\ldots,v_n)=(w_1,\ldots,w_n)\Longleftrightarrow v_i=w_i\text{ for every }i" />

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Identify the ambient space",
      question: "Decide which real coordinate space contains the vector \\(\\mathbf v=(4,0,-2,7)\\).",
      answer: "The vector has four components: \\(4\\), \\(0\\), \\(-2\\), and \\(7\\). Therefore it belongs to \\(\\mathbb R^4\\). It is not a vector in \\(\\mathbb R^3\\), because \\(\\mathbb R^3\\) vectors have exactly three components.",
    },
    {
      title: "Use component equality",
      question: "Find \\(a\\) and \\(b\\) if \\((a,3,b)=(2,3,-5)\\).",
      answer: "Equal vectors have equal matching components. Compare the first components: \\(a=2\\). Compare the second components: \\(3=3\\), which is already true. Compare the third components: \\(b=-5\\). Therefore \\(a=2\\) and \\(b=-5\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Coordinate vectors",
      question: "Write the coordinate vector \\(\\mathbf e_3\\) in \\(\\mathbb R^5\\).",
      answer: "The vector \\(\\mathbf e_3\\) has a \\(1\\) in the third position and \\(0\\) everywhere else. In \\(\\mathbb R^5\\), this gives \\(\\mathbf e_3=(0,0,1,0,0)\\).",
    },
    {
      title: "Zero vector",
      question: "Write the zero vector in \\(\\mathbb R^4\\).",
      answer: "The zero vector has every component equal to zero. In \\(\\mathbb R^4\\), it is \\(\\mathbf 0=(0,0,0,0)\\). The symbol \\(\\mathbf 0\\) changes length depending on the space, so the surrounding context matters.",
    },
  ]}
/>`;

const vectorOperationsContent = String.raw`## Principle

Vector addition and scalar multiplication are the two basic operations in \(\mathbb R^n\). Addition combines vectors component-by-component. Scalar multiplication stretches, shrinks, or reverses a vector by multiplying every component by the same real number.

These two operations are the reason \(\mathbb R^n\) is a vector space.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf u,\\mathbf v,\\mathbf w", meaning: "vectors in the same \\mathbb R^n" },
    { symbol: "u_i,v_i,w_i", meaning: "matching components of the vectors" },
    { symbol: "\\lambda,\\mu", meaning: "real scalars" },
    { symbol: "\\mathbf u+\\mathbf v", meaning: "componentwise vector sum" },
    { symbol: "\\lambda\\mathbf v", meaning: "scalar multiple of \\mathbf v by \\lambda" },
    { symbol: "-\\mathbf v", meaning: "the vector obtained by multiplying \\mathbf v by -1" },
  ]}
/>

## The Core Method

Only add vectors that have the same number of components. If

<Equation label="Two vectors in Rn" tex="\mathbf u=(u_1,\ldots,u_n),\qquad \mathbf v=(v_1,\ldots,v_n)" />

then

<Equation label="Vector addition" tex="\mathbf u+\mathbf v=(u_1+v_1,\ldots,u_n+v_n)" />

and

<Equation label="Scalar multiplication" tex="\lambda\mathbf v=(\lambda v_1,\ldots,\lambda v_n)" />

A linear combination is any vector built by adding scalar multiples:

<Equation label="Linear combination" tex="\lambda\mathbf u+\mu\mathbf v" />

The scalars multiply the whole vector, not just one component.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Add and scale vectors",
      question: "Let \\(\\mathbf u=(2,-1,4)\\) and \\(\\mathbf v=(3,0,-5)\\). Compute \\(2\\mathbf u-\\mathbf v\\).",
      answer: "First scale \\(\\mathbf u\\): \\(2\\mathbf u=2(2,-1,4)=(4,-2,8)\\). Next subtract \\(\\mathbf v\\): \\(2\\mathbf u-\\mathbf v=(4,-2,8)-(3,0,-5)\\). Subtract component-by-component: \\((4-3,-2-0,8-(-5))=(1,-2,13)\\). Therefore \\(2\\mathbf u-\\mathbf v=(1,-2,13)\\).",
    },
    {
      title: "Detect an invalid operation",
      question: "Can \\((1,2,3)+(4,5)\\) be formed as a vector sum?",
      answer: "No. The first vector has three components, so it lies in \\(\\mathbb R^3\\). The second vector has two components, so it lies in \\(\\mathbb R^2\\). Componentwise addition requires the vectors to lie in the same coordinate space.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Linear combination",
      question: "For \\(\\mathbf a=(1,2)\\) and \\(\\mathbf b=(-3,5)\\), compute \\(3\\mathbf a+2\\mathbf b\\).",
      answer: "Compute each scalar multiple: \\(3\\mathbf a=(3,6)\\) and \\(2\\mathbf b=(-6,10)\\). Add them: \\(3\\mathbf a+2\\mathbf b=(3,6)+(-6,10)=(-3,16)\\).",
    },
    {
      title: "Reverse direction",
      question: "What is \\(-\\mathbf v\\) when \\(\\mathbf v=(6,-2,1)\\)?",
      answer: "Multiply every component by \\(-1\\): \\(-\\mathbf v=-(6,-2,1)=(-6,2,-1)\\). Adding the two vectors gives \\(\\mathbf v+(-\\mathbf v)=(0,0,0)\\), the zero vector in \\(\\mathbb R^3\\).",
    },
  ]}
/>`;

const scalarProductContent = String.raw`## Principle

The scalar product, also called the dot product, takes two vectors in \(\mathbb R^n\) and returns one real number. It measures alignment: positive values mean the vectors point partly in the same direction, negative values mean they point partly in opposite directions, and zero means they are orthogonal.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf u\\cdot\\mathbf v", meaning: "the scalar product of vectors \\mathbf u and \\mathbf v" },
    { symbol: "u_i,v_i", meaning: "matching components of \\mathbf u and \\mathbf v" },
    { symbol: "|\\mathbf v|", meaning: "the length or norm of \\mathbf v" },
    { symbol: "\\theta", meaning: "the angle between two non-zero vectors" },
    { symbol: "\\mathbf u\\perp\\mathbf v", meaning: "the vectors \\mathbf u and \\mathbf v are orthogonal" },
  ]}
/>

## The Core Method

For vectors in \(\mathbb R^n\), multiply matching components and add the products:

<Equation label="Scalar product" tex="\mathbf u\cdot\mathbf v=u_1v_1+u_2v_2+\cdots+u_nv_n" />

The scalar product is symmetric:

<Equation label="Symmetry" tex="\mathbf u\cdot\mathbf v=\mathbf v\cdot\mathbf u" />

It connects components to geometry by

<Equation label="Geometric scalar product" tex="\mathbf u\cdot\mathbf v=|\mathbf u|\,|\mathbf v|\cos\theta" />

when both vectors are non-zero. A zero scalar product is the algebraic test for orthogonality:

<Equation label="Orthogonality test" tex="\mathbf u\perp\mathbf v\Longleftrightarrow \mathbf u\cdot\mathbf v=0" />

This test treats the zero vector carefully: \(\mathbf 0\cdot\mathbf v=0\) for every \(\mathbf v\), but the zero vector has no direction.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Compute a scalar product",
      question: "Compute \\((2,-1,4)\\cdot(3,5,-2)\\).",
      answer: "Multiply matching components and add: \\((2,-1,4)\\cdot(3,5,-2)=2\\cdot3+(-1)\\cdot5+4\\cdot(-2)\\). Evaluate each product: \\(6-5-8=-7\\). Therefore the scalar product is \\(-7\\).",
    },
    {
      title: "Find an unknown from orthogonality",
      question: "Find \\(a\\) so that \\((a,2,1)\\) is orthogonal to \\((3,-4,5)\\).",
      answer: "Use the orthogonality condition. The scalar product must be zero: \\((a,2,1)\\cdot(3,-4,5)=0\\). Compute the scalar product: \\(3a+2(-4)+1(5)=0\\). Simplify: \\(3a-8+5=0\\), so \\(3a-3=0\\). Hence \\(3a=3\\), and \\(a=1\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Sign of alignment",
      question: "What does \\(\\mathbf u\\cdot\\mathbf v<0\\) tell you about two non-zero vectors?",
      answer: "Using \\(\\mathbf u\\cdot\\mathbf v=|\\mathbf u||\\mathbf v|\\cos\\theta\\), the lengths are positive, so the sign is controlled by \\(\\cos\\theta\\). If the scalar product is negative, then \\(\\cos\\theta<0\\), so \\(\\theta\\) is obtuse. The vectors point partly in opposite directions.",
    },
    {
      title: "Self product",
      question: "Compute \\(\\mathbf v\\cdot\\mathbf v\\) for \\(\\mathbf v=(-2,3,6)\\).",
      answer: "Compute matching products: \\(\\mathbf v\\cdot\\mathbf v=(-2)^2+3^2+6^2=4+9+36=49\\). This equals \\(|\\mathbf v|^2\\), the squared length of the vector.",
    },
  ]}
/>`;

const normsAndDistancesContent = String.raw`## Principle

The norm of a vector is its length. The distance between two vectors is the length of their difference. In \(\mathbb R^n\), both are computed from the scalar product and generalise the usual Pythagoras theorem.

## Notation

<Notation
  items={[
    { symbol: "|\\mathbf v|", meaning: "the norm or length of \\mathbf v" },
    { symbol: "\\mathbf v\\cdot\\mathbf v", meaning: "the scalar product of \\mathbf v with itself" },
    { symbol: "d(\\mathbf u,\\mathbf v)", meaning: "the distance between vectors \\mathbf u and \\mathbf v" },
    { symbol: "v_i", meaning: "component i of \\mathbf v" },
    { symbol: "\\hat{\\mathbf v}", meaning: "a unit vector in the direction of non-zero \\mathbf v" },
  ]}
/>

## The Core Method

The norm is the square root of the sum of squared components:

<Equation label="Norm" tex="|\mathbf v|=\sqrt{v_1^2+v_2^2+\cdots+v_n^2}" />

Equivalently,

<Equation label="Norm from scalar product" tex="|\mathbf v|^2=\mathbf v\cdot\mathbf v" />

The distance between \(\mathbf u\) and \(\mathbf v\) is

<Equation label="Distance" tex="d(\mathbf u,\mathbf v)=|\mathbf u-\mathbf v|" />

To turn a non-zero vector into a unit vector in the same direction, divide by its norm:

<Equation label="Unit vector" tex="\hat{\mathbf v}=\frac{1}{|\mathbf v|}\mathbf v" />

Do not divide by \(|\mathbf v|\) when \(\mathbf v=\mathbf 0\), because \(|\mathbf 0|=0\).

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Find a norm",
      question: "Find the norm of \\(\\mathbf v=(2,-3,6)\\).",
      answer: "Use \\(|\\mathbf v|=\\sqrt{v_1^2+v_2^2+v_3^2}\\). Substitute the components: \\(|\\mathbf v|=\\sqrt{2^2+(-3)^2+6^2}\\). Square each component: \\(2^2=4\\), \\((-3)^2=9\\), and \\(6^2=36\\). Add them: \\(4+9+36=49\\). Therefore \\(|\\mathbf v|=\\sqrt{49}=7\\).",
    },
    {
      title: "Find a distance",
      question: "Find the distance between \\(\\mathbf u=(1,4,-2)\\) and \\(\\mathbf v=(3,1,2)\\).",
      answer: "First subtract: \\(\\mathbf u-\\mathbf v=(1-3,4-1,-2-2)=(-2,3,-4)\\). The distance is the norm of this difference: \\(d(\\mathbf u,\\mathbf v)=|(-2,3,-4)|\\). Compute the norm: \\(\\sqrt{(-2)^2+3^2+(-4)^2}=\\sqrt{4+9+16}=\\sqrt{29}\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Make a unit vector",
      question: "Find a unit vector in the direction of \\(\\mathbf v=(3,4)\\).",
      answer: "First find the norm: \\(|\\mathbf v|=\\sqrt{3^2+4^2}=\\sqrt{25}=5\\). Divide by the norm: \\(\\hat{\\mathbf v}=\\frac{1}{5}(3,4)=(3/5,4/5)\\). Its norm is \\(\\sqrt{(3/5)^2+(4/5)^2}=\\sqrt{9/25+16/25}=1\\).",
    },
    {
      title: "Zero distance",
      question: "What does \\(d(\\mathbf u,\\mathbf v)=0\\) imply?",
      answer: "Distance is \\(d(\\mathbf u,\\mathbf v)=|\\mathbf u-\\mathbf v|\\). A norm is zero only when the vector is the zero vector. Therefore \\(|\\mathbf u-\\mathbf v|=0\\) implies \\(\\mathbf u-\\mathbf v=\\mathbf 0\\), so \\(\\mathbf u=\\mathbf v\\).",
    },
  ]}
/>`;

const anglesAndOrthogonalityContent = String.raw`## Principle

Angles in \(\mathbb R^n\) are defined using the scalar product. Two non-zero vectors are orthogonal when their angle is \(\pi/2\), which is equivalent to having scalar product zero.

Orthogonality is the algebraic version of perpendicularity.

## Notation

<Notation
  items={[
    { symbol: "\\theta", meaning: "the angle between two non-zero vectors, measured in radians" },
    { symbol: "\\cos\\theta", meaning: "cosine of the angle between the vectors" },
    { symbol: "\\mathbf u\\perp\\mathbf v", meaning: "\\mathbf u and \\mathbf v are orthogonal" },
    { symbol: "|\\mathbf u|,|\\mathbf v|", meaning: "norms of the vectors" },
    { symbol: "\\mathbf u\\cdot\\mathbf v", meaning: "scalar product" },
  ]}
/>

## The Core Test

For non-zero vectors \(\mathbf u\) and \(\mathbf v\), define the angle by

<Equation label="Angle formula" tex="\cos\theta=\frac{\mathbf u\cdot\mathbf v}{|\mathbf u|\,|\mathbf v|}" />

The orthogonality test is

<Equation label="Orthogonality" tex="\mathbf u\perp\mathbf v\Longleftrightarrow \mathbf u\cdot\mathbf v=0" />

The angle formula requires both vectors to be non-zero. If one vector is \(\mathbf 0\), the denominator is zero and the vector has no direction.

For non-zero vectors, the sign of the scalar product classifies the angle:

- \(\mathbf u\cdot\mathbf v>0\): acute angle.
- \(\mathbf u\cdot\mathbf v=0\): right angle.
- \(\mathbf u\cdot\mathbf v<0\): obtuse angle.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Find an angle",
      question: "Find the angle between \\(\\mathbf u=(1,1,0)\\) and \\(\\mathbf v=(1,0,1)\\).",
      answer: "Compute the scalar product: \\(\\mathbf u\\cdot\\mathbf v=1\\cdot1+1\\cdot0+0\\cdot1=1\\). Compute the norms: \\(|\\mathbf u|=\\sqrt{1^2+1^2+0^2}=\\sqrt2\\), and \\(|\\mathbf v|=\\sqrt{1^2+0^2+1^2}=\\sqrt2\\). Use the angle formula: \\(\\cos\\theta=1/(\\sqrt2\\sqrt2)=1/2\\). Therefore \\(\\theta=\\pi/3\\).",
    },
    {
      title: "Test orthogonality",
      question: "Are \\(\\mathbf a=(2,-1,3)\\) and \\(\\mathbf b=(1,5,1)\\) orthogonal?",
      answer: "Compute the scalar product: \\(\\mathbf a\\cdot\\mathbf b=2\\cdot1+(-1)\\cdot5+3\\cdot1=2-5+3=0\\). Both vectors are non-zero, and their scalar product is zero. Therefore they are orthogonal.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Classify without finding the angle",
      question: "Classify the angle between \\((1,2)\\) and \\((-3,1)\\) as acute, right, or obtuse.",
      answer: "Compute the scalar product: \\((1,2)\\cdot(-3,1)=1(-3)+2(1)=-3+2=-1\\). The scalar product is negative, so the cosine of the angle is negative. Therefore the angle is obtuse.",
    },
    {
      title: "Find a perpendicular vector",
      question: "Find a non-zero vector \\(\\mathbf v=(x,y)\\) orthogonal to \\(\\mathbf u=(4,-2)\\).",
      answer: "Orthogonality requires \\(\\mathbf u\\cdot\\mathbf v=0\\), so \\(4x-2y=0\\). Choose \\(x=1\\). Then \\(4-2y=0\\), so \\(y=2\\). One valid vector is \\(\\mathbf v=(1,2)\\).",
    },
  ]}
/>`;

const vectorProductContent = String.raw`## Principle

The vector product, also called the cross product, is defined for vectors in \(\mathbb R^3\). It takes two vectors and returns a new vector perpendicular to both. Its length measures the area of the parallelogram spanned by the two input vectors.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf u\\times\\mathbf v", meaning: "the vector product of \\mathbf u and \\mathbf v" },
    { symbol: "\\mathbf i,\\mathbf j,\\mathbf k", meaning: "standard coordinate vectors in \\mathbb R^3" },
    { symbol: "\\theta", meaning: "the angle between two non-zero vectors" },
    { symbol: "|\\mathbf u\\times\\mathbf v|", meaning: "area of the parallelogram spanned by \\mathbf u and \\mathbf v" },
    { symbol: "\\mathbf 0", meaning: "the zero vector" },
  ]}
/>

## The Core Method

For \(\mathbf u=(u_1,u_2,u_3)\) and \(\mathbf v=(v_1,v_2,v_3)\), compute

<Equation label="Cross product" tex="\mathbf u\times\mathbf v=(u_2v_3-u_3v_2,\;u_3v_1-u_1v_3,\;u_1v_2-u_2v_1)" />

The result is perpendicular to both inputs:

<Equation label="Perpendicular output" tex="(\mathbf u\times\mathbf v)\cdot\mathbf u=0,\qquad (\mathbf u\times\mathbf v)\cdot\mathbf v=0" />

Its length is

<Equation label="Cross product magnitude" tex="|\mathbf u\times\mathbf v|=|\mathbf u|\,|\mathbf v|\sin\theta" />

The order matters:

<Equation label="Anti-commutativity" tex="\mathbf u\times\mathbf v=-(\mathbf v\times\mathbf u)" />

Use the right-hand rule to choose the positive direction.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Compute a cross product",
      question: "Compute \\((1,2,3)\\times(4,-1,2)\\).",
      answer: "Use the component formula. The first component is \\(2\\cdot2-3\\cdot(-1)=4+3=7\\). The second component is \\(3\\cdot4-1\\cdot2=12-2=10\\). The third component is \\(1\\cdot(-1)-2\\cdot4=-1-8=-9\\). Therefore \\((1,2,3)\\times(4,-1,2)=(7,10,-9)\\).",
    },
    {
      title: "Check perpendicularity",
      question: "Show that \\(\\mathbf u\\times\\mathbf v=(7,10,-9)\\) is perpendicular to \\(\\mathbf u=(1,2,3)\\).",
      answer: "Compute the scalar product: \\((7,10,-9)\\cdot(1,2,3)=7\\cdot1+10\\cdot2+(-9)\\cdot3=7+20-27=0\\). Since the scalar product is zero, \\((7,10,-9)\\) is orthogonal to \\(\\mathbf u\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Basis vector products",
      question: "What are \\(\\mathbf i\\times\\mathbf j\\), \\(\\mathbf j\\times\\mathbf k\\), and \\(\\mathbf k\\times\\mathbf i\\)?",
      answer: "Using the standard right-handed coordinate system, \\(\\mathbf i\\times\\mathbf j=\\mathbf k\\), \\(\\mathbf j\\times\\mathbf k=\\mathbf i\\), and \\(\\mathbf k\\times\\mathbf i=\\mathbf j\\). Reversing the order changes the sign, so \\(\\mathbf j\\times\\mathbf i=-\\mathbf k\\).",
    },
    {
      title: "Parallel vectors",
      question: "What is \\(\\mathbf u\\times\\mathbf v\\) when non-zero \\(\\mathbf u\\) and \\(\\mathbf v\\) are parallel?",
      answer: "Parallel non-zero vectors have angle \\(0\\) or \\(\\pi\\). In both cases \\(\\sin\\theta=0\\). Since \\(|\\mathbf u\\times\\mathbf v|=|\\mathbf u||\\mathbf v|\\sin\\theta\\), the cross product has norm zero. Therefore \\(\\mathbf u\\times\\mathbf v=\\mathbf 0\\).",
    },
  ]}
/>`;

const planesInR3Content = String.raw`## Principle

A plane in \(\mathbb R^3\) is a flat two-dimensional set of points. It can be described by a point on the plane and a normal vector perpendicular to the plane, or by one point and two non-parallel direction vectors lying in the plane.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf r", meaning: "a variable position vector for a point on the plane" },
    { symbol: "\\mathbf r_0", meaning: "a fixed position vector for one known point on the plane" },
    { symbol: "\\mathbf n", meaning: "a normal vector perpendicular to the plane" },
    { symbol: "\\mathbf a,\\mathbf b", meaning: "direction vectors lying in the plane" },
    { symbol: "s,t", meaning: "real parameters" },
  ]}
/>

## The Core Method

Point-normal form says that the displacement from the fixed point to any point on the plane is perpendicular to the normal vector:

<Equation label="Point-normal plane" tex="(\mathbf r-\mathbf r_0)\cdot\mathbf n=0" />

If \(\mathbf r=(x,y,z)\), \(\mathbf r_0=(x_0,y_0,z_0)\), and \(\mathbf n=(A,B,C)\), this becomes

<Equation label="Cartesian plane" tex="A(x-x_0)+B(y-y_0)+C(z-z_0)=0" />

Parametric form uses two non-parallel direction vectors in the plane:

<Equation label="Parametric plane" tex="\mathbf r=\mathbf r_0+s\mathbf a+t\mathbf b" />

The normal vector can be found from the direction vectors by \(\mathbf n=\mathbf a\times\mathbf b\), provided \(\mathbf a\) and \(\mathbf b\) are not parallel.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Build a plane from a point and normal",
      question: "Find the equation of the plane through \\((1,-2,3)\\) with normal vector \\((2,1,-4)\\).",
      answer: "Use \\(A(x-x_0)+B(y-y_0)+C(z-z_0)=0\\). Here \\((x_0,y_0,z_0)=(1,-2,3)\\) and \\((A,B,C)=(2,1,-4)\\). Substitute: \\(2(x-1)+1(y+2)-4(z-3)=0\\). Expand: \\(2x-2+y+2-4z+12=0\\). Combine constants: \\(2x+y-4z+12=0\\).",
    },
    {
      title: "Find a normal from directions",
      question: "A plane has direction vectors \\(\\mathbf a=(1,0,2)\\) and \\(\\mathbf b=(0,3,-1)\\). Find a normal vector.",
      answer: "A normal vector is \\(\\mathbf a\\times\\mathbf b\\). Compute \\((1,0,2)\\times(0,3,-1)=(0\\cdot(-1)-2\\cdot3,2\\cdot0-1\\cdot(-1),1\\cdot3-0\\cdot0)\\). This is \\((-6,1,3)\\), so one normal vector is \\((-6,1,3)\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Check if a point lies on a plane",
      question: "Does \\((2,0,4)\\) lie on the plane \\(2x+y-4z+12=0\\)?",
      answer: "Substitute \\(x=2\\), \\(y=0\\), and \\(z=4\\): \\(2(2)+0-4(4)+12=4-16+12=0\\). Since the equation is satisfied, the point lies on the plane.",
    },
    {
      title: "Read a normal vector",
      question: "Find a normal vector to the plane \\(5x-2y+z=9\\).",
      answer: "For a plane \\(Ax+By+Cz=D\\), a normal vector is \\((A,B,C)\\). Therefore a normal vector to \\(5x-2y+z=9\\) is \\((5,-2,1)\\).",
    },
  ]}
/>`;

const linesInR3Content = String.raw`## Principle

A line in \(\mathbb R^3\) is determined by one point and one non-zero direction vector. The line consists of all points reached by starting at the fixed point and moving any real multiple of the direction vector.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf r", meaning: "a variable position vector for a point on the line" },
    { symbol: "\\mathbf r_0", meaning: "a fixed position vector for one known point on the line" },
    { symbol: "\\mathbf d", meaning: "a non-zero direction vector for the line" },
    { symbol: "t", meaning: "a real parameter" },
    { symbol: "(x,y,z)", meaning: "coordinates of a variable point on the line" },
  ]}
/>

## The Core Method

Vector form of a line is

<Equation label="Vector equation of a line" tex="\mathbf r=\mathbf r_0+t\mathbf d" />

If \(\mathbf r_0=(x_0,y_0,z_0)\) and \(\mathbf d=(a,b,c)\), then

<Equation label="Parametric line" tex="(x,y,z)=(x_0,y_0,z_0)+t(a,b,c)" />

which means

<Equation label="Coordinate equations" tex="x=x_0+at,\qquad y=y_0+bt,\qquad z=z_0+ct" />

To test whether a point lies on the line, solve the three coordinate equations for the same value of \(t\). One shared value means the point lies on the line; inconsistent values mean it does not.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Write a line through two points",
      question: "Find a vector equation of the line through \\(P=(1,2,-1)\\) and \\(Q=(4,0,5)\\).",
      answer: "Use \\(P\\) as the fixed point: \\(\\mathbf r_0=(1,2,-1)\\). A direction vector is \\(\\overrightarrow{PQ}=Q-P=(4-1,0-2,5-(-1))=(3,-2,6)\\). Therefore the line is \\(\\mathbf r=(1,2,-1)+t(3,-2,6)\\), where \\(t\\in\\mathbb R\\).",
    },
    {
      title: "Test a point on a line",
      question: "Does \\((7,-2,11)\\) lie on \\(\\mathbf r=(1,2,-1)+t(3,-2,6)\\)?",
      answer: "Compare components. From the \\(x\\)-coordinate, \\(7=1+3t\\), so \\(6=3t\\), giving \\(t=2\\). From the \\(y\\)-coordinate, \\(-2=2-2t\\), so \\(-4=-2t\\), giving \\(t=2\\). From the \\(z\\)-coordinate, \\(11=-1+6t\\), so \\(12=6t\\), giving \\(t=2\\). The same value works in all three coordinates, so the point lies on the line.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Direction vector scaling",
      question: "Do \\(\\mathbf r=(0,1,2)+t(2,4,6)\\) and \\(\\mathbf r=(0,1,2)+s(1,2,3)\\) describe the same line?",
      answer: "Yes. The fixed point is the same, and \\((2,4,6)=2(1,2,3)\\). Scaling a non-zero direction vector does not change the set of points on the line; it only changes the speed at which the parameter moves along the line.",
    },
    {
      title: "Invalid direction vector",
      question: "Why is \\(\\mathbf r=(1,0,0)+t(0,0,0)\\) not a proper line equation?",
      answer: "The direction vector must be non-zero. If \\(\\mathbf d=(0,0,0)\\), then \\(\\mathbf r=(1,0,0)+t(0,0,0)=(1,0,0)\\) for every \\(t\\). This describes one point, not a line.",
    },
  ]}
/>`;

const scalarTripleProductContent = String.raw`## Principle

The scalar triple product combines three vectors in \(\mathbb R^3\) and returns a scalar. Its absolute value is the volume of the parallelepiped formed by the three vectors.

Algebraically, it is a dot product after a cross product.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf u\\cdot(\\mathbf v\\times\\mathbf w)", meaning: "the scalar triple product of \\mathbf u, \\mathbf v, and \\mathbf w" },
    { symbol: "|\\mathbf u\\cdot(\\mathbf v\\times\\mathbf w)|", meaning: "volume of the parallelepiped spanned by the three vectors" },
    { symbol: "\\det A", meaning: "the determinant of a square matrix A" },
    { symbol: "\\mathbf 0", meaning: "the zero vector" },
  ]}
/>

## The Core Test

Compute the scalar triple product by first taking a cross product, then a dot product:

<Equation label="Scalar triple product" tex="[\mathbf u,\mathbf v,\mathbf w]=\mathbf u\cdot(\mathbf v\times\mathbf w)" />

Equivalently, place the three vectors as rows or columns of a \(3\times3\) matrix and take the determinant:

<Equation label="Determinant form" tex="\mathbf u\cdot(\mathbf v\times\mathbf w)=\det\begin{pmatrix}u_1&u_2&u_3\\v_1&v_2&v_3\\w_1&w_2&w_3\end{pmatrix}" />

The geometric tests are:

- \(|\mathbf u\cdot(\mathbf v\times\mathbf w)|\) is volume.
- \(\mathbf u\cdot(\mathbf v\times\mathbf w)=0\) means the three vectors are coplanar.
- Reversing two inputs changes the sign but not the volume.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Compute a scalar triple product",
      question: "Compute \\(\\mathbf u\\cdot(\\mathbf v\\times\\mathbf w)\\) for \\(\\mathbf u=(1,2,0)\\), \\(\\mathbf v=(0,1,3)\\), and \\(\\mathbf w=(2,-1,1)\\).",
      answer: "First compute \\(\\mathbf v\\times\\mathbf w\\). Using the formula, \\((0,1,3)\\times(2,-1,1)=(1\\cdot1-3(-1),3\\cdot2-0\\cdot1,0(-1)-1\\cdot2)=(4,6,-2)\\). Now dot with \\(\\mathbf u\\): \\((1,2,0)\\cdot(4,6,-2)=1\\cdot4+2\\cdot6+0\\cdot(-2)=16\\). The scalar triple product is \\(16\\).",
    },
    {
      title: "Interpret the volume",
      question: "What is the volume of the parallelepiped from the previous worked case?",
      answer: "The volume is the absolute value of the scalar triple product. Since \\(\\mathbf u\\cdot(\\mathbf v\\times\\mathbf w)=16\\), the volume is \\(|16|=16\\) cubic units.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Coplanarity test",
      question: "What does \\(\\mathbf u\\cdot(\\mathbf v\\times\\mathbf w)=0\\) tell you?",
      answer: "The volume of the parallelepiped is \\(|\\mathbf u\\cdot(\\mathbf v\\times\\mathbf w)|\\). If the scalar triple product is zero, the volume is zero. That means the three vectors lie in a common plane or one of them is the zero vector, so they do not span three-dimensional volume.",
    },
    {
      title: "Sign change",
      question: "If \\(\\mathbf u\\cdot(\\mathbf v\\times\\mathbf w)=5\\), what is \\(\\mathbf v\\cdot(\\mathbf u\\times\\mathbf w)\\)?",
      answer: "Swapping two inputs changes the sign of the scalar triple product. The expression \\(\\mathbf v\\cdot(\\mathbf u\\times\\mathbf w)\\) swaps \\(\\mathbf u\\) and \\(\\mathbf v\\) compared with \\(\\mathbf u\\cdot(\\mathbf v\\times\\mathbf w)\\). Therefore its value is \\(-5\\).",
    },
  ]}
/>`;

const threeByThreeSystemsContent = String.raw`## Principle

A \(3\) by \(3\) linear system is a system of three linear equations in three unknowns. Its rows describe planes in \(\mathbb R^3\), and its coefficient columns can be treated as vectors. Vector methods help identify whether the system has a unique solution.

## Notation

<Notation
  items={[
    { symbol: "x,y,z", meaning: "unknown real numbers" },
    { symbol: "A", meaning: "the coefficient matrix of the system" },
    { symbol: "\\mathbf x", meaning: "the vector of unknowns" },
    { symbol: "\\mathbf b", meaning: "the right-hand side vector" },
    { symbol: "\\det A", meaning: "the determinant of the coefficient matrix" },
    { symbol: "\\mathbf a_1,\\mathbf a_2,\\mathbf a_3", meaning: "the column vectors of A" },
  ]}
/>

## The Core Test

Write the system as a matrix equation:

<Equation label="Matrix equation" tex="A\mathbf x=\mathbf b" />

For a \(3\) by \(3\) system, the coefficient matrix has three column vectors:

<Equation label="Column form" tex="x\mathbf a_1+y\mathbf a_2+z\mathbf a_3=\mathbf b" />

The determinant gives the unique-solution test:

<Equation label="Unique solution test" tex="\det A\ne 0\Longleftrightarrow \text{the system has a unique solution for every }\mathbf b" />

For columns \(\mathbf a_1,\mathbf a_2,\mathbf a_3\), the determinant is the scalar triple product:

<Equation label="Columns and volume" tex="\det A=\mathbf a_1\cdot(\mathbf a_2\times\mathbf a_3)" />

If this volume is zero, the columns are coplanar and cannot span all of \(\mathbb R^3\).

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Write a system in vector form",
      question: "Write the system \\(x+2y-z=4\\), \\(3x-y+z=0\\), \\(2x+z=5\\) in the form \\(A\\mathbf x=\\mathbf b\\).",
      answer: "Collect the coefficients of \\(x\\), \\(y\\), and \\(z\\) in each row. The coefficient matrix is \\(A=\\begin{pmatrix}1&2&-1\\\\3&-1&1\\\\2&0&1\\end{pmatrix}\\). The unknown vector is \\(\\mathbf x=\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}\\), and the right-hand side is \\(\\mathbf b=\\begin{pmatrix}4\\\\0\\\\5\\end{pmatrix}\\). Therefore \\(A\\mathbf x=\\mathbf b\\).",
    },
    {
      title: "Use the determinant test",
      question: "For coefficient columns \\(\\mathbf a_1=(1,0,0)\\), \\(\\mathbf a_2=(0,2,0)\\), and \\(\\mathbf a_3=(0,0,-3)\\), decide whether every right-hand side has a unique solution.",
      answer: "Compute the scalar triple product. First \\(\\mathbf a_2\\times\\mathbf a_3=(0,2,0)\\times(0,0,-3)=(-6,0,0)\\). Then \\(\\mathbf a_1\\cdot(\\mathbf a_2\\times\\mathbf a_3)=(1,0,0)\\cdot(-6,0,0)=-6\\). The determinant is non-zero, so every right-hand side has a unique solution.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Column interpretation",
      question: "What does \\(x\\mathbf a_1+y\\mathbf a_2+z\\mathbf a_3=\\mathbf b\\) mean geometrically?",
      answer: "It means \\(\\mathbf b\\) is being built as a linear combination of the three coefficient columns. The unknowns \\(x\\), \\(y\\), and \\(z\\) are the weights on those columns. Solving the system means finding the weights that produce \\(\\mathbf b\\).",
    },
    {
      title: "Zero determinant consequence",
      question: "If the three coefficient columns are coplanar, what can be said about \\(\\det A\\)?",
      answer: "Coplanar columns span zero three-dimensional volume. Since \\(\\det A=\\mathbf a_1\\cdot(\\mathbf a_2\\times\\mathbf a_3)\\), the determinant equals this signed volume. Therefore \\(\\det A=0\\). A zero determinant means the coefficient columns do not span all of \\(\\mathbb R^3\\).",
    },
  ]}
/>`;

const matrixNotationContent = String.raw`## Principle

A matrix is a rectangular array of numbers arranged in rows and columns. Matrices package many numbers into one object, so they can represent linear systems, data tables, and linear transformations.

The size of a matrix is its number of rows followed by its number of columns.

## Notation

<Notation
  items={[
    { symbol: "A", meaning: "a matrix" },
    { symbol: "a_{ij}", meaning: "the entry of A in row i and column j" },
    { symbol: "M_{m,n}(\\mathbb R)", meaning: "the set of all m by n matrices with real entries" },
    { symbol: "m", meaning: "the number of rows" },
    { symbol: "n", meaning: "the number of columns" },
    { symbol: "\\mathbf r_i", meaning: "row i of a matrix" },
    { symbol: "\\mathbf c_j", meaning: "column j of a matrix" },
  ]}
/>

## The Core Method

Write an \(m\) by \(n\) matrix as

<Equation label="Matrix entries" tex="A=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}" />

The first index tells the row. The second index tells the column. Therefore \(a_{23}\) means row \(2\), column \(3\), not row \(3\), column \(2\).

Two matrices are equal exactly when they have the same size and the same matching entries:

<Equation label="Matrix equality" tex="A=B\Longleftrightarrow a_{ij}=b_{ij}\text{ for every valid }i,j" />

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Read entries",
      question: "For \\(A=\\begin{pmatrix}2&-1&0\\\\4&5&7\\end{pmatrix}\\), find \\(a_{12}\\), \\(a_{21}\\), and the size of \\(A\\).",
      answer: "The matrix has \\(2\\) rows and \\(3\\) columns, so \\(A\\in M_{2,3}(\\mathbb R)\\). The entry \\(a_{12}\\) is row \\(1\\), column \\(2\\), so \\(a_{12}=-1\\). The entry \\(a_{21}\\) is row \\(2\\), column \\(1\\), so \\(a_{21}=4\\).",
    },
    {
      title: "Use equality",
      question: "Find \\(x\\) and \\(y\\) if \\(\\begin{pmatrix}x&3\\\\-1&y\\end{pmatrix}=\\begin{pmatrix}5&3\\\\-1&2\\end{pmatrix}\\).",
      answer: "Equal matrices have equal matching entries. Compare row \\(1\\), column \\(1\\): \\(x=5\\). Compare row \\(2\\), column \\(2\\): \\(y=2\\). The other entries already match. Therefore \\(x=5\\) and \\(y=2\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Column vector as a matrix",
      question: "What is the matrix size of \\(\\begin{pmatrix}1\\\\0\\\\-3\\end{pmatrix}\\)?",
      answer: "This object has \\(3\\) rows and \\(1\\) column. It is a \\(3\\) by \\(1\\) matrix, so it lies in \\(M_{3,1}(\\mathbb R)\\). It can also represent a vector in \\(\\mathbb R^3\\).",
    },
    {
      title: "Row-column order",
      question: "Can a \\(2\\) by \\(3\\) matrix equal a \\(3\\) by \\(2\\) matrix?",
      answer: "No. Matrix equality requires the same size before entries are compared. A \\(2\\) by \\(3\\) matrix has six entries arranged in two rows and three columns, while a \\(3\\) by \\(2\\) matrix has six entries arranged in three rows and two columns. Their shapes differ.",
    },
  ]}
/>`;

const matrixAdditionContent = String.raw`## Principle

Matrix addition combines matrices entry-by-entry. It is only defined when the matrices have the same size, because every entry in one matrix must have a matching entry in the other.

## Notation

<Notation
  items={[
    { symbol: "A,B,C", meaning: "matrices of the same size" },
    { symbol: "a_{ij},b_{ij},c_{ij}", meaning: "matching entries in row i and column j" },
    { symbol: "A+B", meaning: "the entrywise sum of A and B" },
    { symbol: "-A", meaning: "the additive inverse of A" },
    { symbol: "0", meaning: "the zero matrix of the required size" },
  ]}
/>

## The Core Method

If \(A\) and \(B\) are both \(m\) by \(n\), then

<Equation label="Matrix addition" tex="(A+B)_{ij}=a_{ij}+b_{ij}" />

Subtract by adding the negative matrix:

<Equation label="Matrix subtraction" tex="A-B=A+(-B)" />

For addition and subtraction, check sizes first. If the sizes differ, the operation is not defined.

Matrix addition obeys the usual addition laws when all matrices have the same size:

<Equation label="Commutativity" tex="A+B=B+A" />

<Equation label="Associativity" tex="(A+B)+C=A+(B+C)" />

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Add two matrices",
      question: "Compute \\(\\begin{pmatrix}1&-2\\\\3&0\\end{pmatrix}+\\begin{pmatrix}4&5\\\\-1&7\\end{pmatrix}\\).",
      answer: "The matrices have the same size, \\(2\\) by \\(2\\), so addition is defined. Add matching entries: \\(1+4=5\\), \\(-2+5=3\\), \\(3+(-1)=2\\), and \\(0+7=7\\). Therefore the sum is \\(\\begin{pmatrix}5&3\\\\2&7\\end{pmatrix}\\).",
    },
    {
      title: "Reject mismatched sizes",
      question: "Can \\(\\begin{pmatrix}1&2&3\\end{pmatrix}+\\begin{pmatrix}4\\\\5\\\\6\\end{pmatrix}\\) be computed?",
      answer: "No. The first matrix is \\(1\\) by \\(3\\), and the second matrix is \\(3\\) by \\(1\\). They contain the same number of entries, but their shapes differ. Entrywise addition requires the same row-column shape.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Subtract matrices",
      question: "Compute \\(\\begin{pmatrix}6&1\\\\0&-2\\end{pmatrix}-\\begin{pmatrix}3&5\\\\4&-7\\end{pmatrix}\\).",
      answer: "Subtract matching entries: \\(6-3=3\\), \\(1-5=-4\\), \\(0-4=-4\\), and \\(-2-(-7)=5\\). Therefore the difference is \\(\\begin{pmatrix}3&-4\\\\-4&5\\end{pmatrix}\\).",
    },
    {
      title: "Additive inverse",
      question: "Find \\(-A\\) for \\(A=\\begin{pmatrix}2&-3\\\\0&5\\end{pmatrix}\\).",
      answer: "Negate every entry: \\(-A=\\begin{pmatrix}-2&3\\\\0&-5\\end{pmatrix}\\). Adding gives \\(A+(-A)=\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}\\), the \\(2\\) by \\(2\\) zero matrix.",
    },
  ]}
/>`;

const scalarMultiplicationContent = String.raw`## Principle

Scalar multiplication multiplies every entry of a matrix by the same real number. It stretches the matrix entrywise and is compatible with matrix addition.

## Notation

<Notation
  items={[
    { symbol: "\\lambda,\\mu", meaning: "real scalars" },
    { symbol: "A,B", meaning: "matrices" },
    { symbol: "a_{ij}", meaning: "entry of A in row i and column j" },
    { symbol: "\\lambda A", meaning: "the scalar multiple of A by \\lambda" },
    { symbol: "0", meaning: "the zero scalar or a zero matrix, depending on context" },
  ]}
/>

## The Core Method

If \(A=(a_{ij})\), then

<Equation label="Scalar multiplication" tex="(\lambda A)_{ij}=\lambda a_{ij}" />

That is, multiply every entry by \(\lambda\). Scalar multiplication distributes over matrix addition:

<Equation label="Distribute over matrix addition" tex="\lambda(A+B)=\lambda A+\lambda B" />

and over scalar addition:

<Equation label="Distribute over scalar addition" tex="(\lambda+\mu)A=\lambda A+\mu A" />

Multiplying by \(0\) gives the zero matrix of the same size as \(A\). Multiplying by \(-1\) gives the additive inverse \(-A\).

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Scale a matrix",
      question: "Compute \\(-3\\begin{pmatrix}2&-1\\\\0&4\\end{pmatrix}\\).",
      answer: "Multiply every entry by \\(-3\\). The entries become \\(-3\\cdot2=-6\\), \\(-3\\cdot(-1)=3\\), \\(-3\\cdot0=0\\), and \\(-3\\cdot4=-12\\). Therefore \\(-3\\begin{pmatrix}2&-1\\\\0&4\\end{pmatrix}=\\begin{pmatrix}-6&3\\\\0&-12\\end{pmatrix}\\).",
    },
    {
      title: "Combine scaling and addition",
      question: "Let \\(A=\\begin{pmatrix}1&2\\\\-1&0\\end{pmatrix}\\) and \\(B=\\begin{pmatrix}3&-4\\\\5&2\\end{pmatrix}\\). Compute \\(2A-B\\).",
      answer: "First compute \\(2A=\\begin{pmatrix}2&4\\\\-2&0\\end{pmatrix}\\). Then subtract \\(B\\): \\(2A-B=\\begin{pmatrix}2-3&4-(-4)\\\\-2-5&0-2\\end{pmatrix}\\). Simplify entries to get \\(\\begin{pmatrix}-1&8\\\\-7&-2\\end{pmatrix}\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Zero scalar",
      question: "What is \\(0A\\) when \\(A\\) is a \\(3\\) by \\(2\\) matrix?",
      answer: "Multiplying every entry of \\(A\\) by the scalar \\(0\\) gives the \\(3\\) by \\(2\\) zero matrix. The size is preserved; only the entries become zero.",
    },
    {
      title: "Undo a scalar multiple",
      question: "If \\(3A=\\begin{pmatrix}6&-9\\\\0&12\\end{pmatrix}\\), find \\(A\\).",
      answer: "Divide every entry by \\(3\\), equivalently multiply by \\(1/3\\): \\(A=\\frac13\\begin{pmatrix}6&-9\\\\0&12\\end{pmatrix}=\\begin{pmatrix}2&-3\\\\0&4\\end{pmatrix}\\).",
    },
  ]}
/>`;

const matrixMultiplicationContent = String.raw`## Principle

Matrix multiplication combines rows of the first matrix with columns of the second matrix using scalar products. It is designed so that matrices can represent composition of linear maps.

The order matters: usually \(AB\ne BA\), and sometimes one product exists while the other does not.

## Notation

<Notation
  items={[
    { symbol: "AB", meaning: "the product of matrix A followed by matrix B in algebraic order" },
    { symbol: "a_{ik}", meaning: "entry of A in row i and column k" },
    { symbol: "b_{kj}", meaning: "entry of B in row k and column j" },
    { symbol: "(AB)_{ij}", meaning: "entry of AB in row i and column j" },
    { symbol: "\\mathbf r_i", meaning: "row i of A" },
    { symbol: "\\mathbf c_j", meaning: "column j of B" },
  ]}
/>

## The Core Method

If \(A\) is \(m\) by \(n\) and \(B\) is \(n\) by \(p\), then \(AB\) is defined and has size \(m\) by \(p\):

<Equation label="Shape rule" tex="(m\times n)(n\times p)=m\times p" />

The entry in row \(i\), column \(j\) is

<Equation label="Entry formula" tex="(AB)_{ij}=a_{i1}b_{1j}+a_{i2}b_{2j}+\cdots+a_{in}b_{nj}" />

Equivalently, take the scalar product of row \(i\) of \(A\) with column \(j\) of \(B\).

Matrix multiplication is associative and distributive:

<Equation label="Associativity" tex="(AB)C=A(BC)" />

<Equation label="Left distributivity" tex="A(B+C)=AB+AC" />

but it is not generally commutative.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Multiply two matrices",
      question: "Compute \\(\\begin{pmatrix}1&2&0\\\\-1&3&4\\end{pmatrix}\\begin{pmatrix}2&1\\\\0&-2\\\\5&3\\end{pmatrix}\\).",
      answer: "The first matrix is \\(2\\) by \\(3\\), and the second is \\(3\\) by \\(2\\), so the product is \\(2\\) by \\(2\\). Entry \\((1,1)\\): \\(1\\cdot2+2\\cdot0+0\\cdot5=2\\). Entry \\((1,2)\\): \\(1\\cdot1+2(-2)+0\\cdot3=-3\\). Entry \\((2,1)\\): \\((-1)2+3\\cdot0+4\\cdot5=18\\). Entry \\((2,2)\\): \\((-1)1+3(-2)+4\\cdot3=5\\). Therefore the product is \\(\\begin{pmatrix}2&-3\\\\18&5\\end{pmatrix}\\).",
    },
    {
      title: "Check if a product exists",
      question: "If \\(A\\) is \\(2\\) by \\(4\\) and \\(B\\) is \\(3\\) by \\(2\\), is \\(AB\\) defined?",
      answer: "For \\(AB\\), the number of columns of \\(A\\) must equal the number of rows of \\(B\\). Here \\(A\\) has \\(4\\) columns and \\(B\\) has \\(3\\) rows. Since \\(4\\ne3\\), \\(AB\\) is not defined.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Non-commutativity",
      question: "Let \\(A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}\\) and \\(B=\\begin{pmatrix}1&0\\\\2&1\\end{pmatrix}\\). Compare \\(AB\\) and \\(BA\\).",
      answer: "Compute \\(AB=\\begin{pmatrix}1\\cdot1+1\\cdot2&1\\cdot0+1\\cdot1\\\\0\\cdot1+1\\cdot2&0\\cdot0+1\\cdot1\\end{pmatrix}=\\begin{pmatrix}3&1\\\\2&1\\end{pmatrix}\\). Compute \\(BA=\\begin{pmatrix}1\\cdot1+0\\cdot0&1\\cdot1+0\\cdot1\\\\2\\cdot1+1\\cdot0&2\\cdot1+1\\cdot1\\end{pmatrix}=\\begin{pmatrix}1&1\\\\2&3\\end{pmatrix}\\). The products are different, so \\(AB\\ne BA\\).",
    },
    {
      title: "Matrix times vector",
      question: "Compute \\(\\begin{pmatrix}2&-1\\\\3&4\\end{pmatrix}\\begin{pmatrix}5\\\\1\\end{pmatrix}\\).",
      answer: "Treat the vector as a \\(2\\) by \\(1\\) matrix. The first entry is \\(2\\cdot5+(-1)\\cdot1=9\\). The second entry is \\(3\\cdot5+4\\cdot1=19\\). Therefore the product is \\(\\begin{pmatrix}9\\\\19\\end{pmatrix}\\).",
    },
  ]}
/>`;

const identityAndZeroMatricesContent = String.raw`## Principle

The zero matrix is the additive neutral matrix: adding it changes nothing. The identity matrix is the multiplicative neutral square matrix: multiplying by it changes nothing when the product is defined.

These matrices play the same structural roles as \(0\) and \(1\) for real numbers, but their sizes must match the operation.

## Notation

<Notation
  items={[
    { symbol: "0_{m,n}", meaning: "the m by n zero matrix" },
    { symbol: "I_n", meaning: "the n by n identity matrix" },
    { symbol: "\\delta_{ij}", meaning: "Kronecker delta, equal to 1 when i=j and 0 otherwise" },
    { symbol: "A", meaning: "a matrix whose size determines which zero or identity matrix is needed" },
  ]}
/>

## The Core Method

The zero matrix has every entry equal to zero:

<Equation label="Zero matrix" tex="(0_{m,n})_{ij}=0" />

The identity matrix has ones on the main diagonal and zeros elsewhere:

<Equation label="Identity entries" tex="(I_n)_{ij}=\delta_{ij}" />

For an \(m\) by \(n\) matrix \(A\),

<Equation label="Additive identity" tex="A+0_{m,n}=A" />

and

<Equation label="Multiplicative identities" tex="I_mA=A,\qquad AI_n=A" />

The identity size changes depending on the side of multiplication.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Choose identity sizes",
      question: "Let \\(A\\) be a \\(3\\) by \\(2\\) matrix. What are the sizes of the identity matrices in \\(I_mA=A\\) and \\(AI_n=A\\)?",
      answer: "Since \\(A\\) has \\(3\\) rows and \\(2\\) columns, left multiplication needs \\(I_3\\): \\(I_3A=A\\). Right multiplication needs \\(I_2\\): \\(AI_2=A\\). The identity matrices have different sizes because they act on different sides.",
    },
    {
      title: "Use the zero matrix",
      question: "If \\(A=\\begin{pmatrix}1&-4\\\\2&0\\end{pmatrix}\\), compute \\(A+0_{2,2}\\).",
      answer: "The zero matrix \\(0_{2,2}\\) has the same size as \\(A\\): \\(0_{2,2}=\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}\\). Adding matching entries leaves every entry unchanged, so \\(A+0_{2,2}=\\begin{pmatrix}1&-4\\\\2&0\\end{pmatrix}\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Write an identity matrix",
      question: "Write \\(I_4\\).",
      answer: "The matrix \\(I_4\\) is \\(4\\) by \\(4\\), with ones on the main diagonal and zeros elsewhere: \\(I_4=\\begin{pmatrix}1&0&0&0\\\\0&1&0&0\\\\0&0&1&0\\\\0&0&0&1\\end{pmatrix}\\).",
    },
    {
      title: "Zero times matrix",
      question: "If \\(A\\) is \\(2\\) by \\(3\\), what is \\(0_{4,2}A\\)?",
      answer: "The product is defined because \\(0_{4,2}\\) has \\(2\\) columns and \\(A\\) has \\(2\\) rows. The result has size \\(4\\) by \\(3\\). Every entry is a row-column scalar product involving a zero row, so \\(0_{4,2}A=0_{4,3}\\).",
    },
  ]}
/>`;

const transposeContent = String.raw`## Principle

The transpose of a matrix swaps rows and columns. Row \(i\) becomes column \(i\), and column \(j\) becomes row \(j\). Transpose is a way to reverse the orientation of matrix data.

## Notation

<Notation
  items={[
    { symbol: "A^T", meaning: "the transpose of matrix A" },
    { symbol: "a_{ij}", meaning: "entry of A in row i and column j" },
    { symbol: "(A^T)_{ij}", meaning: "entry of the transpose in row i and column j" },
    { symbol: "\\mathbf r_i", meaning: "row i of A" },
    { symbol: "\\mathbf c_i", meaning: "column i of A" },
  ]}
/>

## The Core Method

If \(A\) is \(m\) by \(n\), then \(A^T\) is \(n\) by \(m\), and

<Equation label="Transpose entries" tex="(A^T)_{ij}=a_{ji}" />

Transpose obeys these rules whenever the expressions are defined:

<Equation label="Double transpose" tex="(A^T)^T=A" />

<Equation label="Transpose of a sum" tex="(A+B)^T=A^T+B^T" />

<Equation label="Transpose of a product" tex="(AB)^T=B^TA^T" />

The product rule reverses the order. This reversal is essential.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Transpose a rectangular matrix",
      question: "Find the transpose of \\(A=\\begin{pmatrix}1&2&3\\\\4&5&6\\end{pmatrix}\\).",
      answer: "The rows of \\(A\\) become columns of \\(A^T\\). Row \\(1\\), \\((1,2,3)\\), becomes column \\(1\\). Row \\(2\\), \\((4,5,6)\\), becomes column \\(2\\). Therefore \\(A^T=\\begin{pmatrix}1&4\\\\2&5\\\\3&6\\end{pmatrix}\\).",
    },
    {
      title: "Use entry notation",
      question: "If \\(a_{23}=7\\), what entry of \\(A^T\\) is \\(7\\)?",
      answer: "Transpose swaps row and column indices. The entry \\(a_{23}\\) of \\(A\\) becomes entry \\((A^T)_{32}\\). Therefore \\((A^T)_{32}=7\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Column to row",
      question: "Transpose \\(\\begin{pmatrix}2\\\\-1\\\\5\\end{pmatrix}\\).",
      answer: "A \\(3\\) by \\(1\\) column matrix transposes to a \\(1\\) by \\(3\\) row matrix: \\(\\begin{pmatrix}2\\\\-1\\\\5\\end{pmatrix}^T=\\begin{pmatrix}2&-1&5\\end{pmatrix}\\).",
    },
    {
      title: "Product order",
      question: "Why is \\((AB)^T=A^TB^T\\) usually wrong?",
      answer: "The size rule shows the issue. If \\(A\\) is \\(m\\) by \\(n\\) and \\(B\\) is \\(n\\) by \\(p\\), then \\(AB\\) is \\(m\\) by \\(p\\), so \\((AB)^T\\) is \\(p\\) by \\(m\\). The product \\(B^TA^T\\) has size \\(p\\) by \\(m\\), but \\(A^TB^T\\) would require multiplying an \\(n\\) by \\(m\\) matrix by a \\(p\\) by \\(n\\) matrix, which may not even be defined. The correct rule is \\((AB)^T=B^TA^T\\).",
    },
  ]}
/>`;

const inverseMatricesContent = String.raw`## Principle

An inverse matrix reverses the effect of a square matrix under multiplication. A matrix with an inverse is called invertible or non-singular. A matrix without an inverse is called singular.

Only square matrices can have two-sided inverses.

## Notation

<Notation
  items={[
    { symbol: "A^{-1}", meaning: "the inverse of A, when it exists" },
    { symbol: "I_n", meaning: "the n by n identity matrix" },
    { symbol: "\\det A", meaning: "the determinant of A" },
    { symbol: "ad-bc", meaning: "the determinant of a 2 by 2 matrix \\begin{pmatrix}a&b\\c&d\\end{pmatrix}" },
    { symbol: "\\mathbf x", meaning: "an unknown vector in a matrix equation" },
  ]}
/>

## The Core Test

An \(n\) by \(n\) matrix \(A\) is invertible when there is a matrix \(A^{-1}\) such that

<Equation label="Inverse definition" tex="A^{-1}A=I_n,\qquad AA^{-1}=I_n" />

For a \(2\) by \(2\) matrix, use the determinant test:

<Equation label="Two by two determinant" tex="\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc" />

If \(ad-bc\ne0\), then

<Equation label="Two by two inverse" tex="\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}" />

If \(ad-bc=0\), this formula cannot be used because it would divide by zero, and the matrix is not invertible.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Find a two by two inverse",
      question: "Find the inverse of \\(A=\\begin{pmatrix}2&1\\\\5&3\\end{pmatrix}\\).",
      answer: "First compute the determinant: \\(ad-bc=2\\cdot3-1\\cdot5=6-5=1\\). Since the determinant is non-zero, the inverse exists. Apply the formula: \\(A^{-1}=\\frac{1}{1}\\begin{pmatrix}3&-1\\\\-5&2\\end{pmatrix}=\\begin{pmatrix}3&-1\\\\-5&2\\end{pmatrix}\\).",
    },
    {
      title: "Detect a singular matrix",
      question: "Decide whether \\(B=\\begin{pmatrix}4&6\\\\2&3\\end{pmatrix}\\) is invertible.",
      answer: "Compute the determinant: \\(ad-bc=4\\cdot3-6\\cdot2=12-12=0\\). The determinant is zero, so the matrix is singular. It has no inverse.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Solve using an inverse",
      question: "If \\(A\\) is invertible and \\(A\\mathbf x=\\mathbf b\\), how do you solve for \\(\\mathbf x\\)?",
      answer: "Left multiply both sides by \\(A^{-1}\\): \\(A^{-1}A\\mathbf x=A^{-1}\\mathbf b\\). Since \\(A^{-1}A=I_n\\), this becomes \\(I_n\\mathbf x=A^{-1}\\mathbf b\\). Since \\(I_n\\mathbf x=\\mathbf x\\), the solution is \\(\\mathbf x=A^{-1}\\mathbf b\\).",
    },
    {
      title: "Check an inverse candidate",
      question: "Let \\(A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}\\) and \\(C=\\begin{pmatrix}1&-2\\\\0&1\\end{pmatrix}\\). Verify that \\(C=A^{-1}\\).",
      answer: "Compute \\(AC\\): \\(\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}\\begin{pmatrix}1&-2\\\\0&1\\end{pmatrix}=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}\\). Compute \\(CA\\): \\(\\begin{pmatrix}1&-2\\\\0&1\\end{pmatrix}\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}\\). Since both products equal \\(I_2\\), \\(C=A^{-1}\\).",
    },
  ]}
/>`;

const augmentedMatricesContent = String.raw`## Principle

An augmented matrix records a linear system without rewriting the variables every time. The coefficient matrix goes on the left, the right-hand side goes in the final column, and a vertical bar separates the two parts.

Augmented matrices are bookkeeping devices for solving systems by row operations.

## Notation

<Notation
  items={[
    { symbol: "A", meaning: "the coefficient matrix of a linear system" },
    { symbol: "\\mathbf x", meaning: "the column vector of unknowns" },
    { symbol: "\\mathbf b", meaning: "the right-hand side vector" },
    { symbol: "A\\mathbf x=\\mathbf b", meaning: "matrix form of a linear system" },
    { symbol: "[A\\mid\\mathbf b]", meaning: "the augmented matrix of the system" },
    { symbol: "a_{ij}", meaning: "coefficient of unknown j in equation i" },
  ]}
/>

## The Core Method

For a system

<Equation label="System form" tex="A\mathbf x=\mathbf b" />

write the augmented matrix as

<Equation label="Augmented matrix" tex="[A\mid\mathbf b]" />

The left block stores the coefficients, and the right column stores the constants. Each row is one equation.

When converting between a system and an augmented matrix, keep the variable order fixed. If the variable order is \(x,y,z\), then the columns of \(A\) must always mean coefficients of \(x\), then \(y\), then \(z\).

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Build an augmented matrix",
      question: "Write the augmented matrix for \\(2x-y+3z=5\\), \\(-x+4y=7\\), and \\(3x+z=-2\\), using variable order \\(x,y,z\\).",
      answer: "Read coefficients in the order \\(x,y,z\\). The first row is \\(2,-1,3\\mid5\\). The second equation has no \\(z\\)-term, so its row is \\(-1,4,0\\mid7\\). The third equation has no \\(y\\)-term, so its row is \\(3,0,1\\mid-2\\). Therefore the augmented matrix is \\(\\begin{pmatrix}2&-1&3&|&5\\\\-1&4&0&|&7\\\\3&0&1&|&-2\\end{pmatrix}\\).",
    },
    {
      title: "Recover equations",
      question: "Recover the system from \\(\\begin{pmatrix}1&0&-2&|&4\\\\0&3&5&|&-1\\end{pmatrix}\\) using variables \\(x,y,z\\).",
      answer: "The first row gives \\(1x+0y-2z=4\\), so \\(x-2z=4\\). The second row gives \\(0x+3y+5z=-1\\), so \\(3y+5z=-1\\). The system is \\(x-2z=4\\) and \\(3y+5z=-1\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Missing variable",
      question: "Why must a missing variable be recorded with coefficient \\(0\\)?",
      answer: "The columns must keep a fixed variable order. If \\(z\\) is missing from \\(2x-y=3\\), its coefficient is \\(0\\), so the row for variables \\(x,y,z\\) is \\(2,-1,0\\mid3\\). Omitting the zero would shift columns and change the meaning of later entries.",
    },
    {
      title: "Shape of the augmented matrix",
      question: "A system has \\(4\\) equations and \\(3\\) unknowns. What is the size of its augmented matrix?",
      answer: "The coefficient matrix has \\(4\\) rows and \\(3\\) columns. The right-hand side adds one extra column. Therefore the augmented matrix has \\(4\\) rows and \\(4\\) columns.",
    },
  ]}
/>`;

const elementaryRowOperationsContent = String.raw`## Principle

Elementary row operations transform a linear system into an equivalent system with the same solution set. They are the legal moves used in Gaussian and Gauss-Jordan elimination.

Each operation changes equations, not the unknown vector that solves them.

## Notation

<Notation
  items={[
    { symbol: "R_i", meaning: "row i of a matrix" },
    { symbol: "R_i\\leftrightarrow R_j", meaning: "swap rows i and j" },
    { symbol: "R_i\\leftarrow\\lambda R_i", meaning: "multiply row i by non-zero scalar \\lambda" },
    { symbol: "R_i\\leftarrow R_i+\\lambda R_j", meaning: "add \\lambda times row j to row i" },
    { symbol: "\\lambda", meaning: "a real scalar" },
    { symbol: "\\sim", meaning: "row-equivalent matrices" },
  ]}
/>

## The Core Method

There are exactly three elementary row operation types:

1. Swap two rows.
2. Multiply one row by a non-zero scalar.
3. Add a scalar multiple of one row to another row.

These operations preserve the solution set of the corresponding linear system:

<Equation label="Row equivalence" tex="[A\mid\mathbf b]\sim[C\mid\mathbf d]" />

The scalar in \(R_i\leftarrow\lambda R_i\) must be non-zero. Multiplying a row by zero destroys information and is not reversible.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Apply a row replacement",
      question: "Apply \\(R_2\\leftarrow R_2-3R_1\\) to \\(\\begin{pmatrix}1&2&|&5\\\\3&7&|&16\\end{pmatrix}\\).",
      answer: "Keep row \\(1\\) unchanged: \\(R_1=(1,2,|,5)\\). Compute the new row \\(2\\): \\(R_2-3R_1=(3,7,|,16)-3(1,2,|,5)\\). This is \\((3-3,7-6,|,16-15)=(0,1,|,1)\\). The new matrix is \\(\\begin{pmatrix}1&2&|&5\\\\0&1&|&1\\end{pmatrix}\\).",
    },
    {
      title: "Identify an illegal move",
      question: "Why is \\(R_2\\leftarrow0R_2\\) not an elementary row operation?",
      answer: "Multiplying a row by zero replaces the whole equation with \\(0=0\\). That loses the information in the original row and cannot be reversed. Elementary row operations must preserve the solution set, so row scaling requires a non-zero scalar.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Swap rows",
      question: "Apply \\(R_1\\leftrightarrow R_3\\) to \\(\\begin{pmatrix}1&0\\\\2&1\\\\5&4\\end{pmatrix}\\).",
      answer: "Swap the first and third rows while keeping the second row fixed. The result is \\(\\begin{pmatrix}5&4\\\\2&1\\\\1&0\\end{pmatrix}\\).",
    },
    {
      title: "Scale a row",
      question: "Apply \\(R_2\\leftarrow -\\frac12 R_2\\) to \\(\\begin{pmatrix}1&3&|&2\\\\0&-2&|&6\\end{pmatrix}\\).",
      answer: "Keep row \\(1\\) unchanged. Multiply row \\(2\\) by \\(-1/2\\): \\(-\\frac12(0,-2,|,6)=(0,1,|,-3)\\). The result is \\(\\begin{pmatrix}1&3&|&2\\\\0&1&|&-3\\end{pmatrix}\\).",
    },
  ]}
/>`;

const echelonFormContent = String.raw`## Principle

Echelon form is a stepped form of a matrix that makes a linear system easier to solve. The leading non-zero entries move strictly to the right as you go down the rows, and any zero rows sit at the bottom.

Echelon form is the target of forward elimination.

## Notation

<Notation
  items={[
    { symbol: "R_i", meaning: "row i of a matrix" },
    { symbol: "\\text{pivot}", meaning: "the first non-zero entry in a non-zero row" },
    { symbol: "\\text{pivot column}", meaning: "a column containing a pivot" },
    { symbol: "\\text{zero row}", meaning: "a row whose entries are all zero" },
    { symbol: "\\sim", meaning: "row-equivalent" },
  ]}
/>

## The Core Test

A matrix is in echelon form when all three conditions hold:

1. Every zero row is below every non-zero row.
2. Each pivot is to the right of the pivot in the row above it.
3. Every entry below a pivot is zero.

The pivots create a staircase pattern. For example,

<Equation label="Echelon pattern" tex="\begin{pmatrix}*&*&*&*\\0&*&*&*\\0&0&0&*\\0&0&0&0\end{pmatrix}" />

where each displayed \(*\) pivot position is non-zero.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Recognise echelon form",
      question: "Is \\(\\begin{pmatrix}1&2&0&|&3\\\\0&0&5&|&1\\\\0&0&0&|&0\\end{pmatrix}\\) in echelon form?",
      answer: "The first pivot is in column \\(1\\). The second pivot is in column \\(3\\), which is to the right of column \\(1\\). The zero row is at the bottom. Entries below the pivots are zero. Therefore the matrix is in echelon form.",
    },
    {
      title: "Spot a failure",
      question: "Why is \\(\\begin{pmatrix}0&1&2\\\\1&0&3\\end{pmatrix}\\) not in echelon form?",
      answer: "The first row has pivot in column \\(2\\), but the second row has pivot in column \\(1\\). As you move down the rows, pivots must move strictly to the right. Here the second pivot moves left, so the matrix is not in echelon form.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Use back substitution",
      question: "Solve the echelon system represented by \\(\\begin{pmatrix}1&2&-1&|&4\\\\0&1&3&|&5\\\\0&0&2&|&6\\end{pmatrix}\\).",
      answer: "Translate rows to equations: \\(x+2y-z=4\\), \\(y+3z=5\\), and \\(2z=6\\). From the last row, \\(z=3\\). Substitute into the second row: \\(y+3(3)=5\\), so \\(y+9=5\\), giving \\(y=-4\\). Substitute into the first row: \\(x+2(-4)-3=4\\), so \\(x-11=4\\), giving \\(x=15\\).",
    },
    {
      title: "Zero row position",
      question: "Can a matrix in echelon form have a zero row above a non-zero row?",
      answer: "No. One of the defining conditions of echelon form is that all zero rows must be below all non-zero rows. A zero row above a non-zero row breaks the staircase structure.",
    },
  ]}
/>`;

const reducedRowEchelonFormContent = String.raw`## Principle

Reduced row echelon form, abbreviated RREF, is a stricter version of echelon form. It makes the solution structure of a linear system as explicit as possible.

In RREF, each pivot is a leading \(1\), and each pivot column has zeros everywhere except at that pivot.

## Notation

<Notation
  items={[
    { symbol: "\\operatorname{rref}(A)", meaning: "the reduced row echelon form of A" },
    { symbol: "\\text{pivot}", meaning: "a leading non-zero entry in a non-zero row" },
    { symbol: "\\text{leading 1}", meaning: "a pivot scaled to equal 1" },
    { symbol: "\\text{free variable}", meaning: "a variable whose column has no pivot" },
    { symbol: "\\sim", meaning: "row-equivalent" },
  ]}
/>

## The Core Test

A matrix is in reduced row echelon form when it satisfies echelon form and also:

1. Every pivot equals \(1\).
2. Each pivot is the only non-zero entry in its column.

Typical RREF shape:

<Equation label="RREF pattern" tex="\begin{pmatrix}1&*&0&*\\0&0&1&*\\0&0&0&0\end{pmatrix}" />

Every matrix has exactly one RREF. Different row-reduction paths lead to the same final RREF.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Recognise RREF",
      question: "Is \\(\\begin{pmatrix}1&0&2&|&3\\\\0&1&-1&|&4\\end{pmatrix}\\) in RREF?",
      answer: "The pivots are the \\(1\\) in column \\(1\\) and the \\(1\\) in column \\(2\\). They move to the right as rows go down. Each pivot column has zeros everywhere except at the pivot. Therefore the matrix is in RREF. The third variable is free because column \\(3\\) has no pivot.",
    },
    {
      title: "Not reduced",
      question: "Why is \\(\\begin{pmatrix}1&2&|&5\\\\0&1&|&3\\end{pmatrix}\\) not in RREF?",
      answer: "The matrix is in echelon form and both pivots are \\(1\\). However, the pivot in column \\(2\\) has a non-zero entry above it, namely \\(2\\) in row \\(1\\). In RREF, each pivot must be the only non-zero entry in its column. Therefore this matrix is not reduced.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Read a unique solution",
      question: "Read the solution from \\(\\begin{pmatrix}1&0&0&|&2\\\\0&1&0&|&-1\\\\0&0&1&|&5\\end{pmatrix}\\).",
      answer: "Each variable column is a pivot column. The rows give \\(x=2\\), \\(y=-1\\), and \\(z=5\\). Therefore the system has the unique solution \\((2,-1,5)\\).",
    },
    {
      title: "Read a free variable",
      question: "Read the solutions from \\(\\begin{pmatrix}1&0&2&|&3\\\\0&1&-1&|&4\\end{pmatrix}\\).",
      answer: "Let the free variable be \\(z=t\\). The first row gives \\(x+2z=3\\), so \\(x=3-2t\\). The second row gives \\(y-z=4\\), so \\(y=4+t\\). Therefore the solutions are \\((x,y,z)=(3-2t,4+t,t)\\), where \\(t\\in\\mathbb R\\).",
    },
  ]}
/>`;

const gaussJordanEliminationContent = String.raw`## Principle

Gauss-Jordan elimination uses elementary row operations to transform an augmented matrix into reduced row echelon form. Once the matrix is reduced, the solution set can be read directly.

It is a systematic algorithm: create pivots, clear below them, scale them to \(1\), and clear above them.

## Notation

<Notation
  items={[
    { symbol: "[A\\mid\\mathbf b]", meaning: "an augmented matrix" },
    { symbol: "R_i", meaning: "row i" },
    { symbol: "\\operatorname{rref}", meaning: "reduced row echelon form" },
    { symbol: "\\text{pivot}", meaning: "the leading non-zero entry used to eliminate other entries" },
    { symbol: "\\sim", meaning: "row-equivalent" },
  ]}
/>

## The Core Method

Use this routine.

1. Choose the leftmost column with a non-zero available entry.
2. Swap rows if needed to move a non-zero entry into the pivot position.
3. Scale the pivot row so the pivot becomes \(1\).
4. Use row replacement to make every other entry in the pivot column zero.
5. Move down and right to choose the next pivot.
6. Continue until no more pivots can be created.

The final matrix is row-equivalent to the original augmented matrix:

<Equation label="Reduction target" tex="[A\mid\mathbf b]\sim\operatorname{rref}([A\mid\mathbf b])" />

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Reduce a two by two system",
      question: "Use Gauss-Jordan elimination on \\(\\begin{pmatrix}1&2&|&5\\\\3&7&|&16\\end{pmatrix}\\).",
      answer: "Start with \\(\\begin{pmatrix}1&2&|&5\\\\3&7&|&16\\end{pmatrix}\\). Use \\(R_2\\leftarrow R_2-3R_1\\): \\(\\begin{pmatrix}1&2&|&5\\\\0&1&|&1\\end{pmatrix}\\). Clear above the second pivot with \\(R_1\\leftarrow R_1-2R_2\\): \\(\\begin{pmatrix}1&0&|&3\\\\0&1&|&1\\end{pmatrix}\\). Therefore \\(x=3\\) and \\(y=1\\).",
    },
    {
      title: "Identify an inconsistent row",
      question: "What does a row \\(\\begin{pmatrix}0&0&0&|&4\\end{pmatrix}\\) mean during elimination?",
      answer: "The row represents the equation \\(0x+0y+0z=4\\), which says \\(0=4\\). This is impossible. Therefore the system is inconsistent and has no solutions.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Why clear above pivots",
      question: "Why does Gauss-Jordan elimination clear entries above pivots as well as below them?",
      answer: "Clearing below pivots gives echelon form, which usually still requires back substitution. Clearing above pivots produces RREF. In RREF, pivot variables are isolated, so the solution set can be read directly from the rows.",
    },
    {
      title: "Free variable after reduction",
      question: "After reduction, why does a non-pivot variable become free?",
      answer: "A pivot column has a leading \\(1\\) that solves for its variable. A non-pivot variable has no row that isolates it. It can be assigned a parameter, and the pivot variables are then expressed in terms of that parameter.",
    },
  ]}
/>`;

const solutionSetsContent = String.raw`## Principle

The solution set of a linear system is the set of all vectors that satisfy every equation at the same time. A linear system can have no solution, exactly one solution, or infinitely many solutions.

Row reduction reveals which case occurs.

## Notation

<Notation
  items={[
    { symbol: "A\\mathbf x=\\mathbf b", meaning: "a linear system" },
    { symbol: "\\mathbf x", meaning: "a candidate solution vector" },
    { symbol: "\\text{pivot variable}", meaning: "a variable corresponding to a pivot column" },
    { symbol: "\\text{free variable}", meaning: "a variable corresponding to a non-pivot column" },
    { symbol: "t,s", meaning: "real parameters used for free variables" },
  ]}
/>

## The Core Test

After reducing the augmented matrix:

1. If there is a row \(0=\text{non-zero}\), there is no solution.
2. If every variable column has a pivot and there is no inconsistent row, there is a unique solution.
3. If at least one variable column has no pivot and there is no inconsistent row, there are infinitely many solutions.

The inconsistent row pattern is

<Equation label="Inconsistent row" tex="\begin{pmatrix}0&0&\cdots&0&|&c\end{pmatrix},\qquad c\ne0" />

Free variables become parameters in the solution set.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Unique solution",
      question: "Classify the solution set represented by \\(\\begin{pmatrix}1&0&|&2\\\\0&1&|&-3\\end{pmatrix}\\).",
      answer: "Both variable columns are pivot columns. The rows read \\(x=2\\) and \\(y=-3\\). There is no inconsistent row and no free variable. The system has exactly one solution: \\((2,-3)\\).",
    },
    {
      title: "Infinitely many solutions",
      question: "Find the solution set represented by \\(\\begin{pmatrix}1&2&0&|&5\\\\0&0&1&|&-1\\end{pmatrix}\\).",
      answer: "The pivot variables are \\(x\\) and \\(z\\). The variable \\(y\\) is free, so set \\(y=t\\). The first row gives \\(x+2y=5\\), so \\(x=5-2t\\). The second row gives \\(z=-1\\). Therefore \\((x,y,z)=(5-2t,t,-1)\\), where \\(t\\in\\mathbb R\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "No solution",
      question: "Classify a system whose reduced augmented matrix contains \\(\\begin{pmatrix}0&0&|&7\\end{pmatrix}\\).",
      answer: "The row says \\(0=7\\), which is impossible. Therefore no vector satisfies all equations at the same time, and the solution set is empty.",
    },
    {
      title: "Parameter vector form",
      question: "Write \\((x,y,z)=(5-2t,t,-1)\\) as a fixed vector plus a parameter times a direction vector.",
      answer: "Separate constant and \\(t\\)-dependent parts: \\((5-2t,t,-1)=(5,0,-1)+t(-2,1,0)\\). The fixed vector \\((5,0,-1)\\) is one solution, and \\((-2,1,0)\\) is a direction vector along the solution line.",
    },
  ]}
/>`;

const inverseComputationContent = String.raw`## Principle

Gauss-Jordan elimination can compute the inverse of a square matrix. The method row-reduces the augmented matrix \([A\mid I]\). If the left side becomes \(I\), then the right side becomes \(A^{-1}\).

## Notation

<Notation
  items={[
    { symbol: "A", meaning: "a square matrix" },
    { symbol: "I_n", meaning: "the n by n identity matrix" },
    { symbol: "A^{-1}", meaning: "the inverse of A" },
    { symbol: "[A\\mid I_n]", meaning: "the augmented matrix used to compute an inverse" },
    { symbol: "\\sim", meaning: "row-equivalent" },
  ]}
/>

## The Core Method

To compute an inverse:

1. Form \([A\mid I_n]\).
2. Use Gauss-Jordan elimination on the whole augmented matrix.
3. If the left block reduces to \(I_n\), read the inverse from the right block.

<Equation label="Inverse computation" tex="[A\mid I_n]\sim[I_n\mid A^{-1}]" />

If the left block cannot be reduced to \(I_n\), then \(A\) is singular and \(A^{-1}\) does not exist.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Compute an inverse by row reduction",
      question: "Use row reduction to invert \\(A=\\begin{pmatrix}1&2\\\\3&7\\end{pmatrix}\\).",
      answer: "Start with \\([A|I]=\\begin{pmatrix}1&2&|&1&0\\\\3&7&|&0&1\\end{pmatrix}\\). Apply \\(R_2\\leftarrow R_2-3R_1\\): \\(\\begin{pmatrix}1&2&|&1&0\\\\0&1&|&-3&1\\end{pmatrix}\\). Clear above the second pivot with \\(R_1\\leftarrow R_1-2R_2\\): \\(\\begin{pmatrix}1&0&|&7&-2\\\\0&1&|&-3&1\\end{pmatrix}\\). Therefore \\(A^{-1}=\\begin{pmatrix}7&-2\\\\-3&1\\end{pmatrix}\\).",
    },
    {
      title: "Detect failure",
      question: "What happens when row reduction of \\([A|I]\\) produces a zero row in the left block?",
      answer: "A zero row in the left block means the left block cannot become the identity matrix. Therefore \\(A\\) is not row-equivalent to \\(I\\), so \\(A\\) is singular and has no inverse.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Verify the computed inverse",
      question: "Verify that \\(\\begin{pmatrix}7&-2\\\\-3&1\\end{pmatrix}\\) is the inverse of \\(\\begin{pmatrix}1&2\\\\3&7\\end{pmatrix}\\).",
      answer: "Multiply: \\(\\begin{pmatrix}1&2\\\\3&7\\end{pmatrix}\\begin{pmatrix}7&-2\\\\-3&1\\end{pmatrix}=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}\\). The reverse product also gives \\(I_2\\). Therefore the computed matrix is the inverse.",
    },
    {
      title: "Why augment with identity",
      question: "Why does the method use \\([A|I]\\), not \\([A|0]\\)?",
      answer: "Row operations on the left are equivalent to multiplying by elementary matrices. Reducing \\(A\\) to \\(I\\) applies those same operations to the right block. Starting with \\(I\\) records the total operation that turns \\(A\\) into \\(I\\), which is exactly \\(A^{-1}\\). Starting with \\(0\\) would only produce \\(0\\).",
    },
  ]}
/>`;

const invertibleMatrixTheoremContent = String.raw`## Principle

The invertible matrix theorem collects many equivalent ways to say that a square matrix is invertible. These tests connect row reduction, linear systems, determinants, pivots, kernels, and columns.

For a square matrix, proving any one condition proves all the others.

## Notation

<Notation
  items={[
    { symbol: "A", meaning: "an n by n matrix" },
    { symbol: "A^{-1}", meaning: "the inverse of A" },
    { symbol: "I_n", meaning: "the n by n identity matrix" },
    { symbol: "\\det A", meaning: "the determinant of A" },
    { symbol: "A\\mathbf x=\\mathbf b", meaning: "a square linear system" },
    { symbol: "\\mathbf 0", meaning: "the zero vector" },
  ]}
/>

## The Core Test

For an \(n\) by \(n\) matrix \(A\), the following conditions are equivalent:

1. \(A\) is invertible.
2. The RREF of \(A\) is \(I_n\).
3. \(A\) has a pivot in every column.
4. \(A\mathbf x=\mathbf 0\) has only the zero solution.
5. \(A\mathbf x=\mathbf b\) has a unique solution for every \(\mathbf b\in\mathbb R^n\).
6. The columns of \(A\) span \(\mathbb R^n\).
7. \(\det A\ne0\).

In compact form:

<Equation label="Invertibility and determinant" tex="A\text{ invertible}\Longleftrightarrow \det A\ne0" />

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Use RREF to prove invertibility",
      question: "Suppose row reduction gives \\(A\\sim I_3\\). What can you conclude about \\(A\\)?",
      answer: "If a square matrix row-reduces to the identity matrix, then it has a pivot in every column. By the invertible matrix theorem, \\(A\\) is invertible, \\(A\\mathbf x=\\mathbf 0\\) has only the zero solution, and \\(A\\mathbf x=\\mathbf b\\) has a unique solution for every \\(\\mathbf b\\in\\mathbb R^3\\).",
    },
    {
      title: "Use determinant to reject invertibility",
      question: "If \\(\\det A=0\\) for a \\(4\\) by \\(4\\) matrix \\(A\\), what can you conclude?",
      answer: "The determinant test says \\(A\\) is invertible exactly when \\(\\det A\\ne0\\). Since \\(\\det A=0\\), the matrix is not invertible. It cannot have a pivot in every column, and the homogeneous system \\(A\\mathbf x=\\mathbf 0\\) has a non-zero solution.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Homogeneous system test",
      question: "A square matrix \\(A\\) has a non-zero vector \\(\\mathbf v\\) such that \\(A\\mathbf v=\\mathbf 0\\). Can \\(A\\) be invertible?",
      answer: "No. If \\(A\\) were invertible, multiply \\(A\\mathbf v=\\mathbf 0\\) by \\(A^{-1}\\) to get \\(A^{-1}A\\mathbf v=A^{-1}\\mathbf 0\\), so \\(I\\mathbf v=\\mathbf 0\\), hence \\(\\mathbf v=\\mathbf 0\\). This contradicts \\(\\mathbf v\\ne\\mathbf 0\\). Therefore \\(A\\) is not invertible.",
    },
    {
      title: "Every right-hand side",
      question: "Why does invertibility imply \\(A\\mathbf x=\\mathbf b\\) has a solution for every \\(\\mathbf b\\)?",
      answer: "If \\(A\\) is invertible, define \\(\\mathbf x=A^{-1}\\mathbf b\\). Then \\(A\\mathbf x=A(A^{-1}\\mathbf b)=(AA^{-1})\\mathbf b=I\\mathbf b=\\mathbf b\\). Therefore this \\(\\mathbf x\\) solves the system for any right-hand side \\(\\mathbf b\\).",
    },
  ]}
/>`;

const smallDeterminantsContent = String.raw`## Principle

A determinant is a scalar attached to a square matrix. For small matrices, it is a direct calculation. For \(2\) by \(2\) matrices, it measures signed area scaling. For \(3\) by \(3\) matrices, it measures signed volume scaling.

Determinants are defined only for square matrices.

## Notation

<Notation
  items={[
    { symbol: "\\det A", meaning: "the determinant of a square matrix A" },
    { symbol: "|A|", meaning: "another notation for \\det A, not an absolute value unless context says so" },
    { symbol: "a,b,c,d", meaning: "entries of a 2 by 2 matrix" },
    { symbol: "\\mathbf a,\\mathbf b,\\mathbf c", meaning: "column vectors of a 3 by 3 matrix" },
    { symbol: "\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)", meaning: "scalar triple product" },
  ]}
/>

## The Core Method

For a \(1\) by \(1\) matrix, the determinant is its only entry:

<Equation label="One by one determinant" tex="\det\begin{pmatrix}a\end{pmatrix}=a" />

For a \(2\) by \(2\) matrix,

<Equation label="Two by two determinant" tex="\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc" />

For a \(3\) by \(3\) matrix with columns \(\mathbf a,\mathbf b,\mathbf c\),

<Equation label="Three by three determinant" tex="\det(\mathbf a\;\mathbf b\;\mathbf c)=\mathbf a\cdot(\mathbf b\times\mathbf c)" />

The sign depends on column order. Swapping two columns changes the sign.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Compute a two by two determinant",
      question: "Compute \\(\\det\\begin{pmatrix}3&-2\\\\5&4\\end{pmatrix}\\).",
      answer: "Use \\(ad-bc\\). Here \\(a=3\\), \\(b=-2\\), \\(c=5\\), and \\(d=4\\). Then \\(ad=3\\cdot4=12\\), and \\(bc=(-2)\\cdot5=-10\\). Therefore \\(ad-bc=12-(-10)=22\\). The determinant is \\(22\\).",
    },
    {
      title: "Compute from a scalar triple product",
      question: "Find the determinant of the matrix with columns \\(\\mathbf a=(1,0,2)\\), \\(\\mathbf b=(0,3,-1)\\), and \\(\\mathbf c=(2,1,0)\\).",
      answer: "Compute \\(\\mathbf b\\times\\mathbf c=(0,3,-1)\\times(2,1,0)=(3\\cdot0-(-1)\\cdot1,(-1)\\cdot2-0\\cdot0,0\\cdot1-3\\cdot2)=(1,-2,-6)\\). Now dot with \\(\\mathbf a\\): \\(\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)=(1,0,2)\\cdot(1,-2,-6)=1+0-12=-11\\). The determinant is \\(-11\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Zero determinant in two dimensions",
      question: "Compute \\(\\det\\begin{pmatrix}2&6\\\\1&3\\end{pmatrix}\\) and interpret the result.",
      answer: "The determinant is \\(2\\cdot3-6\\cdot1=6-6=0\\). The columns \\((2,1)\\) and \\((6,3)\\) are parallel because \\((6,3)=3(2,1)\\). They span zero area, which matches the zero determinant.",
    },
    {
      title: "Non-square matrix",
      question: "Why does \\(\\begin{pmatrix}1&2&3\\\\4&5&6\\end{pmatrix}\\) not have a determinant?",
      answer: "The matrix has \\(2\\) rows and \\(3\\) columns, so it is not square. Determinants are defined only for square matrices. Therefore this matrix has no determinant.",
    },
  ]}
/>`;

const generalDeterminantContent = String.raw`## Principle

The general determinant extends the small determinant formulas to every square matrix. It can be defined by expanding along a row or column, using smaller determinants called minors.

The signs alternate in a checkerboard pattern.

## Notation

<Notation
  items={[
    { symbol: "A", meaning: "an n by n matrix" },
    { symbol: "a_{ij}", meaning: "entry in row i and column j" },
    { symbol: "A_{ij}", meaning: "the matrix obtained by deleting row i and column j from A" },
    { symbol: "M_{ij}", meaning: "the minor determinant \\det(A_{ij})" },
    { symbol: "C_{ij}", meaning: "the cofactor \\((-1)^{i+j}M_{ij}\\)" },
  ]}
/>

## The Core Method

The cofactor of entry \(a_{ij}\) is

<Equation label="Cofactor" tex="C_{ij}=(-1)^{i+j}\det(A_{ij})" />

Expansion along row \(i\) is

<Equation label="Row expansion" tex="\det A=a_{i1}C_{i1}+a_{i2}C_{i2}+\cdots+a_{in}C_{in}" />

Expansion along column \(j\) is

<Equation label="Column expansion" tex="\det A=a_{1j}C_{1j}+a_{2j}C_{2j}+\cdots+a_{nj}C_{nj}" />

The sign pattern starts with a plus sign in the top-left corner:

<Equation label="Cofactor signs" tex="\begin{pmatrix}+&-&+&\cdots\\-&+&-&\cdots\\+&-&+&\cdots\\\vdots&\vdots&\vdots&\ddots\end{pmatrix}" />

Choose a row or column with many zeros when possible.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Expand along a row",
      question: "Compute \\(\\det\\begin{pmatrix}1&2&0\\\\3&-1&4\\\\2&0&5\\end{pmatrix}\\) by expanding along the first row.",
      answer: "Expand along row \\(1\\): \\(\\det A=1C_{11}+2C_{12}+0C_{13}\\). Compute \\(C_{11}=(-1)^2\\det\\begin{pmatrix}-1&4\\\\0&5\\end{pmatrix}=(-1)(5)-4(0)=-5\\). Compute \\(C_{12}=(-1)^3\\det\\begin{pmatrix}3&4\\\\2&5\\end{pmatrix}=-(3\\cdot5-4\\cdot2)=-(15-8)=-7\\). Therefore \\(\\det A=1(-5)+2(-7)+0=-19\\).",
    },
    {
      title: "Use zeros",
      question: "Why is the third column useful for expanding \\(\\begin{pmatrix}2&1&0\\\\4&3&0\\\\1&5&7\\end{pmatrix}\\)?",
      answer: "The third column contains two zeros. Expanding along that column leaves only one non-zero term: \\(7C_{33}\\). Since \\(C_{33}=(-1)^6\\det\\begin{pmatrix}2&1\\\\4&3\\end{pmatrix}=6-4=2\\), the determinant is \\(7\\cdot2=14\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Cofactor sign",
      question: "What is the sign attached to the minor in position \\((2,3)\\)?",
      answer: "The cofactor sign is \\((-1)^{i+j}\\). For \\((2,3)\\), this is \\((-1)^{2+3}=(-1)^5=-1\\). So \\(C_{23}=-M_{23}\\).",
    },
    {
      title: "Minor size",
      question: "If \\(A\\) is \\(5\\) by \\(5\\), what is the size of \\(A_{ij}\\)?",
      answer: "Deleting one row and one column from a \\(5\\) by \\(5\\) matrix leaves \\(4\\) rows and \\(4\\) columns. Therefore \\(A_{ij}\\) is \\(4\\) by \\(4\\).",
    },
  ]}
/>`;

const determinantPropertiesContent = String.raw`## Principle

Determinant properties explain how the determinant changes under row operations and matrix operations. These rules are usually faster and more informative than expanding from the definition.

The key idea is that the determinant is linear in each row or column and changes sign when two rows or columns are swapped.

## Notation

<Notation
  items={[
    { symbol: "A,B", meaning: "square matrices of the same size" },
    { symbol: "R_i", meaning: "row i" },
    { symbol: "\\lambda", meaning: "a scalar" },
    { symbol: "A^T", meaning: "transpose of A" },
    { symbol: "I_n", meaning: "n by n identity matrix" },
  ]}
/>

## The Core Method

Use these determinant rules:

<Equation label="Identity determinant" tex="\det I_n=1" />

<Equation label="Transpose determinant" tex="\det(A^T)=\det A" />

<Equation label="Product determinant" tex="\det(AB)=\det A\det B" />

Row operation effects:

- Swapping two rows multiplies the determinant by \(-1\).
- Multiplying one row by \(\lambda\) multiplies the determinant by \(\lambda\).
- Adding a multiple of one row to another row does not change the determinant.

If a matrix has a zero row, repeated row, or one row that is a scalar multiple of another row, its determinant is zero.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Track row operations",
      question: "A matrix \\(A\\) is transformed into \\(B\\) by swapping two rows, then multiplying one row by \\(5\\). If \\(\\det B=20\\), find \\(\\det A\\).",
      answer: "A row swap multiplies the determinant by \\(-1\\). Multiplying one row by \\(5\\) then multiplies the determinant by \\(5\\). Therefore \\(\\det B=-5\\det A\\). Since \\(20=-5\\det A\\), divide by \\(-5\\) to get \\(\\det A=-4\\).",
    },
    {
      title: "Use product rule",
      question: "If \\(\\det A=-2\\) and \\(\\det B=7\\), find \\(\\det(AB)\\).",
      answer: "Use \\(\\det(AB)=\\det A\\det B\\). Substitute the values: \\(\\det(AB)=(-2)(7)=-14\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Repeated rows",
      question: "Why does a matrix with two equal rows have determinant zero?",
      answer: "Swap the two equal rows. A row swap should multiply the determinant by \\(-1\\). But the matrix is unchanged because the rows are equal, so the determinant is also unchanged. Therefore \\(\\det A=-\\det A\\), giving \\(2\\det A=0\\), so \\(\\det A=0\\).",
    },
    {
      title: "Scalar multiple of a matrix",
      question: "If \\(A\\) is \\(3\\) by \\(3\\), what is \\(\\det(2A)\\) in terms of \\(\\det A\\)?",
      answer: "Multiplying the whole matrix by \\(2\\) multiplies each of the three rows by \\(2\\). Each row scaling contributes a factor of \\(2\\), so \\(\\det(2A)=2^3\\det A=8\\det A\\).",
    },
  ]}
/>`;

const determinantCalculationsContent = String.raw`## Principle

Determinants can be calculated efficiently by using row operations to create zeros. The best method is usually to reduce the matrix toward triangular form while tracking how each row operation changes the determinant.

For a triangular matrix, the determinant is the product of its diagonal entries.

## Notation

<Notation
  items={[
    { symbol: "A", meaning: "a square matrix" },
    { symbol: "U", meaning: "an upper triangular matrix" },
    { symbol: "R_i", meaning: "row i" },
    { symbol: "u_{ii}", meaning: "diagonal entry i of U" },
    { symbol: "\\det A", meaning: "determinant of A" },
  ]}
/>

## The Core Method

A triangular matrix has determinant equal to the product of diagonal entries:

<Equation label="Triangular determinant" tex="\det U=u_{11}u_{22}\cdots u_{nn}" />

Use row replacement operations to create zeros, because they do not change the determinant:

<Equation label="Safe row replacement" tex="R_i\leftarrow R_i+\lambda R_j\quad\text{does not change }\det" />

If you swap rows or scale rows, track the change carefully:

- Row swap: determinant changes sign.
- Row scaling by \(\lambda\): determinant is multiplied by \(\lambda\).

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Use row replacement",
      question: "Compute \\(\\det\\begin{pmatrix}1&2&1\\\\3&8&5\\\\0&4&2\\end{pmatrix}\\).",
      answer: "Use row replacement operations. Start with \\(A\\). Apply \\(R_2\\leftarrow R_2-3R_1\\), which does not change the determinant: row \\(2\\) becomes \\((0,2,2)\\). The matrix is now \\(\\begin{pmatrix}1&2&1\\\\0&2&2\\\\0&4&2\\end{pmatrix}\\). Apply \\(R_3\\leftarrow R_3-2R_2\\), giving row \\(3\\) as \\((0,0,-2)\\). The triangular matrix is \\(\\begin{pmatrix}1&2&1\\\\0&2&2\\\\0&0&-2\\end{pmatrix}\\). Its determinant is \\(1\\cdot2\\cdot(-2)=-4\\). Therefore \\(\\det A=-4\\).",
    },
    {
      title: "Account for a row swap",
      question: "A row swap changes \\(A\\) into an upper triangular matrix \\(U\\) with diagonal entries \\(2\\), \\(-1\\), and \\(5\\). Find \\(\\det A\\).",
      answer: "The triangular determinant is \\(\\det U=2\\cdot(-1)\\cdot5=-10\\). One row swap gives \\(\\det U=-\\det A\\). Therefore \\(-10=-\\det A\\), so \\(\\det A=10\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Choose a good expansion row",
      question: "Which row is best for cofactor expansion in \\(\\begin{pmatrix}4&0&0\\\\1&2&3\\\\5&0&6\\end{pmatrix}\\)?",
      answer: "The first row has two zeros, so expanding along the first row leaves only one non-zero term. This minimises calculation. The determinant is \\(4\\det\\begin{pmatrix}2&3\\\\0&6\\end{pmatrix}=4(12)=48\\).",
    },
    {
      title: "Avoid scaling mistakes",
      question: "If you replace \\(R_2\\) by \\(\\frac12R_2\\) during determinant calculation, what must you remember?",
      answer: "Scaling one row by \\(1/2\\) scales the determinant by \\(1/2\\). If the new matrix is \\(B\\), then \\(\\det B=\\frac12\\det A\\). Therefore \\(\\det A=2\\det B\\). Forgetting this factor gives the wrong determinant.",
    },
  ]}
/>`;

const determinantsAndInvertibilityContent = String.raw`## Principle

The determinant is the main scalar test for invertibility. A square matrix is invertible exactly when its determinant is non-zero.

This connects determinant calculations to linear systems: a non-zero determinant means every right-hand side has a unique solution.

## Notation

<Notation
  items={[
    { symbol: "A", meaning: "an n by n matrix" },
    { symbol: "A^{-1}", meaning: "inverse of A" },
    { symbol: "\\det A", meaning: "determinant of A" },
    { symbol: "A\\mathbf x=\\mathbf b", meaning: "a square linear system" },
    { symbol: "\\mathbf 0", meaning: "the zero vector" },
  ]}
/>

## The Core Test

The determinant invertibility test is

<Equation label="Determinant invertibility test" tex="A\text{ is invertible}\Longleftrightarrow \det A\ne0" />

Equivalently,

<Equation label="Singular test" tex="A\text{ is singular}\Longleftrightarrow \det A=0" />

Consequences for systems:

- If \(\det A\ne0\), then \(A\mathbf x=\mathbf b\) has exactly one solution for every \(\mathbf b\).
- If \(\det A=0\), then \(A\mathbf x=\mathbf 0\) has a non-zero solution.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Test a two by two matrix",
      question: "Decide whether \\(A=\\begin{pmatrix}2&5\\\\1&3\\end{pmatrix}\\) is invertible.",
      answer: "Compute the determinant: \\(\\det A=2\\cdot3-5\\cdot1=6-5=1\\). Since \\(\\det A\\ne0\\), the matrix is invertible. Therefore \\(A\\mathbf x=\\mathbf b\\) has a unique solution for every \\(\\mathbf b\\in\\mathbb R^2\\).",
    },
    {
      title: "Detect singularity from dependent rows",
      question: "Show that \\(B=\\begin{pmatrix}1&2&3\\\\2&4&6\\\\0&1&1\\end{pmatrix}\\) is singular.",
      answer: "Row \\(2\\) is \\(2\\) times row \\(1\\). A matrix with one row a scalar multiple of another row has determinant zero. Therefore \\(\\det B=0\\), so \\(B\\) is singular and has no inverse.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Homogeneous consequence",
      question: "If \\(\\det A=0\\), what can be said about \\(A\\mathbf x=\\mathbf 0\\)?",
      answer: "A zero determinant means \\(A\\) is not invertible. For a square matrix, this is equivalent to saying that the homogeneous system \\(A\\mathbf x=\\mathbf 0\\) has at least one non-zero solution. So the solution set contains more than just \\(\\mathbf 0\\).",
    },
    {
      title: "Product of invertible matrices",
      question: "If \\(A\\) and \\(B\\) are invertible square matrices of the same size, why is \\(AB\\) invertible?",
      answer: "Invertibility gives \\(\\det A\\ne0\\) and \\(\\det B\\ne0\\). The product rule gives \\(\\det(AB)=\\det A\\det B\\). A product of two non-zero real numbers is non-zero, so \\(\\det(AB)\\ne0\\). Therefore \\(AB\\) is invertible.",
    },
  ]}
/>`;

const adjugateMatrixContent = String.raw`## Principle

The adjugate matrix is built from cofactors. It gives a formula for the inverse of an invertible square matrix and explains why inverse entries depend on determinants.

For large matrices, row reduction is usually faster for computation, but the adjugate formula is important theoretically.

## Notation

<Notation
  items={[
    { symbol: "C_{ij}", meaning: "cofactor of entry a_{ij}" },
    { symbol: "C", meaning: "the cofactor matrix" },
    { symbol: "\\operatorname{adj}(A)", meaning: "the adjugate of A" },
    { symbol: "A^{-1}", meaning: "the inverse of A" },
    { symbol: "\\det A", meaning: "determinant of A" },
  ]}
/>

## The Core Method

First form the cofactor matrix \(C=(C_{ij})\). Then transpose it:

<Equation label="Adjugate" tex="\operatorname{adj}(A)=C^T" />

The key identity is

<Equation label="Adjugate identity" tex="A\operatorname{adj}(A)=\operatorname{adj}(A)A=(\det A)I" />

If \(\det A\ne0\), divide by \(\det A\) to get the inverse:

<Equation label="Inverse by adjugate" tex="A^{-1}=\frac{1}{\det A}\operatorname{adj}(A)" />

For a \(2\) by \(2\) matrix, this reduces to the familiar formula.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Adjugate of a two by two matrix",
      question: "Find \\(\\operatorname{adj}(A)\\) for \\(A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\).",
      answer: "Compute cofactors. \\(C_{11}=d\\), \\(C_{12}=-c\\), \\(C_{21}=-b\\), and \\(C_{22}=a\\). So the cofactor matrix is \\(C=\\begin{pmatrix}d&-c\\\\-b&a\\end{pmatrix}\\). The adjugate is the transpose: \\(\\operatorname{adj}(A)=C^T=\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}\\).",
    },
    {
      title: "Use the adjugate inverse formula",
      question: "Use the adjugate formula to invert \\(A=\\begin{pmatrix}2&1\\\\5&3\\end{pmatrix}\\).",
      answer: "The determinant is \\(2\\cdot3-1\\cdot5=1\\). The adjugate is \\(\\begin{pmatrix}3&-1\\\\-5&2\\end{pmatrix}\\). Therefore \\(A^{-1}=\\frac{1}{1}\\begin{pmatrix}3&-1\\\\-5&2\\end{pmatrix}=\\begin{pmatrix}3&-1\\\\-5&2\\end{pmatrix}\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Why determinant non-zero matters",
      question: "Why does the adjugate formula require \\(\\det A\\ne0\\)?",
      answer: "The formula is \\(A^{-1}=\\frac{1}{\\det A}\\operatorname{adj}(A)\\). If \\(\\det A=0\\), this divides by zero, which is not defined. This agrees with the invertibility test: zero determinant means no inverse exists.",
    },
    {
      title: "Cofactor transpose",
      question: "If the cofactor matrix is \\(C=\\begin{pmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{pmatrix}\\), what is \\(\\operatorname{adj}(A)\\)?",
      answer: "The adjugate is the transpose of the cofactor matrix. Therefore \\(\\operatorname{adj}(A)=C^T=\\begin{pmatrix}1&4&7\\\\2&5&8\\\\3&6&9\\end{pmatrix}\\).",
    },
  ]}
/>`;

const cramersRuleContent = String.raw`## Principle

Cramer's Rule solves a square linear system using determinants. It gives each unknown as a ratio of determinants, provided the coefficient determinant is non-zero.

It is most useful for theory and small systems, not for large numerical computation.

## Notation

<Notation
  items={[
    { symbol: "A\\mathbf x=\\mathbf b", meaning: "a square linear system" },
    { symbol: "A_i(\\mathbf b)", meaning: "matrix obtained from A by replacing column i with \\mathbf b" },
    { symbol: "x_i", meaning: "unknown i in the solution vector" },
    { symbol: "\\det A", meaning: "coefficient determinant" },
    { symbol: "\\mathbf b", meaning: "right-hand side vector" },
  ]}
/>

## The Core Method

For \(A\mathbf x=\mathbf b\), if \(A\) is \(n\) by \(n\) and \(\det A\ne0\), then

<Equation label="Cramer's Rule" tex="x_i=\frac{\det A_i(\mathbf b)}{\det A}" />

where \(A_i(\mathbf b)\) is formed by replacing column \(i\) of \(A\) with \(\mathbf b\).

For a \(2\) by \(2\) system

<Equation label="Two by two system" tex="\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}e\\f\end{pmatrix}" />

the solution is

<Equation label="Two by two Cramer formula" tex="x=\frac{\det\begin{pmatrix}e&b\\f&d\end{pmatrix}}{ad-bc},\qquad y=\frac{\det\begin{pmatrix}a&e\\c&f\end{pmatrix}}{ad-bc}" />

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Solve a two by two system",
      question: "Use Cramer's Rule to solve \\(2x+y=5\\), \\(x+3y=7\\).",
      answer: "The coefficient matrix is \\(A=\\begin{pmatrix}2&1\\\\1&3\\end{pmatrix}\\), and \\(\\det A=2\\cdot3-1\\cdot1=5\\). Replace the first column with \\(\\mathbf b=(5,7)\\): \\(A_1=\\begin{pmatrix}5&1\\\\7&3\\end{pmatrix}\\), so \\(\\det A_1=15-7=8\\). Thus \\(x=8/5\\). Replace the second column: \\(A_2=\\begin{pmatrix}2&5\\\\1&7\\end{pmatrix}\\), so \\(\\det A_2=14-5=9\\). Thus \\(y=9/5\\).",
    },
    {
      title: "Check applicability",
      question: "Can Cramer's Rule be used when \\(\\det A=0\\)?",
      answer: "No. Cramer's Rule divides by \\(\\det A\\). If \\(\\det A=0\\), the formula is undefined. The system may have no solution or infinitely many solutions, but it does not have the unique-solution situation required by the rule.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Identify a replacement matrix",
      question: "For a \\(3\\) by \\(3\\) system \\(A\\mathbf x=\\mathbf b\\), what is \\(A_2(\\mathbf b)\\)?",
      answer: "The matrix \\(A_2(\\mathbf b)\\) is obtained by replacing the second column of \\(A\\) with the right-hand side vector \\(\\mathbf b\\), while leaving columns \\(1\\) and \\(3\\) unchanged. Its determinant is used to compute \\(x_2\\).",
    },
    {
      title: "Why Cramer's Rule is not a fast large-system method",
      question: "Why is row reduction usually preferred over Cramer's Rule for large systems?",
      answer: "Cramer's Rule requires computing one determinant for \\(A\\) and one determinant for each unknown. For \\(n\\) unknowns, that is \\(n+1\\) determinants. Row reduction solves the system more systematically and usually with much less computation for large \\(n\\).",
    },
  ]}
/>`;

const determinantsAndGeometryContent = String.raw`## Principle

Determinants measure signed scaling of geometric size. In two dimensions, the absolute value of a determinant gives area. In three dimensions, it gives volume. The sign records orientation.

This geometric meaning explains why a zero determinant means collapse into a lower-dimensional shape.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf u,\\mathbf v", meaning: "vectors in \\mathbb R^2 or \\mathbb R^3" },
    { symbol: "\\mathbf w", meaning: "a third vector in \\mathbb R^3" },
    { symbol: "|\\det A|", meaning: "absolute determinant value, interpreted as area or volume scaling" },
    { symbol: "\\mathbf u\\cdot(\\mathbf v\\times\\mathbf w)", meaning: "signed volume from three vectors in \\mathbb R^3" },
    { symbol: "\\theta", meaning: "angle between two non-zero vectors" },
  ]}
/>

## The Core Method

For two vectors \(\mathbf u=(u_1,u_2)\) and \(\mathbf v=(v_1,v_2)\), the parallelogram area is

<Equation label="Area from determinant" tex="\text{area}=\left|\det\begin{pmatrix}u_1&v_1\\u_2&v_2\end{pmatrix}\right|" />

For three vectors in \(\mathbb R^3\), the parallelepiped volume is

<Equation label="Volume from determinant" tex="\text{volume}=|\mathbf u\cdot(\mathbf v\times\mathbf w)|" />

A determinant of zero means the area or volume is zero. The vectors do not span the full dimension.

The sign records orientation: reversing the order of two vectors reverses the sign but leaves area or volume unchanged.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Area of a parallelogram",
      question: "Find the area of the parallelogram spanned by \\(\\mathbf u=(3,1)\\) and \\(\\mathbf v=(2,5)\\).",
      answer: "Place the vectors as columns: \\(\\begin{pmatrix}3&2\\\\1&5\\end{pmatrix}\\). Its determinant is \\(3\\cdot5-2\\cdot1=15-2=13\\). The area is the absolute value, so the area is \\(|13|=13\\) square units.",
    },
    {
      title: "Volume of a parallelepiped",
      question: "Find the volume spanned by \\(\\mathbf u=(1,0,2)\\), \\(\\mathbf v=(0,3,-1)\\), and \\(\\mathbf w=(2,1,0)\\).",
      answer: "Compute the scalar triple product. First \\(\\mathbf v\\times\\mathbf w=(0,3,-1)\\times(2,1,0)=(1,-2,-6)\\). Then \\(\\mathbf u\\cdot(\\mathbf v\\times\\mathbf w)=(1,0,2)\\cdot(1,-2,-6)=1-12=-11\\). The volume is the absolute value: \\(|-11|=11\\) cubic units.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Collapse to a line",
      question: "What geometric situation gives determinant zero for two vectors in \\(\\mathbb R^2\\)?",
      answer: "The determinant is zero when the parallelogram area is zero. That happens when the two vectors are parallel or one vector is zero. Instead of spanning an area, the vectors collapse onto a line or a point.",
    },
    {
      title: "Orientation change",
      question: "If \\(\\det(\\mathbf u\\;\\mathbf v)=6\\), what is \\(\\det(\\mathbf v\\;\\mathbf u)\\)?",
      answer: "Swapping two columns changes the sign of the determinant. Therefore \\(\\det(\\mathbf v\\;\\mathbf u)=-6\\). The parallelogram area is still \\(6\\), because area uses the absolute value.",
    },
  ]}
/>`;

const subspacesOfRnContent = String.raw`## Principle

A subspace of \(\mathbb R^n\) is a subset that behaves like a vector space using the usual vector addition and scalar multiplication. It must contain the zero vector and be closed under the two vector operations.

Subspaces are the linear sets that pass through the origin: lines through the origin, planes through the origin, and higher-dimensional analogues.

## Notation

<Notation
  items={[
    { symbol: "W", meaning: "a subset of \\mathbb R^n being tested as a subspace" },
    { symbol: "\\mathbf 0", meaning: "the zero vector in \\mathbb R^n" },
    { symbol: "\\mathbf u,\\mathbf v", meaning: "vectors in W" },
    { symbol: "\\lambda", meaning: "a real scalar" },
    { symbol: "\\lambda\\mathbf u+\\mathbf v", meaning: "a linear combination used in the subspace test" },
  ]}
/>

## The Core Test

To prove that \(W\subseteq\mathbb R^n\) is a subspace, check these three conditions:

1. \(\mathbf 0\in W\).
2. If \(\mathbf u,\mathbf v\in W\), then \(\mathbf u+\mathbf v\in W\).
3. If \(\mathbf u\in W\) and \(\lambda\in\mathbb R\), then \(\lambda\mathbf u\in W\).

Equivalently, combine closure under addition and scalar multiplication into one linear-combination test:

<Equation label="Subspace linear-combination test" tex="\mathbf u,\mathbf v\in W,\;\lambda,\mu\in\mathbb R\Longrightarrow \lambda\mathbf u+\mu\mathbf v\in W" />

If any one condition fails, \(W\) is not a subspace.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Plane through the origin",
      question: "Show that \\(W=\\{(x,y,z)\\in\\mathbb R^3:x+2y-z=0\\}\\) is a subspace of \\(\\mathbb R^3\\).",
      answer: "First check the zero vector: \\(0+2(0)-0=0\\), so \\(\\mathbf0\\in W\\). Let \\(\\mathbf u=(x_1,y_1,z_1)\\in W\\) and \\(\\mathbf v=(x_2,y_2,z_2)\\in W\\). Then \\(x_1+2y_1-z_1=0\\) and \\(x_2+2y_2-z_2=0\\). For scalars \\(\\lambda,\\mu\\), compute the defining expression for \\(\\lambda\\mathbf u+\\mu\\mathbf v\\): \\(\\lambda x_1+\\mu x_2+2(\\lambda y_1+\\mu y_2)-(\\lambda z_1+\\mu z_2)\\). Group terms: \\(\\lambda(x_1+2y_1-z_1)+\\mu(x_2+2y_2-z_2)=\\lambda0+\\mu0=0\\). Therefore every linear combination stays in \\(W\\), so \\(W\\) is a subspace.",
    },
    {
      title: "Affine plane not through the origin",
      question: "Show that \\(S=\\{(x,y,z)\\in\\mathbb R^3:x+2y-z=1\\}\\) is not a subspace.",
      answer: "A subspace must contain the zero vector. Test \\(\\mathbf0=(0,0,0)\\): \\(0+2(0)-0=0\\), not \\(1\\). Therefore \\(\\mathbf0\\notin S\\). Since the zero-vector condition fails, \\(S\\) is not a subspace.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Line through the origin",
      question: "Is \\(L=\\{t(2,-1,3):t\\in\\mathbb R\\}\\) a subspace of \\(\\mathbb R^3\\)?",
      answer: "Yes. The zero vector occurs when \\(t=0\\). If \\(\\mathbf u=s(2,-1,3)\\) and \\(\\mathbf v=t(2,-1,3)\\), then \\(\\lambda\\mathbf u+\\mu\\mathbf v=(\\lambda s+\\mu t)(2,-1,3)\\), which is still in \\(L\\). Therefore \\(L\\) is a subspace.",
    },
    {
      title: "A positivity condition fails",
      question: "Is \\(P=\\{(x,y)\\in\\mathbb R^2:x\\ge0\\}\\) a subspace?",
      answer: "No. The vector \\(\\mathbf u=(1,0)\\) lies in \\(P\\), but scalar multiplication by \\(-1\\) gives \\(-\\mathbf u=(-1,0)\\), which does not lie in \\(P\\). Closure under scalar multiplication fails.",
    },
  ]}
/>`;

const spanningSetsContent = String.raw`## Principle

A spanning set is a collection of vectors whose linear combinations produce every vector in a target set. To say that vectors span a subspace means they are enough building blocks to reach every vector in that subspace.

Spanning is about coverage.

## Notation

<Notation
  items={[
    { symbol: "\\operatorname{span}(\\mathbf v_1,\\ldots,\\mathbf v_k)", meaning: "the set of all linear combinations of the listed vectors" },
    { symbol: "\\mathbf v_1,\\ldots,\\mathbf v_k", meaning: "vectors used as spanning vectors" },
    { symbol: "c_1,\\ldots,c_k", meaning: "real coefficients in a linear combination" },
    { symbol: "W", meaning: "a subspace being spanned" },
    { symbol: "\\mathbf b", meaning: "a target vector being tested for membership in a span" },
  ]}
/>

## The Core Method

The span of vectors \(\mathbf v_1,\ldots,\mathbf v_k\) is

<Equation label="Span definition" tex="\operatorname{span}(\mathbf v_1,\ldots,\mathbf v_k)=\{c_1\mathbf v_1+\cdots+c_k\mathbf v_k:c_1,
\ldots,c_k\in\mathbb R\}" />

To test whether \(\mathbf b\) is in the span, solve

<Equation label="Membership equation" tex="c_1\mathbf v_1+\cdots+c_k\mathbf v_k=\mathbf b" />

Equivalently, use the matrix with the spanning vectors as columns:

<Equation label="Column span test" tex="A\mathbf c=\mathbf b" />

where \(A=(\mathbf v_1\;\cdots\;\mathbf v_k)\). The vector \(\mathbf b\) lies in the span exactly when this system is consistent.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Test membership in a span",
      question: "Decide whether \\(\\mathbf b=(5,1)\\) lies in \\(\\operatorname{span}((1,2),(3,-1))\\).",
      answer: "Solve \\(c_1(1,2)+c_2(3,-1)=(5,1)\\). This gives equations \\(c_1+3c_2=5\\) and \\(2c_1-c_2=1\\). From the first equation, \\(c_1=5-3c_2\\). Substitute into the second: \\(2(5-3c_2)-c_2=1\\), so \\(10-7c_2=1\\). Then \\(-7c_2=-9\\), giving \\(c_2=9/7\\). Hence \\(c_1=5-27/7=8/7\\). A solution exists, so \\(\\mathbf b\\) lies in the span.",
    },
    {
      title: "Describe a span",
      question: "Describe \\(\\operatorname{span}((2,0,0),(0,1,0))\\) in \\(\\mathbb R^3\\).",
      answer: "A general linear combination is \\(c_1(2,0,0)+c_2(0,1,0)=(2c_1,c_2,0)\\). The first two components can be any real numbers because \\(2c_1\\) can take any real value and \\(c_2\\) can take any real value. The third component is always zero. Therefore the span is the \\(xy\\)-plane: \\(\\{(x,y,0):x,y\\in\\mathbb R\\}\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Span of one vector",
      question: "What is \\(\\operatorname{span}((4,-2))\\)?",
      answer: "The span is all scalar multiples of \\((4,-2)\\): \\(\\{t(4,-2):t\\in\\mathbb R\\}\\). Geometrically, this is the line through the origin in the direction \\((4,-2)\\).",
    },
    {
      title: "Spanning all of R2",
      question: "Do \\((1,0)\\) and \\((0,1)\\) span \\(\\mathbb R^2\\)?",
      answer: "Yes. Any vector \\((x,y)\\in\\mathbb R^2\\) can be written as \\(x(1,0)+y(0,1)\\). Since every target vector can be produced, the two vectors span \\(\\mathbb R^2\\).",
    },
  ]}
/>`;

const linearIndependenceContent = String.raw`## Principle

Vectors are linearly independent when none of them is redundant. Algebraically, the only way to make the zero vector as a linear combination is to use all zero coefficients.

Linear dependence means at least one vector can be built from the others.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf v_1,\\ldots,\\mathbf v_k", meaning: "vectors being tested" },
    { symbol: "c_1,\\ldots,c_k", meaning: "coefficients in a linear combination" },
    { symbol: "\\mathbf 0", meaning: "the zero vector" },
    { symbol: "A", meaning: "matrix whose columns are the vectors being tested" },
    { symbol: "A\\mathbf c=\\mathbf 0", meaning: "homogeneous system for testing independence" },
  ]}
/>

## The Core Test

The vectors \(\mathbf v_1,
\ldots,\mathbf v_k\) are linearly independent when

<Equation label="Independence test" tex="c_1\mathbf v_1+\cdots+c_k\mathbf v_k=\mathbf 0\Longrightarrow c_1=\cdots=c_k=0" />

They are linearly dependent when there is a non-zero coefficient vector \((c_1,\ldots,c_k)\) such that

<Equation label="Dependence test" tex="c_1\mathbf v_1+\cdots+c_k\mathbf v_k=\mathbf 0" />

with at least one coefficient non-zero.

Put the vectors as columns of a matrix \(A\). Then independence is equivalent to the homogeneous system \(A\mathbf c=\mathbf 0\) having only the zero solution.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Test two vectors in R2",
      question: "Are \\(\\mathbf v_1=(1,2)\\) and \\(\\mathbf v_2=(3,6)\\) linearly independent?",
      answer: "Notice that \\(\\mathbf v_2=3\\mathbf v_1\\). Therefore \\(-3\\mathbf v_1+\\mathbf v_2=\\mathbf0\\). The coefficients \\(-3\\) and \\(1\\) are not both zero, so there is a non-trivial linear combination giving the zero vector. The vectors are linearly dependent.",
    },
    {
      title: "Use equations for independence",
      question: "Show that \\((1,0,1)\\), \\((0,1,1)\\), and \\((1,1,0)\\) are linearly independent.",
      answer: "Set \\(c_1(1,0,1)+c_2(0,1,1)+c_3(1,1,0)=(0,0,0)\\). Comparing components gives \\(c_1+c_3=0\\), \\(c_2+c_3=0\\), and \\(c_1+c_2=0\\). From the first two equations, \\(c_1=-c_3\\) and \\(c_2=-c_3\\). Substitute into the third: \\(-c_3-c_3=0\\), so \\(-2c_3=0\\), hence \\(c_3=0\\). Then \\(c_1=0\\) and \\(c_2=0\\). Only the zero coefficients work, so the vectors are linearly independent.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Too many vectors",
      question: "Can four vectors in \\(\\mathbb R^3\\) be linearly independent?",
      answer: "No. At most three vectors can be linearly independent in \\(\\mathbb R^3\\). Four vectors in \\(\\mathbb R^3\\) must be linearly dependent because there are more vectors than available coordinate dimensions.",
    },
    {
      title: "Zero vector in a list",
      question: "Why is any list containing \\(\\mathbf0\\) linearly dependent?",
      answer: "If one listed vector is \\(\\mathbf0\\), give that vector coefficient \\(1\\) and give every other vector coefficient \\(0\\). The linear combination equals \\(\\mathbf0\\), and the coefficient \\(1\\) is non-zero. Therefore the list is linearly dependent.",
    },
  ]}
/>`;

const basesInRnContent = String.raw`## Principle

A basis is a minimal set of building blocks for a subspace. It spans the subspace and is linearly independent. Spanning ensures every vector can be built; independence ensures the building instructions are unique.

For \(\mathbb R^n\), a basis contains exactly \(n\) vectors.

## Notation

<Notation
  items={[
    { symbol: "B", meaning: "a proposed basis" },
    { symbol: "\\mathbf v_1,\\ldots,\\mathbf v_k", meaning: "vectors in the proposed basis" },
    { symbol: "W", meaning: "the subspace being described" },
    { symbol: "\\operatorname{span}(B)", meaning: "the span of all vectors in B" },
    { symbol: "\\mathcal E", meaning: "the standard basis, when used" },
  ]}
/>

## The Core Test

A list \(B=(\mathbf v_1,
\ldots,\mathbf v_k)\) is a basis for a subspace \(W\) when both conditions hold:

1. \(\operatorname{span}(B)=W\).
2. The vectors in \(B\) are linearly independent.

For \(\mathbb R^n\), if you have exactly \(n\) vectors, then either of these tests is enough:

<Equation label="Basis test in Rn" tex="n\text{ vectors in }\mathbb R^n:\quad \text{independent}\Longleftrightarrow \text{span }\mathbb R^n\Longleftrightarrow \text{basis}" />

The standard basis of \(\mathbb R^n\) is

<Equation label="Standard basis" tex="\mathcal E=(\mathbf e_1,\ldots,\mathbf e_n)" />

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Test a basis of R2",
      question: "Is \\(((1,2),(3,4))\\) a basis of \\(\\mathbb R^2\\)?",
      answer: "Place the vectors as columns: \\(A=\\begin{pmatrix}1&3\\\\2&4\\end{pmatrix}\\). Compute the determinant: \\(\\det A=1\\cdot4-3\\cdot2=4-6=-2\\). Since the determinant is non-zero, the two columns are independent and span \\(\\mathbb R^2\\). Therefore they form a basis of \\(\\mathbb R^2\\).",
    },
    {
      title: "Basis for a plane",
      question: "Show that \\(((1,0,0),(0,1,0))\\) is a basis for \\(W=\\{(x,y,0):x,y\\in\\mathbb R\\}\\).",
      answer: "First, every vector in \\(W\\) has the form \\((x,y,0)\\). It can be written as \\(x(1,0,0)+y(0,1,0)\\), so the two vectors span \\(W\\). For independence, set \\(c_1(1,0,0)+c_2(0,1,0)=(0,0,0)\\). This gives \\((c_1,c_2,0)=(0,0,0)\\), so \\(c_1=0\\) and \\(c_2=0\\). The vectors are independent. Therefore they form a basis for \\(W\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Standard basis in R4",
      question: "Write the standard basis of \\(\\mathbb R^4\\).",
      answer: "The standard basis is \\((\\mathbf e_1,\\mathbf e_2,\\mathbf e_3,\\mathbf e_4)\\), where \\(\\mathbf e_1=(1,0,0,0)\\), \\(\\mathbf e_2=(0,1,0,0)\\), \\(\\mathbf e_3=(0,0,1,0)\\), and \\(\\mathbf e_4=(0,0,0,1)\\).",
    },
    {
      title: "Dependent spanning set is not a basis",
      question: "Why is \\(((1,0),(0,1),(1,1))\\) not a basis of \\(\\mathbb R^2\\), even though it spans \\(\\mathbb R^2\\)?",
      answer: "A basis must be independent as well as spanning. The third vector is \\((1,1)=(1,0)+(0,1)\\), so it is redundant. The list is linearly dependent, so it is not a basis.",
    },
  ]}
/>`;

const dimensionInRnContent = String.raw`## Principle

The dimension of a subspace is the number of vectors in any basis for that subspace. Dimension counts the number of independent directions needed to describe every vector in the subspace.

All bases of the same subspace have the same number of vectors.

## Notation

<Notation
  items={[
    { symbol: "\\dim W", meaning: "the dimension of subspace W" },
    { symbol: "B", meaning: "a basis" },
    { symbol: "\\mathbb R^n", meaning: "n-dimensional real coordinate space" },
    { symbol: "\\operatorname{span}(B)", meaning: "the subspace spanned by basis B" },
    { symbol: "\\{\\mathbf0\\}", meaning: "the zero subspace containing only the zero vector" },
  ]}
/>

## The Core Method

To find the dimension of a subspace, find a basis and count its vectors:

<Equation label="Dimension from a basis" tex="B\text{ is a basis for }W\Longrightarrow \dim W=|B|" />

Important standard dimensions are

<Equation label="Coordinate-space dimension" tex="\dim\mathbb R^n=n" />

and

<Equation label="Zero-space dimension" tex="\dim\{\mathbf0\}=0" />

Geometrically in \(\mathbb R^3\): a line through the origin has dimension \(1\), a plane through the origin has dimension \(2\), and all of \(\mathbb R^3\) has dimension \(3\).

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Dimension of a plane",
      question: "Find the dimension of \\(W=\\{(x,y,0):x,y\\in\\mathbb R\\}\\).",
      answer: "A basis for \\(W\\) is \\(((1,0,0),(0,1,0))\\). These two vectors span every vector \\((x,y,0)\\) by \\(x(1,0,0)+y(0,1,0)\\), and they are independent. Since the basis has \\(2\\) vectors, \\(\\dim W=2\\).",
    },
    {
      title: "Dimension from a spanning description",
      question: "Let \\(L=\\operatorname{span}((2,-1,3))\\). Find \\(\\dim L\\).",
      answer: "The vector \\((2,-1,3)\\) is non-zero. A single non-zero vector is linearly independent, and it spans \\(L\\) by definition. Therefore \\(((2,-1,3))\\) is a basis for \\(L\\). The basis has \\(1\\) vector, so \\(\\dim L=1\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Dimension of R5",
      question: "What is \\(\\dim\\mathbb R^5\\)?",
      answer: "The standard basis of \\(\\mathbb R^5\\) has five vectors: \\(\\mathbf e_1,\\mathbf e_2,\\mathbf e_3,\\mathbf e_4,\\mathbf e_5\\). Therefore \\(\\dim\\mathbb R^5=5\\).",
    },
    {
      title: "Zero subspace",
      question: "Why is \\(\\dim\\{\\mathbf0\\}=0\\)?",
      answer: "The zero subspace contains only the zero vector. A basis cannot include \\(\\mathbf0\\), because any list containing \\(\\mathbf0\\) is linearly dependent. The empty list spans \\(\\{\\mathbf0\\}\\) by the convention that the empty linear combination equals \\(\\mathbf0\\). Therefore the basis has \\(0\\) vectors, so the dimension is \\(0\\).",
    },
  ]}
/>`;

const realVectorSpacesContent = String.raw`## Principle

A real vector space is a set of objects that can be added together and multiplied by real scalars while obeying the usual algebraic rules. The objects do not have to be coordinate lists: they can be matrices, polynomials, functions, or other mathematical objects.

The word real means the scalars come from \(\mathbb R\).

## Notation

<Notation
  items={[
    { symbol: "V", meaning: "a real vector space" },
    { symbol: "\\mathbf u,\\mathbf v,\\mathbf w", meaning: "vectors, meaning elements of V" },
    { symbol: "\\lambda,\\mu", meaning: "real scalars" },
    { symbol: "\\mathbf 0", meaning: "the zero vector of V" },
    { symbol: "-\\mathbf v", meaning: "the additive inverse of \\mathbf v" },
  ]}
/>

## The Core Test

To use a set as a real vector space, it must have addition and scalar multiplication that stay inside the set and obey the vector-space laws. The most important operational laws are:

<Equation label="Closure under addition" tex="\mathbf u,\mathbf v\in V\Longrightarrow \mathbf u+\mathbf v\in V" />

<Equation label="Closure under scalar multiplication" tex="\lambda\in\mathbb R,\;\mathbf v\in V\Longrightarrow \lambda\mathbf v\in V" />

<Equation label="Distributive laws" tex="\lambda(\mathbf u+\mathbf v)=\lambda\mathbf u+\lambda\mathbf v,\qquad (\lambda+\mu)\mathbf v=\lambda\mathbf v+
\mu\mathbf v" />

The zero vector must satisfy \(\mathbf v+\mathbf 0=\mathbf v\) for every \(\mathbf v\in V\). The zero vector depends on the vector space: for matrices it is a zero matrix; for polynomials it is the zero polynomial.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Matrices as vectors",
      question: "Explain why \\(M_{2,2}(\\mathbb R)\\), the set of all \\(2\\) by \\(2\\) real matrices, is a real vector space under ordinary matrix addition and scalar multiplication.",
      answer: "Adding two \\(2\\) by \\(2\\) matrices gives another \\(2\\) by \\(2\\) matrix, so addition is closed. Multiplying a \\(2\\) by \\(2\\) matrix by a real scalar gives another \\(2\\) by \\(2\\) matrix, so scalar multiplication is closed. The zero vector is the zero matrix \\(\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}\\). The usual entrywise operations obey associativity, commutativity of addition, distributivity, and additive inverse laws because real numbers obey those laws entry by entry. Therefore \\(M_{2,2}(\\mathbb R)\\) is a real vector space.",
    },
    {
      title: "Polynomials as vectors",
      question: "Why is the set \\(P_2\\) of real polynomials of degree at most \\(2\\) a vector space?",
      answer: "A polynomial in \\(P_2\\) has the form \\(a+bx+cx^2\\). Adding two such polynomials gives \\((a+d)+(b+e)x+(c+f)x^2\\), still degree at most \\(2\\). Multiplying by a scalar \\(\\lambda\\) gives \\(\\lambda a+\\lambda bx+\\lambda cx^2\\), still degree at most \\(2\\). The zero vector is the zero polynomial \\(0\\). The algebraic laws come from real-number arithmetic on coefficients.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Functions as vectors",
      question: "What is the zero vector in the vector space of all real-valued functions on \\(\\mathbb R\\)?",
      answer: "The zero vector is the zero function, defined by \\(f(x)=0\\) for every real \\(x\\). It is not the number \\(0\\) alone; it is the function whose output is always \\(0\\).",
    },
    {
      title: "Degree exactly two fails",
      question: "Why is the set of real polynomials of degree exactly \\(2\\) not a vector space?",
      answer: "The zero vector must be included in any vector space, but the zero polynomial does not have degree exactly \\(2\\). Also, scalar multiplication by \\(0\\) sends any quadratic polynomial to the zero polynomial, which is outside the set. Therefore the set is not closed under scalar multiplication and is not a vector space.",
    },
  ]}
/>`;

const vectorSubspacesContent = String.raw`## Principle

A vector subspace is a subset of a vector space that is itself a vector space using the same addition and scalar multiplication. The subspace test works in any real vector space, not only in \(\mathbb R^n\).

Subspaces are the stable subsets under linear combinations.

## Notation

<Notation
  items={[
    { symbol: "U", meaning: "a subset being tested as a subspace" },
    { symbol: "V", meaning: "the surrounding vector space" },
    { symbol: "\\mathbf u,\\mathbf v", meaning: "vectors in U" },
    { symbol: "\\lambda,\\mu", meaning: "real scalars" },
    { symbol: "\\mathbf 0_V", meaning: "the zero vector of V" },
  ]}
/>

## The Core Test

For \(U\subseteq V\), use the linear-combination test:

<Equation label="Subspace test" tex="\mathbf u,\mathbf v\in U,\;\lambda,\mu\in\mathbb R\Longrightarrow \lambda\mathbf u+\mu\mathbf v\in U" />

This single test includes the zero-vector condition by choosing \(\lambda=0\) and \(\mu=0\), provided \(U\) is non-empty.

When checking a proposed subspace, ask:

1. Is the zero vector of the surrounding vector space included?
2. Does adding two elements of the subset stay in the subset?
3. Does multiplying by any real scalar stay in the subset?

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Trace-zero matrices",
      question: "Show that the set \\(U=\\{A\\in M_{2,2}(\\mathbb R):\\operatorname{tr}(A)=0\\}\\) is a subspace of \\(M_{2,2}(\\mathbb R)\\).",
      answer: "The zero matrix has trace \\(0\\), so it is in \\(U\\). If \\(A,B\\in U\\), then \\(\\operatorname{tr}(A)=0\\) and \\(\\operatorname{tr}(B)=0\\). For scalars \\(\\lambda,\\mu\\), use linearity of trace: \\(\\operatorname{tr}(\\lambda A+\\mu B)=\\lambda\\operatorname{tr}(A)+\\mu\\operatorname{tr}(B)=\\lambda0+\\mu0=0\\). Therefore \\(\\lambda A+\\mu B\\in U\\), so \\(U\\) is a subspace.",
    },
    {
      title: "A determinant condition fails",
      question: "Is \\(S=\\{A\\in M_{2,2}(\\mathbb R):\\det A=1\\}\\) a subspace?",
      answer: "No. A subspace must contain the zero vector of \\(M_{2,2}(\\mathbb R)\\), which is the zero matrix. The determinant of the zero matrix is \\(0\\), not \\(1\\). Thus the zero matrix is not in \\(S\\), so \\(S\\) is not a subspace.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Polynomials with zero constant term",
      question: "Is \\(U=\\{p\\in P_3:p(0)=0\\}\\) a subspace of \\(P_3\\)?",
      answer: "Yes. The zero polynomial satisfies \\(p(0)=0\\). If \\(p(0)=0\\) and \\(q(0)=0\\), then \\((\\lambda p+\\mu q)(0)=\\lambda p(0)+\\mu q(0)=0\\). Therefore every linear combination stays in \\(U\\), so \\(U\\) is a subspace.",
    },
    {
      title: "Non-zero value condition",
      question: "Is \\(S=\\{p\\in P_3:p(0)=1\\}\\) a subspace?",
      answer: "No. The zero polynomial has value \\(0\\) at \\(0\\), not \\(1\\), so the zero vector is missing. Also, multiplying a polynomial in \\(S\\) by \\(2\\) gives a polynomial with value \\(2\\) at \\(0\\), outside the set. The set is not a subspace.",
    },
  ]}
/>`;

const abstractBasesContent = String.raw`## Principle

A basis in an abstract vector space is still a list of vectors that spans the space and is linearly independent. The vectors may be matrices, polynomials, functions, or other objects, but the logic is the same as in \(\mathbb R^n\).

A basis gives unique coordinates for every vector in the space.

## Notation

<Notation
  items={[
    { symbol: "B=(\\mathbf v_1,\\ldots,\\mathbf v_k)", meaning: "an ordered basis list" },
    { symbol: "V", meaning: "a vector space" },
    { symbol: "c_1\\mathbf v_1+\\cdots+c_k\\mathbf v_k", meaning: "a linear combination of basis vectors" },
    { symbol: "P_n", meaning: "polynomials of degree at most n" },
    { symbol: "M_{m,n}(\\mathbb R)", meaning: "m by n real matrices" },
  ]}
/>

## The Core Test

A list \(B=(\mathbf v_1,
\ldots,\mathbf v_k)\) is a basis for \(V\) when:

1. Every vector \(\mathbf v\in V\) can be written as \(c_1\mathbf v_1+
\cdots+c_k\mathbf v_k\).
2. That representation is unique.

Equivalently, \(B\) spans \(V\) and is linearly independent:

<Equation label="Basis criterion" tex="B\text{ basis for }V\Longleftrightarrow \operatorname{span}(B)=V\text{ and }B\text{ is linearly independent}" />

For polynomial spaces, compare coefficients. For matrix spaces, compare entries.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Polynomial basis",
      question: "Show that \\((1,x,x^2)\\) is a basis for \\(P_2\\).",
      answer: "Every polynomial in \\(P_2\\) has the form \\(a+bx+cx^2\\), which is \\(a(1)+b(x)+c(x^2)\\). Thus \\((1,x,x^2)\\) spans \\(P_2\\). For independence, suppose \\(a(1)+b(x)+c(x^2)=0\\) as a polynomial. The zero polynomial has all coefficients zero, so \\(a=0\\), \\(b=0\\), and \\(c=0\\). Therefore the list is independent and is a basis.",
    },
    {
      title: "Matrix basis",
      question: "Give a basis for \\(M_{2,2}(\\mathbb R)\\).",
      answer: "Use the four matrix units: \\(E_{11}=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}\\), \\(E_{12}=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}\\), \\(E_{21}=\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}\\), and \\(E_{22}=\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}\\). Any matrix \\(\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\) equals \\(aE_{11}+bE_{12}+cE_{21}+dE_{22}\\), and entry comparison shows this representation is unique. Therefore these four matrices form a basis.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Non-standard polynomial basis",
      question: "Is \\((1,1+x)\\) a basis for \\(P_1\\)?",
      answer: "A general linear combination is \\(a(1)+b(1+x)=(a+b)+bx\\). Given any polynomial \\(r+sx\\), choose \\(b=s\\) and \\(a=r-s\\). This spans \\(P_1\\). If \\(a(1)+b(1+x)=0\\), then \\(b=0\\) from the coefficient of \\(x\\), and then \\(a+b=0\\) gives \\(a=0\\). The list is independent, so it is a basis.",
    },
    {
      title: "Redundant polynomial list",
      question: "Why is \\((1,x,1+x)\\) not a basis for \\(P_1\\)?",
      answer: "The list spans \\(P_1\\), but it is not independent because \\((1+x)-1-x=0\\). This is a non-trivial linear relation among the listed vectors. A basis must be independent, so the list is not a basis.",
    },
  ]}
/>`;

const abstractDimensionContent = String.raw`## Principle

The dimension of an abstract vector space is the number of vectors in any basis. Dimension counts independent degrees of freedom, even when the vectors are matrices, polynomials, or functions rather than coordinate lists.

All bases of the same finite-dimensional vector space have the same length.

## Notation

<Notation
  items={[
    { symbol: "\\dim V", meaning: "dimension of vector space V" },
    { symbol: "P_n", meaning: "polynomials of degree at most n" },
    { symbol: "M_{m,n}(\\mathbb R)", meaning: "m by n real matrices" },
    { symbol: "B", meaning: "a basis" },
    { symbol: "|B|", meaning: "number of vectors in the basis list B" },
  ]}
/>

## The Core Method

Find a basis, then count its vectors:

<Equation label="Dimension from basis" tex="B\text{ basis for }V\Longrightarrow \dim V=|B|" />

Useful standard dimensions:

<Equation label="Polynomial dimension" tex="\dim P_n=n+1" />

<Equation label="Matrix-space dimension" tex="\dim M_{m,n}(\mathbb R)=mn" />

The dimension of a subspace cannot exceed the dimension of the surrounding finite-dimensional vector space.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Dimension of a polynomial space",
      question: "Find \\(\\dim P_4\\).",
      answer: "A basis for \\(P_4\\) is \\((1,x,x^2,x^3,x^4)\\). It has \\(5\\) vectors. Therefore \\(\\dim P_4=5\\). This also matches the formula \\(\\dim P_n=n+1\\).",
    },
    {
      title: "Dimension of a matrix space",
      question: "Find \\(\\dim M_{3,2}(\\mathbb R)\\).",
      answer: "A \\(3\\) by \\(2\\) matrix has \\(3\\cdot2=6\\) entries that can vary independently. The standard matrix units give one basis matrix for each entry position. Therefore \\(\\dim M_{3,2}(\\mathbb R)=6\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Trace-zero matrices",
      question: "Find the dimension of \\(U=\\{A\\in M_{2,2}(\\mathbb R):\\operatorname{tr}(A)=0\\}\\).",
      answer: "A matrix in \\(U\\) has the form \\(\\begin{pmatrix}a&b\\\\c&-a\\end{pmatrix}\\), because the trace condition says \\(a+d=0\\), so \\(d=-a\\). This equals \\(a\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}+b\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}+c\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}\\). The three displayed matrices are independent, so they form a basis. Therefore \\(\\dim U=3\\).",
    },
    {
      title: "Polynomial constraint",
      question: "Find the dimension of \\(U=\\{p\\in P_3:p(0)=0\\}\\).",
      answer: "A polynomial in \\(P_3\\) has form \\(a+bx+cx^2+dx^3\\). The condition \\(p(0)=0\\) gives \\(a=0\\). Therefore \\(p(x)=bx+cx^2+dx^3\\), with basis \\((x,x^2,x^3)\\). This basis has \\(3\\) vectors, so \\(\\dim U=3\\).",
    },
  ]}
/>`;

const sumsAndIntersectionsContent = String.raw`## Principle

Sums and intersections combine subspaces. The intersection contains vectors common to both subspaces. The sum contains all vectors formed by adding one vector from each subspace.

The dimension formula connects these two constructions.

## Notation

<Notation
  items={[
    { symbol: "U,W", meaning: "subspaces of the same vector space V" },
    { symbol: "U\\cap W", meaning: "intersection of U and W" },
    { symbol: "U+W", meaning: "sum of U and W" },
    { symbol: "\\mathbf u+\\mathbf w", meaning: "a vector in U+W with \\mathbf u in U and \\mathbf w in W" },
    { symbol: "\\dim", meaning: "dimension" },
  ]}
/>

## The Core Method

The intersection is

<Equation label="Intersection" tex="U\cap W=\{\mathbf v:\mathbf v\in U\text{ and }\mathbf v\in W\}" />

The sum is

<Equation label="Subspace sum" tex="U+W=\{\mathbf u+\mathbf w:\mathbf u\in U,\mathbf w\in W\}" />

For finite-dimensional subspaces,

<Equation label="Dimension formula" tex="\dim(U+W)=\dim U+
\dim W-\dim(U\cap W)" />

If \(U\cap W=\{\mathbf0\}\), then the overlap has dimension \(0\), so the dimensions add.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Coordinate-plane intersection",
      question: "Let \\(U=\\{(x,y,0):x,y\\in\\mathbb R\\}\\) and \\(W=\\{(0,y,z):y,z\\in\\mathbb R\\}\\) in \\(\\mathbb R^3\\). Find \\(U\\cap W\\).",
      answer: "A vector in \\(U\\) has form \\((x,y,0)\\). A vector in \\(W\\) has form \\((0,y,z)\\). To be in both, the first component must be \\(0\\) and the third component must be \\(0\\). The middle component is free. Therefore \\(U\\cap W=\\{(0,y,0):y\\in\\mathbb R\\}\\), the \\(y\\)-axis.",
    },
    {
      title: "Use the dimension formula",
      question: "For the same \\(U\\) and \\(W\\), find \\(\\dim(U+W)\\).",
      answer: "Both \\(U\\) and \\(W\\) are coordinate planes, so \\(\\dim U=2\\) and \\(\\dim W=2\\). Their intersection is the \\(y\\)-axis, so \\(\\dim(U\\cap W)=1\\). The dimension formula gives \\(\\dim(U+W)=2+2-1=3\\). Since this is a subspace of \\(\\mathbb R^3\\) with dimension \\(3\\), \\(U+W=\\mathbb R^3\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Sum with zero subspace",
      question: "What are \\(U+\\{\\mathbf0\\}\\) and \\(U\\cap\\{\\mathbf0\\}\\)?",
      answer: "Adding the zero subspace changes nothing: \\(U+\\{\\mathbf0\\}=U\\), because every sum has the form \\(\\mathbf u+\\mathbf0=\\mathbf u\\). The intersection is \\(\\{\\mathbf0\\}\\), because every subspace contains \\(\\mathbf0\\) and the zero subspace contains no other vector.",
    },
    {
      title: "Direct overlap warning",
      question: "If \\(\\dim U=3\\), \\(\\dim W=2\\), and \\(\\dim(U\\cap W)=1\\), what is \\(\\dim(U+W)\\)?",
      answer: "Use \\(\\dim(U+W)=\\dim U+\\dim W-\\dim(U\\cap W)\\). Substitute: \\(\\dim(U+W)=3+2-1=4\\). The subtraction removes the overlap that was counted once in \\(U\\) and once in \\(W\\).",
    },
  ]}
/>`;

const coordinatesContent = String.raw`## Principle

Coordinates describe a vector by its coefficients in a chosen ordered basis. The same vector can have different coordinate columns in different bases, so coordinates are not the vector itself; they are a description relative to a basis.

Order matters in a basis because the coordinate entries match the basis order.

## Notation

<Notation
  items={[
    { symbol: "B=(\\mathbf v_1,\\ldots,\\mathbf v_n)", meaning: "an ordered basis" },
    { symbol: "[\\mathbf v]_B", meaning: "the coordinate column of \\mathbf v relative to B" },
    { symbol: "c_i", meaning: "coefficient of basis vector \\mathbf v_i" },
    { symbol: "\\mathcal E", meaning: "the standard basis" },
    { symbol: "P_B", meaning: "matrix whose columns are the basis vectors in standard coordinates" },
  ]}
/>

## The Core Method

If

<Equation label="Basis expansion" tex="\mathbf v=c_1\mathbf v_1+\cdots+c_n\mathbf v_n" />

then the coordinate vector of \(\mathbf v\) in basis \(B\) is

<Equation label="Coordinate vector" tex="[\mathbf v]_B=\begin{pmatrix}c_1\\\vdots\\c_n\end{pmatrix}" />

For a basis of \(\mathbb R^n\), form the basis matrix

<Equation label="Basis matrix" tex="P_B=(\mathbf v_1\;\cdots\;\mathbf v_n)" />

Then coordinates satisfy

<Equation label="Coordinate equation" tex="P_B[\mathbf v]_B=\mathbf v" />

Solve this system to find \([\mathbf v]_B\).

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Find coordinates in R2",
      question: "Let \\(B=((1,1),(1,-1))\\). Find \\([(3,1)]_B\\).",
      answer: "Write \\((3,1)=c_1(1,1)+c_2(1,-1)\\). This gives \\((c_1+c_2,c_1-c_2)=(3,1)\\). Therefore \\(c_1+c_2=3\\) and \\(c_1-c_2=1\\). Add the equations: \\(2c_1=4\\), so \\(c_1=2\\). Then \\(2+c_2=3\\), so \\(c_2=1\\). Thus \\([(3,1)]_B=\\begin{pmatrix}2\\\\1\\end{pmatrix}\\).",
    },
    {
      title: "Polynomial coordinates",
      question: "In the basis \\(B=(1,x,x^2)\\) of \\(P_2\\), find the coordinate vector of \\(p(x)=4-3x+2x^2\\).",
      answer: "Write \\(p(x)=4(1)+(-3)(x)+2(x^2)\\). The coefficients in the ordered basis \\((1,x,x^2)\\) are \\(4\\), \\(-3\\), and \\(2\\). Therefore \\([p]_B=\\begin{pmatrix}4\\\\-3\\\\2\\end{pmatrix}\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Basis order changes coordinates",
      question: "If \\(B=((1,1),(1,-1))\\) gives \\([(3,1)]_B=\\begin{pmatrix}2\\\\1\\end{pmatrix}\\), what are the coordinates in \\(C=((1,-1),(1,1))\\)?",
      answer: "The basis \\(C\\) reverses the order of the two basis vectors. Since \\((3,1)=2(1,1)+1(1,-1)\\), in the order \\((1,-1),(1,1)\\) the coefficients are \\(1\\) then \\(2\\). Therefore \\([(3,1)]_C=\\begin{pmatrix}1\\\\2\\end{pmatrix}\\).",
    },
    {
      title: "Standard coordinates",
      question: "What is \\([\\mathbf v]_{\\mathcal E}\\) for \\(\\mathbf v=(a,b,c)\\in\\mathbb R^3\\)?",
      answer: "In the standard basis \\(\\mathcal E=(\\mathbf e_1,\\mathbf e_2,\\mathbf e_3)\\), the vector is \\(a\\mathbf e_1+b\\mathbf e_2+c\\mathbf e_3\\). Therefore \\([\\mathbf v]_{\\mathcal E}=\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}\\). Standard coordinates match the usual component column.",
    },
  ]}
/>`;

const linearMapsContent = String.raw`## Principle

A linear map is a function between vector spaces that preserves vector addition and scalar multiplication. It sends linear combinations to the same linear combinations of the outputs.

Linear maps are the structure-preserving functions of linear algebra.

## Notation

<Notation
  items={[
    { symbol: "T:V\\to W", meaning: "a function from vector space V to vector space W" },
    { symbol: "T(\\mathbf v)", meaning: "the output of T on vector \\mathbf v" },
    { symbol: "\\mathbf u,\\mathbf v", meaning: "vectors in the domain V" },
    { symbol: "\\lambda,\\mu", meaning: "real scalars" },
    { symbol: "\\mathbf 0_V,\\mathbf 0_W", meaning: "zero vectors in V and W" },
  ]}
/>

## The Core Test

To prove that \(T:V\to W\) is linear, check the linear-combination rule:

<Equation label="Linearity test" tex="T(\lambda\mathbf u+\mu\mathbf v)=\lambda T(\mathbf u)+\mu T(\mathbf v)" />

for all \(\mathbf u,\mathbf v\in V\) and all \(\lambda,\mu\in\mathbb R\).

Equivalently, check both separate properties:

<Equation label="Additivity" tex="T(\mathbf u+\mathbf v)=T(\mathbf u)+T(\mathbf v)" />

<Equation label="Homogeneity" tex="T(\lambda\mathbf v)=\lambda T(\mathbf v)" />

Every linear map sends zero to zero:

<Equation label="Zero preservation" tex="T(\mathbf 0_V)=\mathbf 0_W" />

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Matrix multiplication is linear",
      question: "Let \\(A\\) be an \\(m\\) by \\(n\\) matrix and define \\(T:\\mathbb R^n\\to\\mathbb R^m\\) by \\(T(\\mathbf x)=A\\mathbf x\\). Show that \\(T\\) is linear.",
      answer: "Let \\(\\mathbf u,\\mathbf v\\in\\mathbb R^n\\) and \\(\\lambda,\\mu\\in\\mathbb R\\). Then \\(T(\\lambda\\mathbf u+\\mu\\mathbf v)=A(\\lambda\\mathbf u+\\mu\\mathbf v)\\). Matrix multiplication distributes over vector addition and scalar multiplication, so this equals \\(\\lambda A\\mathbf u+\\mu A\\mathbf v\\). Since \\(A\\mathbf u=T(\\mathbf u)\\) and \\(A\\mathbf v=T(\\mathbf v)\\), we get \\(T(\\lambda\\mathbf u+\\mu\\mathbf v)=\\lambda T(\\mathbf u)+\\mu T(\\mathbf v)\\). Therefore \\(T\\) is linear.",
    },
    {
      title: "A non-linear translation",
      question: "Show that \\(T:\\mathbb R^2\\to\\mathbb R^2\\), \\(T(x,y)=(x+1,y)\\), is not linear.",
      answer: "A linear map must send the zero vector to the zero vector. Here \\(T(0,0)=(1,0)\\), which is not \\(\\mathbf0\\). Therefore \\(T\\) is not linear.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Derivative map",
      question: "Is \\(D:P_3\\to P_2\\), defined by \\(D(p)=p'\\), linear?",
      answer: "Yes. For polynomials \\(p,q\\) and scalars \\(\\lambda,\\mu\\), differentiation gives \\(D(\\lambda p+\\mu q)=(\\lambda p+\\mu q)'=\\lambda p'+\\mu q'=\\lambda D(p)+\\mu D(q)\\). Therefore \\(D\\) is linear.",
    },
    {
      title: "Squaring fails",
      question: "Is \\(S:P_2\\to P_4\\), defined by \\(S(p)=p^2\\), linear?",
      answer: "No. Take \\(p=1\\) and \\(q=x\\). Then \\(S(p+q)=(1+x)^2=1+2x+x^2\\), while \\(S(p)+S(q)=1+x^2\\). These are different, so additivity fails.",
    },
  ]}
/>`;

const linearMapExamplesContent = String.raw`## Principle

Linear maps appear in many forms: matrix transformations, differentiation, integration with fixed limits, coordinate projection, and evaluation of coefficients. The same linearity test applies in every vector space.

Examples are useful because the inputs and outputs may be different kinds of vectors.

## Notation

<Notation
  items={[
    { symbol: "T", meaning: "a proposed linear map" },
    { symbol: "P_n", meaning: "polynomials of degree at most n" },
    { symbol: "M_{m,n}(\\mathbb R)", meaning: "m by n real matrices" },
    { symbol: "\\operatorname{tr}(A)", meaning: "trace of a square matrix A" },
    { symbol: "\\pi_i", meaning: "projection onto coordinate i" },
  ]}
/>

## The Core Method

Use the same checklist for every example:

1. Identify the domain and codomain.
2. Check the output really lies in the codomain.
3. Test whether linear combinations are preserved.

<Equation label="Linearity rule" tex="T(\lambda\mathbf u+\mu\mathbf v)=\lambda T(\mathbf u)+\mu T(\mathbf v)" />

Fast disproofs are often possible. If \(T(\mathbf0)\ne\mathbf0\), then \(T\) is not linear.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Trace is linear",
      question: "Show that \\(T:M_{2,2}(\\mathbb R)\\to\\mathbb R\\), \\(T(A)=\\operatorname{tr}(A)\\), is linear.",
      answer: "Let \\(A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\) and \\(B=\\begin{pmatrix}e&f\\\\g&h\\end{pmatrix}\\). For scalars \\(\\lambda,\\mu\\), the trace of \\(\\lambda A+\\mu B\\) is \\(\\lambda a+\\mu e+\\lambda d+\\mu h\\). Group terms: \\(\\lambda(a+d)+\\mu(e+h)=\\lambda\\operatorname{tr}(A)+\\mu\\operatorname{tr}(B)\\). Therefore \\(T\\) is linear.",
    },
    {
      title: "Constant shift is not linear",
      question: "Is \\(T:P_2\\to P_2\\), \\(T(p)=p+1\\), linear?",
      answer: "No. The zero vector in \\(P_2\\) is the zero polynomial. But \\(T(0)=0+1=1\\), not the zero polynomial. Since a linear map must send zero to zero, \\(T\\) is not linear.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Coordinate projection",
      question: "Show that \\(\\pi_2:\\mathbb R^3\\to\\mathbb R\\), \\(\\pi_2(x,y,z)=y\\), is linear.",
      answer: "Let \\(\\mathbf u=(x_1,y_1,z_1)\\) and \\(\\mathbf v=(x_2,y_2,z_2)\\). Then \\(\\pi_2(\\lambda\\mathbf u+\\mu\\mathbf v)=\\pi_2(\\lambda x_1+\\mu x_2,\\lambda y_1+\\mu y_2,\\lambda z_1+\\mu z_2)=\\lambda y_1+\\mu y_2\\). This equals \\(\\lambda\\pi_2(\\mathbf u)+\\mu\\pi_2(\\mathbf v)\\), so the map is linear.",
    },
    {
      title: "Absolute value fails",
      question: "Is \\(T:\\mathbb R\\to\\mathbb R\\), \\(T(x)=|x|\\), linear?",
      answer: "No. Homogeneity fails for negative scalars. For \\(x=1\\) and scalar \\(-1\\), \\(T((-1)1)=T(-1)=1\\), but \\((-1)T(1)=-1\\). Since these are not equal, \\(T\\) is not linear.",
    },
  ]}
/>`;

const matrixRepresentationsContent = String.raw`## Principle

When bases are chosen for the domain and codomain, a linear map can be represented by a matrix. The columns of the matrix are the coordinate vectors of the images of the domain basis vectors.

Matrix representation turns abstract linear maps into matrix multiplication.

## Notation

<Notation
  items={[
    { symbol: "T:V\\to W", meaning: "a linear map" },
    { symbol: "B=(\\mathbf v_1,\\ldots,\\mathbf v_n)", meaning: "ordered basis of V" },
    { symbol: "C=(\\mathbf w_1,\\ldots,\\mathbf w_m)", meaning: "ordered basis of W" },
    { symbol: "[T]_{C\\leftarrow B}", meaning: "matrix of T using domain basis B and codomain basis C" },
    { symbol: "[\\mathbf v]_B", meaning: "coordinate vector of \\mathbf v in basis B" },
  ]}
/>

## The Core Method

To build the matrix of \(T\):

1. Apply \(T\) to each domain basis vector \(\mathbf v_i\).
2. Write each output in the codomain basis \(C\).
3. Use those coordinate columns as the matrix columns.

<Equation label="Representation columns" tex="[T]_{C\leftarrow B}=\big([T(\mathbf v_1)]_C\;[T(\mathbf v_2)]_C\;\cdots\;[T(\mathbf v_n)]_C\big)" />

Then

<Equation label="Matrix action on coordinates" tex="[T(\mathbf v)]_C=[T]_{C\leftarrow B}[\mathbf v]_B" />

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Standard matrix of a map",
      question: "Find the standard matrix of \\(T:\\mathbb R^2\\to\\mathbb R^2\\), \\(T(x,y)=(2x-y,3y)\\).",
      answer: "Use the standard basis \\(\\mathbf e_1=(1,0)\\), \\(\\mathbf e_2=(0,1)\\). Compute \\(T(\\mathbf e_1)=T(1,0)=(2,0)\\). Compute \\(T(\\mathbf e_2)=T(0,1)=(-1,3)\\). Put these as columns: \\([T]=\\begin{pmatrix}2&-1\\\\0&3\\end{pmatrix}\\).",
    },
    {
      title: "Polynomial derivative matrix",
      question: "Find the matrix of \\(D:P_2\\to P_1\\), \\(D(p)=p'\\), using bases \\(B=(1,x,x^2)\\) and \\(C=(1,x)\\).",
      answer: "Apply \\(D\\) to the domain basis. \\(D(1)=0\\), whose \\(C\\)-coordinates are \\(\\begin{pmatrix}0\\\\0\\end{pmatrix}\\). \\(D(x)=1\\), coordinates \\(\\begin{pmatrix}1\\\\0\\end{pmatrix}\\). \\(D(x^2)=2x\\), coordinates \\(\\begin{pmatrix}0\\\\2\\end{pmatrix}\\). Put these columns together: \\([D]_{C\\leftarrow B}=\\begin{pmatrix}0&1&0\\\\0&0&2\\end{pmatrix}\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Use the representation",
      question: "If \\([T]=\\begin{pmatrix}2&-1\\\\0&3\\end{pmatrix}\\), compute \\(T(4,5)\\) in standard coordinates.",
      answer: "Multiply the matrix by the coordinate column: \\(\\begin{pmatrix}2&-1\\\\0&3\\end{pmatrix}\\begin{pmatrix}4\\\\5\\end{pmatrix}=\\begin{pmatrix}8-5\\\\15\\end{pmatrix}=\\begin{pmatrix}3\\\\15\\end{pmatrix}\\). Therefore \\(T(4,5)=(3,15)\\).",
    },
    {
      title: "Why columns matter",
      question: "Why are images of basis vectors placed as columns rather than rows?",
      answer: "Coordinate vectors are multiplied on the right of the matrix. If \\([\\mathbf v]_B=(c_1,\\ldots,c_n)^T\\), then matrix multiplication forms \\(c_1\\) times column \\(1\\) plus \\(c_2\\) times column \\(2\\), and so on. To produce \\(T(c_1\\mathbf v_1+\\cdots+c_n\\mathbf v_n)\\), column \\(i\\) must be \\([T(\\mathbf v_i)]_C\\).",
    },
  ]}
/>`;

const imageAndKernelContent = String.raw`## Principle

The image and kernel describe the output behaviour of a linear map. The image is the set of outputs the map can reach. The kernel is the set of inputs sent to zero.

The image measures coverage; the kernel measures collapse.

## Notation

<Notation
  items={[
    { symbol: "T:V\\to W", meaning: "a linear map from V to W" },
    { symbol: "\\operatorname{im}T", meaning: "image of T" },
    { symbol: "\\ker T", meaning: "kernel of T" },
    { symbol: "\\mathbf 0_W", meaning: "zero vector in the codomain W" },
    { symbol: "A", meaning: "matrix representing T when applicable" },
  ]}
/>

## The Core Test

The image is

<Equation label="Image" tex="\operatorname{im}T=\{T(\mathbf v):\mathbf v\in V\}" />

The kernel is

<Equation label="Kernel" tex="\ker T=\{\mathbf v\in V:T(\mathbf v)=\mathbf 0_W\}" />

For a matrix map \(T(\mathbf x)=A\mathbf x\):

- \(\operatorname{im}T\) is the column space of \(A\).
- \(\ker T\) is the solution set of \(A\mathbf x=\mathbf0\).

Both image and kernel are subspaces: \(\operatorname{im}T\subseteq W\) and \(\ker T\subseteq V\).

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Kernel of a matrix map",
      question: "Find the kernel of \\(T:\\mathbb R^2\\to\\mathbb R^2\\), \\(T(x,y)=(x+2y,2x+4y)\\).",
      answer: "Solve \\(T(x,y)=(0,0)\\). The equations are \\(x+2y=0\\) and \\(2x+4y=0\\). The second equation is twice the first, so use \\(x=-2y\\). Let \\(y=t\\). Then \\(x=-2t\\), so \\(\\ker T=\\{(-2t,t):t\\in\\mathbb R\\}=\\operatorname{span}((-2,1))\\).",
    },
    {
      title: "Image of a matrix map",
      question: "Find the image of the same map \\(T(x,y)=(x+2y,2x+4y)\\).",
      answer: "Write the matrix: \\(A=\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}\\). The image is the span of the columns \\((1,2)\\) and \\((2,4)\\). Since \\((2,4)=2(1,2)\\), the image is \\(\\operatorname{span}((1,2))\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Injectivity test",
      question: "How can the kernel test whether a linear map is one-to-one?",
      answer: "A linear map is one-to-one exactly when its kernel contains only the zero vector. If a non-zero vector is sent to zero, then two different inputs can have the same output. If only the zero vector is sent to zero, no non-zero difference between inputs can disappear.",
    },
    {
      title: "Derivative image and kernel",
      question: "For \\(D:P_2\\to P_1\\), \\(D(p)=p'\\), describe the kernel.",
      answer: "The kernel consists of polynomials whose derivative is zero. These are the constant polynomials. Therefore \\(\\ker D=\\operatorname{span}(1)\\).",
    },
  ]}
/>`;

const rankAndNullityContent = String.raw`## Principle

Rank and nullity measure the image and kernel dimensions of a linear map. The Rank-Nullity Theorem says that every input dimension is accounted for by either producing output direction or collapsing to zero.

## Notation

<Notation
  items={[
    { symbol: "T:V\\to W", meaning: "a linear map" },
    { symbol: "\\operatorname{rank}T", meaning: "dimension of the image of T" },
    { symbol: "\\operatorname{nullity}T", meaning: "dimension of the kernel of T" },
    { symbol: "\\dim V", meaning: "dimension of the domain" },
    { symbol: "\\operatorname{im}T,\\ker T", meaning: "image and kernel of T" },
  ]}
/>

## The Core Test

Rank and nullity are defined by

<Equation label="Rank" tex="\operatorname{rank}T=\dim(\operatorname{im}T)" />

<Equation label="Nullity" tex="\operatorname{nullity}T=\dim(\ker T)" />

If \(V\) is finite-dimensional, the Rank-Nullity Theorem is

<Equation label="Rank-Nullity Theorem" tex="\dim V=\operatorname{rank}T+\operatorname{nullity}T" />

For a matrix, rank is the number of pivot columns, and nullity is the number of free variables in \(A\mathbf x=\mathbf0\).

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Use rank-nullity for a matrix map",
      question: "Let \\(T:\\mathbb R^4\\to\\mathbb R^3\\) have matrix with \\(2\\) pivot columns. Find the rank and nullity.",
      answer: "The rank is the number of pivot columns, so \\(\\operatorname{rank}T=2\\). The domain is \\(\\mathbb R^4\\), so \\(\\dim V=4\\). Rank-nullity gives \\(4=2+\\operatorname{nullity}T\\). Therefore \\(\\operatorname{nullity}T=2\\).",
    },
    {
      title: "Derivative map",
      question: "For \\(D:P_3\\to P_2\\), \\(D(p)=p'\\), find rank and nullity.",
      answer: "The domain \\(P_3\\) has dimension \\(4\\). The kernel consists of constant polynomials, so the nullity is \\(1\\). Rank-nullity gives \\(4=\\operatorname{rank}D+1\\), hence \\(\\operatorname{rank}D=3\\). This matches the fact that every polynomial in \\(P_2\\) is the derivative of some polynomial in \\(P_3\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "One-to-one consequence",
      question: "If \\(T:V\\to W\\) is one-to-one and \\(\\dim V=5\\), what is \\(\\operatorname{rank}T\\)?",
      answer: "A one-to-one linear map has kernel \\(\\{\\mathbf0\\}\\), so its nullity is \\(0\\). Rank-nullity gives \\(5=\\operatorname{rank}T+0\\), so \\(\\operatorname{rank}T=5\\).",
    },
    {
      title: "Onto consequence",
      question: "If \\(T:\\mathbb R^5\\to\\mathbb R^3\\) is onto, what is its rank and nullity?",
      answer: "Onto means the image is all of \\(\\mathbb R^3\\), so the rank is \\(3\\). The domain has dimension \\(5\\). Rank-nullity gives \\(5=3+\\operatorname{nullity}T\\), so the nullity is \\(2\\).",
    },
  ]}
/>`;

const isomorphismsContent = String.raw`## Principle

An isomorphism is a linear map that is both one-to-one and onto. Isomorphic vector spaces have the same linear structure, even if their vectors look different.

In finite dimensions, two real vector spaces are isomorphic exactly when they have the same dimension.

## Notation

<Notation
  items={[
    { symbol: "T:V\\to W", meaning: "a linear map" },
    { symbol: "V\\cong W", meaning: "V is isomorphic to W" },
    { symbol: "T^{-1}", meaning: "inverse map of T, when it exists" },
    { symbol: "\\ker T", meaning: "kernel of T" },
    { symbol: "\\operatorname{im}T", meaning: "image of T" },
  ]}
/>

## The Core Test

A linear map \(T:V\to W\) is an isomorphism when:

1. \(\ker T=\{\mathbf0\}\), so \(T\) is one-to-one.
2. \(\operatorname{im}T=W\), so \(T\) is onto.

Equivalently, \(T\) has a linear inverse:

<Equation label="Inverse map" tex="T^{-1}T=\operatorname{id}_V,\qquad TT^{-1}=\operatorname{id}_W" />

For finite-dimensional spaces,

<Equation label="Dimension criterion" tex="V\cong W\Longleftrightarrow \dim V=\dim W" />

provided both spaces are real vector spaces.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Coordinate isomorphism for polynomials",
      question: "Show that \\(P_2\\) is isomorphic to \\(\\mathbb R^3\\).",
      answer: "Define \\(T:P_2\\to\\mathbb R^3\\) by \\(T(a+bx+cx^2)=(a,b,c)\\). This map is linear because coefficients of sums and scalar multiples behave componentwise. It is one-to-one: if \\(T(a+bx+cx^2)=(0,0,0)\\), then \\(a=b=c=0\\), so the polynomial is zero. It is onto: every \\((a,b,c)\\in\\mathbb R^3\\) is the image of \\(a+bx+cx^2\\). Therefore \\(P_2\\cong\\mathbb R^3\\).",
    },
    {
      title: "Matrix invertibility as isomorphism",
      question: "When is \\(T:\\mathbb R^n\\to\\mathbb R^n\\), \\(T(\\mathbf x)=A\\mathbf x\\), an isomorphism?",
      answer: "The map is an isomorphism exactly when \\(A\\) is invertible. If \\(A\\) is invertible, then \\(T^{-1}(\\mathbf y)=A^{-1}\\mathbf y\\), so every output has exactly one input. If \\(A\\) is not invertible, then either the kernel is non-trivial or the image is not all of \\(\\mathbb R^n\\), so \\(T\\) is not an isomorphism.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Dimension obstruction",
      question: "Can \\(P_3\\) be isomorphic to \\(\\mathbb R^3\\)?",
      answer: "No. The dimension of \\(P_3\\) is \\(4\\), with basis \\((1,x,x^2,x^3)\\). The dimension of \\(\\mathbb R^3\\) is \\(3\\). Finite-dimensional real vector spaces with different dimensions cannot be isomorphic.",
    },
    {
      title: "Same dimension does not mean same set",
      question: "Why can \\(M_{2,2}(\\mathbb R)\\) be isomorphic to \\(P_3\\)?",
      answer: "The vectors look different, but both spaces have dimension \\(4\\). An isomorphism can send the four entries of a \\(2\\) by \\(2\\) matrix to the four coefficients of a cubic polynomial, for example \\(\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\mapsto a+bx+cx^2+dx^3\\). This preserves linear combinations.",
    },
  ]}
/>`;

const changeOfBasisContent = String.raw`## Principle

Change of basis converts coordinate vectors from one basis to another. The underlying vector does not change; only its coordinate description changes.

Change-of-basis matrices keep track of this conversion.

## Notation

<Notation
  items={[
    { symbol: "B,C", meaning: "ordered bases of the same vector space" },
    { symbol: "[\\mathbf v]_B", meaning: "coordinates of \\mathbf v in basis B" },
    { symbol: "P_{C\\leftarrow B}", meaning: "change-of-basis matrix converting B-coordinates to C-coordinates" },
    { symbol: "P_B", meaning: "basis matrix whose columns are B basis vectors in standard coordinates" },
    { symbol: "I", meaning: "identity map" },
  ]}
/>

## The Core Method

The change-of-basis matrix satisfies

<Equation label="Change of basis" tex="[\mathbf v]_C=P_{C\leftarrow B}[\mathbf v]_B" />

Its columns are the \(C\)-coordinates of the \(B\)-basis vectors:

<Equation label="Columns of change matrix" tex="P_{C\leftarrow B}=\big([\mathbf b_1]_C\;\cdots\;[\mathbf b_n]_C\big)" />

In \(\mathbb R^n\), if \(P_B\) and \(P_C\) are basis matrices in standard coordinates, then

<Equation label="Standard-coordinate formula" tex="P_{C\leftarrow B}=P_C^{-1}P_B" />

The reverse conversion matrix is the inverse:

<Equation label="Reverse change" tex="P_{B\leftarrow C}=(P_{C\leftarrow B})^{-1}" />

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Build a change matrix",
      question: "Let \\(B=((1,1),(1,-1))\\) and let \\(C\\) be the standard basis of \\(\\mathbb R^2\\). Find \\(P_{C\\leftarrow B}\\).",
      answer: "The columns of \\(P_{C\\leftarrow B}\\) are the \\(C\\)-coordinates of the \\(B\\)-basis vectors. Since \\(C\\) is the standard basis, these are just the usual coordinate columns \\(\\begin{pmatrix}1\\\\1\\end{pmatrix}\\) and \\(\\begin{pmatrix}1\\\\-1\\end{pmatrix}\\). Therefore \\(P_{C\\leftarrow B}=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}\\).",
    },
    {
      title: "Convert coordinates",
      question: "Using the same bases, convert \\([\\mathbf v]_B=\\begin{pmatrix}2\\\\1\\end{pmatrix}\\) to standard coordinates.",
      answer: "Use \\([\\mathbf v]_C=P_{C\\leftarrow B}[\\mathbf v]_B\\). Compute \\(\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}\\begin{pmatrix}2\\\\1\\end{pmatrix}=\\begin{pmatrix}3\\\\1\\end{pmatrix}\\). Therefore \\(\\mathbf v=(3,1)\\) in standard coordinates.",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Identity basis change",
      question: "What is \\(P_{B\\leftarrow B}\\)?",
      answer: "Changing from a basis to the same basis changes nothing. Therefore \\(P_{B\\leftarrow B}=I\\). Equivalently, each basis vector has coordinate column \\(\\mathbf e_i\\) in its own basis, so the columns form the identity matrix.",
    },
    {
      title: "Why order matters",
      question: "How does swapping the order of basis vectors affect coordinates?",
      answer: "Coordinate entries match the order of the basis list. If a basis \\(B=(\\mathbf b_1,\\mathbf b_2)\\) is changed to \\(C=(\\mathbf b_2,\\mathbf b_1)\\), then the same vector \\(c_1\\mathbf b_1+c_2\\mathbf b_2\\) has coordinates \\(\\begin{pmatrix}c_1\\\\c_2\\end{pmatrix}\\) in \\(B\\) but \\(\\begin{pmatrix}c_2\\\\c_1\\end{pmatrix}\\) in \\(C\\).",
    },
  ]}
/>`;

const changeOfCoordinatesContent = String.raw`## Principle

Changing coordinates for a linear map adjusts the matrix representation when the domain or codomain basis changes. The map is the same, but its matrix can look different in different bases.

For maps from a vector space to itself, this leads to similarity of matrices.

## Notation

<Notation
  items={[
    { symbol: "[T]_B", meaning: "matrix of T using basis B for both domain and codomain" },
    { symbol: "[T]_C", meaning: "matrix of T using basis C for both domain and codomain" },
    { symbol: "P_{B\\leftarrow C}", meaning: "change matrix converting C-coordinates to B-coordinates" },
    { symbol: "P^{-1}AP", meaning: "similarity transformation of a matrix A" },
    { symbol: "[\\mathbf v]_B", meaning: "coordinates of \\mathbf v in basis B" },
  ]}
/>

## The Core Method

For a linear map \(T:V\to V\), suppose \(A=[T]_B\) and \(P=P_{B\leftarrow C}\). Then

<Equation label="Similarity formula" tex="[T]_C=P^{-1}AP" />

Reason through the coordinate path:

1. Start with \([\mathbf v]_C\).
2. Convert to \(B\)-coordinates: \([\mathbf v]_B=P[\mathbf v]_C\).
3. Apply \(A=[T]_B\): \([T(\mathbf v)]_B=AP[\mathbf v]_C\).
4. Convert back to \(C\)-coordinates: \([T(\mathbf v)]_C=P^{-1}AP[\mathbf v]_C\).

Matrices related by \(P^{-1}AP\) represent the same linear map in different bases.

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Compute a similar matrix",
      question: "Let \\(A=\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}\\) and \\(P=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}\\). Compute \\(P^{-1}AP\\).",
      answer: "First find \\(P^{-1}=\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}\\). Compute \\(AP=\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}=\\begin{pmatrix}2&2\\\\0&3\\end{pmatrix}\\). Then \\(P^{-1}AP=\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}\\begin{pmatrix}2&2\\\\0&3\\end{pmatrix}=\\begin{pmatrix}2&-1\\\\0&3\\end{pmatrix}\\).",
    },
    {
      title: "Interpret the formula",
      question: "Why does \\(P^{-1}AP\\) have \\(P\\) on the right and \\(P^{-1}\\) on the left?",
      answer: "Matrix products act on coordinate columns from right to left. The rightmost \\(P\\) first converts the input from the new basis to the old basis. Then \\(A\\) applies the old-basis matrix of the map. Finally \\(P^{-1}\\) converts the output back to the new basis. That gives \\(P^{-1}AP\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Same map, different matrix",
      question: "Does changing coordinates change the linear map itself?",
      answer: "No. The vector space map \\(T\\) is unchanged. Only the coordinate labels used to describe inputs and outputs change. Different matrices can represent the same map when they are written relative to different bases.",
    },
    {
      title: "Similarity preserves determinant",
      question: "Show that similar matrices \\(A\\) and \\(P^{-1}AP\\) have the same determinant.",
      answer: "Use the product rule: \\(\\det(P^{-1}AP)=\\det(P^{-1})\\det(A)\\det(P)\\). Since \\(\\det(P^{-1})=1/\\det(P)\\), the product becomes \\((1/\\det P)\\det(A)\\det(P)=\\det(A)\\). Therefore similar matrices have the same determinant.",
    },
  ]}
/>`;

export const level1LinearAlgebraTopicBodies = new Map<string, string>([
  ["Vectors In Rn", vectorsInRnContent],
  ["Vector Operations", vectorOperationsContent],
  ["Scalar Product", scalarProductContent],
  ["Norms And Distances", normsAndDistancesContent],
  ["Angles And Orthogonality", anglesAndOrthogonalityContent],
  ["Vector Product", vectorProductContent],
  ["Planes In R3", planesInR3Content],
  ["Lines In R3", linesInR3Content],
  ["Scalar Triple Product", scalarTripleProductContent],
  ["Three By Three Systems", threeByThreeSystemsContent],
  ["Matrix Notation", matrixNotationContent],
  ["Matrix Addition", matrixAdditionContent],
  ["Scalar Multiplication", scalarMultiplicationContent],
  ["Matrix Multiplication", matrixMultiplicationContent],
  ["Identity And Zero Matrices", identityAndZeroMatricesContent],
  ["Transpose", transposeContent],
  ["Inverse Matrices", inverseMatricesContent],
  ["Augmented Matrices", augmentedMatricesContent],
  ["Elementary Row Operations", elementaryRowOperationsContent],
  ["Echelon Form", echelonFormContent],
  ["Reduced Row Echelon Form", reducedRowEchelonFormContent],
  ["Gauss-Jordan Elimination", gaussJordanEliminationContent],
  ["Solution Sets", solutionSetsContent],
  ["Inverse Computation", inverseComputationContent],
  ["Invertible Matrix Theorem", invertibleMatrixTheoremContent],
  ["Small Determinants", smallDeterminantsContent],
  ["General Determinant", generalDeterminantContent],
  ["Determinant Properties", determinantPropertiesContent],
  ["Determinant Calculations", determinantCalculationsContent],
  ["Determinants And Invertibility", determinantsAndInvertibilityContent],
  ["Adjugate Matrix", adjugateMatrixContent],
  ["Cramer's Rule", cramersRuleContent],
  ["Determinants And Geometry", determinantsAndGeometryContent],
  ["Subspaces Of Rn", subspacesOfRnContent],
  ["Spanning Sets", spanningSetsContent],
  ["Linear Independence", linearIndependenceContent],
  ["Bases In Rn", basesInRnContent],
  ["Dimension In Rn", dimensionInRnContent],
  ["Real Vector Spaces", realVectorSpacesContent],
  ["Vector Subspaces", vectorSubspacesContent],
  ["Abstract Bases", abstractBasesContent],
  ["Abstract Dimension", abstractDimensionContent],
  ["Sums And Intersections", sumsAndIntersectionsContent],
  ["Coordinates", coordinatesContent],
  ["Linear Maps", linearMapsContent],
  ["Linear Map Examples", linearMapExamplesContent],
  ["Matrix Representations", matrixRepresentationsContent],
  ["Image And Kernel", imageAndKernelContent],
  ["Rank And Nullity", rankAndNullityContent],
  ["Isomorphisms", isomorphismsContent],
  ["Change Of Basis", changeOfBasisContent],
  ["Change Of Coordinates", changeOfCoordinatesContent],
]);
