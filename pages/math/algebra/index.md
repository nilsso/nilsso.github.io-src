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
a\_{n}x^{n} + a\_{n-1}x^{n-1} + \dots + a\_{1}x + a\_{0},
\\]

Where \\(a\_{0},\dots,a\_{n}\\) are contants and \\(x\\) is the indeterminate.

Monomials have one term (e.g. \\(16x^4\\)), binomials two unlike terms (e.g.
\\(2x + 1\\)), trinomials three (e.g. \\(x^2 + 2x + 1\\)) and so on. Polynomials
can easily be added, subtracted and multiplied (using FOIL). When dividing use
either [polynomial long division][] or [synthetic division].

{% include example.html
title="Polynomial division"
file="polynomial_division" %}

{% include example.html
title="Synthetic division"
file="synthetic_division" %}

[polynomial long division]: https://en.wikipedia.org/wiki/Polynomial_long_division
[synthetic division]: https://en.wikipedia.org/wiki/Synthetic_division

### Factoring

Whole numbers are factored using prime numbers, and by the same token
polynomials are factored using prime/irreducible polynomials (depending on the
field the coefficients are said to belong to---integers, real, complex, etc.).
Factoring algebraic expressions is a game of recognizing forms and applying
formulas. Some of the most common formulas are:

Greatest common factor | \\(ca+cv=c(a+b)\\)
Difference of squares | \\(a^2-b^2=(a+b)(a-b)\\)
Perfect square | \\(a^2+2ab+b^2=(a+b)^2\\)
Perfect square | \\(a^2-2ab+b^2=(a-b)^2\\)
Sum of cubes | \\(a^3+b^3=(a+b)(a^2-ab+b^2)\\)
Difference of cubes | \\(a^3-b^3=(a-b)(a^2+ab+b^2)\\)

Be able to recognize these.

### Roots

**Fundamental theorem of algebra**

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
a \left( x^2 + \frac{b}{a}x + \frac{c}{a} \right)
\tag{a}
\label{quadratic:a}
\\]

2.  Discriminant is positive---two real roots
(\\(\alpha\_1\\) and \\(\alpha\_2\\)):
\\[
a \left( x - \alpha\_1 \right)\left( x - \alpha\_2 \right)
\tag{b}
\label{quadratic:b}
\\]

3.  Discriminant is equal to zero---one real root
(\\(\alpha\_1\\)):
\\[
a \left( x - \alpha\_1 \right)\left( x - \alpha\_1 \right)
\tag{c}
\label{quadratic:c}
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

{% include example.html
title="Quadratic factoring"
file="quadratic_factoring" %}

## Cubic polynomials

Form of an indeterminate power three (cubic) polynomial:

\\[
ax^3 + bx^2 + cx + d
\\]

Following from the Fundamental Theorem of Algebra, the completely factored form
of a cubic polynomial will be either the product of a constant and three linear
polynomials, or of a constant, one linear polynomial and one quadratic
polynomial with no rational roots.

### Rational root theorem

The [rational root test][] can be used to determine if the polynomial has any
rational roots.

0 rational roots: cube roots

3 rational roots:

1 rational root: \\(x - \alpha_1\\) can be factored out using [polynomial long
division][] or [synthetic division][].

[rational root test]: https://en.wikipedia.org/wiki/Rational_root_theorem
[polynomial long division]: https://en.wikipedia.org/wiki/Rational_root_theorem
[synthetic division]: https://en.wikipedia.org/wiki/Synthetic_division

## Sources

- [Factoring Polynomials](https://www.math.utah.edu/~wortman/1050-text-fp.pdf)
- Wikipedia
  - [Discriminant](https://en.wikipedia.org/wiki/Discriminant)
- [Mathwords](http://www.mathwords.com)
  - [Double root](http://www.mathwords.com/d/double\_root.htm)
  - [Multiplicity](http://www.mathwords.com/m/multiplicity.htm)
