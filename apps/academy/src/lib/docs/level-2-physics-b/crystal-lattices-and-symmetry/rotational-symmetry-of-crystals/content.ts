export const content = String.raw`## Principle

A crystal has rotational symmetry when a rotation about an axis maps every lattice point onto an equivalent lattice point. Periodicity severely restricts the possible rotation orders: an ordinary three-dimensional Bravais lattice can have only one-fold, two-fold, three-fold, four-fold, or six-fold rotational symmetry. Five-fold and all higher orders other than six are incompatible with lattice translations.

## Notation

<Notation
  items={[
    { symbol: "n", meaning: "order of a proper rotation" },
    { symbol: "\\theta", meaning: "representative rotation angle, chosen smallest and positive for order two or greater", unit: "rad" },
    { symbol: "\\vec a_j", meaning: "primitive translation vector with index j", unit: "m" },
    { symbol: "Q", meaning: "matrix representing the spatial rotation" },
    { symbol: "M", meaning: "integer matrix representing the same rotation in a primitive lattice basis" },
    { symbol: "m_{ij}", meaning: "integer entries of M" },
    { symbol: "\\operatorname{tr}M", meaning: "trace, the sum of the diagonal entries of M" },
    { symbol: "i", meaning: "imaginary unit satisfying \\(i^2=-1\\)" },
  ]}
/>

## The Core Method

An order-\\(n\\) proper rotation returns the lattice to its starting orientation after \\(n\\) applications. For \\(n\geq2\\), its smallest positive angle is \\(2\pi/n\\); the one-fold operation is the identity:

\\[
\theta=\begin{cases}
0&n=1,\\
2\pi/n&n\geq2.
\end{cases}
\tag*{[1]}
\\]

If the rotation preserves the lattice, every rotated primitive vector must be another lattice translation. By the definition of primitive translations, every such translation is an integer combination of the primitive vectors, so

\\[
Q\vec a_j=\sum_{i=1}^{3}m_{ij}\vec a_i,
\qquad m_{ij}\in\mathbb Z.
\tag*{[2]}
\\]

The columns of \\(M=(m_{ij})\\) are the integer coordinates in [2]. The inverse rotation also preserves the lattice, so \\(M\\) has an integer inverse and \\(|\det M|=1\\). A proper rotation preserves orientation, giving

\\[
M\text{ has integer entries},
\qquad \det M=1,
\qquad \operatorname{tr}M\in\mathbb Z.
\tag*{[3]}
\\]

The matrix \\(M\\) represents the same linear map as \\(Q\\) in a different basis, so changing basis does not alter its eigenvalues or trace. Any proper three-dimensional rotation has one eigenvalue \\(1\\) along its axis and the pair \\(e^{i\theta}\\), \\(e^{-i\theta}\\) in the perpendicular plane. The trace is the sum of these eigenvalues:

\\[
\operatorname{tr}M
=1+e^{i\theta}+e^{-i\theta}
=1+2\cos\theta.
\tag*{[4]}
\\]

The left side of [4] is an integer by [3]. Since \\(-1\leq\cos\theta\leq1\\), the only possible values are

\\[
2\cos\theta=\operatorname{tr}M-1\in\{-2,-1,0,1,2\}.
\tag*{[5]}
\\]

Solving [5] in the interval \\(0\leq\theta\leq\pi\\), with rotations through angles larger than \\(\pi\\) represented by the inverse rotation, gives

\\[
\begin{array}{c|ccccc}
n&1&2&3&4&6\\
\theta&0&\pi&2\pi/3&\pi/2&\pi/3
\end{array}
\tag*{[6]}
\\]

This crystallographic restriction applies to a periodic lattice. It does not say that an isolated molecule or a non-periodic pattern cannot have five-fold symmetry.

For a cube, count axes rather than directed lines. There are three four-fold axes through opposite face centres, four three-fold axes along opposite body diagonals, and six two-fold axes through opposite edge midpoints. A rotation need not leave each point fixed; it must map the complete lattice onto itself.

<PhysicsExamples collapsible
  items={[
    {
      title: "Testing a proposed five-fold crystal axis",
      question: "Use the trace condition to test whether a periodic Bravais lattice can have a proper five-fold rotation axis.",
      answer: "For order \\(n=5\\), equation \\([1]\\) gives \\(\\theta=2\\pi/5\\). Substitute this angle into equation \\([4]\\): \\[\\operatorname{tr}M=1+2\\cos\\left(\\frac{2\\pi}{5}\\right)=1+\\frac{\\sqrt5-1}{2}=\\frac{1+\\sqrt5}{2}.\\] This number is not an integer, contradicting the integer-trace requirement in equation \\([3]\\). **Final result:** a periodic Bravais lattice cannot possess a proper five-fold rotation axis. The failure is caused by translational periodicity, not by an inability to rotate an isolated object through \\(72^\\circ\\).",
    },
    {
      title: "Rotational axes of a cube",
      question: "A cube is rotated about a line joining one corner to the opposite corner. Determine the rotation order and the number of distinct axes of this type.",
      answer: "The chosen line is a body diagonal. Looking along it, the three faces meeting at one end cycle into one another after a rotation of \\(2\\pi/3\\), so equation \\([1]\\) gives \\(n=3\\). A cube has eight corners, and opposite corners define the same undirected axis. Pairing the corners therefore gives \\(8/2=4\\) body-diagonal axes. **Final result:** each body diagonal is a three-fold axis, and a cube has four distinct axes of this type.",
    },
  ]}
/>
`;
