export const content = String.raw`## Principle

Energy is a scalar quantity used to track the ability of a system to produce changes such as motion, deformation, or heating. In particle mechanics, kinetic energy depends on speed, while potential energy is associated with position in a conservative force field.

Mechanical energy is the sum of kinetic and potential energy. Under conservative forces and no dissipative work, mechanical energy is constant.

## Notation

<Notation
  items={[
    { symbol: "K", meaning: "kinetic energy", unit: "J" },
    { symbol: "U", meaning: "potential energy", unit: "J" },
    { symbol: "E", meaning: "mechanical energy", unit: "J" },
    { symbol: "m", meaning: "mass", unit: "kg" },
    { symbol: "\\mathbf v", meaning: "velocity", unit: "m s^{-1}" },
    { symbol: "|\\mathbf v|", meaning: "speed", unit: "m s^{-1}" },
  ]}
/>

## Method

### Step 1: Compute kinetic energy from speed

Kinetic energy uses speed squared, not velocity direction:

<Equation label="Kinetic energy" tex="K=\frac{1}{2}m|\mathbf v|^2" />

### Step 2: Add potential energy when it is defined

If a conservative model assigns a potential energy \(U\), combine it with kinetic energy:

<Equation label="Mechanical energy" tex="E=K+U" />

### Step 3: Apply conservation only when justified

If no non-conservative work changes the system energy, the mechanical energy does not change:

<Equation label="Conservation condition" tex="\Delta E=0" />

## Rules

<Equation label="Energy change" tex="\Delta E=E_2-E_1" />

<Equation label="Joule unit" tex="1\,J=1\,kg\,m^2\,s^{-2}" />

<Equation label="Conservative force relation" tex="\mathbf F=-\nabla U" />

- Energy is scalar, so it has no direction.
- Kinetic energy is always non-negative when mass is positive.
- Potential energy can be shifted by an arbitrary constant; potential-energy differences matter physically.
- Conservation of mechanical energy is a modelling statement, not an automatic rule for every system.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the kinetic energy of a \\(3\\) kg particle moving at speed \\(4\\) \\(m s^{-1}\\).",
      answer: "Use \\(K=\\frac{1}{2}m|\\mathbf v|^2\\). Then \\(K=\\frac{1}{2}(3)(4^2)=24\\) J.",
    },
    {
      title: "Example 2",
      question: "A particle has \\(K=12\\) J and \\(U=5\\) J. Find its mechanical energy.",
      answer: "Mechanical energy is \\(E=K+U\\), so \\(E=12+5=17\\) J.",
    },
    {
      title: "Example 3",
      question: "If mechanical energy is conserved and \\(U\\) decreases by \\(7\\) J, what happens to \\(K\\)?",
      answer: "Conservation gives \\(\\Delta K+\\Delta U=0\\). If \\(\\Delta U=-7\\) J, then \\(\\Delta K=+7\\) J. The kinetic energy increases by \\(7\\) J.",
    },
  ]}
/>

## Checks

- Do not attach a direction to energy; energy is scalar.
- Use speed magnitude in kinetic energy, not a signed velocity component unless the motion is one-dimensional and speed is its absolute value.
- State the conservation assumption before setting \(E_1=E_2\).
- Keep joules consistent: \(J=N\,m=kg\,m^2\,s^{-2}\).`;
