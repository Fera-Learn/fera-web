export const content = String.raw`## Principle

A crystal structure is produced by attaching the same basis to every point of a Bravais lattice. The lattice specifies periodic geometry but contains no atoms by itself; the basis specifies which atoms occupy positions relative to each lattice point. A unit cell is a region used to tile space, not an additional physical object.

## Notation

<Notation
  items={[
    { symbol: "\\vec a_1,\\vec a_2,\\vec a_3", meaning: "primitive lattice vectors", unit: "m, m, m" },
    { symbol: "n_1,n_2,n_3,\\vec n,\\vec m", meaning: "integer translation coefficients and integer translation triplets", unit: "1" },
    { symbol: "\\vec R_{\\vec n}", meaning: "position of a Bravais-lattice point", unit: "m" },
    { symbol: "\\vec\\tau_j", meaning: "position of basis site j relative to a lattice point", unit: "m" },
    { symbol: "\\vec r_{\\vec n j}", meaning: "position of basis site j in the cell at lattice point \\vec R_{\\vec n}", unit: "m" },
    { symbol: "j,N_b", meaning: "basis-site label and number of sites in the basis", unit: "1" },
    { symbol: "N_L,N_{\\mathrm{atom}}", meaning: "weighted lattice points and atoms in a chosen cell", unit: "1" },
    { symbol: "a,A,B", meaning: "cubic lattice parameter and labels for two atomic species", unit: "m, 1, 1" },
  ]}
/>

## The Core Method

The construction below is literal: start with an abstract periodic set of points, attach the same repeating object to every point, and obtain the full crystal structure. Changing the basis changes the crystal without changing the underlying lattice.

<PhysicsDiagram slug="lattice-plus-basis" />

Choose three non-coplanar primitive vectors. Every point of the Bravais lattice is reached by an integer translation

\\[
\vec R_{\vec n}=n_1\vec a_1+n_2\vec a_2+n_3\vec a_3,
\qquad n_1,n_2,n_3\in\mathbb Z.
\tag*{[1]}
\\]

The points in equation [1] are all translationally equivalent. A lattice point is therefore a geometric reference point; it must not be identified automatically with an atom. Specify a basis by the finite set of relative positions \\(\{\vec\tau_1,\ldots,\vec\tau_{N_b}\}\\). Attaching that complete set to every lattice point gives the atomic positions

\\[
\vec r_{\vec n j}=\vec R_{\vec n}+\vec\tau_j,
\qquad j=1,2,\ldots,N_b.
\tag*{[2]}
\\]

Equation [2] is the precise meaning of "lattice plus basis equals crystal structure." Translating every atom by any lattice vector carries it to an equivalent atom:

\\[
\vec r_{\vec n j}+\vec R_{\vec m}
=\vec R_{\vec n+\vec m}+\vec\tau_j
=\vec r_{\vec n+\vec m,j}.
\tag*{[3]}
\\]

A primitive cell contains exactly one weighted lattice point. A conventional cell may be larger and display the symmetry more clearly. Boundary points must be shared: a corner of a three-dimensional cell contributes \\(1/8\\), a face point \\(1/2\\), an edge point \\(1/4\\), and an interior point \\(1\\). If every basis site is occupied once, the atom count is

\\[
N_{\mathrm{atom}}=N_LN_b.
\tag*{[4]}
\\]

This count distinguishes three ideas that are often confused: the number of lattice points in the chosen cell, the number of sites in the basis, and the resulting number of atoms. Changing from a primitive cell to a conventional cell changes the first and third counts, but it does not change the infinite crystal.

<PhysicsExamples collapsible
  items={[
    {
      title: "Build a two-species cubic structure",
      question: "A simple-cubic lattice has parameter \\(a=0.400\\,\\mathrm{nm}\\) and basis sites A at \\(\\vec\\tau_1=\\vec 0\\) and B at \\(\\vec\\tau_2=(a/2,a/2,a/2)\\). Find the two sites associated with the lattice point \\(\\vec R=(a,0,0)\\) and their separation.",
      answer: "Use equation \\([2]\\) once for each basis site. For A, \\[\\vec r_A=(a,0,0)+(0,0,0)=(a,0,0).\\] For B, \\[\\vec r_B=(a,0,0)+(a/2,a/2,a/2)=(3a/2,a/2,a/2).\\] Their displacement is \\(\\vec r_B-\\vec r_A=(a/2,a/2,a/2)\\), so Pythagoras gives \\[|\\vec r_B-\\vec r_A|=\\sqrt{(a/2)^2+(a/2)^2+(a/2)^2}=\\frac{\\sqrt3}{2}a=0.346\\,\\mathrm{nm}.\\] Translating both positions by any simple-cubic lattice vector reproduces the same local pair. **Final result:** the sites are \\((a,0,0)\\) and \\((3a/2,a/2,a/2)\\), separated by \\(0.346\\,\\mathrm{nm}\\).",
    },
    {
      title: "Separate lattice points from atoms",
      question: "A conventional cell contains four weighted lattice points and each lattice point carries a three-atom basis. Is the cell primitive, and how many atoms does it contain?",
      answer: "A primitive cell must contain exactly one weighted lattice point, so a cell with \\(N_L=4\\) is conventional rather than primitive. The basis has \\(N_b=3\\) sites. Equation \\([4]\\) therefore gives \\[N_{\\mathrm{atom}}=N_LN_b=4\\times3=12.\\] Counting only the four lattice points would ignore the basis; counting only three basis sites would ignore how many lattice points lie in the chosen cell. **Final result:** the cell is non-primitive and contains 12 atoms.",
    },
  ]}
/>
`;
