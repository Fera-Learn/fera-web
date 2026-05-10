import { content as complexNumbersContent } from "./complex-arithmetic/complex-numbers/content";
import { content as complexAdditionContent } from "./complex-arithmetic/complex-addition/content";
import { content as complexMultiplicationContent } from "./complex-arithmetic/complex-multiplication/content";
import { content as complexDivisionContent } from "./complex-arithmetic/complex-division/content";
import { content as conjugateContent } from "./complex-arithmetic/conjugate/content";
import { content as realPartContent } from "./complex-arithmetic/real-part/content";
import { content as imaginaryPartContent } from "./complex-arithmetic/imaginary-part/content";
import { content as modulusContent } from "./complex-arithmetic/modulus/content";
import { content as polarFormContent } from "./complex-form/polar-form/content";
import { content as argumentContent } from "./complex-form/argument/content";
import { content as complexAdditionGeometryContent } from "./complex-form/complex-addition-geometry/content";
import { content as complexMultiplicationGeometryContent } from "./complex-form/complex-multiplication-geometry/content";
import { content as deMoivreTheoremContent } from "./complex-form/de-moivre-theorem/content";
import { content as eulerFormulaContent } from "./complex-form/euler-formula/content";
import { content as complexExponentialContent } from "./complex-form/complex-exponential/content";
import { content as complexTrigFormulaeContent } from "./complex-form/complex-trig-formulae/content";
import { content as derivativesContent } from "./differentiation/derivatives/content";
import { content as firstPrinciplesContent } from "./differentiation/first-principles/content";
import { content as chainRuleContent } from "./differentiation/chain-rule/content";
import { content as productRuleContent } from "./differentiation/product-rule/content";
import { content as quotientRuleContent } from "./differentiation/quotient-rule/content";
import { content as standardDerivativesContent } from "./differentiation/standard-derivatives/content";
import { content as higherOrderDerivativesContent } from "./differentiation/higher-order-derivatives/content";
import { content as implicitDifferentiationContent } from "./differentiation/implicit-differentiation/content";
import { content as inverseDerivativesContent } from "./differentiation/inverse-derivatives/content";
import { content as lhopitalsRuleContent } from "./differentiation/lhopitals-rule/content";
import { content as functionsContent } from "./functions/functions/content";
import { content as inverseFunctionsContent } from "./functions/inverse-functions/content";
import { content as antiderivativesContent } from "./integration/antiderivatives/content";
import { content as fundamentalTheoremContent } from "./integration/fundamental-theorem/content";
import { content as definiteIntegralsContent } from "./integration/definite-integrals/content";
import { content as substitutionContent } from "./integration/substitution/content";
import { content as integrationByPartsContent } from "./integration/integration-by-parts/content";
import { content as standardIntegralsContent } from "./integration/standard-integrals/content";
import { content as reverseDifferentiationContent } from "./integration/reverse-differentiation/content";
import { content as polynomialDivisionContent } from "./integration/polynomial-division/content";
import { content as partialFractionsContent } from "./integration/partial-fractions/content";
import { content as coverUpRuleContent } from "./integration/cover-up-rule/content";
import { content as rationalIntegralsContent } from "./integration/rational-integrals/content";
import { content as trigPowerIntegralsContent } from "./integration/trig-power-integrals/content";
import { content as formalLimitsContent } from "./limits/formal-limits/content";
import { content as limitLawsContent } from "./limits/limit-laws/content";
import { content as algebraicLimitsContent } from "./limits/algebraic-limits/content";
import { content as continuityContent } from "./limits/continuity/content";
import { content as sineLimitContent } from "./limits/sine-limit/content";
import { content as squeezeTheoremContent } from "./limits/squeeze-theorem/content";
import { content as limitVariationsContent } from "./limits/limit-variations/content";
import { content as changeOfVariablesContent } from "./limits/change-of-variables/content";
import { content as realNumbersContent } from "./real-numbers/real-numbers/content";
import { content as algebraicManipulationContent } from "./real-numbers/algebraic-manipulation/content";
import { content as binomialCoefficientsContent } from "./real-numbers/binomial-coefficients/content";
import { content as binomialTheoremContent } from "./real-numbers/binomial-theorem/content";
import { content as proofByInductionContent } from "./real-numbers/proof-by-induction/content";
import { content as summationNotationContent } from "./real-numbers/summation-notation/content";
import { content as trigFunctionsContent } from "./trigonometry/trig-functions/content";
import { content as pythagorasTheoremContent } from "./trigonometry/pythagoras-theorem/content";
import { content as inverseTrigFunctionsContent } from "./trigonometry/inverse-trig-functions/content";
import { content as angleAdditionFormulaeContent } from "./trigonometry/angle-addition-formulae/content";

export const level1MathIPhysicsTopicBodies = new Map<string, string>([
  ["Complex Numbers", complexNumbersContent],
  ["Complex Addition", complexAdditionContent],
  ["Complex Multiplication", complexMultiplicationContent],
  ["Complex Division", complexDivisionContent],
  ["Conjugate", conjugateContent],
  ["Real Part", realPartContent],
  ["Imaginary Part", imaginaryPartContent],
  ["Modulus", modulusContent],
  ["Polar Form", polarFormContent],
  ["Argument", argumentContent],
  ["Complex Addition Geometry", complexAdditionGeometryContent],
  ["Complex Multiplication Geometry", complexMultiplicationGeometryContent],
  ["De Moivre's Theorem", deMoivreTheoremContent],
  ["Euler's Formula", eulerFormulaContent],
  ["Complex Exponential", complexExponentialContent],
  ["Complex Trig Formulae", complexTrigFormulaeContent],
  ["Derivatives", derivativesContent],
  ["First Principles", firstPrinciplesContent],
  ["Chain Rule", chainRuleContent],
  ["Product Rule", productRuleContent],
  ["Quotient Rule", quotientRuleContent],
  ["Standard Derivatives", standardDerivativesContent],
  ["Higher Order Derivatives", higherOrderDerivativesContent],
  ["Implicit Differentiation", implicitDifferentiationContent],
  ["Inverse Derivatives", inverseDerivativesContent],
  ["L'Hôpital's Rule", lhopitalsRuleContent],
  ["Functions", functionsContent],
  ["Inverse Functions", inverseFunctionsContent],
  ["Antiderivatives", antiderivativesContent],
  ["Fundamental Theorem", fundamentalTheoremContent],
  ["Definite Integrals", definiteIntegralsContent],
  ["Substitution", substitutionContent],
  ["Integration by Parts", integrationByPartsContent],
  ["Standard Integrals", standardIntegralsContent],
  ["Reverse Differentiation", reverseDifferentiationContent],
  ["Polynomial Division", polynomialDivisionContent],
  ["Partial Fractions", partialFractionsContent],
  ["Cover-Up Rule", coverUpRuleContent],
  ["Rational Integrals", rationalIntegralsContent],
  ["Trig Power Integrals", trigPowerIntegralsContent],
  ["Formal Limits", formalLimitsContent],
  ["Limit Laws", limitLawsContent],
  ["Algebraic Limits", algebraicLimitsContent],
  ["Continuity", continuityContent],
  ["Sine Limit", sineLimitContent],
  ["Squeeze Theorem", squeezeTheoremContent],
  ["Limit Variations", limitVariationsContent],
  ["Change of Variables", changeOfVariablesContent],
  ["Real Numbers", realNumbersContent],
  ["Algebraic Manipulation", algebraicManipulationContent],
  ["Binomial Coefficients", binomialCoefficientsContent],
  ["Binomial Theorem", binomialTheoremContent],
  ["Proof by Induction", proofByInductionContent],
  ["Summation Notation", summationNotationContent],
  ["Trig Functions", trigFunctionsContent],
  ["Pythagoras' Theorem", pythagorasTheoremContent],
  ["Inverse Trig Functions", inverseTrigFunctionsContent],
  ["Angle Addition Formulae", angleAdditionFormulaeContent],
]);
