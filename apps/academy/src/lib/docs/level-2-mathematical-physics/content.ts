import { content as orthonormalVectorsOrthogonalProjectionContent } from "./index-notation-and-vector-projections/orthonormal-vectors-and-orthogonal-projection/content";
import { content as summationConventionKroneckerDeltaContent } from "./index-notation-and-vector-projections/summation-convention-and-kronecker-delta/content";
import { content as leviCivitaSymbolVectorProductsContent } from "./index-notation-and-vector-projections/levi-civita-symbol-and-vector-products/content";
import { content as vectorSpacesAxiomsContent } from "./vector-spaces/vector-spaces-and-their-axioms/content";
import { content as linearCombinationsSpanContent } from "./vector-spaces/linear-combinations-and-span/content";
import { content as linearIndependenceContent } from "./vector-spaces/linear-independence/content";
import { content as basesDimensionContent } from "./vector-spaces/bases-and-dimension/content";
import { content as innerProductsNormsOrthogonalityContent } from "./inner-product-spaces/inner-products-norms-and-orthogonality/content";
import { content as functionSpacesModalDecompositionContent } from "./inner-product-spaces/function-spaces-and-modal-decomposition/content";
import { content as linearOperatorsMatrixTraceContent } from "./linear-operators-and-special-matrices/linear-operators-and-matrix-trace/content";
import { content as specialMatricesQuadraticFormsContent } from "./linear-operators-and-special-matrices/special-matrices-and-quadratic-forms/content";
import { content as eigenvaluesEigenvectorsContent } from "./eigenvalues-and-diagonalisation/eigenvalues-and-eigenvectors/content";
import { content as commutingMatricesSimilarityTransformationsContent } from "./eigenvalues-and-diagonalisation/commuting-matrices-and-similarity-transformations/content";
import { content as matrixDiagonalisationQuadraticFormsContent } from "./eigenvalues-and-diagonalisation/matrix-diagonalisation-and-quadratic-forms/content";
import { content as matrixPowersExponentialsContent } from "./eigenvalues-and-diagonalisation/matrix-powers-and-exponentials/content";
import { content as laplaceTransformDefinitionExistenceContent } from "./laplace-transforms/laplace-transform-definition-and-existence/content";
import { content as laplaceTransformPropertiesContent } from "./laplace-transforms/laplace-transform-properties/content";
import { content as inverseLaplaceTransformsConvolutionContent } from "./laplace-transforms/inverse-laplace-transforms-and-convolution/content";
import { content as solvingOdesLaplaceTransformsContent } from "./laplace-transforms/solving-odes-with-laplace-transforms/content";
import { content as gradientsLevelSurfacesContent } from "./differential-vector-calculus/gradients-and-level-surfaces/content";
import { content as divergenceCurlVectorIdentitiesContent } from "./differential-vector-calculus/divergence-curl-and-vector-identities/content";
import { content as laplacianMaxwellWaveEquationsContent } from "./differential-vector-calculus/laplacian-and-maxwell-wave-equations/content";
import { content as steepestDescentLinearSystemsContent } from "./steepest-descent/steepest-descent-for-linear-systems/content";
import { content as parametricCurvesLineIntegralsContent } from "./curves-and-line-integrals/parametric-curves-and-line-integrals/content";
import { content as conservativeFieldsScalarPotentialsContent } from "./curves-and-line-integrals/conservative-fields-and-scalar-potentials/content";
import { content as parametricSurfacesSurfaceIntegralsContent } from "./surface-and-volume-integrals/parametric-surfaces-and-surface-integrals/content";
import { content as volumeIntegralsCoordinateJacobiansContent } from "./surface-and-volume-integrals/volume-integrals-and-coordinate-jacobians/content";
import { content as divergenceTheoremElectrostaticsContent } from "./integration-theorems-and-vortices/divergence-theorem-and-electrostatics/content";
import { content as greensTheoremPlaneContent } from "./integration-theorems-and-vortices/green-s-theorem-in-the-plane/content";
import { content as stokesTheoremRankineVortexContent } from "./integration-theorems-and-vortices/stokes-theorem-and-the-rankine-vortex/content";

export const level2MathematicalPhysicsTopicBodies = new Map<string, string>([
  [
    "Orthonormal Vectors and Orthogonal Projection",
    orthonormalVectorsOrthogonalProjectionContent,
  ],
  [
    "Summation Convention and Kronecker Delta",
    summationConventionKroneckerDeltaContent,
  ],
  [
    "Levi-Civita Symbol and Vector Products",
    leviCivitaSymbolVectorProductsContent,
  ],
  ["Vector Spaces and Their Axioms", vectorSpacesAxiomsContent],
  ["Linear Combinations and Span", linearCombinationsSpanContent],
  ["Linear Independence", linearIndependenceContent],
  ["Bases and Dimension", basesDimensionContent],
  [
    "Inner Products, Norms, and Orthogonality",
    innerProductsNormsOrthogonalityContent,
  ],
  [
    "Function Spaces and Modal Decomposition",
    functionSpacesModalDecompositionContent,
  ],
  ["Linear Operators and Matrix Trace", linearOperatorsMatrixTraceContent],
  [
    "Special Matrices and Quadratic Forms",
    specialMatricesQuadraticFormsContent,
  ],
  ["Eigenvalues and Eigenvectors", eigenvaluesEigenvectorsContent],
  [
    "Commuting Matrices and Similarity Transformations",
    commutingMatricesSimilarityTransformationsContent,
  ],
  [
    "Matrix Diagonalisation and Quadratic Forms",
    matrixDiagonalisationQuadraticFormsContent,
  ],
  ["Matrix Powers and Exponentials", matrixPowersExponentialsContent],
  [
    "Laplace Transform Definition and Existence",
    laplaceTransformDefinitionExistenceContent,
  ],
  ["Laplace Transform Properties", laplaceTransformPropertiesContent],
  [
    "Inverse Laplace Transforms and Convolution",
    inverseLaplaceTransformsConvolutionContent,
  ],
  ["Solving ODEs with Laplace Transforms", solvingOdesLaplaceTransformsContent],
  ["Gradients and Level Surfaces", gradientsLevelSurfacesContent],
  [
    "Divergence, Curl, and Vector Identities",
    divergenceCurlVectorIdentitiesContent,
  ],
  [
    "Laplacian and Maxwell Wave Equations",
    laplacianMaxwellWaveEquationsContent,
  ],
  ["Steepest Descent for Linear Systems", steepestDescentLinearSystemsContent],
  [
    "Parametric Curves and Line Integrals",
    parametricCurvesLineIntegralsContent,
  ],
  [
    "Conservative Fields and Scalar Potentials",
    conservativeFieldsScalarPotentialsContent,
  ],
  [
    "Parametric Surfaces and Surface Integrals",
    parametricSurfacesSurfaceIntegralsContent,
  ],
  [
    "Volume Integrals and Coordinate Jacobians",
    volumeIntegralsCoordinateJacobiansContent,
  ],
  [
    "Divergence Theorem and Electrostatics",
    divergenceTheoremElectrostaticsContent,
  ],
  ["Green's Theorem in the Plane", greensTheoremPlaneContent],
  ["Stokes' Theorem and the Rankine Vortex", stokesTheoremRankineVortexContent],
]);
