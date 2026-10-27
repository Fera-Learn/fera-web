export const content = String.raw`## Principle

A total differential combines the first-order changes caused by every independent variable. In thermodynamics it converts an equation of state into a local relation among small changes while preserving which variables are held fixed in each coefficient.

## Notation

<Notation
  items={[
    { symbol: "f,x,y", meaning: "differentiable function and its two independent variables" },
    { symbol: "df,dx,dy", meaning: "exact infinitesimal changes in f, x, and y" },
    { symbol: "p,V,T", meaning: "pressure, total volume, and absolute temperature", unit: "Pa, m^{3}, K" },
    { symbol: "dp,dV,dT", meaning: "infinitesimal changes in pressure, volume, and temperature", unit: "Pa, m^{3}, K" },
    { symbol: "n,R", meaning: "fixed amount of ideal gas and molar gas constant", unit: "mol, J mol^{-1} K^{-1}" },
  ]}
/>

## The Core Method

For a differentiable state function \\(f=f(x,y)\\), change one independent variable at a time to first order:

\\[
df=
\left(\frac{\partial f}{\partial x}\right)_y dx
+\left(\frac{\partial f}{\partial y}\right)_x dy.
\tag*{[1]}
\\]

For a fixed amount of ideal gas, solve the equation of state for \\(p\\):

\\[
p(V,T)=\frac{nRT}{V}.
\tag*{[2]}
\\]

Differentiate with respect to each independent variable under its stated constraint:

\\[
\left(\frac{\partial p}{\partial V}\right)_T
=-\frac{nRT}{V^2},
\qquad
\left(\frac{\partial p}{\partial T}\right)_V
=\frac{nR}{V}.
\tag*{[3]}
\\]

Substitution of [3] into [1] gives

\\[
dp=-\frac{nRT}{V^2}\,dV+\frac{nR}{V}\,dT.
\tag*{[4]}
\\]

Using \\(p=nRT/V\\) in each coefficient and then dividing by \\(p\\) produces the fractional-change form

\\[
dp=-\frac{p}{V}\,dV+\frac{p}{T}\,dT,
\qquad
\frac{dp}{p}=-\frac{dV}{V}+\frac{dT}{T}.
\tag*{[5]}
\\]

The differential is a local linear relation. For finite changes, integrate it only when the path and variation of the coefficients are known; substituting large finite changes directly into [5] is generally an approximation.

<PhysicsExamples collapsible
  items={[
    {
      title: "Combine simultaneous volume and temperature changes",
      question: "An ideal gas is initially at \\(p=1.00\\times10^5\\,\\mathrm{Pa}\\), \\(V=2.00\\times10^{-2}\\,\\mathrm{m^3}\\), and \\(T=300\\,\\mathrm K\\). Estimate \\(dp\\) for small changes \\(dV=+1.00\\times10^{-4}\\,\\mathrm{m^3}\\) and \\(dT=+3.00\\,\\mathrm K\\).",
      answer: "Use the two contributions in equation \\([5]\\). The volume contribution is \\(-dV/V=-(1.00\\times10^{-4})/(2.00\\times10^{-2})=-0.00500\\), and the temperature contribution is \\(dT/T=3.00/300=0.0100\\). Therefore \\[\\frac{dp}{p}=-0.00500+0.0100=0.00500,\\] \\[dp=(1.00\\times10^5\\,\\mathrm{Pa})(0.00500)=+5.00\\times10^2\\,\\mathrm{Pa}.\\] The temperature effect is larger, so the net pressure change is positive. **Final result:** the first-order pressure change is \\(dp=+5.00\\times10^2\\,\\mathrm{Pa}\\).",
    },
    {
      title: "Recover a constant-pressure condition",
      question: "Use the ideal-gas total differential to relate infinitesimal volume and temperature changes at constant pressure.",
      answer: "Constant pressure means \\(dp=0\\). Set the left side of equation \\([5]\\) to zero: \\(0=-dV/V+dT/T\\). Adding \\(dV/V\\) to both sides gives \\(dV/V=dT/T\\). Thus equal small fractional increases in temperature and volume preserve pressure for a fixed amount of ideal gas. **Final result:** at constant pressure, \\(dV/V=dT/T\\).",
    },
  ]}
/>
`;
