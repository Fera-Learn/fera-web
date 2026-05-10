export const content = String.raw`## Principle

Buoyancy is the net upward pressure force from the surrounding fluid.

## Notation

<Notation
  items={[
    { symbol: "F_B", meaning: "buoyant force", unit: "N" },
    { symbol: "\\rho_f", meaning: "fluid density", unit: "kg m^{-3}" },
    { symbol: "V_{\\mathrm{disp}}", meaning: "displaced fluid volume", unit: "m^{3}" },
    { symbol: "p_{\\mathrm{top}},p_{\\mathrm{bottom}}", meaning: "pressures at the top and bottom faces", unit: "Pa" },
    { symbol: "A", meaning: "cross-sectional area", unit: "m^{2}" },
    { symbol: "h", meaning: "vertical separation of top and bottom faces", unit: "m" },
  ]}
/>

## Method

Buoyancy comes from the pressure being larger on the lower face than on the upper face.

<PhysicsDerivation
  items={[
    {
      label: "Pressure difference",
      tex: "p_{\\mathrm{bottom}}-p_{\\mathrm{top}}=\\rho_fgh",
    },
    {
      label: "Net upward force",
      tex: "F_B=(p_{\\mathrm{bottom}}-p_{\\mathrm{top}})A",
    },
    {
      label: "Displaced volume",
      tex: "V_{\\mathrm{disp}}=Ah",
    },
    {
      label: "Buoyancy formula",
      tex: "F_B=\\rho_f g V_{\\mathrm{disp}}",
    },
  ]}
/>

The free-body diagram replaces the detailed pressure forces by one buoyant force acting upward on the body.

<FreeBodyDiagram
  title="Immersed body model"
  caption="The surrounding fluid produces an upward buoyant force that competes with the body's weight."
  bodyLabel="body"
  bodyShape="circle"
  forces={[
    { label: "F_B", angle: 90, color: "var(--chart-3)", length: 64 },
    { label: "W", angle: 270, color: "var(--chart-5)", length: 58 },
  ]}
/>

For a floating body, vertical equilibrium requires the buoyant force to equal the body's weight.

## Rules

These are the compact buoyancy relations.

<Equation label="Buoyant force" tex="F_B=\rho_f g V_{\mathrm{disp}}" />

<Equation label="Floating condition" tex="F_B=W" />

<Equation label="Supported immersion" tex="N+F_B=W" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A cube of side \\(0.10\\,\\mathrm{m}\\) is fully submerged in water. Find the buoyant force.",
      answer: "The displaced volume is \\[V_{\\mathrm{disp}}=(0.10)^3=1.0\\times10^{-3}\\,\\mathrm{m^3}\\] so \\[F_B=1000(9.8)(1.0\\times10^{-3})=9.8\\,\\mathrm{N}\\]",
    },
    {
      title: "Example 2",
      question: "A sample weighs \\(42\\,\\mathrm{N}\\) in air and displaces \\(2.0\\times10^{-3}\\,\\mathrm{m^3}\\) of water when fully immersed. Find the supporting force reading while immersed.",
      answer: "\\[F_B=1000(9.8)(2.0\\times10^{-3})=19.6\\,\\mathrm{N}\\] With vertical equilibrium, \\[N=W-F_B=42-19.6=22.4\\,\\mathrm{N}\\]",
    },
  ]}
/>

## Checks

- Use the fluid density, not the object's density, in the buoyancy formula.
- Use displaced volume, not automatically the full object volume.
- Buoyant force points upward because pressure increases downward.
- A floating object has zero net vertical force, not zero forces.`;
