export const content = String.raw`## Principle

A straight line is a set of points that all lie in one fixed direction from a chosen reference point. In vector form, a line in two-dimensional space or three-dimensional space is described by a point on the line and a non-zero direction vector parallel to the line.

This vector-line description works in \(\mathbb R^2\), where vectors have two components, and in \(\mathbb R^3\), where vectors have three components.

## Notation

<Notation
  items={[
    { symbol: "\\ell", meaning: "a straight line" },
    { symbol: "A", meaning: "a fixed reference point on the line" },
    { symbol: "\\mathbf a", meaning: "the position vector of A from the chosen origin" },
    { symbol: "P", meaning: "a variable point on the line" },
    { symbol: "\\mathbf r", meaning: "the position vector of P from the chosen origin" },
    { symbol: "\\mathbf b", meaning: "a non-zero direction vector parallel to the line" },
    { symbol: "\\lambda", meaning: "a real parameter that selects a point on the line" },
    { symbol: "\\mathbf c", meaning: "the position vector of a point C whose distance from the line is being measured" },
    { symbol: "\\mathbf a-\\mathbf c", meaning: "a vector from C to the reference point A" },
    { symbol: "(\\mathbf a-\\mathbf c)\\times\\mathbf b", meaning: "a vector whose magnitude gives the area of the parallelogram formed by \\mathbf a-\\mathbf c and \\mathbf b" },
  ]}
/>

The closest-distance vector from a point \(C\) to a line is the vector from \(C\) to the nearest point on \(\ell\). It is perpendicular to the line, so it is perpendicular to every direction vector for the line.

## Method

### Step 1: Choose one point on the line

Choose any known point \(A\) on \(\ell\). Write its position vector as \(\mathbf a\). In \(\mathbb R^2\), \(\mathbf a=(a_1,a_2)\). In \(\mathbb R^3\), \(\mathbf a=(a_1,a_2,a_3)\).

### Step 2: Choose a non-zero parallel vector

Choose any non-zero vector \(\mathbf b\) parallel to the line. The vector \(\mathbf b\) must not be \(\mathbf 0\), because \(\lambda\mathbf 0=\mathbf 0\) for every \(\lambda\), so it would not create different points along a line.

### Step 3: Write the line equation

Start at the reference position \(\mathbf a\), then add a variable multiple of the direction vector:

<Equation label="Line from point and direction" tex="\mathbf r=\mathbf a+\lambda\mathbf b" />

The parameter \(\lambda\) runs through all real numbers. Positive values move in the direction of \(\mathbf b\), negative values move in the opposite direction, and \(\lambda=0\) gives the reference point \(A\).

## Rules

<Equation label="Line equation" tex="\ell:\quad\mathbf r=\mathbf a+\lambda\mathbf b,\quad \lambda\in\mathbb R,\quad \mathbf b\ne\mathbf 0" />

<Equation label="Rescaled direction" tex="\mathbf r=\mathbf a+t(k\mathbf b),\quad k\ne0,\quad t\in\mathbb R" />

<Equation label="Changed reference point" tex="\mathbf a'=\mathbf a+\lambda_0\mathbf b\quad\Longrightarrow\quad \mathbf r=\mathbf a'+t\mathbf b" />

<Equation label="Distance from a point to a line" tex="d=\frac{|(\mathbf a-\mathbf c)\times\mathbf b|}{|\mathbf b|}" />

The distance formula applies in \(\mathbb R^3\). For a line in the \(xy\)-plane, the same formula can be used by treating all vectors as three-dimensional vectors with zero \(z\)-component.

### Why \(\mathbf r-\mathbf a\) is parallel to \(\mathbf b\)

If \(P\) is on the line, then its position vector satisfies \(\mathbf r=\mathbf a+\lambda\mathbf b\) for some real \(\lambda\). Subtract \(\mathbf a\) from both sides:

<PhysicsDerivation
  items={[
    { label: "Start with the line equation", tex: "\\mathbf r=\\mathbf a+\\lambda\\mathbf b" },
    { label: "Subtract \\mathbf a from both sides", tex: "\\mathbf r-\\mathbf a=(\\mathbf a+\\lambda\\mathbf b)-\\mathbf a" },
    { label: "Regroup the vector sum", tex: "\\mathbf r-\\mathbf a=(\\mathbf a-\\mathbf a)+\\lambda\\mathbf b" },
    { label: "Use \\mathbf a-\\mathbf a=\\mathbf 0", tex: "\\mathbf r-\\mathbf a=\\mathbf 0+\\lambda\\mathbf b" },
    { label: "Use \\mathbf 0+\\lambda\\mathbf b=\\lambda\\mathbf b", tex: "\\mathbf r-\\mathbf a=\\lambda\\mathbf b" },
  ]}
/>

Because \(\mathbf r-\mathbf a\) is a scalar multiple of \(\mathbf b\), it is parallel to \(\mathbf b\). When \(\lambda=0\), the vector \(\mathbf r-\mathbf a\) is \(\mathbf 0\), which represents the reference point itself.

### Why the distance formula works

Let \(C\) have position vector \(\mathbf c\). The vector from \(C\) to \(A\) is \(\mathbf a-\mathbf c\). If \(d\) is the perpendicular distance from \(C\) to the line, then the parallelogram with side vectors \(\mathbf a-\mathbf c\) and \(\mathbf b\) has base length \(|\mathbf b|\) and height \(d\).

<PhysicsDerivation
  items={[
    { label: "Area from base and height", tex: "\\text{area}=|\\mathbf b|d" },
    { label: "Area from cross product", tex: "\\text{area}=|(\\mathbf a-\\mathbf c)\\times\\mathbf b|" },
    { label: "Equate the two area expressions", tex: "|\\mathbf b|d=|(\\mathbf a-\\mathbf c)\\times\\mathbf b|" },
    { label: "Divide by the non-zero base length", tex: "d=\\frac{|(\\mathbf a-\\mathbf c)\\times\\mathbf b|}{|\\mathbf b|}" },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Write a vector equation for the line in the \\(xy\\)-plane with \\(x=1\\), parallel to the \\(y\\)-axis.",
      answer: "Every point on the line has \\(x=1\\). Choose \\(A=(1,0)\\), so \\(\\mathbf a=\\mathbf i\\). A non-zero vector parallel to the \\(y\\)-axis is \\(\\mathbf b=\\mathbf j\\). Therefore \\(\\mathbf r=\\mathbf i+\\lambda\\mathbf j\\), with \\(\\lambda\\in\\mathbb R\\). In coordinates this is \\(\\mathbf r=(1,0)+\\lambda(0,1)=(1,\\lambda)\\), so the \\(x\\)-component is always \\(1\\).",
    },
    {
      title: "Example 2",
      question: "Use \\(\\mathbf a=\\mathbf i+7\\mathbf j\\) and \\(\\mathbf b=-5\\mathbf j\\) to parametrize the same line \\(x=1\\).",
      answer: "The reference point is \\(A=(1,7)\\), which lies on \\(x=1\\). The direction vector \\(\\mathbf b=-5\\mathbf j\\) is non-zero and parallel to the \\(y\\)-axis. The parametrization is \\(\\mathbf r=\\mathbf i+7\\mathbf j+\\lambda(-5\\mathbf j)\\). Combine the \\(\\mathbf j\\) terms: \\(\\mathbf r=\\mathbf i+(7-5\\lambda)\\mathbf j\\). In coordinates, \\(\\mathbf r=(1,7-5\\lambda)\\). Since \\(\\lambda\\) can be any real number, \\(7-5\\lambda\\) can be any real \\(y\\)-value, so this describes exactly the same line \\(x=1\\).",
    },
    {
      title: "Example 3",
      question: "Find the distance from \\(C=(1,2,3)\\) to the line \\(\\mathbf r=(0,0,0)+\\lambda(2,0,1)\\).",
      answer: "Here \\(\\mathbf a=(0,0,0)\\), \\(\\mathbf b=(2,0,1)\\), and \\(\\mathbf c=(1,2,3)\\). First compute \\(\\mathbf a-\\mathbf c=(-1,-2,-3)\\). Now compute \\((\\mathbf a-\\mathbf c)\\times\\mathbf b=(-1,-2,-3)\\times(2,0,1)\\). The first component is \\(a_2b_3-a_3b_2=(-2)\\cdot1-(-3)\\cdot0=-2-0=-2\\). The second component is \\(a_3b_1-a_1b_3=(-3)\\cdot2-(-1)\\cdot1=-6+1=-5\\). The third component is \\(a_1b_2-a_2b_1=(-1)\\cdot0-(-2)\\cdot2=0+4=4\\). Thus \\((\\mathbf a-\\mathbf c)\\times\\mathbf b=(-2,-5,4)\\), whose magnitude is \\(\\sqrt{(-2)^2+(-5)^2+4^2}=\\sqrt{4+25+16}=\\sqrt{45}=3\\sqrt5\\). Also \\(|\\mathbf b|=\\sqrt{2^2+0^2+1^2}=\\sqrt5\\). Therefore \\(d=3\\sqrt5/\\sqrt5=3\\).",
    },
  ]}
/>

## Checks

- The direction vector must not be the zero vector; otherwise the equation gives only one point.
- Many parametrizations can describe the same line because direction vectors can be rescaled and reference points can be changed to any point on the line.
- The parameter has no fixed unit unless the chosen direction-vector convention gives it one.`;
