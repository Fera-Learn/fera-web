export const content = String.raw`## Principle

A compound microscope multiplies objective image magnification by eyepiece angular magnification.

## Notation

<Notation
  items={[
    { symbol: "f_o", meaning: "objective focal length", unit: "m" },
    { symbol: "f_e", meaning: "eyepiece focal length", unit: "m" },
    { symbol: "L", meaning: "tube length between focal regions", unit: "m" },
    { symbol: "M", meaning: "total angular magnification", unit: "1" },
    { symbol: "N", meaning: "near point distance", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Two-stage magnification

The objective forms a real enlarged intermediate image. The eyepiece acts as a magnifier for that image.

<PhysicsDerivation
  items={[
    {
      label: "Objective magnification",
      tex: "m_o\\approx-\\frac{L}{f_o}",
    },
    {
      label: "Eyepiece magnification",
      tex: "M_e\\approx\\frac{N}{f_e}",
    },
    {
      label: "Total magnification",
      tex: "M\\approx-\\frac{L}{f_o}\\frac{N}{f_e}",
    },
  ]}
/>

The negative sign indicates image inversion relative to the original object.

## Rules

<Equation label="Objective magnification" tex="m_o\approx-L/f_o" />

<Equation label="Eyepiece magnification" tex="M_e\approx N/f_e" />

<Equation label="Microscope magnification" tex="M\approx-\frac{LN}{f_of_e}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A microscope has \\(L=16\\,\\mathrm{cm}\\), \\(f_o=4.0\\,\\mathrm{mm}\\), and \\(f_e=2.5\\,\\mathrm{cm}\\). Estimate \\(|M|\\).",
      answer: "\\[|M|\\approx\\frac{LN}{f_of_e}=\\frac{(0.16)(0.25)}{(0.0040)(0.025)}=400\\]",
    },
    {
      title: "Example 2",
      question: "Which lens should have the shorter focal length for high microscope magnification?",
      answer: "The objective usually has a very short focal length because \\(|M|\\propto1/f_o\\).",
    },
  ]}
/>

## Checks

- The objective forms a real intermediate image.
- The eyepiece acts as a magnifier.
- Total magnification is the product of the two stages.`;
