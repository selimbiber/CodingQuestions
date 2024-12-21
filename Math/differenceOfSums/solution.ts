function differenceOfSums(n: number, m: number): number {
  const nums: number[] = Array.from({ length: n }, (_, index) => index + 1);
  const divisiblesSum: number = nums
    .filter((num) => num % m === 0)
    .reduce((total, value) => total + value, 0);
  const nonDivisiblesSum: number = nums
    .filter((num) => num % m !== 0)
    .reduce((total, value) => total + value, 0);

  return nonDivisiblesSum - divisiblesSum;
}
