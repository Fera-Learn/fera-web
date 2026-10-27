export const content = String.raw`## Principle

Interferometry converts an optical path difference into a measurable phase difference. Stable interferometers derive both beams from one source: wavefront splitting selects different spatial portions of one wavefront, whereas amplitude splitting divides the field at an optical element and sends the outputs along different routes.

## Notation

<Notation
  items={[
    { symbol: "L_q,n_q", meaning: "geometric length and refractive index of path segment q", unit: "m, 1" },
    { symbol: "\\mathcal L_1,\\mathcal L_2,\\Delta\\mathcal L", meaning: "arm optical path lengths and difference L_1-L_2", unit: "m" },
    { symbol: "k_0,\\lambda_0", meaning: "vacuum wavenumber and vacuum wavelength", unit: "m^{-1}, m" },
    { symbol: "\\delta,\\delta_{\\mathrm e}", meaning: "total phase difference and additional phase from optical elements", unit: "rad" },
    { symbol: "I,I_1,I_2", meaning: "output and separate-beam intensities", unit: "W m^{-2}" },
    { symbol: "\\ell_c,\\tau_c,c", meaning: "coherence length, coherence time, and vacuum light speed", unit: "m, s, m s^{-1}" },
    { symbol: "q,j,N", meaning: "path-segment index, arm index, and number of crossed fringes", unit: "1, 1, 1" },
  ]}
/>

## The Core Method

The optical path length of an arm is the sum of refractive index times geometric distance over its segments:

\\[
\mathcal L_j=\sum_q n_qL_q,
\qquad
\Delta\mathcal L=\mathcal L_1-\mathcal L_2.
\tag*{[1]}
\\]

For a monochromatic complex field, propagation through optical path \\(\mathcal L_j\\) contributes phase \\(k_0\mathcal L_j\\). Any unequal reflection or transmission phases must be included separately, so

\\[
\boxed{\delta=k_0\Delta\mathcal L+\delta_{\mathrm e}
=\frac{2\pi}{\lambda_0}\Delta\mathcal L+\delta_{\mathrm e}}.
\tag*{[2]}
\\]

The output intensity is then

\\[
I=I_1+I_2+2\sqrt{I_1I_2}\cos\delta.
\tag*{[3]}
\\]

A change of one vacuum wavelength in optical path changes the phase by one full cycle:

\\[
\Delta\delta=\frac{2\pi}{\lambda_0}\Delta(\Delta\mathcal L),
\qquad
\boxed{N=\frac{|\Delta(\Delta\mathcal L)|}{\lambda_0}}.
\tag*{[4]}
\\]

In wavefront splitting, apertures or mirrors select different regions of the same incident wavefront. Young's two slits, Lloyd's mirror, and a Fresnel biprism belong to this class. Their paths usually leave from different transverse positions.

In amplitude splitting, a beamsplitter divides one incident field into reflected and transmitted amplitudes. Michelson, Mach-Zehnder, Fabry-Perot, and Fizeau arrangements belong to this class. Their paths can contain repeated passes, so every traversed segment must be counted in equation [1].

Stable fringes also require temporal overlap and non-orthogonal polarisations. A useful coherence condition is

\\[
|\Delta\mathcal L|\lesssim\ell_c,
\qquad
\ell_c=c\tau_c.
\tag*{[5]}
\\]

Equation [5] is an order-of-magnitude criterion because the precise visibility envelope depends on the source spectrum. Classifying the splitter does not by itself determine the path difference; the actual routes and element phases do.

<PhysicsExamples collapsible
  items={[
    {
      title: "Phase from glass in one path",
      question: "A normally incident glass plate of thickness \\(L=1.00\\,\\mathrm{mm}\\) and refractive index \\(n=1.50\\) replaces the same length of air in one single-pass arm. For \\(\\lambda_0=500\\,\\mathrm{nm}\\), find the added phase and fringe count, neglecting element phase shifts.",
      answer: "Replacing air of index approximately one changes the optical path by \\[\\Delta(\\Delta\\mathcal L)=(n-1)L=(1.50-1)(1.00\\times10^{-3})=5.00\\times10^{-4}\\,\\mathrm m.\\] Equation \\([2]\\) gives \\[\\Delta\\delta=\\frac{2\\pi}{500\\times10^{-9}}(5.00\\times10^{-4})=2000\\pi\\,\\mathrm{rad}.\\] Equation \\([4]\\) gives \\(N=1000\\). A double-pass plate would produce twice these values, so the path geometry must be checked first. **Final result:** the single-pass plate adds \\(2000\\pi\\,\\mathrm{rad}\\) and shifts \\(1000\\) fringes.",
    },
    {
      title: "Classifying two familiar instruments",
      question: "Classify Young's two-slit arrangement and a Michelson interferometer, and state what is physically divided in each case.",
      answer: "Young's apertures sample two transverse portions of one incident wavefront, so the arrangement uses wavefront splitting. A Michelson beamsplitter sends reflected and transmitted field amplitudes into separate arms, so the arrangement uses amplitude splitting. Both methods preserve a common source and therefore avoid relying on two independently drifting emitters. **Final result:** Young is wavefront splitting; Michelson is amplitude splitting.",
    },
  ]}
/>
`;
