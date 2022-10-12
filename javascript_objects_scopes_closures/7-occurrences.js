#!/usr/bin/node
// Function that returns the number of occurences in a list
exports.nbOccurences = function (list, searchElement) {
  let occurences = 0;
  list.forEach(element => {
    if (element === searchElement) {
      occurences++;
    }
  });
  return occurences;
};
