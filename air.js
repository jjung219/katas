// implement a function called checkAir(), which will check a collection of air samples. he first argument is an array of strings, where each string represents a small air sample that is either clean or dirty. The second argument is a number representing the highest acceptable amount of dirty samples. For example, a threshold of 0.4 means that there must be less than 40% of total samples classified as dirty for our air to be considered clean. Our function must return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.

const checkAir = function (samples, threshold) {
  let dirty = 0;

  for (i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      dirty += 1;
    }
  }

  const ratio = dirty / samples.length;  //find the percentage of dirty samples are in the samples array 

  if (ratio < threshold) { // if dirty % is less than the threshold, it's clean
    return "Clean";
  } else {
    return "Polluted";
  }
};


//test
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
)); //expected output - Polluted

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
)); //expected output - Polluted

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
)) //expected output - Clean