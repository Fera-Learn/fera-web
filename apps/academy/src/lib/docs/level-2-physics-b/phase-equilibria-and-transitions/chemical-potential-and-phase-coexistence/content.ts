export const content = String.raw`## Principle

For a pure substance, the molar chemical potential is its molar Gibbs free energy. Matter transfers between phases at fixed temperature and pressure until their molar chemical potentials are equal. The transfer redistributes a conserved total amount; it does not create matter and does not require the two phase amounts to be equal.

## Notation

<Notation
  items={[
    { symbol: "G,\\Delta G", meaning: "total Gibbs free energy and its finite change", unit: "J, J" },
    { symbol: "p,T", meaning: "pressure and absolute temperature", unit: "Pa, K" },
    { symbol: "n_\\alpha,n_\\beta,n_{\\mathrm{tot}}", meaning: "amounts in phases alpha and beta, and conserved total amount", unit: "mol, mol, mol" },
    { symbol: "\\mu_{m,\\alpha},\\mu_{m,\\beta}", meaning: "molar chemical potentials of phases alpha and beta", unit: "J mol^{-1}, J mol^{-1}" },
    { symbol: "dn_\\beta", meaning: "infinitesimal amount transferred from alpha to beta", unit: "mol" },
  ]}
/>

## The Core Method

For two homogeneous phases of one component at common \\(p\\) and \\(T\\), extensivity gives

\\[
G=n_\alpha\mu_{m,\alpha}+n_\beta\mu_{m,\beta}.
\tag*{[1]}
\\]

The closed system conserves its amount during a phase change:

\\[
n_{\mathrm{tot}}=n_\alpha+n_\beta=\mathrm{constant},
\qquad dn_\alpha=-dn_\beta.
\tag*{[2]}
\\]

At fixed pressure and temperature, transfer of \\(dn_\beta\\) from \\(\alpha\\) to \\(\beta\\) changes the Gibbs free energy by

\\[
dG=\mu_{m,\alpha}dn_\alpha+\mu_{m,\beta}dn_\beta
=\left(\mu_{m,\beta}-\mu_{m,\alpha}\right)dn_\beta.
\tag*{[3]}
\\]

Spontaneous change at fixed \\(T\\) and \\(p\\) requires \\(dG<0\\). Matter therefore moves toward the phase with lower molar chemical potential. Equilibrium against either transfer direction requires

\\[
\mu_{m,\alpha}=\mu_{m,\beta}.
\tag*{[4]}
\\]

Equation [4] fixes coexistence, while equation [2] fixes how the available matter is divided. Equality of chemical potentials does not require equal phase amounts.

<PhysicsExamples collapsible
  items={[
    {
      title: "Direction of phase conversion",
      question: "At fixed pressure and temperature, \\(\\mu_{m,\\alpha}=12.0\\,\\mathrm{kJ\\,mol^{-1}}\\) and \\(\\mu_{m,\\beta}=11.7\\,\\mathrm{kJ\\,mol^{-1}}\\). Find the Gibbs change when \\(0.20\\,\\mathrm{mol}\\) converts from alpha to beta.",
      answer: "Use equation \\([3]\\) with \\(dn_\\beta=+0.20\\,\\mathrm{mol}\\): \\[\\Delta G=(11.7-12.0)\\,\\mathrm{kJ\\,mol^{-1}}(0.20\\,\\mathrm{mol})=-0.060\\,\\mathrm{kJ}=-60\\,\\mathrm J.\\] The negative change confirms conversion toward beta. Equation \\([2]\\) simultaneously decreases \\(n_\\alpha\\) by \\(0.20\\,\\mathrm{mol}\\). **Final result:** \\(\\Delta G=-60\\,\\mathrm J\\), so phase beta grows spontaneously.",
    },
    {
      title: "Unequal amounts at coexistence",
      question: "A closed system contains \\(3.0\\,\\mathrm{mol}\\) in phase alpha and \\(1.0\\,\\mathrm{mol}\\) in phase beta at coexistence. Is this compatible with equilibrium?",
      answer: "Yes. Equation \\([4]\\) requires equal molar chemical potentials, not equal phase amounts. Equation \\([2]\\) only requires \\(n_{\\mathrm{tot}}=3.0+1.0=4.0\\,\\mathrm{mol}\\). The amounts can depend on the conserved total energy or volume while the phases share equilibrium pressure and temperature. **Final result:** the unequal \\(3{:}1\\) phase split is compatible with equilibrium provided \\(\\mu_{m,\\alpha}=\\mu_{m,\\beta}\\).",
    },
  ]}
/>
`;
