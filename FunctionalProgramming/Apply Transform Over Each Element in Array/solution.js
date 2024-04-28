const map = function (arr, fn) {
  const RESULT = [];

  for (let i = 0; i < arr.length; i++) {
    RESULT.push(fn(arr[i], i));
  }

  return RESULT;
};

/* NOTE - Examples

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
    const newArray = map(arr, plusone); // [2,3,4]

The function increases each value in the array by one. 
*/

/* NOTE - Results

submitted at Apr 27, 2024 23:54

runtime 50ms and beats 65.15% of users with JavaScript

memory 48.61 MB and beats 69.31% of users with JavaScript
*/
