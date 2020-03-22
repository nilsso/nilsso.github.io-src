var pattern_random = /random-(\d+)-(\d+)/;

$(".vexflow").each(function() {
    var data = $(this).attr('data');
    var m = data.match(pattern_random);
    if (m) {
        var [quarters, bars] = m.slice(1).map(n => +n);
        var data = Array(bars);
        for (var i = 0; i < data.length; i++)
            data[i] = random_staff_notes(quarters) 
        helper(this, data.join('|'));
    } else {
        helper(this, data);
    }
});


params = {
    width: 860,
    height: 120,
    stave_width: 80,
    first_stave_width: 140,
    beats_per_measure: 2,
};

let music = 'F4q F4q | R4qr Ab4q | Ab4q G3q | G3q F#4q | R48r Bb3qd | E4qd R48r | C5q C#4q | C#4q D5q | D5q R4qr | B4q B4q';

simple_score('vf-2b', params, music);

