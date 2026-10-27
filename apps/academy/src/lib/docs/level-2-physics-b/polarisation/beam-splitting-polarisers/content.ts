export const content = String.raw`## Principle

A beam-splitting polariser sends two orthogonal polarisation components into different output paths instead of deliberately absorbing one. Reflection and birefringent refraction are common mechanisms; the useful output depends on which path is selected.

## Notation

<Notation
  items={[
    { symbol: "\\hat p,\\hat s", meaning: "parallel-to-plane and perpendicular-to-plane polarisation unit vectors" },
    { symbol: "\\hat p_r,\\hat s_r,\\hat p_t,\\hat s_t", meaning: "reflected and transmitted output polarisation vectors" },
    { symbol: "E_p,E_s", meaning: "incident complex field amplitudes in those directions", unit: "V m^{-1}" },
    { symbol: "r_p,r_s", meaning: "electric-field reflection coefficients" },
    { symbol: "t_p,t_s", meaning: "electric-field transmission coefficients" },
    { symbol: "\\vec E_i,\\vec E_r,\\vec E_t", meaning: "incident, reflected, and transmitted field amplitudes", unit: "V m^{-1}" },
    { symbol: "R_j,T_j", meaning: "power reflection and transmission coefficients for component j" },
    { symbol: "I_p,I_s,I_r,I_t", meaning: "component and output intensities", unit: "W m^{-2}" },
  ]}
/>

## The Core Method

Resolve the incident field in the device eigenpolarisations:

\\[
\vec E_i=E_p\hat p+E_s\hat s.
\tag*{[1]}
\\]

A lossless interface or polarising beam-splitter coating acts independently on those components:

\\[
\vec E_r=r_pE_p\hat p_r+r_sE_s\hat s_r,
\qquad
\vec E_t=t_pE_p\hat p_t+t_sE_s\hat s_t.
\tag*{[2]}
\\]

For each incident component, energy conservation with correctly normalised power coefficients gives

\\[
R_j+T_j=1,
\qquad j\in\{p,s\}.
\tag*{[3]}
\\]

An ideal separator approaches \\(R_s=1,T_s=0\\) and \\(R_p=0,T_p=1\\), or the reverse. A birefringent prism instead uses polarisation-dependent refractive indices to create two refracted rays. Calling either physical direction the "axis" without specifying the selected output is ambiguous.

<PhysicsExamples collapsible
  items={[
    {
      title: "Power at two output ports",
      question: "A separator receives \\(I_p=6.0\\,\\mathrm{W\\,m^{-2}}\\) and \\(I_s=4.0\\,\\mathrm{W\\,m^{-2}}\\). It has \\(T_p=0.95\\), \\(T_s=0.02\\), \\(R_p=0.05\\), and \\(R_s=0.98\\). Find total power intensity in each output.",
      answer: "Orthogonal components contribute additive intensities. The transmitted output is \\[I_t=T_pI_p+T_sI_s=0.95(6.0)+0.02(4.0)=5.78\\,\\mathrm{W\\,m^{-2}}.\\] The reflected output is \\[I_r=R_pI_p+R_sI_s=0.05(6.0)+0.98(4.0)=4.22\\,\\mathrm{W\\,m^{-2}}.\\] Their sum is \\(10.0\\,\\mathrm{W\\,m^{-2}}\\), as required by \\([3]\\). **Final result:** \\(I_t=5.78\\,\\mathrm{W\\,m^{-2}}\\) and \\(I_r=4.22\\,\\mathrm{W\\,m^{-2}}\\).",
    },
    {
      title: "Absorber or splitter",
      question: "A device produces two spatially separated beams carrying orthogonal linear polarisations with negligible loss. Is it absorptive?",
      answer: "The rejected component has not been converted mainly to heat; it appears in another propagating port. That is the defining routing action represented by \\([2]\\) and \\([3]\\). **Final result:** it is a beam-splitting polariser, not an absorptive polariser.",
    },
  ]}
/>
`;
