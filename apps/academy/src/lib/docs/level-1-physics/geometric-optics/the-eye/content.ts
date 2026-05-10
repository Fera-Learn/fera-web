export const content = String.raw`## Principle

The eye focuses light on the retina by changing optical power.

## Notation

<Notation
  items={[
    { symbol: "P", meaning: "optical power", unit: "D" },
    { symbol: "f", meaning: "effective focal length", unit: "m" },
    { symbol: "s", meaning: "object distance", unit: "m" },
    { symbol: "s'", meaning: "retina distance from eye lens system", unit: "m" },
    { symbol: "N", meaning: "standard near point distance", unit: "m" },
    { symbol: "P_{\\mathrm{lens}}", meaning: "corrective lens power", unit: "D" },
  ]}
/>

## Method

### Derivation 1: Optical power

Eye optics are often described by diopters.

<PhysicsDerivation
  items={[
    {
      label: "Power",
      tex: "P=\\frac{1}{f}",
    },
    {
      label: "Thin-lens model",
      tex: "\\frac{1}{s}+\\frac{1}{s'}=P",
    },
  ]}
/>

### Derivation 2: Accommodation

The retina position is fixed, so focusing different object distances requires changing optical power.

<PhysicsDerivation
  items={[
    {
      label: "Distant object",
      tex: "s\\rightarrow\\infty\\Rightarrow P\\approx\\frac{1}{s'}",
    },
    {
      label: "Near object",
      tex: "P=\\frac{1}{s}+\\frac{1}{s'}",
    },
    {
      label: "Accommodation change",
      tex: "\\Delta P=\\frac{1}{s_{\\mathrm{near}}}",
    },
  ]}
/>

## Rules

<Equation label="Optical power" tex="P=1/f" />

<Equation label="Eye focus" tex="\frac{1}{s}+\frac{1}{s'}=P" />

<Equation label="Standard near point" tex="N=0.25\,\mathrm{m}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the power of an eye modeled with effective focal length \\(17\\,\\mathrm{mm}\\) for distant objects.",
      answer: "\\[P=\\frac{1}{0.017}=59\\,\\mathrm{D}\\]",
    },
    {
      title: "Example 2",
      question: "What corrective lens brings a far point of \\(0.50\\,\\mathrm{m}\\) to infinity?",
      answer: "Use a diverging lens that forms a virtual image at the far point for an object at infinity: \\(f=-0.50\\,\\mathrm{m}\\), so \\(P=-2.0\\,\\mathrm{D}\\).",
    },
  ]}
/>

## Checks

- Myopia is corrected with diverging lenses.
- Hyperopia is corrected with converging lenses.
- Diopter power uses focal length in meters.`;
