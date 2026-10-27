export const content = String.raw`## Principle

Two rotating parts of one system contribute to a combined total, but quantum mechanics allows only particular totals.

When two independent angular momenta belong to one system, their components add to form a total angular momentum. Projection quantum numbers add directly, but the total quantum number can take every value from the difference of the two magnitudes to their sum in unit steps.

## Notation

<Notation
  items={[
    { symbol: "\\hat{\\vec J}_1,\\hat{\\vec J}_2,\\hat{\\vec J}", meaning: "first, second, and total angular-momentum operators", unit: "J s" },
    { symbol: "j_1,j_2,j", meaning: "first, second, and coupled total-angular-momentum quantum numbers" },
    { symbol: "m_1,m_2,M", meaning: "first, second, and total z-projection quantum numbers" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "|j_1,m_1\\rangle|j_2,m_2\\rangle", meaning: "uncoupled product-basis state" },
    { symbol: "|j_1,j_2;j,M\\rangle", meaning: "coupled-basis state with definite total angular momentum" },
    { symbol: "l,s", meaning: "orbital and intrinsic-spin quantum numbers for an electron" },
  ]}
/>

## The Core Method

For independent subsystems, operators belonging to different subsystems commute. Define the total operator component by component.

\\[
\hat{\vec J}=\hat{\vec J}_1+\hat{\vec J}_2,\qquad [\hat J_{1a},\hat J_{2b}]=0\quad(a,b=x,y,z)\tag*{[1]}
\\]

In the uncoupled product basis, the z-component acts additively.

\\[
\begin{aligned}
\hat J_z|j_1,m_1\rangle|j_2,m_2\rangle
&=(\hat J_{1z}+\hat J_{2z})|j_1,m_1\rangle|j_2,m_2\rangle\\
&=(m_1+m_2)\hbar|j_1,m_1\rangle|j_2,m_2\rangle
\end{aligned}\tag*{[2]}
\\]

Thus \\(M=m_1+m_2\\). The greatest possible projection is \\(M=j_1+j_2\\), which must be the top of a multiplet with \\(j=j_1+j_2\\). Removing that multiplet leaves a new highest projection one unit lower. Repeating this argument stops at the magnitude difference.

\\[
j=|j_1-j_2|,\ |j_1-j_2|+1,\ldots,j_1+j_2\tag*{[3]}
\\]

<PhysicsDiagram slug="angular-momentum-addition-cones" />

In the vector model, a cone records a fixed magnitude and fixed \\(z\\)-projection while leaving the azimuthal direction undetermined. The right panel shows one allowed head-to-tail construction of \\(\vec J=\vec L+\vec S\\); changing the relative orientation produces the total range in equation [3]. The transverse arrow directions are illustrative, not simultaneous exact values of incompatible \\(x\\)- and \\(y\\)-components.

For each allowed \\(j\\), the coupled states obey

\\[
\hat J^2|j_1,j_2;j,M\rangle=j(j+1)\hbar^2|j_1,j_2;j,M\rangle,\qquad \hat J_z|j_1,j_2;j,M\rangle=M\hbar|j_1,j_2;j,M\rangle\tag*{[4]}
\\]

The projection range inside each coupled multiplet is

\\[
M=-j,-j+1,\ldots,j-1,j\tag*{[5]}
\\]

State counting checks that no states are lost. The uncoupled space has dimension \\((2j_1+1)(2j_2+1)\\), while a coupled multiplet has dimension \\(2j+1\\).

\\[
(2j_1+1)(2j_2+1)=\sum_{j=|j_1-j_2|}^{j_1+j_2}(2j+1)\tag*{[6]}
\\]

For orbital angular momentum \\(l=1\\) and electron spin \\(s=1/2\\), equation [3] gives

\\[
\left|1-\frac12\right|=\frac12,\qquad 1+\frac12=\frac32,\qquad j=\frac12,\frac32\tag*{[7]}
\\]

The \\(j=3/2\\) multiplet has four states and the \\(j=1/2\\) multiplet has two, matching the six uncoupled states.

\\[
(2l+1)(2s+1)=3\cdot2=6=(2\cdot\tfrac32+1)+(2\cdot\tfrac12+1)=4+2\tag*{[8]}
\\]

Adding only the maximum values to set \\(j=j_1+j_2\\) would miss the lower multiplets. Direct addition applies to projection quantum numbers; total quantum numbers follow the full range in equation [3].

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Combining l equals one with electron spin",
      question: "List the uncoupled total projections for \\(l=1\\) and \\(s=1/2\\), identify the coupled multiplets, and find their relative populations for an ensemble proportional to the identity on the six-state product space.",
      answer: "The orbital values are \\(m_l=1,0,-1\\), and the spin values are \\(m_s=+1/2,-1/2\\). Adding projections gives \\[M=\\frac32,\\frac12,\\frac12,-\\frac12,-\\frac12,-\\frac32.\\] Equation [7] gives coupled multiplets \\(j=3/2\\) and \\(j=1/2\\). Their dimensions are \\(2j+1=4\\) and \\(2\\), respectively. For an ensemble proportional to the identity, every state in the six-dimensional space has equal weight, so \\[P(j=\\tfrac32)=\\frac46=\\frac23,\\qquad P(j=\\tfrac12)=\\frac26=\\frac13.\\] **Final result:** the six product states reorganise into a four-state \\(j=3/2\\) multiplet and a two-state \\(j=1/2\\) multiplet, with probabilities \\(2/3\\) and \\(1/3\\) for the stated ensemble.",
    },
    {
      title: "Adding two spin-half angular momenta",
      question: "Two independent particles each have \\(j_1=j_2=1/2\\). What total quantum numbers are allowed, and how many states belong to each?",
      answer: "Apply equation [3]: \\[j=|\\tfrac12-\\tfrac12|,\\ldots,\\tfrac12+\\tfrac12=0,1.\\] Equation [5] gives one projection \\(M=0\\) for \\(j=0\\), and three projections \\(M=-1,0,1\\) for \\(j=1\\). The dimension check is \\[(2j_1+1)(2j_2+1)=2\\cdot2=4=1+3.\\] **Final result:** the coupled system contains a one-state \\(j=0\\) multiplet and a three-state \\(j=1\\) multiplet.",
    },
  ]}
/>
`;
