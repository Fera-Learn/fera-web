export const content = String.raw`## Principle

Condensed matter physics developed through a two-way exchange between fundamental theory and technology. Quantum mechanics made the electronic properties of solids intelligible, semiconductor devices turned that understanding into controllable circuits, and decades of fabrication improvements produced an empirical growth trend commonly called Moore's law.

## Notation

<Notation
  items={[
    { symbol: "E_{\\mathrm C},E_{\\mathrm V},E_{\\mathrm g}", meaning: "conduction-band edge, valence-band edge, and band gap", unit: "J, J, J" },
    { symbol: "\\sigma,e,n,p,\\mu_{\\mathrm e},\\mu_{\\mathrm h}", meaning: "conductivity, elementary charge, electron and hole number densities, and electron and hole mobilities", unit: "S m^{-1}, C, m^{-3}, m^{-3}, m^{2} V^{-1} s^{-1}, m^{2} V^{-1} s^{-1}" },
    { symbol: "N(t),N_0,g", meaning: "transistor count at time t, reference transistor count, and number of elapsed doublings" },
    { symbol: "t,t_0,\\tau", meaning: "time, reference time, and assumed count-doubling time", unit: "year, year, year" },
  ]}
/>

## The Core Method

Nineteenth-century electromagnetism, thermodynamics, and statistical physics supplied macroscopic laws. Helium was first liquefied in 1908 at temperatures near \\(4\,\mathrm K\\), opening experimental access to low-temperature phases. From the 1920s, quantum mechanics changed the explanation of solids by making atomic states, bonding, bands, and quantum statistics central. Solids then became both tests of many-particle theory and platforms for electronics, cryogenics, and new materials. By the 1950s, quantum many-body and field-theoretic methods were increasingly used to describe collective excitations and ordered states.

In a semiconductor, the band gap is

\\[
E_{\mathrm g}=E_{\mathrm C}-E_{\mathrm V}.
\tag*{[1]}
\\]

Thermal excitation, light, and deliberately introduced dopants can change the densities of mobile electrons and holes. In a simple two-carrier model, their conductivity contributions add:

\\[
\sigma=e\left(n\mu_{\mathrm e}+p\mu_{\mathrm h}\right).
\tag*{[2]}
\\]

This controllability makes semiconductor junctions and transistors possible. Bell Laboratories demonstrated the first working point-contact transistor in 1947. The device established that a solid-state component could control and amplify electrical signals, but modern integrated transistors arose through many later materials, device, lithography, and manufacturing advances.

Moore's law is an empirical technology trend, not a fundamental law of nature. A common modern shorthand models transistor count with an approximately constant doubling time:

\\[
N(t)=N_0\,2^{(t-t_0)/\tau}.
\tag*{[3]}
\\]

The number of elapsed doublings is

\\[
g=\frac{t-t_0}{\tau},
\qquad
\frac{N(t)}{N_0}=2^g.
\tag*{[4]}
\\]

Gordon Moore's 1965 observation initially concerned annual growth in the number of components on economical integrated circuits; a 1975 revision anticipated a slower rate. The widely quoted approximation of one transistor-count doubling about every two years described long periods of industry development, including the strong 1971-2016 growth seen in historical processor data, but individual products scatter around any fitted line. Counts also depend on chip type and design. The trend does not guarantee equal doubling of clock speed, performance, or energy efficiency, and continued scaling faces physical and economic constraints.

Representative processor counts illustrate scale rather than prove a universal rate: a quad-core Core i7 generation contained about \\(7.31\times10^8\\) transistors at a nominal \\(45\,\mathrm{nm}\\) process, while a 2011 ten-core Xeon contained about \\(2.6\times10^9\\). Comparing unlike chips without accounting for function and architecture can therefore misstate the trend.

<PhysicsExamples collapsible
  items={[
    {
      title: "What a two-year doubling model predicts",
      question: "If transistor count followed equation \\([3]\\) exactly from \\(t_0=1971\\) to \\(t=2011\\) with \\(\\tau=2.0\\,\\mathrm{year}\\), by what factor would it increase?",
      answer: "First use equation \\([4]\\) to count the doublings: \\[g=\\frac{2011-1971}{2.0}=20.\\] The predicted ratio is then \\[\\frac{N(2011)}{N_0}=2^{20}=1\\,048\\,576\\simeq1.05\\times10^6.\\] This is the output of the assumed exponential model, not a claim that every chip family achieved exactly that factor. **Final result:** twenty ideal doublings predict a transistor-count increase by approximately \\(1.05\\times10^6\\).",
    },
    {
      title: "Separating a physical model from an industry trend",
      question: "Classify these two claims: (i) electron and hole conductivity contributions add as in equation \\([2]\\); (ii) every processor must double its transistor count exactly every two years.",
      answer: "Claim (i) is a physical transport model under stated assumptions: independent carrier contributions, defined densities, and mobilities. More detailed material behaviour can require a refined model. Claim (ii) incorrectly turns an approximate historical regularity into a compulsory law; product type, economics, fabrication limits, and design choices can all change the observed rate. **Final result:** equation \\([2]\\) is a conditional semiconductor model, whereas exact biennial transistor doubling is not a physical requirement and should be treated only as an approximate empirical trend.",
    },
  ]}
/>
`;
