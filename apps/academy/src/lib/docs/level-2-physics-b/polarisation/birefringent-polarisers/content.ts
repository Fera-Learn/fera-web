export const content = String.raw`## Principle

A birefringent polariser uses an anisotropic crystal to give two orthogonal eigenpolarisations different phase indices and energy-flow paths. The extraordinary wave normal and Poynting-vector direction need not coincide. Selecting one energy-ray path produces a linearly polarised output; both components are not necessarily absorbed.

## Notation

<Notation
  items={[
    { symbol: "n_o,n_e(\\theta_e)", meaning: "ordinary phase index and direction-dependent effective extraordinary phase index" },
    { symbol: "\\hat e_o,\\hat e_e", meaning: "ordinary and extraordinary eigenpolarisation directions" },
    { symbol: "\\theta_o,\\theta_e", meaning: "ordinary and extraordinary wave-normal angles from the interface normal", unit: "rad" },
    { symbol: "\\theta_{S,e},\\rho", meaning: "extraordinary Poynting-vector angle and signed walk-off angle, with theta S e equal to theta e plus rho", unit: "rad, rad" },
    { symbol: "\\vec k_e,\\vec S_e", meaning: "extraordinary wavevector and time-averaged energy-flux vector", unit: "m^{-1}, W m^{-2}" },
    { symbol: "n_i", meaning: "incident-medium refractive index" },
    { symbol: "\\theta_i", meaning: "incidence angle from the interface normal", unit: "rad" },
    { symbol: "E_o,E_e", meaning: "ordinary and extraordinary field amplitudes", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "\\vec E_i,\\vec E_{\\mathrm{selected}}", meaning: "incident and selected output field amplitudes", unit: "V m^{-1}" },
    { symbol: "j", meaning: "selected ordinary or extraordinary eigenstate label" },
  ]}
/>

## The Core Method

Resolve the incident field into crystal eigenpolarisations:

\\[
\vec E_i=E_o\hat e_o+E_e\hat e_e.
\tag*{[1]}
\\]

In a principal-section geometry, tangential phase matching gives separate wave-normal relations:

\\[
n_i\sin\theta_i=n_o\sin\theta_o,
\qquad
n_i\sin\theta_i=n_e(\theta_e)\sin\theta_e.
\tag*{[2]}
\\]

The extraordinary equation in [2] is generally implicit because its effective phase index depends on the wave-normal direction. It determines \\(\theta_e\\), the direction of \\(\vec k_e\\), not the extraordinary energy-ray direction. Anisotropy can produce walk-off:

\\[
\theta_{S,e}=\theta_e+\rho,
\qquad
\vec S_e\not\parallel\vec k_e\quad\text{in general}.
\tag*{[3]}
\\]

The ordinary energy flow is parallel to its wave normal in this model, whereas extraordinary spatial separation is governed by \\(\theta_{S,e}\\). A prism can transmit one energy-ray path and deflect, reflect internally, or stop the other:

\\[
\vec E_{\mathrm{selected}}=E_j\hat e_j,
\qquad j\in\{o,e\}.
\tag*{[4]}
\\]

Calculating \\(\theta_{S,e}\\) requires the crystal index surface or equivalent optic-axis data; substituting one quoted effective index into [2] supplies only a wave-normal estimate. The optic axis, eigenpolarisation directions, wave normals, energy-ray directions, and selected output axis are distinct concepts.

<PhysicsExamples collapsible
  items={[
    {
      title: "Wave-normal estimate with a constant effective index",
      question: "Light enters from air at \\(\\theta_i=30.0^\\circ\\) into a crystal with \\(n_o=1.66\\). Using \\(n_e=1.49\\) as a constant isotropic surrogate, estimate the two wave-normal angles.",
      answer: "Use \\([2]\\) with \\(n_i=1.00\\), treating the quoted extraordinary index as constant: \\[\\sin\\theta_o=\\frac{1.00}{1.66}\\sin30.0^\\circ=0.301,\\qquad \\theta_o=17.5^\\circ,\\] \\[\\sin\\theta_e=\\frac{1.00}{1.49}\\sin30.0^\\circ=0.336,\\qquad \\theta_e=19.6^\\circ.\\] Equation \\([3]\\) shows why these values do not determine the extraordinary energy-ray direction without walk-off data. **Final result:** the isotropic-surrogate wave-normal separation is \\(\\theta_e-\\theta_o=2.1^\\circ\\); it is not a derived energy-ray separation.",
    },
    {
      title: "Interpreting a Nicol-type prism",
      question: "A prism removes the ordinary ray by total internal reflection and passes the extraordinary ray. What is the output polarisation?",
      answer: "Equation \\([1]\\) identifies the two orthogonal eigencomponents. Removing the ordinary energy-ray path sets its selected-output amplitude to zero, while \\([4]\\) retains the extraordinary component. **Final result:** the transmitted output is linearly polarised along \\(\\hat e_e\\), the extraordinary eigenpolarisation for that geometry.",
    },
  ]}
/>
`;
