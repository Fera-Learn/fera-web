export const content = String.raw`## Principle

Interference is produced by adding fields before calculating intensity. The separate intensities survive as self terms, while two cross terms carry the relative phase information. The treatment below uses co-polarised monochromatic scalar waves; orthogonal polarisations have no scalar cross term at an ideal polarisation-insensitive detector.

## Notation

<Notation
  items={[
    { symbol: "\\mathcal E,\\mathcal E_1,\\mathcal E_2", meaning: "total and component complex scalar fields", unit: "V m^{-1}" },
    { symbol: "A_1,A_2", meaning: "non-negative component field amplitudes", unit: "V m^{-1}" },
    { symbol: "\\Phi_1,\\Phi_2,\\delta", meaning: "component phases and relative phase delta=Phi_1-Phi_2", unit: "rad" },
    { symbol: "C", meaning: "positive proportionality constant converting squared field amplitude to intensity" },
    { symbol: "I,I_0,I_1,I_2,I_{\\max},I_{\\min}", meaning: "total intensity, equal-beam intensity, component intensities, maximum intensity, and minimum intensity", unit: "W m^{-2}, W m^{-2}, W m^{-2}, W m^{-2}, W m^{-2}, W m^{-2}" },
    { symbol: "V", meaning: "fringe visibility" },
    { symbol: "j", meaning: "wave index taking values 1 and 2", unit: "1" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

The field sum must be formed before squaring. Equal in-phase waves double the amplitude, whereas equal waves half a cycle apart cancel point by point.

<PhysicsDiagram slug="two-wave-interference" />

Write the two complex fields as \\(\mathcal E_j=A_j e^{i\Phi_j}\\). Superposition gives \\(\mathcal E=\mathcal E_1+\mathcal E_2\\), so the time-averaged intensity is

\\[
\begin{aligned}
I
&=C\mathcal E\mathcal E^* \\
&=C(\mathcal E_1+\mathcal E_2)(\mathcal E_1^*+\mathcal E_2^*) \\
&=C|\mathcal E_1|^2+C|\mathcal E_2|^2
  +C\mathcal E_1\mathcal E_2^*+C\mathcal E_2\mathcal E_1^*.
\end{aligned}
\tag*{[1]}
\\]

The last two terms are the interference cross terms. Since \\(I_j=CA_j^2\\) and \\(\delta=\Phi_1-\Phi_2\\), Euler's identity gives

\\[
\begin{aligned}
C\mathcal E_1\mathcal E_2^*+C\mathcal E_2\mathcal E_1^*
&=CA_1A_2(e^{i\delta}+e^{-i\delta}) \\
&=2CA_1A_2\cos\delta \\
&=2\sqrt{I_1I_2}\cos\delta.
\end{aligned}
\tag*{[2]}
\\]

Therefore the observable intensity is

\\[
\boxed{I=I_1+I_2+2\sqrt{I_1I_2}\cos\delta}.
\tag*{[3]}
\\]

The largest and smallest values follow from \\(\cos\delta=1\\) and \\(\cos\delta=-1\\):

\\[
I_{\max}=(\sqrt{I_1}+\sqrt{I_2})^2,
\qquad
I_{\min}=(\sqrt{I_1}-\sqrt{I_2})^2.
\tag*{[4]}
\\]

Substitution into the definition of fringe visibility gives

\\[
\begin{aligned}
V
&=\frac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}} \\
&=\frac{4\sqrt{I_1I_2}}{2(I_1+I_2)} \\
&=\boxed{\frac{2\sqrt{I_1I_2}}{I_1+I_2}}.
\end{aligned}
\tag*{[5]}
\\]

Equal intensities give \\(V=1\\) and a zero minimum. Unequal fields cannot cancel completely, because the smaller field amplitude cannot remove the larger one.

<PhysicsExamples collapsible
  items={[
    {
      title: "Unequal beams at a specified phase",
      question: "Two coherent co-polarised beams have intensities \\(I_1=9.0\\,\\mathrm{W\\,m^{-2}}\\) and \\(I_2=4.0\\,\\mathrm{W\\,m^{-2}}\\). Find the intensity when \\(\\delta=60^\\circ\\), and find the visibility.",
      answer: "Use equation \\([3]\\) with \\(\\cos60^\\circ=1/2\\): \\[I=9.0+4.0+2\\sqrt{(9.0)(4.0)}\\left(\\frac12\\right)=19.0\\,\\mathrm{W\\,m^{-2}}.\\] Equation \\([5]\\) gives \\[V=\\frac{2\\sqrt{(9.0)(4.0)}}{9.0+4.0}=\\frac{12}{13}=0.923.\\] The limiting values \\(I_{\\max}=25.0\\,\\mathrm{W\\,m^{-2}}\\) and \\(I_{\\min}=1.0\\,\\mathrm{W\\,m^{-2}}\\) verify the same visibility. **Final result:** \\(I=19.0\\,\\mathrm{W\\,m^{-2}}\\) and \\(V=0.923\\).",
    },
    {
      title: "Why incoherent averaging removes fringes",
      question: "The relative phase of two equal-intensity beams varies rapidly and uniformly through a full cycle during each detector exposure. What intensity does the detector record?",
      answer: "For equal component intensities \\(I_1=I_2=I_0\\), equation \\([3]\\) gives \\(I=2I_0+2I_0\\cos\\delta\\). Uniform phase sampling has \\(\\langle\\cos\\delta\\rangle=0\\), so \\[\\langle I\\rangle=2I_0+2I_0\\langle\\cos\\delta\\rangle=2I_0.\\] The fields still superpose instantaneously, but the cross term averages to zero during detection. **Final result:** the recorded intensity is \\(2I_0\\), with no stable fringe contrast.",
    },
  ]}
/>
`;
