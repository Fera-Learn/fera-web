export const content = String.raw`## Principle

Holography records phase information by interfering an object wave with a coherent reference wave. When the developed hologram is illuminated, diffraction reconstructs a wavefront similar to the original object wave.

## Notation

<Notation
  items={[
    { symbol: "E_o", meaning: "object-wave electric field", unit: "V m^{-1}" },
    { symbol: "E_r", meaning: "reference-wave electric field", unit: "V m^{-1}" },
    { symbol: "I", meaning: "recorded intensity", unit: "W m^{-2}" },
    { symbol: "\\Delta\\phi", meaning: "phase difference", unit: "rad" },
    { symbol: "\\lambda", meaning: "recording wavelength", unit: "m" },
    { symbol: "p", meaning: "fringe spacing", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Record interference, not only brightness

The photographic or digital recording stores an intensity pattern made by adding fields before squaring.

<PhysicsDerivation
  items={[
    {
      label: "Field superposition",
      tex: "E=E_o+E_r",
    },
    {
      label: "Recorded intensity",
      tex: "I\\propto|E_o+E_r|^2",
    },
  ]}
/>

### Derivation 2: Keep phase in the cross term

The interference term depends on the phase difference between object and reference waves.

<PhysicsDerivation
  items={[
    {
      label: "Intensity with phase",
      tex: "I=I_o+I_r+2\\sqrt{I_oI_r}\\cos\\Delta\\phi",
    },
    {
      label: "Phase from path",
      tex: "\\Delta\\phi=\\frac{2\\pi\\Delta r}{\\lambda}",
    },
  ]}
/>

### Derivation 3: Reconstruct by diffraction

Illuminating the hologram with a reference-like beam diffracts light so that one diffracted wave reproduces the original object wavefront.

<PhysicsDerivation
  items={[
    {
      label: "Symmetric two-beam fringe spacing",
      tex: "p=\\frac{\\lambda}{2\\sin\\alpha}",
    },
    {
      label: "Grating-like reconstruction",
      tex: "p\\sin\\theta=m\\lambda",
    },
  ]}
/>

## Rules

<Equation label="Hologram recording intensity" tex="I=I_o+I_r+2\sqrt{I_oI_r}\cos\Delta\phi" />

<Equation label="Phase from path difference" tex="\Delta\phi=\frac{2\pi\Delta r}{\lambda}" />

<Equation label="Two-beam fringe spacing" tex="p=\frac{\lambda}{2\sin\alpha}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two equal recording beams arrive in phase. What relative recorded intensity is produced compared with one beam alone?",
      answer: "Equal in-phase fields double the amplitude, so intensity becomes \\(2^2=4\\) times one beam alone.",
    },
    {
      title: "Example 2",
      question: "Two equal recording beams arrive with phase difference \\(\\pi\\). What happens ideally?",
      answer: "The fields cancel, so the recorded intensity at that point is a minimum.",
    },
  ]}
/>

## Checks

- A hologram records an interference pattern, not a direct picture of the object.
- Coherent light is needed so the phase relationship remains stable while recording.
- Reconstruction is a diffraction process.
- Changing reconstruction wavelength can change the reconstructed angle or scale.`;
