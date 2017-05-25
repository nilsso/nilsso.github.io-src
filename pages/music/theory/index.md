---
layout: default
title: "Music"
---

<!-- VexFlow -->
<script type="text/javascript"
src="https://unpkg.com/vexflow/releases/vexflow-min.js"></script>

<!-- MathJax -->
{% include mathjax.html %}

## Pitch

Where frequency is a measure of vibrations per second, pitch is the
corresponding perceptual experience. A single pitch is really just a named
frequency, such as middle C being the name for the frequency of 523.251 Hz,
a value that doesn't so much roll off of the tongue.

### Intervals

Individual pitches represent distinct frequencies of sound, and the distances
between these distinct pitches are known as *intervals*.

#### Unisons and octaves

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

\begin{align}
f_x = f_R \cdot 2^x, \quad x \in \mathbb{Z}
\end{align}

Where \\(f_R\\) is the frequency of the reference pitch, \\(x\\) is the number
of octaves above or below the reference pitch (and is an element of the set of
all integers [\\(\mathbb{Z}\\))][integers], and \\(f_x\\) is the frequency of
the pitch that is \\(x\\) octaves above or below the reference pitch. Examples
of integers are 0, 2, 4, and -1.

[integers]: https://en.wikipedia.org/wiki/Integer

Frequencies of different octaves of A starting with \\(f_R = 440\\) (A4):

\begin{align\*}
x = 0, \quad f_x = (440) \cdot 2^{(0)} = 440 \mathrm{\\ Hz} \\\
x = 1, \quad f_x = (440) \cdot 2^{(1)} = 880 \mathrm{\\ Hz} \\\
x = -1, \quad f_x = (440) \cdot 2^{(-1)} = 220 \mathrm{\\ Hz} \\\
\end{align\*}

#### Arbitrary intervals

Any distance between two pitches make an interval, even if those pitches are the
same (unison) or an octave apart. But for these other intervals, we need to
extend this formula to [\\(\mathbb{R}\\)][real], the set real numbers---of
numbers in beyond just integers, and thus intervals between and beyond unisons
and octaves:

[real]: https://en.wikipedia.org/wiki/Real_number

\begin{equation}
f_x = f_R \cdot 2^x, \quad x \in \mathbb{R}
\end{equation}

Where the variable \\(x\\) is now an element of the set of all real numbers
\\(\mathbb{R}\\), not just integers.

## Resources

### Setting math on the web

I set mathematical expressions on this page using the JavaScript library,
[MathJax][mathjax]. Conveniently this library uses [LaTeX][latex] syntax. To
take a look at the syntax of any of the expressions on this page simply right
click expression and click "Math Settings > Plain Source" or "Show Math As > TeX
Commands".

### Setting music on the web

I set musical expressions on this page using another JavaScript library,
[VexFlow][vexflow].

Alternatives:

- [Lydown][lydown], a Ruby gem that needs Lilypond

#### VexFlow

##### Input

{% highlight html %}
<div id="vf-demo"></div>
<script>
// Computed width
var width = getComputedStyle(document.querySelector('.wrapper')).width;

// Create VexFlow context
var vf = new Vex.Flow.Factory({
  renderer: {selector: 'vf-demo', width: width, height: 200 }
});

// Setup context with "easy" score and system for writing notes
var score = vf.EasyScore();
var system = vf.System();

// Add staves and notes
system.addStave({
  voices: [
    score.voice(score.notes('C#5/q, B4, A4, G#4', {stem: 'up'})),
    score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
  ]
}).addClef('treble').addTimeSignature('4/4');

// Render
vf.draw();
</script>
{% endhighlight %}

##### Output

<div id="vf-demo"></div>
<script>
var width = getComputedStyle(document.querySelector('.wrapper')).width;

var vf = new Vex.Flow.Factory({
  renderer: {selector: 'vf-demo', width: width, height: 200 }
});

var score = vf.EasyScore();
var system = vf.System();

system.addStave({
  voices: [
    score.voice(score.notes('C#5/q, B4, A4, G#4', {stem: 'up'})),
    score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
  ]
}).addClef('treble').addTimeSignature('4/4');

vf.draw();
</script>

<!-- Links -->
[mathjax]: https://www.mathjax.org/
[latex]: https://www.mathjax.org/
[VexFlow]: https://github.com/0xfe/vexflow
[lydown]: http://ciconia.github.io/lydown/

