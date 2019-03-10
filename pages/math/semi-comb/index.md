---
title: Semigroups and Combinatorics
anchor: True
math: True
axes: true
spin: true
rainbow: false
---
<script src='{{ site.url }}/assets/js/three/build/three.js'></script>
<script src='{{ site.url }}/assets/js/three/modules/QuickHull.js'></script>
<script src='{{ site.url }}/assets/js/three/modules/geometries/ConvexGeometry.js'></script>
<script src='{{ site.url }}/assets/js/three/modules/controls/OrbitControls.js'></script>
<script src='polytopes/polytope.js'></script>

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
\DeclareMathOperator{\calPF}{\text{PF}}
\DeclareMathOperator{\sgt}{\mathsf{t}}
\DeclareMathOperator{\conv}{\text{conv}}
\DeclareMathOperator{\span}{\text{span}}
\DeclareMathOperator{\calP}{\mathcal{P}}
$$
</div>

* toc
{:toc}

---

<div style="width:100%;">
<p style="width:100%;text-align:center;font-size:16pt;">
  <a href="./polytope.html">
    Polytope Renderer!
  </a>
</p>
</div>

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
if $m+n\in S$ for every $n$ in $S$, and $\calPF(S)$ is the set of such numbers.

$$
\calPF(S)=\set{m\notin S:m+n\in S,n\in S}
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
1. $\calPF(S)=\set{\sgF(S),\frac{\sgF(S)}{2}}$
1. $S$ is maximal among numerical semigroups with same $\sgF(S)$

And if any hold then $S$ is called pseudo-symmetric.

We say that $S$ is irreducible if it is symmetric or pseudo-symmetric.
"%}

---

# Polytopes

{% include theorem.html text="Definition: Convex polytopes" content="
A d-polytope $\calP$ is a convex hull in $\R^d$ space which can be described in
both the following ways:

1. As the convex hull of finitely many points in $\R^d$ space.
1. As the bounded intersection of finite many half-spaces in $\R^d$ space.

And we call these the *vertex* and *hyperplane* descriptions of $\calP$.
"%}

For example, a triangle formed by the points $(0,0)$, $(0,1)$ and $(1,1)$ is a
polytope in $\R^2$ space.

<!--One way we can describe polytopes is as a collection of vertices.-->

{% include theorem.html text="Definition: Vertex description" content="
The vertex description of a polytope is a finite set of points defining its
convex hull, and is notated

$$
  \calP=\conv\{\vec v_1,\ldots,\vec v_d:\vec v_j\in\R^d\}
$$
"%}

{% include theorem.html text="Definition: Hyperplane description" content="
The hyperplane description of a polytope is as the bounded intersections of
finitely many half-spaces and hyperplanes.
"%}

A hyperplane is a subspace whose dimension is one less than the $\R^d$ ambient
space (the space in which it lives). In $\R^3$ three-dimensional space, a
hyperplane is a two-dimensional $\R^2$ plane.

![half spaces](halfspaces.png){:width='300px'}

Half-spaces correspond to the two $\R^d$ volumes which result from a hyperplane
dividing the ambient space. In $\R^2$ a hyperplane is a line and the spaces on
either side are half-spaces.
Then by having a finite many half-spaces interacting we can construct a convex
region, thus constructing a polytope.

![hyperplane description](hyperplane-description.png){:width='300px'}

### Simplex

With vertex description

$$
\calP=S_d=\conv\{(0,0),\vec e_1,\ldots,\vec e_d\}\subseteq\R^d
$$

{% include_relative includes/simplex.html %}

### Cube

With vertex description

$$
\calP
= C_d
= \conv\{(a_1,\ldots,a_d):a_1\in\{-1,1\}\}\subseteq\R^d
= \conv\{ {\{-1,1\}}^d\}
$$

Where ${\{-1,1\}}^d$ is the $\R^d$ cartesian product

{% include_relative includes/cube.html %}

### Octohedron

(Or cross-polytope)

With vertex description

$$
\calP=O_d=\conv\{\pm\vec e_1,\ldots,\pm\vec e_d\}\subseteq\R^d
$$

{% include_relative includes/octohedron.html %}

