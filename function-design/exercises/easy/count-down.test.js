'use strict';

/**
 * builds an array counting down from `start` to 0
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */
const stub = () => {};

/*
  your strategy goes here
*/

for (const solution of [
  secretSolution,
  // stub
]) {
  // the main test suite for the function
  describe(solution.name + ': counts down to 0', () => {
    it('default parameter', () => {
      expect(solution()).toStrictEqual([0]);
    });
    it('0', () => {
      expect(solution(0)).toStrictEqual([0]);
    });
    it('1', () => {
      expect(solution(1)).toStrictEqual([1, 0]);
    });
    // write at least 5 more tests ...
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (0 > a) throw new RangeError("start is less than 0"); const b = []; for (let c = a; 0 <= c; c--)b.push(c); return b }
