---
title: Algebra
math: True
---

* toc
{:toc}

# Exponents and Logarithms

<strong>Exponentiation rules</strong>

Product rule             | \\(a^{p/q}a^{r/s}=a^{p/q+r/s}=a^{\\frac{ps+qr}{qs}}\\)
Quotient rule            | \\(a^{p/q}/ a^{r/s}=a^{p/q-r/s}\\)
Power of a power rule    | \\((a^{p/q})^{r/s}=a^{pr/qs}\\)
Power of a product rule  | \\((ab)^{p/q}=a^{p/q}b^{\\,p/q}\\)
Power of a quotient rule | \\((a/b)^{p/q}=a^{p/q}/b^{\\,p/q}\\)
Zero exponent            | \\(a^0=1\\)
Negative exponent        | \\(a^{-p/q}=\\frac{1}{a^{p/q}}\\)
Negative exponent        | \\(\\frac{1}{a^{-p/q}}=a^{p/q}\\)

And then root notation can also be expressed as a power.

\begin{align\*}
\sqrt[q]{a}&=a^{1/q}\\\
\sqrt[q]{a^p}&=(a^{1/q})^p
\end{align\*}

A logarithmic expression is really just the inverse of a corresponding
exponential expression.

\\[
y=a^x\iff\log_a y=x
\\]

It follows then that because of the rules of exponents that the following rules
for logarithms exist:

<strong>Properties of logarithms</strong>

Log of a product| $\log_a(uv)=log_a(u)+log_a(v)\$
Log of a quotient| $\log_a(u/v)=log_a(u)-log_a(v)\$
Log of a power| $\log_a(u^v)=v\log_a(u)\$
Log of a root| $\log_a(\sqrt[v]{u})=\frac{\log_a(u)}{v}\$
Zero exponent | $\log_a(1)=0\$
Changing of base | $\log_a(u)=\frac{\log_k(u)}{\log_k(a)}\$

<strong>Properties of natural logarithms</strong>

Natural log of a product |$\ln(uv)=\ln u+\ln v$
Natural log of a quotient |$\ln\left(\frac{u}{v}\right)=\ln u-\ln v$
Natural log of a power | $\ln u^n=n\ln u$

# Polynomials

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

Monomial<br/>(one term polynomial) | \\(a_{0}x^{n_0}\\)
Binomial<br/>(two term polynomial) | \\(a_{1}x^{n_1}+a_{0}x^{n_0}\\)
Trinomial<br/>(three term polynomial) | \\(a_{2}x^{n_2}+a_{1}x^{n_1}+a_{0}x^{n_0}\\)
Constant polynomial<br/>(zero degree monomial) | \\(a\\)
Linear polynomial<br/>(degree one binomial) | \\(ax+b\\)
Quadratic polynomial<br/>(degree two binomial) | \\(ax^2+bx+c\\)
Monic polynomial<br/>(leading coefficient of 1) | \\((1)x^2+bx+c\\)

[polynomial long division]: https://en.wikipedia.org/wiki/Polynomial_long_division
[synthetic division]: https://en.wikipedia.org/wiki/Synthetic_division

## Polynomial factoring

Whole numbers are factored using prime numbers, and by the same token
polynomials are factored using prime/irreducible polynomials (depending on the
set the coefficients are said to belong to---integers, real, complex, etc.).
This property of polynomial factorability is stated by the *fundamental theorem
of algebra*:

> Every polynomial is the product of a constant and linear polynomial and/or
> irreducible quadratic polynomial factors.
>
> Every polynomial of \\(n\\) degree has exactly \\(n\\) roots (which may exist
> over the set of complex numbers).

A polynomial is completely factored when it is expressed as the product of these
prime factors. Over the set of complex numbers, polynomials can always be
factored into linear polynomial factors, while over the set of real numbers
irreducible polynomials can either be linear or quadratic.

The following formulas are useful for recognizing common patterns of factoring,
with the expanded form on the left and the factored form on the right:

<strong>Factoring Formulas</strong>

Greatest common factor | \\(ca+cv=c(a+b)\\)
| \\(x^2-(r-s)x+rs=(x-r)(x-s)\\)
Perfect square | \\(a^2+2ab+b^2=(a+b)^2\\)
Perfect square | \\(a^2-2ab+b^2=(a-b)^2\\)
Difference of squares | \\(a^2-b^2=(a+b)(a-b)\\)
Sum of cubes | \\(a^3+b^3=(a+b)(a^2-ab+b^2)\\)
Difference of cubes | \\(a^3-b^3=(a-b)(a^2+ab+b^2)\\)

<!--\{\% include collapsible.html-->
<!--tag="factoring-1"-->
<!--title="Example: Factoring #1"-->
<!--content="-->
<!--"%}-->

<!--\{\% include collapsible.html-->
<!--tag="factoring-2"-->
<!--title="Example: Factoring #2"-->
<!--content="-->
<!--"%}-->

<!--\{\% include collapsible.html-->
<!--tag="factoring-3"-->
<!--title="Example: Factoring #3"-->
<!--content="-->
<!--"%}-->

### Roots

A root or zero is a point at which a function is equal to zero. Roots can be
solved for by setting a function equal to zero and solving for any
indeterminates.

<!--\{\% include collapsible.html-->
<!--tag="roots-1"-->
<!--title="Example: Roots #1"-->
<!--content="-->
<!--*Solve for \\(x\\) over the set of real numbers:*-->
<!--\\[x-1=0\\]-->
<!--1. Subtract 1 from both sides-->
<!--\\[x=0\\]-->
<!--Thus the linear polynomial function has a single real root at 1.-->
<!--"%}-->

Once a function has been factored into the product of prime polynomials and is
set equal to zero, the [zero-product property][] can be used by setting each
factor equal to zero.

[zero-product property]: https://www.mathsisfun.com/algebra/zero-product-property.html

<!--\{\% include collapsible.html-->
<!--tag="zero-product-property-1"-->
<!--title="Example: Zero-Product Property #1"-->
<!--content="-->
<!--*Solve for \\(x\\) over the set of real numbers:*-->
<!--\\[(x-5)(x-3)=0\\]-->

<!--1. Zero-product property-->
<!--\\[(x-5)=0, (x-3)=0\\]-->

<!--2. Solve for \\(x\\)-->
<!--\\[x=5, x=3\\]-->

<!--Thus the factored quadratic polynomial has two real roots, one at 5 and one at-->
<!--3.-->
<!--" %}-->

### Rational root theorem

The [rational root theorem][] (or test) provides a list of *possible* rational roots of a
polynomial with all integer coefficients, by using the constant term and leading
term coefficient.

[rational root theorem]: https://en.wikipedia.org/wiki/Rational_root_theorem

Given a polynomial equation in the form \ref{polynomial} with \\(a_0\\) and
\\(a_n\\) that are non-zero, then the fraction \\(p/q\\) is a possible root of
the polynomial where \\(p\\) is an integer factor of the constant term
\\(a_0\\), and \\(q\\) is an integer factor of the leading coefficient
\\(a_n\\). This generates a list of possibilities which can then be tested
through trial and error.

By taking into account the fundamental theorem of algebra ("every polynomial of
\\(n\\) degree has \\(n\\) roots") it is known how many of these posibilities
will evaluate the polynomial to zero. Of all of the posibilities generated by
RRT for a polynomial of third degree (with all real roots), three of those
posibilities will evaluate the polynomial to zero, thus we could test the
possibilities until three roots are found.

Lastly, because a polynomial is the product of linear polynomial factors, the
roots discovered can be used to express the polynomial in it's factored form.

\{\% include collapsible.html
tag="polynomial-root-1"
title="Example: Polynomial Root #1"
content="
*Find the roots of and factor the polynomial:*
\\[2w^3-6w^2-2w+6\\]

1. GCM
\\[2(w^3-3w^2-w+3)\\]

2. RRT possibilities: \\(\pm\frac{1}{1}\\), \\(\pm\frac{3}{1}\\). By individually
   testing these possibilities it's found that 3, 1 and -1 are the three roots.

3. Factor
\begin{align\*}
&2(w^3-3w^2-w+3)=\\\\\\
&2(w+1)(w-1)(w-3)
\end{align\*}
"%}

Quadratic equations with two rational roots are special in that the product of
the roots equals the constant term of the polynomial and the sum of the roots
equals the coefficient of the middle (power one) term. Knowing this can easily
reduce the time needed to find the roots.

<!--\{\% include collapsible.html-->
<!--tag="polynomial-root-2"-->
<!--title="Example: Polynomial Root #2"-->
<!--content="-->
<!--*Solve for \\(x\\) over the set of real numbers:*-->
<!--\\[x^2=5(x+100)\\]-->

<!--1. Expand the right side-->
<!--\\[x^2=5x+500\\]-->

<!--2. Move everything to the left-->
<!--\\[x^2-5x-500=0\\]-->

<!--3. Find a factor pair of -500 whose sum equals -5-->
<!--\begin{align\*}-->
<!---500,1&=-499\\\\\\-->
<!---250,2&=-258\\\\\\-->
<!---25,20&=-5-->
<!--\end{align\*}-->

<!--4. Factor-->
<!--\\[(x-25)(x+20)=0\\]-->

<!--5. Zero-Product Property-->
<!--\\[(x-25)=0,(x+20)=0\\]-->

<!--6. Solve-->
<!--\\[x=25,x=-20\\]-->

<!--Thus the polynomial has two real roots, one at the point (25,0) and one at the-->
<!--point (-20,0).-->
<!--"%}-->

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

### Quadratic factoring

Before even attempting to factor a quadratic polynomial the completely factored
form can be determined by evaluating the discriminant to be one of the following
cases:

1. Discriminant is negative---no real roots:
\\[
a\left(x^2 + \frac{b}{a}x + \frac{c}{a}\right)
\tag{2.0}
\label{factored-quadratic:a}
\\]

2. Discriminant is positive---two real roots
($\alpha_1$ and $\alpha_2$):
\\[
a \left( x - \alpha\_1 \right)\left( x - \alpha\_2 \right)
\tag{2.1}
\label{factored-quadratic:b}
\\]

3. Discriminant is equal to zero---one real root
(\\(\alpha\_1\\)):
\\[
a \left( x - \alpha\_1 \right)\left( x - \alpha\_1 \right)
\tag{2.2}
\label{factored-quadratic:c}
\\]

### Completing the Square

Given a quadratic equation that does *not* factor easily (doesn't fit any of the
[factoring formulas](#factoring)) we can add "zero" (or the sum of opposites) to
turn the quadratic into a perfect square; we call this process completing the
square. The general form of this process and result given the
polynomial $x^2+bx+c$ is:

$$
x^2+bx+\left(\frac{b}{2}\right)^2+c-\left(\frac{b}{2}\right)^2\Rightarrow
\left(x+\frac{b}{2}\right)^2+c-\left(\frac{b}{2}\right)^2
$$

However the leading term coefficient \\(a\\) must be 1; if it isn't then it must
be factored out. Completing the square isn't so useful if the leading
coefficient cannot be easily divided into the other term coefficients.

<!--\{\% include collapsible.html-->
<!--tag="quadratic-factoring-1"-->
<!--title="Example: Quadratic factoring #1"-->
<!--content="-->
<!--*Factor and determine any and all roots of the quadratic polynomial:*-->
<!--\\[ 2x^2 + 4x - 2 = 0 \\]-->

<!--Discriminant:-->
<!--\\[(4) - 4(2)(-2) = 20\\]-->

<!--Because the discriminant is positive the polynomial has two real roots and the-->
<!--completely factored form should be that of \ref{factored-quadratic:b}-->

<!--1.  Factor 2 from left-->
<!--\\begin{align\*}-->
<!--2(x^2+2x-1)&=0\\\\\\-->
<!--x^2+2x-1&=0-->
<!--\\end{align\*}-->

<!--2.  Add 1 to both sides-->
<!--\\[ x^2 + 2x = 1 \\]-->

<!--3.  Complete the square-->
<!--\\begin{align\*}-->
<!--((2)/2)^2&=(1)\\\\\\-->
<!--x^2+2x+(1)&=1+(1)-->
<!--\\end{align\*}-->

<!--4.  Factor left (perfect square)-->
<!--\\[ (x + 1)^2 = 2 \\]-->

<!--5.  Solve-->
<!--\\[ x = -1 \\pm \\sqrt{2} \\]-->
<!--"%}-->

### Quadratic Formula

\\[
\frac{-b \pm \sqrt{ b^2 - 4ac }}{2a}
\\]

## Cubic polynomials

Form of an indeterminate power three (cubic) polynomial:

\\[
ax^3 + bx^2 + cx + d
\\]

Following from the Fundamental Theorem of Algebra, the completely factored form
of a cubic polynomial will be either the product of a constant and three linear
polynomials, or of a constant, one linear polynomial and one quadratic
polynomial with no rational roots.

# Sources

- [Factoring Polynomials](https://www.math.utah.edu/~wortman/1050-text-fp.pdf)
- [Final Formula Sheet](https://math.colorado.edu/~nita/FinalFormulas.pdf)
- Wikipedia
  - [Discriminant](https://en.wikipedia.org/wiki/Discriminant)
- [Mathwords](http://www.mathwords.com)
  - [Double root](http://www.mathwords.com/d/double_root.htm)
  - [Multiplicity](http://www.mathwords.com/m/multiplicity.htm)
