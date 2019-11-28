function eqArrays(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
      if ( arr1[i] !== arr2[i]) 
      return false
    }
  return true
}
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`👯‍👯‍👯‍Assertion Passed: ${arr1} === ${arr2}.`);
  } else {
    console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍Assertion Failed: ${arr1} !== ${arr2}.`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
    for (let item of array) {
      results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[1]);

console.log(assertArraysEqual(results1, ['r', 'o', 'o', 'a', 'o']));