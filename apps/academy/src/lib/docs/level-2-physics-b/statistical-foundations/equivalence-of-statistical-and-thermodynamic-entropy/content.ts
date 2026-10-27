export const content = String.raw`## Principle

Statistical entropy and thermodynamic entropy describe the same equilibrium state function when the statistical model uses the correct accessible microstates and the thermodynamic limit applies. Ideal-gas expansion provides a direct comparison because enlarging the container multiplies the positional state count.

## Notation

<Notation
  items={[
    { symbol: "S,\\Delta S", meaning: "entropy and finite entropy change", unit: "J K^{-1}, J K^{-1}" },
    { symbol: "\\Delta S_{\\mathrm{stat}},\\Delta S_{\\mathrm{therm}}", meaning: "statistical and thermodynamic entropy changes", unit: "J K^{-1}, J K^{-1}" },
    { symbol: "\\Omega_i,\\Omega_f", meaning: "initial and final accessible microstate counts", unit: "1, 1" },
    { symbol: "V_i,V_f", meaning: "initial and final gas volumes", unit: "m^{3}, m^{3}" },
    { symbol: "N,n", meaning: "particle number and amount of gas", unit: "1, mol" },
    { symbol: "N_{\\mathrm A}", meaning: "Avogadro constant", unit: "mol^{-1}" },
    { symbol: "k_{\\mathrm B},R", meaning: "Boltzmann and molar gas constants", unit: "J K^{-1}, J mol^{-1} K^{-1}" },
    { symbol: "T,p", meaning: "absolute temperature and pressure", unit: "K, Pa" },
    { symbol: "Q,W", meaning: "heat into the gas and work done by the gas", unit: "J, J" },
    { symbol: "\\delta Q_{\\mathrm{rev}}", meaning: "inexact reversible heat transfer into the gas", unit: "J" },
  ]}
/>

## The Core Method

Consider equilibrium endpoints of a dilute classical ideal gas with fixed \\(N\\) and energy. If each particle's accessible positional states scale with volume, changing \\(V_i\\) to \\(V_f\\) changes the multiplicity ratio by

\\[
\frac{\Omega_f}{\Omega_i}=\left(\frac{V_f}{V_i}\right)^N.
\tag*{[1]}
\\]

Boltzmann entropy then gives

\\[
\Delta S_{\mathrm{stat}}
=k_{\mathrm B}\ln\frac{\Omega_f}{\Omega_i}
=Nk_{\mathrm B}\ln\frac{V_f}{V_i}.
\tag*{[2]}
\\]

Thermodynamic entropy depends only on the endpoints, so evaluate it along a reversible isothermal path between the same states. With \\(pV=nRT\\),

\\[
\Delta S_{\mathrm{therm}}
=\int_i^f\frac{\delta Q_{\mathrm{rev}}}{T}
=\int_{V_i}^{V_f}\frac{p\,dV}{T}
=nR\int_{V_i}^{V_f}\frac{dV}{V}
=nR\ln\frac{V_f}{V_i}.
\tag*{[3]}
\\]

Using \\(N=nN_{\mathrm A}\\) and \\(R=N_{\mathrm A}k_{\mathrm B}\\),

\\[
Nk_{\mathrm B}=nN_{\mathrm A}k_{\mathrm B}=nR,
\qquad
\Delta S_{\mathrm{stat}}=\Delta S_{\mathrm{therm}}.
\tag*{[4]}
\\]

The reversible path in equation [3] is a calculation device; a free expansion itself is irreversible and has \\(Q=W=0\\). The equivalence concerns equilibrium endpoint entropies and assumes the statistical counting represents the same macroscopic constraints.

<PhysicsExamples collapsible
  items={[
    {
      title: "Double the volume of one mole",
      question: "One mole of ideal gas freely expands from \\(V_i\\) to \\(2V_i\\) in an insulated container. Find the entropy change by both descriptions.",
      answer: "For a free expansion of an ideal gas, internal energy and temperature are unchanged, but entropy increases. Equation \\([2]\\) with \\(N=N_{\\mathrm A}\\) gives \\[\\Delta S=N_{\\mathrm A}k_{\\mathrm B}\\ln2=R\\ln2.\\] Equation \\([3]\\), evaluated on a reversible isothermal comparison path, independently gives \\(\\Delta S=nR\\ln2=R\\ln2\\). With \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\), \\[\\Delta S=8.314\\ln2=5.76\\,\\mathrm{J\\,K^{-1}}.\\] **Final result:** both descriptions give \\(\\Delta S=R\\ln2=5.76\\,\\mathrm{J\\,K^{-1}}\\).",
    },
    {
      title: "Identify what equivalence does not claim",
      question: "Does using a reversible comparison path imply that a free expansion is reversible or exchanges heat?",
      answer: "No. Entropy is a state function, so equation \\([3]\\) may use any reversible path connecting the same equilibrium endpoints. The actual insulated free expansion has \\(Q=0\\) and is irreversible; its entropy generation equals the positive system entropy change. Equation \\([4]\\) compares endpoint values, not process mechanisms. **Final result:** statistical and thermodynamic endpoint entropies agree without making the actual free expansion reversible.",
    },
  ]}
/>
`;
