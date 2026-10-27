export const content = String.raw`## Principle

Pressure-volume work is one member of a wider family of force-coordinate pairs. Identifying the coordinate that changes and the conjugate generalized force gives the mechanical contribution to the fundamental thermodynamic relation, including its sign.

## Notation

<Notation
  items={[
    { symbol: "U,\\Delta U,F,S,T", meaning: "internal-energy value and change, Helmholtz energy, entropy, and absolute temperature", unit: "J, J, J, J K^{-1}, K" },
    { symbol: "p,V,\\Delta V", meaning: "pressure, volume, and volume change", unit: "Pa, m^{3}, m^{3}" },
    { symbol: "f,L,\\Delta L", meaning: "tension, rod length, and length change", unit: "N, m, m" },
    { symbol: "\\gamma,A", meaning: "surface tension and film area", unit: "N m^{-1}, m^{2}" },
    { symbol: "\\mathbf p_e,\\mathbf E", meaning: "electric dipole moment and applied electric field", unit: "C m, V m^{-1}" },
    { symbol: "\\mathbf m,\\mathbf B", meaning: "total magnetic dipole moment and magnetic flux density", unit: "J T^{-1}, T" },
    { symbol: "X,x", meaning: "generic generalized force and coordinate, with X dx having energy units" },
    { symbol: "\\delta Q_{\\mathrm{rev}},\\delta W", meaning: "reversible heat into the system and work done by the system", unit: "J, J" },
  ]}
/>

## The Core Method

For a closed, reversible system of fixed composition, heat entering the system obeys \\(\delta Q_{\mathrm{rev}}=T\,dS\\), while work done by the system is positive. The first law is therefore

\\[
dU=T\,dS-\delta W.
\tag*{[1]}
\\]

Each mechanical term can be written as a generalized-force contribution to \\(dU\\). With the Academy conventions used here,

\\[
dU=T\,dS-p\,dV+f\,dL+\gamma\,dA
-\mathbf p_e\cdot d\mathbf E-\mathbf m\cdot d\mathbf B.
\tag*{[2]}
\\]

Equation [2] fixes the signs: expansion gives work to the surroundings, whereas extending a rod against tension raises its energy. The selected magnetic convention is only \\(-\mathbf m\cdot d\mathbf B\\); no alternative field-magnetization work convention is combined with it.

For any single generalized coordinate, write the fundamental relation as

\\[
dU=T\,dS+X\,dx,
\qquad
X=\left(\frac{\partial U}{\partial x}\right)_S.
\tag*{[3]}
\\]

The sign is carried by \\(X\\): for volume, \\(x=V\\) and \\(X=-p\\); for a rod, \\(x=L\\) and \\(X=f\\). Defining the Helmholtz energy \\(F=U-TS\\) gives

\\[
dF=dU-T\,dS-S\,dT=-S\,dT+X\,dx.
\tag*{[4]}
\\]

Because \\(F=F(T,x)\\), comparison with its total differential identifies the conjugate variables:

\\[
S=-\left(\frac{\partial F}{\partial T}\right)_x,
\qquad
X=\left(\frac{\partial F}{\partial x}\right)_T.
\tag*{[5]}
\\]

Equality of mixed derivatives then produces the measurable Maxwell relation

\\[
\left(\frac{\partial X}{\partial T}\right)_x
=-\left(\frac{\partial S}{\partial x}\right)_T.
\tag*{[6]}
\\]

The common error is to assign every pair a positive \\(X\,dx\\). First write the physical work sign, then identify the signed generalized force used in equations [3]-[6].

<PhysicsExamples collapsible
  items={[
    {
      title: "Work contributions during a compound change",
      question: "A reversible system expands by \\(2.0\\times10^{-6}\\,\\mathrm{m^3}\\) against \\(3.0\\times10^5\\,\\mathrm{Pa}\\) while a rod in it lengthens by \\(1.5\\,\\mathrm{mm}\\) under \\(400\\,\\mathrm N\\). At constant entropy, find the internal-energy change from these two coordinates.",
      answer: "At constant entropy, retain the pressure and tension terms in equation \\([2]\\): \\[\\Delta U=-p\\,\\Delta V+f\\,\\Delta L.\\] The volume contribution is \\[-p\\,\\Delta V=-(3.0\\times10^5)(2.0\\times10^{-6})\\,\\mathrm J=-0.60\\,\\mathrm J,\\] and the rod contribution is \\[f\\,\\Delta L=(400)(1.5\\times10^{-3})\\,\\mathrm J=+0.60\\,\\mathrm J.\\] Adding the independently signed contributions gives \\(\\Delta U=0\\). **Final result:** the two generalized-work contributions cancel, so the net internal-energy change is \\(0\\,\\mathrm J\\).",
    },
    {
      title: "Identifying a signed conjugate force",
      question: "In the compact form \\(dU=T\\,dS+X\\,dx\\), what are \\(X\\) and \\(x\\) for volume work and magnetic work?",
      answer: "Compare each contribution directly with equation \\([2]\\). The volume term is \\(-p\\,dV\\), so \\(x=V\\) and \\(X=-p\\). The magnetic term is \\(-\\mathbf m\\cdot d\\mathbf B\\); component by component, the coordinate is the applied field component and its conjugate force is the negative magnetic-moment component. **Final result:** use \\((x,X)=(V,-p)\\) for volume and \\((\\mathbf B,-\\mathbf m)\\) for magnetism; the minus signs are part of the chosen conjugate forces.",
    },
  ]}
/>
`;
