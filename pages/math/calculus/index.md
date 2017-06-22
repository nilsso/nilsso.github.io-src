---
layout: default
title: "Calculus"
---

{% include page-toc.html %}
{% include mathjax.html %}

$\def\deriv{D_x}$

$\DeclareMathOperator{\arccsc}{arccsc}$
$\DeclareMathOperator{\arcsec}{arcsec}$
$\DeclareMathOperator{\arccot}{arccot}$

#### TODO:

- Restructure all of this (away from *Derivatives* and *Integral* headers, since
  there's individual subjects that touch on both).
- Also a lot of the examples (their content and their file names/tags) are all
  fucked up.

# Limits

---

# Derivatives

[Definition of derivative (3.5)]

The derivative of a function $f$ is the function $f'$ defined by:

$$
f'(x)=\lim_{x\rightarrow 0}\frac{f(x+h)-f(x)}{h}
$$

provided that the limit exists.

[Alternative definition of derivative (3.6)]

$$
f'(a)=\lim_{x\rightarrow a}\frac{f(x)-f(a)}{x-a}
$$

#### Notation

$$
f'(x)=\deriv  f(x)=\deriv  y=y'=\frac{dy}{dx}=\deriv f(x)
$$

#### Notation of higher degree derivatives

$f^{\prime}(x)$ | $f^{\prime\prime}(x)$ | $f^{\prime\prime\prime}(x)$ | $f^4(x)$             | $\dots$ | $f^n(x)$
$\deriv  y$     | $D^2_x y$             | $D^3_x y$                   | $D^4_x y$            | $\dots$ | $D^n_x y$
$y^{\prime}$    | $y^{\prime\prime}$    | $y^{\prime\prime\prime}$    | $y^4$                | $\dots$ | $y^n$
$\frac{dy}{dx}$ | $\frac{d^2 y}{dx^2}$  | $\frac{d^3 y}{dx^3}$        | $\frac{d^4 y}{dx^4}$ | $\dots$ | $\frac{d^n y}{dx^n}$

## Tangent lines and rate of change

The slope of the tangent line to the graph of $y=f(x)$ at
the point $\big(a,f(a)\big)$ is $f'(a)$.

## Theorems and techniques

Constant rule

$$
\begin{equation}
\deriv c=0
\end{equation}
$$

Constant multiple rule

$$
\begin{equation}
\deriv cf(x)=c\deriv f(x)
\end{equation}
$$

Multiple rule

$$
\begin{equation}
\deriv f(ax)=a\cdot f'(ax)
\end{equation}
$$

Sum and difference rules

$$
\begin{align}
\deriv\big(f(x)+g(x)\big)=\deriv f(x)+\deriv g(x) \\
\deriv\big(f(x)-g(x)\big)=\deriv f(x)-\deriv g(x) \\
\end{align}
$$

Power rule

$$
\begin{equation}
\deriv x^{n}=nx^{n-1}
\end{equation}
$$

Reciprocal rule

$$
\begin{equation}
\deriv\frac{1}{u}=-\frac{\deriv u}{u^2}
\end{equation}
$$

Product rule

$$
\begin{equation}
\deriv f(x)g(x)=f(x)g'(x)+g(x)f'(x)
\end{equation}
$$

Quotient rule

$$
\begin{equation}
\deriv\frac{f(x)}{g(x)}=\frac{g(x)f'(x)-f(x)g'(x)}{g^2(x)}
\end{equation}
$$

Chain rule

$$
\begin{equation}
\frac{dy}{dx}=\frac{dy}{du}\frac{du}{dx}=f'(u)g'(x)=f'\big(g(x)\big)g'(x)
\end{equation}
$$

## Examples

{% include collapsible.html
tag="chain-rule-1-pr"
title="Example: Chain rule #1 (Product rule)"
content="
$$
\text{Find } f'(x) \text{ for } f(x)=
\frac{x}{\left(x^2-1\right)^4}
$$

- Rewrite the function as a product of functions
$$
\deriv(x\cdot(x^2-1)^{-4})
$$

- Product rule

$$
\deriv(x)\cdot(x^2-1)^{-4}+x\cdot\deriv((x^2-1)^{-4})
$$

- Power rule

$$
(x^2-1)^{-4}+x\cdot\deriv((x^2-1)^{-4})
$$

- Chain rule
$$
(x^2-1)^{-4}+x\cdot -4(x^2-1)^{-5}\cdot\deriv(x^2-1)
$$

- Chain rule cont.
$$
(x^2-1)^{-4}+x\cdot -4(x^2-1)^{-5}\cdot2x
$$

- Simplify
$$
\frac{1}{(x^2-1)^4}-\frac{8x^2}{(x^2-1)^5}
$$

- Common denominator

$$
\frac{x^2-1}{(x^2-1)^5}-\frac{8x^2}{(x^2-1)^5}
$$

- Simplify

$$
\frac{-7x^2-1}{(x^2-1)^5}
$$
"%}

{% include collapsible.html
tag="chain-rule-1-qr"
title="Example: Chain rule #1 (Quotient rule)"
content="
$$
\text{Find}\quad f'(x)\quad\text{for}\quad f(x)=\frac{x}{\left(x^2-1\right)^4}
$$

- Quotient rule

$$
\frac{(x^2-1)^4\cdot\deriv(x)-
x\cdot\deriv((x^2-1)^4)}
{((x^2-1)^4)^2}
$$

- Power rule

$$
\frac{(x^2-1)^4-x\cdot\deriv((x^2-1)^4)}{((x^2-1)^4)^2}
$$

- Chain rule

$$
\frac{(x^2-1)^4-x\cdot4(x^2-1)^3)\cdot 2x}{((x^2-1)^4)^2}
$$

- Simplify

$$
\frac{(x^2-1)^4-8x(x^2-1)^3}{(x^2-1)^8}
$$

- Substitute

$$
\begin{gather}
m=x^2-1 \\
\frac{m^4-8x\cdot m^3}{m^8}
\end{gather}
$$

- GCM

$$
\frac{m^3(m-8x)}{m^8}
$$

- Divide

$$
\frac{m-8x}{m^5}
$$

- Re-substitute

$$
\frac{(x^2-1)-8x}{(x^2-1)^5}
$$

- Simplify

$$
\frac{-7x^2-1}{(x^2-1)^5}
$$
"%}

---

# Integrals

## Fundamental theorem of calculus

[Fundamental theorem of calculus (5.30)]

Suppose $f$ is continuous on a close interval [a,b]

*Part I.* If the function $G$ is defined by
$$
G(x)=\int_a^x f(t)dt
$$

For every $x$ in [a,b], then $G$ is an antiderivative of $f$ on
[a,b].

*Part II.* If $F$ is any antiderivative of $f$ on [a,b], then
$$
\int_a^b f(x)dx=F(b)-F(a)
$$

## Properties of integrals

[Theorem (5.5)]

- $\int \deriv  f(x)dx=f(x)+C$
- $\deriv (\int f(x)dx)=f(x)$

[Theorem (5.6)]

Addition of definite integrals

$$
\int_a^b f(x)dx+\int_b^c f(x)dx=\int_a^c f(x)dx
$$

Integral of area 0

$$
\int_a^a f(x)dx
$$

Inversion of an integral is its negative

$$
\int_a^b f(x)dx=-\int_b^a f(x)dx
$$

Multiplying by a constant $c$

$$
\int cf(x)dx=c\int f(x)dx
$$

Distributive property

$$
\begin{gather}
\int(f(x)+g(x))dx=\int f(x)dx+\int g(x)dx \\
\int(f(x)-g(x))dx=\int f(x)dx-\int g(x)dx
\end{gather}
$$

## Integration by parts

[Integration by parts formula (9.1)]

If $u=f(x)$ and $v=g(x)$ and if $f'$ and $g'$ are continuous,
then

$$
\int u\ dv=uv-\int v\ du
$$

### Reduction formulas

An integration reduction formula can be used to rewrite an integral involving
powers of an expression in terms of multiple integrals that involve lower powers
of the expression- To come up with such a formulas, we need to use integration
by parts- Here are a few reduction formulas:

$$
\int\sin^n x\ dx=\int\sin^{n-1}\sin x\ dx
$$

$$
\int\cos^n x\ dx=\int\cos^{n-1}\cos x\ dx
$$

$$
\int\sec^n(x)dx=\frac{1}{n-1}\sec^{n-2}(x)\tan(x)+\frac{k-2}{k-1}\int\sec^{k-2}(x)dx
$$

$$
\int\sec^3(x)dx=\frac{1}{2}\sec(x)\tan(x)+\frac{1}{2}\ln\left|\sec(x)+\tan(x)\right|+C
$$

---

# Logarithmic and exponential functions

Logarithms and exponentiation are inverse functions, thus:

$$
b^y=x\iff\log_b x=y
$$

#### Properties of logarithms

Product  | $\log_b uv=\log_b u+\log_b v$
Quotient | $\log_b \frac{u}{v}=\log_b u-\log_b v$
Power    | $\log_b u^n=n\log_b u$

Natural log is the log of $x$ with base $e$ ($\approx 2.718$):

$$
\ln x\equiv\log_e x\equiv\int_1^x\frac{1}{t}dt
$$

The function $\ln x$ has the domain $x\in\mathbb{R}:x>0$ and range
$y\in\mathbb{R}$, defined by the limits:

$$
\lim_{x\to\infty}\ln x=\infty, \lim_{x\to0^+}\ln x=-\infty
$$

#### Properties of natural logarithms

(Exactly the same as properties of logarithms)

Product  | $\ln uv=\ln u+\ln v$
Quotient | $\ln\frac{u}{v}=\ln u-\ln v$
Power    | $\ln u^n=n\ln u$
         | $\ln 1=0$
         | $\ln y=x\equiv\log_e y=x\equiv e^x=y$
         | $\ln e^x=x\quad\text{for every}\quad x$
         | $e^{\ln x}=x\quad\text{for every}\quad x>0$

## Derivatives and integrals

#### Derivative formulas

$$
\begin{align}

\deriv\ln x&=\frac{1}{x} \\

\deriv\ln\left|u\right|&=\frac{1}{u}\deriv u\quad\text{if}\quad u\neq 0 \\

\deriv e^u&=e^u\deriv u

\end{align}
$$

#### Integral formulas

$$
\begin{align}

\int\frac{1}{u}du&=\ln\left|u\right|+C \\

\int e^{au} du&=\frac{1}{a}e^{au} +C

\end{align}
$$

## Examples

{% include collapsible.html
tag="log-exp-funcs-1"
title="Example: Log./exp. functions #1"
file="examples/log-exp-funcs-1"%}

{% include collapsible.html
tag="log-exp-funcs-2"
title="Example: Log./exp. functions #2"
file="examples/log-exp-funcs-2"%}

---

# Inverse trig functions

## Derivatives and integrals

#### Derivative formulas

$$
\begin{align}

\deriv\arcsin&=\frac{1}{\sqrt{1-u^2}}du
\label{deriv-arcsin} \\

\deriv\arctan&=\frac{1}{1+u^2}du
\label{deriv-arctan} \\

\deriv\arcsec&=\frac{1}{\left|u\right|u\sqrt{u^2-1}}du
\label{deriv-arcsec}

\end{align}
$$

And then the derivatives of $\arccos$, $\arctan$, and $\arccsc$ are opposites of
$\arcsin$, $\arctan$, and $\arcsec$ respectively.

$$
\begin{align}

\deriv\arccos&=-\frac{1}{\sqrt{1-u^2}}du
\label{deriv-arccos} \\

\deriv\arccot&=-\frac{1}{1+u^2}du
\label{deriv-arccot} \\

\deriv\arccsc&=-\frac{1}{\left|u\right|u\sqrt{u^2-1}}du
\label{deriv-arccsc}

\end{align}
$$

#### Integral formulas

$$
\begin{align}

\int\frac{1}{\sqrt{a^2-u^2}}du&=
\arcsin\frac{u}{a}+C
\label{int-arcsin} \\

\int\frac{1}{u^2+a^2}du&=
\frac{1}{a}\arctan\frac{u}{a}+C
\label{int-arctan} \\

\int\frac{1}{u\sqrt{u^2-a^2}}du&=
\frac{1}{a}\arcsec\frac{u}{a}+C
\label{int-arcsec}

\end{align}
$$

## Examples

{% include collapsible.html
tag="inv-trig-funcs-1"
title="Example: Inverse trig funcs #1"
file="examples/inv-trig-funcs-1"%}

{% include collapsible.html
tag="inv-trig-funcs-1-usub"
title="Example: Inverse trig funcs #1 (U-substitution)"
file="examples/inv-trig-funcs-1-usub"%}
