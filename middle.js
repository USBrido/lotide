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
 
function middle(array) {
  let arrLength = array.length;
  let midArray = Math.floor(arrLength/2);
  let count = [] ;
  if (arrLength === 1 || arrLength === 2) {
    return [];
  } else if (arrLength % 2 === 0) {
    count.push(array[midArray - 1])
    count.push(array[midArray])
    return count ;
  } else if (array.length % 2 !== 0) {
    count.push(array[midArray])
    return count;
}
}
assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]);
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);
assertArraysEqual((middle([1, 2, 3])), [2]);
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);



