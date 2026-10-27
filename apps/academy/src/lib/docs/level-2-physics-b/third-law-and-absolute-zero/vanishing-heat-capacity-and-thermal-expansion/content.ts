export const content = String.raw`## Principle

As an equilibrium system approaches a parameter-independent limiting entropy, ordinary response functions lose their thermal variation. Under smooth stable behavior, heat capacity and thermal expansion both vanish as absolute temperature tends to zero.

## Notation

<Notation
  items={[
    { symbol: "S,S_0,T,T'", meaning: "entropy, limiting entropy, temperature, and integration temperature", unit: "J K^{-1}, J K^{-1}, K, K" },
    { symbol: "T_1,C_0", meaning: "positive reference temperature and hypothetical constant total heat capacity", unit: "K, J K^{-1}" },
    { symbol: "C_{\\mathrm{tot},p}", meaning: "total heat capacity at constant pressure", unit: "J K^{-1}" },
    { symbol: "G,p,V", meaning: "Gibbs energy, pressure, and volume", unit: "J, Pa, m^{3}" },
    { symbol: "\\alpha_p", meaning: "volumetric thermal expansion coefficient at constant pressure", unit: "K^{-1}" },
    { symbol: "a", meaning: "low-temperature cubic heat-capacity coefficient", unit: "J K^{-4}" },
  ]}
/>

## The Core Method

At constant pressure, the definition of total heat capacity is

\\[
C_{\mathrm{tot},p}=T\left(\frac{\partial S}{\partial T}\right)_p.
\tag*{[1]}
\\]

Integrating equation [1] from the zero-temperature limit gives the absolute entropy relative to \\(S_0\\):

\\[
S(T,p)-S_0=\int_0^T\frac{C_{\mathrm{tot},p}(T',p)}{T'}\,dT'.
\tag*{[2]}
\\]

For equation [2] to remain finite in an ordinary equilibrium phase with a smooth nonnegative heat capacity, \\(C_{\mathrm{tot},p}\\) must vanish sufficiently rapidly:

\\[
\lim_{T\to0^+}C_{\mathrm{tot},p}(T,p)=0.
\tag*{[3]}
\\]

A constant positive heat capacity would make the integral proportional to \\(\ln T\\) and prevent entropy from approaching a finite limit. Low-temperature quantum behavior therefore replaces classical constant-capacity models.

Thermal expansion follows from the Gibbs differential

\\[
dG=-S\,dT+V\,dp.
\tag*{[4]}
\\]

Equality of mixed derivatives of \\(G(T,p)\\) gives

\\[
\left(\frac{\partial V}{\partial T}\right)_p
=-\left(\frac{\partial S}{\partial p}\right)_T.
\tag*{[5]}
\\]

The Nernst statement makes the limiting entropy independent of pressure, so for a smooth equilibrium limit

\\[
\lim_{T\to0^+}\left(\frac{\partial S}{\partial p}\right)_T=0
\quad\Longrightarrow\quad
\lim_{T\to0^+}\left(\frac{\partial V}{\partial T}\right)_p=0.
\tag*{[6]}
\\]

Since \\(\alpha_p=V^{-1}(\partial V/\partial T)_p\\) and a condensed sample has finite nonzero volume,

\\[
\lim_{T\to0^+}\alpha_p=0.
\tag*{[7]}
\\]

These limits assume internal equilibrium and no singular phase boundary at the limiting state. They do not justify extending an ideal-gas heat capacity or another high-temperature approximation down to zero.

<PhysicsExamples collapsible
  items={[
    {
      title: "Cubic low-temperature heat capacity",
      question: "A solid has \\(C_{\\mathrm{tot},p}=aT^3\\) below \\(5\\,\\mathrm K\\), with \\(a=2.0\\times10^{-3}\\,\\mathrm{J\\,K^{-4}}\\). Find \\(C_{\\mathrm{tot},p}\\) and \\(S(T)-S_0\\) at \\(T=2.0\\,\\mathrm K\\).",
      answer: "The heat capacity is \\[C_{\\mathrm{tot},p}=aT^3=(2.0\\times10^{-3})(2.0)^3\\,\\mathrm{J\\,K^{-1}}=1.6\\times10^{-2}\\,\\mathrm{J\\,K^{-1}}.\\] Apply equation \\([2]\\): \\[S(T)-S_0=\\int_0^T aT'^2\\,dT'=\\frac{aT^3}{3}=5.3\\times10^{-3}\\,\\mathrm{J\\,K^{-1}}.\\] Both expressions vanish with positive powers of temperature. **Final result:** at \\(2.0\\,\\mathrm K\\), \\(C_{\\mathrm{tot},p}=1.6\\times10^{-2}\\,\\mathrm{J\\,K^{-1}}\\) and \\(S-S_0=5.3\\times10^{-3}\\,\\mathrm{J\\,K^{-1}}\\).",
    },
    {
      title: "Why constant heat capacity fails",
      question: "What goes wrong if a classical model predicts a constant \\(C_{\\mathrm{tot},p}=C_0\\gt 0\\) all the way to absolute zero?",
      answer: "Substitution into equation \\([2]\\) gives \\(S(T)-S(T_1)=C_0\\ln(T/T_1)\\) relative to any positive reference temperature \\(T_1\\). As \\(T\\to0^+\\), the logarithm diverges instead of approaching a finite \\(S_0\\). The model has been extrapolated beyond its regime, usually by neglecting quantum energy-level spacing and interactions. **Final result:** a nonzero constant low-temperature heat capacity is incompatible with a finite third-law entropy limit.",
    },
  ]}
/>
`;
