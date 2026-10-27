export type Level2MathematicalPhysicsTopic = {
  navLabel?: string;
  title: string;
};

export type Level2MathematicalPhysicsSection = {
  id: string;
  navLabel?: string;
  title: string;
  topics: Level2MathematicalPhysicsTopic[];
};

export type Level2MathematicalPhysicsModule = {
  id: string;
  sections: Level2MathematicalPhysicsSection[];
  title: string;
};

export const level2MathematicalPhysicsModules: Level2MathematicalPhysicsModule[] =
  [
    {
      id: "vector-and-index-methods",
      title: "Vector and Index Methods",
      sections: [
        {
          id: "index-notation-and-vector-projections",
          title: "Index Notation and Vector Projections",
          navLabel: "Index Notation",
          topics: [
            { title: "Orthonormal Vectors and Orthogonal Projection" },
            { title: "Summation Convention and Kronecker Delta" },
            { title: "Levi-Civita Symbol and Vector Products" },
          ],
        },
        {
          id: "vector-spaces",
          title: "Vector Spaces",
          navLabel: "Vector Spaces",
          topics: [
            { title: "Vector Spaces and Their Axioms" },
            { title: "Linear Combinations and Span" },
            { title: "Linear Independence" },
            { title: "Bases and Dimension" },
          ],
        },
        {
          id: "inner-product-spaces",
          title: "Inner Product Spaces",
          navLabel: "Inner Products",
          topics: [
            { title: "Inner Products, Norms, and Orthogonality" },
            { title: "Function Spaces and Modal Decomposition" },
          ],
        },
      ],
    },
    {
      id: "linear-operators-and-spectral-methods",
      title: "Linear Operators and Spectral Methods",
      sections: [
        {
          id: "linear-operators-and-special-matrices",
          title: "Linear Operators and Special Matrices",
          navLabel: "Operators and Matrices",
          topics: [
            { title: "Linear Operators and Matrix Trace" },
            { title: "Special Matrices and Quadratic Forms" },
          ],
        },
        {
          id: "eigenvalues-and-diagonalisation",
          title: "Eigenvalues and Diagonalisation",
          navLabel: "Eigenvalues and Diagonalisation",
          topics: [
            { title: "Eigenvalues and Eigenvectors" },
            { title: "Commuting Matrices and Similarity Transformations" },
            { title: "Matrix Diagonalisation and Quadratic Forms" },
            { title: "Matrix Powers and Exponentials" },
          ],
        },
      ],
    },
  ];

export const level2MathematicalPhysicsSections =
  level2MathematicalPhysicsModules.flatMap((module) => module.sections);
