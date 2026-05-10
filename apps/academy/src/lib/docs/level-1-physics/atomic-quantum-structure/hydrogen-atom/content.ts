export const content = String.raw`## Principle

The hydrogen atom is the central example of a three-dimensional bound quantum system. Solving the Schrodinger equation in a Coulomb potential gives quantized energy levels and orbital quantum numbers.

The energy depends on the principal quantum number \\(n\\), while angular behavior is described by \\(\ell\\) and \\(m_\ell\\).

## Notation

<Notation
  items={[
    { symbol: "n", meaning: "principal quantum number", unit: "1" },
    { symbol: "\\ell", meaning: "orbital angular momentum quantum number", unit: "1" },
    { symbol: "m_\\ell", meaning: "magnetic quantum number", unit: "1" },
    { symbol: "E_n", meaning: "hydrogen energy level", unit: "eV" },
    { symbol: "a_0", meaning: "Bohr radius", unit: "m" },
    { symbol: "L", meaning: "orbital angular momentum magnitude", unit: "J s" },
  ]}
/>

## Method

### Derivation 1: Use the Coulomb potential

The electron is bound by the proton's electric potential energy.

<PhysicsDerivation
  items={[
    {
      label: "Potential energy",
      tex: "U(r)=-\\frac{1}{4\\pi\\epsilon_0}\\frac{e^2}{r}",
    },
    {
      label: "Stationary equation",
      tex: "-\\frac{\\hbar^2}{2m_e}\\nabla^2\\phi+U(r)\\phi=E\\phi",
    },
  ]}
/>

### Derivation 2: Identify quantum numbers

Separation in spherical coordinates produces three quantum numbers.

<PhysicsDerivation
  items={[
    {
      label: "Allowed orbital quantum numbers",
      tex: "\\ell=0,1,2,\\ldots,n-1",
    },
    {
      label: "Allowed magnetic quantum numbers",
      tex: "m_\\ell=-\\ell,-\\ell+1,\\ldots,+\\ell",
    },
  ]}
/>

### Derivation 3: Use the energy and angular-momentum rules

Hydrogen energy depends only on \\(n\\) in the basic Coulomb model.

<PhysicsDerivation
  items={[
    {
      label: "Energy levels",
      tex: "E_n=-\\frac{13.6\\,\\mathrm{eV}}{n^2}",
    },
    {
      label: "Angular momentum magnitude",
      tex: "L=\\sqrt{\\ell(\\ell+1)}\\hbar",
    },
    {
      label: "Angular momentum projection",
      tex: "L_z=m_\\ell\\hbar",
    },
  ]}
/>

## Rules

<Equation label="Hydrogen energy" tex="E_n=-\frac{13.6\,\mathrm{eV}}{n^2}" />

<Equation label="Orbital angular momentum" tex="L=\sqrt{\ell(\ell+1)}\hbar" />

<Equation label="Angular momentum projection" tex="L_z=m_\ell\hbar" />

<Equation label="Allowed magnetic quantum numbers" tex="m_\ell=-\ell,-\ell+1,\ldots,+\ell" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the hydrogen energy for \\(n=3\\).",
      answer: "\\[E_3=-\\frac{13.6}{9}=-1.51\\,\\mathrm{eV}\\]",
    },
    {
      title: "Example 2",
      question: "List the allowed \\(\\ell\\) values for \\(n=3\\).",
      answer: "The allowed values are \\(\\ell=0,1,2\\).",
    },
  ]}
/>

## Checks

- Bound-state energies are negative.
- Larger \\(n\\) means less tightly bound and larger typical radius.
- For a given \\(n\\), allowed \\(\ell\\) values run from 0 to \\(n-1\\).
- For a given \\(\ell\\), there are \\(2\ell+1\\) allowed \\(m_\ell\\) values.`;
