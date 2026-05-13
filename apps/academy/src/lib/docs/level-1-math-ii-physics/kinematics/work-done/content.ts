export const content = String.raw`## Principle

Work measures the energy transferred by a force through a displacement. Only the component of force along the displacement contributes to work.

For a constant force, work is a dot product. For a force that changes along a path, work is a line integral of force along the path.

## Notation

<Notation
  items={[
    { symbol: "W", meaning: "work done by a force", unit: "J" },
    { symbol: "\\mathbf F", meaning: "force", unit: "N" },
    { symbol: "\\Delta\\mathbf r", meaning: "displacement", unit: "m" },
    { symbol: "C", meaning: "path followed by the particle" },
    { symbol: "d\\mathbf r", meaning: "infinitesimal displacement along the path", unit: "m" },
    { symbol: "K", meaning: "kinetic energy", unit: "J" },
  ]}
/>

## Method

### Step 1: Use the dot product for constant force

When \(\mathbf F\) is constant over the displacement, compute:

<Equation label="Constant-force work" tex="W=\mathbf F\cdot\Delta\mathbf r" />

The dot product selects the force component parallel to the displacement.

<PhysicsDerivation
  items={[
    { label: "Resolve force along displacement", tex: "F_{\\parallel}=|\\mathbf F|\\cos\\theta" },
    { label: "Multiply by displacement length", tex: "W=F_{\\parallel}|\\Delta\\mathbf r|" },
    { label: "Substitute the parallel component", tex: "W=|\\mathbf F||\\Delta\\mathbf r|\\cos\\theta" },
    { label: "Recognize the dot product", tex: "W=\\mathbf F\\cdot\\Delta\\mathbf r" },
  ]}
/>

### Step 2: Integrate for variable force

When force changes along a path, add the small contributions \(\mathbf F\cdot d\mathbf r\):

<Equation label="Variable-force work" tex="W=\int_C\mathbf F\cdot d\mathbf r" />

### Step 3: Relate net work to kinetic energy

The net work done on a particle changes its kinetic energy:

<Equation label="Work-energy theorem" tex="W_{\text{net}}=\Delta K" />

## Rules

<Equation label="Positive work condition" tex="\mathbf F\cdot\Delta\mathbf r\gt0" />

<Equation label="Negative work condition" tex="\mathbf F\cdot\Delta\mathbf r\lt0" />

<Equation label="Joule from force and distance" tex="1\,J=1\,N\,m" />

- Positive work adds kinetic energy when considering net work.
- Negative work removes kinetic energy when considering net work.
- A force perpendicular to displacement does zero work over that displacement.
- Work depends on the path when the force is not conservative.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A constant force \\(\\mathbf F=3\\mathbf i+4\\mathbf j\\) N moves a particle by \\(\\Delta\\mathbf r=2\\mathbf i\\) m. Find the work.",
      answer: "Use the dot product: \\(W=(3\\mathbf i+4\\mathbf j)\\cdot(2\\mathbf i)=6\\) J. The \\(\\mathbf j\\) component does not contribute because the displacement has no \\(\\mathbf j\\) component.",
    },
    {
      title: "Example 2",
      question: "A force is opposite to displacement. What is the sign of the work?",
      answer: "The angle between force and displacement is \\(\\pi\\), so \\(\\cos\\pi=-1\\). The dot product is negative, so the work is negative.",
    },
    {
      title: "Example 3",
      question: "If net work on a particle is \\(10\\) J, how does kinetic energy change?",
      answer: "The work-energy theorem gives \\(W_{\\text{net}}=\\Delta K\\). Therefore \\(\\Delta K=10\\) J, so kinetic energy increases by \\(10\\) J.",
    },
  ]}
/>

## Checks

- Use the component of force along displacement, not necessarily the full force magnitude.
- Check the sign of the dot product before interpreting energy transfer.
- Use a line integral when the force varies along the path.
- Work and energy have the same unit, the joule.`;
