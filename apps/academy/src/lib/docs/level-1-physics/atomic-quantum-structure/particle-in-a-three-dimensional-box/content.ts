export const content = String.raw`## Principle

A particle confined by hard walls in three dimensions has standing waves in each direction. Each direction contributes a quantum number and a kinetic-energy term.

Different quantum-number triples can have the same energy, producing degeneracy.

## Notation

<Notation
  items={[
    { symbol: "L_x,L_y,L_z", meaning: "box side lengths", unit: "m" },
    { symbol: "n_x,n_y,n_z", meaning: "positive integer quantum numbers", unit: "1" },
    { symbol: "\\psi", meaning: "spatial wave function", unit: "m^{-3/2}" },
    { symbol: "E", meaning: "energy eigenvalue", unit: "J" },
    { symbol: "m", meaning: "particle mass", unit: "kg" },
    { symbol: "h", meaning: "Planck constant", unit: "J s" },
  ]}
/>

## Method

### Derivation 1: Apply hard-wall boundary conditions

The wave function must vanish at every wall. The solution separates into standing waves along each axis.

<PhysicsDerivation
  items={[
    {
      label: "Separated wave function",
      tex: "\\psi(x,y,z)=X(x)Y(y)Z(z)",
    },
    {
      label: "Allowed wavelengths",
      tex: "\\lambda_i=\\frac{2L_i}{n_i}",
    },
  ]}
/>

### Derivation 2: Add kinetic energies

Each direction contributes a squared momentum component.

<PhysicsDerivation
  items={[
    {
      label: "Momentum components",
      tex: "p_i=\\frac{n_ih}{2L_i}",
    },
    {
      label: "Energy",
      tex: "E=\\frac{h^2}{8m}\\left(\\frac{n_x^2}{L_x^2}+\\frac{n_y^2}{L_y^2}+\\frac{n_z^2}{L_z^2}\\right)",
    },
  ]}
/>

### Derivation 3: Recognize degeneracy

For a cube, permuting the same set of quantum numbers gives the same energy.

<PhysicsDerivation
  items={[
    {
      label: "Cubic box energy",
      tex: "E=\\frac{h^2}{8mL^2}(n_x^2+n_y^2+n_z^2)",
    },
    {
      label: "Ground state",
      tex: "(n_x,n_y,n_z)=(1,1,1)",
    },
  ]}
/>

## Rules

<Equation label="3D box energy" tex="E=\frac{h^2}{8m}\left(\frac{n_x^2}{L_x^2}+\frac{n_y^2}{L_y^2}+\frac{n_z^2}{L_z^2}\right)" />

<Equation label="Cubic box energy" tex="E=\frac{h^2}{8mL^2}(n_x^2+n_y^2+n_z^2)" />

<Equation label="Cubic eigenfunction" tex="\psi=\left(\frac{2}{L}\right)^{3/2}\sin\frac{n_x\pi x}{L}\sin\frac{n_y\pi y}{L}\sin\frac{n_z\pi z}{L}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "For a cubic box, compare \\(E_{111}\\) and \\(E_{211}\\).",
      answer: "\\[E_{111}=3E_0\\] and \\[E_{211}=6E_0\\] where \\(E_0=h^2/(8mL^2)\\).",
    },
    {
      title: "Example 2",
      question: "How many states are degenerate with \\((2,1,1)\\) in a cubic box?",
      answer: "There are three permutations: \\((2,1,1)\\), \\((1,2,1)\\), and \\((1,1,2)\\).",
    },
  ]}
/>

## Checks

- Each quantum number starts at 1.
- The ground state is \\((1,1,1)\\), not \\((0,0,0)\\).
- Energies add by squared components.
- Degeneracy depends on symmetry; a rectangular box usually breaks cubic degeneracies.`;
