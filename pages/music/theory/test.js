VF = Vex.Flow;

var div = document.getElementById("vf")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
renderer.resize(500, 500);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

var stave = new VF.Stave(10, 40, 400);
stave.addClef("treble").addTimeSignature("2/4");
stave.setContext(context).draw();
var voices = [
	new VF.Voice({num_beats: 2,  beat_value: 4}).addTickables([
    new VF.StaveNote({clef: "treble", keys: ["c/5"], duration: "q" }),
    new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" })
  ])
];
var formatter = new VF.Formatter().formatToStave(voices, stave);

voices.forEach(function(v) { v.draw(context, stave); })
