# Level 2 Physics B Thermodynamics Content Plan

## Execution Model

Run eight section-group authoring agents concurrently. Each owner edits only its assigned Thermodynamics section directories and does not edit the shared Physics B registry, page construction, structure, questions, exams, or rendering components.

After authoring, run four independent grouped reviews concurrently, route findings back to the original owners, and re-review all critical and important corrections. Integrate the 92 exact title mappings only after section-local review passes.

## Shared Author Instructions

Every author must:

- Read the approved specification, assigned source PDFs, `.agents/courses/physics/content.md`, and the physics content/shared pedagogy/clarity/LaTeX rubrics.
- Follow the existing Level 2 Physics B `String.raw` content pattern.
- Create one title-derived topic directory and `content.ts` file per assigned topic.
- Use the exact five required headings, one `<Notation>`, and exactly two `<PhysicsExamples>`.
- Use sequential `\tag*{[n]}` equations from `[1]` on each page.
- Put explicit equation-number references inside example strings in inline math delimiters.
- Include exactly two explicit `Final result:` statements per page.
- Keep all symbols and units defined, all derivations complete, and all assumptions and constraints explicit.
- Preserve the specification's sign, amount, potential, response-function, phase, magnetic-work, and statistical-normalization conventions.
- Correct documented source errors and keep supplementation narrow.
- Run targeted Prettier, MDX compilation/server rendering, structural checks, notation checks, ASCII checks, and equation-reference checks over every owned file.

## Parallel Authoring

### Agent 1: Foundations and Thermodynamic Mathematics

Create 13 pages under:

- `apps/academy/src/lib/docs/level-2-physics-b/thermodynamic-foundations/`
- `apps/academy/src/lib/docs/level-2-physics-b/thermodynamic-mathematics/`

Primary sources: `Lecture1.pdf` and `Lecture2.pdf`.

Focus: thermodynamic limit, variables and boundaries, ideal gas, equilibrium and paths, heat capacities, zeroth law, constrained derivatives, exact/inexact differentials, and path integrals.

### Agent 2: First Law and Gas Processes

Create 9 pages under:

`apps/academy/src/lib/docs/level-2-physics-b/first-law-and-gas-processes/`

Primary sources: `Lecture3.pdf` and the opening of `Lecture4.pdf`.

Focus: internal energy, heat/work signs, external versus system pressure, first law, molar ideal-gas heat capacities, Mayer relation, free expansion, reversible versus irreversible processes, and isothermal/adiabatic results.

### Agent 3: Engines and Real Cycles

Create 9 pages under:

- `apps/academy/src/lib/docs/level-2-physics-b/heat-engines-and-the-carnot-cycle/`
- `apps/academy/src/lib/docs/level-2-physics-b/real-engine-cycles/`

Primary sources: `Lecture4.pdf` and the latter part of `Lecture6(1).pdf`.

Focus: signed transfers versus positive reservoir magnitudes, engines/refrigerators/heat pumps, efficiency and COP, Carnot stages and temperature scale, real losses, air-standard assumptions, four-stroke engines, and the Otto cycle.

### Agent 4: Second Law and Entropy

Create 11 pages under:

`apps/academy/src/lib/docs/level-2-physics-b/second-law-and-entropy/`

Primary sources: `Lecture5(1).pdf` and the first part of `Lecture6(1).pdf`.

Focus: Clausius and Kelvin-Planck statements, equivalence arguments, Carnot theorem, cycle-scoped Clausius inequality, entropy as a state function, entropy generation, fundamental relation, temperature-entropy diagrams, free expansion, and Maxwell's demon.

### Agent 5: Potentials and Thermodynamic Derivatives

Create 15 pages under:

- `apps/academy/src/lib/docs/level-2-physics-b/thermodynamic-potentials-and-available-work/`
- `apps/academy/src/lib/docs/level-2-physics-b/maxwell-relations-and-response-functions/`

Primary sources: `Lecture7.pdf` and `Lecture8(1).pdf`.

Focus: Legendre transforms, natural variables, enthalpy, Helmholtz and Gibbs energies, constrained equilibrium criteria, availability, useful work, susceptibilities, correctly signed Maxwell relations, TdS equations, heat-capacity identities, and internal pressure.

### Agent 6: Phase Equilibria and Real Fluids

Create 12 pages under:

- `apps/academy/src/lib/docs/level-2-physics-b/phase-equilibria-and-transitions/`
- `apps/academy/src/lib/docs/level-2-physics-b/real-gases-and-low-temperature-cooling/`

Primary sources: `Lecture9.pdf` and the real-fluid/cooling part of `Lecture10.pdf`.

Focus: phase diagrams, phase-boundary geometry, molar chemical potential and coexistence, phase amount conservation, Clapeyron relation, transition order, metastability, van der Waals gases, Joule versus Joule-Thomson effects, throttling, inversion, liquefaction, evaporative cooling, and dilution refrigeration.

### Agent 7: Generalised Systems and the Third Law

Create 9 pages under:

- `apps/academy/src/lib/docs/level-2-physics-b/generalised-thermodynamic-systems/`
- `apps/academy/src/lib/docs/level-2-physics-b/third-law-and-absolute-zero/`

Primary sources: the generalised-work part of `Lecture10.pdf` and `Lecture11.pdf`.

Focus: generalised force-coordinate pairs, elastic rods, the selected magnetic-work convention, paramagnets, magnetocaloric cooling, Nernst/Planck statements and assumptions, residual entropy, low-temperature response, and unattainability.

### Agent 8: Statistical Foundations and Quantum Statistics

Create 14 pages under:

- `apps/academy/src/lib/docs/level-2-physics-b/statistical-foundations/`
- `apps/academy/src/lib/docs/level-2-physics-b/classical-and-quantum-statistics/`

Primary sources: the statistical part of `Lecture11.pdf` and `Lectures12-13.pdf`.

Focus: microstates/macrostates/multiplicity, careful ergodic-hypothesis scope, statistical temperature, Boltzmann and Gibbs entropy, canonical probabilities, degeneracy, `z_1`/`Z_N`/`\Xi`, thermodynamic functions, Schottky anomaly, finite-level systems, exchange symmetry, Bose-Einstein/Fermi-Dirac occupations, condensation conditions, and the classical limit.

## Parallel Review

After all eight authors finish, run four independent review agents concurrently:

1. Foundations, thermodynamic mathematics, first law, and gas processes.
2. Heat engines, real cycles, second law, and entropy.
3. Potentials, Maxwell relations, phase equilibria, real fluids, generalised systems, and the third law.
4. Statistical foundations and quantum statistics, plus a global page-format and notation audit over all 92 files.

Review against the assigned PDFs, approved specification, existing Level 1 thermal conventions, and all relevant rubrics. Report findings by severity with exact paths and lines. Send findings to original owners in parallel and re-review critical and important corrections.

## Integration

Update:

`apps/academy/src/lib/docs/level-2-physics-b/content.ts`

The integration pass will:

- Import all 92 Thermodynamics topic bodies.
- Append exact title mappings after the existing 82 entries, preserving full `structure.ts` order.
- Keep the single existing `level2PhysicsBTopicBodies` map.
- Avoid changes to `pages.ts`, because its existing title lookup already handles all Physics B topics.

## Global Audit

Audit the 92 new pages for:

- Exact file, title, path, import, and registry coverage with no duplicates or extras.
- Exact heading order.
- One Notation and exactly two PhysicsExamples components.
- Exactly two explicit final results.
- Sequential equation tags starting at `[1]`.
- Valid raw delimiters, JavaScript-string escaping, and inline equation references.
- No Equation/PhysicsDerivation components or forbidden headings.
- No source-facing or cross-page dependency language.
- ASCII source outside LaTeX.
- Complete notation and units.
- Consistent heat/work signs, differential notation, molar/specific distinctions, and thermodynamic constraints.
- Correct engine, entropy, potential, Maxwell, magnetic-work, phase, real-gas, third-law, and ensemble conventions.

Confirm separately that:

- All 92 new Thermodynamics topics resolve to non-empty bodies.
- All 174 Physics B topics resolve to non-empty bodies.
- Existing Condensed Matter and Optics mappings and bodies remain unchanged.

## Final Verification

Run:

- Scoped Prettier over all new Thermodynamics content and the Physics B registry.
- `pnpm --filter academy check:questions`
- `pnpm --filter academy lint`
- `git diff --check`
- `pnpm --filter academy build`

Then run two final reviews concurrently:

- Cross-section thermodynamic physics and convention consistency.
- Registry, page coverage, source scope, and rubric compliance.

Fix all critical and important findings, rerun affected audits and checks, and rerun the production build.

## Risks and Controls

- **Lecturer work-sign convention differs from Academy:** lock the Academy convention in the specification and require every first-law/engine reviewer to verify translation.
- **Documented slide errors:** use the source-error list as a review checklist and derive signs from definitions rather than copying isolated formulas.
- **Overlapping topics:** assign conceptually linked sections to the same owner and enforce narrow topic boundaries.
- **Molar/specific ambiguity:** require every capacity, latent heat, chemical potential, volume, and entropy quantity to declare its basis and units.
- **Magnetic convention ambiguity:** use only the specified `-\mathbf m\cdot d\mathbf B` contribution and state it explicitly.
- **Statistical normalization drift:** distinguish one-particle, canonical system, and grand partition functions throughout.
- **Registry conflicts:** section owners never edit the shared registry; one integration pass handles all mappings.
- **Parallel notation drift:** grouped reviews and final cross-section review reconcile shared symbols and constraints.
- **Rendering failures:** every owner compiles and server-renders all owned content before integration.

## Expected File Impact

- 92 new topic `content.ts` files across fourteen existing section IDs.
- One extension to the existing Physics B content registry.
- Approved specification and plan files.
- No new dependencies, components, questions, exams, equation sheets, diagrams, routes, or structure changes.
