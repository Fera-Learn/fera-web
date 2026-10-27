export const content = String.raw`## Principle

The Fermi-Dirac distribution is the mean occupation of one complete single-particle state for ideal fermions. Pauli exclusion restricts that occupation to zero or one, producing a filled Fermi sea at zero temperature and a thermally broadened edge at finite temperature.

## Notation

<Notation
  items={[
    { symbol: "T,k_{\\mathrm B},\\beta", meaning: "temperature, Boltzmann constant, and inverse thermal energy", unit: "K, J K^{-1}, J^{-1}" },
    { symbol: "\\alpha,\\epsilon_\\alpha,n_\\alpha", meaning: "complete one-particle state label, energy, and occupation number", unit: "1, J, 1" },
    { symbol: "\\mu,\\Xi_\\alpha", meaning: "particle chemical potential and single-state grand partition function", unit: "J, 1" },
    { symbol: "\\overline n_\\alpha,f_{\\mathrm{FD}}", meaning: "mean occupation and Fermi-Dirac function", unit: "1, 1" },
    { symbol: "E_{\\mathrm F},k_{\\mathrm F}", meaning: "zero-temperature Fermi energy and wavevector", unit: "J, m^{-1}" },
    { symbol: "T_{\\mathrm F}", meaning: "Fermi temperature, E_F/k_B", unit: "K" },
    { symbol: "n,m,\\hbar", meaning: "number density, particle mass, and reduced Planck constant", unit: "m^{-3}, kg, J s" },
  ]}
/>

## The Core Method

At zero temperature the Fermi-Dirac occupation is a sharp step. Finite temperature smooths that edge, while both quantum distributions approach the classical tail when occupations are small.

<PhysicsDiagram slug="quantum-statistical-distributions" />

One complete fermion state allows only \\(n_\alpha=0\\) or \\(1\\). Its grand sum is therefore

\\[
\Xi_\alpha
=\sum_{n_\alpha=0}^{1}e^{-\beta(\epsilon_\alpha-\mu)n_\alpha}
=1+e^{-\beta(\epsilon_\alpha-\mu)}.
\tag*{[1]}
\\]

The mean occupation is

\\[
\overline n_\alpha
=\frac{1}{\beta}\frac{\partial\ln\Xi_\alpha}{\partial\mu}
=\frac{1}{e^{\beta(\epsilon_\alpha-\mu)}+1}
\equiv f_{\mathrm{FD}}(\epsilon_\alpha).
\tag*{[2]}
\\]

At zero temperature, the limiting distribution is a step:

\\[
f_{\mathrm{FD}}(\epsilon)=
\begin{cases}
1,&\epsilon<E_{\mathrm F},\\\\
0,&\epsilon>E_{\mathrm F},
\end{cases}
\qquad
\mu(0)=E_{\mathrm F}.
\tag*{[3]}
\\]

For a three-dimensional noninteracting spin-one-half gas, counting both spin states inside a sphere of occupied wavevectors gives

\\[
n=\frac{k_{\mathrm F}^3}{3\pi^2},
\qquad
k_{\mathrm F}=(3\pi^2n)^{1/3},
\qquad
E_{\mathrm F}=\frac{\hbar^2k_{\mathrm F}^2}{2m}.
\tag*{[4]}
\\]

At finite temperature, equation [2] gives

\\[
f_{\mathrm{FD}}(\mu)=\frac12,
\tag*{[5]}
\\]

and the edge is broadened over an energy scale of order \\(k_{\mathrm B}T\\). The half-occupation energy is the finite-temperature chemical potential \\(\mu(T)\\), not generally the zero-temperature Fermi energy \\(E_{\mathrm F}\\). The number constraint determines \\(\mu(T)\\).

<PhysicsExamples collapsible
  items={[
    {
      title: "Evaluate occupations around the chemical potential",
      question: "At a given temperature, find \\(f_{\\mathrm{FD}}\\) for states with energies \\(\\mu-k_{\\mathrm B}T\\), \\(\\mu\\), and \\(\\mu+k_{\\mathrm B}T\\).",
      answer: "Use equation \\([2]\\). For \\(\\epsilon-\\mu=-k_{\\mathrm B}T\\), the exponent is \\(-1\\), so \\(f=1/(e^{-1}+1)=0.731\\). Equation \\([5]\\) gives \\(f=0.500\\) at \\(\\epsilon=\\mu\\). For exponent \\(+1\\), \\(f=1/(e+1)=0.269\\). The first and third values add to one, as expected from symmetry about \\(\\mu\\). **Final result:** the occupations are \\(0.731\\), \\(0.500\\), and \\(0.269\\).",
    },
    {
      title: "Interpret Fermi energy precisely",
      question: "At finite temperature, is the energy where the occupation equals one half always \\(E_{\\mathrm F}\\)?",
      answer: "Equation \\([5]\\) shows that half occupation occurs at \\(\\epsilon=\\mu(T)\\). Equation \\([3]\\) identifies \\(\\mu(0)=E_{\\mathrm F}\\), but the chemical potential can shift when temperature rises while particle number remains fixed. The two energies are approximately equal only in a strongly degenerate gas with \\(T\\ll T_{\\mathrm F}\\). **Final result:** no; half occupation occurs at \\(\\mu(T)\\), equalling \\(E_{\\mathrm F}\\) only at zero temperature in this model.",
    },
  ]}
/>
`;
