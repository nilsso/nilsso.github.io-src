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

var renderer_width = 600;
var renderer_height = 100;
var stave_total_width = 600;
var NOTES = {
    0:  'C', 1:  'C#',
    2:  'D', 3:  'D#',
    4:  'E',
    5:  'F', 6:  'F#',
    7:  'G', 8:  'G#',
    9:  'A', 10: 'A#',
    11: 'B'
};

function helper(div, data) {
    var groups = data.split('|');
	var num_staves = groups.length;
	var stave_width = stave_total_width / num_staves;

    var factory = new VF.Factory({
        renderer: {
            elementId: div,
            width: renderer_width,
            height: renderer_height
        }
    });
    var score = factory.EasyScore();
	var context = factory.getContext();

    groups.forEach(function(notes, i) {
        var stave = new VF.Stave(i*stave_width, 0, stave_width);
        var notes = score.notes(notes);
        if (i == 0)
            stave.addClef('treble');
		if (i == num_staves - 1)
            stave.setEndBarType(VF.Barline.type.END);
		else
            stave.setEndBarType(VF.Barline.type.DOUBLE);
        stave.setContext(context).draw();
        VF.Formatter.FormatAndDraw(context, stave, notes);
    });
}

function random_note() {
    return NOTES[Math.floor(12*Math.random())].concat('4');
}

function random_notes(n) {
    var notes = new Array(n);
    for (var i = 0; i < notes.length; i++)
        notes[i] = random_note();
    return notes;
}

function random_staff_notes(n) {
    var notes = random_notes(n);
    return [notes[0].concat('/q')].concat(notes.slice(1)).join(',');
}
</script>

{% katexmm %}

<div class='vexflow' data='random'></div>

# Fundamentals of atonal music

## Pitch and pitch class intervals

$$
(5-10)\bmod 12\equiv 7
$$

<div class='vexflow' data='C4/q,D4|E4/q,F4|G4/q,A4'></div>

Unordered pitch interval is the absolute value of ordered pitch interval.

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

<script>
$(".vexflow").each(function() {
    var data = $(this).attr('data');
    if (data == 'random') {
        var data = Array(3);
        for (var i = 0; i < data.length; i++)
            data[i] = random_staff_notes(2) 
        helper(this, data.join('|'));
    } else {
        helper(this, data);
    }
});
</script>
