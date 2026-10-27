export const content = String.raw`## Principle

At one special angle a reflected polarisation disappears, while beyond another angle a beam inside a denser material cannot escape as a travelling ray.

Brewster's angle is the incidence angle at which one reflected field amplitude vanishes; the critical angle is the largest incidence angle that permits a propagating transmitted wave from higher to lower refractive index. The convention used here calls electric field in the plane of incidence **parallel** polarisation (p) and electric field normal to that plane **normal** polarisation (s).

## Notation

<Notation
  items={[
    { symbol: "\\theta_i,\\theta_t", meaning: "incidence and transmission angles measured from the interface normal", unit: "rad" },
    { symbol: "\\theta_B,\\theta_c", meaning: "Brewster angle and critical angle", unit: "rad" },
    { symbol: "r_{\\parallel},r_{\\perp}", meaning: "parallel-polarised (p) and normal-to-plane (s) reflected electric-field amplitude coefficients" },
    { symbol: "Z_i,Z_t", meaning: "wave impedances of the incident and transmitted media", unit: "\\Omega" },
    { symbol: "n_i,n_t", meaning: "refractive indices of the incident and transmitted media" },
    { symbol: "\\epsilon_i,\\epsilon_t", meaning: "permittivities of the incident and transmitted media", unit: "F m^{-1}" },
    { symbol: "\\mu_i,\\mu_t", meaning: "permeabilities of the incident and transmitted media", unit: "H m^{-1}" },
    { symbol: "\\epsilon^*,\\mu^*", meaning: "ratios \\epsilon_t/\\epsilon_i and \\mu_t/\\mu_i" },
    { symbol: "\\vec k_t", meaning: "transmitted wave vector", unit: "m^{-1}" },
  ]}
/>

## The Core Method

The ray geometry first separates ordinary transmission, the Brewster condition, the critical ray, and total internal reflection for light travelling from water into air.

<PhysicsDiagram slug="total-internal-reflection-geometry" />

As the incidence angle increases, the transmitted ray bends progressively closer to the interface. At \\(\theta_c\\) it runs along the interface; above \\(\theta_c\\) there is no propagating transmitted ray and the wave is totally internally reflected.

The p-polarised Brewster zero also has a microscopic interpretation in the receiving material.

<PhysicsDiagram slug="microscopic-brewster-angle" />

The transmitted electric field drives bound charges along the induced-dipole axes. A dipole emits no radiation along its own axis. When the reflected direction lies on that axis, equivalently when \\(\theta_B+\theta_t=90^\circ\\), the reflected p-polarised amplitude is zero.

In this fixed-axis amplitude convention, the two reflection amplitudes are

\\[
r_{\parallel}
=\frac{\cos\theta_t-(Z_i/Z_t)\cos\theta_i}
{\cos\theta_t+(Z_i/Z_t)\cos\theta_i},
\qquad
r_{\perp}
=\frac{\cos\theta_i-(Z_i/Z_t)\cos\theta_t}
{\cos\theta_i+(Z_i/Z_t)\cos\theta_t}.
\tag*{[1]}
\\]

Here parallel means p and normal-to-plane means s. Define the material ratios

\\[
\epsilon^*=\frac{\epsilon_t}{\epsilon_i},
\qquad
\mu^*=\frac{\mu_t}{\mu_i}.
\tag*{[2]}
\\]

For lossless isotropic media,

\\[
\frac{n_t}{n_i}=\sqrt{\epsilon^*\mu^*},
\qquad
\frac{Z_i}{Z_t}=\sqrt{\frac{\epsilon^*}{\mu^*}},
\qquad
n_i\sin\theta_i=n_t\sin\theta_t.
\tag*{[3]}
\\]

Set the parallel numerator in [1] to zero at \\(\theta_i=\theta_B\\):

\\[
\cos\theta_t
=\sqrt{\frac{\epsilon^*}{\mu^*}}\cos\theta_B.
\tag*{[4]}
\\]

Snell's law in [3] gives

\\[
\sin\theta_t
=\frac{\sin\theta_B}{\sqrt{\epsilon^*\mu^*}}.
\tag*{[5]}
\\]

Write \\(x=\tan^2\theta_B\\), so \\(\sin^2\theta_B=x/(1+x)\\) and \\(\cos^2\theta_B=1/(1+x)\\). Squaring [4] and substituting [5] then gives

\\[
1-\frac{x}{(1+x)\epsilon^*\mu^*}
=\frac{\epsilon^*}{\mu^*}\frac{1}{1+x}.
\tag*{[6]}
\\]

Multiply [6] by \\((1+x)\epsilon^*\mu^*\\):

\\[
\epsilon^*\mu^*+x(\epsilon^*\mu^*-1)
=(\epsilon^*)^2.
\tag*{[7]}
\\]

\\[
x(\epsilon^*\mu^*-1)
=\epsilon^*(\epsilon^*-\mu^*).
\tag*{[8]}
\\]

Replace \\(x\\) by its definition:

\\[
\boxed{
\tan^2\theta_B\big|_{\parallel}
=\frac{\epsilon^*(\epsilon^*-\mu^*)}
{\epsilon^*\mu^*-1}
}.
\tag*{[9]}
\\]

For normal-to-plane polarisation, set its numerator in [1] to zero and use the same \\(x=\tan^2\theta_B\\) substitution:

\\[
\cos\theta_B
=\sqrt{\frac{\epsilon^*}{\mu^*}}\cos\theta_t,
\\
\frac{1}{1+x}
=\frac{\epsilon^*}{\mu^*}
\left(1-\frac{x}{(1+x)\epsilon^*\mu^*}\right),
\\
\mu^*\epsilon^*+x(\epsilon^*\mu^*-1)=(\mu^*)^2,
\qquad
x(\epsilon^*\mu^*-1)=\mu^*(\mu^*-\epsilon^*),
\\
\boxed{
\tan^2\theta_B\big|_{\perp}
=\frac{\mu^*(\mu^*-\epsilon^*)}
{\epsilon^*\mu^*-1}
}.
\tag*{[10]}
\\]

A physical Brewster angle requires the relevant right-hand side to be non-negative and finite. For ordinary nonmagnetic dielectrics, \\(\mu^*=1\\), so [9] and [10] become

\\[
\boxed{\tan\theta_B=\frac{n_t}{n_i}\quad\text{for parallel (p) polarisation}},
\qquad
\tan^2\theta_B\big|_{\perp}=-1.
\tag*{[11]}
\\]

These ordinary-dielectric results presume unequal refractive indices. If the media are identical, both reflection amplitudes vanish at every angle and there is no unique Brewster angle. For unequal ordinary dielectrics, the normal-to-plane, or s, wave has no real Brewster angle. At the p-polarised Brewster angle, Snell's law and [11] also imply \\(\theta_B+\theta_t=90^\circ\\).

For a propagating transmitted wave, Snell's law requires a real angle:

\\[
\sin\theta_t=\frac{n_i}{n_t}\sin\theta_i\le1.
\tag*{[12]}
\\]

Only when \\(n_i>n_t\\) can the right-hand side reach one. Setting \\(\theta_t=90^\circ\\) defines

\\[
\boxed{\sin\theta_c=\frac{n_t}{n_i}},
\qquad n_i>n_t.
\tag*{[13]}
\\]

At \\(\theta_i=\theta_c\\), the transmitted wave vector is parallel to the interface. For \\(\theta_i>\theta_c\\), no real normal component of \\(\vec k_t\\) exists: the transmitted field is evanescent and carries no time-averaged power away from an ideal lossless interface, while reflection is total for both polarisations.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Brewster zero for air-to-glass light",
      question: "Parallel-polarised light travels from air \\((n_i=1.00)\\) into nonmagnetic glass \\((n_t=1.50)\\). Find the Brewster angle, the transmitted angle there, and verify that the parallel reflection numerator vanishes.",
      answer: "For nonmagnetic dielectrics, [11] gives \\[\\theta_B=\\tan^{-1}\\left(\\frac{1.50}{1.00}\\right)=56.3^\\circ.\\] Snell's law gives \\[\\sin\\theta_t=\\frac{1.00}{1.50}\\sin56.3^\\circ=0.5547,\\] so \\(\\theta_t=33.7^\\circ\\), confirming \\(\\theta_B+\\theta_t=90.0^\\circ\\). Also \\(Z_i/Z_t=n_t/n_i=1.50\\), and the numerator of \\(r_{\\parallel}\\) is \\[\\cos33.7^\\circ-1.50\\cos56.3^\\circ=0.8321-1.50(0.5547)=0.\\] **Final result:** \\(\\theta_B=56.3^\\circ\\), \\(\\theta_t=33.7^\\circ\\), and \\(r_{\\parallel}=0\\). The normal-to-plane component is not eliminated.",
    },
    {
      title: "Critical angle for glass-to-air light",
      question: "Light travels from glass \\((n_i=1.50)\\) toward air \\((n_t=1.00)\\). Find the critical angle and classify incidence at \\(50.0^\\circ\\).",
      answer: "The wave travels from higher to lower index, so a critical angle exists. Equation [13] gives \\[\\sin\\theta_c=\\frac{1.00}{1.50}=0.6667,\\] hence \\[\\theta_c=\\sin^{-1}(0.6667)=41.8^\\circ.\\] Since \\(50.0^\\circ\\gt41.8^\\circ\\), Snell's law would require \\[\\sin\\theta_t=\\frac{1.50}{1.00}\\sin50.0^\\circ=1.15,\\] which is not a real propagation angle. **Final result:** \\(\\theta_c=41.8^\\circ\\); at \\(50.0^\\circ\\) total internal reflection occurs for both polarisations, with an evanescent field on the air side.",
    },
  ]}
/>
`;
