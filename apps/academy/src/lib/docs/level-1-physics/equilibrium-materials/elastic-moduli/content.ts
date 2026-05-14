export const content = String.raw`## Principle

An elastic modulus is stiffness for one deformation mode.

## Notation

<Notation
  items={[
    { symbol: "Y", meaning: "Young modulus", unit: "Pa" },
    { symbol: "G", meaning: "shear modulus", unit: "Pa" },
    { symbol: "B", meaning: "bulk modulus", unit: "Pa" },
    { symbol: "\\sigma,\\epsilon,\\tau,\\gamma", meaning: "normal and shear stress-strain variables", unit: "Pa, none" },
    { symbol: "F,A,\\Delta L,L_0", meaning: "axial load, area, extension, and original length", unit: "N, m^{2}, m, m" },
    { symbol: "\\Delta p,\\Delta V/V", meaning: "pressure change and fractional volume change", unit: "Pa, none" },
  ]}
/>

## Method

### Derivation 1: Build Young modulus from normal stress and strain

Young modulus compares axial stress with axial strain in the linear elastic region.

<CartesianDiagram
  title="Modulus as slope"
  caption="A larger modulus gives a steeper elastic stress-strain relation."
  xRange={{ min: 0, max: 0.004, step: 0.001, label: "strain" }}
  yRange={{ min: 0, max: 500, step: 100, label: "stress" }}
  curves={[
    {
      label: "large Y",
      points: [
        { x: 0, y: 0 },
        { x: 0.003, y: 420 },
      ],
    },
    {
      label: "small Y",
      color: "var(--chart-3)",
      points: [
        { x: 0, y: 0 },
        { x: 0.003, y: 220 },
      ],
    },
  ]}
/>

<PhysicsDerivation
  items={[
    {
      label: "Young modulus",
      tex: "Y=\\frac{\\sigma}{\\epsilon}",
    },
    {
      label: "Substitute axial definitions",
      tex: "Y=\\frac{F/A}{\\Delta L/L_0}=\\frac{FL_0}{A\\Delta L}",
    },
    {
      label: "Rearrange for force",
      tex: "F=\\frac{YA}{L_0}\\Delta L",
    },
    {
      label: "Axial stiffness",
      tex: "k_{\\mathrm{axial}}=\\frac{YA}{L_0}",
    },
    {
      label: "Extension",
      tex: "\\Delta L=\\frac{FL_0}{YA}",
    },
  ]}
/>

### Derivation 2: Build shear modulus for sideways deformation

Shear modulus uses tangential stress and the resulting angular distortion.

<PhysicsDerivation
  items={[
    {
      label: "Shear modulus",
      tex: "G=\\frac{\\tau}{\\gamma}",
    },
  ]}
/>

### Derivation 3: Build bulk modulus for compression

Bulk modulus compares pressure change with fractional volume change. The minus sign keeps the modulus positive during compression.

<PhysicsDerivation
  items={[
    {
      label: "Bulk modulus",
      tex: "B=-\\frac{\\Delta p}{\\Delta V/V}",
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Young modulus" tex="Y=\frac{\sigma}{\epsilon}=\frac{FL_0}{A\Delta L}" />

<Equation label="Shear modulus" tex="G=\frac{\tau}{\gamma}" />

<Equation label="Bulk modulus" tex="B=-\frac{\Delta p}{\Delta V/V}" />

<Equation label="Axial stiffness" tex="k_{\mathrm{axial}}=\frac{YA}{L_0}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A wire has \\(Y=2.0\\times10^{11}\\,\\mathrm{Pa}\\), \\(L=1.5\\,\\mathrm{m}\\), \\(A=2.0\\times10^{-6}\\,\\mathrm{m^2}\\), and load \\(400\\,\\mathrm{N}\\). Find extension.",
      answer: "\\[\\Delta L=\\frac{FL}{YA}=\\frac{400(1.5)}{(2.0\\times10^{11})(2.0\\times10^{-6})}=1.5\\times10^{-3}\\,\\mathrm{m}\\]",
    },
    {
      title: "Example 2",
      question: "Pressure on a liquid increases by \\(3.0\\,\\mathrm{MPa}\\). With \\(B=2.0\\,\\mathrm{GPa}\\), find \\(\\Delta V/V\\).",
      answer: "\\[\\Delta V/V=-\\Delta p/B=-3.0\\times10^6/(2.0\\times10^9)=-1.5\\times10^{-3}\\]",
    },
  ]}
/>

## Checks

- Choose the correct deformation mode.
- Larger modulus means less strain.
- Bulk modulus uses volume change.
- Parallel members share extension.`;
