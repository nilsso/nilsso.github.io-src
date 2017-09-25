---
layout: default
title: "Calculus 3"
---

{% include mathjax.html %}
{% include page-toc.html id-after="page-title" %}

<div id="mathjax-preamble" style="display:none;">
$$
\let\oldvec\vec
\renewcommand{\vec}[1]{\mathbf{#1}}
$$
</div>

## Vectors

-- | --
A vector | $$\vec u=\langle u_1,\cdots,u_n\rangle$$

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

$$
\vec u\cdot\vec w=u_1+w_1+\cdots+u_n+w_n=\lVert\vec u\rVert\lVert\vec w\rVert\cos\alpha
$$

#### Vector projection

A projection vector describes how much one vector is in the same direction as
another vector. In the form below, $$\theta$$ is the angle between the two
vectors. The second form is useful if the angle is unknown.

$$
\text{proj}_{\vec w}\vec u=
(\|\vec u\|\cos\theta \vec)\vec w=
\frac{\vec u\cdot\vec w}{\|\vec u\|\|\vec u\|}\vec w
$$

Consider that the operation is simply a scalar multiplication.

### Cross product

The cross product (or vector product) of two vectors returns a vector
orthogonal to both arguments known as the normal vector.

$$
\begin{gather*}
a=(u_yw_z-u_zw_y)\\
b=(u_xw_z-u_zw_x)\\
c=(u_xw_y-u_yw_x)\\
\vec u\times\vec w=\langle a,-b,c\rangle
\end{gather*}
$$

### Magnitude

The magnitude of a vector is the distance between the origin and the point at
the components of the vector, and equivalent to the hypotenuse of the triangle
formed by the components.

$$\lVert\vec u\rVert\equiv\sqrt{u_1^2+\cdots+u_n^2}$$

### Unit vectors

A unit vector (or normal vector) is a vector with magnitude equal to 1 and are
used when we care about direction but not magnitude. The unit vector of a
vector *u* is defined as a vector with the components of the original divided
by the magnitude of the original:

$$
\vec u\equiv\vec u\cdot\frac{1}{\lVert\vec u\rVert}=
\langle\frac{u_1}{\lVert\vec u\rVert},\cdots,\frac{u_n}{\lVert\vec u\rVert}\rangle
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
Position vector     | $$\displaystyle \vec d(t)=\vec r(t)=\langle x(t),y(t),z(t)\rangle$$
Velocity vector     | $$\displaystyle \vec v(t)=\vec r'(t)=\langle x'(t),y'(t),z'(t)\rangle$$
Acceleration vector | $$\displaystyle \vec a(t)=\vec r''(t)=\langle x''(t),y''(t),z''(t)\rangle$$
Arc length          | $$\displaystyle L=\int_a^b\lVert\vec v\rVert dt$$
Tangent unit vector | $$\displaystyle \vec T=\vec v\cdot\frac{1}{\lVert\vec v\rVert}$$
Normal unit vector  | $$\displaystyle \vec N$$

### Motion

---

## Class resources

Study materials for the class Math-252. Quizes and review tests are the product
of my [quiz-generator](github.com://SweedJesus/quiz-generator) script I wrote
over the 2017 summer.

-- | --
**Quizes** | [All quizes](quiz-generator/quizes.pdf)
**Exam 1** | [Cheatsheet](exam01-cheatsheet.pdf)
           | [Cumulative review (random)](quiz-generator/exam01-review.pdf)
           | [Practice test](quiz-generator/exam01-practice.pdf)

