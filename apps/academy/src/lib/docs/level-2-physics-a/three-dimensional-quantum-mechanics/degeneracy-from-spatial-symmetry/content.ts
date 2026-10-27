export const content = String.raw`## Principle

In a cubic box, swapping the labels of two identical axes cannot change the measured energy.

Degeneracy occurs when distinct stationary states have the same energy. In a cubic well, no axis is physically preferred, so permuting the three directional quantum numbers cannot change the energy. Reducing that spatial symmetry can split the formerly equal levels.

## Notation

<Notation
  items={[
    { symbol: "n_x,n_y,n_z", meaning: "positive-integer Cartesian quantum numbers", unit: "1" },
    { symbol: "x,y,z", meaning: "Cartesian axes", unit: "m, m, m" },
    { symbol: "L_x,L_y,L_z", meaning: "rectangular-well side lengths", unit: "m, m, m" },
    { symbol: "L", meaning: "common side length along symmetry-equivalent axes", unit: "m" },
    { symbol: "m", meaning: "particle mass", unit: "kg" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "E_0", meaning: "cubic-well energy scale \\pi^2\\hbar^2/(2mL^2)", unit: "J" },
    { symbol: "S", meaning: "sum n_x^2+n_y^2+n_z^2", unit: "1" },
    { symbol: "g,g_{\\mathrm{sym}}", meaning: "total degeneracy and degeneracy guaranteed by axis-permutation symmetry", unit: "1, 1" },
    { symbol: "\\psi_{n_xn_yn_z}", meaning: "stationary state identified by its Cartesian quantum numbers", unit: "m^{-3/2}" },
    { symbol: "V", meaning: "confining potential energy", unit: "J" },
    { symbol: "E", meaning: "stationary-state energy", unit: "J" },
  ]}
/>

## The Core Method

For a cubic infinite well, the energy depends only on the sum of three squared quantum numbers:

\\[
E_{n_xn_yn_z}=E_0S,
\qquad
E_0=\frac{\pi^2\hbar^2}{2mL^2},
\qquad
S=n_x^2+n_y^2+n_z^2.
\tag*{[1]}
\\]

Interchanging the axes leaves both the cubic boundary and [1] unchanged. For example,

\\[
E_{211}=E_{121}=E_{112}=6E_0,
\qquad
\psi_{211},\ \psi_{121},\ \psi_{112}\ \text{are distinct states}.
\tag*{[2]}
\\]

The number of distinct permutations depends on repeated entries. Counting those permutations gives the symmetry-guaranteed degeneracy

\\[
g_{\mathrm{sym}}=
\begin{cases}
1,&n_x=n_y=n_z,\\
3,&\text{exactly two quantum numbers are equal},\\
6,&n_x,n_y,n_z\text{ are all different}.
\end{cases}
\tag*{[3]}
\\]

Thus the ground state \\((1,1,1)\\) is non-degenerate, while the next energy level contains the three states in [2]. At higher energies, two triples that are not permutations can also happen to have the same value of \\(S\\); such an equality is accidental arithmetic degeneracy rather than a degeneracy required by axis-permutation symmetry.

For a rectangular well, the more general energy is

\\[
E_{n_xn_yn_z}
=\frac{\pi^2\hbar^2}{2m}
\left(\frac{n_x^2}{L_x^2}+\frac{n_y^2}{L_y^2}+\frac{n_z^2}{L_z^2}\right).
\tag*{[4]}
\\]

If \\(L_x\\), \\(L_y\\), and \\(L_z\\) are all different, a permutation usually changes which quantum number divides which side length, so the corresponding energies need not remain equal. If only \\(L_x=L_y\\), exchanging \\(x\\) and \\(y\\) remains a symmetry, and only degeneracies protected by that exchange must survive. The useful method is therefore:

1. Identify transformations that leave \\(V\\) and its boundaries unchanged.
2. Generate distinct states by applying those symmetry transformations.
3. Count the states and verify equality using the energy formula.
4. Recalculate after any deformation; do not assume the old degeneracy survives.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Counting the permutations of a cubic-box state",
      question: "For a cubic infinite well, list the states symmetry-related to \\((n_x,n_y,n_z)=(1,2,3)\\), find their common energy, and determine the symmetry degeneracy.",
      answer: "All three quantum numbers differ, so every permutation is distinct. The six triples are \\((1,2,3)\\), \\((1,3,2)\\), \\((2,1,3)\\), \\((2,3,1)\\), \\((3,1,2)\\), and \\((3,2,1)\\). For every triple, equation [1] gives \\[S=1^2+2^2+3^2=1+4+9=14,\\qquad E=14E_0.\\] The corresponding product wavefunctions differ because their nodes occur along different axes, so they are six distinct eigenstates. **Final result:** the level \\(E=14E_0\\) has symmetry degeneracy \\(g=6\\).",
    },
    {
      title: "Splitting a threefold level",
      question: "A cubic box is stretched so that \\(L_x=L_y=L\\) but \\(L_z=2L\\). What happens to the cubic states \\((2,1,1)\\), \\((1,2,1)\\), and \\((1,1,2)\\)?",
      answer: "Use [4] and the scale \\(E_0=\\pi^2\\hbar^2/(2mL^2)\\). For the first two states, exchanging x and y is still a symmetry: \\[E_{211}=E_{121}=E_0\\left(4+1+\\frac{1}{4}\\right)=\\frac{21}{4}E_0.\\] For excitation along the longer z-direction, \\[E_{112}=E_0\\left(1+1+\\frac{4}{4}\\right)=3E_0.\\] **Final result:** the original threefold level splits into a twofold-degenerate pair at \\(21E_0/4\\) and a non-degenerate state at \\(3E_0\\). Stretching the z-axis breaks permutations involving z but preserves x-y exchange symmetry.",
    },
  ]}
/>
`;
