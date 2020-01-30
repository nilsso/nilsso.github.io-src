---
title: Discrete Dynamical Systems & Chaos
anchor: True
math: True
---
<div id="mathjax-preamble" style="display:none;">
$$
$$
</div>
* toc
{:toc}
---

# Dynamical systems

A *dynamical system* consists of a set of possible states, together with a rule
that determines the present state in terms of past states.
<!-- -->
If the present state can be determined uniquely---without randomness---the rule
is *deterministic*.
<!-- -->
If the present state relies on a element of randomness we do not have a
dynamical system and instead a *random*, or *stochastic*, *process*.
<!-- -->
Two types of dynamical systems will be emphasized: *discrete-time* and
*continuous-time*, the rule of the latter involving sets of differential
equations. Of course if time in between discrete-time measurements
goes to zero, $\Delta t\to 0$, you have a continuous-time system.

# Maps

{% include boxed.html text="Definition: Maps" content="
A function with the same domain and range spaces is called a *map*.
Fix $x$ a point and $f$ a map. The sequence $\{x,f(x),f^2(x)\}$ is called the
*orbit* of $x$, and $x$ is called the *initial value* of the orbit.
A point $\rho$ is a *fixed point* of the map $f$ if $f(\rho)=\rho$.
"%}

Kinds of fixed points, $f(p)=p$, based on that pertubation theory.
On $n^{th}$ iteration, if $x_n=p+\varepsilon_n$ the distance from the fixed
point still small:
$$
\begin{aligned}
|\varepsilon_n|\ll 1
&\Rightarrow\varepsilon_{n+1}\approx f'(p)\varepsilon_n \\
&\Rightarrow\varepsilon_{n+k}\approx f'(p)\int^k\varepsilon_n
\end{aligned}
$$

{% include boxed.html text="Definition: $\varepsilon$-neighborhood" content="
$N_\varepsilon<P1=\{x\in\mathbb{R}:|x-p|<\varepsilon\}$.
"%}

{% include boxed.html text="Definition: Attractor/Repeller" content="
If all points sufficiently close to fixed point $p$ are attracted to $p$,
then $p$ is called a sink or an attracting fixed point.

If all points sufficiently close to fixed point $p$ are repelled from $p$
(except for $p$ itself), then $p$ is called a source or an repelling fixed
point.
"%}

Taylorizations

Let $f$ be a smooth map, $p$ a fixed point.
Then if the derivative at $p$ is less than one, $|f'(p)|<1$,
then $p$ is an sink, or if larger than 1, $|f'(p)|>1$, then $p$ is a source.

Theorem does not require any particularly sized epsilon.
Can be very small, but still be an attractor.

As an example with $a=2$, $g(x)=2x(1-x)$:
Logistic map, $g_a(x)=ax(1-x)$.
To identify the attracting/repelling fixed points.

- Fixed points at $x_1=0$ and $x_2=1/2$.
- Stability $g'(x)=2-4x=2(1-2x)$.
- $x_1$:$|g'(x_1)|=|g'(0)|=2>1\Rightarrow$ a repeller.
- $x_2$:$|g'(x_2)|=|g'(1/2)|=0<1\Rightarrow$ an attractor
  (even "super attracting").

{% include boxed.html text="Definition: Attractor/Repeller" content="
The basic of attraction of an attracting fixed point $p$,
denoted $B(p)$, is set of points such that if
$x\in B(p)\Rightarrow\lim_{k\to\infty}f^k(x)=p$.
"%}

Informally can talk about the basin of attraction of things that aren't points,
like infinity, or of unstable fixed points.

Back with that example:

- "$B(0)=\{0,1\}$"
- $B(1/2)=(0,1)$
- "$B(\infty)=(-\infty,0)\cup(1,\infty)$"

And those in quotes do not meet the formal definition, since there is either
not attraction or involves something other than a fixed point.

Prove that distance at next time step is smaller than distance at previous, i.e. inductive:
$\varepsilon_{n+1}<\varepsilon_n$
(Looking for $|f(x)-p|<k|x-p|:k<1$, bounding).

$$
\begin{aligned}
|2x(10x)-1/2| &= 2|x(1-x)-1/4|$ \\
&= 2(-x^2+x-1/4| \\
&= 2|x^2-x+(1/2)^2)| \\
&= 2|x-1/2|^2 \\
&= 2|x-1/2||x-1/2| \Rightarrow 2|x-1/2| = k
\end{aligned}
$$

If $A<1$, then $\f(x-p)|< |x-p|$.

$$
|x-1/2|<1/2 \Rightarrow 0<x<1
$$

But this technique isn't usually that easy as finding something to bound by can
be difficult.

As another example, $g(x)=\frac{3x-x^3}{2}$

- Fixed points at $x_{-1}=-1$, $x_0=0$ and $x_{+1}=1$.
- Check stability, $g'(x)=\frac{3(1-x^2)}{2}$
- $g'(x_{\pm 1})=0<1$: "super" attractive.
- $g'(x_0)>1$: repellent.

$I_1=(0,\sqrt 3)\subset B(1)$. Any other points that get to mapped to $I_1$?

$g(I_2)$

$\pm\sqrt 5$ periodic fixed points: $\sqrt 5$ mapped to $-\sqrt $ and $-\sqrt 5$ mapped to $-\sqrt 5$.

Infinite sequence of intervals of basins of attraction bounded by $|\sqrt 5|$.

