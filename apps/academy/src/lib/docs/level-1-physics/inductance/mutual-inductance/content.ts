export const content = String.raw`## Principle

Changing current in one circuit induces emf in another by changing shared flux linkage.

## Notation

<Notation
  items={[
    { symbol: "M", meaning: "mutual inductance between two circuits", unit: "H" },
    { symbol: "I_1", meaning: "current in source circuit", unit: "A" },
    { symbol: "N_2\\Phi_{21}", meaning: "flux linkage in circuit 2 due to current in circuit 1", unit: "Wb" },
    { symbol: "\\mathcal E_2", meaning: "emf induced in circuit 2", unit: "V" },
    { symbol: "k", meaning: "coupling coefficient", unit: "1" },
    { symbol: "L_1,L_2", meaning: "self-inductances of the two circuits", unit: "H" },
  ]}
/>

## Method

### Derivation 1: Define mutual inductance

If current in circuit 1 creates flux through circuit 2, the flux linkage in circuit 2 is proportional to \\(I_1\\) in a linear magnetic system.

<PhysicsDerivation
  items={[
    {
      label: "Flux linkage",
      tex: "N_2\\Phi_{21}=MI_1",
    },
    {
      label: "Mutual inductance",
      tex: "M=\\frac{N_2\\Phi_{21}}{I_1}",
    },
  ]}
/>

### Derivation 2: Induced emf

Use Faraday's law on the flux linkage in the second circuit.

<PhysicsDerivation
  items={[
    {
      label: "Faraday's law",
      tex: "\\mathcal E_2=-\\frac{d}{dt}(N_2\\Phi_{21})",
    },
    {
      label: "Linear coupling",
      tex: "\\mathcal E_2=-M\\frac{dI_1}{dt}",
    },
    {
      label: "Reciprocity",
      tex: "M_{12}=M_{21}=M",
    },
  ]}
/>

### Derivation 3: Coupling limit

Not all flux from one coil must link the other. The coupling coefficient measures this.

<PhysicsDerivation
  items={[
    {
      label: "Coupling form",
      tex: "M=k\\sqrt{L_1L_2}",
    },
    {
      label: "Allowed range",
      tex: "0\\le k\\le1",
    },
  ]}
/>

## Rules

<Equation label="Mutual inductance" tex="\displaystyle M=\frac{N_2\Phi_{21}}{I_1}" />

<Equation label="Induced emf" tex="\displaystyle \mathcal E_2=-M\frac{dI_1}{dt}" />

<Equation label="Reciprocity" tex="M_{12}=M_{21}" />

<Equation label="Coupling coefficient" tex="\displaystyle M=k\sqrt{L_1L_2}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two coils have \\(M=0.20\\,\\mathrm{H}\\). The current in coil 1 changes at \\(5.0\\,\\mathrm{A\\,s^{-1}}\\). Find \\(|\\mathcal E_2|\\).",
      answer: "\\[|\\mathcal E_2|=M\\left|\\frac{dI_1}{dt}\\right|=(0.20)(5.0)=1.0\\,\\mathrm{V}\\]",
    },
    {
      title: "Example 2",
      question: "Coils have \\(L_1=4.0\\,\\mathrm{H}\\), \\(L_2=9.0\\,\\mathrm{H}\\), and \\(k=0.50\\). Find \\(M\\).",
      answer: "\\[M=k\\sqrt{L_1L_2}=0.50\\sqrt{(4.0)(9.0)}=3.0\\,\\mathrm{H}\\]",
    },
  ]}
/>

## Checks

- Mutual inductance is geometric and material-dependent in a linear system.
- Constant current produces no induced emf in the other circuit.
- The minus sign gives the Lenz-law direction, not the magnitude.`;
