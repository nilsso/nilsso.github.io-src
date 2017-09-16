---
layout: default
title: "Calculus 3"
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
\newcommand{\mag}[1]{\lVert#1\rVert}
$$
</script>

Randomized study exams for MATH-252, made using my [quiz-generator](github.com://SweedJesus/quiz-generator):

1. [Exam 1 review](exam01-review.pdf)
1. [Cumulative review](cumulative-review.pdf)

## Vectors

-- | --
Vector | $$\vec u=\langle u_1,\cdots,u_n\rangle$$

### Properties

-- | --
Commutative addition | $$\vec u+\vec w\equiv\langle u_1+w_1,\cdots,u_n+w_n\rangle$$
Scalar multiplication | $$k\vec u=\langle ku_1,\cdots,ku_n\rangle$$

### Identities

-- | --
Zero vector | $ \vec 0=\langle 0,0\rangle $
Inverse identity | $ \vec u+(-\vec u)=0 $
Additive identity | $ \vec u+\vec 0=\vec u $

### Dot product

The dot product of two vectors is the the scalar multiple of their magnitudes
and the angle $$\alpha$$ between them. Conceptually, it is the product of their
magnitudes by how much they are in the same direction.

-- | --
Vector multiplication (dot product) | $$\vec u\cdot\vec w=u_1+w_1+\cdots+u_n+w_n=\mag{\vec u}\mag{\vec w}\cos\alpha$$

### Cross product

The cross product (or vector product) of two vectors returns a vector
orthogonal to both arguments known as the normal vector.

$$
\begin{gather*}
a=(u_yw_z-u_zw_y)\\
b=(u_xw_z-u_zw_x)\\
c=(u_xw_y-u_yw_x)\\
\vec u\times\vec w=\langle a,b,c\rangle
\end{gather*}
$$

### Magnitude

The magnitude of a vector is the distance between the origin and the point at
the components of the vector, and equivalent to the hypotenuse of the triangle
formed by the components.

$$\mag{\vec u}\equiv\sqrt{u_1^2+\cdots+u_n^2}$$

### Unit vectors

A unit vector (or normal vector) is a vector with magnitude equal to 1 and are
used when we care about direction but not magnitude. The unit vector of a
vector *u* is defined as a vector with the components of the original divided
by the magnitude of the original:

$$
\vec u\equiv\vec u\cdot\frac{1}{\mag{\vec u}}=
\langle\frac{u_1}{\mag{\vec u}},\cdots,\frac{u_n}{\mag{\vec u}}\rangle
$$

### Vector planes

$$
\begin{align*}
& P(x_P,y_P,z_P), Q(x_Q,y_Q,z_Q), R(x_R,y_R,z_R) \\
& \vec u=\vec{PQ}\text{ or }\vec{PR} \\
& \vec n=\vec{PQ}\times \vec{PR}=\langle a,b,c\rangle \\
& \vec n\cdot\vec u=a(x-x_0)+b(y-y_0)+c(z-z_0)=0
\end{align*}
$$

## Vector calculus

-- | --
Position vector | $$\displaystyle\vec r=\langle r_1,\cdots,r_n\rangle$$
Velocity vector | $$\displaystyle\vec v=\vec r'=\langle r_1',\cdots,r_n'\rangle$$
Acceleration vector | $$\displaystyle\vec a=\vec v'=\langle v_1',\cdots,v_2'\rangle$$
Arc length | $$\displaystyle s=\int_a^b\mag{\vec r} dt=\int_a^b\sqrt{r_1^2+\cdots+r_n^2}dt$$
Tangent unit vector | $$\displaystyle \vec T=\vec v\cdot\frac{1}{\mag{\vec v}}$$
Normal unit vector | $$\vec N$$

### Motion

