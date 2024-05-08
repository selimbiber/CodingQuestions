const buildArray = function (nums) {
  const ans = [];

  for (const num of nums) {
    ans.push(nums[num]);
  }

  return ans;
};

/* NOTE - Examples
  
Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
Explanation: The array ans is built as follows: 
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]

Input: nums = [5,0,1,2,3,4]
Output: [4,5,0,1,2,3]
Explanation: The array ans is built as follows:
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
    = [4,5,0,1,2,3]
*/

/* NOTE - Results
  
submitted at Apr 14, 2024 23:47
  
runtime 61ms and beats 85.84% of users with JavaScript

memory 51.70 MB and beats 97.64% of users with JavaScript
*/
