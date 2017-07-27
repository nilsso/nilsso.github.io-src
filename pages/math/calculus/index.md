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

$\DeclareMathOperator{\sech}{sech}$
$\DeclareMathOperator{\csch}{csch}$
$\DeclareMathOperator{\arcsinh}{arcsinh}$
$\DeclareMathOperator{\arccosh}{arccosh}$
$\DeclareMathOperator{\arctanh}{arctanh}$
$\DeclareMathOperator{\arccsch}{arccsch}$
$\DeclareMathOperator{\arcsech}{arcsech}$
$\DeclareMathOperator{\arccoth}{arccoth}$

#### TODO:

$$ \int\frac{x^3e^{x^2}}{(x^2+1)^2}dx $$

- Restructure all of this (away from *Derivatives* and *Integral* headers, since
  there's individual subjects that touch on both).
- Also a lot of the examples (their content and their file names/tags) are all
  fucked up.
- The Markdown processor is generating paragraphs for the MathJax math operator
  blocks (above).

# Limits

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

{% include collapsible.html
tag="chain-rule-1-pr"
title="Example: Chain rule #1 (Product rule)"
file="examples/chain-rule-1-product-rule"%}

{% include collapsible.html
tag="chain-rule-1-qr"
title="Example: Chain rule #1 (Quotient rule)"
file="examples/chain-rule-1-quotient-rule"%}

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

$$ \int \deriv  f(x)dx=f(x)+C $$

$$ \deriv (\int f(x)dx)=f(x) $$

- Addition of definite integrals

$$
\begin{equation}
\int_a^b f(x)dx+\int_b^c f(x)dx=\int_a^c f(x)dx
\end{equation}
$$

- Integral of area 0

$$
\begin{equation}
\int_a^a f(x)dx
\end{equation}
$$

- Inversion of an integral is its negative

$$
\begin{equation}
\int_a^b f(x)dx=-\int_b^a f(x)dx
\end{equation}
$$

- Multiplying by a constant $c$

$$
\begin{equation}
\int cf(x)dx=c\int f(x)dx
\end{equation}
$$

- Distributive property

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

## Basic integration formulas

| $\int k\ dx=kx+C: k\text{ real}$
| $\int x^n\ dx=\frac{1}{n+1}x^{n+1}+C: p\neq -1\text{ real}$
| $\int\sin ax\ dx=-\frac{1}{a}\cos ax+C$
| $\int\cos ax\ dx=\frac{1}{a}\sin ax+C$
| $\int\sec^2 ax\ dx=\frac{1}{a}\tan ax+C$
| $\int\csc^2 ax\ dx=-\frac{1}{a}\cot ax+C$
| $\int\sec ax\tan ax\ dx=\frac{1}{a}\sec ax+C$
| $\int\csc ax\cot ax\ dx=-\frac{1}{a}\csc ax+C$
| $\int e^{ax}\ dx=\frac{1}{a}e^{ax}+C$
| $\int\frac{1}{ax}\ dx=\frac{1}{a}\ln\left|x\right|+C$
| $\int\frac{1}{\sqrt{a^2-u^2}}\ du=\arcsin\frac{u}{a}+C$
| $\int\frac{1}{a^2+u^2}\ du=\frac{1}{a}\arctan\frac{u}{a}+C$
| $\int\frac{1}{u\sqrt{u^2-a^2}}\ du=\frac{1}{a}\arcsec\frac{u}{a}+C$

## Substitution rule

The subsitution rule allows us to take integrals which cannot normally be solved
using basic formulas and rewrite them so that they can be. It is to integration
as chain rule is to derivation.

> Let $u=g(x)$, where $g'$ is continuous on an interval, and let $f$ be
> continuous on the corresponding range of $g$. On that interval,
>
> $$ \int f\big(fg(x)\big)g'(x)dx=\int f(u)du $$

And application of the substitution rule (or just called substituting) goes as
such:

> 1. Given composite function $f\big(g(x)\big)$, identify an inner function
>    $u=g(x)$ whose derivative $du=g'(x)dx$ appears in the integrand in some
>    constant multiple.
> 2. Substitute $u=g(x)$ and $du=g'(x)dx$ in the integral (change of
>    variables).
> 3. Evaluate the new integral with respect to $u$.
> 4. Re-substitute for terms of $x$.

## Integration by parts

- For when the substitution rule fails
- 

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

{% include collapsible.html
tag="log-exp-funcs-1"
title="Example: Log./exp. functions #1"
file="examples/log-exp-funcs-1"%}

{% include collapsible.html
tag="log-exp-funcs-2"
title="Example: Log./exp. functions #2"
file="examples/log-exp-funcs-2"%}

---

# Trigonometric functions

$\sin^m x$, or $\cos^m x$ | Strategy
-- | --
$m$ odd and positive | Split off a single factor of $\cos x$ (or $\sin x$).
$m$ even and positive | Use half-angle formulas

$\int\sin^mx\cos^nx\ dx$ | Strategy
-- | --
$m$ odd and positive, $n$ real | Split off $\sin x$, rewrite the resulting even power of $\sin x$ in terms of $\cos x$, and then use $u=\cos x$.
$n$ odd and positive, $m$ real | Split off $\cos x$, rewrite the resulting even power of $\cos x$ in terms of $\sin x$, and then use $u=\sin x$.
$m$ and $n$ both even, nonnegative integers | Use half-angle formulas to transform the integrand into a polynomial in $\cos 2x$ and apply the preceding strategies once again to powers of $\cos 2x$ greater than 1.

{% include collapsible.html
tag="trig-funcs-1"
title="Example: Trig functions #1"
content="
*Evaluate the following integral*

$$
\int\cos^5 x\ dx
$$

- Split into parts

$$
=\int\cos^4 x\cdot\cos x\ dx
$$

- Double angle theorem

$$
=\int(\cos^2 x)^2 x\ dx=\int(1-\sin^2 x)^2\cdot\cos x\ dx
$$

- Substitution rule

$$
\begin{gather*}
u=1-\sin x,\quad du=\cos x dx \\
=\int(1-u^2)^2 du
\end{gather*}
$$

- Expand

$$
=\int(u^4-2u^2+1) du
$$

"%}

## Reduction formulas

An integration reduction formula can be used to rewrite an integral involving
powers of an expression in terms of multiple integrals that involve lower powers
of the expression. To come up with such a formulas, we need to use integration
by parts. Here are a few reduction formulas:

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

# Inverse trigonometric functions

## Derivatives and integrals

#### Derivative formulas

| $\deriv\arcsin u=\frac{1}{\sqrt{1-u^2}}du$
| $\deriv\arctan u=\frac{1}{1+u^2}du$
| $\deriv\arcsec u=\frac{1}{\left\|u\right\|\sqrt{u^2-1}}du$

And then the derivatives of $\arccos$, $\arctan$, and $\arccsc$ are opposites of
$\arcsin$, $\arctan$, and $\arcsec$ respectively.

| $\deriv\arccos=-\frac{1}{\sqrt{1-u^2}}du$
| $\deriv\arccot=-\frac{1}{1+u^2}du$
| $\deriv\arccsc=-\frac{1}{\left\|u\right\|u\sqrt{u^2-1}}du$

#### Integral formulas

| $\int\frac{1}{\sqrt{a^2-u^2}}du=\arcsin\frac{u}{a}+C$
| $\int\frac{1}{u^2+a^2}du=\frac{1}{a}\arctan\frac{u}{a}+C$
| $\int\frac{1}{u\sqrt{u^2-a^2}}du=\frac{1}{a}\arcsec\frac{u}{a}+C$

{% include collapsible.html
tag="inv-trig-funcs-1"
title="Example: Inverse trig funcs #1"
file="examples/inv-trig-funcs-1"%}

{% include collapsible.html
tag="inv-trig-funcs-1-usub"
title="Example: Inverse trig funcs #1 (U-substitution)"
file="examples/inv-trig-funcs-1-usub"%}

# Hyperbolic functions

Just as trigonometric functions (aka *circular* functions) are based on
relationships to the form of a circle $x^2+y^2=1$, hyperbolic functions are
based on relationships to the form of the hyperbola $x^2-y^2=1$.

(\*) Hyperbolic cosine (*cohsh*) | $\cosh x=\frac{e^x+e^{-x}}{2}$
(\*) Hyperbolic sine (*sinch*)   | $\sinh x=\frac{e^x-e^{-x}}{2}$
(\*) Hyperbolic tangent          | $\tanh x=\frac{\sinh x}{\cosh x}=\frac{e^x-e^{-x}}{e^x+e^{-x}}$
     Hyperbolic cotangent        | $\coth x=\frac{\cosh x}{\sinh x}=\frac{e^x+e^{-x}}{e^x-e^{-x}}$
     Hyperbolic secant           | $\sech x=\frac{1}{\cosh x}=\frac{2}{e^x+e^{-x}}$
     Hyperbolic cosecant         | $\csch x=\frac{1}{\sinh x}=\frac{2}{e^x-e^{-x}}$

(\*): Memorize these

Identities regarding hyperbolic functions parallel identities regarding
the circular the functions.

(\*) | $\cosh^2 x-\sinh^2 x=1$
     | $\cosh(-x)=\cosh x$
     | $\sinh(-x)=-\sinh x$
     | $\tanh(-x)=-\tanh x$
     | $1-\tanh^2 x=\sech^2 x$
     | $\coth^2 x-1=\csch^2 x$
     | $\cosh(x+y)=\cosh x\cosh y+\sinh x\sinh y$
     | $\sinh(x+y)=\sinh x\cosh y+\cosh x\sinh y$
     | $\cosh 2x=\cosh^2 x+\sinh^2 x$
     | $\sinh 2x=2\sinh x\cosh x$
     | $\cosh^2 x=\frac{\cosh 2x+1}{2}$
     | $\sinh^2 x=\frac{\cosh 2x-1}{2}$

(\*): Memorize these

## Derivatives and integrals

The derivatives of hyperbolic functions also close to the forms of the
derivatives of the circular functions, but not identical.

(\*) | $\deriv\sinh x=\cosh x\iff\int\cosh x\ dx=\sinh x+C$
(\*) | $\deriv\cosh x=\sinh x\iff\int\sinh x\ dx=\cosh x+C$
(\*) | $\deriv\tanh x=\sech^2 x\iff\int\sech^2 x\ dx=\tanh x+C$
     | $\deriv\coth x=-\csch^2 x\iff\int\csch^2 x\ dx=-\coth x+C$
     | $\deriv\sech x=-\sech x\tanh x\iff\int\sech x\tanh x\ dx=-\sech x+C$
     | $\deriv\csch x=-\csch x\coth x\iff\int\csch x\coth x\ dx=-\csch x+C$
     | $\int\tanh x\ dx=\ln\cosh x+C$
     | $\int\coth x\ dx=\ln\left\|\sinh x\right\|+C$
     | $\int\sech x\ dx=\arctan(\sinh x)+C$
     | $\int\csch x\ dx=\ln\left\|\tanh(x/2)\right\|+C$

(\*): Memorize these

# Inverse hyperbolic functions

(Wont be tested on this material)

| $\arcsinh x=\ln(x+\sqrt{x^2+1}):(-\infty,\infty)$
| $\arccosh x=\ln(x+\sqrt{x^2-1}):[1,\infty)$
| $\arctanh x=\frac{1}{2}\ln\frac{1+x}{1-x}:(-1,1)$

## Derivatives and integrals

#### Derivatives

| $\deriv\arcsinh u=\frac{1}{\sqrt{u^2+1}}\cdot\deriv u$
| $\deriv\arccosh u=\frac{1}{\sqrt{u^2-1}}\cdot\deriv u:(x>1)$
| $\deriv\arctanh u=\frac{1}{1-u^2}\cdot\deriv u:(\left\|x\right\|<1)$
| $\deriv\arccoth u=\frac{1}{1-u^2}\cdot\deriv u:(\left\|x\right\|>1)$
| $\deriv\arcsech u=-\frac{1}{u\sqrt{1-u^2}}\cdot\deriv u:(0 < x < 1)$
| $\deriv\arccsch u=-\frac{1}{\left\|u\right\|\sqrt{1+x^2}}\cdot\deriv u:(x\neq 0)$

#### Integrals

| $\int\frac{1}{\sqrt{u^2\pm a^2}}du=\ln\left(u+\sqrt{u^2\pm a^2}\right)+C$
| $\int\frac{1}{a^2-u^2}du=\frac{1}{2a}\ln\left\|\frac{a+u}{a-u}\right\|+C$
| $\int\frac{1}{u\sqrt{a^2\pm u^2}}du=-\frac{1}{a}\ln\frac{a+\sqrt{a^2\pm u^2}}{\left\|u\right\|}+C$

#### Relating inverse circular and inverse hyperbolic

Circular function | Hyperbolic function
-- | --
$\deriv\arcsin u=\frac{1}{\sqrt{1-u^2}}\cdot\deriv u$                  | $\deriv\arcsinh u=\frac{1}{\sqrt{u^2+1}}\cdot\deriv u$
$\deriv\arctan u=\frac{1}{1+u^2}\cdot\deriv u$                         | $\deriv\arctanh u=\frac{1}{1-u^2}\cdot\deriv u$
$\deriv\arcsec u=\frac{1}{\left\|u\right\|\sqrt{u^2-1}}\cdot\deriv u$  | $\deriv\arcsech u=-\frac{1}{u\sqrt{1-u^2}}\cdot\deriv u$

# Differential Equations

A differential equation is an equation involving an unknown function (which
involves x and y) and the derivative of that unknown function. A function
$y=f(x)$ is not a differential equation but a solution to a differential
equation *if* the differential equation is satisfied when y and its derivatives
are substituted into the equation.

The following might be how a problem would be notated:

Particular solution | Differential equation | Initial condition
-- | -- | --
$y=f(x)$ | $\frac{dy}{dx}=f'(x)$ | $y(a)=b$

