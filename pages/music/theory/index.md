---
layout: default
title: 'Music'
math: true
toc: true
---

<!-- VexFlow -->
<script type='text/javascript' src='https://unpkg.com/vexflow/releases/vexflow-min.js'></script>
<script type='text/javascript'>
var VF = Vex.Flow;

var renderer_width = 420;
var renderer_height = 120;
var stave_total_width = 400;

function helper(ele, groups) {
	var div = ele;
	var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG)
		.resize(renderer_width, renderer_height);
	var context = renderer.getContext();
	var num_staves = groups.length;
	var stave_width = stave_total_width / num_staves;
	groups.forEach(function(notes, i) {
		var stave = new VF.Stave(i*stave_width, 0, stave_width);
		var notes = notes.split(',').map(x => new VF.StaveNote({clef: 'treble', keys: [x], duration: 'q' }));
		switch (i) {
			case num_staves - 1:
				stave.setEndBarType(VF.Barline.type.END);
				break;
			case 0:
				stave.addClef('treble');
			default:
				stave.setEndBarType(VF.Barline.type.DOUBLE);
				break
		}
		stave.setContext(context).draw();
		VF.Formatter.FormatAndDraw(context, stave, notes);
	});
}
</script>

{% katexmm %}
# Pitch and pitch class intervals

(5-10)\bmod 12\equiv 7

<div class='vexflow' id='vf-1' data='c/4,d/4|e/4,f/4|g/4,a/4'></div>

Unordered pitch interval is the absolute value of ordered pitch value

# Pitch

Where frequency is a measure of vibrations per second, pitch is the
corresponding perceptual experience. A single pitch is really just a named
frequency, such as middle C being the name for the frequency of 523.251 Hz,
a value that doesn't so much roll off of the tongue.

# Intervals

Individual pitches represent distinct frequencies of sound, and the distances
between these distinct pitches are known as *intervals*.

## Unisons and octaves

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

# Resources

## Setting math on the web

~~I set mathematical expressions on this page using the JavaScript library,
[MathJax][mathjax]. Conveniently this library uses [$\LaTeX$][latex] syntax. To
take a look at the syntax of any of the expressions on this page simply right
click expression and click "Math Settings > Plain Source" or "Show Math As > TeX
Commands".~~

I've changed to using [KaTeX](https://katex.org/), an even faster math rendering engine supporting
practically all of the same features as [MathJax][mathjax]. Also with the [jekyll-katex][] plug-in
it's now easier than ever to integrate into a Jekyll website.

## Setting music on the web

I set musical expressions on this page using another JavaScript library,
[VexFlow][vexflow].

<!-- Links -->
[mathjax]: https://www.mathjax.org/
[latex]: https://www.mathjax.org/
[VexFlow]: https://github.com/0xfe/vexflow
[lydown]: http://ciconia.github.io/lydown/
[jekyll-katex]: https://github.com/linjer/jekyll-katex

{% endkatexmm %}

<script>
$(".vexflow").each(function () {
	helper(this, $(this).attr("data").split("|"));
});
</script>
