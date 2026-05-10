export const content = String.raw`## Principle

Pressure-volume work is the energy transferred when a system boundary moves against pressure.

## Notation

<Notation
  items={[
    { symbol: "W", meaning: "work done by the system", unit: "J" },
    { symbol: "p", meaning: "gas pressure at the boundary", unit: "Pa" },
    { symbol: "V", meaning: "system volume", unit: "m^{3}" },
    { symbol: "\\Delta V", meaning: "change in volume", unit: "m^{3}" },
    { symbol: "A", meaning: "piston area", unit: "m^{2}" },
    { symbol: "x", meaning: "piston displacement", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Build work from a moving piston

A gas pushing a piston exerts force \\(F=pA\\). If the piston moves outward a small distance \\(dx\\), the gas does positive work.

<PhysicsDerivation
  items={[
    {
      label: "Pressure force",
      tex: "F=pA",
    },
    {
      label: "Small displacement work",
      tex: "dW=F\\,dx=pA\\,dx",
    },
    {
      label: "Volume change",
      tex: "dV=A\\,dx",
    },
    {
      label: "Boundary work",
      tex: "dW=p\\,dV",
    },
  ]}
/>

### Derivation 2: Add the work along the process

If pressure changes during the process, the total work is the signed area under the path on a \\(p\\)-\\(V\\) graph.

<PhysicsDerivation
  items={[
    {
      label: "General work",
      tex: "W=\\int_{V_i}^{V_f}p\\,dV",
    },
    {
      label: "Constant pressure",
      tex: "W=p(V_f-V_i)=p\\Delta V",
    },
    {
      label: "Constant volume",
      tex: "\\Delta V=0\\Rightarrow W=0",
    },
  ]}
/>

## Rules

These are the compact work relations for volume-changing processes.

<Equation label="Boundary work" tex="dW=p\,dV" />

<Equation label="Path work" tex="W=\int_{V_i}^{V_f}p\,dV" />

<Equation label="Isobaric work" tex="W=p\Delta V" />

<Equation label="Isochoric work" tex="W=0" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A gas expands at constant pressure \\(2.0\\times10^5\\,\\mathrm{Pa}\\) from \\(0.030\\,\\mathrm{m^3}\\) to \\(0.050\\,\\mathrm{m^3}\\). Find work done by the gas.",
      answer: "\\[W=p\\Delta V=(2.0\\times10^5)(0.020)=4.0\\times10^3\\,\\mathrm{J}\\] The sign is positive because the gas expands.",
    },
  ]}
/>

## Checks

- Expansion gives \\(W>0\\) with the section sign convention.
- Compression gives \\(W\<0\\).
- Work is the area under the actual path, not just the endpoint difference.
- Constant-volume processes do no pressure-volume work.`;
