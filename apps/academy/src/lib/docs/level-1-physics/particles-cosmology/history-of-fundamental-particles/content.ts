export const content = String.raw`## Principle

The particle model grew from experimental evidence: tracks, scattering, conservation laws, and energy thresholds revealed smaller constituents than atoms.

## Notation

<Notation
  items={[
    { symbol: "e", meaning: "elementary charge magnitude", unit: "C" },
    { symbol: "q", meaning: "particle charge", unit: "C" },
    { symbol: "m", meaning: "rest mass", unit: "kg, MeV/c^{2}" },
    { symbol: "E_0", meaning: "rest energy", unit: "J, MeV" },
    { symbol: "p", meaning: "momentum", unit: "kg m s^{-1}, MeV/c" },
    { symbol: "c", meaning: "speed of light", unit: "m s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Charge comes in units

Millikan-type evidence and particle tracks show that observed free charges are integer multiples of \\(e\\).

<PhysicsDerivation
  items={[
    {
      label: "Charge unit",
      tex: "q=ne",
    },
    {
      label: "Electron charge",
      tex: "q_e=-e",
    },
  ]}
/>

### Derivation 2: Rest energy sets production thresholds

Creating a new particle requires at least its rest energy, plus any momentum requirement imposed by conservation laws.

<PhysicsDerivation
  items={[
    {
      label: "Rest energy",
      tex: "E_0=mc^2",
    },
    {
      label: "Pair threshold",
      tex: "E_{\\min}=2mc^2",
    },
  ]}
/>

### Derivation 3: Missing energy and momentum suggest unseen particles

If measured products do not account for the initial energy and momentum, a neutral weakly interacting particle can be inferred.

<PhysicsDerivation
  items={[
    {
      label: "Energy conservation",
      tex: "E_i=E_f",
    },
    {
      label: "Momentum conservation",
      tex: "\\vec p_i=\\vec p_f",
    },
  ]}
/>

## Rules

<Equation label="Charge quantization" tex="q=ne" />

<Equation label="Rest energy" tex="E_0=mc^2" />

<Equation label="Pair creation threshold" tex="E_{\min}=2mc^2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "What minimum photon energy is needed to create an electron-positron pair?",
      answer: "\\(E_{\\min}=2(0.511)=1.02\\,\\mathrm{MeV}\\).",
    },
    {
      title: "Example 2",
      question: "Why was the neutrino proposed in beta decay?",
      answer: "The observed electron energy spectrum could not satisfy energy and momentum conservation with only the visible products.",
    },
  ]}
/>

## Checks

- Use conservation laws before naming a new particle.
- Pair production must conserve charge and lepton number.
- A track in a magnetic field gives charge sign and momentum information.
- Discovery history is evidence-led, not a list of isolated names.`;
