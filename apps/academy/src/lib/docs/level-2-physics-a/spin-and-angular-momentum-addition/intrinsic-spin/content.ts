export const content = String.raw`## Principle

An electron sent through a suitable magnetic apparatus produces one of only two angular-momentum projections.

Spin is intrinsic angular momentum: it belongs to a particle independently of the particle's motion through space. An electron has immutable spin one-half, so measurement of any chosen spin component has only two possible outcomes even though the spin magnitude is nonzero.

## Notation

<Notation
  items={[
    { symbol: "\\hat{\\vec S},\\hat S_x,\\hat S_y,\\hat S_z", meaning: "spin operator and its Cartesian components", unit: "J s" },
    { symbol: "\\hat S^2", meaning: "squared spin-angular-momentum operator", unit: "J^{2} s^{2}" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "s,m_s", meaning: "intrinsic-spin and spin-projection quantum numbers" },
    { symbol: "|+\\rangle,|-\\rangle", meaning: "electron spin-up and spin-down eigenstates along the chosen z-axis" },
    { symbol: "a,b", meaning: "complex probability amplitudes in the z-spin basis" },
    { symbol: "|\\chi\\rangle", meaning: "normalised electron spin state" },
    { symbol: "P", meaning: "probability of a stated measurement outcome" },
    { symbol: "i", meaning: "imaginary unit" },
  ]}
/>

## The Core Method

Spin obeys the same angular-momentum algebra as orbital angular momentum.

\\[
[\hat S_x,\hat S_y]=i\hbar\hat S_z,\qquad [\hat S_y,\hat S_z]=i\hbar\hat S_x,\qquad [\hat S_z,\hat S_x]=i\hbar\hat S_y\tag*{[1]}
\\]

The simultaneous eigenvalue equations for total spin and its z-component are

\\[
\hat S^2|s,m_s\rangle=s(s+1)\hbar^2|s,m_s\rangle,\qquad \hat S_z|s,m_s\rangle=m_s\hbar|s,m_s\rangle\tag*{[2]}
\\]

For an electron, the intrinsic quantum number is always \\(s=1/2\\). Unlike an orbital quantum number, this value does not change when the electron occupies a different spatial state.

\\[
s=\frac12,\qquad m_s=-\frac12,+\frac12\tag*{[3]}
\\]

Substitute these values into equation [2]. The total spin magnitude and the two possible z-components are

\\[
|\vec S|=\sqrt{s(s+1)}\hbar=\frac{\sqrt3}{2}\hbar,\qquad S_z=m_s\hbar=\pm\frac{\hbar}{2}\tag*{[4]}
\\]

The magnitude is not \\(\hbar/2\\): that is the largest component projection. Confusing the magnitude with a projection would violate the noncommuting component algebra.

Use \\(|+\rangle=|1/2,1/2\rangle\\) and \\(|-\rangle=|1/2,-1/2\rangle\\) as an orthonormal basis. Any pure electron spin state can be expanded as

\\[
|\chi\rangle=a|+\rangle+b|-\rangle,\qquad \langle\chi|\chi\rangle=|a|^2+|b|^2=1\tag*{[5]}
\\]

A z-component measurement returns the eigenvalues from equation [4]. The Born probabilities are the squared moduli of the basis amplitudes.

\\[
P\left(S_z=+\frac{\hbar}{2}\right)=|a|^2,\qquad P\left(S_z=-\frac{\hbar}{2}\right)=|b|^2\tag*{[6]}
\\]

Weighting the two outcomes by their probabilities gives the expectation value.

\\[
\langle S_z\rangle=\frac{\hbar}{2}|a|^2-\frac{\hbar}{2}|b|^2=\frac{\hbar}{2}\left(|a|^2-|b|^2\right)\tag*{[7]}
\\]

The two-component state describes an internal degree of freedom, not a wavefunction of spatial angles. Calling spin intrinsic avoids the misleading classical picture of a finite electron literally rotating about an axis.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Probabilities for a superposed spin",
      question: "An electron is in the normalised state \\(|\\chi\\rangle=(1/2)|+\\rangle+(\\sqrt3/2)|-\\rangle\\). Find the possible \\(S_z\\) outcomes, their probabilities, and \\(\\langle S_z\\rangle\\).",
      answer: "First check normalisation: \\[|a|^2+|b|^2=\\frac14+\\frac34=1.\\] Equation [6] gives probability \\(1/4\\) for \\(+\\hbar/2\\) and probability \\(3/4\\) for \\(-\\hbar/2\\). Then equation [7] gives \\[\\langle S_z\\rangle=\\frac{\\hbar}{2}\\left(\\frac14-\\frac34\\right)=-\\frac{\\hbar}{4}.\\] **Final result:** the outcomes remain \\(\\pm\\hbar/2\\), with probabilities \\(1/4\\) and \\(3/4\\), and their expectation value is \\(-\\hbar/4\\). The expectation value is not an additional possible single-measurement outcome.",
    },
    {
      title: "Changing the orbital without changing spin",
      question: "An electron moves from one atomic orbital to another. What values can its intrinsic quantum number and a subsequent z-spin measurement take?",
      answer: "The electron's intrinsic property remains \\(s=1/2\\) regardless of the occupied spatial orbital. Equation [3] therefore still permits only \\(m_s=+1/2\\) and \\(m_s=-1/2\\). **Final result:** the electron remains a spin-one-half particle, and the z-spin outcomes remain \\(S_z=+\\hbar/2\\) or \\(S_z=-\\hbar/2\\). An orbital transition can change orbital angular momentum, but it does not turn the electron into a particle with a different intrinsic spin.",
    },
  ]}
/>
`;
