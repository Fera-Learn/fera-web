export const content = String.raw`## Principle

A magnetic field can turn or split electron states because an electron carries a tiny magnetic moment.

An electron's negative charge makes its magnetic moment point opposite to its angular momentum. The orbital and intrinsic-spin moments have related forms, but the spin moment includes a dimensionless g-factor close to two; keeping the minus sign is essential for energies and forces.

## Notation

<Notation
  items={[
    { symbol: "e,m_e", meaning: "positive elementary-charge magnitude and electron mass", unit: "C, kg" },
    { symbol: "r,v,T,A,I", meaning: "orbit radius, speed, period, enclosed area, and conventional current", unit: "m, m s^{-1}, s, m^{2}, A" },
    { symbol: "\\vec L,\\vec S", meaning: "orbital and spin angular momentum", unit: "J s, J s" },
    { symbol: "\\vec\\mu_l,\\vec\\mu_s", meaning: "orbital and spin magnetic moments", unit: "J T^{-1}, J T^{-1}" },
    { symbol: "\\mu_B", meaning: "Bohr magneton \\(e\\hbar/(2m_e)\\)", unit: "J T^{-1}" },
    { symbol: "g_s", meaning: "electron spin g-factor, approximately 2" },
    { symbol: "m_l,m_s", meaning: "orbital and spin projection quantum numbers" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "\\vec B,B_z,U,\\Delta U", meaning: "magnetic field, its z-component, magnetic potential energy, and energy splitting", unit: "T, T, J, J" },
  ]}
/>

## The Core Method

Start with a simple circular orbit to determine the sign. An electron has charge \\(-e\\), so its conventional current is opposite to its direction of motion.

\\[
T=\frac{2\pi r}{v},\qquad I=\frac{-e}{T}=-\frac{ev}{2\pi r},\qquad A=\pi r^2\tag*{[1]}
\\]

The current loop has magnetic moment \\(IA\\), while the orbital angular momentum has magnitude \\(m_evr\\). Therefore

\\[
\mu_l=IA=-\frac{evr}{2}=-\frac{e}{2m_e}L\tag*{[2]}
\\]

The vector relation and the definition of the Bohr magneton are

\\[
\vec\mu_l=-\frac{e}{2m_e}\vec L=-\frac{\mu_B}{\hbar}\vec L,\qquad \mu_B=\frac{e\hbar}{2m_e}\tag*{[3]}
\\]

Consequently an orbital z-projection \\(L_z=m_l\hbar\\) corresponds to

\\[
(\mu_l)_z=-m_l\mu_B\tag*{[4]}
\\]

The electron spin magnetic moment has the same opposite-direction sign and an additional spin g-factor.

\\[
\vec\mu_s=-g_s\frac{e}{2m_e}\vec S=-g_s\frac{\mu_B}{\hbar}\vec S\tag*{[5]}
\\]

For a z-spin eigenstate, \\(S_z=m_s\hbar\\), so

\\[
(\mu_s)_z=-g_s m_s\mu_B\tag*{[6]}
\\]

For an electron, \\(m_s=+1/2\\) therefore gives a negative magnetic moment, while \\(m_s=-1/2\\) gives a positive magnetic moment. With \\(g_s\simeq2\\), the two values are approximately \\(-\mu_B\\) and \\(+\mu_B\\), respectively.

The interaction energy of a magnetic moment in an external field is

\\[
U=-\vec\mu_s\cdot\vec B\tag*{[7]}
\\]

For a field along z, substitute equation [6] into equation [7].

\\[
U_{m_s}=-(\mu_s)_zB_z=g_s m_s\mu_BB_z\tag*{[8]}
\\]

The upper and lower z-spin energies differ by

\\[
\Delta U=U_{+1/2}-U_{-1/2}=g_s\mu_BB_z\tag*{[9]}
\\]

The sign in equation [8] is a frequent source of error: spin up means positive spin projection, not positive electron magnetic moment.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Electron spin splitting in a magnetic field",
      question: "An electron is in a uniform field \\(B_z=0.80\\,\\mathrm T\\). Using \\(g_s=2.00\\) and \\(\\mu_B=5.79\\times10^{-5}\\,\\mathrm{eV\\,T^{-1}}\\), find both spin energies and their separation.",
      answer: "Equation [8] gives \\(U_{m_s}=g_sm_s\\mu_BB_z\\). For spin up, \\[U_{+1/2}=(2.00)\\left(\\frac12\\right)(5.79\\times10^{-5}\\,\\mathrm{eV\\,T^{-1}})(0.80\\,\\mathrm T)=+4.63\\times10^{-5}\\,\\mathrm{eV}.\\] For spin down, changing \\(m_s\\) to \\(-1/2\\) changes the sign: \\[U_{-1/2}=-4.63\\times10^{-5}\\,\\mathrm{eV}.\\] Their separation is \\[\\Delta U=U_{+1/2}-U_{-1/2}=9.26\\times10^{-5}\\,\\mathrm{eV}.\\] **Final result:** the spin-up state has the higher energy \\(+4.63\\times10^{-5}\\,\\mathrm{eV}\\), the spin-down state has \\(-4.63\\times10^{-5}\\,\\mathrm{eV}\\), and the splitting is \\(9.26\\times10^{-5}\\,\\mathrm{eV}\\).",
    },
    {
      title: "Direction of the electron moment",
      question: "An electron is measured in the state \\(m_s=+1/2\\). In which z-direction do its spin and magnetic moment point?",
      answer: "The spin projection is \\[S_z=m_s\\hbar=+\\frac{\\hbar}{2}.\\] Apply equation [6]: \\[(\\mu_s)_z=-g_s\\left(\\frac12\\right)\\mu_B\\simeq-\\mu_B.\\] **Final result:** the spin projection points along positive z, but the magnetic moment points along negative z. The opposite directions result from the electron's negative charge.",
    },
  ]}
/>
`;
