export const content = String.raw`## Principle

Flux calculations become manageable when the surface is split into pieces with simple normal components.

## Notation

<Notation
  items={[
    { symbol: "\\Phi_E", meaning: "electric flux", unit: "N m^{2} C^{-1}" },
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "E_n", meaning: "field component normal to the surface", unit: "N C^{-1}" },
    { symbol: "dA", meaning: "small scalar area element", unit: "m^{2}" },
    { symbol: "A_i", meaning: "area of surface piece \\(i\\)", unit: "m^{2}" },
    { symbol: "\\Delta\\vec A_i", meaning: "area vector for surface piece \\(i\\)", unit: "m^{2}" },
  ]}
/>

## Method

### Derivation 1: Project the field onto the normal

Only the normal component of the field contributes to flux. Tangential components skim along the surface.

<PhysicsDerivation
  items={[
    {
      label: "Area element",
      tex: "d\\vec A=\\hat n\\,dA",
    },
    {
      label: "Normal component",
      tex: "E_n=\\vec E\\cdot\\hat n",
    },
    {
      label: "Flux element",
      tex: "d\\Phi_E=E_n\\,dA",
    },
  ]}
/>

### Derivation 2: Sum flat pieces

For a surface made from flat panels in a uniform field, each panel has one area vector.

<PhysicsDerivation
  items={[
    {
      label: "Panel flux",
      tex: "\\Phi_i=\\vec E\\cdot\\Delta\\vec A_i",
    },
    {
      label: "Total flux",
      tex: "\\Phi_E=\\sum_i\\Phi_i",
    },
    {
      label: "Closed flat surface",
      tex: "\\Phi_E=\\sum_i\\vec E_i\\cdot\\Delta\\vec A_i",
    },
  ]}
/>

### Derivation 3: Use cancellation before arithmetic

Uniform fields through closed boxes have equal inward and outward flux through opposite faces. Curved sides can contribute zero when the field is tangent everywhere.

<PhysicsDerivation
  items={[
    {
      label: "Opposite faces",
      tex: "\\Delta\\vec A_R=-\\Delta\\vec A_L",
    },
    {
      label: "Uniform-field cancellation",
      tex: "\\vec E\\cdot\\Delta\\vec A_R+\\vec E\\cdot\\Delta\\vec A_L=0",
    },
    {
      label: "Tangential field",
      tex: "\\vec E\\perp d\\vec A\\Rightarrow d\\Phi_E=0",
    },
  ]}
/>

## Rules

These are the practical computation forms.

<Equation label="Normal component" tex="E_n=\vec E\cdot\hat n" />

<Equation label="Flux element" tex="d\Phi_E=E_n\,dA" />

<Equation label="Panel sum" tex="\Phi_E=\sum_i\vec E_i\cdot\Delta\vec A_i" />

<Equation label="Surface integral" tex="\Phi_E=\int_S E_n\,dA" />

<Equation label="Closed integral" tex="\Phi_E=\oint_S\vec E\cdot d\vec A" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(0.20\\,\\mathrm{m^2}\\) panel has outward normal \\(\\hat\\imath\\). The field is \\((30\\hat\\imath+40\\hat\\jmath)\\,\\mathrm{N\\,C^{-1}}\\). Find the flux.",
      answer: "Only the \\(x\\)-component is normal. \\[\\Phi_E=E_xA=(30)(0.20)=6.0\\,\\mathrm{N\\,m^2\\,C^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A uniform field points along the axis of a cylinder. What is the flux through the curved side?",
      answer: "On the curved side, the outward normal is radial while the field is axial. The dot product is zero everywhere, so the curved-side flux is zero.",
    },
  ]}
/>

## Checks

- Compute with the normal component, not the total field magnitude.
- For closed surfaces, use outward area vectors.
- Opposite faces can cancel only when the relevant field values match.
- A zero net flux does not mean the field is zero everywhere.`;
