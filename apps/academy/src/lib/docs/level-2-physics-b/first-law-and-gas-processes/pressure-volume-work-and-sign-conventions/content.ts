export const content = String.raw`## Principle

Pressure-volume work is set by the pressure exerted by the surroundings at the moving boundary. With work done by the system defined as positive, expansion against a positive external pressure gives positive work and compression gives negative work.

## Notation

<Notation
  items={[
    { symbol: "p_{\\mathrm{ext}}", meaning: "external pressure acting on the system boundary", unit: "Pa" },
    { symbol: "p", meaning: "equilibrium pressure of the system", unit: "Pa" },
    { symbol: "V,V_i,V_f", meaning: "system volume and its initial and final values", unit: "m^{3}" },
    { symbol: "A", meaning: "piston cross-sectional area", unit: "m^{2}" },
    { symbol: "dx", meaning: "outward infinitesimal piston displacement", unit: "m" },
    { symbol: "dV", meaning: "exact infinitesimal volume change", unit: "m^{3}" },
    { symbol: "\\delta W,\\delta W_{\\mathrm{qs}},W", meaning: "inexact infinitesimal work, its quasistatic form, and finite work done by the system", unit: "J, J, J" },
    { symbol: "W_{\\mathrm{on}}", meaning: "finite work done on the system", unit: "J" },
  ]}
/>

## The Core Method

A pressure force moves the piston as the system boundary changes position. Expansion means the gas pushes the surroundings; with the course convention, that makes work on the gas negative.

<PhysicsDiagram slug="pressure-volume-work-piston" />

An external pressure on a piston of area \\(A\\) produces an opposing force \\(p_{\mathrm{ext}}A\\). If the gas moves the piston outward by \\(dx\\), then \\(dV=A\,dx\\), so

\\[
\delta W=(p_{\mathrm{ext}}A)dx=p_{\mathrm{ext}}\,dV.
\tag*{[1]}
\\]

The finite boundary work follows the actual external-pressure path:

\\[
W=\int_{V_i}^{V_f}p_{\mathrm{ext}}\,dV.
\tag*{[2]}
\\]

For constant external pressure,

\\[
W=p_{\mathrm{ext}}(V_f-V_i).
\tag*{[3]}
\\]

Equation \\([3]\\) is positive for expansion, where \\(V_f>V_i\\), and negative for compression, where \\(V_f<V_i\\). If the surroundings do work on the system, that work is \\(W_{\mathrm{on}}=-W\\).

The system pressure may replace external pressure only in the quasistatic mechanical-equilibrium limit:

\\[
p_{\mathrm{ext}}\to p,
\qquad
\delta W_{\mathrm{qs}}=p\,dV.
\tag*{[4]}
\\]

For a rapid or otherwise irreversible process, the gas need not possess a uniform boundary pressure equal to \\(p_{\mathrm{ext}}\\). Using \\(p\,dV\\) without the quasistatic condition can therefore give the wrong work.

<PhysicsExamples collapsible
  items={[
    {
      title: "Expansion against constant atmospheric pressure",
      question: "Argon expands from \\(V_i=10\\,\\mathrm{dm^3}\\) to \\(V_f=30\\,\\mathrm{dm^3}\\) against \\(p_{\\mathrm{ext}}=81260\\,\\mathrm{Pa}\\). Find the work done by the gas.",
      answer: "First convert the volumes: \\(V_i=10\\times10^{-3}\\,\\mathrm{m^3}\\) and \\(V_f=30\\times10^{-3}\\,\\mathrm{m^3}\\). Equation \\([3]\\) gives \\[W=(81260\\,\\mathrm{Pa})[(30-10)\\times10^{-3}\\,\\mathrm{m^3}]=1.6252\\times10^3\\,\\mathrm J.\\] The sign is positive because the gas expands and does work on the surroundings. **Final result:** \\(W=+1.63\\,\\mathrm{kJ}\\).",
    },
    {
      title: "Expansion into a vacuum",
      question: "A gas expands into an evacuated chamber, so the moving boundary faces \\(p_{\\mathrm{ext}}=0\\). Is the boundary work nonzero merely because the volume increases?",
      answer: "No. Equation \\([2]\\) must use the external pressure, not an assumed equilibrium gas pressure: \\[W=\\int_{V_i}^{V_f}0\\,dV=0.\\] A volume change alone does not guarantee pressure-volume work. **Final result:** free expansion into a vacuum has \\(W=0\\), even though \\(V_f\\gt V_i\\).",
    },
  ]}
/>
`;
