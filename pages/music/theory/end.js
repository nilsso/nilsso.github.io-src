'use strict';

const default_params = {
    width: 1000,
    height: 120,
    x: 0,
    y: 0,
    stave_width: 80,
    first_stave_width: 140,
    beats_per_measure: 2
};

$(".vf.simple-score").each(function() {
    let obj = $(this);
    let params = { ...default_params, ...JSON.parse(obj.attr('params')) };
    let music = obj.attr('music').replace('\n', '').trim();
    simple_score(this, params, music);
});

let pattern_random = /random-(\d+)-(\d+)/;

$(".vf.helper").each(function() {
    let data = $(this).attr('data');
    let m = data.match(pattern_random);
    if (m) {
        let [quarters, bars] = m.slice(1).map(n => +n);
        let data = Array(bars);
        for (let i = 0; i < data.length; i++)
            data[i] = random_staff_notes(quarters) 
        helper(this, data.join('|'));
    } else {
        helper(this, data);
    }
});
