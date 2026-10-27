export const content = String.raw`## Principle

A temperature-entropy diagram plots absolute temperature vertically and entropy horizontally. For an internally reversible process, the area under the path represents heat transferred into the system. This area interpretation does not apply directly to an irreversible path because an irreversible process also generates entropy internally.

## Notation

<Notation
  items={[
    { symbol: "T,S", meaning: "absolute temperature and system entropy", unit: "K, J K^{-1}" },
    { symbol: "T_H,T_C", meaning: "hot and cold isothermal temperatures, with T_H\\gt T_C", unit: "K, K" },
    { symbol: "S_1,S_2", meaning: "entropy coordinates bounding a process", unit: "J K^{-1}, J K^{-1}" },
    { symbol: "\\delta Q_{\\mathrm{rev}},Q_{\\mathrm{rev}}", meaning: "infinitesimal and finite reversible heat transferred into the system", unit: "J, J" },
    { symbol: "Q_H,Q_C", meaning: "positive heat magnitudes absorbed and rejected on reversible isotherms", unit: "J, J" },
    { symbol: "W_{\\mathrm{out}}", meaning: "net work delivered by a reversible cycle", unit: "J" },
    { symbol: "C_{\\mathrm{tot}}", meaning: "constant total heat capacity on a heating path", unit: "J K^{-1}" },
  ]}
/>

## The Core Method

On a temperature-entropy plot, a reversible isotherm is horizontal and a reversible adiabat is vertical. The area under a reversible path represents heat transfer.

<PhysicsDiagram slug="temperature-entropy-processes" />

For an internally reversible process,

\\[
\delta Q_{\mathrm{rev}}=T\,dS.
\tag*{[1]}
\\]

Integrating between entropy coordinates \\(S_1\\) and \\(S_2\\) gives

\\[
Q_{\mathrm{rev}}=\int_{S_1}^{S_2}T\,dS.
\tag*{[2]}
\\]

Equation \\([2]\\) is the signed area under the reversible path: motion to the right has \\(dS>0\\) and positive heat input, while motion to the left has \\(dS<0\\) and heat rejection. A reversible isotherm is horizontal because \\(T\\) is constant. A reversible adiabat has \\(\delta Q_{\mathrm{rev}}=0\\), so equation \\([1]\\) gives \\(dS=0\\); it is vertical and isentropic.

For a reversible Carnot cycle, the two isotherms span the same entropy width \\(S_2-S_1\\):

\\[
Q_H=T_H(S_2-S_1),
\qquad
Q_C=T_C(S_2-S_1).
\tag*{[3]}
\\]

The first law over a complete cycle gives net work equal to net heat input:

\\[
W_{\mathrm{out}}=Q_H-Q_C
=(T_H-T_C)(S_2-S_1).
\tag*{[4]}
\\]

Thus the rectangular area enclosed by a reversible Carnot cycle is its net work output. For constant-capacity reversible heating, combine \\(\delta Q_{\mathrm{rev}}=C_{\mathrm{tot}}\,dT\\) with equation \\([1]\\):

\\[
\frac{dT}{dS}=\frac{T}{C_{\mathrm{tot}}},
\tag*{[5]}
\\]

so the path rises and curves as temperature increases. For an irreversible process, use an entropy balance rather than interpreting the area under the actual path as heat.

<PhysicsExamples collapsible
  items={[
    {
      title: "Area of a Carnot rectangle",
      question: "A reversible Carnot cycle operates between \\(T_H=500\\,\\mathrm{K}\\) and \\(T_C=300\\,\\mathrm{K}\\), with entropy width \\(S_2-S_1=2.0\\,\\mathrm{J\\,K^{-1}}\\). Find \\(Q_H\\), \\(Q_C\\), and net work.",
      answer: "Equation \\([3]\\) gives \\[Q_H=(500\\,\\mathrm{K})(2.0\\,\\mathrm{J\\,K^{-1}})=1000\\,\\mathrm{J}\\] and \\[Q_C=(300\\,\\mathrm{K})(2.0\\,\\mathrm{J\\,K^{-1}})=600\\,\\mathrm{J}.\\] Equation \\([4]\\) then gives \\(W_{\\mathrm{out}}=1000-600=400\\,\\mathrm{J}\\), equal to the rectangle's area \\((500-300)(2.0)\\). **Final result:** \\(Q_H=1000\\,\\mathrm{J}\\), \\(Q_C=600\\,\\mathrm{J}\\), and \\(W_{\\mathrm{out}}=400\\,\\mathrm{J}\\).",
    },
    {
      title: "Interpret standard paths",
      question: "On a temperature-entropy diagram, a reversible path moves vertically upward from \\(300\\,\\mathrm{K}\\) to \\(450\\,\\mathrm{K}\\), then horizontally right by \\(1.5\\,\\mathrm{J\\,K^{-1}}\\) at \\(450\\,\\mathrm{K}\\). Find the heat transfer on each segment.",
      answer: "The vertical segment has \\(dS=0\\), so equation \\([2]\\) gives zero heat transfer even though the temperature changes. The horizontal segment is isothermal, so \\[Q_{\\mathrm{rev}}=T(S_2-S_1)=(450\\,\\mathrm{K})(1.5\\,\\mathrm{J\\,K^{-1}})=675\\,\\mathrm{J}.\\] Rightward motion makes the heat positive. **Final result:** the vertical isentropic segment transfers \\(0\\,\\mathrm{J}\\), and the rightward isotherm absorbs \\(675\\,\\mathrm{J}\\).",
    },
  ]}
/>
`;
