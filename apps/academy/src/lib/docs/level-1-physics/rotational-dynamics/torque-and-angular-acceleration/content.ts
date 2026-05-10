export const content = String.raw`## Principle

Net external torque sets angular acceleration through moment of inertia.

## Notation

<Notation
  items={[
    { symbol: "\\sum\\tau_z", meaning: "net external torque about the axis", unit: "N m" },
    { symbol: "I", meaning: "moment of inertia about the axis", unit: "kg m^{2}" },
    { symbol: "\\alpha", meaning: "angular acceleration", unit: "rad s^{-2}" },
    { symbol: "\\omega", meaning: "angular velocity", unit: "rad s^{-1}" },
    { symbol: "R", meaning: "radius where a string or rim force acts", unit: "m" },
    { symbol: "T", meaning: "tension", unit: "N" },
  ]}
/>

## Method

### Derivation 1: Sum torques about the actual axis

The rotational form of Newton's second law uses torques about the same axis used to define \\(I\\).

<PhysicsDerivation
  items={[
    {
      label: "Find each torque",
      tex: "\\tau_z=rF_\\perp",
    },
    {
      label: "Choose rotation sign",
      tex: "+\\alpha\\ \\text{matches positive}\\ \\sum\\tau_z",
    },
    {
      label: "Rotational law",
      tex: "\\sum\\tau_z=I\\alpha",
    },
  ]}
/>

### Derivation 2: Add constraints only when the geometry requires them

If a string unwinds without slipping, the string acceleration equals the rim's tangential acceleration.

<PhysicsDerivation
  items={[
    {
      label: "Tangential acceleration",
      tex: "a_t=R\\alpha",
    },
    {
      label: "No-slip string constraint",
      tex: "a=a_t=R\\alpha",
    },
    {
      label: "Constant alpha link",
      tex: "\\omega_f=\\omega_i+\\alpha t",
    },
  ]}
/>

### Derivation 3: Connect torque impulse to angular momentum

The torque law can also be integrated over time to find angular impulse.

<PhysicsDerivation
  items={[
    {
      label: "Torque law",
      tex: "\\sum\\tau=\\frac{dL}{dt}",
    },
    {
      label: "Integrate in time",
      tex: "\\int\\sum\\tau\\,dt=\\Delta L",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Rotational law" tex="\sum\tau_z=I\alpha" />

<Equation label="Tangential link" tex="a_t=R\alpha" />

<Equation label="Angular impulse" tex="\int\tau\,dt=\Delta L" />

<Equation label="Constant alpha" tex="\omega_f=\omega_i+\alpha t" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A wheel has \\(I=0.80\\,\\mathrm{kg\\,m^2}\\). A net torque \\(4.0\\,\\mathrm{N\\,m}\\) acts. Find \\(\\alpha\\).",
      answer: "Use \\[\\alpha=\\frac{\\sum\\tau}{I}=\\frac{4.0}{0.80}=5.0\\,\\mathrm{rad\\,s^{-2}}\\]",
    },
    {
      title: "Example 2",
      question: "A string pulls a pulley rim of radius \\(0.20\\,\\mathrm{m}\\) with tension \\(15\\,\\mathrm{N}\\). Find the torque magnitude.",
      answer: "The pull is tangential, so \\[\\tau=RT=0.20(15)=3.0\\,\\mathrm{N\\,m}\\]",
    },
  ]}
/>

## Checks

- Use the moment of inertia about the actual axis.
- Internal torques cancel only when the whole system is chosen.
- String acceleration and rim acceleration match only with no slip.
- A larger \\(I\\) gives smaller \\(\alpha\\) for the same net torque.`;
