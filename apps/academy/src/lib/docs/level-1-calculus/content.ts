type NotationItem = {
  symbol: string;
  meaning: string;
  unit?: string;
};

type ExampleItem = {
  title: string;
  question: string;
  answer: string;
};

type TopicContent = {
  title: string;
  principle: string;
  notation: NotationItem[];
  core: string;
  worked: ExampleItem[];
  examples: ExampleItem[];
};

const renderNotation = (items: NotationItem[]) => `<Notation
  items={${JSON.stringify(items, null, 4)}}
/>`;

const renderExamples = (items: ExampleItem[]) => `<PhysicsExamples
  items={${JSON.stringify(items, null, 4)}}
/>`;

const topicContent = (content: TopicContent) => String.raw`## Principle

${content.principle}

## Notation

${renderNotation(content.notation)}

## The Core Method

${content.core}

## Worked Cases

${renderExamples(content.worked)}

## Examples

${renderExamples(content.examples)}`;

const topics: TopicContent[] = [
  {
    title: "Functions And Graphs",
    principle: String.raw`A function assigns each allowed input exactly one output. Graphs turn that assignment into geometry: the point \((x,f(x))\) records the input and output together. Calculus uses graphs to describe change, limiting behaviour, and accumulated area.`,
    notation: [
      { symbol: "f", meaning: "a function" },
      { symbol: "x", meaning: "input variable" },
      { symbol: "f(x)", meaning: "output value of f at x" },
      { symbol: "D_f", meaning: "domain of f" },
      { symbol: String.raw`\operatorname{range}(f)`, meaning: "set of outputs actually produced by f" },
    ],
    core: String.raw`To analyse a function, identify its domain, evaluate outputs, and track the shape of its graph.

<Equation label="Graph points" tex="y=f(x)" />

The domain is restricted by operations such as division by zero and even roots of negative numbers. Intercepts come from setting one coordinate to zero: \(y\)-intercepts use \(x=0\), and \(x\)-intercepts solve \(f(x)=0\).`,
    worked: [
      {
        title: "Find domain and intercepts",
        question: String.raw`For \(f(x)=\frac{x+2}{x-3}\), find the domain and intercepts.`,
        answer: String.raw`The denominator cannot be zero, so \(x-3\ne0\), giving \(x\ne3\). Thus the domain is all real \(x\) except \(3\). The \(y\)-intercept is \(f(0)=\frac{2}{-3}=-\frac23\). The \(x\)-intercept solves \(x+2=0\), so \(x=-2\).`,
      },
    ],
    examples: [
      {
        title: "Read graph behaviour",
        question: String.raw`If \(f(x)=x^2-4\), identify where the graph crosses the axes.`,
        answer: String.raw`For the \(y\)-intercept, set \(x=0\): \(f(0)=-4\). For the \(x\)-intercepts, solve \(x^2-4=0\). Factor: \((x-2)(x+2)=0\), so \(x=2\) or \(x=-2\).`,
      },
    ],
  },
  {
    title: "Limit Laws",
    principle: String.raw`A limit describes the value a function approaches as the input approaches a point. Limit laws let you combine simpler limits to evaluate more complicated expressions without rebuilding the definition every time.`,
    notation: [
      { symbol: String.raw`\lim_{x\to a} f(x)`, meaning: "limit of f(x) as x approaches a" },
      { symbol: "a", meaning: "approach value of the input" },
      { symbol: "L,M", meaning: "finite limit values" },
    ],
    core: String.raw`If \(\lim_{x\to a}f(x)=L\) and \(\lim_{x\to a}g(x)=M\), then sums, differences, constant multiples, products, and quotients can be handled term-by-term when the quotient denominator limit is non-zero.

<Equation label="Product law" tex="\lim_{x\to a}f(x)g(x)=LM" />

For polynomials and rational functions with non-zero denominator at \(a\), direct substitution is usually valid. If substitution gives \(0/0\), simplify first.`,
    worked: [
      {
        title: "Simplify before substituting",
        question: String.raw`Find \(\lim_{x\to2}\frac{x^2-4}{x-2}\).`,
        answer: String.raw`Direct substitution gives \(0/0\), so factor the numerator: \(x^2-4=(x-2)(x+2)\). For \(x\ne2\), the expression equals \(x+2\). Therefore the limit is \(2+2=4\).`,
      },
    ],
    examples: [
      {
        title: "Use direct substitution",
        question: String.raw`Find \(\lim_{x\to1}(3x^2-2x+5)\).`,
        answer: String.raw`Polynomials are continuous, so substitute \(x=1\): \(3(1)^2-2(1)+5=3-2+5=6\).`,
      },
    ],
  },
  {
    title: "Continuity",
    principle: String.raw`A function is continuous at a point when its graph has no break there. Algebraically, the function value must exist, the limit must exist, and the two must agree.`,
    notation: [
      { symbol: "f(a)", meaning: "value of f at x=a" },
      { symbol: String.raw`\lim_{x\to a}f(x)`, meaning: "limit of f near a" },
      { symbol: "a", meaning: "point where continuity is tested" },
    ],
    core: String.raw`Use the three-part continuity test.

<Equation label="Continuity at a" tex="f\text{ is continuous at }a\Longleftrightarrow \lim_{x\to a}f(x)=f(a)" />

This statement includes the requirement that both sides exist. For piecewise functions, compare the left-hand limit, right-hand limit, and defined value.`,
    worked: [
      {
        title: "Choose a parameter for continuity",
        question: String.raw`Let \(f(x)=x^2\) for \(x<1\), and \(f(x)=kx+1\) for \(x\ge1\). Find \(k\) so that \(f\) is continuous at \(1\).`,
        answer: String.raw`The left-hand limit is \(1^2=1\). The value from the right-hand formula is \(f(1)=k+1\). Continuity requires \(k+1=1\), so \(k=0\).`,
      },
    ],
    examples: [
      {
        title: "Detect a removable discontinuity",
        question: String.raw`Is \(f(x)=\frac{x^2-1}{x-1}\) continuous at \(x=1\)?`,
        answer: String.raw`The formula is not defined at \(x=1\), because the denominator is zero. Although the simplified expression is \(x+1\) for \(x\ne1\), the value \(f(1)\) does not exist. Therefore \(f\) is not continuous at \(1\).`,
      },
    ],
  },
  {
    title: "Infinite Limits",
    principle: String.raw`An infinite limit describes values growing without bound as the input approaches a point. It signals vertical asymptotic behaviour rather than a finite output value.`,
    notation: [
      { symbol: String.raw`\lim_{x\to a}f(x)=\infty`, meaning: "f(x) grows without positive bound near a" },
      { symbol: String.raw`\lim_{x\to a^-}`, meaning: "left-hand limit" },
      { symbol: String.raw`\lim_{x\to a^+}`, meaning: "right-hand limit" },
    ],
    core: String.raw`For rational functions, infinite limits usually occur where the denominator approaches zero while the numerator approaches a non-zero value. Check the sign from each side.

<Equation label="Vertical asymptote signal" tex="f(x)\to\pm\infty\text{ as }x\to a" />

The two one-sided limits may have opposite signs, so do not combine them until both sides have been checked.`,
    worked: [
      {
        title: "One-sided infinite limits",
        question: String.raw`Find the one-sided limits of \(f(x)=\frac{1}{x-2}\) as \(x\to2\).`,
        answer: String.raw`As \(x\to2^+\), the denominator \(x-2\) is small and positive, so \(f(x)\to\infty\). As \(x\to2^-\), the denominator is small and negative, so \(f(x)\to-\infty\). The two-sided limit is not a single infinity with one sign.`,
      },
    ],
    examples: [
      {
        title: "Same sign on both sides",
        question: String.raw`Find \(\lim_{x\to0}\frac{1}{x^2}\).`,
        answer: String.raw`For \(x\ne0\), \(x^2\) is positive. As \(x\) approaches \(0\), \(x^2\) approaches \(0\) through positive values. Therefore \(1/x^2\to\infty\).`,
      },
    ],
  },
  {
    title: "Asymptotic Behaviour",
    principle: String.raw`Asymptotic behaviour describes how a function behaves near excluded points or far from the origin. Asymptotes are guide lines approached by the graph.`,
    notation: [
      { symbol: "x=a", meaning: "vertical asymptote candidate" },
      { symbol: "y=L", meaning: "horizontal asymptote candidate" },
      { symbol: String.raw`x\to\pm\infty`, meaning: "input grows without bound" },
    ],
    core: String.raw`Vertical asymptotes come from infinite limits near finite input values. Horizontal asymptotes come from limits as \(x\to\infty\) or \(x\to-\infty\).

<Equation label="Horizontal asymptote" tex="\lim_{x\to\infty}f(x)=L\Longrightarrow y=L" />

For rational functions, compare the highest powers of numerator and denominator to decide end behaviour.`,
    worked: [
      {
        title: "Rational end behaviour",
        question: String.raw`Find the horizontal asymptote of \(f(x)=\frac{3x^2+1}{2x^2-5}\).`,
        answer: String.raw`The numerator and denominator have the same highest power, \(x^2\). Divide by \(x^2\): \(f(x)=\frac{3+1/x^2}{2-5/x^2}\). As \(x\to\pm\infty\), the fractions \(1/x^2\) and \(5/x^2\) go to zero. The limit is \(3/2\), so the horizontal asymptote is \(y=3/2\).`,
      },
    ],
    examples: [
      {
        title: "Vertical asymptote",
        question: String.raw`Find the vertical asymptote of \(f(x)=\frac{x+1}{x-4}\).`,
        answer: String.raw`The denominator is zero at \(x=4\), while the numerator is \(5\), not zero. Therefore \(f(x)\) has an infinite limit near \(4\), and the vertical asymptote is \(x=4\).`,
      },
    ],
  },
  {
    title: "Derivative From First Principles",
    principle: String.raw`The derivative measures instantaneous rate of change. From first principles, it is the limit of average rates of change over shrinking intervals.`,
    notation: [
      { symbol: "f'(x)", meaning: "derivative of f at x" },
      { symbol: "h", meaning: "small change in the input" },
      { symbol: String.raw`\frac{f(x+h)-f(x)}{h}`, meaning: "difference quotient" },
    ],
    core: String.raw`Use the definition and simplify before taking the limit.

<Equation label="First-principles derivative" tex="f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}" />

The expression often has a factor of \(h\) that cancels after expanding. Do not substitute \(h=0\) before simplifying.`,
    worked: [
      {
        title: "Differentiate a square",
        question: String.raw`Use first principles to differentiate \(f(x)=x^2\).`,
        answer: String.raw`Compute the difference quotient: \(\frac{(x+h)^2-x^2}{h}=\frac{x^2+2xh+h^2-x^2}{h}\). Simplify the numerator to \(2xh+h^2=h(2x+h)\). Cancel \(h\) to get \(2x+h\). Taking \(h\to0\) gives \(f'(x)=2x\).`,
      },
    ],
    examples: [
      {
        title: "Linear function",
        question: String.raw`Use first principles to find the derivative of \(f(x)=3x+1\).`,
        answer: String.raw`The difference quotient is \(\frac{3(x+h)+1-(3x+1)}{h}=\frac{3h}{h}=3\). The limit as \(h\to0\) is \(3\).`,
      },
    ],
  },
  {
    title: "Differentiation Rules",
    principle: String.raw`Differentiation rules let you find derivatives quickly once the basic derivative patterns are known. They preserve the meaning of derivative as rate of change while avoiding repeated limit calculations.`,
    notation: [
      { symbol: String.raw`\frac{d}{dx}`, meaning: "differentiate with respect to x" },
      { symbol: "n", meaning: "constant exponent" },
      { symbol: "c", meaning: "constant scalar" },
    ],
    core: String.raw`Use the constant, sum, scalar multiple, and power rules.

<Equation label="Power rule" tex="\frac{d}{dx}x^n=nx^{n-1}" />

<Equation label="Linearity" tex="\frac{d}{dx}(af(x)+bg(x))=af'(x)+bg'(x)" />

Apply rules term-by-term, then simplify.`,
    worked: [
      {
        title: "Differentiate a polynomial",
        question: String.raw`Find \(\frac{d}{dx}(4x^5-3x^2+7)\).`,
        answer: String.raw`Differentiate each term. The derivative of \(4x^5\) is \(20x^4\). The derivative of \(-3x^2\) is \(-6x\). The derivative of the constant \(7\) is \(0\). Therefore the derivative is \(20x^4-6x\).`,
      },
    ],
    examples: [
      {
        title: "Negative powers",
        question: String.raw`Differentiate \(f(x)=x^{-2}+5x\).`,
        answer: String.raw`Using the power rule, \(\frac{d}{dx}x^{-2}=-2x^{-3}\), and \(\frac{d}{dx}5x=5\). Hence \(f'(x)=-2x^{-3}+5\).`,
      },
    ],
  },
  {
    title: "Chain Rule",
    principle: String.raw`The chain rule differentiates a composite function. It says that the rate of change of the outside function must be multiplied by the rate of change of the inside function.`,
    notation: [
      { symbol: "f(g(x))", meaning: "composition of an outer function f with inner function g" },
      { symbol: "u", meaning: "inner expression" },
      { symbol: String.raw`\frac{du}{dx}`, meaning: "derivative of the inner expression" },
    ],
    core: String.raw`Identify the inner expression, differentiate the outside with respect to that inner expression, then multiply by the inner derivative.

<Equation label="Chain rule" tex="\frac{d}{dx}f(g(x))=f'(g(x))g'(x)" />

For powers, if \(u=u(x)\), then \(\frac{d}{dx}u^n=nu^{n-1}u'\).`,
    worked: [
      {
        title: "Power of a function",
        question: String.raw`Differentiate \((3x^2+1)^5\).`,
        answer: String.raw`Let \(u=3x^2+1\). Then the function is \(u^5\), whose derivative with respect to \(u\) is \(5u^4\). Also \(du/dx=6x\). Multiply: \(\frac{d}{dx}(3x^2+1)^5=5(3x^2+1)^4(6x)=30x(3x^2+1)^4\).`,
      },
    ],
    examples: [
      {
        title: "Trigonometric chain rule",
        question: String.raw`Differentiate \(\sin(4x)\).`,
        answer: String.raw`The outside derivative is \(\cos(4x)\), and the derivative of the inside \(4x\) is \(4\). Therefore \(\frac{d}{dx}\sin(4x)=4\cos(4x)\).`,
      },
    ],
  },
  {
    title: "Implicit Differentiation",
    principle: String.raw`Implicit differentiation handles equations where \(y\) is defined by a relationship with \(x\), rather than explicitly as \(y=f(x)\). Treat \(y\) as a function of \(x\).`,
    notation: [
      { symbol: "y", meaning: "dependent variable, treated as y(x)" },
      { symbol: String.raw`\frac{dy}{dx}`, meaning: "derivative of y with respect to x" },
      { symbol: "F(x,y)=0", meaning: "implicit relation between x and y" },
    ],
    core: String.raw`Differentiate both sides with respect to \(x\). Every time a term involving \(y\) is differentiated, multiply by \(dy/dx\).

<Equation label="Implicit chain rule" tex="\frac{d}{dx}(y^n)=ny^{n-1}\frac{dy}{dx}" />

After differentiating, collect all \(dy/dx\) terms and solve for \(dy/dx\).`,
    worked: [
      {
        title: "Circle derivative",
        question: String.raw`Find \(dy/dx\) if \(x^2+y^2=25\).`,
        answer: String.raw`Differentiate both sides: \(2x+2y\frac{dy}{dx}=0\). Move \(2x\) to the other side: \(2y\frac{dy}{dx}=-2x\). Divide by \(2y\): \(\frac{dy}{dx}=-\frac{x}{y}\), where \(y\ne0\).`,
      },
    ],
    examples: [
      {
        title: "Product involving y",
        question: String.raw`Differentiate \(xy=1\) implicitly.`,
        answer: String.raw`Use the product rule on \(xy\): \(\frac{d}{dx}(xy)=x\frac{dy}{dx}+y\). The derivative of \(1\) is \(0\). Thus \(x\frac{dy}{dx}+y=0\), so \(\frac{dy}{dx}=-y/x\) when \(x\ne0\).`,
      },
    ],
  },
  {
    title: "Higher Derivatives",
    principle: String.raw`Higher derivatives repeat the process of differentiation. They measure how rates of change themselves change. For example, the second derivative measures curvature and acceleration.`,
    notation: [
      { symbol: "f''(x)", meaning: "second derivative of f" },
      { symbol: "f^{(n)}(x)", meaning: "nth derivative of f" },
      { symbol: String.raw`\frac{d^2y}{dx^2}`, meaning: "second derivative of y with respect to x" },
    ],
    core: String.raw`Differentiate once to get \(f'\), then differentiate the result to get \(f''\), and continue as needed.

<Equation label="Second derivative" tex="f''(x)=\frac{d}{dx}\left(f'(x)\right)" />

Keep notation clear: \(f^2(x)\) means \((f(x))^2\), but \(f''(x)\) means the second derivative.`,
    worked: [
      {
        title: "Find first and second derivatives",
        question: String.raw`For \(f(x)=x^4-3x^2+2\), find \(f''(x)\).`,
        answer: String.raw`First differentiate: \(f'(x)=4x^3-6x\). Differentiate again: \(f''(x)=12x^2-6\).`,
      },
    ],
    examples: [
      {
        title: "Third derivative",
        question: String.raw`Find \(f^{(3)}(x)\) for \(f(x)=x^5\).`,
        answer: String.raw`Differentiate repeatedly: \(f'(x)=5x^4\), \(f''(x)=20x^3\), and \(f^{(3)}(x)=60x^2\).`,
      },
    ],
  },
  {
    title: "Linear Approximation",
    principle: String.raw`Linear approximation replaces a differentiable function near a point by its tangent line. It is useful when the tangent line is easier to compute than the original function.`,
    notation: [
      { symbol: "L(x)", meaning: "linear approximation to f near a" },
      { symbol: "a", meaning: "base point" },
      { symbol: "f'(a)", meaning: "slope of the tangent line at a" },
    ],
    core: String.raw`Use the tangent line at \(x=a\).

<Equation label="Linear approximation" tex="L(x)=f(a)+f'(a)(x-a)" />

The approximation is best when \(x\) is close to \(a\). The farther \(x\) is from \(a\), the more curvature can affect the error.`,
    worked: [
      {
        title: "Approximate a square root",
        question: String.raw`Use a linear approximation to estimate \(\sqrt{4.1}\).`,
        answer: String.raw`Let \(f(x)=\sqrt{x}\) and choose \(a=4\). Then \(f(4)=2\), and \(f'(x)=1/(2\sqrt{x})\), so \(f'(4)=1/4\). Thus \(L(x)=2+\frac14(x-4)\). At \(x=4.1\), \(L(4.1)=2+0.025=2.025\).`,
      },
    ],
    examples: [
      {
        title: "Approximate a cube",
        question: String.raw`Approximate \((2.02)^3\) using \(f(x)=x^3\) near \(a=2\).`,
        answer: String.raw`Here \(f(2)=8\) and \(f'(x)=3x^2\), so \(f'(2)=12\). The linear approximation is \(L(x)=8+12(x-2)\). At \(x=2.02\), \(L=8+12(0.02)=8.24\).`,
      },
    ],
  },
  {
    title: "Curve Sketching",
    principle: String.raw`Curve sketching combines algebra, derivatives, and limits to describe the main features of a graph. The goal is not a perfect drawing but a reliable structural picture.`,
    notation: [
      { symbol: "f'(x)", meaning: "first derivative, used for increasing and decreasing behaviour" },
      { symbol: "f''(x)", meaning: "second derivative, used for concavity" },
      { symbol: "x_c", meaning: "critical point candidate" },
    ],
    core: String.raw`Find domain, intercepts, asymptotes if relevant, critical points from \(f'(x)=0\) or undefined derivative, and concavity from \(f''(x)\).

<Equation label="Increasing test" tex="f'(x)\gt0\Longrightarrow f\text{ is increasing}" />

<Equation label="Concavity test" tex="f''(x)\gt0\Longrightarrow f\text{ is concave up}" />

Use sign charts to organise intervals.`,
    worked: [
      {
        title: "Sketch features of a cubic",
        question: String.raw`For \(f(x)=x^3-3x\), find the critical points and classify increasing intervals.`,
        answer: String.raw`Differentiate: \(f'(x)=3x^2-3=3(x-1)(x+1)\). Critical points occur at \(x=-1\) and \(x=1\). The derivative is positive for \(x<-1\), negative for \(-1<x<1\), and positive for \(x>1\). Therefore the function increases on \((-
\infty,-1)\) and \((1,\infty)\), and decreases on \((-1,1)\).`,
      },
    ],
    examples: [
      {
        title: "Concavity",
        question: String.raw`For \(f(x)=x^4\), determine the concavity.`,
        answer: String.raw`Compute \(f''(x)=12x^2\). Since \(12x^2\ge0\) for every \(x\), the graph is concave up everywhere, with zero second derivative only at \(x=0\).`,
      },
    ],
  },
  {
    title: "Optimisation",
    principle: String.raw`Optimisation finds the largest or smallest value of a quantity under stated conditions. Calculus identifies candidates using derivatives, then the context decides which candidate is relevant.`,
    notation: [
      { symbol: "Q(x)", meaning: "quantity being optimised" },
      { symbol: "Q'(x)", meaning: "derivative used to find critical points" },
      { symbol: "D", meaning: "allowed domain for the variable" },
    ],
    core: String.raw`Write the target quantity as a function of one variable, restrict the domain, solve \(Q'(x)=0\) or find endpoints, then compare values.

<Equation label="Critical point condition" tex="Q'(x)=0" />

For closed intervals, endpoints must be checked. For open or physical domains, use sign changes, second derivatives, or context to justify the optimum.`,
    worked: [
      {
        title: "Maximum rectangle area",
        question: String.raw`A rectangle has perimeter \(20\). Find the dimensions that maximise its area.`,
        answer: String.raw`Let the sides be \(x\) and \(y\). The perimeter condition gives \(2x+2y=20\), so \(y=10-x\). Area is \(A(x)=x(10-x)=10x-x^2\). Differentiate: \(A'(x)=10-2x\). Set \(A'(x)=0\): \(x=5\), and then \(y=5\). Since \(A\) is a downward-opening quadratic, this is the maximum.`,
      },
    ],
    examples: [
      {
        title: "Minimum on an interval",
        question: String.raw`Find the minimum of \(f(x)=x^2-4x+7\) on \([0,5]\).`,
        answer: String.raw`Differentiate: \(f'(x)=2x-4\). Set \(f'(x)=0\), giving \(x=2\). Check \(x=0,2,5\): \(f(0)=7\), \(f(2)=3\), and \(f(5)=12\). The minimum is \(3\) at \(x=2\).`,
      },
    ],
  },
  {
    title: "Related Rates",
    principle: String.raw`Related rates problems track quantities that change together over time. Equations relate the quantities, and derivatives with respect to time relate their rates.`,
    notation: [
      { symbol: "t", meaning: "time" },
      { symbol: String.raw`\frac{dx}{dt}`, meaning: "rate of change of x with respect to time" },
      { symbol: String.raw`\frac{dy}{dt}`, meaning: "rate of change of y with respect to time" },
    ],
    core: String.raw`Write an equation relating the variables, differentiate both sides with respect to \(t\), substitute the known values at the instant, and solve for the unknown rate.

<Equation label="Time derivative pattern" tex="\frac{d}{dt}(x^2)=2x\frac{dx}{dt}" />

Substitute after differentiating, not before, unless the quantity is constant for all time.`,
    worked: [
      {
        title: "Expanding circle",
        question: String.raw`A circle has radius increasing at \(3\) units per second. How fast is its area changing when \(r=5\)?`,
        answer: String.raw`Area is \(A=\pi r^2\). Differentiate with respect to time: \(\frac{dA}{dt}=2\pi r\frac{dr}{dt}\). Substitute \(r=5\) and \(dr/dt=3\): \(dA/dt=2\pi(5)(3)=30\pi\).`,
      },
    ],
    examples: [
      {
        title: "Moving right triangle",
        question: String.raw`If \(x^2+y^2=25\), \(dx/dt=2\), and \(x=3\), \(y=4\), find \(dy/dt\).`,
        answer: String.raw`Differentiate: \(2x\frac{dx}{dt}+2y\frac{dy}{dt}=0\). Substitute: \(2(3)(2)+2(4)\frac{dy}{dt}=0\). This gives \(12+8dy/dt=0\), so \(dy/dt=-3/2\).`,
      },
    ],
  },
  {
    title: "L'Hopital's Rule",
    principle: String.raw`L'Hopital's rule evaluates certain indeterminate limits by comparing derivatives of the numerator and denominator. It applies only after the limit has been shown to have an allowed indeterminate form.`,
    notation: [
      { symbol: "0/0", meaning: "zero over zero indeterminate form" },
      { symbol: String.raw`\infty/\infty`, meaning: "infinite over infinite indeterminate form" },
      { symbol: "f'(x),g'(x)", meaning: "derivatives of numerator and denominator" },
    ],
    core: String.raw`If \(f(x)\) and \(g(x)\) both approach \(0\), or both grow without bound, and the differentiability conditions hold, then

<Equation label="L'Hopital's rule" tex="\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)}" />

provided the derivative limit exists. Do not use the rule for ordinary finite non-zero quotients.`,
    worked: [
      {
        title: "Zero over zero form",
        question: String.raw`Evaluate \(\lim_{x\to0}\frac{e^x-1}{x}\).`,
        answer: String.raw`Substitution gives \((1-1)/0=0/0\), so the form is allowed. Differentiate numerator and denominator: derivative of \(e^x-1\) is \(e^x\), and derivative of \(x\) is \(1\). The limit becomes \(\lim_{x\to0}e^x=1\).`,
      },
    ],
    examples: [
      {
        title: "Infinite over infinite form",
        question: String.raw`Evaluate \(\lim_{x\to\infty}\frac{x}{e^x}\).`,
        answer: String.raw`Both numerator and denominator grow without bound. Apply L'Hopital's rule: \(\lim_{x\to\infty}\frac{x}{e^x}=\lim_{x\to\infty}\frac{1}{e^x}=0\).`,
      },
    ],
  },
  {
    title: "Antiderivatives",
    principle: String.raw`An antiderivative reverses differentiation. If \(F'(x)=f(x)\), then \(F\) is an antiderivative of \(f\). A constant must be included because constants differentiate to zero.`,
    notation: [
      { symbol: String.raw`\int f(x)\,dx`, meaning: "indefinite integral of f" },
      { symbol: "F(x)", meaning: "an antiderivative of f" },
      { symbol: "C", meaning: "constant of integration" },
    ],
    core: String.raw`Use reverse derivative rules.

<Equation label="Power antiderivative" tex="\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\quad(n\ne-1)" />

Always include \(C\) for indefinite integrals. Check by differentiating the answer.`,
    worked: [
      {
        title: "Integrate a polynomial",
        question: String.raw`Find \(\int(6x^2-4x+5)\,dx\).`,
        answer: String.raw`Integrate term-by-term. \(\int6x^2dx=2x^3\), \(\int-4x\,dx=-2x^2\), and \(\int5\,dx=5x\). Therefore the antiderivative is \(2x^3-2x^2+5x+C\).`,
      },
    ],
    examples: [
      {
        title: "Check an antiderivative",
        question: String.raw`Verify that \(F(x)=\frac13x^3+7\) is an antiderivative of \(x^2\).`,
        answer: String.raw`Differentiate \(F\): \(F'(x)=x^2+0=x^2\). Therefore \(F\) is an antiderivative of \(x^2\).`,
      },
    ],
  },
  {
    title: "Definite Integrals",
    principle: String.raw`A definite integral gives signed accumulation over an interval. Geometrically, it represents signed area between the graph and the \(x\)-axis.`,
    notation: [
      { symbol: String.raw`\int_a^b f(x)\,dx`, meaning: "definite integral from a to b" },
      { symbol: "a,b", meaning: "lower and upper limits of integration" },
      { symbol: "F", meaning: "an antiderivative of f" },
    ],
    core: String.raw`Find an antiderivative and subtract endpoint values.

<Equation label="Evaluation rule" tex="\int_a^b f(x)\,dx=F(b)-F(a)" />

Positive area above the axis contributes positively; area below the axis contributes negatively.`,
    worked: [
      {
        title: "Evaluate a definite integral",
        question: String.raw`Compute \(\int_1^3 2x\,dx\).`,
        answer: String.raw`An antiderivative of \(2x\) is \(x^2\). Evaluate at the endpoints: \(x^2\big|_1^3=3^2-1^2=9-1=8\).`,
      },
    ],
    examples: [
      {
        title: "Signed area",
        question: String.raw`Compute \(\int_{-1}^{1}x\,dx\).`,
        answer: String.raw`An antiderivative is \(x^2/2\). Evaluate: \(\frac{1^2}{2}-\frac{(-1)^2}{2}=\frac12-\frac12=0\). The positive and negative signed areas cancel.`,
      },
    ],
  },
  {
    title: "Fundamental Theorem Of Calculus",
    principle: String.raw`The fundamental theorem connects differentiation and integration. It says accumulation functions have derivatives, and definite integrals can be evaluated using antiderivatives.`,
    notation: [
      { symbol: String.raw`A(x)=\int_a^x f(t)\,dt`, meaning: "accumulation function" },
      { symbol: "t", meaning: "dummy variable of integration" },
      { symbol: "F", meaning: "antiderivative of f" },
    ],
    core: String.raw`There are two linked statements.

<Equation label="FTC Part 1" tex="\frac{d}{dx}\int_a^x f(t)\,dt=f(x)" />

<Equation label="FTC Part 2" tex="\int_a^b f(x)\,dx=F(b)-F(a)" />

Use Part 1 for derivatives of accumulation functions and Part 2 for evaluating definite integrals.`,
    worked: [
      {
        title: "Differentiate an accumulation function",
        question: String.raw`Find \(\frac{d}{dx}\int_2^x \cos(t^2)\,dt\).`,
        answer: String.raw`The upper limit is \(x\), and the integrand is continuous. By the fundamental theorem, the derivative is the integrand evaluated at \(t=x\): \(\cos(x^2)\).`,
      },
    ],
    examples: [
      {
        title: "Variable upper limit with chain rule",
        question: String.raw`Differentiate \(\int_0^{x^2} e^t\,dt\).`,
        answer: String.raw`Let \(u=x^2\). The derivative of \(\int_0^u e^t\,dt\) with respect to \(u\) is \(e^u\). Multiply by \(du/dx=2x\). The derivative is \(2xe^{x^2}\).`,
      },
    ],
  },
  {
    title: "Substitution",
    principle: String.raw`Substitution reverses the chain rule. It is used when an integral contains an inner expression and a matching derivative factor.`,
    notation: [
      { symbol: "u", meaning: "new variable used for the inner expression" },
      { symbol: "du", meaning: "differential corresponding to u" },
      { symbol: "dx", meaning: "differential corresponding to x" },
    ],
    core: String.raw`Choose \(u=g(x)\), compute \(du=g'(x)dx\), replace the integral in terms of \(u\), integrate, then substitute back.

<Equation label="Substitution pattern" tex="\int f(g(x))g'(x)\,dx=\int f(u)\,du" />

For definite integrals, either change the limits to \(u\)-values or substitute back before evaluating.`,
    worked: [
      {
        title: "Power substitution",
        question: String.raw`Find \(\int 2x(x^2+1)^4\,dx\).`,
        answer: String.raw`Let \(u=x^2+1\). Then \(du=2x\,dx\). The integral becomes \(\int u^4\,du\). Integrate: \(u^5/5+C\). Substitute back to get \(\frac{(x^2+1)^5}{5}+C\).`,
      },
    ],
    examples: [
      {
        title: "Definite substitution",
        question: String.raw`Evaluate \(\int_0^1 2x e^{x^2}\,dx\).`,
        answer: String.raw`Let \(u=x^2\), so \(du=2x\,dx\). When \(x=0\), \(u=0\); when \(x=1\), \(u=1\). The integral becomes \(\int_0^1 e^u\,du=e^u\big|_0^1=e-1\).`,
      },
    ],
  },
  {
    title: "Integration By Parts",
    principle: String.raw`Integration by parts reverses the product rule. It is useful when an integrand is a product and differentiating one factor simplifies it.`,
    notation: [
      { symbol: "u", meaning: "factor chosen to be differentiated" },
      { symbol: "dv", meaning: "factor chosen to be integrated" },
      { symbol: "v", meaning: "an antiderivative of dv" },
    ],
    core: String.raw`Choose \(u\) and \(dv\), then compute \(du\) and \(v\).

<Equation label="Integration by parts" tex="\int u\,dv=uv-\int v\,du" />

A good choice makes the remaining integral simpler than the original one.`,
    worked: [
      {
        title: "Polynomial times exponential",
        question: String.raw`Find \(\int x e^x\,dx\).`,
        answer: String.raw`Choose \(u=x\), so \(du=dx\), and choose \(dv=e^x dx\), so \(v=e^x\). Then \(\int x e^x dx=xe^x-\int e^x dx=xe^x-e^x+C\).`,
      },
    ],
    examples: [
      {
        title: "Logarithm integral",
        question: String.raw`Find \(\int \ln x\,dx\) for \(x>0\).`,
        answer: String.raw`Write \(\ln x\) as \(\ln x\cdot1\). Choose \(u=\ln x\), so \(du=dx/x\), and \(dv=dx\), so \(v=x\). Then \(\int\ln x\,dx=x\ln x-\int1\,dx=x\ln x-x+C\).`,
      },
    ],
  },
  {
    title: "Partial Fractions",
    principle: String.raw`Partial fractions rewrite a rational function as a sum of simpler rational functions. This makes integration possible using logarithms and basic antiderivatives.`,
    notation: [
      { symbol: String.raw`\frac{P(x)}{Q(x)}`, meaning: "rational function" },
      { symbol: "A,B", meaning: "constants to determine" },
      { symbol: "Q(x)", meaning: "denominator polynomial" },
    ],
    core: String.raw`Factor the denominator, write the correct partial fraction form, multiply through by the denominator, and solve for constants.

<Equation label="Linear factors" tex="\frac{P(x)}{(x-a)(x-b)}=\frac{A}{x-a}+\frac{B}{x-b}" />

If the numerator degree is not smaller than the denominator degree, divide first.`,
    worked: [
      {
        title: "Decompose and integrate",
        question: String.raw`Find \(\int \frac{3x+5}{(x+1)(x+2)}\,dx\).`,
        answer: String.raw`Write \(\frac{3x+5}{(x+1)(x+2)}=\frac{A}{x+1}+\frac{B}{x+2}\). Multiply through: \(3x+5=A(x+2)+B(x+1)\). Set \(x=-1\): \(2=A\). Set \(x=-2\): \(-1=-B\), so \(B=1\). The integral is \(2\ln|x+1|+\ln|x+2|+C\).`,
      },
    ],
    examples: [
      {
        title: "Repeated factor shape",
        question: String.raw`What form is used for \(\frac{1}{x(x-1)^2}\)?`,
        answer: String.raw`Use one term for \(x\), and one term for each power of the repeated factor: \(\frac{1}{x(x-1)^2}=\frac{A}{x}+\frac{B}{x-1}+\frac{C}{(x-1)^2}\).`,
      },
    ],
  },
  {
    title: "Improper Integrals",
    principle: String.raw`An improper integral has an infinite interval, an unbounded integrand, or both. It is defined using limits, and it converges only if those limits exist as finite numbers.`,
    notation: [
      { symbol: String.raw`\int_a^\infty f(x)\,dx`, meaning: "improper integral over an infinite interval" },
      { symbol: String.raw`\lim_{b\to\infty}`, meaning: "limit used to define an infinite endpoint" },
      { symbol: "p", meaning: "power in a p-integral" },
    ],
    core: String.raw`Replace the improper endpoint or singular point by a finite variable, integrate, and take the limit.

<Equation label="Infinite interval" tex="\int_a^\infty f(x)\,dx=\lim_{b\to\infty}\int_a^b f(x)\,dx" />

For \(p\)-integrals, \(\int_1^\infty x^{-p}dx\) converges exactly when \(p>1\).`,
    worked: [
      {
        title: "Convergent p-integral",
        question: String.raw`Evaluate \(\int_1^\infty \frac{1}{x^2}\,dx\).`,
        answer: String.raw`Write the integral as \(\lim_{b\to\infty}\int_1^b x^{-2}dx\). An antiderivative is \(-x^{-1}\). Evaluate: \([-1/x]_1^b=-1/b+1\). Taking \(b\to\infty\) gives \(1\).`,
      },
    ],
    examples: [
      {
        title: "Divergent integral",
        question: String.raw`Does \(\int_1^\infty \frac{1}{x}\,dx\) converge?`,
        answer: String.raw`Use a limit: \(\int_1^b \frac1x dx=\ln b-\ln1=\ln b\). As \(b\to\infty\), \(\ln b\to\infty\). Therefore the improper integral diverges.`,
      },
    ],
  },
  {
    title: "Areas Between Curves",
    principle: String.raw`Area between curves is found by integrating vertical or horizontal slices. The integrand is always a non-negative distance between the bounding curves on the chosen interval.`,
    notation: [
      { symbol: "A", meaning: "area between curves" },
      { symbol: "f(x),g(x)", meaning: "upper and lower functions in x-slices" },
      { symbol: "a,b", meaning: "intersection or boundary x-values" },
    ],
    core: String.raw`For vertical slices, subtract lower from upper.

<Equation label="Area between curves" tex="A=\int_a^b(\text{upper}-\text{lower})\,dx" />

Find intersections first if the interval is not given. If the upper curve changes, split the integral.`,
    worked: [
      {
        title: "Parabola and line",
        question: String.raw`Find the area between \(y=x\) and \(y=x^2\) from \(x=0\) to \(x=1\).`,
        answer: String.raw`On \([0,1]\), \(x\ge x^2\), so the area is \(\int_0^1(x-x^2)dx\). Integrate: \(x^2/2-x^3/3\). Evaluate from \(0\) to \(1\): \(1/2-1/3=1/6\).`,
      },
    ],
    examples: [
      {
        title: "Find intersections",
        question: String.raw`Find where \(y=2x\) and \(y=x^2\) intersect.`,
        answer: String.raw`Set the functions equal: \(2x=x^2\). Rearranging gives \(x^2-2x=0\), so \(x(x-2)=0\). The intersections occur at \(x=0\) and \(x=2\).`,
      },
    ],
  },
  {
    title: "Volumes",
    principle: String.raw`Volumes from calculus are found by slicing a solid into thin cross-sections and integrating cross-sectional area. The formula depends on the geometry of the slices.`,
    notation: [
      { symbol: "V", meaning: "volume" },
      { symbol: "A(x)", meaning: "cross-sectional area at x" },
      { symbol: "R(x),r(x)", meaning: "outer and inner radii for washers" },
    ],
    core: String.raw`Use the slice formula.

<Equation label="Volume by cross-sections" tex="V=\int_a^b A(x)\,dx" />

For rotation about a horizontal axis with washers,

<Equation label="Washer method" tex="V=\pi\int_a^b\left(R(x)^2-r(x)^2\right)\,dx" />`,
    worked: [
      {
        title: "Disk method",
        question: String.raw`Find the volume formed by rotating \(y=x\) from \(x=0\) to \(x=2\) about the \(x\)-axis.`,
        answer: String.raw`A slice perpendicular to the \(x\)-axis forms a disk with radius \(R(x)=x\). Thus \(A(x)=\pi x^2\). The volume is \(V=\pi\int_0^2 x^2dx=\pi[x^3/3]_0^2=8\pi/3\).`,
      },
    ],
    examples: [
      {
        title: "Washer setup",
        question: String.raw`Set up the volume from rotating the region between \(y=2\) and \(y=x\), \(0\le x\le1\), about the \(x\)-axis.`,
        answer: String.raw`The outer radius is \(R=2\), and the inner radius is \(r=x\). The washer formula gives \(V=\pi\int_0^1(2^2-x^2)dx\).`,
      },
    ],
  },
  {
    title: "Arc Length",
    principle: String.raw`Arc length measures the length of a curve. Calculus obtains it by adding tiny straight-line distances along the graph and passing to a limit.`,
    notation: [
      { symbol: "s", meaning: "arc length" },
      { symbol: "f'(x)", meaning: "slope of the graph y=f(x)" },
      { symbol: "a,b", meaning: "endpoints of the x-interval" },
    ],
    core: String.raw`For a differentiable graph \(y=f(x)\), use

<Equation label="Arc length" tex="s=\int_a^b\sqrt{1+(f'(x))^2}\,dx" />

The square root comes from Pythagoras applied to a small horizontal change and the corresponding vertical change.`,
    worked: [
      {
        title: "Straight line length",
        question: String.raw`Find the arc length of \(y=3x+1\) from \(x=0\) to \(x=2\).`,
        answer: String.raw`Here \(f'(x)=3\). The arc length is \(\int_0^2\sqrt{1+3^2}\,dx=\int_0^2\sqrt{10}\,dx=2\sqrt{10}\).`,
      },
    ],
    examples: [
      {
        title: "Set up a curved length",
        question: String.raw`Set up the arc length of \(y=x^2\) from \(x=0\) to \(x=1\).`,
        answer: String.raw`The derivative is \(f'(x)=2x\). Therefore the arc length is \(\int_0^1\sqrt{1+(2x)^2}\,dx=\int_0^1\sqrt{1+4x^2}\,dx\).`,
      },
    ],
  },
  {
    title: "Sequences",
    principle: String.raw`A sequence is an ordered list of numbers indexed by positive integers. Calculus studies whether sequence terms approach a limiting value as the index grows.`,
    notation: [
      { symbol: "a_n", meaning: "nth term of a sequence" },
      { symbol: "n", meaning: "positive integer index" },
      { symbol: String.raw`\lim_{n\to\infty}a_n`, meaning: "limit of the sequence" },
    ],
    core: String.raw`To test convergence, analyse the expression for \(a_n\) as \(n\to\infty\).

<Equation label="Sequence convergence" tex="a_n\to L\Longleftrightarrow \lim_{n\to\infty}a_n=L" />

For rational expressions in \(n\), divide by the highest power of \(n\).`,
    worked: [
      {
        title: "Rational sequence",
        question: String.raw`Find \(\lim_{n\to\infty}\frac{3n+1}{2n-5}\).`,
        answer: String.raw`Divide numerator and denominator by \(n\): \(\frac{3+1/n}{2-5/n}\). As \(n\to\infty\), \(1/n\to0\) and \(5/n\to0\). The limit is \(3/2\).`,
      },
    ],
    examples: [
      {
        title: "Divergent sequence",
        question: String.raw`Does \(a_n=(-1)^n\) converge?`,
        answer: String.raw`The terms alternate between \(-1\) and \(1\). They do not approach a single number. Therefore the sequence diverges.`,
      },
    ],
  },
  {
    title: "Series",
    principle: String.raw`A series is the sum of sequence terms. Its convergence depends on whether the partial sums approach a finite limit.`,
    notation: [
      { symbol: String.raw`\sum_{n=1}^{\infty}a_n`, meaning: "infinite series" },
      { symbol: "S_N", meaning: "Nth partial sum" },
      { symbol: "a_n", meaning: "nth term of the series" },
    ],
    core: String.raw`Define partial sums and take their limit.

<Equation label="Partial sum" tex="S_N=a_1+a_2+\cdots+a_N" />

<Equation label="Series convergence" tex="\sum_{n=1}^{\infty}a_n\text{ converges }\Longleftrightarrow \lim_{N\to\infty}S_N\text{ exists finitely}" />

If \(a_n\) does not approach zero, the series diverges.`,
    worked: [
      {
        title: "Geometric series",
        question: String.raw`Find \(\sum_{n=0}^{\infty}\left(\frac12\right)^n\).`,
        answer: String.raw`This is a geometric series with first term \(1\) and ratio \(r=1/2\). Since \(|r|<1\), it converges to \(\frac{1}{1-r}=\frac{1}{1-1/2}=2\).`,
      },
    ],
    examples: [
      {
        title: "Term test",
        question: String.raw`Why does \(\sum_{n=1}^{\infty}\frac{n}{n+1}\) diverge?`,
        answer: String.raw`The terms satisfy \(\frac{n}{n+1}\to1\), not \(0\). Since a convergent series must have terms tending to zero, the series diverges by the term test.`,
      },
    ],
  },
  {
    title: "Convergence Tests",
    principle: String.raw`Convergence tests give structured ways to decide whether a series converges without finding its exact sum. The correct test depends on the form and sign of the terms.`,
    notation: [
      { symbol: "a_n", meaning: "nth term of a series" },
      { symbol: "p", meaning: "power in a p-series" },
      { symbol: "r", meaning: "ratio-test limit" },
    ],
    core: String.raw`Common tests include the term test, comparison tests, \(p\)-series test, ratio test, and alternating series test.

<Equation label="p-series rule" tex="\sum_{n=1}^{\infty}\frac{1}{n^p}\text{ converges exactly when }p\gt1" />

For the ratio test, compute \(r=\lim |a_{n+1}/a_n|\). The series converges if \(r<1\), diverges if \(r>1\), and needs another test if \(r=1\).`,
    worked: [
      {
        title: "Ratio test",
        question: String.raw`Test \(\sum_{n=1}^{\infty}\frac{1}{n!}\) for convergence.`,
        answer: String.raw`Let \(a_n=1/n!\). Then \(\left|\frac{a_{n+1}}{a_n}\right|=\frac{1/(n+1)!}{1/n!}=\frac{1}{n+1}\). The limit is \(0\), which is less than \(1\). Therefore the series converges.`,
      },
    ],
    examples: [
      {
        title: "p-series",
        question: String.raw`Does \(\sum_{n=1}^{\infty}\frac{1}{n^{3/2}}\) converge?`,
        answer: String.raw`This is a \(p\)-series with \(p=3/2\). Since \(3/2>1\), the series converges.`,
      },
    ],
  },
  {
    title: "Power Series",
    principle: String.raw`A power series is a series of powers of \(x-a\). It behaves like an infinite polynomial within its interval of convergence.`,
    notation: [
      { symbol: String.raw`\sum c_n(x-a)^n`, meaning: "power series centred at a" },
      { symbol: "R", meaning: "radius of convergence" },
      { symbol: "c_n", meaning: "coefficient of the nth power" },
    ],
    core: String.raw`Use a convergence test, often the ratio test, to find values of \(x\) for which the series converges.

<Equation label="Power series form" tex="\sum_{n=0}^{\infty}c_n(x-a)^n" />

The result is usually \(|x-a|<R\), plus separate endpoint tests. Endpoint behaviour is not decided by the radius alone.`,
    worked: [
      {
        title: "Find a radius",
        question: String.raw`Find the radius of convergence of \(\sum_{n=0}^{\infty}x^n\).`,
        answer: String.raw`This is a geometric series with ratio \(x\). It converges when \(|x|<1\). Therefore the radius of convergence is \(R=1\).`,
      },
    ],
    examples: [
      {
        title: "Shifted centre",
        question: String.raw`For \(\sum_{n=0}^{\infty}(x-2)^n\), state the centre and radius.`,
        answer: String.raw`The series is geometric with ratio \(x-2\), so it converges when \(|x-2|<1\). The centre is \(2\), and the radius is \(1\).`,
      },
    ],
  },
  {
    title: "Taylor Series",
    principle: String.raw`A Taylor series represents a function by matching all derivatives at a chosen centre. It builds a local polynomial approximation with infinitely many terms.`,
    notation: [
      { symbol: "a", meaning: "centre of the Taylor series" },
      { symbol: "f^{(n)}(a)", meaning: "nth derivative of f at a" },
      { symbol: "n!", meaning: "factorial of n" },
    ],
    core: String.raw`The Taylor series of \(f\) about \(a\) is

<Equation label="Taylor series" tex="f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n" />

When \(a=0\), this is called the Maclaurin series. A Taylor polynomial stops after finitely many terms.`,
    worked: [
      {
        title: "Maclaurin series for exponential",
        question: String.raw`Write the Maclaurin series for \(e^x\).`,
        answer: String.raw`Every derivative of \(e^x\) is \(e^x\), so \(f^{(n)}(0)=1\) for every \(n\). Therefore \(e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!}=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots\).`,
      },
    ],
    examples: [
      {
        title: "Quadratic Taylor polynomial",
        question: String.raw`Find the degree 2 Maclaurin polynomial for \(\cos x\).`,
        answer: String.raw`The Maclaurin series begins \(\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots\). Keeping terms through degree 2 gives \(1-x^2/2\).`,
      },
    ],
  },
  {
    title: "Fourier Series",
    principle: String.raw`A Fourier series represents a periodic function as a sum of sines and cosines. It decomposes a signal into frequency components.`,
    notation: [
      { symbol: "L", meaning: "half-period for an interval [-L,L]" },
      { symbol: "a_n,b_n", meaning: "Fourier coefficients" },
      { symbol: String.raw`\sin,\cos`, meaning: "basic periodic waves" },
    ],
    core: String.raw`For a function with period \(2L\), the real Fourier series has the form

<Equation label="Fourier series" tex="f(x)\sim \frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi x}{L}+b_n\sin\frac{n\pi x}{L}\right)" />

Even functions have only cosine terms. Odd functions have only sine terms. Symmetry is often the fastest simplification.`,
    worked: [
      {
        title: "Use symmetry",
        question: String.raw`If \(f\) is odd on \([-L,L]\), which Fourier coefficients are zero?`,
        answer: String.raw`For an odd function, \(f(x)\cos(n\pi x/L)\) is odd because cosine is even, so its symmetric integral is zero. Also \(a_0=0\). Therefore all cosine coefficients \(a_n\) and \(a_0\) are zero; only sine coefficients \(b_n\) can remain.`,
      },
    ],
    examples: [
      {
        title: "Identify period",
        question: String.raw`What is the period of \(\sin(3x)\)?`,
        answer: String.raw`The sine function repeats when its input increases by \(2\pi\). For \(\sin(3x)\), require \(3(x+T)=3x+2\pi\). Thus \(3T=2\pi\), so \(T=2\pi/3\).`,
      },
    ],
  },
  {
    title: "Multivariable Functions",
    principle: String.raw`A multivariable function has more than one input. Its graph and level sets describe how outputs depend on several directions of change.`,
    notation: [
      { symbol: "f(x,y)", meaning: "function of two variables" },
      { symbol: "D", meaning: "domain in the input plane" },
      { symbol: "z=f(x,y)", meaning: "surface in three-dimensional space" },
    ],
    core: String.raw`Identify the allowed input pairs and evaluate the output. For two inputs, the graph is a surface.

<Equation label="Two-variable function" tex="f:D\subseteq\mathbb R^2\to\mathbb R" />

Level curves are found by setting \(f(x,y)=c\), where \(c\) is a constant.`,
    worked: [
      {
        title: "Domain with a square root",
        question: String.raw`Find the domain of \(f(x,y)=\sqrt{9-x^2-y^2}\).`,
        answer: String.raw`The expression under the square root must be non-negative: \(9-x^2-y^2\ge0\). Rearranging gives \(x^2+y^2\le9\). The domain is the closed disk of radius \(3\) centred at the origin.`,
      },
    ],
    examples: [
      {
        title: "Level curve",
        question: String.raw`Describe the level curve \(f(x,y)=4\) for \(f(x,y)=x^2+y^2\).`,
        answer: String.raw`Set \(x^2+y^2=4\). This is a circle of radius \(2\) centred at the origin.`,
      },
    ],
  },
  {
    title: "Partial Derivatives",
    principle: String.raw`A partial derivative measures the rate of change with respect to one input while the other inputs are held constant.`,
    notation: [
      { symbol: "f_x", meaning: "partial derivative with respect to x" },
      { symbol: "f_y", meaning: "partial derivative with respect to y" },
      { symbol: String.raw`\frac{\partial f}{\partial x}`, meaning: "same as f_x" },
    ],
    core: String.raw`To compute \(f_x\), treat \(y\) as a constant and differentiate with respect to \(x\). To compute \(f_y\), treat \(x\) as a constant.

<Equation label="Partial derivative" tex="f_x(x,y)=\frac{\partial f}{\partial x}" />

The notation changes, but the differentiation rules are the same.`,
    worked: [
      {
        title: "Compute first partials",
        question: String.raw`For \(f(x,y)=x^2y+3y^2\), find \(f_x\) and \(f_y\).`,
        answer: String.raw`For \(f_x\), treat \(y\) as constant: \(f_x=2xy\). For \(f_y\), treat \(x\) as constant: the derivative of \(x^2y\) is \(x^2\), and the derivative of \(3y^2\) is \(6y\). Thus \(f_y=x^2+6y\).`,
      },
    ],
    examples: [
      {
        title: "Evaluate a partial",
        question: String.raw`If \(f_x=2xy\), find \(f_x(3,-1)\).`,
        answer: String.raw`Substitute \(x=3\) and \(y=-1\): \(f_x(3,-1)=2(3)(-1)=-6\).`,
      },
    ],
  },
  {
    title: "Gradient",
    principle: String.raw`The gradient packages all first partial derivatives into a vector. It points in the direction of greatest increase and is perpendicular to level curves or level surfaces.`,
    notation: [
      { symbol: String.raw`\nabla f`, meaning: "gradient of f" },
      { symbol: "f_x,f_y", meaning: "first partial derivatives" },
      { symbol: String.raw`\mathbf u`, meaning: "unit direction vector" },
    ],
    core: String.raw`For a two-variable function,

<Equation label="Gradient" tex="\nabla f=(f_x,f_y)" />

The directional derivative in a unit direction \(\mathbf u\) is

<Equation label="Directional derivative" tex="D_{\mathbf u}f=\nabla f\cdot\mathbf u" />`,
    worked: [
      {
        title: "Find a gradient",
        question: String.raw`For \(f(x,y)=x^2+xy\), find \(\nabla f(1,2)\).`,
        answer: String.raw`Compute partial derivatives: \(f_x=2x+y\), and \(f_y=x\). Evaluate at \((1,2)\): \(f_x(1,2)=4\), and \(f_y(1,2)=1\). Therefore \(\nabla f(1,2)=(4,1)\).`,
      },
    ],
    examples: [
      {
        title: "Directional derivative",
        question: String.raw`If \(\nabla f(0,0)=(3,4)\), find the rate of change in direction \(\mathbf u=(1,0)\).`,
        answer: String.raw`Use the dot product: \(D_{\mathbf u}f=(3,4)\cdot(1,0)=3\).`,
      },
    ],
  },
  {
    title: "Multivariable Chain Rule",
    principle: String.raw`The multivariable chain rule differentiates a function whose inputs themselves depend on another variable. It adds the contributions through each input path.`,
    notation: [
      { symbol: "z=f(x,y)", meaning: "dependent variable as a function of x and y" },
      { symbol: "x(t),y(t)", meaning: "input variables depending on t" },
      { symbol: String.raw`\frac{dz}{dt}`, meaning: "total derivative with respect to t" },
    ],
    core: String.raw`If \(z=f(x,y)\), with \(x=x(t)\) and \(y=y(t)\), then

<Equation label="Multivariable chain rule" tex="\frac{dz}{dt}=f_x\frac{dx}{dt}+f_y\frac{dy}{dt}" />

Each term is one route by which changing \(t\) changes \(z\).`,
    worked: [
      {
        title: "Compute a total derivative",
        question: String.raw`Let \(z=x^2+y^2\), \(x=t\), and \(y=t^2\). Find \(dz/dt\).`,
        answer: String.raw`Compute partial derivatives: \(f_x=2x\), \(f_y=2y\). Also \(dx/dt=1\), and \(dy/dt=2t\). Thus \(dz/dt=2x(1)+2y(2t)\). Substitute \(x=t\), \(y=t^2\): \(dz/dt=2t+4t^3\).`,
      },
    ],
    examples: [
      {
        title: "Two paths",
        question: String.raw`Why are there two terms in \(f_xx'(t)+f_yy'(t)\)?`,
        answer: String.raw`The output changes when \(x\) changes and when \(y\) changes. The term \(f_xx'(t)\) measures the contribution through \(x\), and \(f_yy'(t)\) measures the contribution through \(y\). The total derivative adds both effects.`,
      },
    ],
  },
  {
    title: "Critical Points",
    principle: String.raw`Critical points of multivariable functions are candidates for local maxima, local minima, or saddle points. They occur where the gradient is zero or undefined.`,
    notation: [
      { symbol: String.raw`\nabla f`, meaning: "gradient of f" },
      { symbol: "f_{xx},f_{yy},f_{xy}", meaning: "second partial derivatives" },
      { symbol: "D", meaning: "second derivative test determinant" },
    ],
    core: String.raw`For differentiable \(f(x,y)\), solve

<Equation label="Critical point condition" tex="\nabla f=(0,0)" />

For the second derivative test, compute

<Equation label="Discriminant" tex="D=f_{xx}f_{yy}-(f_{xy})^2" />

If \(D>0\) and \(f_{xx}>0\), there is a local minimum. If \(D>0\) and \(f_{xx}<0\), there is a local maximum. If \(D<0\), there is a saddle point.`,
    worked: [
      {
        title: "Classify a critical point",
        question: String.raw`Classify the critical point of \(f(x,y)=x^2+y^2\).`,
        answer: String.raw`The gradient is \(\nabla f=(2x,2y)\), so the only critical point is \((0,0)\). The second partials are \(f_{xx}=2\), \(f_{yy}=2\), and \(f_{xy}=0\). Thus \(D=2\cdot2-0=4>0\), and \(f_{xx}>0\). Therefore \((0,0)\) is a local minimum.`,
      },
    ],
    examples: [
      {
        title: "Saddle point",
        question: String.raw`Classify \((0,0)\) for \(f(x,y)=x^2-y^2\).`,
        answer: String.raw`Here \(f_{xx}=2\), \(f_{yy}=-2\), and \(f_{xy}=0\). Then \(D=2(-2)-0=-4<0\). Therefore \((0,0)\) is a saddle point.`,
      },
    ],
  },
  {
    title: "Multiple Integrals",
    principle: String.raw`Multiple integrals accumulate a function over a two-dimensional or three-dimensional region. They generalise area and volume integrals.`,
    notation: [
      { symbol: String.raw`\iint_R f(x,y)\,dA`, meaning: "double integral over region R" },
      { symbol: "R", meaning: "region of integration" },
      { symbol: "dA", meaning: "small area element" },
    ],
    core: String.raw`For rectangular regions, integrate one variable at a time.

<Equation label="Iterated integral" tex="\iint_R f(x,y)\,dA=\int_a^b\int_c^d f(x,y)\,dy\,dx" />

The inner integral treats the outer variable as constant. For non-rectangular regions, the limits describe the boundary curves.`,
    worked: [
      {
        title: "Integrate over a rectangle",
        question: String.raw`Evaluate \(\int_0^1\int_0^2 xy\,dy\,dx\).`,
        answer: String.raw`First integrate with respect to \(y\): \(\int_0^2 xy\,dy=x[y^2/2]_0^2=2x\). Now integrate with respect to \(x\): \(\int_0^1 2x\,dx=[x^2]_0^1=1\).`,
      },
    ],
    examples: [
      {
        title: "Area as a double integral",
        question: String.raw`What does \(\iint_R 1\,dA\) represent?`,
        answer: String.raw`Integrating the constant function \(1\) over a region adds one unit of height over every small area element. The result is the area of \(R\).`,
      },
    ],
  },
  {
    title: "Coordinate Changes",
    principle: String.raw`Coordinate changes rewrite an integral using variables better suited to the region. The area or volume element changes by a scale factor called a Jacobian.`,
    notation: [
      { symbol: "u,v", meaning: "new variables" },
      { symbol: "J", meaning: "Jacobian determinant" },
      { symbol: String.raw`r,\theta`, meaning: "polar coordinates" },
    ],
    core: String.raw`When changing variables, transform both the integrand and the area element.

<Equation label="Change of variables" tex="dA=|J|\,du\,dv" />

For polar coordinates,

<Equation label="Polar area element" tex="x=r\cos\theta,\quad y=r\sin\theta,\quad dA=r\,dr\,d\theta" />`,
    worked: [
      {
        title: "Polar disk area",
        question: String.raw`Use polar coordinates to find the area of a disk of radius \(a\).`,
        answer: String.raw`The disk is \(0\le r\le a\), \(0\le\theta\le2\pi\). Area is \(\int_0^{2\pi}\int_0^a r\,dr\,d\theta\). The inner integral is \(a^2/2\). Multiplying by \(2\pi\) gives \(\pi a^2\).`,
      },
    ],
    examples: [
      {
        title: "Why the factor r appears",
        question: String.raw`Why is \(dA=r\,dr\,d\theta\) in polar coordinates?`,
        answer: String.raw`A small polar sector has radial thickness \(dr\) and arc length approximately \(r\,d\theta\). Multiplying these gives area approximately \(r\,dr\,d\theta\), so the Jacobian factor is \(r\).`,
      },
    ],
  },
  {
    title: "First-Order Differential Equations",
    principle: String.raw`A first-order differential equation relates an unknown function to its first derivative. Solving it means finding functions that satisfy the derivative relationship.`,
    notation: [
      { symbol: "y'", meaning: "first derivative of y with respect to x" },
      { symbol: String.raw`\frac{dy}{dx}`, meaning: "same first derivative in differential notation" },
      { symbol: "C", meaning: "constant determined by an initial condition" },
    ],
    core: String.raw`A common linear form is

<Equation label="First-order linear equation" tex="y'+p(x)y=q(x)" />

For direct equations such as \(dy/dx=f(x)\), integrate both sides. For separable equations, separate variables before integrating.`,
    worked: [
      {
        title: "Direct integration",
        question: String.raw`Solve \(dy/dx=3x^2\).`,
        answer: String.raw`Integrate both sides with respect to \(x\): \(y=\int3x^2dx=x^3+C\). Every function \(y=x^3+C\) has derivative \(3x^2\).`,
      },
    ],
    examples: [
      {
        title: "Use an initial condition",
        question: String.raw`Solve \(y'=2x\) with \(y(1)=5\).`,
        answer: String.raw`Integrate: \(y=x^2+C\). Use \(y(1)=5\): \(1+C=5\), so \(C=4\). Therefore \(y=x^2+4\).`,
      },
    ],
  },
  {
    title: "Second-Order Differential Equations",
    principle: String.raw`A second-order differential equation involves the second derivative of an unknown function. Such equations often model acceleration, oscillation, and curvature.`,
    notation: [
      { symbol: "y''", meaning: "second derivative of y" },
      { symbol: "r", meaning: "trial exponent parameter" },
      { symbol: "C_1,C_2", meaning: "constants in the general solution" },
    ],
    core: String.raw`For constant-coefficient homogeneous equations, try \(y=e^{rx}\). This gives a polynomial equation in \(r\).

<Equation label="Characteristic equation" tex="ay''+by'+cy=0\Longrightarrow ar^2+br+c=0" />

The roots determine the form of the solution.`,
    worked: [
      {
        title: "Distinct real roots",
        question: String.raw`Solve \(y''-3y'+2y=0\).`,
        answer: String.raw`The characteristic equation is \(r^2-3r+2=0\). Factor: \((r-1)(r-2)=0\), so \(r=1\) or \(r=2\). Therefore the general solution is \(y=C_1e^x+C_2e^{2x}\).`,
      },
    ],
    examples: [
      {
        title: "Repeated root form",
        question: String.raw`What solution form follows from characteristic root \(r=4\) repeated twice?`,
        answer: String.raw`A repeated root gives two independent solutions, \(e^{4x}\) and \(xe^{4x}\). The general solution is \(y=(C_1+C_2x)e^{4x}\).`,
      },
    ],
  },
  {
    title: "Series Solutions",
    principle: String.raw`Series solutions represent an unknown function as a power series and determine coefficients by substituting into a differential equation.`,
    notation: [
      { symbol: String.raw`y=\sum a_nx^n`, meaning: "power series form of the solution" },
      { symbol: "a_n", meaning: "coefficient to determine" },
      { symbol: "y',y''", meaning: "derivatives of the series" },
    ],
    core: String.raw`Assume a power series, differentiate term-by-term, substitute into the equation, align powers of \(x\), and equate coefficients.

<Equation label="Power series trial" tex="y=\sum_{n=0}^{\infty}a_nx^n" />

The coefficient equations usually produce a recurrence relation for \(a_n\).`,
    worked: [
      {
        title: "Differentiate a trial series",
        question: String.raw`If \(y=\sum_{n=0}^{\infty}a_nx^n\), write \(y'\).`,
        answer: String.raw`Differentiate term-by-term: the derivative of \(a_nx^n\) is \(na_nx^{n-1}\). The \(n=0\) term differentiates to zero, so \(y'=\sum_{n=1}^{\infty}na_nx^{n-1}\).`,
      },
    ],
    examples: [
      {
        title: "Align powers",
        question: String.raw`Why are indices shifted in series solutions?`,
        answer: String.raw`After differentiating, powers such as \(x^{n-1}\) appear. To compare coefficients with powers \(x^n\), rewrite the sum using a new index. This makes every term use the same power of \(x\), so matching coefficients is possible.`,
      },
    ],
  },
  {
    title: "Separation Of Variables",
    principle: String.raw`Separation of variables solves differential equations where all terms involving \(y\) can be moved to one side and all terms involving \(x\) to the other.`,
    notation: [
      { symbol: String.raw`\frac{dy}{dx}=g(x)h(y)`, meaning: "separable differential equation form" },
      { symbol: "dy,dx", meaning: "differentials used to separate variables" },
      { symbol: "C", meaning: "constant of integration" },
    ],
    core: String.raw`Rewrite the equation so each side contains only one variable, then integrate.

<Equation label="Separated form" tex="\frac{1}{h(y)}\,dy=g(x)\,dx" />

After integrating, use any initial condition to determine the constant. Check for constant solutions that may be lost by division.`,
    worked: [
      {
        title: "Exponential growth",
        question: String.raw`Solve \(\frac{dy}{dx}=2y\) for \(y\ne0\).`,
        answer: String.raw`Separate variables: \(\frac{1}{y}dy=2dx\). Integrate both sides: \(\ln|y|=2x+C\). Exponentiate: \(|y|=e^Ce^{2x}\). Absorb constants to get \(y=Ce^{2x}\).`,
      },
    ],
    examples: [
      {
        title: "Initial condition",
        question: String.raw`Solve \(dy/dx=xy\) with \(y(0)=3\).`,
        answer: String.raw`Separate: \(dy/y=x\,dx\). Integrate: \(\ln|y|=x^2/2+C\), so \(y=Ce^{x^2/2}\). Use \(y(0)=3\): \(C=3\). Therefore \(y=3e^{x^2/2}\).`,
      },
    ],
  },
];

export const level1CalculusTopicBodies = new Map(
  topics.map((topic) => [topic.title, topicContent(topic)]),
);
