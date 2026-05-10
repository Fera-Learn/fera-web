export const content = String.raw`## Principle

A magnifier increases angular size by letting the eye view a close virtual image comfortably.

## Notation

<Notation
  items={[
    { symbol: "M", meaning: "angular magnification", unit: "1" },
    { symbol: "f", meaning: "magnifier focal length", unit: "m" },
    { symbol: "N", meaning: "near point distance", unit: "m" },
    { symbol: "\\theta", meaning: "viewing angle with magnifier", unit: "rad" },
    { symbol: "\\theta_0", meaning: "unaided viewing angle at near point", unit: "rad" },
  ]}
/>

## Method

### Derivation 1: Angular magnification

Angular magnification compares apparent angle with the unaided near-point angle.

<PhysicsDerivation
  items={[
    {
      label: "Definition",
      tex: "M=\\frac{\\theta}{\\theta_0}",
    },
    {
      label: "Relaxed eye",
      tex: "M\\approx\\frac{N}{f}",
    },
    {
      label: "Near-point image",
      tex: "M\\approx1+\\frac{N}{f}",
    },
  ]}
/>

The relaxed-eye form places the virtual image at infinity. The near-point form places the virtual image at the eye's near point.

## Rules

<Equation label="Angular magnification" tex="M=\theta/\theta_0" />

<Equation label="Relaxed magnifier" tex="M=N/f" />

<Equation label="Near-point magnifier" tex="M=1+N/f" />

<Equation label="Near point" tex="N=25\,\mathrm{cm}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find relaxed-eye magnification for \\(f=5.0\\,\\mathrm{cm}\\).",
      answer: "\\[M=\\frac{N}{f}=\\frac{25\\,\\mathrm{cm}}{5.0\\,\\mathrm{cm}}=5.0\\]",
    },
    {
      title: "Example 2",
      question: "Find near-point magnification for the same lens.",
      answer: "\\[M=1+\\frac{N}{f}=1+5.0=6.0\\]",
    },
  ]}
/>

## Checks

- A simple magnifier is a converging lens.
- Shorter focal length gives larger angular magnification.
- The image viewed through a magnifier is virtual.`;
