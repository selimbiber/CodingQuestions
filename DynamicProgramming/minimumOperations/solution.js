const minimumOperations = function (nums) {
  let operations = 0;

  while (true) {
    let minNonZero = Infinity;
    let allZero = true;

    for (let num of nums) {
      if (num !== 0) {
        allZero = false;
        minNonZero = Math.min(minNonZero, num);
      }
    }

    if (allZero) break;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) nums[i] -= minNonZero;
    }

    operations++;
  }
  return operations;
};

/* NOTE Examples

Example 1:

Input: nums = [1,5,0,3,5]
Output: 3
Explanation:
In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].

Example 2:

Input: nums = [0]
Output: 0
Explanation: Each element in nums is already 0 so no operations are needed.
*/

/* NOTE Results 

submitted at Jun 07, 2024 14:42
  
runtime 49ms and beats 81.50% of users with JavaScript

memory 51.09 MB and beats 20.38% of users with JavaScript
*/
