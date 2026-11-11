export type Level2GeophysicsTopic = {
  navLabel?: string;
  title: string;
};

export type Level2GeophysicsSection = {
  id: string;
  navLabel?: string;
  title: string;
  topics: Level2GeophysicsTopic[];
};

export type Level2GeophysicsModule = {
  id: string;
  sections: Level2GeophysicsSection[];
  title: string;
};

export const level2GeophysicsModules: Level2GeophysicsModule[] = [
  {
    id: "soils-in-environmental-geophysics",
    title: "Soils in Environmental Geophysics",
    sections: [
      {
        id: "soil-systems-and-origins",
        title: "Soil Systems and Origins",
        navLabel: "Systems and Origins",
        topics: [
          { title: "Environmental Geophysics and Soil Interfaces" },
          { title: "Soil Composition and the Solid-Pore System" },
          { title: "Transported and Residual Soils" },
          { title: "Physical and Chemical Weathering" },
        ],
      },
      {
        id: "soil-profiles-and-formation",
        title: "Soil Profiles and Formation",
        navLabel: "Profiles and Formation",
        topics: [
          { title: "Soil Horizons and Profile Development" },
          { title: "Eluviation, Illuviation, and Secondary Minerals" },
          { title: "Controls on Soil Formation" },
          { title: "Soil Interfaces and Environmental Function" },
        ],
      },
      {
        id: "soil-survey-and-classification",
        title: "Soil Survey and Classification",
        navLabel: "Survey and Classification",
        topics: [
          { title: "Describing Soil Profiles" },
          { title: "Soil Series and Soil Associations" },
          { title: "Soil Groups, Orders, and the World Reference Base" },
          { title: "Cockle Park Stagnosol Case Study" },
        ],
      },
    ],
  },
  {
    id: "soil-physical-properties",
    title: "Soil Physical Properties",
    sections: [
      {
        id: "soil-texture-and-mineralogy",
        title: "Soil Texture and Mineralogy",
        navLabel: "Texture and Mineralogy",
        topics: [
          { title: "Soil Texture and Particle-Size Classes" },
          { title: "Reading the Soil Texture Triangle" },
          { title: "Texture, Mineralogy, and Weathering" },
        ],
      },
      {
        id: "soil-structure-and-aggregation",
        title: "Soil Structure and Aggregation",
        navLabel: "Structure and Aggregation",
        topics: [
          { title: "Soil Structure and Aggregation" },
          { title: "Aggregate Forms and Soil Horizons" },
          { title: "Compaction and Structural Degradation" },
          { title: "Texture Versus Structure" },
        ],
      },
      {
        id: "pore-space-and-physical-measurements",
        title: "Pore Space and Physical Measurements",
        navLabel: "Pores and Measurements",
        topics: [
          { title: "Macropores, Micropores, and Pore Connectivity" },
          { title: "Dry Bulk Density" },
          { title: "Particle Density and Total Porosity" },
          {
            title: "Soil Properties Across Vertical and Lateral Interfaces",
          },
        ],
      },
    ],
  },
  {
    id: "soil-and-groundwater-hydrology",
    title: "Soil and Groundwater Hydrology",
    sections: [
      {
        id: "soil-water-storage-and-measurement",
        title: "Soil-Water Storage and Measurement",
        navLabel: "Storage and Measurement",
        topics: [
          { title: "Zones of Water in the Ground" },
          { title: "Measuring Soil Moisture and Water Levels" },
          { title: "Gravimetric and Volumetric Water Content" },
          { title: "Porosity and Water Saturation" },
        ],
      },
      {
        id: "unsaturated-flow-and-plant-water",
        title: "Unsaturated Flow and Plant Water",
        navLabel: "Unsaturated Flow",
        topics: [
          { title: "Cohesion, Adhesion, and Surface Tension" },
          { title: "Capillarity in Soil Pores" },
          { title: "Matric Potential and Soil-Water Retention" },
          {
            title: "Field Capacity, Wilting Point, and Plant-Available Water",
          },
          { title: "Evapotranspiration and Root Water Uptake" },
          { title: "Infiltration Capacity, Runoff, and Preferential Flow" },
        ],
      },
      {
        id: "saturated-flow-and-groundwater",
        title: "Saturated Flow and Groundwater",
        navLabel: "Saturated Flow",
        topics: [
          { title: "Porosity, Permeability, and Hydraulic Conductivity" },
          { title: "Darcy's Law and Hydraulic Gradient" },
          { title: "Darcy Flux and Seepage Velocity" },
          { title: "Groundwater Travel Time" },
          { title: "Aquifers and Perched Water Tables" },
          { title: "Groundwater Recharge and Seasonal Water Tables" },
        ],
      },
    ],
  },
  {
    id: "soil-water-chemistry-and-electrical-properties",
    title: "Soil-Water Chemistry and Electrical Properties",
    sections: [
      {
        id: "dissolved-solutes-and-water-measurements",
        title: "Dissolved Solutes and Water Measurements",
        navLabel: "Solutes and Measurements",
        topics: [
          { title: "Major Ions and Sources of Dissolved Solutes" },
          { title: "Carbonate and Silicate Weathering Reactions" },
          { title: "Electrical Conductivity of Water" },
          { title: "Conductivity Probes and Temperature Correction" },
          { title: "Total Dissolved Solids and Salinity" },
          { title: "pH and pH Measurement" },
        ],
      },
      {
        id: "clay-humus-and-surface-charge",
        title: "Clay, Humus, and Surface Charge",
        navLabel: "Clay and Surface Charge",
        topics: [
          { title: "Soil Colloids and Surface Charge" },
          { title: "One-to-One Clay Minerals" },
          { title: "Two-to-One Swelling Clay Minerals" },
          { title: "Non-Swelling Two-to-One Clay Minerals" },
          { title: "Humus and pH-Dependent Charge" },
          { title: "Cation Exchange Capacity" },
          { title: "Anion Exchange Capacity" },
        ],
      },
      {
        id: "ion-exchange-and-ground-conductivity",
        title: "Ion Exchange and Ground Conductivity",
        navLabel: "Exchange and Conductivity",
        topics: [
          { title: "Weathering Controls on Colloid Charge" },
          { title: "Cation Exchange Reversibility and Charge Equivalence" },
          { title: "Cation Selectivity and Leaching" },
          { title: "Base Saturation, Soil Acidity, and Sodicity" },
          { title: "Measuring Cation Exchange Capacity" },
          { title: "Pore-Water and Surface Electrical Conduction" },
        ],
      },
    ],
  },
];

export const level2GeophysicsSections = level2GeophysicsModules.flatMap(
  (module) => module.sections,
);
