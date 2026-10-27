export const content = String.raw`## Principle

At a dielectric interface, p polarisation has its electric field in the plane of incidence and s polarisation is perpendicular to that plane. At Brewster's angle, reflection of p-polarised light vanishes for ordinary lossless nonmagnetic media, so the reflected beam is s-polarised.

## Notation

<Notation
  items={[
    { symbol: "n_1,n_2", meaning: "refractive indices of incident and transmitted media" },
    { symbol: "\\theta_i,\\theta_t,\\theta_B", meaning: "incidence, transmission, and Brewster angles from the normal", unit: "rad" },
    { symbol: "r_p,r_s", meaning: "p- and s-polarised electric-field reflection coefficients" },
    { symbol: "\\hat p,\\hat s", meaning: "parallel-to-plane and perpendicular-to-plane polarisation directions" },
  ]}
/>

## The Core Method

For nonmagnetic dielectric media, the p reflection coefficient is

\\[
r_p=\frac{n_1\cos\theta_t-n_2\cos\theta_i}
{n_1\cos\theta_t+n_2\cos\theta_i}.
\tag*{[1]}
\\]

At \\(\theta_i=\theta_B\\), set the numerator to zero and combine it with Snell's law:

\\[
n_1\cos\theta_t=n_2\cos\theta_B,
\qquad
n_1\sin\theta_B=n_2\sin\theta_t.
\tag*{[2]}
\\]

Divide the Snell relation by the zero-reflection relation:

\\[
\frac{\sin\theta_B}{\cos\theta_t}
=\frac{\sin\theta_t}{\cos\theta_B},
\qquad
\sin\theta_B\cos\theta_B=\sin\theta_t\cos\theta_t.
\tag*{[3]}
\\]

For distinct indices and physical angles, [3] implies \\(\theta_B+\theta_t=\pi/2\\). Substitution into Snell's law yields

\\[
\tan\theta_B=\frac{n_2}{n_1}.
\tag*{[4]}
\\]

Only p reflection vanishes; the reflected output is therefore s-polarised. Multiple Brewster-angle surfaces can improve separation, while absorption or magnetic response requires more general Fresnel coefficients.

<PhysicsExamples collapsible
  items={[
    {
      title: "Air-to-glass Brewster angle",
      question: "Find the Brewster angle for light incident from air \\(n_1=1.00\\) onto glass \\(n_2=1.50\\), and state the reflected polarisation.",
      answer: "Equation \\([4]\\) gives \\[\\theta_B=\\tan^{-1}(1.50/1.00)=56.3^\\circ.\\] Equation \\([3]\\) gives \\(\\theta_t=90.0^\\circ-56.3^\\circ=33.7^\\circ\\). At this angle \\(r_p=0\\), whereas the s coefficient is nonzero. **Final result:** \\(\\theta_B=56.3^\\circ\\), and the reflected beam is s-polarised.",
    },
    {
      title: "Identifying the passed branch",
      question: "At Brewster incidence, which component is absent from the reflected beam and preferentially remains in the transmitted branch?",
      answer: "By definition \\([1]\\) has \\(r_p=0\\) at \\(\\theta_B\\), so no p-polarised power enters the reflected propagating beam. The p component therefore remains in the transmitted branch in the lossless idealisation. **Final result:** p polarisation is absent from reflection and preferentially transmitted.",
    },
  ]}
/>
`;
