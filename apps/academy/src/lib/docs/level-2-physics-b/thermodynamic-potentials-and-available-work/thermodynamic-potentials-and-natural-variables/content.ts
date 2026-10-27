export const content = String.raw`## Principle

Thermodynamic potentials are Legendre transforms of internal energy. Each transform replaces an inconvenient natural variable by its conjugate, so the differential of the resulting state function identifies the variables that can be controlled directly.

## Notation

<Notation
  items={[
    { symbol: "U,H,F,G", meaning: "internal energy, enthalpy, Helmholtz free energy, and Gibbs free energy", unit: "J" },
    { symbol: "S,T,p,V", meaning: "entropy, absolute temperature, pressure, and total volume", unit: "J K^{-1}, K, Pa, m^{3}" },
    { symbol: "N_i,\\mu_i,i,j", meaning: "particle number, particle chemical potential, selected species label, and other species label", unit: "1, J, 1, 1" },
    { symbol: "F_0,a,V_0", meaning: "reference Helmholtz energy, constant in the example model, and reference volume", unit: "J, J K^{-1}, m^{3}" },
    { symbol: "d", meaning: "exact differential of a state function" },
  ]}
/>

## The Core Method

For a simple compressible system of variable composition, internal energy has natural variables \\(S,V,\{N_i\}\\):

\\[
dU=T\,dS-p\,dV+\sum_i\mu_i\,dN_i.
\tag*{[1]}
\\]

A Legendre transform subtracts a conjugate product to replace an extensive natural variable by its intensive partner. The three transformed potentials are

\\[
H=U+pV,\qquad F=U-TS,\qquad G=U+pV-TS.
\tag*{[2]}
\\]

Apply the product rule and substitute equation [1]. For enthalpy,

\\[
\begin{aligned}
dH&=dU+p\,dV+V\,dp\\
&=T\,dS+V\,dp+\sum_i\mu_i\,dN_i,
\end{aligned}
\qquad H=H(S,p,\{N_i\}).
\tag*{[3]}
\\]

For Helmholtz free energy,

\\[
\begin{aligned}
dF&=dU-T\,dS-S\,dT\\
&=-S\,dT-p\,dV+\sum_i\mu_i\,dN_i,
\end{aligned}
\qquad F=F(T,V,\{N_i\}).
\tag*{[4]}
\\]

For Gibbs free energy,

\\[
\begin{aligned}
dG&=dU+p\,dV+V\,dp-T\,dS-S\,dT\\
&=-S\,dT+V\,dp+\sum_i\mu_i\,dN_i,
\end{aligned}
\qquad G=G(T,p,\{N_i\}).
\tag*{[5]}
\\]

Coefficient matching gives measurable derivatives. For example,

\\[
T=\left(\frac{\partial U}{\partial S}\right)_{V,N_i},\quad
p=-\left(\frac{\partial F}{\partial V}\right)_{T,N_i},\quad
S=-\left(\frac{\partial G}{\partial T}\right)_{p,N_i},\quad
\mu_i=\left(\frac{\partial G}{\partial N_i}\right)_{T,p,N_{j\ne i}}.
\tag*{[6]}
\\]

The held-fixed subscripts are essential: a derivative without its constraints does not identify a thermodynamic property uniquely.

<PhysicsExamples collapsible
  items={[
    {
      title: "Recover pressure and entropy from Helmholtz energy",
      question: "For a fixed-composition system, \\(F(T,V)=F_0-aT\\ln(V/V_0)\\), where \\(a\\) is constant, find \\(p\\) and \\(S\\).",
      answer: "Use the coefficients in equation \\([4]\\). At fixed \\(T\\), \\[p=-\\left(\\frac{\\partial F}{\\partial V}\\right)_T=-\\left(-\\frac{aT}{V}\\right)=\\frac{aT}{V}.\\] At fixed \\(V\\), \\[S=-\\left(\\frac{\\partial F}{\\partial T}\\right)_V=-\\left[-a\\ln\\left(\\frac{V}{V_0}\\right)\\right]=a\\ln\\left(\\frac{V}{V_0}\\right).\\] Differentiating the supplied state function therefore returns both conjugate variables. **Final result:** \\(p=aT/V\\) and \\(S=a\\ln(V/V_0)\\).",
    },
    {
      title: "Choose the potential for controlled variables",
      question: "A closed system is held at controlled temperature and pressure. Which potential has those natural variables?",
      answer: "Equation \\([5]\\) contains \\(dT\\) and \\(dp\\), so \\(G=G(T,p,N_i)\\). Internal energy instead uses \\(S,V,N_i\\), enthalpy uses \\(S,p,N_i\\), and Helmholtz energy uses \\(T,V,N_i\\). **Final result:** use Gibbs free energy \\(G\\) when \\(T\\), \\(p\\), and composition are the controlled variables.",
    },
  ]}
/>
`;
