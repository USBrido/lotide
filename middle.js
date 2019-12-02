const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

 
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


module.exports = middle;

