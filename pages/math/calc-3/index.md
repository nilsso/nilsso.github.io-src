---
layout: default
title: "Calculus 3"
---

{% include mathjax.html %}

# Randomized study guides

Made using my [quiz-generator](github.com://SweedJesus/quiz-generator).

1. [Cumulative review](./cumulative-review.pdf)
1. [Exam 1 review](./exam01-review.pdf)

# My notes

## Vectors

A vector (or euclidean vector)

$$ \vec u=\langle u_1,u_2\rangle $$

### Properties

-- | --
Commutative addition | $ \vec u+\vec v\equiv\langle u_1+v_1,u_2+v_2\rangle $
Scalar multiplation | $ k\cdot \vec u=\langle k\cdot u_1, k\cdot u_2\rangle $

### Identities

-- | --
Zero vector | $ \vec 0=\langle 0,0\rangle $
Inverse identity | $ \vec u+(-\vec u)=0 $
Additive identity | $ \vec u+\vec 0=\vec u $

### Magnitude

The magnitude of a vector is the distance between the origin and the point at
the components of the vector (x, y, and what ever other dimensions). For a
vector $$ \vec w $$, it's magnitude is notated $$ \|\vec w\| $$, and is defined
as the following:

$$
\|\vec w\|\equiv\sqrt{w_1^2,\cdots,w_n^2}
$$

It is easy to see then that the magnitude of a vector is the same as the
hypotenuse of the right triangle formed by the component vectors of the original
$$ \vec w $$.

### Unit/normal vectors

A unit vector (or normal vector) is a vector with magnitude equal to 1, but
often either in the same direction as a *non-unit* vector, or in a direction of
a vector that does not yet exist but will by applying a scalar multiple to the
unit vector.

The unit vector of an existing *non-unit* vector $$ \vec w $$ is defined as
such:

$$
\vec u\equiv\frac{1}{\|\vec w\|}\cdot\vec w=
\langle\frac{w_1}{\|\vec w\|},\cdots,\frac{w_n}{\|\vec w\|}\rangle
$$

### Dot product

The dot product of two vectors returns a scalar value.

### Cross product

The cross product (or vector product) of two vectors returns a vector value
known as the normal vector (of the arguments).

$$
\vec n=\vec a\times \vec b
$$

## Planes

- Equation of a plane given three points (vectors)

    $$
    \begin{align*}
    & P(x_P,y_P,z_P), Q(x_Q,y_Q,z_Q), R(x_R,y_R,z_R) \\
    & \vec u=\vec{PQ}\text{ or }\vec{PR} \\
    & \vec n=\vec{PQ}\times \vec{PR}=\langle a,b,c\rangle \\
    & \vec n\cdot\vec u=a(x-x_0)+b(y-y_0)+c(z-z_0)=0
    \end{align*}
    $$

- Distance between a point and a plane

