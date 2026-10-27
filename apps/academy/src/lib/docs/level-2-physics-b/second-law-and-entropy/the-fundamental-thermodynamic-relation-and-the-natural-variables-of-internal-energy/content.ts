export const content = String.raw`## Principle

For a simple compressible closed system of fixed composition, internal energy has entropy and volume as its natural variables. Combining the first and second laws yields the fundamental thermodynamic relation, which is a relation between neighbouring equilibrium states and remains valid even when the actual path between them is irreversible.

## Notation

<Notation
  items={[
    { symbol: "U,S,V", meaning: "internal energy, entropy, and total volume", unit: "J, J K^{-1}, m^{3}" },
    { symbol: "T,p", meaning: "absolute temperature and equilibrium system pressure", unit: "K, Pa" },
    { symbol: "\\delta Q_{\\mathrm{rev}}", meaning: "reversible heat transferred into the system", unit: "J" },
    { symbol: "\\delta W_{\\mathrm{rev}}", meaning: "reversible work done by the system", unit: "J" },
    { symbol: "p_{\\mathrm{ext}}", meaning: "external pressure opposing a volume change", unit: "Pa" },
    { symbol: "dU,dS,dV", meaning: "exact infinitesimal changes in internal energy, entropy, and volume", unit: "J, J K^{-1}, m^{3}" },
    { symbol: "a", meaning: "positive constant in the worked energy model U=aS^2/V", unit: "m^{3} K^{2} J^{-1}" },
  ]}
/>

## The Core Method

Use the Academy sign convention: heat into the system is positive and work done by the system is positive. The first law is

\\[
dU=\delta Q-\delta W.
\tag*{[1]}
\\]

Choose a reversible path between neighbouring equilibrium states. Reversible heat and pressure-volume work are

\\[
\delta Q_{\mathrm{rev}}=T\,dS,
\qquad
\delta W_{\mathrm{rev}}=p\,dV.
\tag*{[2]}
\\]

Substitution of equation \\([2]\\) into equation \\([1]\\) gives

\\[
dU=T\,dS-p\,dV.
\tag*{[3]}
\\]

The derivation uses a reversible comparison path, but equation \\([3]\\) relates state variables and therefore applies between neighbouring equilibrium states independently of the actual path. It does **not** say that actual irreversible transfers satisfy \\(\delta Q=T\,dS\\) or \\(\delta W=p\,dV\\). For an irreversible boundary displacement, for example, \\(\delta W=p_{\mathrm{ext}}\,dV\\), and entropy generation must be included.

Because \\(U=U(S,V)\\) at fixed composition, its total differential is

\\[
dU=\left(\frac{\partial U}{\partial S}\right)_VdS
+\left(\frac{\partial U}{\partial V}\right)_SdV.
\tag*{[4]}
\\]

Comparing coefficients in equations \\([3]\\) and \\([4]\\) yields

\\[
T=\left(\frac{\partial U}{\partial S}\right)_V,
\qquad
-p=\left(\frac{\partial U}{\partial V}\right)_S.
\tag*{[5]}
\\]

Thus temperature is the rate at which internal energy changes with entropy at fixed volume, while pressure is minus the rate at which internal energy changes with volume at fixed entropy.

<PhysicsExamples collapsible
  items={[
    {
      title: "Read properties from an energy function",
      question: "A model system has \\(U(S,V)=aS^2/V\\), where \\(a\\) is a positive constant. Derive its temperature and pressure in terms of \\(S\\) and \\(V\\).",
      answer: "Apply the first identity in equation \\([5]\\) at fixed \\(V\\): \\[T=\\left(\\frac{\\partial}{\\partial S}\\frac{aS^2}{V}\\right)_V=\\frac{2aS}{V}.\\] Apply the second identity at fixed \\(S\\): \\[-p=\\left(\\frac{\\partial}{\\partial V}\\frac{aS^2}{V}\\right)_S=-\\frac{aS^2}{V^2},\\] so \\(p=aS^2/V^2\\). Substitution into equation \\([3]\\) reproduces the direct differential of \\(U\\), which checks both signs. **Final result:** \\(T=2aS/V\\) and \\(p=aS^2/V^2\\).",
    },
    {
      title: "Evaluate a neighbouring equilibrium change",
      question: "At a state where \\(T=350\\,\\mathrm{K}\\) and \\(p=2.0\\times10^5\\,\\mathrm{Pa}\\), a neighbouring equilibrium state has \\(dS=0.40\\,\\mathrm{J\\,K^{-1}}\\) and \\(dV=3.0\\times10^{-4}\\,\\mathrm{m^3}\\). Find \\(dU\\).",
      answer: "Equation \\([3]\\) gives \\[dU=T\\,dS-p\\,dV=(350)(0.40)\\,\\mathrm{J}-(2.0\\times10^5)(3.0\\times10^{-4})\\,\\mathrm{J}.\\] Therefore \\[dU=140\\,\\mathrm{J}-60\\,\\mathrm{J}=80\\,\\mathrm{J}.\\] The pressure-volume term is negative for expansion because the system's internal energy supplies work. **Final result:** \\(dU=80\\,\\mathrm{J}\\).",
    },
  ]}
/>
`;
