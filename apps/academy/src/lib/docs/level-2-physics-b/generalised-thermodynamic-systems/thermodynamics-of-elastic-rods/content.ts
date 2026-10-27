export const content = String.raw`## Principle

An elastic rod couples thermal and mechanical behavior. Its tension-length work term makes a Maxwell relation connect entropy changes during stretching to two measurable material properties: isothermal Young's modulus and linear expansivity.

## Notation

<Notation
  items={[
    { symbol: "U,F,S,\\Delta S,T", meaning: "internal energy, Helmholtz energy, entropy, entropy change, and absolute temperature", unit: "J, J, J K^{-1}, J K^{-1}, K" },
    { symbol: "f,L,A", meaning: "tension, rod length, and cross-sectional area", unit: "N, m, m^{2}" },
    { symbol: "E_T", meaning: "isothermal Young's modulus", unit: "Pa" },
    { symbol: "\\alpha_L", meaning: "linear expansivity at constant tension", unit: "K^{-1}" },
    { symbol: "Q_{\\mathrm{rev}}", meaning: "reversible heat transferred into the rod", unit: "J" },
    { symbol: "L_1,L_2,\\Delta L", meaning: "initial length, final length, and length change L_2-L_1", unit: "m, m, m" },
  ]}
/>

## The Core Method

An elastic rod replaces pressure and volume by a tension-length work pair. The force direction and length change set the sign of the mechanical energy transfer.

<PhysicsDiagram slug="elastic-rod-generalised-work" />

Treat the rod as a closed system with negligible volume and surface-work changes. Positive tension does work on the rod when its length increases, so its reversible fundamental relation is

\\[
dU=T\,dS+f\,dL.
\tag*{[1]}
\\]

Define \\(F=U-TS\\) and differentiate every term:

\\[
dF=dU-T\,dS-S\,dT=-S\,dT+f\,dL.
\tag*{[2]}
\\]

Thus \\(F=F(T,L)\\), and comparison with the total differential gives

\\[
S=-\left(\frac{\partial F}{\partial T}\right)_L,
\qquad
f=\left(\frac{\partial F}{\partial L}\right)_T.
\tag*{[3]}
\\]

Differentiate the first relation with respect to \\(L\\), the second with respect to \\(T\\), and use equality of mixed derivatives:

\\[
\left(\frac{\partial S}{\partial L}\right)_T
=-\left(\frac{\partial f}{\partial T}\right)_L.
\tag*{[4]}
\\]

The measurable response functions are defined locally by

\\[
E_T=\frac{L}{A}\left(\frac{\partial f}{\partial L}\right)_T,
\qquad
\alpha_L=\frac{1}{L}\left(\frac{\partial L}{\partial T}\right)_f.
\tag*{[5]}
\\]

Use the cyclic derivative identity at fixed state to change the inaccessible derivative:

\\[
\left(\frac{\partial f}{\partial T}\right)_L
=-\left(\frac{\partial f}{\partial L}\right)_T
\left(\frac{\partial L}{\partial T}\right)_f
=-A E_T\alpha_L.
\tag*{[6]}
\\]

Substituting equation [6] into [4] yields

\\[
\left(\frac{\partial S}{\partial L}\right)_T=A E_T\alpha_L.
\tag*{[7]}
\\]

For a reversible isothermal extension over which \\(A\\), \\(E_T\\), and \\(\alpha_L\\) may be treated as constant,

\\[
Q_{\mathrm{rev}}=T\Delta S
=T A E_T\alpha_L(L_2-L_1).
\tag*{[8]}
\\]

Most solids have \\(\alpha_L>0\\), so isothermal stretching raises entropy and requires heat input. Rubber can have a negative effective expansivity in the relevant regime, reversing that conclusion; the sign must not be assumed without material information.

<PhysicsExamples collapsible
  items={[
    {
      title: "Heat absorbed during isothermal stretching",
      question: "A rod at \\(300\\,\\mathrm K\\) has area \\(2.0\\times10^{-6}\\,\\mathrm{m^2}\\), \\(E_T=2.0\\times10^{11}\\,\\mathrm{Pa}\\), and \\(\\alpha_L=1.2\\times10^{-5}\\,\\mathrm{K^{-1}}\\). Find the reversible heat for an isothermal extension of \\(0.50\\,\\mathrm{mm}\\), treating the properties as constant.",
      answer: "Equation \\([8]\\) applies because the extension is reversible and isothermal. First calculate the entropy change: \\[\\Delta S=A E_T\\alpha_L\\Delta L=(2.0\\times10^{-6})(2.0\\times10^{11})(1.2\\times10^{-5})(5.0\\times10^{-4})\\,\\mathrm{J\\,K^{-1}}=2.4\\times10^{-3}\\,\\mathrm{J\\,K^{-1}}.\\] Then \\[Q_{\\mathrm{rev}}=T\\Delta S=(300)(2.4\\times10^{-3})\\,\\mathrm J=0.72\\,\\mathrm J.\\] The positive sign denotes heat entering the rod. **Final result:** the rod absorbs \\(0.72\\,\\mathrm J\\) during the extension.",
    },
    {
      title: "A material with negative expansivity",
      question: "A rubber-like material has positive \\(E_T\\) and negative \\(\\alpha_L\\). What happens to its entropy and reversible heat when it is stretched isothermally?",
      answer: "Equation \\([7]\\) has the sign of \\(\\alpha_L\\) because \\(A\\gt 0\\) and a stable rod has \\(E_T\\gt 0\\). Therefore \\((\\partial S/\\partial L)_T\\lt 0\\): increasing length lowers entropy. For a reversible isothermal extension, equation \\([8]\\) then gives \\(Q_{\\mathrm{rev}}\\lt 0\\), meaning heat leaves the rod. **Final result:** isothermal stretching decreases the material's entropy and releases heat when \\(\\alpha_L\\lt 0\\).",
    },
  ]}
/>
`;
