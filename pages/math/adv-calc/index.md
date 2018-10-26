---
title: Advanced Calculus
---
{% include mathjax.html %}
<div id="mathjax-preamble" style="display:none;">
$$
\newcommand{\seq}[1]{\left\{#1\right\}}
\newcommand{\N}{\mathbb N}
\newcommand{\Z}{\mathbb Z}
\newcommand{\R}{\mathbb R}
$$
</div>

<!-- Ch 3 -->
# Sequences and their limits

<!-- Ch 3.4 -->
## Cauchy sequences

<!-- Def 3.4.1 -->
A sequence $\seq{a_n}_{n=1}^\infty$ is a **Cauchy sequence** if

$$
\forall\epsilon>0,
\exists N\in\N,
\forall n,m\geq N,
|a_n-a_m|<\epsilon
$$

Or alternatively by the substitution $m=n+k$

$$
\forall\epsilon>0,
\exists N\in\N,
\forall n\geq N, \forall k\in\N,
|a_{n+k}-a_n|<\epsilon
$$

<!-- Prop 3.4.1 -->
We also have that sequences that converge are necessarily Cauchy sequences (at least of real number sequences).

<!-- Ch 3.5 -->
## Countability

TODO!

<!-- Ch 3.6 -->
## Density

TODO!

<!-- Ch 3.7 -->
## Least upper bound principle

TODO!

<!-- Ch 3.8 -->
## Monotone sequences

<!-- Def 3.8.1 -->
A sequence $\seq{a_n}$ is said to be
- **non-decreasing** or **increasing** if $\forall n\in\N$, $a_n\leq a_{n+1}$,
- **strictly increasing** if $\forall n\in\N$, $a_n<a_{n+1}$,
- **non-increasing** or **decreasing** if $\forall n\in\N$, $a_n\geq a_{n+1}$,
- **strictly decreasing** if $\forall n\in\N$, $a_n>a_{n+1}$,

And in any of these cases we say that the sequence is **monotone** (i.e. monotone increasing, monotone decreasing, etc).

<!-- Th 3.8.1 -->
### Monotone convergence principle

- A monotone increasing sequence $\seq{a_n}$ of real numbers that is bounded above has a limit $L$ and $\forall n\in\N$, $a_n\leq L$.
- A monotone decreasing sequence $\seq{a_n}$ of real numbers that is bounded below has a limit $l$ and $\forall n\in\N$, $a_n\geq l$.

<!-- Ch 3.9 -->
## Infinite limits

<!-- Def 3.9.1 -->
We say the limit of the sequence $\seq{a_n}$ is:

- $+\infty$ (denoted as $\lim_{n\to\infty}a_n=+\infty$) if $\forall M>0,\exists N\in\N,\forall n\in\N,n\geq N,a_n> M$,
- $-\infty$ (denoted as $\lim_{n\to\infty}a_n=-\infty$) if $\forall M>0,\exists N\in\N,\forall n\in\N,n\geq N,a_n< -M$.

### Properties of infinite limits

<ul>
<!-- Prop 3.9.1 -->
{% include tooltip.html text="Proposition 3.9.1" content="
<li>We have $$ \lim_{n\to\infty}a_n=-\infty \Leftrightarrow \lim_{n\to\infty}-a_n=\infty $$</li>
" %}

<!-- Prop 3.9.2 -->
{% include tooltip.html text="Proposition 3.9.2" content="
<li>Assume that for some $N_0$, $a_n>0$ for all $n>N_0$ and $lim_{n\to\infty}a_n=0$, then:
$$ \lim_{n\to\infty}\frac{1}{a_n}=+\infty $$</li>
" %}

<!-- Prop 3.9.3 -->
{% include tooltip.html text="Proposition 3.9.3" content="
<li>Assume that $\lim_{n\to\infty}a_n>0$ or $\lim_{n\to\infty}a_n=+\infty$ and $\lim_{n\to\infty}b_n=+\infty$ then
$$ \lim_{n\to\infty}a_n b_n=+\infty $$</li>
" %}
</ul>

<!-- Ch 4 -->
# Limits of functions

<!-- Ch 4.1 -->

<!-- Def 4.1 -->
## Finite limits

### Definition of finite limits

Given a function $f:D\to R\subset\R$, a point $x_0$, eventually not in $D$, and $L\in\R$, finite, we say that **the limit of the function $f$ at $x_0$ is $L$** if and only if:

$$
\begin{gathered}
\forall\epsilon,
\exists\delta>0,
\forall x\in D,
x\neq x_0,
|x-x_0|<\delta \Rightarrow
|f(x)-L|<\epsilon \Leftrightarrow \\
\lim_{x\to x_0}f(x)=L
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
|f(x_0+h)-L|<\epsilon \Leftrightarrow \\
\lim_{x\to x_0}f(x)=L
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
|f(x)-L|<\epsilon \Leftrightarrow \\
\lim_{x\to x_0+}f(x)=L
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
|f(x)-L|<\epsilon \Leftrightarrow \\
\lim_{x\to x_0-}f(x)=L
\end{gathered}
$$

Note that for a limit to exist it must exist from both the left and from the right:

$$
\lim_{x\to x_0}f(x)=L \Leftrightarrow
\left(\lim_{x\to x_0+}f(x)=L\right)\wedge \left(\lim_{x\to x_0-}f(x)=L\right)
$$

<!-- Th 4.1.1 -->
### Sequential characterization of limits

Given a function $f:D\to \R$ and a point $x_0$, eventually not in $D$, then $\lim_{x\to x_0}f(x)=L$ if and only if any sequence $\seq{x_n}$ where $\forall n\in\N$, $x_n\in D$ and where $\lim_{n\to\infty}x_n=x_0$ we have $\lim_{n\to\infty}f(x_n)=L$.

<!-- Th 4.1.2 -->
<!-- Th 4.1.3 -->

<!-- Ch 4.2 -->
## Infinite limits

<!-- Def 4.2.1 -->
Let a function $f:D\to R\subset\R$, we have for limits going to positive infinity:

$$
\lim_{x\to x_0} = +\infty\Leftrightarrow
\forall M>0,\exists\delta>0,\forall x\in D,x\neq x_0,|x-x_0|<\delta\Rightarrow f(x)>M
$$

And for limits going to negative infinity:

$$
\lim_{x\to x_0} = -\infty\Leftrightarrow
\forall M>0,\exists\delta>0,\forall x\in D,x\neq x_0,|x-x_0|<\delta\Rightarrow f(x)<-M
$$

Similar to finite limits, we can have infinite limits approach $x_0$ from either the right or from the left.

<!-- Prop 4.2.1 -->
<!-- Prop 4.2.2 -->
<!-- Prop 4.2.3 -->

<!-- Ch 4.3 -->
## Limits at infinity

<!-- Def 4.3.1 -->
Of finite limits at infinity:

$$
\begin{gathered}
\lim_{x\to+\infty}f(x)=L \Leftrightarrow \\
\forall\epsilon>0,\exists X>0,\forall x>X \Rightarrow |f(x)-L|<\epsilon
\end{gathered}
$$

$$
\begin{gathered}
\lim_{x\to-\infty}f(x)=L \Leftrightarrow \\
\forall\epsilon>0,\exists X>0,\forall x<-X \Rightarrow |f(x)-L|<\epsilon
\end{gathered}
$$

And of infinite limits at infinity:

$$
\begin{gathered}
\lim_{x\to+\infty}f(x)=+\infty \Leftrightarrow \\
\forall M>0, \exists X>0, \forall x>X \Rightarrow f(x)>M
\end{gathered}
$$

$$
\begin{gathered}
\lim_{x\to+\infty}f(x)=-\infty \Leftrightarrow \\
\forall M>0, \exists X>0, \forall x>X \Rightarrow f(x)<-M
\end{gathered}
$$

$$
\begin{gathered}
\lim_{x\to-\infty}f(x)=+\infty \Leftrightarrow \\
\forall M>0, \exists X>0, \forall x<-X \Rightarrow f(x)>M
\end{gathered}
$$

$$
\begin{gathered}
\lim_{x\to-\infty}f(x)=-\infty \Leftrightarrow \\
\forall M>0, \exists X>0, \forall x<-X \Rightarrow f(x)<-M
\end{gathered}
$$

<!-- Th 4.3.1 -->
<!-- Th 4.3.2 -->

---

<!-- Ch 5 -->
# Continuity of functions

<!-- Def 5.3 -->
## Uniform continuity

A function $f$ is **uniformly continuous on an interval $D\subset\R$** if and only if:

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
