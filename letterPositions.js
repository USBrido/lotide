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


const letterPositions = function(sentence) {
  const results = {};
  for (i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
    return results
  }

assertArraysEqual(letterPositions('hello').l, [2, 3]);
      //add a key(letter) to the object, if it doesn't have one
      //add element(letter) to result array
      //add the position of the letter to the element(letter)