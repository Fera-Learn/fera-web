export const content = String.raw`## Principle

A linearly polarised state is an equal-magnitude superposition of left- and right-circular basis states. Use \\(+z\\) propagation, \\(e^{i(kz-\omega t)}\\), \\(\hat e_+=(\hat e_1+i\hat e_2)/\sqrt2\\), and \\(\hat e_-=(\hat e_1-i\hat e_2)/\sqrt2\\).

## Notation

<Notation
  items={[
    { symbol: "\\hat e_1,\\hat e_2", meaning: "real orthonormal linear basis vectors" },
    { symbol: "\\hat e_+,\\hat e_-", meaning: "left- and right-circular basis vectors" },
    { symbol: "c_+,c_-", meaning: "normalised circular-basis coefficients" },
    { symbol: "\\hat e_\\alpha", meaning: "unit linear-polarisation vector at angle alpha" },
    { symbol: "a_1,a_2", meaning: "linear-basis coefficients" },
    { symbol: "\\alpha", meaning: "linear polarisation angle from basis direction 1 toward direction 2", unit: "rad" },
    { symbol: "\\Delta", meaning: "phase of c minus relative to c plus", unit: "rad" },
    { symbol: "k,\\omega,z,t", meaning: "wavenumber, angular frequency, position, and time", unit: "m^{-1}, rad s^{-1}, m, s" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

A unit linear state at angle \\(\alpha\\) is

\\[
\hat e_\alpha=\cos\alpha\,\hat e_1+\sin\alpha\,\hat e_2.
\tag*{[1]}
\\]

Insert \\(\hat e_1=(\hat e_++\hat e_-)/\sqrt2\\) and \\(\hat e_2=i(\hat e_--\hat e_+)/\sqrt2\\):

\\[
\hat e_\alpha
=\frac{(\cos\alpha-i\sin\alpha)\hat e_+
+(\cos\alpha+i\sin\alpha)\hat e_-}{\sqrt2}
=\frac{e^{-i\alpha}\hat e_++e^{i\alpha}\hat e_-}{\sqrt2}.
\tag*{[2]}
\\]

Thus

\\[
c_+=\frac{e^{-i\alpha}}{\sqrt2},
\qquad c_-=\frac{e^{i\alpha}}{\sqrt2},
\qquad |c_+|=|c_-|=\frac1{\sqrt2},
\qquad \Delta=\arg\!\left(\frac{c_-}{c_+}\right)=2\alpha.
\tag*{[3]}
\\]

The factor of two is essential: changing the relative circular phase by \\(\Delta\\) rotates the linear direction by \\(\Delta/2\\), modulo \\(\pi\\).

<PhysicsExamples collapsible
  items={[
    {
      title: "Reading angle from circular phases",
      question: "A normalized state has \\(c_+=e^{-i\\pi/6}/\\sqrt2\\) and \\(c_-=e^{i\\pi/6}/\\sqrt2\\). Find its linear polarisation angle.",
      answer: "The magnitudes are equal, so the state can be linear. Their relative phase is \\[\\Delta=\\arg(c_-/c_+)=\\arg(e^{i\\pi/3})=\\pi/3.\\] Equation \\([3]\\) gives \\(\\alpha=\\Delta/2\\). **Final result:** the field is linearly polarised at \\(\\alpha=\\pi/6=30^\\circ\\).",
    },
    {
      title: "Equal circular amplitudes",
      question: "What linear direction corresponds to \\((c_+,c_-)=(1/\\sqrt2,-1/\\sqrt2)\\)?",
      answer: "The relative phase is \\(\\Delta=\\pi\\). Hence \\([3]\\) gives \\(\\alpha=\\pi/2\\) modulo \\(\\pi\\). Equivalently, the inverse transform gives \\(a_1=0\\) and \\(a_2=i\\); removing the common phase \\(i\\) leaves \\(\\hat e_2\\). **Final result:** the state is linear along \\(\\hat e_2\\).",
    },
  ]}
/>
`;
