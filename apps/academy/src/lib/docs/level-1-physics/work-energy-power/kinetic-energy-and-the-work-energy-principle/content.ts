export const content = String.raw`## Principle

Net work changes translational kinetic energy.

## Notation

<Notation
  items={[
    { symbol: "K", meaning: "translational kinetic energy", unit: "J" },
    { symbol: "m", meaning: "mass", unit: "kg" },
    { symbol: "v", meaning: "speed", unit: "m s^{-1}" },
    { symbol: "W_{\\mathrm{net}}", meaning: "total work by all forces", unit: "J" },
    { symbol: "\\Delta K", meaning: "change in kinetic energy", unit: "J" },
  ]}
/>

## Method

The work-energy relation comes from applying Newton's second law along the displacement and rewriting acceleration using speed.

<PhysicsDerivation
  items={[
    {
      label: "Net work",
      tex: "W_{\\mathrm{net}}=\\int_{x_i}^{x_f}F_{\\mathrm{net}}\\,dx",
    },
    {
      label: "Newton model",
      tex: "F_{\\mathrm{net}}=ma",
    },
    {
      label: "Substitute acceleration",
      tex: "a=\\frac{dv}{dt}",
    },
    {
      label: "Change variable",
      tex: "v=\\frac{dx}{dt}\\Rightarrow dx=v\\,dt",
    },
    {
      label: "Replace dx",
      tex: "a\\,dx=\\frac{dv}{dt}\\,v\\,dt=v\\,dv",
    },
    {
      label: "Integrate speed",
      tex: "W_{\\mathrm{net}}=\\int_{v_i}^{v_f}mv\\,dv",
    },
    {
      label: "Evaluate integral",
      tex: "W_{\\mathrm{net}}=\\frac{1}{2}mv_f^2-\\frac{1}{2}mv_i^2",
    },
  ]}
/>

This motivates defining translational kinetic energy from speed, not velocity direction.

## Rules

<Equation label="Kinetic energy" tex="K=\frac{1}{2}mv^2" />

<Equation label="Work-energy principle" tex="W_{\mathrm{net}}=\Delta K=K_f-K_i" />

<Equation label="Final speed" tex="v_f=\sqrt{v_i^2+\frac{2W_{\mathrm{net}}}{m}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(3\\,\\mathrm{kg}\\) cart moving at \\(2\\,\\mathrm{m\\,s^{-1}}\\) has \\(48\\,\\mathrm{J}\\) net work done on it. Find its final speed.",
      answer: "\\[K_i=\\frac{1}{2}(3)(2^2)=6\\,\\mathrm{J}\\]\\[K_f=6+48=54\\,\\mathrm{J}\\]\\[v_f=\\sqrt{\\frac{2K_f}{m}}=6\\,\\mathrm{m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A brake does \\(-250\\,\\mathrm{J}\\) of work on a \\(5\\,\\mathrm{kg}\\) object and stops it. Find the initial speed.",
      answer: "\\[0-K_i=-250\\,\\mathrm{J}\\Rightarrow K_i=250\\,\\mathrm{J}\\]\\[v_i=\\sqrt{\\frac{2K_i}{m}}=10\\,\\mathrm{m\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- Kinetic energy is never negative.
- Negative net work reduces speed.
- Work-energy gives speed, not direction.
- Use total work from all forces.`;
