export const content = String.raw`## Principle

Shifting a parallel rotation axis away from the center of mass adds \\(Md^2\\).

## Notation

<Notation
  items={[
    { symbol: "I", meaning: "moment of inertia about chosen axis", unit: "kg m^{2}" },
    { symbol: "I_{\\mathrm{cm}}", meaning: "moment of inertia about parallel center-of-mass axis", unit: "kg m^{2}" },
    { symbol: "M", meaning: "body mass", unit: "kg" },
    { symbol: "d", meaning: "perpendicular separation between axes", unit: "m" },
    { symbol: "I_{\\mathrm{tot}}", meaning: "composite moment of inertia", unit: "kg m^{2}" },
  ]}
/>

## Method

### Derivation 1: Separate center-of-mass distance from internal distance

The new axis must be parallel to the center-of-mass axis. Each mass element is farther from the new axis because the whole body has been shifted by \\(d\\).

<PhysicsDerivation
  items={[
    {
      label: "Start from definition",
      tex: "I=\\int r_\\perp^2\\,dm",
    },
    {
      label: "Split distance",
      tex: "\\vec r=\\vec r_{\\mathrm{cm}}+\\vec d",
    },
    {
      label: "Center-of-mass cross term",
      tex: "\\int \\vec r_{\\mathrm{cm}}\\,dm=\\vec0",
    },
    {
      label: "Parallel-axis result",
      tex: "I=I_{\\mathrm{cm}}+Md^2",
    },
  ]}
/>

The sketch shows the only distance allowed in the theorem: the perpendicular separation between two parallel axes.

<CartesianDiagram
  title="Parallel-axis shift"
  caption="The shifted axis must be parallel to the center-of-mass axis."
  width={420}
  height={240}
  xRange={{ min: -1, max: 3, step: 1, label: "axis position" }}
  yRange={{ min: -1, max: 1, step: 1, label: "body" }}
  curves={[
    {
      label: "cm axis",
      dashed: true,
      points: [
        { x: 0, y: -1 },
        { x: 0, y: 1 },
      ],
    },
    {
      label: "shifted axis",
      dashed: true,
      points: [
        { x: 2, y: -1 },
        { x: 2, y: 1 },
      ],
    },
  ]}
  vectors={[
    { from: { x: 0, y: -0.65 }, to: { x: 2, y: -0.65 }, label: "d" },
  ]}
/>

### Derivation 2: Use it for composite bodies

For a composite body, move each part to the same final axis before adding the moments of inertia.

<PhysicsDerivation
  items={[
    {
      label: "Shift each part",
      tex: "I_i=I_{i,\\mathrm{cm}}+M_id_i^2",
    },
    {
      label: "Add about common axis",
      tex: "I_{\\mathrm{tot}}=\\sum_i I_i",
    },
    {
      label: "Point-mass limit",
      tex: "I=Mr^2",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Parallel axis" tex="I=I_{\mathrm{cm}}+Md^2" />

<Equation label="Composite body" tex="I_{\mathrm{tot}}=\sum_i I_i" />

<Equation label="Point mass shift" tex="I=Mr^2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A rod has \\(M=2.0\\,\\mathrm{kg}\\), \\(L=1.5\\,\\mathrm{m}\\), and \\(I_{\\mathrm{cm}}=\\frac1{12}ML^2\\). Find \\(I\\) about one end.",
      answer: "\\[I=\\frac1{12}ML^2+M\\left(\\frac{L}{2}\\right)^2=\\frac13ML^2=1.50\\,\\mathrm{kg\\,m^2}\\]",
    },
    {
      title: "Example 2",
      question: "A disk has \\(M=4.0\\,\\mathrm{kg}\\), \\(R=0.30\\,\\mathrm{m}\\), and rotates about an axis parallel to its center axis but offset by \\(0.20\\,\\mathrm{m}\\). Find \\(I\\).",
      answer: "\\[I=\\frac12MR^2+Md^2=\\frac12(4.0)(0.30^2)+4.0(0.20^2)=0.34\\,\\mathrm{kg\\,m^2}\\]",
    },
  ]}
/>

## Checks

- The shifted axis must be parallel to the center-of-mass axis.
- The offset \\(d\\) is perpendicular axis separation.
- The theorem increases \\(I\\); it never subtracts \\(Md^2\\).
- For composite bodies, shift each part to the same final axis before adding.`;
