export const content = String.raw`## Principle

Equilibrium is an extremum only after the allowed variations have been specified. Isolated systems maximise entropy, while systems coupled to reservoirs minimise the thermodynamic potential whose natural variables are fixed by those reservoirs.

## Notation

<Notation
  items={[
    { symbol: "U,H,F,G,S", meaning: "internal energy, enthalpy, Helmholtz energy, Gibbs energy, and entropy", unit: "J, J, J, J, J K^{-1}" },
    { symbol: "T,p,V,N_i", meaning: "absolute temperature, pressure, total volume, and particle number of species i", unit: "K, Pa, m^{3}, 1" },
    { symbol: "\\delta X,\\delta^2X", meaning: "first and second variations of state function X among allowed neighbouring states" },
    { symbol: "i", meaning: "species label", unit: "1" },
  ]}
/>

## The Core Method

For an isolated rigid system of fixed composition, \\(U,V,N_i\\) are fixed and the second law requires

\\[
\delta S=0,\qquad \delta^2S<0
\quad\text{at stable equilibrium with fixed }U,V,N_i.
\tag*{[1]}
\\]

The equivalent energy principle states

\\[
\delta U=0,\qquad \delta^2U>0
\quad\text{at stable equilibrium with fixed }S,V,N_i.
\tag*{[2]}
\\]

Legendre transforms provide the corresponding criteria when different variables are constrained:

\\[
\begin{aligned}
\delta H&=0,\quad \delta^2H>0 &&\text{at fixed }S,p,N_i,\\
\delta F&=0,\quad \delta^2F>0 &&\text{at fixed }T,V,N_i,\\
\delta G&=0,\quad \delta^2G>0 &&\text{at fixed }T,p,N_i.
\end{aligned}
\tag*{[3]}
\\]

Before equilibrium, an unconstrained spontaneous step points toward the extremum:

\\[
dS\ge0\big|_{U,V,N_i},\quad
\tag*{[4]}
\\]

Equality in equation [4] identifies a stationary equilibrium state. Stability requires the second-variation test as well: a maximum of \\(S\\) or a minimum of the relevant energy potential. Using a criterion with the wrong held-fixed variables can predict the wrong direction.

<PhysicsExamples collapsible
  items={[
    {
      title: "Select among constrained candidate states",
      question: "At fixed \\(T,p,N_i\\), three accessible candidate states have Gibbs energies \\(18\\,\\mathrm{kJ}\\), \\(11\\,\\mathrm{kJ}\\), and \\(15\\,\\mathrm{kJ}\\). Which is the stable equilibrium candidate?",
      answer: "The imposed constraints match the Gibbs criterion in equation \\([3]\\). A stable equilibrium minimises \\(G\\) among accessible states, so compare \\(18\\), \\(11\\), and \\(15\\,\\mathrm{kJ}\\). **Final result:** the state with \\(G=11\\,\\mathrm{kJ}\\) is the stable equilibrium candidate.",
    },
    {
      title: "Choose entropy rather than free energy",
      question: "A rigid, thermally isolated vessel contains a closed system. Which equilibrium criterion applies?",
      answer: "Isolation fixes \\(U\\), rigidity fixes \\(V\\), and closure fixes every \\(N_i\\). Equation \\([1]\\) therefore applies: permitted spontaneous changes increase \\(S\\) until its constrained maximum. A fixed-temperature free-energy criterion would incorrectly assume access to a heat reservoir. **Final result:** equilibrium maximises \\(S\\) at fixed \\(U,V,N_i\\).",
    },
  ]}
/>
`;
