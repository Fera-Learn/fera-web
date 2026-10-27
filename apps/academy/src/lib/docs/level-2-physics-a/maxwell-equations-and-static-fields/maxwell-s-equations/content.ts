export const content = String.raw`## Principle

A charged object can push another charge, while a current can turn a compass needle even without touching it.

Maxwell's equations tell one connected story: charge and current create fields, while changing fields create circulation. The first two equations describe where fields spread from; the last two describe what makes fields curl.

## Notation

<Notation
  items={[
    { symbol: "\\nabla", meaning: "del, the vector differential operator", unit: "m^{-1}" },
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "\\rho", meaning: "electric charge density", unit: "C m^{-3}" },
    { symbol: "\\epsilon_0", meaning: "permittivity of free space", unit: "F m^{-1}" },
    { symbol: "\\mu_0", meaning: "permeability of free space", unit: "N A^{-2}" },
    { symbol: "\\vec J", meaning: "electric current density", unit: "A m^{-2}" },
    { symbol: "t", meaning: "time", unit: "s" },
    { symbol: "\\vec F", meaning: "electromagnetic force on a particle", unit: "N" },
    { symbol: "q", meaning: "particle charge", unit: "C" },
    { symbol: "\\vec v", meaning: "particle velocity", unit: "m s^{-1}" },
  ]}
/>

## The Core Method

A field can behave in two basic ways near a point. **Divergence** measures whether the field spreads outward or converges inward. **Curl** measures whether the field circulates around that point.

Electric charge is the source of electric-field divergence.

\\[
\nabla\cdot\vec E=\frac{\rho}{\epsilon_0}\tag*{[1]}
\\]

Positive charge density gives outward spreading; negative charge density gives inward convergence. If \\(\rho=0\\), the divergence is zero, but the electric field can still be nonzero.

Magnetic field has no equivalent isolated source.

\\[
\nabla\cdot\vec B=0\tag*{[2]}
\\]

This is why electric field lines may begin or end on charge, while magnetic field lines must continue through space rather than stopping at a magnetic monopole.

A changing magnetic field creates a circulating electric field.

\\[
\nabla\times\vec E=-\frac{\partial\vec B}{\partial t}\tag*{[3]}
\\]

The minus sign sets the direction of the circulation: the induced electric field opposes the magnetic-field change that produces it.

Current creates a circulating magnetic field. A changing electric field does the same.

\\[
\nabla\times\vec B=\mu_0\vec J+\mu_0\epsilon_0\frac{\partial\vec E}{\partial t}\tag*{[4]}
\\]

The \\(\mu_0\vec J\\) term describes magnetic circulation around conduction current. The second term connects a changing electric field to magnetic circulation.

The four equations now fit together: charge produces electric spreading, magnetic field has no isolated source, changing magnetic field produces electric circulation, and current or changing electric field produces magnetic circulation.

For static fields, neither field changes with time.

\\[
\frac{\partial\vec E}{\partial t}=0,\qquad\frac{\partial\vec B}{\partial t}=0\tag*{[5]}
\\]

Equation [3] then says that a static electric field has no curl.

\\[
\nabla\times\vec E=0\tag*{[6]}
\\]

Equation [4] reduces to the magnetostatic form: steady current can still produce a circulating magnetic field.

\\[
\nabla\times\vec B=\mu_0\vec J\tag*{[7]}
\\]

Maxwell's equations describe the fields. The Lorentz force describes what those fields do to a charged particle.

\\[
\vec F=q(\vec E+\vec v\times\vec B)\tag*{[8]}
\\]

The electric contribution acts along \\(\vec E\\). The magnetic contribution is perpendicular to both \\(\vec v\\) and \\(\vec B\\), and a negative value of \\(q\\) reverses the total force direction.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "A static source-free region",
      question: "At a point in a static region, both the charge density and current density are zero. What do Maxwell's equations require there?",
      answer: "Start with the two source equations. Since \\(\\rho=0\\), equation [1] gives \\[\\nabla\\cdot\\vec E=0.\\] Equation [2] always gives \\[\\nabla\\cdot\\vec B=0.\\] The fields are static, so both time derivatives vanish. Equation [3] therefore gives \\[\\nabla\\times\\vec E=0.\\] Since \\(\\vec J=0\\), equation [4] gives \\[\\nabla\\times\\vec B=0.\\] **Final result:** both fields have zero divergence and zero curl at that point. This does not force the fields themselves to be zero; a nonzero uniform field satisfies all four conditions.",
    },
    {
      title: "Connecting a current to its field",
      question: "A steady current flows through a long wire. Which Maxwell equation explains the magnetic field circulating around the wire?",
      answer: "A steady current has nonzero current density \\(\\vec J\\), while the electric field is not changing with time. Equation [4] therefore becomes \\[\\nabla\\times\\vec B=\\mu_0\\vec J.\\] The equation says that current produces magnetic curl, which appears physically as magnetic field circulating around the wire.",
    },
  ]}
/>
`;
