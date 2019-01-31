---
title: Semigroups and Combinatorics
anchor: True
math: True
---
<div id="mathjax-preamble" style="display:none;">
$$
\def\Zp{\Z_{\ge 0}}
\newcommand{\seq}[1]{\left\{#1\right\}}
\newcommand{\abs}[1]{\lvert #1\rvert}
\newcommand{\norm}[1]{\lVert #1\rVert}
$$
</div>

* toc
{:toc}

---

# Numerical Semigroups

{% include tooltip.html text="Definition" content="
$S\subset\Zp$ is a **numerical semigroup** if

1. $S$ is closed under addition ($a,b\in S\Rightarrow a+b\in S$)
1. $0\in S$
1. $\abs{\Z_{\ge 0}\setminus S}<\infty$
"%}

Typically, express

$$
\begin{aligned}
S &= \langle n_1,\ldots,n_k\rangle$ \\
&= \{a_1 n_1+\cdots+a_k n_k:a_1,\ldots,a_k\in\Z_{\ge 0}\}
\end{aligned}
$$

For example $S=\langle 4,6\rangle$ is not a semigroup (does not contain odds)
while $S'=\langle 2,3\rangle$. A function which maps from $S$ to $S'$ by
dividing any element by two is an isomorphism.

{% include tooltip.html text="Proposition" content="
$S=\langle n_1,\ldots,n_k\rangle$ is a numerical semigroup if and only if
$\gcd(n_1,\ldots,n_k)=1$.
"%}

*Proof:* If $\gcd(n_1,\ldots,n_k)>1$ then $\abs{\Zp\setminus S}=\infty$.

If $\gcd(n_1,\ldots,n_k)=1$ then $1=b_1 n_1+\cdots+b_k n_k$ for some
$b_1,\dots,b_k\in\Z$.

Let $M=\max\seq{\abs{b_j}}\cdot n_1$

$N=M n_1+\cdot+M n_k$

$N,N+1,\ldots,N+(n_1-1)=?n_1+\cdots+?n_k$

If $\gcd(n_1,\ldots,n_k)=1$ then $\max(\Zp\setminus S)\le n_k^2$

For example in $S=\langle 6,17,,27,34,41\rangle$, 34 is not needed ($17\cdot 2$)
nor is 41 ($6\cdot 6+17$), and $S=\langle 6,17,27\rangle$.

{% include tooltip.html text="Proposition" content="
Every numerical semigroup has a **unique** minimal generating set with respect
to containment.
"%}

{% include tooltip.html text="Definition" content="
Given a numerical semigroup $S$

- **embedding dimension** is $e(S)=\text{# minimum genrators}$
- **multiplicity** is $m(S)=\min(S\setminus\seq{0})$
"%}

{% include tooltip.html text="Proposition" content="
$e(S)\le m(S)$
"%}

{% include proof.html content="
Let $m=m(S)$. Each minimal generator is distinct modulo $m$.

To prove this suppose $n,n'\in S$ and $n\equiv n'\pmod m$. This says $n'-n=bm$
for some integer $b$ (at least 1) so $n'=n+bm$. Therefore $n'$ cannot be a
minimal generator.
"%}

For example with $S=\langle 5,6,7,8,9\rangle$, $e(S)=m(S)=5$
(max embedding dimension?)

We'll call elements of $\Zp\setminus S$ **gaps**.

For example

$$
S_1=\langle 3,5,7\rangle
    =\seq{0,3,5,6,7,\ldots}
$$

With gaps 1, 2 and 4.

$$
S_2=\langle 4,6,11\rangle
    =\seq{0,4,6,8,10,11,12,14,15,16,17,\ldots}
$$

With gaps 1, 2, 3, 5, 7, 9 and 13.
(With 4 in a row we know we're done?)

{% include tooltip.html text="Definition" content="
- $g(S)=\text{number of gaps}$ is the **genus**
- $F(S)=\max(\Zp\setminus S)$ is the **Frobenius number**

And $m(S)-1\le g(S)\le F(s)$.
"%}

{% include tooltip.html text="Definition" content="
Suppose $S$ is a numerical semigroup and $n\in S$.

- $Ap(S;n)=\seq{m\in S:m-n\notin S}$ is the **Apéry set** 

Or without an element, $Ap(S)=Ap(S;m(S))$.
"%}

From the previous examples, $Ap(S_1)=Ap(S_1;3)=\seq{0,5,7}$
and $Ap(S_2;4)=\seq{0,6,11,17}$.

{% include tooltip.html text="Theorem" content="
$\abs{Ap(S;n)}=n$ and elements are distinct modulo $n$.
"%}

$$
S_2=\seq{0,4,8,\ldots}
\cup\seq{11,15,\ldots}
\cup\seq{6,10,\ldots}
\cup\seq{17,21,\ldots} \\
$$

We might reorder the Apéry set in order of the equivalence value,
$Ap(S_2;4)=\seq{0,17,6,7}$.

{% include proof.html content="
Similar to proof $e(S)\le m(S)$.
"%}

And the Frobenius in terms of the elemennts of the Apéry set could be
found via $F(S)=max(Ap(S))-m(S)$.

{% include tooltip.html text="Definition" content="
Let $S=\langle n_1,\ldots,n_k\rangle$ and $n\in S$.
A **factorization** of $n$ is an expression of form

$$
n=a_1 n_1+\cdots+a_k n_k
\Rightarrow
(a_1,\ldots,a_k)
$$

Expressed as a k-tuple. A set of factorizations is

$$
Z_S(n)=\seq{(a_1,\ldots,a_k)\in\Zp^k:a_1 n_1+\cdots+a_k n_k=n}
$$
"%}

For example

$$
Z_{S_1}(15)=\seq{(5,0,0),(0,3,0),(1,1,1)} \\
Z_{S_2}(40)=\seq{(10,0,0),(7,2,0),(4,4,0),(1,6,0),(3,1,2),(0,3,2)}
$$ 

