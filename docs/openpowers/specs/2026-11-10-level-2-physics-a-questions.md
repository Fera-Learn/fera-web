# Level 2 Physics A Questions Specification

## Goal

Create a complete practice bank for every Level 2 - Physics A topic page. The course contains 127 topics across 18 sections, so the bank will contain exactly 20 questions per topic and 2,540 questions in total.

## Scope

This work will:

- Add one question JSON file for each topic in `level-2-physics-a/structure.ts`.
- Add exactly 20 questions to every topic.
- Include calculations, symbolic derivations, proofs, and concise conceptual reasoning.
- Provide complete worked answers with the sections `Model:`, `Working:`, `Final answer:`, and `Check:`.
- Include SI units for all dimensional numerical data and final numerical answers.
- Generate the existing Physics A question registry.
- Add a structure-derived course validator.

This work will not modify Physics A content pages, exams, diagrams, routes, APIs, components, or shared rendering infrastructure.

## Decisions

- Use 20 questions per topic: 2,540 questions across 127 topics.
- Use the full physics mix rather than calculation-only questions.
- Keep conceptual answers concise and evidence-based rather than essay-style.
- Use the established 20-question rating sequence: two each from `*` through `****`, three `****+`, and three `*****`.
- Treat this specification and its implementation plan as approved in advance, as requested by the user.

## Source Boundary

The authoritative scope, notation, assumptions, equations, and physical models are the 127 authored topic pages under:

`apps/academy/src/lib/docs/level-2-physics-a/`

Questions must remain within the corresponding topic page and its prerequisite material. No dedicated Physics A source bundle was found under `resources/`, so authored pages are the primary source.

## Question Composition

Each topic will use this exact rating order:

| Positions | Rating | Count | Expected burden |
| --- | --- | ---: | --- |
| 1–2 | `*` | 2 | Direct principle, definition, or one-step substitution |
| 3–4 | `*+` | 2 | Direct task with a unit, sign, convention, or component choice |
| 5–6 | `**` | 2 | Routine two-step calculation or argument |
| 7–8 | `**+` | 2 | Routine method with one physical choice |
| 9–10 | `***` | 2 | Standard problem requiring model selection or interpretation |
| 11–12 | `***+` | 2 | Linked reasoning with a mathematical or physical check |
| 13–14 | `****` | 2 | Non-routine synthesis of at least two ideas |
| 15–17 | `****+` | 3 | Parameter regime, case split, approximation, or constraint analysis |
| 18–20 | `*****` | 3 | Derivation, proof, or multi-stage physical reasoning |

Difficulty must reflect reasoning burden rather than arithmetic length.

## Prompt Standard

Every prompt must:

- Define all symbols needed to solve the problem.
- Give units for every dimensional numerical value.
- Identify or clearly imply the physical model.
- State assumptions and applicability conditions where relevant.
- Have one unambiguous interpretation.
- Ask for a concrete output: calculation, derivation, proof, comparison, prediction, verification, or concise physical conclusion.

Conceptual prompts may use `explain`, `justify`, `interpret`, or `compare` where the topic requires physical reasoning. They must demand a specific principle, equation, prediction, or piece of evidence and must not invite open-ended essays.

## Answer Standard

Every answer must contain:

1. `Model:` — the physical model, law, postulate, or approximation and its applicability.
2. `Working:` — complete equations or a stepwise physical argument.
3. `Final answer:` — the result or conclusion, with units where applicable.
4. `Check:` — dimensional, normalization, limiting, sign, conservation, scale, or consistency verification.

Numerical answers must show substitutions and unit conversions. Quantum probabilities must be normalized and bounded. Electromagnetic vector directions and sign conventions must be checked. Relativistic results must remain in physically allowed regimes.

## Section Coverage

### Electromagnetism — 54 topics / 1,080 questions

- Maxwell's Equations and Static Fields: 6 topics.
- Electromagnetic Induction: 6 topics.
- Electromagnetic Waves: 6 topics.
- Relativity and Charge Conservation: 6 topics.
- Conductors and Superconductors: 6 topics.
- Dielectric and Magnetic Materials: 7 topics.
- Interfaces and Fresnel Optics: 7 topics.
- Electromagnetic Energy and Power: 4 topics.
- Radiation from Oscillating Dipoles: 6 topics.

Coverage will include field calculations, integral and differential laws, induction signs, wave solutions, relativistic transformations, material response, boundary conditions, Fresnel coefficients, energy conservation, and dipole radiation regimes.

### Quantum Mechanics — 73 topics / 1,460 questions

- Foundations of Quantum Mechanics: 8 topics.
- Stationary States and Superposition: 9 topics.
- One-Dimensional Quantum Systems: 8 topics.
- Three-Dimensional Quantum Mechanics: 6 topics.
- Orbital Angular Momentum: 8 topics.
- The Hydrogen Atom: 8 topics.
- Spin and Angular Momentum Addition: 8 topics.
- Perturbation Theory and Fine Structure: 10 topics.
- Quantum Theorems and Postulates: 8 topics.

Coverage will include normalization, expectation values, operator algebra, uncertainty, eigenstates, wells and oscillators, separation of variables, angular momentum, hydrogenic states, spinors and addition, perturbative corrections, selection rules, measurement, and theorem-level derivations.

## Files and Metadata

Question files will live at:

`apps/academy/src/lib/docs/level-2-physics-a/questions/[section-id]/[topic-id].json`

Each file will contain:

- `schemaVersion: 1`
- `courseId: "level-2-physics-a"`
- Exact structure-derived section, topic id, and title values
- `paperTags: ["physics-a", "[section-id]"]`
- Exactly 20 questions

Question IDs will use:

`physics-a-[section-id]-[topic-id]-[01-20]`

## Existing-System Reuse

Repository review found that:

- The generalized question registry already includes Level 2 Physics A.
- `questions.generated.ts` already exists but is empty.
- The shared question bank and API already import the Physics A registry.
- Physics B supplies useful answer-section and physics-validation conventions.

The implementation will extend these systems and will not add a parallel API, renderer, schema, or permanent question generator.

## Validation

The Physics A validator will derive expectations from `structure.ts` and enforce:

- Exactly 127 files and 2,540 questions.
- Exact paths, metadata, titles, IDs, and tags.
- The fixed rating sequence.
- Required answer sections.
- Units for dimensional numerical values and answers.
- Defined variables and model-bearing prompts.
- No marks, duplicate IDs, exact duplicate prompts, or exact duplicate answers.
- JSON newline and LaTeX safety.
- Balanced delimiters and braces; no raw Unicode maths symbols.
- Exact registry agreement.

## Verification

- Validate each section while authoring.
- Recalculate numerical and symbolic results section by section.
- Audit physical assumptions, units, signs, vector directions, normalization, limiting cases, and approximation regimes.
- Generate and check the registry.
- Run Physics A content validation, generalized question checks, lint, build, and `git diff --check`.
- Review against the Physics Question, Clarity, and LaTeX rubrics.

## Success Criteria

- All 127 topics have exactly 20 questions.
- All 2,540 questions are registered and loadable.
- Every answer is complete and contains the four required sections.
- Numerical work has correct units and physical checks.
- Conceptual questions require focused physics reasoning, not essays.
- Difficulty ratings match actual reasoning burden.
- All validators, registry checks, lint, build, and review gates pass.

## Open Questions

None.
