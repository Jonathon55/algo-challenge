const {findPairs} = require('./findPairs'); 


/**
 * 
 * @param {*} collection array of pairs
 *  write a program that outputs unique pairs only once 
 * (removes the duplicates but includes the reversed ordered pairs)
 * @returns array of unique pairs
 * Time Complexity o(n) - one loop
 */

const findUniquePairs = (collection) => {
    const uniquePairKeys = {};
    const uniquePairs = [];
  
    // Iterate through each pair in the input array
    for (const pair of collection) {
      // Create a unique key representing the pair
      const key = `${pair[0]},${pair[1]}`;
      // If the key is not in the uniquePairKeys
      if (!uniquePairKeys[key]) {
        // Add the pair to the uniquePairs array
        uniquePairs.push(pair);
        // Mark the key as present in uniquePairKeys
        uniquePairKeys[key] = true;
      }
    }
    return uniquePairs;
  }
  const arr = [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9];
  console.log(findUniquePairs(findPairs(arr, 10)), ": Find Unique Pairs"); // ==>  [[ 5, 5 ], [ 4, 6 ], [ 6, 4 ], [ 1, 9 ], [ 9, 1 ]]
  exports.findUniquePairs = findUniquePairs;