const head = function(arr, expected) {
  if (arr === undefined) {
      actual = undefined;
      return actual;
  } else {
       actual = arr[0];
       return actual;
  }
}
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👯‍👯‍👯‍Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍Assertion Failed: ${actual} !== ${expected}.`);
  }
};

assertEqual(head([5,6,7]), '4');
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
