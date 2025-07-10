function isBalanced(num) {
  const digits = num.split("").map(Number);
  let sumOfEvens = 0;
  let sumOfOdds = 0;

  for (const digit of digits) {
    if (i % 2 === 0) sumOfEvens += digit;
    else sumOfOdds += digit;
  }

  return sumOfEvens === sumOfOdds;
}

// Example usage:
console.log(isBalanced("1230")); // true
console.log(isBalanced("1231")); // false