---
layout: default
title: "Calculus 3"
toc: true
---

{% include mathjax.html %}

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

Here is one significant note in determining a unit vector: the unit vector in
the direction of a vector will be the same after multiplying the vector by a
posiive scalar. This can be extremely useful in simplifying the derivative of
the principle unit tangent vector, because so often the original will involve
a quotient and thus the derivative the quotient rule.

### Vector planes

$$
\begin{align*}
& P(x_P,y_P,z_P), Q(x_Q,y_Q,z_Q), R(x_R,y_R,z_R)\\
& \vec u=\vec{PQ}\text{ or }\vec{PR}\\
& \vec n=\vec{PQ}\times \vec{PR}=\langle a,b,c\rangle\\
& \vec n\cdot\vec u=a(x-x_0)+b(y-y_0)+c(z-z_0)=0
\end{align*}
$$

## Vector calculus

-- | --
Position | $$\vec d(t)=\vec r(t)=\langle x(t),y(t),z(t)\rangle$$
Velocity | $$\vec v(t)=\vec r'(t)=\langle x'(t),y'(t),z'(t)\rangle$$
Acceleration | $$\vec a(t)=\vec r''(t)=\langle x''(t),y''(t),z''(t)\rangle$$
Arc length | $$L=\int_a^b\lVert\vec v\rVert dt$$

### Motion

The unit tangent is a vector in the same direction as any vector given by the
velocity vector for a value of *t*, but with magnitude equal to one.

-- | --
Unit tangent | $$\vec T(t)=\frac{1}{\lVert\vec v\rVert}\vec v$$
Unit normal | $$\vec N(t)=\frac{1}{\lVert\vec T'(t)\rVert}\vec T'(t)$$
Acceleration | $$\vec a(t)=a_{\vec T}\vec T+a_{\vec N}\vec N$$

## Partial Derivatives

Given a function dependent on multiple variables, in taking the partial
derivative of that function with respect to one of the variables we can treat
the other variables like constants and derivate just as if it were a normal
single variable derivative. This process is the same for any function of any
number of variables.

$$
z=f(x,y),\ \frac{\delta z}{\delta x}=\frac{\delta}{\delta x}f(x,y)=f_{x}(x,y)
$$

Given $$z=f(x,y)=x^2+\sin y$$:

- Partial with respect to *x* :
    $$\displaystyle\frac{\delta z}{\delta x}=2x$$

- Second partial with respect to *x* :
    $$\displaystyle\frac{\delta^2 z}{\delta x^2}=2$$

- Partial with respect to *y* :
    $$\displaystyle\frac{\delta z}{\delta y}=\cos y$$

- Second partial with respect to *y* :
    $$\displaystyle\frac{\delta^2 z}{\delta y^2}=-\sin y$$

Given a function that is a composition of other functions of dependent
variables, taking the partial derivative will involve chain rule just as usual
but while obeying the properties above (everything that isn't a function that is
not power of the dependent variable is considered a constant).

Given $$z=f(x,y),\ x=h(u,v)\, y=g(u,v)$$:

$$
\frac{\delta z}{\delta u}=
\frac{\delta z}{\delta x}\frac{\delta x}{\delta u}+
\frac{\delta z}{\delta y}\frac{\delta y}{\delta u}
$$

### Gradient

The gradient of a function \(f(x,y)\):

$$
\nabla f(x,y)=\langle f_x(x,y),f_y(x,y)\rangle
$$

### Directional Derivative and Incline

The directional derivative at point $P(a,b)$ of function $f$ (that's
differentiable at $P$) and unit vector $\vec u$:

$$
D_u(a,b)=\nabla f(a,b)\cdot\vec u
$$

### Extrema

#### Of a function

Just as in calculus 1,

- 1st derivative test: extrema (critical point)
- 2nd derivative test: concavity (min/max)

$$
f_{xx}f_{yy}-(f_{xy})^2
\begin{cases}
  >0&\text{: extrema}\\
  =0&\text{: (we don't know)}\\
  <0&\text{: saddle-point}
\end{cases}
$$

#### Of a function and a constraint

Given a function $f(x,y)$ and constraint $g(x,y)$ we can derive the following
system of equations:

$$
\begin{aligned}
\nabla f(x,y)&=\lambda\nabla g(x,y)\\
\langle f_x,f_y\rangle&=\lambda\langle g_x,g_y\rangle\\
f_x&=\lambda g_x\\
f_y&=\lambda g_y
\end{aligned}
$$

From these we can solve for x, for y and for $\lambda$ and determine posible
extreme value points of the original function. Some posibilities may invalidate
the constraint and can therefore be disqualified.

## Integration

$$
A=\lim_{\|P\|\to 0} \sum^n_{i=1}\sum^m_{j=1}f(x_i,y_j)\Delta y_j\Delta x_i
=\int\int f(x,y)dy\ dx
$$

---

## Course resources

Here are some study materials I've put together using the
[quiz-generator](github.com://SweedJesus/quiz-generator) script I wrote over the
summer of 2017.

-- | -- | --
Exam 1 | [Cheatsheet](exam01-cheatsheet.pdf) | [Cumulative review (random)](exam01-review.pdf)
Exam 2 | [Cheatsheet](exam02-cheatsheet.pdf) | [Cumulative review (random)](exam02-review.pdf)
