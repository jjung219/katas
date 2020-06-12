// Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.

const instructorWithLongestName = function(instructors) {
  let sorted = [];

  for (i = 0; i < instructors.length; i++) { //create an array of name lengths
    sorted.push(instructors[i].name.length);
  }

  sorted.sort(function (a, b) { // sort descending order to find out what length is the longest
    if (a > b) {
      return -1; //put it at lower inex
    } else if (a < b) {
      return 1; //put it at higher index
    } else {
      return 0;
    }
  })

  for (i = 0; i < instructors.length; i++) { // return the object that matches
    if (instructors[i].name.length === sorted[0]) {
      return instructors[i];
    }
  }

};





console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

// expected output 
// {name: "Jeremiah", course: "Web"}
// {name: "Domascus", course: "Web"}