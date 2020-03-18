var pattern_random = /random-(\d+)-(\d+)/;

$(".vexflow").each(function() {
    var data = $(this).attr('data');
    console.log(data, data.match(pattern_random));
    var m = data.match(pattern_random);
    if (m) {
        var [quarters, bars] = m.slice(1).map(n => +n);
        console.log(quarters, bars);
        var data = Array(bars);
        for (var i = 0; i < data.length; i++)
            data[i] = random_staff_notes(quarters) 
        helper(this, data.join('|'));
    } else {
        helper(this, data);
    }
});

