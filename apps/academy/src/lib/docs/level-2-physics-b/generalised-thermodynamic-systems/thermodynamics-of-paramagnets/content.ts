export const content = String.raw`## Principle

A paramagnet exchanges work with an applied magnetic field because its microscopic moments tend to align with that field. A magnetic Maxwell relation connects this alignment to entropy, explaining why isothermal magnetization releases heat and adiabatic demagnetization cools an ideal paramagnet.

## Notation

<Notation
  items={[
    { symbol: "U,F,S,T", meaning: "internal energy, Helmholtz energy, entropy, and absolute temperature", unit: "J, J, J K^{-1}, K" },
    { symbol: "\\mathbf m,\\mathbf B", meaning: "total magnetic dipole moment and applied magnetic flux density", unit: "J T^{-1}, T" },
    { symbol: "m,B", meaning: "collinear magnetic-moment component and field magnitude", unit: "J T^{-1}, T" },
    { symbol: "M,V", meaning: "magnetization and sample volume", unit: "A m^{-1}, m^{3}" },
    { symbol: "\\chi,\\mu_0", meaning: "dimensionless magnetic susceptibility and vacuum permeability", unit: "1, N A^{-2}" },
    { symbol: "C_{B,\\mathrm{tot}}", meaning: "total heat capacity at constant applied field", unit: "J K^{-1}" },
    { symbol: "\\delta Q_{\\mathrm{rev}}", meaning: "inexact reversible heat transferred into the paramagnet", unit: "J" },
  ]}
/>

## The Core Method

Use only the selected magnetic-work convention. For a closed paramagnet whose moment and applied field are collinear,

\\[
dU=T\,dS-m\,dB.
\tag*{[1]}
\\]

No term based on an alternative field-magnetization convention is added. With \\(F=U-TS\\),

\\[
dF=dU-T\,dS-S\,dT=-S\,dT-m\,dB.
\tag*{[2]}
\\]

Since \\(F=F(T,B)\\), its first derivatives are

\\[
S=-\left(\frac{\partial F}{\partial T}\right)_B,
\qquad
m=-\left(\frac{\partial F}{\partial B}\right)_T.
\tag*{[3]}
\\]

Equality of mixed derivatives gives the magnetic Maxwell relation

\\[
\left(\frac{\partial S}{\partial B}\right)_T
=\left(\frac{\partial m}{\partial T}\right)_B.
\tag*{[4]}
\\]

For a linear, uniform sample of fixed volume and weak susceptibility \\(\chi\ll1\\), the distinction between the applied field and the magnetic flux density gives the approximation \\(M\simeq\chi B/\mu_0\\). With \\(m=MV\\),

\\[
\chi\ll1,
\qquad
M\simeq\frac{\chi B}{\mu_0},
\qquad
\left(\frac{\partial m}{\partial T}\right)_B
\simeq\frac{VB}{\mu_0}\left(\frac{\partial\chi}{\partial T}\right)_B.
\tag*{[5]}
\\]

At fixed temperature, reversible heat follows from \\(\delta Q_{\mathrm{rev}}=T\,dS\\):

\\[
\delta Q_{\mathrm{rev}}
=T\left(\frac{\partial m}{\partial T}\right)_B dB.
\tag*{[6]}
\\]

Ordinary paramagnets have \\((\partial\chi/\partial T)_B<0\\) away from their low-temperature interaction regime. An isothermal field increase therefore gives negative heat into the sample: ordering the moments lowers magnetic entropy and heat flows out.

For a general change, expand entropy in its natural variables and use \\(C_{B,\mathrm{tot}}=T(\partial S/\partial T)_B\\):

\\[
dS=\frac{C_{B,\mathrm{tot}}}{T}\,dT
+\left(\frac{\partial m}{\partial T}\right)_B dB.
\tag*{[7]}
\\]

Setting \\(dS=0\\) for a reversible adiabatic field change gives

\\[
\left(\frac{\partial T}{\partial B}\right)_S
=-\frac{T}{C_{B,\mathrm{tot}}}
\left(\frac{\partial m}{\partial T}\right)_B.
\tag*{[8]}
\\]

Because the magnetic derivative is negative for a paramagnet in this regime, equation [8] is positive: decreasing \\(B\\) adiabatically decreases \\(T\\).

<PhysicsExamples collapsible
  items={[
    {
      title: "Magnetocaloric slope",
      question: "At \\(T=4.0\\,\\mathrm K\\), a paramagnetic sample has \\(C_{B,\\mathrm{tot}}=0.80\\,\\mathrm{J\\,K^{-1}}\\) and \\((\\partial m/\\partial T)_B=-0.030\\,\\mathrm{J\\,T^{-1}\\,K^{-1}}\\). Find the local adiabatic temperature change for \\(dB=-0.50\\,\\mathrm T\\).",
      answer: "Use equation \\([8]\\): \\[\\left(\\frac{\\partial T}{\\partial B}\\right)_S=-\\frac{4.0}{0.80}(-0.030)\\,\\mathrm{K\\,T^{-1}}=0.15\\,\\mathrm{K\\,T^{-1}}.\\] For the stated small field change, \\[dT=(0.15\\,\\mathrm{K\\,T^{-1}})(-0.50\\,\\mathrm T)=-0.075\\,\\mathrm K.\\] **Final result:** the adiabatic field reduction cools the sample by approximately \\(0.075\\,\\mathrm K\\).",
    },
    {
      title: "Heat flow during isothermal magnetization",
      question: "A paramagnet has \\((\\partial m/\\partial T)_B\\lt 0\\). Determine the direction of reversible heat flow when its applied field is increased isothermally.",
      answer: "For magnetization, \\(dB\\gt 0\\). Equation \\([6]\\) then gives \\(\\delta Q_{\\mathrm{rev}}\\lt 0\\) because \\(T\\gt 0\\) and \\((\\partial m/\\partial T)_B\\lt 0\\). Heat into the sample is defined as positive, so a negative value means that the thermal reservoir receives heat as the moments become more ordered. **Final result:** isothermal magnetization releases heat from the paramagnet to its surroundings.",
    },
  ]}
/>
`;
