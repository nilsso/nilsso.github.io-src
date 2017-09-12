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

#### 2x2 matrices

$$ {% include_relative includes/matrix-multi01.tex %} $$

#### 3x3 matrices

$$ {% include_relative includes/matrix-multi02.tex %} $$

## Systems of Linear Equations

$$
\begin{gather*}
x+y+z=5\\
2x+3y+4z=10
\end{gather*}
$$

### Gaussian Elimination

### Gauss-Jordan Elimination

### Elementary Operations and Matrices

