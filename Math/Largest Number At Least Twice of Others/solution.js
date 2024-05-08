const dominantIndex = function (nums) {
  const maxNum = Math.max(...nums);

  for (const num of nums) {
    if (num !== maxNum && maxNum < num * 2) return -1;
  }

  return nums.indexOf(maxNum);
};

/* NOTE - Examples
  
Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
    For every other number in the array x, 6 is at least twice as big as x.
    The index of value 6 is 1, so we return 1.

Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1.  
*/

/* NOTE - Results
  
submitted at May 09, 2024 01:03
  
runtime 43ms and beats 94.31% of users with JavaScript

memory 49.33 MB and beats 18.48% of users with JavaScript
*/
