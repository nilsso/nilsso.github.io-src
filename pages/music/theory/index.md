---
layout: default
title: 'Music'
math: true
toc: true
---

<!-- VexFlow -->
<script type='text/javascript' src='https://unpkg.com/vexflow/releases/vexflow-min.js'></script>
<script type='text/javascript' src='front.js'></script>

{% katexmm %}

<div class='vexflow' data='random-3-2'></div>

# Fundamentals of atonal music

## Modular arithmetic

In this section we'll try to understand what is meant by the following statements or expressions:

- "$a$ is congruent/equivalent to $b$ modulo $n$",
- "$[a]_n$ is the congruence class of $a$ modulo $n$",

### Quotient-remainder theorem

Chances are you know about *Euclidean* division.
For example, $1\div 2$ is 1 divided by 2 (or 2 dividing 1) and represents symbolically the number of
times 2 goes into 1 plus some remainder.
What might not be as familiar are the two parts of Euclidean division taken separately:
the *quotient* and the *remainder*.

Let $a$ and $b$ both be integers.

- The quotient $q$ of $a\div b$ is the number of multiples of $b$ that go into $a$, and
- The remainder $r$ of $a\div b$ is what ever is left from subtracting $qb$ from $a$.

And can express $a$ as the sum:

$$
a = qb + r.
$$

> As an aside on notation, mathematicians are often lazy. The "let" statement above could be
> alternatively expressed "fix $a,b\in\Z$",
> where the symbol $\in$ means that $a$ and $b$ are variables with values taken from $\Z$, where
> $\Z=\{\ldots,‐2,‐1,0,1,2,\ldots\}$ is the set containing all integers. The $\{\ldots\}$ notation
> is called set-builder notation, and is a way to group things, in this case integers, without
> repetition. A set can be finite or infinite, for example: $\{0,1,2\}$ is a finite set containing
> only the integers 0, 1 and 2; $\{1,2,3,\ldots\}$ is an infinite set containing all of the positive
> integers, commonly denoted $\Z^+$ or $\N$.
> We can also define sets using rules, as for example the positive integers can also be expressed
> as $\{d\in\Z:d>0\}$, meaning the set of any integer $d$ as long as $d$ is greater than zero.
> Also to note is the *without repetition* part, meaning
> sets expressed as containing multiple of the same element (multiple, not multiples of!) can be
> reduced to include it only one, e.g.: $\{1,1\}=\{1\}$.

Here's a few example of quotient-remainder theorem when $b=12$ for a few different values of $a$:

- If $a=12$, then $12=(1)12+(0)$.
- If $a=1$, then $1=(0)12+(1)$.
- If $a=‐5$, then $‐5=(0)12+(‐5)=(‐1)12+(7)$.

### Modular congruence

With the last of the examples above you might notice that there were written two different ways to
express -5 as a sum of a multiple of 12 and a remainder. But these aren't the only ways, in-fact
there is an infinite number of ways to express -5 using quotient remainder theorem since for any
arbitrary quotient $q$ there is a unique remainder $r$ such that $a=qb+r$:

$$
\begin{alignedat}{3}
    ‐5 &= & (‐2)12 &+ &         (19)& \\
    ‐5 &= & (‐1)12 &+ &          (7)& \\
    ‐5 &= &  (0)12 &+ &  (‐5)& \\
    ‐5 &= &  (1)12 &+ & (‐17)& \\
    ‐5 &= &  (2)12 &+ & (‐29)&
\end{alignedat} \\
$$

What we're getting at is that these remainders are all equal to -5 when we add some multiple of 12,
and we call these remainders *congruent/equivalent* to one-another *modulo 12*.

Fix $a,b,n\in\Z$ where $a$ and $b$ are congruent modulo $n$.
We express this congruence:

$$
a\equiv b\bmod n.
$$

In the example above we saw that there is an infinite amount of remainders congruent to -5 modulo
12. Instead of listing them out (which might take a while, since there's an infinite number of
them), we call this set of congruent integers the *congruence class* of 5 modulo 12, and denote it:

$$
[5]_{12} = \{\ldots,19,7,‐5,‐17,‐29,\ldots\}.
$$

Generically, for a divisor $n$ and an integer $a$, we call $[a]_n$ the congruence class of $a$
modulo $n$, and denote it:

$$
[a]_n
= \{\ldots,‐1\cdot n+a,0\cdot n+a,1\cdot n+a,\ldots\}
= \{b:b\equiv a\bmod n\}.
$$

<!--
   -As a bonus, $\Z_n$ is the set of congruence classes of integers modulo $n$, which is a finite set
   -containing n elements:
   -
   -$$
   -\Z_n = \{[0]_n,[1]_n,[2]_n,\ldots,[n-1]_n\} = \{[a]_n:0\le a\lt n\}.
   -$$
   -->

## Pitch and pitch class intervals

<div class='vexflow' data='C4/q,D4|E4/q,F4|G4/q,A4'></div>

<!--Unordered pitch interval is the absolute value of ordered pitch interval.-->

Apply $T_{10}$ to the pitch set $[3~4~7]$.

$$
\begin{array}{c} 3 \\ 4 \\ 7 \end{array}
\xrightarrow{T_{10}}
\begin{array}{r}
    3+10 = 13 \equiv 1 \\
    4+10 = 14 \equiv 2 \\
    7+10 = 17 \equiv 5
\end{array}
$$

Apply $I_6$ to the pitch set $[10~11~2]$.

$$
\begin{array}{c} 10 \\ 11 \\ 2 \end{array}
\xrightarrow{I_6}
\begin{array}{r}
    6-10 = -5 \equiv 8 \\
    6-11 = -5 \equiv 7 \\
    6-2  = 4
\end{array}
$$

---

# Physics of sound

## Pitch

Where frequency is a measure of vibrations per second, pitch is the
corresponding perceptual experience. A single pitch is really just a named
frequency, such as middle C being the name for the frequency of 523.251 Hz,
a value that doesn't so much roll off of the tongue.

## Intervals

Individual pitches represent distinct frequencies of sound, and the distances
between these distinct pitches are known as *intervals*.

### Unisons and octaves

When the interval between two frequencies is equal to zero we call it a unison,
because for the distance between them to be zero they must be equal. Pitches
that are a unison apart have a one to one (1:1) ratio and are identical. When
two frequencies have the ratio of two to one (2:1) the interval between them is
called an octave, and are considered the same pitch. Pitches that are an octave
apart are equivalent to one another but not identical, because although they can
be distinguished by sound, they serve the same musical purpose.

Pitches can sound the same but be higher or lower in frequency. We call these
different octaves of the same pitch. Any octave of a reference pitch can be
calculated given the following equation:

$$
f_x = f_R \cdot 2^x, \quad x \in \mathbb{Z}
$$

Where $f_R$ is the frequency of the reference pitch, $x$ is the number
of octaves above or below the reference pitch (and is an element of the set of
all integers [$\mathbb{Z}$)][integers], and $f_x$ is the frequency of
the pitch that is $x$ octaves above or below the reference pitch. Examples
of integers are 0, 2, 4, and -1.

[integers]: https://en.wikipedia.org/wiki/Integer

Frequencies of different octaves of A starting with
reference frequency $f_R = 440$ (also known as A4 and concert A):

$$
\begin{array}{ll}
x = 0, & \quad f_x = 440 \cdot 2^{0} = 440 \mathrm{~Hz} \\
x = 1, & \quad f_x = 440 \cdot 2^{1} = 880 \mathrm{~Hz} \\
x = -1, & \quad f_x = 440 \cdot 2^{-1} = 220 \mathrm{~Hz} \\
\end{array}
$$

## Arbitrary intervals

Any distance between two pitches make an interval, even if those pitches are the
same (unison) or an octave apart. But for these other intervals, we need to
extend this formula to [$\mathbb{R}$][real], the set real numbers---of
numbers in beyond just integers, and thus intervals between and beyond unisons
and octaves:

[real]: https://en.wikipedia.org/wiki/Real_number

$$
f_x = f_R \cdot 2^x, \quad x \in \mathbb{R}
$$

Where the variable $x$ is now an element of the set of all real numbers
$\mathbb{R}$, not just integers.

---

# Resources

<h2 class='no_toc'>
Setting math on the web
</h2>

~~I set mathematical expressions on this page using the JavaScript library,
[MathJax][mathjax]. Conveniently this library uses [LaTeX][latex] syntax. To
take a look at the syntax of any of the expressions on this page simply right
click expression and click "Math Settings > Plain Source" or "Show Math As > TeX
Commands".~~

I've changed to using [KaTeX](https://katex.org/), an even faster math rendering engine supporting
practically all of the same features as [MathJax][mathjax]. Also with the [jekyll-katex][] plug-in
it's now easier than ever to integrate into a Jekyll website.

<h2 class='no_toc'>
Setting music on the web
</h2>

Musical expressions are displayed using another JavaScript library, [VexFlow][vexflow],
though learning and using it was a pretty involved process.

<!-- Links -->
[mathjax]: https://www.mathjax.org/
[latex]: https://www.mathjax.org/
[VexFlow]: https://github.com/0xfe/vexflow
[lydown]: http://ciconia.github.io/lydown/
[jekyll-katex]: https://github.com/linjer/jekyll-katex

{% endkatexmm %}

<script type='text/javascript' src='end.js'></script>
