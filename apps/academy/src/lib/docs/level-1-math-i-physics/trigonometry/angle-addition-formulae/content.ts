export const content = String.raw`## Angle Addition Formulas

These formulas express trigonometric functions of sums and differences of angles in terms of functions of the individual angles.

### Sum and Difference Formulas

<Equation label="Sine sum" tex="\sin(A + B) = \sin A \cos B + \cos A \sin B" />

<Equation label="Sine difference" tex="\sin(A - B) = \sin A \cos B - \cos A \sin B" />

<Equation label="Cosine sum" tex="\cos(A + B) = \cos A \cos B - \sin A \sin B" />

<Equation label="Cosine difference" tex="\cos(A - B) = \cos A \cos B + \sin A \sin B" />

<Equation label="Tangent sum" tex="\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A \tan B}" />

<Equation label="Tangent difference" tex="\tan(A - B) = \frac{\tan A - \tan B}{1 + \tan A \tan B}" />

### Double Angle Formulas

Setting $B = A$ in the sum formulas gives the double angle formulas:

<Equation label="Sine double" tex="\sin(2A) = 2\sin A \cos A" />

<Equation label="Cosine double" tex="\cos(2A) = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A" />

<Equation label="Tangent double" tex="\tan(2A) = \frac{2\tan A}{1 - \tan^2 A}" />

### Half Angle Formulas

Derived from the double angle formulas:

<Equation label="Sine half" tex="\sin\left(\frac{A}{2}\right) = \pm\sqrt{\frac{1 - \cos A}{2}}" />

<Equation label="Cosine half" tex="\cos\left(\frac{A}{2}\right) = \pm\sqrt{\frac{1 + \cos A}{2}}" />

<Equation label="Tangent half" tex="\tan\left(\frac{A}{2}\right) = \pm\sqrt{\frac{1 - \cos A}{1 + \cos A}} = \frac{\sin A}{1 + \cos A}" />

The $\pm$ sign depends on the quadrant in which the angle lies.
`;
