---
---
{% include mathjax.html %}
<div id="mathjax-preamble" style="display:none;">
$$
\newcommand{\seq}[1]{\left\{#1\right\}}
\newcommand{\Z}{\mathbb Z}
\newcommand{\R}{\mathbb R}
$$
</div>

<!-- Ch 4 -->
# Limits of functions

<!-- Def 4.1 -->
## Finite limits

### Definition of finite limits

Given a function $f:D\to R\subset\R$, a point $x_0$, eventually not in $D$, and $L\in\R$, finite, we say that *the limit of the function $f$ at $x_0$ is $L$* if and only if:

$$
\begin{gathered}
\forall\epsilon,
\exists\delta>0,
\forall x\in D,
x\neq x_0,
|x-x_0|<\delta \Rightarrow
|f(x)-L|<\epsilon \\
\Leftrightarrow \lim_{x\to x_0}f(x)=L
\end{gathered}
$$

<!-- Def 4.2 -->
Or alternatively by the substitution $h=x-x_0$:

$$
\begin{gathered}
\forall\epsilon,
\exists\delta>0,
\forall h\in D,
h\neq 0,
|h|<\delta \Rightarrow
|f(x_0+h)-L|<\epsilon \\
\Leftrightarrow \lim_{x\to x_0}f(x)=L
\end{gathered}
$$

We also have the definition of finite limits from the right:

$$
\begin{gathered}
\forall\epsilon,
\exists\delta>0,
\forall x\in D,
x\neq x_0,
x_0<x<x_0+\delta \Rightarrow
|f(x)-L|<\epsilon \\
\Leftrightarrow \lim_{x\to x_0+}f(x)=L
\end{gathered}
$$

And also from the left:

$$
\begin{gathered}
\forall\epsilon,
\exists\delta>0,
\forall x\in D,
x\neq x_0,
x_0-\delta<x<x_0 \Rightarrow
|f(x)-L|<\epsilon \\
\Leftrightarrow \lim_{x\to x_0-}f(x)=L
\end{gathered}
$$

Note that for a limit to exist it must exist from both the left and from the right:

$$
\lim_{x\to x_0}f(x)=L \Leftrightarrow
\left(\lim_{x\to x_0+}f(x)=L\right)\wedge \left(\lim_{x\to x_0-}f(x)=L\right)
$$

<!-- Th 4.1.1 -->
### Sequential characterization of limits

Given a function $f:D\to \R$ and a point $x_0$, eventually not in $D$, then $\lim_{x\to x_0}f(x)=L$ if and only if any sequence $\seq{x_n}$ where $\forall n\in\N$, $x_n\in D$ and where $\lim_{n\to\infty}x_n=x_0$ we have $lim_{n\to\infty}f(x_n)=L$.

<!-- Ch 5 -->
# Continuity of functions

<!-- Def 5.3 -->
## Uniform continuity

A function $f$ is *uniformly continuous on an interval $D\subset\R$* if and only if:

$$
\forall\epsilon>0,
\exists\delta>0,
\forall x_1,x_2\in D,
|x_2-x_1|<\delta \Rightarrow
|f(x_2)-f(x_1)|<\epsilon
$$

### Sequential chatacterization

A function $f:D\to \R$ is uniformly continuous on $D$ if and only if:

$$
\forall\seq{u_n}
$$
