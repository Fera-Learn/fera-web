export const content = String.raw`## Principle

Thermodynamic energy equations combine the fundamental thermodynamic relation with measurable equation-of-state derivatives. They determine how internal energy responds to isothermal changes in volume or pressure.

## Notation

<Notation
  items={[
    { symbol: "U,S,T,p,V", meaning: "internal energy, entropy, absolute temperature, pressure, and total volume", unit: "J, J K^{-1}, K, Pa, m^{3}" },
    { symbol: "n,C_V,C_P", meaning: "amount and molar heat capacities at constant volume and pressure", unit: "mol, J mol^{-1} K^{-1}, J mol^{-1} K^{-1}" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
    { symbol: "V_1,V_2,\\Delta U", meaning: "initial and final total volume and finite internal-energy change", unit: "m^{3}, m^{3}, J" },
  ]}
/>

## The Core Method

Insert the first \\(TdS\\) equation into the fundamental relation:

\\[
\begin{aligned}
dU&=T\,dS-p\,dV\\
&=nC_V\,dT+\left[T\left(\frac{\partial p}{\partial T}\right)_V-p\right]dV.
\end{aligned}
\tag*{[1]}
\\]

Coefficient matching gives the first energy equation,

\\[
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial p}{\partial T}\right)_V-p.
\tag*{[2]}
\\]

To use \\(T,p\\), substitute the second \\(TdS\\) equation and expand \\(dV=(\partial V/\partial T)_p dT+(\partial V/\partial p)_T dp\\):

\\[
\begin{aligned}
dU={}&\left[nC_P-p\left(\frac{\partial V}{\partial T}\right)_p\right]dT\\
&+\left[-T\left(\frac{\partial V}{\partial T}\right)_p-p\left(\frac{\partial V}{\partial p}\right)_T\right]dp.
\end{aligned}
\tag*{[3]}
\\]

The second energy equation is therefore

\\[
\left(\frac{\partial U}{\partial p}\right)_T
=-T\left(\frac{\partial V}{\partial T}\right)_p
-p\left(\frac{\partial V}{\partial p}\right)_T.
\tag*{[4]}
\\]

For an ideal gas, \\(pV=nRT\\), so equation [2] becomes

\\[
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{nR}{V}\right)-p=0.
\tag*{[5]}
\\]

This conclusion follows from the ideal-gas equation of state: ideal-gas internal energy depends on temperature, not volume.

<PhysicsExamples collapsible
  items={[
    {
      title: "Derive the pressure-form coefficient",
      question: "Show how the coefficient of \\(dp\\) in \\(dU\\) is obtained when \\(U\\) is represented by \\(T,p\\).",
      answer: "At fixed \\(T\\), the fundamental relation gives \\[(\\partial U/\\partial p)_T=T(\\partial S/\\partial p)_T-p(\\partial V/\\partial p)_T.\\] The Gibbs Maxwell relation is \\((\\partial S/\\partial p)_T=-(\\partial V/\\partial T)_p\\). Substitution produces equation \\([4]\\) without changing either sign. **Final result:** \\((\\partial U/\\partial p)_T=-T(\\partial V/\\partial T)_p-p(\\partial V/\\partial p)_T\\).",
    },
    {
      title: "Test ideal-gas volume dependence",
      question: "An ideal gas expands isothermally from \\(V_1\\) to \\(V_2\\). What is its internal-energy change?",
      answer: "Equation \\([5]\\) shows that \\((\\partial U/\\partial V)_T=0\\) at every point. Therefore \\[\\Delta U=\\int_{V_1}^{V_2}\\left(\\frac{\\partial U}{\\partial V}\\right)_T dV=0.\\] Heat entering during a reversible isothermal expansion is exactly balanced by work output. **Final result:** \\(\\Delta U=0\\).",
    },
  ]}
/>
`;
