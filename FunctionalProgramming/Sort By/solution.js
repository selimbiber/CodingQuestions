const sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

/* Results

submitted at Dec 02, 2024 23:25

runtime 117ms and beats 88.75% of users with JavaScript

memory 65.06 MB and beats 83.14% of users with JavaScript
*/
