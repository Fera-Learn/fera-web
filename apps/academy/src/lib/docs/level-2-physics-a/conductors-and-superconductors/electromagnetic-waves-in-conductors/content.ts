export const content = String.raw`## Principle

A radio wave entering metal becomes weaker with depth instead of travelling indefinitely at constant amplitude.

An electromagnetic wave in a conductor drives a conduction current as well as a displacement current. Maxwell's equations therefore produce a complex wave number: its real part controls phase advance and its positive imaginary part controls attenuation into the material.

## Notation

<Notation
  items={[
    { symbol: "\\widetilde{\\vec E},\\widetilde{\\vec B}", meaning: "complex electric and magnetic fields whose real parts are physical", unit: "V m^{-1}, T" },
    { symbol: "\\vec E_0", meaning: "constant complex electric-field amplitude", unit: "V m^{-1}" },
    { symbol: "\\widetilde\\sigma", meaning: "complex conductivity at angular frequency omega", unit: "S m^{-1}" },
    { symbol: "\\epsilon_0,\\mu_0", meaning: "vacuum permittivity and permeability", unit: "F m^{-1}, H m^{-1}" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
    { symbol: "\\widetilde k=k_{\\mathrm r}+ik_{\\mathrm i}", meaning: "complex wave number with nonnegative attenuation constant", unit: "m^{-1}" },
    { symbol: "\\lambda,\\ell_{\\mathrm a}", meaning: "wavelength and amplitude attenuation length", unit: "m, m" },
    { symbol: "c", meaning: "vacuum speed of light", unit: "m s^{-1}" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

Assume a homogeneous, isotropic, nonmagnetic conductor. Excess bulk charge has already relaxed, so \\(\nabla\cdot\widetilde{\vec E}=0\\), and the frequency-domain material law is \\(\widetilde{\vec J}=\widetilde\sigma\widetilde{\vec E}\\). Maxwell's curl equations are

\\[
\nabla\times\widetilde{\vec E}
=-\frac{\partial\widetilde{\vec B}}{\partial t},
\qquad
\nabla\times\widetilde{\vec B}
=\mu_0\widetilde\sigma\widetilde{\vec E}
+\mu_0\epsilon_0\frac{\partial\widetilde{\vec E}}{\partial t}.
\tag*{[1]}
\\]

Take the curl of Faraday's law and substitute the Ampere-Maxwell law.

\\[
\nabla\times(\nabla\times\widetilde{\vec E})
=-\mu_0\widetilde\sigma
\frac{\partial\widetilde{\vec E}}{\partial t}
-\mu_0\epsilon_0
\frac{\partial^2\widetilde{\vec E}}{\partial t^2}.
\tag*{[2]}
\\]

Use \\(\nabla\times(\nabla\times\vec E)=\nabla(\nabla\cdot\vec E)-\nabla^2\vec E\\) and the vanishing bulk divergence.

\\[
\nabla^2\widetilde{\vec E}
=\mu_0\widetilde\sigma
\frac{\partial\widetilde{\vec E}}{\partial t}
+\mu_0\epsilon_0
\frac{\partial^2\widetilde{\vec E}}{\partial t^2}.
\tag*{[3]}
\\]

Choose propagation into the conductor along positive \\(x\\) and use the harmonic convention

\\[
\widetilde{\vec E}(x,t)=\vec E_0e^{i(\widetilde kx-\omega t)},
\qquad
\widetilde k=k_{\mathrm r}+ik_{\mathrm i}.
\tag*{[4]}
\\]

The derivatives in [3] become \\(\nabla^2\to-\widetilde k^2\\), \\(\partial/\partial t\to-i\omega\\), and \\(\partial^2/\partial t^2\to-\omega^2\\). Therefore

\\[
-\widetilde k^2
=-i\mu_0\omega\widetilde\sigma
-\mu_0\epsilon_0\omega^2
\quad\Longrightarrow\quad
\widetilde k^2
=\mu_0\epsilon_0\omega^2+i\mu_0\omega\widetilde\sigma.
\tag*{[5]}
\\]

The two terms in [5] arise from displacement current and conduction current, respectively. Their magnitude ratio is

\\[
\frac{|\widetilde J|}{|\epsilon_0\partial\widetilde E/\partial t|}
=\frac{|\widetilde\sigma|}{\epsilon_0\omega}.
\tag*{[6]}
\\]

A good conductor at the chosen frequency satisfies \\(|\widetilde\sigma|\gg\epsilon_0\omega\\). The classification is frequency-dependent; a material cannot be called a good conductor for every possible frequency without checking [6].

For real positive conductivity, write [5] as \\(\widetilde k^2=a+ib\\), where

\\[
a=\mu_0\epsilon_0\omega^2,
\qquad
b=\mu_0\sigma\omega,
\qquad
r=\sqrt{a^2+b^2}.
\tag*{[7]}
\\]

Equating \\((k_{\mathrm r}+ik_{\mathrm i})^2\\) to \\(a+ib\\) gives \\(k_{\mathrm r}^2-k_{\mathrm i}^2=a\\) and \\(2k_{\mathrm r}k_{\mathrm i}=b\\). Solving those simultaneous relations,

\\[
k_{\mathrm r}=\sqrt{\frac{r+a}{2}},
\qquad
k_{\mathrm i}=\sqrt{\frac{r-a}{2}}.
\tag*{[8]}
\\]

The positive roots describe phase advance and decay into a conductor occupying \\(x\gt0\\). Indeed, [4] becomes

\\[
\widetilde{\vec E}(x,t)
=\vec E_0e^{-k_{\mathrm i}x}e^{i(k_{\mathrm r}x-\omega t)},
\qquad
\lambda=\frac{2\pi}{k_{\mathrm r}},
\qquad
\ell_{\mathrm a}=\frac{1}{k_{\mathrm i}}.
\tag*{[9]}
\\]

The alternative square root changes both signs and grows as \\(x\\) increases. It is rejected for a passive semi-infinite conductor because there is no source at large positive \\(x\\) to sustain exponential growth.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Conduction current versus displacement current",
      question: "Copper has conductivity \\(5.8\\times10^7\\,\\mathrm{S\\,m^{-1}}\\). At \\(f=1.0\\,\\mathrm{GHz}\\), compare the conduction-current amplitude with the displacement-current amplitude.",
      answer: "Use equation [6], \\(\\omega=2\\pi f\\), and \\(\\epsilon_0=8.85\\times10^{-12}\\,\\mathrm{F\\,m^{-1}}\\): \\[\\frac{|\\widetilde J|}{|\\epsilon_0\\partial\\widetilde E/\\partial t|}=\\frac{5.8\\times10^7}{(8.85\\times10^{-12})(2\\pi\\times10^9)}=1.0\\times10^9.\\] **Final result:** conduction current is about a billion times larger, so copper is an excellent conductor at this frequency.",
    },
    {
      title: "Selecting the physical complex wave number",
      question: "A calculation for a conductor gives the roots \\(\\widetilde k=\\pm(20+20i)\\,\\mathrm{m^{-1}}\\). Which root describes a wave entering a sample that occupies \\(x\\gt0\\), and by what factor does its amplitude change over \\(5.0\\,\\mathrm{cm}\\)?",
      answer: "With the convention in equation [4], the root with positive imaginary part gives \\(e^{-k_{\\mathrm i}x}\\), so choose \\(\\widetilde k=(20+20i)\\,\\mathrm{m^{-1}}\\). At \\(x=0.050\\,\\mathrm m\\), \\[\\frac{E(x)}{E(0)}=e^{-k_{\\mathrm i}x}=e^{-(20)(0.050)}=e^{-1}=0.368.\\] **Final result:** choose \\(20+20i\\,\\mathrm{m^{-1}}\\); the amplitude falls to \\(36.8\\%\\) of its surface value.",
    },
  ]}
/>
`;
