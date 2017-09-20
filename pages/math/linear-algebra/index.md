---
layout: default
title: "Linear Algebra"
---

{% include mathjax.html %}
{% include page-toc.html id-after="page-title" %}

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

## Vector spaces

A vector space is a collection of vectors which can be added together or be
multiplied by scalars. Of the properties of a vector space, closure properties
guarantee that addition or scalar multiplication return a value that is also a
member of the vector space. If a vector space *has* these properties, it *has*
closure, else it does not. I refer to a general vector space here as simply
$$V$$, with vectors $$\mathbf v$$, $$\mathbf u$$ and $$\mathbf w$$ as a part of
that vector space ($$\mathbf v,\mathbf u,\mathbf w\in V$$).

-- | --
Zero element | $$\mathbf 0=(0,0)\in V$$
Closure of addition | $$\mathbf u+\mathbf v\in V$$
Closure of scalar multiplication | $$\alpha\mathbf v\in V$$
Associativity of additon | $$\mathbf u+(\mathbf v+\mathbf w)=(\mathbf u+\mathbf v)+\mathbf w$$
Commutativity of addition | $$\mathbf v+\mathbf u=\mathbf u+\mathbf v$$
Identity element of addition | $$\mathbf v+\mathbf 0=\mathbf v$$
Inverse elements of addition | $$\mathbf v+(-\mathbf v)=0$$
Identity element of multiplication | $$1\cdot\mathbf v=\mathbf v$$
Distributivity of scalar multiplication | $$\alpha(\mathbf v+\mathbf u)=\alpha\mathbf u+\alpha\mathbf v$$
| $$(\alpha+\beta)\mathbf u=\alpha\mathbf u+\beta\mathbf u$$

### Subspaces

<!--- Linear independence-->

<!--A set of vectors $$S_n=\{\mathbf v_1,\cdots,\mathbf v_n\}$$ is said to linearly-->
<!--independent if any equation $$\alpha_1\mathbf v_1+\cdots+\alpha_n\mathbf-->
<!--v_n=0$$,-->

<!--Row reduce-->

<!--"The whole space"?-->

### Basis, span and dependence
