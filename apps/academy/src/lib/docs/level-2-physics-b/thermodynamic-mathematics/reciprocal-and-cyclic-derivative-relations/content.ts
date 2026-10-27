export const content = String.raw`## Principle

When three thermodynamic variables are linked by one equation of state, only two are independent. The reciprocal and cyclic derivative relations change derivative direction or cycle through the variables without solving the equation of state afresh.

## Notation

<Notation
  items={[
    { symbol: "x,y,z", meaning: "three differentiable variables related by one constraint" },
    { symbol: "dx,dy,dz", meaning: "infinitesimal changes in x, y, and z" },
    { symbol: "p,V,T", meaning: "pressure, total volume, and absolute temperature", unit: "Pa, m^{3}, K" },
    { symbol: "n,R", meaning: "fixed amount of ideal gas and molar gas constant", unit: "mol, J mol^{-1} K^{-1}" },
  ]}
/>

## The Core Method

At fixed \\(z\\), varying \\(x\\) with \\(y\\) and then reversing that relation gives the reciprocal identity

\\[
\left(\frac{\partial x}{\partial y}\right)_z
\left(\frac{\partial y}{\partial x}\right)_z=1,
\qquad
\left(\frac{\partial x}{\partial y}\right)_z
=\frac{1}{(\partial y/\partial x)_z}.
\tag*{[1]}
\\]

The identity requires a locally nonzero, invertible derivative and exactly the same held-fixed variable on both factors.

To derive the cyclic relation, write the total differential of \\(x=x(y,z)\\):

\\[
dx=
\left(\frac{\partial x}{\partial y}\right)_zdy
+\left(\frac{\partial x}{\partial z}\right)_ydz.
\tag*{[2]}
\\]

Hold \\(x\\) fixed, so \\(dx=0\\), divide by \\(dz\\), and solve one step at a time:

\\[
0=
\left(\frac{\partial x}{\partial y}\right)_z
\left(\frac{\partial y}{\partial z}\right)_x
+\left(\frac{\partial x}{\partial z}\right)_y,
\qquad
\left(\frac{\partial y}{\partial z}\right)_x
=-
\frac{(\partial x/\partial z)_y}{(\partial x/\partial y)_z}.
\tag*{[3]}
\\]

Multiply the second result in [3] by \\((\partial x/\partial y)_z(\partial z/\partial x)_y\\). The last two factors on the right multiply to one by [1], yielding

\\[
\left(\frac{\partial x}{\partial y}\right)_z
\left(\frac{\partial y}{\partial z}\right)_x
\left(\frac{\partial z}{\partial x}\right)_y=-1.
\tag*{[4]}
\\]

The minus sign is essential. It reflects the fact that, with the third variable fixed appropriately, increasing one member of the cycle forces another to decrease.

<PhysicsExamples collapsible
  items={[
    {
      title: "Verify the cyclic relation for an ideal gas",
      question: "Verify the cyclic derivative relation using \\(x=p\\), \\(y=V\\), and \\(z=T\\) for a fixed amount of ideal gas.",
      answer: "From \\(pV=nRT\\), differentiate under each displayed constraint: \\[\\left(\\frac{\\partial p}{\\partial V}\\right)_T=-\\frac{p}{V},\\qquad \\left(\\frac{\\partial V}{\\partial T}\\right)_p=\\frac{V}{T},\\qquad \\left(\\frac{\\partial T}{\\partial p}\\right)_V=\\frac{T}{p}.\\] Multiplying in the order required by equation \\([4]\\) gives \\[\\left(-\\frac{p}{V}\\right)\\left(\\frac{V}{T}\\right)\\left(\\frac{T}{p}\\right)=-1.\\] Every variable and unit cancels, as required for the dimensionless identity. **Final result:** the ideal-gas derivatives multiply to \\(-1\\), verifying the cyclic relation.",
    },
    {
      title: "Reverse an isothermal derivative",
      question: "At one ideal-gas state, \\((\\partial p/\\partial V)_T=-4.00\\times10^7\\,\\mathrm{Pa\\,m^{-3}}\\). Find \\((\\partial V/\\partial p)_T\\).",
      answer: "The constraint is \\(T\\) in both derivatives, so the reciprocal identity in equation \\([1]\\) applies. Taking the reciprocal gives \\[\\left(\\frac{\\partial V}{\\partial p}\\right)_T=\\frac{1}{-4.00\\times10^7\\,\\mathrm{Pa\\,m^{-3}}}=-2.50\\times10^{-8}\\,\\mathrm{m^3\\,Pa^{-1}}.\\] The negative sign is retained: increasing pressure is associated with decreasing volume on an isotherm. **Final result:** \\((\\partial V/\\partial p)_T=-2.50\\times10^{-8}\\,\\mathrm{m^3\\,Pa^{-1}}\\).",
    },
  ]}
/>
`;
