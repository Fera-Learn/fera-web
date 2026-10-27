export const content = String.raw`## Principle

A three-dimensional Bravais lattice is an infinite periodic set of equivalent points. Seven crystal systems classify the allowed conventional-cell geometry, and compatible centring choices split those systems into exactly fourteen Bravais lattices. This is a classification of point lattices, not a list of fourteen possible atomic crystal structures.

## Notation

<Notation
  items={[
    { symbol: "\\vec a,\\vec b,\\vec c", meaning: "conventional-cell edge vectors", unit: "m, m, m" },
    { symbol: "a,b,c", meaning: "lengths of the conventional-cell edge vectors", unit: "m, m, m" },
    { symbol: "\\alpha,\\beta,\\gamma", meaning: "angles between b and c, c and a, and a and b, respectively", unit: "rad, rad, rad" },
    { symbol: "P", meaning: "primitive centring: lattice points only at cell corners" },
    { symbol: "C", meaning: "base centring: lattice points at cell corners and one pair of opposite faces" },
    { symbol: "I", meaning: "body centring: corners plus the cell centre" },
    { symbol: "F", meaning: "face centring: corners plus every face centre" },
    { symbol: "R", meaning: "rhombohedral centring used for the trigonal Bravais lattice" },
    { symbol: "N_B", meaning: "number of distinct three-dimensional Bravais lattices" },
  ]}
/>

## The Core Method

The cell angles are defined by the pairs of edges they separate:

\\[
\alpha=\angle(\vec b,\vec c),
\qquad \beta=\angle(\vec c,\vec a),
\qquad \gamma=\angle(\vec a,\vec b).
\tag*{[1]}
\\]

Use the conventional-cell metric first, then apply only the compatible centring symbols. With the monoclinic unique axis chosen as \\(b\\), the complete classification is:

| Crystal system | Conventional-cell metric | Bravais lattices |
| --- | --- | --- |
| Triclinic | no edge or angle equalities required; no angle constrained by symmetry | \\(P\\) |
| Monoclinic | no required equal edges; \\(\alpha=\gamma=\pi/2\\), \\(\beta\ne\pi/2\\) | \\(P,C\\) |
| Orthorhombic | no required equal edges; \\(\alpha=\beta=\gamma=\pi/2\\) | \\(P,C,I,F\\) |
| Tetragonal | \\(a=b\ne c\\); \\(\alpha=\beta=\gamma=\pi/2\\) | \\(P,I\\) |
| Trigonal | generic rhombohedral metric: \\(a=b=c\\), \\(\alpha=\beta=\gamma\\), with \\(\alpha\notin\{\pi/2,\pi/3\}\\) and \\(\cos\alpha\ne-1/3\\) | \\(R\\) |
| Hexagonal | \\(a=b\ne c\\); \\(\alpha=\beta=\pi/2\\), \\(\gamma=2\pi/3\\) | \\(P\\) |
| Cubic | \\(a=b=c\\); \\(\alpha=\beta=\gamma=\pi/2\\) | \\(P,I,F\\) |

The exclusions in the trigonal row remove higher-symmetry special metrics. Equal rhombohedral angles with \\(\alpha=\pi/2\\) give primitive cubic axes, \\(\alpha=\pi/3\\) give an FCC primitive cell, and \\(\cos\alpha=-1/3\\) give a BCC primitive cell.

Counting each row gives

\\[
N_B=1+2+4+2+1+1+3=14.
\tag*{[2]}
\\]

The letters specify extra lattice points in the chosen conventional cell; they do not specify chemical species or a basis. For example, cubic \\(I\\) is a body-centred cubic point lattice whether one atom or a multi-atom basis is attached to each lattice point.

Not every centring can be appended independently to every crystal system. Some proposed centred cells are equivalent to a listed lattice after a change of cell, while others conflict with the defining symmetry. The table uses one standard representative for each distinct lattice, so multiplying seven systems by several centring types would overcount.

The trigonal and hexagonal entries require particular care. They are separate crystal systems here: the trigonal Bravais lattice is denoted \\(R\\) and can be described using primitive rhombohedral axes, whereas the hexagonal Bravais lattice is primitive \\(P\\) with a \\(120^\circ\\) basal angle. The classification does not imply that every crystal with a hexagonal-looking conventional cell is the hexagonal Bravais lattice.

<PhysicsExamples collapsible
  items={[
    {
      title: "Classifying a body-centred tetragonal lattice",
      question: "A conventional cell has \\(a=b=0.40\\,\\mathrm{nm}\\), \\(c=0.65\\,\\mathrm{nm}\\), all three angles equal to \\(90^\\circ\\), and a lattice point at the body centre. Identify its crystal system and Bravais lattice.",
      answer: "The edge data satisfy \\(a=b\\ne c\\), and the three right angles satisfy the tetragonal metric in the table. The unequal value of \\(c\\) rules out cubic symmetry even though the cell has right angles. A lattice point at the body centre gives centring symbol \\(I\\). **Final result:** the Bravais lattice is body-centred tetragonal, written tetragonal \\(I\\). The metric and centring must both be specified.",
    },
    {
      title: "Why seven systems do not produce twenty-eight lattices",
      question: "A student multiplies seven crystal systems by the four symbols \\(P\\), \\(C\\), \\(I\\), and \\(F\\) and claims that there are twenty-eight Bravais lattices. Diagnose the error and give the correct total.",
      answer: "Centring choices are not independent of cell geometry. The distinct choices by row are \\(1\\) triclinic, \\(2\\) monoclinic, \\(4\\) orthorhombic, \\(2\\) tetragonal, \\(1\\) trigonal, \\(1\\) hexagonal, and \\(3\\) cubic. Adding rather than multiplying gives \\[1+2+4+2+1+1+3=14.\\] The trigonal entry also uses \\(R\\), so the proposed four-symbol list is incomplete as well as overcounted. **Final result:** there are exactly fourteen distinct three-dimensional Bravais lattices distributed among seven crystal systems.",
    },
  ]}
/>
`;
