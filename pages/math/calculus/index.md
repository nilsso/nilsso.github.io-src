---
layout: default
title: "Calculus"
---

{% include page-toc.html %}
{% include mathjax.html %}

$\def\deriv{\frac{d}{dx}}$

# Limits

# The Derivative

[Definition of derivative (3.5)]

The derivative of a function \\(f\\) is the function \\(f'\\) defined by
\\[f'(x)=\lim_{x\rightarrow 0}\frac{f(x+h)-f(x)}{h}\\]
provided that the limit exists.

[Alternative definition of derivative (3.6)]

\\[f'(a)=\lim_{x\rightarrow a}\frac{f(x)-f(a)}{x-a}\\]

#### Notation

\\[
f'(x)=D_x f(x)=D_x y=y'=\frac{dy}{dx}=\deriv f(x)
\\]

#### Notation of higher degree derivatives

\\(f^{\prime}(x)\\) | \\(f^{\prime\prime}(x)\\) | \\(f^{\prime\prime\prime}(x)\\) | \\(f^4(x)\\)             | \\(\dots\\) | \\(f^n(x)\\)
\\(D_x y\\)         | \\(D^2_x y\\)             | \\(D^3_x y\\)                   | \\(D^4_x y\\)            | \\(\dots\\) | \\(D^n_x y\\)
\\(y^{\prime}\\)    | \\(y^{\prime\prime}\\)    | \\(y^{\prime\prime\prime}\\)    | \\(y^4\\)                | \\(\dots\\) | \\(y^n\\)
\\(\frac{dy}{dx}\\) | \\(\frac{d^2 y}{dx^2}\\)  | \\(\frac{d^3 y}{dx^3}\\)        | \\(\frac{d^4 y}{dx^4}\\) | \\(\dots\\) | \\(\frac{d^n y}{dx^n}\\)

## Tangent lines and rate of change

The slope of the tangent line to the graph of \\(y=f(x)\\) at
the point \\(a,f(a))\\) is \\(f'(a)\\).

## Techniques

### Theorems

Deriv. of a constant | $\derivc=0$
Constant and a power | $\derivcf(x)=c\deriv f(x)$
Deriv. of a inear function      | $\deriv mx+b=m$
Power rule           | $\derivx^n=nx^{n-1}$
                     | $\deriv(f(x)+g(x))=\deriv f(x)+\deriv g(x)$
                     | $\deriv(f(x)-g(x))=\deriv f(x)-\deriv g(x)$

### Formulas

#### Exponential functions

- $\deriv u^n=nu^{n-1}\deriv u$
- $\deriv e^x=e^x$
- $\deriv e^u=e^u\cdot\deriv u$
- $\deriv a^u=a^u\ln a\deriv u$

#### Logarithmic functions

- $\deriv\ln \|u\|=\frac{1}{u}\deriv u$
- $\deriv\log_a \|u\|=\frac{1}{u\ln a}\deriv u$

#### Triginometric functions

- $\deriv\sin u=\cos u\deriv u$
- $\deriv\cos u=-\sin u\deriv u$
- $\deriv\tan u=\sec^2 u\deriv u$
- $\deriv\csc u=-\csc u\cot u\deriv u$
- $\deriv\sec u=-\sec u\tan u\deriv u$
- $\deriv\cot u=-\csc^2 u\deriv u$
- $\deriv\sin^{-1} u=\frac{1}{\sqrt{1-u^2}}\deriv u$

### Product rule

\\[
\deriv f(x)g(x)=
f(x)g'(x)+g(x)f'(x)
\\]

{% include collapsible.html
tag="product-rule-1"
title="Example: Product Rule #1"
content="
"%}

### Quotient rule

\\[
\deriv \frac{f(x)}{g(x)}=
\frac{g(x)f'(x)-f(x)g'(x)}{g^2(x)}
\\]

### Chain rule
\\[
(f\circ g)'=(f'\circ g)\cdot g'
\\]

\\[
F'(x)=f'(g(x))g'(x)
\\]
\\[
\frac{dz}{dx}=\frac{dz}{dy}\cdot\frac{dy}{dz}
\\]

## Applications

[Applications of the derivative (3.7)]

#### Rate of change

If \\(y=f(x)\\), the instantaneous rate of change of \\(y\\)
with respect to \\(x\\) at \\(a\\) is \\(f'(a)\\).

### Product rule

[Product rule (3.19)]

\\[
D_x f(x)g(x)=f(x)D_x g(x)+g(x)D_x f(x)
\\]

### Quotient rule

[Quotient rule (3.20)]

\\[
D_x\frac{f(x)}{g(x)}=
\frac{g(x)D_x f(x)-f(x)D_x g(x)}{g(x)^2}
\\]

### Reciprocal rule

[Reciprocal rule (3.21)]

\\[
D_x\frac{1}{g(x)}=
-\frac{D_x g(x)}{g(x)^2}
\\]

### Chain rule

[Chain rule (3.33)]

If \\(y=f(u)\\), \\(u=g(x)\\), and the derivatives \\(dy/du\\) and \\(du/dx\\)
both exist, then the composite function defined by \\(y=f(g(x))\\) has a
derivative given by:

\\[
\frac{dy}{dx} =
\frac{dy}{du}\frac{du}{dx} =
f'(u)g'(x) =
f'(g(x))g'(x)
\\]

### Power rule

[Power rule for functions (3.34)]

If \\(y=u^n\\) and \\(u=g(x)\\), then
\\[ D_x(u^n)=nu^{n-1}D_x u \\]
or, equivalently,
\\[ D_x(g(x))^n=n(g(x))^{n-1}D_x g(x) \\]

# The Integral

## Fundamental theorem of calculus

[Fundamental theorem of calculus (5.30)]

Suppose \\(f\\) is continuous on a close interval [a,b]

*Part I.* If the function \\(G\\) is defined by
\\[
G(x)=\int_a^x f(t)dt
\\]

For every \\(x\\) in [a,b], then \\(G\\) is an antiderivative of \\(f\\) on
[a,b].

*Part II.* If \\(F\\) is any antiderivative of \\(f\\) on [a,b], then
\\[
\int_a^b f(x)dx=F(b)-F(a)
\\]

## Properties of integrals

[Theorem (5.5)]

1. \\( \int D_x f(x)dx=f(x)+C \\)
2. \\( D_x(\int f(x)dx)=f(x) \\)

[Theorem (5.6)]

Addition of definite integrals
\\[
\int_a^b f(x)dx+\int_b^c f(x)dx=\int_a^c f(x)dx
\\]

Integral of area 0
\\[
\int_a^a f(x)dx
\\]

Inversion of an integral is its negative
\\[
\int_a^b f(x)dx=-\int_b^a f(x)dx
\\]

Multiplying by a constant \\(c\\)
\\[
\int cf(x)dx=c\int f(x)dx
\\]

Distributive property
\\[
\int(f(x)+g(x))dx=\int f(x)dx+\int g(x)dx
\\]
\\[
\int(f(x)-g(x))dx=\int f(x)dx-\int g(x)dx
\\]

## Integration by parts

[Integration by parts formula (9.1)]

If \\(u=f(x)\\) and \\(v=g(x)\\) and if \\(f'\\) and \\(g'\\) are continuous,
then
\\[\int u\ dv=uv-\int v\ du\\]

### Reduction formulas

An integration reduction formula can be used to rewrite an integral involving
powers of an expression in terms of multiple integrals that involve lower powers
of the expression. To come up with such a formulas, we need to use integration
by parts. Here are a few reduction formulas:

\\[\int\sin^n x\ dx=\int\sin^{n-1}\sin x\ dx\\]

\\[\int\cos^n x\ dx=\int\cos^{n-1}\cos x\ dx\\]

\\[\int\sec^n(x)dx=\frac{1}{n-1}\sec^{n-2}(x)\tan(x)+\frac{k-2}{k-1}\int\sec^{k-2}(x)dx\\]

\\[\int\sec^3(x)dx=\frac{1}{2}\sec(x)\tan(x)+\frac{1}{2}\ln\left|\sec(x)+\tan(x)\right|+C\\]

## Formulas

#### Integration formulas

\\[\int u\ dv=uv-\int v\ du\\]
\\[\int ax^n dx=\left(\frac{a}{n+1}\right)x^{n+1}+C\\]
\\[\int a\sin(nx)dx=-\frac{a}{n}\cos(nx)+C\\]

