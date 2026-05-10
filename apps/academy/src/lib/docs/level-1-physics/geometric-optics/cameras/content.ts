export const content = String.raw`## Principle

A camera forms a real inverted image on a sensor by placing the sensor at the lens image plane.

## Notation

<Notation
  items={[
    { symbol: "f", meaning: "camera lens focal length", unit: "m" },
    { symbol: "s", meaning: "object distance", unit: "m" },
    { symbol: "s'", meaning: "sensor distance from lens", unit: "m" },
    { symbol: "m", meaning: "image magnification", unit: "1" },
    { symbol: "D", meaning: "aperture diameter", unit: "m" },
    { symbol: "N_f", meaning: "f-number", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Focus condition

The sensor must be located where the lens forms the real image.

<PhysicsDerivation
  items={[
    {
      label: "Lens equation",
      tex: "\\frac{1}{s}+\\frac{1}{s'}=\\frac{1}{f}",
    },
    {
      label: "Distant object",
      tex: "s\\rightarrow\\infty\\Rightarrow s'\\approx f",
    },
    {
      label: "Image size",
      tex: "m=-\\frac{s'}{s}",
    },
  ]}
/>

### Derivation 2: Aperture

The f-number compares focal length with aperture diameter.

<PhysicsDerivation
  items={[
    {
      label: "F-number",
      tex: "N_f=\\frac{f}{D}",
    },
    {
      label: "Aperture area scaling",
      tex: "A\\propto D^2",
    },
  ]}
/>

## Rules

<Equation label="Focus condition" tex="\frac{1}{s}+\frac{1}{s'}=\frac{1}{f}" />

<Equation label="Camera magnification" tex="m=-\frac{s'}{s}" />

<Equation label="F-number" tex="N_f=f/D" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(50\\,\\mathrm{mm}\\) camera lens images a distant object. Where is the sensor?",
      answer: "For a distant object, \\(s'\\approx f=50\\,\\mathrm{mm}\\).",
    },
    {
      title: "Example 2",
      question: "A \\(50\\,\\mathrm{mm}\\) lens is set to \\(f/2.0\\). Find aperture diameter.",
      answer: "\\[D=\\frac{f}{N_f}=\\frac{50\\,\\mathrm{mm}}{2.0}=25\\,\\mathrm{mm}\\]",
    },
  ]}
/>

## Checks

- Camera images on the sensor are real and inverted.
- Close focusing requires sensor distance greater than the focal length.
- Smaller f-number means larger aperture diameter.`;
