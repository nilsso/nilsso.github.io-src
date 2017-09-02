---
layout: default
title: "Calculus 3"
---

{% include mathjax.html %}

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

### Planes

Given a vector $$ \vec{PQ} \sqrt 2 $$

