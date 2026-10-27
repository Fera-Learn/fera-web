export const content = String.raw`## Principle

Absolute zero can be approached but cannot be reached from a positive temperature by any finite physical procedure. As cooling proceeds, available entropy changes and cooling power shrink, while effects neglected by ideal models become decisive.

## Notation

<Notation
  items={[
    { symbol: "T_0,T_j,T_n", meaning: "initial temperature, temperature after stage j, and temperature after n stages", unit: "K, K, K" },
    { symbol: "n,j", meaning: "finite number of cooling stages and stage index", unit: "1, 1" },
    { symbol: "r_j", meaning: "positive temperature-reduction factor in stage j", unit: "1" },
    { symbol: "T_i,T_f", meaning: "initial and final temperatures of a demagnetization stage", unit: "K, K" },
    { symbol: "B,B_i,B_f", meaning: "applied magnetic field and its initial and final values", unit: "T, T, T" },
    { symbol: "B_{\\mathrm{int}},B_{\\mathrm{eff}}", meaning: "internal field scale and effective magnetic field", unit: "T, T" },
  ]}
/>

## The Core Method

The unattainability statement of the third law is

\\[
T_i>0
\quad\Longrightarrow\quad
T_f>0
\quad\text{for every finite realizable cooling procedure}.
\tag*{[1]}
\\]

This does not impose a lowest positive temperature. It says that reaching exactly zero would require an infinite limiting process rather than finitely many operations or finite time.

Represent stage \\(j\\) of an idealized cooling sequence by a finite reduction factor satisfying \\(0<r_j<1\\):

\\[
T_j=r_jT_{j-1}.
\tag*{[2]}
\\]

Repeated substitution shows every algebraic step:

\\[
T_1=r_1T_0,
\qquad
T_2=r_2r_1T_0,
\qquad
T_n=T_0\prod_{j=1}^{n}r_j.
\tag*{[3]}
\\]

For positive \\(T_0\\), finite \\(n\\), and positive factors, the finite product is positive:

\\[
T_n>0.
\tag*{[4]}
\\]

Adiabatic demagnetization illustrates why an apparently finite route to zero is misleading. An ideal noninteracting model predicts

\\[
T_f=T_i\frac{B_f}{B_i}.
\tag*{[5]}
\\]

Blindly setting \\(B_f=0\\) in equation [5] predicts \\(T_f=0\\), but the model neglects interactions and internal fields precisely where they dominate. A simple effective-field model is

\\[
B_{\mathrm{eff}}=\sqrt{B^2+B_{\mathrm{int}}^2}.
\tag*{[6]}
\\]

Replacing the applied fields in the ideal isentropic ratio by effective fields gives

\\[
T_f=T_i
\frac{\sqrt{B_f^2+B_{\mathrm{int}}^2}}
{\sqrt{B_i^2+B_{\mathrm{int}}^2}}.
\tag*{[7]}
\\]

At \\(B_f=0\\), equation [7] remains positive whenever \\(B_{\mathrm{int}}>0\\). The effective-field model is illustrative rather than a universal proof; the general content is equation [1]. Irreversible heat leaks, finite thermal conductance, diminishing response functions, and ordering transitions provide further practical obstructions as temperature falls.

<PhysicsExamples collapsible
  items={[
    {
      title: "Repeated finite cooling stages",
      question: "A sequence starts at \\(T_0=1.00\\,\\mathrm K\\) and halves the temperature in every idealized stage. Find the temperature after ten stages and decide whether any finite number of such stages reaches zero.",
      answer: "Here every factor in equation \\([3]\\) is \\(r_j=1/2\\). Therefore \\[T_{10}=T_0\\left(\\frac12\\right)^{10}=(1.00\\,\\mathrm K)\\frac{1}{1024}=9.77\\times10^{-4}\\,\\mathrm K.\\] For any finite \\(n\\), equation \\([4]\\) gives \\(T_n=T_0/2^n\\gt 0\\), although the sequence tends to zero as \\(n\\to\\infty\\). **Final result:** after ten stages the temperature is \\(0.977\\,\\mathrm{mK}\\), and no finite number of halvings reaches absolute zero.",
    },
    {
      title: "The zero-field trap",
      question: "Why is setting \\(B_f=0\\) in the ideal demagnetization formula not evidence that absolute zero is attainable?",
      answer: "Equation \\([5]\\) assumes independent moments and that applied field is the only magnetic energy scale. Near zero applied field those assumptions fail. For example, equation \\([7]\\) gives \\(T_f=T_iB_{\\mathrm{int}}/\\sqrt{B_i^2+B_{\\mathrm{int}}^2}\\gt 0\\) at \\(B_f=0\\) when an internal field remains. Other interactions and heat leaks also become important. **Final result:** the zero predicted by the ideal formula is an invalid extrapolation, not a finite route to absolute zero.",
    },
  ]}
/>
`;
