export const content = String.raw`## Principle

The cross product, also called the vector product, combines two vectors in \(\mathbb R^3\) and outputs another vector in \(\mathbb R^3\). For vectors \(\mathbf a\) and \(\mathbf b\), the cross product is written \(\mathbf a\times\mathbf b\).

When \(\mathbf a\) and \(\mathbf b\) are non-zero and not parallel, they span a plane: the flat two-dimensional surface containing all combinations \(s\mathbf a+t\mathbf b\), where \(s\) and \(t\) are scalars. The vector \(\mathbf a\times\mathbf b\) is perpendicular to this spanned plane.

If \(\theta\) is the angle between \(\mathbf a\) and \(\mathbf b\), with \(0\le\theta\le\pi\), then the magnitude is

<Equation label="Cross-product magnitude" tex="|\mathbf a\times\mathbf b|=|\mathbf a||\mathbf b|\sin\theta" />

This magnitude is also the area of the parallelogram whose adjacent side vectors are \(\mathbf a\) and \(\mathbf b\). The right-hand rule chooses between the two possible perpendicular directions: curl the fingers of your right hand from \(\mathbf a\) toward \(\mathbf b\) through the smaller angle \(\theta\); your thumb points in the direction of \(\hat{\mathbf n}\).

If \(\hat{\mathbf n}\) is the unit normal selected by the right-hand rule, then

<Equation label="Vector product" tex="\mathbf a\times\mathbf b=|\mathbf a||\mathbf b|\sin\theta\,\hat{\mathbf n}" />

The unit normal \(\hat{\mathbf n}\) has magnitude \(1\) and is perpendicular to the plane spanned by \(\mathbf a\) and \(\mathbf b\).

## Notation

<Notation
  items={[
    { symbol: "\\mathbf a\\times\\mathbf b", meaning: "the cross product of vectors \\mathbf a and \\mathbf b in \\mathbb R^3" },
    { symbol: "\\mathbf c", meaning: "an additional vector in \\mathbb R^3" },
    { symbol: "\\lambda,\\mu", meaning: "scalars" },
    { symbol: "\\hat{\\mathbf n}", meaning: "a unit normal vector perpendicular to the plane spanned by \\mathbf a and \\mathbf b" },
    { symbol: "\\theta", meaning: "the angle between \\mathbf a and \\mathbf b, with 0\\le\\theta\\le\\pi" },
    { symbol: "|\\mathbf a\\times\\mathbf b|", meaning: "the magnitude of the cross product" },
    { symbol: "\\mathbf i,\\mathbf j,\\mathbf k", meaning: "Cartesian unit basis vectors in the x, y, and z directions" },
    { symbol: "a_1,a_2,a_3", meaning: "the components of \\mathbf a in a Cartesian basis" },
    { symbol: "b_1,b_2,b_3", meaning: "the components of \\mathbf b in the same Cartesian basis" },
    { symbol: "\\mathbf 0", meaning: "the zero vector" },
  ]}
/>

A normal vector to a plane is a vector perpendicular to every direction in that plane. A unit normal has magnitude \(1\). The cross product gives one of the two unit normal directions after it is divided by its own magnitude, provided the cross product is non-zero.

## Method

### Step 1: Determine the normal direction

Identify the plane spanned by \(\mathbf a\) and \(\mathbf b\). Use the right-hand rule: curl from \(\mathbf a\) to \(\mathbf b\), and let your thumb choose the positive normal direction \(\hat{\mathbf n}\).

If \(\mathbf a\) and \(\mathbf b\) are parallel or one of them is \(\mathbf 0\), the parallelogram has zero area and \(\mathbf a\times\mathbf b=\mathbf 0\). In that case there is no unique unit normal from the cross product.

### Step 2: Calculate the magnitude

When magnitudes and the angle are known, use

<Equation label="Magnitude from angle" tex="|\mathbf a\times\mathbf b|=|\mathbf a||\mathbf b|\sin\theta" />

Then attach the direction from Step 1:

<PhysicsDerivation
  items={[
    { label: "Start with the magnitude", tex: "|\\mathbf a\\times\\mathbf b|=|\\mathbf a||\\mathbf b|\\sin\\theta" },
    { label: "Name the right-hand-rule unit normal", tex: "\\hat{\\mathbf n}=\\text{unit normal chosen by the right-hand rule}" },
    { label: "Attach the normal direction", tex: "\\mathbf a\\times\\mathbf b=|\\mathbf a||\\mathbf b|\\sin\\theta\\,\\hat{\\mathbf n}" },
  ]}
/>

The same magnitude gives the parallelogram area:

<Equation label="Parallelogram area" tex="A=|\mathbf a\times\mathbf b|=|\mathbf a||\mathbf b|\sin\theta" />

### Step 3: Use components when coordinates are given

If \(\mathbf a=(a_1,a_2,a_3)\) and \(\mathbf b=(b_1,b_2,b_3)\) in the same Cartesian basis, compute

<Equation label="Component formula" tex="\mathbf a\times\mathbf b=(a_2b_3-a_3b_2,\;a_3b_1-a_1b_3,\;a_1b_2-a_2b_1)" />

This formula gives the vector directly. Its magnitude gives the parallelogram area, and its direction gives the right-hand-rule normal.

## Rules

<Equation label="Bilinearity in the first input" tex="(\lambda\mathbf a+\mu\mathbf c)\times\mathbf b=\lambda(\mathbf a\times\mathbf b)+\mu(\mathbf c\times\mathbf b)" />

<Equation label="Bilinearity in the second input" tex="\mathbf a\times(\lambda\mathbf b+\mu\mathbf c)=\lambda(\mathbf a\times\mathbf b)+\mu(\mathbf a\times\mathbf c)" />

<Equation label="Anti-commutativity" tex="\mathbf a\times\mathbf b=-\mathbf b\times\mathbf a" />

<Equation label="Self cross product" tex="\mathbf a\times\mathbf a=\mathbf 0" />

<Equation label="Unit normal from a non-zero cross product" tex="\hat{\mathbf n}=\frac{\mathbf a\times\mathbf b}{|\mathbf a\times\mathbf b|}\quad\text{when }\mathbf a\times\mathbf b\ne\mathbf 0" />

<Equation label="Cross product in components" tex="\mathbf a\times\mathbf b=(a_2b_3-a_3b_2,\;a_3b_1-a_1b_3,\;a_1b_2-a_2b_1)" />

The Cartesian basis products are

<PhysicsDerivation
  items={[
    { label: "Positive cyclic products", tex: "\\mathbf i\\times\\mathbf j=\\mathbf k,\\quad \\mathbf j\\times\\mathbf k=\\mathbf i,\\quad \\mathbf k\\times\\mathbf i=\\mathbf j" },
    { label: "Reversed products", tex: "\\mathbf j\\times\\mathbf i=-\\mathbf k,\\quad \\mathbf k\\times\\mathbf j=-\\mathbf i,\\quad \\mathbf i\\times\\mathbf k=-\\mathbf j" },
    { label: "Repeated basis products", tex: "\\mathbf i\\times\\mathbf i=\\mathbf j\\times\\mathbf j=\\mathbf k\\times\\mathbf k=\\mathbf 0" },
  ]}
/>

### Component formula from bilinearity

Let \(\mathbf a=a_1\mathbf i+a_2\mathbf j+a_3\mathbf k\) and \(\mathbf b=b_1\mathbf i+b_2\mathbf j+b_3\mathbf k\). Use bilinearity and the basis cross-product table:

<PhysicsDerivation
  items={[
    { label: "Start from Cartesian expansions", tex: "\\mathbf a\\times\\mathbf b=(a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k)\\times(b_1\\mathbf i+b_2\\mathbf j+b_3\\mathbf k)" },
    { label: "Distribute over the second input", tex: "\\mathbf a\\times\\mathbf b=(a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k)\\times b_1\\mathbf i+(a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k)\\times b_2\\mathbf j+(a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k)\\times b_3\\mathbf k" },
    { label: "Move scalars out of the second input", tex: "\\mathbf a\\times\\mathbf b=b_1(a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k)\\times\\mathbf i+b_2(a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k)\\times\\mathbf j+b_3(a_1\\mathbf i+a_2\\mathbf j+a_3\\mathbf k)\\times\\mathbf k" },
    { label: "Distribute over the first input", tex: "\\mathbf a\\times\\mathbf b=b_1(a_1\\mathbf i\\times\\mathbf i+a_2\\mathbf j\\times\\mathbf i+a_3\\mathbf k\\times\\mathbf i)+b_2(a_1\\mathbf i\\times\\mathbf j+a_2\\mathbf j\\times\\mathbf j+a_3\\mathbf k\\times\\mathbf j)+b_3(a_1\\mathbf i\\times\\mathbf k+a_2\\mathbf j\\times\\mathbf k+a_3\\mathbf k\\times\\mathbf k)" },
    { label: "Use basis products", tex: "\\mathbf a\\times\\mathbf b=b_1(a_1\\mathbf 0-a_2\\mathbf k+a_3\\mathbf j)+b_2(a_1\\mathbf k+a_2\\mathbf 0-a_3\\mathbf i)+b_3(-a_1\\mathbf j+a_2\\mathbf i+a_3\\mathbf 0)" },
    { label: "Multiply by scalar coefficients", tex: "\\mathbf a\\times\\mathbf b=-a_2b_1\\mathbf k+a_3b_1\\mathbf j+a_1b_2\\mathbf k-a_3b_2\\mathbf i-a_1b_3\\mathbf j+a_2b_3\\mathbf i" },
    { label: "Collect i components", tex: "\\mathbf a\\times\\mathbf b=(a_2b_3-a_3b_2)\\mathbf i+a_3b_1\\mathbf j-a_1b_3\\mathbf j-a_2b_1\\mathbf k+a_1b_2\\mathbf k" },
    { label: "Collect j components", tex: "\\mathbf a\\times\\mathbf b=(a_2b_3-a_3b_2)\\mathbf i+(a_3b_1-a_1b_3)\\mathbf j-a_2b_1\\mathbf k+a_1b_2\\mathbf k" },
    { label: "Collect k components", tex: "\\mathbf a\\times\\mathbf b=(a_2b_3-a_3b_2)\\mathbf i+(a_3b_1-a_1b_3)\\mathbf j+(a_1b_2-a_2b_1)\\mathbf k" },
    { label: "Write as a coordinate triple", tex: "\\mathbf a\\times\\mathbf b=(a_2b_3-a_3b_2,\\;a_3b_1-a_1b_3,\\;a_1b_2-a_2b_1)" },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Compute \\((0,3,-4)\\times(1,-1,2)\\).",
      answer: "Use \\((a_2b_3-a_3b_2,\\;a_3b_1-a_1b_3,\\;a_1b_2-a_2b_1)\\). Here \\(a_1=0\\), \\(a_2=3\\), \\(a_3=-4\\), \\(b_1=1\\), \\(b_2=-1\\), and \\(b_3=2\\). The first component is \\(a_2b_3-a_3b_2=3\\cdot2-(-4)(-1)=6-4=2\\). The second component is \\(a_3b_1-a_1b_3=(-4)\\cdot1-0\\cdot2=-4-0=-4\\). The third component is \\(a_1b_2-a_2b_1=0\\cdot(-1)-3\\cdot1=0-3=-3\\). Therefore \\((0,3,-4)\\times(1,-1,2)=(2,-4,-3)\\).",
    },
    {
      title: "Example 2",
      question: "Find the area of the parallelogram spanned by \\(4\\mathbf i-3\\mathbf k\\) and \\(2\\mathbf i-\\mathbf j+\\mathbf k\\).",
      answer: "Write the vectors as \\((4,0,-3)\\) and \\((2,-1,1)\\). Compute the cross product component by component. The first component is \\(a_2b_3-a_3b_2=0\\cdot1-(-3)(-1)=0-3=-3\\). The second component is \\(a_3b_1-a_1b_3=(-3)\\cdot2-4\\cdot1=-6-4=-10\\). The third component is \\(a_1b_2-a_2b_1=4\\cdot(-1)-0\\cdot2=-4-0=-4\\). Thus \\((4,0,-3)\\times(2,-1,1)=(-3,-10,-4)\\). The parallelogram area is the magnitude: \\(A=\\sqrt{(-3)^2+(-10)^2+(-4)^2}=\\sqrt{9+100+16}=\\sqrt{125}=5\\sqrt5\\).",
    },
    {
      title: "Example 3",
      question: "Find a normal vector to the plane through the origin containing the position vectors \\(\\mathbf p=(1,2,0)\\) and \\(\\mathbf q=(3,0,1)\\).",
      answer: "A normal to the plane is \\(\\mathbf p\\times\\mathbf q\\), because the two position vectors span the plane. Use \\(a_1=1\\), \\(a_2=2\\), \\(a_3=0\\), \\(b_1=3\\), \\(b_2=0\\), and \\(b_3=1\\). The first component is \\(a_2b_3-a_3b_2=2\\cdot1-0\\cdot0=2-0=2\\). The second component is \\(a_3b_1-a_1b_3=0\\cdot3-1\\cdot1=0-1=-1\\). The third component is \\(a_1b_2-a_2b_1=1\\cdot0-2\\cdot3=0-6=-6\\). Therefore \\(\\mathbf p\\times\\mathbf q=(2,-1,-6)\\), so \\((2,-1,-6)\\) is a normal vector to the plane.",
    },
  ]}
/>

## Checks

- The cross product in this form exists only in three dimensions for this course.
- The result \(\mathbf a\times\mathbf b\) is perpendicular to both input vectors \(\mathbf a\) and \(\mathbf b\).
- Reversing the input order reverses the output: \(\mathbf b\times\mathbf a=-(\mathbf a\times\mathbf b)\).`;
