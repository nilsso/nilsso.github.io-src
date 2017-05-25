---
layout: default
title: "Math notes"
---

{% include mathjax.html %}

## Polynomials

A polynomial is an expression that can be built from constants and symbols
called indeterminates (aka variables) by means of addition, multiplication and
exponentiation to a non-negative integer power. A polynomial in a single
indeterminate x can always be written in the form:

\\[
a\_{n}x^{n} + a\_{n-1}x^{n-1} + \dots + a\_{1}x + a\_{0},
\\]

Where \\(a\_{0},\dots,a\_{n}\\) are contants and \\(x\\) is the indeterminate.

And now to introduce the "fundamental theorem of algebra":

> Any polynomial is the product of a real number, and a collection of monic
> quadratic polynomials that do not have roots, and of monic linear
> polynomials.

Or by referencing the form of polynomials,

> If \\( a\_{n}x^{n} + a\_{n-1}x^{n-1} + \dots + a\_{0} \\), then \\( p(x) \\)
> is the product of the real number \\( a\_n \\), and a collection of monic
> quadratic polynomials that do not have roots, and of monic linear polynomials.

A polynomial is completely factored if it is written as a product of a real
number (same as the leading coefficient), and a collection of monic quadratic
polynomials that do not have roots, and of monic linear polynomials.

## Quadratic polynomials

Form of an indeterminate power two polynomial (quadratic):

\\[ ax^2 + bx + c \\]

### Discriminant

The [discriminant][] of a polynomial is a polynomial function of its
coefficients, which allows deducing some properties of the roots without needing
to compute them. The discriminant of the quadratic polynomial is:

\\[ b^2 - 4ac \\]

By evaluating the discriminant of a quadratic polynomial one of the following
can be determined about the polynomial:

1.  If the discriminant is zero, the polynomial has one "double root" (a root
with [multiplicity][] two, i.e. value which is unique but appears twice within
the set of roots),
2.  If the discriminant is positive, the polynomial has two real roots,
3.  If the discriminant is negative, the polynomial has no real roots.

[discriminant]: https://en.wikipedia.org/wiki/Discriminant
[multiplicity]: https://en.wikipedia.org/wiki/Multiplicity\_(mathematics)

### Factoring

Having evaluated the discriminant the completely factored form of a quadratic
polynomial can be generalized as:

1.  If no roots, completely factored form is
\\[ a \left( x^2 + \frac{b}{a}x + \frac{c}{a} \right) \\]

2.  If two roots (\\(\alpha\_1\\) and \\(\alpha\_2\\)):
\\[ a \left( x - \alpha\_1 \right)\left( x - \alpha\_2 \right) \\]

3.  If one root (\\(\alpha\_1\\)):
\\[ a \left( x - \alpha\_1 \right)\left( x - \alpha\_1 \right) \\]

*Example:*

Factor \\( 2x^2 + 4x - 2 = 0 \\)

1.  factor 2 from left:
\\( x^2 + 2x - 1 = 0 \\)
2.  add 1 to both sides:
\\( x^2 + 2x = 1 \\)
3.  complete the square:
\\( ((2)/2)^2 = 1,\quad x^2 + 2x + 1 = 2 \\)
4.  factor left:
\\( (x + 1)^2 = 2 \\)
5.  solve for x:
\\( x = \\{ -1 + \sqrt{2}, -1 - \sqrt{2} \\} \\)

<!--\\begin{align\*}-->
<!--&\text{(initial)} &-->
<!--&2x^2 + 4x - 2 = 0 \\\\\\-->
<!--&\text{1. factor 2 from left:} &-->
<!--&x^2 + 2x - 1 = 0 \\\\\\-->
<!--&\text{2. add 1 to both sides:} &-->
<!--&x^2 + 2x = 1 \\\\\\-->
<!--&\text{3. complete the square:} &-->
<!--&((2)/2)^2 = 1,\quad x^2 + 2x + 1 = 2 \\\\\\-->
<!--&\text{4. factor left:} &-->
<!--&\left(x + 1\right)^2 = 2 \\\\\\-->
<!--&\text{5. solve for x:} &-->
<!--&x = \\left\\{ -1 + \sqrt{2}, -1 - \sqrt{2} \\right\\}-->
<!--\\end{align\*}-->

## Cubic polynomials

### Rational root theorem

## Sources

- [Factoring Polynomials](https://www.math.utah.edu/~wortman/1050-text-fp.pdf)
- Wikipedia
  - [Discriminant](https://en.wikipedia.org/wiki/Discriminant)
- [Mathwords](http://www.mathwords.com)
  - [Double root](http://www.mathwords.com/d/double\_root.htm)
  - [Multiplicity](http://www.mathwords.com/m/multiplicity.htm)
