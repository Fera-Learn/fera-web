export const content = String.raw`## Principle

Bose-Einstein and Fermi-Dirac statistics approach Maxwell-Boltzmann statistics when every thermally relevant one-particle state has a very small mean occupation. The controlling condition is low phase-space density, not a vaguely small chemical potential.

## Notation

<Notation
  items={[
    { symbol: "T,k_{\\mathrm B},\\beta", meaning: "temperature, Boltzmann constant, and inverse thermal energy", unit: "K, J K^{-1}, J^{-1}" },
    { symbol: "\\epsilon,\\mu,z", meaning: "one-particle energy, particle chemical potential, and fugacity exp(beta mu)", unit: "J, J, 1" },
    { symbol: "f_{\\mathrm{BE}},f_{\\mathrm{FD}},f_{\\mathrm{MB}}", meaning: "Bose-Einstein, Fermi-Dirac, and Maxwell-Boltzmann mean occupations", unit: "1, 1, 1" },
    { symbol: "n,g_s", meaning: "particle number density and internal-state degeneracy", unit: "m^{-3}, 1" },
    { symbol: "\\eta", meaning: "phase-space density n lambda_T cubed divided by g_s", unit: "1" },
    { symbol: "m,h,\\lambda_T", meaning: "particle mass, Planck constant, and thermal de Broglie wavelength", unit: "kg, J s, m" },
    { symbol: "z_1,Z_N,N", meaning: "one-particle function, canonical N-particle function, and particle number", unit: "1, 1, 1" },
  ]}
/>

## The Core Method

Write the ideal-gas mean occupations using fugacity \\(z=e^{\beta\mu}\\):

\\[
f_{\mathrm{BE}}(\epsilon)=\frac{ze^{-\beta\epsilon}}{1-ze^{-\beta\epsilon}},
\qquad
f_{\mathrm{FD}}(\epsilon)=\frac{ze^{-\beta\epsilon}}{1+ze^{-\beta\epsilon}}.
\tag*{[1]}
\\]

If \\(ze^{-\beta\epsilon}\ll1\\) for all appreciably occupied states, expand \\(1/(1\mp y)=1\pm y+\cdots\\) with \\(y=ze^{-\beta\epsilon}\\). Keeping the leading term gives

\\[
f_{\mathrm{BE}}(\epsilon)
\simeq ze^{-\beta\epsilon}
\simeq f_{\mathrm{FD}}(\epsilon)
\equiv f_{\mathrm{MB}}(\epsilon).
\tag*{[2]}
\\]

For a homogeneous nonrelativistic gas, define

\\[
\lambda_T=\frac{h}{\sqrt{2\pi m k_{\mathrm B}T}},
\qquad
\eta=\frac{n\lambda_T^3}{g_s}.
\tag*{[3]}
\\]

The classical regime is

\\[
\eta\ll1,
\tag*{[4]}
\\]

meaning that the number of available thermal quantum states greatly exceeds the particle number. Exchange overlap is then rare. In the same dilute Maxwell-Boltzmann regime for identical noninteracting particles,

\\[
Z_N\simeq\frac{z_1^N}{N!}.
\tag*{[5]}
\\]

The factor \\(N!\\) corrects the overcount of particle labels; it does not make the particles physically distinguishable. Increasing temperature or lowering density reduces \\(\eta\\). A chemical potential in this limit is typically negative relative to the chosen ground energy, and its magnitude need not be small.

<PhysicsExamples collapsible
  items={[
    {
      title: "Test the phase-space density",
      question: "A monatomic gas has number density \\(n=2.0\\times10^{25}\\,\\mathrm{m^{-3}}\\), thermal wavelength \\(\\lambda_T=2.0\\times10^{-11}\\,\\mathrm m\\), and \\(g_s=1\\). Decide whether quantum exchange is important.",
      answer: "Equation \\([3]\\) gives \\[\\eta=n\\lambda_T^3=(2.0\\times10^{25})(2.0\\times10^{-11})^3=(2.0\\times10^{25})(8.0\\times10^{-33})=1.6\\times10^{-7}.\\] This is far below one, satisfying equation \\([4]\\). Mean state occupations are dilute, so the leading term in equation \\([2]\\) is adequate. **Final result:** \\(\\eta=1.6\\times10^{-7}\\), so Maxwell-Boltzmann statistics is valid.",
    },
    {
      title: "Identify the classical-limit condition",
      question: "Which change drives a fixed gas toward classical behaviour: increasing density, lowering temperature, or lowering density at fixed temperature?",
      answer: "Equation \\([3]\\) shows that \\(\\eta\\propto nT^{-3/2}\\) for fixed mass and internal degeneracy. Lowering density decreases \\(\\eta\\), whereas increasing density or lowering temperature increases it. Equation \\([4]\\) therefore becomes better satisfied only for the lower-density option listed. **Final result:** lowering density at fixed temperature drives the gas toward the classical limit.",
    },
  ]}
/>
`;
