const lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};

/* NOTE - Examples
    
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
*/

/* NOTE - Results
    
submitted at May 04, 2024 23:41

runtime 56ms and beats 27.87% of users with JavaScript

memory 48.84 MB and beats 47.04% of users with JavaScript
*/
