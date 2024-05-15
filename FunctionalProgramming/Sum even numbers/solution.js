function sumEvenNumbers(input) {
  return input.reduce((sum, cur) => (cur % 2 === 0 ? sum + cur : sum), 0);
}

/* NOTE Examples

[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0
*/
