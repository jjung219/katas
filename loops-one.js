const loopyLighthouse = function (range, multiples, words) {

  for (let i = range[0]; i <= range[1]; i++) {
    if (i % (multiples[0] * multiples[1]) === 0) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else {
      console.log(i);
    }
  } 
}


//test
console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
//expected output = all the numbers from 15 - 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon"