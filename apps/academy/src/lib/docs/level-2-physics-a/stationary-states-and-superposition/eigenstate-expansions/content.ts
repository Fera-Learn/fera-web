export const content = String.raw`## Principle

Any direction in ordinary space can be rebuilt from coordinate axes, and a quantum state can be rebuilt from a complete set of basis states.

A complete orthonormal set of eigenstates is a coordinate system for the state space. Projection determines every expansion coefficient, and the coefficient moduli quantify both measurement probabilities and truncation accuracy.

## Notation

<Notation
  items={[
    { symbol: "x", meaning: "position", unit: "m" },
    { symbol: "\\mathcal D", meaning: "spatial domain" },
    { symbol: "f(x)", meaning: "normalized state to be expanded", unit: "m^{-1/2}" },
    { symbol: "\\psi_n(x)", meaning: "nth function in a complete orthonormal eigenbasis", unit: "m^{-1/2}" },
    { symbol: "c_n", meaning: "projection coefficient onto \\psi_n", unit: "1" },
    { symbol: "f_N(x)", meaning: "expansion truncated after N terms", unit: "m^{-1/2}" },
    { symbol: "\\epsilon_N", meaning: "mean-square truncation error", unit: "1" },
    { symbol: "E_n", meaning: "energy eigenvalue associated with \\psi_n", unit: "J" },
    { symbol: "L", meaning: "infinite-well width", unit: "m" },
    { symbol: "t,\\hbar", meaning: "time and reduced Planck constant", unit: "s, J s" },
    { symbol: "\\delta_{mn}", meaning: "Kronecker delta", unit: "1" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

For an orthonormal eigenbasis on \\(\mathcal D\\),

\\[
\int_{\mathcal D}\psi_m^*(x)\psi_n(x)\,dx=\delta_{mn}.\tag*{[1]}
\\]

Completeness permits the expansion

\\[
f(x)=\sum_{n=1}^{\infty}c_n\psi_n(x).\tag*{[2]}
\\]

Multiply by \\(\psi_m^*(x)\\), integrate over the full domain, and use equation [1].

\\[
\begin{aligned}
\int_{\mathcal D}\psi_m^*f\,dx
&=\sum_{n=1}^{\infty}c_n\int_{\mathcal D}\psi_m^*\psi_n\,dx\\
&=\sum_{n=1}^{\infty}c_n\delta_{mn}\\
&=c_m.
\end{aligned}\tag*{[3]}
\\]

Thus the expansion coefficients are

\\[
c_n=\int_{\mathcal D}\psi_n^*(x)f(x)\,dx.\tag*{[4]}
\\]

For normalized \\(f\\), substitute equation [2] into its norm. Orthonormality removes all cross terms and gives Parseval's relation.

\\[
\begin{aligned}
1
&=\int_{\mathcal D}|f(x)|^2dx\\
&=\sum_{m,n}c_m^*c_n\int_{\mathcal D}\psi_m^*\psi_n\,dx\\
&=\sum_{n=1}^{\infty}|c_n|^2.
\end{aligned}\tag*{[5]}
\\]

If the basis consists of energy eigenstates, \\(|c_n|^2\\) is the probability of measuring \\(E_n\\). The same coefficients determine the later state under a time-independent Hamiltonian.

\\[
f(x,t)=\sum_{n=1}^{\infty}c_n\psi_n(x)e^{-iE_nt/\hbar}.\tag*{[6]}
\\]

For practical calculation, truncate the expansion after \\(N\\) terms.

\\[
f_N(x)=\sum_{n=1}^{N}c_n\psi_n(x).\tag*{[7]}
\\]

Because \\(f-f_N\\) contains only the omitted orthogonal components, its mean-square error is

\\[
\epsilon_N
=\int_{\mathcal D}|f-f_N|^2dx
=\sum_{n=N+1}^{\infty}|c_n|^2
=1-\sum_{n=1}^{N}|c_n|^2.\tag*{[8]}
\\]

The quantity retained by a truncation is therefore not judged by the visual size of individual terms alone; equation [8] gives its exact integrated error.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Expanding a half-well initial state",
      question: "In an infinite well on \\(0\\lt x\\lt L\\), use \\(\\psi_n(x)=\\sqrt{2/L}\\sin(n\\pi x/L)\\). At \\(t=0\\), let \\(f(x)=\\sqrt{2/L}\\) for \\(0\\lt x\\lt L/2\\) and \\(f(x)=0\\) for \\(L/2\\lt x\\lt L\\). Find \\(c_n\\).",
      answer: "The supplied function is normalized because \\(\\int_0^{L/2}(2/L)dx=1\\). Apply equation [4]; only the first half of the well contributes: \\[c_n=\\frac{2}{L}\\int_0^{L/2}\\sin\\left(\\frac{n\\pi x}{L}\\right)dx.\\] Integrate and apply both limits: \\[c_n=\\frac{2}{L}\\left[-\\frac{L}{n\\pi}\\cos\\left(\\frac{n\\pi x}{L}\\right)\\right]_0^{L/2}=\\frac{2}{n\\pi}\\left[1-\\cos\\left(\\frac{n\\pi}{2}\\right)\\right].\\] **Final result:** \\(c_n=2[1-\\cos(n\\pi/2)]/(n\\pi)\\). For example, \\(c_1=2/\\pi\\), \\(c_2=2/\\pi\\), \\(c_3=2/(3\\pi)\\), and \\(c_4=0\\).",
    },
    {
      title: "Quantifying a four-term approximation",
      question: "For the half-well state above, what fraction of the norm is captured by terms \\(n=1\\) through \\(n=4\\), and what is the mean-square error?",
      answer: "Use the coefficients already found: \\[\\sum_{n=1}^{4}|c_n|^2=\\frac{4}{\\pi^2}+\\frac{4}{\\pi^2}+\\frac{4}{9\\pi^2}+0=\\frac{76}{9\\pi^2}\\approx0.856.\\] Equation [8] then gives \\[\\epsilon_4=1-\\frac{76}{9\\pi^2}\\approx0.144.\\] **Final result:** the first four basis functions capture about \\(85.6\\%\\) of the norm and leave a mean-square error of about \\(14.4\\%\\). The zero fourth coefficient is a consequence of the projection integral, not evidence that the series has ended.",
    },
  ]}
/>
`;
