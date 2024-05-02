const isPalindrome = function (x) {
  return Number(x.toString().split("").reverse().join("")) === x;
};

/* NOTE - Examples
  
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

/* NOTE - Results
  
submitted at Mar 08, 2024 18:53
  
runtime 144ms and beats 31.89% of users with JavaScript

memory 59.04 MB and beats 10.34% of users with JavaScript
*/
