export const content = String.raw`## Principle

Helmholtz free energy measures the isothermal work capacity of a closed system when ambient displacement work is not being separated out. Its natural variables are temperature and volume, and at fixed temperature and volume it decreases during spontaneous change until equilibrium is reached.

## Notation

<Notation
  items={[
    { symbol: "F,U,S,T,p,V", meaning: "Helmholtz free energy, internal energy, entropy, absolute temperature, pressure, and total volume", unit: "J, J, J K^{-1}, K, Pa, m^{3}" },
    { symbol: "\\delta Q,\\delta W", meaning: "heat into the system and work done by the system", unit: "J, J" },
    { symbol: "W_{\\max},\\Delta F", meaning: "maximum work output and finite Helmholtz-energy change", unit: "J, J" },
    { symbol: "n,R,V_1,V_2", meaning: "amount, molar gas constant, and initial and final volume", unit: "mol, J mol^{-1} K^{-1}, m^{3}, m^{3}" },
  ]}
/>

## The Core Method

The Helmholtz free energy and its fixed-composition differential are

\\[
F=U-TS,
\qquad
dF=-S\,dT-p\,dV.
\tag*{[1]}
\\]

For an isothermal process, \\(dT=0\\), so a reversible quasistatic path satisfies

\\[
dF=-p\,dV,
\qquad
\Delta F=-\int_{V_1}^{V_2}p\,dV.
\tag*{[2]}
\\]

The work bound follows without assuming reversibility. With heat into the system positive and work by the system positive,

\\[
dU=\delta Q-\delta W,
\qquad
\delta Q\le T\,dS.
\tag*{[3]}
\\]

At constant temperature, combine equation [3] with \\(dF=dU-T\,dS\\):

\\[
dF=\delta Q-\delta W-T\,dS\le-\delta W
\quad\Longrightarrow\quad
W\le-\Delta F.
\tag*{[4]}
\\]

Equality requires a reversible process. If the system is closed at fixed \\(T,V\\) and no non-pressure-volume work is supplied, equation [4] reduces to \\(dF\le0\\); stable equilibrium is a minimum of \\(F\\) under those constraints.

For an ideal gas undergoing reversible isothermal expansion,

\\[
\Delta F=-nRT\ln\left(\frac{V_2}{V_1}\right),
\qquad
W_{\max}=-\Delta F=nRT\ln\left(\frac{V_2}{V_1}\right).
\tag*{[5]}
\\]

<PhysicsExamples collapsible
  items={[
    {
      title: "Maximum work from isothermal ideal-gas expansion",
      question: "One mole of ideal gas expands reversibly at \\(300\\,\\mathrm{K}\\) from \\(V_1\\) to \\(2V_1\\). Find the maximum work output.",
      answer: "Use equation \\([5]\\): \\[W_{\\max}=nRT\\ln 2=(1.00)(8.314)(300)\\ln2=1.73\\times10^3\\,\\mathrm{J}.\\] The corresponding Helmholtz change is \\(\\Delta F=-1.73\\,\\mathrm{kJ}\\), so the gas loses Helmholtz energy while delivering work. **Final result:** \\(W_{\\max}=1.73\\,\\mathrm{kJ}\\).",
    },
    {
      title: "Test spontaneity at fixed temperature and volume",
      question: "Two possible changes of a closed system at fixed \\(T\\) and \\(V\\) have \\(\\Delta F=+4\\,\\mathrm{kJ}\\) and \\(\\Delta F=-3\\,\\mathrm{kJ}\\). No external non-expansion work is supplied. Which direction can be spontaneous?",
      answer: "Equation \\([4]\\) gives \\(\\Delta F\\le0\\) when no work is extracted or supplied and the volume is fixed. The \\(+4\\,\\mathrm{kJ}\\) change requires external driving, whereas the \\(-3\\,\\mathrm{kJ}\\) change satisfies the spontaneous-change criterion. **Final result:** only the change with \\(\\Delta F=-3\\,\\mathrm{kJ}\\) can proceed spontaneously under the stated constraints.",
    },
  ]}
/>
`;
