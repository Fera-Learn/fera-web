export const content = String.raw`## Principle

Thermodynamic derivative problems become systematic when the target derivative, held-fixed variable, and suitable potential are chosen before algebra begins. Maxwell relations then replace inaccessible entropy derivatives, and derivative identities convert the result into measurable responses.

## Notation

<Notation
  items={[
    { symbol: "x,y,z", meaning: "generic thermodynamic variables" },
    { symbol: "F,G,S,T,p,V", meaning: "Helmholtz energy, Gibbs energy, entropy, absolute temperature, pressure, and total volume", unit: "J, J, J K^{-1}, K, Pa, m^{3}" },
    { symbol: "n,R,\\alpha_p,\\kappa_T", meaning: "amount, molar gas constant, isobaric expansivity, and isothermal compressibility", unit: "mol, J mol^{-1} K^{-1}, K^{-1}, Pa^{-1}" },
  ]}
/>

## The Core Method

First write the target with its constraint. Then choose the potential whose natural variables contain the relevant pair. Two essential calculus identities are

\\[
\left(\frac{\partial x}{\partial y}\right)_z
=\frac{1}{(\partial y/\partial x)_z},
\qquad
\left(\frac{\partial x}{\partial y}\right)_z
\left(\frac{\partial y}{\partial z}\right)_x
\left(\frac{\partial z}{\partial x}\right)_y=-1.
\tag*{[1]}
\\]

For example, the differential \\(dF=-S\,dT-p\,dV\\) produces

\\[
\left(\frac{\partial S}{\partial V}\right)_T
=\left(\frac{\partial p}{\partial T}\right)_V.
\tag*{[2]}
\\]

Next convert equation-of-state derivatives into response functions. From \\(dV=V\alpha_p\,dT-V\kappa_T\,dp\\),

\\[
\left(\frac{\partial V}{\partial T}\right)_p=V\alpha_p,
\quad
\left(\frac{\partial V}{\partial p}\right)_T=-V\kappa_T,
\quad
\left(\frac{\partial p}{\partial T}\right)_V=\frac{\alpha_p}{\kappa_T}.
\tag*{[3]}
\\]

A reliable sequence is therefore

\\[
\text{target and constraint}
\longrightarrow\text{potential differential}
\longrightarrow\text{Maxwell relation}
\longrightarrow\text{derivative identity}
\longrightarrow\text{measurable response}.
\tag*{[4]}
\\]

Keep extensive and molar quantities consistent, inspect dimensions, and check signs against physical behaviour before accepting the result.

<PhysicsExamples collapsible
  items={[
    {
      title: "Replace an entropy derivative",
      question: "Find \\((\\partial S/\\partial V)_T\\) for \\(n\\) moles of ideal gas without writing an entropy formula.",
      answer: "The target contains \\(S,V\\) at fixed \\(T\\), so use the Helmholtz Maxwell relation in equation \\([2]\\). The equation of state is \\(p=nRT/V\\), hence \\[(\\partial p/\\partial T)_V=nR/V.\\] Maxwell substitution gives the inaccessible entropy derivative directly. **Final result:** \\((\\partial S/\\partial V)_T=nR/V\\).",
    },
    {
      title: "Convert a constant-volume pressure derivative",
      question: "Express \\((\\partial p/\\partial T)_V\\) using \\(\\alpha_p\\) and \\(\\kappa_T\\).",
      answer: "Set \\(dV=0\\) in the response differential used for equation \\([3]\\): \\(0=V\\alpha_p\\,dT-V\\kappa_T\\,dp\\). Divide by \\(V\\,dT\\) and solve for \\(dp/dT\\). The units are \\(\\mathrm{Pa\\,K^{-1}}\\), as required. **Final result:** \\((\\partial p/\\partial T)_V=\\alpha_p/\\kappa_T\\).",
    },
  ]}
/>
`;
