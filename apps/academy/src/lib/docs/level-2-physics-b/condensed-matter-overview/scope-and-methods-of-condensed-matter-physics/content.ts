export const content = String.raw`## Principle

Condensed matter physics uses quantum mechanics and statistical physics to explain the collective behaviour of solids and liquids. It connects microscopic constituents and interactions to measurable structure and response in systems that commonly contain a macroscopic number of particles and may be chemically complex.

## Notation

<Notation
  items={[
    { symbol: "N", meaning: "number of microscopic constituents in a macroscopic sample" },
    { symbol: "\\vec k_{\\mathrm i},\\vec k_{\\mathrm f}", meaning: "incident and scattered wavevectors", unit: "m^{-1}, m^{-1}" },
    { symbol: "\\vec q", meaning: "scattering vector, or momentum-transfer wavevector", unit: "m^{-1}" },
    { symbol: "d", meaning: "real-space structural length scale", unit: "m" },
    { symbol: "V,I,R", meaning: "potential difference, electric current, and resistance", unit: "V, A, \\Omega" },
    { symbol: "\\rho,\\sigma", meaning: "electrical resistivity and conductivity", unit: "\\Omega m, S m^{-1}" },
    { symbol: "\\ell,A", meaning: "sample length and cross-sectional area", unit: "m, m^{2}" },
  ]}
/>

## The Core Method

A typical macroscopic specimen contains roughly

\\[
N\sim10^{23}
\tag*{[1]}
\\]

constituents. Solving a separate equation of motion for every constituent is neither practical nor conceptually useful. Condensed matter theory instead identifies collective variables, symmetries, excitations, and statistical averages. Quantum mechanics supplies microscopic states and interactions; statistical physics connects their populations to macroscopic observables.

Two broad experimental strategies provide complementary information.

<PhysicsDiagram slug="condensed-matter-experimental-probes" />

The left-hand picture follows what happens to a known incoming beam; the right-hand circuit follows the bulk response to an applied drive. Together they connect microscopic arrangement to macroscopic behaviour.

**Scattering** sends a known probe, such as an X-ray, neutron, or electron beam, into a sample and measures changes in direction and energy. The scattering vector is

\\[
\vec q=\vec k_{\mathrm f}-\vec k_{\mathrm i}.
\tag*{[2]}
\\]

Elastic scattering maps static structure because strong intensity at a particular \\(|\vec q|\\) indicates repeated spatial correlations. The corresponding order-of-magnitude real-space scale is

\\[
d\simeq\frac{2\pi}{|\vec q|}.
\tag*{[3]}
\\]

Inelastic scattering also measures energy transfer and can reveal collective excitations. A common error is to interpret all scattering peaks as individual particle sizes; equation [3] gives the length scale of a correlation or periodicity selected by the peak.

**Transport** applies a controlled drive and measures the resulting flow. For a uniform bar in the ohmic regime,

\\[
V=IR,
\qquad
\rho=R\frac{A}{\ell},
\qquad
\sigma=\frac{1}{\rho}.
\tag*{[4]}
\\]

Electrical, thermal, and particle transport reveal how mobile excitations carry charge, energy, or matter and how scattering inside the sample limits that motion. Geometry must be removed before comparing materials: resistance depends on the specimen dimensions, whereas resistivity is a material property under specified conditions.

Scattering primarily asks what spatial and dynamical correlations exist. Transport primarily asks how the system responds to an imposed gradient or field. Neither method alone supplies a complete microscopic model, so experiments are compared with theoretical predictions and with other probes.

<PhysicsExamples collapsible
  items={[
    {
      title: "Length scale from a scattering peak",
      question: "An elastic-scattering measurement has a peak at \\(|\\vec q|=3.14\\times10^{10}\\,\\mathrm{m^{-1}}\\). Estimate the associated structural length scale.",
      answer: "Use equation \\([3]\\): \\[d\\simeq\\frac{2\\pi}{3.14\\times10^{10}}\\,\\mathrm m=2.00\\times10^{-10}\\,\\mathrm m.\\] Converting to nanometres gives \\(d=0.200\\,\\mathrm{nm}\\). The result is a correlation or repeat distance; identifying it as a particular atomic spacing requires a structural model. **Final result:** the measured peak corresponds to \\(d\\simeq2.00\\times10^{-10}\\,\\mathrm m=0.200\\,\\mathrm{nm}\\).",
    },
    {
      title: "Removing sample geometry from a transport measurement",
      question: "A uniform sample has \\(R=0.50\\,\\Omega\\), \\(\\ell=2.0\\times10^{-2}\\,\\mathrm m\\), and \\(A=1.0\\times10^{-6}\\,\\mathrm{m^2}\\). Find its resistivity and conductivity.",
      answer: "Equation \\([4]\\) gives \\[\\rho=R\\frac{A}{\\ell}=(0.50)\\frac{1.0\\times10^{-6}}{2.0\\times10^{-2}}=2.5\\times10^{-5}\\,\\Omega\\,\\mathrm m.\\] Then \\[\\sigma=\\frac{1}{\\rho}=4.0\\times10^4\\,\\mathrm{S\\,m^{-1}}.\\] **Final result:** \\(\\rho=2.5\\times10^{-5}\\,\\Omega\\,\\mathrm m\\) and \\(\\sigma=4.0\\times10^4\\,\\mathrm{S\\,m^{-1}}\\); these geometry-independent values can be compared across samples.",
    },
  ]}
/>
`;
