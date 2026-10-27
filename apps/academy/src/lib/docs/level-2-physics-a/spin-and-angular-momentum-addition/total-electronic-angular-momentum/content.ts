export const content = String.raw`## Principle

An atomic electron carries both orbital angular momentum and intrinsic spin, and spectroscopy responds to their combined total.

An electron in an atom carries orbital and intrinsic-spin angular momentum. Their vector sum defines total electronic angular momentum, whose quantum numbers provide the natural basis whenever an interaction couples the orbital and spin degrees of freedom.

## Notation

<Notation
  items={[
    { symbol: "\\hat{\\vec L},\\hat{\\vec S},\\hat{\\vec J}", meaning: "orbital, spin, and total electronic angular-momentum operators", unit: "J s" },
    { symbol: "l,s,j", meaning: "orbital, spin, and total electronic angular-momentum quantum numbers" },
    { symbol: "m_l,m_s,m_j", meaning: "orbital, spin, and total z-projection quantum numbers" },
    { symbol: "n", meaning: "principal quantum number used to label an atomic state" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "|n,l,s;j,m_j\\rangle", meaning: "coupled electronic state with definite listed quantum numbers" },
    { symbol: "\\hat{\\vec L}\\cdot\\hat{\\vec S},L\\cdot S", meaning: "spin-orbit scalar-product operator and one of its eigenvalues", unit: "J^{2} s^{2}, J^{2} s^{2}" },
    { symbol: "[\\hat A,\\hat B]", meaning: "commutator \\(\\hat A\\hat B-\\hat B\\hat A\\)" },
  ]}
/>

## The Core Method

Orbital and spin operators act on independent parts of the electronic state, so every orbital component commutes with every spin component. Define their vector sum as

\\[
\hat{\vec J}=\hat{\vec L}+\hat{\vec S},\qquad [\hat L_a,\hat S_b]=0\quad(a,b=x,y,z)\tag*{[1]}
\\]

The z-projections therefore add directly.

\\[
\hat J_z=\hat L_z+\hat S_z,\qquad m_j=m_l+m_s\tag*{[2]}
\\]

For one electron, \\(s=1/2\\). The angular-momentum addition rule gives

\\[
j=\left|l-\frac12\right|,\ l+\frac12\tag*{[3]}
\\]

If \\(l=0\\), both expressions in equation [3] give the same single value \\(j=1/2\\). If \\(l\\) is nonzero, there are two distinct values, \\(j=l-1/2\\) and \\(j=l+1/2\\). For either value,

\\[
\hat J^2|n,l,s;j,m_j\rangle=j(j+1)\hbar^2|n,l,s;j,m_j\rangle,\qquad m_j=-j,-j+1,\ldots,j\tag*{[4]}
\\]

Squaring equation [1] relates the coupled quantum number to the spin-orbit scalar product.

\\[
\hat J^2=(\hat{\vec L}+\hat{\vec S})^2=\hat L^2+\hat S^2+2\hat{\vec L}\cdot\hat{\vec S}\tag*{[5]}
\\]

Rearrange equation [5] and apply it to a coupled state. Since the state is an eigenstate of all three squared operators,

\\[
\hat{\vec L}\cdot\hat{\vec S}=\frac12(\hat J^2-\hat L^2-\hat S^2),\qquad L\cdot S=\frac{\hbar^2}{2}\left[j(j+1)-l(l+1)-s(s+1)\right]\tag*{[6]}
\\]

For \\(s=1/2\\), substitute each branch from equation [3] into equation [6].

\\[
L\cdot S=\begin{cases}
\dfrac{l}{2}\hbar^2,&j=l+\dfrac12,\\
-\dfrac{l+1}{2}\hbar^2,&j=l-\dfrac12
\end{cases}\tag*{[7]}
\\]

A rotational scalar interaction proportional to \\(\hat{\vec L}\cdot\hat{\vec S}\\) is diagonal in the coupled basis because

\\[
[\hat J^2,\hat{\vec L}\cdot\hat{\vec S}]=0,\qquad [\hat J_z,\hat{\vec L}\cdot\hat{\vec S}]=0\tag*{[8]}
\\]

The interaction can exchange angular momentum between orbital and spin parts, so \\(m_l\\) and \\(m_s\\) need not remain individually fixed. Their sum \\(m_j\\), and the total label \\(j\\), remain the appropriate quantum numbers for this interaction.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "The two d-electron multiplets",
      question: "For one electron with \\(l=2\\) and \\(s=1/2\\), find the allowed \\(j\\) values, each multiplet degeneracy, and the corresponding eigenvalue of \\(\\hat{\\vec L}\\cdot\\hat{\\vec S}\\).",
      answer: "Equation [3] gives \\[j=2-\\frac12=\\frac32,\\qquad j=2+\\frac12=\\frac52.\\] Their degeneracies are \\(2j+1=4\\) and \\(6\\). For the upper branch, equation [7] gives \\[L\\cdot S=\\frac{l}{2}\\hbar^2=\\frac22\\hbar^2=\\hbar^2.\\] For the lower branch, \\[L\\cdot S=-\\frac{l+1}{2}\\hbar^2=-\\frac32\\hbar^2.\\] **Final result:** \\(j=5/2\\) has six states and \\(L\\cdot S=+\\hbar^2\\); \\(j=3/2\\) has four states and \\(L\\cdot S=-3\\hbar^2/2\\). The total count \\(6+4=10\\) equals \\(2(2l+1)=10\\), checking completeness.",
    },
    {
      title: "An electron in an s orbital",
      question: "An electron occupies an orbital with \\(l=0\\). Determine its total electronic quantum number, allowed projections, and spin-orbit scalar-product eigenvalue.",
      answer: "Equation [3] gives only \\[j=\\left|0-\\frac12\\right|=\\frac12.\\] Equation [4] then gives \\(m_j=-1/2,+1/2\\). Substitute \\(l=0\\), \\(s=1/2\\), and \\(j=1/2\\) into equation [6]: \\[L\\cdot S=\\frac{\\hbar^2}{2}\\left[\\frac12\\left(\\frac32\\right)-0-\\frac12\\left(\\frac32\\right)\\right]=0.\\] **Final result:** an s-orbital electron has \\(j=1/2\\), projections \\(m_j=\\pm1/2\\), and zero \\(L\\cdot S\\) because its orbital angular momentum vanishes.",
    },
  ]}
/>
`;
