---
title: Advanced Calculus—1
anchor: True
math: True
---
<div id="mathjax-preamble" style="display:none;">
$$
\newcommand{\seq}[1]{\left\{#1\right\}}
\newcommand{\Limsup}{\overline\lim}
\newcommand{\Liminf}{\underline\lim}
$$
</div>

<!-- Ch 3 .................................................................. -->

<!-- Ch 3.1 ................................................................ -->
# Sequences and their limits

{% include tooltip.html text="Definition 3.1.1" content="
A **sequence** is a function whose domain is a subset of integers o the form
$\seq{N_0,N_0+1,N_0+2,\cdots}$ where $N_0\in\N$. If we refer to this functionas
$f$, then $f(n)$ is usually denoted $a_n$ for $n=N_0,N_0+1,N_0+2,\cdots$. The
term $a_n$ is called the nth term of the sequence. We also may notate
$a_{N_0},a_{N_0+1},\ldots$ as $\seq{a_n}_{n=N_0}^\infty$ or simply $\seq{a_n}$
if the value of $N_0$ is obvious.
" %}

### Subsequences

{% include tooltip.html text="Definition 3.2.2" content="
A **subsequence** of a sequence $\seq{a_n}\_{n=1}^\infty$ is formed by selecting
the terms $a_n$ that correspond to the values of $n$ taken as a strictly
increasing sequence. If $n_1<n_2<\ldots<n_k<n_{k+1}<\ldots$ is a strictly
increasing sequence of integers, the corresponding sequence
$\seq{a_{n_k}}\_{k=1}^\infty$ is a subsequence of $\seq{a_n}_{n=1}^\infty$.
" %}

<!-- Ch 3.2 ................................................................ -->
## Limits

{% include tooltip.html text="Definition 3.2.1<br/>Proposition 3.2.1" content="
The limit of the sequence $\seq{a_n}$ (denoted $\lim_{n\to\infty}a_n=L$) is a
unique value $L$ which exists if:

$$ \forall\epsilon>0,\exists N\in\N,\forall n\geq N,|a_n-L|<\epsilon $$
" %}

{% include tooltip.html text="Proposition 3.2.2" content="
And if a sequence $\seq{a_n}$ converges to a limit $L$ then so do all
subsequences $\seq{a_{n_k}}$.
" %}

<!-- Ch 3.3 ................................................................ -->
### Properties of sequence limits

<ul>
{% include tooltip.html text="Proposition 3.3.1" content="
<li>The limit of a constant sequence $c$ is $c$.</li>
" %}

{% include tooltip.html text="Proposition 3.3.2" content="
<li>
Assume that $c$ is a constant and $\lim_{n\to\infty}a_n$ exists then:
$$
\lim_{n\to\infty}(ca_n)=c\lim_{n\to\infty}a_n
$$
</li>" %}

{% include tooltip.html text="Proposition 3.3.3" content="
<li>
(Sum rule) Fix $\seq{a_n}$ and $\seq{b_n}$ converging sequences, then
$\lim_{n\to\infty}(a_n+b_n)$ exists and:
$$
\lim_{n\to\infty}(a_n+b_n)=\lim_{n\to\infty}a_n+\lim_{n\to\infty}b_n
$$
</li>" %}

{% include tooltip.html text="Proposition 3.3.5" content="
<li>
(Product rule) Fix $\seq{a_n}$ and $\seq{b_n}$ converging sequences, then
$$
\lim_{n\to\infty}(a_n b_n)
= \left(\lim_{n\to\infty}a_n\right)\left(\lim_{n\to\infty}b_n\right)
$$
</li>" %}

{% include tooltip.html text="Proposition 3.3.6" content="
<li>
(Quotient rule) Fix $\seq{a_n}$ and $\seq{b_n}$ converging sequences, then
$$
\lim_{n\to\infty}\frac{a_n}{b_n}
= \frac{\lim_{n\to\infty}a_n}{\lim_{n\to\infty}b_n}
$$
" %}

{% include tooltip.html text="Proposition 3.3.7" content="
<li>
Fix $\seq{a_n}$ and $\seq{b_n}$ converging sequences.
If $\forall n\in\N,a_n<b_n$ then
$$
\lim_{n\to\infty}a_n\leq \lim_{n\to\infty}b_n
$$
" %}

{% include tooltip.html text="Corollary 3.3.8" content="
<li>
Assume that $\forall n\in\N,a_n<M$ and $\lim_{n\to\infty}a_n$ exists then:
$$
\lim_{n\to\infty}a_n\leq M
$$
" %}
</ul>

### Bounded sequences

{% include tooltip.html text="Definition 3.3.1" content="
A sequence $\seq{a_n}$ is said to be **bounded** if
$\exists M\in\R,M\geq 0,\forall n\in\N,|a_n|\leq M$.
" %}

<ul>
{% include tooltip.html text="Proposition 3.3.4" content="
<li>
A convergent sequence is bounded.
</li>" %}
</ul>

<!-- Ch 3.4 ................................................................ -->
## Cauchy sequences

{% include tooltip.html text="Definition 3.4.1" content="
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
" %}

{% include tooltip.html text="Proposition 3.4.1<br/>Axiom 1" content="
We have then that sequences that converge are necessarily Cauchy sequences (at
least of real number sequences) and converge to a real number.
" %}

<!-- Ch 3.5 ................................................................ -->
<!-- ## Countability-->

<!-- Ch 3.6 ................................................................ -->
<!-- ## Density-->

<!-- Ch 3.7 ................................................................ -->
## Least upper bound principle

Let $S\subset\R$, then:

{% include tooltip.html text="Definition 3.7.1<br/>Notation 3.1" content="
- The number $L$ is called the **least upper bound** of $S$ if $L$ is the
smallest number such that $\forall a\in S,a\leq L$. It is also called the
**supremum** and denoted $\sup S$.
- The number $l$ is called the **greatest lower bound** of $S$ if $l$ is the
greatest number such that $\forall a\in S,a\geq L$. It is also called the
**infimum** and is denoted $\inf S$.
" %}

Additionally we have that:

{% include tooltip.html text="Theorem 3.7.2" content="
- If $S$ is bounded above then $\sup S$ exists,
- If $S$ is bounded below then $\inf S$ exists.
" %}

All together we call this the least upper bound principle.

<!-- Ch 3.8 ---------------------------------------------------------------- -->
## Monotone sequences

A sequence $\seq{a_n}$ is said to be

{% include tooltip.html text="Definition 3.8.1" content="
- **non-decreasing** or **increasing** if $\forall n\in\N$, $a_n\leq a_{n+1}$,
- **strictly increasing** if $\forall n\in\N$, $a_n<a_{n+1}$,
- **non-increasing** or **decreasing** if $\forall n\in\N$, $a_n\geq a_{n+1}$,
- **strictly decreasing** if $\forall n\in\N$, $a_n>a_{n+1}$,

And in any of these cases we say that the sequence is **monotone** (i.e.
monotone increasing, monotone decreasing, etc).
" %}

### Monotone convergence principle

{% include tooltip.html text="Theorem 3.8.1" content="
- A monotone increasing sequence $\seq{a_n}$ of real numbers that is bounded
above has a limit $L$ and $\forall n\in\N$, $a_n\leq L$.
- A monotone decreasing sequence $\seq{a_n}$ of real numbers that is bounded
below has a limit $l$ and $\forall n\in\N$, $a_n\geq l$.
" %}

<!-- Ch 3.9 ................................................................ -->
## Infinite limits

We say the limit of the sequence $\seq{a_n}$ is:

{% include tooltip.html text="Definition 3.9.1" content="
- $+\infty$ (denoted as $\lim_{n\to\infty}a_n=+\infty$) if $\forall M>0,\exists
N\in\N,\forall n\in\N,n\geq N,a_n> M$,
- $-\infty$ (denoted as $\lim_{n\to\infty}a_n=-\infty$) if $\forall M>0,\exists
N\in\N,\forall n\in\N,n\geq N,a_n< -M$.
" %}

### Properties of infinite limits

<ul>
{% include tooltip.html text="Proposition 3.9.1" content="
<li>
$ \lim_{n\to\infty}a_n=-\infty \Leftrightarrow \lim_{n\to\infty}-a_n=\infty $
</li> " %}

{% include tooltip.html text="Proposition 3.9.2" content="
<li>
Assume that for some $N_0$, $a_n>0$ for all $n>N_0$ and $lim_{n\to\infty}a_n=0$,
then: $ \lim_{n\to\infty}\frac{1}{a_n}=+\infty $
</li> " %}

{% include tooltip.html text="Proposition 3.9.3" content="
<li>
Assume that $\lim_{n\to\infty}a_n>0$ or $\lim_{n\to\infty}a_n=+\infty$ and
$\lim_{n\to\infty}b_n=+\infty$ then $\lim_{n\to\infty}a_n b_n=+\infty$
</li> " %}

{% include tooltip.html text="Proposition 3.9.4" content="
<li>
Assume that $\lim_{n\to\infty}a_n=L$ or $\lim_{n\to\infty}a_n=+\infty$, then
$\lim_{n\to\infty}(a_n+b_n)=+\infty$
</li>" %}
</ul>

Note that for the sum and product rules above that by fixing some limits as
negative or as $-\infty$ we can get $\lim_{n\to\infty}a_n b_n=-\infty$ and
$\lim_{n\to\infty}(a_n+b_n)=-\infty$.

<!-- Ch 3.10 ............................................................... -->
## Cluster points

{% include tooltip.html text="Definition 3.10.1<br/>Proposition 3.10.2" content="
A point $s$ is said to be a **cluster point** of the sequence $\seq{a_n}$ if
$\forall\epsilon>0$ there exists infinitely many terms of $\seq{a_n}$ in the
interval $(s-\epsilon,s+\epsilon)$. This is equivalent to the statement:

$$
\forall\epsilon>0,\forall N\in\N,\exists n>N,|a_n-s|<\epsilon
$$
" %}

{% include tooltip.html text="Proposition 3.10.2" content="
We also have that $s$ is a cluster point of the sequence
$\seq{a_n}\_{n=1}^\infty$ if and only if there exists a subsequence
$\seq{a_{n_j}}_{j=1}^\infty$ that converges to $s$.
" %}

### Bolzano-Weierstrass theorem for sequences

{% include tooltip.html text="Theorem 3.10.3" content="
Every bounded sequence of real numbers has a convergent subsequence and
therefore has a cluster point.
" %}

### Upper and lower limits of sequences

{% include tooltip.html text="Definition 3.11.1<br/>Notation 3.11.1" content="
Assume that a sequence $\seq{a_n}$ has a cluster point and denote $S$ the set of
cluster points, then:

- If $\seq{a_n}$ is bounded above, we define the **upper limit** of $\seq{a_n}$
as the $\sup S$,
- If $\seq{a_n}$ is bounded below, we define the **lower limit** of $\seq{a_n}$
as the $\inf S$

The upper limit is referred to as the **limit superior** of $\seq{a_n}$ and is
denoted $\Limsup a_n$ or $\limsup a_n$.

The lower limit is referred to as the **limit inferior** of $\seq{a_n}$ and is
denoted $\Liminf a_n$ or $\liminf a_n$.
" %}

#### Corollaries, propositions and properties:

{% include tooltip.html text="Proposition 3.11.1<br/>Proposition 3.11.2" content="
We also have that for $\seq{a_n}$ with cluster points:

- If it is bounded above then

  $$
  \forall\epsilon>0,\exists N\in\N,\forall n\in\N,n\geq N,
  a_n<\Limsup a_n+\epsilon
  $$

  And there exists infinitely many $n$ such that $a_n>\Limsup a_n-\epsilon$.

- If it is bounded below then

  $$
  \forall\epsilon>0,\exists N\in\N,\forall n\in\N,n\geq N,
  a_n>\Liminf a_n-\epsilon
  $$

  And there exists infinitely many $n$ such that $a_n<\Liminf a_n+\epsilon$.

Additionally we could show that a point $s$ is an upper or lower limit by
supposing the converse of either statement and showing there exist infinitely
many elements $a_n$ above or below $s$.
" %}

{% include tooltip.html text="Proposition 3.11.3" content="
If the $\Limsup$ and $\Liminf$ of a sequence $\seq{a_n}$ exist, then they are
equal to one another if and only if they also equal the limit of $a_n$ which
exists:

$$
\Limsup a_n=\Liminf a_n=\lim_{n\to\infty}a_n
$$
" %}

If the sequence $\seq{a_n}$ is:
<ul>
{% include tooltip.html text="Definition 3.11.2" content="
<li>Not bounded above we set $\Limsup a_n=+\infty$,</li>
<li>Not bounded below we set $\Liminf a_n=-\infty$,</li>
" %}
{% include tooltip.html text="Definition 3.11.3" content="
<li>Bounded above, does not have any lower bound and does not have any cluster
points, we set $\Limsup a_n=-\infty$,</li>
<li>Bounded below, does not have an upper bound and does not have any cluster
points, we set $\Liminf a_n=+\infty$.</li>
" %}
</ul>

{% include tooltip.html text="Proposition 3.11.4" content="
We also have that:

- $\Limsup a_n=-\infty \Leftrightarrow \lim_{n\to\infty}a_n=-\infty$
- $\Liminf a_n=+\infty \Leftrightarrow \lim_{n\to\infty}a_n=+\infty$
" %}

{% include tooltip.html text="Proposition 3.11.5" content="
Lastly, assume that $\forall n\in\N,a_n\geq 0,b_n\geq 0$ and
$\lim_{n\to\infty}b_n>0$, then:

$$
\Limsup(a_n b_n)
= \begin{cases}
(\Limsup a_n)(\lim_{n\to\infty}b_n) & \Limsup a_n\neq+\infty \\
+\infty & \Limsup a_n=+\infty
\end{cases}
$$
" %}


---

<!-- Ch 4 .................................................................. -->
# Limits of real value functions

<!-- Ch 4.1 ................................................................ -->
## Finite limits

{% include tooltip.html text="Definition 4.1.1" content="
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
" %}

{% include tooltip.html text="Def 4.1.2" content="
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
" %}

{% include tooltip.html text="Definition 4.1.3" content="
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
" %}

Note that for a limit to exist it must exist from both the left and from the right:

$$
\lim_{x\to x_0}f(x)=L \Leftrightarrow
\left(\lim_{x\to x_0+}f(x)=L\right)\wedge \left(\lim_{x\to x_0-}f(x)=L\right)
$$

### Sequential characterization of limits

{% include tooltip.html text="Theorem 4.1.1" content="
Given a function $f:D\to \R$ and a point $x_0$, eventually not in $D$, then
$\lim_{x\to x_0}f(x)=L$ if and only if any sequence $\seq{x_n}$ where $\forall
n\in\N$, $x_n\in D$ and where $\lim_{n\to\infty}x_n=x_0$ we have
$\lim_{n\to\infty}f(x_n)=L$.
" %}

{% include tooltip.html text="Theorem 4.1.2" content="
Assume that $f:[a,b]\to\R$ is an increasing or decreasing function. Then:

<center>
$\displaystyle\forall c\in(a,b),\lim_{x\to c-}f(x)$
and
$\displaystyle\lim_{x\to c+}f(x)$
exist.
</center>

In addition, if $f$ is increasing we have:

$$
\lim_{x\to c-}f(x)\leq f(c)\leq\lim_{x\to c+}f(x)
$$

If $f$ is decreasing, we have:

$$
\lim_{x\to c-}f(x)\geq f(c)\geq\lim_{x\to c+}f(x)
$$

(The limits $\lim_{x\to a+}f(x)$ and $\lim_{x\to b-}f(x)$ exist as well.)
" %}

Note that assumptions about continuity are not required here.

### Cauchy condition for the limit of a function

{% include tooltip.html text="Theorem 4.1.3" content="
<ol>
<li>
Assume that $f(x)$ is defined for $x\in(c,c+\delta_0)$, $\forall\delta_0\in\R$.
If:

$$
  \forall\epsilon>0,
  \exists\delta>0,
  \delta\leq\delta_0,
  \forall u,v\in\R,
  (c<u<c+\delta)\wedge(c<v<c+\delta) \Rightarrow
    |f(u)-f(v)|<\delta
$$

Then the limit $\lim_{x\to c+}f(x)$ exists.
</li>

<li>
Assume that $f(x)$ is defined for $x\in(c-\delta_0,c)$, $\forall\delta_0\in\R$.
If:

$$
  \forall\epsilon>0,
  \exists\delta>0,
  \delta\leq\delta_0,
  \forall u,v\in\R,
  (c-\delta<u<c)\wedge(c-\delta<v<c) \Rightarrow
  |f(u)-f(v)|<\epsilon
$$

Then the limit $\lim_{x\to c-}f(x)$ exists.
</li>
</ol>

Note that although this tells us that limit exists, it doesn't tell us anything
about what said limits could be.
" %}

<!-- Ch 4.2 ................................................................ -->
## Infinite limits

{% include tooltip.html text="Definition 4.2.1" content="
Let a function $f:D\to R\subset\R$, we have for limits going to positive
infinity:

$$
\lim_{x\to x_0} = +\infty\Leftrightarrow
\forall M>0,\exists\delta>0,\forall x\in D,x\neq x_0,|x-x_0|<\delta\Rightarrow f(x)>M
$$

And for limits going to negative infinity:

$$
\lim_{x\to x_0} = -\infty\Leftrightarrow
\forall M>0,\exists\delta>0,\forall x\in D,x\neq x_0,|x-x_0|<\delta\Rightarrow f(x)<-M
$$

Similar to finite limits, we can have infinite limits approach $x_0$ from either
the right or from the left.
" %}

### Properties of infinite limits

{% include tooltip.html text="Proposition 4.2.1" content="
Assume that $\forall x\in(a,b)$, $f(x)>0$, let $x_0\in(a,b)$ such that
$\lim_{x\to x_0}f(x)=0.$ Then:

$$
\lim_{x\to x_0}\frac{1}{f(x)}=+\infty
$$

Assume that $\forall x\in(a,b)$, $f(x)<0$, let $x_0\in(a,b)$ such that
$\lim_{x\to x_0}f(x)=0.$ Then:

$$
\lim_{x\to x_0}\frac{1}{f(x)}=-\infty
$$
" %}

{% include tooltip.html text="Proposition 4.2.2" content="
Assume that $\lim_{x\to x_0}f(x)=L>0$ (finite) or $\lim_{x\to x_0}f(x)=+\infty$
and $\lim_{x\to x_0}g(x)=+\infty$. Then:

$$
\lim_{x\to x_0}f(x)g(x)=+\infty
$$
" %}

{% include tooltip.html text="Proposition 4.2.3" content="
Assume that $\lim_{x\to x_0}f(x)=L$ (finite) or $\lim_{x\to x_0}f(x)=+\infty$
and $\lim_{x\to x_0}g(x)=+\infty$. Then:

$$
\lim_{x\to x_0}(f(x)+g(x))=+\infty
$$
" %}

Note that in the sum property that the sign of $L$ is irrelevant, but in the
product property when $L$ is finite the limit of the product is only $+\infty$
if $L>0$. Also observe that these signages act as parameters to the limit of the
product, that is:

1. If $L>0$ and $\lim_{x\to x_0}g(x)=+\infty$, then
$\lim_{x\to x_0}f(x)g(x)=+\infty$.
1. If $L<0$ and $\lim_{x\to x_0}g(x)=+\infty$, then
$\lim_{x\to x_0}f(x)g(x)=-\infty$.
1. If $L>0$ and $\lim_{x\to x_0}g(x)=-\infty$, then
$\lim_{x\to x_0}f(x)g(x)=-\infty$.
1. If $L<0$ and $\lim_{x\to x_0}g(x)=-\infty$, then
$\lim_{x\to x_0}f(x)g(x)=+\infty$.

<!-- Ch 4.3 ................................................................ -->
## Limits at infinity

{% include tooltip.html text="Definition 4.3.1" content="
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
" %}

{% include tooltip.html text="Definition 4.3.2" content="
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
" %}

Similar to the monotone convergence principle of sequences, we have:

{% include tooltip.html text="Theorem 4.3.1" content="
Assume that $f$ is monotone increasing on $[a,+\infty$).

If $\exists M>0$, $\forall x\geq a$, $f(x)<M$ then $\lim_{x\to+\infty}f(x)$
exists and is finite.

If such $M$ does not exist then $\lim_{x\to+\infty}f(x)=+\infty$.
" %}

### Cauchy condition for limits at infinity

{% include tooltip.html text="Theorem 4.3.2" content="
Let a function $f:[a,+\infty)\to\R$ then $\lim_{x\to+\infty}f(x)$ exists and is
finite if and only if:

$$
  \forall\epsilon>0,
  \exists X>0,
  \forall b,c\in[a,+\infty),
  c>b\geq X \Rightarrow |f(c)-f(b)|<\epsilon
$$
" %}


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

---

<!-- Ch 6 .................................................................. -->
# Derivatives

<!-- Ch 6.1 ................................................................ -->
{% include tooltip.html text="Proposition 6.1.1" content="
Let a function $f(x)$ defined over an open domain $D$. Let $x_0\in D$. The
**derivative** of $f$ at $x_0$, and denoted $f'(x_0)$, is defined by

$$
f'(x_0)=\lim_{h\to 0}\frac{f(x_)+h)-f(x_0)}{h}
$$

Providing that the limit exists.
" %}

{% include tooltip.html text="Definition 6.1.2" content="
If the derivative of $f$ at a point $x_0$ exists then $f$ is said to be
differentiable at $x_0$.
" %}

{% include tooltip.html text="Proposition 6.1.1" content="
Assume that $f$ is differentiable at $x_0$. Then $f$ is continuous at $x_0$.
" %}
Note that a function being continuous does not mean it is differentiable.
The classic example is the absolute value function.

{% include tooltip.html text="Definition 6.1.2" content="
Let a function $f(x):D\to R\subset\R$. The associated **derivative function**
$f'(x):D'\to R'\subset\R$ is defined as

$$
\forall x\in D',f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}
$$

Where $D'\subseteq D$ is the set of points where the limit exists.
" %}

<!-- Ch 6.1 ................................................................ -->
## Leibniz notation

In the definition of the derivative where the variable $h$ is said to be
approaching 0, $h$ represents variation around $x$.
In the same way $f(x+h)-f(x)$ represents variation of $f$ when the variation on
$x$ is applied.

A commonly used symbol for denoting variation is $\Delta$ (Delta).

{% include tooltip.html text="Notation 6.1" content="
We re-notate the derivative as:

$$
f'(x)
= \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}
= \lim_{\Delta x\to 0}\frac{\Delta f}{\Delta x}
= \frac{df(x)}{dx}
$$

And when we want to designate the derivative at a specific point $x_0$, we can
use the following notation:

$$
\left.\frac{df(x)}{dx}\right|_{x=x_0}
$$
" %}

<!-- Ch 6.3 ................................................................ -->
## Properties of derivatives

Assume functions $f(x)$ and $g(x)$ differentiable at $x$, and $c$ is a constant
value in $\R$. We have the following properties of derivatives of functions:

<ul>
{% include tooltip.html text="Proposition 6.3.3" content="
<li>
$(cf)'(x)=cf'(x)$
<div class='float-right'>(Multiplication by a constant)</div>
</li>
" %}

{% include tooltip.html text="Proposition 6.3.1" content="
<li>
$f(x)=c$, then $f'(x)=0$.
<div class='float-right'>(Constant rule)</div>
</li>
" %}

{% include tooltip.html text="Proposition 6.3.2" content="
<li>
$\forall x\in\R$ (eventually $\forall x\in\R/\{0\}$), then
$\forall n\in\Z,(x^n)'=nx^{n-1}$
<div class='float-right'>(Power rule)</div>
</li>
" %}

{% include tooltip.html text="" content="
<li>
$g(x)\ne 0$, then
${\left(\frac{f}{g}\right)}'(x)=\frac{f'(g(x)-f(x)g'(x)}{g^2(x)}$
<div class='float-right'>(Quotient rule)</div>
</li>
" %}
</ul>


<!-- Ch 6.5 ................................................................ -->
## Higher order derivatives

{% include tooltip.html text="Definition 6.5.1" content="
The second-order derivative of $f$ is defined and denoted by

$$
f''(x)=(f'(x))' \Leftrightarrow
\frac{d^2f(x)}{dx^2}=\frac{d}{dx}\left(\frac{df(x)}{dx}\right)
$$
" %}

<!-- Ch 6.6 ................................................................ -->
## Differentials of functions

$f(x+\Delta x)-f(x)$ represents the increment of $f$ when we increment $x$ by
$\Delta x$ (just as $\Delta x$ represents the increment of $x$).

{% include tooltip.html text="Definition 6.6.1" content="
This quantity is called the **differential** of $f$
at the basepoint $x$ and with increment $\Delta x$.
It is denoted and defined by:

$$
df(x,\Delta x)=f'(x)\Delta x
$$

If $|\Delta x|$ is small then we have:

$$
f(x+\Delta x)-f(x)\approx df(x,\Delta x)
$$
" %}

With this we can restate the theorem on linear approximations with this change
of notation.

{% include tooltip.html text="Theorem 6.6.1" content="
Assume $f$ is differentiable at $x$. Then

$$
f(x+\Delta x)-f(x)=df(x,\Delta x)+\Delta xQ_x(\Delta x)
$$

Where $\lim_{\Delta x\to 0}Q_x(\Delta x)=0$.
" %}





