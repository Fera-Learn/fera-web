export const content = String.raw`## Principle

An ideal crystal repeats the same local arrangement throughout space. The abstract lattice records this periodicity as equivalent points; translating by any lattice vector leaves the lattice unchanged. Three independent primitive translations generate every point of a three-dimensional lattice and define a primitive cell containing exactly one lattice point.

## Notation

<Notation
  items={[
    { symbol: "\\vec r", meaning: "position in space", unit: "m" },
    { symbol: "\\vec R,\\vec R'", meaning: "lattice translation vectors", unit: "m, m" },
    { symbol: "\\vec a_1,\\vec a_2,\\vec a_3", meaning: "independent primitive translation vectors", unit: "m, m, m" },
    { symbol: "n_i,n_i',n", meaning: "integer translation coefficients or point label" },
    { symbol: "\\mathcal L", meaning: "set of all lattice points" },
    { symbol: "f(\\vec r)", meaning: "any crystal property with lattice periodicity" },
    { symbol: "V_p", meaning: "primitive-cell volume", unit: "m^{3}" },
    { symbol: "d", meaning: "spacing of a one-dimensional lattice", unit: "m" },
  ]}
/>

## The Core Method

The repeated two-colour motif below makes the two levels of description visible: the array of equivalent anchor points is the lattice, while the attached pair is the local basis. Either shown translation carries the complete pattern onto itself.

<PhysicsDiagram slug="crystal-periodicity-translations" />

Choose three non-coplanar translations so that every lattice point can be reached using integer steps. With one lattice point chosen as the origin, the lattice is

\\[
\mathcal L=\left\{\vec R:n_1,n_2,n_3\in\mathbb Z\right\},
\qquad
\vec R=n_1\vec a_1+n_2\vec a_2+n_3\vec a_3.
\tag*{[1]}
\\]

The coefficients must be integers. Fractional coefficients generally stop between equivalent lattice points, while negative integers move in the opposite direction. Translating one lattice point by another lattice vector gives

\\[
\vec R+\vec R'
=(n_1+n_1')\vec a_1+(n_2+n_2')\vec a_2+(n_3+n_3')\vec a_3\in\mathcal L.
\tag*{[2]}
\\]

Equation [2] shows why the entire lattice is unchanged: addition by a fixed lattice vector merely relabels the integer triplets. A spatial property of an ideal crystal, such as number density or potential energy density, therefore obeys

\\[
f(\vec r+\vec R)=f(\vec r)
\qquad\text{for every }\vec R\in\mathcal L.
\tag*{[3]}
\\]

A unit cell is any region whose lattice translations tile space without gaps or overlaps. A primitive cell is the smallest-volume choice in the lattice-point sense: it contains one lattice point after boundary sharing is counted. The parallelepiped spanned by primitive vectors has volume

\\[
V_p=\left|\vec a_1\cdot(\vec a_2\times\vec a_3)\right|.
\tag*{[4]}
\\]

Primitive vectors are not unique. Replacing them by another independent set that generates exactly the same integer translations changes the cell shape but not the lattice or \\(V_p\\). A larger repeating cell is a valid conventional or non-primitive unit cell, but its edge vectors do not form a primitive set if the cell contains more than one lattice point.

The lattice is also distinct from the crystal's atoms. A lattice point marks an equivalent environment; a collection of one or more atoms can be attached to every lattice point. Counting visible atoms as though each were a separate lattice point can therefore give the wrong translational symmetry.

<PhysicsExamples collapsible
  items={[
    {
      title: "Generating a lattice point and primitive volume",
      question: "A lattice has primitive vectors \\(\\vec a_1=(0.20,0,0)\\,\\mathrm{nm}\\), \\(\\vec a_2=(0,0.30,0)\\,\\mathrm{nm}\\), and \\(\\vec a_3=(0,0,0.40)\\,\\mathrm{nm}\\). Find the point labelled by \\((n_1,n_2,n_3)=(2,-1,3)\\) and the primitive-cell volume in SI units.",
      answer: "Use equation \\([1]\\) and multiply each vector by its signed integer coefficient: \\[\\vec R=2(0.20,0,0)-(0,0.30,0)+3(0,0,0.40)=(0.40,-0.30,1.20)\\,\\mathrm{nm}.\\] The vectors are mutually perpendicular, so equation \\([4]\\) reduces to the product of their lengths. Convert each nanometre factor using \\(1\\,\\mathrm{nm}=10^{-9}\\,\\mathrm m\\): \\[V_p=(0.20)(0.30)(0.40)\\,\\mathrm{nm^3}=0.0240\\times10^{-27}\\,\\mathrm{m^3}=2.40\\times10^{-29}\\,\\mathrm{m^3}.\\] **Final result:** \\(\\vec R=(0.40,-0.30,1.20)\\,\\mathrm{nm}\\) and \\(V_p=2.40\\times10^{-29}\\,\\mathrm{m^3}\\). The negative second coordinate is valid because primitive translations can be taken in either direction.",
    },
    {
      title: "Testing translations in one dimension",
      question: "Equivalent points lie on a line at positions separated by \\(d\\). Decide whether translations by \\(d/2\\), \\(d\\), and \\(3d\\) are lattice translations, and identify the primitive translation.",
      answer: "Label the points by integer positions \\(R=nd\\). Translation by \\(d/2\\) sends \\(nd\\) to \\((n+1/2)d\\), which is not a lattice point, so periodicity fails. Translation by \\(d\\) sends \\(nd\\) to \\((n+1)d\\), and translation by \\(3d\\) sends it to \\((n+3)d\\); both remain in the lattice. The shorter valid generator is \\(d\\), while \\(3d\\) produces a valid but non-primitive repeating cell containing three lattice points. **Final result:** \\(d\\) and \\(3d\\) are lattice translations, \\(d/2\\) is not, and the primitive translation has length \\(d\\).",
    },
  ]}
/>
`;
