export const content = String.raw`## Principle

Linear birefringence has two orthogonal linear eigenaxes. The fast axis has lower phase index and accumulates less phase than the slow axis over the same distance. Use \\(+z\\) propagation and \\(e^{i(kz-\omega t)}\\).

## Notation

<Notation
  items={[
    { symbol: "\\hat e_f,\\hat e_s", meaning: "fast- and slow-axis unit polarisation vectors" },
    { symbol: "n_f,n_s", meaning: "fast- and slow-axis phase indices with n fast less than n slow" },
    { symbol: "A_f,A_s", meaning: "input field amplitudes on the two axes", unit: "V m^{-1}" },
    { symbol: "k_0,\\lambda_0", meaning: "vacuum wavenumber and wavelength", unit: "m^{-1}, m" },
    { symbol: "l,\\delta", meaning: "plate thickness and slow-minus-fast retardance", unit: "m, rad" },
    { symbol: "\\vec E_0,E_0", meaning: "complex field amplitude and amplitude scale", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "z,\\omega,c", meaning: "propagation coordinate, angular frequency, and vacuum light speed", unit: "m, rad s^{-1}, m s^{-1}" },
    { symbol: "t", meaning: "time", unit: "s" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Resolve the incident field along the principal axes:

\\[
\vec E_0(0)=A_f\hat e_f+A_s\hat e_s.
\tag*{[1]}
\\]

After thickness \\(l\\), factor out the common fast-axis phase:

\\[
\vec E_0(l)=A_fe^{in_fk_0l}\hat e_f+A_se^{in_sk_0l}\hat e_s
=e^{in_fk_0l}\left(A_f\hat e_f+A_se^{i\delta}\hat e_s\right).
\tag*{[2]}
\\]

Since \\(n_s>n_f\\), the signed retardance in this phasor convention is

\\[
\delta=k_0(n_s-n_f)l
=\frac{2\pi(n_s-n_f)l}{\lambda_0}>0.
\tag*{[3]}
\\]

Equal input components cycle through linear, circular, orthogonal linear, opposite circular, and the original linear state as \\(\delta\\) advances through \\(0,\pi/2,\pi,3\pi/2,2\pi\\). Calling ordinary and extraordinary axes fast and slow without checking their indices can be wrong in a given crystal geometry.

<PhysicsExamples collapsible
  items={[
    {
      title: "Evolution of a 45-degree input",
      question: "A field \\(E_0(\\hat e_f+\\hat e_s)/\\sqrt2\\) acquires \\(\\delta=3\\pi/2\\). Find its output polarisation after dropping common phase.",
      answer: "Equation \\([2]\\) gives \\[\\vec E_0(l)=\\frac{E_0}{\\sqrt2}(\\hat e_f+e^{i3\\pi/2}\\hat e_s)=\\frac{E_0}{\\sqrt2}(\\hat e_f-i\\hat e_s).\\] Relative phase \\(-\\pi/2\\) with equal magnitudes is right-circular under the declared convention. **Final result:** the output is right-circular.",
    },
    {
      title: "Fast versus slow phase",
      question: "Which component accumulates the larger phase in the convention \\(e^{i(nk_0z-\\omega t)}\\)?",
      answer: "Equation \\([2]\\) assigns phases \\(n_fk_0l\\) and \\(n_sk_0l\\). Since \\(n_s\\gt n_f\\), their difference \\([3]\\) is positive. The word slow refers to the lower phase velocity \\(c/n_s\\), not to a negative phasor phase. **Final result:** the slow-axis component accumulates the larger phase.",
    },
  ]}
/>
`;
