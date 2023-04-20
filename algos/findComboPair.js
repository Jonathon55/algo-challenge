const { findPairs } = require('./findPairs');

/**
 * 
 * @param {*} collection array of pairs
 * Write a program that output the same combo pair only once, removes reverse order pairs
 * @returns array of unique combo pairs
 */
const findComboPairs = (collection) => {
  // Initialize an object to store unique pair keys
  const uniquePairKeys = {};
  // Initialize an array to store the result
  const uniqueComboPairs = [];

  // Iterate through each pair in the input array
  for (const pair of collection) {
    // Find the smaller and larger values in the pair
    const smaller = Math.min(pair[0], pair[1]);
    const larger = Math.max(pair[0], pair[1]);
    // Create a unique key using the smaller and larger values
    const key = `${smaller},${larger}`;

    // Check if the unique key already exists in the uniquePairKeys object
    if (!uniquePairKeys[key]) {
      // If the key is not found, add the pair to the uniqueComboPairs array
      uniqueComboPairs.push([smaller, larger]);
      // Add the key to the uniquePairKeys object
      uniquePairKeys[key] = true;
    }
  }

  // Return the uniqueComboPairs array with unique pairs without reversed ordered pairs
  return uniqueComboPairs;
}
const arr = [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9];
console.log(findComboPairs(findPairs(arr, 10)), ": Find Combo Pair"); //--> [[ 5, 5 ], [ 4, 6 ], [ 1, 9 ]]
exports.findComboPairs = findComboPairs;