export const content = String.raw`## Principle

A circular aperture forms an Airy pattern rather than a perfect point image. The finite aperture limits angular resolution, so two point sources are just resolved when one Airy maximum falls near the other's first minimum.

## Notation

<Notation
  items={[
    { symbol: "D", meaning: "aperture diameter", unit: "m" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "\\theta_R", meaning: "Rayleigh angular resolution", unit: "rad" },
    { symbol: "L", meaning: "distance to sources or screen", unit: "m" },
    { symbol: "s", meaning: "minimum resolvable separation", unit: "m" },
  ]}
/>

## Method

### Derivation 1: First Airy minimum

For a circular aperture, the first dark ring occurs at an angle set by wavelength divided by aperture diameter.

<PhysicsDerivation
  items={[
    {
      label: "First dark ring",
      tex: "\\theta_1\\approx1.22\\frac{\\lambda}{D}",
    },
    {
      label: "Rayleigh criterion",
      tex: "\\theta_R\\approx1.22\\frac{\\lambda}{D}",
    },
  ]}
/>

### Derivation 2: Convert angular to linear resolution

For small angles, angular separation corresponds to linear separation divided by distance.

<PhysicsDerivation
  items={[
    {
      label: "Small-angle geometry",
      tex: "\\theta\\approx\\frac{s}{L}",
    },
    {
      label: "Linear resolution",
      tex: "s_{\\min}\\approx1.22\\frac{\\lambda L}{D}",
    },
  ]}
/>

### Derivation 3: Compare apertures

Larger apertures produce narrower diffraction patterns and better resolution.

<PhysicsDerivation
  items={[
    {
      label: "Resolution scaling",
      tex: "\\theta_R\\propto\\frac{1}{D}",
    },
    {
      label: "Wavelength scaling",
      tex: "\\theta_R\\propto\\lambda",
    },
  ]}
/>

## Rules

<Equation label="Rayleigh criterion" tex="\theta_R\approx1.22\frac{\lambda}{D}" />

<Equation label="Linear separation" tex="s_{\min}\approx L\theta_R" />

<Equation label="Diffraction-limited separation" tex="s_{\min}\approx1.22\frac{\lambda L}{D}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the angular resolution of a \\(0.10\\,\\mathrm{m}\\) telescope aperture using \\(550\\,\\mathrm{nm}\\) light.",
      answer: "\\[\\theta_R=1.22\\frac{550\\times10^{-9}}{0.10}=6.7\\times10^{-6}\\,\\mathrm{rad}\\]",
    },
    {
      title: "Example 2",
      question: "At \\(2.0\\,\\mathrm{km}\\), what separation corresponds to \\(6.7\\times10^{-6}\\,\\mathrm{rad}\\)?",
      answer: "\\[s=L\\theta=(2.0\\times10^3)(6.7\\times10^{-6})=1.34\\times10^{-2}\\,\\mathrm{m}\\]",
    },
  ]}
/>

## Checks

- Larger aperture means smaller diffraction blur.
- Shorter wavelength gives better diffraction-limited resolution.
- Rayleigh resolution is an angular criterion.
- Magnifying a blurred diffraction image does not create new resolved detail.`;
