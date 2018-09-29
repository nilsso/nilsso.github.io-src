# Rings

## Theorems and Definitions

/* Theorem 3.4 */
### Theorem

If $a+b=a+c$ in a ring $R$, then $b=c$.

/* Theorem 3.5 */
### Theorem

For any elements $a$ and $b$ of a ring $R$,

1. $a\cdot 0_R=0_R=0_R\cdot a$. In particular, $0_R\cdot 0_R=0_R$.
2. $a(-b)=-ab$ and $(-a)b=-ab$.
3. $-(-a)=a$.
4. $-(a+b)=(-a)+(-b)$.
5. $-(a-b)=-a+b$.
6. $(-a)(-b)=ab$.

If $R$ has an identity, then

7. $(-1_R)a=-a$.

/* Theorem 3.6 */
### Theorem

Let $S$ be a nonempty subset of a ring $R$ such that

1. $S$ is closed under subtraction (if $a,b\in S$, then $a-b\inS$);
2. $S$ is closed under multiplication (if $a,b\in S$, then $ab\in S$).

Then $S$ is a subring of $R$.

### Units

*Definition.* An element $a$ in a ring $R$ with identity is called a *unit* if
there exists $u\in R$ such that $au=1_R=ua$. In this case the element $u$ is
called the (*multiplicative*) *inverse* of $a$ and is denoted $a^{-1}$.

### Zero divisors

*Definition.* An element $a$ in a ring $R$ is a *zero divisor* provided that

1. $a\neq 0_R$.
2. There exists a nonzero element $c$ in $R$ such that $ac=0_R$ or $ca=0_R$

/* Theorem 3.7 */
### Theorem

Cancellation is valid in any integral domain $R$: If $a\neq 0_R$ and $ab=ac$ in
$R$, then $b=c$.

/* Theorem 3.8 */
### Theorem

Every field $F$ is an integral domain.

/* Theorem 3.9 */
### Theorem

Every finite integral domain $R$ is a field.
