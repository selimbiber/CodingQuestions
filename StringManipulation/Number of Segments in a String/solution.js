const countSegments = function (s) {
  return s.split(" ").filter((segment) => segment.trim() !== "").length;
};

/* NOTE - Examples
  
Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
*/

/* NOTE - Results
  
submitted at May 06, 2024 23:51
  
runtime 55ms and beats 29.76% of users with JavaScript

memory 48.68 MB and beats 51.79% of users with JavaScript
*/
