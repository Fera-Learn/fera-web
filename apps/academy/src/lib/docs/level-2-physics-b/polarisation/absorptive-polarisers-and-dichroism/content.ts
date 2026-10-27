export const content = String.raw`## Principle

An absorptive polariser converts one field component mainly into material excitation and heat while transmitting the orthogonal component. Dichroism is direction-dependent absorption: different linear polarisations have different absorption coefficients.

## Notation

<Notation
  items={[
    { symbol: "I_{j0},I_j", meaning: "incident and transmitted intensity of component j", unit: "W m^{-2}, W m^{-2}" },
    { symbol: "I,z", meaning: "dummy intensity and propagation coordinate used in the attenuation integral", unit: "W m^{-2}, m" },
    { symbol: "\\mu_j", meaning: "intensity absorption coefficient for component j", unit: "m^{-1}" },
    { symbol: "l", meaning: "absorbing thickness", unit: "m" },
    { symbol: "T_j", meaning: "intensity transmission of component j" },
    { symbol: "\\mathcal E", meaning: "extinction ratio of passed to blocked transmission" },
    { symbol: "\\parallel,\\perp", meaning: "directions parallel and perpendicular to the aligned molecular chains" },
  ]}
/>

## The Core Method

For principal absorbing directions, Beer-Lambert attenuation gives

\\[
\frac{dI_j}{dz}=-\mu_j I_j.
\tag*{[1]}
\\]

Separate variables and integrate through thickness \\(l\\):

\\[
\int_{I_{j0}}^{I_j}\frac{dI}{I}=-\mu_j\int_0^l dz,
\qquad
\ln\!\left(\frac{I_j}{I_{j0}}\right)=-\mu_jl,
\qquad
T_j=\frac{I_j}{I_{j0}}=e^{-\mu_jl}.
\tag*{[2]}
\\]

If \\(\mu_\parallel>\mu_\perp\\), the direction parallel to aligned molecular chains is more strongly absorbed and the transmission axis is perpendicular to the chains. A useful ideality measure is

\\[
\mathcal E=\frac{T_{\mathrm{pass}}}{T_{\mathrm{block}}}
=e^{(\mu_{\mathrm{block}}-\mu_{\mathrm{pass}})l}.
\tag*{[3]}
\\]

Polaroid sheets and dichroic crystals such as tourmaline use this mechanism. The passed component can still suffer nonzero absorption, so transmission need not reach unity.

<PhysicsExamples collapsible
  items={[
    {
      title: "Calculating dichroic extinction",
      question: "A sheet has \\(\\mu_{\\mathrm{pass}}=20\\,\\mathrm{m^{-1}}\\), \\(\\mu_{\\mathrm{block}}=220\\,\\mathrm{m^{-1}}\\), and \\(l=1.00\\,\\mathrm{cm}\\). Find both transmissions and the extinction ratio.",
      answer: "Convert the thickness: \\(l=1.00\\times10^{-2}\\,\\mathrm m\\). Equation \\([2]\\) gives \\[T_{\\mathrm{pass}}=e^{-20(0.0100)}=e^{-0.2}=0.819,\\] \\[T_{\\mathrm{block}}=e^{-220(0.0100)}=e^{-2.2}=0.111.\\] Hence \\([3]\\) gives \\(\\mathcal E=0.819/0.111=7.39\\). **Final result:** \\(T_{\\mathrm{pass}}=0.819\\), \\(T_{\\mathrm{block}}=0.111\\), and \\(\\mathcal E=7.39\\).",
    },
    {
      title: "Finding the transmission axis",
      question: "A polymer film absorbs electric fields parallel to its vertical molecular chains. State its transmission axis.",
      answer: "Vertical polarisation drives charge motion along the chains and is the blocked component. The orthogonal horizontal component experiences weaker absorption. **Final result:** the film's transmission axis is horizontal, perpendicular to the molecular chains.",
    },
  ]}
/>
`;
