function divisibleBy(numbers, divisor) {
  return numbers.filter((num) => num % divisor === 0);
}

/* NOTE Example

[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/
