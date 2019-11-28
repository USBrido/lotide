function eqArrays(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
      if ( arr1[i] !== arr2[i]) 
      return false
    }
  return true
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👯‍👯‍👯‍Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍Assertion Failed: ${actual} !== ${expected}.`);
  }
};
// => It's not comparing object[key] values.
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1).length;
  let obj2 = Object.keys(object2).length;
  if (obj1 !== obj2) {
    return false;
  } else {
    for (key of Object.keys(object1)){
        if (Array.isArray(object1[key]) === true === Array.isArray(object2[key]) ){
          if (object1[key].length !== object2[key].length) {
            return false;
          }
          if (eqArrays(object1, object2) === false) {
            return false;
            }
          } 
          else {
            if (object1[key] !== object2[key]) { 
              return false;
        }
      }
  }
}
return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual((eqObjects(ab, ba)), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual((eqObjects(ab, abc)), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);