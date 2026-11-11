export const content = String.raw`## Principle

A decaying signal may continue for all future time, making its total behaviour awkward to study directly. Multiplying it by an adjustable exponential weight turns the whole time history into one improper integral. The resulting function of the weight parameter is the **Laplace transform**.

The integral is useful only when it converges. Faster exponential damping corresponds to larger values of the transform variable, so a transform often exists only to the right of a threshold.

Objective: calculate a unilateral Laplace transform and state the values of the transform variable for which it exists.

Prerequisite: familiarity with improper integrals, exponentials, and hyperbolic functions.

## Notation

<Notation
  items={[
    { symbol: "t", meaning: "time variable on the domain \\(t\\ge 0\\)", unit: "s" },
    { symbol: "s", meaning: "real transform variable controlling the exponential weight", unit: "s^{-1}" },
    { symbol: "f(t)", meaning: "original time-domain function" },
    { symbol: "\\bar f(s)", meaning: "Laplace transform of \\(f(t)\\)" },
    { symbol: "k", meaning: "constant exponential rate", unit: "s^{-1}" },
    { symbol: "\\mathcal L", meaning: "unilateral Laplace-transform operator" },
  ]}
/>

## The Core Method

For a function defined for non-negative time, multiply by the weight \(e^{-st}\) and integrate over the complete time interval:

\[
\bar f(s)=\mathcal L\{f(t)\}(s)
=\int_0^\infty f(t)e^{-st}\,dt.
\tag*{[1]}
\]

The variable \(t\) disappears during integration; \(s\) remains. The transform therefore converts one function of time into a new function of the transform variable.

Convergence must be checked from the combined large-\(t\) behaviour of \(f(t)e^{-st}\). For example, if \(|f(t)|\le Me^{at}\) after some time, where \(M>0\) is a constant bound and \(a\) is the exponential growth rate, then the integrand is bounded by \(Me^{-(s-a)t}\). The tail converges when

\[
s>a.
\tag*{[2]}
\]

This is a sufficient exponential-order test, not a substitute for evaluating the actual improper integral when a sharper condition is available.

For \(f(t)=\cosh(kt)\), first expose its two exponential parts:

\[
\cosh(kt)=\frac{e^{kt}+e^{-kt}}{2}.
\tag*{[3]}
\]

Substitution into equation \([1]\) gives

\[
\begin{aligned}
\mathcal L\{\cosh(kt)\}
&=\frac12\int_0^\infty
\left[e^{-(s-k)t}+e^{-(s+k)t}\right]dt\\
&=\frac12\left(\frac1{s-k}+\frac1{s+k}\right)\\
&=\frac{s}{s^2-k^2}.
\end{aligned}
\tag*{[4]}
\]

Both exponential integrals must decay. Thus \(s-k>0\) and \(s+k>0\), which combine to \(s>|k|\). Quoting equation \([4]\) without this condition loses part of the transform's meaning.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Transform of a decaying exponential",
      question: "Find the Laplace transform of \\(f(t)=e^{-2t}\\), where \\(t\\) is measured in seconds, and state its convergence condition.",
      answer: "Combine the signal with the transform weight before integrating: \\[\\mathcal L\\{e^{-2t}\\}=\\int_0^\\infty e^{-(s+2)t}\\,dt.\\tag*{[5]}\\] The upper limit vanishes only when \\(s+2\\gt0\\). Under that condition, \\[\\int_0^\\infty e^{-(s+2)t}\\,dt=\\left[-\\frac{e^{-(s+2)t}}{s+2}\\right]_0^\\infty=\\frac1{s+2}.\\tag*{[6]}\\] **Final result:** \\(\\bar f(s)=1/(s+2)\\) for \\(s\\gt-2\\,\\mathrm{s^{-1}}\\). The condition says the added weight must not turn the original decay into exponential growth.",
    },
    {
      title: "A growing hyperbolic signal",
      question: "Calculate \\(\\mathcal L\\{\\sinh(3t)\\}\\) and identify why its convergence threshold differs from that of a decaying exponential.",
      answer: "Write \\(\\sinh(3t)=(e^{3t}-e^{-3t})/2\\). Then \\[\\mathcal L\\{\\sinh(3t)\\}=\\frac12\\left(\\frac1{s-3}-\\frac1{s+3}\\right)=\\frac3{s^2-9}.\\tag*{[7]}\\] The two improper integrals require \\(s-3\\gt0\\) and \\(s+3\\gt0\\), so the stronger condition is \\(s\\gt3\\). **Final result:** \\(\\mathcal L\\{\\sinh(3t)\\}=3/(s^2-9)\\) for \\(s\\gt3\\,\\mathrm{s^{-1}}\\). Unlike \\(e^{-2t}\\), the function contains a growing \\(e^{3t}\\) part that the transform weight must overcome.",
    },
  ]}
/>
`;
