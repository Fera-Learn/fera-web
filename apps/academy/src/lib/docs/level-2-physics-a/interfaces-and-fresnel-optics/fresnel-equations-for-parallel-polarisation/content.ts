export const content = String.raw`## Principle

Tilt a glass surface and light polarised in the plane of incidence reflects with an amplitude that depends strongly on angle.

In the fixed-axis convention used here, **parallel polarisation** means that the electric field lies parallel to the plane of incidence; this is p polarisation. Signed electric-field amplitudes are referred to fixed positive coordinate directions for all three waves, and each magnetic-field direction is chosen so that \\(\vec E\times\vec H\\) points along its wave vector. This convention determines the signs of the Fresnel amplitudes.

## Notation

<Notation
  items={[
    { symbol: "E_{0i},E_{0r},E_{0t}", meaning: "signed incident, reflected, and transmitted electric-field amplitudes", unit: "V m^{-1}" },
    { symbol: "H_{0i},H_{0r},H_{0t}", meaning: "signed incident, reflected, and transmitted auxiliary-field amplitudes", unit: "A m^{-1}" },
    { symbol: "\\theta_i,\\theta_t", meaning: "incidence and transmission angles measured from the interface normal", unit: "rad" },
    { symbol: "Z_i,Z_t", meaning: "wave impedances of the incident and transmitted media", unit: "\\Omega" },
    { symbol: "\\epsilon_i,\\epsilon_t", meaning: "permittivities of the incident and transmitted media", unit: "F m^{-1}" },
    { symbol: "\\mu_i,\\mu_t", meaning: "permeabilities of the incident and transmitted media", unit: "H m^{-1}" },
    { symbol: "n_i,n_t", meaning: "refractive indices of the incident and transmitted media" },
    { symbol: "r_{\\parallel},t_{\\parallel}", meaning: "parallel-polarised electric-field reflection and transmission amplitude coefficients" },
    { symbol: "\\vec k,\\omega,\\vec B", meaning: "wave vector, angular frequency, and magnetic flux density", unit: "m^{-1}, rad s^{-1}, T" },
  ]}
/>

## The Core Method

For a lossless insulating medium, a plane wave obeys

\\[
\vec k\times\vec E=\omega\vec B,
\qquad
\vec B=\mu\vec H,
\qquad
Z=\frac{|E|}{|H|}=\sqrt{\frac{\mu}{\epsilon}}.
\tag*{[1]}
\\]

<PhysicsDiagram slug="parallel-polarisation-interface" />

The source labels this in-plane electric-field convention with \\(P\\): each blue amplitude arrow lies in the plane of incidence and perpendicular to its wavevector. The horizontal blue arrows are the signed interface-tangent projections that enter electric-field continuity.

Choose a positive interface tangent in the plane of incidence and the interface normal pointing from the incident medium into the transmitted medium. For every wave, a positive \\(E_0\\) has an electric-field projection along that positive tangent. Measure \\(H_0\\) along the fixed axis given by normal cross tangent. The propagation directions then give the signed relations

\\[
H_{0i}=+\frac{E_{0i}}{Z_i},
\qquad
H_{0r}=-\frac{E_{0r}}{Z_i},
\qquad
H_{0t}=+\frac{E_{0t}}{Z_t}.
\tag*{[2]}
\\]

The reflected sign differs because its wave vector reverses its normal component while \\(\vec E\times\vec H\\) must still point along propagation.

For parallel polarisation, only the projections of \\(\vec E\\) tangent to the interface enter electric-field continuity. The reflected angle equals the incident angle, so

\\[
(E_{0i}+E_{0r})\cos\theta_i
=E_{0t}\cos\theta_t.
\tag*{[3]}
\\]

With no free surface current, tangential \\(\vec H\\) is continuous. Substitute [2]:

\\[
\frac{E_{0i}}{Z_i}
-\frac{E_{0r}}{Z_i}
=\frac{E_{0t}}{Z_t}.
\tag*{[4]}
\\]

Multiply [4] by \\(Z_i\\):

\\[
E_{0i}-E_{0r}=\frac{Z_i}{Z_t}E_{0t}.
\tag*{[5]}
\\]

Define the amplitude ratios and divide [3] and [5] by \\(E_{0i}\\):

\\[
r_{\parallel}=\frac{E_{0r}}{E_{0i}},
\qquad
t_{\parallel}=\frac{E_{0t}}{E_{0i}},
\qquad
(1+r_{\parallel})\cos\theta_i=t_{\parallel}\cos\theta_t,
\qquad
1-r_{\parallel}=\frac{Z_i}{Z_t}t_{\parallel}.
\tag*{[6]}
\\]

The first boundary equation gives

\\[
t_{\parallel}
=\frac{(1+r_{\parallel})\cos\theta_i}{\cos\theta_t}.
\tag*{[7]}
\\]

Insert [7] into the second equation in [6] and multiply by \\(\cos\theta_t\\):

\\[
\cos\theta_t(1-r_{\parallel})
=\frac{Z_i}{Z_t}\cos\theta_i(1+r_{\parallel}).
\tag*{[8]}
\\]

Expand [8] and collect the reflection terms:

\\[
\cos\theta_t-\frac{Z_i}{Z_t}\cos\theta_i
=r_{\parallel}\left(
\cos\theta_t+\frac{Z_i}{Z_t}\cos\theta_i
\right).
\tag*{[9]}
\\]

Equation [9] gives the reflection amplitude. Substitute it into [7] to obtain the transmission amplitude without skipping the intermediate sum:

\\[
\boxed{
r_{\parallel}
=\frac{\cos\theta_t-(Z_i/Z_t)\cos\theta_i}
{\cos\theta_t+(Z_i/Z_t)\cos\theta_i}
},
\\
1+r_{\parallel}
=\frac{2\cos\theta_t}
{\cos\theta_t+(Z_i/Z_t)\cos\theta_i},
\\
\boxed{
t_{\parallel}
=\frac{(1+r_{\parallel})\cos\theta_i}{\cos\theta_t}
=\frac{2\cos\theta_i}
{\cos\theta_t+(Z_i/Z_t)\cos\theta_i}
}.
\tag*{[10]}
\\]

For the source's nonmagnetic air-to-water example, \\(n_t/n_i=4/3\\). Plotting the signed field-amplitude coefficients reveals the reflected phase change that a power-only graph would hide.

<CartesianGrid
  className="mx-auto max-w-xl"
  height={350}
  width={560}
  title="Parallel-polarised Fresnel amplitudes for air to water"
  caption="The reflected p amplitude crosses zero at the Brewster angle and becomes positive at larger incidence angles; the transmitted amplitude tends to zero at grazing incidence."
  xRange={{ min: 0, max: 90, step: 10, label: "angle of incidence (degrees)" }}
  yRange={{ min: -1, max: 1, step: 0.25, label: "Fresnel coefficient" }}
>
  <Curve
    color="var(--foreground)"
    dashed
    points={Array.from({ length: 181 }, (_, index) => {
      const angleDegrees = index / 2;
      const thetaI = (angleDegrees * Math.PI) / 180;
      const indexRatio = 4 / 3;
      const thetaT = Math.asin(Math.sin(thetaI) / indexRatio);
      const denominator = Math.cos(thetaT) + indexRatio * Math.cos(thetaI);
      const y = (2 * Math.cos(thetaI)) / denominator;
      return { x: angleDegrees, y };
    })}
    smooth
  />
  <Curve
    color="var(--destructive)"
    dashed
    points={Array.from({ length: 181 }, (_, index) => {
      const angleDegrees = index / 2;
      const thetaI = (angleDegrees * Math.PI) / 180;
      const indexRatio = 4 / 3;
      const thetaT = Math.asin(Math.sin(thetaI) / indexRatio);
      const denominator = Math.cos(thetaT) + indexRatio * Math.cos(thetaI);
      const y = (Math.cos(thetaT) - indexRatio * Math.cos(thetaI)) / denominator;
      return { x: angleDegrees, y };
    })}
    smooth
  />
  <Annotation point={{ x: 25, y: 0.86 }} label="Transmission E-parallel" offset={{ x: 20, y: -18 }} />
  <Annotation point={{ x: 25, y: -0.12 }} label="Reflection E-parallel" offset={{ x: 20, y: 24 }} />
  <Annotation point={{ x: 53.13, y: 0 }} label="Brewster angle 53°" offset={{ x: 24, y: -26 }} />
</CartesianGrid>

At normal incidence the reflected coefficient is negative. It reaches zero when the reflected and transmitted rays are perpendicular, then becomes positive as grazing incidence is approached; these signs refer to the fixed field directions in the convention diagram.

The cancellation of \\(\cos\theta_t\\) in [10] is essential: the numerator of \\(t_{\parallel}\\) is \\(2\cos\theta_i\\).

For nonmagnetic media, \\(Z_i/Z_t=n_t/n_i\\). At normal incidence, both angles vanish and [10] reduces to

\\[
r_{\parallel}=\frac{Z_t-Z_i}{Z_t+Z_i}
=\frac{n_i-n_t}{n_i+n_t},
\qquad
t_{\parallel}=\frac{2Z_t}{Z_t+Z_i}
=\frac{2n_i}{n_i+n_t}.
\tag*{[11]}
\\]

A negative coefficient means a \\(180^\circ\\) phase reversal relative to the fixed positive field direction. These are field-amplitude coefficients; transmitted power additionally requires impedance and propagation-angle factors.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Parallel-polarised air-to-glass amplitude",
      question: "Parallel-polarised light travels from air \\((n_i=1.00)\\) into nonmagnetic glass \\((n_t=1.50)\\) at \\(\\theta_i=45.0^\\circ\\). Find \\(\\theta_t\\), \\(r_{\\parallel}\\), and \\(t_{\\parallel}\\) in this fixed-axis convention.",
      answer: "Snell's law first gives \\[\\sin\\theta_t=\\frac{n_i}{n_t}\\sin45.0^\\circ=\\frac{1.00}{1.50}(0.7071)=0.4714,\\] so \\(\\theta_t=28.1^\\circ\\), \\(\\cos\\theta_i=0.7071\\), and \\(\\cos\\theta_t=0.8819\\). Nonmagnetic media give \\(Z_i/Z_t=n_t/n_i=1.50\\). Equation [10] then gives \\[r_{\\parallel}=\\frac{0.8819-1.50(0.7071)}{0.8819+1.50(0.7071)}=-0.0920,\\] and \\[t_{\\parallel}=\\frac{2(0.7071)}{0.8819+1.50(0.7071)}=0.728.\\] To check [3], write the incident amplitude as \\(E_{0i}=E_*\\). The incident-plus-reflected tangential field is \\[(E_{0i}+E_{0r})\\cos\\theta_i=(1+r_{\\parallel})\\cos\\theta_i E_*\\simeq0.642\\,E_*,\\] while the transmitted tangential field is \\[E_{0t}\\cos\\theta_t=t_{\\parallel}\\cos\\theta_t E_*\\simeq0.642\\,E_*.\\] **Final result:** \\(\\theta_t=28.1^\\circ\\), \\(r_{\\parallel}=-0.0920\\), and \\(t_{\\parallel}=0.728\\); the negative reflected amplitude is a phase reversal.",
    },
    {
      title: "Normal-incidence and matched-impedance checks",
      question: "Use the parallel Fresnel equations to predict the amplitudes at normal incidence from air \\((n_i=1.00)\\) into nonmagnetic glass \\((n_t=1.50)\\), then state what happens if the two impedances are equal.",
      answer: "Equation [11] gives \\[r_{\\parallel}=\\frac{1.00-1.50}{1.00+1.50}=-0.200,\\qquad t_{\\parallel}=\\frac{2(1.00)}{1.00+1.50}=0.800.\\] The tangential boundary check is \\(1+r_{\\parallel}=0.800=t_{\\parallel}\\). If \\(Z_i=Z_t\\), equation [11] instead gives \\(r_{\\parallel}=0\\) and \\(t_{\\parallel}=1\\): there is no reflected field at normal incidence. **Final result:** air-to-glass amplitudes are \\(-0.200\\) and \\(0.800\\); impedance matching removes the reflected amplitude.",
    },
  ]}
/>
`;
