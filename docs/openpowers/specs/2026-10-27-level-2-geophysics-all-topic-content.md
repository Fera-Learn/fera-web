# Level 2 Geophysics All Topic Content Specification

## Goal

Author substantive, learner-first content for the remaining 57 Level 2 - Geophysics topic routes using only the four supplied environmental-geophysics lecture decks. Every page must use the approved geophysics field-learning sequence and turn lecturer-dependent slides into concise standalone instruction.

## Scope

This phase will:

- Create one `content.ts` body for each of the 57 currently empty topics.
- Expand `level2GeophysicsTopicBodies` from one entry to all 58 course topics.
- Generalise the geophysics content validator from sparse first-page checks to full-course coverage and quality checks.
- Preserve the existing course structure, routes, shared renderer, question bank, exams, flashcards, and first-page workflow diagram.
- Complete content in four source-aligned batches, one module per lecture.

This phase will not add question JSON, exam papers, flashcards, new shared components, new route files, or new diagrams.

## Source Boundary

The only content sources are:

- `resources/geophysics/lecture1.pptx`: soil systems, formation, profiles, survey, classification, and Cockle Park.
- `resources/geophysics/lecture2.pptx`: texture, mineralogy, structure, pores, bulk density, porosity, and physical interfaces.
- `resources/geophysics/lecture3.pptx`: soil-water storage, measurement, unsaturated flow, plant water, saturated flow, aquifers, and recharge.
- `resources/geophysics/lecture4.pptx`: dissolved ions, weathering chemistry, conductivity, pH, colloid charge, ion exchange, CEC/AEC, and ground conduction.

The decks define scope, terminology, equations, numerical values, cases, and intended depth. Pages may reorganise and explain that material but must not import unsupported topics from later geophysical-method lectures.

## Required Page Shape

Every page will use:

1. `## The Field Problem`
2. `## What Changes Underground`
3. `## How We Detect It`
4. `## What the Evidence Means`
5. One `<PhysicsExamples collapsible>` component containing exactly two examples

Symbols and units will be defined inline immediately before use. Pages will not add Principle, Notation, Core Method, Summary, Checks, Mistake Filter, Pitfalls, Worked Cases, Learning Objectives, or Examples headings.

## Teaching Standard

Each page must:

- Open with one concrete field observation, measurement problem, or environmental decision.
- Identify the target material, process, interface, and relevant spatial or temporal scale.
- Explain the physical or chemical change before introducing a measurement or equation.
- State what is measured directly and what is calculated, modelled, or interpreted.
- Connect point evidence to spatial geophysical observations without treating their support volumes as interchangeable.
- Name a plausible alternative explanation and the evidence needed to distinguish it whenever the response is non-unique.
- Keep visible prose concise; detailed practice stays inside the closed examples component.
- Use two progressive examples: direct application, then one added complication.
- Use source numerical values and cases where supplied; clearly frame any simple constructed values as hypothetical.

## Source Map

### Module 1: Soils In Environmental Geophysics — Lecture 1

| Topic | Primary slides |
| --- | --- |
| Soil Composition and the Solid-Pore System | 16–18 |
| Transported and Residual Soils | 19–21 |
| Physical and Chemical Weathering | 22–24 |
| Soil Horizons and Profile Development | 25–32 |
| Eluviation, Illuviation, and Secondary Minerals | 28–31 |
| Controls on Soil Formation | 34–43 |
| Soil Interfaces and Environmental Function | 31–33, 43–51 |
| Describing Soil Profiles | 52–56 |
| Soil Series and Soil Associations | 53–55 |
| Soil Groups, Orders, and the World Reference Base | 55, 59–61 |
| Cockle Park Stagnosol Case Study | 56–59 |

### Module 2: Soil Physical Properties — Lecture 2

| Topic | Primary slides |
| --- | --- |
| Soil Texture and Particle-Size Classes | 9 |
| Reading the Soil Texture Triangle | 10–16 |
| Texture, Mineralogy, and Weathering | 17–21 |
| Soil Structure and Aggregation | 23–26 |
| Aggregate Forms and Soil Horizons | 24, 27–29, 32 |
| Compaction and Structural Degradation | 31–32, 44–46 |
| Texture Versus Structure | 33 |
| Macropores, Micropores, and Pore Connectivity | 35–38 |
| Dry Bulk Density | 39–40 |
| Particle Density and Total Porosity | 41–42 |
| Soil Properties Across Vertical and Lateral Interfaces | 47–49 |

### Module 3: Soil And Groundwater Hydrology — Lecture 3

| Topic | Primary slides |
| --- | --- |
| Zones of Water in the Ground | 9–10 |
| Measuring Soil Moisture and Water Levels | 11–16 |
| Gravimetric and Volumetric Water Content | 17–21, 24–27 |
| Porosity and Water Saturation | 22–24 |
| Cohesion, Adhesion, and Surface Tension | 29 |
| Capillarity in Soil Pores | 30 |
| Matric Potential and Soil-Water Retention | 31–32 |
| Field Capacity, Wilting Point, and Plant-Available Water | 33–35, 38–40 |
| Evapotranspiration and Root Water Uptake | 36–40 |
| Infiltration Capacity, Runoff, and Preferential Flow | 41–45 |
| Porosity, Permeability, and Hydraulic Conductivity | 47–48 |
| Darcy's Law and Hydraulic Gradient | 49–50 |
| Darcy Flux and Seepage Velocity | 50–53 |
| Groundwater Travel Time | 52–53 |
| Aquifers and Perched Water Tables | 54–57 |
| Groundwater Recharge and Seasonal Water Tables | 58–59 |

### Module 4: Soil-Water Chemistry And Electrical Properties — Lecture 4

| Topic | Primary slides |
| --- | --- |
| Major Ions and Sources of Dissolved Solutes | 5–6 |
| Carbonate and Silicate Weathering Reactions | 7–8 |
| Electrical Conductivity of Water | 9, 12–14 |
| Conductivity Probes and Temperature Correction | 10–15 |
| Total Dissolved Solids and Salinity | 15 |
| pH and pH Measurement | 16–18 |
| Soil Colloids and Surface Charge | 21–23 |
| One-to-One Clay Minerals | 24 |
| Two-to-One Swelling Clay Minerals | 25–26 |
| Non-Swelling Two-to-One Clay Minerals | 27 |
| Humus and pH-Dependent Charge | 28–29 |
| Cation Exchange Capacity | 23, 29, 32 |
| Anion Exchange Capacity | 30 |
| Weathering Controls on Colloid Charge | 31–32 |
| Cation Exchange Reversibility and Charge Equivalence | 33–34 |
| Cation Selectivity and Leaching | 35–36 |
| Base Saturation, Soil Acidity, and Sodicity | 37 |
| Measuring Cation Exchange Capacity | 41–43 |
| Pore-Water and Surface Electrical Conduction | 38–40 |

## Quantitative Coverage

Pages will preserve and teach the supplied relationships where relevant, including:

- Dry bulk density and porosity.
- Gravimetric and volumetric water content.
- Water saturation.
- Capillary rise.
- Soil-water potential and plant-available water.
- Infiltration capacity and saturated hydraulic conductivity.
- Darcy discharge, hydraulic gradient, Darcy flux, seepage velocity, and travel time.
- Conductivity, resistivity, cell constant, and temperature correction.
- TDS conversion limits, pH, charge equivalence, CEC, and base saturation.

All variables will be defined before use, all numerical values will carry units, and worked calculations will show the meaningful intermediate steps.

## Visual Strategy

This content pass will use equations, compact comparison tables, and verbal spatial descriptions already supported by the shared MDX renderer. It will not create new diagrams.

The following source visuals are strong candidates for a later diagram pass: soil-profile development, texture triangle, aggregate forms, pore networks, groundwater zones, retention curves, Darcy geometry, perched water tables, probe layouts, clay-layer structures, ion exchange, and pore-water versus surface conduction. The repository's diagram-redraw rubric requires each diagram to be implemented and approved one at a time, so those assets must remain a separate approval-gated workflow rather than being silently bundled into 57 lesson files.

## Registry And Validation

The course-local body registry will contain exactly the 58 approved titles and imports, with no route or title changes.

The content validator will check:

- Exactly 58 nested topic `content.ts` files and 58 registry entries.
- One-to-one agreement among structure titles, content paths, imports, and map keys.
- Exact heading order on every page.
- No standalone Notation component or forbidden headings.
- Exactly one collapsible `PhysicsExamples` component and exactly two items per page.
- Valid `String.raw`, MDX, GFM tables, and target-context LaTeX escaping.
- No empty, duplicate, or unregistered topic bodies.

## Out Of Scope

- New diagrams or changes to the existing workflow diagram.
- Practice-question JSON, exams, flashcards, or equation sheets.
- Lectures 5–9 or detailed operation of ERT, EMI, GPR, or other later-course geophysical methods.
- Changes to shared MDX components, page rendering, course routes, or navigation.
- External textbook expansion beyond the depth and claims already represented in the supplied decks.

## Verification

- Run the geophysics content and diagram validators.
- Run diagram package lint and type checks because the first page still uses the registered workflow diagram.
- Run Academy question-registry checks, lint, and production build.
- Run `git diff --check` and review all 58 content registrations and route bodies.
- Report that new source visuals remain unimplemented rather than claiming visual completeness.

## Success Criteria

- All 58 topic routes have substantive, source-aligned bodies.
- Every page follows the field-learning sequence and remains usable without a lecturer.
- Quantitative pages are correct, unit-complete, and explicit about direct versus derived quantities.
- Interpretive pages distinguish observations, property contrasts, environmental explanations, scale, and non-uniqueness.
- The validator proves complete one-to-one course coverage.
- Required static checks and the Academy production build pass.

## Decisions

- Author all 57 remaining pages in this phase.
- Use one lecture-aligned module per implementation batch.
- Keep visible content concise and move detailed practice into the closed examples component.
- Defer all new diagrams to the required one-at-a-time approval workflow.

## Open Questions

None.
