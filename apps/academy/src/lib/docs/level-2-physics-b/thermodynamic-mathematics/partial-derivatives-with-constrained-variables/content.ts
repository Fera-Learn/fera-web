export const content = String.raw`## Principle

A thermodynamic partial derivative is meaningful only when its held-fixed variable is stated. The subscript identifies a physical constraint, so derivatives with the same numerator and denominator can describe different experiments.

## Notation

<Notation
  items={[
    { symbol: "f,x,y,z", meaning: "generic differentiable function and independent variables" },
    { symbol: "\\Delta x", meaning: "finite increment in x, with the same unit as x" },
    { symbol: "p,V,T", meaning: "pressure, total volume, and absolute temperature", unit: "Pa, m^{3}, K" },
    { symbol: "\\Delta p", meaning: "finite pressure change", unit: "Pa" },
    { symbol: "n,R", meaning: "amount of gas and molar gas constant", unit: "mol, J mol^{-1} K^{-1}" },
    { symbol: "U", meaning: "internal energy", unit: "J" },
    { symbol: "C_V", meaning: "molar heat capacity at constant volume", unit: "J mol^{-1} K^{-1}" },
  ]}
/>

## The Core Method

For \\(f=f(x,y)\\), the derivative with respect to \\(x\\) while \\(y\\) is fixed is defined by

\\[
\left(\frac{\partial f}{\partial x}\right)_y
=\lim_{\Delta x\to0}
\frac{f(x+\Delta x,y)-f(x,y)}{\Delta x}.
\tag*{[1]}
\\]

The subscript is part of the quantity. To evaluate a thermodynamic derivative, first impose the stated constraint, then express the dependent variable in terms of the variable being changed.

For a fixed amount of ideal gas, \\(p=nRT/V\\). At fixed volume,

\\[
\left(\frac{\partial p}{\partial T}\right)_V
=\left(\frac{\partial}{\partial T}\frac{nRT}{V}\right)_V
=\frac{nR}{V}.
\tag*{[2]}
\\]

At fixed temperature, the different slope is

\\[
\left(\frac{\partial p}{\partial V}\right)_T
=\left(\frac{\partial}{\partial V}\frac{nRT}{V}\right)_T
=-\frac{nRT}{V^2}
=-\frac{p}{V}.
\tag*{[3]}
\\]

For an ideal gas, internal energy depends only on temperature. Consequently,

\\[
\left(\frac{\partial U}{\partial V}\right)_T=0,
\qquad
\left(\frac{\partial U}{\partial T}\right)_V=nC_V.
\tag*{[4]}
\\]

It would be incorrect to remove the subscript from the first derivative in [4]. Along a path where temperature changes with volume, \\(U\\) can change even though its fixed-temperature volume derivative is zero.

<PhysicsExamples collapsible
  items={[
    {
      title: "Pressure-temperature slope at fixed volume",
      question: "Find \\((\\partial p/\\partial T)_V\\) for \\(2.00\\,\\mathrm{mol}\\) of ideal gas in \\(V=5.00\\times10^{-2}\\,\\mathrm{m^3}\\), and use it to find the pressure rise for a \\(15.0\\,\\mathrm K\\) increase at fixed volume.",
      answer: "Equation \\([2]\\) gives \\[\\left(\\frac{\\partial p}{\\partial T}\\right)_V=\\frac{(2.00\\,\\mathrm{mol})(8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}})}{5.00\\times10^{-2}\\,\\mathrm{m^3}}=332.6\\,\\mathrm{Pa\\,K^{-1}}.\\] The slope is constant under the ideal-gas assumptions, so \\[\\Delta p=(332.6\\,\\mathrm{Pa\\,K^{-1}})(15.0\\,\\mathrm K)=4.99\\times10^3\\,\\mathrm{Pa}.\\] The positive sign matches the expected pressure increase on heating a rigid vessel. **Final result:** the slope is \\(332.6\\,\\mathrm{Pa\\,K^{-1}}\\) and the pressure rises by \\(4.99\\times10^3\\,\\mathrm{Pa}\\).",
    },
    {
      title: "Interpret an internal-energy derivative",
      question: "For an ideal gas, does \\((\\partial U/\\partial V)_T=0\\) mean that internal energy cannot change when volume changes?",
      answer: "No. Equation \\([4]\\) describes only a volume change constrained to fixed temperature. If a compression also raises temperature, the second derivative in equation \\([4]\\) gives a nonzero internal-energy change. Omitting the constraint would turn a conditional statement into a false general one. **Final result:** ideal-gas internal energy is unchanged by volume only when temperature is held fixed; it changes if the accompanying path changes temperature.",
    },
  ]}
/>
`;
