export const content = String.raw`## Principle

In Joule free expansion, a gas expands into an evacuated region inside an isolated rigid container. The gas does no boundary work because the external pressure is zero, and no heat enters because the outer boundary is adiabatic. Internal energy therefore remains constant, even though the process is irreversible.

## Notation

<Notation
  items={[
    { symbol: "p,p_{\\mathrm{ext}}", meaning: "system pressure and external pressure at the moving gas boundary", unit: "Pa, Pa" },
    { symbol: "p_i,p_f", meaning: "initial and final equilibrium gas pressures", unit: "Pa" },
    { symbol: "V_i,V_f", meaning: "initial and final gas volumes", unit: "m^{3}" },
    { symbol: "T_i,T_f", meaning: "initial and final equilibrium temperatures", unit: "K" },
    { symbol: "\\Delta T=T_f-T_i", meaning: "finite temperature change", unit: "K" },
    { symbol: "U,\\Delta U", meaning: "internal energy of the gas and its finite change", unit: "J, J" },
    { symbol: "Q,W", meaning: "finite heat into the gas and work done by the gas", unit: "J" },
    { symbol: "n", meaning: "amount of gas", unit: "mol" },
    { symbol: "C_V", meaning: "molar heat capacity at constant volume", unit: "J mol^{-1} K^{-1}" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
  ]}
/>

## The Core Method

The second chamber begins evacuated. Removing the partition changes the gas volume, but no opposing pressure is displaced and the rigid adiabatic container transfers neither boundary work nor heat.

<PhysicsDiagram slug="joule-free-expansion-apparatus" />

The gas expands against vacuum, so

\\[
p_{\mathrm{ext}}=0,
\qquad
W=\int_{V_i}^{V_f}p_{\mathrm{ext}}\,dV=0.
\tag*{[1]}
\\]

The rigid outer container is thermally insulated, giving

\\[
Q=0.
\tag*{[2]}
\\]

The first law then fixes the internal-energy change:

\\[
\Delta U=Q-W=0.
\tag*{[3]}
\\]

For an ideal gas, internal energy depends only on temperature. Hence

\\[
\Delta U=nC_V(T_f-T_i)=0
\quad\Longrightarrow\quad
T_f=T_i.
\tag*{[4]}
\\]

Applying the ideal-gas equation to the initial and final equilibrium states gives

\\[
p_iV_i=nRT_i,
\qquad
p_fV_f=nRT_f,
\qquad
p_f=p_i\frac{V_i}{V_f}.
\tag*{[5]}
\\]

The intermediate gas is not in mechanical equilibrium, so a single system pressure \\(p\\) cannot be inserted into \\(p\,dV\\) during the expansion. For a real gas, \\(U\\) can depend on both temperature and volume; equation \\([3]\\) then does not imply \\(T_f=T_i\\), and the sign of the temperature change is not universally fixed by the first law alone.

<PhysicsExamples collapsible
  items={[
    {
      title: "Ideal gas doubling its volume",
      question: "An ideal gas initially at \\(p_i=240\\,\\mathrm{kPa}\\) occupies one chamber of volume \\(V_i\\). A valve opens to an equal evacuated chamber in an insulated rigid vessel. Find the final pressure and temperature change.",
      answer: "The final available volume is \\(V_f=2V_i\\). Equation \\([4]\\) gives \\(T_f=T_i\\), and equation \\([5]\\) gives \\[p_f=p_i\\frac{V_i}{2V_i}=\\frac{240\\,\\mathrm{kPa}}{2}=120\\,\\mathrm{kPa}.\\] **Final result:** \\(p_f=120\\,\\mathrm{kPa}\\) and \\(\\Delta T=0\\) for the ideal gas.",
    },
    {
      title: "What can be concluded for a real gas?",
      question: "A real gas undergoes Joule free expansion in an insulated rigid vessel. Does \\(Q=W=0\\) prove that its temperature is unchanged?",
      answer: "Equation \\([3]\\) proves only that \\(\\Delta U=0\\). Unlike an ideal gas, a real gas may exchange energy between intermolecular potential energy and molecular kinetic energy as its volume changes. Its temperature may therefore change while total internal energy remains fixed. **Final result:** no; \\(\\Delta U=0\\) is certain, but \\(\\Delta T=0\\) is not guaranteed for a real gas.",
    },
  ]}
/>
`;
