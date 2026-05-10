export const content = String.raw`## Principle

Estimation tests scale by replacing detail with controlled assumptions.

## Method

- State the quantity being estimated.
- Choose a simple geometry, rate, or ratio model.
- Round inputs to the scale the model can justify.
- Keep units until the final scale is visible.
- Test how powers amplify size changes.

## Rules

<Equation label="Order estimate" tex="q\sim10^n" />

<Equation label="Scale ratio" tex="r=\frac{q_2}{q_1}" />

<Equation label="Power scaling" tex="q\propto L^n\Rightarrow \frac{q_2}{q_1}=\left(\frac{L_2}{L_1}\right)^n" />

## Checks

- State the assumption controlling the scale.
- Ratios are often safer than absolute guesses.
- Unit errors often shift answers by powers of ten.
- Many-orders disagreement usually means the model failed.`;
