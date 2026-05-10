export const content = String.raw`## Principle

Dielectric molecules polarize so bound charge partly opposes the field from free charge.

## Notation

<Notation
  items={[
    { symbol: "\\vec p", meaning: "electric dipole moment", unit: "C m" },
    { symbol: "q", meaning: "charge magnitude in a simple dipole", unit: "C" },
    { symbol: "\\ell", meaning: "charge separation in a simple dipole", unit: "m" },
    { symbol: "\\vec\\tau", meaning: "torque on a dipole", unit: "N m" },
    { symbol: "\\vec P", meaning: "polarization dipole moment per volume", unit: "C m^{-2}" },
    { symbol: "\\sigma_b", meaning: "bound surface charge density", unit: "C m^{-2}" },
  ]}
/>

## Method

### Derivation 1: Dipoles align with the field

A molecular dipole has equal and opposite charges separated by a small distance. A uniform field gives opposite forces on the two ends, producing a torque.

<PhysicsDerivation
  items={[
    {
      label: "Dipole moment",
      tex: "p=q\\ell",
    },
    {
      label: "Dipole torque",
      tex: "\\tau=pE\\sin\\theta",
    },
    {
      label: "Potential energy",
      tex: "U=-\\vec p\\cdot\\vec E",
    },
  ]}
/>

### Derivation 2: Polarization creates bound surface charge

When many dipoles align, their interior charges mostly cancel. Uncancelled bound charge remains where the dielectric ends.

<PhysicsDerivation
  items={[
    {
      label: "Polarization",
      tex: "\\vec P=\\frac{\\text{dipole moment}}{\\text{volume}}",
    },
    {
      label: "Surface bound charge",
      tex: "\\sigma_b=\\vec P\\cdot\\hat n",
    },
  ]}
/>

### Derivation 3: Bound charge opposes the free-charge field

For a slab between capacitor plates, the bound charge on the dielectric faces produces a field opposite the field from the free plate charge.

<PhysicsDerivation
  items={[
    {
      label: "Free-charge field",
      tex: "\\vec E_0\\text{ points from }+\\text{ plate to }-\\text{ plate}",
    },
    {
      label: "Bound-charge field",
      tex: "\\vec E_b\\text{ points opposite }\\vec E_0",
    },
    {
      label: "Reduced net field",
      tex: "\\vec E=\\vec E_0+\\vec E_b",
    },
  ]}
/>

## Rules

These are the molecular polarization relations.

<Equation label="Dipole moment" tex="p=q\ell" />

<Equation label="Dipole torque" tex="\tau=pE\sin\theta" />

<Equation label="Dipole energy" tex="U=-\vec p\cdot\vec E" />

<Equation label="Bound surface" tex="\sigma_b=\vec P\cdot\hat n" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A dipole with \\(p=2.0\\times10^{-29}\\,\\mathrm{C\\,m}\\) is at \\(30^\\circ\\) to a \\(5.0\\times10^5\\,\\mathrm{V\\,m^{-1}}\\) field. Estimate the torque.",
      answer: "\\[\\tau=pE\\sin\\theta=(2.0\\times10^{-29})(5.0\\times10^5)\\sin30^\\circ=5.0\\times10^{-24}\\,\\mathrm{N\\,m}\\]",
    },
    {
      title: "Example 2",
      question: "In a polarized dielectric slab, where does the uncancelled bound charge appear?",
      answer: "It appears on the slab faces. Charges from neighboring dipoles cancel in the interior, but there is no neighboring molecule beyond the outer faces to cancel the end charges.",
    },
  ]}
/>

## Checks

- Bound charge is not free to move through a circuit.
- Polarization reduces the field in a dielectric capacitor; it does not reverse it in ordinary cases.
- A conductor cancels electrostatic field internally by free-charge motion, not by small molecular polarization.
- Dipole energy is lowest when \\(\vec p\\) aligns with \\(\vec E\\).`;
