export const content = String.raw`## Principle

A changing magnetic flux creates a circulating electric field even without a conducting loop.

## Notation

<Notation
  items={[
    { symbol: "\\vec E", meaning: "induced electric field", unit: "V m^{-1}" },
    { symbol: "\\Phi_B", meaning: "magnetic flux through a surface", unit: "Wb" },
    { symbol: "r", meaning: "radius of circular path", unit: "m" },
    { symbol: "R", meaning: "radius of changing-field region", unit: "m" },
    { symbol: "B", meaning: "uniform magnetic field in the region", unit: "T" },
    { symbol: "\\mathcal E", meaning: "circulation of electric field", unit: "V" },
  ]}
/>

## Method

### Derivation 1: Faraday's law for fields

The induced emf is the line integral of \\(\\vec E\\) around any closed path.

<PhysicsDerivation
  items={[
    {
      label: "emf as circulation",
      tex: "\\mathcal E=\\oint\\vec E\\cdot d\\vec\\ell",
    },
    {
      label: "Field Faraday law",
      tex: "\\oint\\vec E\\cdot d\\vec\\ell=-\\frac{d\\Phi_B}{dt}",
    },
  ]}
/>

### Derivation 2: Circular path inside a uniform changing field

Symmetry makes the induced electric field tangent to circles centered on the changing magnetic field region.

<PhysicsDerivation
  items={[
    {
      label: "Circular circulation",
      tex: "\\oint\\vec E\\cdot d\\vec\\ell=E(2\\pi r)",
    },
    {
      label: "Flux inside path",
      tex: "\\Phi_B=B\\pi r^2",
    },
    {
      label: "Inside field",
      tex: "E=-\\frac{r}{2}\\frac{dB}{dt}",
    },
  ]}
/>

### Derivation 3: Circular path outside the changing-field region

For \\(r>R\\), the flux only comes from the field-filled disk of radius \\(R\\).

<PhysicsDerivation
  items={[
    {
      label: "Enclosed flux",
      tex: "\\Phi_B=B\\pi R^2",
    },
    {
      label: "Outside circulation",
      tex: "E(2\\pi r)=-\\pi R^2\\frac{dB}{dt}",
    },
    {
      label: "Outside field",
      tex: "E=-\\frac{R^2}{2r}\\frac{dB}{dt}",
    },
  ]}
/>

## Rules

These results apply to circular symmetry.

<Equation label="Field Faraday law" tex="\oint\vec E\cdot d\vec\ell=-\frac{d\Phi_B}{dt}" />

<Equation label="Inside region" tex="E=\frac{r}{2}\left|\frac{dB}{dt}\right|" />

<Equation label="Outside region" tex="E=\frac{R^2}{2r}\left|\frac{dB}{dt}\right|" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A uniform magnetic field inside radius \\(0.20\\,\\mathrm{m}\\) increases at \\(3.0\\,\\mathrm{T\\,s^{-1}}\\). Find \\(E\\) at \\(r=0.10\\,\\mathrm{m}\\).",
      answer: "\\[E=\\frac{r}{2}\\left|\\frac{dB}{dt}\\right|=\\frac{0.10}{2}(3.0)=0.15\\,\\mathrm{V\\,m^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "Find \\(E\\) at \\(r=0.40\\,\\mathrm{m}\\) for the same changing-field region.",
      answer: "\\[E=\\frac{R^2}{2r}\\left|\\frac{dB}{dt}\\right|=\\frac{0.20^2}{2(0.40)}(3.0)=0.15\\,\\mathrm{V\\,m^{-1}}\\]",
    },
  ]}
/>

## Checks

- Induced electric field lines form closed loops; they do not begin or end on charge.
- The field is nonconservative when magnetic flux changes.
- The conducting wire is not the cause of the field; it only provides charges that respond.
- Direction still follows Lenz's law.`;
