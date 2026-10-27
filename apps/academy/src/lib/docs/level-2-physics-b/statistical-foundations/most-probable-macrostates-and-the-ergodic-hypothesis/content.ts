export const content = String.raw`## Principle

In a microcanonical model, every accessible microstate in a narrow fixed-energy shell is assigned equal probability. A macrostate with larger multiplicity is then more probable. This counting statement does not prove that real dynamics visits every accessible microstate; that additional dynamical claim is the carefully scoped ergodic hypothesis.

## Notation

<Notation
  items={[
    { symbol: "N", meaning: "number of distinguishable two-state sites", unit: "1" },
    { symbol: "r", meaning: "number of sites in the first state", unit: "1" },
    { symbol: "\\Omega(r)", meaning: "multiplicity of macrostate r", unit: "1" },
    { symbol: "P(r)", meaning: "probability of macrostate r", unit: "1" },
    { symbol: "\\Omega_{\\mathrm{tot}}", meaning: "total number of accessible microstates", unit: "1" },
    { symbol: "A,\\langle A\\rangle_t,\\langle A\\rangle_{\\mathrm{ens}}", meaning: "observable, long-time average, and ensemble average" },
    { symbol: "t,\\tau", meaning: "time and averaging duration", unit: "s, s" },
  ]}
/>

## The Core Method

For labelled two-state sites with no energetic preference, the macrostate multiplicity is

\\[
\Omega(r)=\frac{N!}{r!(N-r)!}.
\tag*{[1]}
\\]

Equal a priori probability applies only to accessible microstates of the isolated equilibrium model. Under that assumption,

\\[
P(r)=\frac{\Omega(r)}{\Omega_{\mathrm{tot}}},
\qquad
\Omega_{\mathrm{tot}}=\sum_{r=0}^{N}\Omega(r)=2^N.
\tag*{[2]}
\\]

Locate the maximum without approximating factorials by taking a ratio:

\\[
\frac{\Omega(r+1)}{\Omega(r)}
=\frac{N-r}{r+1}.
\tag*{[3]}
\\]

The multiplicity rises while \\(N-r>r+1\\) and falls after the ratio drops below one. The peak is at \\(r=N/2\\) for even \\(N\\), with two adjacent equal peaks for odd \\(N\\). Relative fluctuations shrink as \\(N\\) grows, so the peak becomes macroscopically sharp.

The ergodic hypothesis concerns dynamics rather than counting. In its useful statistical-mechanics scope, it asserts that the long-time average of a relevant observable equals its microcanonical ensemble average when the trajectory explores the accessible energy surface adequately:

\\[
\langle A\rangle_t
=\lim_{\tau\to\infty}\frac{1}{\tau}\int_0^{\tau}A(t)\,dt
=\langle A\rangle_{\mathrm{ens}}.
\tag*{[4]}
\\]

Integrable systems, extra conserved quantities, disconnected regions, glasses, and observation times shorter than relaxation times can invalidate this replacement. Multiplicity arguments establish the ensemble's most probable macrostate, not ergodicity itself.

<PhysicsExamples collapsible
  items={[
    {
      title: "Find the peak for ten sites",
      question: "Ten labelled sites can be in either of two equal-energy states. Find the most probable occupation and its probability.",
      answer: "Equation \\([3]\\) changes from greater than one to less than one at the central occupation, so \\(r=5\\). Equation \\([1]\\) gives \\[\\Omega(5)=\\frac{10!}{5!5!}=252.\\] Equation \\([2]\\) gives \\(\\Omega_{\\mathrm{tot}}=2^{10}=1024\\), hence \\[P(5)=\\frac{252}{1024}=0.2461.\\] The probability is below one because neighbouring macrostates remain possible. **Final result:** the most probable macrostate is \\(r=5\\), with probability \\(0.246\\).",
    },
    {
      title: "Recognise a failure of ergodic sampling",
      question: "A system has two equal-energy regions of phase space, but a conserved quantity prevents a trajectory starting in one region from entering the other. May its time average be replaced by an average over both regions?",
      answer: "No. Equation \\([4]\\) requires adequate exploration of the accessible set relevant to the dynamics. If the conserved quantity separates the two regions, the trajectory samples only one component. Equal counting across both components does not remove that dynamical restriction. The ensemble must include the extra constraint or be restricted to the connected component. **Final result:** averaging over both regions is not justified for that trajectory, so the stated ergodic replacement fails.",
    },
  ]}
/>
`;
