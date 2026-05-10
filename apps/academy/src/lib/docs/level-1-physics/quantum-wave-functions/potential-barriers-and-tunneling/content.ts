export const content = String.raw`## Principle

Quantum barriers partly transmit waves even when the particle energy is below the barrier height.

## Notation

<Notation
  items={[
    { symbol: "V_0", meaning: "barrier height", unit: "J" },
    { symbol: "a", meaning: "barrier width", unit: "m" },
    { symbol: "E", meaning: "incident particle energy", unit: "J" },
    { symbol: "T", meaning: "transmission probability", unit: "1" },
    { symbol: "R", meaning: "reflection probability", unit: "1" },
    { symbol: "\\kappa", meaning: "decay constant inside a below-energy barrier", unit: "m^{-1}" },
  ]}
/>

## Method

### Derivation 1: Barrier wave form

Inside a below-energy rectangular barrier, the spatial equation has exponential solutions.

<PhysicsDerivation
  items={[
    {
      label: "Forbidden-region equation",
      tex: "\\frac{d^2\\psi}{dx^2}=\\kappa^2\\psi",
    },
    {
      label: "Decay constant",
      tex: "\\kappa=\\frac{\\sqrt{2m(V_0-E)}}{\\hbar}",
    },
  ]}
/>

### Derivation 2: Exponential sensitivity

Transmission is controlled mainly by how much the wave decays across the barrier.

<PhysicsDerivation
  items={[
    {
      label: "Amplitude scale",
      tex: "\\psi_{\\mathrm{out}}\\sim \\psi_{\\mathrm{in}}e^{-\\kappa a}",
    },
    {
      label: "Probability scale",
      tex: "T\\sim e^{-2\\kappa a}",
    },
  ]}
/>

### Derivation 3: Conservation of probability current

For a stationary one-dimensional scattering state, incident current splits into reflected and transmitted current.

<PhysicsDerivation
  items={[
    {
      label: "Current balance",
      tex: "j_{\\mathrm{in}}=j_{\\mathrm{ref}}+j_{\\mathrm{trans}}",
    },
    {
      label: "Lossless barrier",
      tex: "R+T=1",
    },
  ]}
/>

## Rules

For a simple rectangular barrier with \\(E\\) below \\(V_0\\):

<Equation label="Barrier decay constant" tex="\kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar}" />

<Equation label="Tunneling estimate" tex="T\sim e^{-2\kappa a}" />

<Equation label="Probability-current balance" tex="R+T=1" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "If a barrier width doubles while \\(\\kappa\\) stays fixed, how does the tunneling estimate change?",
      answer: "It changes from \\(e^{-2\\kappa a}\\) to \\(e^{-4\\kappa a}\\), so the transmission is squared relative to the original estimate.",
    },
    {
      title: "Example 2",
      question: "If \\(E\\) increases toward \\(V_0\\), what happens to tunneling probability?",
      answer: "\\(\\kappa\\) decreases, so \\(e^{-2\\kappa a}\\) increases. Tunneling becomes more likely.",
    },
  ]}
/>

## Checks

- Tunneling is not energy conservation failure; the transmitted particle still has energy \\(E\\).
- The wave function and derivative must match at finite barrier edges.
- Wider, taller, or heavier-particle barriers suppress transmission exponentially.
- For a lossless one-dimensional barrier, reflection plus transmission equals one.`;
