function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError("Input must be between 0 and 12.");

  let result = 1;

  for (let i = n; i > 0; i--) {
    result *= i;
  }

  return result;
}
