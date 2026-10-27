export const content = String.raw`## Principle

The third law constrains magnetic response because changing an applied field cannot produce a finite equilibrium entropy difference at absolute zero. The classical Curie divergence must therefore give way to saturation, interactions, ordering, or another quantum ground-state effect.

## Notation

<Notation
  items={[
    { symbol: "U,F,S,T", meaning: "internal energy, Helmholtz energy, entropy, and absolute temperature", unit: "J, J, J K^{-1}, K" },
    { symbol: "m,B", meaning: "total magnetic moment along the applied field and magnetic flux density", unit: "J T^{-1}, T" },
    { symbol: "\\chi,\\mathcal C", meaning: "magnetic susceptibility and Curie constant", unit: "1, K" },
    { symbol: "N,\\mu", meaning: "number of independent moments and magnitude of each moment", unit: "1, J T^{-1}" },
    { symbol: "k_{\\mathrm B}", meaning: "Boltzmann constant", unit: "J K^{-1}" },
    { symbol: "y", meaning: "dimensionless magnetic energy ratio mu B/(k_B T)", unit: "1" },
  ]}
/>

## The Core Method

Using only the magnetic-work convention \\(dU=T\,dS-m\,dB\\), the Helmholtz differential is

\\[
dF=-S\,dT-m\,dB.
\tag*{[1]}
\\]

The equality of mixed derivatives of \\(F(T,B)\\) gives

\\[
\left(\frac{\partial S}{\partial B}\right)_T
=\left(\frac{\partial m}{\partial T}\right)_B.
\tag*{[2]}
\\]

For equilibrium states whose limiting entropy is independent of field, Nernst's statement requires

\\[
\lim_{T\to0^+}\left(\frac{\partial S}{\partial B}\right)_T=0
\quad\Longrightarrow\quad
\lim_{T\to0^+}\left(\frac{\partial m}{\partial T}\right)_B=0.
\tag*{[3]}
\\]

The classical Curie law instead predicts

\\[
\chi=\frac{\mathcal C}{T},
\qquad
\frac{d\chi}{dT}=-\frac{\mathcal C}{T^2},
\tag*{[4]}
\\]

which diverges as \\(T\to0^+\\). Equation [4] assumes weak fields, thermal energies large compared with magnetic level splittings, and effectively independent moments. Those assumptions fail at sufficiently low temperature.

A simple quantum correction is an ideal collection of two-state moments at fixed nonzero field. Its moment is

\\[
m=N\mu\tanh y,
\qquad
y=\frac{\mu B}{k_{\mathrm B}T}.
\tag*{[5]}
\\]

Differentiate explicitly at fixed \\(B\\):

\\[
\left(\frac{\partial m}{\partial T}\right)_B
=N\mu\operatorname{sech}^2y
\left(-\frac{\mu B}{k_{\mathrm B}T^2}\right)
=-\frac{N\mu^2B}{k_{\mathrm B}T^2}\operatorname{sech}^2y.
\tag*{[6]}
\\]

At fixed \\(B>0\\), \\(y\to\infty\\) and \\(\operatorname{sech}^2y\\) decays exponentially, faster than \\(T^{-2}\\) grows. Thus equation [6] tends to zero and the moment saturates at \\(N\mu\\). At very low or zero applied field, real spin-spin interactions, internal fields, ordering, and ground-state degeneracy determine the response; independent-spin Curie behavior cannot be assumed.

<PhysicsExamples collapsible
  items={[
    {
      title: "Approach to magnetic saturation",
      question: "For two-state moments with \\(\\mu/k_{\\mathrm B}=0.672\\,\\mathrm{K\\,T^{-1}}\\), calculate \\(m/(N\\mu)\\) at \\(B=0.50\\,\\mathrm T\\) and \\(T=0.10\\,\\mathrm K\\).",
      answer: "Equation \\([5]\\) first gives \\[y=\\frac{\\mu B}{k_{\\mathrm B}T}=\\frac{(0.672\\,\\mathrm{K\\,T^{-1}})(0.50\\,\\mathrm T)}{0.10\\,\\mathrm K}=3.36.\\] The normalized moment is then \\[\\frac{m}{N\\mu}=\\tanh(3.36)=0.9976.\\] The value is close to one, showing why linear Curie response is no longer valid. **Final result:** \\(m/(N\\mu)=0.9976\\), so the moments are about \\(99.76\\%\\) saturated.",
    },
    {
      title: "Diagnosing Curie-law breakdown",
      question: "Why must the prediction \\(\\chi=\\mathcal C/T\\to\\infty\\) be rejected as a universal zero-temperature result?",
      answer: "Equation \\([4]\\) comes from a weak-field, high-temperature expansion for independent moments. At fixed nonzero field, equation \\([5]\\) instead saturates, and equation \\([6]\\) obeys the third-law limit in equation \\([3]\\). In real materials, interactions can also produce magnetic order or lift degeneracy before zero temperature is approached. **Final result:** Curie behavior is an intermediate-regime approximation; saturation and interactions regularize the low-temperature magnetic response.",
    },
  ]}
/>
`;
