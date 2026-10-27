export const content = String.raw`## Principle

Knowing the rotational component about one axis exactly limits what can be sharp about perpendicular axes.

Different components of orbital angular momentum do not commute. Their cyclic commutators close on the remaining component, which prevents two Cartesian components from having simultaneously sharp values.

## Notation

<Notation
  items={[
    { symbol: "\\hat L_x,\\hat L_y,\\hat L_z", meaning: "Cartesian orbital angular-momentum operators", unit: "J s" },
    { symbol: "\\hat x_i,\\hat p_j", meaning: "position and momentum operators along Cartesian axes indexed by i and j", unit: "m, kg m s^{-1}" },
    { symbol: "\\delta_{ij}", meaning: "Kronecker delta", unit: "1" },
    { symbol: "\\epsilon_{ijk}", meaning: "right-handed Levi-Civita symbol", unit: "1" },
    { symbol: "[\\hat A,\\hat B]", meaning: "commutator of two operators", unit: "varies" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "\\sigma_{L_i}", meaning: "standard deviation of a measured angular-momentum component", unit: "J s" },
    { symbol: "\\langle L_i\\rangle", meaning: "expectation value of an angular-momentum component", unit: "J s" },
    { symbol: "\\psi", meaning: "test wavefunction", unit: "m^{-3/2}" },
    { symbol: "i", meaning: "imaginary unit or Cartesian index according to context", unit: "1" },
  ]}
/>

## The Core Method

The commutator is defined by its order. Reversing the operators changes its sign.

\\[
[\hat A,\hat B]=\hat A\hat B-\hat B\hat A,
\qquad
[\hat B,\hat A]=-[\hat A,\hat B].
\tag*{[1]}
\\]

The Cartesian canonical relations are

\\[
[\hat x_i,\hat x_j]=0,
\qquad
[\hat p_i,\hat p_j]=0,
\qquad
[\hat x_i,\hat p_j]=i\hbar\delta_{ij}.
\tag*{[2]}
\\]

To verify the angular-momentum order, use \\(\hat L_x=y\hat p_z-z\hat p_y\\) and \\(\hat L_y=z\hat p_x-x\hat p_z\\). Terms involving only different-axis canonical pairs vanish, leaving

\\[
[\hat L_x,\hat L_y]
=[y\hat p_z,z\hat p_x]+[z\hat p_y,x\hat p_z].
\tag*{[3]}
\\]

Apply \\([\hat A\hat B,\hat C]=\hat A[\hat B,\hat C]+[\hat A,\hat C]\hat B\\) and equation [2].

\\[
[y\hat p_z,z\hat p_x]=y[\hat p_z,z]\hat p_x=-i\hbar y\hat p_x,
\qquad
[z\hat p_y,x\hat p_z]=x\hat p_y[z,\hat p_z]=i\hbar x\hat p_y.
\tag*{[4]}
\\]

Adding [4] reproduces the correctly signed third component.

\\[
[\hat L_x,\hat L_y]
=i\hbar(x\hat p_y-y\hat p_x)
=i\hbar\hat L_z.
\tag*{[5]}
\\]

Cyclic permutation gives the complete algebra. The compact Levi-Civita expression uses a right-handed \\((x,y,z)\\) coordinate system.

\\[
[\hat L_x,\hat L_y]=i\hbar\hat L_z,
\qquad
[\hat L_y,\hat L_z]=i\hbar\hat L_x,
\qquad
[\hat L_z,\hat L_x]=i\hbar\hat L_y,
\qquad
[\hat L_i,\hat L_j]=i\hbar\epsilon_{ijk}\hat L_k.
\tag*{[6]}
\\]

Anticyclic order has the opposite sign; for example, \\([\hat L_y,\hat L_x]=-i\hbar\hat L_z\\). The Robertson relation applied to [6] gives

\\[
\sigma_{L_x}\sigma_{L_y}
\geq\frac{1}{2}\left|\left\langle[\hat L_x,\hat L_y]\right\rangle\right|
=\frac{\hbar}{2}|\langle L_z\rangle|.
\tag*{[7]}
\\]

Thus a state with sharp \\(L_z\\) cannot in general have both \\(L_x\\) and \\(L_y\\) sharp. A zero lower bound when \\(\langle L_z\rangle=0\\) does not by itself prove that both uncertainties vanish.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Check a cyclic commutator",
      question: "Derive \\([\\hat L_z,\\hat L_x]\\) from the Levi-Civita rule and state the reversed commutator.",
      answer: "For the cyclic ordering \\(z,x,y\\), \\(\\epsilon_{zxy}=+1\\). Equation [6] therefore gives \\([\\hat L_z,\\hat L_x]=i\\hbar\\hat L_y\\). Reversing the order uses equation [1]: \\[ [\\hat L_x,\\hat L_z]=-[\\hat L_z,\\hat L_x]=-i\\hbar\\hat L_y. \\] **Final result:** the cyclic commutator is \\(+i\\hbar\\hat L_y\\), while the reversed one is \\(-i\\hbar\\hat L_y\\).",
    },
    {
      title: "Apply the angular uncertainty bound",
      question: "A normalized state has \\(\\langle L_z\\rangle=2\\hbar\\). What lower bound applies to \\(\\sigma_{L_x}\\sigma_{L_y}\\)?",
      answer: "Insert the expectation value into equation [7]: \\[\\sigma_{L_x}\\sigma_{L_y}\\geq\\frac{\\hbar}{2}|2\\hbar|=\\hbar^2.\\] Each uncertainty has units \\(\\mathrm{J\\,s}\\), so the product has units \\(\\mathrm{J^2\\,s^2}\\). **Final result:** \\(\\sigma_{L_x}\\sigma_{L_y}\\geq\\hbar^2\\).",
    },
  ]}
/>
`;
