---
layout: default
title: "Algebra"
---

{% include mathjax.html %}

## Polynomials

A polynomial is an expression that can be built from one or many (hence poly)
constants and symbols called indeterminates (aka variables) by means of
addition, multiplication and exponentiation to a non-negative integer power. A
polynomial with a single indeterminate x can always be written in the form:

\\[
a\_{n}x^{n} + a\_{n-1}x^{n-1} + \dots + a\_{1}x + a\_{0} \tag{1.0}\label{polynomial}
\\]

Where \\(a\_{0},\dots,a\_{n}\\) are constants and \\(x\\) is the indeterminate.

Each coefficient and/or indeterminate entity is called a term, the degree of a
term is sum of the degrees of its indeterminates, and the degree of a polynomial
is the largest degree of its terms. Polynomials can easily be added, subtracted
and multiplied (using FOIL). When dividing use either [polynomial long
division][] or [synthetic division][]. A few polynomial forms with low degrees
have specific names:

*Monomial*: A one term polynomial | \\(a_{0}x^{n_0}\\)
*Binomial*: A two term polynomial | \\(a_{1}x^{n_1}+a_{0}x^{n_0}\\)
*Trinomial*: A three term polynomial | \\(a_{2}x^{n_2}+a_{1}x^{n_1}+a_{0}x^{n_0}\\)
*Monic polynomial*: Any polynomial with a leading term coefficient of 1 | \\((1)x^2+bx+c\\)
*Constant polynomial*: A zero degree monomial | \\(a\\)
*Linear polynomial*: A degree one binomial | \\(ax+b\\)
*Quadratic polynomial*: A degree two binomial | \\(ax^2+bx+c\\)

[polynomial long division]: https://en.wikipedia.org/wiki/Polynomial_long_division
[synthetic division]: https://en.wikipedia.org/wiki/Synthetic_division

### Factoring

Whole numbers are factored using prime numbers, and by the same token
polynomials are factored using prime/irreducible polynomials (depending on the
field the coefficients are said to belong to---integers, real, complex, etc.).
The following formulas are useful for recognizing common patterns of factoring,
with the expanded form on the left and the factored form on the right:

*Greatest common factor* | \\(ca+cv=c(a+b)\\)
| \\(x^2-(r-s)x+rs=(x-r)(x-s)\\)
*Perfect square* | \\(a^2+2ab+b^2=(a+b)^2\\)
*Perfect square* | \\(a^2-2ab+b^2=(a-b)^2\\)
*Difference of squares* | \\(a^2-b^2=(a+b)(a-b)\\)
*Sum of cubes* | \\(a^3+b^3=(a+b)(a^2-ab+b^2)\\)
*Difference of cubes* | \\(a^3-b^3=(a-b)(a^2+ab+b^2)\\)

{% include example.html
tag="factoring-1"
title="Factoring #1"
file="factoring01" %}

{% include example.html
tag="factoring-2"
title="Factoring #2"
file="factoring02" %}

{% include example.html
tag="factoring-3"
title="Factoring #3"
file="factoring03" %}

### Roots

Fundamental theorem of algebra

> Every non-constant single-variable polynomial with complex coefficients has at
> least one complex root.
>
> Every non-zero, single-variable, degree \\(n\\) polynomial with complex
> coefficients has, counted with multiplicity, exactly \\(n\\) complex roots.
>
> Any polynomial is the product of a real number, and a collection of monic
> quadratic polynomials that do not have roots, and of monic linear polynomials.

> Every polynomial equation with degree greater than zero has at least one root
> in the set of complex numbers.
>
> A polynomial equation of the form \\(P(x) = 0\\) of degree \\(n\\) with
> complex coefficients has exactly \\(n\\) roots in the set of complex numbers.

Or by referencing the form of polynomials,

> If \\( a\_{n}x^{n} + a\_{n-1}x^{n-1} + \dots + a\_{0} \\), then \\( p(x) \\)
> is the product of the real number \\( a\_n \\), and a collection of monic
> quadratic polynomials that do not have roots, and of monic linear polynomials.

A polynomial is completely factored if it is written as a product of a real
number (same as the leading coefficient), and a collection of monic quadratic
polynomials that do not have roots, and of monic linear polynomials.

### Rational root theorem

The [rational root theorem][] (or test) provides a list of *possible* roots of a
polynomial with all integer coefficients, given the constant term and leading
term coefficient.

>  Given a polynomial equation in the form \ref{polynomial} with \\(a_0\\) and
>  \\(a_n\\) that are non-zero, then the fraction \\(p/q\\) is a possible root
>  of the polynomial where \\(p\\) is an integer factor of the constant term
>  \\(a_0\\), and \\(q\\) is an integer factor of the leading coefficient
>  \\(a_n\\). This generates a list of possibilities which can then be tested
>  through trial and error.

{% include example.html
tag="rational-root-1"
title="Rational Root #1"
file="rational-root01" %}

[rational root theorem]: https://en.wikipedia.org/wiki/Rational_root_theorem

## Quadratic polynomials

Form of an indeterminate power two polynomial (quadratic):

\\[
ax^2 + bx + c
\\]

### Discriminant

The [discriminant][] of a polynomial is a polynomial function of its
coefficients, which allows deducing some properties of the roots without needing
to compute them. The discriminant of the quadratic polynomial is:

\\[ b^2 - 4ac \\]

By evaluating the discriminant of a quadratic polynomial one of the following
can be determined about the polynomial:

1.  If the discriminant is *zero*, the polynomial has one "double root" (a root
with [multiplicity][] two, i.e. value which is unique but appears twice within
the set of roots),
2.  If the discriminant is *positive*, the polynomial has two real roots,
3.  If the discriminant is *negative*, the polynomial has no real roots.

[discriminant]: https://en.wikipedia.org/wiki/Discriminant
[multiplicity]: https://en.wikipedia.org/wiki/Multiplicity\_(mathematics)

### Factoring

Before even attempting to factor a quadratic polynomial the completely factored
form can be determined by evaluating the discriminant to be one of the following
cases:

1.  Discriminant is negative---no real roots:
\\[
a\left(x^2 + \frac{b}{a}x + \frac{c}{a}\right)
\tag{2.0}
\label{factored-quadratic:a}
\\]

2.  Discriminant is positive---two real roots
(\\(\alpha\_1\\) and \\(\alpha\_2\\)):
\\[
a \left( x - \alpha\_1 \right)\left( x - \alpha\_2 \right)
\tag{2.1}
\label{factored-quadratic:b}
\\]

3.  Discriminant is equal to zero---one real root
(\\(\alpha\_1\\)):
\\[
a \left( x - \alpha\_1 \right)\left( x - \alpha\_1 \right)
\tag{2.2}
\label{factored-quadratic:c}
\\]

Two major methods

1.  Complete the square
\\[
ax^2 + bx + \left(\frac{b}{2}\right)^2 = - c + \left(\frac{b}{2}\right)^2
\\]

2.  Quadratic formula
\\[
\frac{-b \pm \sqrt{ b^2 - 4ac }}{2a}
\\]

<div class="example-group">
{% include example.html
tag="quadratic-factoring-1"
title="Quadratic factoring #1"
file="quadratic_factoring01" %}
</div>

## Cubic polynomials

Form of an indeterminate power three (cubic) polynomial:

\\[
ax^3 + bx^2 + cx + d
\\]

Following from the Fundamental Theorem of Algebra, the completely factored form
of a cubic polynomial will be either the product of a constant and three linear
polynomials, or of a constant, one linear polynomial and one quadratic
polynomial with no rational roots.

## Sources

- [Factoring Polynomials](https://www.math.utah.edu/~wortman/1050-text-fp.pdf)
- Wikipedia
  - [Discriminant](https://en.wikipedia.org/wiki/Discriminant)
- [Mathwords](http://www.mathwords.com)
  - [Double root](http://www.mathwords.com/d/double_root.htm)
  - [Multiplicity](http://www.mathwords.com/m/multiplicity.htm)
