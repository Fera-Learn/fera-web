export const content = String.raw`## Principle

A narrow beam entering a nonuniform magnet separates into distinct spots instead of spreading continuously.

The Stern-Gerlach experiment converts a quantised magnetic-moment component into a visible beam displacement. A nonuniform magnetic field produces two separated beams for spin-one-half particles, rather than the continuous smear predicted for arbitrarily oriented classical dipoles.

## Notation

<Notation
  items={[
    { symbol: "\\vec\\mu,\\mu_z,\\vec\\mu_l", meaning: "atomic magnetic moment, its z-component, and orbital magnetic moment", unit: "J T^{-1}, J T^{-1}, J T^{-1}" },
    { symbol: "\\vec B,B_z", meaning: "nonuniform magnetic field and its z-component", unit: "T, T" },
    { symbol: "U,F_z", meaning: "magnetic potential energy and z-directed force", unit: "J, N" },
    { symbol: "z", meaning: "coordinate along the field-gradient direction", unit: "m" },
    { symbol: "g_s,m_s", meaning: "electron spin g-factor and spin-projection quantum number" },
    { symbol: "\\mu_B", meaning: "Bohr magneton", unit: "J T^{-1}" },
    { symbol: "l,m_l", meaning: "orbital and orbital-projection quantum numbers" },
    { symbol: "M,a_z", meaning: "atomic mass and z-directed acceleration", unit: "kg, m s^{-2}" },
  ]}
/>

## The Core Method

For a magnetic moment in a field, the interaction energy is

\\[
U=-\vec\mu\cdot\vec B\tag*{[1]}
\\]

Take the apparatus field to point mainly along z and vary with z. Then \\(U=-\mu_zB_z\\), and the force is the negative spatial derivative of the energy.

\\[
F_z=-\frac{\partial U}{\partial z}=-\frac{\partial(-\mu_zB_z)}{\partial z}=\mu_z\frac{\partial B_z}{\partial z}\tag*{[2]}
\\]

Equation [2] shows why a uniform field cannot separate a freely travelling beam: if \\(\partial B_z/\partial z=0\\), the translational force vanishes.

For an electron spin moment,

\\[
\mu_z=-g_sm_s\mu_B\tag*{[3]}
\\]

Substituting equation [3] into equation [2] gives the force measured by the apparatus.

\\[
F_z=-g_sm_s\mu_B\frac{\partial B_z}{\partial z}\tag*{[4]}
\\]

An electron has \\(m_s=+1/2\\) or \\(m_s=-1/2\\). Therefore, for a positive field gradient, the two forces are equal in magnitude and opposite in direction.

\\[
F_z\left(+\frac12\right)=-\frac{g_s\mu_B}{2}\frac{\partial B_z}{\partial z},\qquad F_z\left(-\frac12\right)=+\frac{g_s\mu_B}{2}\frac{\partial B_z}{\partial z}\tag*{[5]}
\\]

Silver atoms are useful because the outer electron is in an orbital state with \\(l=0\\), so \\(m_l=0\\) and its orbital magnetic-moment projection vanishes.

\\[
(\mu_l)_z=-m_l\mu_B=0\tag*{[6]}
\\]

The observed two-way splitting must therefore come from the two spin projections. A classical dipole allowed to point at every angle would provide a continuum of \\(\mu_z\\) values and hence a continuous range of forces, not two distinct spots.

<PhysicsDiagram slug="stern-gerlach-apparatus" />

The numbered source apparatus runs from right to left: the oven (1) launches silver atoms through the collimator (2), the tapered pole pieces (3) provide a nonzero field gradient, and the two outgoing paths reach separate traces (5) on the screen (4). A continuous range of classical orientations would fill the space between those traces instead.

The labels upper and lower identify force directions; they should not be assigned to spin up without checking the signs of both the field gradient and the electron magnetic moment.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Forces in a Stern-Gerlach magnet",
      question: "A beam of atoms with one spin-half electron crosses a region where \\(\\partial B_z/\\partial z=1.50\\times10^3\\,\\mathrm{T\\,m^{-1}}\\). Using \\(g_s=2.00\\), \\(\\mu_B=9.27\\times10^{-24}\\,\\mathrm{J\\,T^{-1}}\\), and atomic mass \\(M=1.79\\times10^{-25}\\,\\mathrm{kg}\\), find each z-force and acceleration.",
      answer: "For \\(m_s=+1/2\\), equation [4] gives \\[F_z=-(2.00)\\left(\\frac12\\right)(9.27\\times10^{-24}\\,\\mathrm{J\\,T^{-1}})(1.50\\times10^3\\,\\mathrm{T\\,m^{-1}})=-1.39\\times10^{-20}\\,\\mathrm N.\\] For \\(m_s=-1/2\\), only the sign changes, so \\(F_z=+1.39\\times10^{-20}\\,\\mathrm N\\). Newton's second law gives the acceleration magnitude: \\[|a_z|=\\frac{|F_z|}{M}=\\frac{1.39\\times10^{-20}\\,\\mathrm N}{1.79\\times10^{-25}\\,\\mathrm{kg}}=7.77\\times10^4\\,\\mathrm{m\\,s^{-2}}.\\] **Final result:** the two components experience forces \\(\\mp1.39\\times10^{-20}\\,\\mathrm N\\) and accelerations \\(\\mp7.77\\times10^4\\,\\mathrm{m\\,s^{-2}}\\), where the upper signs correspond to \\(m_s=+1/2\\) for the stated positive gradient.",
    },
    {
      title: "Why a uniform magnet does not split the beam",
      question: "A collimated spin-half beam enters a perfectly uniform z-directed magnetic field. Does equation [2] predict spatial Stern-Gerlach splitting?",
      answer: "Uniformity means \\[\\frac{\\partial B_z}{\\partial z}=0.\\] Substituting this derivative into equation [2] gives \\[F_z=\\mu_z\\frac{\\partial B_z}{\\partial z}=0\\] for either allowed value of \\(\\mu_z\\). **Final result:** the uniform field produces no translational beam separation. A Stern-Gerlach analyser requires a nonzero field gradient, even though a uniform field can still produce different magnetic energies.",
    },
  ]}
/>
`;
