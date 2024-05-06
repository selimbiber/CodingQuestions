const fizzBuzz = function (n) {
  const result = [];

  for (let num = 1; num <= n; num++) {
    let value = "";

    if (num % 3 === 0) value += "Fizz";
    if (num % 5 === 0) value += "Buzz";
    if (value === "") value = num.toString();

    result.push(value);
  }

  return result;
};

/* NOTE - Examples

Input: n = 3
Output: ["1","2","Fizz"]
*/

/* NOTE - Results

submitted at May 06, 2024 00:04

runtime 51ms and beats 48.67%of users with JavaScript

memory 52.28 MB and beats 37.96% of users with JavaScript
*/
