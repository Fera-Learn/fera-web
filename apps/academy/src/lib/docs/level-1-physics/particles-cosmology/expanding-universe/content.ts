export const content = String.raw`## Principle

The universe expands: distant galaxies show redshift, and on large scales recessional speed is proportional to distance.

## Notation

<Notation
  items={[
    { symbol: "v", meaning: "recessional speed", unit: "m s^{-1}, km s^{-1}" },
    { symbol: "H_0", meaning: "Hubble constant", unit: "s^{-1}, km s^{-1} Mpc^{-1}" },
    { symbol: "d", meaning: "proper distance", unit: "m, Mpc" },
    { symbol: "z", meaning: "redshift", unit: "1" },
    { symbol: "a", meaning: "scale factor", unit: "1" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Hubble law

For nearby galaxies in the smooth large-scale universe, recessional speed is proportional to distance.

<PhysicsDerivation
  items={[
    {
      label: "Hubble law",
      tex: "v=H_0d",
    },
    {
      label: "Expansion age scale",
      tex: "t_H\\sim\\frac1{H_0}",
    },
  ]}
/>

### Derivation 2: Redshift from stretched wavelengths

Cosmic expansion stretches photon wavelengths by the same factor as the scale factor.

<PhysicsDerivation
  items={[
    {
      label: "Redshift definition",
      tex: "z=\\frac{\\lambda_{\\mathrm{obs}}-\\lambda_{\\mathrm{emit}}}{\\lambda_{\\mathrm{emit}}}",
    },
    {
      label: "Scale factor relation",
      tex: "1+z=\\frac{a_0}{a_{\\mathrm{emit}}}",
    },
  ]}
/>

### Derivation 3: Redshift and speed for small redshift

For small \\(z\\), the redshift can be interpreted approximately as a Doppler speed.

<PhysicsDerivation
  items={[
    {
      label: "Low-redshift limit",
      tex: "v\\approx cz",
    },
    {
      label: "Combine with Hubble law",
      tex: "d\\approx\\frac{cz}{H_0}",
    },
  ]}
/>

## Rules

<Equation label="Hubble law" tex="v=H_0d" />

<Equation label="Redshift" tex="1+z=\frac{\lambda_{\mathrm{obs}}}{\lambda_{\mathrm{emit}}}" />

<Equation label="Scale factor" tex="1+z=\frac{a_0}{a_{\mathrm{emit}}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Using \\(H_0=70\\,\\mathrm{km\\,s^{-1}\\,Mpc^{-1}}\\), find \\(v\\) for \\(d=20\\,\\mathrm{Mpc}\\).",
      answer: "\\(v=H_0d=70(20)=1400\\,\\mathrm{km\\,s^{-1}}\\).",
    },
    {
      title: "Example 2",
      question: "A spectral line emitted at \\(500\\,\\mathrm{nm}\\) is observed at \\(550\\,\\mathrm{nm}\\). Find \\(z\\).",
      answer: "\\(z=(550-500)/500=0.10\\).",
    },
  ]}
/>

## Checks

- Hubble law applies to large-scale expansion, not bound systems like the Solar System.
- Larger redshift means the light was emitted when the scale factor was smaller.
- The Hubble time \\(1/H_0\\) is an age scale, not an exact age by itself.
- For large \\(z\\), use cosmological redshift rather than simple Doppler reasoning.`;
