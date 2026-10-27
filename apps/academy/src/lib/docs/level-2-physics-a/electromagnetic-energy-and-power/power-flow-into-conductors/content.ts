export const content = String.raw`## Principle

When a wave strikes a metal, most energy may reflect while the small part that enters is converted into heat near the surface.

An electromagnetic wave entering a good conductor carries power inward through the surface, but its fields and Poynting flux decay with depth. The lost electromagnetic power appears as Joule heating. For a highly conducting surface, most incident power is reflected and the small entering fraction is controlled by the real part of the surface impedance.

## Notation

<Notation
  items={[
    { symbol: "z", meaning: "depth into the conductor", unit: "m" },
    { symbol: "\\hat{\\vec n}", meaning: "unit normal directed into the conductor" },
    { symbol: "\\widetilde{\\vec E},\\widetilde{\\vec B},\\widetilde{\\vec H},\\widetilde{\\vec J}", meaning: "complex electric field, magnetic flux density, auxiliary magnetic field, and conduction current density whose real parts are physical", unit: "V m^{-1}, T, A m^{-1}, A m^{-2}" },
    { symbol: "E_{0i},E_{0r},E_{0t}", meaning: "complex peak phasor amplitudes of the incident, reflected, and transmitted electric fields at the surface", unit: "V m^{-1}" },
    { symbol: "H_{0t}", meaning: "complex peak phasor amplitude of the transmitted auxiliary magnetic field at the surface", unit: "A m^{-1}" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
    { symbol: "t", meaning: "time", unit: "s" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
    { symbol: "\\mu,\\epsilon,\\sigma", meaning: "conductor permeability, permittivity, and conductivity", unit: "H m^{-1}, F m^{-1}, S m^{-1}" },
    { symbol: "\\delta", meaning: "skin depth", unit: "m" },
    { symbol: "\\widetilde k", meaning: "complex wave number in the conductor", unit: "m^{-1}" },
    { symbol: "Z_s,R_s", meaning: "complex surface impedance and surface resistance", unit: "\\Omega, \\Omega" },
    { symbol: "Z_0,\\mu_0,c", meaning: "vacuum impedance, vacuum permeability, and speed of light", unit: "\\Omega, H m^{-1}, m s^{-1}" },
    { symbol: "r_E,t_E", meaning: "electric-field reflection and surface transmission amplitude coefficients" },
    { symbol: "R,T", meaning: "reflected fraction and fraction entering the conductor" },
    { symbol: "I_i", meaning: "average incident intensity", unit: "W m^{-2}" },
    { symbol: "\\langle S_z\\rangle,\\langle q_J\\rangle", meaning: "average inward Poynting flux and average Joule-heating power density", unit: "W m^{-2}, W m^{-3}" },
  ]}
/>

## The Core Method

Let a good conductor occupy \\(z\gt0\\), choose \\(\hat{\vec n}=+\hat{\vec z}\\) into it, and use peak phasors with time dependence \\(e^{-i\omega t}\\). In the limit \\(\sigma\gg\omega\epsilon\\),

\\[
\delta=\sqrt{\frac{2}{\omega\mu\sigma}},
\qquad
\widetilde k=\frac{1+i}{\delta},
\qquad
\widetilde{\vec E}(z,t)
=\hat{\vec x}E_{0t}e^{-z/\delta}e^{i(z/\delta-\omega t)}.
\tag*{[1]}
\\]

Faraday's law gives the corresponding magnetic field. Since \\(\hat{\vec x}\times\hat{\vec y}=\hat{\vec z}\\), the field orientation makes the Poynting vector point into the conductor:

\\[
\nabla\times\widetilde{\vec E}
=i\widetilde k\hat{\vec z}\times\widetilde{\vec E}
=i\omega\widetilde{\vec B},
\qquad
\widetilde{\vec H}=\frac{\widetilde{\vec B}}{\mu}
=\frac{\widetilde k}{\omega\mu}
\hat{\vec z}\times\widetilde{\vec E},
\qquad
\widetilde{\vec H}(z,t)
=\hat{\vec y}\frac{1+i}{\omega\mu\delta}
E_{0t}e^{-z/\delta}e^{i(z/\delta-\omega t)},
\qquad
Z_s=\frac{E_{0t}}{H_{0t}}
=\frac{\omega\mu\delta}{1+i}
=(1-i)R_s,
\qquad
R_s=\sqrt{\frac{\omega\mu}{2\sigma}}=\frac{1}{\sigma\delta}.
\tag*{[2]}
\\]

Time averaging the complex Poynting vector gives

\\[
\boxed{
\langle S_z(z)\rangle
=\frac{1}{2}\operatorname{Re}
\left(\widetilde{\vec E}\times\widetilde{\vec H}^{*}\right)\cdot\hat{\vec z}
=\frac{|E_{0t}|^2}{2\omega\mu\delta}e^{-2z/\delta}
}.
\tag*{[3]}
\\]

The field amplitude decays as \\(e^{-z/\delta}\\), while power flux decays twice as rapidly, as \\(e^{-2z/\delta}\\). Ohm's law gives the cycle-averaged Joule-heating density:

\\[
\langle q_J(z)\rangle
=\frac{1}{2}\operatorname{Re}
\left(\widetilde{\vec J}\cdot\widetilde{\vec E}^{*}\right)
=\frac{1}{2}\sigma|E_{0t}|^2e^{-2z/\delta}.
\tag*{[4]}
\\]

Differentiate [3] and use \\(\delta^2=2/(\omega\mu\sigma)\\):

\\[
-\frac{\mathrm d\langle S_z\rangle}{\mathrm dz}
=\frac{|E_{0t}|^2}{\omega\mu\delta^2}e^{-2z/\delta}
=\frac{1}{2}\sigma|E_{0t}|^2e^{-2z/\delta}
=\langle q_J\rangle.
\tag*{[5]}
\\]

Equation [5] is the steady-state local Poynting theorem: every reduction in inward electromagnetic flux becomes heat. The same result follows by integrating through the half-space:

\\[
\int_0^\infty\langle q_J\rangle\,\mathrm dz
=\frac{\sigma|E_{0t}|^2\delta}{4}
=\frac{|E_{0t}|^2}{2\omega\mu\delta}
=\langle S_z(0)\rangle.
\tag*{[6]}
\\]

At normal incidence from vacuum, tangential-field continuity at \\(z=0\\) gives \\(E_{0i}+E_{0r}=E_{0t}\\) and \\((E_{0i}-E_{0r})/Z_0=E_{0t}/Z_s\\). Solving these two equations gives

\\[
r_E=\frac{E_{0r}}{E_{0i}}=\frac{Z_s-Z_0}{Z_s+Z_0},
\qquad
t_E=\frac{E_{0t}}{E_{0i}}=\frac{2Z_s}{Z_s+Z_0}.
\tag*{[7]}
\\]

The exact fractions reflected and entering the semi-infinite conductor are therefore

\\[
R=|r_E|^2,
\qquad
\boxed{
T=\frac{\langle S_z(0)\rangle}{I_i}
=\frac{4Z_0\operatorname{Re}(Z_s)}{|Z_0+Z_s|^2}
=1-R
}.
\tag*{[8]}
\\]

For a highly conducting nonmagnetic surface, \\(|Z_s|\ll Z_0\\), \\(\mu=\mu_0\\), and \\(Z_0=\mu_0c\\). Keeping the first nonzero term gives

\\[
T\simeq\frac{4R_s}{Z_0}=\frac{2\omega\delta}{c},
\qquad
R\simeq1-\frac{2\omega\delta}{c}.
\tag*{[9]}
\\]

Here \\(T\\) is power entering and ultimately absorbed by a semi-infinite conductor, not power emerging from its far side. If the conductor itself is chosen as the control volume, its outward normal at the illuminated face points along \\(-\hat{\vec z}\\); hence \\(\vec S\cdot\hat{\vec n}_{\mathrm{out}}\lt0\\), correctly marking inward power flow.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Power absorbed by a copper surface",
      question: "A normally incident wave of average intensity \\(1.00\\times10^3\\,\\mathrm{W\\,m^{-2}}\\) strikes copper at frequency \\(f=1.00\\,\\mathrm{MHz}\\). Take \\(\\sigma=5.80\\times10^7\\,\\mathrm{S\\,m^{-1}}\\), \\(\\mu=\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{H\\,m^{-1}}\\), and \\(Z_0=377\\,\\Omega\\). Find the skin depth, surface resistance, and power per unit area entering the copper.",
      answer: "First use \\(\\omega=2\\pi f\\) in equation [1]: \\[\\delta=\\sqrt{\\frac{2}{(2\\pi\\times10^6)(4\\pi\\times10^{-7})(5.80\\times10^7)}}=6.61\\times10^{-5}\\,\\mathrm m.\\] Equation [2] then gives \\[R_s=\\frac{1}{\\sigma\\delta}=\\frac{1}{(5.80\\times10^7)(6.61\\times10^{-5})}=2.61\\times10^{-4}\\,\\Omega.\\] Since \\(R_s\\ll Z_0\\), equation [9] gives \\[T\\simeq\\frac{4R_s}{Z_0}=\\frac{4(2.61\\times10^{-4})}{377}=2.77\\times10^{-6}.\\] Therefore \\[\\langle S_z(0)\\rangle=TI_i=(2.77\\times10^{-6})(1.00\\times10^3)=2.77\\times10^{-3}\\,\\mathrm{W\\,m^{-2}}.\\] **Final result:** \\(\\delta=66.1\\,\\mu\\mathrm m\\), \\(R_s=0.261\\,\\mathrm{m\\Omega}\\), and \\(2.77\\,\\mathrm{mW\\,m^{-2}}\\) enters and is absorbed. The small value is consistent with copper's reflection coefficient being close to one.",
    },
    {
      title: "Where the entering power becomes heat",
      question: "For a semi-infinite good conductor, what fraction of the surface power flux remains at one skin depth, and what fraction has become Joule heat above that depth?",
      answer: "Equation [3] gives the flux ratio directly: \\[\\frac{\\langle S_z(\\delta)\\rangle}{\\langle S_z(0)\\rangle}=e^{-2\\delta/\\delta}=e^{-2}=0.135.\\] By equation [5], the missing electromagnetic flux has become Joule heat, so the fraction dissipated between \\(z=0\\) and \\(z=\\delta\\) is \\[1-e^{-2}=1-0.135=0.865.\\] **Final result:** \\(13.5\\%\\) of the entering power remains at one skin depth and \\(86.5\\%\\) has already become heat. The power penetration depth is therefore shorter than the field-amplitude skin depth.",
    },
  ]}
/>
`;
