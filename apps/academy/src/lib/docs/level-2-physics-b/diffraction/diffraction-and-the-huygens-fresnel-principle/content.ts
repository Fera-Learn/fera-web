export const content = String.raw`## Principle

Diffraction occurs because a finite wavefront cannot continue as a single plane wave. In the scalar, monochromatic, paraxial model, every transmitting point in an aperture launches a secondary spherical wavelet, and the observed field is their coherent sum. The phases must be added before the intensity is calculated.

## Notation

<Notation
  items={[
    { symbol: "U,U_0,U_{\\mathrm{ref}}", meaning: "complex scalar field, incident amplitude, and reference amplitude" },
    { symbol: "x',y'", meaning: "transverse aperture-plane coordinates", unit: "m, m" },
    { symbol: "x,y,z", meaning: "observation coordinates and positive propagation distance", unit: "m, m, m" },
    { symbol: "P,Q", meaning: "observation point and secondary-source point" },
    { symbol: "r=|P-Q|", meaning: "distance from an aperture point to the observation point", unit: "m" },
    { symbol: "dS'=dx'\\,dy'", meaning: "aperture area element", unit: "m^{2}" },
    { symbol: "S_A,\\Delta S'_j,j", meaning: "open aperture region, finite area element, and element index", unit: "m^{2}, m^{2}, 1" },
    { symbol: "\\Delta r,\\Delta\\phi", meaning: "path and phase differences between two wavelets", unit: "m, rad" },
    { symbol: "\\lambda,k,\\omega,t", meaning: "wavelength, wavenumber k=2\\pi/\\lambda, angular frequency, and time", unit: "m, m^{-1}, rad s^{-1}, s" },
    { symbol: "C", meaning: "Huygens-Fresnel propagation and obliquity factor" },
    { symbol: "m", meaning: "integer phase order" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
    { symbol: "I,I_{\\mathrm{ref}}", meaning: "time-averaged intensity and reference intensity", unit: "W m^{-2}, W m^{-2}" },
  ]}
/>

## The Core Method

Adopt the harmonic convention \\(e^{i(kz-\omega t)}\\), suppress the common time factor, and assume uniform polarisation so that a scalar field is adequate. Divide the open area into small elements \\(\Delta S'_j\\). The Huygens-Fresnel principle gives a coherent Riemann sum,

\\[
U(P)\approx\sum_j C(Q_j,P)U(Q_j)
\frac{e^{ikr_j}}{r_j}\,\Delta S'_j,
\tag*{[1]}
\\]

where \\(C\\) contains the propagation normalisation and obliquity factor. Taking the limit as every element shrinks gives

\\[
U(P)=\iint_{S_A}C(Q,P)U(Q)
\frac{e^{ikr}}{r}\,dS'.
\tag*{[2]}
\\]

Equation [2] is coherent: a path change \\(\Delta r\\) changes phase by \\(k\Delta r\\). For two equal elements,

\\[
\Delta\phi=k\Delta r=\frac{2\pi}{\lambda}\Delta r,
\qquad
dU_1+dU_2=dU_1\left(1+e^{i\Delta\phi}\right).
\tag*{[3]}
\\]

Thus \\(\Delta r=m\lambda\\) produces constructive addition, whereas \\(\Delta r=(m+1/2)\lambda\\) produces destructive addition. Only after evaluating the field integral may the observable intensity be formed:

\\[
I(P)=I_{\mathrm{ref}}\left|\frac{U(P)}{U_{\mathrm{ref}}}\right|^2.
\tag*{[4]}
\\]

The scalar and paraxial assumptions fail for strong focusing, apertures comparable with the wavelength, or spatially varying polarisation. Treating each finite aperture as one point source also fails because it discards phase variation across the opening.

<PhysicsExamples collapsible
  items={[
    {
      title: "Phase relation between two wavelets",
      question: "Two equal aperture elements have paths to \\(P\\) that differ by \\(1.5\\,\\mu\\mathrm{m}\\). For wavelength \\(\\lambda=600\\,\\mathrm{nm}\\), determine their relative phase and combined field amplitude relative to one element.",
      answer: "Convert the path difference to the same unit: \\(\\Delta r=1.5\\,\\mathrm{\\mu m}=1500\\,\\mathrm{nm}\\). Equation \\([3]\\) gives \\[\\Delta\\phi=2\\pi\\frac{1500}{600}=5\\pi.\\] Hence \\(e^{i\\Delta\\phi}=e^{i5\\pi}=-1\\), so \\[dU_1+dU_2=dU_1(1-1)=0.\\] **Final result:** the wavelets are in antiphase and cancel exactly in this equal-amplitude model; the combined field and intensity are zero.",
    },
    {
      title: "Why a wide opening can still diffract",
      question: "A slit is much wider than the wavelength. Explain why replacing the whole slit by one secondary source gives the wrong off-axis field.",
      answer: "Different points across the slit have different values of \\(r\\). Equation \\([3]\\) therefore assigns them different phases, even when the incident field is uniform. Their phasors partly reinforce and partly cancel as the observation angle changes. One point source would retain only one phase and could not produce minima. **Final result:** the aperture must be integrated over its area; finite width creates an angle-dependent interference pattern even when the width exceeds \\(\\lambda\\).",
    },
  ]}
/>
`;
