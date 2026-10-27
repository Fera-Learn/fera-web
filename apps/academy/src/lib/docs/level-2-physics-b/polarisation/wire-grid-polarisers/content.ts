export const content = String.raw`## Principle

Parallel conducting wires respond strongly to the electric-field component along the wires: mobile charges move longitudinally and reradiate or dissipate that component. The perpendicular component drives much less current and is transmitted, so the transmission axis is perpendicular to the wires.

## Notation

<Notation
  items={[
    { symbol: "\\hat w,\\hat p", meaning: "unit directions parallel and perpendicular to the wires" },
    { symbol: "E_w,E_p", meaning: "incident field components parallel and perpendicular to the wires", unit: "V m^{-1}" },
    { symbol: "a,d", meaning: "wire radius and grid spacing", unit: "m, m" },
    { symbol: "\\lambda", meaning: "vacuum wavelength", unit: "m" },
    { symbol: "\\sigma", meaning: "effective electrical conductivity of a wire", unit: "S m^{-1}" },
    { symbol: "\\vec E_i,\\vec E_t,\\vec E_r", meaning: "incident, transmitted, and reflected field amplitudes", unit: "V m^{-1}" },
    { symbol: "\\vec J_w,\\vec J_p", meaning: "current densities driven parallel and perpendicular to the wires", unit: "A m^{-2}" },
    { symbol: "E_0", meaning: "incident field-amplitude scale", unit: "V m^{-1}" },
  ]}
/>

## The Core Method

Resolve the incident amplitude into grid directions:

\\[
\vec E_i=E_w\hat w+E_p\hat p,
\qquad \hat w\cdot\hat p=0.
\tag*{[1]}
\\]

The parallel component drives a conducting current density, while the perpendicular component does not have a continuous wire path:

\\[
\vec J_w=\sigma E_w\hat w,
\qquad
\vec J_p\approx\vec 0,
\tag*{[2]}
\\]

where \\(\sigma\\) is the conductor's effective conductivity. In the ideal subwavelength-grid limit,

\\[
d\ll\lambda,
\qquad
\vec E_t\approx E_p\hat p,
\qquad
\vec E_r\approx E_w\hat w.
\tag*{[3]}
\\]

Finite conductivity, non-negligible spacing, and frequency-dependent wire response reduce extinction. The rule "wires show the polarisation direction" is therefore wrong for transmission: the passed electric field is perpendicular to the visible wires.

<PhysicsExamples collapsible
  items={[
    {
      title: "Resolving an incident field",
      question: "A field of amplitude \\(E_0=10.0\\,\\mathrm{V\\,m^{-1}}\\) is at \\(30^\\circ\\) to the wires. Find ideal transmitted and rejected amplitudes.",
      answer: "The wire-parallel component is \\(E_w=E_0\\cos30^\\circ=8.66\\,\\mathrm{V\\,m^{-1}}\\). The perpendicular component is \\(E_p=E_0\\sin30^\\circ=5.00\\,\\mathrm{V\\,m^{-1}}\\). Equation \\([3]\\) transmits the latter and rejects the former. **Final result:** transmitted amplitude \\(5.00\\,\\mathrm{V\\,m^{-1}}\\) perpendicular to the wires; rejected amplitude \\(8.66\\,\\mathrm{V\\,m^{-1}}\\) parallel to them.",
    },
    {
      title: "Checking the operating regime",
      question: "Why does a grid with spacing comparable to the wavelength cease to behave like an ideal homogeneous polariser?",
      answer: "Condition \\([3]\\) fails when \\(d\\) is not much smaller than \\(\\lambda\\). The wave then resolves the periodic structure, allowing diffraction and more complicated coupling rather than a simple parallel-current response. **Final result:** wavelength-scale spacing invalidates the ideal projection model and degrades polarisation separation.",
    },
  ]}
/>
`;
