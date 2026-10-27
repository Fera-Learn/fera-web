export const content = String.raw`## Principle

An elliptical state is generally an unequal coherent superposition of left- and right-circular basis states. Use \\(+z\\) propagation, \\(e^{i(kz-\omega t)}\\), \\(\hat e_+=(\hat e_1+i\hat e_2)/\sqrt2\\), and \\(\hat e_-=(\hat e_1-i\hat e_2)/\sqrt2\\).

## Notation

<Notation
  items={[
    { symbol: "c_+,c_-", meaning: "normalised left- and right-circular coefficients" },
    { symbol: "\\hat e_+,\\hat e_-,\\hat e_1,\\hat e_2", meaning: "circular and linear transverse basis vectors" },
    { symbol: "\\eta", meaning: "circular-component mixing angle from zero to pi over two", unit: "rad" },
    { symbol: "\\psi", meaning: "polarisation-ellipse orientation angle", unit: "rad" },
    { symbol: "a_1,a_2", meaning: "corresponding linear-basis coefficients" },
    { symbol: "\\Delta", meaning: "phase of c minus relative to c plus", unit: "rad" },
    { symbol: "k,\\omega,z,t", meaning: "wavenumber, angular frequency, position, and time", unit: "m^{-1}, rad s^{-1}, m, s" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

After removing a common phase, parameterise a normalized state as

\\[
c_+=\cos\eta\,e^{-i\psi},
\qquad
c_-=\sin\eta\,e^{i\psi},
\qquad |c_+|^2+|c_-|^2=1.
\tag*{[1]}
\\]

The relative circular phase fixes the ellipse orientation:

\\[
\Delta=\arg\!\left(\frac{c_-}{c_+}\right)=2\psi,
\qquad \psi=\frac{\Delta}{2}\pmod{\pi}.
\tag*{[2]}
\\]

Transforming to the linear basis gives

\\[
a_1=\frac{c_++c_-}{\sqrt2},
\qquad
a_2=\frac{i(c_+-c_-)}{\sqrt2}.
\tag*{[3]}
\\]

If \\(\eta=\pi/4\\), the circular magnitudes are equal and the state is linear. If \\(\eta=0\\) or \\(\pi/2\\), only one circular component remains. For every other \\(\eta\\), the state is elliptical; the larger of \\(|c_+|\\) and \\(|c_-|\\) fixes its handedness in the declared convention.

<PhysicsExamples collapsible
  items={[
    {
      title: "Classifying circular coefficients",
      question: "For \\(c_+=\\sqrt3/2\\) and \\(c_-=i/2\\), determine the state type, orientation, and dominant handedness.",
      answer: "The norm is \\(3/4+1/4=1\\). The unequal nonzero magnitudes imply elliptical polarisation. The relative phase is \\[\\Delta=\\arg\\left(\\frac{i/2}{\\sqrt3/2}\\right)=\\frac{\\pi}{2},\\] so \\([2]\\) gives \\(\\psi=\\pi/4\\). Since \\(|c_+|\\gt |c_-|\\), the left-circular component dominates. **Final result:** a left-handed ellipse oriented at \\(\\psi=\\pi/4\\).",
    },
    {
      title: "Distinguishing linear from elliptical",
      question: "Classify \\(c_+=e^{-i\\pi/8}/\\sqrt2\\) and \\(c_-=e^{i\\pi/8}/\\sqrt2\\).",
      answer: "The coefficients have equal magnitude, so \\([1]\\) has \\(\\eta=\\pi/4\\), the linear case. Their relative phase is \\(\\Delta=\\pi/4\\), and \\([2]\\) gives the linear angle \\(\\psi=\\pi/8\\). **Final result:** the state is linear at \\(\\pi/8\\), not elliptical, despite its complex circular coefficients.",
    },
  ]}
/>
`;
