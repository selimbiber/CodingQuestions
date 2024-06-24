const trimMean = function (arr) {
  arr.sort((a, b) => a - b);

  const n = arr.length;
  const k = Math.floor(0.05 * n);
  const trimmedArray = arr.slice(k, n - k);
  const mean =
    trimmedArray.reduce((total, value) => total + value, 0) / trimmedArray.length;

  return mean;
};

/* NOTE - Results
  
submitted at Jun 22, 2024 17:01
  
runtime 57ms and beats 62.04% of users with JavaScript

memory 51.36 MB and beats 18.25% of users with JavaScript
*/
