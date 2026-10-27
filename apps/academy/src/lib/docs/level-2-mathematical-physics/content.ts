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
]);
