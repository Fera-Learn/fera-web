export const content = String.raw`## Principle

A field amplitude can double while its transported power does not, because power also depends on the medium and direction of travel.

Fresnel coefficients \\(r\\) and \\(t\\) compare field amplitudes, whereas the reflection and transmission coefficients \\(R\\) and \\(T\\) compare powers normal to an interface. Squaring a transmission amplitude is not enough when the two media have different wave impedances or the transmitted ray changes angle.

## Notation

<Notation
  items={[
    { symbol: "E_{0i},E_{0r},E_{0t}", meaning: "peak incident, reflected, and transmitted electric-field amplitudes", unit: "V m^{-1}" },
    { symbol: "Z_i,Z_t,Z_0", meaning: "real wave impedances of the lossless incident and transmitted media, and vacuum impedance", unit: "\\Omega, \\Omega, \\Omega" },
    { symbol: "\\theta_i,\\theta_t", meaning: "incidence and transmission angles measured from the interface normal", unit: "rad" },
    { symbol: "I_i,I_r,I_t", meaning: "incident, reflected, and transmitted average intensities along their propagation directions", unit: "W m^{-2}" },
    { symbol: "r,t", meaning: "electric-field reflection and transmission amplitude coefficients" },
    { symbol: "R,T", meaning: "reflected and transmitted fractions of incident normal power" },
    { symbol: "n_i,n_t", meaning: "refractive indices of nonmagnetic incident and transmitted media" },
  ]}
/>

## The Core Method

For a travelling plane wave in a lossless medium, its average intensity along propagation is \\(I=|E_0|^2/(2Z)\\). Only the component normal to the interface transports energy from one side to the other, so

\\[
I_i\cos\theta_i=\frac{|E_{0i}|^2}{2Z_i}\cos\theta_i,
\quad
I_r\cos\theta_i=\frac{|E_{0r}|^2}{2Z_i}\cos\theta_i,
\quad
I_t\cos\theta_t=\frac{|E_{0t}|^2}{2Z_t}\cos\theta_t.
\tag*{[1]}
\\]

Define the field-amplitude coefficients using the same signed conventions as the relevant Fresnel equations:

\\[
r=\frac{E_{0r}}{E_{0i}},
\qquad
t=\frac{E_{0t}}{E_{0i}}.
\tag*{[2]}
\\]

The reflected wave stays in the incident medium and its reflection angle equals \\(\theta_i\\). Its impedance and angle factors therefore cancel from the power ratio:

\\[
\boxed{R=\frac{I_r\cos\theta_i}{I_i\cos\theta_i}=|r|^2}.
\tag*{[3]}
\\]

For transmission, divide the third normal flux in [1] by the first and use [2]:

\\[
\boxed{
T=\frac{I_t\cos\theta_t}{I_i\cos\theta_i}
=\frac{Z_i}{Z_t}
\frac{\cos\theta_t}{\cos\theta_i}|t|^2
}.
\tag*{[4]}
\\]

For nonmagnetic transparent media, \\(Z=Z_0/n\\), so the impedance ratio becomes \\(Z_i/Z_t=n_t/n_i\\):

\\[
T=\frac{n_t}{n_i}
\frac{\cos\theta_t}{\cos\theta_i}|t|^2.
\tag*{[5]}
\\]

At a lossless interface with no surface absorption, conservation of normal power gives

\\[
I_i\cos\theta_i=I_r\cos\theta_i+I_t\cos\theta_t
\quad\Longrightarrow\quad
\boxed{R+T=1}.
\tag*{[6]}
\\]

At normal incidence, the electric-field Fresnel amplitudes are

\\[
r=\frac{Z_t-Z_i}{Z_t+Z_i},
\qquad
t=\frac{2Z_t}{Z_t+Z_i}.
\tag*{[7]}
\\]

Substitution into [3] and [4] gives

\\[
R=\frac{(Z_t-Z_i)^2}{(Z_t+Z_i)^2},
\qquad
T=\frac{4Z_iZ_t}{(Z_t+Z_i)^2},
\qquad
R+T=\frac{(Z_t-Z_i)^2+4Z_iZ_t}{(Z_t+Z_i)^2}=1.
\tag*{[8]}
\\]

Equations [4] and [5] assume propagating waves in lossless media, with real positive impedances and angles. For total internal reflection the transmitted field is evanescent and carries no average power normal to an infinite interface, giving \\(T=0\\) and \\(R=1\\); the propagating-wave formula must not be used with a complex transmission angle as though it were real.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Oblique air-to-glass power fractions",
      question: "An s-polarised wave travels from air \\(n_i=1.00\\) into nonmagnetic glass \\(n_t=1.50\\) at \\(\\theta_i=45.0^\\circ\\). Its Fresnel amplitudes are \\(r=-0.3033\\) and \\(t=0.6967\\), and Snell's law gives \\(\\theta_t=28.13^\\circ\\). Find \\(R\\) and \\(T\\).",
      answer: "The reflection fraction follows directly from equation [3]: \\[R=|r|^2=(-0.3033)^2=0.0920.\\] For nonmagnetic media, equation [5] includes both the refractive-index and angle factors: \\[T=\\frac{1.50}{1.00}\\frac{\\cos28.13^\\circ}{\\cos45.0^\\circ}(0.6967)^2=0.9080.\\] The conservation check is \\[R+T=0.0920+0.9080=1.0000\\] to the quoted precision. **Final result:** \\(R=0.0920\\) and \\(T=0.9080\\), so about \\(9.20\\%\\) of the normal incident power is reflected and \\(90.80\\%\\) is transmitted.",
    },
    {
      title: "Why transmitted power is not the amplitude squared",
      question: "At normal incidence from air \\(n_i=1.00\\) into nonmagnetic glass \\(n_t=1.50\\), the electric-field amplitudes are \\(r=-0.200\\) and \\(t=0.800\\). Calculate the power coefficients and identify the error in taking \\(T=t^2\\).",
      answer: "Equation [3] gives \\[R=(-0.200)^2=0.0400.\\] At normal incidence, equation [5] gives \\[T=\\frac{n_t}{n_i}t^2=\\frac{1.50}{1.00}(0.800)^2=0.960.\\] The check is \\(R+T=0.0400+0.960=1.000\\). Taking \\(T=t^2=0.640\\) would omit the impedance ratio and would falsely lose \\(32\\%\\) of the incident power. **Final result:** \\(R=0.0400\\) and \\(T=0.960\\); field amplitudes cannot generally be squared directly to obtain transmitted power.",
    },
  ]}
/>
`;
