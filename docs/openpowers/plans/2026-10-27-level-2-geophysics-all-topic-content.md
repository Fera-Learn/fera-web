# Level 2 Geophysics All Topic Content Plan

## 1. Generalise Full-Course Content Validation

Update `apps/academy/scripts/validate-level-2-geophysics-content.mjs` before adding lesson files:

- Accept optional section ids so each source-aligned batch can be checked independently during implementation.
- Discover topic content only beneath section directories; continue excluding the course registry.
- Derive expected titles and topic paths from `structure.ts` rather than maintaining a second hard-coded topic list.
- For selected sections, require every expected content file, registry import, and exact map key.
- With no section arguments, require all 58 topic files and all 58 registry entries.
- Retain checks for `String.raw`, exact field-learning heading order, forbidden headings, no `<Notation>`, one collapsible `<PhysicsExamples>`, exactly two example items, target-context math escaping, prepared MDX, and GFM compilation.
- Reject empty bodies, duplicate map keys, duplicate imports, unknown registry titles, and files that do not correspond to the approved structure.

Run the default validator once before authoring to confirm that it fails because 57 pages are still missing. This establishes the new completeness gate before implementation.

## 2. Author Module 1 From Lecture 1

Create the remaining 11 topic bodies under:

- `soil-systems-and-origins/`
- `soil-profiles-and-formation/`
- `soil-survey-and-classification/`

Use Lecture 1 slides 16–61 according to the approved source map. Emphasise:

- Soil as minerals, organic matter, water, air, and pore space.
- Transported, residual, and mixed soil origins.
- Physical weathering versus chemical alteration and dissolved products.
- R, C, A, E, B, and O horizon development without assuming one universal profile.
- Eluviation as removal and illuviation as accumulation.
- Interacting formation controls: parent material, climate, organisms, relief, time, and humans.
- Profile observations versus mapped classifications.
- Soil type, series, association, group, order, and World Reference Base as different levels of classification.
- The Cockle Park Dunkeswick Stagnosol as an evidence-bounded drainage case.

Add all 11 imports and title mappings to `level-2-geophysics/content.ts`. Run the validator for the three Module 1 sections, then review every claim against Lecture 1.

## 3. Author Module 2 From Lecture 2

Create 11 topic bodies under:

- `soil-texture-and-mineralogy/`
- `soil-structure-and-aggregation/`
- `pore-space-and-physical-measurements/`

Use Lecture 2 slides 9–49. Preserve the deck's exact particle-size boundaries, aggregate controls, pore threshold, typical bulk-density and porosity ranges, and compaction case values. Make these distinctions explicit:

- Particle size versus mineral identity.
- Texture versus structure.
- Total porosity versus pore size and connectivity.
- Particle density versus dry bulk density.
- Vertical horizon contrasts versus lateral environmental interfaces.

Teach the texture triangle through its three percentages, sum-to-100 check, axis-following method, and source classes in prose and worked examples; do not invent a replacement classification table outside the supplied triangle.

Register all 11 bodies, run the validator for the three Module 2 sections, and review against Lecture 2.

## 4. Author Module 3 From Lecture 3

Create 16 topic bodies under:

- `soil-water-storage-and-measurement/`
- `unsaturated-flow-and-plant-water/`
- `saturated-flow-and-groundwater/`

Use Lecture 3 slides 9–59. Preserve the supplied definitions, equations, sign conventions, units, numerical cases, and scale comparisons for:

- Vadose zone, capillary fringe, water table, and saturated zone.
- Point probes, borehole pressure transducers, core methods, and larger geophysical or remote footprints.
- Water mass and volume, bulk density, gravimetric and volumetric water content, porosity, and saturation.
- Cohesion, adhesion, surface tension, capillarity, matric potential, and total water potential.
- Field capacity, permanent wilting point, available water, evapotranspiration, and root uptake.
- Infiltration capacity, infiltration-excess runoff, and preferential flow.
- Porosity, permeability, saturated hydraulic conductivity, Darcy discharge and gradient.
- Darcy flux, effective porosity, seepage velocity, and groundwater travel time.
- Aquifers, perched water tables, regional water tables, seasonal storage, and recharge.

Use the lecture's River Browney, Moor House peat, Little High Wood, fine-sand travel-time, Stagnosol, Durham, and seasonal-recharge cases where they support the exact page objective. Do not reproduce practical-session instructions.

Register all 16 bodies, run the validator for the three Module 3 sections, and perform a separate equation-and-units audit against Lecture 3.

## 5. Author Module 4 From Lecture 4

Create 19 topic bodies under:

- `dissolved-solutes-and-water-measurements/`
- `clay-humus-and-surface-charge/`
- `ion-exchange-and-ground-conductivity/`

Use Lecture 4 slides 5–43. Preserve source chemistry, charge, units, conversions, and interpretive limits for:

- Major ions and natural or human solute sources.
- Congruent carbonate dissolution versus incongruent silicate weathering.
- Ionic charge transport, conductivity, conductance, cell constant, resistivity, and ion mobility.
- Temperature correction, TDS conversion, salinity assumptions, pH, and probe limitations.
- Colloid surface area and charge.
- Kaolinite, swelling 2:1 clays, non-swelling 2:1 clays, and humus.
- Permanent versus pH-dependent charge, CEC, and AEC.
- Weathering trends in colloid charge.
- Exchange reversibility, charge equivalence, selectivity, leaching, base saturation, acidity, and sodicity.
- Laboratory CEC conversion from mass concentration to centimoles of charge per kilogram.
- Pore-water conduction versus surface conduction and the wet-clay/salty-water ambiguity.

Register all 19 bodies, run the validator for the three Module 4 sections, and perform a chemistry notation, charge-balance, and units audit against Lecture 4.

## 6. Complete Registry And Course-Wide Audit

Review `apps/academy/src/lib/docs/level-2-geophysics/content.ts` as one complete registry:

- Exactly 58 imports and 58 map entries.
- Exact topic titles from `structure.ts`.
- Imports grouped in course order.
- No duplicate, unknown, empty, or omitted body.

Run the full validator without section arguments. Confirm all 58 routes receive substantive bodies through the existing `Map.get(topic.title)` integration.

Perform a concise-content audit:

- Each visible page has one central learning path rather than a slide dump.
- The field problem is concrete and distinct across pages.
- Equations appear only where they support the page decision.
- Tables do not repeat surrounding prose.
- Detailed working remains in the closed examples component.
- Related pages remain self-contained without “previous page” references.

## 7. Final Verification And Review

Run:

```sh
pnpm --filter academy check:geophysics-content
pnpm --filter academy check:geophysics-diagrams
pnpm --filter @repo/diagrams lint
pnpm --filter @repo/diagrams check-types
pnpm --filter academy check:questions
pnpm --filter academy lint
pnpm --filter academy build
git diff --check
```

Review the final implementation against:

- The approved all-topic specification.
- The geophysics content rubric and inherited pedagogy, clarity, and LaTeX requirements.
- The exact slide source map for each topic.
- The requirement that no questions, exams, shared components, routes, or new diagrams were added.

Fix content, MDX, registry, validation, lint, type, or build defects and rerun affected checks. Do not claim new visual completeness: list the deferred one-at-a-time diagram pass as a known follow-up.

## Expected File Impact

New files:

- 57 topic `content.ts` files across the existing 12 section directories.
- `docs/openpowers/specs/2026-10-27-level-2-geophysics-all-topic-content.md`
- `docs/openpowers/plans/2026-10-27-level-2-geophysics-all-topic-content.md`

Updated files:

- `apps/academy/src/lib/docs/level-2-geophysics/content.ts`
- `apps/academy/scripts/validate-level-2-geophysics-content.mjs`

No route, shared component, question, exam, flashcard, or diagram files will be added or changed in this phase.

## Code Quality Controls

- Keep each page in the existing one-topic/one-file structure.
- Reuse the current content map and shared MDX components; do not create a generator, alternate renderer, or generic content template.
- Derive validator expectations from `structure.ts` to avoid a parallel title registry.
- Keep each topic's opening, property chain, evidence limits, and examples specific; reject copy-and-replace prose across topics.
- Use only abstractions already supported by the Academy renderer.

## Risks And Controls

- **Repetitive template prose:** review openings, measurement chains, uncertainty, and examples for topic-specific reasoning rather than shared filler.
- **Slide fragmentation:** combine reveal sequences into one explanation and omit lecturer prompts, polls, timings, and practical logistics.
- **Unsupported expansion:** keep every claim within the mapped slide range and supplied deck scope.
- **Equation or unit errors:** use source values, show intermediate steps, and run separate hydrology and chemistry audits.
- **Registry omissions:** derive expected files and titles from `structure.ts` and require exact full-course coverage.
- **Excessive visible length:** keep explanation concise and move worked detail into the closed examples component.
- **Missing spatial visuals:** use clear prose and tables in this phase, record visual candidates, and report the separately required one-at-a-time diagram workflow.
- **Large change set:** implement and validate one lecture-aligned module at a time before proceeding.
