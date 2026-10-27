export const content = String.raw`## Principle

Complex exponentials package amplitude and phase into one quantity and turn differentiation into multiplication. Physical electric fields remain real and are recovered by taking the real part.

## Notation

<Notation
  items={[
    { symbol: "E,E_0", meaning: "real harmonic field and real peak amplitude", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "\\mathcal E,\\widetilde E_0", meaning: "complex field and complex peak amplitude", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "\\mathcal E_1,\\mathcal E_2", meaning: "component complex fields being added", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "i", meaning: "imaginary unit satisfying i^2=-1" },
    { symbol: "\\Phi,\\phi_0", meaning: "total phase and constant phase offset", unit: "rad, rad" },
    { symbol: "\\vec k,k,\\vec r,\\omega,t", meaning: "wavevector, wavenumber magnitude k=|\\vec k|, position, angular frequency, and time", unit: "m^{-1}, m^{-1}, m, rad s^{-1}, s" },
    { symbol: "\\operatorname{Re},{}^*", meaning: "real-part operation and complex conjugation" },
    { symbol: "A,\\alpha", meaning: "generic real amplitude and phase", unit: "1, rad" },
    { symbol: "z", meaning: "example propagation coordinate", unit: "m" },
  ]}
/>

## The Core Method

Euler's formula resolves a unit complex exponential into real and imaginary parts:

\\[
e^{i\Phi}=\cos\Phi+i\sin\Phi,
\qquad
\cos\Phi=\frac{e^{i\Phi}+e^{-i\Phi}}{2}.
\tag*{[1]}
\\]

For a real harmonic field \\(E=E_0\cos(\vec k\cdot\vec r-\omega t+\phi_0)\\), define \\(\widetilde E_0=E_0e^{i\phi_0}\\) and use

\\[
\mathcal E(\vec r,t)=\widetilde E_0e^{i\vec k\cdot\vec r}e^{-i\omega t},
\qquad
E(\vec r,t)=\operatorname{Re}\{\mathcal E(\vec r,t)\}.
\tag*{[2]}
\\]

Equation [2] is the fixed harmonic convention. The positive spatial exponent and negative temporal exponent describe propagation along \\(+\vec k\\). The complex field is a calculation device, not an additional measurable field.

Differentiation now acts algebraically:

\\[
\frac{\partial\mathcal E}{\partial t}=-i\omega\mathcal E,
\qquad
\nabla\mathcal E=i\vec k\mathcal E,
\qquad
\nabla^2\mathcal E=-k^2\mathcal E.
\tag*{[3]}
\\]

Complex conjugation reverses every phase:

\\[
\mathcal E^*=\widetilde E_0^*e^{-i\vec k\cdot\vec r}e^{i\omega t},
\qquad
\mathcal E\mathcal E^*=|\widetilde E_0|^2.
\tag*{[4]}
\\]

The last equality explains why modulus squared removes a global phase. For two complex amplitudes, addition must occur before taking the real part or modulus:

\\[
E_{\mathrm{tot}}=\operatorname{Re}\{\mathcal E_1+\mathcal E_2\},
\qquad
|\mathcal E_1+\mathcal E_2|^2
\ne |\mathcal E_1|^2+|\mathcal E_2|^2
\quad\text{in general}.
\tag*{[5]}
\\]

<PhysicsExamples collapsible
  items={[
    {
      title: "Recovering the physical field",
      question: "A complex wave is \\(\\mathcal E=4.0e^{i(2z-6t+\\pi/3)}\\,\\mathrm{V\\,m^{-1}}\\), with SI coordinate values. Write the measurable field and evaluate it at \\(z=0.50\\,\\mathrm m\\), \\(t=0.25\\,\\mathrm s\\).",
      answer: "Taking the real part according to equation \\([2]\\) gives \\(E=4.0\\cos(2z-6t+\\pi/3)\\,\\mathrm{V\\,m^{-1}}\\). At the stated event, the phase is \\(2(0.50)-6(0.25)+\\pi/3=0.547\\,\\mathrm{rad}\\). Therefore \\(E=4.0\\cos(0.547)=3.42\\,\\mathrm{V\\,m^{-1}}\\). **Final result:** the physical field is \\(E=4.0\\cos(2z-6t+\\pi/3)\\,\\mathrm{V\\,m^{-1}}\\), with value \\(3.42\\,\\mathrm{V\\,m^{-1}}\\) at the specified event.",
    },
    {
      title: "A global phase and modulus squared",
      question: "Why do \\(3e^{i\\pi/5}\\) and \\(3e^{-i4\\pi/5}\\) have the same modulus squared?",
      answer: "For any real phase \\(\\alpha\\), equation \\([4]\\) gives \\(Ae^{i\\alpha}(Ae^{i\\alpha})^*=A^2e^{i\\alpha}e^{-i\\alpha}=A^2\\). Both stated numbers have amplitude \\(A=3\\), even though their phases differ. **Final result:** each modulus squared is \\(9\\); modulus squared contains amplitude information but no global phase information.",
    },
  ]}
/>
`;
