---
layout: default
title: "Linear Algebra"
---

{% include mathjax.html %}
{% include page-toc.html id-after="page-title" %}

<div id="mathjax-preamble" style="display:none;">
$$
\let\oldvec\vec
\renewcommand{\vec}[1]{\mathbf{#1}}
$$
</div>

## Matrices

A matrix is a rectangular array of real numbers where the exact location of
elements is crucial. A matrix has dimensions has *m* rows and *n* columns
written as $m\times n$. The location of element is given by its "i"th
row and "j"th column positions and is the "ij"th element.

$$
A=\left(\begin{matrix}
a_{11} & a_{21} & \cdots & a_{i1} \\
a_{12} & a_{22} & \cdots & a_{i2} \\
\vdots & \vdots & \ddots & \vdots \\
a_{1j} & a_{2j} & \cdots & a_{ij}
\end{matrix}\right) = (a_{ij})\in \mathbb{R}^{m\times n}
$$

## Basic operations

### Matrix addition

$$
\begin{gather*}
A=(a_{ij})\in\mathbb{R}^{m\times n} \\
A+B = (a_{ij}+b_{ij})
\end{gather*}
$$

### Scalar multiplication

$$
\begin{gather*}
A=(a_{ij})\in\mathbb{R}^{m\times n} \\
k\cdot A = (k\cdot a_{ij})
\end{gather*}
$$

### Matrix multiplication

For two matrices, named left and right, to be multiplied together there must be
*n* columns in left and *n* rows in right. The number of rows in left and
columns in right are arbitrary but will change the dimensions of the resulting
matrix.

<!--
#### 2x2 matrices

$$
\begin{bmatrix}
  a_{1} & a_{2} \\
  a_{3} & a_{4} \\
\end{bmatrix}
\begin{bmatrix}
  b_{1} & b_{2} \\
  b_{3} & b_{4} \\
\end{bmatrix} =
\begin{bmatrix}
  (a_{1}b_{1}+a_{2}b_{3}) &
  (a_{1}b_{2}+a_{2}b_{4})
  \\
  (a_{3}b_{1}+a_{4}b_{3}) &
  (a_{3}b_{2}+a_{4}b_{4})
\end{bmatrix}
$$

#### 3x3 matrices

$$
\begin{bmatrix}
  a_{1}&a_{2}&a_{3} \\
  a_{4}&a_{5}&a_{6} \\
  a_{7}&a_{8}&a_{9}
\end{bmatrix}
\begin{bmatrix}
  b_{1}&b_{2}&b_{3} \\
  b_{4}&b_{5}&b_{6} \\
  b_{7}&b_{8}&b_{9}
\end{bmatrix} =
\begin{bmatrix}
  (a_{1}b_{1}+a_{2}b_{4}+a_{3}b_{7}) & (a_{1}b_{2}+a_{2}b_{5}+a_{3}b_{8}) & (a_{1}b_{3}+a_{2}b_{6}+a_{3}b_{9}) \\
  (a_{4}b_{1}+a_{5}b_{4}+a_{6}b_{7}) & (a_{4}b_{2}+a_{5}b_{5}+a_{6}b_{8}) & (a_{4}b_{3}+a_{5}b_{6}+a_{6}b_{9}) \\
  (a_{4}b_{1}+a_{5}b_{4}+a_{6}b_{7}) & (a_{4}b_{2}+a_{5}b_{5}+a_{6}b_{8}) & (a_{4}b_{3}+a_{5}b_{6}+a_{6}b_{9})
\end{bmatrix}
$$
-->

## Systems of Linear Equations

### Gaussian Elimination

### Gauss-Jordan Elimination

### Elementary Matrices and Operations

An elementary matrix is defined as a variation of the identity matrix but with a
single element changed. Because any matrix can be expressed as the result of a
series of matrix operations, then any non-elementary matrix can be expressed as
the product of a series of elementary matrix.

## Vectors

A vector can be described as an ordered set of coordinates in $$n$$ dimensions,
but also as a direction to move in space and the amount which to move. Both are
valid. Notationally, a vector can have an arrow above the symbol
($$\oldvec{u}$$) or can be bold ($$\vec{u}$$), but both express the same
meaning in that the symbol u is a vector. What is not inherently encoded is the
dimension the vector is in, that that depends on context.

-- | --
A vector | $$\vec u=\langle u_1,u_2,\cdots,u_n\rangle\in\mathbb R^n$$
Closure of addition | $$\vec u+\vec v=\langle (u_1+w_1),\cdots,(u_n+w_n)\rangle\in\mathbb R^n$$
Closure of scalar multiplication | $$\alpha\vec u=\langle \alpha u_1,\cdots,\alpha u_n\rangle\in\mathbb R^n$$
Zero element | $$\vec 0=\langle 0_1,\cdots,0_n\rangle\in\mathbb R^n$$
Associativity of additon | $$\vec u+(\vec v+\vec w)=(\vec u+\vec v)+\vec w$$
Commutativity of addition | $$\vec u+\vec v=\vec v+\vec u$$
Identity element of addition | $$\vec v+\vec 0=\vec v$$
Inverse elements of addition | $$\vec v+(-\vec v)=0$$
Identity element of multiplication | $$ 0\cdot\vec u=\vec 0$$
| $$1\cdot\vec v=\vec v$$
Distributivity of scalar multiplication | $$\alpha(\vec v+\vec u)=\alpha\vec u+\alpha\vec v$$
| $$(\alpha+\beta)\vec u=\alpha\vec u+\beta\vec u$$

## Vector spaces

A *vector space* is a collection of vector elements  which can be added together
or be multiplied by scalars. Of the properties of a vector space, closure
properties guarantee that addition or scalar multiplication return a value that
is also a member of the vector space. A vector space must have these two
properties to be considered a vector space.

-- | --
Closure of addition | $$\vec u+\vec v\in V$$
Closure of scalar multiplication | $$\alpha\vec v\in V$$

### Basis, span and dependence

A *span* is the set of all possible vectors from a linear combination of
vectors. Two non-parallel vectors have the span of all vectors within the plane
on which the two vectors lie; three non-parallel vectors have the span of all
three-dimensional space.

The *basis* of a vector space is a set of *n* linearly independent vectors that
span the full space in *n*-dimensions. In the case of the two vectors defining
the span within a plane, the basis of that span are the two original vectors.
The basis set of three unit vectors in the direction of the x-axis, the y-axis
and z-axies respectively is called the *standard* basis, and notated as
$$\hat i$$, $$\hat j$$ and $$\hat k$$ (i-hat, j-hat, k-hat).

$$
\hat i=e_1=e_x=(1,0,0)\\
\hat j=e_2=e_y=(0,1,0)\\
\hat k=e_3=e_z=(0,0,1)
$$

By defining the basis of a vector space we can describe any vector in that space
as the linear combination of the basis vectors.

$$
\vec A=(A_x)\hat i+(A_y)\hat j+(A_z)\hat k
$$

For a set of vectors to be basis they must all be linearly independent;
basically meaning that of the vectors in the set, none are multiples. Consider a
set of three vectors of which two are parallel. Because any point on the line
on which both the parallel vectors lie can be produced by multiplying either of
the vectors by some scalar, we could reduce the set and have no loss of span by
removing one of the parallel vectors.

