export const content = String.raw`## Principle

Diffraction is wave spreading caused by a finite aperture or obstacle. The observed pattern depends on wavelength, aperture size, and distance from the aperture.

Fresnel diffraction is near-field diffraction, where wavefront curvature still matters. Fraunhofer diffraction is far-field diffraction, where the pattern depends mainly on angle.

## Notation

<Notation
  items={[
    { symbol: "a", meaning: "aperture or slit width", unit: "m" },
    { symbol: "L", meaning: "distance from aperture to screen", unit: "m" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "N_F", meaning: "Fresnel number", unit: "1" },
    { symbol: "\\theta", meaning: "observation angle", unit: "rad" },
  ]}
/>

## Method

### Derivation 1: Use Huygens wavelets

Each point across an aperture acts as a source of secondary wavelets. The final pattern is set by the phase relationships between those wavelets.

<PhysicsDerivation
  items={[
    {
      label: "Wavelet phase difference",
      tex: "\\Delta\\phi=\\frac{2\\pi\\Delta r}{\\lambda}",
    },
    {
      label: "Far-field path difference across width",
      tex: "\\Delta r\\approx a\\sin\\theta",
    },
  ]}
/>

### Derivation 2: Classify the regime

The Fresnel number compares aperture size with diffraction spreading over distance \\(L\\).

<PhysicsDerivation
  items={[
    {
      label: "Fresnel number",
      tex: "N_F=\\frac{a^2}{\\lambda L}",
    },
    {
      label: "Fraunhofer tendency",
      tex: "N_F\\ll1",
    },
    {
      label: "Fresnel tendency",
      tex: "N_F\\gtrsim1",
    },
  ]}
/>

### Derivation 3: Relate angle to screen position

In the far field, positions on a distant screen correspond directly to diffraction angles.

<PhysicsDerivation
  items={[
    {
      label: "Screen geometry",
      tex: "y=L\\tan\\theta",
    },
    {
      label: "Small-angle form",
      tex: "y\\approx L\\theta",
    },
  ]}
/>

## Rules

<Equation label="Fresnel number" tex="N_F=\frac{a^2}{\lambda L}" />

<Equation label="Far-field path difference" tex="\Delta r\approx a\sin\theta" />

<Equation label="Small-angle screen position" tex="y\approx L\theta" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A slit has \\(a=0.20\\,\\mathrm{mm}\\), \\(L=2.0\\,\\mathrm{m}\\), and \\(\\lambda=500\\,\\mathrm{nm}\\). Estimate \\(N_F\\).",
      answer: "\\[N_F=\\frac{(0.20\\times10^{-3})^2}{(500\\times10^{-9})(2.0)}=0.040\\] This is in the Fraunhofer range.",
    },
    {
      title: "Example 2",
      question: "A far-field maximum is observed at \\(\\theta=2.0\\times10^{-3}\\,\\mathrm{rad}\\) on a screen \\(1.5\\,\\mathrm{m}\\) away. Find \\(y\\).",
      answer: "\\[y\\approx L\\theta=(1.5)(2.0\\times10^{-3})=3.0\\times10^{-3}\\,\\mathrm{m}\\]",
    },
  ]}
/>

## Checks

- Diffraction becomes important when an aperture dimension is comparable with the wavelength.
- Fraunhofer patterns are usually simpler because they are angular patterns.
- Increasing \\(L\\) lowers \\(N_F\\), pushing the setup toward the far field.
- The small-angle screen formula needs \\(y\\ll L\\).`;
