var VF = Vex.Flow;

var renderer_height = 100;
var stave_width = 150;
var per_note_width = 60;
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
    // Split data into note groups and calculate stave widths per group
    var groups = data.split('|');
	var num_staves = groups.length;
    var stave_widths = Array(num_staves);
    groups.forEach(function(notes, i) {
        stave_widths[i] = notes.split(',').length * per_note_width;
    });
    var total_width = stave_widths.reduce((a,b) => a+b, 0);
    // Set up VexFlow components
    var factory = new VF.Factory({
        renderer: {
            elementId: div,
            width: total_width,
            height: renderer_height
        }
    });
    var score = factory.EasyScore();
	var context = factory.getContext();
    // Set staves
    var width_accum = 0;
    groups.forEach(function(notes, i) {
        var width = stave_widths[i];
        var stave = new VF.Stave(width_accum, 0, width);
        width_accum += width;
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
