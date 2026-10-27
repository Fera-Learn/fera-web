export const content = String.raw`## Principle

Excited hydrogen emits only particular colours rather than a continuous rainbow.

An atomic transition exchanges exactly the energy difference between two stationary levels. Downward transitions emit photons and upward transitions absorb photons, so defining the initial and final levels carefully keeps every photon energy positive and organizes the lines into spectral series.

## Notation

<Notation
  items={[
    { symbol: "n,n_i,n_f", meaning: "principal, initial, and final principal quantum numbers", unit: "1" },
    { symbol: "E_n,E_i,E_f,E_\\gamma", meaning: "level, initial, final, and positive photon energies", unit: "J" },
    { symbol: "C", meaning: "positive hydrogen binding-energy scale, approximately 13.6 eV", unit: "eV" },
    { symbol: "h,\\hbar", meaning: "Planck constant and reduced Planck constant", unit: "J s, J s" },
    { symbol: "\\nu,\\lambda,c", meaning: "photon frequency, vacuum wavelength, and speed of light", unit: "s^{-1}, m, m s^{-1}" },
    { symbol: "R_{\\mathrm H}", meaning: "Rydberg constant for hydrogen", unit: "m^{-1}" },
    { symbol: "\\Delta E", meaning: "signed atomic energy change E_f-E_i", unit: "J" },
  ]}
/>

## The Core Method

Write the ideal hydrogen energies using a positive constant \\(C\\):

\\[
E_n=-\frac{C}{n^2},
\qquad
C\simeq13.6\,\mathrm{eV}.
\tag*{[1]}
\\]

For emission, the atom moves downward, so \\(n_i>n_f\\) and \\(E_i>E_f\\). Energy conservation assigns the lost atomic energy to the photon:

\\[
E_\gamma=E_i-E_f
=C\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right)>0.
\tag*{[2]}
\\]

The photon relations convert energy to frequency or wavelength:

\\[
E_\gamma=h\nu=\frac{hc}{\lambda}.
\tag*{[3]}
\\]

Combining equations [2] and [3] gives the Rydberg form

\\[
\frac{1}{\lambda}
=R_{\mathrm H}\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right),
\qquad n_i>n_f.
\tag*{[4]}
\\]

For absorption, \\(n_f>n_i\\), so the atom gains energy. The signed atomic change and the positive absorbed photon energy are

\\[
\Delta E=E_f-E_i>0,
\qquad
E_\gamma=\Delta E
=C\left(\frac{1}{n_i^2}-\frac{1}{n_f^2}\right)>0.
\tag*{[5]}
\\]

Do not reuse the emission ordering in equation [2] after swapping the physical meaning of the indices. A negative result signals an index or sign error, not a negative-energy photon.

Emission lines sharing a final level form a series:

\\[
\begin{aligned}
n_f=1 &: \text{Lyman series},\\
n_f=2 &: \text{Balmer series},\\
n_f=3 &: \text{Paschen series}.
\end{aligned}
\tag*{[6]}
\\]

<PhysicsDiagram slug="hydrogen-transitions-and-balmer-spectrum" />

The left panel groups arrows by their shared lower level: Lyman transitions end at \\(n_f=1\\), Balmer at \\(n_f=2\\), and Paschen at \\(n_f=3\\). The black strip shows the Balmer photons as separate coloured lines. Their spacing shrinks toward the violet series limit because the upper hydrogen levels crowd together as \\(n_i\\) increases.

For fixed \\(n_f\\), the series limit occurs as \\(n_i\to\infty\\):

\\[
\frac{1}{\lambda_{\mathrm{limit}}}=\frac{R_{\mathrm H}}{n_f^2},
\qquad
\lambda_{\mathrm{limit}}=\frac{n_f^2}{R_{\mathrm H}}.
\tag*{[7]}
\\]

Equations [2]-[7] determine candidate photon energies. Transition probabilities and line strengths require additional selection rules, so an energy difference alone does not state how intense a line will be.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "The hydrogen H-alpha line",
      question: "Calculate the photon energy and wavelength for hydrogen emission from \\(n_i=3\\) to \\(n_f=2\\). Use \\(C=13.6\\,\\mathrm{eV}\\) and \\(hc=1240\\,\\mathrm{eV\\,nm}\\).",
      answer: "Because \\(3\\gt2\\), this is emission and equation [2] applies: \\[E_\\gamma=13.6\\left(\\frac{1}{2^2}-\\frac{1}{3^2}\\right)\\mathrm{eV}=13.6\\left(\\frac{5}{36}\\right)\\mathrm{eV}=1.89\\,\\mathrm{eV}.\\] Then equation [3] gives \\[\\lambda=\\frac{hc}{E_\\gamma}=\\frac{1240\\,\\mathrm{eV\\,nm}}{1.89\\,\\mathrm{eV}}=656\\,\\mathrm{nm}.\\] **Final result:** the H-alpha photon has energy \\(1.89\\,\\mathrm{eV}\\) and wavelength \\(656\\,\\mathrm{nm}\\), in the Balmer series.",
    },
    {
      title: "Identify the Balmer series limit",
      question: "Find the shortest wavelength in the hydrogen Balmer series using \\(R_{\\mathrm H}=1.097\\times10^7\\,\\mathrm{m^{-1}}\\).",
      answer: "The Balmer series has \\(n_f=2\\), and its shortest wavelength corresponds to the largest photon energy, \\(n_i\\to\\infty\\). Equation [7] gives \\[\\lambda_{\\mathrm{limit}}=\\frac{2^2}{1.097\\times10^7}\\,\\mathrm m=3.65\\times10^{-7}\\,\\mathrm m.\\] Converting metres to nanometres gives \\(3.65\\times10^{-7}\\,\\mathrm m=365\\,\\mathrm{nm}\\). **Final result:** the Balmer limit is approximately \\(365\\,\\mathrm{nm}\\).",
    },
  ]}
/>
`;
