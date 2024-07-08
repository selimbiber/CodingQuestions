const reverse = function (x) {
  const MAX_INT = Math.pow(2, 31) - 1;
  const MIN_INT = -Math.pow(2, 31);

  const y = x.toString();

  if (y.startsWith("-")) {
    const reversed = "-" + y.slice(1).split("").reverse().join("");
    return parseInt(reversed) < MIN_INT ? 0 : parseInt(reversed);
  }

  const reversed = y.split("").reverse().join("");
  return parseInt(reversed) > MAX_INT ? 0 : parseInt(reversed);
};

/* NOTE - Results
  
submitted at Jul 07, 2024 23:56
  
runtime 76ms and beats 49.22% of users with JavaScript

memory 53.10 MB and beats 29.32% of users with JavaScript
*/
