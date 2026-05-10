export const content = String.raw`## Principle

Faraday's law makes induced emf equal to the negative rate of change of magnetic flux linkage.

## Notation

<Notation
  items={[
    { symbol: "\\mathcal E", meaning: "induced emf", unit: "V" },
    { symbol: "N", meaning: "number of turns in the coil", unit: "1" },
    { symbol: "\\Phi_B", meaning: "magnetic flux through one turn", unit: "Wb" },
    { symbol: "B", meaning: "uniform magnetic field magnitude", unit: "T" },
    { symbol: "A", meaning: "loop area", unit: "m^{2}" },
    { symbol: "\\theta", meaning: "angle between field and area normal", unit: "rad" },
  ]}
/>

## Method

### Derivation 1: Flux linkage

A coil with \(N\) identical turns links the same flux through each turn.

<PhysicsDerivation
  items={[
    {
      label: "One-turn flux",
      tex: "\\Phi_B=\\int\\vec B\\cdot d\\vec A",
    },
    {
      label: "Flux linkage",
      tex: "N\\Phi_B",
    },
  ]}
/>

### Derivation 2: Faraday's law

The induced emf depends on how fast the flux linkage changes. The minus sign encodes the opposition direction.

<PhysicsDerivation
  items={[
    {
      label: "Induction law",
      tex: "\\mathcal E=-\\frac{d}{dt}(N\\Phi_B)",
    },
    {
      label: "Constant turns",
      tex: "\\mathcal E=-N\\frac{d\\Phi_B}{dt}",
    },
    {
      label: "Magnitude",
      tex: "|\\mathcal E|=N\\left|\\frac{d\\Phi_B}{dt}\\right|",
    },
  ]}
/>

### Derivation 3: Uniform-field loop

If \(B\), \(A\), or \(\theta\) changes, differentiate \(BA\cos\theta\) with respect to time.

<PhysicsDerivation
  items={[
    {
      label: "Uniform flux",
      tex: "\\Phi_B=BA\\cos\\theta",
    },
    {
      label: "Changing field only",
      tex: "\\mathcal E=-NA\\cos\\theta\\frac{dB}{dt}",
    },
    {
      label: "Changing area only",
      tex: "\\mathcal E=-NB\\cos\\theta\\frac{dA}{dt}",
    },
  ]}
/>

## Rules

These are the working forms of Faraday's law.

<Equation label="Faraday's law" tex="\mathcal E=-N\frac{d\Phi_B}{dt}" />

<Equation label="Magnitude" tex="|\mathcal E|=N\left|\frac{\Delta\Phi_B}{\Delta t}\right|" />

<Equation label="Uniform flux" tex="\Phi_B=BA\cos\theta" />

<Equation label="Changing field" tex="\mathcal E=-NA\cos\theta\frac{dB}{dt}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \(30\)-turn coil has flux per turn changing from \(0.020\,\mathrm{Wb}\) to \(0.005\,\mathrm{Wb}\) in \(0.10\,\mathrm{s}\). Find \(|\mathcal E|\).",
      answer: "\[|\mathcal E|=N\left|\frac{\Delta\Phi_B}{\Delta t}\right|=30\frac{|0.005-0.020|}{0.10}=4.5\,\mathrm{V}\]",
    },
    {
      title: "Example 2",
      question: "A single loop of area \(0.040\,\mathrm{m^2}\) is perpendicular to a field increasing at \(2.0\,\mathrm{T\,s^{-1}}\). Find \(|\mathcal E|\).",
      answer: "\[|\mathcal E|=A\left|\frac{dB}{dt}\right|=(0.040)(2.0)=0.080\,\mathrm{V}\]",
    },
  ]}
/>

## Checks

- Use flux per turn with the factor \(N\), not total area unless the turns are distinct surfaces.
- The minus sign gives direction; magnitudes use absolute values.
- Flux is in webers, and \(1\,\mathrm{Wb\,s^{-1}}=1\,\mathrm{V}\).
- If \(B\), \(A\), and \(\theta\) are all constant, \(\mathcal E=0\).`;
