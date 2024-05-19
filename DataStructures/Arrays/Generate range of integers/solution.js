function generateRange(min, max, step) {
  const result = [];

  for (let i = min; i <= max; i += step) {
    result.push(i);
  }

  return result;
}

/* NOTE Examples

(1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
(-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
(1, 15, 20) -> [1]
*/
