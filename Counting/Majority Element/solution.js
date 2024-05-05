const majorityElement = function (nums) {
  let maj = 0,
    count = 1;

  for (let i = 1; i < nums.length; i++) {
    nums[i] === nums[maj] ? count++ : count--;

    if (count === 0) {
      maj = i;
      count = 1;
    }
  }

  return nums[maj];
};

/* NOTE - Examples
  
Input: nums = [3,2,3]
Output: 3
*/

/* NOTE - Results
  
submitted at Mar 17, 2024 16:31
  
runtime 56ms and beats 78.78% of users with JavaScript

memory 51.60 MB and beats 57.04% of users with JavaScript
*/
