const assertEqual = require('./assertEqual');

const tail = function(words) {
  let count = words.slice(1);
  return count;
};

module.exports = tail;