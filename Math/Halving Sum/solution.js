function halvingSum(n) {
  let currentValue = n;
  const result = [n];

  while (currentValue > 1) {
    currentValue = Math.floor(currentValue / 2);
    result.push(currentValue);
  }

  return result.reduce((sum, cur) => (sum += cur), 0);
}

/* NOTE Examples

25  =>  25 + 12 + 6 + 3 + 1 = 47
*/
