export const content = String.raw`## Principle

The electric field points in the direction where electric potential decreases fastest, with magnitude set by the potential gradient.

## Notation

<Notation
  items={[
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "V", meaning: "electric potential", unit: "V" },
    { symbol: "x,y,z", meaning: "Cartesian coordinates", unit: "m" },
    { symbol: "\\nabla V", meaning: "gradient of electric potential", unit: "V m^{-1}" },
    { symbol: "\\Delta s", meaning: "small displacement along a chosen direction", unit: "m" },
    { symbol: "E_s", meaning: "field component along that direction", unit: "N C^{-1}" },
  ]}
/>

## Method

### Derivation 1: One-dimensional relation

Move a positive test charge a small distance \\(dx\\) along the \\(x\\)-axis. Electric work and potential change describe the same energy transfer.

<PhysicsDerivation
  items={[
    {
      label: "Small electric work",
      tex: "dW=qE_x\\,dx",
    },
    {
      label: "Potential energy change",
      tex: "dU=q\\,dV",
    },
    {
      label: "Conservative relation",
      tex: "dU=-dW",
    },
    {
      label: "Cancel charge",
      tex: "q\\,dV=-qE_x\\,dx",
    },
    {
      label: "Field component",
      tex: "E_x=-\\frac{dV}{dx}",
    },
  ]}
/>

### Derivation 2: Three-dimensional gradient

In three dimensions, the same argument applies to each coordinate direction. Collecting the components gives the gradient relation.

<PhysicsDerivation
  items={[
    {
      label: "Component relations",
      tex: "E_x=-\\frac{\\partial V}{\\partial x},\\quad E_y=-\\frac{\\partial V}{\\partial y},\\quad E_z=-\\frac{\\partial V}{\\partial z}",
    },
    {
      label: "Gradient",
      tex: "\\nabla V=\\frac{\\partial V}{\\partial x}\\hat\\imath+\\frac{\\partial V}{\\partial y}\\hat\\jmath+\\frac{\\partial V}{\\partial z}\\hat k",
    },
    {
      label: "Field from potential",
      tex: "\\vec E=-\\nabla V",
    },
  ]}
/>

### Derivation 3: Uniform field as a limiting case

If the electric field is constant along one direction, potential changes linearly with distance.

<PhysicsDerivation
  items={[
    {
      label: "Constant component",
      tex: "E_s=\\mathrm{constant}",
    },
    {
      label: "Integrate",
      tex: "\\Delta V=-\\int E_s\\,ds",
    },
    {
      label: "Uniform field",
      tex: "\\Delta V=-E_s\\Delta s",
    },
  ]}
/>

## Rules

These are the compact gradient relations.

<Equation label="One dimension" tex="E_x=-\frac{dV}{dx}" />

<Equation label="Gradient relation" tex="\vec E=-\nabla V" />

<Equation label="Uniform field" tex="\Delta V=-E_s\Delta s" />

<Equation label="Field unit" tex="1\,\mathrm{V\,m^{-1}}=1\,\mathrm{N\,C^{-1}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Potential decreases by \\(12\\,\\mathrm{V}\\) over \\(0.30\\,\\mathrm{m}\\) in the \\(+x\\) direction. Find \\(E_x\\).",
      answer: "\\[E_x=-\\frac{\\Delta V}{\\Delta x}=-\\frac{-12}{0.30}=40\\,\\mathrm{V\\,m^{-1}}\\] The field points in the \\(+x\\) direction.",
    },
    {
      title: "Example 2",
      question: "A uniform electric field has magnitude \\(500\\,\\mathrm{V\\,m^{-1}}\\) to the right. Find the potential change for a \\(0.020\\,\\mathrm{m}\\) displacement to the right.",
      answer: "\\[\\Delta V=-E\\Delta x=-(500)(0.020)=-10\\,\\mathrm{V}\\] Potential decreases in the field direction.",
    },
  ]}
/>

## Checks

- The minus sign means \\(\vec E\\) points downhill in potential.
- A flat potential region has zero electric field.
- A steep potential graph means a large field magnitude.
- Use the field component along the displacement when applying \\(\Delta V=-E_s\Delta s\\).`;
