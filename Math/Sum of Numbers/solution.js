function getSum(a, b) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  let sum = 0;

  for (let i = start; i <= end; i++) sum += i;

  return sum;
}

/* NOTE Examples

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/
