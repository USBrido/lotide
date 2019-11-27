// function eqArrays(arr1, arr2) {
//   for (i = 0; i < arr1.length; i++) {
//       if ( arr1[i] !== arr2[i]) 
//       return false
      
//     }
//   return true
  
// }
// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`👯‍👯‍👯‍Assertion Passed: ${arr1} === ${arr2}.`);
//   } else {
//     console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍Assertion Failed: ${arr1} !== ${arr2}.`);
//   }
// };
 
function middle(array) {
  let count = array.length;
  let i = ;
  if (count === 1 || count === 2) {
    return [];
  } else if (count % 2 === 0) {
    return array.indexOf(count);
  } else if (array.length % 2 !== 0) {
    return (array.indexOf(count), array.indexOf(count + 1));
}
}
console.log(middle([1, 2, 3, 4]));// [2, 3]);
console.log(middle([1, 2, 3, 4, 5, 6]));// [3, 4]);
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]



