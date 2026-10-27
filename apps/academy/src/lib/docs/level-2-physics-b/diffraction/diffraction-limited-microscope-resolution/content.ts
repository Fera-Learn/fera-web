export const content = String.raw`## Principle

A microscope objective has a finite angular acceptance, so a point object forms an Airy pattern rather than a point image. Under the Rayleigh criterion, two equal points are just resolved when one Airy maximum lies at the first minimum of the other.

## Notation

<Notation
  items={[
    { symbol: "\\lambda_0", meaning: "vacuum wavelength", unit: "m" },
    { symbol: "n", meaning: "refractive index in object space" },
    { symbol: "\\alpha", meaning: "objective collection semi-angle", unit: "rad" },
    { symbol: "\\mathrm{NA}=n\\sin\\alpha", meaning: "objective numerical aperture" },
    { symbol: "D,f", meaning: "effective pupil diameter and objective focal length", unit: "m, m" },
    { symbol: "\\delta_R", meaning: "Rayleigh lateral object-space resolution", unit: "m" },
    { symbol: "\\delta,\\delta'", meaning: "lateral object and image separations", unit: "m, m" },
    { symbol: "r_{A,\\mathrm{obj}},r_{A,\\mathrm{img}}", meaning: "object-space-equivalent and image-plane first-dark-ring radii", unit: "m, m" },
    { symbol: "M", meaning: "lateral magnification magnitude" },
    { symbol: "s,s'", meaning: "object and image distances", unit: "m, m" },
    { symbol: "\\lambda=\\lambda_0/n", meaning: "wavelength in the immersion medium", unit: "m" },
  ]}
/>

## The Core Method

A microscope maps each point object to an Airy pattern rather than a geometrical point. Resolution therefore depends on how two central discs and their first minima overlap.

<PhysicsDiagram slug="airy-pattern-resolution" />

For a circular pupil, the object-space-equivalent radius of the first Airy minimum is

\\[
r_{A,\mathrm{obj}}=1.22\frac{\lambda f}{D}.
\tag*{[1]}
\\]

The pupil edge subtends semi-angle \\(\alpha\\). Geometrically,

\\[
\sin\alpha\approx\tan\alpha=\frac{D/2}{f}
\quad\Longrightarrow\quad
D\approx2f\sin\alpha.
\tag*{[2]}
\\]

For a high-NA objective, equation [2] is understood through the Abbe sine condition rather than the small-angle equality of sine and tangent.

Insert equation [2] and \\(\lambda=\lambda_0/n\\) into [1]:

\\[
r_{A,\mathrm{obj}}=1.22\frac{(\lambda_0/n)f}{2f\sin\alpha}
=0.61\frac{\lambda_0}{n\sin\alpha}.
\tag*{[3]}
\\]

The image-plane Airy radius is enlarged by the lateral magnification:

\\[
r_{A,\mathrm{img}}=M r_{A,\mathrm{obj}}.
\tag*{[4]}
\\]

For a microscope with lateral magnification \\(M=|s'/s|\\), an object separation \\(\delta\\) maps to image separation \\(M\delta\\):

\\[
\delta' =M\delta.
\tag*{[5]}
\\]

At the Rayleigh limit, the image separation equals the image-plane first-dark-ring radius. Using equations [4] and [5] gives

\\[
M\delta_R=r_{A,\mathrm{img}}=M r_{A,\mathrm{obj}}
\quad\Longrightarrow\quad
\delta_R=r_{A,\mathrm{obj}}
=0.61\frac{\lambda_0}{n\sin\alpha}
=0.61\frac{\lambda_0}{\mathrm{NA}}.
\tag*{[6]}
\\]

Magnification therefore makes the image-plane blur and image separation larger together; it does not improve object-space diffraction-limited resolution. Shorter wavelength and larger numerical aperture improve resolution. Equation [6] is the Rayleigh two-point criterion, not the distinct Abbe period \\(\lambda_0/(2\mathrm{NA})\\), and it assumes incoherent equal point emitters and an ideal circular pupil.

<PhysicsExamples collapsible
  items={[
    {
      title: "Oil-immersion objective resolution",
      question: "A microscope uses vacuum wavelength \\(\\lambda_0=550\\,\\mathrm{nm}\\) and an oil-immersion objective with \\(\\mathrm{NA}=1.40\\). Find its Rayleigh lateral resolution \\(\\delta_R\\).",
      answer: "Equation \\([6]\\) gives \\[\\delta_R=0.61\\frac{550\\times10^{-9}\\,\\mathrm m}{1.40}=2.40\\times10^{-7}\\,\\mathrm m.\\] This is the minimum centre-to-centre separation under the stated Rayleigh model, not an Airy-disk diameter. **Final result:** \\(\\delta_R=2.40\\times10^{-7}\\,\\mathrm m=240\\,\\mathrm{nm}\\).",
    },
    {
      title: "Why empty magnification does not resolve detail",
      question: "A microscope's display magnification \\(M\\) doubles while the vacuum wavelength \\(\\lambda_0\\) and objective \\(\\mathrm{NA}\\) stay fixed. What happens to the object-space Rayleigh resolution \\(\\delta_R\\)?",
      answer: "Equation \\([6]\\) contains only \\(\\lambda_0\\) and \\(\\mathrm{NA}\\), so its value is unchanged. Equation \\([5]\\) shows that image separations double, but the displayed Airy blur doubles by the same factor. No additional spatial frequency passes through the objective. **Final result:** the object-space diffraction limit is unchanged; doubling display magnification only enlarges the already formed image.",
    },
  ]}
/>
`;
