export const content = String.raw`## Principle

A free-energy criterion is a compact form of the second law for specified environmental constraints. Helmholtz energy applies at fixed temperature and volume; Gibbs energy applies at fixed temperature and pressure. A negative change predicts an allowed spontaneous direction, not a reaction rate.

## Notation

<Notation
  items={[
    { symbol: "F,G,U,H,S", meaning: "Helmholtz energy, Gibbs energy, internal energy, enthalpy, and system entropy", unit: "J, J, J, J, J K^{-1}" },
    { symbol: "T,T_0,p,V", meaning: "system temperature, reservoir temperature, pressure, and total volume", unit: "K, K, Pa, m^{3}" },
    { symbol: "\\Delta S,\\Delta S_{\\mathrm{surr}},\\Delta S_{\\mathrm{univ}}", meaning: "entropy changes of the system, surroundings, and system plus surroundings", unit: "J K^{-1}, J K^{-1}, J K^{-1}" },
    { symbol: "\\Delta U,\\Delta F,Q", meaning: "finite internal-energy change, finite Helmholtz-energy change, and heat transferred into the system", unit: "J, J, J" },
    { symbol: "\\Delta G_m,\\Delta H_m,\\Delta S_m", meaning: "molar Gibbs, enthalpy, and entropy changes", unit: "J mol^{-1}, J mol^{-1}, J mol^{-1} K^{-1}" },
  ]}
/>

## The Core Method

The slopes of Gibbs free energy carry direct physical meaning: at fixed pressure the temperature slope is minus entropy, while at fixed temperature the pressure slope is volume.

<PhysicsDiagram slug="gibbs-free-energy-slopes" />

The second law for system plus surroundings is

\\[
\Delta S_{\mathrm{univ}}=\Delta S+\Delta S_{\mathrm{surr}}\ge0,
\qquad
\Delta S_{\mathrm{surr}}=-\frac{Q}{T_0}.
\tag*{[1]}
\\]

For a closed system at fixed \\(T_0,V\\), with no work mode available, the first law gives \\(Q=\Delta U\\). Therefore

\\[
\Delta S_{\mathrm{univ}}
=\Delta S-\frac{\Delta U}{T_0}
=-\frac{\Delta F}{T_0}
\ge0
\quad\Longrightarrow\quad
\Delta F\le0.
\tag*{[2]}
\\]

For a closed system at fixed \\(T_0,p\\), with only pressure-volume work, \\(Q_p=\Delta H\\). Hence

\\[
\Delta S_{\mathrm{univ}}
=\Delta S-\frac{\Delta H}{T_0}
=-\frac{\Delta G}{T_0}
\ge0
\quad\Longrightarrow\quad
\Delta G\le0.
\tag*{[3]}
\\]

The direction test under the appropriate constraints is

\\[
dF<0\ \text{or}\ dG<0:\ \text{spontaneous step},\qquad
dF=0\ \text{or}\ dG=0:\ \text{stationary equilibrium}.
\tag*{[4]}
\\]

A positive free-energy change means the proposed direction requires external driving. The criterion says nothing about how quickly a permitted change occurs; kinetic barriers can make a thermodynamically favourable process extremely slow.

<PhysicsExamples collapsible
  items={[
    {
      title: "Balance enthalpy and entropy",
      question: "At \\(350\\,\\mathrm{K}\\), a constant-pressure process has \\(\\Delta H_m=12.0\\,\\mathrm{kJ\\,mol^{-1}}\\) and \\(\\Delta S_m=50.0\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\). Test spontaneity.",
      answer: "Use the Gibbs criterion in equation \\([3]\\). Convert \\(\\Delta S_m\\) to \\(0.0500\\,\\mathrm{kJ\\,mol^{-1}\\,K^{-1}}\\): \\[\\Delta G_m=\\Delta H_m-T\\Delta S_m=12.0-(350)(0.0500)=-5.50\\,\\mathrm{kJ\\,mol^{-1}}.\\] Although the process is endothermic, the entropy term is larger at this temperature. **Final result:** \\(\\Delta G_m=-5.50\\,\\mathrm{kJ\\,mol^{-1}}\\), so the process is spontaneous at fixed \\(T,p\\).",
    },
    {
      title: "Do not confuse spontaneity with speed",
      question: "A process at fixed \\(T,p\\) has \\(\\Delta G=-40\\,\\mathrm{kJ}\\) but is not observed over an hour. Does this contradict thermodynamics?",
      answer: "No. Equation \\([4]\\) identifies the favoured direction because \\(\\Delta G\\lt 0\\), but it contains no time or rate. A large activation barrier can suppress the observed rate even though the final state has lower Gibbs energy. **Final result:** the process is thermodynamically spontaneous but may be kinetically inhibited.",
    },
  ]}
/>
`;
