export const content = String.raw`## Principle

Replace the proton or change the nuclear charge and the same Coulomb pattern survives with new length and energy scales.

Every two-body system bound by an attractive Coulomb interaction has the same relative-coordinate Schrodinger equation as hydrogen. The nuclear charge controls the Coulomb strength, while the reduced mass accounts for the motion of both particles; together they set all length and energy scales.

## Notation

<Notation
  items={[
    { symbol: "m_1,m_2", meaning: "masses of the two Coulomb-bound particles", unit: "kg" },
    { symbol: "m_e,m_N,m_p", meaning: "electron, nucleus, and proton masses", unit: "kg" },
    { symbol: "\\mu,\\mu_{\\mathrm H},\\mu_{\\mathrm{Ps}}", meaning: "system, hydrogen, and positronium reduced masses", unit: "kg, kg, kg" },
    { symbol: "\\mathbf r_1,\\mathbf r_2,\\mathbf r", meaning: "particle positions and relative coordinate r=r_1-r_2", unit: "m, m, m" },
    { symbol: "\\psi,E", meaning: "relative-coordinate wavefunction and energy eigenvalue", unit: "m^{-3/2}, J" },
    { symbol: "Z,e,\\epsilon_0", meaning: "nuclear charge number, elementary charge, and vacuum permittivity", unit: "1, C, C^{2} N^{-1} m^{-2}" },
    { symbol: "a_Z,a_{\\mathrm H},a_{\\mathrm{Ps}}", meaning: "system, hydrogen, and positronium Coulomb length scales", unit: "m, m, m" },
    { symbol: "E_n,E_{1\\mathrm H}", meaning: "level-n energy and hydrogen ground-state energy", unit: "eV, eV" },
    { symbol: "\\hbar,n", meaning: "reduced Planck constant and principal quantum number", unit: "J s, 1" },
  ]}
/>

## The Core Method

For two particles, separate centre-of-mass motion from relative motion by defining \\(\mathbf r=\mathbf r_1-\mathbf r_2\\). The kinetic coefficient of the relative Hamiltonian contains the reduced mass

\\[
\frac{1}{\mu}=\frac{1}{m_1}+\frac{1}{m_2},
\qquad
\mu=\frac{m_1m_2}{m_1+m_2}.
\tag*{[1]}
\\]

For an electron of charge \\(-e\\) bound to a nucleus of charge \\(+Ze\\), the relative-coordinate stationary equation is

\\[
\left[-\frac{\hbar^2}{2\mu}\nabla_{\mathbf r}^2
-\frac{Ze^2}{4\pi\epsilon_0r}\right]\psi(\mathbf r)
=E\psi(\mathbf r).
\tag*{[2]}
\\]

Balancing the kinetic scale \\(\hbar^2/(2\mu a_Z^2)\\) against the Coulomb scale \\(Ze^2/(4\pi\epsilon_0a_Z)\\), or solving equation [2], gives the characteristic length

\\[
a_Z=\frac{4\pi\epsilon_0\hbar^2}{\mu Ze^2}.
\tag*{[3]}
\\]

The bound-state energies are

\\[
E_n=-\frac{\mu}{2\hbar^2}
\left(\frac{Ze^2}{4\pi\epsilon_0}\right)^2\frac{1}{n^2}.
\tag*{[4]}
\\]

Compare equations [3] and [4] with ordinary hydrogen, whose reduced mass is

\\[
\mu_{\mathrm H}=\frac{m_em_p}{m_e+m_p}.
\tag*{[5]}
\\]

The exact hydrogenic scaling relations are

\\[
\frac{a_Z}{a_{\mathrm H}}
=\frac{\mu_{\mathrm H}}{\mu}\frac{1}{Z},
\qquad
E_n=\frac{\mu}{\mu_{\mathrm H}}\frac{Z^2}{n^2}E_{1\mathrm H}.
\tag*{[6]}
\\]

Thus increasing \\(Z\\) contracts all radial lengths as \\(Z^{-1}\\) and increases binding-energy magnitudes as \\(Z^2\\). Increasing \\(\mu\\) also contracts lengths and increases binding-energy magnitudes linearly.

Positronium consists of an electron and a positron with equal masses and \\(Z=1\\). Equation [1] gives

\\[
\mu_{\mathrm{Ps}}=\frac{m_em_e}{m_e+m_e}=\frac{m_e}{2}.
\tag*{[7]}
\\]

Since \\(\mu_{\mathrm H}\simeq m_e\\), equations [6] and [7] imply

\\[
a_{\mathrm{Ps}}\simeq2a_{\mathrm H},
\qquad
E_n^{(\mathrm{Ps})}\simeq\frac12E_n^{(\mathrm H)}.
\tag*{[8]}
\\]

These Coulomb results omit fine structure, finite nuclear size, and annihilation effects. In particular, positronium has a finite lifetime, but its leading spatial and energy scales still follow equations [7] and [8].

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Ground state of singly ionized helium",
      question: "Estimate the ground-state energy and length scale of \\(\\mathrm{He}^+\\), taking \\(Z=2\\), \\(E_{1\\mathrm H}=-13.6\\,\\mathrm{eV}\\), \\(a_{\\mathrm H}=5.29\\times10^{-11}\\,\\mathrm m\\), and \\(\\mu\\simeq\\mu_{\\mathrm H}\\).",
      answer: "With the reduced-mass ratio approximated by one, equation [6] gives \\[E_1(\\mathrm{He}^+)=Z^2E_{1\\mathrm H}=2^2(-13.6\\,\\mathrm{eV})=-54.4\\,\\mathrm{eV}.\\] The length scale is \\[a_Z=\\frac{a_{\\mathrm H}}{Z}=\\frac{5.29\\times10^{-11}}{2}\\,\\mathrm m=2.65\\times10^{-11}\\,\\mathrm m.\\] **Final result:** \\(E_1=-54.4\\,\\mathrm{eV}\\) and \\(a_Z=2.65\\times10^{-11}\\,\\mathrm m\\); the ion is four times more strongly bound and half the linear size of hydrogen.",
    },
    {
      title: "Positronium scales",
      question: "Using the leading approximation \\(\\mu_{\\mathrm H}\\simeq m_e\\), estimate the positronium ground-state energy, ionization energy, and Coulomb length scale.",
      answer: "Equation [7] gives \\(\\mu_{\\mathrm{Ps}}/\\mu_{\\mathrm H}\\simeq1/2\\), while \\(Z=1\\). Apply equation [6]: \\[E_1^{(\\mathrm{Ps})}\\simeq\\frac12(-13.6\\,\\mathrm{eV})=-6.80\\,\\mathrm{eV},\\qquad a_{\\mathrm{Ps}}\\simeq2a_{\\mathrm H}.\\] The continuum threshold is zero, so the ionization energy is \\(0-E_1^{(\\mathrm{Ps})}=6.80\\,\\mathrm{eV}\\). **Final result:** positronium has ground energy \\(-6.80\\,\\mathrm{eV}\\), ionization energy \\(6.80\\,\\mathrm{eV}\\), and a leading Coulomb length twice that of hydrogen.",
    },
  ]}
/>
`;
