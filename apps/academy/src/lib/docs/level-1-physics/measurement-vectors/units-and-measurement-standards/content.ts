export const content = String.raw`## Principle

Units attach numbers to reproducible measurement standards.

## Notation

<Notation
  items={[
    { symbol: "L", meaning: "length dimension", unit: "m" },
    { symbol: "M", meaning: "mass dimension", unit: "kg" },
    { symbol: "T", meaning: "time dimension", unit: "s" },
    { symbol: "[q]", meaning: "dimension of quantity q", unit: "varies" },
    { symbol: "N", meaning: "newton", unit: "kg m s^{-2}" },
    { symbol: "J", meaning: "joule", unit: "kg m^{2} s^{-2}" },
  ]}
/>

## Method

Derived units are built by replacing each physical quantity with its base dimensions.

<PhysicsDerivation
  items={[
    {
      label: "Speed",
      tex: "[v]=[x/t]=LT^{-1}",
    },
    {
      label: "Acceleration",
      tex: "[a]=[v/t]=LT^{-2}",
    },
    {
      label: "Force",
      tex: "[F]=[ma]=M(LT^{-2})",
    },
    {
      label: "Energy",
      tex: "[E]=[Fx]=(MLT^{-2})L",
    },
  ]}
/>

## Rules

<Equation label="Speed dimension" tex="[v]=LT^{-1}" />

<Equation label="Acceleration dimension" tex="[a]=LT^{-2}" />

<Equation label="Force dimension" tex="[F]=MLT^{-2}" />

<Equation label="Energy dimension" tex="[E]=ML^2T^{-2}" />

## Checks

- Added terms need identical dimensions.
- Units can change while dimensions stay fixed.
- Derived units must reduce to base units.
- A dimensionless ratio has no remaining unit.`;
