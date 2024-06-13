function maximumCount(nums) {
  let [negativeCount, positiveCount] = [0, 0];

  for (const num of nums) {
    if (num === 0) continue;
    num > 0 ? ++negativeCount : ++positiveCount;
  }

  return Math.max(negativeCount, positiveCount);
}

/* NOTE Examples

Example 1:

Input: nums = [-2,-1,-1,1,2,3]
Output: 3
Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

Example 2:

Input: nums = [-3,-2,-1,0,0,1,2]
Output: 3
Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.

Example 3:

Input: nums = [5,20,66,1314]
Output: 4
Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

*/

/* NOTE - Results
  
submitted at Jun 12, 2024 16:56
  
runtime 56ms and beats 56.83% of users with JavaScript

memory 51.26 MB and beats 49.63 %of users with JavaScript
*/
