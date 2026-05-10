export const content = String.raw`## Principle

Torque measures how a force tends to rotate a body about a chosen axis.

## Notation

<Notation
  items={[
    { symbol: "\\vec\\tau", meaning: "torque vector", unit: "N m" },
    { symbol: "\\vec r", meaning: "position from axis to force point", unit: "m" },
    { symbol: "\\vec F", meaning: "applied force", unit: "N" },
    { symbol: "\\phi", meaning: "angle between radius and force", unit: "rad" },
    { symbol: "\\ell", meaning: "perpendicular lever arm", unit: "m" },
    { symbol: "\\tau_z", meaning: "signed torque about the z-axis", unit: "N m" },
  ]}
/>

## Method

### Derivation 1: Build torque from the perpendicular force

A force can rotate a body only through the part perpendicular to the radius from the axis.

<PhysicsDerivation
  items={[
    {
      label: "Choose the axis",
      tex: "\\vec r\\ \\text{starts at the rotation axis}",
    },
    {
      label: "Perpendicular force",
      tex: "F_\\perp=F\\sin\\phi",
    },
    {
      label: "Torque magnitude",
      tex: "\\tau=rF_\\perp=rF\\sin\\phi",
    },
    {
      label: "Lever-arm form",
      tex: "\\tau=F\\ell",
    },
  ]}
/>

The beam sketch shows why only the perpendicular part matters. A force line passing through the axis has zero lever arm.

<RigidBodyDiagram
  title="Torque about a pivot"
  caption="The perpendicular force component gives the torque about the chosen axis."
  beamLength={1}
  supports={[{ x: 0, type: "fixed", label: "axis" }]}
  loads={[{ x: 0.8, angle: 90, label: "F_\\perp" }]}
  torques={[{ x: 0, direction: "counterclockwise", label: "\\tau" }]}
/>

### Derivation 2: Use the cross product for sign and direction

The vector definition packages magnitude and direction together. In a flat xy problem, the z-component gives the signed torque.

<PhysicsDerivation
  items={[
    {
      label: "Vector definition",
      tex: "\\vec\\tau=\\vec r\\times\\vec F",
    },
    {
      label: "Plane component",
      tex: "\\tau_z=xF_y-yF_x",
    },
    {
      label: "Add torques",
      tex: "\\sum\\tau_z=\\tau_{1z}+\\tau_{2z}+\\cdots",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Vector torque" tex="\vec\tau=\vec r\times\vec F" />

<Equation label="Torque magnitude" tex="\tau=rF\sin\phi" />

<Equation label="Lever arm" tex="\tau=F\ell" />

<Equation label="Plane component" tex="\tau_z=xF_y-yF_x" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(30\\,\\mathrm{N}\\) force acts perpendicular to a handle \\(0.40\\,\\mathrm{m}\\) from the axis. Find the torque magnitude.",
      answer: "Use the perpendicular lever arm: \\[\\tau=rF=0.40(30)=12\\,\\mathrm{N\\,m}\\]",
    },
    {
      title: "Example 2",
      question: "At \\(\\vec r=(0.30\\hat\\imath+0.20\\hat\\jmath)\\,\\mathrm{m}\\), a force \\(\\vec F=(10\\hat\\imath+40\\hat\\jmath)\\,\\mathrm{N}\\) acts. Find \\(\\tau_z\\).",
      answer: "Use \\[\\tau_z=xF_y-yF_x=0.30(40)-0.20(10)=10\\,\\mathrm{N\\,m}\\] so the torque is positive.",
    },
  ]}
/>

## Checks

- Torque depends on the chosen axis.
- A force through the axis gives zero torque.
- Units are newton metres, not joules in this context.
- The sign comes from rotation sense, not force direction alone.`;
