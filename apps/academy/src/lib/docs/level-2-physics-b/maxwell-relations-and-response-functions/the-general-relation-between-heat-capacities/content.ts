export const content = String.raw`## Principle

The difference between constant-pressure and constant-volume molar heat capacities is set by thermal expansion and compressibility. Heating at constant pressure requires extra energy whenever the material expands and couples temperature to volume.

## Notation

<Notation
  items={[
    { symbol: "C_P,C_V", meaning: "molar heat capacities at constant pressure and volume", unit: "J mol^{-1} K^{-1}" },
    { symbol: "S_m,V_m", meaning: "molar entropy and molar volume", unit: "J mol^{-1} K^{-1}, m^{3} mol^{-1}" },
    { symbol: "T,p", meaning: "absolute temperature and pressure", unit: "K, Pa" },
    { symbol: "\\alpha_p,\\kappa_T", meaning: "isobaric volume expansivity and isothermal compressibility", unit: "K^{-1}, Pa^{-1}" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
  ]}
/>

## The Core Method

Write molar entropy as \\(S_m(T,V_m)\\):

\\[
dS_m=\frac{C_V}{T}\,dT
+\left(\frac{\partial S_m}{\partial V_m}\right)_T dV_m.
\tag*{[1]}
\\]

Along a constant-pressure path, \\(dV_m=(\partial V_m/\partial T)_p dT\\). Since \\(C_P=T(\partial S_m/\partial T)_p\\), equation [1] gives

\\[
C_P-C_V
=T\left(\frac{\partial S_m}{\partial V_m}\right)_T
\left(\frac{\partial V_m}{\partial T}\right)_p.
\tag*{[2]}
\\]

Use the Helmholtz Maxwell relation and the response definitions:

\\[
\left(\frac{\partial S_m}{\partial V_m}\right)_T
=\left(\frac{\partial p}{\partial T}\right)_{V_m}
=\frac{\alpha_p}{\kappa_T},
\qquad
\left(\frac{\partial V_m}{\partial T}\right)_p=V_m\alpha_p.
\tag*{[3]}
\\]

Substitution yields the general relation

\\[
C_P-C_V=\frac{TV_m\alpha_p^2}{\kappa_T}.
\tag*{[4]}
\\]

For a stable material, \\(T>0\\), \\(V_m>0\\), and \\(\kappa_T>0\\), so equation [4] implies \\(C_P\ge C_V\\). For an ideal gas, \\(\alpha_p=1/T\\), \\(\kappa_T=1/p\\), and \\(V_m=RT/p\\), giving

\\[
C_P-C_V=R.
\tag*{[5]}
\\]

<PhysicsExamples collapsible
  items={[
    {
      title: "Recover the ideal-gas Mayer relation",
      question: "Use the general heat-capacity relation for an ideal gas.",
      answer: "Insert the ideal-gas responses into equation \\([4]\\): \\[C_P-C_V=TV_m\\frac{(1/T)^2}{1/p}=\\frac{pV_m}{T}.\\] The molar ideal-gas equation gives \\(pV_m=RT\\), so the final factor is \\(R\\). **Final result:** \\(C_P-C_V=R\\) for an ideal gas.",
    },
    {
      title: "Estimate the heat-capacity difference of a liquid",
      question: "At \\(298\\,\\mathrm{K}\\), a liquid has \\(V_m=1.8\\times10^{-5}\\,\\mathrm{m^3\\,mol^{-1}}\\), \\(\\alpha_p=2.1\\times10^{-4}\\,\\mathrm{K^{-1}}\\), and \\(\\kappa_T=4.6\\times10^{-10}\\,\\mathrm{Pa^{-1}}\\). Find \\(C_P-C_V\\).",
      answer: "Equation \\([4]\\) gives \\[C_P-C_V=\\frac{(298)(1.8\\times10^{-5})(2.1\\times10^{-4})^2}{4.6\\times10^{-10}}=0.514\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}.\\] The units reduce because \\(\\mathrm{Pa\\,m^3}=\\mathrm{J}\\). **Final result:** \\(C_P-C_V=0.514\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\).",
    },
  ]}
/>
`;
