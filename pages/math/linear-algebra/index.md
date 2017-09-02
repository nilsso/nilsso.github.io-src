---
layout: default
title: "Linear Algebra"
---

{% include mathjax.html %}

# Matrices

A matrix is a rectangular array of real numbers where the exact location of
elements is crucial. A matrix has dimensions has m rows and n columns
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

Multiplication is defined for two behaviors:

#### 1. The product of a matrix and a vector

A vector (or column matrix) is a matrix with a single column.

$$
\begin{gather*}
A=(a_{ij})\in\mathbb{R}^{m\times n} \\
B=(b_{ij})\in\mathbb{R}^{m\times 1} \\
A\cdot B =
\left(\begin{matrix}
a_{11}\cdot b_{11}+\cdots+a_{i1}\cdot b_{1i} \\
\vdots \\
a_{1j}\cdot b_{11}+\cdots+a_{ij}\cdot b_{1i} \\
\end{matrix}\right)
\end{gather*}
$$

{% include collapsible.html
tag="matrix-mult-1"
title="Matrix Multiplication (Ex. #1)"
content="
$$
\left(\begin{matrix}
1 & 4 & 3 \\
2 & 5 & 1
\end{matrix}\right)
\left(\begin{matrix}
8 \\
2 \\
0
\end{matrix}\right) =
\left(\begin{matrix}
(1\cdot 8)+(4\cdot 2)+(3\cdot 0) \\
(2\cdot 8)+(5\cdot 2)+(1\cdot 0)
\end{matrix}\right) =
\left(\begin{matrix}
16 \\
26
\end{matrix}\right)
$$
" %}

#### 2. The product of two matrices

For two matrices to be multiplied the left matrix *must* have n number of
columns and the right matrix *must* have n number of rows. For example, the
matrices.

{% include collapsible.html
tag="matrix-mult-2"
title="Matrix Multiplication (Ex. #2)"
content="
$$
\left(\begin{matrix}
1 & 2 \\
5 & 6 \\
\end{matrix}\right)
\left(\begin{matrix}
5 & 7 \\
6 & 8 \\
\end{matrix}\right) =
\left(\begin{matrix}
17 & 23 \\
39 & 53 \\
\end{matrix}\right)
$$
" %}

{% include collapsible.html
tag="matrix-mult-3"
title="Matrix Multiplication (Ex. #3)"
content="
$$
\left(
\begin{matrix}
1 & 4 \\
2 & 5 \\
\end{matrix}
\right)
\left(
\begin{matrix}
8 & 9 & 0 \\
2 & 6 & 0 \\
\end{matrix}
\right) =
\left(
\begin{matrix}
(1\cdot 8)+(4\cdot 2) & (1\cdot 9)+(4\cdot 6) & (1\cdot 0)+(4\cdot 0) \\
(2\cdot 8)+(5\cdot 2) & (2\cdot 9)+(5\cdot 6) & (2\cdot 0)+(5\cdot 0) \\
\end{matrix}
\right) =
\left(
\begin{matrix}
16 & 33 & 0 \\
26 & 48 & 0 \\
\end{matrix}
\right)
$$
" %}

