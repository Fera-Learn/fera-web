export const content = String.raw`## Principle

Enthalpy packages internal energy together with the pressure-volume energy needed to make room for a system. For a closed simple compressible system with only pressure-volume work, its change equals the heat supplied during a constant-pressure process.

## Notation

<Notation
  items={[
    { symbol: "H,U", meaning: "enthalpy and internal energy", unit: "J" },
    { symbol: "H_m,\\Delta H_m", meaning: "molar enthalpy and its finite change", unit: "J mol^{-1}, J mol^{-1}" },
    { symbol: "T_1,T_2,p,V,S", meaning: "initial and final temperature, pressure, total volume, and entropy", unit: "K, K, Pa, m^{3}, J K^{-1}" },
    { symbol: "p_{\\mathrm{ext}}", meaning: "external pressure", unit: "Pa" },
    { symbol: "Q_p,\\delta Q", meaning: "finite heat and infinitesimal heat transferred into the system", unit: "J, J" },
    { symbol: "n,C_P", meaning: "amount and molar heat capacity at constant pressure", unit: "mol, J mol^{-1} K^{-1}" },
    { symbol: "a,b,c", meaning: "coefficients in the molar heat-capacity model", unit: "J mol^{-1} K^{-1}, J mol^{-1} K^{-2}, J K mol^{-1}" },
  ]}
/>

## The Core Method

Define enthalpy by

\\[
H=U+pV.
\tag*{[1]}
\\]

At fixed composition, substitute \\(dU=T\,dS-p\,dV\\) and apply the product rule:

\\[
\begin{aligned}
dH&=dU+p\,dV+V\,dp\\
&=T\,dS+V\,dp.
\end{aligned}
\tag*{[2]}
\\]

For a quasistatic constant-pressure process with only pressure-volume work, \\(dp=0\\), \\(p_{\mathrm{ext}}=p\\), and changes in bulk kinetic and potential energy neglected. The first law then gives

\\[
dU=\delta Q-p\,dV
\quad\Longrightarrow\quad
dH=\delta Q,
\qquad Q_p=\Delta H.
\tag*{[3]}
\\]

Using the molar heat capacity gives

\\[
\Delta H=n\int_{T_1}^{T_2}C_P(T)\,dT.
\tag*{[4]}
\\]

If \\(C_P(T)=a+bT+c/T^2\\), the molar change is

\\[
\Delta H_m=a(T_2-T_1)+\frac{b}{2}(T_2^2-T_1^2)-c\left(\frac{1}{T_2}-\frac{1}{T_1}\right).
\tag*{[5]}
\\]

Positive \\(\Delta H\\) is endothermic and negative \\(\Delta H\\) is exothermic under the stated constant-pressure conditions. Enthalpy is always a state function, but identifying \\(Q_p\\) with \\(\Delta H\\) requires the work and energy assumptions above.

<PhysicsExamples collapsible
  items={[
    {
      title: "Heat nitrogen with a temperature-dependent heat capacity",
      question: "For one mole of nitrogen, let \\(C_P=a+bT+c/T^2\\), with \\(a=28.58\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\), \\(b=3.77\\times10^{-3}\\,\\mathrm{J\\,mol^{-1}\\,K^{-2}}\\), and \\(c=-0.50\\times10^5\\,\\mathrm{J\\,K\\,mol^{-1}}\\). Find \\(\\Delta H_m\\) from \\(298.15\\,\\mathrm{K}\\) to \\(373.15\\,\\mathrm{K}\\).",
      answer: "Insert the data into equation \\([5]\\): \\[\\Delta H_m=28.58(75.00)+\\frac{3.77\\times10^{-3}}{2}(373.15^2-298.15^2)-(-0.50\\times10^5)\\left(\\frac{1}{373.15}-\\frac{1}{298.15}\\right).\\] The three contributions sum to \\(2204.7\\,\\mathrm{J\\,mol^{-1}}\\). The positive sign means heat enters during constant-pressure heating. **Final result:** \\(\\Delta H_m=2.20\\,\\mathrm{kJ\\,mol^{-1}}\\).",
    },
    {
      title: "Interpret an exothermic enthalpy change",
      question: "A constant-pressure reaction has \\(\\Delta H=-85\\,\\mathrm{kJ}\\) and performs no work other than pressure-volume work. What heat transfer occurs?",
      answer: "Equation \\([3]\\) gives \\(Q_p=\\Delta H\\). Therefore \\(Q_p=-85\\,\\mathrm{kJ}\\). Since heat into the system is positive, the negative value means \\(85\\,\\mathrm{kJ}\\) leaves the system. **Final result:** the reaction releases \\(85\\,\\mathrm{kJ}\\) of heat and is exothermic.",
    },
  ]}
/>
`;
