export const content = String.raw`## Principle

Doing two actions in opposite orders can give different results, just as rotating an object about two different axes does.

A commutator measures the effect of reversing operator order. For Hermitian observables, a nonzero commutator creates a state-dependent lower bound on the product of their measurement uncertainties.

## Notation

<Notation
  items={[
    { symbol: "\\hat A,\\hat B", meaning: "Hermitian operators for two observables", unit: "varies" },
    { symbol: "[\\hat A,\\hat B]", meaning: "commutator A B-B A", unit: "product of the units of A and B" },
    { symbol: "|\\psi\\rangle,\\psi(x)", meaning: "normalised quantum state and its position representation", unit: "1, m^{-1/2}" },
    { symbol: "\\langle A\\rangle,\\langle B\\rangle", meaning: "expectation values of A and B", unit: "same as A, same as B" },
    { symbol: "\\delta\\hat A,\\delta\\hat B", meaning: "operators centred by subtracting their expectation values", unit: "same as A, same as B" },
    { symbol: "\\Delta A,\\Delta B", meaning: "standard uncertainties of A and B", unit: "same as A, same as B" },
    { symbol: "\\gamma,\\lambda", meaning: "real commutator expectation parameter and arbitrary real number", unit: "product of units of A and B, varies" },
    { symbol: "x,\\hat p", meaning: "position coordinate and momentum operator", unit: "m, kg m s^{-1}" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "\\alpha", meaning: "positive Gaussian width parameter", unit: "m^{-2}" },
    { symbol: "i", meaning: "imaginary unit, satisfying i^2=-1" },
  ]}
/>

## The Core Method

Use the convention

\\[
[\hat A,\hat B]=\hat A\hat B-\hat B\hat A,
\qquad
[\hat B,\hat A]=-[\hat A,\hat B].
\tag*{[1]}
\\]

Commutator signs are safest to check by acting on a test wavefunction. With \\(\hat p=-i\hbar\,d/dx\\),

\\[
\begin{aligned}
[x,\hat p]\psi
&=x\left(-i\hbar\frac{d\psi}{dx}\right)
-\left[-i\hbar\frac{d}{dx}(x\psi)\right] \\
&=-i\hbar x\frac{d\psi}{dx}
+i\hbar\left(\psi+x\frac{d\psi}{dx}\right)
=i\hbar\psi.
\end{aligned}
\tag*{[2]}
\\]

Thus \\([x,\hat p]=i\hbar\\) and, by reversing the order, \\([\hat p,x]=-i\hbar\\).

For the general uncertainty relation, centre each operator around its expectation value:

\\[
\delta\hat A=\hat A-\langle A\rangle,
\qquad
\delta\hat B=\hat B-\langle B\rangle,
\qquad
(\Delta A)^2=\langle(\delta\hat A)^2\rangle,
\qquad
(\Delta B)^2=\langle(\delta\hat B)^2\rangle.
\tag*{[3]}
\\]

The constants commute with every operator, so \\([\delta\hat A,\delta\hat B]=[\hat A,\hat B]\\). Because both operators are Hermitian, the expectation value of their commutator is purely imaginary. Define the real quantity

\\[
\gamma=\frac{1}{i}\langle[\hat A,\hat B]\rangle.
\tag*{[4]}
\\]

The norm of every state is non-negative. Apply that fact to \\((\delta\hat A+i\lambda\delta\hat B)|\psi\rangle\\), where \\(\lambda\\) is real, and expand every term:

\\[
\begin{aligned}
0&\leq\left\|(\delta\hat A+i\lambda\delta\hat B)|\psi\rangle\right\|^2 \\
&=(\Delta A)^2+\lambda^2(\Delta B)^2
+i\lambda\langle[\delta\hat A,\delta\hat B]\rangle \\
&=(\Delta A)^2-\lambda\gamma+\lambda^2(\Delta B)^2.
\end{aligned}
\tag*{[5]}
\\]

This quadratic must be non-negative for every real \\(\lambda\\). Its discriminant can therefore be no greater than zero:

\\[
\gamma^2-4(\Delta A)^2(\Delta B)^2\leq0
\quad\Longrightarrow\quad
\Delta A\,\Delta B\geq\frac{|\gamma|}{2}
=\frac12\left|\langle[\hat A,\hat B]\rangle\right|.
\tag*{[6]}
\\]

Equation [6] is the Robertson uncertainty relation. Applying equation [2] gives

\\[
\Delta x\,\Delta p
\geq\frac12|\langle i\hbar\rangle|
=\frac{\hbar}{2}.
\tag*{[7]}
\\]

Noncommutation does not mean that every state has the same nonzero lower bound: the right-hand side of [6] can depend on the state. It means the observables do not generally possess a complete common eigenbasis, so both cannot generally be sharp together.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Gaussian minimum uncertainty",
      question: "Show that \\(\\psi(x)=(\\alpha/\\pi)^{1/4}e^{-\\alpha x^2/2}\\) saturates the position-momentum uncertainty relation.",
      answer: "The density is even, so \\(\\langle x\\rangle=0\\), and direct action of \\(\\hat p\\) gives an odd integrand, so \\(\\langle p\\rangle=0\\). The Gaussian moments are \\[\\langle x^2\\rangle=\\frac{1}{2\\alpha},\\qquad \\langle p^2\\rangle=\\frac{\\alpha\\hbar^2}{2}.\\] Use the variance definition in [3]: \\[\\Delta x=\\sqrt{\\langle x^2\\rangle-\\langle x\\rangle^2}=\\frac{1}{\\sqrt{2\\alpha}},\\] \\[\\Delta p=\\sqrt{\\langle p^2\\rangle-\\langle p\\rangle^2}=\\hbar\\sqrt{\\frac{\\alpha}{2}}.\\] Their product is \\[\\Delta x\\,\\Delta p=\\frac{1}{\\sqrt{2\\alpha}}\\hbar\\sqrt{\\frac{\\alpha}{2}}=\\frac{\\hbar}{2}.\\] **Final result:** \\(\\boxed{\\Delta x\\,\\Delta p=\\hbar/2}\\), so this real Gaussian is a minimum-uncertainty state.",
    },
    {
      title: "A commuting pair",
      question: "What lower bound does Robertson's relation give for position \\(x\\) and squared position \\(x^2\\)?",
      answer: "Both operators multiply a wavefunction, so their order is irrelevant: \\[[x,x^2]\\psi=x^3\\psi-x^3\\psi=0.\\] Equation [6] therefore gives \\[\\Delta x\\,\\Delta(x^2)\\geq\\frac12|\\langle0\\rangle|=0.\\] **Final result:** the commutator imposes no positive lower bound for this pair. This is consistent with position eigenstates also being eigenstates of any function of position.",
    },
  ]}
/>
`;
