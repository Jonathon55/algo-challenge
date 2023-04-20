const {findPairs} = require('../../algos/findPairs.js');

describe('findPairsOfTen', () => {
  const sum = 10;
  test('should return empty array if input array is empty', () => {
    const input = [];
    const expectedOutput = [];
    expect(findPairs(input, sum)).toEqual(expectedOutput);
  });

  test('should return all pairs of integers that sum up to target sum', () => {
    const input = [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9];
    const expectedOutputLength = 14;
    expect(findPairs(input, sum).length).toEqual(expectedOutputLength);
  });

  test('should return empty array if no pairs are found', () => {
    const input = [11, 12, 13, 14, 15];
    const expectedOutput = [];
    expect(findPairs(input, sum)).toEqual(expectedOutput);
  });
 
  //order of output is random due to object loop
  test('should handle negative numbers in the array', () => {
    const input = [-5, -3, 1, 2, 5, 8, 13];
    const expectedOutputLength = 4;
    expect(findPairs(input, sum).length).toEqual(expectedOutputLength);
  });

  test('should handle duplicate pairs correctly', () => {
    const input = [0, 0, 5, 5, 5, 10];
    const expectedOutputLength = 10;
    expect(findPairs(input, sum).length).toEqual(expectedOutputLength);
  });
});
