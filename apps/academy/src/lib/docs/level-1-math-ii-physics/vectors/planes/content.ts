export const content = String.raw`## Principle

An affine plane in \(\mathbb R^3\) is a flat two-dimensional set of points. It is described by one fixed point on the plane and two independent directions within the plane.

The vector equation of a plane starts at a reference position and moves by any real multiples of two non-parallel direction vectors. The Cartesian equation uses one normal vector perpendicular to every direction in the plane.

## Notation

<Notation
  items={[
    { symbol: "\\Pi", meaning: "a plane in three-dimensional space" },
    { symbol: "A", meaning: "a fixed reference point on the plane" },
    { symbol: "\\mathbf a", meaning: "the position vector of A from the chosen origin" },
    { symbol: "P", meaning: "a variable point on the plane" },
    { symbol: "\\mathbf r", meaning: "the position vector of P from the chosen origin" },
    { symbol: "\\mathbf b", meaning: "a first non-zero direction vector lying in the plane" },
    { symbol: "\\mathbf c", meaning: "a second non-zero direction vector lying in the plane, not parallel to \\mathbf b" },
    { symbol: "\\lambda", meaning: "a real parameter multiplying \\mathbf b" },
    { symbol: "\\mu", meaning: "a real parameter multiplying \\mathbf c" },
    { symbol: "\\mathbf n", meaning: "a normal vector perpendicular to the plane" },
    { symbol: "\\hat{\\mathbf n}", meaning: "a unit normal vector, equal to \\mathbf n/|\\mathbf n| when \\mathbf n\\ne\\mathbf 0" },
    { symbol: "d", meaning: "the Cartesian constant in n_1x+n_2y+n_3z=d" },
  ]}
/>

If \(\mathbf r=(x,y,z)\) and \(\mathbf n=(n_1,n_2,n_3)\), then \(\mathbf n\cdot\mathbf r=n_1x+n_2y+n_3z\).

## Method

### Step 1: Choose a point on the plane

Choose any known point \(A\) on \(\Pi\). Write its position vector as \(\mathbf a\). If \(A=(a_1,a_2,a_3)\), then \(\mathbf a=(a_1,a_2,a_3)\).

### Step 2: Form two non-parallel direction vectors

Choose two vectors \(\mathbf b\) and \(\mathbf c\) that lie in the plane. They must not be parallel, because parallel directions describe only one line of movement. The expression \(\lambda\mathbf b+\mu\mathbf c\) then gives every displacement from \(A\) to a point in the plane.

### Step 3: Write the vector equation

Start from \(\mathbf a\), move \(\lambda\) copies of \(\mathbf b\), and move \(\mu\) copies of \(\mathbf c\):

<Equation label="Parametric plane equation" tex="\mathbf r=\mathbf a+\lambda\mathbf b+\mu\mathbf c" />

The parameters \(\lambda\) and \(\mu\) run through all real numbers.

### Step 4: Compute a normal vector

Use the cross product of the two direction vectors:

<Equation label="Normal vector" tex="\mathbf n=\mathbf b\times\mathbf c" />

Because \(\mathbf b\) and \(\mathbf c\) are not parallel, \(\mathbf b\times\mathbf c\ne\mathbf 0\). This normal vector is perpendicular to both plane directions.

### Step 5: Write the Cartesian equation

Every point \(P\) on the plane has displacement \(\mathbf r-\mathbf a\) from \(A\). That displacement lies in the plane, so it is perpendicular to \(\mathbf n\). Therefore \(\mathbf n\cdot(\mathbf r-\mathbf a)=0\), which gives

<Equation label="Cartesian plane equation" tex="\mathbf n\cdot\mathbf r=\mathbf n\cdot\mathbf a" />

## Rules

<Equation label="Parametric plane equation" tex="\Pi:\quad\mathbf r=\mathbf a+\lambda\mathbf b+\mu\mathbf c,\quad \lambda,\mu\in\mathbb R,\quad \mathbf b\times\mathbf c\ne\mathbf 0" />

<Equation label="Cartesian plane equation" tex="\mathbf n\cdot\mathbf r=d" />

<Equation label="Component Cartesian equation" tex="n_1x+n_2y+n_3z=d" />

<Equation label="Cartesian constant" tex="d=\mathbf n\cdot\mathbf a" />

<Equation label="Distance from the origin" tex="|\hat{\mathbf n}\cdot\mathbf a|=\frac{|d|}{|\mathbf n|}" />

### Why \(\mathbf n\cdot(\mathbf r-\mathbf a)=0\)

If \(P\) lies on \(\Pi\), then \(\mathbf r-\mathbf a\) is a displacement from the reference point \(A\) to another point in the plane. The two direction vectors span all such plane displacements, so for some real \(\lambda\) and \(\mu\),

<Equation label="Plane displacement" tex="\mathbf r-\mathbf a=\lambda\mathbf b+\mu\mathbf c" />

Now use \(\mathbf n=\mathbf b\times\mathbf c\). Since a cross product is perpendicular to each input, \(\mathbf n\cdot\mathbf b=0\) and \(\mathbf n\cdot\mathbf c=0\).

<PhysicsDerivation
  items={[
    { label: "Start with the plane displacement", tex: "\\mathbf r-\\mathbf a=\\lambda\\mathbf b+\\mu\\mathbf c" },
    { label: "Dot both sides with the normal", tex: "\\mathbf n\\cdot(\\mathbf r-\\mathbf a)=\\mathbf n\\cdot(\\lambda\\mathbf b+\\mu\\mathbf c)" },
    { label: "Distribute the dot product", tex: "\\mathbf n\\cdot(\\mathbf r-\\mathbf a)=\\lambda(\\mathbf n\\cdot\\mathbf b)+\\mu(\\mathbf n\\cdot\\mathbf c)" },
    { label: "Use perpendicularity", tex: "\\mathbf n\\cdot(\\mathbf r-\\mathbf a)=\\lambda\\cdot0+\\mu\\cdot0" },
    { label: "Simplify", tex: "\\mathbf n\\cdot(\\mathbf r-\\mathbf a)=0" },
  ]}
/>

### From normal form to Cartesian form

Expand \(\mathbf n\cdot(\mathbf r-\mathbf a)=0\) without skipping the algebra:

<PhysicsDerivation
  items={[
    { label: "Start with perpendicular displacement", tex: "\\mathbf n\\cdot(\\mathbf r-\\mathbf a)=0" },
    { label: "Distribute over subtraction", tex: "\\mathbf n\\cdot\\mathbf r-\\mathbf n\\cdot\\mathbf a=0" },
    { label: "Add \\mathbf n\\cdot\\mathbf a to both sides", tex: "\\mathbf n\\cdot\\mathbf r=\\mathbf n\\cdot\\mathbf a" },
    { label: "Name the constant", tex: "\\mathbf n\\cdot\\mathbf r=d" },
    { label: "Use components", tex: "n_1x+n_2y+n_3z=d" },
  ]}
/>

### Distance from the origin

Let \(O\) be the origin. The signed perpendicular distance from \(O\) to the plane in the unit-normal direction is the projection of \(\mathbf a\) onto \(\hat{\mathbf n}\). Its physical distance is the absolute value:

<PhysicsDerivation
  items={[
    { label: "Unit normal", tex: "\\hat{\\mathbf n}=\\frac{\\mathbf n}{|\\mathbf n|}" },
    { label: "Project \\mathbf a onto the unit normal", tex: "\\hat{\\mathbf n}\\cdot\\mathbf a=\\frac{\\mathbf n}{|\\mathbf n|}\\cdot\\mathbf a" },
    { label: "Move the scalar outside the dot product", tex: "\\hat{\\mathbf n}\\cdot\\mathbf a=\\frac{\\mathbf n\\cdot\\mathbf a}{|\\mathbf n|}" },
    { label: "Use d=\\mathbf n\\cdot\\mathbf a", tex: "\\hat{\\mathbf n}\\cdot\\mathbf a=\\frac{d}{|\\mathbf n|}" },
    { label: "Take absolute value for distance", tex: "|\\hat{\\mathbf n}\\cdot\\mathbf a|=\\frac{|d|}{|\\mathbf n|}" },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find a Cartesian equation for the plane through \\(A=(1,0,0)\\), \\(B=(2,1,0)\\), and \\(C=(1,1,2)\\).",
      answer: "Use \\(A\\) as the reference point, so \\(\\mathbf a=(1,0,0)\\). Form two direction vectors in the plane: \\(\\mathbf b=\\overrightarrow{AB}=B-A=(2,1,0)-(1,0,0)=(1,1,0)\\), and \\(\\mathbf c=\\overrightarrow{AC}=C-A=(1,1,2)-(1,0,0)=(0,1,2)\\). Compute \\(\\mathbf n=\\mathbf b\\times\\mathbf c\\). The first component is \\(b_2c_3-b_3c_2=1\\cdot2-0\\cdot1=2-0=2\\). The second component is \\(b_3c_1-b_1c_3=0\\cdot0-1\\cdot2=0-2=-2\\). The third component is \\(b_1c_2-b_2c_1=1\\cdot1-1\\cdot0=1-0=1\\). Thus \\(\\mathbf n=(2,-2,1)\\). Now compute \\(d=\\mathbf n\\cdot\\mathbf a=(2,-2,1)\\cdot(1,0,0)=2\\cdot1+(-2)\\cdot0+1\\cdot0=2+0+0=2\\). Therefore the Cartesian equation is \\(2x-2y+z=2\\).",
    },
    {
      title: "Example 2",
      question: "Find the distance from the origin to the plane \\(x+2y+3z=4\\).",
      answer: "The Cartesian coefficients give \\(\\mathbf n=(1,2,3)\\) and \\(d=4\\). Compute the normal magnitude: \\(|\\mathbf n|=\\sqrt{1^2+2^2+3^2}=\\sqrt{1+4+9}=\\sqrt{14}\\). The distance from the origin is \\(|d|/|\\mathbf n|=|4|/\\sqrt{14}=4/\\sqrt{14}\\).",
    },
    {
      title: "Example 3",
      question: "Decide whether the plane \\(-2x+y+5z=0\\) passes through the origin.",
      answer: "Here \\(d=0\\). Substitute the origin \\((0,0,0)\\) into the left side: \\(-2\\cdot0+1\\cdot0+5\\cdot0=0+0+0=0\\). This equals \\(d\\), so the origin satisfies the equation and the plane passes through the origin.",
    },
  ]}
/>

## Checks

- The direction vectors \(\mathbf b\) and \(\mathbf c\) must not be parallel; otherwise they do not span a plane.
- Normal vectors are not unique: any non-zero scalar multiple of \(\mathbf n\) gives the same plane after the Cartesian constant is scaled by the same factor.
- In \(n_1x+n_2y+n_3z=d\), the coefficients \(n_1\), \(n_2\), and \(n_3\) are the components of a normal vector.`;
