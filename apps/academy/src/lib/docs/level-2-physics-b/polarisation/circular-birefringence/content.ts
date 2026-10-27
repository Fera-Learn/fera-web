export const content = String.raw`## Principle

Circular birefringence gives opposite circular eigenstates different phase indices. Their relative phase changes with distance; because a linear state contains equal circular amplitudes, it remains linear but its direction rotates.

## Notation

<Notation
  items={[
    { symbol: "\\hat e_+,\\hat e_-", meaning: "left- and right-circular unit vectors for positive-z propagation" },
    { symbol: "\\hat e_1", meaning: "first linear transverse basis vector" },
    { symbol: "n_+,n_-", meaning: "phase indices of the two circular eigenstates" },
    { symbol: "k_0,\\lambda_0", meaning: "vacuum wavenumber and wavelength", unit: "m^{-1}, m" },
    { symbol: "l", meaning: "propagation length", unit: "m" },
    { symbol: "\\delta,\\beta", meaning: "relative circular phase and resulting linear rotation", unit: "rad, rad" },
    { symbol: "\\vec E_0,E_0", meaning: "complex field amplitude and amplitude scale", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Linear input along \\(\hat e_1\\) is the equal circular superposition

\\[
\hat e_1=\frac{\hat e_++\hat e_-}{\sqrt2}.
\tag*{[1]}
\\]

After propagation through length \\(l\\),

\\[
\vec E_0(l)=\frac{E_0}{\sqrt2}
\left(e^{in_+k_0l}\hat e_++e^{in_-k_0l}\hat e_-\right)
=\frac{E_0e^{in_+k_0l}}{\sqrt2}
\left(\hat e_++e^{i\delta}\hat e_-\right),
\tag*{[2]}
\\]

where

\\[
\delta=k_0(n_--n_+)l.
\tag*{[3]}
\\]

Equal circular magnitudes produce linear polarisation, and their relative phase equals twice its angle. Therefore

\\[
\beta=\frac{\delta}{2}
=\frac{\pi(n_--n_+)l}{\lambda_0}.
\tag*{[4]}
\\]

The sign in [4] follows the fixed basis, time, propagation, and viewing conventions. Quoting only \\(|\beta|\\) avoids sign information needed for return paths and isolators.

<PhysicsExamples collapsible
  items={[
    {
      title: "Rotation from circular indices",
      question: "At \\(\\lambda_0=600\\,\\mathrm{nm}\\), a medium has \\(n_--n_+=2.0\\times10^{-5}\\) over \\(l=3.00\\,\\mathrm{mm}\\). Find the rotation.",
      answer: "Equation \\([4]\\) gives \\[\\beta=\\frac{\\pi(2.0\\times10^{-5})(3.00\\times10^{-3})}{600\\times10^{-9}}=0.314\\,\\mathrm{rad}.\\] Converting with \\(180^\\circ/\\pi\\) gives \\(18.0^\\circ\\). **Final result:** \\(\\beta=+0.314\\,\\mathrm{rad}=+18.0^\\circ\\) in the declared convention.",
    },
    {
      title: "Why linear input stays linear",
      question: "Why does lossless circular birefringence rotate rather than ellipticise an initially linear field?",
      answer: "Equation \\([2]\\) changes only the phases of the two circular components. Their equal input magnitudes remain equal because no circular dichroism was included. Equal circular magnitudes always reconstruct a linear state; \\([4]\\) determines its new angle. **Final result:** pure circular birefringence preserves linearity and rotates the polarisation axis.",
    },
  ]}
/>
`;
