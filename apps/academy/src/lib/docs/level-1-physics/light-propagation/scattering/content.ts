export const content = String.raw`## Principle

Scattering redirects light when it interacts with particles, molecules, or irregular structures. The strength and direction of scattering depend on wavelength and the size of the scatterers.

## Notation

<Notation
  items={[
    { symbol: "I", meaning: "light intensity", unit: "W m^{-2}" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "a", meaning: "typical scatterer size", unit: "m" },
    { symbol: "\\theta", meaning: "scattering angle", unit: "rad" },
    { symbol: "\\sigma", meaning: "scattering cross-section", unit: "m^{2}" },
  ]}
/>

## Method

### Derivation 1: Identify the size scale

If scatterers are much smaller than the wavelength, Rayleigh scattering is a good model. If scatterers are comparable to or larger than the wavelength, scattering becomes less strongly wavelength-selective.

<PhysicsDerivation
  items={[
    {
      label: "Rayleigh size condition",
      tex: "a\\ll\\lambda",
    },
  ]}
/>

### Derivation 2: Use wavelength dependence

Rayleigh scattering is much stronger for shorter wavelengths.

<PhysicsDerivation
  items={[
    {
      label: "Rayleigh scaling",
      tex: "I_{\\mathrm{scattered}}\\propto\\frac{1}{\\lambda^4}",
    },
  ]}
/>

### Derivation 3: Interpret sky colors

Air molecules scatter blue light more strongly than red light. During sunset, sunlight travels through more atmosphere, so much of the blue light is scattered out of the direct beam and the remaining direct light appears redder.

## Rules

<Equation label="Rayleigh scaling" tex="I_{\mathrm{scattered}}\propto\lambda^{-4}" />

<Equation label="Shorter wavelengths scatter more" tex="\lambda_{\mathrm{blue}}<\lambda_{\mathrm{red}}\Rightarrow I_{\mathrm{blue}}>I_{\mathrm{red}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Why is the clear daytime sky blue?",
      answer: "Air molecules Rayleigh-scatter shorter visible wavelengths more strongly. Blue light is scattered into many viewing directions more than red light, so the sky appears blue.",
    },
    {
      title: "Example 2",
      question: "Using \\(I\\propto1/\\lambda^4\\), compare scattering of \\(450\\,\\mathrm{nm}\\) blue light with \\(650\\,\\mathrm{nm}\\) red light.",
      answer: "\\[\\frac{I_{450}}{I_{650}}=\\left(\\frac{650}{450}\\right)^4=4.35\\] Blue light is scattered about \\(4.4\\) times as strongly.",
    },
  ]}
/>

## Checks

- Scattering redirects light; absorption converts light energy into internal energy.
- Rayleigh scattering applies when scatterers are much smaller than the wavelength.
- Larger particles often scatter many visible wavelengths more evenly, producing white glare or clouds.
- Scattered sunlight can be partially polarized.`;
