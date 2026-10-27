# Level 2 Physics A Electromagnetism Content Specification

## Goal

Complete the remaining 42 learner-facing content pages in the Level 2 Physics A Electromagnetism module, using the established Maxwell and induction pages as the presentation and quality baseline.

## Scope

Create and register content for every topic in these seven sections:

- Electromagnetic Waves: 6 topics
- Relativity and Charge Conservation: 6 topics
- Conductors and Superconductors: 6 topics
- Dielectric and Magnetic Materials: 7 topics
- Interfaces and Fresnel Optics: 7 topics
- Electromagnetic Energy and Power: 4 topics
- Radiation from Oscillating Dipoles: 6 topics

The existing 12 pages in Maxwell's Equations and Static Fields and Electromagnetic Induction remain the approved baseline and are not rewritten unless integration reveals a concrete defect.

## Source Policy

- Treat `resources/physics-2a/electromagnetism/Live Summary of EM lecture notes - 25-26 20260305.pdf` as the authoritative source for topic scope, conventions, and derivations.
- Paraphrase the confidential lecture material rather than copying it verbatim.
- Supplement thin source sections carefully with established material already in the repository, especially Level 1 Physics pages and the Young and Freedman textbook PDF.
- Use supplements for learner scaffolding, prerequisite reminders, complete derivations, and worked examples, not to broaden topics beyond the Level 2 course scope.
- Do not invent source claims or present unsupported advanced results as if they came from the lecture notes.

## Content Requirements

Each page must:

- Export production MDX through `String.raw`.
- Use exactly these headings in this order: `Principle`, `Notation`, `The Core Method`, `Worked Cases`, `Examples`.
- Use `<Notation>` and two `<PhysicsExamples>` components.
- Keep notation compact while defining every symbol before use, with SI units where applicable.
- Use short connected prose alternating with plain display equations.
- Avoid `<Equation>` and `<PhysicsDerivation>` boxes.
- Number main equations sequentially with right-aligned `\tag*{[n]}`, resetting to `[1]` on every page.
- Show derivations without algebraic jumps and explain the physical reason for each transformation.
- Include orientation, sign, approximation, limiting-case, and convention warnings where they affect correctness.
- Include at least one fully worked quantitative or derivational case and one conceptual or applied example.
- Be self-contained and avoid references to previous or future pages as required knowledge.
- Use illustrations only where they materially improve understanding; no diagram is required by default.

## Section Coverage

### Electromagnetic Waves

Cover the vacuum wave equations and speed, transverse vector structure and polarisation, phase and group velocity, dispersion and wave packets, transmitting and detecting fields, and waveguide modes and cutoff.

### Relativity and Charge Conservation

Cover the incompatibility of Galilean transformations with Maxwell theory, special-relativity postulates, time dilation and length contraction, frame-dependent electric and magnetic effects at lecture-note depth, local charge conservation, and using symmetry to infer allowed spatial dependence.

### Conductors and Superconductors

Cover current density and conductivity, charge relaxation, the Drude response, waves in conductors, plasma-frequency and high-frequency behaviour, skin depth and low-frequency behaviour, and the London equations with the Meissner effect.

### Dielectric and Magnetic Materials

Cover induced and permanent electric dipoles, polarisation and bound charge, polarisation current, magnetisation and magnetic moments, bound volume and surface currents, material dispersion, and resonant complex permittivity.

### Interfaces and Fresnel Optics

Cover auxiliary fields, electric and magnetic boundary conditions, Snell's law, both linear-polarisation Fresnel cases using one explicit convention, and Brewster/critical-angle limits.

### Electromagnetic Energy and Power

Cover the Poynting vector, local and integral Poynting theorem, power reflection/transmission coefficients, and electromagnetic power entering a conductor.

### Radiation from Oscillating Dipoles

Cover scalar/vector potentials, Lorenz gauge and potential wave equations, the Hertzian-dipole setup, near/intermediate/far fields, radiation pattern, and total radiated power.

## Existing-System Reuse

Repository search found the existing systems needed for this work:

- `level2PhysicsATopicBodies` is the single content registry and will be extended rather than replaced.
- `createEditorialPage()` already attaches registered bodies to structured topic pages.
- `<Notation>` and `<PhysicsExamples>` are the established components; no parallel content components are needed.
- The existing Maxwell and induction directories establish file naming, folder placement, MDX escaping, equation formatting, and prose style.
- Relevant Level 1 pages can provide prerequisite scaffolding, but content will be rewritten for Level 2 rather than imported or duplicated mechanically.

No new hooks, services, utilities, route handlers, data models, or rendering systems are required.

## Out Of Scope

- New question-bank JSON, flashcards, or exams.
- Changes to the 54-topic Electromagnetism structure or topic titles.
- Quantum Mechanics content.
- New rendering components or design-system changes.
- Broad textbook expansions beyond the lecture scope.

## Verification

For every section:

- Confirm title-to-body registration matches `structure.ts` exactly.
- Check exact heading order, two example components, absence of forbidden boxes and headings, and sequential equation tags.
- Run Prettier and Academy lint.
- Review physics, numerical work, notation, units, source fidelity, pedagogy, and MDX/LaTeX correctness.

After all seven sections:

- Run the question-registry check.
- Run `git diff --check`.
- Run a full Academy production build.
- Perform a final cross-section review for duplicated coverage and convention consistency.

## Success Criteria

- All 42 currently empty Electromagnetism topics have substantive registered content.
- Every page renders through the existing Academy route without build or MDX failures.
- Each page satisfies the physics content and shared clarity, LaTeX, and pedagogy rubrics.
- A final review has no unresolved critical or important findings.
- Existing unrelated worktree changes remain intact.

## Decisions

- Build all 42 remaining pages.
- Use careful repository-source supplementation where the lecture notes are thin.
- Preserve the approved Maxwell/induction presentation rather than introducing a new content design.

## Open Questions

None.
