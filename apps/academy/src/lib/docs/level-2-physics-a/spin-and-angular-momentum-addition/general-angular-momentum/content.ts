export const content = String.raw`## Principle

Different quantum systems can share the same rules for rotational measurements even when no particle is literally orbiting.

Angular momentum in quantum mechanics is defined by an operator algebra, not by a particular picture of an object moving through space. Any three-component operator that obeys this algebra has quantised total magnitude and one simultaneously measurable component, with integer or half-integer quantum numbers.

## Notation

<Notation
  items={[
    { symbol: "\\hat{\\vec J},\\hat J_x,\\hat J_y,\\hat J_z", meaning: "angular-momentum operator and its Cartesian components", unit: "J s" },
    { symbol: "\\hat J^2", meaning: "squared total angular-momentum operator", unit: "J^{2} s^{2}" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "j,m_j", meaning: "total angular-momentum quantum number (nonnegative) and z-component quantum number" },
    { symbol: "m_{\\max},m_{\\min}", meaning: "highest and lowest projection quantum numbers in a fixed multiplet" },
    { symbol: "|j,m_j\\rangle", meaning: "normalised simultaneous eigenstate of \\(\\hat J^2\\) and \\(\\hat J_z\\)" },
    { symbol: "[\\hat A,\\hat B],i", meaning: "commutator \\(\\hat A\\hat B-\\hat B\\hat A\\) and imaginary unit" },
    { symbol: "N", meaning: "nonnegative integer number of unit steps from the lowest to highest projection" },
  ]}
/>

## The Core Method

The defining commutators are cyclic. Reversing either operator order changes the sign.

\\[
[\hat J_x,\hat J_y]=i\hbar\hat J_z,\qquad [\hat J_y,\hat J_z]=i\hbar\hat J_x,\qquad [\hat J_z,\hat J_x]=i\hbar\hat J_y\tag*{[1]}
\\]

The squared operator is the sum of the component squares. It commutes with every component, so \\(\hat J^2\\) and one chosen component, conventionally \\(\hat J_z\\), possess common eigenstates.

\\[
\hat J^2=\hat J_x^2+\hat J_y^2+\hat J_z^2,\qquad [\hat J^2,\hat J_k]=0\quad(k=x,y,z)\tag*{[2]}
\\]

Label a common eigenstate by \\(j\\) and \\(m_j\\). The eigenvalue convention is

\\[
\hat J^2|j,m_j\rangle=j(j+1)\hbar^2|j,m_j\rangle,\qquad \hat J_z|j,m_j\rangle=m_j\hbar|j,m_j\rangle\tag*{[3]}
\\]

The transverse component squares are nonnegative. Taking their expectation value in a normalised eigenstate gives a bound on the projection.

\\[
0\leq\langle\hat J_x^2+\hat J_y^2\rangle=\hbar^2\left[j(j+1)-m_j^2\right]\tag*{[4]}
\\]

The projection values form a ladder separated by one. Let its highest and lowest values be \\(m_{\max}\\) and \\(m_{\min}\\). At the endpoints, raising the top state and lowering the bottom state give zero. The operator products then give

\\[
\begin{aligned}
0&=(\hat J^2-\hat J_z^2-\hbar\hat J_z)|j,m_{\max}\rangle,\\
0&=(\hat J^2-\hat J_z^2+\hbar\hat J_z)|j,m_{\min}\rangle
\end{aligned}\tag*{[5]}
\\]

Substitute the eigenvalues from equation [3] into equation [5]. For the upper endpoint, move every term to one side and factor the resulting quadratic.

\\[
\begin{aligned}
j(j+1)&=m_{\max}(m_{\max}+1),\qquad j(j+1)=m_{\min}(m_{\min}-1),\\
0&=m_{\max}^2+m_{\max}-j^2-j\\
&=(m_{\max}-j)(m_{\max}+j+1),\\
m_{\max}&=j\quad\text{or}\quad m_{\max}=-j-1
\end{aligned}\tag*{[6]}
\\]

The second root is not physical. If \\(m_{\max}=-j-1\\), the bracket on the right of equation [4] becomes \\(j(j+1)-m_{\max}^2=j(j+1)-(j+1)^2=-(j+1)\\), which is negative because \\(j\\) is nonnegative. This contradicts the non-negativity in equation [4], so \\(m_{\max}=j\\). Equating the two endpoint relations in equation [6] and factorising now gives

\\[
(m_{\max}+m_{\min})(m_{\max}-m_{\min}+1)=0\tag*{[7]}
\\]

The second factor cannot vanish because it would put the minimum above the maximum. Therefore \\(m_{\min}=-m_{\max}=-j\\). Since unit steps connect the endpoints, \\(m_{\max}-m_{\min}=2j=N\\), where \\(N\\) is a nonnegative integer.

\\[
j=0,\frac12,1,\frac32,\ldots,\qquad m_j=-j,-j+1,\ldots,j-1,j\tag*{[8]}
\\]

Thus a fixed \\(j\\) multiplet contains \\(2j+1\\) states. Half-integer values follow from the angular-momentum algebra itself; restricting all angular momenta to integer values would discard valid representations.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "The j equals three-halves multiplet",
      question: "For a system with \\(j=3/2\\), find the total-angular-momentum eigenvalue, its magnitude, every possible z-component, and the number of states.",
      answer: "Use equation [3] for the squared magnitude. \\[j(j+1)\\hbar^2=\\frac32\\left(\\frac32+1\\right)\\hbar^2=\\frac{15}{4}\\hbar^2.\\] The positive magnitude associated with this eigenvalue is therefore \\[|\\vec J|=\\sqrt{j(j+1)}\\hbar=\\frac{\\sqrt{15}}{2}\\hbar.\\] Equation [8] lists projections in unit steps: \\[m_j=-\\frac32,-\\frac12,\\frac12,\\frac32,\\qquad J_z=m_j\\hbar.\\] There are \\(2j+1=4\\) states. **Final result:** \\(J^2=15\\hbar^2/4\\), \\(|\\vec J|=\\sqrt{15}\\hbar/2\\), and \\(J_z\\) can be \\(-3\\hbar/2,-\\hbar/2,\\hbar/2,3\\hbar/2\\). The largest projection is smaller than the magnitude, as equation [4] requires.",
    },
    {
      title: "Algebra rather than an orbit",
      question: "An intrinsic degree of freedom has operators obeying equation [1] and is measured to have \\(j=1/2\\). Must it be described by a particle orbiting in space, and what z-component outcomes are allowed?",
      answer: "The definition of angular momentum is the commutator algebra, so no spatial orbit is required. Apply equation [8] directly: \\[m_j=-\\frac12,\\frac12.\\] Equation [3] converts these quantum numbers into measured projections. **Final result:** the two outcomes are \\(J_z=-\\hbar/2\\) and \\(J_z=+\\hbar/2\\), and the algebra alone does not imply literal spatial rotation.",
    },
  ]}
/>
`;
