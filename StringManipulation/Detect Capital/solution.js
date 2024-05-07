const detectCapitalUse = function (word) {
  const firstLetters = word.charAt(0) === word[0].toUpperCase();
  const otherLetters = word.slice(1) === word.slice(1).toLowerCase();

  if (word === word.toUpperCase()) return true;
  if (word === word.toLowerCase()) return true;
  if (firstLetters && otherLetters) return true;

  return false;
};

/* NOTE - Examples
  
Input: word = "USA"
Output: true

Input: word = "FlaG"
Output: false
*/

/* NOTE - Results
  
submitted at Mar 25, 2024 12:30
  
runtime 57ms and beats 50.21% of users with JavaScript

memory 48.54 MB and beats 92.62% of users with JavaScript
*/
