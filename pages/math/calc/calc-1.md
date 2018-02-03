# Calculus 1

## Limits

### L'Hôpital's rule

With an understanding of [the derivative](#the-derivative) it is possible to
determine the limit of a function in indeterminate form:

\\[
\lim\_{x\to\infty}\frac{a}{b}=\frac{0}{0}\text{ or }\frac{\infty}{\infty}
\to
\lim\_{x\to\infty}\frac{a}{b}=\frac{\frac{da}{dx}}{\frac{db}{dx}}
\\]


## The derivative

Provided that the limit exists, the derivative of a function $f$ is $f'$ defined
by:

$$
f'(x)
=\lim_{x\rightarrow 0}\frac{f(x+h)-f(x)}{h}
=\lim_{x\rightarrow a}\frac{f(x)-f(a)}{x-a}
$$

A derivative can be notated in any of the following ways:

$$
f'(x)=\frac{d}{dx}f(x)=\frac{d}{dx}y=y'=\frac{dy}{dx}
$$

### Tangent lines and rate of change

The slope of the tangent line to the graph of $y=f(x)$ at
the point $\big(a,f(a)\big)$ is $f'(a)$.

### Theorems and techniques

Constant rule          | $\frac{dy}{dx} c=0$
Constant multiple rule | $\frac{dy}{dx} cf(x)=c\frac{dy}{dx} f(x)$
Multiple rule          | $\frac{dy}{dx} f(ax)=a\cdot f'(ax)$
Sum rule               | $\frac{dy}{dx}\big(f(x)+g(x)\big)=\frac{dy}{dx} f(x)+\frac{dy}{dx} g(x)$
Difference rule        | $\frac{dy}{dx}\big(f(x)-g(x)\big)=\frac{dy}{dx} f(x)-\frac{dy}{dx} g(x)$
Power rule             | $\frac{dy}{dx} x^{n}=nx^{n-1}$
Reciprocal rule        | $\frac{dy}{dx}\frac{1}{u}=-\frac{\frac{dy}{dx} u}{u^2}$
Product rule           | $\frac{dy}{dx} f(x)g(x)=f(x)g'(x)+g(x)f'(x)$
Quotient rule          | $\frac{dy}{dx}\frac{f(x)}{g(x)}=\frac{g(x)f'(x)-f(x)g'(x)}{g^2(x)}$
Chain rule             | $\frac{dy}{dx}=\frac{dy}{du}\frac{du}{dx}=f'(u)g'(x)=f'\big(g(x)\big)g'(x)$

## Review resources

TODO!
