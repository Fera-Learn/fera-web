# Level 2 Physics B Thermodynamics Content Specification

## Goal

Create and integrate learner-facing content for all 92 topics in the Level 2 Physics B Thermodynamics module, using the approved Level 2 physics presentation and quality standard.

## Scope

Implement 92 pages across fourteen existing sections:

- Thermodynamic Foundations: 8 topics
- Mathematical Methods for Thermodynamics: 5 topics
- First Law and Gas Processes: 9 topics
- Heat Engines and the Carnot Cycle: 5 topics
- Second Law and Entropy: 11 topics
- Real Engine Cycles: 4 topics
- Thermodynamic Potentials and Available Work: 8 topics
- Maxwell Relations and Response Functions: 7 topics
- Phase Equilibria and Transitions: 7 topics
- Generalised Thermodynamic Systems: 4 topics
- Real Gases and Low-Temperature Cooling: 5 topics
- Third Law and Absolute Zero: 5 topics
- Statistical Foundations: 5 topics
- Classical and Quantum Statistics: 9 topics

Extend the existing `level2PhysicsBTopicBodies` registry so all 174 Physics B topics resolve to substantive bodies.

## Source Policy

Authoritative local sources:

- `resources/physics-2b/thermodynamics/Lecture1.pdf`
- `resources/physics-2b/thermodynamics/Lecture2.pdf`
- `resources/physics-2b/thermodynamics/Lecture3.pdf`
- `resources/physics-2b/thermodynamics/Lecture4.pdf`
- `resources/physics-2b/thermodynamics/Lecture5(1).pdf`
- `resources/physics-2b/thermodynamics/Lecture6(1).pdf`
- `resources/physics-2b/thermodynamics/Lecture7.pdf`
- `resources/physics-2b/thermodynamics/Lecture8(1).pdf`
- `resources/physics-2b/thermodynamics/Lecture9.pdf`
- `resources/physics-2b/thermodynamics/Lecture10.pdf`
- `resources/physics-2b/thermodynamics/Lecture11.pdf`
- `resources/physics-2b/thermodynamics/Lectures12-13.pdf`

`Lectures12-13 (1).pdf` is a byte-identical duplicate and is not a separate source.

Rules:

- Treat the local lecturer PDFs as authoritative for scope, ordering, intended depth, and named applications.
- Paraphrase source material rather than copying it verbatim.
- Correct documented typographical, dimensional, sign, normalization, and terminology errors rather than reproducing them.
- Use established physics and the existing Academy thermal corpus to clarify thin or ambiguous slide material without broadening a topic into a textbook survey.
- Preserve exact `structure.ts` titles even where the lesson text uses a more standard term, such as the Kelvin-Planck statement.
- Keep every page self-contained while avoiding unnecessary duplication between overlapping topics.

## Source Mapping

- Lecture 1: Thermodynamic Foundations
- Lecture 2: Mathematical Methods for Thermodynamics
- Lecture 3 and the start of Lecture 4: First Law and Gas Processes
- Lecture 4: Heat Engines and the Carnot Cycle
- Lectures 5-6: Second Law and Entropy
- Lecture 6: Real Engine Cycles
- Lecture 7: Thermodynamic Potentials and Available Work
- Lecture 8: Maxwell Relations and Response Functions
- Lecture 9: Phase Equilibria and Transitions
- Lecture 10: Generalised Thermodynamic Systems; Real Gases and Low-Temperature Cooling
- Lecture 11: Third Law and Absolute Zero; the first three Statistical Foundations topics
- Lectures 12-13: the final two Statistical Foundations topics; Classical and Quantum Statistics

## Page Requirements

Every page must:

- Export production MDX through `String.raw`.
- Use exactly `Principle`, `Notation`, `The Core Method`, `Worked Cases`, and `Examples` in that order.
- Use one compact `<Notation>` and exactly two `<PhysicsExamples>` components.
- Use doubled raw Markdown math delimiters with correct JavaScript-expression escaping.
- Alternate short connected prose with plain display equations.
- Avoid `<Equation>` and `<PhysicsDerivation>` boxes.
- Number main equations sequentially using right-aligned `\tag*{[n]}`, resetting on every page.
- Define all symbols in the Notation section and include SI units where applicable.
- Show central derivations without algebraic jumps.
- State system boundaries, constraints, sign conventions, approximation assumptions, and ensemble assumptions where they affect results.
- Include one quantitative or derivational worked case and one conceptual or applied example, both with explicit `Final result:` statements.
- Keep equation-number references inside example strings in explicit inline delimiters, such as `Equation \\([3]\\)`.
- Be self-contained and avoid source-facing or cross-page dependency language.
- Remain ASCII outside LaTeX.

## Core Thermodynamic Conventions

### Heat, Work, and Differentials

- Heat transferred into the system is positive.
- Work done by the system on the surroundings is positive.
- Use `\Delta U=Q-W` and, infinitesimally, `dU=\delta Q-\delta W`.
- Boundary work is `\delta W=p_{\mathrm{ext}}\,dV`; replace external pressure by system pressure only for quasistatic mechanical equilibrium.
- If work on the system is needed, define `\delta W_{\mathrm{on}}=-\delta W` explicitly.
- Use `dX` for exact infinitesimal state changes, `\Delta X` for finite state changes, and `\delta Q,\delta W` for inexact transfers.
- Do not write `dQ`, `dW`, `\Delta Q`, or `\Delta W`.

### Amount and Heat-Capacity Conventions

- Use `N` for particle number, `n` for amount in moles, and `N_{\mathrm A}` for Avogadro's constant.
- Use `p` for pressure, `V` for total volume, and `V_m` for molar volume.
- Use `C_{\mathrm{tot}}` for total heat capacity, lowercase `c` for mass-specific heat capacity, and `C_V,C_P` for molar heat capacities.
- Use `dU=nC_V\,dT` for an ideal gas with the adopted molar convention.

### Heat Engines

- Use positive magnitudes `Q_H` absorbed from the hot reservoir, `Q_C` rejected to the cold reservoir, and `W_{\mathrm{out}}>0`.
- Use `T_H>T_C`, `Q_H=W_{\mathrm{out}}+Q_C`, and `\eta=1-Q_C/Q_H`.
- Use `\mathrm{COP}_R=Q_C/W_{\mathrm{in}}` and `\mathrm{COP}_{\mathrm{HP}}=Q_H/W_{\mathrm{in}}`.
- Distinguish positive transfer magnitudes from signed system heats `+Q_H` and `-Q_C`.

### Entropy and the Second Law

- For a reversible path, use `dS=\delta Q_{\mathrm{rev}}/T`.
- For a real process, use `dS=\delta Q/T_b+dS_{\mathrm{gen}}` with `dS_{\mathrm{gen}}\ge0`.
- State `\Delta S\ge0` only for an isolated system; use `\Delta S_{\mathrm{univ}}\ge0` for system plus surroundings.
- Keep the Clausius inequality scoped to cycles.

### Potentials and Natural Variables

For variable composition, use:

\[
dU=T\,dS-p\,dV+\sum_i\mu_i\,dN_i,
\]

\[
dH=T\,dS+V\,dp+\sum_i\mu_i\,dN_i,
\]

\[
dF=-S\,dT-p\,dV+\sum_i\mu_i\,dN_i,
\]

\[
dG=-S\,dT+V\,dp+\sum_i\mu_i\,dN_i.
\]

- Use `F` for Helmholtz free energy and `\mathcal A` for availability.
- Derive Maxwell relations from these differentials rather than relying on a mnemonic.
- State the constraints for every minimum, maximum, and maximum-work criterion.

### Response Functions and Generalised Work

- Use `\alpha_p=V^{-1}(\partial V/\partial T)_p` and `\kappa_T=-V^{-1}(\partial V/\partial p)_T`.
- Reserve `\beta=1/(k_{\mathrm B}T)` for statistical mechanics.
- Express generalised work contributions to `dU` as `-p\,dV`, `+f\,dL`, `+\gamma\,dA`, `-\mathbf p_e\cdot d\mathbf E`, and `-\mathbf m\cdot d\mathbf B`.
- Do not mix the chosen magnetic convention with an alternative `\mu_0\mathbf H\cdot d\mathbf M` convention.

### Phases and Real Gases

- Use particle chemical potential `\mu_i` in joules for statistical mechanics and molar chemical potential `\mu_{i,m}` in joules per mole for phase-equilibrium pages.
- At phase coexistence, use equality of molar chemical potentials and conserve phase amounts explicitly.
- Use molar latent heat `L_m` and molar volume changes in the Level 2 Clapeyron equation; distinguish these from mass-specific latent heat.
- Write the van der Waals equation using molar volume consistently.
- Use `\mu_J=(\partial T/\partial V_m)_U` for the Joule coefficient and `\mu_{JT}=(\partial T/\partial p)_H` for the Joule-Thomson coefficient.
- State that throttling is isenthalpic and that cooling during pressure reduction requires `\mu_{JT}>0`.

### Third Law and Statistical Mechanics

- State the equilibrium, perfect-crystal, and unique-ground-state assumptions behind `S(0)=0`.
- Allow residual entropy for degeneracy or frozen disorder.
- Use `\Omega` for microcanonical multiplicity, `z_1` for a one-particle partition function, `Z_N` for a canonical `N`-particle partition function, and `\Xi` for a grand partition function.
- Include degeneracy when summing over energy levels.
- Distinguish whole-system probabilities from Bose-Einstein and Fermi-Dirac mean occupation numbers.
- State ensemble, distinguishability, and normalization assumptions explicitly.

## Topic Boundaries

- Keep general heat capacity, ideal-gas heat capacities, the general response-function relation, and low-temperature vanishing heat capacity distinct.
- Keep Joule free expansion, the Joule effect, and Joule-Thomson throttling distinct.
- Keep the fundamental relation for internal energy distinct from the broader Legendre-transform treatment of thermodynamic potentials.
- Keep free-energy criteria, equilibrium criteria, availability, and useful work distinct by their constraints.
- Keep thermodynamic entropy and statistical entropy distinct until assumptions establishing their connection are stated.
- Limit Real Engine Cycles to the source-covered air-standard assumptions, four-stroke engines, and Otto cycle.
- Do not imply that multiplicity arguments prove the ergodic hypothesis.
- Do not imply that every bosonic system undergoes Bose-Einstein condensation.

## Integration Requirements

- Add one `content.ts` file for each exact Thermodynamics topic under its existing section ID and title-derived slug.
- Extend the existing `apps/academy/src/lib/docs/level-2-physics-b/content.ts` map; do not create a second registry.
- Register exact titles in `structure.ts` module/section/topic order after the existing Condensed Matter and Optics entries.
- Leave `pages.ts`, routes, navigation, rendering components, and the course structure unchanged unless a verified integration defect requires a narrow correction.

## Out of Scope

- Questions, flashcards, exams, equation sheets, and diagrams.
- Changes to existing topic titles, module structure, routes, or navigation.
- New dependencies or content-rendering components.
- Rewriting the completed Condensed Matter and Optics lessons.
- Browser redesign or other visual changes.

## Verification

- Confirm exactly 92 new Thermodynamics content files and exact title/path/registry coverage.
- Confirm all 174 Physics B topic routes resolve to non-empty bodies.
- Audit headings, components, tags, delimiters, inline equation references, ASCII, notation coverage, final results, self-containment, and forbidden components/headings.
- Compile and server-render all 92 new lesson bodies through the production MDX path.
- Run scoped Prettier, question-registry validation, Academy lint, `git diff --check`, and the Academy production build.
- Perform independent grouped physics/source reviews and final cross-section convention/integration reviews.
- Fix all critical and important findings and rerun affected checks and build.

## Success Criteria

- All 92 Thermodynamics routes contain substantive registered lessons.
- Content follows the local lecture sources, corrected physical conventions, and approved Level 2 format.
- All 174 Physics B topics resolve to non-empty bodies without duplicate titles or paths.
- The Academy production build succeeds.
- Final review has no unresolved critical or important findings.
- Existing unrelated worktree changes remain intact.

## Decisions

- Implement the 92 lesson pages only.
- Use the local Lectures 1-13 PDFs as the authoritative scope.
- Preserve the established Academy convention that work done by the system is positive, translating the lecturer's opposite sign explicitly.
- Correct known source errors rather than reproducing them.
- Extend the existing Physics B content map and rendering path without new abstractions.

## Open Questions

None.
