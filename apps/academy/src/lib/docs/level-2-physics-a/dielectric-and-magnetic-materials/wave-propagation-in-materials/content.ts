export const content = String.raw`## Principle

A wave travelling through matter drives free charges, shifts bound charges, and responds to microscopic magnetic loops at the same time.

In a homogeneous material, free conduction current, electric polarisation, and magnetisation all modify Maxwell's equations. Their combined effect gives a material wave equation and a dispersion relation linking angular frequency to a generally complex wave number.

## Notation

<Notation
  items={[
    { symbol: "\\widetilde{\\vec E},\\widetilde{\\vec B}", meaning: "complex electric and magnetic fields whose real parts are physical", unit: "V m^{-1}, T" },
    { symbol: "\\vec P,\\vec M", meaning: "polarisation and magnetisation", unit: "C m^{-2}, A m^{-1}" },
    { symbol: "\\vec J_{\\mathrm f},\\vec J_{\\mathrm p},\\vec J_{\\mathrm b}", meaning: "free, polarisation, and magnetisation-bound current densities", unit: "A m^{-2}" },
    { symbol: "\\sigma_{\\mathrm n},\\widetilde\\sigma_{\\mathrm n}", meaning: "time-domain and complex frequency-domain electrical conductivity", unit: "S m^{-1}" },
    { symbol: "\\epsilon_0,\\mu_0", meaning: "vacuum permittivity and permeability", unit: "F m^{-1}, H m^{-1}" },
    { symbol: "\\epsilon_{\\mathrm r},\\mu_{\\mathrm r}", meaning: "relative permittivity and permeability" },
    { symbol: "\\epsilon,\\mu", meaning: "material permittivity and permeability", unit: "F m^{-1}, H m^{-1}" },
    { symbol: "\\omega,\\widetilde k", meaning: "angular frequency and complex wave number", unit: "rad s^{-1}, m^{-1}" },
    { symbol: "\\vec E_0,\\vec k", meaning: "complex electric-field amplitude and wave vector", unit: "V m^{-1}, m^{-1}" },
    { symbol: "v_{\\mathrm p},\\lambda,c", meaning: "phase speed, wavelength, and vacuum light speed", unit: "m s^{-1}, m, m s^{-1}" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

Assume an infinite, linear, isotropic, homogeneous material with no impressed free-current sources. The free current is then the Ohmic conduction current, and the total material current also includes polarisation current and magnetisation-bound current.

\\[
\vec J_{\mathrm f}=\sigma_{\mathrm n}\vec E,
\qquad
\vec J_{\mathrm p}=\frac{\partial\vec P}{\partial t},
\qquad
\vec J_{\mathrm b}=\nabla\times\vec M.
\tag*{[1]}
\\]

Ampere-Maxwell's law therefore becomes

\\[
\nabla\times\vec B
=\mu_0\left(
\vec J_{\mathrm f}
+\frac{\partial\vec P}{\partial t}
+\nabla\times\vec M
\right)
+\mu_0\epsilon_0\frac{\partial\vec E}{\partial t}.
\tag*{[2]}
\\]

Use the constant material relations

\\[
\vec P=\epsilon_0(\epsilon_{\mathrm r}-1)\vec E,
\qquad
\mu_0\vec M
=\frac{\mu_{\mathrm r}-1}{\mu_{\mathrm r}}\vec B.
\tag*{[3]}
\\]

Move the magnetisation curl to the left of [2]. Since \\(\mu_{\mathrm r}\\) is spatially constant, equations [2] and [3] give

\\[
\frac{1}{\mu_{\mathrm r}}\nabla\times\vec B
=\mu_0\sigma_{\mathrm n}\vec E
+\mu_0\epsilon_{\mathrm r}\epsilon_0
\frac{\partial\vec E}{\partial t}.
\tag*{[4]}
\\]

Define \\(\mu=\mu_{\mathrm r}\mu_0\\) and \\(\epsilon=\epsilon_{\mathrm r}\epsilon_0\\), then multiply [4] by \\(\mu_{\mathrm r}\\).

\\[
\nabla\times\vec B
=\mu\sigma_{\mathrm n}\vec E
+\mu\epsilon\frac{\partial\vec E}{\partial t}.
\tag*{[5]}
\\]

Take the curl of Faraday's law, \\(\nabla\times\vec E=-\partial\vec B/\partial t\\), and substitute [5].

\\[
\nabla\times(\nabla\times\vec E)
=-\mu\sigma_{\mathrm n}\frac{\partial\vec E}{\partial t}
-\mu\epsilon\frac{\partial^2\vec E}{\partial t^2}.
\tag*{[6]}
\\]

For a transverse wave in a charge-neutral homogeneous bulk, \\(\nabla\cdot\vec E=0\\). Using \\(\nabla\times(\nabla\times\vec E)=\nabla(\nabla\cdot\vec E)-\nabla^2\vec E\\) in [6] gives the material wave equation

\\[
\boxed{
\nabla^2\vec E
-\mu\sigma_{\mathrm n}\frac{\partial\vec E}{\partial t}
-\mu\epsilon\frac{\partial^2\vec E}{\partial t^2}=0
}.
\tag*{[7]}
\\]

For harmonic response, allow the conductivity to depend on frequency and write it as \\(\widetilde\sigma_{\mathrm n}(\omega)\\). Insert a plane wave travelling in the positive \\(x\\)-direction with the convention

\\[
\widetilde{\vec E}(x,t)
=\vec E_0e^{i(\widetilde kx-\omega t)}.
\tag*{[8]}
\\]

Then \\(\nabla^2\to-\widetilde k^2\\), \\(\partial/\partial t\to-i\omega\\), and \\(\partial^2/\partial t^2\to-\omega^2\\). Equation [7] becomes

\\[
-\widetilde k^2
+i\omega\mu\widetilde\sigma_{\mathrm n}
+\mu\epsilon\omega^2=0,
\tag*{[9]}
\\]

so the general material dispersion relation is

\\[
\boxed{
\widetilde k^2
=\mu\epsilon\omega^2
+i\omega\mu\widetilde\sigma_{\mathrm n}
}.
\tag*{[10]}
\\]

In a lossless insulator, \\(\widetilde\sigma_{\mathrm n}=0\\), so \\(k=\omega\sqrt{\mu\epsilon}\\). The phase speed and wavelength are then

\\[
v_{\mathrm p}=\frac{\omega}{k}
=\frac{1}{\sqrt{\mu\epsilon}}
=\frac{c}{\sqrt{\mu_{\mathrm r}\epsilon_{\mathrm r}}},
\qquad
\lambda=\frac{2\pi}{k}.
\tag*{[11]}
\\]

Faraday's law also gives \\(\vec k\times\vec E=\omega\vec B\\). For mutually perpendicular fields, \\(E/B=\omega/k=v_{\mathrm p}\\). If conductivity or material parameters depend on frequency, \\(\widetilde k\\) is frequency-dependent and often complex, producing both dispersion and attenuation.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Speed and wavelength in a dielectric",
      question: "A lossless, nonmagnetic dielectric has \\(\\epsilon_{\\mathrm r}=4.0\\). Find the phase speed and wavelength at frequency \\(f=3.0\\times10^{14}\\,\\mathrm{Hz}\\). Use \\(c=3.0\\times10^8\\,\\mathrm{m\\,s^{-1}}\\).",
      answer: "Nonmagnetic means \\(\\mu_{\\mathrm r}=1\\). Equation [11] gives \\[v_{\\mathrm p}=\\frac{c}{\\sqrt{\\mu_{\\mathrm r}\\epsilon_{\\mathrm r}}}=\\frac{3.0\\times10^8}{\\sqrt{4.0}}=1.5\\times10^8\\,\\mathrm{m\\,s^{-1}}.\\] Since \\(\\lambda=v_{\\mathrm p}/f\\), \\[\\lambda=\\frac{1.5\\times10^8}{3.0\\times10^{14}}=5.0\\times10^{-7}\\,\\mathrm m=500\\,\\mathrm{nm}.\\] **Final result:** \\(v_{\\mathrm p}=1.5\\times10^8\\,\\mathrm{m\\,s^{-1}}\\) and \\(\\lambda=500\\,\\mathrm{nm}\\).",
    },
    {
      title: "Separating free and bound response",
      question: "Which terms in the general dispersion relation arise from free carriers and which arise from bound charges and magnetic dipoles?",
      answer: "The conductivity term \\(i\\omega\\mu\\widetilde\\sigma_{\\mathrm n}\\) comes from free conduction current \\(\\vec J_{\\mathrm f}\\). The factor \\(\\epsilon\\) in \\(\\mu\\epsilon\\omega^2\\) includes bound electric polarisation, while \\(\\mu\\) includes bound magnetic current. **Final result:** setting \\(\\widetilde\\sigma_{\\mathrm n}=0\\) removes free conduction without removing the dielectric or magnetic response, so an insulating material can still change wave speed.",
    },
  ]}
/>
`;
