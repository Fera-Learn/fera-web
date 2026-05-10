export const content = String.raw`## Principle

Relative motion changes measured light frequency because time intervals and wavefront spacing transform together.

## Notation

<Notation
  items={[
    { symbol: "f_s", meaning: "frequency in the source rest frame", unit: "Hz" },
    { symbol: "f_o", meaning: "frequency measured by the observer", unit: "Hz" },
    { symbol: "\\lambda_s", meaning: "wavelength in the source rest frame", unit: "m" },
    { symbol: "\\lambda_o", meaning: "wavelength measured by the observer", unit: "m" },
    { symbol: "\\beta", meaning: "relative speed divided by \\(c\\)", unit: "" },
    { symbol: "z", meaning: "redshift", unit: "" },
  ]}
/>

## Method

### Derivation 1: Use the longitudinal shift

For source and observer moving directly toward each other, the received frequency is increased. For recession, it is decreased.

<PhysicsDerivation
  items={[
    {
      label: "Approaching",
      tex: "f_o=f_s\\sqrt{\\frac{1+\\beta}{1-\\beta}}",
    },
    {
      label: "Receding",
      tex: "f_o=f_s\\sqrt{\\frac{1-\\beta}{1+\\beta}}",
    },
  ]}
/>

### Derivation 2: Convert frequency to wavelength

Light always satisfies \\(c=f\\lambda\\) in vacuum, so a lower observed frequency means a longer observed wavelength.

<PhysicsDerivation
  items={[
    {
      label: "Vacuum wave relation",
      tex: "c=f_o\\lambda_o=f_s\\lambda_s",
    },
    {
      label: "Redshift",
      tex: "1+z=\\frac{\\lambda_o}{\\lambda_s}=\\frac{f_s}{f_o}",
    },
  ]}
/>

### Derivation 3: Keep sign convention explicit

Use the approaching formula only when separation is decreasing. Use the receding formula when separation is increasing.

## Rules

<Equation label="Approaching frequency" tex="f_o=f_s\sqrt{\frac{1+\beta}{1-\beta}}" />

<Equation label="Receding frequency" tex="f_o=f_s\sqrt{\frac{1-\beta}{1+\beta}}" />

<Equation label="Redshift" tex="z=\frac{\lambda_o-\lambda_s}{\lambda_s}" />

<Equation label="Wavelength ratio" tex="\frac{\lambda_o}{\lambda_s}=\frac{f_s}{f_o}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A source emitting \\(5.00\\times10^{14}\\,\\mathrm{Hz}\\) approaches at \\(0.200c\\). Find the observed frequency.",
      answer: "\\[f_o=f_s\\sqrt{\\frac{1+0.200}{1-0.200}}=(5.00\\times10^{14})(1.225)=6.12\\times10^{14}\\,\\mathrm{Hz}\\]",
    },
    {
      title: "Example 2",
      question: "A spectral line of rest wavelength \\(500\\,\\mathrm{nm}\\) is observed at \\(650\\,\\mathrm{nm}\\). Find the redshift.",
      answer: "\\[z=\\frac{650-500}{500}=0.300\\]",
    },
  ]}
/>

## Checks

- Approaching sources are blueshifted: frequency up, wavelength down.
- Receding sources are redshifted: frequency down, wavelength up.
- The relativistic shift is symmetric between source and observer.
- The sound Doppler formula is not valid for light in vacuum.`;
