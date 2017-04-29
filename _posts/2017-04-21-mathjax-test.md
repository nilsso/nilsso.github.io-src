---
layout: post
title: "MathJax Test"
date: 2017-04-21 12:00:00 -0700
categories: web math
---

[MathJax][mathjax-home], "A JavaScript display engine for mathematics that works in all
browsers."

<script
src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
type="text/javascript"></script>

Input:

{% highlight tex %}
$$a^2 + b^2 = c^2$$
{% endhighlight %}

Output:

$$a^2 + b^2 = c^2$$

Input:

{% highlight tex %}
sine of variable x squared: \\( sin(x^2) \\)
{% endhighlight %}

Output:

sine of variable x squared: \\( sin(x^2) \\)

Input:

{% highlight tex %}
$$ \mathbf{X}_{n,p} = \mathbf{A}_{n,k} \mathbf{B}_{k,p} $$
{% endhighlight %}

Output:

$$ \mathbf{X}_{n,p} = \mathbf{A}_{n,k} \mathbf{B}_{k,p} $$

[mathjax-home]: https://www.mathjax.org/
