export const content = String.raw`## Principle

The Bose-Einstein distribution is the mean occupation of one quantum state in an ideal bosonic grand-canonical ensemble, not the probability of a whole-system microstate. Bose-Einstein condensation occurs only when the excited states have a finite capacity at fixed temperature and particle number. The homogeneous-gas formulas below assume one internal species of noninteracting massive bosons.

## Notation

<Notation
  items={[
    { symbol: "T,k_{\\mathrm B},\\beta", meaning: "temperature, Boltzmann constant, and inverse thermal energy", unit: "K, J K^{-1}, J^{-1}" },
    { symbol: "\\alpha,\\epsilon_\\alpha,n_\\alpha", meaning: "single-particle state label, energy, and occupation number", unit: "1, J, 1" },
    { symbol: "\\mu,z", meaning: "particle chemical potential and fugacity exp(beta mu)", unit: "J, 1" },
    { symbol: "\\Xi_\\alpha,\\overline n_\\alpha", meaning: "single-state grand partition function and mean occupation", unit: "1, 1" },
    { symbol: "\\epsilon_0,N,N_0,N_{\\mathrm{ex}}", meaning: "ground-state energy and total, ground, and excited particle numbers", unit: "J, 1, 1, 1" },
    { symbol: "V,m,\\lambda_T", meaning: "volume, particle mass, and thermal de Broglie wavelength", unit: "m^{3}, kg, m" },
    { symbol: "h,\\hbar", meaning: "Planck and reduced Planck constants", unit: "J s, J s" },
    { symbol: "T_c,\\zeta(3/2)", meaning: "critical temperature and Riemann zeta value 2.612", unit: "K, 1" },
  ]}
/>

## The Core Method

At the condensation temperature, macroscopic ground-state occupation changes the temperature dependence of internal energy and produces a characteristic change in heat capacity.

<PhysicsDiagram slug="bose-condensation-curves" />

In an ideal grand-canonical boson gas, one state \\(\alpha\\) can contain \\(n_\alpha=0,1,2,\ldots\\). Its geometric grand sum is

\\[
\Xi_\alpha
=\sum_{n_\alpha=0}^{\infty}e^{-\beta(\epsilon_\alpha-\mu)n_\alpha}
=\frac{1}{1-e^{-\beta(\epsilon_\alpha-\mu)}},
\qquad \mu<\epsilon_0.
\tag*{[1]}
\\]

Differentiate the logarithm to obtain the mean occupation:

\\[
\overline n_\alpha
=\frac{1}{\beta}\frac{\partial\ln\Xi_\alpha}{\partial\mu}
=\frac{1}{e^{\beta(\epsilon_\alpha-\mu)}-1}.
\tag*{[2]}
\\]

For conserved particles, \\(\mu\\) is fixed by the number constraint

\\[
N=\sum_\alpha\overline n_\alpha=N_0+N_{\mathrm{ex}}.
\tag*{[3]}
\\]

For a homogeneous three-dimensional ideal gas of massive bosons in the thermodynamic limit, the largest excited-state population occurs as \\(\mu\to\epsilon_0\\). Taking \\(\epsilon_0=0\\),

\\[
N_{\mathrm{ex,max}}=\frac{V}{\lambda_T^3}\zeta\left(\frac32\right),
\qquad
\lambda_T=\frac{h}{\sqrt{2\pi m k_{\mathrm B}T}}.
\tag*{[4]}
\\]

When \\(N>N_{\mathrm{ex,max}}\\), the excess occupies the ground state. Solving \\(N=N_{\mathrm{ex,max}}(T_c)\\) gives

\\[
T_c=\frac{2\pi\hbar^2}{m k_{\mathrm B}}
\left[\frac{N}{V\zeta(3/2)}\right]^{2/3},
\qquad
\frac{N_0}{N}=1-\left(\frac{T}{T_c}\right)^{3/2}\quad(T<T_c).
\tag*{[5]}
\\]

These condensation formulas are not universal for every bosonic system; dimensionality, trapping, interactions, and dispersion matter. Set \\(\mu=0\\) only for quasiparticles whose number is not conserved, such as equilibrium photons or phonons. Conserved massive bosons generally have nonzero \\(\mu\\), approaching the ground energy at condensation.

<PhysicsExamples collapsible
  items={[
    {
      title: "Find a condensate fraction",
      question: "An ideal homogeneous three-dimensional Bose gas is at \\(T=0.50T_c\\). Find the condensate fraction under the assumptions of equation \\([5]\\).",
      answer: "Apply the second part of equation \\([5]\\): \\[\\frac{N_0}{N}=1-(0.50)^{3/2}=1-0.3536=0.6464.\\] The remaining fraction, \\(0.3536\\), is in excited states. This result relies on the thermodynamic-limit ideal-gas density of states, not solely on bosonic exchange symmetry. **Final result:** the condensate fraction is \\(N_0/N=0.646\\), or \\(64.6\\%\\).",
    },
    {
      title: "Use chemical potential correctly",
      question: "Should \\(\\mu\\) be set to zero for a trapped gas of atoms whose total atom number is fixed?",
      answer: "No. Fixed atom number requires equation \\([3]\\) to determine \\(\\mu\\). The value approaches the trap ground-state energy near condensation but is not generally zero unless that energy is chosen as zero and the limiting condition is reached. By contrast, equilibrium photons can be created and absorbed, so their unconstrained number gives \\(\\mu=0\\). **Final result:** retain and solve for \\(\\mu\\) for the number-conserving atomic gas.",
    },
  ]}
/>
`;
