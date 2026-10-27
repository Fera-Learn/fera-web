export const content = String.raw`## Principle

A single-component phase diagram maps the equilibrium phase of one chemically independent substance. On a pressure-temperature diagram, each open region contains one stable phase, while a boundary contains two coexisting phases. The stable phase at fixed pressure and temperature is the one with the lowest molar Gibbs free energy, which is the molar chemical potential.

## Notation

<Notation
  items={[
    { symbol: "p,T", meaning: "pressure and absolute temperature", unit: "Pa, K" },
    { symbol: "C,P,F", meaning: "numbers of components, coexisting phases, and independent intensive variables", unit: "1" },
    { symbol: "\\mu_m", meaning: "molar chemical potential of a phase", unit: "J mol^{-1}" },
    { symbol: "V_m", meaning: "molar volume", unit: "m^{3} mol^{-1}" },
  ]}
/>

## The Core Method

For a non-reacting system, the Gibbs phase rule gives the number of independent intensive variables:

\\[
F=C-P+2.
\tag*{[1]}
\\]

For one component, \\(C=1\\), so a single-phase region has \\(F=2\\): pressure and temperature may be varied independently without changing the number of phases. A two-phase boundary has \\(F=1\\), so choosing its temperature fixes its equilibrium pressure. A triple point has \\(F=0\\), making its pressure and temperature fixed properties of the substance.

At specified \\(p\\) and \\(T\\), compare the candidate phases through

\\[
\mu_{m,\mathrm{stable}}(p,T)
=\min\!\left\{\mu_{m,1}(p,T),\mu_{m,2}(p,T),\ldots\right\}.
\tag*{[2]}
\\]

Crossing a boundary changes which chemical potential is smallest. A pressure-volume diagram gives complementary information: a two-phase interval can occupy a range of total volumes because changing the phase amounts changes the mean molar volume, even though the coexistence pressure is fixed at a given temperature.

<PhysicsExamples collapsible
  items={[
    {
      title: "Degrees of freedom on a phase diagram",
      question: "Apply the phase rule to a pure substance in a single phase, on a liquid-vapour boundary, and at a solid-liquid-vapour triple point.",
      answer: "The substance has one component, so set \\(C=1\\) in equation \\([1]\\). In one phase, \\(P=1\\) and \\(F=1-1+2=2\\). On a two-phase boundary, \\(P=2\\) and \\(F=1\\). At the triple point, \\(P=3\\) and \\(F=0\\). These values match the geometry: an area, a curve, and a point, respectively. **Final result:** the three cases have \\(F=2\\), \\(F=1\\), and \\(F=0\\).",
    },
    {
      title: "Following an isobaric heating path",
      question: "A constant-pressure path begins in a solid region, crosses the solid-liquid boundary, and later crosses the liquid-vapour boundary. Interpret the path.",
      answer: "Inside each region, equation \\([2]\\) identifies a unique lowest chemical potential. At the first crossing, solid and liquid chemical potentials are equal and melting can occur. The liquid is stable between the crossings. At the second crossing, liquid and vapour chemical potentials are equal and boiling can occur. **Final result:** the equilibrium sequence is solid, solid-liquid coexistence, liquid, liquid-vapour coexistence, then vapour.",
    },
  ]}
/>
`;
