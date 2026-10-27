export const content = String.raw`## Principle

Quantum theory predicts experimental probabilities extremely well while leaving room for different accounts of what happens between preparation and observation.

Interpretations address what the successful quantum formalism says about physical reality; interpretations that make the same predictions cannot be separated by those predictions alone. Decoherence explains how environmental entanglement suppresses locally observable interference, but it does not by itself select one unique observed outcome or prove a particular interpretation.

This interpretations and decoherence material is a non-examinable survey. It provides conceptual context rather than additional assessable formalism.

## Notation

<Notation
  items={[
    { symbol: "|0\\rangle,|1\\rangle", meaning: "orthonormal alternatives of a two-state system" },
    { symbol: "c_0,c_1", meaning: "complex probability amplitudes with |c_0|^2+|c_1|^2=1", unit: "1" },
    { symbol: "|\\Psi_{\\mathrm i}\\rangle,|\\Psi_{\\mathrm f}\\rangle", meaning: "initial and final states of the combined system and environment" },
    { symbol: "|E\\rangle,|E_0\\rangle,|E_1\\rangle", meaning: "initial and alternative-correlated environment states" },
    { symbol: "\\gamma,\\gamma^*", meaning: "environment-state overlap \\langle E_0|E_1\\rangle and its complex conjugate \\langle E_1|E_0\\rangle", unit: "1, 1" },
    { symbol: "|+\\rangle,|-\\rangle", meaning: "superposition basis states (|0\\rangle+|1\\rangle)/\\sqrt{2} and (|0\\rangle-|1\\rangle)/\\sqrt{2}" },
    { symbol: "P(+),P(-),\\operatorname{Re}", meaning: "plus/minus outcome probabilities and the real-part operation", unit: "1, 1, 1" },
    { symbol: "\\psi_0(x),\\psi_1(x),P(x)", meaning: "two path amplitudes and detected position probability density", unit: "m^{-1/2}, m^{-1/2}, m^{-1}" },
  ]}
/>

## The Core Method

An isolated two-state superposition initially accompanied by one environment state is

\\[
|\Psi_{\mathrm i}\rangle
=(c_0|0\rangle+c_1|1\rangle)|E\rangle.
\tag*{[1]}
\\]

An interaction that records which alternative occurred can evolve the combined system continuously into an entangled state:

\\[
|\Psi_{\mathrm f}\rangle
=c_0|0\rangle|E_0\rangle+c_1|1\rangle|E_1\rangle.
\tag*{[2]}
\\]

System-only interference terms contain the overlap

\\[
\gamma=\langle E_0|E_1\rangle,
\qquad
\gamma^*=\langle E_1|E_0\rangle,
\qquad
|\gamma|\le1.
\tag*{[3]}
\\]

If the environment states remain identical, \\(\gamma=1\\) and full coherence can remain. If many uncontrolled environmental interactions make them effectively orthogonal, \\(|\gamma|\\) approaches zero and local interference becomes inaccessible. For equal real amplitudes \\(c_0=c_1=1/\sqrt2\\), project [2] onto the superposition basis and take the squared norm:

\\[
\begin{aligned}
P(+)&=\left\|\frac{|E_0\rangle+|E_1\rangle}{2}\right\|^2
=\frac14(2+\gamma+\gamma^*)
=\frac12\left(1+\operatorname{Re}\gamma\right),\\
P(-)&=\left\|\frac{|E_0\rangle-|E_1\rangle}{2}\right\|^2
=\frac14(2-\gamma-\gamma^*)
=\frac12\left(1-\operatorname{Re}\gamma\right).
\end{aligned}
\tag*{[4]}
\\]

The interference contrast therefore decreases with the environment overlap. The combined state [2] remains a superposition under Schrodinger evolution; decoherence alone has not selected either \\(|0\rangle\\) or \\(|1\rangle\\) as the single actual result.

Three broad attitudes illustrate the interpretive issue. An operational or Copenhagen-style account uses the state to predict outcomes and applies collapse on measurement. A hidden-variable account seeks additional underlying facts; Bell-inequality violations rule out local hidden-variable models under the assumptions of Bell's theorem, not every realist model. An agnostic stance declines claims beyond experimentally testable predictions. These labels cover families of views rather than uniquely defined theories.

Macroscopic systems interact with many environmental degrees of freedom, so coherence between macroscopically distinct alternatives is typically suppressed extremely rapidly. This helps explain why interference is hard to observe at large scales, but it does not establish that consciousness causes collapse, that collapse is a literal instantaneous physical process, or that decoherence solves every part of the measurement problem.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Visibility after partial environmental marking",
      question: "An equal two-state superposition becomes entangled as in equation [2], with real overlap \\(\\gamma=0.20\\). Find the probabilities for measurements in the plus/minus basis and compare them with complete decoherence.",
      answer: "Use equation [4]. For \\(\\gamma=0.20\\), \\[P(+)=\\frac12(1+0.20)=0.60,\\qquad P(-)=\\frac12(1-0.20)=0.40.\\] The sum is one. With complete local decoherence, \\(\\gamma=0\\), so both probabilities become \\(0.50\\). The remaining difference between \\(0.60\\) and \\(0.40\\) is evidence of partial coherence. **Final result:** partial marking gives \\(P(+)=0.60\\) and \\(P(-)=0.40\\); zero overlap gives \\(0.50\\) for each outcome.",
    },
    {
      title: "Which-path information at a double slit",
      question: "Two slit amplitudes become correlated with environment states whose overlap is \\(\\gamma\\). How does this affect the screen pattern, and what does \\(\\gamma=0\\) establish?",
      answer: "Adding the two alternatives and retaining their environment overlap gives \\[P(x)=|c_0|^2|\\psi_0(x)|^2+|c_1|^2|\\psi_1(x)|^2+2\\operatorname{Re}\\!\\left[c_0^*c_1\\gamma\\psi_0^*(x)\\psi_1(x)\\right].\\] The final term is the interference contribution. If \\(\\gamma=0\\), it vanishes and only the two separate intensity terms remain. **Final result:** orthogonal which-path records suppress the local interference pattern, but this calculation alone neither assigns a pre-existing path nor explains why one individual detector spot is observed.",
    },
  ]}
/>
`;
