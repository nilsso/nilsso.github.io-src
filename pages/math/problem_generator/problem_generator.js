problem_generators = {
  "sequence-geometric" : String.raw`%a %a %b %b %c %c`,
  "series-geometric"   : String.raw`\sum_{n=1}^\infty %a(%r)^n`
}

var pattern = /\%\w/g;

var generator = problem_generators["series-geometric"];

//! Generate random integer
//! @param min minimum value
//! @param max maximum value
//! Generates a random integer from a minimum value to a maximum value
//  inclusively.
function randomInt(min, max) {
  return Math.floor(Math.random()*(max-min+1))+min;
}

//! Generate random problem from generator string
//! @param generator generator string
function generateProblem(generator) {
  var symbols = [];
  generator.replace(pattern,
    match => {
      if (symbols.indexOf(match) == -1) symbols.push(match)});

  for (i in symbols) {
    var value = randomInt(1, 10);
    generator = generator.replace(RegExp(symbols[i], 'g'), value);
  }
  return generator;
}

