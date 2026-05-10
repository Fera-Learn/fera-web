export const content = String.raw`## Principle

Huygens principle models each point on a wavefront as a source of secondary wavelets. The next wavefront is the envelope of those wavelets.

## Notation

<Notation
  items={[
    { symbol: "v", meaning: "wave speed in the medium", unit: "m s^{-1}" },
    { symbol: "\\Delta t", meaning: "small time interval", unit: "s" },
    { symbol: "v\\Delta t", meaning: "wavelet radius after time \\(\\Delta t\\)", unit: "m" },
    { symbol: "\\theta_i", meaning: "incident angle", unit: "rad" },
    { symbol: "\\theta_r", meaning: "reflected angle", unit: "rad" },
    { symbol: "\\theta_2", meaning: "refracted angle", unit: "rad" },
  ]}
/>

## Method

### Derivation 1: Construct a new wavefront

Start with a known wavefront. After time \\(\Delta t\\), draw secondary wavelets of radius \\(v\Delta t\\) from points on the old wavefront. The tangent envelope is the new wavefront.

<PhysicsDerivation
  items={[
    {
      label: "Wavelet radius",
      tex: "r=v\\Delta t",
    },
  ]}
/>

### Derivation 2: Explain reflection

At a reflecting boundary, the Huygens construction makes the reflected wavefront leave with the same angle that the incident wavefront arrived.

<PhysicsDerivation
  items={[
    {
      label: "Reflection law",
      tex: "\\theta_r=\\theta_i",
    },
  ]}
/>

### Derivation 3: Explain refraction

If the wave speed changes across a boundary, wavelets grow at different speeds in the two media. This rotation of the wavefront gives Snell's law.

<PhysicsDerivation
  items={[
    {
      label: "Speed form of Snell's law",
      tex: "\\frac{\\sin\\theta_1}{\\sin\\theta_2}=\\frac{v_1}{v_2}",
    },
    {
      label: "Index form",
      tex: "n_1\\sin\\theta_1=n_2\\sin\\theta_2",
    },
  ]}
/>

## Rules

<Equation label="Wavelet radius" tex="r=v\Delta t" />

<Equation label="Reflection from wavefronts" tex="\theta_r=\theta_i" />

<Equation label="Refraction from wavefronts" tex="\frac{\sin\theta_1}{\sin\theta_2}=\frac{v_1}{v_2}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A wavefront travels at \\(2.0\\times10^8\\,\\mathrm{m\\,s^{-1}}\\). How far do its Huygens wavelets expand in \\(1.0\\,\\mathrm{ns}\\)?",
      answer: "\\[r=v\\Delta t=(2.0\\times10^8)(1.0\\times10^{-9})=0.20\\,\\mathrm m\\]",
    },
    {
      title: "Example 2",
      question: "How does Huygens principle explain bending toward the normal when light enters glass from air?",
      answer: "The part of the wavefront that enters glass first slows down first. The rest of the wavefront continues faster in air for a short time, so the wavefront rotates and the ray direction bends toward the normal.",
    },
  ]}
/>

## Checks

- Rays are perpendicular to wavefronts in isotropic media.
- A slower second medium bends rays toward the normal.
- A faster second medium bends rays away from the normal.
- Huygens principle gives a wavefront construction behind reflection and refraction laws.`;
