export const content = String.raw`## Principle

A model predicts measured behavior by keeping only assumptions that matter.

## Method

- Choose the system: the object or region being modeled.
- State the assumptions: what is kept, ignored, or held constant.
- Make a prediction that could be compared with a measurement.
- Test the residual against the measurement resolution.

<Equation label="Model residual" tex="r=\text{measurement}-\text{prediction}" />

<Equation label="Model test" tex="|r|\lesssim \text{uncertainty}" />

## Checks

- Assumptions must be visible.
- Predictions need units.
- Residuals should not show a pattern.
- Useful does not mean exact.

## Notes

- Add detail only when it improves a measurable prediction.
- A failed test can expose bad assumptions, bad data, or both.`;
