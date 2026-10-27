export const content = String.raw`## Principle

The circular basis uses the two opposite constant-magnitude rotations as basis states. Fix \\(+z\\) propagation, \\(e^{i(kz-\omega t)}\\), and an observer looking along \\(-z\\). Then \\(\hat e_+=(\hat e_1+i\hat e_2)/\sqrt2\\) is left-circular and \\(\hat e_-=(\hat e_1-i\hat e_2)/\sqrt2\\) is right-circular.

## Notation

<Notation
  items={[
    { symbol: "\\hat e_1,\\hat e_2", meaning: "real orthonormal linear basis vectors" },
    { symbol: "\\hat e_+,\\hat e_-,\\delta_{pq}", meaning: "left- and right-circular basis vectors and Kronecker delta for basis labels p and q" },
    { symbol: "p,q", meaning: "circular-basis labels" },
    { symbol: "a_1,a_2", meaning: "linear-basis coefficients" },
    { symbol: "c_+,c_-", meaning: "circular-basis coefficients" },
    { symbol: "i", meaning: "imaginary unit satisfying i^2=-1" },
    { symbol: "{}^*", meaning: "complex conjugation" },
    { symbol: "k,\\omega,z,t", meaning: "wavenumber, angular frequency, position, and time", unit: "m^{-1}, rad s^{-1}, m, s" },
  ]}
/>

## The Core Method

Define and normalise the circular basis:

\\[
\hat e_+=\frac{\hat e_1+i\hat e_2}{\sqrt2},
\qquad
\hat e_-=\frac{\hat e_1-i\hat e_2}{\sqrt2},
\qquad
\hat e_p^{\,*}\cdot\hat e_q=\delta_{pq}.
\tag*{[1]}
\\]

Adding and subtracting [1] gives the inverse transform

\\[
\hat e_1=\frac{\hat e_++\hat e_-}{\sqrt2},
\qquad
\hat e_2=\frac{i(\hat e_--\hat e_+)}{\sqrt2}.
\tag*{[2]}
\\]

For \\(a_1\hat e_1+a_2\hat e_2=c_+\hat e_++c_-\hat e_-\\), projection with the conjugate basis and [2] give

\\[
c_+=\frac{a_1-ia_2}{\sqrt2},
\qquad c_-=\frac{a_1+ia_2}{\sqrt2},
\qquad
a_1=\frac{c_++c_-}{\sqrt2},
\qquad a_2=\frac{i(c_+-c_-)}{\sqrt2}.
\tag*{[3]}
\\]

Direct substitution verifies norm preservation: \\(|c_+|^2+|c_-|^2=|a_1|^2+|a_2|^2\\). Using an unconjugated dot product in the projection is a common error because these basis vectors are complex.

<PhysicsExamples collapsible
  items={[
    {
      title: "Transforming a Jones pair",
      question: "Transform \\((a_1,a_2)=(1/\\sqrt2,i/\\sqrt2)\\) into the circular basis.",
      answer: "Use \\([3]\\): \\[c_+=\\frac{1/\\sqrt2-i(i/\\sqrt2)}{\\sqrt2}=1,\\qquad c_-=\\frac{1/\\sqrt2+i(i/\\sqrt2)}{\\sqrt2}=0.\\] The norm remains \\(|c_+|^2+|c_-|^2=1\\). **Final result:** \\((c_+,c_-)=(1,0)\\), a pure left-circular basis state.",
    },
    {
      title: "Checking the inverse transform",
      question: "Convert \\((c_+,c_-)=(1/\\sqrt2,1/\\sqrt2)\\) back to the linear basis.",
      answer: "Equation \\([3]\\) gives \\[a_1=\\frac{1/\\sqrt2+1/\\sqrt2}{\\sqrt2}=1,\\qquad a_2=\\frac{i(1/\\sqrt2-1/\\sqrt2)}{\\sqrt2}=0.\\] **Final result:** \\((a_1,a_2)=(1,0)\\), linear polarisation along \\(\\hat e_1\\).",
    },
  ]}
/>
`;
