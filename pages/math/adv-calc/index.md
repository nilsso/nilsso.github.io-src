---
---
{% include mathjax.html %}
<div id="mathjax-preamble" style="display:none;">
$$
\newcommand{seq}[1]{{\left{#1\right}}}
\def\Z{\mathbb{Z}}
\def\R{\mathbb{R}}
$$
</div>

# Advanced Calculus

## Continuity of functions <!-- 5 -->

### Uniform continuity <!-- 5.3 -->

A function $f$ is *uniformly continuous on an interval $D\subset\R$* if and only if:

$$
\forall\epsilon>0,
\exists\delta>0,
\forall x_1,x_2\in D,
|x_2-x_1|<\delta \Rightarrow
|f(x_2)-f(x_1)|<\epsilon
$$

#### Sequential chatacterization

A function $f:D\to \R$ is uniformly continuous on $D$ if and only if:

$$
\forall\seq{u_n}
$$