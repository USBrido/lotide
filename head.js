const assertEqual = require('./assertEqual');

const head = function(arr, expected) {
  if (arr === undefined) {
      actual = undefined;
      return actual;
  } else {
       actual = arr[0];
       return actual;
  }
}


module.exports = head;