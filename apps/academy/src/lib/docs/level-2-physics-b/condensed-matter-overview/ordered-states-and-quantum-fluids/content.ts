export const content = String.raw`## Principle

An ordered state has a collective pattern that is absent in a more symmetric state. Crystals order particle positions, magnets order magnetic moments, and quantum fluids develop a coherent many-particle state that supports distinctive macroscopic flow. These forms of order must be distinguished by what is ordered and by the response they produce.

## Notation

<Notation
  items={[
    { symbol: "\\vec M,V,\\vec\\mu_j", meaning: "magnetisation, sample volume, and magnetic moment j", unit: "A m^{-1}, m^{3}, A m^{2}" },
    { symbol: "\\rho_{\\mathrm e},T,T_{\\mathrm c}", meaning: "electrical resistivity, temperature, and critical temperature", unit: "\\Omega m, K, K" },
    { symbol: "\\Psi,\\phi,i", meaning: "complex macroscopic order parameter, its phase, and the imaginary unit" },
    { symbol: "\\vec v_{\\mathrm s},\\Gamma", meaning: "superfluid velocity and circulation", unit: "m s^{-1}, m^{2} s^{-1}" },
    { symbol: "d\\vec\\ell", meaning: "directed path element around a closed contour", unit: "m" },
    { symbol: "n,h,m", meaning: "circulation quantum number, Planck constant, and mass of one coherent boson", unit: "1, J s, kg" },
  ]}
/>

## The Core Method

First identify the ordered quantity. In a ferromagnet, many microscopic magnetic moments align and produce a nonzero magnetisation,

\\[
\vec M=\frac{1}{V}\sum_j\vec\mu_j.
\tag*{[1]}
\\]

Magnetic order concerns moment orientation; it does not require the atoms to flow. A crystal instead has long-range positional order, so a material can be crystalline without being ferromagnetic and can be ferromagnetic without its magnetisation defining the crystal lattice.

A superconductor has a coherent charged condensate. Below its critical temperature, at sufficiently low applied field, with current density below its critical value, and with no dissipative vortex motion, an ideal direct-current measurement gives

\\[
\rho_{\mathrm e}(T<T_{\mathrm c})=0.
\tag*{[2]}
\\]

Zero resistivity is accompanied by the Meissner effect at low field: magnetic flux is expelled from the bulk apart from finite penetration near a surface. A type-II superconductor can instead enter a mixed state in which quantised flux penetrates as vortices while superconducting order survives between the vortices. Stationary or pinned vortices do not by themselves produce resistance. If a transport current drives vortices through the material, their motion generates an electric field and dissipates energy, so the measured resistivity can become nonzero even though the material remains in the superconducting mixed state. Zero resistance alone is therefore not the complete definition of superconductivity, and mixed-state flux penetration must not be confused with resistive vortex motion.

A quantum fluid is described by a macroscopic complex order parameter,

\\[
\Psi=|\Psi|e^{i\phi}.
\tag*{[3]}
\\]

Spatial coherence of the phase \\(\phi\\) constrains the flow. For a closed path that does not cross a vortex core, the superfluid circulation is quantised:

\\[
\Gamma=\oint\vec v_{\mathrm s}\cdot d\vec\ell
=n\frac{h}{m},
\qquad n=0,\mathord{\pm}1,\mathord{\pm}2,\ldots
\tag*{[4]}
\\]

Superfluid helium supports nearly dissipationless mass flow and quantised vortices, whereas a superconductor supports dissipationless electric current and has a characteristic magnetic response. The two phenomena share macroscopic quantum coherence but transport different conserved quantities.

Quantum statistics matters. Helium-4 atoms are bosons and become superfluid below about \\(2.17\,\mathrm K\\) at saturated vapour pressure. Helium-3 atoms are fermions; they form pairs before developing superfluid phases at pressure-dependent temperatures of order millikelvin. Calling all low-temperature helium the same superfluid would erase this physical distinction.

<PhysicsExamples collapsible
  items={[
    {
      title: "Quantised circulation in helium-4",
      question: "For helium-4, take \\(h=6.626\\times10^{-34}\\,\\mathrm{J\\,s}\\) and \\(m=6.64\\times10^{-27}\\,\\mathrm{kg}\\). Find the circulation for a vortex with \\(n=3\\).",
      answer: "The single circulation quantum from equation \\([4]\\) is \\[\\frac{h}{m}=\\frac{6.626\\times10^{-34}}{6.64\\times10^{-27}}=9.98\\times10^{-8}\\,\\mathrm{m^2\\,s^{-1}}.\\] For \\(n=3\\), \\[\\Gamma=3\\frac{h}{m}=2.99\\times10^{-7}\\,\\mathrm{m^2\\,s^{-1}}.\\] The integer multiplies a fixed quantum; arbitrary circulation is not allowed for this closed path. **Final result:** \\(\\Gamma=2.99\\times10^{-7}\\,\\mathrm{m^2\\,s^{-1}}\\).",
    },
    {
      title: "Diagnosing three kinds of order",
      question: "A material has a periodic atomic structure, develops aligned magnetic moments on cooling, and retains nonzero electrical resistivity. Which ordered states are established, and which is not?",
      answer: "The periodic atomic structure establishes crystalline positional order. The aligned moments establish magnetic order through a nonzero \\(\\vec M\\). The nonzero electrical resistivity means that the zero-resistivity conditions stated for equation \\([2]\\) are not met, but it does not by itself prove that superconducting order is absent: driven vortex motion in a type-II mixed state can be resistive. The observations also provide no evidence of coherent mass flow or quantised circulation. **Final result:** the sample is crystalline and magnetically ordered; the stated evidence establishes neither superconductivity nor superfluidity, although nonzero resistivity alone does not exclude a dissipative mixed state.",
    },
  ]}
/>
`;
