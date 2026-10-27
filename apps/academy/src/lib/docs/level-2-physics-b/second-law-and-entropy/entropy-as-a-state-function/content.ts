export const content = String.raw`## Principle

Entropy is a state function because the reversible integral of heat divided by absolute temperature is independent of the reversible path between two equilibrium states. Heat itself is path-dependent; entropy change is not. For a real process, entropy transfer and entropy generation must both be included.

## Notation

<Notation
  items={[
    { symbol: "A,B", meaning: "initial and final equilibrium states" },
    { symbol: "S,S_A,S_B", meaning: "entropy and its values in states A and B", unit: "J K^{-1}" },
    { symbol: "\\Delta S", meaning: "finite entropy change S_B-S_A", unit: "J K^{-1}" },
    { symbol: "\\delta Q_{\\mathrm{rev}}", meaning: "inexact heat transfer along a reversible comparison path", unit: "J" },
    { symbol: "\\delta Q,Q", meaning: "infinitesimal and finite heat transferred into the system along the actual path", unit: "J, J" },
    { symbol: "T,T_b", meaning: "system temperature on a reversible path and actual boundary temperature", unit: "K, K" },
    { symbol: "S_{\\mathrm{gen}}", meaning: "entropy generated inside the system during the process", unit: "J K^{-1}" },
    { symbol: "C_{\\mathrm{tot}}", meaning: "constant total heat capacity", unit: "J K^{-1}" },
    { symbol: "T_A,T_B", meaning: "initial and final absolute temperatures", unit: "K, K" },
  ]}
/>

## The Core Method

Take two reversible paths, 1 and 2, joining the same equilibrium states \\(A\\) and \\(B\\). Travel from \\(A\\) to \\(B\\) on path 1 and return on path 2. The resulting cycle is reversible, so the Clausius equality is

\\[
\oint_{\mathrm{rev}}\frac{\delta Q_{\mathrm{rev}}}{T}=0.
\tag*{[1]}
\\]

Split the closed integral into its outward and return parts:

\\[
\int_{A}^{B,1}\frac{\delta Q_{\mathrm{rev}}}{T}
+\int_{B}^{A,2}\frac{\delta Q_{\mathrm{rev}}}{T}=0.
\tag*{[2]}
\\]

Reversing the limits of the second integral changes its sign, so

\\[
\int_{A}^{B,1}\frac{\delta Q_{\mathrm{rev}}}{T}
=\int_{A}^{B,2}\frac{\delta Q_{\mathrm{rev}}}{T}.
\tag*{[3]}
\\]

The integral depends only on the endpoint states. This defines entropy change:

\\[
\Delta S=S_B-S_A
=\int_A^B\frac{\delta Q_{\mathrm{rev}}}{T},
\qquad
dS=\frac{\delta Q_{\mathrm{rev}}}{T}.
\tag*{[4]}
\\]

Equation \\([4]\\) uses any convenient reversible comparison path, even when the actual process is irreversible. Along the actual path the local entropy balance is instead

\\[
dS=\frac{\delta Q}{T_b}+dS_{\mathrm{gen}},
\qquad dS_{\mathrm{gen}}\geq0.
\tag*{[5]}
\\]

Thus an entropy increase does not by itself prove irreversibility: entropy can enter reversibly with heat. Irreversibility is diagnosed by positive \\(S_{\mathrm{gen}}\\), not merely by positive \\(\Delta S\\).

<PhysicsExamples collapsible
  items={[
    {
      title: "Choose a reversible comparison path",
      question: "A body with constant total heat capacity \\(C_{\\mathrm{tot}}=120\\,\\mathrm{J\\,K^{-1}}\\) changes from \\(T_A=300\\,\\mathrm{K}\\) to \\(T_B=450\\,\\mathrm{K}\\). Find its entropy change using a reversible heating path.",
      answer: "On the reversible comparison path, \\(\\delta Q_{\\mathrm{rev}}=C_{\\mathrm{tot}}\\,dT\\). Equation \\([4]\\) gives \\[\\Delta S=\\int_{300\\,\\mathrm K}^{450\\,\\mathrm K}\\frac{C_{\\mathrm{tot}}\\,dT}{T}=C_{\\mathrm{tot}}\\ln\\!\\left(\\frac{T_B}{T_A}\\right).\\] Substitution gives \\[\\Delta S=(120\\,\\mathrm{J\\,K^{-1}})\\ln(450/300)=48.7\\,\\mathrm{J\\,K^{-1}}.\\] The logarithm has a dimensionless temperature ratio. **Final result:** \\(\\Delta S=48.7\\,\\mathrm{J\\,K^{-1}}\\), regardless of the actual path between the same endpoint states.",
    },
    {
      title: "Separate entropy transfer from generation",
      question: "During a process a system receives \\(90\\,\\mathrm{J}\\) through a boundary at \\(300\\,\\mathrm{K}\\), while its measured entropy increases by \\(0.40\\,\\mathrm{J\\,K^{-1}}\\). Find the entropy generated.",
      answer: "Integrating equation \\([5]\\) for a constant boundary temperature gives \\[S_{\\mathrm{gen}}=\\Delta S-\\frac{Q}{T_b}=0.40\\,\\mathrm{J\\,K^{-1}}-\\frac{90\\,\\mathrm{J}}{300\\,\\mathrm{K}}=0.10\\,\\mathrm{J\\,K^{-1}}.\\] The nonnegative value is physically admissible and shows that part of the entropy increase was generated internally. **Final result:** \\(S_{\\mathrm{gen}}=0.10\\,\\mathrm{J\\,K^{-1}}\\), so the actual process is irreversible.",
    },
  ]}
/>
`;
