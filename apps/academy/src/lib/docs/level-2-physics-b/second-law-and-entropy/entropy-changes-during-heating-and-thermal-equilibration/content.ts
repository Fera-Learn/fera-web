export const content = String.raw`## Principle

Entropy changes during heating can be calculated along a reversible comparison path. When two bodies equilibrate across a finite temperature difference, one body's entropy may decrease, but the entropy of the isolated composite system increases. The final temperature follows from energy conservation before the entropy changes are evaluated.

## Notation

<Notation
  items={[
    { symbol: "C_{\\mathrm{tot}},C_1,C_2", meaning: "constant-volume total heat capacities of a body and of bodies 1 and 2", unit: "J K^{-1}, J K^{-1}, J K^{-1}" },
    { symbol: "T_i,T_f", meaning: "initial and final absolute temperatures of one heated body", unit: "K, K" },
    { symbol: "T_1,T_2,T_{\\mathrm{eq}}", meaning: "initial body temperatures and their final equilibrium temperature", unit: "K, K, K" },
    { symbol: "T_R", meaning: "constant temperature of a large thermal reservoir", unit: "K" },
    { symbol: "Q", meaning: "heat transferred into the finite body", unit: "J" },
    { symbol: "\\delta Q_{\\mathrm{rev}}", meaning: "infinitesimal heat transferred into the body along a reversible comparison path", unit: "J" },
    { symbol: "\\Delta S,\\Delta S_1,\\Delta S_2", meaning: "entropy changes of the body and of bodies 1 and 2", unit: "J K^{-1}, J K^{-1}, J K^{-1}" },
    { symbol: "\\Delta S_{\\mathrm{res}},\\Delta S_{\\mathrm{univ}},\\Delta S_{\\mathrm{isolated}}", meaning: "entropy changes of the reservoir, system plus surroundings, and an isolated composite", unit: "J K^{-1}, J K^{-1}, J K^{-1}" },
  ]}
/>

## The Core Method

The system and surroundings can have entropy changes of opposite sign. Their sum is the decisive quantity: it is zero only in the reversible limit and positive for spontaneous equilibration.

<PhysicsDiagram slug="entropy-thermal-equilibration" />

The following results assume that the bodies exchange energy only by heat, undergo no phase change, and are rigid or have negligible volume change, so mechanical work is negligible. The applicable quantities are constant-volume total heat capacities. Each quoted heat capacity must remain constant over the relevant temperature interval; otherwise it must stay inside the temperature integral.

For a body satisfying these constraints, a reversible comparison path has \\(\delta Q_{\mathrm{rev}}=C_{\mathrm{tot}}\,dT\\). Hence

\\[
\Delta S
=\int_{T_i}^{T_f}\frac{C_{\mathrm{tot}}\,dT}{T}
=C_{\mathrm{tot}}\ln\!\left(\frac{T_f}{T_i}\right).
\tag*{[1]}
\\]

If a large reservoir at fixed \\(T_R\\) exchanges only heat with the body until the body reaches \\(T_R\\), the reservoir loses \\(Q=C_{\mathrm{tot}}(T_R-T_i)\\):

\\[
\Delta S_{\mathrm{res}}
=-\frac{Q}{T_R}
=-\frac{C_{\mathrm{tot}}(T_R-T_i)}{T_R}.
\tag*{[2]}
\\]

The entropy change of system plus reservoir is therefore

\\[
\Delta S_{\mathrm{univ}}
=C_{\mathrm{tot}}\left[
\ln\!\left(\frac{T_R}{T_i}\right)
+\frac{T_i}{T_R}-1
\right]\geq0.
\tag*{[3]}
\\]

The final term in equation \\([3]\\) is \\(-1\\), not \\(+1\\). Equality occurs only when \\(T_i=T_R\\); a finite initial temperature difference makes equilibration irreversible.

For two finite bodies enclosed by an adiabatic outer boundary and satisfying the same thermal-only constraints, energy conservation gives

\\[
C_1(T_{\mathrm{eq}}-T_1)+C_2(T_{\mathrm{eq}}-T_2)=0,
\tag*{[4]}
\\]

so

\\[
T_{\mathrm{eq}}=\frac{C_1T_1+C_2T_2}{C_1+C_2}.
\tag*{[5]}
\\]

The isolated composite entropy change is

\\[
\Delta S_{\mathrm{isolated}}
=C_1\ln\!\left(\frac{T_{\mathrm{eq}}}{T_1}\right)
+C_2\ln\!\left(\frac{T_{\mathrm{eq}}}{T_2}\right)
\geq0.
\tag*{[6]}
\\]

<PhysicsExamples collapsible
  items={[
    {
      title: "Heat a body using a large reservoir",
      question: "A body with \\(C_{\\mathrm{tot}}=200\\,\\mathrm{J\\,K^{-1}}\\) starts at \\(300\\,\\mathrm{K}\\) and equilibrates with a \\(400\\,\\mathrm{K}\\) reservoir. Find the body, reservoir, and universe entropy changes.",
      answer: "Equation \\([1]\\) gives \\[\\Delta S=200\\ln(400/300)=57.54\\,\\mathrm{J\\,K^{-1}}.\\] The heat received is \\(Q=200(400-300)=2.00\\times10^4\\,\\mathrm{J}\\). Equation \\([2]\\) gives \\[\\Delta S_{\\mathrm{res}}=-\\frac{2.00\\times10^4}{400}=-50.00\\,\\mathrm{J\\,K^{-1}}.\\] Adding the two, consistently with equation \\([3]\\), gives \\(\\Delta S_{\\mathrm{univ}}=7.54\\,\\mathrm{J\\,K^{-1}}\\gt 0\\). **Final result:** \\(\\Delta S=57.54\\,\\mathrm{J\\,K^{-1}}\\), \\(\\Delta S_{\\mathrm{res}}=-50.00\\,\\mathrm{J\\,K^{-1}}\\), and \\(\\Delta S_{\\mathrm{univ}}=7.54\\,\\mathrm{J\\,K^{-1}}\\).",
    },
    {
      title: "Two identical bodies reach equilibrium",
      question: "Two bodies, each with constant heat capacity \\(100\\,\\mathrm{J\\,K^{-1}}\\), begin at \\(300\\,\\mathrm{K}\\) and \\(500\\,\\mathrm{K}\\) inside an adiabatic enclosure. Find the equilibrium temperature and total entropy change.",
      answer: "Equation \\([5]\\) gives \\[T_{\\mathrm{eq}}=\\frac{(100)(300)+(100)(500)}{200}=400\\,\\mathrm{K}.\\] Equation \\([6]\\) then gives \\[\\Delta S_{\\mathrm{isolated}}=100\\ln(400/300)+100\\ln(400/500)=6.45\\,\\mathrm{J\\,K^{-1}}.\\] Energy lost by the hot body equals energy gained by the cold body, while the positive entropy change records irreversibility. **Final result:** \\(T_{\\mathrm{eq}}=400\\,\\mathrm{K}\\) and \\(\\Delta S_{\\mathrm{isolated}}=6.45\\,\\mathrm{J\\,K^{-1}}\\).",
    },
  ]}
/>
`;
