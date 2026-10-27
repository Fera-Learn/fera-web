export const content = String.raw`## Principle

When two operations are performed in sequence, changing their order may introduce a predictable correction.

A commutator measures whether operator order matters. A small set of algebraic identities reduces complicated commutators to fundamental ones, but differential operators must be allowed to act on everything to their right; inserting a test wavefunction prevents ordering mistakes.

## Notation

<Notation
  items={[
    { symbol: "\\hat A,\\hat B,\\hat C", meaning: "linear operators" },
    { symbol: "[\\hat A,\\hat B]", meaning: "commutator \\(\\hat A\\hat B-\\hat B\\hat A\\)" },
    { symbol: "x,\\hat p", meaning: "position and momentum operator", unit: "m, kg m s^{-1}" },
    { symbol: "\\hat H,V(x)", meaning: "Hamiltonian and potential-energy function", unit: "J, J" },
    { symbol: "m,\\hbar", meaning: "particle mass and reduced Planck constant", unit: "kg, J s" },
    { symbol: "f(x)", meaning: "differentiable test wavefunction", unit: "m^{-1/2}" },
    { symbol: "V'(x)", meaning: "spatial derivative dV/dx", unit: "J m^{-1}" },
  ]}
/>

## The Core Method

By definition,

\\[
[\hat A,\hat B]=\hat A\hat B-\hat B\hat A.
\tag*{[1]}
\\]

Immediate consequences are antisymmetry and self-commutation.

\\[
[\hat A,\hat B]=-[\hat B,\hat A],
\qquad
[\hat A,\hat A]=0.
\tag*{[2]}
\\]

Linearity follows by expanding every product.

\\[
[\hat A+\hat B,\hat C]
=(\hat A+\hat B)\hat C-\hat C(\hat A+\hat B)
=[\hat A,\hat C]+[\hat B,\hat C].
\tag*{[3]}
\\]

For a product in the first slot, add and subtract \\(\hat A\hat C\hat B\\).

\\[
[\hat A\hat B,\hat C]
=\hat A\hat B\hat C-\hat C\hat A\hat B
=\hat A(\hat B\hat C-\hat C\hat B)
+(\hat A\hat C-\hat C\hat A)\hat B.
\tag*{[4]}
\\]

Thus the two product rules are

\\[
[\hat A\hat B,\hat C]
=\hat A[\hat B,\hat C]+[\hat A,\hat C]\hat B,
\qquad
[\hat A,\hat B\hat C]
=[\hat A,\hat B]\hat C+\hat B[\hat A,\hat C].
\tag*{[5]}
\\]

To establish the fundamental position-momentum commutator, use \\(\hat p=-i\hbar\,d/dx\\) on a test function.

\\[
[x,\hat p]f
=x\left(-i\hbar\frac{df}{dx}\right)
+i\hbar\frac{d(xf)}{dx}.
\tag*{[6]}
\\]

Apply the derivative product rule and cancel equal terms.

\\[
[x,\hat p]f
=-i\hbar x f'
+i\hbar(f+xf')
=i\hbar f.
\tag*{[7]}
\\]

Because [7] holds for every function in the common domain,

\\[
[x,\hat p]=i\hbar.
\tag*{[8]}
\\]

The product rule now evaluates powers without differentiating explicitly. For example,

\\[
[\hat p^2,x]
=\hat p[\hat p,x]+[\hat p,x]\hat p
=\hat p(-i\hbar)+(-i\hbar)\hat p
=-2i\hbar\hat p.
\tag*{[9]}
\\]

For \\(\hat H=\hat p^2/(2m)+V(x)\\), every function of \\(x\\) commutes with \\(x\\). Therefore

\\[
[\hat H,x]
=\frac{1}{2m}[\hat p^2,x]+[V(x),x]
=-\frac{i\hbar}{m}\hat p.
\tag*{[10]}
\\]

The momentum commutator with the potential is safest on a test function.

\\[
[V,\hat p]f
=-i\hbar V f'
+i\hbar(Vf)'
=i\hbar V'f,
\qquad
[\hat H,\hat p]=i\hbar V'(x).
\tag*{[11]}
\\]

The order of the factors outside a commutator must be preserved in [5]. Operators cannot be rearranged as ordinary numbers unless their commutator has first been shown to vanish.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Commutator of squared position and momentum",
      question: "Use commutator algebra to calculate \\([x^2,\\hat p]\\), showing the operator order at every step.",
      answer: "Apply the first product rule in equation [5] with \\(\\hat A=\\hat B=x\\) and \\(\\hat C=\\hat p\\): \\[[x^2,\\hat p]=x[x,\\hat p]+[x,\\hat p]x.\\] Equation [8] gives \\([x,\\hat p]=i\\hbar\\), and this scalar commutes with \\(x\\): \\[[x^2,\\hat p]=xi\\hbar+i\\hbar x=2i\\hbar x.\\] Acting on a test function gives the same result, \\([x^2,\\hat p]f=2i\\hbar xf\\). **Final result:** \\([x^2,\\hat p]=2i\\hbar x\\).",
    },
    {
      title: "Hamiltonian with squared position",
      question: "For \\(\\hat H=\\hat p^2/(2m)+V(x)\\), find \\([\\hat H,x^2]\\) and express the result symmetrically in \\(x\\) and \\(\\hat p\\).",
      answer: "The potential commutes with \\(x^2\\), so \\([\\hat H,x^2]=[\\hat p^2,x^2]/(2m)\\). Apply equation [5] to the second slot: \\[[\\hat p^2,x^2]=[\\hat p^2,x]x+x[\\hat p^2,x].\\] Equation [9] gives \\([\\hat p^2,x]=-2i\\hbar\\hat p\\), hence \\[[\\hat H,x^2]=\\frac{-2i\\hbar\\hat p x-2i\\hbar x\\hat p}{2m}=-\\frac{i\\hbar}{m}(\\hat p x+x\\hat p).\\] **Final result:** \\([\\hat H,x^2]=-(i\\hbar/m)(\\hat p x+x\\hat p)\\); replacing both ordered products by \\(2x\\hat p\\) would be incorrect because \\(x\\) and \\(\\hat p\\) do not commute.",
    },
  ]}
/>
`;
