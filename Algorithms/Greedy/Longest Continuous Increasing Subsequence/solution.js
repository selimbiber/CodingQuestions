const findLengthOfLCIS = function (nums) {
  let maxLength = 1;
  let currentLength = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 1;
    }
  }

  return maxLength;
};

/* NOTE - Examples
  
Input: nums = [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element 4.

Input: nums = [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly increasing.
*/

/* NOTE - Results
  
submitted at Mar 31, 2024 12:08
  
runtime 56ms and beats 42.29% of users with JavaScript

memory 49.5 MB and beats 64.26% of users with JavaScript
*/
