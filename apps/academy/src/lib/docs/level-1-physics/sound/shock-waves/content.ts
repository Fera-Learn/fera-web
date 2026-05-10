export const content = String.raw`## Principle

Shock waves form when a source moves faster than sound in the medium.

## Notation

<Notation
  items={[
    { symbol: "v_S", meaning: "source speed", unit: "m s^{-1}" },
    { symbol: "v", meaning: "sound speed", unit: "m s^{-1}" },
    { symbol: "M", meaning: "Mach number", unit: "1" },
    { symbol: "\\theta", meaning: "Mach cone half-angle", unit: "rad" },
    { symbol: "t", meaning: "elapsed time after emission", unit: "s" },
  ]}
/>

## Method

A subsonic source leaves wavefronts ahead of itself. A supersonic source outruns those wavefronts, so they pile up into a cone.

<PhysicsDerivation
  items={[
    {
      label: "Mach number",
      tex: "M=\\frac{v_S}{v}",
    },
    {
      label: "Supersonic condition",
      tex: "M>1",
    },
    {
      label: "Wavefront radius",
      tex: "R=vt",
    },
    {
      label: "Source distance",
      tex: "d=v_St",
    },
    {
      label: "Cone angle",
      tex: "\\sin\\theta=\\frac{R}{d}=\\frac{v}{v_S}=\\frac{1}{M}",
    },
  ]}
/>

The shock is a large pressure change concentrated near the cone surface, not a separate object moving through the air.

## Rules

These are the compact shock-wave relations.

<Equation label="Mach number" tex="M=\frac{v_S}{v}" />

<Equation label="Supersonic condition" tex="M>1" />

<Equation label="Mach angle" tex="\sin\theta=\frac{1}{M}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An aircraft travels at \\(680\\,\\mathrm{m\\,s^{-1}}\\) where the sound speed is \\(340\\,\\mathrm{m\\,s^{-1}}\\). Find its Mach number and shock angle.",
      answer: "\\[M=\\frac{680}{340}=2.0\\] Then \\[\\sin\\theta=\\frac{1}{2.0}\\] so \\[\\theta=30^\\circ\\]",
    },
  ]}
/>

## Checks

- No Mach cone forms unless the source is faster than sound in that medium.
- Larger Mach number gives a smaller cone angle.
- The sound speed depends on the medium and its state.
- A sonic boom is the listener crossing the shock front.`;
