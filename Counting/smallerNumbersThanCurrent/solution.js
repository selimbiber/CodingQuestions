const smallerNumbersThanCurrent = function (nums) {
  return nums.map((numX) => {
    return nums.filter((numY) => numX > numY).length;
  });
};

/* NOTE - Examples
  
Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]

Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]
*/

/* NOTE - Results
  
submitted at Jun 02, 2024 23:41
  
runtime 76ms and beats 23.57% of users with JavaScript

memory 55.36 MB and beats 6.83% of users with JavaScript
*/
