const reduce = function (nums, fn, init) {
  let sum = init;
  for (const num of nums) sum = fn(sum, num);
  return sum;
};

/* NOTE - Examples
    
Input: 
    nums = [1,2,3,4]
    fn = function sum(accum, curr) { return accum + curr; }
    init = 0
Output: 10
Explanation:
    initially, the value is init=0.
    (0) + nums[0] = 1
    (1) + nums[1] = 3
    (3) + nums[2] = 6
    (6) + nums[3] = 10
    The final answer is 10.
*/

/* NOTE - Results
    
submitted at May 01, 2024 23:45

runtime 50ms and beats 76.71% of users with JavaScript

memory 50.12 MB and beats 11.81% of users with JavaScript
*/
