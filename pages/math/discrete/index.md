---
title: Discrete Mathematics
---

{% include mathjax.html %}

# Intro

- Syllabus: <https://change.later>
- Textbook: <https://change.later>

# "Language" of math

Symbols can have differing meanings in different contexts.

$(1,2)$ A point (ordered pair) or an exclusive range
$(2,1)$ An exclusive range

## Definitions

-- | --
Statements | A sentence with truth value (boolean, true or false). Must have a value (not needed to be evaluated)
Universal statement | "for all..." ($\forall$), true of all elements in a universal set. (e.g. ${(x+1)}^2=x^2+2x+1,x\in\mathbb{R}$)
Conditional statement | "if, then..." ($\rightarrow$)
Existential statement | "there exists..." ($\exists$)
Sets | 
Set builder | Define the characteristics of elements in a set (potentially infinite set)
Set roster | List the elements in a set (finite set)
Subsets | (e.g. $\mathbb{Q}\subset\mathbb{R}$). For two sets to the equal they must of subsets of one-another.
Proper subset |
Cartesian product | Let $A$, $B$ be sets. The cartesian product, $A\times B$, is the set of all ordered pairs $(a,b)$ where $a$ is in $A$ and $b$ is in $B$: $A\times B=\\{(a,b)\mid a\in A,b\in B\\}$

## Sets


$\mathbb{C}$ | Complex numbers, $\mathbb{C}=\\{a+bi\mid a,b\in\mathbb{R},i^2=-1\\}$
$\mathbb{R}$ | Real numbers
$\mathbb{Z}$ | Integers
$\mathbb{Z^{+}}$ | Positive integers
$\mathbb{Z^{-}}$ | Negative integers
$\mathbb{Q}$ | The set of all quotients, of $p$ and $q$ in the set of integers where $q$ does not equal zero ($\mathbb{Q}=\\{\frac{p}{q}\mid p,q\in\mathbb{Z},q\neq 0\\}$)

### Examples

$\forall x\in\mathbb{R}\text{, if }\neq 0\text{, then }x^2>0$:
For all (universal) $x$ (variable) in the set of real numbers, if $x$ is not zero, then $x$ is positive (conditional).

$\\{x\in\mathbb{Z}\mid-2<x<5\\}=\\{-1,0,1,2,3,4\\}$

$\\{2\\}\in\\{1,2,3\\}$:
False

$\\{2\\}\subset\\{1,2,3\\}$:
True

$\\{2\\}\in\\{\\{1\\},\\{2\\}\\}$:
True

# Quick symbols table

Symbol | Description | LaTeX
-- | -- | --
$\in$ | Contained within | `\in`
$\notin$ | Not contained within | `\notin`
$\subset$ | Subset | `\subset`
$\therefore$ | Therefore (conclusion) | `\therefore`
