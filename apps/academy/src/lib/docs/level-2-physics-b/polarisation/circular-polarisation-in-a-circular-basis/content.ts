export const content = String.raw`## Principle

Circular polarisation is a single basis vector in the circular basis. With \\(+z\\) propagation, \\(e^{i(kz-\omega t)}\\), and observation toward the source along \\(-z\\), \\(\hat e_+\\) is left-circular and \\(\hat e_-\\) is right-circular.

## Notation

<Notation
  items={[
    { symbol: "\\hat e_+,\\hat e_-", meaning: "left- and right-circular unit basis vectors" },
    { symbol: "\\hat e_1,\\hat e_2", meaning: "right-handed real transverse basis vectors" },
    { symbol: "c_+,c_-", meaning: "normalised circular-basis coefficients" },
    { symbol: "E_0", meaning: "electric-field amplitude scale", unit: "V m^{-1}" },
    { symbol: "\\vec E_0", meaning: "complex transverse field amplitude", unit: "V m^{-1}" },
    { symbol: "\\gamma", meaning: "arbitrary common phase", unit: "rad" },
    { symbol: "P_+,P_-", meaning: "fractions of intensity in the two circular components" },
    { symbol: "k,\\omega,z,t", meaning: "wavenumber, angular frequency, position, and time", unit: "m^{-1}, rad s^{-1}, m, s" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

The basis and general normalized state are

\\[
\hat e_\pm=\frac{\hat e_1\pm i\hat e_2}{\sqrt2},
\qquad
\vec E_0=E_0(c_+\hat e_++c_-\hat e_-),
\qquad |c_+|^2+|c_-|^2=1.
\tag*{[1]}
\\]

Pure circular states contain only one coefficient:

\\[
\text{left-circular: }(c_+,c_-)=(e^{i\gamma},0),
\qquad
\text{right-circular: }(c_+,c_-)=(0,e^{i\gamma}),
\tag*{[2]}
\\]

where the common phase \\(\gamma\\) has no effect on handedness. Orthogonality makes the component intensity fractions

\\[
P_+=|c_+|^2,
\qquad P_-=|c_-|^2,
\qquad P_++P_-=1.
\tag*{[3]}
\\]

A state with both coefficients nonzero is not purely circular: equal magnitudes produce linear polarisation, while unequal magnitudes generally produce elliptical polarisation.

<PhysicsExamples collapsible
  items={[
    {
      title: "Circular-component measurement",
      question: "A normalized state has \\((c_+,c_-)=(0,e^{i\\pi/5})\\). Find its handedness and circular intensity fractions.",
      answer: "Equation \\([2]\\) identifies a state with only \\(c_-\\) as right-circular. Equation \\([3]\\) gives \\[P_+=|0|^2=0,\\qquad P_-=|e^{i\\pi/5}|^2=1.\\] **Final result:** the state is right-circular, with \\(P_+=0\\) and \\(P_-=1\\).",
    },
    {
      title: "Rejecting a false circular state",
      question: "Is \\((c_+,c_-)=(1/\\sqrt2,i/\\sqrt2)\\) circularly polarised?",
      answer: "Both circular coefficients are nonzero and have equal magnitudes. A pure circular state must satisfy one of the alternatives in \\([2]\\). Equal magnitudes instead reconstruct a linear state; the relative phase fixes its angle. **Final result:** no; the state is linearly, not circularly, polarised.",
    },
  ]}
/>
`;
