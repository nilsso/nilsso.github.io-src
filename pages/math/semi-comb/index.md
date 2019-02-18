---
title: Semigroups and Combinatorics
anchor: True
math: True
---
<div id="mathjax-preamble" style="display:none;">
$$
\newcommand{\set}[1]{ \{#1\} }
\newcommand{\abs}[1]{\lvert #1\rvert}
\newcommand{\norm}[1]{\lVert #1\rVert}
\newcommand{\genset}[1]{ {\langle #1\rangle} }
\DeclareMathOperator{\sge}{\mathsf e}
\DeclareMathOperator{\sgm}{\mathsf m}
\DeclareMathOperator{\sgG}{\mathsf G}
\DeclareMathOperator{\sgg}{\mathsf g}
\DeclareMathOperator{\sgF}{\mathsf F}
\DeclareMathOperator{\sgAp}{\text{Ap}}
\DeclareMathOperator{\sgPF}{\text{PF}}
\DeclareMathOperator{\sgt}{\mathsf t}
$$
</div>

* toc
{:toc}

---

# Numerical Semigroups

{% include theorem.html text="Definition: Numerical Semigroup" content="
A set $S\subset\ZP$ is a numerical semigroup if

1. It is closed under addition ($a,b\in S\Rightarrow a+b\in S$)
1. Has a zero element
1. Is finite in length
"%}

Typically a semigroup is expressed

$$
S
= \langle n_1,\ldots,n_k\rangle
= \{a_1 n_1+\cdots+a_k n_k:a_1,\ldots,a_k\in\Z_{\ge 0}\}
$$

This reads as $S$ being the set of all numbers that are positive linear
combinations of the $n_j$ generator elements and where all $a_j$ coefficients
are positive integers. See [factorizations](#factorizations) to see how the
construction of these elements as linear combinations (as factorizations) can be
denoted.

<!--
   -As an example, $S=\langle 4,6\rangle$ is not a semigroup (does not contain odds)
   -while $S'=\langle 2,3\rangle$.
   -A function which maps from $S$ to $S'$ by dividing any element by two is an
   -isomorphism.
   -->

{% include theorem.html text="Proposition" content="
$S=\langle n_1,\ldots,n_k\rangle$ is a numerical semigroup if and only if
$\gcd(n_1,\ldots,n_k)=1$.
"%}

<!--
   -*Proof:* If $\gcd(n_1,\ldots,n_k)>1$ then $\abs{\ZP\setminus S}=\infty$.
   -
   -If $\gcd(n_1,\ldots,n_k)=1$ then $1=b_1 n_1+\cdots+b_k n_k$ for some
   -$b_1,\dots,b_k\in\Z$.
   -
   -Let $M=\max\set{\abs{b_j}}\cdot n_1$
   -
   -$N=M n_1+\cdot+M n_k$
   -
   -$N,N+1,\ldots,N+(n_1-1)=?n_1+\cdots+?n_k$
   -
   -If $\gcd(n_1,\ldots,n_k)=1$ then $\max(\ZP\setminus S)\le n_k^2$
   -
   -For example in $S=\langle 6,17,,27,34,41\rangle$, 34 is not needed ($17\cdot 2$)
   -nor is 41 ($6\cdot 6+17$), and $S=\langle 6,17,27\rangle$.
   -->

{% include theorem.html text="Proposition" content="
Every numerical semigroup has a unique minimal generating set with respect
to containment.
"%}

That is a generator element $n$ that can be expressed as $n=a+b$ for some $a$
and $b$ in that same generating set can be eliminated from the generating set.

For example, $\genset{3,4,12}$ containing $12=3\cdot 2$ can be simplified to
$\genset{3,4}$.

{% include theorem.html text="Definition: Embedding dimension, multiplicity" content="
Given a numerical semigroup $S$ its *embedding dimension* denoted $\sge(S)$ is
the number of minimal generators and its *multiplicity* denoted $\sgm(S)$ is
the smallest non-zero element.

And $e(S)\le m(S)$.
"%}

As in the previous example with the numerical semigroup $S=\genset{3,4,12}$,
$S$ has multiplicity $\sgm(S)=3$ and embedding dimension $\sge(S)=2$ (because
there are two elements in the minimal generating set $\genset{3,4}$).

<!--
   -{% include proof.html content="
   -Let $m=m(S)$. Each minimal generator is distinct modulo $m$.
   -
   -To prove this suppose $n,n'\in S$ and $n\equiv n'\pmod m$. This says $n'-n=bm$
   -for some integer $b$ (at least 1) so $n'=n+bm$. Therefore $n'$ cannot be a
   -minimal generator.
   -"%}
   -->

<!--
   -For example with $S=\langle 5,6,7,8,9\rangle$, $e(S)=m(S)=5$
   -(max embedding dimension?)
   -->

{% include theorem.html text="Definition: Gaps" content="
Given a numerical semigroup $S$, non-elements (elements in $S$ complement,
$\ZP\setminus S$) are called gaps, $\sgG(S)$ is the set of such gaps,
and $\sgg(S)$ the *genus* is equal to the number of gaps (the cardinality of
$\sgG(S)$).
"%}

For example:

- $S_1=\genset{3,5,7}=\set{0,3,\underline{5,6,7},\ldots}$ with $\sgG(S)=\set{1,2,4}$.
- $S_2=\genset{4,6,11}=\set{0,4,6,8,10,11,12,\underline{14,15,16,17\},\ldots}$ with $\sgG(S)=\set{1,2,3,5,7,9,13}$.

The simplest way to know when there will be no more gap in the set is when
$\sgm(S)$ consecutive elements appear. These were underlined in the examples
above.

{% include theorem.html text="Definition: Frobenius number" content="
Given a numerical semigroup $S$, its Frobenius $\sgF(S)$ is the largest gap.

$$
\sgF(S)=\ZP\setminus S=\max(\sgG(S))
$$

And $\sgm(S)-1\le \sgg(S)\le \sgF(s)$.
"%}

From the previous examples, $\sgF(S_1)=4$ and $\sgF(S_2)=13$.

{% include theorem.html text="Definition: Apéry set" content="
Fix $S$ a numerical semigroup.

For some non-zero element $n$ of $S$, $\sgAp(S;n)$ is the set containing $n$
elements of $S$ where for each element $m$ we have $m-n\notin S$. Such a set
is called an Apéry set:

$$
\sgAp(S;n)=\set{m\in S:m-n\notin S}
$$

And without $n$ specified $\sgAp(S)=\sgAp(S;m(S))$.
"%}

The simplest method of generating an Apéry set $\sgAp(S;n)$ is to find the
first elements congruent to $0,\ldots,n$ modulo $n$. The first element in this
way will always be zero.

From the previous examples:

- $\sgAp(S_1)=\sgAp(S_1;3)=\set{0,7,5}$ where $7\equiv 1\bmod 3$, and $5\equiv 2\bmod 3$
- $\sgAp(S_2;5)=\set{0,6,12,8,4}$ where $6 \equiv 1\bmod 5)$, $12\equiv 2\bmod 5$, $8\equiv 3\bmod 5$, and $4\equiv 4\bmod 5$

<!--
   -{% include tooltip.html text="Theorem" content="
   -$\abs{Ap(S;n)}=n$ and elements are distinct modulo $n$.
   -"%}
   -
   -$$
   -S_2=\set{0,4,8,\ldots}
   -\cup\set{11,15,\ldots}
   -\cup\set{6,10,\ldots}
   -\cup\set{17,21,\ldots} \\
   -$$
   -
   -We might reorder the Apéry set in order of the equivalence value,
   -$Ap(S_2;4)=\set{0,17,6,7}$.
   -->

{% include theorem.html text="Proposition" content="
$$\sgF(S)=\max(\sgAp(S))-\sgm(S)$$
"%}

Potentially the fastest method of finding the Frobenius number of a numerical
semigroup would be to generate its Apéry set and use this proposition. For
example:

Given $S=\genset{7,8,12}$, $\sgAp(S)=\sgAp(S;7)=\set{0, 8, 16, 24, 32, 12, 20}$,
$\sgF(S)=\max(\sgAp(S))-\sgm(S)=32-7=25$.

# Factorizations

{% include theorem.html text="Definition: Factorization" content="
Let $S=\langle n_1,\ldots,n_k\rangle$ and $n\in S$.
A factorization of $n$ is an expression of form

$$
n=a_1 n_1+\cdots+a_k n_k
\Rightarrow
(a_1,\ldots,a_k)
$$

Expressed as a k-tuple. A set of factorizations is

$$
Z_S(n)=\set{(a_1,\ldots,a_k)\in\ZP^k:a_1 n_1+\cdots+a_k n_k=n}
$$
"%}

For example:

- $Z_{\genset{3,5,7}}(15)=\set{(5,0,0),(0,3,0),(1,1,1)}$
- $Z_{\genset{4,6,11}}(40)=\set{(10,0,0),(7,2,0),(4,4,0),(1,6,0),(3,1,2),(0,3,2)}$

# Pseudo-Frobenius numbers, symmetry & irreducibility

{% include theorem.html text="Definition: Pseudo-frobenius numbers" content="
Given a numerical semigroup $S$, a gap $m$ is called a pseudo-frobenius number
if $m+n\in S$ for every $n$ in $S$, and $\sgPF(S)$ is the set of such numbers.

$$
\sgPF(S)=\set{m\notin S:m+n\in S,n\in S}
$$
"%}


{% include theorem.html text="Definition: Symmetry & irreducibility" content="
Fix a numerical semigroup $S$. For $\sgF(S)$ odd, the following are
equivalent:

1. $\sgg(S)=\frac{\sgF(S)+1}{2}$
1. $\sgt(S)=1$
1. $S$ is maximal among numerical semigroups with same $\sgF(S)$

And if any hold then $S$ is called symmetric.

Or for $\sgF(S)$ even, the following are equivalent:

1. $\sgg(S)=\frac{\sgF(S)+2}{2}$
1. $\sgPF(S)=\set{\sgF(S),\frac{\sgF(S)}{2}}$
1. $S$ is maximal among numerical semigroups with same $\sgF(S)$

And if any hold then $S$ is called pseudo-symmetric.

We say that $S$ is irreducible if it is symmetric or pseudo-symmetric.
"%}

