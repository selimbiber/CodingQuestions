const selfDividingNumbers = function (left, right) {
  const result = [];

  for (let i = left; i <= right; i++) {
    if (isNumberSelfDividing(i)) result.push(i);
  }

  return result;
};

const isNumberSelfDividing = function (num) {
  const digits = num.toString().split("");
  let result = true;

  for (let i = 0; i < digits.length; i++) {
    if (num % digits[i] != 0) {
      result = false;
      break;
    }
  }

  return result;
};

/* NOTE - Examples
  
Input: left = 1, right = 22
Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

Input: left = 47, right = 85
Output: [48,55,66,77]
*/

/* NOTE - Results
  
submitted at Apr 01, 2024 17:07
  
runtime 56ms and beats 56.30% of users with JavaScript

memory 49.09 MB and beats 34.25% of users with JavaScript
*/
