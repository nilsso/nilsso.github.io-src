---
layout: default
title: "Haskell notes"
---

{% include mathjax.html %}

## The lambda calculus

Identity function and alpha equivalence:

$$
\lambda x.x,\quad\lambda y.y,\quad\lambda z.z \\
$$

Applying a lambda to an argument:

$$
\begin{align*}
(\lambda x.x)y& & (\lambda x.x)(\lambda y.y)& \\
[x:=y]&         & [x:=(\lambda y.y)]& \\
y&              & (\lambda y.y)&
\end{align*}
$$


