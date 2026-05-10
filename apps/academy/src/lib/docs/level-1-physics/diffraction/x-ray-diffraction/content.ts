export const content = String.raw`## Principle

X-ray diffraction probes crystal structure because x-ray wavelengths are comparable with atomic plane spacings. Reflections from adjacent crystal planes interfere constructively only at Bragg angles.

## Notation

<Notation
  items={[
    { symbol: "d", meaning: "spacing between crystal planes", unit: "m" },
    { symbol: "\\theta", meaning: "Bragg angle measured from the planes", unit: "rad" },
    { symbol: "\\lambda", meaning: "x-ray wavelength", unit: "m" },
    { symbol: "m", meaning: "diffraction order", unit: "1" },
    { symbol: "\\Delta r", meaning: "path difference between reflections", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Path difference

Rays reflecting from adjacent crystal planes travel an extra distance down to the lower plane and back out.

<PhysicsDerivation
  items={[
    {
      label: "Extra path",
      tex: "\\Delta r=2d\\sin\\theta",
    },
    {
      label: "Constructive condition",
      tex: "\\Delta r=m\\lambda",
    },
  ]}
/>

### Derivation 2: Bragg law

Combining the path difference with constructive interference gives Bragg's law.

<PhysicsDerivation
  items={[
    {
      label: "Bragg law",
      tex: "2d\\sin\\theta=m\\lambda",
    },
    {
      label: "Plane spacing",
      tex: "d=\\frac{m\\lambda}{2\\sin\\theta}",
    },
  ]}
/>

### Derivation 3: Order limits

Only orders with \\(\sin\theta\le1\\) are possible.

<PhysicsDerivation
  items={[
    {
      label: "Allowed order",
      tex: "m\\lambda\\le2d",
    },
    {
      label: "Maximum order",
      tex: "m_{\\max}=\\left\\lfloor\\frac{2d}{\\lambda}\\right\\rfloor",
    },
  ]}
/>

## Rules

<Equation label="Bragg law" tex="2d\sin\theta=m\lambda" />

<Equation label="Plane spacing" tex="d=\frac{m\lambda}{2\sin\theta}" />

<Equation label="Allowed orders" tex="m\lambda\le2d" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "X-rays of wavelength \\(0.154\\,\\mathrm{nm}\\) reflect from planes spaced \\(0.200\\,\\mathrm{nm}\\). Find the first-order Bragg angle.",
      answer: "\\[\\sin\\theta=\\frac{0.154}{2(0.200)}=0.385\\] so \\(\\theta=22.6^\\circ\\).",
    },
    {
      title: "Example 2",
      question: "A first-order reflection occurs at \\(30.0^\\circ\\) for \\(0.150\\,\\mathrm{nm}\\) x-rays. Find \\(d\\).",
      answer: "\\[d=\\frac{\\lambda}{2\\sin\\theta}=\\frac{0.150\\,\\mathrm{nm}}{2\\sin30.0^\\circ}=0.150\\,\\mathrm{nm}\\]",
    },
  ]}
/>

## Checks

- The Bragg angle is measured relative to the crystal planes.
- The x-ray wavelength must be comparable with the plane spacing.
- Higher order means a larger angle for the same \\(d\\) and \\(\lambda\\).
- No order exists if the required sine is greater than 1.`;
