export const content = String.raw`## Principle

Soft matter comprises materials whose structure and response are strongly affected by thermal fluctuations, weak interactions, deformation, and long relaxation times. Polymers, liquid crystals, colloidal assemblies, gels, and glasses can therefore reorganise under modest changes of temperature, stress, concentration, or field.

## Notation

<Notation
  items={[
    { symbol: "k_{\\mathrm B},T,E_{\\mathrm T}", meaning: "Boltzmann constant, absolute temperature, and thermal energy scale", unit: "J K^{-1}, K, J" },
    { symbol: "\\epsilon,\\chi", meaning: "characteristic interaction energy and its ratio to thermal energy", unit: "J, 1" },
    { symbol: "\\eta,G,\\tau", meaning: "viscosity, shear modulus, and mechanical relaxation time", unit: "Pa s, Pa, s" },
  ]}
/>

## The Core Method

The first diagnostic is an energy-scale comparison. At temperature \\(T\\), thermal fluctuations have characteristic energy

\\[
E_{\mathrm T}=k_{\mathrm B}T.
\tag*{[1]}
\\]

Compare a structural or interaction energy \\(\epsilon\\) with this scale using

\\[
\chi=\frac{\epsilon}{k_{\mathrm B}T}.
\tag*{[2]}
\\]

When \\(\chi\\) is of order one, thermal motion competes strongly with the interaction, so modest environmental changes can reorganise the material. When \\(\chi\\) is much larger than one, that interaction is comparatively resistant to thermal disruption. This comparison is a guide, not a complete phase-transition criterion, because collective behaviour also depends on geometry, concentration, and competing interactions.

The second diagnostic is the form of order and motion.

- **Polymers** are long molecular chains. Their many conformations create entropic elasticity, entanglement, and relaxation over a wide range of times.
- **Liquid crystals** flow like liquids while retaining orientational order, and sometimes partial positional order. They are neither ordinary isotropic liquids nor fully periodic crystals.
- **Colloids and gels** contain mesoscopic particles or networks dispersed in a medium. Brownian motion, surface forces, and network connectivity control their response.
- **Glasses** are structurally disordered solids formed when rearrangement becomes extremely slow. A glass is not simply a crystal with defects, and its arrest depends on preparation and observation time.

The third diagnostic is timescale. A simple viscoelastic estimate compares viscous and elastic response through the Maxwell relaxation time,

\\[
\tau=\frac{\eta}{G}.
\tag*{[3]}
\\]

On times much shorter than \\(\tau\\), the material can appear elastic because its structure has insufficient time to rearrange. On times much longer than \\(\tau\\), viscous flow can dominate. Soft does not always mean mechanically weak; it means that accessible energies and timescales permit substantial collective rearrangement.

Pierre-Gilles de Gennes helped unify polymer and liquid-crystal physics through scaling and statistical ideas, work recognised by the 1991 Nobel Prize in Physics. The shared method is to identify relevant energy, length, and time scales rather than treating each complex material as unrelated.

<PhysicsExamples collapsible
  items={[
    {
      title: "Thermal competition with a weak interaction",
      question: "At \\(T=300\\,\\mathrm K\\), compare an interaction energy \\(\\epsilon=6.0\\times10^{-21}\\,\\mathrm J\\) with thermal motion. Use \\(k_{\\mathrm B}=1.38\\times10^{-23}\\,\\mathrm{J\\,K^{-1}}\\).",
      answer: "Equation \\([1]\\) gives \\[E_{\\mathrm T}=k_{\\mathrm B}T=(1.38\\times10^{-23})(300)=4.14\\times10^{-21}\\,\\mathrm J.\\] Equation \\([2]\\) then gives \\[\\chi=\\frac{6.0\\times10^{-21}}{4.14\\times10^{-21}}=1.45.\\] Because the interaction and thermal scales are comparable, thermal fluctuations can substantially alter the associated structure. **Final result:** \\(E_{\\mathrm T}=4.14\\times10^{-21}\\,\\mathrm J\\) and \\(\\chi=1.45\\), so thermal competition is important.",
    },
    {
      title: "Observation time and apparent solidity",
      question: "A viscoelastic material has \\(\\eta=2.0\\times10^8\\,\\mathrm{Pa\\,s}\\) and \\(G=1.0\\times10^6\\,\\mathrm{Pa}\\). Should a \\(1\\,\\mathrm s\\) test or a \\(1000\\,\\mathrm s\\) test look more solid-like?",
      answer: "Equation \\([3]\\) gives \\[\\tau=\\frac{2.0\\times10^8}{1.0\\times10^6}\\,\\mathrm s=200\\,\\mathrm s.\\] The \\(1\\,\\mathrm s\\) test is much shorter than \\(\\tau\\), so elastic response dominates. The \\(1000\\,\\mathrm s\\) test is longer than \\(\\tau\\), allowing substantial structural relaxation and flow. **Final result:** the \\(1\\,\\mathrm s\\) test looks more solid-like, while the \\(1000\\,\\mathrm s\\) test looks more fluid-like.",
    },
  ]}
/>
`;
