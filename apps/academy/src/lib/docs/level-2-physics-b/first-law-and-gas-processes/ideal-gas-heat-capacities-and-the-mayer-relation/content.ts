export const content = String.raw`## Principle

For an ideal gas, internal energy depends only on temperature. Heating at constant pressure requires more energy per mole per kelvin than heating at constant volume because the gas also does expansion work. This difference produces the Mayer relation.

## Notation

<Notation
  items={[
    { symbol: "U", meaning: "total internal energy of the gas", unit: "J" },
    { symbol: "T", meaning: "absolute temperature", unit: "K" },
    { symbol: "dU,dT,dV", meaning: "exact infinitesimal internal-energy, temperature, and volume changes", unit: "J, K, m^{3}" },
    { symbol: "n", meaning: "amount of gas", unit: "mol" },
    { symbol: "C_V,C_P", meaning: "molar heat capacities at constant volume and constant pressure", unit: "J mol^{-1} K^{-1}" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
    { symbol: "p,V", meaning: "equilibrium gas pressure and total volume", unit: "Pa, m^{3}" },
    { symbol: "\\delta Q,\\delta Q_V,\\delta Q_P", meaning: "inexact heat into the gas and its constant-volume and constant-pressure forms", unit: "J, J, J" },
    { symbol: "\\delta W", meaning: "inexact work done by the gas", unit: "J" },
    { symbol: "Q_V,Q_P", meaning: "finite heat into the gas on constant-volume and constant-pressure paths", unit: "J, J" },
    { symbol: "\\Delta T", meaning: "finite temperature change", unit: "K" },
    { symbol: "\\gamma=C_P/C_V", meaning: "heat-capacity ratio", unit: "1" },
  ]}
/>

## The Core Method

For a fixed amount of ideal gas, \\(U=U(T)\\). With the molar heat-capacity convention,

\\[
dU=nC_V\,dT.
\tag*{[1]}
\\]

At constant volume, \\(dV=0\\), so pressure-volume work vanishes. The first law gives

\\[
\delta Q_V=dU=nC_V\,dT.
\tag*{[2]}
\\]

At constant pressure in a quasistatic process, \\(\delta W=p\,dV\\). Differentiating \\(pV=nRT\\) at fixed \\(p\\) gives

\\[
p\,dV=nR\,dT.
\tag*{[3]}
\\]

The first law, rearranged as \\(\delta Q=dU+\delta W\\), then gives

\\[
\delta Q_P=nC_V\,dT+nR\,dT
=n(C_V+R)\,dT.
\tag*{[4]}
\\]

By the definition \\(\delta Q_P=nC_P\,dT\\), comparison with equation \\([4]\\) yields the Mayer relation:

\\[
C_P-C_V=R.
\tag*{[5]}
\\]

For a monatomic ideal gas in the classical regime, the familiar values require the stated restriction:

\\[
C_V=\frac{3}{2}R,
\qquad
C_P=\frac{5}{2}R,
\qquad
\gamma=\frac{5}{3}.
\tag*{[6]}
\\]

These are molar capacities. Omitting the factor \\(n\\) in an energy calculation confuses molar heat capacity with total heat capacity.

<PhysicsExamples collapsible
  items={[
    {
      title: "Constant-pressure heating of argon",
      question: "Treat \\(n=0.200\\,\\mathrm{mol}\\) of argon as a monatomic ideal gas. How much heat is required to raise its temperature by \\(50.0\\,\\mathrm K\\) at constant pressure? Use \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\).",
      answer: "Equation \\([6]\\) gives \\(C_P=5R/2\\). Therefore \\[Q_P=nC_P\\Delta T=(0.200)\\left(\\frac{5}{2}\\right)(8.314)(50.0)\\,\\mathrm J=207.85\\,\\mathrm J.\\] **Final result:** \\(Q_P=208\\,\\mathrm J\\) to three significant figures.",
    },
    {
      title: "Extra heat required at constant pressure",
      question: "For \\(n=0.200\\,\\mathrm{mol}\\) and \\(\\Delta T=50.0\\,\\mathrm K\\), find how much more heat constant-pressure heating needs than constant-volume heating.",
      answer: "Using the Mayer relation in equation \\([5]\\), \\[Q_P-Q_V=n(C_P-C_V)\\Delta T=nR\\Delta T=(0.200)(8.314)(50.0)\\,\\mathrm J=83.14\\,\\mathrm J.\\] This extra transfer supplies the expansion work. **Final result:** constant-pressure heating requires \\(83.1\\,\\mathrm J\\) more heat.",
    },
  ]}
/>
`;
