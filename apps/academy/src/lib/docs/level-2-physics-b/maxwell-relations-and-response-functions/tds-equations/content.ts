export const content = String.raw`## Principle

The two entropy equations express state changes using measurable heat capacities and equation-of-state derivatives. One uses temperature and volume; the other uses temperature and pressure. They apply to equilibrium state changes, while identifying the entropy term with heat additionally requires a reversible path.

## Notation

<Notation
  items={[
    { symbol: "T,S,p,V", meaning: "absolute temperature, total entropy, pressure, and total volume", unit: "K, J K^{-1}, Pa, m^{3}" },
    { symbol: "n,C_V,C_P", meaning: "amount and molar heat capacities at constant volume and pressure", unit: "mol, J mol^{-1} K^{-1}, J mol^{-1} K^{-1}" },
    { symbol: "\\alpha_p,\\kappa_T", meaning: "isobaric volume expansivity and isothermal compressibility", unit: "K^{-1}, Pa^{-1}" },
    { symbol: "R,V_1,V_2,T_1,T_2", meaning: "molar gas constant, endpoint volumes, and endpoint temperatures", unit: "J mol^{-1} K^{-1}, m^{3}, m^{3}, K, K" },
    { symbol: "\\delta Q_{\\mathrm{rev}}", meaning: "infinitesimal heat transferred into the system along a reversible path", unit: "J" },
    { symbol: "\\Delta S,\\Delta p", meaning: "finite entropy and pressure changes", unit: "J K^{-1}, Pa" },
  ]}
/>

## The Core Method

Treat entropy as \\(S(T,V)\\), multiply its total differential by \\(T\\), identify \\(nC_V=T(\partial S/\partial T)_V\\), and use the Helmholtz Maxwell relation:

\\[
T\,dS=nC_V\,dT+T\left(\frac{\partial p}{\partial T}\right)_V dV.
\tag*{[1]}
\\]

Alternatively, use \\(S(T,p)\\), identify \\(nC_P=T(\partial S/\partial T)_p\\), and use the Gibbs Maxwell relation:

\\[
T\,dS=nC_P\,dT-T\left(\frac{\partial V}{\partial T}\right)_p dp.
\tag*{[2]}
\\]

From \\(dV=V\alpha_p\,dT-V\kappa_T\,dp\\), setting \\(dV=0\\) gives

\\[
\left(\frac{\partial p}{\partial T}\right)_V=\frac{\alpha_p}{\kappa_T},
\qquad
\left(\frac{\partial V}{\partial T}\right)_p=V\alpha_p.
\tag*{[3]}
\\]

The response-function forms are therefore

\\[
T\,dS=nC_V\,dT+\frac{T\alpha_p}{\kappa_T}\,dV,
\qquad
T\,dS=nC_P\,dT-TV\alpha_p\,dp.
\tag*{[4]}
\\]

For an ideal gas, \\((\partial p/\partial T)_V=nR/V\\). If \\(C_V\\) is constant, integrating equation [1] gives

\\[
\Delta S=nC_V\ln\left(\frac{T_2}{T_1}\right)
+nR\ln\left(\frac{V_2}{V_1}\right).
\tag*{[5]}
\\]

<PhysicsExamples collapsible
  items={[
    {
      title: "Entropy change of an ideal gas",
      question: "One mole of ideal gas with \\(C_V=20.8\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\) changes from \\(300\\,\\mathrm{K},V_1\\) to \\(450\\,\\mathrm{K},2V_1\\). Find \\(\\Delta S\\).",
      answer: "Use equation \\([5]\\): \\[\\Delta S=(1)(20.8)\\ln(450/300)+(1)(8.314)\\ln2.\\] The temperature contribution is \\(8.43\\,\\mathrm{J\\,K^{-1}}\\), and the volume contribution is \\(5.76\\,\\mathrm{J\\,K^{-1}}\\). Their sum is positive. **Final result:** \\(\\Delta S=14.2\\,\\mathrm{J\\,K^{-1}}\\).",
    },
    {
      title: "Isothermal reversible compression",
      question: "A reversible isothermal step increases pressure by \\(\\Delta p\\gt 0\\) for a material with \\(\\alpha_p\\gt 0\\). What is the sign of the heat transfer?",
      answer: "Set \\(dT=0\\) in the second form of equation \\([4]\\): \\(T\\,dS=-TV\\alpha_p\\,dp\\lt 0\\). For a reversible path, \\(\\delta Q_{\\mathrm{rev}}=T\\,dS\\), so heat leaves the system. **Final result:** \\(\\delta Q_{\\mathrm{rev}}\\lt 0\\) for the isothermal compression.",
    },
  ]}
/>
`;
