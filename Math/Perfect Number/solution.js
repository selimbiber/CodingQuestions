const checkPerfectNumber = function (num) {
  if (num <= 1) return false;

  let sum = 1;
  const sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== sqrt) sum += num / i;
    }
  }

  return sum === num;
};

/* NOTE - Examples
  
Input: num = 28
Output: true
Explanation: 28 = 1 + 2 + 4 + 7 + 14
  1, 2, 4, 7, and 14 are all divisors of 28.
*/

/* NOTE - Results
  
submitted at May 06, 2024 23:47
  
runtime 56ms and beats 94.44% of users with JavaScript

memory 49.09 MB and beats 42.86% of users with JavaScript
*/
