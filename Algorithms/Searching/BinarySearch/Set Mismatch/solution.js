const findErrorNums = function (nums) {
  let maxNum = Math.max(...nums) < nums.length ? nums.length : Math.max(...nums);

  const repetitiveNum = findRepetitiveNum(nums);
  const missingNum = findMissingNum(nums, maxNum);

  return [repetitiveNum, missingNum];
};

const findRepetitiveNum = (nums) => {
  const uniqueNums = [];
  let repetitiveNum = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!uniqueNums.includes(num)) {
      uniqueNums.push(num);
    } else {
      repetitiveNum = num;
      break;
    }
  }

  return repetitiveNum;
};

const findMissingNum = (nums, maxNum) => {
  let missingNum = 0;

  for (let i = maxNum; i <= nums.length; i--) {
    if (!nums.includes(i)) {
      missingNum = i;
      break;
    }
  }

  return missingNum;
};

/* NOTE - Examples
  
Input: nums = [1,2,2,4]
Output: [2,3]

Input: nums = [1,1]
Output: [1,2]
*/

/* NOTE - Results
  
submitted at May 07, 2024 23:22
  
runtime 581ms and beats 15.89% of users with JavaScript

memory 53.62 MB and beats 60.27% of users with JavaScript
*/
