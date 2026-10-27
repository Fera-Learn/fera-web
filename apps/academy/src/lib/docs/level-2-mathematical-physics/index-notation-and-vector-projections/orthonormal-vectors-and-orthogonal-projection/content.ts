export const content = String.raw`## Principle

Choose a direction and imagine casting an arrow's shadow onto it. The shadow is the part of the arrow that points along the chosen direction; subtracting that shadow leaves a part at right angles to it. Orthogonal projection turns this picture into a calculation.

Perpendicular unit directions are especially convenient because they measure independent components without changing their lengths. A collection of such directions is called an **orthonormal basis**.

Objective: calculate parallel and perpendicular vector components, then verify the decomposition by reconstruction and a dot-product check.

Prerequisite: familiarity with three-dimensional vectors, dot products, and scalar multiplication.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf a,\\mathbf b", meaning: "vectors; \\(\\mathbf a\\) is the nonzero direction onto which \\(\\mathbf b\\) is projected" },
    { symbol: "\\mathbf e_i", meaning: "the \\(i\\)th unit direction in an orthonormal basis" },
    { symbol: "i,j", meaning: "basis-direction labels taking the values \\(1,2,3\\)" },
    { symbol: "\\mathbf b_{\\parallel}", meaning: "the part of \\(\\mathbf b\\) parallel to \\(\\mathbf a\\)" },
    { symbol: "\\mathbf b_{\\perp}", meaning: "the part of \\(\\mathbf b\\) perpendicular to \\(\\mathbf a\\)" },
    { symbol: "c", meaning: "the scalar multiplying \\(\\mathbf a\\) to give the parallel component" },
    { symbol: "\\mathbf a\\cdot\\mathbf b,|\\mathbf a|", meaning: "the Euclidean dot product and magnitude" },
  ]}
/>

## The Core Method

Two different basis directions should meet at a right angle, while each direction should have length one. Both facts fit into one dot-product rule:

\[
\mathbf e_i\cdot\mathbf e_j=
\begin{cases}
1,&i=j,\\
0,&i\ne j.
\end{cases}
\tag*{[1]}
\]

The value one says a basis vector is a unit vector. The value zero says two different basis vectors are perpendicular. For example, the standard Cartesian directions \(\mathbf e_1=(1,0,0)\), \(\mathbf e_2=(0,1,0)\), and \(\mathbf e_3=(0,0,1)\) obey equation \([1]\).

Projection separates the original vector into the shadow along the chosen direction and the remainder:

\[
\mathbf b=\mathbf b_{\parallel}+\mathbf b_{\perp},
\qquad
\mathbf b_{\perp}\cdot\mathbf a=0.
\tag*{[2]}
\]

The first relation reconstructs the original vector. The second is the check that the remainder really is perpendicular to the chosen direction.

Because the parallel component points along \(\mathbf a\), it must be a scalar multiple of \(\mathbf a\). Write

\[
\mathbf b_{\parallel}=c\mathbf a,
\qquad
\mathbf b_{\perp}=\mathbf b-c\mathbf a.
\tag*{[3]}
\]

The unknown coefficient \(c\) tells us how much of the direction vector is needed. To find it, impose the perpendicularity condition from equation \([2]\), then use the distributive and symmetric properties of the dot product:

\[
\begin{aligned}
0
&=(\mathbf b-c\mathbf a)\cdot\mathbf a\\
&=\mathbf b\cdot\mathbf a-c(\mathbf a\cdot\mathbf a)\\
&=\mathbf a\cdot\mathbf b-c|\mathbf a|^2.
\end{aligned}
\tag*{[4]}
\]

Since \(\mathbf a\ne\mathbf 0\), the quantity \(|\mathbf a|^2\) is positive and division by it is valid:

\[
c=\frac{\mathbf a\cdot\mathbf b}{|\mathbf a|^2}.
\tag*{[5]}
\]

Substituting this coefficient into equation \([3]\) gives both pieces:

\[
\boxed{
\mathbf b_{\parallel}
=\frac{\mathbf a\cdot\mathbf b}{|\mathbf a|^2}\mathbf a
}
\qquad
\boxed{
\mathbf b_{\perp}
=\mathbf b-\frac{\mathbf a\cdot\mathbf b}{|\mathbf a|^2}\mathbf a
}.
\tag*{[6]}
\]

If the chosen direction is a unit vector, its squared magnitude is one and the denominator disappears. For a general direction, keep the denominator: dropping it changes the length of the projected vector. Projection onto the zero vector is undefined because equation \([5]\) would require division by zero.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Projection onto a unit axis",
      question: "Resolve \\(\\mathbf b=(3,4,0)\\) into components parallel and perpendicular to \\(\\mathbf e_1=(1,0,0)\\).",
      answer: "The chosen direction is already a unit vector, so equation \\([6]\\) has denominator one. First find the coefficient: \\[\\mathbf e_1\\cdot\\mathbf b=1(3)+0(4)+0(0)=3.\\tag*{[7]}\\] The parallel component is therefore \\[\\mathbf b_{\\parallel}=3\\mathbf e_1=(3,0,0).\\tag*{[8]}\\] Subtract it from the original vector: \\[\\mathbf b_{\\perp}=(3,4,0)-(3,0,0)=(0,4,0).\\tag*{[9]}\\] Check both requirements: \\(\\mathbf b_{\\parallel}+\\mathbf b_{\\perp}=(3,4,0)\\), and \\(\\mathbf b_{\\perp}\\cdot\\mathbf e_1=0\\). **Final result:** \\(\\mathbf b_{\\parallel}=(3,0,0)\\) and \\(\\mathbf b_{\\perp}=(0,4,0)\\).",
    },
    {
      title: "Projection onto a non-unit direction",
      question: "Resolve \\(\\mathbf b=(3,0,3)\\) into components parallel and perpendicular to \\(\\mathbf a=(1,2,2)\\).",
      answer: "This direction is not a unit vector, so keep the denominator in equation \\([6]\\). Calculate \\[\\mathbf a\\cdot\\mathbf b=1(3)+2(0)+2(3)=9,\\qquad |\\mathbf a|^2=1^2+2^2+2^2=9.\\tag*{[10]}\\] Hence \\(c=9/9=1\\), so \\[\\mathbf b_{\\parallel}=1(1,2,2)=(1,2,2).\\tag*{[11]}\\] The remainder is \\[\\mathbf b_{\\perp}=(3,0,3)-(1,2,2)=(2,-2,1).\\tag*{[12]}\\] Finally, \\[(2,-2,1)\\cdot(1,2,2)=2-4+2=0,\\tag*{[13]}\\] which confirms that the remainder is perpendicular to the projection direction. **Final result:** \\(\\mathbf b_{\\parallel}=(1,2,2)\\) and \\(\\mathbf b_{\\perp}=(2,-2,1)\\).",
    },
  ]}
/>
`;
