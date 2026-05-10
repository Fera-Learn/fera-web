export const content = String.raw`## Principle

A single slit produces a broad central maximum and weaker side maxima. Dark fringes occur when wavelets from different parts of the slit cancel in pairs.

## Notation

<Notation
  items={[
    { symbol: "a", meaning: "slit width", unit: "m" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "\\theta_m", meaning: "angle of diffraction minimum m", unit: "rad" },
    { symbol: "m", meaning: "minimum order", unit: "1" },
    { symbol: "L", meaning: "screen distance", unit: "m" },
    { symbol: "y_m", meaning: "screen position of minimum m", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Pair cancellation

For the first minimum, the path difference between light from the top and bottom of the slit is one wavelength. Rays from the top half then cancel rays from the bottom half.

<PhysicsDerivation
  items={[
    {
      label: "First minimum",
      tex: "a\\sin\\theta_1=\\lambda",
    },
    {
      label: "Minimum order",
      tex: "a\\sin\\theta_m=m\\lambda",
    },
  ]}
/>

### Derivation 2: Screen positions

For small angles, the angular minimum can be converted to a screen position.

<PhysicsDerivation
  items={[
    {
      label: "Small angle",
      tex: "\\sin\\theta\\approx\\tan\\theta\\approx\\frac{y}{L}",
    },
    {
      label: "Minimum position",
      tex: "y_m\\approx\\frac{m\\lambda L}{a}",
    },
  ]}
/>

### Derivation 3: Central maximum width

The central maximum extends from the first minimum on one side to the first minimum on the other.

<PhysicsDerivation
  items={[
    {
      label: "Half-width",
      tex: "y_1\\approx\\frac{\\lambda L}{a}",
    },
    {
      label: "Full central width",
      tex: "w_{\\mathrm{central}}\\approx\\frac{2\\lambda L}{a}",
    },
  ]}
/>

## Rules

<Equation label="Single-slit minima" tex="a\sin\theta_m=m\lambda" />

<Equation label="Small-angle minima" tex="y_m\approx\frac{m\lambda L}{a}" />

<Equation label="Central maximum width" tex="w_{\mathrm{central}}\approx\frac{2\lambda L}{a}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Light of wavelength \\(520\\,\\mathrm{nm}\\) passes through a slit of width \\(0.250\\,\\mathrm{mm}\\). Find the first-minimum angle.",
      answer: "\\[\\sin\\theta_1=\\frac{520\\times10^{-9}}{0.250\\times10^{-3}}=2.08\\times10^{-3}\\] so \\(\\theta_1\\approx2.08\\times10^{-3}\\,\\mathrm{rad}\\).",
    },
    {
      title: "Example 2",
      question: "For the same slit on a screen \\(2.0\\,\\mathrm{m}\\) away, estimate the central maximum width.",
      answer: "\\[w\\approx\\frac{2\\lambda L}{a}=\\frac{2(520\\times10^{-9})(2.0)}{0.250\\times10^{-3}}=8.32\\times10^{-3}\\,\\mathrm{m}\\]",
    },
  ]}
/>

## Checks

- The central maximum is twice as wide as the spacing from the center to the first minimum.
- Narrower slits make wider diffraction patterns.
- The single-slit minimum condition uses \\(m=1,2,3,\\ldots\\), not \\(m=0\\).
- The central bright maximum occurs at \\(\\theta=0\\).`;
