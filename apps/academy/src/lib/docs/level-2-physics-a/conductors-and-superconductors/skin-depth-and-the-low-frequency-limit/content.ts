export const content = String.raw`## Principle

Alternating current crowds near a conductor surface, with less field reaching deeper into the material.

At frequencies well below the Drude collision rate, conductivity is approximately real and equal to its dc value. In a good conductor this makes the wave number proportional to \\(1+i\\), so the field oscillates and decays over the same characteristic distance, the skin depth.

## Notation

<Notation
  items={[
    { symbol: "\\sigma_0", meaning: "real low-frequency conductivity", unit: "S m^{-1}" },
    { symbol: "\\tau", meaning: "momentum-relaxation time", unit: "s" },
    { symbol: "\\omega,f", meaning: "angular frequency and frequency", unit: "rad s^{-1}, Hz" },
    { symbol: "\\mu,\\epsilon", meaning: "material permeability and permittivity", unit: "H m^{-1}, F m^{-1}" },
    { symbol: "\\widetilde k=k_{\\mathrm r}+ik_{\\mathrm i}", meaning: "complex wave number", unit: "m^{-1}" },
    { symbol: "\\delta", meaning: "skin depth, equal to the amplitude e-folding length", unit: "m" },
    { symbol: "\\lambda_{\\mathrm c}", meaning: "wavelength inside the good conductor", unit: "m" },
    { symbol: "\\widetilde{\\vec E}", meaning: "complex electric field whose real part is physical", unit: "V m^{-1}" },
    { symbol: "\\vec E_0", meaning: "constant complex electric-field amplitude at the surface", unit: "V m^{-1}" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

Use the harmonic convention \\(e^{i(kx-\omega t)}\\). The Drude conductivity becomes approximately real when \\(\omega\tau\ll1\\).

\\[
\widetilde\sigma(\omega)
=\frac{\sigma_0}{1-i\omega\tau}
\simeq\sigma_0.
\tag*{[1]}
\\]

For a homogeneous medium, the dispersion relation is

\\[
\widetilde k^2=\mu\epsilon\omega^2+i\mu\sigma_0\omega.
\tag*{[2]}
\\]

In the good-conductor limit \\(\sigma_0\gg\epsilon\omega\\), conduction current dominates displacement current, and [2] reduces to

\\[
\widetilde k^2\simeq i\mu\sigma_0\omega.
\tag*{[3]}
\\]

Because \\((1+i)^2=2i\\), the square root that decays into a conductor occupying \\(x\gt0\\) is

\\[
\widetilde k=(1+i)\sqrt{\frac{\mu\sigma_0\omega}{2}}.
\tag*{[4]}
\\]

Define the skin depth by the reciprocal of the imaginary part of \\(\widetilde k\\).

\\[
\delta=\frac{1}{k_{\mathrm i}}
=\sqrt{\frac{2}{\mu\sigma_0\omega}}
=\frac{1}{\sqrt{\pi f\mu\sigma_0}}.
\tag*{[5]}
\\]

Equation [4] then takes a particularly useful form.

\\[
\widetilde k=\frac{1+i}{\delta},
\qquad
k_{\mathrm r}=k_{\mathrm i}=\frac{1}{\delta}.
\tag*{[6]}
\\]

Substitute [6] into the harmonic field.

\\[
\widetilde{\vec E}(x,t)
=\vec E_0e^{i(\widetilde kx-\omega t)}
=\vec E_0e^{-x/\delta}e^{i(x/\delta-\omega t)}.
\tag*{[7]}
\\]

At depth \\(x=\delta\\), the field amplitude has fallen to \\(e^{-1}\\) of its surface value. Quantities proportional to amplitude squared, such as time-averaged intensity, fall as \\(e^{-2x/\delta}\\), so their e-folding depth is \\(\delta/2\\).

Since the real and imaginary parts of the wave number are equal, the wavelength inside the conductor is

\\[
\lambda_{\mathrm c}=\frac{2\pi}{k_{\mathrm r}}=2\pi\delta.
\tag*{[8]}
\\]

The frequency dependence is

\\[
\delta\propto f^{-1/2},
\qquad
\frac{\delta_2}{\delta_1}=\sqrt{\frac{f_1}{f_2}}
\quad
\text{for fixed }\mu\text{ and }\sigma_0.
\tag*{[9]}
\\]

Increasing frequency, permeability, or conductivity reduces penetration. This is why alternating current crowds toward a conductor's surface, although the approximation must be reconsidered if \\(\omega\tau\\) is no longer small or \\(\sigma_0\\) is no longer much greater than \\(\epsilon\omega\\).

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Skin depth of copper at 1 MHz",
      question: "Treat copper as nonmagnetic with \\(\\mu=\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{H\\,m^{-1}}\\) and \\(\\sigma_0=5.8\\times10^7\\,\\mathrm{S\\,m^{-1}}\\). Find its skin depth at \\(f=1.0\\,\\mathrm{MHz}\\).",
      answer: "Use the frequency form of equation [5]: \\[\\delta=\\frac{1}{\\sqrt{\\pi f\\mu_0\\sigma_0}}=\\frac{1}{\\sqrt{\\pi(1.0\\times10^6)(4\\pi\\times10^{-7})(5.8\\times10^7)}}=6.6\\times10^{-5}\\,\\mathrm m.\\] **Final result:** \\(\\delta=66\\,\\mu\\mathrm m\\). At this depth the field amplitude is \\(e^{-1}\\) of its surface value.",
    },
    {
      title: "Frequency for a chosen skin depth",
      question: "Using the same copper parameters, at what frequency is the skin depth \\(1.0\\,\\mathrm{mm}\\)?",
      answer: "Rearrange equation [5] with \\(\\delta=1.0\\times10^{-3}\\,\\mathrm m\\): \\[f=\\frac{1}{\\pi\\mu_0\\sigma_0\\delta^2}=\\frac{1}{\\pi(4\\pi\\times10^{-7})(5.8\\times10^7)(1.0\\times10^{-3})^2}=4.4\\times10^3\\,\\mathrm{Hz}.\\] **Final result:** a skin depth of \\(1.0\\,\\mathrm{mm}\\) occurs at approximately \\(4.4\\,\\mathrm{kHz}\\).",
    },
  ]}
/>
`;
