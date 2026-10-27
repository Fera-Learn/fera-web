export const content = String.raw`## Principle

Send electrons through two slits one at a time and individual dots gradually build an interference pattern.

Particles such as electrons travel and interfere like waves, yet every detection is a single localised hit. The wavefunction \\(\psi(x,t)\\) is the wave that describes this behaviour. It is complex-valued, so it is not a probability by itself. Its squared modulus \\(|\psi(x,t)|^{2}\\) is the probability density for finding the particle near position \\(x\\) at time \\(t\\).

The phase of \\(\psi\\) does not appear in \\(|\psi|^{2}\\) for a single wave on its own. It does matter when two contributions overlap, because it decides whether they add or cancel. That addition is what produces interference.

## Notation

<Notation
  items={[
    { symbol: "x", meaning: "position along the direction of motion", unit: "m" },
    { symbol: "t", meaning: "time", unit: "s" },
    { symbol: "\\psi(x,t)", meaning: "complex wavefunction, a probability amplitude", unit: "1/sqrt(m)" },
    { symbol: "|\\psi(x,t)|^{2}", meaning: "probability density for position", unit: "m^{-1}" },
    { symbol: "h,\\hbar", meaning: "Planck constant h and reduced Planck constant h/(2 pi)", unit: "J s, J s" },
    { symbol: "p", meaning: "linear momentum", unit: "kg m s^{-1}" },
    { symbol: "\\lambda", meaning: "de Broglie wavelength", unit: "m" },
    { symbol: "k", meaning: "angular wave number, equal to 2 pi over the wavelength", unit: "m^{-1}" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
    { symbol: "A,A_{1},A_{2}", meaning: "constant amplitude of a plane wave, and amplitudes of two routes", unit: "1/sqrt(m)" },
    { symbol: "c(k)", meaning: "complex weight of the wave number k in a superposition", unit: "sqrt(m)" },
    { symbol: "\\sigma", meaning: "width parameter of a Gaussian packet", unit: "m" },
    { symbol: "\\varphi_{1}(x),\\varphi_{2}(x)", meaning: "real phases of the two routes to the point x", unit: "rad" },
    { symbol: "\\delta(x)", meaning: "phase difference between the two routes, the phase of route 2 minus the phase of route 1", unit: "rad" },
    { symbol: "\\Delta x,\\Delta p", meaning: "standard deviations (spreads) of position and momentum", unit: "m, kg m s^{-1}" },
  ]}
/>

Conventions: motion is one-dimensional along \\(x\\), and every integral over \\(x\\) or \\(k\\) runs over the whole real line. A wave written as \\(e^{i(kx-\omega t)}\\) travels to the right.

## The Core Method

**Step 1: the experiment that forces a wave description.** Send electrons through two slits one at a time. Each electron is detected at one point, so every single detection looks like a particle. After many detections, the points build up into bright and dark fringes, and only a wave can produce that pattern. The fringe spacing measures a wavelength, and de Broglie's relation links that wavelength to momentum:

\\[
\lambda=\frac{h}{p}
\tag*{[1]}
\\]

A wave with wave number \\(k=2\pi/\lambda\\) therefore carries momentum

\\[
p=\frac{h}{\lambda}=\frac{h}{2\pi}\cdot\frac{2\pi}{\lambda}=\hbar k
\tag*{[2]}
\\]

**Step 2: a single plane wave.** A wave of definite momentum has a single wave number \\(k\\) and frequency \\(\omega\\). It is written as a complex plane wave with constant amplitude \\(A\\):

\\[
\psi_k(x,t)=A\,e^{i(kx-\omega t)}=A\cos(kx-\omega t)+iA\sin(kx-\omega t)
\tag*{[3]}
\\]

Euler's identity \\(e^{i\theta}=\cos\theta+i\sin\theta\\) shows that the complex form contains both a cosine and a sine part. Because \\(\psi\\) is complex, the probability density is found from the product of \\(\psi\\) with its complex conjugate \\(\psi^{*}\\). Here the exponentials cancel, so the density is the same at every point:

\\[
|\psi_k|^{2}=\psi_k^{*}\psi_k=|A|^{2}e^{-i(kx-\omega t)}e^{i(kx-\omega t)}=|A|^{2}
\tag*{[4]}
\\]

A plane wave therefore has a definite momentum but no definite position. It is spread evenly over all \\(x\\), so it does not describe one particle in one place. Its time factor only changes the phase, so this density does not change with time.

**Step 3: building a localised packet.** A particle at one place needs many wave numbers. Each \\(k\\) is given a complex weight \\(c(k)\\), and the packet is the sum of all the components:

\\[
\psi(x,t)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}c(k)\,e^{i(kx-\omega(k)t)}\,dk
\tag*{[5]}
\\]

Where the components have matching phases they reinforce each other, and elsewhere they cancel. The result is a bump of width \\(\Delta x\\). Since \\(p=\hbar k\\), each wave number carries momentum \\(\hbar k\\), so a spread in \\(k\\) is a spread in momentum: \\(\Delta p=\hbar\,\Delta k\\). Here \\(\Delta x\\) and \\(\Delta p\\) are standard deviations, which measure how far the position and momentum distributions spread around their averages.

<PhysicsDiagram slug="electron-interference-and-wave-packets" />

The upper panel connects the wave description to observations: every electron leaves one local hit, but many hits reproduce the two-route interference distribution. The lower sequence shows why localization needs superposition: one wave number extends across all space, two nearby wave numbers make beats, and a broad spread of wave numbers concentrates the amplitude into a packet.

**Step 4: the trade-off, worked for a Gaussian packet.** Take a Gaussian packet at \\(t=0\\) with width parameter \\(\sigma\\):

\\[
\psi(x,0)=(2\pi\sigma^{2})^{-1/4}\,e^{-x^{2}/(4\sigma^{2})}
\tag*{[6]}
\\]

Its probability density is \\(|\psi(x,0)|^{2}=\frac{1}{\sqrt{2\pi}\,\sigma}e^{-x^{2}/(2\sigma^{2})}\\). This integrates to one, because \\(\int e^{-x^{2}/(2\sigma^{2})}\,dx=\sqrt{2\pi}\,\sigma\\), so the packet is normalised. The exponent has the form \\(-x^{2}/(2\sigma^{2})\\), so this is a Gaussian with standard deviation \\(\Delta x=\sigma\\).

The momentum weights come from inverting equation [5]: \\(c(k)=\frac{1}{\sqrt{2\pi}}\int\psi(x,0)e^{-ikx}\,dx\\). The standard integral \\(\int e^{-ax^{2}}e^{-ikx}\,dx=\sqrt{\pi/a}\,e^{-k^{2}/(4a)}\\), with \\(a=1/(4\sigma^{2})\\), gives

\\[
c(k)=C\,e^{-\sigma^{2}k^{2}},
\qquad
|c(k)|^{2}=|C|^{2}e^{-2\sigma^{2}k^{2}}
\tag*{[7]}
\\]

where \\(C\\) is a constant with units \\(m^{1/2}\\). Once normalised, \\(|c(k)|^{2}\\) is the probability density for the wave number \\(k\\), and therefore for momentum \\(p=\hbar k\\). A Gaussian \\(e^{-k^{2}/(2s^{2})}\\) has standard deviation \\(s\\). Matching \\(2\sigma^{2}k^{2}=k^{2}/(2s^{2})\\) gives \\(s^{2}=1/(4\sigma^{2})\\), so \\(\Delta k=1/(2\sigma)\\). Then

\\[
\Delta p=\hbar\,\Delta k=\frac{\hbar}{2\sigma},
\qquad
\Delta x\,\Delta p=\sigma\cdot\frac{\hbar}{2\sigma}=\frac{\hbar}{2}
\tag*{[8]}
\\]

The product is fixed. Halving the position spread doubles the momentum spread. The Gaussian reaches the smallest possible product, and for any wavefunction \\(\Delta x\,\Delta p\geq\hbar/2\\). This limit comes from the wave nature of the particle. It is not a sign of careless measurement.

**Step 5: alternatives add as amplitudes.** Suppose a particle can reach the point \\(x\\) by two routes. Each route contributes a complex amplitude, \\(\psi_{j}=A_{j}e^{i\varphi_{j}(x)}\\) for \\(j=1,2\\), where \\(A_{j}\\) and \\(\varphi_{j}\\) are real. The two amplitudes add before the square is taken:

\\[
\psi=\psi_{1}+\psi_{2}
\tag*{[9]}
\\]

Expanding \\(|\psi|^{2}=(\psi_{1}^{*}+\psi_{2}^{*})(\psi_{1}+\psi_{2})\\) gives four terms. The cross terms combine as \\(\psi_{1}^{*}\psi_{2}+\psi_{2}^{*}\psi_{1}=A_{1}A_{2}(e^{i\delta}+e^{-i\delta})\\), which equals \\(2A_{1}A_{2}\cos\delta\\) by Euler's identity. So

\\[
|\psi|^{2}=|\psi_{1}|^{2}+|\psi_{2}|^{2}+\psi_{1}^{*}\psi_{2}+\psi_{2}^{*}\psi_{1}
=A_{1}^{2}+A_{2}^{2}+2A_{1}A_{2}\cos\delta(x)
\tag*{[10]}
\\]

A classical particle that takes one route or the other would have probability \\(P_{1}+P_{2}=A_{1}^{2}+A_{2}^{2}\\), with no cross term. The cross term \\(2A_{1}A_{2}\cos\delta(x)\\) is the signature of interference. Because \\(\delta(x)\\) changes from point to point, the probability of a hit varies across the screen.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Wavelength of an electron accelerated through 100 V",
      question: "An electron starts from rest and is accelerated through a potential difference of \\(100\\,\\mathrm{V}\\). Find its de Broglie wavelength. Use \\(e=1.602\\times10^{-19}\\,\\mathrm{C}\\), \\(m_e=9.109\\times10^{-31}\\,\\mathrm{kg}\\) and \\(h=6.626\\times10^{-34}\\,\\mathrm{J\\,s}\\).",
      answer: "Strategy: the wavelength follows from the momentum. Find the kinetic energy first, then the momentum, then use the de Broglie relation. Step 1, kinetic energy: the electron gains kinetic energy \\(K=eV\\). \\[K=eV=(1.602\\times10^{-19}\\,\\mathrm{C})(100\\,\\mathrm{V})=1.602\\times10^{-17}\\,\\mathrm{J}.\\] Since \\(1\\,\\mathrm{V}=1\\,\\mathrm{J\\,C^{-1}}\\), the result is in joules. Step 2, check the non-relativistic form: the rest energy is \\(m_ec^{2}=8.19\\times10^{-14}\\,\\mathrm{J}\\), and \\(K/(m_ec^{2})\\approx2\\times10^{-4}\\), so \\(K=p^{2}/(2m_e)\\) is accurate. Step 3, momentum: \\[p=\\sqrt{2m_eK}=\\sqrt{2(9.109\\times10^{-31})(1.602\\times10^{-17})}=5.402\\times10^{-24}\\,\\mathrm{kg\\,m\\,s^{-1}}.\\] The units work because \\(\\mathrm{J}=\\mathrm{kg\\,m^{2}\\,s^{-2}}\\), so \\(\\sqrt{\\mathrm{kg}\\cdot\\mathrm{J}}=\\mathrm{kg\\,m\\,s^{-1}}\\). Step 4, wavelength: from the de Broglie relation, \\[\\lambda=\\frac{h}{p}=\\frac{6.626\\times10^{-34}}{5.402\\times10^{-24}}=1.23\\times10^{-10}\\,\\mathrm{m}.\\] Final result: \\(\\lambda\\approx1.23\\times10^{-10}\\,\\mathrm{m}=0.123\\,\\mathrm{nm}\\). This is comparable with the spacing between atoms in a crystal, roughly 0.1 to 0.3 nm, which is why crystals can diffract electrons.",
    },
    {
      title: "Why one electron still makes fringes",
      question: "Electrons pass through two slits one at a time, and each is detected at a single point. Why does the accumulated pattern contain bright and dark fringes, when each electron can only arrive at one point? Take the two routes to have equal amplitudes, \\(A_{1}=A_{2}=A\\).",
      answer: "Strategy: apply the two-route formula at a point \\(x\\) on the screen. Each route contributes \\(\\psi_{j}=A\\,e^{i\\varphi_{j}(x)}\\), and the phase difference \\(\\delta(x)=\\varphi_{2}(x)-\\varphi_{1}(x)\\) depends on the path lengths to \\(x\\). Step 1, probability density: \\[|\\psi|^{2}=A^{2}+A^{2}+2A^{2}\\cos\\delta=2A^{2}(1+\\cos\\delta).\\] Step 2, brightest points: the largest value occurs when \\(\\cos\\delta=1\\), that is \\(\\delta=2\\pi n\\) for an integer \\(n\\). Then \\(|\\psi|^{2}=4A^{2}\\), which is four times the value \\(A^{2}\\) from one open slit, not twice. Step 3, darkest points: the smallest value occurs when \\(\\cos\\delta=-1\\), that is \\(\\delta=(2n+1)\\pi\\). Then \\(|\\psi|^{2}=0\\), so an electron never arrives there. Comparison: a classical rule that adds the two route probabilities gives \\(2A^{2}\\) everywhere, with no zeros. Final result: the detection probability density is \\(2A^{2}(1+\\cos\\delta(x))\\). The cross term comes from the amplitude of one electron passing both routes, not from two electrons interacting. Each electron still lands at one point, but it lands where this probability is high. The fringes are the statistics of many single hits.",
    },
  ]}
/>
`;
