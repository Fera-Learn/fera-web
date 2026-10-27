export const content = String.raw`## Principle

A short pulse can spread out as it travels because its different wavelengths do not always move together.

A wave packet is a superposition of nearby wave numbers. Curvature in the dispersion relation makes those components lose their initial phase alignment, so the packet changes width as it travels.

## Notation

<Notation
  items={[
    { symbol: "x,t", meaning: "position along propagation and time", unit: "m, s" },
    { symbol: "k,k_0,q", meaning: "wave number, central wave number, and offset k-k_0", unit: "m^{-1}, m^{-1}, m^{-1}" },
    { symbol: "\\omega,\\omega_0", meaning: "angular frequency and its value at k_0", unit: "rad s^{-1}, rad s^{-1}" },
    { symbol: "g(k)", meaning: "normalised Gaussian wave-number spectrum", unit: "m" },
    { symbol: "\\sigma_k", meaning: "standard deviation of the wave-number spectrum", unit: "m^{-1}" },
    { symbol: "\\alpha", meaning: "slope of the dispersion relation at the central wave number", unit: "m s^{-1}" },
    { symbol: "\\beta", meaning: "curvature of the dispersion relation at the central wave number", unit: "m^{2} s^{-1}" },
    { symbol: "\\psi", meaning: "complex scalar wave packet" },
    { symbol: "A,B", meaning: "temporary quadratic and linear coefficients in the Gaussian integral", unit: "m^{2}, m" },
    { symbol: "L_{\\mathrm{FWHM}}", meaning: "full width of the amplitude envelope at half maximum", unit: "m" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

Adopt the harmonic convention \\(e^{i(kx-\omega t)}\\). Build a packet from a Gaussian spectrum centred on \\(k_0\\):

\\[
g(k)=\frac{1}{\sqrt{2\pi}\sigma_k}
\exp\!\left[-\frac{(k-k_0)^2}{2\sigma_k^2}\right].
\tag*{[1]}
\\]

The corresponding complex packet is

\\[
\psi(x,t)=\frac{1}{\sqrt{2\pi}}
\int_{-\infty}^{\infty}g(k)e^{i[kx-\omega(k)t]}\,dk.
\tag*{[2]}
\\]

Dispersion is encoded by the function \\(\omega(k)\\). Expand that function about the central component, set \\(q=k-k_0\\), and keep terms through second order.

\\[
\omega(k)\approx\omega_0+\alpha q+\frac{1}{2}\beta q^2,
\qquad
\alpha=\left.\frac{d\omega}{dk}\right|_{k_0},
\qquad
\beta=\left.\frac{d^2\omega}{dk^2}\right|_{k_0}.
\tag*{[3]}
\\]

Substitute [1] and [3] into [2] and collect the constant, linear, and quadratic terms in \\(q\\). No higher-order dispersion is included in this approximation.

\\[
\psi(x,t)=\frac{e^{i(k_0x-\omega_0t)}}{2\pi\sigma_k}
\int_{-\infty}^{\infty}
\exp\!\left[-\frac{1}{2}(\sigma_k^{-2}+i\beta t)q^2+i(x-\alpha t)q\right]\,dq.
\tag*{[4]}
\\]

Define \\(A=\sigma_k^{-2}+i\beta t\\) and \\(B=i(x-\alpha t)\\). Use the Gaussian identity below; the real part of \\(A\\) is positive because \\(\sigma_k\\) is real and nonzero.

\\[
\int_{-\infty}^{\infty}e^{-Aq^2/2+Bq}\,dq
=\sqrt{\frac{2\pi}{A}}\exp\!\left(\frac{B^2}{2A}\right),
\qquad
A=\sigma_k^{-2}+i\beta t,
\qquad
B=i(x-\alpha t).
\tag*{[5]}
\\]

Substitution of \\(A\\) and \\(B\\), followed by multiplication of numerator and denominator by \\(\sigma_k^2\\), gives

\\[
\psi(x,t)=\frac{e^{i(k_0x-\omega_0t)}}{\sqrt{2\pi}}
\frac{1}{\sqrt{1+i\beta\sigma_k^2t}}
\exp\!\left[-\frac{\sigma_k^2(x-\alpha t)^2}{2(1+i\beta\sigma_k^2t)}\right].
\tag*{[6]}
\\]

Take the modulus of [6]. The carrier phase disappears, leaving the moving envelope.

\\[
|\psi(x,t)|=\frac{1}{\sqrt{2\pi}}
\frac{1}{(1+\beta^2\sigma_k^4t^2)^{1/4}}
\exp\!\left[-\frac{\sigma_k^2(x-\alpha t)^2}{2(1+\beta^2\sigma_k^4t^2)}\right].
\tag*{[7]}
\\]

The source comparison below shows the packet at two times. The carrier oscillates inside its envelope; the later dashed packet has moved right and broadened while its peak has fallen.

<CartesianGrid
  className="mx-auto max-w-2xl"
  height={360}
  width={640}
  title="Dispersive motion and broadening of a wave packet"
  caption="Solid curves show the initial packet; dashed curves show the lower, broader packet at a later time. The red carrier oscillations move in phase inside each black envelope."
  xRange={{ min: 0, max: 65, step: 10, label: "Distance (dimensionless)" }}
  yRange={{ min: -0.4, max: 0.5, step: 0.1, label: "Amplitude of wave (dimensionless)" }}
>
  <Curve
    color="var(--foreground)"
    points={Array.from({ length: 261 }, (_, index) => {
      const x = index / 4;
      const y = 0.31 * Math.exp(-((x - 12) ** 2) / (2 * 5.5 ** 2));
      return { x, y };
    })}
    smooth
  />
  <Curve
    color="var(--destructive)"
    points={Array.from({ length: 261 }, (_, index) => {
      const x = index / 4;
      const envelope = 0.31 * Math.exp(-((x - 12) ** 2) / (2 * 5.5 ** 2));
      const y = envelope * Math.cos((2 * Math.PI * (x - 12)) / 6.2);
      return { x, y };
    })}
    smooth
  />
  <Curve
    color="var(--foreground)"
    dashed
    points={Array.from({ length: 261 }, (_, index) => {
      const x = index / 4;
      const y = 0.18 * Math.exp(-((x - 42) ** 2) / (2 * 11.5 ** 2));
      return { x, y };
    })}
    smooth
  />
  <Curve
    color="var(--destructive)"
    dashed
    points={Array.from({ length: 261 }, (_, index) => {
      const x = index / 4;
      const envelope = 0.18 * Math.exp(-((x - 42) ** 2) / (2 * 11.5 ** 2));
      const y = envelope * Math.cos((2 * Math.PI * (x - 42)) / 6.2);
      return { x, y };
    })}
    smooth
  />
  <Annotation point={{ x: 12, y: 0.31 }} label="Initial wave envelope" offset={{ x: -80, y: 12 }} />
  <Annotation point={{ x: 17, y: -0.18 }} label="Initial carrier frequency" offset={{ x: 16, y: 28 }} />
  <Annotation point={{ x: 42, y: 0.18 }} label="Wave envelope at later time" offset={{ x: -86, y: -24 }} />
  <Annotation point={{ x: 50, y: -0.11 }} label="Carrier frequency at later time" offset={{ x: -138, y: 28 }} />
  <Annotation point={{ x: 12, y: 0.39 }} label="V_group →" offset={{ x: 28, y: -8 }} />
  <Annotation point={{ x: 42, y: 0.28 }} label="V_group →" offset={{ x: 28, y: -8 }} />
  <Annotation point={{ x: 12, y: 0.155 }} label="L_FWHM" offset={{ x: 12, y: 0 }} />
  <Annotation point={{ x: 42, y: 0.09 }} label="L_FWHM" offset={{ x: 12, y: 0 }} />
</CartesianGrid>

The carrier phase is read from the red oscillations, whereas the centre and width are read from the black envelope. The rightward shift represents group motion, and the increased FWHM is the observable signature of dispersion.

The maximum occurs at \\(x=\alpha t\\), so the packet centre travels at the group velocity \\(\alpha\\). To find the full width at half maximum, set \\(|\psi|\\) to half its peak value at \\(x=\alpha t\pm L_{\mathrm{FWHM}}/2\\).

\\[
\exp\!\left[-\frac{\sigma_k^2(L_{\mathrm{FWHM}}/2)^2}{2(1+\beta^2\sigma_k^4t^2)}\right]=\frac{1}{2}.
\tag*{[8]}
\\]

Take natural logarithms of both sides and solve without skipping the square-root step.

\\[
-\frac{\sigma_k^2L_{\mathrm{FWHM}}^2}{8(1+\beta^2\sigma_k^4t^2)}=-\ln2
\quad\Longrightarrow\quad
L_{\mathrm{FWHM}}^2=\frac{8\ln2}{\sigma_k^2}(1+\beta^2\sigma_k^4t^2).
\tag*{[9]}
\\]

If \\(\beta=0\\), the width is constant and the packet moves ballistically. If \\(\beta\ne0\\), the width grows with \\(|t|\\) and the motion is dispersive. A broad spectrum also starts as a narrow packet because \\(L_{\mathrm{FWHM}}(0)\\) is proportional to \\(1/\sigma_k\\), but it is then more sensitive to nonzero curvature.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Growth of a Gaussian packet",
      question: "A packet has \\(\\sigma_k=2.0\\,\\mathrm{m^{-1}}\\), \\(\\alpha=4.0\\,\\mathrm{m\\,s^{-1}}\\), and \\(\\beta=0.50\\,\\mathrm{m^2\\,s^{-1}}\\). Find its centre and amplitude-envelope FWHM at \\(t=3.0\\,\\mathrm s\\).",
      answer: "Equation [7] places the centre at \\(x=\\alpha t\\), so \\[x_{\\mathrm{centre}}=(4.0\\,\\mathrm{m\\,s^{-1}})(3.0\\,\\mathrm s)=12\\,\\mathrm m.\\] For the width factor in equation [9], retain all powers and units: \\[1+\\beta^2\\sigma_k^4t^2=1+(0.50\\,\\mathrm{m^2\\,s^{-1}})^2(2.0\\,\\mathrm{m^{-1}})^4(3.0\\,\\mathrm s)^2=37.\\] Therefore \\[L_{\\mathrm{FWHM}}=\\sqrt{\\frac{8\\ln2}{(2.0\\,\\mathrm{m^{-1}})^2}(37)}=7.16\\,\\mathrm m.\\] **Final result:** the centre is at \\(12\\,\\mathrm m\\) and the FWHM is \\(7.2\\,\\mathrm m\\). The initial width was only \\(1.18\\,\\mathrm m\\), so the larger final width confirms dispersive spreading.",
    },
    {
      title: "Why a vacuum packet does not spread",
      question: "Explain whether an electromagnetic packet in ideal vacuum is dispersive when \\(\\omega=ck\\).",
      answer: "Differentiate the dispersion relation once to obtain \\(\\alpha=d\\omega/dk=c\\). Differentiate again to obtain \\(\\beta=d^2\\omega/dk^2=0\\). Equation [9] then reduces to \\(L_{\\mathrm{FWHM}}^2=8\\ln2/\\sigma_k^2\\), which has no time dependence. **Final result:** the packet moves at \\(c\\) without spreading in this ideal model. A changing width would require curvature in \\(\\omega(k)\\) or physics outside the vacuum model.",
    },
  ]}
/>
`;
