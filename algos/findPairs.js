
/**
 * @param {*} arr 
 * @param sum int
 * * Write a program a program that allows for an integer to 
 * be passed in and will output all the pairs that sum up to target sum
 * @returns array of all pairs
 * Time Complexity closer to Linear, single loop through array, 
 * Using Cache[Compliment] for constant look up
 * Worst Case Scenario is for if all elements have same value
 */
 const findPairs = (arr, sum) => {
    let pairs = [];
    let cache = {};
    
    if(!arr.length) return pairs;

    for (let i = 0; i < arr.length; i++) {
      //Calculate the complement of the current element with respect to the sum
      let complement = sum - arr[i];

     //Check if the object contains the complement as a key
      if (cache.hasOwnProperty(complement)) {
        cache[complement].forEach(index => {
        //Push the pair (complement, current element) into the pairs array
          pairs.push([arr[index], arr[i]]);
        //Push the reversed pair (current element, complement) into the pairs array
          pairs.push([arr[i], arr[index]]);
        });
      }
  
      if (!cache.hasOwnProperty(arr[i])) {
        //If the current element is not already a key in the  object, 
        //add it with an empty array as its value
        cache[arr[i]] = [];
      }
      //Push the current index into the array associated with the current element
      cache[arr[i]].push(i);
    }
  
    return pairs;
  }

  console.log(findPairs([1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9], 10), ": Find Pairs"); // --> [[1,9], [1,9], [4,6], [4,6], [5,5], [5,5], [5,5], [5,5], [5,5], [5,5], [6,4], [6,4], [9,1] , [9,1]]
  exports.findPairs = findPairs;