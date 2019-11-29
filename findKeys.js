const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👯‍👯‍👯‍Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍Assertion Failed: ${actual} !== ${expected}.`);
  }
};
//loop through the elements, to then loop through the keys, the callback already makes the comparison
function findKey(object, callback) {
  for(properties in object) {
   let innerProperty = object[properties];
  //  for (keys in innerProperty) {
  //    let innerKeys = innerProperty[keys];
      if (callback(innerProperty)) {
        return properties
      }
  //  } 
   } return undefined
  }

  //objCall.forEach((callback) => {
    //  return objCall[i];   // execute callback

  


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

// assertEqual(findKey(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKey(bestTVShowsByGenre, "That '70s Show"), undefined);