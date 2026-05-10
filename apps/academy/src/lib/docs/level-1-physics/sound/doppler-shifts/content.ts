export const content = String.raw`## Principle

Doppler shifts come from motion changing wavefront spacing at the listener.

## Notation

<Notation
  items={[
    { symbol: "f_S", meaning: "source frequency", unit: "Hz" },
    { symbol: "f_L", meaning: "frequency heard by listener", unit: "Hz" },
    { symbol: "v", meaning: "sound speed in the medium", unit: "m s^{-1}" },
    { symbol: "v_L", meaning: "listener velocity toward the source", unit: "m s^{-1}" },
    { symbol: "v_S", meaning: "source velocity toward the listener", unit: "m s^{-1}" },
  ]}
/>

## Method

For sound, source and listener speeds are measured relative to the medium. Motion toward the other object raises the heard frequency.

<PhysicsDerivation
  items={[
    {
      label: "Moving listener",
      tex: "f_L=f_S\\frac{v+v_L}{v}",
      note: "A listener moving into wavefronts meets them more often.",
    },
    {
      label: "Moving source",
      tex: "f_L=f_S\\frac{v}{v-v_S}",
      note: "A source moving toward the listener emits crests closer together ahead of it.",
    },
    {
      label: "Combined motion",
      tex: "f_L=f_S\\frac{v+v_L}{v-v_S}",
    },
  ]}
/>

With this sign convention, \\(v_L>0\\) means the listener moves toward the source and \\(v_S>0\\) means the source moves toward the listener.

## Rules

These are the compact Doppler relations for motion along the line joining source and listener.

<Equation label="Moving listener" tex="f_L=f_S\frac{v+v_L}{v}" />

<Equation label="Moving source" tex="f_L=f_S\frac{v}{v-v_S}" />

<Equation label="Combined shift" tex="f_L=f_S\frac{v+v_L}{v-v_S}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(600\\,\\mathrm{Hz}\\) source moves toward a stationary listener at \\(25\\,\\mathrm{m\\,s^{-1}}\\). Use \\(v=340\\,\\mathrm{m\\,s^{-1}}\\).",
      answer: "Here \\(v_L=0\\) and \\(v_S=25\\,\\mathrm{m\\,s^{-1}}\\): \\[f_L=600\\frac{340}{340-25}=648\\,\\mathrm{Hz}\\]",
    },
  ]}
/>

## Checks

- Sound Doppler speeds are relative to the medium, not just relative to each other.
- Approaching motion raises frequency; separating motion lowers frequency.
- Keep the source-speed term in the denominator.
- The formula above is for subsonic motion along one line.`;
