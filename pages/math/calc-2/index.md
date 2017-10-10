---
layout: default
title: "Calculus"
---

{% include mathjax.html %}
{% include page-toc.html id-after="page-title" %}

<script>
$$
\DeclareMathOperator{\arccsc}{arccsc}
\DeclareMathOperator{\arcsec}{arcsec}
\DeclareMathOperator{\arccot}{arccot}
\DeclareMathOperator{\sech}{sech}
\DeclareMathOperator{\csch}{csch}
\DeclareMathOperator{\arcsinh}{arcsinh}
\DeclareMathOperator{\arccosh}{arccosh}
\DeclareMathOperator{\arctanh}{arctanh}
\DeclareMathOperator{\arccsch}{arccsch}
\DeclareMathOperator{\arcsech}{arcsech}
\DeclareMathOperator{\arccoth}{arccoth}
$$
</script>

# Limits

## L'Hôpital's rule

With an understanding of [the derivative](#the-derivative) it is possible to
determine the limit of a function in indeterminate form:

\\[
\lim\_{x\to\infty}\frac{a}{b}=\frac{0}{0}\text{ or }\frac{\infty}{\infty}
\to
\lim\_{x\to\infty}\frac{a}{b}=\frac{\frac{da}{dx}}{\frac{db}{dx}}
\\]


# The derivative

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

## Tangent lines and rate of change

The slope of the tangent line to the graph of $y=f(x)$ at
the point $\big(a,f(a)\big)$ is $f'(a)$.

## Theorems and techniques

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

# Integrals

## Fundamental theorem of calculus

## Properties of integrals

| $\int\frac{dy}{dx}f(x)dx=f(x)+C$
| $\frac{dy}{dx} (\int f(x)dx)=f(x)$
| $\int_a^b f(x)dx+\int_b^c f(x)dx=\int_a^c f(x)dx$
| $\int_a^a f(x)dx$
| $\int_a^b f(x)dx=-\int_b^a f(x)dx$
| $\int cf(x)dx=c\int f(x)dx$
| $\int(f(x)+g(x))dx=\int f(x)dx+\int g(x)dx$

## Integration by parts

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
>    $u=g(x)$ whose derivative $g'(x)$ appears in the integrand in some constant
>    multiple.
> 2. Substitution $u=g(x)$ and $du=g'(x)dx$ in the integral (change of
>    variables).
> 3. Evaluate the new integral with respect to $u$.
> 4. Re-substitute for terms of x$.

## Integration by parts

- For when the substitution rule fails

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

#### Derivative formulas

$$
\begin{align}
\frac{d}{dx}\ln x&=\frac{1}{x} \\
\frac{d}{dx}\ln\left|u\right|&=\frac{1}{u}\frac{d}{dx} u\quad\text{if}\quad u\neq 0 \\
\frac{d}{dx} e^u&=e^u\frac{d}{dx} u
\end{align}
$$

#### Integral formulas

$$
\begin{align}
\int\frac{1}{u}du&=\ln\left|u\right|+C \\
\int e^{au} du&=\frac{1}{a}e^{au} +C
\end{align}
$$

---

# Trigonometric integrals

**Form: $\int\sin^m x$, or $\int\cos^m x$** | **Strategy**
$m$ odd and positive                        | Split off a single factor of $\cos x$ (or $\sin x$).
$m$ even and positive                       | Use half-angle formulas
**Form: $\int\sin^mx\cos^nx\ dx$**          | **Strategy**
$m$ odd and positive, $n$ real              | Split off $\sin x$, rewrite the resulting even power of $\sin x$ in terms of $\cos x$, and then use $u=\cos x$.
$n$ odd and positive, $m$ real              | Split off $\cos x$, rewrite the resulting even power of $\cos x$ in terms of $\sin x$, and then use $u=\sin x$.
$m$ and $n$ both even, nonnegative integers | Use half-angle formulas to transform the integrand into a polynomial in $\cos 2x$ and apply the preceding strategies once again to powers of $\cos 2x$ greater than 1.

## Reduction formulas

An integration reduction formula can be used to rewrite an integral involving
powers of a trigonometric function in terms of multiple integrals that involve
lower powers Deriving such formulas requires integration by parts.

$$
\begin{align*}
\int\sin^n x\ dx &=\int\sin^{n-1}\sin x\ dx \\
\int\cos^n x\ dx &=\int\cos^{n-1}\cos x\ dx \\
\int\sec^n(x)dx  &=\frac{1}{n-1}\sec^{n-2}(x)\tan(x)+\frac{k-2}{k-1}\int\sec^{k-2}(x)dx \\
\int\sec^3(x)dx  &=\frac{1}{2}\sec(x)\tan(x)+\frac{1}{2}\ln\left|\sec(x)+\tan(x)\right|+C
\end{align*}
$$

# Inverse trigonometric functions

#### Derivative formulas

$$
\begin{align*}
\frac{d}{dx}\arcsin u &=\frac{1}{\sqrt{1-u^2}}du \\
\frac{d}{dx}\arctan u &=\frac{1}{1+u^2}du \\
\frac{d}{dx}\arcsec u &=\frac{1}{|u|\sqrt{u^2-1}}du
\end{align*}
$$

And then the derivatives of $\arccos$, $\arctan$, and $\arccsc$ are opposites of
$\arcsin$, $\arctan$, and $\arcsec$ respectively.

$$
\begin{align*}
\frac{d}{dx}\arccos &=-\frac{1}{\sqrt{1-u^2}}du \\
\frac{d}{dx}\arccot &=-\frac{1}{1+u^2}du \\
\frac{d}{dx}\arccsc &=-\frac{1}{\left|u\right|\sqrt{u^2-1}}du
\end{align*}
$$

#### Integral formulas

$$
\begin{align*}
\int\frac{1}{\sqrt{a^2-u^2}}du=\arcsin\frac{u}{a}+C \\
\int\frac{1}{u^2+a^2}du=\frac{1}{a}\arctan\frac{u}{a}+C \\
\int\frac{1}{u\sqrt{u^2-a^2}}du=\frac{1}{a}\arcsec\frac{u}{a}+C
\end{align*}
$$

# Hyperbolic functions

Just as trigonometric functions (aka *circular* functions) are based on
relationships to the form of a circle $x^2+y^2=1$, hyperbolic functions are
based on relationships to the form of the hyperbola $x^2-y^2=1$.

(\*) Hyperbolic cosine (*cohsh*) | $\cosh x=\frac{e^x+e^{-x}}{2}$
(\*) Hyperbolic sine (*sinch*)   | $\sinh x=\frac{e^x-e^{-x}}{2}$
(\*) Hyperbolic tangent          | $\tanh x=\frac{\sinh x}{\cosh x}=\frac{e^x-e^{-x}}{e^x+e^{-x}}$
Hyperbolic cotangent             | $\coth x=\frac{\cosh x}{\sinh x}=\frac{e^x+e^{-x}}{e^x-e^{-x}}$
Hyperbolic secant                | $\sech x=\frac{1}{\cosh x}=\frac{2}{e^x+e^{-x}}$
Hyperbolic cosecant              | $\csch x=\frac{1}{\sinh x}=\frac{2}{e^x-e^{-x}}$

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

The derivatives of hyperbolic functions also close to the forms of the
derivatives of the circular functions, but not identical.

(\*) | $\frac{d}{dx}\sinh x=\cosh x\iff\int\cosh x\ dx=\sinh x+C$
(\*) | $\frac{d}{dx}\cosh x=\sinh x\iff\int\sinh x\ dx=\cosh x+C$
(\*) | $\frac{d}{dx}\tanh x=\sech^2 x\iff\int\sech^2 x\ dx=\tanh x+C$
| $\frac{d}{dx}\coth x=-\csch^2 x\iff\int\csch^2 x\ dx=-\coth x+C$
| $\frac{d}{dx}\sech x=-\sech x\tanh x\iff\int\sech x\tanh x\ dx=-\sech x+C$
| $\frac{d}{dx}\csch x=-\csch x\coth x\iff\int\csch x\coth x\ dx=-\csch x+C$
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

#### Derivatives

| $\frac{dy}{dx}\arcsinh u=\frac{1}{\sqrt{u^2+1}}\cdot\frac{dy}{dx} u$
| $\frac{dy}{dx}\arccosh u=\frac{1}{\sqrt{u^2-1}}\cdot\frac{dy}{dx} u:(x>1)$
| $\frac{dy}{dx}\arctanh u=\frac{1}{1-u^2}\cdot\frac{dy}{dx} u:(\left\|x\right\|<1)$
| $\frac{dy}{dx}\arccoth u=\frac{1}{1-u^2}\cdot\frac{dy}{dx} u:(\left\|x\right\|>1)$
| $\frac{dy}{dx}\arcsech u=-\frac{1}{u\sqrt{1-u^2}}\cdot\frac{dy}{dx} u:(0 < x < 1)$
| $\frac{dy}{dx}\arccsch u=-\frac{1}{\left\|u\right\|\sqrt{1+x^2}}\cdot\frac{dy}{dx} u:(x\neq 0)$

#### Integrals

| $\int\frac{1}{\sqrt{u^2\pm a^2}}du=\ln\left(u+\sqrt{u^2\pm a^2}\right)+C$
| $\int\frac{1}{a^2-u^2}du=\frac{1}{2a}\ln\left\|\frac{a+u}{a-u}\right\|+C$
| $\int\frac{1}{u\sqrt{a^2\pm u^2}}du=-\frac{1}{a}\ln\frac{a+\sqrt{a^2\pm u^2}}{\left\|u\right\|}+C$

#### Relating inverse circular and inverse hyperbolic

Circular function | Hyperbolic function
-- | --
$\frac{dy}{dx}\arcsin u=\frac{1}{\sqrt{1-u^2}}\cdot\frac{dy}{dx} u$                  | $\frac{dy}{dx}\arcsinh u=\frac{1}{\sqrt{u^2+1}}\cdot\frac{dy}{dx} u$
$\frac{dy}{dx}\arctan u=\frac{1}{1+u^2}\cdot\frac{dy}{dx} u$                         | $\frac{dy}{dx}\arctanh u=\frac{1}{1-u^2}\cdot\frac{dy}{dx} u$
$\frac{dy}{dx}\arcsec u=\frac{1}{\left\|u\right\|\sqrt{u^2-1}}\cdot\frac{dy}{dx} u$  | $\frac{dy}{dx}\arcsech u=-\frac{1}{u\sqrt{1-u^2}}\cdot\frac{dy}{dx} u$

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

