# Level 2 Physics A Quantum Mechanics Content Specification

## Goal

Create and register substantive learner-facing content for all 73 topics in the Level 2 Physics A Quantum Mechanics module, matching the approved quality and presentation of the completed Electromagnetism module.

## Scope

Create every topic body in these nine sections:

- Foundations of Quantum Mechanics: 8 topics
- Stationary States and Superposition: 9 topics
- One-Dimensional Quantum Systems: 8 topics
- Three-Dimensional Quantum Mechanics: 6 topics
- Orbital Angular Momentum: 8 topics
- The Hydrogen Atom: 8 topics
- Spin and Angular Momentum Addition: 8 topics
- Perturbation Theory and Fine Structure: 10 topics
- Quantum Theorems and Postulates: 8 topics

The existing 54 Electromagnetism pages remain unchanged unless integration reveals a concrete defect.

## Source Policy

- Treat `resources/physics-2a/quantum-mechanics/main.pdf` as the authoritative source for scope, notation, derivations, approximations, and course depth.
- Paraphrase source material rather than copying it verbatim.
- Supplement carefully with existing Level 1 Physics quantum content, repository mathematics pages, and `resources/content/advanced-physics/young-&-freedman-15th-edition.pdf` where prerequisite scaffolding or examples are thin.
- Do not broaden the course into unsupported advanced topics such as density-operator formalism, time-dependent perturbation theory, relativistic quantum mechanics, or full Clebsch-Gordan tables unless the primary source explicitly requires them.
- Preserve source caveats about survey-level or non-examinable material.

## Page Requirements

Every page must:

- Export production MDX through `String.raw`.
- Use exactly `Principle`, `Notation`, `The Core Method`, `Worked Cases`, and `Examples` in that order.
- Use one compact `<Notation>` block and exactly two `<PhysicsExamples>` components.
- Use mandatory doubled raw Markdown math delimiters while preserving JS-expression escaping.
- Alternate short connected prose with plain display equations.
- Avoid `<Equation>` and `<PhysicsDerivation>` boxes.
- Number main equations sequentially with right-aligned `\tag*{[n]}`, resetting on every page.
- Define every symbol before use and include SI units where applicable.
- Show central derivations without algebraic jumps, including normalization, operator action, boundary conditions, basis projection, and approximation steps.
- Distinguish state vectors, wavefunctions, operators, eigenvalues, expectation values, and measurement outcomes precisely.
- State domains, dimensions, normalization conventions, degeneracy assumptions, coordinate ranges, and phase conventions when they affect a result.
- Include one fully worked quantitative or derivational case and one conceptual or applied example, each with an explicit final result.
- Be self-contained without source-facing or previous-page references.

## Shared Quantum Conventions

- Use `\hbar` consistently and define it on every page where it appears.
- Use `\hat A` for operators, `a` for eigenvalues, and `\langle A\rangle` for expectation values unless a standard named operator requires another symbol.
- Use `\psi(x,t)` for position-space wavefunctions and ket notation `|\psi\rangle` in abstract-state contexts.
- State integration domains explicitly and use complex conjugation in all inner products.
- Normalize discrete probabilities so they sum to one and continuous probability densities so they integrate to one.
- Use the standard commutator `[\hat A,\hat B]=\hat A\hat B-\hat B\hat A`.
- Use one spherical-harmonic convention consistently across angular momentum and hydrogen pages.
- Keep reduced mass explicit for hydrogenic systems where required.
- State whether perturbation results are non-degenerate or degenerate before applying formulas.
- Distinguish intrinsic spin from orbital angular momentum and state basis ordering for spinors and coupled states.

## Section Coverage

### Foundations

Cover wave-particle duality, wavefunction meaning, time evolution, Born probability, normalization, operators, Hermitian observables, commutators, uncertainty, and Ehrenfest's theorem.

### Stationary States

Cover the time-independent equation, energy eigenstates, orthogonality/completeness, bra-ket notation, infinite-well quantization, superposition measurement probabilities, time evolution, transitions, and eigenstate expansions.

### One-Dimensional Systems

Cover parity in the centered well, finite-well matching, harmonic-oscillator differential and algebraic treatments, wavefunctions, energies, zero-point energy, commutator algebra, and compatible observables.

### Three Dimensions

Cover the three-dimensional equation, Cartesian separation, box states and degeneracy, spherical coordinates/Laplacian, and spherical separation.

### Orbital Angular Momentum

Cover operators, commutators, simultaneous measurement of total angular momentum and one component, rotational symmetry, spherical-coordinate forms, eigenfunctions, spherical harmonics, and quantum numbers.

### Hydrogen

Cover radial reduction, effective potential, wavefunctions, energy degeneracy, radial probability, ground state, transitions/spectral series, and reduced-mass scaling for hydrogenic ions and positronium.

### Spin And Addition

Cover general angular-momentum algebra, ladder operators, intrinsic spin, magnetic moments, Stern-Gerlach measurement, spinors/Pauli matrices, angular-momentum addition, and total electronic angular momentum.

### Perturbation And Fine Structure

Cover non-degenerate and degenerate first-order theory, delta perturbations, good bases, spin-orbit coupling, relativistic and Darwin corrections, hydrogen fine structure, selection rules, hyperfine effects, and multi-electron context at source depth.

### Theorems And Postulates

Cover marginal probabilities, time-energy uncertainty, expectation-value dynamics, the virial theorem, correspondence, formal postulates, measurement/collapse, interpretations, and source-level decoherence.

## Parallel Execution

- Use one authoring subagent per quantum section and run the nine agents concurrently.
- Each authoring agent owns only its section directory and must not edit the shared registry.
- Run independent review agents concurrently after authoring, grouped to avoid overlapping edits.
- Integrate all 73 exact title mappings only after section files pass structural checks.
- Resolve convention conflicts centrally before final verification.

## Existing-System Reuse

- Extend `level2PhysicsATopicBodies`; do not create another registry.
- Reuse the existing `String.raw` file-per-topic structure, `<Notation>`, and `<PhysicsExamples>` components.
- Let the existing `createEditorialPage()` and route structure render the registered bodies.
- Reuse Level 1 content only as scaffolding; do not import or mechanically duplicate lesson bodies.
- Add no new dependencies, routes, hooks, components, data models, or question systems.

## Out Of Scope

- New question banks, flashcards, exams, equation sheets, or diagrams.
- Changes to section/topic titles or route structure.
- Rewriting Electromagnetism.
- Browser design changes or new content components.

## Verification

- Confirm all 73 exact titles map to non-empty bodies and all 127 Level 2 Physics A topics resolve after integration.
- Audit exact heading order, component count, sequential tags, doubled delimiters, ASCII, self-containment, and forbidden components/headings.
- Run scoped Prettier, Academy question-registry check, Academy lint, and `git diff --check`.
- Compile all pages through the Academy production build.
- Perform independent section physics review and a final cross-section convention review.
- Fix all critical and important findings and rerun affected checks and the production build.

## Success Criteria

- All 73 Quantum Mechanics routes contain substantive registered lessons.
- Content follows the primary source and approved Level 2 presentation.
- Production build succeeds with every page rendered.
- Final review has no unresolved critical or important findings.
- Existing unrelated worktree changes remain intact.

## Decisions

- Implement all 73 pages.
- Author the nine sections concurrently with subagents.
- Use the primary quantum lecture PDF as authoritative and supplement only for careful scaffolding.

## Open Questions

None.
