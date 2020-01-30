---
title: Advanced Calculus—2
anchor: True
math: True
---
<div id="mathjax-preamble" style="display:none;">
$$
\newcommand{\seq}[1]{\left\{#1\right\}}
\newcommand{\Limsup}{\overline\lim}
\newcommand{\Liminf}{\underline\lim}
\newcommand{\abs}[1]{\lvert #1\rvert}
\newcommand{\norm}[1]{\lVert #1\rVert}
$$
</div>

* toc
{:toc}

---

<!--
{% include boxed.html text="" content="
"%}
-->

{% include boxed.html text="" content="
$$
\sum_{k=0}^n r^k = \frac{1-r^{k+1}}{1-r}
$$
"%}


By default, consider functions that are bounded on closed and bounded intervals

$$
\exists a,b\in\R,a,b<\infty,f:[a,b]\to\R
\text{ such that }
\exists m,M\in\R,m,M<\infty,\forall x\in[a,b],m\le f(x)\le M
$$

<!-- Ch 1 .................................................................. -->
# Riemann integrals

<!-- Ch 1.1 ................................................................ -->
## Partitions

Consider an interval over the x-axis $[a,b]$.
Different partitions of that interval are different ways to divide it into
smaller sub-intervals.

{% include boxed.html text="Definition 1.1.1" content="
  A **partition** $P$ of the interval $[a,b]$ is the set of points
  $\seq{x_k}_{k=0}^n$ (not necessarily equidistant) such that

  $$
  a=x_0<x_1<x_2<\ldots<x_{k-1}<x_k<\ldots<x_{n-1}<x_n=b
  $$

  The k-th subinterval of $P$ is the interval $P_k=[x_{k-1},x_k]$ and its length
  is given by

  $$
  \abs{P_k} = \Delta x_k = x_k-x_{k-1}
  $$

  So the first subinterval is $\abs{P_1} = \Delta x_1 = x_1-x_0$
"%}

{% include boxed.html text="Definition 1.1.2" content="
  The **norm of a partition** $P=\seq{x_k}_{k=0}^n$ denoted $\norm P$ is defined

  $$
  \norm P = \max_{k=1,2,\ldots,n}\abs{P_k} = \max_{k=1,2,\ldots,n}\Delta x_k
  $$
"%}

{% include boxed.html text="Definition 1.1.3" content="
  The **upper sum** and **lower sum** for the function $f:[a,b]\to\R$ corresponding to
  partition $P=\seq{s_k}_{k=0}^n$ are respectively given by

  $$
  U(f,P)=\sum_{k=1}^n M_k(f,P)\Delta x_k\text{, where }
  M_k(f,P)=\sup_{x\in P_k}f(x)
  \\
  L(f,P)=\sum_{k=1}^n m_k(f,P)\Delta x_k\text{, where }
  m_k(f,P)=\inf_{x\in P_k}f(x)
  $$
"%}

{% include boxed.html text="Definition 1.1.4" content="
  Let two partitions $P_A$ and $P_B$ (not subintervals of a partition
  but two different partitions, each with its own subintervals) of $[a,b]$. The
  partition $P_B$ is said to be a **refinement** of $P_A$ (we also
  say $P_B$ is **finer** than $P_A$) if it is obtained from
  $P_A$ by adding a finite number of points.
"%}

{% include boxed.html text="Lemma 1.1.1" content="
  Let a function $f:[a,b]\to\R$ and two partitions $P_A$ and $P_B$ of
  $[a,b]$. If $P_B$ is finer than $P_A$ then

  $$
  U(f,P_B)\le U(f,P_A)\text{, and }
  L(f,P_B)\ge L(f,P_A)
  $$
"%}

{% include boxed.html text="Corollary 1.1.2" content="
  If $P_A$ and $P_B$ are two arbitrary partitions (one is not necessarily finer
  than the other) of $[a,b]$ then

  $$
  L(f,P_B)\le U(f,P_A)
  $$
"%}

<!-- Ch 1.2 ................................................................ -->
## Riemann integrals

{% include boxed.html text="Definition 1.2.1" content="
  Let $f:[a,b]\to\R$ be a bounded function. Where $P$ is a partition of the
  interval $[a,b]$, the upper and lower integrals of $f$ on $[a,b]$ are
  respectively defined by

  $$
  \overline{\int_a^b}f(x)dx
  = \inf_P U(f,P)
  = \inf\seq{U(f,P)}\text{, and }
  \underline{\int_a^b}f(x)dx
  = \sup_P L(f,P)
  = \sup\seq{L(f,P)}
  $$
"%}

{% include boxed.html text="Definition 1.2.2" content="
  A bounded function $f:[a,b]\to\R$ is said to be **Riemann integrable** on
  $[a,b]$ if

  $$
  \forall\varepsilon>0,\exists\delta>0,\norm{P}<\delta\Rightarrow
  U(f,P)-L(f,P)<\varepsilon \\
  \Leftrightarrow
  \lim_{\norm P\to 0}\left(U(f,P)-L(f,P)\right)=0
  $$

  That is the norm of the partition (the
  length of the largest interval in the partition) goes to zero, so the
  difference between the upper and lower sums converge to zero
"%}

We can also show that a function is not Riemann integrable by showing the
complement. That is

$$
\exists\varepsilon>0,\forall\delta>0,\exists P,
(\norm{P}<\delta)\wedge(U(f,P)-L(f,P)\ge\varepsilon)
$$

{% include boxed.html text="Proposition 1.2.2" content="
  Let a bounded and Riemann integrable function $f:[a,b]\to\R$, then

  $$
  \underline{\int_a^b}f(x)dx=\overline{\int_a^b}f(x)dx=\int_a^b f(x)dx
  $$

  And the quantity $\int_a^b f(x)dx$ is called the **Riemann integral** of $f$
  over $[a,b]$.
"%}

{% include boxed.html text="Definition 1.2.3" content="
  Let a bounded function $f:[a,b]\to\R$ and a partition $P$ of $[a,b]$.
  Denote $\forall k=1,2,\ldots,n$ for $c_k\in[x_{k-1},x_k]$.
  The **Riemann sum** of $f$ over $P$ and with the set of points
  $\seq{c_k}_{k=1}^n$ is given by

  $$
  R_n(f,\seq{c_k}_{k=1}^n)=\sum_{k=1}^n f(c_k)\Delta x_k
  $$

  Which we denote $R_n$ (if there is no ambiguity).
"%}

{% include boxed.html text="Theorem 1.2.3" content="
  Assume $f$ is Riemann integrable over $[a,b]$ then

  $$
  \forall\varepsilon>0,\exists\delta>0,\forall P,\norm P<\delta \Rightarrow
  \left|R_n(f,\seq{c_k}_{k=1}^n)-\int_a^b f(x)dx\right|<\varepsilon
  $$

  For any arbitrary set of points $\seq{c_k}$ associated with $P$.
  Note that this statement is equivalent to

  $$
  \int_a^b f(x)dx=\lim_{n\to\infty}R_n
  $$
"%}

And the converse theorem:

{% include boxed.html text="Theorem 1.2.4" content="
  Let a bounded function $f:[a,b]\to\R$.
  Assume that $\exists I\in\R$ (finite) such that

  $$
  \forall\varepsilon>0,\exists\delta>0,\forall P,
  \norm P<\delta,\abs{R_n-I}<\varepsilon
  $$

  Then $f$ is Riemann integrable on $[a,b]$ and

  $$
  I=\int_a^b f(x)dx
  $$
"%}

Recalling uniform continuity...

{% include boxed.html text="Theorem 1.2.4" content="
  If a function $f$ is continuous on a closed and bounded interval $[a,b]$ then
  $f$ is uniformly continuous on $[a,b]$.
"%}

What's the difference between continuity and uniform continuity again?

Doesn't matter where in an interval you look, a function is uniformly
continuous if it is continuous anywhere for some delta. In other words delta is
independent of the point you choose.

**Continuity:**

$$
\forall x_0\in[a,b],\forall\varepsilon>0,
\exists\delta(\varepsilon,x_0)>0,\forall x\in[a,b],
\abs{x-x_0}<\delta
\Rightarrow
\abs{f(x)-f(x_0)}<\varepsilon
$$

**Uniform continuity:**

$$
\begin{aligned}
  &\forall\varepsilon>0,
  \exists\delta(\varepsilon)>0,
  \forall x_0\in[a,b],
  \forall x\in[a,b],
  \abs{x-x_0}<\delta
  \Rightarrow
  \abs{f(x)-f(x_0)}<\varepsilon \\
  \Leftrightarrow
  &\forall\varepsilon>0,
  \exists\delta(\varepsilon)>0,
  \forall x_1\in[a,b],
  \forall x_2\in[a,b],
  \abs{x_1-x_2}<\delta
  \Rightarrow
  \abs{f(x)-f(x_0)}<\varepsilon
\end{aligned}
$$

{% include boxed.html text="Theorem 1.2.6" content="
  If a function $f$ is continuous on $[a,b]$ then $f$ is Riemann integrable on
  $[a,b]$.
"%}

---

# Series of numbers

## Convergence criteria

<!-- Theorem 2.2.1 -->
{% include boxed.html text="Theorem" content="
$$
\sum_{k=n_0}^\infty a_k\text{ converges }\Rightarrow\lim_{n\to\infty}a_n=0
$$
"%}

Also consider the contraposition

$$
\lim_{n\to\infty}a_n\ne 0\Rightarrow\sum_{k=n_0}^\infty a_k\text{ diverges}
$$

---

{% include boxed.html text="Defintion: Alternating series" content="
A series of the form
$$
\sum_{n=1}^\infty(-1)^{n-1}a_n=a_1-a_2+\cdots\text{ or }
\sum_{n=1}^\infty(-1)^n a_n=-a_1=a_2-\cdots\text{ or }
$$
Where $\forall n\in\N$, $a_n\ge 0$ is called an alternating series.
"%}

{% include boxed.html text="Theorem" content="
Assume $\forall n\in\N$, $a_n\ge 0$ and $a_n\ge a_{n+1}$ (sequence decreasing).

If $\lim_{n\to\infty}a_n=0$ then $\sum_{n=1}^\infty a_n$ converges conditinally.

If we denote $S=\sum_{n=1}^\infty(-a)^{n-1}a_n$ and
$S_n=\sum_{k=1}^n(-1)^{k-1}a_k$ its n-th partial sum, we have:

- $\forall k\in\N$, $S_{2k}\le S\le S_{2k+1}$, and
  $S_{2k+2}\le S\le S_{2k+1}$, and
  $\forall n\in\N$, $\abs{S-S_n}\le a_{n+1}$.
"%}

