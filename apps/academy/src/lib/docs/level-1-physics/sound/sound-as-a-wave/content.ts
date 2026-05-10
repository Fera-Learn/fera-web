export const content = String.raw`## Principle

Sound is a longitudinal pressure disturbance that travels through a material medium.

## Notation

<Notation
  items={[
    { symbol: "\\xi(x,t)", meaning: "air-particle displacement", unit: "m" },
    { symbol: "\\Delta p(x,t)", meaning: "pressure variation from equilibrium", unit: "Pa" },
    { symbol: "\\rho_0", meaning: "equilibrium density", unit: "kg m^{-3}" },
    { symbol: "v", meaning: "sound speed", unit: "m s^{-1}" },
    { symbol: "k", meaning: "wavenumber", unit: "rad m^{-1}" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
  ]}
/>

## Method

Sound in air is not a sideways displacement wave. Air parcels oscillate back and forth along the direction that the pressure pattern travels.

<PhysicsDerivation
  items={[
    {
      label: "Longitudinal motion",
      tex: "\\vec \\xi \\parallel \\vec v",
      note: "The particle displacement is along the propagation direction.",
    },
    {
      label: "Pressure split",
      tex: "p(x,t)=p_0+\\Delta p(x,t)",
    },
    {
      label: "Sinusoidal displacement",
      tex: "\\xi(x,t)=\\xi_0\\cos(kx-\\omega t)",
    },
    {
      label: "Pressure phase",
      tex: "\\Delta p(x,t)=\\Delta p_{\\max}\\sin(kx-\\omega t)",
      note: "Pressure is largest where neighboring parcels are closest together.",
    },
  ]}
/>

A compression has positive pressure variation. A rarefaction has negative pressure variation.

## Rules

These are the compact sound-wave relations.

<Equation label="Pressure split" tex="p=p_0+\Delta p" />

<Equation label="Wave speed" tex="v=f\lambda=\frac{\omega}{k}" />

<Equation label="Longitudinal sound" tex="\vec \xi\parallel \vec v" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A sound wave has frequency \\(680\\,\\mathrm{Hz}\\) and speed \\(340\\,\\mathrm{m\\,s^{-1}}\\). Find its wavelength.",
      answer: "Use \\(v=f\\lambda\\): \\[\\lambda=\\frac{v}{f}=\\frac{340}{680}=0.50\\,\\mathrm{m}\\]",
    },
  ]}
/>

## Checks

- Sound needs a material medium; it is not an electromagnetic wave.
- The air parcels oscillate locally rather than traveling with the sound across the room.
- Pressure variation \\(\Delta p\\) is measured relative to the equilibrium pressure.
- Compression and rarefaction describe pressure, not permanent motion of air.`;
