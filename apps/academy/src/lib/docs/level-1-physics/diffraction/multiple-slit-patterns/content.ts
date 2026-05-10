export const content = String.raw`## Principle

Many equally spaced slits produce sharp principal maxima. If each slit has finite width, the multiple-slit interference pattern is modulated by a single-slit diffraction envelope.

## Notation

<Notation
  items={[
    { symbol: "N", meaning: "number of slits", unit: "1" },
    { symbol: "d", meaning: "slit spacing", unit: "m" },
    { symbol: "a", meaning: "slit width", unit: "m" },
    { symbol: "\\delta", meaning: "phase difference between adjacent slits", unit: "rad" },
    { symbol: "\\theta", meaning: "observation angle", unit: "rad" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Adjacent-slit phase difference

Adjacent slits have path difference \\(d\sin\theta\\), giving a phase difference \\(\delta\\).

<PhysicsDerivation
  items={[
    {
      label: "Path difference",
      tex: "\\Delta r=d\\sin\\theta",
    },
    {
      label: "Phase difference",
      tex: "\\delta=\\frac{2\\pi d\\sin\\theta}{\\lambda}",
    },
  ]}
/>

### Derivation 2: Principal maxima

Principal maxima occur when every slit is in phase with the next.

<PhysicsDerivation
  items={[
    {
      label: "In-phase condition",
      tex: "\\delta=2\\pi m",
    },
    {
      label: "Principal maxima",
      tex: "d\\sin\\theta=m\\lambda",
    },
  ]}
/>

### Derivation 3: Diffraction envelope

Finite slit width creates a single-slit envelope. A principal maximum can be missing if it lies at a single-slit minimum.

<PhysicsDerivation
  items={[
    {
      label: "Envelope minima",
      tex: "a\\sin\\theta=p\\lambda",
    },
    {
      label: "Missing order condition",
      tex: "\\frac{m}{d}=\\frac{p}{a}",
    },
  ]}
/>

## Rules

<Equation label="Principal maxima" tex="d\sin\theta=m\lambda" />

<Equation label="Adjacent-slit phase" tex="\delta=\frac{2\pi d\sin\theta}{\lambda}" />

<Equation label="Equal-slit principal intensity" tex="I_{\max}\propto N^2" />

<Equation label="Single-slit envelope minima" tex="a\sin\theta=p\lambda" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Five identical slits are exactly in phase at a principal maximum. How does the peak intensity compare with one slit alone?",
      answer: "Field amplitude is \\(5\\) times larger, so intensity is \\(5^2=25\\) times larger.",
    },
    {
      title: "Example 2",
      question: "For \\(d=4a\\), which grating order is first missing because of the single-slit envelope?",
      answer: "A missing order occurs when \\(m/d=p/a\\), so \\(m=p(d/a)=4p\\). The first missing order is \\(m=4\\).",
    },
  ]}
/>

## Checks

- More slits make principal maxima narrower and brighter.
- Slit spacing sets where the principal maxima occur.
- Slit width sets the diffraction envelope.
- Missing orders occur only when a grating maximum coincides with an envelope zero.`;
