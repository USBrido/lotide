const tail = function(words) {
  let count = words.slice(1);
  return count;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👯‍👯‍👯‍Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const words = ["Yo Yo"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);