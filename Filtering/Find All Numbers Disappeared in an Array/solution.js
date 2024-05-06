const findDisappearedNumbers = function (nums) {
  const numSet = new Set(nums);
  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!numSet.has(i)) result.push(i);
  }

  return result;
};

/* NOTE - Examples
    
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
*/

/* NOTE - Results
    
submitted at May 06, 2024 23:54

runtime 96ms and beats 33.22% of users with JavaScript

memory 60.86 MB and beats 40.20% of users with JavaScript
*/
