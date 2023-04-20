const { findComboPairs } = require("../../algos/findComboPair");

describe("findComboPairs", () => {
  test("returns empty array if input array is empty", () => {
    const input = [];
    const expectedOutput = [];
    expect(findComboPairs(input)).toEqual(expectedOutput);
  });

  test("returns unique pairs without duplicates or reversed ordered pairs", () => {
    const input = [
      [1, 9],
      [1, 9],
      [4, 6],
      [4, 6],
      [5, 5],
      [5, 5],
      [5, 5],
      [5, 5],
      [5, 5],
      [5, 5],
      [6, 4],
      [6, 4],
      [9, 1],
      [9, 1],
    ];
    const expectedOutputLength = 3;
    expect(findComboPairs(input).length).toEqual(expectedOutputLength);
  });

  test("handles negative numbers in the array", () => {
    const input = [
      [-5, 15],
      [-5, 15],
      [1, 9],
      [9, 1],
    ];
    const expectedOutputLength = 2;
    expect(findComboPairs(input).length).toEqual(expectedOutputLength);
  });

  test("handles duplicate pairs correctly", () => {
    const input = [
      [0, 10],
      [0, 10],
      [5, 5],
      [5, 5],
      [10, 0],
    ];
    const expectedOutputLength = 2;
    expect(findComboPairs(input).length).toEqual(expectedOutputLength);
  });

  test("returns unique pairs with different orders", () => {
    const input = [
      [1, 9],
      [9, 1],
      [4, 6],
      [6, 4],
      [5, 5],
    ];
    const expectedOutputLength = 3;
    expect(findComboPairs(input).length).toEqual(expectedOutputLength);
  });
});
