const palindromeChainLength = function (n) {
  const reversedNum = String(n).split("").reverse().join("");
  let step = 0;

  if (n == reversedNum) return step;

  const newNum = n + Number(reversedNum);

  return 1 + palindromeChainLength(newNum);
};

/* NOTE Examples

For example, start with 87:

  87 +   78 =  165     - step 1, not a palindrome
 165 +  561 =  726     - step 2, not a palindrome
 726 +  627 = 1353     - step 3, not a palindrome
1353 + 3531 = 4884     - step 4, palindrome!

4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.
*/
