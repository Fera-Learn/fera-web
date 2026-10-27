export const content = String.raw`## Principle

A Michelson-Morley interferometer is an amplitude-splitting instrument with two perpendicular round-trip arms. Its ordinary optical response measures changes in arm optical path. The historical Michelson-Morley prediction additionally assumed a stationary luminiferous aether and Galilean velocity addition; that model-specific prediction is not the operating principle of every Michelson interferometer.

## Notation

<Notation
  items={[
    { symbol: "\\mathcal E_0,\\mathcal E_1,\\mathcal E_2,\\mathcal E_{\\mathrm{out}}", meaning: "input, returning-arm, and selected-output complex fields", unit: "V m^{-1}" },
    { symbol: "I_0,I", meaning: "input and selected-output intensities", unit: "W m^{-2}" },
    { symbol: "l_1,l_2,\\Delta l,q,L", meaning: "one-way arm lengths, difference l_1-l_2, mirror displacement, and historical equal arm length", unit: "m" },
    { symbol: "k,\\lambda,\\omega,t", meaning: "vacuum wavenumber, wavelength, angular frequency, and time", unit: "m^{-1}, m, rad s^{-1}, s" },
    { symbol: "\\delta,N", meaning: "round-trip relative phase and fringe count", unit: "rad, 1" },
    { symbol: "c,v", meaning: "light speed and apparatus speed through the hypothesised aether", unit: "m s^{-1}, m s^{-1}" },
    { symbol: "t_{\\parallel},t_{\\perp},\\Delta\\mathcal L_{\\mathrm{rot}}", meaning: "model round-trip times and rotation-induced optical path change", unit: "s, s, m" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

The beamsplitter creates two perpendicular round trips from one input. Returning fields overlap at the same beamsplitter, so any arm-path change appears as an output phase change.

<PhysicsDiagram slug="michelson-interferometer" />

Take an ideal 50:50 beamsplitter, equal polarisation, and one selected output port. Under the stated phase convention, neglect constant beamsplitter reflection phases. Splitting and recombination each reduce an arm field by \\(1/\sqrt2\\), so the returning contributions are

\\[
\mathcal E_1=\frac{\mathcal E_0}{2}e^{i(2kl_1-\omega t)},
\qquad
\mathcal E_2=\frac{\mathcal E_0}{2}e^{i(2kl_2-\omega t)}.
\tag*{[1]}
\\]

Adding the fields and factoring their mean phase gives

\\[
\begin{aligned}
\mathcal E_{\mathrm{out}}
&=\frac{\mathcal E_0}{2}e^{-i\omega t}
\left(e^{2ikl_1}+e^{2ikl_2}\right) \\
&=\mathcal E_0e^{-i\omega t}e^{ik(l_1+l_2)}
\cos[k(l_1-l_2)].
\end{aligned}
\tag*{[2]}
\\]

Therefore

\\[
\boxed{I=I_0\cos^2(k\Delta l)
=I_0\cos^2\left(\frac{2\pi\Delta l}{\lambda}\right)},
\qquad
\Delta l=l_1-l_2.
\tag*{[3]}
\\]

Real beamsplitter phases can interchange bright and dark ports, producing a complementary sine-squared expression. The measurable phase change is unchanged. Moving one end mirror by \\(q\\) changes the round-trip path by \\(2q\\), hence

\\[
\Delta\delta=2kq=\frac{4\pi q}{\lambda},
\qquad
\boxed{N=\frac{|\Delta\delta|}{2\pi}=\frac{2|q|}{\lambda}}.
\tag*{[4]}
\\]

For the historical aether model, an arm of length \\(L\\) parallel to speed \\(v\\) would have round-trip time

\\[
t_{\parallel}=\frac{L}{c-v}+\frac{L}{c+v}
=\frac{2Lc}{c^2-v^2}
\simeq\frac{2L}{c}\left(1+\frac{v^2}{c^2}\right).
\tag*{[5]}
\\]

The perpendicular arm would require a transverse light velocity \\(\sqrt{c^2-v^2}\\), giving

\\[
t_{\perp}=\frac{2L}{\sqrt{c^2-v^2}}
\simeq\frac{2L}{c}\left(1+\frac{v^2}{2c^2}\right).
\tag*{[6]}
\\]

Before rotation, the model path difference is \\(c(t_{\parallel}-t_{\perp})\simeq Lv^2/c^2\\). A 90-degree rotation swaps the arms and reverses its sign, so the predicted change and fringe shift are

\\[
\boxed{\Delta\mathcal L_{\mathrm{rot}}\simeq\frac{2Lv^2}{c^2}},
\qquad
\boxed{N_{\mathrm{MM}}\simeq\frac{2Lv^2}{\lambda c^2}}.
\tag*{[7]}
\\]

Equation [7] belongs only to the pre-relativistic stationary-aether model and assumes \\(v\ll c\\) and equal arms. The historical null result rejected the expected aether-wind shift; special relativity does not predict equation [7]. Modern Michelson instruments instead use the path response in equations [3] and [4], often with additional optical cavities.

<PhysicsExamples collapsible
  items={[
    {
      title: "Mirror motion and fringe count",
      question: "A Michelson interferometer uses \\(\\lambda=632.8\\,\\mathrm{nm}\\). One end mirror moves by \\(q=158.2\\,\\mathrm{nm}\\). Find the phase change and number of fringes crossed.",
      answer: "The beam traverses the displacement twice. Equation \\([4]\\) gives \\[\\Delta\\delta=\\frac{4\\pi(158.2\\,\\mathrm{nm})}{632.8\\,\\mathrm{nm}}=\\pi\\,\\mathrm{rad},\\qquad N=\\frac{2(158.2)}{632.8}=0.500.\\] A phase change of \\(\\pi\\) moves the selected port from a maximum to a minimum or vice versa under the stated convention. **Final result:** \\(\\Delta\\delta=\\pi\\,\\mathrm{rad}\\) and \\(N=0.500\\) fringe.",
    },
    {
      title: "Historical aether-model prediction",
      question: "Using the historical model only, estimate the rotation fringe shift for \\(L=11.0\\,\\mathrm m\\), \\(v=3.00\\times10^4\\,\\mathrm{m\\,s^{-1}}\\), \\(\\lambda=500\\,\\mathrm{nm}\\), and \\(c=3.00\\times10^8\\,\\mathrm{m\\,s^{-1}}\\).",
      answer: "Apply equation \\([7]\\): \\[N_{\\mathrm{MM}}=\\frac{2(11.0)(3.00\\times10^4)^2}{(500\\times10^{-9})(3.00\\times10^8)^2}=0.440.\\] This is the shift the specified stationary-aether assumptions would predict on a 90-degree rotation, not a prediction of special relativity. **Final result:** the historical model predicts a shift of \\(0.440\\) fringe for these values.",
    },
  ]}
/>
`;
