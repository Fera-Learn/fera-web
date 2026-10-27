export const content = String.raw`## Principle

An atom changes colour only when it exchanges exactly the energy separating two allowed states.

A system in one stationary state changes to another only when an interaction couples the states. Energy conservation fixes the photon energy, while the sign of the system's energy change distinguishes absorption from emission.

## Notation

<Notation
  items={[
    { symbol: "\\hat H_0", meaning: "unperturbed time-independent Hamiltonian", unit: "J" },
    { symbol: "|i\\rangle,|f\\rangle", meaning: "initial and final stationary states" },
    { symbol: "E_i,E_f", meaning: "initial and final system energies", unit: "J or eV" },
    { symbol: "\\hat V(t)", meaning: "time-dependent interaction that can drive a transition", unit: "J" },
    { symbol: "V_{fi}", meaning: "interaction matrix element between final and initial states", unit: "J" },
    { symbol: "\\Delta E_{\\mathrm{sys}}", meaning: "signed change in the system's energy", unit: "J or eV" },
    { symbol: "E_\\gamma", meaning: "positive photon energy", unit: "J or eV" },
    { symbol: "\\nu,\\lambda", meaning: "photon frequency and wavelength", unit: "Hz, m" },
    { symbol: "h,c", meaning: "Planck constant and speed of light", unit: "J s, m s^{-1}" },
    { symbol: "n,E_n", meaning: "hydrogen principal quantum number and its energy", unit: "1, eV" },
  ]}
/>

## The Core Method

The unperturbed stationary states satisfy

\\[
\hat H_0|i\rangle=E_i|i\rangle,
\qquad
\hat H_0|f\rangle=E_f|f\rangle.\tag*{[1]}
\\]

Evolution under \\(\hat H_0\\) alone adds phases but does not move probability between its energy eigenstates. A transition requires an interaction, represented by

\\[
\hat H(t)=\hat H_0+\hat V(t).\tag*{[2]}
\\]

The interaction couples the two states through the matrix element

\\[
V_{fi}(t)=\langle f|\hat V(t)|i\rangle.\tag*{[3]}
\\]

If equation [3] is zero throughout the interaction, that perturbation does not directly drive the transition. A nonzero value permits coupling, but transition probability also depends on the interaction's time and frequency content.

Always define the signed energy change of the quantum system first:

\\[
\Delta E_{\mathrm{sys}}=E_f-E_i.\tag*{[4]}
\\]

For absorption, the system gains energy, so \\(E_f>E_i\\) and \\(\Delta E_{\mathrm{sys}}>0\\). The absorbed photon supplies exactly this amount.

\\[
E_\gamma=E_f-E_i=h\nu=\frac{hc}{\lambda}>0
\qquad\text{(absorption)}.\tag*{[5]}
\\]

For emission, the system loses energy, so \\(E_f<E_i\\) and \\(\Delta E_{\mathrm{sys}}<0\\). Photon energy remains positive and is the negative of the system change.

\\[
E_\gamma=E_i-E_f=-\Delta E_{\mathrm{sys}}
=h\nu=\frac{hc}{\lambda}>0
\qquad\text{(emission)}.\tag*{[6]}
\\]

The two cases can be summarized without losing the sign information:

\\[
E_\gamma=|E_f-E_i|,
\qquad
\nu=\frac{|E_f-E_i|}{h},
\qquad
\lambda=\frac{hc}{|E_f-E_i|}.\tag*{[7]}
\\]

Equation [7] finds a possible resonant photon energy, not a guarantee that the transition occurs. The coupling in equation [3] and any selection rules must also allow it.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Hydrogen emission from n=3 to n=2",
      question: "Hydrogen has energy levels \\(E_n=-13.6\\,\\mathrm{eV}/n^2\\). Find the photon energy and wavelength emitted in the transition from \\(n=3\\) to \\(n=2\\). Use \\(hc=1240\\,\\mathrm{eV\\,nm}\\).",
      answer: "The initial and final energies are \\[E_i=E_3=-\\frac{13.6}{9}\\,\\mathrm{eV}=-1.51\\,\\mathrm{eV},\\qquad E_f=E_2=-\\frac{13.6}{4}\\,\\mathrm{eV}=-3.40\\,\\mathrm{eV}.\\] The system change is negative: \\[\\Delta E_{\\mathrm{sys}}=E_f-E_i=-3.40-(-1.51)=-1.89\\,\\mathrm{eV}.\\] For emission, equation [6] gives a positive photon energy \\[E_\\gamma=-\\Delta E_{\\mathrm{sys}}=1.89\\,\\mathrm{eV}.\\] Hence \\[\\lambda=\\frac{hc}{E_\\gamma}=\\frac{1240\\,\\mathrm{eV\\,nm}}{1.89\\,\\mathrm{eV}}=656\\,\\mathrm{nm}.\\] **Final result:** the atom loses \\(1.89\\,\\mathrm{eV}\\) and emits a \\(1.89\\,\\mathrm{eV}\\) photon of wavelength approximately \\(656\\,\\mathrm{nm}\\).",
    },
    {
      title: "Keeping the sign in an absorption calculation",
      question: "A system goes from \\(E_i=-5.0\\,\\mathrm{eV}\\) to \\(E_f=-2.0\\,\\mathrm{eV}\\). Is this absorption or emission, and what is the photon energy?",
      answer: "Calculate the signed system change before taking any magnitude: \\[\\Delta E_{\\mathrm{sys}}=E_f-E_i=-2.0-(-5.0)=+3.0\\,\\mathrm{eV}.\\] The positive sign means the system gains energy, so it must absorb a photon. **Final result:** this is absorption and \\(E_\\gamma=3.0\\,\\mathrm{eV}\\). The fact that both level energies are negative does not change the classification.",
    },
  ]}
/>
`;
